

const { after } = require("underscore");
 
define(
    'JJ.FacetCreation.FacetCreation'
,   [
        'Facets.Browse.View',
        'Facets.FacetedNavigationItem.View',
        'jj_facetcreation_facetcreation.tpl',
       
    ]
,   function (
        FacetsBrowseView,
        FacetedNavigationView,
        FacetsBrowseTemplate,
        
    )
{
    'use strict';
 
    return  {
        mountToApp: function mountToApp (container)
        {
			try{
             FacetsBrowseView.prototype.template = FacetsBrowseTemplate;}
			 catch(e){
				console.log("Error caught",e.message);
			 }
        }
    };
});
 