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

};;App.Program = function() {

	this.init = function()
	{
		console.log('Init!');

		doSelfUpdateListener();
	};

	var doSelfUpdateListener = function()
	{
		$('.check_for_updates').on('click', function(e)
		{
			e.preventDefault();
			checkForUpdates();
		});
	};

	var checkForUpdates = function()
	{
		var updater = new App.SelfUpdate();
		updater.init();
	};

};;var dev_domains = ['Sinappi-Otto'];
var dev_env = false;

for(var i in dev_domains)
{
	if(dev_domains[i] === process.env.USERDOMAIN)
	{
		dev_env = true;
	}
}

if(dev_env)
{
	require('nw.gui').Window.get().showDevTools().moveTo(1500, 200);
	console.log('Application initiating...');
	window.moveTo(1500, 800);
}

$(function()
{
	var app = new App.Program();
	app.init();
});
