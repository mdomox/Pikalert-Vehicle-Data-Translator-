
Ext.define('emdss.view.Vehicles',{
    extend: 'Ext.dataview.List',
    xtype:  'vehicles',
    config: {
	title: 'Pikalert Vehicles',
	cls: 'x-sites',
	disableSelection: true,
		
	// store: 'junk-store',
	// itemTpl: '{title}',
		
	store: 'district-vehicle-store',
		
	// itemTpl:[
	// '<div class="obs_alert_image"> Obs: <img src="data:image/png;base64,{obs_alert_image}"></img> 24 Hrs: <img src="data:image/png;base64,{hr24_alert_image}"></img> 24 - 72 Hrs: <img src="data:image/png;base64,{hr72_alert_image}"></img></div>',
	// '<span>{desc}</span>'
	// ].join('')
	// itemTpl: [
	// '<div>{district_name}</div/>'
	// ]
	// itemTpl: '<span>{desc}</span>'
	
	// listeners: {
	// itemtap: {
	// fn: function (list, index, item, record, senchaEvent) {
	// debugger;
	// if (senchaEvent.event.target.nodeName === 'img') {
	// // Show next view
	// }
	// },
	// element: 'element'
	// }
	// },
    },
    
    initialize : function() {
    	this.callParent(arguments);
    	
        var me = this;
        me.setItemTpl( me.createItemTpl() );
    },
	
    createItemTpl: function() {
		return new Ext.XTemplate(
		    // '<div>{district_name}</div/>',
		    // '<tpl if="this.isThisStation(properties.station_id)">',
		    // '  <div>TAF issued at {[this.getFormattedDate(values.properties.issue_time)]}</div>',
		    // '  <tpl for="properties.raw_text_lines">',
		    // '    <div>{.}</div>',
		    // '  </tpl>',
		    // '</tpl>',
		    '<div class="district_node">',
		    '  <div class="district_name">{district_name}</div>',
		    '  <div class="district_zoom">[zoom...]</div>',
		    // '  <div class="district_zoom">[zoom...]</div>',
		    '</div>',
		    // '<div class="district_summary">',
		    // '  Obs: <img class="alert_{obs_alert_summary_code}" src="resources/icons/Alert_Transparent.png"></img>&nbsp;&nbsp;',
		    // '  Next 6 Hrs: <img class="alert_{hr06_alert_summary_code}" src="resources/icons/Alert_Transparent.png"></img>&nbsp;&nbsp;',
		    // '  6 - 24 Hrs: <img class="alert_{hr24_alert_summary_code}" src="resources/icons/Alert_Transparent.png"></img>&nbsp;&nbsp;',
		    // '  24 - 72 Hrs: <img class="alert_{hr72_alert_summary_code}" src="resources/icons/Alert_Transparent.png"></img>',
		    // '</div>',
		    '<div class="data_time">',
		    '  <tpl if="this.isPropertyPresent(data_time)">',
		    '    <div>(Vehicle data sent at: {[this.getPrettyVehicleDateText(values.data_time)]})</div>',
		    '  <tpl else>',
		    '    <div>Can not determine vehicle report time...</div>',
		    '  </tpl>',
		    '</div>',
		    '<hr>',
		    '<tpl for="vehicles">',
		    '  <div class="vehicle_node">',
		    '    <div class="vehicle_description">Vehicle: {id}',
		    '      <div class="vehicle_report">',
		    '        <tpl if="this.isPropertyPresent(obs_time)">',
		    '          Observed At: {[this.getPrettyDateText(values.obs_time)]}<br>',
		    '        </tpl>',
		    '        <tpl if="this.isPropertyPresent(speed_mph)">',
		    '          Speed: {[this.getPrettyValueText(values.speed_mph)]} mph<br>',
		    '        </tpl>',
		    '        <tpl if="this.isPropertyPresent(heading_deg)">',
		    '          Heading: {[this.getPrettyValueText(values.heading_deg)]} degrees<br>',
		    '        </tpl>',
		    '        <tpl if="this.isPropertyPresent(temp_f)">',
		    '          Temp: {[this.getPrettyValueText(values.temp_f)]} F<br>',
		    '        </tpl>',
		    '        <tpl if="this.isPropertyPresent(road_temp_f)">',
		    '          Road Temp: {[this.getPrettyValueText(values.road_temp_f)]} F<br>',
		    '        </tpl>',
		    '        <tpl if="this.isPropertyPresent(wind_speed_ms)">',
		    '          Wind Speed: {[this.getPrettyValueText(values.wind_speed_ms)]} m/s<br>',
		    '        </tpl>',
		    '        <tpl if="this.isPropertyPresent(wipers_on)">',
		    '          Wipers: {[this.getPrettyWiperText(values.wipers_on)]}<br>',
		    '        </tpl>',
		    '        <tpl if="this.isPropertyPresent(lon)">',
		    '          Longitude: {[this.getPrettyValueText(values.lon)]}<br>',
		    '        </tpl>',
		    '        <tpl if="this.isPropertyPresent(lat)">',
		    '          Latitude: {[this.getPrettyValueText(values.lat)]}<br>',
		    '        </tpl>',
		    '      </div>',
		    '    </div>',
		    '  </div>',
		    '</tpl>',
    	    
    	    // "this.getFormattedDate" is output as a char string
    	    // '  <div>METAR observed {this.getFormattedDate({properties.observation_time})}</div>',
    	    // "this.getformattedDate" is outout as a char string
    	    // '  <div>METAR observed this.getFormattedDate({properties.observation_time})</div>',
    	    // "properties not defined"
    	    // '  <div>METAR observed {[this.getFormattedDate(properties.observation_time)]}</div>',
    	    // new Ext.XTemplate(	'<div>METAR: {properties.raw_text}</div>',
	    {
	   	getPrettyValueText: function(val) {
	   		if ( val == '--' ) return 'Missing';
	   		
	   		var fval = parseFloat(val);
	   		if ( isNaN(fval) || fval == -9999.0 ) return 'Unknown';
	   		else return val;
		},
		getPrettyWiperText: function(wipersOn) {
		    var wiperText = wipersOn ? 'On' : 'Off';
		    return wiperText;
		},
		getPrettyDateText: function(unix_time) {
		    var data_time = new Date(unix_time * 1000);
		    var return_str = emdss.util.Util.dateToBriefString(data_time);
		    return return_str;
		},
		getPrettyVehicleDateText: function(data_time_str) {
		    var data_time = emdss.util.Util.emdssStringToDate(data_time_str);
		    var return_str = emdss.util.Util.dateToBriefString(data_time);
		    return return_str;
		},
		isThisStation: function(icao) {
		    var isStation = ( icao === me.station );
		    return isStation;
		},
		getThisStation: function() { 
		    return me.station; 
		},
		getFormattedDate: function(isoDateStr) {
		    return mobileMetSample.Util.dateToBriefString(mobileMetSample.Util.isoStringToDate(isoDateStr));
		},
		getCeilingString: function(conditions) {
		    return mobileMetSample.util.PrettyData.getCeilingString(conditions);
		},
		getCloudsString: function(conditions) {
		    return mobileMetSample.util.PrettyData.getCloudsString(conditions);
		},
		isValueGTZero: function(valStr) {
		    var val = parseFloat(valStr);
		    return (val != undefined && val != null && val != NaN && val > 0.0);
		},
		isStringDefined: function(valStr) {
		    return (valStr != undefined && valStr != null && valStr.length > 0);
		},
		isPropertyPresent: function(prop) {
		    return (prop != undefined && prop != null);
		}
	    }
	);
    }
});