(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fdc87ee"],{b6b4:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"zoom"},[o("div",{ref:"img",staticClass:"zoom__img",attrs:{id:"zoom-"+e.mainId},on:{mouseover:function(t){e.enter=!0},mouseleave:function(t){e.enter=!1},mousemove:function(t){return t.preventDefault(),e.move.apply(null,arguments)},touchstart:function(t){e.enter=!0},touchend:function(t){e.enter=!1},touchmove:function(t){return t.preventDefault(),e.move.apply(null,arguments)},click:e.onClick}},[o("img",{attrs:{src:e.bajaResolucion}})]),o("div",{ref:"zoom",staticClass:"zoom__lens",class:{show:e.enter},style:[e.lensObj,e.extraLensObj]},[o("img",{ref:"zoomImg",style:e.zoomObj,attrs:{src:e.altaResolucion}})]),e._t("default")],2)},s=[],i=(o("7db0"),o("c73e")),c={name:"Zoom",mixins:[i["a"]],props:{lente:{type:String,default:"150"},bajaResolucion:{type:String,default:""},altaResolucion:{type:String,default:""}},data:function(){return{zoomLevel:1,enter:!1,isClicked:!1,lensObj:{top:0,left:0},zoomObj:{top:0,left:0}}},computed:{extraLensObj:function(){return{width:this.lente+"px",height:this.lente+"px",transform:"scale(".concat(this.enter?this.zoomLevel:0,")")}}},watch:{enter:function(e){e||(this.zoomLevel=1)}},methods:{onClick:function(){this.isClicked||(this.isClicked=!0,document.addEventListener("click",this.clicks))},clicks:function(e){var t=this;e.path.find((function(e){return e.id=="zoom-".concat(t.mainId)}))?this.$refs.img.addEventListener("wheel",this.zoom):this.isClicked&&(document.removeEventListener("click",this.clicks),this.$refs.img.removeEventListener("wheel",this.zoom),this.isClicked=!1)},move:function(e){var t,o,n,s,i,c=this.$refs.zoom,l=this.$refs.zoomImg;if(e.touches){var r=e.target.getBoundingClientRect();t=e.touches[0].clientX-r.x,o=e.touches[0].clientY-r.y,n=1.1}else t=e.offsetX,o=e.offsetY,n=2;this.lensObj.top="".concat(o-c.offsetHeight/n,"px"),this.lensObj.left="".concat(t-c.offsetWidth/n,"px"),s=(t-e.srcElement.offsetLeft)/e.srcElement.offsetWidth,i=(o-e.srcElement.offsetTop)/e.srcElement.offsetHeight;var a=-s*l.offsetWidth+c.offsetWidth/2,f=-i*l.offsetHeight+c.offsetHeight/2;this.zoomObj.left="".concat(a,"px"),this.zoomObj.top="".concat(f,"px")},zoom:function(e){e.preventDefault(),e.deltaY>0?this.zoomLevel++:this.zoomLevel--,this.zoomLevel<1&&(this.zoomLevel=1),this.zoomLevel>5&&(this.zoomLevel=5)}}},l=c,r=o("2877"),a=Object(r["a"])(l,n,s,!1,null,null,null);t["default"]=a.exports},c73e:function(e,t,o){"use strict";t["a"]={props:{datos:{type:Array,default:()=>[]}},data:()=>({mainId:Math.floor(Math.random()*10**10),selected:"0"}),methods:{getId(e){return e<0?null:"sl-"+this.mainId+e+1}}}}}]);
//# sourceMappingURL=chunk-2fdc87ee.9cfbd4a0.js.map