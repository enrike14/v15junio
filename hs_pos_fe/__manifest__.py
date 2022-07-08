# -*- coding: utf-8 -*-
{
    "name": "hs_pos_fe",
    "summary": """
       Electronic Invoice POS""",
    "description": """
        Long description of module's purpose
    """,
    "author": "HS Consult",
    "website": "http://www.hconsul.com/odoo/",
    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/master/odoo/addons/base/module/module_data.xml
    # for the full list
    "category": "Uncategorized",
    "version": "0.1",
    "licence": "OPL-1",
    # any module necessary for this one to work correctly
    "depends": ["hs_electronic_invoice", "point_of_sale"],
    # always loaded
    "data": [
        # "views/assets.xml",
        "views/invoice_pos_conf.xml"
    ],
    # only loaded in demonstration mode
    """     "qweb": [
        "static/src/xml/OrderReceipt.xml",
        "static/src/xml/FiscalButton.xml",

    ], """
    'assets': {
        'point_of_sale.assets': [
            'hs_pos_fe/static/src/css/custom_order.css',
            'hs_pos_fe/static/src/js/FiscalButton.js',
            'hs_pos_fe/static/src/js/models.js',
            'hs_pos_fe/static/src/js/order_receipt.js',
            'hs_pos_fe/static/src/js/payment.js',
        ],
        'web.assets_qweb': [
            "hs_pos_fe/static/src/xml/OrderReceipt.xml",
            "hs_pos_fe/static/src/xml/FiscalButton.xml",
        ],

    },
}
