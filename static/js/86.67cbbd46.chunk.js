"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[86],{2086:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(5861),a=n(885),s=n(7757),c=n.n(s),u="ContactList_list__csErn",o="ContactList_item__EZYHO",i=n(5376),l=n(184),m=function(e){var t=e.contacts,n=(0,i.Nt)(),r=(0,a.Z)(n,1)[0];return console.log("contacts from ContactsView",t),(0,l.jsx)("ul",{className:u,children:t.map((function(e){return(0,l.jsxs)("li",{className:o,children:[e.name," : ",e.number,(0,l.jsx)("button",{className:"button",type:"button",onClick:function(){return r(e.id)},children:"Delete"})]},e.id)}))})},d=n(2791),h="ContactForm_label__-cVXI";function p(e){var t=e.onSubmit,n=(0,d.useState)(""),r=(0,a.Z)(n,2),s=r[0],c=r[1],u=(0,d.useState)(""),o=(0,a.Z)(u,2),i=o[0],m=o[1],p=function(e){var t=e.target.attributes.name.value;"name"===t&&c(e.target.value),"number"===t&&m(e.target.value)};return(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({name:s,number:i}),c(""),m("")},children:[(0,l.jsxs)("label",{className:h,children:["Name",(0,l.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:s,onChange:p,required:!0})]}),(0,l.jsxs)("label",{className:h,children:["Number",(0,l.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:i,onChange:p,required:!0})]}),(0,l.jsx)("button",{type:"submit",className:"button",children:"Add contact"})]})}var f=n(5048),b=n(5122),x=function(){var e=(0,f.v9)((function(e){return e.filter})),t=(0,f.I0)();return(0,l.jsxs)("label",{children:["Find contacts by name",(0,l.jsx)("input",{type:"text",value:e,onChange:function(e){return t((0,b.xO)(e.currentTarget.value))}})]})},v=n(7022);function j(){var e=(0,i.wY)(),t=e.data,n=e.error,s=e.isLoading,u=(0,i.Tn)(),o=(0,a.Z)(u,1)[0],d=(0,f.v9)((function(e){return e.filter})),h=function(){var e=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.some((function(e){return e.name===n.name}))){e.next=3;break}return alert(n.name+" is already in contacts"),e.abrupt("return");case 3:return e.prev=3,e.next=6,o(n);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),console.log("error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t){return e.apply(this,arguments)}}();return(0,l.jsxs)(v.Z,{children:[(0,l.jsx)("h1",{children:"Phonebook"}),(0,l.jsx)(p,{onSubmit:h}),(0,l.jsx)("h2",{children:"Contacts"}),(0,l.jsx)(x,{}),n&&(0,l.jsxs)("p",{children:["An error occurred:",n]}),s&&(0,l.jsx)("p",{children:"Loading..."}),t&&(0,l.jsx)(m,{contacts:function(){var e=d.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(e)}))}()})]})}}}]);
//# sourceMappingURL=86.67cbbd46.chunk.js.map