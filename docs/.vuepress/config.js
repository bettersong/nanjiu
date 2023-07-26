module.exports = {
    title: '前端南玖',
    description: '前端南玖的博客',
    base: '/nanjiu/',
    theme: 'reco',
    author: '南玖',
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        // ['meta', {name: 'referrer', content: 'no-referrer'}],
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
            { text: 'JavaScript', link: '/javascript/' },
            { text: 'HTML&CSS', link: '/htmlcss/' },
            { text: '工程化', items: [
                { text: 'webpack', link: '/webpack/' },
                { text: '合集', link: '/engineering/'}
            ] },
            { text: 'Node', link: '/nest/'},
            {text: '性能优化', link: '/performance/'},
            { text: '关于', link: '/about/' }
        ],
        // sidebar: 'auto'
        sidebar: {
            '/javascript/': [
                {
                    title: "JavaScript",
                    collapsable: false,
                    children: ["", "eventloop", 'function'],
                },
            ],
            '/htmlcss/': [
                {title: 'HTML', collapsable: false, children: [""]},
                {title: 'CSS', collapsable: false, children: ["1", "2"]},
            ],
            '/webpack/': [
                {title: 'webpack', collapsable: false, children: ["", '2', '3']},
            ],
            '/engineering/': [
                {title: 'babel', collapsable: false, children: [""]},
                {title: 'postcss', collapsable: false, children: ["2"]},
                {title: 'npm', collapsable: false, children: ["3"]},
            ],
            '/performance/': [
                {
                    title: "性能优化",
                    collapsable: false,
                    children: ["", "zhibiao"],
                },
            ],
            '/nest/': [
                {title: 'NestJS', collapsable: false, children: ["", "1cli", "2ioc", "3controller", "4provider"]},
            ]
        }
    }
}