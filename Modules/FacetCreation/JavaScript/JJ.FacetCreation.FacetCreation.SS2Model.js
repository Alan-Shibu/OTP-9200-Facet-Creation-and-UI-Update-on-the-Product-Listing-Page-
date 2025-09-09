
define("JJ.FacetCreation.FacetCreation.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/FacetCreation/SuiteScript2/FacetCreation.Service.ss"
            ),
            true
        )
});
});
