var keystone = require('keystone');
var Types = keystone.Field.Types;
var Imagesbateau = new keystone.List('Imagesbateau');
Imagesbateau.add('Imagesbateau', {
    name: {
        type: Types.Text,
        initial: true,
        required: true,
        index: true,
        unique: true
    },
    title: {
        type: Types.Text,
        required: true,
        initial: true,
        index: true
    },
    bateaus: {
        type: Types.Relationship,
        ref: 'Bateau',
        many: false
    },
    heroImage: { type: Types.CloudinaryImage },
    images: { type: Types.CloudinaryImages },
})
Imagesbateau.register();