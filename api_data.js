define({ "api": [
  {
    "type": "Post",
    "url": "/trade/appealorder",
    "title": "申诉订单",
    "group": "交易",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderid",
            "description": "<p>订单号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "入参示例",
          "content": "{\n \"orderid\": \"2020072140459006\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "反参示例",
          "content": "{\n  \"success\":True\n}",
          "type": "json"
        }
      ]
    },
    "version": "3.0.0",
    "filename": "src/file1.js",
    "groupTitle": "交易",
    "name": "PostTradeAppealorder"
  },
  {
    "type": "Post",
    "url": "/trade/cancelpay",
    "title": "取消付款",
    "group": "交易",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderid",
            "description": "<p>订单号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "入参示例",
          "content": "{\n \"orderid\": \"2020072140459006\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "反参示例",
          "content": "{\n  \"success\":True\n}",
          "type": "json"
        }
      ]
    },
    "version": "3.0.0",
    "filename": "src/file1.js",
    "groupTitle": "交易",
    "name": "PostTradeCancelpay"
  },
  {
    "type": "Post",
    "url": "/trade/confirmpay",
    "title": "确认付款",
    "group": "交易",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderid",
            "description": "<p>订单号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "入参示例",
          "content": "{\n \"orderid\": \"2020072140459006\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "反参示例",
          "content": "{\n  \"success\":True\n}",
          "type": "json"
        }
      ]
    },
    "version": "3.0.0",
    "filename": "src/file1.js",
    "groupTitle": "交易",
    "name": "PostTradeConfirmpay"
  },
  {
    "type": "Post",
    "url": "/trade/fastbuy",
    "title": "快速买单",
    "group": "交易",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "amount",
            "description": "<p>数量</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "price",
            "description": "<p>价格</p>"
          },
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": false,
            "field": "ischat",
            "description": "<p>是否可联系</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "symbol",
            "description": "<p>币种 目前仅支持 BTC USDT</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "paytype",
            "description": "<p>期望收款类型 目前仅支持 1 银行卡 2 支付宝 3 微信 4 paypal</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "入参示例",
          "content": "{\n \"amount\": 1.4,\n \"price\": 65000,\n \"symbol\": \"BTC\",\n \"ischat\": False,\n \"paytype\": 1,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "反参示例",
          "content": "{\n\t\"orderid\": 2020072140459007,\n\t\"ischat\": true,\n\t\"tgusername\": \"klinfbr\",\n\t\"symbol\": \"btc\",\n\t\"pay_amount\": 91000,\n\t\"amount\": 1.4,\n\t\"price\": 65000,\n\t\"paymsg\": \"东莞石排支行  6228480******715977 中国农业银行 王*嫦\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "3.0.0",
    "filename": "src/file1.js",
    "groupTitle": "交易",
    "name": "PostTradeFastbuy"
  },
  {
    "type": "Post",
    "url": "/trade/fastsell",
    "title": "快速卖单",
    "group": "交易",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "amount",
            "description": "<p>数量</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "price",
            "description": "<p>价格</p>"
          },
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": false,
            "field": "ischat",
            "description": "<p>是否可联系</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "symbol",
            "description": "<p>币种 目前仅支持 BTC USDT</p>"
          },
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": false,
            "field": "isAccountShow",
            "description": "<p>是否公示收款方式</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "入参示例",
          "content": "{\n \"amount\": 1.4,\n \"price\": 65000,\n \"symbol\": \"BTC\",\n \"ischat\": False,\n \"isAccountShow\": True,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "反参示例",
          "content": "{\n\t\"orderid\": 2020072140459007,\n\t\"ischat\": true,\n\t\"tgusername\": \"klinfbr\",\n\t\"symbol\": \"btc\",\n\t\"get_amount\": 91000,\n\t\"amount\": 1.4,\n\t\"price\": 65000\n}",
          "type": "json"
        }
      ]
    },
    "version": "3.0.0",
    "filename": "src/file1.js",
    "groupTitle": "交易",
    "name": "PostTradeFastsell"
  },
  {
    "type": "Post",
    "url": "/trade/freed",
    "title": "确认收款释放订单",
    "group": "交易",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderid",
            "description": "<p>订单号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "入参示例",
          "content": "{\n \"orderid\": \"2020072140459006\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "反参示例",
          "content": "{\n  \"success\":True\n}",
          "type": "json"
        }
      ]
    },
    "version": "3.0.0",
    "filename": "src/file1.js",
    "groupTitle": "交易",
    "name": "PostTradeFreed"
  },
  {
    "type": "Post",
    "url": "/trade/getorder",
    "title": "获取订单状态",
    "group": "交易",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderid",
            "description": "<p>订单号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "入参示例",
          "content": "{\n \"orderid\": \"2020072140459006\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "反参示例",
          "content": "{\n\t\"orderid\": 2020072140459007,\n\t\"status\": 1,\n\t\"expiration\": 600,\n\t\"symbol\": \"btc\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "3.0.0",
    "filename": "src/file1.js",
    "groupTitle": "交易",
    "name": "PostTradeGetorder"
  },
  {
    "type": "Post",
    "url": "/trade/surrender",
    "title": "败诉订单",
    "group": "交易",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderid",
            "description": "<p>订单号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "入参示例",
          "content": "{\n \"orderid\": \"2020072140459006\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "反参示例",
          "content": "{\n  \"success\":True\n}",
          "type": "json"
        }
      ]
    },
    "version": "3.0.0",
    "filename": "src/file1.js",
    "groupTitle": "交易",
    "name": "PostTradeSurrender"
  },
  {
    "type": "Post",
    "url": "/ad/cancel",
    "title": "取消广告",
    "group": "广告",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderid",
            "description": "<p>订单号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "symbol",
            "description": "<p>币种 目前仅支持 BTC USDT</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "入参示例",
          "content": "{\n \"orderid\": \"2020072140459006\",\n \"symbol\": \"BTC\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "反参示例",
          "content": "{\n  \"success\":True\n}",
          "type": "json"
        }
      ]
    },
    "version": "3.0.0",
    "filename": "src/file1.js",
    "groupTitle": "广告",
    "name": "PostAdCancel"
  },
  {
    "type": "Post",
    "url": "/ad/myad",
    "title": "获取自己发布的广告",
    "group": "广告",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "symbol",
            "description": "<p>币种 目前仅支持 BTC USDT</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "入参示例",
          "content": "{\n \"symbol\": \"BTC\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "反参示例",
          "content": "[{\n\t\t\"orderid\": 2020072140459006,\n\t\t\"ischat\": true,\n\t\t\"type\": \"buy\",\n\t\t\"paytype\": 2,\n\t\t\"symbol\": \"btc\",\n\t\t\"amount\": 1.4,\n\t\t\"price\": 65000,\n\t\t\"paymsg\": null\n\n\t},\n{\n\t\t\"orderid\": 2020072140459007,\n\t\t\"ischat\": true,\n\t\t\"type\": \"sell\",\n\t\t\"paytype\": 0,\n\t\t\"symbol\": \"btc\",\n\t\t\"amount\": 1.4,\n\t\t\"price\": 65000,\n\t\t\"paymsg\": \"东莞石排支行  6228480******715977 中国农业银行 王*嫦\"\n\t}\n]",
          "type": "json"
        }
      ]
    },
    "version": "3.0.0",
    "filename": "src/file1.js",
    "groupTitle": "广告",
    "name": "PostAdMyad"
  },
  {
    "type": "Post",
    "url": "/ad/postbuy",
    "title": "发布买入广告",
    "group": "广告",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "amount",
            "description": "<p>数量</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "price",
            "description": "<p>价格(人民币)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "symbol",
            "description": "<p>币种 目前仅支持 BTC USDT</p>"
          },
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": false,
            "field": "ischat",
            "description": "<p>是否可被联系</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "paytype",
            "description": "<p>期望收款类型 目前仅支持 1 银行卡 2 支付宝 3 微信 4 paypal</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "入参示例",
          "content": "{\n \"amount\": 1,\n \"price\": 65000,\n \"symbol\": \"BTC\",\n \"ischat\": False,\n \"paytype\": 1,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "反参示例",
          "content": "{\n \"success\":True,\n\t\"orderid\": 2020072140459006\n}",
          "type": "json"
        }
      ]
    },
    "version": "3.0.0",
    "filename": "src/file1.js",
    "groupTitle": "广告",
    "name": "PostAdPostbuy"
  },
  {
    "type": "Post",
    "url": "/ad/postsell",
    "title": "发布卖出广告",
    "group": "广告",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "amount",
            "description": "<p>数量</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "price",
            "description": "<p>价格(人民币)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "symbol",
            "description": "<p>币种 目前仅支持 BTC USDT</p>"
          },
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": false,
            "field": "ischat",
            "description": "<p>是否可被联系</p>"
          },
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": false,
            "field": "isAccountShow",
            "description": "<p>是否公示收款方式</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "入参示例",
          "content": "{\n \"amount\": 1,\n \"price\": 65000,\n \"symbol\": \"BTC\",\n \"ischat\": False,\n \"isAccountShow\": True,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "反参示例",
          "content": "{\n \"success\":True,\n\t\"orderid\": 2020072140459006\n}",
          "type": "json"
        }
      ]
    },
    "version": "3.0.0",
    "filename": "src/file1.js",
    "groupTitle": "广告",
    "name": "PostAdPostsell"
  },
  {
    "type": "Post",
    "url": "/account",
    "title": "查询余额",
    "group": "账户",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "symbol",
            "description": "<p>币种 目前仅支持 BTC USDT</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "入参示例",
          "content": "{\n \"symbol\": \"BTC\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "反参示例",
          "content": "{\n\t\"banlance\": 5,\n\t\"freeze\": 2\n}",
          "type": "json"
        }
      ]
    },
    "version": "3.0.0",
    "filename": "src/file1.js",
    "groupTitle": "账户",
    "name": "PostAccount"
  }
] });