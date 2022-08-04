module.exports = {
  // 模版仓库配置
  gitlab: {
    type: "gitlab",
    host: "code.canway.net",
    group: "soft-fy19-canway-devops",
    repository: "devops-frontend-libs",
    headers: {
      "cookie": "_gitlab_session=2af3806ae0cb9354eed3f83385cc7de9"
    },
  },
  // 模板配置
  templates: [
    {
      name: 'devops-iframe',
      branch: 'template-iframe-vue2',
      description: '支持devops微前端iframe模式项目模版',
    },
    {
      name: 'devops-amd',
      branch: 'template-amd-vue2',
      description: '支持devops微前端AMD模式项目模版'
    },
    {
      name: 'devops-plugin-card',
      branch: 'template-plugin-card',
      description: '支持devops卡片插件项目模板'
    }
  ]
};
