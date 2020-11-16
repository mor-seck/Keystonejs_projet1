var keystone = require('keystone');
var Types = keystone.Field.Types;
var Typebateau = new keystone.List('Typebateau');
Typebateau.add('Typebateau', {
    name: {
        type: Types.Text,
        initial: true,
        required: true,
        index: true,
        unique: true
    },
})
Typebateau.register();