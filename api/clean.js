const sanitizeHtml = require('sanitize-html')


const config = {
	allowedTags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'img', 'blockquote', 'p', 'div',
		'ul', 'ol', 'li',
		'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td'
	],
	allowedAttributes: {
		img: ['src']
	},
	transformTags: {
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