(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{18:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(2),o=c.n(n),a=c(12),s=c.n(a),r=(c(18),c(11)),l=c(3);var i=c(0),d=o.a.createContext();function u(e){var t=function(e,t){var c=localStorage.getItem(e),n=o.a.useState(t),a=Object(l.a)(n,2),s=a[0],r=a[1],i=o.a.useState(!0),d=Object(l.a)(i,2),u=d[0],j=d[1],h=o.a.useState(!1),m=Object(l.a)(h,2),O=m[0],b=m[1];return o.a.useEffect((function(){try{var t;c?t=JSON.parse(c):(localStorage.setItem(e,JSON.stringify([])),t=[]),r(t),j(!1)}catch(O){b(O)}}),[]),[s,function(t){var c=JSON.stringify(t);localStorage.setItem(e,c),r(t)},u,O]}("TODOS_V1",[]),c=Object(l.a)(t,4),n=c[0],a=c[1],s=c[2],u=c[3],j=o.a.useState(""),h=Object(l.a)(j,2),m=h[0],O=h[1],b=n.filter((function(e){return!0===e.completed})),x=b.length,f=n.length,p=[];p=m.length<1?n:n.filter((function(e){var t=e.text.toLowerCase(),c=m.toLowerCase();return t.includes(c)}));return Object(i.jsx)(d.Provider,{value:{completedTodos:b,todos:n,searchedTodos:p,completeTodos:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(r.a)(n);!1===c[t].completed?c[t].completed=!0:c[t].completed=!1,a(c)},deletTodo:function(e){var t=n.filter((function(t){return t.text!==e}));a(t)},length:x,total:f,searchValue:m,setSearchValue:O,loading:s,error:u,addTodo:function(e){var t=Object(r.a)(n);t.push({completed:!1,text:e}),a(t)}},children:e.children})}c(20);function j(){var e=o.a.useContext(d),t=e.total,c=e.length;return Object(i.jsx)(o.a.Fragment,{children:Object(i.jsxs)("div",{className:"TodoCounter-container",children:[Object(i.jsx)("h1",{className:"TodoCounter-h1",children:"Your Tasks"}),Object(i.jsxs)("h2",{className:"TodoCounter",children:["Completed ",c," of ",t," TODOs"]})]})})}c(21),c(22);function h(){var e=o.a.useState(""),t=Object(l.a)(e,2),c=t[0],n=t[1],a=o.a.useContext(d).addTodo;return Object(i.jsx)(o.a.Fragment,{children:Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a(c),n("")},children:[Object(i.jsxs)("div",{className:"TodoSearch",children:[Object(i.jsx)("h1",{children:"Create New Task"}),Object(i.jsx)("input",{className:"TodoInput",placeholder:"Write a new Task",value:c,onChange:function(e){n(e.target.value)}})]}),Object(i.jsx)("div",{className:"container-button",children:Object(i.jsx)("button",{className:"CreateTodoButton",type:"submit",children:"Create Task"})})]})})}c(23);function m(e){return Object(i.jsx)("div",{className:"TODOs",children:Object(i.jsx)("ul",{className:"TodoList",children:e.children})})}c(24);var O=c(9),b=c(10);function x(e){return Object(i.jsxs)("li",{className:"TodoItem",children:[Object(i.jsx)("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:e.onComplete,children:Object(i.jsx)(O.a,{icon:b.a})}),Object(i.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(i.jsx)("span",{className:"Icon Icon-delete",onClick:e.onDelete,children:Object(i.jsx)(O.a,{icon:b.b})})]})}c(32);function f(){var e=o.a.useContext(d),t=e.searchValue,c=e.setSearchValue;return Object(i.jsx)(o.a.Fragment,{children:Object(i.jsx)("div",{className:"TodoCreate",children:Object(i.jsx)("input",{className:"TodoInput",placeholder:"Search a Task",value:t,onChange:function(e){console.log(e.target.value),c(e.target.value)}})})})}var p=c.p+"static/media/img-task.556d6b0c.svg";function v(){var e=o.a.useContext(d),t=e.error,c=e.loading,n=e.searchedTodos,a=e.completeTodos,s=e.deletTodo;return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("div",{className:"left",children:[Object(i.jsx)(h,{}),Object(i.jsx)("img",{className:"TodoSearch-img",src:p,alt:"img"})]}),Object(i.jsxs)("div",{className:"right",children:[Object(i.jsx)(j,{}),Object(i.jsx)(f,{}),Object(i.jsxs)(m,{children:[c&&Object(i.jsx)("p",{children:"Estamos Cargando..."}),t&&Object(i.jsx)("p",{children:"Hubo un error..."}),!c&&!n.length&&Object(i.jsx)("p",{children:"\xa1Escribe tu primer TODO!"}),n.map((function(e){return Object(i.jsx)(x,{text:e.text,completed:e.completed,onComplete:function(){return a(e.text)},onDelete:function(){return s(e.text)}},e.text)}))]})]})]})}c(33);var g=function(){return Object(i.jsx)(u,{children:Object(i.jsx)(v,{})})};s.a.render(Object(i.jsx)(o.a.Fragment,{children:Object(i.jsx)(g,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.1cb7ee19.chunk.js.map