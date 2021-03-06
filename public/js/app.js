require.config({
  appDir: 'app',
  paths: {
    'd3': 'components/d3/d3.v2',
    'underscore': 'components/underscore-amd/underscore',
    'jquery': 'components/zepto/dist/zepto',
    'backbone': 'components/backbone-amd/backbone'
  },
  shim: {
    'd3': {
      exports: 'd3'
    },
    'jquery': {
      exports: '$'
    }
  }
});

require(['app/main']);
