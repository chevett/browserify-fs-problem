var fs = require('fs');

fs.writeFile('./hello-world.txt', 'Hello world!\n', function() {
	fs.readFile('./hello-world.txt', 'utf-8', function(err, data) {
		console.log(data);
	});
});
