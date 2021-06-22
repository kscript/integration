const jsyaml = require('js-yaml');

exports.parseConfig = (yaml) => {
  return jsyaml.load(yaml) || {}
}
exports.extract = (content, type) => {
  const strs = (' ' + content).split('---')
  const resObj = {
    markdown: strs.slice(0, 1).concat(strs.slice(2).join('---')).join('').slice(1),
    yaml: strs[1] || ''
  }
  return type ? resObj[type] || resObj.markdown : resObj
}