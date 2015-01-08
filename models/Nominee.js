var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */

var Nominee = new keystone.List('Nominee');

Nominee.add({
	name: { type: Types.Name, required: true, index: true },
	nomination : { type: Types.Text, initial: true, required: false, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true }
});

// Provide access to Keystone
Nominee.schema.virtual('canAccessKeystone').get(function() {
	return false;
});


/**
 * Registration
 */

Nominee.defaultColumns = 'name, email, nomination';
Nominee.register();
