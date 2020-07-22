/**
 * @api {Post} /ad/postbuy 发布买入广告
 * @apiGroup 广告
 *
 * @apiHeader ACCOUNTID 用户UID
 * @apiParam {Float} amount 数量
 * @apiParam {Float} price 价格(人民币)
 * @apiParam {String} symbol 币种 目前仅支持 BTC USDT
 * @apiParam {Bool} ischat 是否可被联系
 * @apiParam {Int} paytype 期望收款类型 目前仅支持 1 银行卡 2 支付宝 3 微信 4 paypal
 *
 * @apiParamExample {json} 入参示例
 * {
 *  "amount": 1,
 *  "price": 65000,
 *  "symbol": "BTC",
 *  "ischat": False,
 *  "paytype": 1,
 * }
 *
 * @apiSuccessExample  {json} 反参示例
 * {
 *  "success":True,
 *	"orderid": 2020072140459006
 * }
 * @apiVersion 3.0.0
 */

/**
 * @api {Post} /ad/postsell 发布卖出广告
 * @apiGroup 广告
 *
* @apiHeader ACCOUNTID 用户UID
 * @apiParam {Float} amount 数量
 * @apiParam {Float} price 价格(人民币)
 * @apiParam {String} symbol 币种 目前仅支持 BTC USDT
 * @apiParam {Bool} ischat 是否可被联系
 * @apiParam {Bool} isAccountShow 是否公示收款方式
 * @apiParamExample {json} 入参示例
 * {
 *  "amount": 1,
 *  "price": 65000,
 *  "symbol": "BTC",
 *  "ischat": False,
 *  "isAccountShow": True,
 * }
 *
 * @apiSuccessExample  {json} 反参示例
 * {
 *  "success":True,
 *	"orderid": 2020072140459006
 * }
 * @apiVersion 3.0.0
 */
/**
 * @api {Post} /ad/cancel 取消广告
 * @apiGroup 广告
 *
 * @apiHeader ACCOUNTID 用户UID
 * @apiParam {String} orderid 订单号
 * @apiParam {String} symbol 币种 目前仅支持 BTC USDT
 * @apiParamExample {json} 入参示例
 * {
 *  "orderid": "2020072140459006",
 *  "symbol": "BTC"
 * }
 *
 * @apiSuccessExample  {json} 反参示例
 * {
 *   "success":True
 * }
 * @apiVersion 3.0.0
 */
/**
 * @api {Post} /ad/myad 获取自己发布的广告
 * @apiGroup 广告
 *
 * @apiHeader ACCOUNTID 用户UID
 * @apiParam {String} symbol 币种 目前仅支持 BTC USDT
 * @apiParam {String} orderid 订单号,非必传
 * @apiParam {Int} page 页码 默认1
 * @apiParam {Int} pagesize 单页订单数 默认10
 * @apiParamExample {json} 入参示例
 * {
 *  "symbol": "BTC"
 * }
 *
 * @apiSuccessExample  {json} 反参示例
 *[{
*		"orderid": 2020072140459006,
*		"ischat": true,
*		"type": "buy",
*		"paytype": 2,
*		"symbol": "BTC",
*		"amount": 1.4,
*		"price": 65000,
*		"paymsg": null
*
*	},
 *{
*		"orderid": 2020072140459007,
*		"ischat": true,
*		"type": "sell",
*		"paytype": 0,
*		"symbol": "BTC",
*		"amount": 1.4,
*		"price": 65000,
*		"paymsg": "东莞石排支行  6228480******715977 中国农业银行 王*嫦"
*	}
 *]
 * @apiVersion 3.0.0
 */
/**
 * @api {Post} /trade/fastbuy 快速买单
 * @apiGroup 交易
 *
 * @apiHeader ACCOUNTID 用户UID
 * @apiParam {Float} amount 数量
 * @apiParam {Float} price 价格
 * @apiParam {Bool} ischat 是否可联系
 * @apiParam {String} symbol 币种 目前仅支持 BTC USDT
 * @apiParam {Int} paytype 期望收款类型 目前仅支持 1 银行卡 2 支付宝 3 微信 4 paypal
 * @apiParamExample {json} 入参示例
 * {
 *  "amount": 1.4,
 *  "price": 65000,
 *  "symbol": "BTC",
 *  "ischat": False,
 *  "paytype": 1,
 * }
 *
 * @apiSuccessExample  {json} 反参示例
 *{
*	"orderid": 2020072140459007,
*	"ischat": true,
*	"tgusername": "chat_user_name",
*	"symbol": "BTC",
*	"pay_amount": 91000,
*	"amount": 1.4,
*	"price": 65000,
*	"paymsg": "东莞石排支行  6228480******715977 中国农业银行 王*嫦"
*}
 * @apiVersion 3.0.0
 */
