import { defineConfig4CustomTheme, UserPlugins } from "vuepress/config";

export default defineConfig4CustomTheme({
  locales: {
    "/": {
      lang: "zh-CN",
      title: "***文档说明",
      description: "VuePress静态资源站点模板",
    },
  },
  base: "/vue2_source_code/",
  themeConfig: {
    nav: [
      { text: "首页", link: "/index.md" },
      {
        //导航栏和侧边栏的字段属性不一样
        text: "模板目录",
        items: [{ text: "测试用例", link: "/demo/test.md" }],
      },
    ],
    sidebar: [
      {
        title: "模板目录",
        children: [{ title: "测试用例", path: "/demo/test.md" }],
      },
    ],
    logo: "/img/logo.png",
    repo: "forfreeagainst/vue2_source_code",
    searchMaxSuggestions: 10,
    docsDir: "docs",
    footer: {
      createYear: 2024,
      copyrightInfo:
        'vue2_source_code | <a href="https://github.com/forfreeagainst/vue2_source_code" target="_blank">github</a>',
    },
    extendFrontmatter: {
      author: {
        name: "durant",
        link: "https://github.com/forfreeagainst/vue2_source_code",
      },
    },
  },
  head: [
    ["link", { rel: "icon", href: "/img/logo.png" }],
    [
      "meta",
      {
        name: "keywords",
        content: "VuePress静态资源站点模板",
      },
    ],
  ],
  plugins: <UserPlugins>[
    [
      "one-click-copy",
      {
        copySelector: [
          'div[class*="language-"] pre',
          'div[class*="aside-code"] aside',
        ],
        copyMessage: "复制成功",
        duration: 1000,
        showInMobile: false,
      },
    ],
    [
      "vuepress-plugin-zooming",
      {
        selector: ".theme-vdoing-content img:not(.no-zoom)",
        options: {
          bgColor: "rgba(0,0,0,0.6)",
        },
      },
    ],
  ],
  extraWatchFiles: [".vuepress/config.ts"],
});
