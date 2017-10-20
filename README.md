## [Requirejs](http://requirejs.org/) with [babel](https://babeljs.io/) environment

---

Use this in none compile environment.

### Usage

Add config option in your config file.

```js
config: {
  es6: {
    resolveModuleSource: function(source) {
      return 'es6!'+source;
    }
  }
}
```

After then, you can use this

```js
requirejs(['es6!foobar'], function(foobar){
  foobar();
});
```