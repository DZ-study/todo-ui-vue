import{d as X,v as k,r as h,m as B,o as c,e as p,F as $,x as q,y as g,p as S,f as v,z,A,B as E}from"./vue.esm-bundler-gAPdpR9t.js";const F={class:"slide-wrapper"},N={class:"slide-content"},V=["onMousedown"],m=X({__name:"Slide",props:{seperator:{default:3},minWidths:{default:()=>[100,200,300]}},setup(a){const o=a;console.log("props传参: ",o);let d=[];k(()=>{d=document.querySelectorAll(".slide-container")||[]});const u=h({cursor:"default"}),t=h({isDown:!1,downX:0,index:0}),x=B(()=>({width:`${100/o.seperator}%`,minHeight:"500px"})),D=()=>{u.cursor="col-resize"},W=(n,s)=>{t.isDown=!0,t.downX=n.pageX,t.index=s},b=n=>{if(!t.isDown)return;const s=n.pageX-t.downX,e=t.index,i=d[e],r=d[e-1];t.downX=n.pageX,!(s<0&&(i.clientWidth<o.minWidths[e-1]||r.clientWidth<o.minWidths[e]))&&(i.style.width=i.clientWidth-s+"px",r.style.width=r.clientWidth+s+"px")},M=()=>{t.isDown=!1},f=o.seperator;return(n,s)=>(c(),p("div",F,[(c(!0),p($,null,q(g(f),e=>(c(),p("div",{key:e,class:"slide-container",style:S(x.value),onMouseenter:D,onMousemove:b,onMouseup:M},[v("div",N,[z(n.$slots,`slide${e}`)]),A(v("div",{class:"slide-line",style:S(u),onMousedown:i=>W(i,e)},null,44,V),[[E,e<g(f)]])],36))),128))]))}});m.__docgenInfo={exportName:"default",displayName:"Slide",description:"",tags:{},props:[{name:"seperator",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"3"}},{name:"minWidths",required:!1,type:{name:"Array",elements:[{name:"number"}]},defaultValue:{func:!1,value:"() => [100, 200, 300]"}}],slots:[{name:"`slide${i}`",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["D:/002-study/todo-ui-vue/src/stories/Slide/Slide.vue"]};const C={title:"Example/Slide",component:m},l={render:a=>({components:{Slide:m},setup(){return{args:a}},args:{seperator:2,minWidths:[100,100]},template:`<Slide v-bind="args">
      <template #slide1>
        Slide1
        <div style="width: 80%; margin-left: 10%; background: #f00; height: 100px"></div>
      </template>
      <template #slide2>
        Slide2
      </template>
      <template #slide3>
        Slide3
      </template>
    </Slide>`})};var w,y,_;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Slide
    },
    setup() {
      return {
        args
      };
    },
    args: {
      seperator: 2,
      minWidths: [100, 100]
    },
    template: \`<Slide v-bind="args">
      <template #slide1>
        Slide1
        <div style="width: 80%; margin-left: 10%; background: #f00; height: 100px"></div>
      </template>
      <template #slide2>
        Slide2
      </template>
      <template #slide3>
        Slide3
      </template>
    </Slide>\`
  })
}`,...(_=(y=l.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};const H=["Default"];export{l as Default,H as __namedExportsOrder,C as default};
