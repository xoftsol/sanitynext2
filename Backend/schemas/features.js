export default {
    name: 'features',
    title: 'features',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'parents',
        title: 'Parent features',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{type: 'features'}],
          },
        ],
      },
    ],
  }
  