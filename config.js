module.exports = {
  // 模版仓库配置
  gitlab: {
    type: "gitlab",
    host: "code.canway.net",
    group: "soft-fy19-canway-devops",
    repository: "devops-frontend-libs",
    headers: {
      cookie:
        "X-DEVOPS-TENANT-ID=Canway; experimentation_subject_id=ImExMTBiZDgxLWQ2MWQtNGFkMS1iZWNjLTkzMDEwOWEyOTY0YSI%3D--7b6c1b26dc27351022f4bfa5f64701447a8234b5; event_filter=all; sidebar_collapsed=false; hide_auto_devops_implicitly_enabled_banner_1967=false; diff_view=inline; frequently_used_emojis=8ball; _gitlab_session=e5b26dbfd38ee6b3743f4c85a9986c46;  twbk_token=c4EVBWB4EaUSZdAXRtahhYo88lRJJNKEmBwpR7quhUNZ_vIkdZxYARhtzInYw38bR6P_mrkoF4Kedp-SE51ajvUfBOFj2A6fxRr7sG4PiVEHm0HpKb7rRlKLP6pHUpsxbgCKvtH-RT312rEghrprfW2jTX52_qoz6tHmpAw52X2Er6HSi3JarrbMk6Bmu9LYrGRn7MZf8j4nvVStB7vbY4JXjZiommbPLSMi_CbyG3zFZy9DTwvfE9auh2ze0TZiU6vwWB-lU2fINtitB1QY-foD8vW7zYqKd8ol2h0tX_N5iriMcbW3vNgcbDTeDIuSVySGQzF2b5iO9lnODS-fGZ4fV7jFoTaAtXhYCC0EX9NSoLXyn4Bng-xHnoYZrkTprXVZ-PJ1bDf1aKa22_1fl0Vz6OkX-btp9pZXuD4vK8UetUHsxlOsipNPRBnmS1ys9jTP2iyUaPDnHImQ8hRhtvS9P6NDKVnwgeFV_uiWO-w; blueking_language=zh-cn; X-DEVOPS-PROJECT-ID=devops; hide_auto_devops_implicitly_enabled_banner_2937=false",
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
    }
  ]
};
