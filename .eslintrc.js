module.exports = {
	extends: ['react-app', 'airbnb', 'prettier', 'prettier/react'],
	rules: {
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'.storybook/**',
					'stories/**',
					'**/*.stories.js',
					'**/*.test.js',
				],
			},
		],
		'react/jsx-filename-extension': [
			0,
			{ extensions: ['.jsx', '.stories.js', '.test.js'] },
		],
	},
};
