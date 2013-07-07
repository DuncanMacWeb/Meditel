// Config settings for NODE_ENV=development

exports.config = {
  assets: {
    minify: false,
    cdn: {
      protocol: 'http',
      cnames: ['localhost'],
      pathPrefix: ''
    }
  },

  api: {
    'default': {
      host: 'localhost',
      port: '2048',
      protocol: 'https'
    }
  },

  rendrApp: {
    someProperty: 'someValue'
  }
};
