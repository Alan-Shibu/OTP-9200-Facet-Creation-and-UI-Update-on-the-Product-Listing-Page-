
define('JJ.FacetCreation.FacetCreation.View'
,	[
	'jj_facetcreation_facetcreation.tpl'
	
	,	'JJ.FacetCreation.FacetCreation.SS2Model'
	
	,	'Backbone'
    ]
, function (
	jj_facetcreation_facetcreation_tpl
	
	,	FacetCreationSS2Model
	
	,	Backbone
)
{
    'use strict';

	
	return Backbone.View.extend({

		template: jj_facetcreation_facetcreation_tpl

	,	initialize: function (options) {

			
		}

	,	events: {
		}

	,	bindings: {
		}

	, 	childViews: {

		}

		
	,	getContext: function getContext()
		{
			
			this.message = this.message || 'Hello World!!'
			return {
				message: this.message
			};
		}
	});
});
