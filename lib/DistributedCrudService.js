!function(){

	var   Class 				= require('ee-class')
		, log 					= require('ee-log')
		, DistributedService 	= require('distributed-service')
		, CRUDMessage 			= require('distributed-crud-message');



	module.exports = new Class({
		inherits: DistributedService


		/**
		 * the class consructor prepares th routing
		 */
		, init: function init(options) {
			// storage for entities
			this._entities = {};

            // super needs to set up the service
            init.super.call(this, options);
		}





		/**
		 * accepts crud messages, nothing else
		 *
		 * @param <CRUDMesssage> object crudmessage
		 */
		, handleMessage: function(message) {
			if (! (message instanceof CRUDMessage)) {
                if (type.function(message.sendResponse));
                else log(new Error('The CRUD Service got a non CRUD message. It accepts only messages inheeriting of the CRUDMessage class.'));
            }
            else {

            }
		}
	});
}();
