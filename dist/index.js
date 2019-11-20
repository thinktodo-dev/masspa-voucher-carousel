'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "/* add css styles here (optional) */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  color: #212529;\n  background-color: #fff;\n}\n\na{\n  text-decoration: unset;\n}\n\n\n.styles_msVoucherCol1__2IXb2, .styles_msVoucherCol2__VM_FB, .styles_msVoucherCol3__1onko, .styles_msVoucherCol4__3N5XT, .styles_msVoucherCol5__1QhTY, .styles_msVoucherCol6__1DKV6, .styles_msVoucherCol7__1Foi2, .styles_msVoucherCol8__KhuUB, .styles_msVoucherCol9__3w5zV, .styles_msVoucherCol10__34spe, .styles_msVoucherCol11__lrRqV, .styles_msVoucherCol12__2L4UW, .styles_msVoucherCol__39uWC,\n.styles_msVoucherColAuto__27l2V, .styles_msVoucherColSm1__1LRz_, .styles_msVoucherColSm2__3VL85, .styles_msVoucherColSm3__182j3, .styles_msVoucherColSm4__3SFYy, .styles_msVoucherColSm5__3RheC, .styles_msVoucherColSm6__1HKyx, .styles_msVoucherColSm7__1ZvwR, .styles_msVoucherColSm8__w-y7A, .styles_msVoucherColSm9__mJ68Q, .styles_msVoucherColSm10__3RF71, .styles_msVoucherColSm11__Focsi, .styles_msVoucherColSm12__65Jlm, .styles_msVoucherColSm__k0Cs6,\n.styles_msVoucherColSmAuto__7qyZc, .styles_msVoucherColMd1__23ah8, .styles_msVoucherColMd2__1PQJZ, .styles_msVoucherColMd3__k-4vZ, .styles_msVoucherColMd4__3mbjN, .styles_msVoucherColMd5__1rTMi, .styles_msVoucherColMd6__f0tS5, .styles_msVoucherColMd7__327T3, .styles_msVoucherColMd8__9kue8, .styles_msVoucherColMd9__3qjFa, .styles_msVoucherColMd10__3IRyz, .styles_msVoucherColMd11__3ZGX6, .styles_msVoucherColMd12__V0bUA, .styles_msVoucherColMd__2n2lQ,\n.styles_msVoucherColMdAuto__27hWV, .styles_msVoucherColLg1__2kJc0, .styles_msVoucherColLg2__1gpzP, .styles_msVoucherColLg3__2ytDQ, .styles_msVoucherColLg4__3VoCD, .styles_msVoucherColLg5__2ISIB, .styles_msVoucherColLg6__1gobv, .styles_msVoucherColLg7__2il1n, .styles_msVoucherColLg8__3qfB5, .styles_msVoucherColLg9__379QQ, .styles_msVoucherColLg10__u1sfz, .styles_msVoucherColLg11__mlEBy, .styles_msVoucherColLg12__3Sbzm, .styles_msVoucherColLg__J4jR9,\n.styles_msVoucherColLgAuto__wZl6J, .styles_msVoucherColXl1__2yjAS, .styles_msVoucherColXl2__3XTjT, .styles_msVoucherColXl3__23UEl, .styles_msVoucherColXl4__3Dikr, .styles_msVoucherColXl5__3XjKD, .styles_msVoucherColXl6__1blll, .styles_msVoucherColXl7__33r1g, .styles_msVoucherColXl8__T_ROW, .styles_msVoucherColXl9__SxPGF, .styles_msVoucherColXl10__3xr2c, .styles_msVoucherColXl11__wl_Ir, .styles_msVoucherColXl12__2Y4g-, .styles_msVoucherColXl__2Uah7,\n.styles_msVoucherColXlAuto__2l8f2 {\n  position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.styles_msVoucherCol__39uWC {\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  max-width: 100%;\n}\n\n.styles_msVoucherColAuto__27l2V {\n  -ms-flex: 0 0 Auto;\n  flex: 0 0 Auto;\n  width: Auto;\n  max-width: 100%;\n}\n\n.styles_msVoucherCol1__2IXb2 {\n  -ms-flex: 0 0 8.333333%;\n  flex: 0 0 8.333333%;\n  max-width: 8.333333%;\n}\n\n.styles_msVoucherCol2__VM_FB {\n  -ms-flex: 0 0 16.666667%;\n  flex: 0 0 16.666667%;\n  max-width: 16.666667%;\n}\n\n.styles_msVoucherCol3__1onko {\n  -ms-flex: 0 0 25%;\n  flex: 0 0 25%;\n  max-width: 25%;\n}\n\n.styles_msVoucherCol4__3N5XT {\n  -ms-flex: 0 0 33.333333%;\n  flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n}\n\n.styles_msVoucherCol5__1QhTY {\n  -ms-flex: 0 0 41.666667%;\n  flex: 0 0 41.666667%;\n  max-width: 41.666667%;\n}\n\n.styles_msVoucherCol6__1DKV6 {\n  -ms-flex: 0 0 50%;\n  flex: 0 0 50%;\n  max-width: 50%;\n}\n\n.styles_msVoucherCol7__1Foi2 {\n  -ms-flex: 0 0 58.333333%;\n  flex: 0 0 58.333333%;\n  max-width: 58.333333%;\n}\n\n.styles_msVoucherCol8__KhuUB {\n  -ms-flex: 0 0 66.666667%;\n  flex: 0 0 66.666667%;\n  max-width: 66.666667%;\n}\n\n.styles_msVoucherCol9__3w5zV {\n  -ms-flex: 0 0 75%;\n  flex: 0 0 75%;\n  max-width: 75%;\n}\n\n.styles_msVoucherCol10__34spe {\n  -ms-flex: 0 0 83.333333%;\n  flex: 0 0 83.333333%;\n  max-width: 83.333333%;\n}\n\n.styles_msVoucherCol11__lrRqV {\n  -ms-flex: 0 0 91.666667%;\n  flex: 0 0 91.666667%;\n  max-width: 91.666667%;\n}\n\n.styles_msVoucherCol12__2L4UW {\n  -ms-flex: 0 0 100%;\n  flex: 0 0 100%;\n  max-width: 100%;\n}\n\n@media (min-width: 576px) {\n  .styles_msVoucherColSm__k0Cs6 {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .styles_msVoucherColSmAuto__7qyZc {\n    -ms-flex: 0 0 Auto;\n    flex: 0 0 Auto;\n    width: Auto;\n    max-width: 100%;\n  }\n  .styles_msVoucherColSm1__1LRz_ {\n    -ms-flex: 0 0 8.333333%;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .styles_msVoucherColSm2__3VL85 {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .styles_msVoucherColSm3__182j3 {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .styles_msVoucherColSm4__3SFYy {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .styles_msVoucherColSm5__3RheC {\n    -ms-flex: 0 0 41.666667%;\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .styles_msVoucherColSm6__1HKyx {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .styles_msVoucherColSm7__1ZvwR {\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .styles_msVoucherColSm8__w-y7A {\n    -ms-flex: 0 0 66.666667%;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .styles_msVoucherColSm9__mJ68Q {\n    -ms-flex: 0 0 75%;\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .styles_msVoucherColSm10__3RF71 {\n    -ms-flex: 0 0 83.333333%;\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .styles_msVoucherColSm11__Focsi {\n    -ms-flex: 0 0 91.666667%;\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .styles_msVoucherColSm12__65Jlm {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n\n@media (min-width: 768px) {\n  .styles_msVoucherColMd__2n2lQ {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .styles_msVoucherColMdAuto__27hWV {\n    -ms-flex: 0 0 Auto;\n    flex: 0 0 Auto;\n    width: Auto;\n    max-width: 100%;\n  }\n  .styles_msVoucherColMd1__23ah8 {\n    -ms-flex: 0 0 8.333333%;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .styles_msVoucherColMd2__1PQJZ {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .styles_msVoucherColMd3__k-4vZ {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .styles_msVoucherColMd4__3mbjN {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .styles_msVoucherColMd5__1rTMi {\n    -ms-flex: 0 0 41.666667%;\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .styles_msVoucherColMd6__f0tS5 {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .styles_msVoucherColMd7__327T3 {\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .styles_msVoucherColMd8__9kue8 {\n    -ms-flex: 0 0 66.666667%;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .styles_msVoucherColMd9__3qjFa {\n    -ms-flex: 0 0 75%;\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .styles_msVoucherColMd10__3IRyz {\n    -ms-flex: 0 0 83.333333%;\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .styles_msVoucherColMd11__3ZGX6 {\n    -ms-flex: 0 0 91.666667%;\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .styles_msVoucherColMd12__V0bUA {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n\n@media (min-width: 992px) {\n  .styles_msVoucherColLg__J4jR9 {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .styles_msVoucherColLgAuto__wZl6J {\n    -ms-flex: 0 0 Auto;\n    flex: 0 0 Auto;\n    width: Auto;\n    max-width: 100%;\n  }\n  .styles_msVoucherColLg1__2kJc0 {\n    -ms-flex: 0 0 8.333333%;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .styles_msVoucherColLg2__1gpzP {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .styles_msVoucherColLg3__2ytDQ {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .styles_msVoucherColLg4__3VoCD {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .styles_msVoucherColLg5__2ISIB {\n    -ms-flex: 0 0 41.666667%;\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .styles_msVoucherColLg6__1gobv {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .styles_msVoucherColLg7__2il1n {\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .styles_msVoucherColLg8__3qfB5 {\n    -ms-flex: 0 0 66.666667%;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .styles_msVoucherColLg9__379QQ {\n    -ms-flex: 0 0 75%;\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .styles_msVoucherColLg10__u1sfz {\n    -ms-flex: 0 0 83.333333%;\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .styles_msVoucherColLg11__mlEBy {\n    -ms-flex: 0 0 91.666667%;\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .styles_msVoucherColLg12__3Sbzm {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n\n@media (min-width: 1200px) {\n  .styles_msVoucherColXl__2Uah7 {\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    max-width: 100%;\n  }\n  .styles_msVoucherColXlAuto__2l8f2 {\n    -ms-flex: 0 0 Auto;\n    flex: 0 0 Auto;\n    width: Auto;\n    max-width: 100%;\n  }\n  .styles_msVoucherColXl1__2yjAS {\n    -ms-flex: 0 0 8.333333%;\n    flex: 0 0 8.333333%;\n    max-width: 8.333333%;\n  }\n  .styles_msVoucherColXl2__3XTjT {\n    -ms-flex: 0 0 16.666667%;\n    flex: 0 0 16.666667%;\n    max-width: 16.666667%;\n  }\n  .styles_msVoucherColXl3__23UEl {\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 25%;\n  }\n  .styles_msVoucherColXl4__3Dikr {\n    -ms-flex: 0 0 33.333333%;\n    flex: 0 0 33.333333%;\n    max-width: 33.333333%;\n  }\n  .styles_msVoucherColXl5__3XjKD {\n    -ms-flex: 0 0 41.666667%;\n    flex: 0 0 41.666667%;\n    max-width: 41.666667%;\n  }\n  .styles_msVoucherColXl6__1blll {\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 50%;\n  }\n  .styles_msVoucherColXl7__33r1g {\n    -ms-flex: 0 0 58.333333%;\n    flex: 0 0 58.333333%;\n    max-width: 58.333333%;\n  }\n  .styles_msVoucherColXl8__T_ROW {\n    -ms-flex: 0 0 66.666667%;\n    flex: 0 0 66.666667%;\n    max-width: 66.666667%;\n  }\n  .styles_msVoucherColXl9__SxPGF {\n    -ms-flex: 0 0 75%;\n    flex: 0 0 75%;\n    max-width: 75%;\n  }\n  .styles_msVoucherColXl10__3xr2c {\n    -ms-flex: 0 0 83.333333%;\n    flex: 0 0 83.333333%;\n    max-width: 83.333333%;\n  }\n  .styles_msVoucherColXl11__wl_Ir {\n    -ms-flex: 0 0 91.666667%;\n    flex: 0 0 91.666667%;\n    max-width: 91.666667%;\n  }\n  .styles_msVoucherColXl12__2Y4g- {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n}\n\n.styles_msVoucherCarouselImg__2KzIE{\n  width:100%\n}\n.styles_msVoucherCarouselContainer__3aIl3\n{\n\tposition:relative\n}\n\n.styles_msVoucherPadding0__1Hbju{\n  padding: 0px;\n}\n\n.styles_msVoucherRow__2npHC{\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.styles_msVoucherCarouselBtn__jl5pT\n{\n\tposition:absolute;\n\theight:100%;\n\ttop:50%;\n\tleft:50%;\n\ttransform:translate(-50%,-50%);\n}\n\n.styles_msVoucherCarouselPr__1BxiL\n{\n\tpadding:0 4.123% 0 0\n}\n\n.styles_msVoucherCarouselPl__1COrx\n{\n\tpadding:0 0 0 4.123%\n}\n\n.styles_msVoucherCarouselRight__2jXIK\n{\n\tposition:relative\n}\n\n.styles_msVoucherCarouselBtnDetail__pKpOw\n{\n\tposition:absolute;\n\tright:0;\n\tbottom:0;\n\tpadding:18px 40px;\n\tbackground-color:#977961;\n\twidth:250px;\n\tcursor:pointer\n}\n\n.styles_msVoucherCarouselBtnDetail__pKpOw:hover\n{\n\tbackground-color:#212529;\n\tborder-radius:6px;\n\ttransition:all 1.5s\n}\n\n.styles_arrowRight__-2fgD{\n  color: #ffffff;\n}\n\n.styles_msVoucherCarouselBtnDetail__pKpOw:hover .styles_arrowRight__-2fgD\n{\n\ttransform:scale(1.5)\n}\n\n.styles_msVoucherCarouselBtnText__3Yp0c\n{\n\tcolor:#FFF;\n\tfont-size:12px;\n\tfont-weight:700;\n\tletter-spacing:2px;\n\tline-height:18px;\n\ttext-transform:uppercase;\n\tdisplay:flex;\n\talign-items:center;\n\tjustify-content:space-between\n}\n\n.styles_msVoucherContainer__38O35 {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 576px) {\n  .styles_msVoucherContainer__38O35 {\n    max-width: 540px;\n  }\n}\n\n@media (min-width: 768px) {\n  .styles_msVoucherContainer__38O35 {\n    max-width: 720px;\n  }\n}\n\n@media (min-width: 992px) {\n  .styles_msVoucherContainer__38O35 {\n    max-width: 960px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .styles_msVoucherContainer__38O35 {\n    max-width: 1140px;\n  }\n}\n\n@media only screen and (min-width: 768px) and (max-width: 991.98px) {\n  .styles_msVoucherCarouselBtnDetail__pKpOw\n\t{\n\t\tpadding:8px 16px;\n\t\twidth:160px\n\t}\n}\n\n@media only screen and (max-width: 767.98px) {\n  .styles_msVoucherCarouselBtnDetail__pKpOw\n\t{\n\t\tposition:absolute;\n\t\tright:0;\n\t\tbottom:0;\n\t\tpadding:12px 18px;\n\t\tbackground-color:#977961;\n\t\twidth:180px;\n\t\tcursor:pointer\n\t}\n}\n\n@media only screen and (max-width: 576px) {\n  .styles_msVoucherCarouselBtnDetail__pKpOw\n\t{\n\t\tposition:absolute;\n\t\tright:0;\n\t\tbottom:0;\n\t\tpadding:8px 16px;\n\t\tbackground-color:#977961;\n\t\twidth:120px;\n\t\tcursor:pointer;\n\t\tmargin-right:15px\n\t}\n  .styles_msVoucherCarouselBtnText__3Yp0c\n\t{\n\t\tfont-size:8px\n\t}\n}";
var styles = { "msVoucherCol1": "styles_msVoucherCol1__2IXb2", "msVoucherCol2": "styles_msVoucherCol2__VM_FB", "msVoucherCol3": "styles_msVoucherCol3__1onko", "msVoucherCol4": "styles_msVoucherCol4__3N5XT", "msVoucherCol5": "styles_msVoucherCol5__1QhTY", "msVoucherCol6": "styles_msVoucherCol6__1DKV6", "msVoucherCol7": "styles_msVoucherCol7__1Foi2", "msVoucherCol8": "styles_msVoucherCol8__KhuUB", "msVoucherCol9": "styles_msVoucherCol9__3w5zV", "msVoucherCol10": "styles_msVoucherCol10__34spe", "msVoucherCol11": "styles_msVoucherCol11__lrRqV", "msVoucherCol12": "styles_msVoucherCol12__2L4UW", "msVoucherCol": "styles_msVoucherCol__39uWC", "msVoucherColAuto": "styles_msVoucherColAuto__27l2V", "msVoucherColSm1": "styles_msVoucherColSm1__1LRz_", "msVoucherColSm2": "styles_msVoucherColSm2__3VL85", "msVoucherColSm3": "styles_msVoucherColSm3__182j3", "msVoucherColSm4": "styles_msVoucherColSm4__3SFYy", "msVoucherColSm5": "styles_msVoucherColSm5__3RheC", "msVoucherColSm6": "styles_msVoucherColSm6__1HKyx", "msVoucherColSm7": "styles_msVoucherColSm7__1ZvwR", "msVoucherColSm8": "styles_msVoucherColSm8__w-y7A", "msVoucherColSm9": "styles_msVoucherColSm9__mJ68Q", "msVoucherColSm10": "styles_msVoucherColSm10__3RF71", "msVoucherColSm11": "styles_msVoucherColSm11__Focsi", "msVoucherColSm12": "styles_msVoucherColSm12__65Jlm", "msVoucherColSm": "styles_msVoucherColSm__k0Cs6", "msVoucherColSmAuto": "styles_msVoucherColSmAuto__7qyZc", "msVoucherColMd1": "styles_msVoucherColMd1__23ah8", "msVoucherColMd2": "styles_msVoucherColMd2__1PQJZ", "msVoucherColMd3": "styles_msVoucherColMd3__k-4vZ", "msVoucherColMd4": "styles_msVoucherColMd4__3mbjN", "msVoucherColMd5": "styles_msVoucherColMd5__1rTMi", "msVoucherColMd6": "styles_msVoucherColMd6__f0tS5", "msVoucherColMd7": "styles_msVoucherColMd7__327T3", "msVoucherColMd8": "styles_msVoucherColMd8__9kue8", "msVoucherColMd9": "styles_msVoucherColMd9__3qjFa", "msVoucherColMd10": "styles_msVoucherColMd10__3IRyz", "msVoucherColMd11": "styles_msVoucherColMd11__3ZGX6", "msVoucherColMd12": "styles_msVoucherColMd12__V0bUA", "msVoucherColMd": "styles_msVoucherColMd__2n2lQ", "msVoucherColMdAuto": "styles_msVoucherColMdAuto__27hWV", "msVoucherColLg1": "styles_msVoucherColLg1__2kJc0", "msVoucherColLg2": "styles_msVoucherColLg2__1gpzP", "msVoucherColLg3": "styles_msVoucherColLg3__2ytDQ", "msVoucherColLg4": "styles_msVoucherColLg4__3VoCD", "msVoucherColLg5": "styles_msVoucherColLg5__2ISIB", "msVoucherColLg6": "styles_msVoucherColLg6__1gobv", "msVoucherColLg7": "styles_msVoucherColLg7__2il1n", "msVoucherColLg8": "styles_msVoucherColLg8__3qfB5", "msVoucherColLg9": "styles_msVoucherColLg9__379QQ", "msVoucherColLg10": "styles_msVoucherColLg10__u1sfz", "msVoucherColLg11": "styles_msVoucherColLg11__mlEBy", "msVoucherColLg12": "styles_msVoucherColLg12__3Sbzm", "msVoucherColLg": "styles_msVoucherColLg__J4jR9", "msVoucherColLgAuto": "styles_msVoucherColLgAuto__wZl6J", "msVoucherColXl1": "styles_msVoucherColXl1__2yjAS", "msVoucherColXl2": "styles_msVoucherColXl2__3XTjT", "msVoucherColXl3": "styles_msVoucherColXl3__23UEl", "msVoucherColXl4": "styles_msVoucherColXl4__3Dikr", "msVoucherColXl5": "styles_msVoucherColXl5__3XjKD", "msVoucherColXl6": "styles_msVoucherColXl6__1blll", "msVoucherColXl7": "styles_msVoucherColXl7__33r1g", "msVoucherColXl8": "styles_msVoucherColXl8__T_ROW", "msVoucherColXl9": "styles_msVoucherColXl9__SxPGF", "msVoucherColXl10": "styles_msVoucherColXl10__3xr2c", "msVoucherColXl11": "styles_msVoucherColXl11__wl_Ir", "msVoucherColXl12": "styles_msVoucherColXl12__2Y4g-", "msVoucherColXl": "styles_msVoucherColXl__2Uah7", "msVoucherColXlAuto": "styles_msVoucherColXlAuto__2l8f2", "msVoucherCarouselImg": "styles_msVoucherCarouselImg__2KzIE", "msVoucherCarouselContainer": "styles_msVoucherCarouselContainer__3aIl3", "msVoucherPadding0": "styles_msVoucherPadding0__1Hbju", "msVoucherRow": "styles_msVoucherRow__2npHC", "msVoucherCarouselBtn": "styles_msVoucherCarouselBtn__jl5pT", "msVoucherCarouselPr": "styles_msVoucherCarouselPr__1BxiL", "msVoucherCarouselPl": "styles_msVoucherCarouselPl__1COrx", "msVoucherCarouselRight": "styles_msVoucherCarouselRight__2jXIK", "msVoucherCarouselBtnDetail": "styles_msVoucherCarouselBtnDetail__pKpOw", "arrowRight": "styles_arrowRight__-2fgD", "msVoucherCarouselBtnText": "styles_msVoucherCarouselBtnText__3Yp0c", "msVoucherContainer": "styles_msVoucherContainer__38O35" };
styleInject(css);

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var exenv = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (module.exports) {
		module.exports = ExecutionEnvironment;
	} else {
		window.ExecutionEnvironment = ExecutionEnvironment;
	}

}());
});

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}

