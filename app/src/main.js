var dev_domains = ['Sinappi-Otto'];
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
