module.exports = {
    title: '前端南玖',
    description: '前端南玖的博客',
    base: '/nanjiu/',
    theme: 'reco',
    author: '南玖',
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['meta', {name: 'referrer', content: 'no-referrer'}],
        ['link', { rel: 'icon', href: '/sy.jpg' }],
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
        valineConfig: {
            appId: 'wDxOQGAiCHeiIi0Dz7A7lfmS-gzGzoHsz',
            appKey: 'NXodSccyH1EXXRVHD2bPQoVa'
        },
        blogConfig: {
            socialLinks: [     // 信息栏展示社交信息
                { icon: 'reco-github', link: 'https://github.com/bettersong' },
                { icon: 'reco-juejin', link: 'https://juejin.cn/user/219558057873005/posts' },
                { icon: 'reco-zhihu', link: 'https://www.zhihu.com/people/song-yao-90-7' },
            ]
        },
        nav: [
            { text: '首页', link: '/' },
            {text: '前端', items: [
                { text: 'HTML&CSS', link: '/htmlcss/' },
                { text: 'JavaScript', link: '/javascript/' },
                { text: '小程序', link: '/miniprogram/' }
            ]},
            
            { text: '工程化', items: [
                { text: 'webpack', link: '/webpack/' },
                { text: 'docker', link: '/docker/'},
                { text: '合集', link: '/engineering/'}
            ] },
            { text: 'Node', items: [
                {text: 'Nest', link: '/nest/'},
                {text: 'Npm', link: '/npm/'},
            ]},
            {text: 'Flutter', link: '/flutter/'},
            {text: '性能优化', link: '/performance/'},
            { text: '关于', link: '/about/' }
        ],
        // sidebar: 'auto'
        sidebar: {
            '/javascript/': [
                {
                    title: "JavaScript",
                    collapsable: false,
                    children: ["", "eventloop", 'function', "file", "wxavator"],
                },
            ],
            '/htmlcss/': [
                {title: 'HTML', collapsable: false, children: [""]},
                {title: 'CSS', collapsable: false, children: ["1", "2"]},
            ],
            '/miniprogram/': [
                {title: '小程序', collapsable: false, children: ["", "1"]},
            ],
            '/webpack/': [
                {title: 'webpack', collapsable: false, children: ["", '2', '3']},
            ],
            '/engineering/': [
                {title: 'babel', collapsable: false, children: [""]},
                {title: 'postcss', collapsable: false, children: ["2"]},
            ],
            '/performance/': [
                {
                    title: "性能优化",
                    collapsable: false,
                    children: ["", "zhibiao"],
                },
            ],
            '/nest/': [
                {title: 'NestJS', collapsable: false, children: ["", "1cli", "2ioc", "3controller", "4provider", "5module", "6middleware", "7sql"]},
            ],
            '/npm/': [
                {title: 'NPM', collapsable: false, children: ["", "2package-lock", "3"]},
            ],
            '/docker/': [
                {title: 'Docker', collapsable: false, children: ["", "2"]},
            ],
            '/flutter/': [
                {title: 'Flutter', collapsable: false, children: ["", "2dart"]},
            ]
        }
    }
}