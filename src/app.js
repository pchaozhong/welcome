// CSS
require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('./cover.css');
require('./ie10-viewport-bug-workaround.css');

// JS
require('./ie8-responsive-file-warning');
require('./ie10-viewport-bug-workaround');

// HTML TODO: ひとまずそのまま。しんどくなったらテンプレートエンジン等導入
require("file-loader?name=html/[name].[ext]!./index.html");
