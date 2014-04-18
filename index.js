var fs = require('fs');
var browserify = require('browserify');

var b = browserify();
b.require('browserify-fs', { expose: 'fs' });

b.add('./test.js');
b.bundle()
	.pipe(fs.createWriteStream('bundle.js'));
