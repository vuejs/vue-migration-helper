module.exports = function (file) {
  return file.match(/([^\/\\]+)[\/\\][^\/\\]+\.js/)[1]
}
