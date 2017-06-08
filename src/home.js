// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './lib/cover.css';
import './lib/ie10-viewport-bug-workaround.css';

// JS
import 'bootstrap';
import './lib/ie8-responsive-file-warning';
import './lib/ie10-viewport-bug-workaround';

// HTML TODO: ひとまずそのまま。しんどくなったらテンプレートエンジン等導入
import "file-loader?name=html/[name].[ext]!./index.html";
