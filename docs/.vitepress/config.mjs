import { defineConfig } from 'vitepress'
import timeline from "vitepress-markdown-timeline";
import { qqSvg, emailSvg, afdianSvg } from "./icon.mjs";
import { loadClarityTag } from './msClarity.mjs';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  
  lang: "zh-CN",
  title: 'MCServerLauncher 2',
  description: '一个简洁、全能的Minecraft开服器',
  head: [['link', { rel: 'icon', href: 'https://img.fastmirror.net/s/2023/12/03/656c4416b04b8.png' }]],
  markdown: {
    config: (md) => {
      md.use(timeline)
    }
  },
  cleanUrls: true,
  sitemap: {
    hostname: 'https://mcsl.com.cn/mcsl2'
  },
  enhanceApp({ app }) {
    loadClarityTag();
  },
  vite: {
    server: {
      proxy: {
        "/mcsl2/api": {
          target: "https://api.mcsl.com.cn",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  },
  themeConfig: {
    outlineTitle: "目录",
    lastUpdated: {
      text: "最后更新",
    },
    logo: "https://img.fastmirror.net/s/2023/12/03/656c4416b04b8.png",
    nav: [
      { text: '主页', link: '/mcsl2/' },
      { text: '下载', link: '/mcsl2/download' },
      { text: '文档', link: '/mcsl2/doc/' },
      { text: '更新日志', link: '/mcsl2/update-log/' },
      { text: '鸣谢', link: '/mcsl2/acknowledgements' },
      { text: '相关链接', link: '/mcsl2/links/' },
      { text: '永久乐子', link: '/mcsl2/joker' }
    ],
    sidebar: [
      {
        text: '下载',
        link: '/mcsl2/download',
      },
      {
        text: '参加内测',
        link: '/mcsl2/join-preview',
      },
      {
        text: '鸣谢',
        link: '/mcsl2/acknowledgements',
      },
      {
        text: '相关链接',
        link: '/mcsl2/links/',
      },
      {
        text: '用户使用文档',
        link: '/mcsl2/doc/user/',
        collapsed: true,
        items: [
          {
            text: '快速上手',
            link: '/mcsl2/doc/user/get-started',
          },
          {
            text: '配置服务器',
            link: '/mcsl2/doc/user/configure-server',
          },
          {
            text: '管理服务器',
            link: '/mcsl2/doc/user/manage-server',
          },
          {
            text: '下载资源',
            link: '/mcsl2/doc/user/downloads',
          },
          {
            text: '终端',
            link: '/mcsl2/doc/user/console',
          },
          {
            text: '插件',
            link: '/mcsl2/doc/user/plugins',
          },
        ]
      },
      {
        text: '开发文档',
        link: '/mcsl2/doc/dev/',
        collapsed: true,
        items: [
          {
            text: '下载模块',
            link: '/mcsl2/doc/dev/downloads',
          },
          {
            text: '插件开发',
            link: '/mcsl2/doc/dev/plugins',
          },
        ]
      },
      {
        text: "更新日志",
        link: "/mcsl2/update-log/",
        collapsed: true,
        items: [
          {
            text: "v2.2.6.0",
            link: "/mcsl2/update-log/",
          },
          {
            text: "v2.2.5.1",
            link: "/mcsl2/update-log/v2.2.5.1",
          },
          {
            text: "v2.2.5.0",
            link: "/mcsl2/update-log/v2.2.5.0",
          },
          {
            text: "v2.2.4.1",
            link: "/mcsl2/update-log/v2.2.4.1",
          },
          {
            text: "v2.2.4.0",
            link: "/mcsl2/update-log/v2.2.4.0",
          },
          {
            text: "v2.2.3.8 [测试版]",
            link: "/mcsl2/update-log/v2.2.3.8",
          },
          {
            text: "v2.2.3.5 [测试版]",
            link: "/mcsl2/update-log/v2.2.3.5",
          },
          {
            text: "v2.2.3.3 [测试版]",
            link: "/mcsl2/update-log/v2.2.3.3",
          },
          {
            text: "v2.2.3.1 [热修复]",
            link: "/mcsl2/update-log/v2.2.3.1",
          },
          {
            text: "v2.2.2.4",
            link: "/mcsl2/update-log/v2.2.2.4",
          },
          {
            text: "v2.2.2.3",
            link: "/mcsl2/update-log/v2.2.2.3",
          },
          {
            text: "v2.2.2.2",
            link: "/mcsl2/update-log/v2.2.2.2",
          },
          {
            text: "v2.2.2.1",
            link: "/mcsl2/update-log/v2.2.2.1",
          },
          {
            text: "v2.2.2.0",
            link: "/mcsl2/update-log/v2.2.2.0",
          },
          {
            text: "v2.2.1.2",
            link: "/mcsl2/update-log/v2.2.1.2",
          },
          {
            text: "v2.2.1.1",
            link: "/mcsl2/update-log/v2.2.1.1",
          },
          {
            text: "v2.2.1.0",
            link: "/mcsl2/update-log/v2.2.1.0",
          },
          {
            text: "v2.2.0.1",
            link: "/mcsl2/update-log/v2.2.0.1",
          },
          {
            text: "v2.2.0.0",
            link: "/mcsl2/update-log/v2.2.0.0",
          },
          {
            text: "v2.1.3.8",
            link: "/mcsl2/update-log/v2.1.3.8",
          },
          {
            text: "v2.1.3.7",
            link: "/mcsl2/update-log/v2.1.3.7",
          },
          {
            text: "v2.1.3.5",
            link: "/mcsl2/update-log/v2.1.3.5",
          },
          {
            text: "v2.1.3-230515-0005",
            link: "/mcsl2/update-log/v2.1.3-230515-0005",
          },
          {
            text: "v2.1.3-230514-0033",
            link: "/mcsl2/update-log/v2.1.3-230514-0033",
          },
          {
            text: "v2.1.3-230512-2204",
            link: "/mcsl2/update-log/v2.1.3-230512-2204",
          },
          {
            text: "v2.0 [Demo]",
            link: "/mcsl2/update-log/v2.0",
          },
          {
            text: "v1.3",
            link: "/mcsl2/update-log/v1.3",
          },
          {
            text: "v1.2",
            link: "/mcsl2/update-log/v1.2",
          },
          {
            text: "v1.1",
            link: "/mcsl2/update-log/v1.1",
          },
          {
            text: "v1.0",
            link: "/mcsl2/update-log/v1.0",
          }
        ]
      },
      {
        text: "乐子风林水起",
        link: "/mcsl2/flsq/",
        collapsed: true,
        items: [
          {
            text: "第一传",
            link: "/mcsl2/flsq/",
          },
          {
            text: "续作",
            link: "/mcsl2/flsq/fuckFLSQ_2nd",
          }
        ]
      },
      {
        text: "乐子YML3启动器",
        link: "/mcsl2/yml3/",
      },

    ],
    footer: {
      message: '「MCServerLauncher 2 软件」已进行中华人民共和国计算机软件著作权登记，一切侵权行为将依法追究。<br>计算机软件著作权登记号: <a href="https://www.ccopyright.com.cn/">2024SR0343868</a><br>网站ICP备案号: <a href="https://beian.miit.gov.cn/">鲁 ICP 备 2023001164 号 - 2</a>',
      copyright: '&copy 2022 - 2024 MCSL开发组 保留所有权利。'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/MCSLTeam' },
      { icon: { svg: qqSvg }, link: '/links/mcsl2-qq-group' },
      { icon: { svg: emailSvg }, link: 'mailto:services@mcsl.com.cn' },
      { icon: { svg: afdianSvg }, link: '/links/mcsl-team-afdian' }
    ],
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '选择',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '向上选择',
                  navigateDownKeyAriaLabel: '向下选择',
                  closeText: '关闭',
                  closeKeyAriaLabel: '关闭'
                }
              }
            }
          }
        }
      }
    },
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    externalLinkIcon: true,
    darkModeSwitchLabel: "外观",
  },
  titleTemplate: 'MCSL2'
})
