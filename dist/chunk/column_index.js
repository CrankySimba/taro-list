(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"20":function(t,e,a){"use strict";a.r(e),a.d(e,"default",function(){return d});var n=a(0),o=a(97),r=a(1),i=a(95),c=a(23),s=a(34),l=(a(89),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}),u=function(){function defineProperties(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,a){return e&&defineProperties(t.prototype,e),a&&defineProperties(t,a),t}}(),p=function get(t,e,a){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,e);if(void 0===n){var o=Object.getPrototypeOf(t);return null===o?void 0:get(o,e,a)}if("value"in n)return n.value;var r=n.get;return void 0!==r?r.call(a):void 0};function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}var f="410rpx",d=function(t){function List(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,List);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(List.__proto__||Object.getPrototypeOf(List)).apply(this,arguments));return t.fetch=function(e){return function getTopic(t){return Object(o.a)({"method":"GET","url":"https://cnodejs.org/api/v1/topics","data":{"page":t}})}(t.page).then(function(a){var n,o=a.data.data||[];"function"==typeof e?e(o):1===t.page?t.dataManager.set(o):(n=t.dataManager).push.apply(n,_toConsumableArray(o));if(o.length)t.page+=1;else{var r=t.dataManager.get().length;t.dataManager.updateConfig({"itemSize":function itemSize(t){return t===r-1?"140rpx":f}}),t.dataManager.setLoadStatus({"type":"ended"})}})},t.handleLoadMore=function(){if("none"===t.loadStatus){t.loadStatus="loadMore";var e=t.dataManager.setLoadStatus({"type":"loadMore"},"140rpx").clearAndAddData;t.fetch(function(a){e.apply(void 0,_toConsumableArray(a)),t.loadStatus="none"})}},t.handleRefresh=function(e){"refreshing"!=t.loadStatus&&(t.page=1,t.loadStatus="refreshing",t.dataManager.clearAllLoadStatus(),t.dataManager.updateConfig({"itemSize":f}),t.fetch().then(e).then(function(){t.loadStatus="none"}))},t.page=1,t.state={"list":[]},t.loadStatus="none",t.dataManager=new c.VirutalListDataManager({"itemSize":f,"overscan":5,"column":2,"onChange":function onChange(e){t.setState({"list":e})}},r.a),t}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(List,r["a"].Component),u(List,[{"key":"componentDidMount","value":function componentDidMount(){this.fetch()}},{"key":"render","value":function render(){var t=this.state.list;return t.forEach(function(t){t.item.forEach(function(t){t.type||(t.avatarUrl="url("+t.author.avatar_url+") no-repeat center / cover")})}),n.j.createElement(i.a,{"className":"page column-page"},n.j.createElement(s.a,{"onRefresh":this.handleRefresh,"onLoadmore":this.handleLoadMore,"virtual":!0,"height":"100vh","dataManager":this.dataManager},t.map(function(t){return"loadMore"===t.item[0].type?n.j.createElement(i.a,{"className":"loadStatus","style":t.style},"加载更多..."):"ended"===t.item[0].type?n.j.createElement(i.a,{"className":"loadStatus","style":t.style},"没有更多了"):n.j.createElement(i.a,{"style":l({},t.style),"key":t.index,"className":"topic-column"},t.item.map(function(e,a){return n.j.createElement(i.a,{"className":"topic-item","key":e.id},n.j.createElement(i.a,{"className":"topic-item-inner"},n.j.createElement(i.a,{"style":{"background":e.avatarUrl},"className":"topic-item__avatar"}),n.j.createElement(i.a,{"className":"topic-item__main"},n.j.createElement(i.a,{"className":"topic-item__title"},"#",2*t.index+a," - ",e.title),n.j.createElement(i.a,null,e.author.loginname))))}))})))}},{"key":"componentDidShow","value":function componentDidShow(){p(List.prototype.__proto__||Object.getPrototypeOf(List.prototype),"componentDidShow",this)&&p(List.prototype.__proto__||Object.getPrototypeOf(List.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){p(List.prototype.__proto__||Object.getPrototypeOf(List.prototype),"componentDidHide",this)&&p(List.prototype.__proto__||Object.getPrototypeOf(List.prototype),"componentDidHide",this).call(this)}}]),List}()},"89":function(t,e,a){}}]);