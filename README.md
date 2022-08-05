# vue-tea

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


toast 参考
https://www.cnblogs.com/aahan/p/14139149.html

https://blog.csdn.net/weixin_44278376/article/details/113860367



问题修复
vue-router.esm.js:2065 Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation to current location: "/searchlist?searchWord=%E5%A5%BD%E5%83%8F".
    at createRouterError (http://localhost:8081/js/chunk-vendors.js:37436:15)
    at createNavigationDuplicatedError (http://localhost:8081/js/chunk-vendors.js:37406:15)
    at HashHistory.confirmTransition (http://localhost:8081/js/chunk-vendors.js:37704:18)
    at HashHistory.transitionTo (http://localhost:8081/js/chunk-vendors.js:37631:8)
    at HashHistory.push (http://localhost:8081/js/chunk-vendors.js:38086:10)
    at http://localhost:8081/js/chunk-vendors.js:38405:22
    at new Promise (<anonymous>)
    at VueRouter.push (http://localhost:8081/js/chunk-vendors.js:38404:12)
    at VueComponent.onSearch (http://localhost:8081/js/3.js:41:20)
    at VueComponent.onCancel (http://localhost:8081/js/3.js:51:12)



注意
    https://blog.csdn.net/qq_39650208/article/details/105456143

    需要滚动的内容要包含在一个大的div下，表示是这个div在滚动（个人理解），像这样的格式
    <div ref="content">
    <div>
      <p>滚动的内容1</p>
      <p>滚动的内容2</p>
      <p>滚动的内容3</p>
      <p>滚动的内容4</p>
    </div>
  </div>