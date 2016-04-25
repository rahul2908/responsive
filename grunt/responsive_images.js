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
			suffix: '_large_1x',
			width: 800,
			quality: 30
			},
				{
			suffix: '_small',
			height:300,
			width: 400,
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