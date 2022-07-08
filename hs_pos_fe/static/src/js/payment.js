odoo.define("hs_pos_fe.payment", function (require) {
  "use strict";

  const PaymentScreen = require("point_of_sale.PaymentScreen");
  const Registries = require("point_of_sale.Registries");

  const InvoiceButtonPaymentScreen = (PaymentScreen) =>
    class extends PaymentScreen {
      constructor() {
        super(...arguments);

        this.toggleIsToInvoice();
      }
      toggleIsToInvoice() {
        super.toggleIsToInvoice();
        this.currentOrder.set_to_invoice(true);
      }
    };

  Registries.Component.extend(PaymentScreen, InvoiceButtonPaymentScreen);
  return PaymentScreen;
});
