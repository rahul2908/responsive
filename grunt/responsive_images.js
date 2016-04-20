module.exports = {
    dev: {
	  options: {
		engine: 'gm',
		quality: 60
		},
		
      files: [{
        expand: true,
        src: ['*.{png,jpg,gif}'],
        cwd: 'images_src/',
        dest: 'images/'
      }]
    }
  };