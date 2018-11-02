const sanitizeHtml = require('sanitize-html')


const config = {
    allowedTags: [ // 允许使用标签
    	'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
		'span', 'strong',
		'img', 'video', 'source',
		'blockquote', 'p', 'div',
        'ul', 'ol', 'li',
        'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'br',
		'a'
    ],
	allowedAttributes: { // 相应标签允许使用的属性
        img: ['src'],
        video: ['src'],
        source: ['src'],
		a: ['href', 'target'],
        '*' : ["style"]
    },
    allowedStyles: { // 允许使用的样式
        '*': { // 只允许使用color样式设置颜色
            // Match HEX and RGB
            'color': [/^\#(0x)?[0-9a-f]+$/i, /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/],
        }
    },
    transformTags: { // 转换标签
        "article": "div",
        "aside": "div",
        "command": "div",
        "datalist": "div",
        "details": "div",
        "figcaption": "div",
        "figure": "div",
        "footer": "div",
        "header": "div",
        "hgroup": "div",
        "section": "div",
        "summary": "div"
    }
}

module.exports = {
	config: function(req, res) {
		res.json({
			code: 0,
			message: '',
			data: {
				config: config
			}
		});
	},
	html: function(req, res) {
		if (req.body && req.body.content) {
			let localConfig = req.body.config || config
			res.json({
				code: 0,
				message: '',
				data: {
					content: sanitizeHtml(req.body.content, localConfig)
				}
			});
		} else {
			res.json({
				code: -1,
				message: '参数错误'
			});
		}
	}
}