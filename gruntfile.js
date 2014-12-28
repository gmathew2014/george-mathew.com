module.exports = function(grunt) {
  grunt.registerTask('watch', [ 'watch','concat','uglify','sass']);

  grunt.initConfig({
    concat: {
      js: {
        options: {
          separator: ';'
        },
        src: [
          'javascript/*.js'
        ],
        dest: 'build/js/main.js'
      },
    },
    uglify: {
      options: {
        mangle: false
      },
      js: {
        files: {
          'build/js/main.min.js': ['build/js/main.js']
        }
      }
    },
    sass: {
        dist: {
            options: {
                style: 'compressed'
            },
            files: {
                'build/css/style-auto.css': 'sass/style.scss'
            }
        }
    },
    autoprefixer: {
      // options: {
      //   browsers: ['last 8 versions',]
      // },
      single_file: {
          src:  'build/css/style-auto.css',
          dest: 'build/css/style.css'
      }
    },
    watch: {
      js: {
        files: ['javascript/*.js'],
        tasks: ['concat:js', 'uglify:js'],
        options: {
          livereload: true,
        }
      },
      css: {
        files: ['sass/**/*.scss'],
        tasks: ['sass', 'autoprefixer'],
        options: {
          livereload: true,
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
};
