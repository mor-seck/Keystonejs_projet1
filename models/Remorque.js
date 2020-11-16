var keystone = require('keystone');
var Types = keystone.Field.Types;
var Remorque = new keystone.List('Remorque');

Remorque.add('Remorque', {
    name: {
        type: Types.Text,
        initial: true,
        required: true,
        index: true,
        unique: true
    },
    typeDeBateau: {
        type: Types.Select,
        options: 'Barque,Pneumatique,Voile',
        default: 'Barque',
        index: true
    },
    chargeUtile: {
        type: Types.Text,
        initial: true,
        required: true,
        index: true,
        unique: true
    },
    poidsEnCharge: {
        type: Number,
        initial: true,
        required: true
    },
    taille: {
        longueur: { type: Number },
        largeur: { type: Number },
    },
    anneeDeMiseEnService: {
        type: Date,
        initial: true,
        required: true
    },


});
Remorque.register();