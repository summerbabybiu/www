var path = require('path'),
    fs = require('fs'),
    config = require('../config');

exports.error_handle = function(error, req, res, next) {
  if (error) {
    let code = error.code || 400;
    res.status(code).send(error.message);
  } else {
    next();
  }
}
//这个函数会处理路径
//假如路径最后一层为名字的html存在，则返回html
//否则返回 404
exports.not_found = function (req, res) {
  if (!res.headersSent) {
    let base_path = config.public_folder;
    if (config.is_development) {
      let file_name = path.basename(req.path).replace('.html', '');
      let file_path = path.join(base_path, `${file_name}.html`);
      fs.exists(file_path, exist => {
        if (exist) {
          res.sendFile(file_path);
        } else {
          res.status(404).sendFile(path.join(base_path, '404.html'));
        }
       })
    } else {
      res.status(404).sendFile(path.join(base_path, '404.html'));
    }
  }
}