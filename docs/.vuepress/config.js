// const path = require("path")
// const fs = require("fs")
// const htmlFolder = path.join(__dirname, "../html/")
// const html = fs.readdirSync(htmlFolder).filter((c) => c !== "README.md")
const visualizationSidebar = require("./sidebars/visualization")
const mobileSidebar = require("./sidebars/mobile")
const gameSidebar = require("./sidebars/game")
const portableSidebar = require("./sidebars/portable")

module.exports = {
  title: "领域分支",
  description: "前端领域分支",
  themeConfig: {
    nav: [
      {
        text: "可视化",
        items: [
          {
            text: "知识图谱",
            link: "/visualization/",
          },
          // {
          //   text: "教程/书籍",
          //   items: [{ text: "javascript高级程序设计", link: "/html-course1/" }],
          // },
        ],
      },
      {
        text: "移动Web",
        items: [
          {
            text: "知识图谱",
            link: "/mobile/",
          },
        ],
      },
      {
        text: "游戏开发",
        items: [
          {
            text: "知识图谱",
            link: "/game/",
          },
        ],
      },
      {
        text: "便携式设备",
        items: [
          {
            text: "知识图谱",
            link: "/portable/",
          },
        ],
      },
    ],
    sidebarDepth: 3,
    sidebar: {
      "/visualization/": visualizationSidebar,
      "/mobile/": mobileSidebar,
      "/game/": gameSidebar,
      "/portable/": portableSidebar,
    },
  },
}