var reactLifecyclesCompat_es = /*#__PURE__*/Object.freeze({
  polyfill: polyfill
});

var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

function timeout$1(callback, delay, time) {
  var t = new Timer;
  delay = delay == null ? 0 : +delay;
  t.restart(function(elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}

function interval$1(callback, delay, time) {
  var t = new Timer, total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  delay = +delay, time = time == null ? now() : +time;
  t.restart(function tick(elapsed) {
    elapsed += total;
    t.restart(tick, total += delay, time);
    callback(elapsed);
  }, delay, time);
  return t;
}

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var transitionId = 0;
function getTransitionId() {
  return ++transitionId;
}
function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }
}
function once(func) {
  var called = false;
  return function transitionEvent() {
    if (!called) {
      called = true;
      func.call(this);
    }
  };
}
function isNamespace(prop) {
  return _typeof(prop) === 'object' && Array.isArray(prop) === false;
}

var linear = function linear(t) {
  return +t;
};

var timingDefaults = {
  delay: 0,
  duration: 250,
  ease: linear
};

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Events = function Events(config) {
  var _this = this;

  _classCallCheck(this, Events);

  this.start = null;
  this.interrupt = null;
  this.end = null;

  if (config.events) {
    Object.keys(config.events).forEach(function (d) {
      if (typeof config.events[d] !== 'function') {
        throw new Error('Event handlers must be a function');
      } else {
        _this[d] = once(config.events[d]);
      }
    });
  }
};

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BaseNode = function () {
  function BaseNode(state) {
    _classCallCheck$1(this, BaseNode);

    this.state = state || {};
  }

  _createClass(BaseNode, [{
    key: "transition",
    value: function transition(config) {
      if (Array.isArray(config)) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = config[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;
            this.parse(item);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } else {
        this.parse(config);
      }
    }
  }, {
    key: "isTransitioning",
    value: function isTransitioning() {
      return !!this.transitionData;
    }
  }, {
    key: "stopTransitions",
    value: function stopTransitions() {
      var transitions = this.transitionData;

      if (transitions) {
        Object.keys(transitions).forEach(function (t) {
          transitions[t].timer.stop();
        });
      }
    }
  }, {
    key: "setState",
    value: function setState(update) {
      if (typeof update === 'function') {
        extend(this.state, update(this.state));
      } else {
        extend(this.state, update);
      }
    }
  }, {
    key: "parse",
    value: function parse(config) {
      var _this = this;

      var clone = _objectSpread({}, config);

      var events = new Events(clone);

      if (clone.events) {
        delete clone.events;
      }

      var timing = _objectSpread({}, timingDefaults, clone.timing || {}, {
        time: now()
      });

      if (clone.timing) {
        delete clone.timing;
      }

      Object.keys(clone).forEach(function (stateKey) {
        var tweens = [];
        var next = clone[stateKey];

        if (isNamespace(next)) {
          Object.keys(next).forEach(function (attr) {
            var val = next[attr];

            if (Array.isArray(val)) {
              if (val.length === 1) {
                tweens.push(_this.getTween(attr, val[0], stateKey));
              } else {
                _this.setState(function (state) {
                  var _objectSpread2, _ref;

                  return _ref = {}, _ref[stateKey] = _objectSpread({}, state[stateKey], (_objectSpread2 = {}, _objectSpread2[attr] = val[0], _objectSpread2)), _ref;
                });

                tweens.push(_this.getTween(attr, val[1], stateKey));
              }
            } else if (typeof val === 'function') {
              var getNameSpacedCustomTween = function getNameSpacedCustomTween() {
                var kapellmeisterNamespacedTween = function kapellmeisterNamespacedTween(t) {
                  _this.setState(function (state) {
                    var _objectSpread3, _ref2;

                    return _ref2 = {}, _ref2[stateKey] = _objectSpread({}, state[stateKey], (_objectSpread3 = {}, _objectSpread3[attr] = val(t), _objectSpread3)), _ref2;
                  });
                };

                return kapellmeisterNamespacedTween;
              };

              tweens.push(getNameSpacedCustomTween);
            } else {
              _this.setState(function (state) {
                var _objectSpread4, _ref3;

                return _ref3 = {}, _ref3[stateKey] = _objectSpread({}, state[stateKey], (_objectSpread4 = {}, _objectSpread4[attr] = val, _objectSpread4)), _ref3;
              });

              tweens.push(_this.getTween(attr, val, stateKey));
            }
          });
        } else {
          if (Array.isArray(next)) {
            if (next.length === 1) {
              tweens.push(_this.getTween(stateKey, next[0], null));
            } else {
              var _this$setState;

              _this.setState((_this$setState = {}, _this$setState[stateKey] = next[0], _this$setState));

              tweens.push(_this.getTween(stateKey, next[1], null));
            }
          } else if (typeof next === 'function') {
            var getCustomTween = function getCustomTween() {
              var kapellmeisterTween = function kapellmeisterTween(t) {
                var _this$setState2;

                _this.setState((_this$setState2 = {}, _this$setState2[stateKey] = next(t), _this$setState2));
              };

              return kapellmeisterTween;
            };

            tweens.push(getCustomTween);
          } else {
            var _this$setState3;

            _this.setState((_this$setState3 = {}, _this$setState3[stateKey] = next, _this$setState3));

            tweens.push(_this.getTween(stateKey, next, null));
          }
        }

        _this.update({
          stateKey: stateKey,
          timing: timing,
          tweens: tweens,
          events: events,
          status: 0
        });
      });
    }
  }, {
    key: "getTween",
    value: function getTween(attr, endValue, nameSpace) {
      var _this2 = this;

      return function () {
        var begValue = nameSpace ? _this2.state[nameSpace][attr] : _this2.state[attr];

        if (begValue === endValue) {
          return null;
        }

        var i = _this2.getInterpolator(begValue, endValue, attr, nameSpace);

        var stateTween;

        if (nameSpace === null) {
          stateTween = function stateTween(t) {
            var _this2$setState;

            _this2.setState((_this2$setState = {}, _this2$setState[attr] = i(t), _this2$setState));
          };
        } else {
          stateTween = function stateTween(t) {
            _this2.setState(function (state) {
              var _objectSpread5, _ref4;

              return _ref4 = {}, _ref4[nameSpace] = _objectSpread({}, state[nameSpace], (_objectSpread5 = {}, _objectSpread5[attr] = i(t), _objectSpread5)), _ref4;
            });
          };
        }

        return stateTween;
      };
    }
  }, {
    key: "update",
    value: function update(transition) {
      if (!this.transitionData) {
        this.transitionData = {};
      }

      this.init(getTransitionId(), transition);
    }
  }, {
    key: "init",
    value: function init(id, transition) {
      var _this3 = this;

      var n = transition.tweens.length;
      var tweens = new Array(n);

      var queue = function queue(elapsed) {
        transition.status = 1;
        transition.timer.restart(start, transition.timing.delay, transition.timing.time);

        if (transition.timing.delay <= elapsed) {
          start(elapsed - transition.timing.delay);
        }
      };

      this.transitionData[id] = transition;
      transition.timer = timer(queue, 0, transition.timing.time);

      var start = function start(elapsed) {
        if (transition.status !== 1) return stop();

        for (var tid in _this3.transitionData) {
          var t = _this3.transitionData[tid];

          if (t.stateKey !== transition.stateKey) {
            continue;
          }

          if (t.status === 3) {
            return timeout$1(start);
          }

          if (t.status === 4) {
            t.status = 6;
            t.timer.stop();

            if (t.events.interrupt) {
              t.events.interrupt.call(_this3);
            }

            delete _this3.transitionData[tid];
          } else if (+tid < id) {
            t.status = 6;
            t.timer.stop();
            delete _this3.transitionData[tid];
          }
        }

        timeout$1(function () {
          if (transition.status === 3) {
            transition.status = 4;
            transition.timer.restart(tick, transition.timing.delay, transition.timing.time);
            tick(elapsed);
          }
        });
        transition.status = 2;

        if (transition.events.start) {
          transition.events.start.call(_this3);
        }

        if (transition.status !== 2) {
          return;
        }

        transition.status = 3;
        var j = -1;

        for (var i = 0; i < n; ++i) {
          var res = transition.tweens[i]();

          if (res) {
            tweens[++j] = res;
          }
        }

        tweens.length = j + 1;
      };

      var tick = function tick(elapsed) {
        var t = 1;

        if (elapsed < transition.timing.duration) {
          t = transition.timing.ease(elapsed / transition.timing.duration);
        } else {
          transition.timer.restart(stop);
          transition.status = 5;
        }

        var i = -1;

        while (++i < tweens.length) {
          tweens[i](t);
        }

        if (transition.status === 5) {
          if (transition.events.end) {
            transition.events.end.call(_this3);
          }

          stop();
        }
      };

      var stop = function stop() {
        transition.status = 6;
        transition.timer.stop();
        delete _this3.transitionData[id];

        for (var _ in _this3.transitionData) {
          return;
        }

        delete _this3.transitionData;
      };
    }
  }]);

  return BaseNode;
}();



var es = /*#__PURE__*/Object.freeze({
  BaseNode: BaseNode,
  now: now,
  timer: timer,
  interval: interval$1,
  timeout: timeout$1
});

var mergeKeys_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function mergeKeys(currNodeKeys, currKeyIndex, nextNodeKeys, nextKeyIndex) {
  var allKeys = [];

  for (var i = 0; i < nextNodeKeys.length; i++) {
    allKeys[i] = nextNodeKeys[i];
  }

  for (var _i = 0; _i < currNodeKeys.length; _i++) {
    if (nextKeyIndex[currNodeKeys[_i]] === undefined) {
      allKeys.push(currNodeKeys[_i]);
    }
  }

  return allKeys.sort(function (a, b) {
    var nextOrderA = nextKeyIndex[a];
    var nextOrderB = nextKeyIndex[b];
    var currOrderA = currKeyIndex[a];
    var currOrderB = currKeyIndex[b];

    if (nextOrderA != null && nextOrderB != null) {
      return nextKeyIndex[a] - nextKeyIndex[b];
    } else if (currOrderA != null && currOrderB != null) {
      return currKeyIndex[a] - currKeyIndex[b];
    } else if (nextOrderA != null) {
      for (var _i2 = 0; _i2 < nextNodeKeys.length; _i2++) {
        var pivot = nextNodeKeys[_i2];

        if (!currKeyIndex[pivot]) {
          continue;
        }

        if (nextOrderA < nextKeyIndex[pivot] && currOrderB > currKeyIndex[pivot]) {
          return -1;
        } else if (nextOrderA > nextKeyIndex[pivot] && currOrderB < currKeyIndex[pivot]) {
          return 1;
        }
      }

      return 1;
    }

    for (var _i3 = 0; _i3 < nextNodeKeys.length; _i3++) {
      var _pivot = nextNodeKeys[_i3];

      if (!currKeyIndex[_pivot]) {
        continue;
      }

      if (nextOrderB < nextKeyIndex[_pivot] && currOrderA > currKeyIndex[_pivot]) {
        return 1;
      } else if (nextOrderB > nextKeyIndex[_pivot] && currOrderA < currKeyIndex[_pivot]) {
        return -1;
      }
    }

    return -1;
  });
}

