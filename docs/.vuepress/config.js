module.exports = {
    title: '前端南玖',
    description: '前端南玖的博客',
    base: '/nanjiu/',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: 'JavaScript', link: '/javascript/' },
            { 
                text: '南玖的博客', 
                items: [
                    { text: 'Github', link: 'https://github.com/bettersong' },
                    { text: '掘金', link: 'https://juejin.cn/user/219558057873005/posts' }
                ]
            }
        ],
        // sidebar: 'auto'
        sidebar: {
            '/javascript/': [
                {
                    title: "JavaScript",
                    collapsable: false,
                    children: ["", "var"],
                },
            ]
        }
    }
}