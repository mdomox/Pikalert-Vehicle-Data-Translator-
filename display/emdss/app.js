/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'emdss': 'app'
});
//</debug>

Ext.application({
    name: 'emdss',

    requires: [
        'emdss.util.Config',
        'emdss.controller.Application',
        'emdss.store.TreatmentExplanations',
        'Ext.MessageBox',
        'Ext.navigation.View',
        // 'emdss.view.Sites',
        'Ext.SegmentedButton',
        'Ext.Map',
        'emdss.util.PaintMonitor',
        'emdss.util.SizeMonitor'
    ],

    views: ['Main', "TravelTimeGrid", 'TravelTimeList', 'Vehicles'],
    models:['Site', 'SitePlots', 'SiteData', 'Vehicle', 'WxWatchWarn', 'TravelTime', 'TravelTimeForecast', 'TravelTimeSegment' ],
    stores:['SitePlots', 'SiteData', 'DistrictSiteStore', 'DistrictVehicleStore', 'TreatmentExplanations', 'WxWatchWarns', 'TravelTimeStore', 'TravelTimeListStore', 'TravelTimeSegmentStore' ],
    controllers:['Application',
                 'RoadAndRwisSites',
                 'WmsData',
                 'MapAnimation',
                 'VehicleController',
                 'TravelTimeController',
                 'TravelTimeListController' ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // if (window.location.hostname != "www.ral.ucar.edu") {
            // window.location.hostname = "www.ral.ucar.edu";
        // }
        // if (window.location.hostname != "localhost") {
            // window.location.hostname = "localhost";
        // }
        
        var forceSourceDomain = emdss.util.Config.getForceSourceDomain();
        if (window.location.hostname != forceSourceDomain) {
            window.location.hostname = forceSourceDomain;
        }
        
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('emdss.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
