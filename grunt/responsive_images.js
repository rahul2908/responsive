module.exports = {
    dev: {
	  options: {
		engine: 'gm',
		sizes: [{
			suffix: '_large_2x',
			width: 1600,
			quality: 30
			},
				{
			suffix: '_medium_1x',
			width: 800,
			quality: 30
			}]	
		},
		
      files: [{
        expand: true,
        src: ['*.{png,jpg,gif}'],
        cwd: 'images_src/',
        dest: 'images/'
      }]
    }
  };