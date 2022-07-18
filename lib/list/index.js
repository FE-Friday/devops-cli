/**
 * lib/list/index.js
 * 打印模板列表
 */

const { templates } = require('../../config');
module.exports = function () {
  console.table(templates, ['name', 'description']);
}
