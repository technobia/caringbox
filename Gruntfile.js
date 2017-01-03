/**
 * Created by apium on 28/10/2016.
 */
module.exports = function(grunt) {
	var scssFiles = 'assets/**/*.scss';
	var htmlFile = 'template/**/*.html';

	grunt.initConfig({
		sass: {
			dev: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'assets/css/tam-soat-ung-thu-dot-quy-style.min.css': 'assets/scss/tamsoatungthudotquy.scss',
					'assets/css/thuc-pham-chong-ung-thu-style.min.css': 'assets/scss/thucphamchongungthu.scss'
				}
			}
		},
		watch: {
			scss: {
				files: [scssFiles],
				tasks: ['sass:dev']
			},
			liveReload: {
				files: [scssFiles, htmlFile, 'index.html'],
				options: { livereload: 12345 }
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('watch-sass', ['watch']);

};