var path = require('path'),
    fs = require('fs');

//这个函数会处理路径
//假如路径最后一层为名字的html存在，则返回html
//否则返回 404
module.exports = function (req, res) {
  if (!res.headersSent) {
    let file_name = path.basename(req.path).replace('.html', '');
    let base_path = `${__dirname}/../public/`;
    let file_path = path.join(base_path, `${file_name}.html`);
    console.log(file_path);
    fs.exists(file_path, exist => {
      if (exist) {
        res.sendFile(file_path);
      } else {
        res.status(404).sendFile(path.join(base_path, '404.html'));
      }
    })
  }
}