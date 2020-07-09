(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Questionnaire"],{"213b":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6 p-0"},[s("ProblemTitle",{attrs:{count:t.count}})],1),s("div",{staticClass:"col-lg-6 p-0"},[s("Options",{attrs:{count:t.count,total:t.total},on:{"update:total":function(e){t.total=e},next:t.next}})],1)]),s("Dialog",{attrs:{"is-write":t.isWrite},on:{close:t.close}})],1)},n=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"questionnaire d-flex flex-column justify-content-between"},[s("div",{staticClass:"prev"},[s("router-link",{staticClass:"prev-btn",attrs:{to:"/"}})],1),s("div",{staticClass:"questionnaire-title"},[s("div",{staticClass:"questionnaire-label"},[10!==t.count?s("h2",[t._v(" "+t._s(t.problemTitle)+" "),s("span",[t._v("Q")])]):t._e()])]),t._m(0)])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"label-block pl-5"},[s("p",[t._v("五大性格特質心理測驗")]),s("p",[t._v("Big Five personality traits test")])])}],a=(s("a9e3"),{name:"ProblemTitle",props:{count:{type:Number,required:!0}},computed:{problemTitle:function(){return void 0===this.$store.state.problemList?"":this.$store.state.problemList.list[this.count].problem}}}),l=a,c=s("2877"),u=Object(c["a"])(l,o,r,!1,null,null,null),p=u.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"d-flex flex-column h-100 justify-content-between"},[10!==t.count?s("div",{staticClass:"schedule"},[t._v(" "+t._s(t.count+1)+"/"+t._s(t.listLength)+" ")]):t._e(),s("div",{staticClass:"multiple-choice"},[10!==t.count?s("ul",t._l(t.optionsData,(function(e){return s("li",{key:e.problem,staticClass:"d-flex"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.totalValue,expression:"totalValue"}],attrs:{id:e.description,type:"radio",name:"exampleRadios"},domProps:{value:e.fraction,checked:t._q(t.totalValue,e.fraction)},on:{change:function(s){t.totalValue=e.fraction}}}),s("label",{staticClass:"p-4 w-100",attrs:{for:e.description}},[t._v(" "+t._s(e.description)+" ")])])})),0):t._e()]),s("div",{staticClass:"questionnaire-next"},[s("a",{staticClass:"next-btn text-white",attrs:{to:"/Result",href:"#"},on:{click:function(e){return t.$emit("next")}}},[t._v(" 下一提 ")])])])},h=[],d={name:"Options",props:{count:{type:Number,required:!0},total:{type:Number,required:!0}},computed:{totalValue:{get:function(){return this.total},set:function(t){this.$emit("update:total",t)}},listLength:function(){return void 0===this.$store.state.problemList?0:this.$store.state.problemList.list.length},optionsData:function(){return void 0===this.$store.state.problemList?[]:this.$store.state.problemList.list[this.count].options}}},m=d,b=Object(c["a"])(m,f,h,!1,null,null,null),v=b.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal",class:{"d-block":t.isWrite}},[s("div",{staticClass:"modal-content"},[s("span",{staticClass:"close",on:{click:function(e){return t.$emit("close",!1)}}},[t._v("×")]),s("p",[t._v("請填寫資料")])])])},g=[],N={name:"Dialog",props:{isWrite:{type:Boolean,required:!0}}},C=N,x=Object(c["a"])(C,_,g,!1,null,null,null),$=x.exports,E={name:"Questionnaire",components:{ProblemTitle:p,Options:v,Dialog:$},data:function(){return{count:0,total:0,totalNumber:0,isWrite:!1}},computed:{problemListLength:function(){return this.$store.state.problemList.list.length-1}},mounted:function(){this.$store.state.problemList||this.$router.push("/")},beforeDestroy:function(){this.$unregisterModule(this.$store,["problemList"])},methods:{close:function(t){this.isWrite=t},isSelect:function(){0===this.total&&(this.isWrite=!0)},next:function(){this.isSelect(),this.totalNumber+=this.total,this.total=0,this.range(),this.setCount(),this.guide()},setCount:function(){this.count%2===0&&(this.$store.commit("result/SET_COUNT",this.totalNumber),this.totalNumber=0)},guide:function(){this.count===this.problemListLength+1&&this.$router.push("/result")},range:function(){this.count!==this.problemListLength+1&&!1===this.isWrite&&(this.count+=1)}}},L=E,I=(s("ea70"),Object(c["a"])(L,i,n,!1,null,null,null));e["default"]=I.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var i=s("1d80"),n=s("5899"),o="["+n+"]",r=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),l=function(t){return function(e){var s=String(i(e));return 1&t&&(s=s.replace(r,"")),2&t&&(s=s.replace(a,"")),s}};t.exports={start:l(1),end:l(2),trim:l(3)}},7156:function(t,e,s){var i=s("861d"),n=s("d2bb");t.exports=function(t,e,s){var o,r;return n&&"function"==typeof(o=e.constructor)&&o!==s&&i(r=o.prototype)&&r!==s.prototype&&n(t,r),t}},a9e3:function(t,e,s){"use strict";var i=s("83ab"),n=s("da84"),o=s("94ca"),r=s("6eeb"),a=s("5135"),l=s("c6b6"),c=s("7156"),u=s("c04e"),p=s("d039"),f=s("7c73"),h=s("241c").f,d=s("06cf").f,m=s("9bf2").f,b=s("58a8").trim,v="Number",_=n[v],g=_.prototype,N=l(f(g))==v,C=function(t){var e,s,i,n,o,r,a,l,c=u(t,!1);if("string"==typeof c&&c.length>2)if(c=b(c),e=c.charCodeAt(0),43===e||45===e){if(s=c.charCodeAt(2),88===s||120===s)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+c}for(o=c.slice(2),r=o.length,a=0;a<r;a++)if(l=o.charCodeAt(a),l<48||l>n)return NaN;return parseInt(o,i)}return+c};if(o(v,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var x,$=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof $&&(N?p((function(){g.valueOf.call(s)})):l(s)!=v)?c(new _(C(e)),s,$):C(e)},E=i?h(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),L=0;E.length>L;L++)a(_,x=E[L])&&!a($,x)&&m($,x,d(_,x));$.prototype=g,g.constructor=$,r(n,v,$)}},b628:function(t,e,s){},ea70:function(t,e,s){"use strict";var i=s("b628"),n=s.n(i);n.a}}]);