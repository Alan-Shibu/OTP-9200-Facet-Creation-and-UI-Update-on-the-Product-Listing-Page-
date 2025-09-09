
define("JJ.FacetCreation.FacetCreation.Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({

        
       
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "services/FacetCreation.Service.ss"
            )
        )
        
});
});
