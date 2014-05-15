App.SelfUpdate = function() {

	var http = require('http');
	var fs   = require('fs');

	this.init = function()
	{
		console.log('SelfUpdate initiating...');

		fs.readFile('VERSION', function(err, data)
		{
			var version = $.trim(data);

			checkForLaterVersion(version);
		});
	};

	var checkForLaterVersion = function(v)
	{
		var options = {
			host: '192.168.6.6',
			port: 80,
			path: '/nodewebkitupdate/?v=' + v,

		};

		http.get(options, function(res)
		{
			res.on('data', function(chunk)
			{
				chunk = chunk.toString('utf8');

				if(chunk === v)
				{
					doOnUpToDate();
					return;
				}

				pullUpdate();
			});
		}).on('error', function(e)
		{
			console.log('Got error: ' + e.message);
		});
	};

	var doOnUpToDate = function()
	{
		console.log('Up to date!');
	};

	var pullUpdate = function()
	{
		console.log('Pulling update... todo.');
	};

};