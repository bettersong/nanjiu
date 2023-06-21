module.exports = {
    title: '前端南玖',
    description: '前端南玖的博客',
    base: '/nanjiu/',
    theme: 'reco',
    author: '南玖',
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
      ],
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        logo: '/logo.png',
        type: 'blog',
        authorAvatar: '/sy.jpg',
        subSidebar: 'auto',
        blogConfig: {
            // category: {
            //     location: 2,     // 在导航栏菜单中所占的位置，默认2
            //     text: 'Category' // 默认文案 “分类”
            // },
            // tag: {
            //     location: 3,     // 在导航栏菜单中所占的位置，默认3
            //     text: 'Tag'      // 默认文案 “标签”
            // },
            socialLinks: [     // 信息栏展示社交信息
                { icon: 'reco-github', link: 'https://github.com/bettersong' },
                { icon: 'reco-juejin', link: 'https://juejin.cn/user/219558057873005/posts' },
                { icon: 'reco-zhihu', link: 'https://www.zhihu.com/people/song-yao-90-7' },
            ]
        },
        nav: [
            { text: '首页', link: '/' },
            { text: 'JavaScript', link: '/javascript/' },
            { text: '关于', link: '/about/' }
        ],
        // sidebar: 'auto'
        sidebar: {
            '/javascript/': [
                {
                    title: "JavaScript",
                    collapsable: false,
                    children: ["", "eventloop"],
                },
            ]
        }
    }
}