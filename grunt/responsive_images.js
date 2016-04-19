module.exports = {
    dev: {
	  options: {
		engine: 'gm'
		},
		
      files: [{
        expand: true,
        src: ['*.{png,jpg,gif}'],
        cwd: 'images_src/',
        dest: 'images/'
      }]
    }
  };