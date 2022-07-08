odoo.define("hs_pos_fe.order_receipt", function (require) {
  "use strict";

  var OrderReceipt = require("point_of_sale.OrderReceipt");
  const Registries = require("point_of_sale.Registries");

  const feOrderReceipt = (OrderReceipt) =>
    class extends OrderReceipt {
      constructor() {
        super(...arguments);
        console.log(this);
        // this._receiptEnv = this.props.order.getOrderReceiptEnv();
      }

      fe_receipt_render() {
        return {
          cufe: localStorage.getItem("cufe"),
          qr_code: localStorage.getItem("qr_code"),
          qr_img:
            "/web/image?model=pos.order&id=" +
            localStorage.getItem("id") +
            "&field=qr_code",
          is_pos: localStorage.getItem("is_pos"),
        };
      }
    };

  Registries.Component.extend(OrderReceipt, feOrderReceipt);
  return OrderReceipt;
});
