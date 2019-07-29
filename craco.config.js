const CracoAntDesignPlugin = require('craco-antd');

module.exports = {
	plugins: [{ plugin: CracoAntDesignPlugin }],
	jest: {
		configure(config) {
			return {
				...config,
				transformIgnorePatterns: [
					'/node_modules/(?!antd|rc-pagination|rc-calendar|rc-tooltip)/.+\\.js$',
				],
			};
		},
	},
};
