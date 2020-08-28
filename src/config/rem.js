// 手机端页面自适应
// var 可以用来定义变量来存储东西，一个var可以定义多个变量，
// 每个定义变量之间用逗号隔开
// 老师写的类似于：var a = xxx, b = function(){ xxxxx};
(function(doc,win){
  var docEl=doc.documentElement,
  resizeEvt='orientationchange' in window?'orientationchange':'resize',
  recalc =function () {
    var clientWidth=docEl.clientWidth;
    if (!clientWidth) {
      docEl.style.fontSize=10*(clientWidth/640)+'px';
    };
    if (!doc.addEventListener) {
      return;
    }
    win.addEventListener(resizeEvt,recalc,false);
    doc.addEventListener('DOMContentLoaded',recalc,false);
  }
})(document,window)