var keystone = require('keystone');
var Types = keystone.Field.Types;
var Moteur = new keystone.List('Moteur');

Moteur.add('Moteur', {
    name: {
        type: Types.Text,
        initial: true,
        required: true,
        index: true,
        unique: true
    },
    puissance: {
        type: Number,
        initial: true,
        required: true
    },
    arbre: {
        type: Types.Select,
        options: 'S,L,X,U',
        default: 'S',
        index: true
    },
    marque: {
        type: Types.Text,
        initial: true,
        required: true,
        index: true,
        unique: true
    },
    typeDeRelevage: {
        type: Types.Select,
        options: 'Manuel,Assiste,Électrohydrolique',
        default: 'Manuel',
        index: true
    },
    type: {
        type: Types.Select,
        options: 'NEUF, OCCASION',
        default: 'NEUF',
        index: true
    },

    typeDeMoteur: {
        type: Types.Select,
        options: 'Thermique,Électrique,Électrique de péche',
        default: 'Thermique',
        index: true
    },
    nombreHeureDeMarche: {
        type: Number,
        initial: true,
        required: true
    },
    anneeDeMiseEnService: {
        type: Date,
        initial: true,
        required: true
    },


});
Moteur.register();