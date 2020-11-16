var keystone = require('keystone');
var Types = keystone.Field.Types;
var Prixbateau = new keystone.List('Prixbateau');
Prixbateau.add('Prixbateau', {
    name: {
        type: String,
        initial: true,
        required: true,
        index: true,
        unique: true
    },
    prix: {
        type: Number,
        initial: true,
        required: true,
        index: true,
        unique: true
    },
})
Prixbateau.register();