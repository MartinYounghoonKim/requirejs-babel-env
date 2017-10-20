requirejs.config({
  baseUrl: '',
  config: {
    es6: {
      resolveModuleSource: function(source) {
        return 'es6!'+source;
      }
    }
  },
  paths:{
    'babel': 'lib/babel'
    ,'es6': 'lib/es6'
    ,'foo': 'module/foo'
    ,'bar': 'module/bar'
    ,'foobar': 'module/foobar'
  }
});
requirejs(['es6!foobar'], function(foobar){
  foobar();
});