var async = require('async'),
	keystone = require('keystone');

var Nominee = keystone.list('Nominee');

/**
 * List Nominees
 */
exports.list = function(req, res) {
	Nominee.model.find(function(err, items) {
		
		if (err) return res.apiError('database error', err);
		
		res.apiResponse({
			Nominees: items
		});
		
	});
}

/**
 * Get Nominee by ID
 */
exports.get = function(req, res) {
	Nominee.model.findById(req.params.id).exec(function(err, item) {
		
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');
		
		res.apiResponse({
			Nominee: item
		});
		
	});
}


/**
 * Create a Nominee
 */
exports.create = function(req, res) {
	
	var item = new Nominee.model(),
		data = (req.method == 'Nominee') ? req.body : req.query;
	
	item.getUpdateHandler(req).process(data, function(err) {
		
		if (err) return res.apiError('error', err);
		
		res.apiResponse({
			Nominee: item
		});
		
	});
}

/**
 * Get Nominee by ID
 */
exports.update = function(req, res) {
	Nominee.model.findById(req.params.id).exec(function(err, item) {
		
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');
		
		var data = (req.method == 'Nominee') ? req.body : req.query;
		
		item.getUpdateHandler(req).process(data, function(err) {
			
			if (err) return res.apiError('create error', err);
			
			res.apiResponse({
				Nominee: item
			});
			
		});
		
	});
}

/**
 * Delete Nominee by ID
 */
exports.remove = function(req, res) {
	Nominee.model.findById(req.params.id).exec(function (err, item) {
		
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');
		
		item.remove(function (err) {
			if (err) return res.apiError('database error', err);
			
			return res.apiResponse({
				success: true
			});
		});
		
	});
}