/**
 * @api {Post} /trade/fastsell 快速卖单
 * @apiGroup 交易
 *
 * @apiHeader ACCOUNTID 用户UID
 * @apiParam {Float} amount 数量
 * @apiParam {Float} price 价格
 * @apiParam {Bool} ischat 是否可联系
 * @apiParam {String} symbol 币种 目前仅支持 BTC USDT
 * @apiParam {Bool} isAccountShow 是否公示收款方式
 * @apiParamExample {json} 入参示例
 * {
 *  "amount": 1.4,
 *  "price": 65000,
 *  "symbol": "BTC",
 *  "ischat": False,
 *  "isAccountShow": True,
 * }
 *
 * @apiSuccessExample  {json} 反参示例
 *{
*	"orderid": 2020072140459007,
*	"ischat": true,
*	"tgusername": "chat_user_name",
*	"symbol": "BTC",
*	"get_amount": 91000,
*	"amount": 1.4,
*	"price": 65000
*}
 * @apiVersion 3.0.0
 */

/**
 * @api {Post} /trade/getorder 获取订单状态
 * @apiGroup 交易
 *
 * @apiHeader ACCOUNTID 用户UID
 * @apiParam {String} orderid 订单号
 * @apiParamExample {json} 入参示例
 * {
 *  "orderid": "2020072140459006"
 * }
 *
 * @apiSuccessExample  {json} 反参示例
 *{
*	"orderid": 2020072140459007,
*	"status": 1,
*	"expiration": 600,
*	"symbol": "BTC",
 *	"amount": 1.4,
 *	"price": 65000,
 *		"ischat": true,
 *		"type": "sell",
 *		"paytype": 0,
 *		"paymsg": "东莞石排支行  6228480******715977 中国农业银行 王*嫦"
 *
*}
 * @apiSuccess {Int} status 订单状态 0 等待交易 1正在交易 2付款完成，等待释放 3交易完成 4申诉状态 -1取消状态
 * @apiSuccess {Int} expiration 过期时间，只有status为1正在交易状态才会有值
 * @apiSuccess {Int} paytype 收款类型 0未指定 1银行卡 2支付宝 3微信 4paypal
 * @apiVersion 3.0.0
 */
/**
 * @api {Post} /trade/confirmpay 确认付款
 * @apiGroup 交易
 *
 * @apiHeader ACCOUNTID 用户UID
 * @apiParam {String} orderid 订单号
 * @apiParamExample {json} 入参示例
 * {
 *  "orderid": "2020072140459006"
 * }
 *
 * @apiSuccessExample  {json} 反参示例
 * {
 *   "success":True
 * }
 * @apiVersion 3.0.0
 */
/**
 * @api {Post} /trade/cancelpay 取消付款
 * @apiGroup 交易
 *
 * @apiHeader ACCOUNTID 用户UID
 * @apiParam {String} orderid 订单号
 * @apiParamExample {json} 入参示例
 * {
 *  "orderid": "2020072140459006"
 * }
 *
 * @apiSuccessExample  {json} 反参示例
 * {
 *   "success":True
 * }
 * @apiVersion 3.0.0
 */

/**
 * @api {Post} /trade/appealorder 申诉订单
 * @apiGroup 交易
 *
 * @apiHeader ACCOUNTID 用户UID
 * @apiParam {String} orderid 订单号
 * @apiParamExample {json} 入参示例
 * {
 *  "orderid": "2020072140459006"
 * }
 *
 * @apiSuccessExample  {json} 反参示例
 * {
 *   "success":True
 * }
 * @apiVersion 3.0.0
 */

/**
 * @api {Post} /trade/surrender 败诉订单
 * @apiGroup 交易
 *
 * @apiHeader ACCOUNTID 用户UID
 * @apiParam {String} orderid 订单号
 * @apiParamExample {json} 入参示例
 * {
 *  "orderid": "2020072140459006"
 * }
 *
 * @apiSuccessExample  {json} 反参示例
 * {
 *   "success":True
 * }
 * @apiVersion 3.0.0
 */
/**
 * @api {Post} /trade/freed 确认收款释放订单
 * @apiGroup 交易
 *
 * @apiHeader ACCOUNTID 用户UID
 * @apiParam {String} orderid 订单号
 * @apiParamExample {json} 入参示例
 * {
 *  "orderid": "2020072140459006"
 * }
 *
 * @apiSuccessExample  {json} 反参示例
 * {
 *   "success":True
 * }
 * @apiVersion 3.0.0
 */
/**
 * @api {Post} /account 查询余额
 * @apiGroup 账户
 *
 * @apiHeader ACCOUNTID 用户UID
 * @apiParam {String} symbol 币种 目前仅支持 BTC USDT
 * @apiParamExample {json} 入参示例
 * {
 *  "symbol": "BTC"
 * }
 *
 * @apiSuccessExample  {json} 反参示例
 *{
*	"banlance": 5,
*	"freeze": 2
*}
 * @apiVersion 3.0.0
 */
