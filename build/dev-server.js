require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://0.0.0.0:' + port

var router = express.Router();

var homeData = require('../newhome.json');
var productData = require('../product.json');
var detailData = require('../productDetails.json');
var profile = require('../index.json');
var profile1 = require('../index1.json');
var loginJson = require('../login.json');
var buyJsons = require('../buyDetail.json');
var wealthJsons = require('../wealthDetail.json');
var withdraw = require('../withdraw.json');
var bankcards = require('../bankCards.json')

router.get('/home/newhome', function (req, res) {
  res.json(homeData);
});
router.get('/products/productTab', function (req, res) {
  res.json(productData);
});
router.get('/accounts/bankcards', function (req, res) {
  res.json(bankcards);
});
router.get('/products/detail',function(req, res){
  let pid = "id"+req.query.pid;
  res.json(detailData[pid]);
});
router.get('/transaction/willInvestment',function(req, res){
  let pid = "id"+req.query.pid;
  res.json(buyJsons[pid]);
});
router.get('/wealth/index',function(req, res){
  req.headers.cookie&&req.headers.cookie.indexOf('user_token')>-1 ? res.json(profile1) : res.json(profile);
});
router.get('/wealth/detail',function(req, res){
  res.json(wealthJsons);
});
router.get('/transaction/willWithdraw',function(req, res){
  res.json(withdraw);
});
router.post('/auth/login',function(req, res){
  res.json(loginJson);
});
app.use('/api3', router);

app.use(express.static('./dist'));
var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
