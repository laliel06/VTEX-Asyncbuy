module.exports = function(grunt){
	grunt.initConfig({
	  uglify: {
	    options: {
	      mangle: {
	        except: ['jQuery', 'vtexjs']
	      },
	      compress: {
	        drop_console: true
	      }
	    },
	    my_target: {
	      files: {
	        'dist/async.min.js': ['src/async.js']
	      }
	    }
	  },
	  watch: {
	  	scripts: {
		    files: ['src/async.js'],
		    tasks: ['uglify']
		}
	  }
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);
}