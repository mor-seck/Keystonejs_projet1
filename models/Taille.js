var keystone = require('keystone');
var Types = keystone.Field.Types;
var Taille = new keystone.List('Taille');
Taille.add('Taille', {
    name: {
        type: Types.Text,
        initial: true,
        required: true,
        index: true,
        unique: true
    },
    tailles: {
        type: Types.Text,
        initial: true,
        required: true,
        index: true,
        unique: true
    },
})
Taille.register();