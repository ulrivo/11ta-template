module.exports = {
	columns: function (content) {
		return `<div class="flex content-start flex-col md:flex-row">${content}</div>`
	},

	cols: function (content, classes) {
		return `<div class="${classes}">${content}</div>`
	},
}