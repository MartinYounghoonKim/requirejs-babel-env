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
    ,'syncModule': 'module/syncModule'
    ,'promise': 'module/promise'
  }
});
requirejs(['es6!foobar','es6!syncModule'], function(foobar,syncModule){
  foobar();
  
  //promise pattern
  syncModule()
  .then( res => {
    console.log(res);
  })
});