
function service(request, response)
{
	'use strict';
	try 
	{
		require('JJ.FacetCreation.FacetCreation.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('JJ.FacetCreation.FacetCreation.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}