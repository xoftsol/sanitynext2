export default {
    name: 'properties',
    title: 'properties',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 104,
        },
      },
      {
        name: 'vendor',
        title: 'Vendor',
        type: 'reference',
        to: {type: 'vendor'},
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: {type: 'category'},
          },
        ],
      },
      {
        name: 'body',
        title: 'Body',
        type: 'localeBlockContent',
      },
      {
        name: 'imagesGallery',
        title: 'Images gallery',
        type: 'array',
        of: [{ type: 'image' }]
       },
      {
        name: 'image',
        title: 'image',
        type: 'image',
      },
    ],
  
    preview: {
      select: {
        title: 'title',
        manufactor: 'manufactor.title',
        media: 'defaultProductVariant.images[0]',
      },
    },
  }
  