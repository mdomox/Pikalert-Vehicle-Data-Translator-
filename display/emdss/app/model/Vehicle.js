/**
 * Data model for the vehicle data. Note the large number of reference fields, which
 *   convert the string values provided by the server to number types that can be used
 *   with comparison operators. This is a good example of how to convert values as the 
 *   are loaded into a store.
 * @author Paddy McCarthy
 */
Ext.define('emdss.model.Vehicle', {
    extend:'Ext.data.Model',
    config:{
        fields:[
            {name: 'id',                type: 'string'},
            {name: 'lat',               type: 'string'},
            {name: 'lon',               type: 'string'},
            {name: 'obs_time',          type: 'string'},
            {name: 'speed_mph',         type: 'string'},
            {name: 'heading_deg',       type: 'string'},
            {name: 'wipers',            type: 'string'},
            {name: 'temp_f',            type: 'string'},
            {name: 'humidity',          type: 'string'},
            {name: 'pressure',          type: 'string'},
            {name: 'road_temp_f',       type: 'string'},
            {name: 'wind_speed_ms',     type: 'string'},
            {name: 'wiper_status',     type: 'string'},
            {name: 'auto_brake',     type: 'string'},
            {name: 'traction_control',     type: 'string'},
            
            {name: 'lat_float',             type: 'float',
                                            mapping: 'lat',
                                            convert: function(val, record) {
                                                return parseFloat(val);
                                            }},
            {name: 'lon_float',             type: 'float',
                                            mapping: 'lon',
                                            convert: function(val, record) {
                                                return parseFloat(val);
                                            }},
            {name: 'speed_mph_float',       type: 'float',
                                            mapping: 'speed_mph',
                                            convert: function(val, record) {
                                                return parseFloat(val);
                                            }},
            {name: 'heading_deg_float',     type: 'float',
                                            mapping: 'heading_deg',
                                            convert: function(val, record) {
                                                return parseFloat(val);
                                            }},
            {name: 'wipers_on',             type: 'boolean',    
                                            mapping:'wipers', 
                                            convert: function(val, record) {
                                                var retval = null;
                                                if (val === 'on') {
                                                    retval = true;
                                                }
                                                else if (val === 'off') {
                                                    retval = false;
                                                }
                                                return retval;
                                            }},
            {name: 'wipers_level',          type: 'string',     
                                            mapping:'wiper_status', 
                                            convert: function(val, record) {
                                                var retval = null;
                                                var wiperVal = parseInt(val);
                                                if ( wiperVal == -9999 ) {
                                                    // retval = 'Not Specified ( ' + val + ' )';
                                                    retval = 'Not Specified';
                                                }
                                                else if ( wiperVal == 0 ) {
                                                    // retval = 'Not Equipped ( ' + val + ' )';
                                                    retval = 'Not Equipped';
                                                }
                                                else if ( wiperVal == 1 ) {
                                                    // retval = 'Off ( ' + val + ' )';
                                                    retval = 'Off';
                                                }
                                                else if ( wiperVal == 2 ) {
                                                    // retval = 'Intermittent ( ' + val + ' )';
                                                    retval = 'Intermittent';
                                                }
                                                else if ( wiperVal == 3 ) {
                                                    // retval = 'Low ( ' + val + ' )';
                                                    retval = 'Low';
                                                }
                                                else if ( wiperVal == 4 ) {
                                                    // retval = 'High ( ' + val + ' )';
                                                    retval = 'High';
                                                }
                                                else if ( wiperVal == 5 ) {
                                                    // retval = 'Washer ( ' + val + ' )';
                                                    retval = 'Washer';
                                                }
                                                else if ( wiperVal == 255 ) {
                                                    // retval = 'Automatic Present ( ' + val + ' )';
                                                    retval = 'Automatic Present';
                                                }
                                                else {
                                                    retval = 'Not Present';
                                                }

                                                return retval;
                                            }},
            {name: 'temp_f_float',          type: 'float',
                                            mapping: 'temp_f',
                                            convert: function(val, record) {
                                                return parseFloat(val);
                                            }},
            {name: 'humidity_float',        type: 'float',
                                            mapping: 'humidity',
                                            convert: function(val, record) {
                                                return parseFloat(val);
                                            }},
            {name: 'pressure_int',          type: 'int',
                                            mapping: 'pressure',
                                            convert: function(val, record) {
                                                return parseInt(val);
                                            }},
            {name: 'abs_level',             type: 'string',     
                                            mapping:'auto_brake', 
                                            convert: function(val, record) {
                                                var absVal = parseInt(val);
                                                if ( absVal == -9999 ) {
                                                    // retval = 'Not Specified ( ' + val + ' )';
                                                    retval = 'Not Specified';
                                                }
                                                else if ( absVal == 0 ) {
                                                    // retval = 'Not Equipped ( ' + val + ' )';
                                                    retval = 'Not Equipped';
                                                }
                                                else if ( absVal == 1 ) {
                                                    // retval = 'Off ( ' + val + ' )';
                                                    retval = 'Off';
                                                }
                                                else if ( absVal == 2 ) {
                                                    // retval = 'On ( ' + val + ' )';
                                                    retval = 'On';
                                                }
                                                else if ( absVal == 3 ) {
                                                    // retval = 'Engaged ( ' + val + ' )';
                                                    retval = 'Engaged';
                                                }
                                                else {
                                                    retval = 'Not Present';
                                                }

                                                return retval;
                                            }},
            {name: 'trac_level',            type: 'string',     
                                            mapping:'traction_control', 
                                            convert: function(val, record) {
                                                var tracVal = parseInt(val);
                                                if ( tracVal == -9999 ) {
                                                    // retval = 'Not Specified ( ' + val + ' )';
                                                    retval = 'Not Specified';
                                                }
                                                else if ( tracVal == 0 ) {
                                                    // retval = 'Not Equipped ( ' + val + ' )';
                                                    retval = 'Not Equipped';
                                                }
                                                else if ( tracVal == 1 ) {
                                                    // retval = 'Off ( ' + val + ' )';
                                                    retval = 'Off';
                                                }
                                                else if ( tracVal == 2 ) {
                                                    // retval = 'On ( ' + val + ' )';
                                                    retval = 'On';
                                                }
                                                else if ( tracVal == 3 ) {
                                                    // retval = 'Engaged ( ' + val + ' )';
                                                    retval = 'Engaged';
                                                }
                                                else {
                                                    retval = 'Not Present';
                                                }

                                                return retval;
                                            }},
            {name: 'road_temp_f_float',     type: 'float',
                                            mapping: 'road_temp_f',
                                            convert: function(val, record) {
                                                return parseFloat(val);
                                            }},
            {name: 'wind_speed_ms_float',   type: 'float',
                                            mapping: 'wind_speed_ms',
                                            convert: function(val, record) {
                                                return parseFloat(val);
                                            }},
            // {name: 'hr06_alert_image',   type: 'string',     
                                        // mapping:'hr06_alert_code', 
                                        // convert: function(val, record) {
                                            // // Todo: Put code here to look up image from sprite...
                                            // return val;
                                        // }},
            // {name: 'hr24_alert_image',   type: 'string',     
                                        // mapping:'hr24_alert_code', 
                                        // convert: function(val, record) {
                                            // // Todo: Put code here to look up image from sprite...
                                            // return val;
                                        // }},
            // {name: 'hr72_alert_image',   type: 'string',     
                                        // mapping:'hr72_alert_code', 
                                        // convert: function(val, record) {
                                            // // Todo: Put code here to look up image from sprite...
                                            // return val;
                                        // }}
        ],
        belongsTo: {
            associatedModel: 'emdss.model.DistrictForVehicles',
            instanceName:    'district' // the key to the object on the store record.
        }
    }
});
