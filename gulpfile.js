var gulp = require('gulp')
var flatten = require('gulp-flatten')
var del = require('del')

var addonData = [
	"./src/mods/**/{addons,Addons}/*.{pbo,bisign}"
]


var dllData = [
	"./src/mods/*/*.dll"
]

var serverKeys = [
	"./src/mods/**/{keys,Keys}/*.bikey"
]

var userconfigDirs = [
	"./src/mods/**/{userconfig,UserConfig,Userconfig}/*.hpp",
	"./src/mods/**/{userconfig,UserConfig,Userconfig}/**/*.hpp"
]

var headers = [
	"./src/headers/**/*.*"
]

var outputDirectory = "./dist"
var outputAddonName = "@8SOF"

gulp.task('compile', function() {
	// Copy PBOs
	gulp.src(addonData)
	.pipe(flatten())
	.pipe(gulp.dest(outputDirectory + '/' + outputAddonName +'/addons'))

	// Copy Server Keys
	gulp.src(serverKeys)
	.pipe(flatten())
	.pipe(gulp.dest(outputDirectory + '/' + outputAddonName +'/keys'))

	// Copy User Config
	
	gulp.src(userconfigDirs)
	.pipe(flatten())
	.pipe(gulp.dest(outputDirectory + '/' + outputAddonName +'/userconfig'))

	// Copy DLLs 
	gulp.src(dllData)
	.pipe(flatten())
	.pipe(gulp.dest(outputDirectory + '/' + outputAddonName +'/'))

	// Copy Headers
	gulp.src(headers)
	.pipe(gulp.dest(outputDirectory + '/' + outputAddonName + '/'))	
})

gulp.task('clean', function() {
	del('./dist/', function(){
		
	})
})