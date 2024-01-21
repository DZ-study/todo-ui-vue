import{d as p,t as m}from"./vue.esm-bundler-gAPdpR9t.js";const n=p({__name:"TestComponent",props:{primary:{type:Boolean},test:{type:Boolean}},setup(t){const a=t;return(i,d)=>" Test "+m(a.primary)}});n.__docgenInfo={exportName:"default",displayName:"TestComponent",description:"",tags:{},props:[{name:"primary",required:!1,type:{name:"boolean"}},{name:"test",required:!1,type:{name:"boolean"}}],sourceFiles:["D:/002-study/todo-ui-vue/src/stories/TestComponent.vue"]};const u={title:"Example/TestComponent",component:n,decorators:[()=>({template:'<div style="padding: 3em; background: #ff0"><story /></div>'})]},e={render:t=>({components:{TestComponent:n},setup(){return{args:t}},template:'<TestComponent v-bind="agrs" />'}),args:{primary:!0,test:!1}};var r,o,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => ({
    components: {
      TestComponent
    },
    setup() {
      return {
        args
      };
    },
    template: '<TestComponent v-bind="agrs" />'
  }),
  args: {
    primary: true,
    test: false
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const l=["Primary"];export{e as Primary,l as __namedExportsOrder,u as default};
