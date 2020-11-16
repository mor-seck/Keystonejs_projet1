var keystone = require('keystone');
var Types = keystone.Field.Types;
var Anneeservice = new keystone.List('Anneeservice');
Anneeservice.add('Anneeservice', {
    name: {
        type: String,
        initial: true,
        required: true,
        index: true,
        unique: true
    },
    anneeservice: {
        type: Number,
        initial: true,
        required: true,
        index: true,
        unique: true
    },
})
Anneeservice.register();