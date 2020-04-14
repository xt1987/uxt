module.exports = {
	base: '/uxt/doc/',
	title: 'UXT使用文档',
	description: 'UXT - 基于colorui封装的uniapp组件库',
	dest: 'unpackage/dist/build/h5/doc/',
	markdown: {
		lineNumbers: true
	},
	themeConfig: {
		logo: '/assets/img/logo.png',
		nav: [{
				text: '组件',
				link: '/'
			},
			{
				text: 'Gitee',
				link: 'https://gitee.com/xtcoder/uxt'
			},
			{
				text: 'Github',
				link: 'https://github.com/xt1987/uxt'
			}
		],
        sidebarDepth: 0,
		sidebar: {
			'/': [
                {
                    title: '指南',
					collapsable: false,
                    children: [
                        '',
                        'quick',
                        'update',
                        'style'
                    ]
                },
                {
                    title: '基础组件',
					collapsable: false,
                    children: [
                        'components/uxt-button',
                        'components/uxt-bar-group',
                        'components/uxt-bar',
                        'components/uxt-icon',
                        'components/uxt-modal',
                        'components/uxt-page'
                    ]
                },
     //            {
     //                title: '表单组件',
					// collapsable: false,
     //                children: [
     //                    '',
     //                    'quick'
     //                ]
     //            },
     //            {
     //                title: '反馈组件',
					// collapsable: false,
     //                children: [
     //                    '',
     //                    'quick'
     //                ]
     //            },
     //            {
     //                title: '展示组件',
					// collapsable: false,
     //                children: [
     //                    '',
     //                    'quick'
     //                ]
     //            },
     //            {
     //                title: '导航组件',
					// collapsable: false,
     //                children: [
     //                    '',
     //                    'quick'
     //                ]
     //            }
			]
		}
	}
}
