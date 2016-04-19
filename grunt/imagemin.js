module.exports = {
    all: {
		options: {
			optimizationLevel: 7
		},
        files: [{
            expand: true,
            cwd: 'images_src/',
            src: ['*.{png,jpg,gif}'],
            dest: 'images/'
        }]
    }
};