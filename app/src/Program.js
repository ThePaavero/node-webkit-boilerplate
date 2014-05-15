App.Program = function() {

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

};