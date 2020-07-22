define({
  "name": "BTC,USDT交易站开放API",
  "version": "3.0.0",
  "description": "",
  "title": "交易站开放平台",
  "url": "https://tgapi.*.*/v2",
  "license": "MIT",
  "author": "Jack",
  "order": [
    "账户",
    "广告",
    "交易"
  ],
  "header": {
    "title": "文档说明",
    "content": "<h2>欢迎大家使用本平台进行虚拟资产交易</h2>\n<p>##在您计划接入本平台API之前，您需要仔细阅读以下事项：</p>\n<ul>\n<li>请勿滥用API,如系统检测到滥用API将会冻结账户，请求速率限制为 120次/min</li>\n<li>请注意一下所有接口数据部分都非明文传输，ACCOUNTID 除外，ACCOUNTID在telegram平台上面去获取</li>\n<li>接入平台前您需要主动联系官方邮箱（请备注自己的UID）,经过我们客服验证本人后，您需要支付押金,请注意通过API交易的订单冻结资金最高不超过押金的80%(不叠加计算telegram前台下单的冻结资金)，例如押金10BTC，通过API交易的订单所冻结资金不超过8BTC，押金机制的主要目的在于净化交易环境，退押金需要提前24小时报备，退押金后所有API将无法为您服务。</li>\n<li>支付完押金后，我们会分发给您具体API服务区地址，再发送给你私钥，所有API数据都需要用私钥加密然后传输</li>\n</ul>\n<h3>押金档次表</h3>\n<table>\n<thead>\n<tr>\n<th>档次</th>\n<th style=\"text-align:right\">金额</th>\n<th style=\"text-align:center\">最高冻结额度</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>基础档次</td>\n<td style=\"text-align:right\">10BTC</td>\n<td style=\"text-align:center\">8BTC</td>\n</tr>\n<tr>\n<td>标准档次</td>\n<td style=\"text-align:right\">50BTC</td>\n<td style=\"text-align:center\">40BTC</td>\n</tr>\n<tr>\n<td>尊贵档次</td>\n<td style=\"text-align:right\">1000BTC</td>\n<td style=\"text-align:center\">80BTC</td>\n</tr>\n</tbody>\n</table>\n"
  },
  "footer": {
    "title": "文档结尾",
    "content": "<p>对文档有任何问题需要咨询请联系官方邮箱,或者通过前台在线客服反馈</p>\n"
  },
  "sampleUrl": false,
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2020-07-22T02:49:20.590Z",
    "url": "http://apidocjs.com",
    "version": "0.24.0"
  }
});
