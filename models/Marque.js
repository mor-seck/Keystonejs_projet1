var keystone = require('keystone');
var Types = keystone.Field.Types;
var Marque = new keystone.List('Marque');
Marque.add('Marque', {
    name: {
        type: Types.Text,
        initial: true,
        required: true,
        index: true,
        unique: true
    },
})
Marque.register();