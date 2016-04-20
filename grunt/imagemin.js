module.exports = {
    all: {
		options: {
			optimizationLevel: 7
		},
        files: [{
            expand: true,
            cwd: 'images/',
            src: ['*.{png,jpg,gif}'],
            dest: 'images/minified_images'
        }]
    }
};