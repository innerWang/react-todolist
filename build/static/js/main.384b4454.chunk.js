(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(31)},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(16),a=n.n(c),l=n(1),i=n(6),u=n(7),d=n(10),f=n(8),m=n(9),s=0,p=n(19),E=n(18),b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).onSubmit=function(e){e.preventDefault();var t=n.input;t.value.trim()&&(n.props.onAdd(t.value),t.value="")},n.refInput=function(e){n.input=e},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"add-todo"},o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("input",{className:"new-todo",placeholder:"add one new to-do",ref:this.refInput}),o.a.createElement("button",{className:"add-btn",type:"submit"},"add")))}}]),t}(r.Component),O=Object(l.b)(null,function(e){return{onAdd:function(t){e(function(e){return{type:"TODO/ADD",completed:!1,id:s++,text:e}}(t))}}})(b),v=function(e){return o.a.createElement("li",{className:"todo-item",style:{textDecoration:e.completed?"line-through":"none"}},o.a.createElement("input",{className:"toggle",type:"checkbox",onClick:e.onToggle}),o.a.createElement("span",{className:"text"},e.text),o.a.createElement("button",{className:"remove",onClick:e.onRemove},"x"))},h="\u5168\u90e8",T="\u5df2\u5b8c\u6210",g="\u672a\u5b8c\u6210",j=function(e,t){switch(t){case h:return e;case T:return e.filter(function(e){return e.completed});case g:return e.filter(function(e){return!e.completed});default:throw new Error("unsupported filter")}},y=Object(l.b)(function(e){return{todos:j(e.todos,e.filter)}},function(e){return{onToggleTodo:function(t){e(function(e){return{type:"TODO/TOGGLE",id:e}}(t))},onRemoveTodo:function(t){e(function(e){return{type:"TODO/REMOVE",id:e}}(t))}}})(function(e){return o.a.createElement("ul",{className:"todo-list"},e.todos.map(function(t){return o.a.createElement(v,{key:t.id,text:t.text,completed:t.completed,onToggle:function(){return e.onToggleTodo(t.id)},onRemove:function(){return e.onRemoveTodo(t.id)}})}))}),w=(n(29),function(){return o.a.createElement("div",null,o.a.createElement(O,null),o.a.createElement(y,null))}),D=Object(l.b)(function(e,t){return{active:e.filter===t.filter}},function(e,t){return{onClick:function(){e({type:"FILTER/SET",filter:t.filter})}}})(function(e){return e.active?o.a.createElement("button",{className:"filter selected"},e.children):o.a.createElement("button",{className:"filter",onClick:function(t){t.preventDefault(),e.onClick()}},e.children)}),k=(n(30),function(){return o.a.createElement("div",{className:"filters"},o.a.createElement(D,{filter:h},h),o.a.createElement(D,{filter:T},T),o.a.createElement(D,{filter:g},g))}),x=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(w,null),o.a.createElement(k,null))}}]),t}(r.Component),N=n(5),R=Object(N.b)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TODO/ADD":return[].concat(Object(E.a)(e),[{id:t.id,text:t.text,completed:!1}]);case"TODO/TOGGLE":return e.map(function(e){return console.log(e,t.id),e.id===t.id?Object(p.a)({},e,{completed:!e.completed}):e});case"TODO/REMOVE":return e.filter(function(e){return e.id!==t.id});default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTER/SET":return t.filter;default:return e}}}),C=Object(N.c)(R);a.a.render(o.a.createElement(l.a,{store:C},o.a.createElement(x,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.384b4454.chunk.js.map