var _default = mergeKeys;
exports.default = _default;
});

unwrapExports(mergeKeys_1);

var types = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LEAVE = exports.UPDATE = exports.ENTER = void 0;
var ENTER = 'ENTER';
exports.ENTER = ENTER;
var UPDATE = 'UPDATE';
exports.UPDATE = UPDATE;
var LEAVE = 'LEAVE';
exports.LEAVE = LEAVE;
});

unwrapExports(types);
var types_1 = types.LEAVE;
var types_2 = types.UPDATE;
var types_3 = types.ENTER;

var utils = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numeric = numeric;

function numeric(beg, end) {
  var a = +beg;
  var b = +end - a;
  return function (t) {
    return a + b * t;
  };
}
});

unwrapExports(utils);
var utils_1 = utils.numeric;

var NodeGroup_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(React__default);



var _propTypes = _interopRequireDefault(PropTypes);



var _mergeKeys = _interopRequireDefault(mergeKeys_1);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NodeGroup = function (_Component) {
  _inherits(NodeGroup, _Component);

  function NodeGroup(props) {
    var _this;

    _classCallCheck(this, NodeGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NodeGroup).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "animate", function () {
      var _this$state = _this.state,
          nodeKeys = _this$state.nodeKeys,
          nodeHash = _this$state.nodeHash;

      if (_this.unmounting) {
        return;
      }

      var pending = false;
      var nextNodeKeys = [];
      var length = nodeKeys.length;

      for (var i = 0; i < length; i++) {
        var k = nodeKeys[i];
        var n = nodeHash[k];
        var isTransitioning = n.isTransitioning();

        if (isTransitioning) {
          pending = true;
        }

        if (n.type === types.LEAVE && !isTransitioning) {
          delete nodeHash[k];
        } else {
          nextNodeKeys.push(k);
        }
      }

      if (!pending) {
        _this.interval.stop();
      }

      _this.setState(function () {
        return {
          nodeKeys: nextNodeKeys,
          nodes: nextNodeKeys.map(function (key) {
            return nodeHash[key];
          })
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "interval", null);

    _defineProperty(_assertThisInitialized(_this), "unmounting", false);

    var interpolation = props.interpolation;

    var Node = function (_BaseNode) {
      _inherits(Node, _BaseNode);

      function Node(key, data) {
        var _this2;

        _classCallCheck(this, Node);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Node).call(this));

        _defineProperty(_assertThisInitialized(_this2), "getInterpolator", interpolation);

        _this2.key = key;
        _this2.data = data;
        _this2.type = types.ENTER;
        return _this2;
      }

      return Node;
    }(es.BaseNode);

    _this.state = {
      Node: Node,
      nodeKeys: [],
      nodeHash: {},
      nodes: [],
      data: null
    };
    return _this;
  }

  _createClass(NodeGroup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startInterval();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.data !== this.props.data && !this.unmounting) {
        this.startInterval();
      }
    }
  }, {
    key: "startInterval",
    value: function startInterval() {
      if (!this.interval) {
        this.interval = (0, es.interval)(this.animate);
      } else {
        this.interval.restart(this.animate);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$state2 = this.state,
          nodeKeys = _this$state2.nodeKeys,
          nodeHash = _this$state2.nodeHash;
      this.unmounting = true;

      if (this.interval) {
        this.interval.stop();
      }

      nodeKeys.forEach(function (key) {
        nodeHash[key].stopTransitions();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var renderedChildren = this.props.children(this.state.nodes);
      return renderedChildren && _react.default.Children.only(renderedChildren);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.data !== prevState.data) {
        var data = nextProps.data,
            keyAccessor = nextProps.keyAccessor,
            start = nextProps.start,
            enter = nextProps.enter,
            update = nextProps.update,
            leave = nextProps.leave;
        var Node = prevState.Node,
            nodeKeys = prevState.nodeKeys,
            nodeHash = prevState.nodeHash;
        var keyIndex = {};

        for (var i = 0; i < nodeKeys.length; i++) {
          keyIndex[nodeKeys[i]] = i;
        }

        var nextKeyIndex = {};
        var nextNodeKeys = [];

        for (var _i = 0; _i < data.length; _i++) {
          var d = data[_i];
          var k = keyAccessor(d, _i);
          nextKeyIndex[k] = _i;
          nextNodeKeys.push(k);

          if (keyIndex[k] === undefined) {
            var node = new Node();
            node.key = k;
            node.data = d;
            node.type = types.ENTER;
            nodeHash[k] = node;
          }
        }

        for (var _i2 = 0; _i2 < nodeKeys.length; _i2++) {
          var _k = nodeKeys[_i2];
          var n = nodeHash[_k];

          if (nextKeyIndex[_k] !== undefined) {
            n.data = data[nextKeyIndex[_k]];
            n.type = types.UPDATE;
          } else {
            n.type = types.LEAVE;
          }
        }

        var mergedNodeKeys = (0, _mergeKeys.default)(nodeKeys, keyIndex, nextNodeKeys, nextKeyIndex);

        for (var _i3 = 0; _i3 < mergedNodeKeys.length; _i3++) {
          var _k2 = mergedNodeKeys[_i3];
          var _n = nodeHash[_k2];
          var _d = _n.data;

          if (_n.type === types.ENTER) {
            _n.setState(start(_d, nextKeyIndex[_k2]));

            _n.transition(enter(_d, nextKeyIndex[_k2]));
          } else if (_n.type === types.LEAVE) {
            _n.transition(leave(_d, keyIndex[_k2]));
          } else {
            _n.transition(update(_d, nextKeyIndex[_k2]));
          }
        }

        return {
          data: data,
          nodes: mergedNodeKeys.map(function (key) {
            return nodeHash[key];
          }),
          nodeHash: nodeHash,
          nodeKeys: mergedNodeKeys
        };
      }

      return null;
    }
  }]);

  return NodeGroup;
}(_react.Component);

NodeGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  data: _propTypes.default.array.isRequired,
  keyAccessor: _propTypes.default.func.isRequired,
  interpolation: _propTypes.default.func,
  start: _propTypes.default.func.isRequired,
  enter: _propTypes.default.func,
  update: _propTypes.default.func,
  leave: _propTypes.default.func,
  children: _propTypes.default.func.isRequired
} : {};
NodeGroup.defaultProps = {
  enter: function enter() {},
  update: function update() {},
  leave: function leave() {},
  interpolation: utils.numeric
};
(0, reactLifecyclesCompat_es.polyfill)(NodeGroup);
var _default = NodeGroup;
exports.default = _default;
});

unwrapExports(NodeGroup_1);

var Animate_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(React__default);

var _propTypes = _interopRequireDefault(PropTypes);

var _NodeGroup = _interopRequireDefault(NodeGroup_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var keyAccessor = function keyAccessor() {
  return '$$key$$';
};

var Animate = function (_Component) {
  _inherits(Animate, _Component);

  function Animate() {
    _classCallCheck(this, Animate);

    return _possibleConstructorReturn(this, _getPrototypeOf(Animate).apply(this, arguments));
  }

  _createClass(Animate, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          show = _this$props.show,
          start = _this$props.start,
          enter = _this$props.enter,
          update = _this$props.update,
          leave = _this$props.leave,
          interpolation = _this$props.interpolation,
          children = _this$props.children;
      var data = typeof start === 'function' ? start() : start;
      return _react.default.createElement(_NodeGroup.default, {
        data: show ? [data] : [],
        start: function start() {
          return data;
        },
        keyAccessor: keyAccessor,
        interpolation: interpolation,
        enter: typeof enter === 'function' ? enter : function () {
          return enter;
        },
        update: typeof update === 'function' ? update : function () {
          return update;
        },
        leave: typeof leave === 'function' ? leave : function () {
          return leave;
        }
      }, function (nodes) {
        if (!nodes[0]) {
          return null;
        }

        var renderedChildren = children(nodes[0].state);
        return renderedChildren && _react.default.Children.only(renderedChildren);
      });
    }
  }]);

  return Animate;
}(_react.Component);

Animate.propTypes = process.env.NODE_ENV !== "production" ? {
  show: _propTypes.default.bool,
  interpolation: _propTypes.default.func,
  start: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
  enter: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.array, _propTypes.default.object]),
  update: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.array, _propTypes.default.object]),
  leave: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.array, _propTypes.default.object]),
  children: _propTypes.default.func.isRequired
} : {};
Animate.defaultProps = {
  show: true,
  interpolation: utils.numeric
};
var _default = Animate;
exports.default = _default;
});

var Animate = unwrapExports(Animate_1);

function linear$1(t) {
  return +t;
}

function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}

function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

var exponent = 3;

var polyIn = (function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
})(exponent);

var polyOut = (function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
})(exponent);

var polyInOut = (function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
})(exponent);

var pi = Math.PI,
    halfPi = pi / 2;

function sinIn(t) {
  return 1 - Math.cos(t * halfPi);
}

function sinOut(t) {
  return Math.sin(t * halfPi);
}

function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}

function expIn(t) {
  return Math.pow(2, 10 * t - 10);
}

function expOut(t) {
  return 1 - Math.pow(2, -10 * t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
}

function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}

var b1 = 4 / 11,
    b2 = 6 / 11,
    b3 = 8 / 11,
    b4 = 3 / 4,
    b5 = 9 / 11,
    b6 = 10 / 11,
    b7 = 15 / 16,
    b8 = 21 / 22,
    b9 = 63 / 64,
    b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}

var overshoot = 1.70158;

var backIn = (function custom(s) {
  s = +s;

  function backIn(t) {
    return t * t * ((s + 1) * t - s);
  }

  backIn.overshoot = custom;

  return backIn;
})(overshoot);

var backOut = (function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((s + 1) * t + s) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
})(overshoot);

var backInOut = (function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
})(overshoot);

var tau = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

var elasticIn = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function(a) { return custom(a, p * tau); };
  elasticIn.period = function(p) { return custom(a, p); };

  return elasticIn;
})(amplitude, period);

var elasticOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticOut.period = function(p) { return custom(a, p); };

  return elasticOut;
})(amplitude, period);

var elasticInOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0
        ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)
        : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticInOut.period = function(p) { return custom(a, p); };

  return elasticInOut;
})(amplitude, period);



var easing = /*#__PURE__*/Object.freeze({
  easeLinear: linear$1,
  easeQuad: quadInOut,
  easeQuadIn: quadIn,
  easeQuadOut: quadOut,
  easeQuadInOut: quadInOut,
  easeCubic: cubicInOut,
  easeCubicIn: cubicIn,
  easeCubicOut: cubicOut,
  easeCubicInOut: cubicInOut,
  easePoly: polyInOut,
  easePolyIn: polyIn,
  easePolyOut: polyOut,
  easePolyInOut: polyInOut,
  easeSin: sinInOut,
  easeSinIn: sinIn,
  easeSinOut: sinOut,
  easeSinInOut: sinInOut,
  easeExp: expInOut,
  easeExpIn: expIn,
  easeExpOut: expOut,
  easeExpInOut: expInOut,
  easeCircle: circleInOut,
  easeCircleIn: circleIn,
  easeCircleOut: circleOut,
  easeCircleInOut: circleInOut,
  easeBounce: bounceOut,
  easeBounceIn: bounceIn,
  easeBounceOut: bounceOut,
  easeBounceInOut: bounceInOut,
  easeBack: backInOut,
  easeBackIn: backIn,
  easeBackOut: backOut,
  easeBackInOut: backInOut,
  easeElastic: elasticOut,
  easeElasticIn: elasticIn,
  easeElasticOut: elasticOut,
  easeElasticInOut: elasticInOut
});

function _typeof$1(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof$1(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var defaultButtonStyles = function defaultButtonStyles(disabled) {
  return {
    border: 0,
    background: 'rgba(0,0,0,0.4)',
    color: 'white',
    padding: 10,
    textTransform: 'uppercase',
    opacity: disabled && 0.3,
    cursor: disabled ? 'not-allowed' : 'pointer'
  };
};

var PreviousButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PreviousButton, _React$Component);

  function PreviousButton() {
    var _this;

    _classCallCheck$2(this, PreviousButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PreviousButton).apply(this, arguments));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass$1(PreviousButton, [{
    key: "handleClick",
    value: function handleClick(event) {
      event.preventDefault();
      this.props.previousSlide();
    }
  }, {
    key: "render",
    value: function render() {
      var disabled = this.props.currentSlide === 0 && !this.props.wrapAround || this.props.slideCount === 0;
      return React__default.createElement("button", {
        style: defaultButtonStyles(disabled),
        disabled: disabled,
        onClick: this.handleClick,
        "aria-label": "previous",
        type: "button"
      }, "Prev");
    }
  }]);

  return PreviousButton;
}(React__default.Component);
var NextButton =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(NextButton, _React$Component2);

  function NextButton() {
    var _this2;

    _classCallCheck$2(this, NextButton);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(NextButton).apply(this, arguments));
    _this2.handleClick = _this2.handleClick.bind(_assertThisInitialized(_this2));
    _this2.nextButtonDisable = _this2.nextButtonDisabled.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass$1(NextButton, [{
    key: "handleClick",
    value: function handleClick(event) {
      event.preventDefault();
      this.props.nextSlide();
    }
  }, {
    key: "nextButtonDisabled",
    value: function nextButtonDisabled(params) {
      var wrapAround = params.wrapAround,
          slidesToShow = params.slidesToShow,
          currentSlide = params.currentSlide,
          cellAlign = params.cellAlign,
          slideCount = params.slideCount;
      var buttonDisabled = false;

      if (!wrapAround) {
        var lastSlideIndex = slideCount - 1;
        var slidesShowing = slidesToShow;
        var lastSlideOffset = 0;

        switch (cellAlign) {
          case 'center':
            slidesShowing = (slidesToShow - 1) * 0.5;
            lastSlideOffset = Math.floor(slidesToShow * 0.5) - 1;
            break;

          case 'right':
            slidesShowing = 1;
            break;
        }

        if (slidesToShow > 1) {
          buttonDisabled = currentSlide + slidesShowing > lastSlideIndex + lastSlideOffset;
        } else {
          buttonDisabled = currentSlide + 1 > lastSlideIndex;
        }
      }

      return buttonDisabled;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          wrapAround = _this$props.wrapAround,
          slidesToShow = _this$props.slidesToShow,
          currentSlide = _this$props.currentSlide,
          cellAlign = _this$props.cellAlign,
          slideCount = _this$props.slideCount;
      var disabled = this.nextButtonDisabled({
        wrapAround: wrapAround,
        slidesToShow: slidesToShow,
        currentSlide: currentSlide,
        cellAlign: cellAlign,
        slideCount: slideCount
      });
      return React__default.createElement("button", {
        style: defaultButtonStyles(disabled),
        disabled: disabled,
        onClick: this.handleClick,
        "aria-label": "next",
        type: "button"
      }, "Next");
    }
  }]);

  return NextButton;
}(React__default.Component);
var PagingDots =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(PagingDots, _React$Component3);

  function PagingDots() {
    _classCallCheck$2(this, PagingDots);

    return _possibleConstructorReturn(this, _getPrototypeOf(PagingDots).apply(this, arguments));
  }

  _createClass$1(PagingDots, [{
    key: "getDotIndexes",
    value: function getDotIndexes(slideCount, slidesToScroll, slidesToShow, cellAlign) {
      var dotIndexes = [];
      var lastDotIndex = slideCount - slidesToShow;

      switch (cellAlign) {
        case 'center':
        case 'right':
          lastDotIndex += slidesToShow - 1;
          break;
      }

      if (lastDotIndex < 0) {
        return [0];
      }

      for (var i = 0; i < lastDotIndex; i += slidesToScroll) {
        dotIndexes.push(i);
      }

      dotIndexes.push(lastDotIndex);
      return dotIndexes;
    }
  }, {
    key: "getListStyles",
    value: function getListStyles() {
      return {
        position: 'relative',
        top: -10,
        display: 'flex',
        margin: 0,
        padding: 0,
        listStyleType: 'none'
      };
    }
  }, {
    key: "getButtonStyles",
    value: function getButtonStyles(active) {
      return {
        cursor: 'pointer',
        opacity: active ? 1 : 0.5,
        background: 'transparent',
        border: 'none'
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var indexes = this.getDotIndexes(this.props.slideCount, this.props.slidesToScroll, this.props.slidesToShow, this.props.cellAlign);
      return React__default.createElement("ul", {
        style: this.getListStyles()
      }, indexes.map(function (index) {
        return React__default.createElement("li", {
          key: index,
          className: _this3.props.currentSlide === index ? 'paging-item active' : 'paging-item'
        }, React__default.createElement("button", {
          type: "button",
          style: _this3.getButtonStyles(_this3.props.currentSlide === index),
          onClick: _this3.props.goToSlide.bind(null, index),
          "aria-label": "slide ".concat(index + 1, " bullet")
        }, React__default.createElement("svg", {
          className: "paging-dot",
          width: "6",
          height: "6"
        }, React__default.createElement("circle", {
          cx: "3",
          cy: "3",
          r: "3",
          style: {
            fill: 'black'
          }
        }))));
      }));
    }
  }]);

  return PagingDots;
}(React__default.Component);

