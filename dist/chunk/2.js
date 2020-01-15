(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"34":function(e,t,n){"use strict";var i,r,o,a,s,u=n(0),l=n(1),c=n(95),f=n(96),d=n(41),h=n.n(d),p=n(23);function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}!function(e){e.START="start",e.END="end",e.CENTER="center",e.Auto="auto"}(a||(a={})),function(e){e.VERTICAL="vertical",e.HORIZONTAL="horizontal"}(s||(s={}));_defineProperty(i={},s.VERTICAL,"scrollTop"),_defineProperty(i,s.HORIZONTAL,"scrollLeft");var m=(_defineProperty(r={},s.VERTICAL,"height"),_defineProperty(r,s.HORIZONTAL,"width"),r),v=(_defineProperty(o={},s.HORIZONTAL,"left"),_defineProperty(o,s.VERTICAL,"top"),o),g=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var y=function(){function SizeAndPositionManager(e){var t=e.itemCount,n=e.itemSizeGetter,i=e.estimatedSizeGetter;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,SizeAndPositionManager),this.lastMeasuredIndex=-1,this.sizeAndPositionData={},this.itemCount=t,this.itemSizeGetter=n,this.estimatedSizeGetter=i}return g(SizeAndPositionManager,[{"key":"updateConfig","value":function updateConfig(e){var t=e.itemCount,n=e.itemSizeGetter,i=e.estimatedSizeGetter;void 0!==t&&(this.itemCount=t),void 0!==n&&(this.itemSizeGetter=n),void 0!==i&&(this.estimatedSizeGetter=i)}},{"key":"getSizeAndPositionForIndex","value":function getSizeAndPositionForIndex(e){if(e<0||e>=this.itemCount)throw Error("Invalid index "+e+" is outof range 0.."+(this.itemCount-1));if(e>this.lastMeasuredIndex){for(var t=this.getSizeAndPositionOfLastMeasured(),n=t.offset+t.size,i=this.lastMeasuredIndex+1;i<=e;i++){var r=this.itemSizeGetter(i);if(isNaN(r))throw Error("itemSize must be a number");this.sizeAndPositionData[i]={"offset":n,"size":r},n+=r}this.lastMeasuredIndex=e}return this.sizeAndPositionData[e]}},{"key":"getSizeAndPositionOfLastMeasured","value":function getSizeAndPositionOfLastMeasured(){return this.lastMeasuredIndex<0?{"offset":0,"size":0}:this.sizeAndPositionData[this.lastMeasuredIndex]}},{"key":"getTotalSize","value":function getTotalSize(){var e=this.getSizeAndPositionOfLastMeasured(),t=Math.max(0,this.itemCount-1-Math.max(0,this.lastMeasuredIndex));return e.size+e.offset+t*this.estimatedSizeGetter()}},{"key":"getUpdatedOffsetForIndex","value":function getUpdatedOffsetForIndex(e){var t=e.align,n=e.targetIndex,i=e.currentOffset,r=e.containerSize;if(r<=0)return 0;var o=this.getSizeAndPositionForIndex(n),s=o.offset,u=s+o.size-r,l=void 0;switch(t){case a.START:l=s;break;case a.END:l=u;break;case a.CENTER:l=s-r/2+o.size/2;break;default:l=Math.min(s,Math.max(u,i))}var c=this.getTotalSize();return Math.max(0,Math.min(c-r,l))}},{"key":"getVisibleRange","value":function getVisibleRange(e){var t=e.currentOffset,n=e.containerSize,i=e.overscan;if(0===this.getTotalSize()||0===n)return{};for(var r=(t=Math.max(0,t))+n,o=this.findNearestIndex(t),a=this.getSizeAndPositionForIndex(o),s=o,u=a.offset+a.size;u<r&&s<this.itemCount-1;)s++,u+=this.getSizeAndPositionForIndex(s).size;return i>0&&(o=Math.max(0,o-i),s=Math.min(this.itemCount-1,s+i)),{"start":o,"end":s}}},{"key":"resetItem","value":function resetItem(e){this.lastMeasuredIndex=Math.min(this.lastMeasuredIndex,e-1)}},{"key":"findNearestIndex","value":function findNearestIndex(e){if(isNaN(e))throw Error("Invalid offset "+e);var t=this.getSizeAndPositionOfLastMeasured(),n=t.offset+t.size,i=Math.max(0,this.lastMeasuredIndex);return e<=n?this.binarySearch(0,i,e):this.exponentSearch(i,e)}},{"key":"exponentSearch","value":function exponentSearch(e,t){for(var n=1;e<this.itemCount&&this.getSizeAndPositionForIndex(e).offset<t;)e+=n,n*=2;return this.binarySearch(Math.floor(e/2),Math.min(this.itemCount-1,e),t)}},{"key":"binarySearch","value":function binarySearch(e,t,n){for(var i=void 0;t>=e;){i=e+Math.floor((t-e)/2);var r=this.getSizeAndPositionForIndex(i).offset;if(r>n)t=i-1;else{if(!(r<n))return i;e=i+1}}return Math.max(0,e-1)}}]),SizeAndPositionManager}(),b=function getItemSizeGetter(e,t,n,i){return function(r){if(void 0!==t){var o=t.get(r);return o?o[m[n]]:i()}return"function"==typeof e?e(r):Array.isArray(e)?e[r]:e}},S=function getEstimatedGetter(e,t){return function(){return e||"number"==typeof t&&t||50}},z=function normalizeValue(e){return"number"==typeof e&&e?e+"px":e},_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},T=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function VirtualList_defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}var E={"position":"relative"},O={"position":"absolute","width":"100%","height":"auto","left":0,"top":0},L=function(e){function VirtualList(){!function VirtualList_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,VirtualList);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(VirtualList.__proto__||Object.getPrototypeOf(VirtualList)).apply(this,arguments));return e.updateVirutalListDataRange=function(){e.needUpdate&&(e.props.dataManager.__nextTickUpdate(),e.needUpdate=!1)},e.setScrollOffset=function(t){e.offset!==t&&(e.offset=t,e.needUpdate=!0,e.updateVirutalListDataRange())},e.onStateChange=function(t){var n=e.props.dataManager.__getState(),i=n.itemSize,r=n.itemCount,o=n.estimatedSize;t.itemCount!==r&&e.sizeAndPositionManager.updateConfig({"itemCount":r}),t.itemSize===i&&t.estimatedSize===o||e.sizeAndPositionManager.updateConfig({"estimatedSizeGetter":S(o,i),"itemSizeGetter":b(i)}),e.recomputeSizes(),e.forceUpdate()},e.update=function(t){var n=[],i=e.props.dataManager.__getState(),r=i.overscan,o=i.stickyIndices,a=i.column,s=e.sizeAndPositionManager.getVisibleRange({"containerSize":e.getContainerSize(),"currentOffset":e.offset,"overscan":r}),u=s.start,l=s.end;if(void 0!==u&&void 0!==l){Array.isArray(o)&&1===a&&o.forEach(function(i){return n.push({"index":i,"style":e.getStyle(i,!0),"item":t.slice(i,i+a)})});for(var c=u;c<=l;c++)Array.isArray(o)&&o.includes(c)&&1===a||n.push({"index":c,"style":e.getStyle(c),"item":t.slice(c*a,c*a+a)})}return 1===a?n.map(function(e){return _({},e,{"item":e.item[0]})}):n.filter(function(e){return e.item.length})},e.recomputeSizes=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;e.styleCache={},e.sizeAndPositionManager.resetItem(t)},e.delayUpdateTimer=null,e.styleCache={},e.needUpdate=!0,e.offset=0,e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(VirtualList,l["a"].PureComponent),T(VirtualList,[{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.dataManager,t=e.__getState(),n=t.estimatedSize,i=t.itemCount,r=t.itemSize,o=S(n,r);this.sizeAndPositionManager=new y({"itemCount":i,"itemSizeGetter":b(r),"estimatedSizeGetter":o}),e.__setUpdater(this.update),e.__setOnStateChange(this.onStateChange)}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){var t=this.props,n=t.scrollToIndex,i=t.scrollDirection,r=t.onOffsetChange;t.dataManager.__getState().itemCount&&"number"==typeof n&&(e.scrollToIndex!==n||this.props[m[i]]&&0===e[m[i]])&&r(this.getUpdatedScrollOffset(n,this.props)),this.updateVirutalListDataRange()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){null!==this.delayUpdateTimer&&clearTimeout(this.delayUpdateTimer),this.props.dataManager.destroy()}},{"key":"render","value":function render(){var e=this.props,t=e.width,n=e.scrollDirection,i=this.sizeAndPositionManager?this.sizeAndPositionManager.getTotalSize():0,r=_({},E,VirtualList_defineProperty({"width":t},m[n],z(i)));return u.j.createElement(c.a,{"style":r},this.props.children)}},{"key":"getContainerSize","value":function getContainerSize(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=e.scrollDirection;return e[m[t]]}},{"key":"getStyle","value":function getStyle(e,t){var n,i,r=this.props.scrollDirection,o=this.styleCache[e];if(o)return o;var a=this.sizeAndPositionManager.getSizeAndPositionForIndex(e),s=a.size,u=_({},O,t?(VirtualList_defineProperty(n={},v[r],0),VirtualList_defineProperty(n,m[r],s),VirtualList_defineProperty(n,"zIndex",10),VirtualList_defineProperty(n,"position","sticky"),n):(VirtualList_defineProperty(i={},v[r],a.offset),VirtualList_defineProperty(i,m[r],s),VirtualList_defineProperty(i,"zIndex","auto"),i));return this.styleCache[e]=function normalizeStyle(e){var t=["margin","padding","width","height","left","top","right","bottom","fontSize","lineHeight"];return Object.keys(e).reduce(function(n,i){return n[i]=t.find(function(e){return i.includes(e)})?z(e[i]):e[i],n},{})}(u),this.styleCache[e]}},{"key":"getUpdatedScrollOffset","value":function getUpdatedScrollOffset(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props).align;return this.sizeAndPositionManager.getUpdatedOffsetForIndex({"align":t,"currentOffset":this.offset,"targetIndex":e,"containerSize":this.getContainerSize()})}}]),VirtualList}();L.defaultProps={"scrollDirection":s.VERTICAL,"align":a.CENTER,"dynamic":!1},L.propTypes={"dataManager":h.a.instanceOf(p.VirutalListDataManager).isRequired};var P,R,C=L,M={"damping":h.a.number,"distanceToRefresh":h.a.number,"refreshing":h.a.bool,"height":h.a.oneOfType([h.a.number,h.a.string]).isRequired,"className":h.a.string,"style":h.a.object,"onRefresh":h.a.func,"onLoadmore":h.a.func,"showRefreshText":h.a.bool,"custom":h.a.bool,"scrollToIndex":h.a.number,"disabled":h.a.bool,"dataManager":h.a.instanceOf(p.VirutalListDataManager)};!function(e){e.NONE="none",e.PULL="pull",e.ACTIVE="active",e.RELEASE="release"}(P||(P={})),function(e){e.pull="下拉刷新",e.active="释放刷新",e.release="更新中"}(R||(R={}));var w=n(80),x=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){r=!0,o=e}finally{try{!i&&s.return&&s.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),I=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var A=function(e){function ComponentResizeObserver(){!function ComponentResizeObserver_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ComponentResizeObserver);var e=function ComponentResizeObserver_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ComponentResizeObserver.__proto__||Object.getPrototypeOf(ComponentResizeObserver)).apply(this,arguments));return e.handleResize=function(t){var n=x(t,1)[0].contentRect,i=n.width,r=n.height,o=e.props.onResize;i===e.lastWidth&&r===e.lastHeight||"function"!=typeof o||o(),e.lastWidth=i,e.lastHeight=r},e.lastNode=null,e.ob=null,e.lastWidth=-1,e.lastHeight=-1,e}return function ComponentResizeObserver_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ComponentResizeObserver,l["a"].PureComponent),I(ComponentResizeObserver,[{"key":"componentDidMount","value":function componentDidMount(){var e=this.vnode.dom;e&&(this.ob=new w.a(this.handleResize),this.lastNode=e,this.ob.observe(e))}},{"key":"componentDidUpdate","value":function componentDidUpdate(){var e=this.vnode.dom;null===this.ob?e&&(this.ob=new w.a(this.handleResize),this.lastNode=e,this.ob.observe(e)):e&&e!==this.lastNode&&(this.ob.unobserve(this.lastNode),this.ob.observe(e),this.lastNode=e)}},{"key":"componentWillUnmount","value":function componentWillUnmount(){null!==this.ob&&this.ob.disconnect()}},{"key":"render","value":function render(){return this.props.children}}]),ComponentResizeObserver}();n(81);n.d(t,"a",function(){return V});var N=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var k={"passive":!1},V=function(e){function TaroList(e){!function index_h5_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,TaroList);var t=function index_h5_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(TaroList.__proto__||Object.getPrototypeOf(TaroList)).call(this,e));return t.setVirtualListHeight=function(){t.setState({"containerSize":t.rootNode.offsetHeight})},t.onScrollOffsetChange=function(e){t.rootNode.scrollTop=e},t.handleTouchStart=function(e){t.state.status!==P.RELEASE||t.cancelEvent(e)},t.handleTouchMove=function(e){var n=e.touches[0].clientY,i=t.state,r=i.status,o=i.draging,a=i.offset;if(r!==P.RELEASE){if(!(n<t.initialY&&a<1||t.props.disabled||t.checkIsInScrolling())){t.cancelEvent(e),o||(t.setState({"draging":!0}),t.initialY=n);var s=t.damping(n-t.initialY);t.updateOffset(s),s<t.props.distanceToRefresh?r!==P.PULL&&t.setState({"status":P.PULL}):r!==P.ACTIVE&&t.setState({"status":P.ACTIVE})}}else t.cancelEvent(e)},t.handleTouchEnd=function(){var e=t.state,n=e.status,i=e.draging;n!==P.RELEASE&&(i&&t.setState(function(){return{"draging":!1}}),n===P.ACTIVE?t.setRefresh():t.reset())},t.handleScroll=function(){var e=t.getScrollOffset();t.props.virtual&&t.virtualListRef.current&&t.virtualListRef.current.setScrollOffset(e)},t.triggerRefresh=function(){var e=t.props.refreshing;t.state.draging||(e?t.setRefresh():t.reset())},t.reset=function(){t.initialY=0,t.updateOffset(0),t.setState({"status":P.NONE})},t.cancelEvent=function(e){e.preventDefault(),e.stopPropagation()},t.clearRefreshTimer=function(){clearTimeout(t.refreshTimer)},t.updateOffset=function(e){t.state.offset!==e&&t.setState({"offset":e})},t.handleScrollToLower=function(){var e=t.props.onLoadmore;"function"==typeof e&&e()},t.refreshTimer=0,t.initialY=0,t.virtualListRef=l.a.createRef(),t.domId="zyouh-list__id-"+TaroList.index++,t.state={"containerSize":0,"status":P.NONE,"draging":!1,"offset":0},t}return function index_h5_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(TaroList,l["a"].PureComponent),N(TaroList,[{"key":"componentDidMount","value":function componentDidMount(){this.getRootNode(),this.addEventListener(),this.props.disabled||this.triggerRefresh(),this.props.virtual&&this.setVirtualListHeight()}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){var t=this.props,n=t.refreshing,i=t.virtual,r=t.height,o=t.disabled;e.refreshing===n||o?e.disabled!==o&&o&&this.reset():this.triggerRefresh();var a=this.getScrollOffset();i&&this.virtualListRef.current&&this.virtualListRef.current.setScrollOffset(a),i&&r!==e.height&&this.setVirtualListHeight()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearRefreshTimer(),this.removeEventListener()}},{"key":"setRefresh","value":function setRefresh(){var e=this,t=this.props,n=t.distanceToRefresh,i=t.onRefresh;this.setState({"status":P.RELEASE},function(){return e.updateOffset(n)});var r=function onEnd(){e.clearRefreshTimer(),e.props.refreshing||e.reset()};this.clearRefreshTimer(),this.refreshTimer=window.setTimeout(function(){r()},1e4),"function"==typeof i&&i(r)}},{"key":"render","value":function render(){var e=this.props,t=e.height,n=e.width,i=e.style,r=e.className,o=e.custom,a=e.distanceToRefresh,s=e.virtual,l=e.scrollToIndex,d=e.enableBackToTop,h=e.scrollWithAnimation,p=e.dataManager,m=e.showRefreshText,v=this.state,g=v.draging,y=v.status,b=v.offset,S=v.containerSize,z=("zyouh-list__container "+(r||"")).trim(),_=("zyouh-list__body "+(g?"":"zyouh-list__body-transition")).trim(),T={"transform":"translate3d(0, "+b+"px, 0px)"},E={"height":a,"transform":"translate3d(0, "+(-a+Math.min(b,a))+"px, 0)"};return u.j.createElement(A,{"onResize":this.setVirtualListHeight},u.j.createElement(c.a,{"style":i,"className":z},u.j.createElement(f.a,{"id":this.domId,"onScroll":this.handleScroll,"scrollWithAnimation":h,"enableBackToTop":d,"style":{"width":n,"height":t},"className":"zyouh-list__scroller-view","onScrollToLower":this.handleScrollToLower,"scrollY":!0},!o&&u.j.createElement(c.a,{"style":E,"className":("zyouh-list__indicator-container "+(m?"zyouh-list__indicator-container--row":"")+(y===P.RELEASE?" flashing":"")).trim()},u.j.createElement(c.a,{"className":"zyouh-list__indicator zyouh-list__indicator--dot"},u.j.createElement(c.a,{"className":"zyouh-list__indicator-dot"}),u.j.createElement(c.a,{"className":"zyouh-list__indicator-dot"}),u.j.createElement(c.a,{"className":"zyouh-list__indicator-dot"})),m&&u.j.createElement(c.a,{"className":"zyouh-list__indicator-text"},R[y])),u.j.createElement(c.a,{"style":T,"className":_},s?u.j.createElement(C,{"width":n,"ref":this.virtualListRef,"height":S,"dataManager":p,"scrollToIndex":l,"onOffsetChange":this.onScrollOffsetChange},e.children):e.children))))}},{"key":"addEventListener","value":function addEventListener(){this.rootNode.addEventListener("touchstart",this.handleTouchStart,k),this.rootNode.addEventListener("touchmove",this.handleTouchMove,k),this.rootNode.addEventListener("touchend",this.handleTouchEnd,k),this.rootNode.addEventListener("touchcancel",this.handleTouchEnd,k)}},{"key":"removeEventListener","value":function removeEventListener(){this.rootNode.removeEventListener("touchstart",this.handleTouchStart),this.rootNode.removeEventListener("touchmove",this.handleTouchMove),this.rootNode.removeEventListener("touchend",this.handleTouchEnd),this.rootNode.removeEventListener("touchcancel",this.handleTouchEnd)}},{"key":"damping","value":function damping(e){var t=this.props,n=t.distanceToRefresh,damping=t.damping;return e>n?Math.min(damping,e/(1+.002*Math.abs(e))):e}},{"key":"getRootNode","value":function getRootNode(){this.rootNode=document.querySelector("#"+this.domId)}},{"key":"checkIsInScrolling","value":function checkIsInScrolling(){return this.getScrollOffset()>0}},{"key":"getScrollOffset","value":function getScrollOffset(){return this.rootNode&&Math.floor(this.rootNode.scrollTop)||0}}]),TaroList}();V.defaultProps={"height":0,"className":"","width":"100%","distanceToRefresh":60,"damping":200},V.propTypes=M,V.options={"addGlobalClass":!0},V.index=0},"81":function(e,t,n){}}]);