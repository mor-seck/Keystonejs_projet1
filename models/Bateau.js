var keystone = require('keystone');
var Types = keystone.Field.Types;
var Bateau = new keystone.List('Bateau');

var storage = new keystone.Storage({
    adapter: keystone.Storage.Adapters.FS,
    fs: {
        path: 'uploads',
        publicPath: '/public/uploads/',
    }
});
Bateau.add('Bateau', {
    name: {
        type: Types.Text,
        initial: true,
        required: true,
        index: true,
        unique: true
    },
    nomBateau: {
        type: Types.Text,
        initial: true,
        required: true
    },
    images: {
        type: Types.Relationship,
        ref: 'Imagesbateau',
        many: false
    },
    prix: {
        type: Types.Relationship,
        ref: 'Prixbateau',
        many: false
    },
    marques: {
        type: Types.Relationship,
        ref: 'Marque',
        many: false
    },
    tailles: {
        type: Types.Relationship,
        ref: 'Taille',
        many: false
    },
    moteurs: {
        type: Types.Relationship,
        ref: 'Moteur',
        many: false
    },
    anneeDeMiseEnServices: {
        type: Types.Relationship,
        ref: 'Anneeservice',
        many: false
    },
    remarques: {
        type: Types.Html,
        wysiwyg: true,
        height: 400
    },
    brochure: {
        type: Types.File,
        storage: storage
    },
});
// Bateau.relationship({ ref: 'Imagesbateau', refPath: 'bateau', path: 'imagesbateaus' });
Bateau.register();