function _typeof$2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); if (staticProps) _defineProperties$2(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$1(self, call) { if (call && (_typeof$2(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$1(self); }

function _getPrototypeOf$1(o) { _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$1(o); }

function _assertThisInitialized$1(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$1(subClass, superClass); }

function _setPrototypeOf$1(o, p) { _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$1(o, p); }
var MIN_ZOOM_SCALE = 0;
var MAX_ZOOM_SCALE = 1;

var ScrollTransition =
/*#__PURE__*/
function (_React$Component) {
  _inherits$1(ScrollTransition, _React$Component);

  function ScrollTransition(props) {
    var _this;

    _classCallCheck$3(this, ScrollTransition);

    _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(ScrollTransition).call(this, props));
    _this.getListStyles = _this.getListStyles.bind(_assertThisInitialized$1(_this));
    return _this;
  }

  _createClass$2(ScrollTransition, [{
    key: "getSlideDirection",
    value: function getSlideDirection(start, end, isWrapping) {
      var direction = 0;
      if (start === end) return direction;

      if (isWrapping) {
        direction = start < end ? -1 : 1;
      } else {
        direction = start < end ? 1 : -1;
      }

      return direction;
    }
    /* eslint-disable complexity */

  }, {
    key: "getSlideTargetPosition",
    value: function getSlideTargetPosition(index, positionValue) {
      var targetPosition = (this.props.slideWidth + this.props.cellSpacing) * index;
      var cellAlignOffset = 0;

      switch (this.props.cellAlign) {
        case 'center':
          cellAlignOffset = (this.props.slideWidth + this.props.cellSpacing) * ((this.props.slidesToShow - 1) / 2);
          break;

        case 'right':
          cellAlignOffset = (this.props.slideWidth + this.props.cellSpacing) * (this.props.slidesToShow - 1);
          break;
      }

      var startSlide = Math.min(Math.floor(Math.abs((positionValue - cellAlignOffset) / this.props.slideWidth)), this.props.slideCount - 1);
      var offset = 0;

      if (this.props.animation === 'zoom' && (this.props.currentSlide === index + 1 || this.props.currentSlide === 0 && index === this.props.children.length - 1)) {
        offset = this.props.slideOffset;
      } else if (this.props.animation === 'zoom' && (this.props.currentSlide === index - 1 || this.props.currentSlide === this.props.children.length - 1 && index === 0)) {
        offset = -this.props.slideOffset;
      }

      if (this.props.wrapAround && index !== startSlide) {
        var direction = this.getSlideDirection(startSlide, this.props.currentSlide, this.props.isWrappingAround);
        var slidesBefore = 0;
        var slidesAfter = 0;

        switch (this.props.cellAlign) {
          case 'left':
            if (direction < 0) {
              slidesBefore = this.props.slidesToScroll;
              slidesAfter = this.props.slideCount - this.props.slidesToScroll - 1;
            } else {
              slidesBefore = 0;
              slidesAfter = this.props.slideCount - 1;
            }

            break;

          case 'center':
            if (direction === 0) {
              slidesBefore = Math.floor((this.props.slideCount - 1) / 2);
              slidesAfter = this.props.slideCount - slidesBefore - 1;
            } else {
              var visibleSlidesFromCenter = Math.ceil((this.props.slidesToShow - 1) / 2);
              var slidesScrollDirection = Math.min(visibleSlidesFromCenter + this.props.slidesToScroll, this.props.slideCount - 1);
              var slidesOppositeDirection = this.props.slideCount - slidesScrollDirection - 1;

              if (direction > 0) {
                slidesAfter = slidesScrollDirection;
                slidesBefore = slidesOppositeDirection;
              } else if (direction < 0) {
                slidesBefore = slidesScrollDirection;
                slidesAfter = slidesOppositeDirection;
              }
            }

            break;

          case 'right':
            if (direction > 0) {
              slidesBefore = this.props.slideCount - this.props.slidesToScroll - 1;
              slidesAfter = this.props.slidesToScroll;
            } else {
              slidesBefore = this.props.slideCount - 1;
              slidesAfter = 0;
            }

            break;
        }

        var distanceFromStart = Math.abs(startSlide - index);

        if (index < startSlide) {
          if (distanceFromStart > slidesBefore) {
            targetPosition = (this.props.slideWidth + this.props.cellSpacing) * (this.props.slideCount + index);
          }
        } else if (distanceFromStart > slidesAfter) {
          targetPosition = (this.props.slideWidth + this.props.cellSpacing) * (this.props.slideCount - index) * -1;
        }
      }

      return targetPosition + offset;
    }
    /* eslint-enable complexity */

  }, {
    key: "formatChildren",
    value: function formatChildren(children) {
      var _this2 = this;

      var _this$props = this.props,
          top = _this$props.top,
          left = _this$props.left,
          currentSlide = _this$props.currentSlide,
          slidesToShow = _this$props.slidesToShow;
      var positionValue = this.props.vertical ? top : left;
      return React__default.Children.map(children, function (child, index) {
        var visible = index >= currentSlide && index < currentSlide + slidesToShow;
        return React__default.createElement("li", {
          className: "slider-slide".concat(visible ? ' slide-visible' : ''),
          style: _this2.getSlideStyles(index, positionValue),
          key: index
        }, child);
      });
    }
  }, {
    key: "getSlideStyles",
    value: function getSlideStyles(index, positionValue) {
      var targetPosition = this.getSlideTargetPosition(index, positionValue);
      var transformScale = this.props.animation === 'zoom' && this.props.currentSlide !== index ? Math.max(Math.min(this.props.zoomScale, MAX_ZOOM_SCALE), MIN_ZOOM_SCALE) : 1.0;
      return {
        boxSizing: 'border-box',
        display: this.props.vertical ? 'block' : 'inline-block',
        height: 'auto',
        left: this.props.vertical ? 0 : targetPosition,
        listStyleType: 'none',
        marginBottom: this.props.vertical ? this.props.cellSpacing / 2 : 'auto',
        marginLeft: this.props.vertical ? 'auto' : this.props.cellSpacing / 2,
        marginRight: this.props.vertical ? 'auto' : this.props.cellSpacing / 2,
        marginTop: this.props.vertical ? this.props.cellSpacing / 2 : 'auto',
        MozBoxSizing: 'border-box',
        position: 'absolute',
        top: this.props.vertical ? targetPosition : 0,
        transform: "scale(".concat(transformScale, ")"),
        transition: 'transform .4s linear',
        verticalAlign: 'top',
        width: this.props.vertical ? '100%' : this.props.slideWidth
      };
    }
  }, {
    key: "getListStyles",
    value: function getListStyles(styles) {
      var deltaX = styles.deltaX,
          deltaY = styles.deltaY;
      var listWidth = this.props.slideWidth * React__default.Children.count(this.props.children);
      var spacingOffset = this.props.cellSpacing * React__default.Children.count(this.props.children);
      var transform = "translate3d(".concat(deltaX, "px, ").concat(deltaY, "px, 0)");
      return {
        transform: transform,
        WebkitTransform: transform,
        msTransform: "translate(".concat(deltaX, "px, ").concat(deltaY, "px)"),
        position: 'relative',
        display: 'block',
        margin: this.props.vertical ? "".concat(this.props.cellSpacing / 2 * -1, "px 0px") : "0px ".concat(this.props.cellSpacing / 2 * -1, "px"),
        padding: 0,
        height: this.props.vertical ? listWidth + spacingOffset : this.props.slideHeight,
        width: this.props.vertical ? 'auto' : listWidth + spacingOffset,
        cursor: this.props.dragging === true ? 'pointer' : 'inherit',
        boxSizing: 'border-box',
        MozBoxSizing: 'border-box',
        touchAction: "pinch-zoom ".concat(this.props.vertical ? 'pan-x' : 'pan-y')
      };
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.formatChildren(this.props.children);
      var deltaX = this.props.deltaX;
      var deltaY = this.props.deltaY;
      return React__default.createElement("ul", {
        className: "slider-list",
        style: this.getListStyles({
          deltaX: deltaX,
          deltaY: deltaY
        })
      }, children);
    }
  }]);

  return ScrollTransition;
}(React__default.Component);
ScrollTransition.propTypes = {
  animation: PropTypes.oneOf(['zoom']),
  cellAlign: PropTypes.string,
  cellSpacing: PropTypes.number,
  currentSlide: PropTypes.number,
  deltaX: PropTypes.number,
  deltaY: PropTypes.number,
  dragging: PropTypes.bool,
  isWrappingAround: PropTypes.bool,
  left: PropTypes.number,
  slideCount: PropTypes.number,
  slideHeight: PropTypes.number,
  slidesToScroll: PropTypes.number,
  slideOffset: PropTypes.number,
  slideWidth: PropTypes.number,
  top: PropTypes.number,
  vertical: PropTypes.bool,
  wrapAround: PropTypes.bool,
  zoomScale: PropTypes.number
};
ScrollTransition.defaultProps = {
  cellAlign: 'left',
  cellSpacing: 0,
  currentSlide: 0,
  deltaX: 0,
  deltaY: 0,
  dragging: false,
  isWrappingAround: false,
  left: 0,
  slideCount: 0,
  slideHeight: 0,
  slidesToScroll: 1,
  slideWidth: 0,
  top: 0,
  vertical: false,
  wrapAround: false,
  zoomScale: 0.85
};

function _typeof$3(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$3 = function _typeof(obj) { return typeof obj; }; } else { _typeof$3 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$3(obj); }

function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$3(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$3(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$3(Constructor.prototype, protoProps); if (staticProps) _defineProperties$3(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$2(self, call) { if (call && (_typeof$3(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$2(self); }

function _assertThisInitialized$2(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$2(o) { _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$2(o); }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$2(subClass, superClass); }

function _setPrototypeOf$2(o, p) { _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$2(o, p); }

var FadeTransition =
/*#__PURE__*/
function (_React$Component) {
  _inherits$2(FadeTransition, _React$Component);

  function FadeTransition(props) {
    var _this;

    _classCallCheck$4(this, FadeTransition);

    _this = _possibleConstructorReturn$2(this, _getPrototypeOf$2(FadeTransition).call(this, props));
    _this.fadeFromSlide = props.currentSlide;
    return _this;
  }

  _createClass$3(FadeTransition, [{
    key: "formatChildren",
    value: function formatChildren(children, opacity) {
      var _this2 = this;

      var _this$props = this.props,
          currentSlide = _this$props.currentSlide,
          slidesToShow = _this$props.slidesToShow;
      return React__default.Children.map(children, function (child, index) {
        var visible = index >= currentSlide && index < currentSlide + slidesToShow;
        return React__default.createElement("li", {
          className: "slider-slide".concat(visible ? ' slide-visible' : ''),
          style: _this2.getSlideStyles(index, opacity),
          key: index
        }, child);
      });
    }
  }, {
    key: "getSlideOpacityAndLeftMap",
    value: function getSlideOpacityAndLeftMap(fadeFrom, fadeTo, fade) {
      // Figure out which position to fade to
      var fadeToPosition = fadeTo;

      if (fadeFrom > fade && fadeFrom === 0) {
        fadeToPosition = fadeFrom - this.props.slidesToShow;
      } else if (fadeFrom < fade && fadeFrom + this.props.slidesToShow > this.props.slideCount - 1) {
        fadeToPosition = fadeFrom + this.props.slidesToShow;
      } // Calculate opacity for active slides


      var opacity = {};

      if (fadeFrom === fadeTo) {
        opacity[fadeFrom] = 1;
      } else {
        var distance = fadeFrom - fadeToPosition;
        opacity[fadeFrom] = (fade - fadeToPosition) / distance;
        opacity[fadeTo] = (fadeFrom - fade) / distance;
      } // Calculate left for slides and merge in opacity


      var map = {};

      for (var i = 0; i < this.props.slidesToShow; i++) {
        map[fadeFrom + i] = {
          opacity: opacity[fadeFrom],
          left: this.props.slideWidth * i
        };
        map[fadeTo + i] = {
          opacity: opacity[fadeTo],
          left: this.props.slideWidth * i
        };
      }

      return map;
    }
  }, {
    key: "getSlideStyles",
    value: function getSlideStyles(index, data) {
      return {
        boxSizing: 'border-box',
        display: 'block',
        height: 'auto',
        left: data[index] ? data[index].left : 0,
        listStyleType: 'none',
        marginBottom: 'auto',
        marginLeft: this.props.cellSpacing / 2,
        marginRight: this.props.cellSpacing / 2,
        marginTop: 'auto',
        MozBoxSizing: 'border-box',
        opacity: data[index] ? data[index].opacity : 0,
        position: 'absolute',
        top: 0,
        verticalAlign: 'top',
        visibility: data[index] ? 'inherit' : 'hidden',
        width: this.props.slideWidth
      };
    }
  }, {
    key: "getContainerStyles",
    value: function getContainerStyles() {
      var width = this.props.slideWidth * this.props.slidesToShow;
      return {
        boxSizing: 'border-box',
        cursor: this.props.dragging === true ? 'pointer' : 'inherit',
        display: 'block',
        height: this.props.slideHeight,
        margin: this.props.vertical ? "".concat(this.props.cellSpacing / 2 * -1, "px 0px") : "0px ".concat(this.props.cellSpacing / 2 * -1, "px"),
        MozBoxSizing: 'border-box',
        padding: 0,
        touchAction: 'none',
        width: width
      };
    }
  }, {
    key: "render",
    value: function render() {
      var fade = -(this.props.deltaX || this.props.deltaY) / this.props.slideWidth;

      if (parseInt(fade) === fade) {
        this.fadeFromSlide = fade;
      }

      var opacityAndLeftMap = this.getSlideOpacityAndLeftMap(this.fadeFromSlide, this.props.currentSlide, fade);
      var children = this.formatChildren(this.props.children, opacityAndLeftMap);
      return React__default.createElement("ul", {
        className: "slider-list",
        style: this.getContainerStyles()
      }, children);
    }
  }]);

  return FadeTransition;
}(React__default.Component);
FadeTransition.propTypes = {
  cellSpacing: PropTypes.number,
  currentSlide: PropTypes.number,
  deltaX: PropTypes.number,
  deltaY: PropTypes.number,
  dragging: PropTypes.bool,
  isWrappingAround: PropTypes.bool,
  left: PropTypes.number,
  slideCount: PropTypes.number,
  slideHeight: PropTypes.number,
  slidesToShow: PropTypes.number,
  slideWidth: PropTypes.number,
  top: PropTypes.number,
  vertical: PropTypes.bool,
  wrapAround: PropTypes.bool
};
FadeTransition.defaultProps = {
  cellSpacing: 0,
  currentSlide: 0,
  deltaX: 0,
  deltaY: 0,
  dragging: false,
  isWrappingAround: false,
  left: 0,
  slideCount: 0,
  slideHeight: 0,
  slidesToShow: 1,
  slideWidth: 0,
  top: 0,
  vertical: false,
  wrapAround: false
};

function _typeof$4(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$4 = function _typeof(obj) { return typeof obj; }; } else { _typeof$4 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$4(obj); }

function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$4(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$4(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$4(Constructor.prototype, protoProps); if (staticProps) _defineProperties$4(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$3(self, call) { if (call && (_typeof$4(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$3(self); }

function _getPrototypeOf$3(o) { _getPrototypeOf$3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$3(o); }

function _assertThisInitialized$3(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$3(subClass, superClass); }

function _setPrototypeOf$3(o, p) { _setPrototypeOf$3 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$3(o, p); }
var MIN_ZOOM_SCALE$1 = 0;
var MAX_ZOOM_SCALE$1 = 1;

var ScrollTransition3D =
/*#__PURE__*/
function (_React$Component) {
  _inherits$3(ScrollTransition3D, _React$Component);

  function ScrollTransition3D(props) {
    var _this;

    _classCallCheck$5(this, ScrollTransition3D);

    _this = _possibleConstructorReturn$3(this, _getPrototypeOf$3(ScrollTransition3D).call(this, props));
    _this.getListStyles = _this.getListStyles.bind(_assertThisInitialized$3(_this));
    return _this;
  }

  _createClass$4(ScrollTransition3D, [{
    key: "getSlideDirection",
    value: function getSlideDirection(start, end, isWrapping) {
      var direction = 0;
      if (start === end) return direction;

      if (isWrapping) {
        direction = start < end ? -1 : 1;
      } else {
        direction = start < end ? 1 : -1;
      }

      return direction;
    }
    /* eslint-disable complexity */

  }, {
    key: "getSlideTargetPosition",
    value: function getSlideTargetPosition(index) {
      var targetPosition = 0;
      var offset = 0;

      if (index !== this.props.currentSlide) {
        var relativeDistanceToCurrentSlide = this.getRelativeDistanceToCurrentSlide(index);
        targetPosition = (this.props.slideWidth + this.props.cellSpacing) * relativeDistanceToCurrentSlide - this.getZoomOffsetFor(relativeDistanceToCurrentSlide);
        offset = 0;

        if (this.props.animation === 'zoom' && (this.props.currentSlide === index + 1 || this.props.currentSlide === 0 && index === this.props.children.length - 1)) {
          offset = this.props.slideOffset;
        } else if (this.props.animation === 'zoom' && (this.props.currentSlide === index - 1 || this.props.currentSlide === this.props.children.length - 1 && index === 0)) {
          offset = -this.props.slideOffset;
        }
      }

      return targetPosition + offset;
    }
    /* eslint-enable complexity */

  }, {
    key: "formatChildren",
    value: function formatChildren(children) {
      var _this2 = this;

      var _this$props = this.props,
          top = _this$props.top,
          left = _this$props.left,
          currentSlide = _this$props.currentSlide,
          slidesToShow = _this$props.slidesToShow;
      var positionValue = this.props.vertical ? top : left;
      return React__default.Children.map(children, function (child, index) {
        var visible = _this2.getDistanceToCurrentSlide(index) <= slidesToShow / 2;
        var current = currentSlide === index;
        return React__default.createElement("li", {
          className: "slider-slide".concat(visible ? ' slide-visible' : '').concat(current ? ' slide-current' : ''),
          style: _this2.getSlideStyles(index, positionValue),
          key: index
        }, child);
      });
    }
  }, {
    key: "getZoomOffsetFor",
    value: function getZoomOffsetFor(relativeDistanceToCurrent) {
      if (relativeDistanceToCurrent === 0) {
        return 0;
      }

      var marginGeneratedByZoom = (1 - Math.pow(this.props.zoomScale, Math.abs(relativeDistanceToCurrent))) * this.props.slideWidth;
      var direction = relativeDistanceToCurrent < 0 ? -1 : 1;
      var result = marginGeneratedByZoom * direction + this.getZoomOffsetFor(relativeDistanceToCurrent < 0 ? relativeDistanceToCurrent + 1 : relativeDistanceToCurrent - 1);
      return result;
    }
  }, {
    key: "getDistance",
    value: function getDistance(index, referenceIndex) {
      return Math.abs(index - referenceIndex);
    }
  }, {
    key: "getDistanceToCurrentSlide",
    value: function getDistanceToCurrentSlide(index) {
      return this.props.wrapAround ? Math.min(Math.min(this.getDistance(index, 0) + this.getDistance(this.props.currentSlide, this.props.slideCount), this.getDistance(index, this.props.slideCount) + this.getDistance(this.props.currentSlide, 0)), this.getDistance(index, this.props.currentSlide)) : this.getDistance(index, this.props.currentSlide);
    }
  }, {
    key: "getRelativeDistanceToCurrentSlide",
    value: function getRelativeDistanceToCurrentSlide(index) {
      if (this.props.wrapAround) {
        var distanceByLeftEge = this.getDistance(index, 0) + this.getDistance(this.props.currentSlide, this.props.slideCount);
        var distanceByRightEdge = this.getDistance(index, this.props.slideCount) + this.getDistance(this.props.currentSlide, 0);
        var absoluteDirectDistance = this.getDistance(index, this.props.currentSlide);
        var minimumDistance = Math.min(Math.min(distanceByLeftEge, distanceByRightEdge), absoluteDirectDistance);

        switch (minimumDistance) {
          case absoluteDirectDistance:
            return index - this.props.currentSlide;

          case distanceByLeftEge:
            return distanceByLeftEge;

          case distanceByRightEdge:
            return -distanceByRightEdge;

          default:
            return 0;
        }
      } else {
        return index - this.props.currentSlide;
      }
    }
  }, {
    key: "getTransformScale",
    value: function getTransformScale(index) {
      return this.props.currentSlide !== index ? Math.max(Math.min(Math.pow(this.props.zoomScale, this.getDistanceToCurrentSlide(index)), MAX_ZOOM_SCALE$1), MIN_ZOOM_SCALE$1) : 1.0;
    }
  }, {
    key: "getOpacityScale",
    value: function getOpacityScale(index) {
      return this.props.currentSlide !== index ? Math.max(Math.min(Math.pow(this.props.opacityScale, this.getDistanceToCurrentSlide(index)), MAX_ZOOM_SCALE$1), MIN_ZOOM_SCALE$1) : 1.0;
    }
  }, {
    key: "getSlideStyles",
    value: function getSlideStyles(index, positionValue) {
      var targetPosition = this.getSlideTargetPosition(index, positionValue);
      var transformScale = this.getTransformScale(index);
      return {
        zIndex: this.props.slideCount - this.getDistanceToCurrentSlide(index),
        boxSizing: 'border-box',
        display: this.props.vertical ? 'block' : 'inline-block',
        height: 'auto',
        left: this.props.vertical ? 0 : targetPosition,
        listStyleType: 'none',
        marginBottom: this.props.vertical ? this.props.cellSpacing / 2 : 'auto',
        marginLeft: this.props.vertical ? 'auto' : this.props.cellSpacing / 2,
        marginRight: this.props.vertical ? 'auto' : this.props.cellSpacing / 2,
        marginTop: this.props.vertical ? this.props.cellSpacing / 2 : 'auto',
        MozBoxSizing: 'border-box',
        position: 'absolute',
        top: this.props.vertical ? targetPosition : 0,
        transform: "scale(".concat(transformScale, ")"),
        transition: 'left 0.4s ease-out, transform 0.4s ease-out, opacity 0.4s ease-out',
        verticalAlign: 'top',
        width: this.props.vertical ? '100%' : this.props.slideWidth,
        opacity: this.getOpacityScale(index)
      };
    }
  }, {
    key: "getListStyles",
    value: function getListStyles() {
      var listWidth = this.props.slideWidth * React__default.Children.count(this.props.children);
      var spacingOffset = this.props.cellSpacing * React__default.Children.count(this.props.children);
      return {
        left: "calc(50% - (".concat(this.props.slideWidth, "px / 2))"),
        position: 'relative',
        margin: this.props.vertical ? "".concat(this.props.cellSpacing / 2 * -1, "px 0px") : "".concat(this.props.slideListMargin, "px ").concat(this.props.cellSpacing / 2 * -1, "px"),
        padding: 0,
        height: this.props.vertical ? listWidth + spacingOffset : this.props.slideHeight,
        width: this.props.vertical ? 'auto' : '100%',
        cursor: this.props.dragging === true ? 'pointer' : 'inherit',
        boxSizing: 'border-box',
        MozBoxSizing: 'border-box',
        touchAction: "pinch-zoom ".concat(this.props.vertical ? 'pan-x' : 'pan-y')
      };
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.formatChildren(this.props.children);
      return React__default.createElement("ul", {
        className: "slider-list",
        style: this.getListStyles()
      }, children);
    }
  }]);

  return ScrollTransition3D;
}(React__default.Component);
ScrollTransition3D.propTypes = {
  cellSpacing: PropTypes.number,
  currentSlide: PropTypes.number,
  dragging: PropTypes.bool,
  isWrappingAround: PropTypes.bool,
  left: PropTypes.number,
  slideCount: PropTypes.number,
  slideHeight: PropTypes.number,
  slideOffset: PropTypes.number,
  slideWidth: PropTypes.number,
  top: PropTypes.number,
  vertical: PropTypes.bool,
  wrapAround: PropTypes.bool,
  zoomScale: PropTypes.number,
  opacityScale: PropTypes.number,
  slidesToShow: PropTypes.number,
  slideListMargin: PropTypes.number
};
ScrollTransition3D.defaultProps = {
  cellSpacing: 0,
  currentSlide: 0,
  dragging: false,
  isWrappingAround: false,
  left: 0,
  slideCount: 0,
  slideHeight: 0,
  slideWidth: 0,
  top: 0,
  vertical: false,
  wrapAround: true,
  zoomScale: 0.75,
  opacityScale: 0.65,
  slidesToShow: 3,
  slideListMargin: 10
};

var Transitions = {
  fade: FadeTransition,
  scroll: ScrollTransition,
  scroll3d: ScrollTransition3D
};

var AnnounceSlide = function AnnounceSlide(_ref) {
  var message = _ref.message;
  var styles = {
    position: 'absolute',
    left: '-10000px',
    top: 'auto',
    width: '1px',
    height: '1px',
    overflow: 'hidden'
  };
  return React__default.createElement("div", {
    "aria-live": "polite",
    "aria-atomic": "true",
    style: styles,
    tabIndex: -1
  }, message);
};

var defaultRenderAnnounceSlideMessage = function defaultRenderAnnounceSlideMessage(_ref2) {
  var currentSlide = _ref2.currentSlide,
      slideCount = _ref2.slideCount;
  return "Slide ".concat(currentSlide + 1, " of ").concat(slideCount);
};

var addEvent = function addEvent(elem, type, eventHandle) {
  if (elem === null || typeof elem === 'undefined') {
    return;
  }

  if (elem.addEventListener) {
    elem.addEventListener(type, eventHandle, false);
  } else if (elem.attachEvent) {
    elem.attachEvent("on".concat(type), eventHandle);
  } else {
    elem["on".concat(type)] = eventHandle;
  }
};
var removeEvent = function removeEvent(elem, type, eventHandle) {
  if (elem === null || typeof elem === 'undefined') {
    return;
  }

  if (elem.removeEventListener) {
    elem.removeEventListener(type, eventHandle, false);
  } else if (elem.detachEvent) {
    elem.detachEvent("on".concat(type), eventHandle);
  } else {
    elem["on".concat(type)] = null;
  }
};
var getPropsByTransitionMode = function getPropsByTransitionMode(props, keys) {
  var slidesToShow = props.slidesToShow,
      transitionMode = props.transitionMode;
  var updatedDefaults = {};

  if (transitionMode === 'fade') {
    keys.forEach(function (key) {
      switch (key) {
        case 'slidesToShow':
          updatedDefaults[key] = Math.max(parseInt(slidesToShow), 1);
          break;

        case 'slidesToScroll':
          updatedDefaults[key] = Math.max(parseInt(slidesToShow), 1);
          break;

        case 'cellAlign':
          updatedDefaults[key] = 'left';
          break;

        default:
          updatedDefaults[key] = props[key];
          break;
      }
    });
  } else {
    keys.forEach(function (key) {
      updatedDefaults[key] = props[key];
    });
  }

  return updatedDefaults;
};
var swipeDirection = function swipeDirection(x1, x2, y1, y2, vertical) {
  var xDist = x1 - x2;
  var yDist = y1 - y2;
  var r = Math.atan2(yDist, xDist);
  var swipeAngle = Math.round(r * 180 / Math.PI);

  if (swipeAngle < 0) {
    swipeAngle = 360 - Math.abs(swipeAngle);
  }

  if (swipeAngle <= 45 && swipeAngle >= 0) {
    return 1;
  }

  if (swipeAngle <= 360 && swipeAngle >= 315) {
    return 1;
  }

  if (swipeAngle >= 135 && swipeAngle <= 225) {
    return -1;
  }

  if (vertical === true) {
    if (swipeAngle >= 35 && swipeAngle <= 135) {
      return 1;
    } else {
      return -1;
    }
  }

  return 0;
};
var shouldUpdate = function shouldUpdate(curr, next, keys) {
  var update = false;

  for (var i = 0; i < keys.length; i++) {
    if (curr[keys[i]] !== next[keys[i]]) {
      update = true;
      break;
    }
  }

  return update;
};
var calcSomeInitialState = function calcSomeInitialState(props) {
  var _getPropsByTransition = getPropsByTransitionMode(props, ['slidesToScroll', 'slidesToShow', 'cellAlign']),
      slidesToScroll = _getPropsByTransition.slidesToScroll,
      slidesToShow = _getPropsByTransition.slidesToShow,
      cellAlign = _getPropsByTransition.cellAlign;

  var slideWidth = props.vertical ? props.initialSlideHeight || 0 : props.initialSlideWidth || 0;
  var slideHeight = props.vertical ? (props.initialSlideHeight || 0) * props.slidesToShow : props.initialSlideHeight || 0;
  var frameHeight = slideHeight + props.cellSpacing * (slidesToShow - 1);
  var frameWidth = props.vertical ? frameHeight : '100%';
  return {
    slideWidth: slideWidth,
    slideHeight: slideHeight,
    frameWidth: frameWidth,
    slidesToScroll: slidesToScroll,
    slidesToShow: slidesToShow,
    cellAlign: cellAlign
  };
};

var getImgTagStyles = function getImgTagStyles() {
  return ".slider-slide > img { width: 100%; display: block; }\n          .slider-slide > img:focus { margin: auto; }";
};
var getDecoratorStyles = function getDecoratorStyles(position) {
  switch (position) {
    case 'TopLeft':
      {
        return {
          position: 'absolute',
          top: 0,
          left: 0
        };
      }

    case 'TopCenter':
      {
        return {
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          WebkitTransform: 'translateX(-50%)',
          msTransform: 'translateX(-50%)'
        };
      }

    case 'TopRight':
      {
        return {
          position: 'absolute',
          top: 0,
          right: 0
        };
      }

    case 'CenterLeft':
      {
        return {
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          WebkitTransform: 'translateY(-50%)',
          msTransform: 'translateY(-50%)'
        };
      }

    case 'CenterCenter':
      {
        return {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          WebkitTransform: 'translate(-50%, -50%)',
          msTransform: 'translate(-50%, -50%)'
        };
      }

    case 'CenterRight':
      {
        return {
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
          WebkitTransform: 'translateY(-50%)',
          msTransform: 'translateY(-50%)'
        };
      }

    case 'BottomLeft':
      {
        return {
          position: 'absolute',
          bottom: 0,
          left: 0
        };
      }

    case 'BottomCenter':
      {
        return {
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          WebkitTransform: 'translateX(-50%)',
          msTransform: 'translateX(-50%)'
        };
      }

    case 'BottomRight':
      {
        return {
          position: 'absolute',
          bottom: 0,
          right: 0
        };
      }

    default:
      {
        return {
          position: 'absolute',
          top: 0,
          left: 0
        };
      }
  }
};
var getSliderStyles = function getSliderStyles(propWidth, propHeight) {
  return {
    boxSizing: 'border-box',
    display: 'block',
    height: propHeight,
    MozBoxSizing: 'border-box',
    position: 'relative',
    width: propWidth
  };
};
var getFrameStyles = function getFrameStyles(propFrameOverFlow, propVertical, propFramePadding, stateFrameWidth) {
  return {
    boxSizing: 'border-box',
    display: 'block',
    height: propVertical ? stateFrameWidth || 'initial' : '100%',
    margin: propFramePadding,
    MozBoxSizing: 'border-box',
    msTransform: 'translate(0, 0)',
    overflow: propFrameOverFlow,
    padding: 0,
    position: 'relative',
    touchAction: "pinch-zoom ".concat(propVertical ? 'pan-x' : 'pan-y'),
    transform: 'translate3d(0, 0, 0)',
    WebkitTransform: 'translate3d(0, 0, 0)'
  };
};
var getTransitionProps = function getTransitionProps(props, state) {
  return {
    animation: props.animation,
    cellAlign: props.cellAlign,
    cellSpacing: props.cellSpacing,
    currentSlide: state.currentSlide,
    dragging: props.dragging,
    isWrappingAround: state.isWrappingAround,
    left: state.left,
    slideCount: state.slideCount,
    slideHeight: state.slideHeight,
    slideOffset: props.slideOffset,
    slidesToScroll: props.slidesToScroll,
    slidesToShow: state.slidesToShow,
    slideWidth: state.slideWidth,
    top: state.top,
    vertical: props.vertical,
    wrapAround: props.wrapAround,
    zoomScale: props.zoomScale,
    opacityScale: props.opacityScale,
    slideListMargin: props.slideListMargin
  };
};

var addAccessibility$1 = function addAccessibility(children, slidesToShow) {
  if (slidesToShow > 1) {
    return React__default.Children.map(children, function (child) {
      return React__default.cloneElement(child, child.props);
    });
  } else {
    // when slidesToshow is 1
    return React__default.Children.map(children, function (child) {
      return React__default.cloneElement(child, child.props);
    });
  }
};
var getValidChildren = function getValidChildren(children) {
  // .toArray automatically removes invalid React children
  return React__default.Children.toArray(children);
};

var findMaxHeightSlide = function findMaxHeightSlide(slides) {
  var maxHeight = 0;

  for (var i = 0; i < slides.length; i++) {
    if (slides[i].offsetHeight > maxHeight) {
      maxHeight = slides[i].offsetHeight;
    }
  }

  return maxHeight;
};

var getSlideHeight = function getSlideHeight(props, state) {
  var childNodes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var heightMode = props.heightMode,
      vertical = props.vertical,
      initialSlideHeight = props.initialSlideHeight;
  var slidesToShow = state.slidesToShow,
      currentSlide = state.currentSlide;
  var firstSlide = childNodes[0];

  if (firstSlide && heightMode === 'first') {
    return vertical ? firstSlide.offsetHeight * slidesToShow : firstSlide.offsetHeight;
  }

  if (heightMode === 'max') {
    return findMaxHeightSlide(childNodes);
  }

  if (heightMode === 'current') {
    return childNodes[currentSlide].offsetHeight;
  }

  return initialSlideHeight || 100;
};

function _typeof$5(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$5 = function _typeof(obj) { return typeof obj; }; } else { _typeof$5 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$5(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$6(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$5(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$5(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$5(Constructor.prototype, protoProps); if (staticProps) _defineProperties$5(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$4(self, call) { if (call && (_typeof$5(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$4(self); }

function _getPrototypeOf$4(o) { _getPrototypeOf$4 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$4(o); }

function _assertThisInitialized$4(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$4(subClass, superClass); }

function _setPrototypeOf$4(o, p) { _setPrototypeOf$4 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$4(o, p); }

var Carousel =
/*#__PURE__*/
function (_React$Component) {
  _inherits$4(Carousel, _React$Component);

  function Carousel() {
    var _this;

    _classCallCheck$6(this, Carousel);

    _this = _possibleConstructorReturn$4(this, _getPrototypeOf$4(Carousel).apply(this, arguments));
    _this.displayName = 'Carousel';
    _this.clickDisabled = false;
    _this.isTransitioning = false;
    _this.timers = [];
    _this.touchObject = {};
    _this.controlsMap = [{
      funcName: 'renderTopLeftControls',
      key: 'TopLeft'
    }, {
      funcName: 'renderTopCenterControls',
      key: 'TopCenter'
    }, {
      funcName: 'renderTopRightControls',
      key: 'TopRight'
    }, {
      funcName: 'renderCenterLeftControls',
      key: 'CenterLeft'
    }, {
      funcName: 'renderCenterCenterControls',
      key: 'CenterCenter'
    }, {
      funcName: 'renderCenterRightControls',
      key: 'CenterRight'
    }, {
      funcName: 'renderBottomLeftControls',
      key: 'BottomLeft'
    }, {
      funcName: 'renderBottomCenterControls',
      key: 'BottomCenter'
    }, {
      funcName: 'renderBottomRightControls',
      key: 'BottomRight'
    }];
    _this.childNodesMutationObs = null;
    _this.state = _objectSpread$2({
      currentSlide: _this.props.slideIndex,
      dragging: false,
      easing: _this.props.disableAnimation ? '' : circleOut,
      hasInteraction: false,
      // to remove animation from the initial slide on the page load when non-default slideIndex is used
      isWrappingAround: false,
      left: 0,
      resetWrapAroundPosition: false,
      slideCount: getValidChildren(_this.props.children).length,
      top: 0,
      wrapToIndex: null,
      readyStateChanged: 0
    }, calcSomeInitialState(_this.props));
    _this.autoplayIterator = _this.autoplayIterator.bind(_assertThisInitialized$4(_this));
    _this.calcSlideHeightAndWidth = _this.calcSlideHeightAndWidth.bind(_assertThisInitialized$4(_this));
    _this.getChildNodes = _this.getChildNodes.bind(_assertThisInitialized$4(_this));
    _this.getMouseEvents = _this.getMouseEvents.bind(_assertThisInitialized$4(_this));
    _this.getOffsetDeltas = _this.getOffsetDeltas.bind(_assertThisInitialized$4(_this));
    _this.getTargetLeft = _this.getTargetLeft.bind(_assertThisInitialized$4(_this));
    _this.getTouchEvents = _this.getTouchEvents.bind(_assertThisInitialized$4(_this));
    _this.goToSlide = _this.goToSlide.bind(_assertThisInitialized$4(_this));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized$4(_this));
    _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized$4(_this));
    _this.handleMouseOut = _this.handleMouseOut.bind(_assertThisInitialized$4(_this));
    _this.handleMouseOver = _this.handleMouseOver.bind(_assertThisInitialized$4(_this));
    _this.handleSwipe = _this.handleSwipe.bind(_assertThisInitialized$4(_this));
    _this.nextSlide = _this.nextSlide.bind(_assertThisInitialized$4(_this));
    _this.onReadyStateChange = _this.onReadyStateChange.bind(_assertThisInitialized$4(_this));
    _this.onResize = _this.onResize.bind(_assertThisInitialized$4(_this));
    _this.onVisibilityChange = _this.onVisibilityChange.bind(_assertThisInitialized$4(_this));
    _this.previousSlide = _this.previousSlide.bind(_assertThisInitialized$4(_this));
    _this.renderControls = _this.renderControls.bind(_assertThisInitialized$4(_this));
    _this.resetAutoplay = _this.resetAutoplay.bind(_assertThisInitialized$4(_this));
    _this.setDimensions = _this.setDimensions.bind(_assertThisInitialized$4(_this));
    _this.setLeft = _this.setLeft.bind(_assertThisInitialized$4(_this));
    _this.setSlideHeightAndWidth = _this.setSlideHeightAndWidth.bind(_assertThisInitialized$4(_this));
    _this.startAutoplay = _this.startAutoplay.bind(_assertThisInitialized$4(_this));
    _this.stopAutoplay = _this.stopAutoplay.bind(_assertThisInitialized$4(_this));
    _this.establishChildNodesMutationObserver = _this.establishChildNodesMutationObserver.bind(_assertThisInitialized$4(_this));
    return _this;
  }

  _createClass$5(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // see https://github.com/facebook/react/issues/3417#issuecomment-121649937
      this.mounted = true;
      this.setLeft();
      this.setDimensions();
      this.bindEvents();
      this.establishChildNodesMutationObserver();

      if (this.props.autoplay) {
        this.startAutoplay();
      }

      this.getlockScrollEvents().lockTouchScroll();
    } // @TODO Remove deprecated componentWillReceiveProps with getDerivedStateFromProps
    // eslint-disable-next-line react/no-deprecated
    // eslint-disable-next-line camelcase

  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var slideCount = getValidChildren(nextProps.children).length;
      var slideCountChanged = slideCount !== this.state.slideCount;
      this.setState(function (prevState) {
        return {
          slideCount: slideCount,
          currentSlide: slideCountChanged ? nextProps.slideIndex : prevState.currentSlide
        };
      });

      if (slideCount <= this.state.currentSlide) {
        this.goToSlide(Math.max(slideCount - 1, 0), nextProps);
      }

      var updateDimensions = slideCountChanged || shouldUpdate(this.props, nextProps, ['cellSpacing', 'vertical', 'slideWidth', 'slideHeight', 'heightMode', 'slidesToScroll', 'slidesToShow', 'transitionMode', 'cellAlign']);

      if (updateDimensions) {
        this.setDimensions(nextProps);
      }

      if (this.props.slideIndex !== nextProps.slideIndex && nextProps.slideIndex !== this.state.currentSlide && !this.state.isWrappingAround) {
        this.goToSlide(nextProps.slideIndex, this.props);
      }

      if (this.props.autoplay !== nextProps.autoplay) {
        if (nextProps.autoplay) {
          this.startAutoplay();
        } else {
          this.stopAutoplay();
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var slideChanged = prevState.currentSlide !== this.state.currentSlide;
      var heightModeChanged = prevProps.heightMode !== this.props.heightMode;
      var axisChanged = prevProps.vertical !== this.props.vertical;

      if (axisChanged) {
        this.onResize();
      } else if (slideChanged || heightModeChanged) {
        var image = this.getCurrentChildNodeImg();

        if (image) {
          image.addEventListener('load', this.setSlideHeightAndWidth);
          image.removeEventListener('load', this.setSlideHeightAndWidth);
        } else {
          this.setSlideHeightAndWidth();
        }
      }

      var _this$calcSlideHeight = this.calcSlideHeightAndWidth(),
          slideHeight = _this$calcSlideHeight.slideHeight;

      var heightMismatches = slideHeight !== prevState.slideHeight; // When using dynamic content in a slide, it is possible for the slide height to be inaccurate. Here, double check that the height is correct once the component has mounted and the `readyStateChange` event has fired.
      // See #521 and https://github.com/FormidableLabs/nuka-carousel/blob/fea63242a8b2fb69c65689efe615d0feb9b2d1ff/README.md#resizing-height-issue

      if (this.mounted && prevState.readyStateChanged > 0 && heightMismatches) {
        this.setDimensions();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindEvents();
      this.disconnectChildNodesMutationObserver();
      this.stopAutoplay(); // see https://github.com/facebook/react/issues/3417#issuecomment-121649937

      this.mounted = false;

      for (var i = 0; i < this.timers.length; i++) {
        clearTimeout(this.timers[i]);
      }

      this.getlockScrollEvents().unlockTouchScroll();
    }
  }, {
    key: "establishChildNodesMutationObserver",
    value: function establishChildNodesMutationObserver() {
      var _this2 = this;

      var childNodes = this.getChildNodes();

      if (childNodes.length && 'MutationObserver' in window) {
        this.childNodesMutationObs = new MutationObserver(function (mutations) {
          mutations.forEach(function () {
            _this2.setSlideHeightAndWidth();
          });
        });

        var observeChildNodeMutation = function observeChildNodeMutation(node) {
          _this2.childNodesMutationObs.observe(node, {
            attributes: true,
            attributeFilter: ['style'],
            attributeOldValue: false,
            characterData: false,
            characterDataOldValue: false,
            childList: false,
            subtree: false
          });
        };

        var childNodesArray = Array.from(childNodes);

        for (var _i = 0, _childNodesArray = childNodesArray; _i < _childNodesArray.length; _i++) {
          var node = _childNodesArray[_i];
          observeChildNodeMutation(node);
        }
      }
    }
  }, {
    key: "disconnectChildNodesMutationObserver",
    value: function disconnectChildNodesMutationObserver() {
      if (this.childNodesMutationObs instanceof MutationObserver) {
        this.childNodesMutationObs.disconnect();
      }
    }
  }, {
    key: "getlockScrollEvents",
    value: function getlockScrollEvents() {
      var _this3 = this;

      var blockEvent = function blockEvent(e) {
        if (_this3.state.dragging) {
          var direction = swipeDirection(_this3.touchObject.startX, e.touches[0].pageX, _this3.touchObject.startY, e.touches[0].pageY, _this3.props.vertical);

          if (direction !== 0) {
            e.preventDefault();
          }
        }
      };

      var lockTouchScroll = function lockTouchScroll() {
        document.addEventListener('touchmove', blockEvent, {
          passive: false
        });
      };

      var unlockTouchScroll = function unlockTouchScroll() {
        document.addEventListener('touchmove', blockEvent, {
          passive: false
        });
      };

      return {
        lockTouchScroll: lockTouchScroll,
        unlockTouchScroll: unlockTouchScroll
      };
    }
  }, {
    key: "getTouchEvents",
    value: function getTouchEvents() {
      var _this4 = this;

      if (this.props.swiping === false) {
        return {
          onTouchStart: this.handleMouseOver,
          onTouchEnd: this.handleMouseOut
        };
      }

      return {
        onTouchStart: function onTouchStart(e) {
          _this4.touchObject = {
            startX: e.touches[0].pageX,
            startY: e.touches[0].pageY
          };

          _this4.handleMouseOver();

          _this4.setState({
            dragging: true
          });
        },
        onTouchMove: function onTouchMove(e) {
          var direction = swipeDirection(_this4.touchObject.startX, e.touches[0].pageX, _this4.touchObject.startY, e.touches[0].pageY, _this4.props.vertical);

          if (direction !== 0) {
            e.preventDefault();
          }

          var length = _this4.props.vertical ? Math.round(Math.sqrt(Math.pow(e.touches[0].pageY - _this4.touchObject.startY, 2))) : Math.round(Math.sqrt(Math.pow(e.touches[0].pageX - _this4.touchObject.startX, 2)));

          if (length >= 10) {
            if (_this4.clickDisabled === false) _this4.props.onDragStart(e);
            _this4.clickDisabled = true;
          }

          _this4.touchObject = {
            startX: _this4.touchObject.startX,
            startY: _this4.touchObject.startY,
            endX: e.touches[0].pageX,
            endY: e.touches[0].pageY,
            length: length,
            direction: direction
          };

          _this4.setState({
            left: _this4.props.vertical ? 0 : _this4.getTargetLeft(_this4.touchObject.length * _this4.touchObject.direction),
            top: _this4.props.vertical ? _this4.getTargetLeft(_this4.touchObject.length * _this4.touchObject.direction) : 0
          });
        },
        onTouchEnd: function onTouchEnd(e) {
          _this4.handleSwipe(e);

          _this4.handleMouseOut();
        },
        onTouchCancel: function onTouchCancel(e) {
          _this4.handleSwipe(e);
        }
      };
    }
  }, {
    key: "getMouseEvents",
    value: function getMouseEvents() {
      var _this5 = this;

      if (this.props.dragging === false) {
        return {
          onMouseOver: this.handleMouseOver,
          onMouseOut: this.handleMouseOut
        };
      }

      return {
        onMouseOver: this.handleMouseOver,
        onMouseOut: this.handleMouseOut,
        onMouseDown: function onMouseDown(e) {
          if (e.preventDefault) {
            e.preventDefault();
          }

          _this5.touchObject = {
            startX: e.clientX,
            startY: e.clientY
          };

          _this5.setState({
            dragging: true
          });
        },
        onMouseMove: function onMouseMove(e) {
          if (!_this5.state.dragging) {
            return;
          }

          var direction = swipeDirection(_this5.touchObject.startX, e.clientX, _this5.touchObject.startY, e.clientY, _this5.props.vertical);

          if (direction !== 0) {
            e.preventDefault();
          }

          var length = _this5.props.vertical ? Math.round(Math.sqrt(Math.pow(e.clientY - _this5.touchObject.startY, 2))) : Math.round(Math.sqrt(Math.pow(e.clientX - _this5.touchObject.startX, 2))); // prevents disabling click just because mouse moves a fraction of a pixel

          if (length >= 10) {
            if (_this5.clickDisabled === false) _this5.props.onDragStart(e);
            _this5.clickDisabled = true;
          }

          _this5.touchObject = {
            startX: _this5.touchObject.startX,
            startY: _this5.touchObject.startY,
            endX: e.clientX,
            endY: e.clientY,
            length: length,
            direction: direction
          };

          _this5.setState({
            left: _this5.props.vertical ? 0 : _this5.getTargetLeft(_this5.touchObject.length * _this5.touchObject.direction),
            top: _this5.props.vertical ? _this5.getTargetLeft(_this5.touchObject.length * _this5.touchObject.direction) : 0
          });
        },
        onMouseUp: function onMouseUp(e) {
          if (_this5.touchObject.length === 0 || _this5.touchObject.length === undefined) {
            _this5.setState({
              dragging: false
            });

            return;
          }

          _this5.handleSwipe(e);
        },
        onMouseLeave: function onMouseLeave(e) {
          if (!_this5.state.dragging) {
            return;
          }

          _this5.handleSwipe(e);
        }
      };
    }
  }, {
    key: "pauseAutoplay",
    value: function pauseAutoplay() {
      if (this.props.autoplay) {
        this.autoplayPaused = true;
        this.stopAutoplay();
      }
    }
  }, {
    key: "unpauseAutoplay",
    value: function unpauseAutoplay() {
      if (this.props.autoplay && this.autoplayPaused) {
        this.startAutoplay();
        this.autoplayPaused = null;
      }
    }
  }, {
    key: "handleMouseOver",
    value: function handleMouseOver() {
      if (this.props.pauseOnHover) {
        this.pauseAutoplay();
      }
    }
  }, {
    key: "handleMouseOut",
    value: function handleMouseOut() {
      if (this.autoplayPaused) {
        this.unpauseAutoplay();
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      if (this.clickDisabled === true) {
        if (event.metaKey || event.shiftKey || event.altKey || event.ctrlKey) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();

        if (event.nativeEvent) {
          event.nativeEvent.stopPropagation();
        }
      }
    }
  }, {
    key: "handleSwipe",
    value: function handleSwipe() {
      var _this6 = this;

      var slidesToShow = this.state.slidesToShow;

      if (this.props.slidesToScroll === 'auto') {
        slidesToShow = this.state.slidesToScroll;
      }

      if (this.touchObject.length > this.state.slideWidth / slidesToShow / 5) {
        if (this.touchObject.direction === 1) {
          if (this.state.currentSlide + 1 >= this.state.slideCount && !this.props.wrapAround) {
            this.setState({
              easing: easing[this.props.edgeEasing]
            });
          } else {
            this.nextSlide();
          }
        } else if (this.touchObject.direction === -1) {
          if (this.state.currentSlide <= 0 && !this.props.wrapAround) {
            this.setState({
              easing: easing[this.props.edgeEasing]
            });
          } else {
            this.previousSlide();
          }
        }
      } else {
        this.goToSlide(this.state.currentSlide);
      } // wait for `handleClick` event before resetting clickDisabled


      this.timers.push(setTimeout(function () {
        _this6.clickDisabled = false;
      }, 0));
      this.touchObject = {};
      this.setState({
        dragging: false
      });
    } // eslint-disable-next-line complexity

  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(e) {
      if (this.props.enableKeyboardControls) {
        switch (e.keyCode) {
          case 39:
          case 68:
          case 38:
          case 87:
            this.nextSlide();
            break;

          case 37:
          case 65:
          case 40:
          case 83:
            this.previousSlide();
            break;

          case 81:
            this.goToSlide(0, this.props);
            break;

          case 69:
            this.goToSlide(this.state.slideCount - 1, this.props);
            break;

          case 32:
            if (this.state.pauseOnHover && this.props.autoplay) {
              this.setState({
                pauseOnHover: false
              });
              this.pauseAutoplay();
              break;
            } else {
              this.setState({
                pauseOnHover: true
              });
              this.unpauseAutoplay();
              break;
            }

        }
      }
    }
  }, {
    key: "autoplayIterator",
    value: function autoplayIterator() {
      if (this.props.wrapAround) {
        if (this.props.autoplayReverse) {
          this.previousSlide();
        } else {
          this.nextSlide();
        }

        return;
      }

      if (this.props.autoplayReverse) {
        if (this.state.currentSlide !== 0) {
          this.previousSlide();
        } else {
          this.stopAutoplay();
        }
      } else if (this.state.currentSlide !== this.state.slideCount - this.state.slidesToShow) {
        this.nextSlide();
      } else {
        this.stopAutoplay();
      }
    }
  }, {
    key: "startAutoplay",
    value: function startAutoplay() {
      this.autoplayID = setInterval(this.autoplayIterator, this.props.autoplayInterval);
    }
  }, {
    key: "resetAutoplay",
    value: function resetAutoplay() {
      if (this.props.autoplay && !this.autoplayPaused) {
        this.stopAutoplay();
        this.startAutoplay();
      }
    }
  }, {
    key: "stopAutoplay",
    value: function stopAutoplay() {
      if (this.autoplayID) {
        clearInterval(this.autoplayID);
      }
    } // Animation Method

  }, {
    key: "getTargetLeft",
    value: function getTargetLeft(touchOffset, slide) {
      var offset;
      var target = slide || this.state.currentSlide;

      switch (this.state.cellAlign) {
        case 'left':
          {
            offset = 0;
            offset -= this.props.cellSpacing * target;
            break;
          }

        case 'center':
          {
            offset = (this.state.frameWidth - this.state.slideWidth) / 2;
            offset -= this.props.cellSpacing * target;
            break;
          }

        case 'right':
          {
            offset = this.state.frameWidth - this.state.slideWidth;
            offset -= this.props.cellSpacing * target;
            break;
          }
      }

      var left = this.state.slideWidth * target;
      var lastSlide = this.state.currentSlide > 0 && target + this.state.slidesToScroll >= this.state.slideCount;

      if (lastSlide && this.props.slideWidth !== 1 && !this.props.wrapAround && this.props.slidesToScroll === 'auto') {
        left = this.state.slideWidth * this.state.slideCount - this.state.frameWidth;
        offset = 0;
        offset -= this.props.cellSpacing * (this.state.slideCount - 1);
      }

      offset -= touchOffset || 0;
      return (left - offset) * -1;
    }
  }, {
    key: "getOffsetDeltas",
    value: function getOffsetDeltas() {
      var offset = 0;

      if (this.state.isWrappingAround) {
        offset = this.getTargetLeft(null, this.state.wrapToIndex);
      } else {
        offset = this.getTargetLeft(this.touchObject.length * this.touchObject.direction);
      }

      return {
        tx: [this.props.vertical ? 0 : offset],
        ty: [this.props.vertical ? offset : 0]
      };
    }
  }, {
    key: "isEdgeSwiping",
    value: function isEdgeSwiping() {
      var _this$state = this.state,
          slideCount = _this$state.slideCount,
          slideWidth = _this$state.slideWidth,
          slideHeight = _this$state.slideHeight,
          slidesToShow = _this$state.slidesToShow;

      var _this$getOffsetDeltas = this.getOffsetDeltas(),
          tx = _this$getOffsetDeltas.tx,
          ty = _this$getOffsetDeltas.ty;

      if (this.props.vertical) {
        var rowHeight = slideHeight / slidesToShow;
        var slidesLeftToShow = slideCount - slidesToShow;
        var lastSlideLimit = rowHeight * slidesLeftToShow; // returns true if ty offset is outside first or last slide

        return ty > 0 || -ty > lastSlideLimit;
      } // returns true if tx offset is outside first or last slide


      return tx > 0 || -tx > slideWidth * (slideCount - 1);
    } // Action Methods

  }, {
    key: "goToSlide",
    value: function goToSlide(index, props) {
      var _this7 = this;

      if (props === undefined) {
        props = this.props;
      }

      if (this.isTransitioning) {
        return;
      }

      this.setState({
        hasInteraction: true,
        easing: easing[props.easing]
      });
      this.isTransitioning = true;
      var previousSlide = this.state.currentSlide;

      if (index >= this.state.slideCount || index < 0) {
        if (!props.wrapAround) {
          this.isTransitioning = false;
          return;
        }

        if (index >= this.state.slideCount) {
          props.beforeSlide(this.state.currentSlide, 0);
          this.setState(function (prevState) {
            return {
              left: props.vertical ? 0 : _this7.getTargetLeft(_this7.state.slideWidth, prevState.currentSlide),
              top: props.vertical ? _this7.getTargetLeft(_this7.state.slideWidth, prevState.currentSlide) : 0,
              currentSlide: 0,
              isWrappingAround: true,
              wrapToIndex: _this7.state.slideCount
            };
          }, function () {
            _this7.timers.push(setTimeout(function () {
              _this7.resetAutoplay();

              _this7.isTransitioning = false;

              if (index !== previousSlide) {
                _this7.props.afterSlide(0);
              }
            }, props.speed));
          });
          return;
        } else {
          var endSlide = index < 0 ? this.state.slideCount + index : this.state.slideCount - this.state.slidesToScroll;
          props.beforeSlide(this.state.currentSlide, endSlide);
          this.setState(function (prevState) {
            return {
              left: props.vertical ? 0 : _this7.getTargetLeft(0, prevState.currentSlide),
              top: props.vertical ? _this7.getTargetLeft(0, prevState.currentSlide) : 0,
              currentSlide: endSlide,
              isWrappingAround: true,
              wrapToIndex: index
            };
          }, function () {
            _this7.timers.push(setTimeout(function () {
              _this7.resetAutoplay();

              _this7.isTransitioning = false;

              if (index !== previousSlide) {
                _this7.props.afterSlide(_this7.state.slideCount - 1);
              }
            }, props.speed));
          });
          return;
        }
      }

      this.props.beforeSlide(this.state.currentSlide, index);
      this.setState({
        currentSlide: index
      }, function () {
        return _this7.timers.push(setTimeout(function () {
          _this7.resetAutoplay();

          _this7.isTransitioning = false;

          if (index !== previousSlide) {
            _this7.props.afterSlide(index);
          }
        }, props.speed));
      });
    }
  }, {
    key: "nextSlide",
    value: function nextSlide() {
      var childrenCount = this.state.slideCount;
      var slidesToShow = this.state.slidesToShow;

      if (this.props.slidesToScroll === 'auto') {
        slidesToShow = this.state.slidesToScroll;
      }

      if (this.state.currentSlide >= childrenCount - slidesToShow && !this.props.wrapAround && this.props.cellAlign === 'left') {
        return;
      }

      if (this.props.wrapAround) {
        this.goToSlide(this.state.currentSlide + this.state.slidesToScroll);
      } else {
        if (this.props.slideWidth !== 1) {
          this.goToSlide(this.state.currentSlide + this.state.slidesToScroll);
          return;
        }

        var offset = this.state.currentSlide + this.state.slidesToScroll;
        var nextSlideIndex = this.props.cellAlign !== 'left' ? offset : Math.min(offset, childrenCount - slidesToShow);
        this.goToSlide(nextSlideIndex);
      }
    }
  }, {
    key: "previousSlide",
    value: function previousSlide() {
      if (this.state.currentSlide <= 0 && !this.props.wrapAround) {
        return;
      }

      if (this.props.wrapAround) {
        this.goToSlide(this.state.currentSlide - this.state.slidesToScroll);
      } else {
        this.goToSlide(Math.max(0, this.state.currentSlide - this.state.slidesToScroll));
      }
    } // Bootstrapping

  }, {
    key: "bindEvents",
    value: function bindEvents() {
      if (exenv.canUseDOM) {
        addEvent(window, 'resize', this.onResize);
        addEvent(document, 'readystatechange', this.onReadyStateChange);
        addEvent(document, 'visibilitychange', this.onVisibilityChange);
        addEvent(document, 'keydown', this.handleKeyPress);
      }
    }
  }, {
    key: "onResize",
    value: function onResize() {
      this.setDimensions(null, this.props.onResize);
    }
  }, {
    key: "onReadyStateChange",
    value: function onReadyStateChange() {
      // When using dynamic content in a slide, it is possible that `readystatechange` will fire before the component has finished mounting, which means `this.state.slideHeight` remains 0, instead of the correct height. Tracking this in state will trigger `componentDidUpdate` which can set the correct height.
      // See #521 and https://github.com/FormidableLabs/nuka-carousel/blob/fea63242a8b2fb69c65689efe615d0feb9b2d1ff/README.md#resizing-height-issue
      this.setState({
        readyStateChanged: this.state.readyStateChanged + 1
      });
      this.setDimensions();
    }
  }, {
    key: "onVisibilityChange",
    value: function onVisibilityChange() {
      if (document.hidden) {
        this.pauseAutoplay();
      } else {
        this.unpauseAutoplay();
      }
    }
  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      if (exenv.canUseDOM) {
        removeEvent(window, 'resize', this.onResize);
        removeEvent(document, 'readystatechange', this.onReadyStateChange);
        removeEvent(document, 'visibilitychange', this.onVisibilityChange);
        removeEvent(document, 'keydown', this.handleKeyPress);
      }
    }
  }, {
    key: "calcSlideHeightAndWidth",
    value: function calcSlideHeightAndWidth(props) {
      // slide height
      props = props || this.props;
      var childNodes = this.getChildNodes();
      var slideHeight = getSlideHeight(props, this.state, childNodes); //slide width

      var _getPropsByTransition = getPropsByTransitionMode(props, ['slidesToShow']),
          slidesToShow = _getPropsByTransition.slidesToShow;

      var frame = this.frame;
      var slideWidth;

      if (this.props.animation === 'zoom') {
        slideWidth = frame.offsetWidth - frame.offsetWidth * 15 / 100;
      } else if (typeof props.slideWidth !== 'number') {
        slideWidth = parseInt(props.slideWidth);
      } else if (props.vertical) {
        slideWidth = slideHeight / slidesToShow * props.slideWidth;
      } else {
        slideWidth = frame.offsetWidth / slidesToShow * props.slideWidth;
      }

      if (!props.vertical) {
        slideWidth -= props.cellSpacing * ((100 - 100 / slidesToShow) / 100);
      }

      return {
        slideHeight: slideHeight,
        slideWidth: slideWidth
      };
    }
  }, {
    key: "setSlideHeightAndWidth",
    value: function setSlideHeightAndWidth() {
      this.setState(this.calcSlideHeightAndWidth());
    }
  }, {
    key: "setDimensions",
    value: function setDimensions(props) {
      var _this8 = this;

      var stateCb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      props = props || this.props;

      var _getPropsByTransition2 = getPropsByTransitionMode(props, ['slidesToShow', 'cellAlign']),
          slidesToShow = _getPropsByTransition2.slidesToShow,
          cellAlign = _getPropsByTransition2.cellAlign;

      var frame = this.frame;

      var _this$calcSlideHeight2 = this.calcSlideHeightAndWidth(props),
          slideHeight = _this$calcSlideHeight2.slideHeight,
          slideWidth = _this$calcSlideHeight2.slideWidth;

      var frameHeight = slideHeight + props.cellSpacing * (slidesToShow - 1);
      var frameWidth = props.vertical ? frameHeight : frame.offsetWidth;

      var _getPropsByTransition3 = getPropsByTransitionMode(props, ['slidesToScroll']),
          slidesToScroll = _getPropsByTransition3.slidesToScroll;

      if (slidesToScroll === 'auto') {
        slidesToScroll = Math.floor(frameWidth / (slideWidth + props.cellSpacing));
      }

      this.setState({
        frameWidth: frameWidth,
        slideHeight: slideHeight,
        slidesToScroll: slidesToScroll,
        slidesToShow: slidesToShow,
        slideWidth: slideWidth,
        cellAlign: cellAlign,
        left: props.vertical ? 0 : this.getTargetLeft(),
        top: props.vertical ? this.getTargetLeft() : 0
      }, function () {
        stateCb();

        _this8.setLeft();
      });
    }
  }, {
    key: "getChildNodes",
    value: function getChildNodes() {
      return this.frame.childNodes[0].childNodes;
    }
  }, {
    key: "getCurrentChildNodeImg",
    value: function getCurrentChildNodeImg() {
      var childNodes = this.getChildNodes();
      var currentChildNode = childNodes[this.props.slideIndex];
      return currentChildNode ? currentChildNode.getElementsByTagName('img')[0] : null;
    }
  }, {
    key: "setLeft",
    value: function setLeft() {
      var newLeft = this.props.vertical ? 0 : this.getTargetLeft();
      var newTop = this.props.vertical ? this.getTargetLeft() : 0;

      if (newLeft !== this.state.left || newTop !== this.state.top) {
        this.setState({
          left: newLeft,
          top: newTop
        });
      }
    }
  }, {
    key: "renderControls",
    value: function renderControls() {
      var _this9 = this;

      if (this.props.withoutControls) {
        return this.controlsMap.map(function () {
          return null;
        });
      } else {
        return this.controlsMap.map(function (_ref) {
          var funcName = _ref.funcName,
              key = _ref.key;
          var func = _this9.props[funcName];
          var controlChildren = func && typeof func === 'function' && func({
            cellAlign: _this9.props.cellAlign,
            cellSpacing: _this9.props.cellSpacing,
            currentSlide: _this9.state.currentSlide,
            frameWidth: _this9.state.frameWidth,
            goToSlide: function goToSlide(index) {
              return _this9.goToSlide(index);
            },
            nextSlide: function nextSlide() {
              return _this9.nextSlide();
            },
            previousSlide: function previousSlide() {
              return _this9.previousSlide();
            },
            slideCount: _this9.state.slideCount,
            slidesToScroll: _this9.state.slidesToScroll,
            slidesToShow: _this9.state.slidesToShow,
            slideWidth: _this9.state.slideWidth,
            wrapAround: _this9.props.wrapAround
          });
          return controlChildren && React__default.createElement("div", {
            className: "slider-control-".concat(key.toLowerCase()),
            style: getDecoratorStyles(key),
            key: key
          }, controlChildren);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this10 = this;

      var _this$state2 = this.state,
          currentSlide = _this$state2.currentSlide,
          slideCount = _this$state2.slideCount,
          frameWidth = _this$state2.frameWidth;
      var _this$props = this.props,
          frameOverflow = _this$props.frameOverflow,
          vertical = _this$props.vertical,
          framePadding = _this$props.framePadding,
          slidesToShow = _this$props.slidesToShow,
          renderAnnounceSlideMessage = _this$props.renderAnnounceSlideMessage,
          disableAnimation = _this$props.disableAnimation;
      var duration = this.state.dragging || !this.state.dragging && this.state.resetWrapAroundPosition && this.props.wrapAround || disableAnimation || !this.state.hasInteraction ? 0 : this.props.speed;
      var frameStyles = getFrameStyles(frameOverflow, vertical, framePadding, frameWidth);
      var touchEvents = this.getTouchEvents();
      var mouseEvents = this.getMouseEvents();
      var TransitionControl = Transitions[this.props.transitionMode];
      var validChildren = getValidChildren(this.props.children);
      return React__default.createElement("div", {
        className: ['slider', this.props.className || ''].join(' ').trim(),
        style: _extends({}, getSliderStyles(this.props.width, this.props.height), this.props.style)
      }, !this.props.autoplay && React__default.createElement(AnnounceSlide, {
        message: renderAnnounceSlideMessage({
          currentSlide: currentSlide,
          slideCount: slideCount
        })
      }), React__default.createElement("div", _extends({
        className: "slider-frame",
        ref: function ref(frame) {
          return _this10.frame = frame;
        },
        style: frameStyles
      }, touchEvents, mouseEvents, {
        onClickCapture: this.handleClick
      }), React__default.createElement(Animate, {
        show: true,
        start: {
          tx: 0,
          ty: 0
        },
        update: function update() {
          var _this10$getOffsetDelt = _this10.getOffsetDeltas(),
              tx = _this10$getOffsetDelt.tx,
              ty = _this10$getOffsetDelt.ty;

          if (_this10.props.disableEdgeSwiping && !_this10.props.wrapAround && _this10.isEdgeSwiping()) {
            return {};
          } else {
            return {
              tx: tx,
              ty: ty,
              timing: {
                duration: duration,
                ease: _this10.state.easing
              },
              events: {
                end: function end() {
                  var newLeft = _this10.props.vertical ? 0 : _this10.getTargetLeft();
                  var newTop = _this10.props.vertical ? _this10.getTargetLeft() : 0;

                  if (newLeft !== _this10.state.left || newTop !== _this10.state.top) {
                    _this10.setState({
                      left: newLeft,
                      top: newTop,
                      isWrappingAround: false,
                      resetWrapAroundPosition: true
                    }, function () {
                      _this10.setState({
                        resetWrapAroundPosition: false
                      });
                    });
                  }
                }
              }
            };
          }
        },
        children: function children(_ref2) {
          var tx = _ref2.tx,
              ty = _ref2.ty;
          return React__default.createElement(TransitionControl, _extends({}, getTransitionProps(_this10.props, _this10.state), {
            deltaX: tx,
            deltaY: ty
          }), addAccessibility$1(validChildren, slidesToShow, currentSlide));
        }
      })), this.renderControls(), this.props.autoGenerateStyleTag && React__default.createElement("style", {
        type: "text/css",
        dangerouslySetInnerHTML: {
          __html: getImgTagStyles()
        }
      }));
    }
  }]);

  return Carousel;
}(React__default.Component);
Carousel.propTypes = {
  afterSlide: PropTypes.func,
  animation: PropTypes.oneOf(['zoom']),
  autoGenerateStyleTag: PropTypes.bool,
  autoplay: PropTypes.bool,
  autoplayInterval: PropTypes.number,
  autoplayReverse: PropTypes.bool,
  beforeSlide: PropTypes.func,
  cellAlign: PropTypes.oneOf(['left', 'center', 'right']),
  cellSpacing: PropTypes.number,
  enableKeyboardControls: PropTypes.bool,
  disableAnimation: PropTypes.bool,
  disableEdgeSwiping: PropTypes.bool,
  dragging: PropTypes.bool,
  easing: PropTypes.string,
  edgeEasing: PropTypes.string,
  frameOverflow: PropTypes.string,
  framePadding: PropTypes.string,
  height: PropTypes.string,
  heightMode: PropTypes.oneOf(['first', 'current', 'max']),
  initialSlideHeight: PropTypes.number,
  initialSlideWidth: PropTypes.number,
  onDragStart: PropTypes.func,
  onResize: PropTypes.func,
  pauseOnHover: PropTypes.bool,
  renderAnnounceSlideMessage: PropTypes.func,
  renderBottomCenterControls: PropTypes.func,
  renderBottomLeftControls: PropTypes.func,
  renderBottomRightControls: PropTypes.func,
  renderCenterCenterControls: PropTypes.func,
  renderCenterLeftControls: PropTypes.func,
  renderCenterRightControls: PropTypes.func,
  renderTopCenterControls: PropTypes.func,
  renderTopLeftControls: PropTypes.func,
  renderTopRightControls: PropTypes.func,
  slideIndex: PropTypes.number,
  slideOffset: PropTypes.number,
  slidesToScroll: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),
  slidesToShow: PropTypes.number,
  slideWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  speed: PropTypes.number,
  swiping: PropTypes.bool,
  transitionMode: PropTypes.oneOf(['scroll', 'fade', 'scroll3d']),
  vertical: PropTypes.bool,
  width: PropTypes.string,
  withoutControls: PropTypes.bool,
  wrapAround: PropTypes.bool,
  opacityScale: PropTypes.number,
  slideListMargin: PropTypes.number
};
Carousel.defaultProps = {
  afterSlide: function afterSlide() {},
  autoGenerateStyleTag: true,
  autoplay: false,
  autoplayInterval: 3000,
  autoplayReverse: false,
  beforeSlide: function beforeSlide() {},
  cellAlign: 'left',
  cellSpacing: 0,
  enableKeyboardControls: false,
  disableAnimation: false,
  disableEdgeSwiping: false,
  dragging: true,
  easing: 'easeCircleOut',
  edgeEasing: 'easeElasticOut',
  frameOverflow: 'hidden',
  framePadding: '0px',
  height: 'inherit',
  heightMode: 'max',
  onDragStart: function onDragStart() {},
  onResize: function onResize() {},
  pauseOnHover: true,
  renderAnnounceSlideMessage: defaultRenderAnnounceSlideMessage,
  renderBottomCenterControls: function renderBottomCenterControls(props) {
    return React__default.createElement(PagingDots, props);
  },
  renderCenterLeftControls: function renderCenterLeftControls(props) {
    return React__default.createElement(PreviousButton, props);
  },
  renderCenterRightControls: function renderCenterRightControls(props) {
    return React__default.createElement(NextButton, props);
  },
  slideIndex: 0,
  slideOffset: 25,
  slidesToScroll: 1,
  slidesToShow: 1,
  slideWidth: 1,
  speed: 500,
  style: {},
  swiping: true,
  transitionMode: 'scroll',
  vertical: false,
  width: '100%',
  withoutControls: false,
  wrapAround: false,
  slideListMargin: 10
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var MasspaVoucherCarousel = function (_Component) {
  inherits(MasspaVoucherCarousel, _Component);

  function MasspaVoucherCarousel(props) {
    classCallCheck(this, MasspaVoucherCarousel);

    var _this = possibleConstructorReturn(this, (MasspaVoucherCarousel.__proto__ || Object.getPrototypeOf(MasspaVoucherCarousel)).call(this, props));

    _this.updateDimensions = function () {
      if (typeof window !== 'undefinded') {
        _this.setState({ screenWidth: window.innerWidth });
      }
    };

    _this.state = {
      screenWidth: ''
    };
    _this.transtoVouchers = _this.transtoVouchers.bind(_this);
    return _this;
  }

  createClass(MasspaVoucherCarousel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateDimensions();
      window.addEventListener('resize', this.updateDimensions);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateDimensions);
    }
  }, {
    key: 'transtoVouchers',
    value: function transtoVouchers(id) {
      var link = this.props.link;

      if (typeof window !== 'undefinded') {
        window.open('' + link + id, "_self");
      }
    }
  }, {
    key: 'imagesGalleryCarousel',
    value: function imagesGalleryCarousel(vouchersData) {
      var _this2 = this;

      var _props = this.props,
          t = _props.t,
          iconArrow = _props.iconArrow,
          link = _props.link;

      return vouchersData.map(function (it, i) {
        var items = JSON.parse(it.imageGallery);
        return items.map(function (item, z) {
          return React__default.createElement(
            'div',
            { className: styles.msVoucherCarouselContainer, key: it.code, onClick: function onClick() {
                return _this2.transtoVouchers(it.code);
              } },
            React__default.createElement('img', { src: item, className: styles.msVoucherCarouselImg, alt: it.title }),
            React__default.createElement(
              'div',
              {
                className: styles.msVoucherRow + ' ' + styles.msVoucherContainer + ' ' + styles.msVoucherCarouselBtn + ' ' + styles.msVoucherPadding0,
                key: it.code
              },
              React__default.createElement('div', { className: styles.msVoucherColSm6 + ' ' + styles.msVoucherCarouselPr }),
              React__default.createElement(
                'div',
                { className: styles.msVoucherColSm6 + ' ' + styles.msVoucherCarouselPl + ' ' + styles.msVoucherCarouselRight },
                React__default.createElement(
                  'a',
                  { className: styles.msVoucherCarouselBtnDetail, href: '' + link + it.code },
                  React__default.createElement(
                    'span',
                    { className: styles.msVoucherCarouselBtnText },
                    'Xem chi ti\u1EBFt',
                    iconArrow
                  )
                )
              )
            )
          );
        });
      });
    }
  }, {
    key: 'imagesVoucherCarousel',
    value: function imagesVoucherCarousel(vouchersData) {
      var _this3 = this;

      var _props2 = this.props,
          t = _props2.t,
          iconArrow = _props2.iconArrow,
          link = _props2.link;

      return vouchersData.map(function (it, i) {
        return React__default.createElement(
          'div',
          { className: styles.msVoucherCarouselContainer, key: it.code, onClick: function onClick() {
              return _this3.transtoVouchers(it.code);
            } },
          React__default.createElement('img', { src: it.imgVoucher, className: styles.msVoucherCarouselImg, alt: it.title }),
          React__default.createElement(
            'div',
            {
              className: styles.msVoucherRow + ' ' + styles.msVoucherContainer + ' ' + styles.msVoucherCarouselBtn + ' ' + styles.msVoucherPadding0,
              key: it.code
            },
            React__default.createElement('div', { className: styles.msVoucherColSm6 + ' ' + styles.msVoucherCarouselPr }),
            React__default.createElement(
              'div',
              { className: styles.msVoucherColSm6 + ' ' + styles.msVoucherCarouselPl + ' ' + styles.msVoucherCarouselRight },
              React__default.createElement(
                'a',
                { className: styles.msVoucherCarouselBtnDetail, href: '' + link + it.code },
                React__default.createElement(
                  'span',
                  { className: styles.msVoucherCarouselBtnText },
                  'Xem chi ti\u1EBFt',
                  iconArrow
                )
              )
            )
          )
        );
      });
    }
  }, {
    key: 'callCarousel',
    value: function callCarousel(itemsGallery, itemsVoucher) {
      var t = this.props.t;
      var vouchers = this.props.vouchers;

      var timeToday = Date.parse(new Date());
      var vouchersData = vouchers.filter(function (voucher) {
        return voucher.endedDate > timeToday;
      });
      if (itemsGallery.length !== 0 && itemsVoucher.length !== 0) {
        if (this.state.screenWidth > 576) {
          return this.imagesGalleryCarousel(vouchersData);
        } else {
          return this.imagesVoucherCarousel(vouchersData);
        }
      } else if (itemsGallery.length !== 0 && itemsVoucher.length === 0) {

        return this.imagesGalleryCarousel(vouchersData);
      } else if (itemsGallery.length === 0 && itemsVoucher.length !== 0) {

        return this.imagesVoucherCarousel(vouchersData);
      }
    }
  }, {
    key: 'showSlideCarousel',
    value: function showSlideCarousel() {
      var vouchers = this.props.vouchers;

      if (vouchers.length !== 0) {
        var timeToday = Date.parse(new Date());
        var vouchersData = vouchers.filter(function (voucher) {
          return voucher.endedDate > timeToday;
        });

        var itemsGallery = [];
        vouchersData.forEach(function (voucher) {
          if (voucher.imageGallery !== '[]') {
            return itemsGallery.push(voucher.imageGallery);
          } else if (voucher.imageGallery == '') {
            return itemsGallery;
          } else {
            return itemsGallery;
          }
        });

        var itemsVoucher = [];
        vouchersData.forEach(function (voucher) {
          if (voucher.imgVoucher == '') {
            return itemsVoucher;
          } else if (voucher.imgVoucher !== null) {
            return itemsVoucher.push(voucher.imgVoucher);
          } else {
            return itemsVoucher;
          }
        });

        if (itemsGallery.length !== 0 && itemsVoucher.length !== 0) {
          console.log('co itemsGallery co imagesVoucher');
          if (itemsGallery.length === 1 && itemsVoucher.length === 1) {
            if (this.state.screenWidth > 576) {
              return this.imagesGalleryCarousel(vouchersData);
            } else {
              return this.imagesVoucherCarousel(vouchersData);
            }
          } else {
            return React__default.createElement(
              Carousel,
              {
                autoplay: true,
                autoplayInterval: 1000,
                wrapAround: true,
                withoutControls: true
              },
              this.callCarousel(itemsGallery, itemsVoucher)
            );
          }
        } else if (itemsGallery.length !== 0 && itemsVoucher.length === 0) {
          console.log('co itemsGallery khong co imagesVoucher');
          if (itemsGallery.length === 1) {
            return this.imagesGalleryCarousel(vouchersData);
          } else {
            return React__default.createElement(
              Slider,
              slideSettings,
              this.callCarousel(itemsGallery, itemsVoucher)
            );
          }
        } else if (itemsGallery.length === 0 && itemsVoucher.length !== 0) {
          console.log('khong co itemsGallery co imagesVoucher');
          if (itemsVoucher.length === 1) {
            return this.imagesVoucherCarousel(vouchersData);
          } else {
            return React__default.createElement(
              Slider,
              slideSettings,
              this.callCarousel(itemsGallery, itemsVoucher)
            );
          }
        } else {
          console.log('khong co itemsGallery khong co imagesVoucher');
          return React__default.createElement('div', null);
        }
      } else {
        return React__default.createElement('div', null);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var vouchers = this.props.vouchers;


      return React__default.createElement(
        'div',
        null,
        this.showSlideCarousel()
      );
    }
  }]);
  return MasspaVoucherCarousel;
}(React.Component);

MasspaVoucherCarousel.propTypes = {
  vouchers: PropTypes.array.isRequired
};


MasspaVoucherCarousel.defaultProps = {
  vouchers: [],
  link: '/promotion/?promotionId='
};

module.exports = MasspaVoucherCarousel;
//# sourceMappingURL=index.js.map
