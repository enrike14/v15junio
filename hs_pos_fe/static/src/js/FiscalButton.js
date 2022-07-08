odoo.define("hs_pos_fiscal.FiscalButton", function (require) {
  "use strict";

  const ReceiptScreen = require("point_of_sale.ReceiptScreen");
  const Registries = require("point_of_sale.Registries");

  const FiscalReceiptScreen = (ReceiptScreen) =>
    class extends ReceiptScreen {
      constructor() {
        super(...arguments);
      }
      async printFiscal() {
        const order = this.currentOrder;
        const orderName = order.get_name();
        const order_server_id =
          this.env.pos.validated_orders_name_server_id_map[orderName];
        await this.rpc(
          {
            model: "pos.order",
            method: "action_print_fe",
            args: [[orderName]],
            kwargs: { context: this.env.session.user_context },
          },
          {
            timeout: 30000,
            shadow: true,
          }
        )
          .then(function (file) {
            console.log(file);
            if (file) {
              console.log(file);
              var byteCharacters = atob(file);
              var byteNumbers = new Array(byteCharacters.length);
              for (var i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
              }
              var byteArray = new Uint8Array(byteNumbers);
              var file = new Blob([byteArray], {
                type: "application/pdf;base64",
              });
              var fileURL = URL.createObjectURL(file);
              window.open(fileURL);
            }
          })
          .catch(function (reason) {});
      }
      isFE() {
        return localStorage.getItem("is_pos");
      }
    };
  Registries.Component.extend(ReceiptScreen, FiscalReceiptScreen);
  return ReceiptScreen;
});
