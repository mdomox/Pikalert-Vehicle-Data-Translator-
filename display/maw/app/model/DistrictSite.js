/**
 * Data model for the sites/alerts for a district.
 * @author Paddy McCarthy
 */
Ext.define('mawDesk.model.DistrictSite', {
    extend:'Ext.data.Model',
    config:{
		fields:[
		    {name: 'site_id',           type:'string'},
		    {name: 'site_num',          type:'string'},
		    {name: 'lat',               type:'float'},
		    {name: 'lon',               type:'float'},
		    {name: 'desc',              type:'string'},
		    {name: 'obs_alert_code',    type: 'string'},
		    {name: 'hr06_alert_code',   type: 'string'},
		    {name: 'hr24_alert_code',   type: 'string'},
		    {name: 'hr72_alert_code',   type: 'string'},
		    {name: 'obs_alert_image',   type: 'string'},
		    {name: 'hr06_alert_image',  type: 'string'},
		    {name: 'hr24_alert_image',  type: 'string'},
		    {name: 'hr72_alert_image',  type: 'string'},
		    {name: 'is_rwis_site',      type: 'boolean'},
		    {name: 'is_road_cond_site', type: 'boolean'},
		    {name: 'is_wx_obs_site',    type: 'boolean'},
		],
		associations : [
			{
				type :           'hasMany',
				associationKey:  'time_series',
				instanceName:    'time_series',
				associatedModel: 'mawDesk.model.HourlyAlert',
				associatedName:  'time_series'
			}
		],
		belongsTo: {
			associatedModel: 'mawDesk.model.District',
			instanceName:    'district' // the key to the object on the store record.
		}
    }
});