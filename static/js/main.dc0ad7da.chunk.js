(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{25:function(e,i,t){},26:function(e,i,t){},33:function(e,i,t){},34:function(e,i,t){"use strict";t.r(i);var a=t(1),s=t.n(a),o=t(17),r=t.n(o),u=(t(25),t(11)),n=t(20),c=(t(26),t(7)),l=t(0);function d(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("header",{headerstyle:{position:"sticky",padding:"10px 10px 0px 10px",top:"0",width:" 100%",background:"grey"},children:Object(l.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(l.jsx)(c.b,{className:"navbar-brand",to:"#",children:e.title}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(l.jsx)("li",{className:"nav-item active",children:Object(l.jsx)(c.b,{className:"nav-link",to:"/",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item active",children:Object(l.jsx)(c.b,{className:"nav-link",to:"/about",children:"About"})}),Object(l.jsxs)("li",{className:"nav-item dropdown",children:[Object(l.jsx)(c.b,{className:"nav-link dropdown-toggle",to:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Dropdown"}),Object(l.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(l.jsx)(c.b,{className:"dropdown-item",to:"#",children:"dropdown1"}),Object(l.jsx)("div",{className:"dropdown-divider"}),Object(l.jsx)(c.b,{className:"dropdown-item",to:"#",children:"dropdown2"}),Object(l.jsx)(c.b,{className:"dropdown-item",to:"#",children:"dropdown3"})]})]})]}),e.searchBar?Object(l.jsxs)("form",{className:"form-inline my-2 my-lg-0",children:[Object(l.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(l.jsx)("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit",children:"Search"})]}):"serachBar is false"]})]})})})}d.defaultProps={title:" Default Here!",searchBar:!0};t(33);function m(){return Object(l.jsx)("footer",{className:"bg-dark text-light p-1",style:{position:"fixed",padding:"10px 10px 0px 10px",bottom:"0",width:" 100%",height:"40px",background:"grey"},children:Object(l.jsx)("p",{className:"text-center",children:"CpoyRight \xa9 To-Do List.com"})})}var p=function(e){var i=e.todo,t=e.onDelect,a=e.onTan,s=e.onFinish;return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"row  ",children:Object(l.jsxs)("div",{className:"col mb-4",children:[Object(l.jsx)("h5",{className:"card-title",children:i.sno}),Object(l.jsx)("div",{className:"card",style:{display:"flex",flexDirection:"row"},children:Object(l.jsxs)("div",{className:"card-body",style:{width:"70%"},children:[Object(l.jsxs)("div",{className:"TopicTime",style:{display:"flex",justifyContent:"space-between"},children:[Object(l.jsx)("h5",{className:"card-title",children:i.topic}),Object(l.jsxs)("h6",{children:[" ",(new Date).toLocaleString()]})]}),Object(l.jsx)("div",{className:"dropdown-divider"}),Object(l.jsx)("p",{className:"card-text",children:i.about})]})}),Object(l.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(l.jsx)("button",{type:"button",className:"btn btn-primary ",onClick:a,children:"Tantative"}),Object(l.jsx)("button",{type:"button",className:"btn btn-success ",onClick:s,children:"Final"}),Object(l.jsx)("button",{type:"button",className:"btn btn-danger ",onClick:function(){t(i)},children:"Delect"})]})]})})})},b=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:" Todos List "})," "," ",Object(l.jsxs)("div",{className:"pack",style:{marginRight:"15px"},children:[" ",0===e.todos.length?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:" No To - Do To Display "})," "]}):e.todos.map((function(i){return Object(l.jsx)(p,{todo:i,onDelect:e.onDelect,onTan:e.onTan,onFinish:e.onFinish},i.sno)}))," "]})," "," "," "]})},j=function(e){var i=Object(a.useState)(""),t=Object(u.a)(i,2),s=t[0],o=t[1],r=Object(a.useState)(""),n=Object(u.a)(r,2),c=n[0],d=n[1];return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("p",{children:[" Current Date And Time: ",(new Date).toLocaleString()," "]})," "]}),Object(l.jsx)("h3",{children:" Add To - do "})," ",Object(l.jsxs)("form",{onSubmit:function(i){i.preventDefault(),s&&c?(e.addTodo(s,c),o(""),d("")):alert("both must be filled ")},children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsxs)("label",{htmlFor:"topic",children:[Object(l.jsx)("h4",{children:" Topic "})," "]})," ",Object(l.jsx)("input",{type:"text",value:s,onChange:function(e){o(e.target.value)},className:"form-control",id:"topic"})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"about",children:" About "})," ",Object(l.jsx)("input",{type:"text",value:c,onChange:function(e){d(e.target.value)},className:"form-control",id:"about"})]}),Object(l.jsxs)("button",{type:"submit",className:"btn btn-primary",children:["Add"," "]})," "]})," "]})},h=t(2),v=function(){return Object(l.jsxs)("div",{style:{marginBottom:"50px"},children:[Object(l.jsx)("p",{children:"this is about page"}),Object(l.jsx)("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, rem ipsa! Quisquam nulla quam blanditiis similique commodi reiciendis suscipit fugiat dignissimos omnis necessitatibus, iure nisi in molestias voluptates sequi. Eos excepturi et rerum quibusdam vero quae nostrum tempora dolores voluptatum iusto ut temporibus sed ad, quaerat quam iste illo odio? Sequi perferendis distinctio eos blanditiis quidem, sapiente mollitia accusamus quae at possimus. Reiciendis, quia? Consequuntur corrupti asperiores, voluptatum aliquid placeat quis tenetur esse architecto amet excepturi quasi omnis. Alias tempore vero suscipit? Quidem sit eum, nobis exercitationem quos aspernatur nulla cupiditate non reiciendis a molestiae amet tenetur facilis iure maxime officiis, est ab dolorum adipisci corrupti sapiente voluptates rem. Similique, quo expedita? Dolore adipisci esse velit illum veniam eius. Corrupti voluptatem, iste aspernatur deleniti animi nam, rerum voluptates optio labore debitis tempora, magni nisi. Nisi quisquam cupiditate ut repellendus, autem doloremque velit odit dolores illo maiores provident quos ducimus, esse obcaecati, deserunt natus consequuntur culpa reiciendis earum aliquam ipsa reprehenderit ea. Dolores voluptatem, ratione corrupti perferendis veritatis aliquid sequi aperiam corporis! Tempore inventore porro libero. Quia cupiditate tempora, quae, officia ullam, sunt architecto dignissimos exercitationem accusamus sequi commodi omnis quaerat. Nihil dolorum enim, debitis aspernatur impedit neque dolore quibusdam? Accusantium veniam consectetur beatae ab, alias praesentium error veritatis quos pariatur molestiae sapiente ducimus deleniti ea iusto expedita, aut vitae eius! Corporis perferendis recusandae accusantium accusamus totam architecto dignissimos minus ratione iusto harum deleniti in deserunt hic similique magnam repellendus commodi asperiores fugiat porro, fuga unde, ullam corrupti maxime. Ad laboriosam cupiditate tempora natus modi ducimus repudiandae consequatur enim rem, illum sequi harum itaque laborum labore dicta maxime temporibus quisquam odit nostrum dolor blanditiis iste error! Neque sequi veritatis, reiciendis voluptate similique magni repellendus perferendis fugit ut quaerat expedita sed, placeat aut recusandae sunt architecto exercitationem quo voluptates dolorum doloribus pariatur provident? Incidunt voluptas aspernatur reprehenderit quod autem fuga deleniti cum nemo possimus eveniet ad harum recusandae facilis molestias ipsam animi dolore aut inventore iusto ut perspiciatis provident saepe, adipisci unde? Voluptatibus libero corrupti laboriosam sapiente corporis illo quia accusamus unde tenetur minus ratione nam aliquam at, repellat ex ullam, sed est sint dolorem deleniti eveniet. Vero illo aspernatur alias quibusdam provident expedita perferendis aut at, pariatur debitis consequuntur odit harum consectetur libero ullam explicabo. Nobis enim similique repellendus porro, nulla vitae, aliquid harum temporibus molestiae dolores impedit aut excepturi est ipsum molestias deserunt maxime eveniet, aperiam exercitationem alias fuga rerum reiciendis reprehenderit. Similique fugit deleniti, atque provident assumenda impedit minus eligendi natus nam aperiam eum ad labore enim. Porro consectetur reprehenderit vel alias amet nemo ipsum itaque beatae dolor aspernatur eos ea, est quia saepe laudantium error facere blanditiis totam exercitationem at animi, molestiae impedit ducimus. Minima commodi deserunt illum quae dolore saepe ratione est consectetur quod explicabo iure soluta culpa doloribus expedita perferendis debitis pariatur, enim natus exercitationem nesciunt quasi praesentium velit. Itaque incidunt sed excepturi voluptate repellat architecto, hic et doloremque vitae iusto quas! Nesciunt beatae expedita, neque placeat dolorum earum? Delectus labore sint veritatis obcaecati tempore pariatur excepturi at! Doloribus ad nulla tenetur error deleniti possimus, cumque id ex dolore consequuntur quod quo! Delectus, vel nulla vitae alias dolore totam, a cupiditate corrupti aperiam dolorum maxime excepturi tempora. Delectus impedit totam numquam voluptates sequi laboriosam! Ipsa a voluptatum laboriosam odit nisi veniam maxime laborum commodi doloremque, excepturi et eaque optio, nihil incidunt dolorem adipisci, provident quis vitae voluptatem. Ut eum obcaecati inventore illum neque. Commodi fugit perferendis quam dolores eum a odio, voluptatum rem debitis numquam. Maiores hic, itaque, tempore qui quasi architecto ut vitae quod vero quidem nihil animi ab saepe veritatis possimus. Quis voluptatem magnam pariatur beatae enim libero dolores inventore earum, voluptas molestiae quidem aut doloribus atque porro deserunt quasi eum, illum in hic. Dicta maiores dolores, quaerat quos at labore voluptas laudantium accusamus modi illo autem veniam quam inventore sequi harum totam, alias ea magnam nulla velit id officia eos. Sapiente saepe ratione fugit quam! Velit ex praesentium pariatur a quam, voluptas adipisci nisi porro est exercitationem ratione officiis assumenda aut reprehenderit. Labore quod sit ducimus. Culpa impedit quas, rerum inventore in ea sint ipsum nam repellat commodi harum deserunt nisi modi error! Ullam obcaecati doloribus commodi maiores sed est doloremque pariatur incidunt explicabo, quia dignissimos odio voluptatibus dolorem libero omnis praesentium ad possimus cupiditate eligendi voluptate debitis ipsa laudantium eos amet. Alias voluptates, explicabo quasi, soluta, iusto recusandae modi magnam eius cumque odio dignissimos deserunt. Officia reprehenderit et illum modi tempore, sapiente quos ad nostrum vitae dolores repudiandae magni nulla omnis at aliquid commodi placeat doloremque fuga, inventore reiciendis enim dolorum illo? Tenetur magni ea voluptates officia ad nemo commodi aliquam sed adipisci quo, ratione non asperiores consequuntur iusto nobis id cupiditate impedit cum deserunt maiores saepe, est eligendi vero. Vel natus ex eum voluptas consequatur earum cumque tempora deserunt aperiam perspiciatis culpa fugiat, nihil fugit voluptatem maiores eveniet placeat corporis modi cum quas autem est nemo nisi. Culpa totam, eum laboriosam, accusantium in nam impedit qui aperiam tempore fuga nisi aliquid tenetur quod suscipit debitis amet nesciunt alias beatae porro ducimus similique. Quaerat exercitationem fuga ea consequatur aperiam sequi perspiciatis. Odit magnam voluptate corporis dolores consequatur, cupiditate incidunt odio aliquam eum, ea aliquid consectetur nisi vel aspernatur? Pariatur voluptas aliquid ab voluptatem corrupti enim quibusdam consequatur soluta doloremque molestias impedit nobis, totam alias qui nulla? Cum a, odio sit dolores atque velit. Assumenda aspernatur sed quos fugiat repellendus blanditiis deserunt odit aut. Sequi rerum similique tenetur dolore aspernatur! Facilis obcaecati praesentium harum veritatis, amet atque eum ea quasi quia velit ipsam explicabo voluptatem aspernatur eius cum perferendis. Laboriosam assumenda a pariatur sapiente veniam hic quibusdam harum doloribus fuga repellendus, repellat non eius reprehenderit officia facere explicabo, quidem quasi tenetur, similique tempora. Adipisci porro a provident exercitationem eos suscipit officiis repudiandae dolorem aspernatur consequatur. Repellendus suscipit obcaecati non perspiciatis, ducimus hic. Dolore officiis beatae provident incidunt fuga architecto magnam expedita quia reiciendis saepe harum voluptates, quis vero sapiente alias ducimus amet atque odio facilis dolores! Doloremque aspernatur, consectetur ad cumque reiciendis facere?"})]})};var x=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var i=function(e){console.log("i am delect of todo",e),q(x.filter((function(i){return i!==e}))),localStorage.setItem("todos",JSON.stringify(x))},t=function(){console.log("i am Tantative ")},s=function(){console.log("i am finish")},o=function(e,i){var t={topic:e,about:i,sno:0!==x.length?x[x.length-1].sno+1:1};q([].concat(Object(n.a)(x),[t]))},r=Object(a.useState)(e),p=Object(u.a)(r,2),x=p[0],q=p[1];Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(x))}),[x]);var f={width:"40%",margin:"2%"},g={width:"60%",height:"90vh",overflow:"scroll"},O={display:"flex",flexDirection:"row",justifyContent:"space-around"};return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(c.a,{children:[Object(l.jsx)(d,{title:"My todosList"}),Object(l.jsxs)(h.c,{children:[Object(l.jsx)(h.a,{exact:!0,path:"/",render:function(){return Object(l.jsxs)("div",{style:O,children:[Object(l.jsx)("div",{className:"add",style:f,children:Object(l.jsx)(j,{addTodo:o,children:" "})}),Object(l.jsx)("div",{className:"todoSt",style:g,children:Object(l.jsx)(b,{todos:x,onDelect:i,onTan:t,onFinish:s})})]})}}),Object(l.jsx)(h.a,{exact:!0,path:"/about",children:Object(l.jsx)(v,{})})]}),Object(l.jsx)(m,{children:" "})]})})},q=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,35)).then((function(i){var t=i.getCLS,a=i.getFID,s=i.getFCP,o=i.getLCP,r=i.getTTFB;t(e),a(e),s(e),o(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),q()}},[[34,1,2]]]);
//# sourceMappingURL=main.dc0ad7da.chunk.js.map