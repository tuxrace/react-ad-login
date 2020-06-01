(this["webpackJsonpreact-ad-login"]=this["webpackJsonpreact-ad-login"]||[]).push([[0],{20:function(e,t,a){e.exports=a(37)},25:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(9),l=a.n(c),s=(a(25),a(26),a(27),a(28),function(){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 text-center body-2 color-grey"},"Your Account for everything Autodesk"),n.a.createElement("div",{className:"col-12 text-center body-2"},n.a.createElement("a",{href:"#",className:"footer-learn-more"},"Learn More")))}),o=a(11),m=a(2),i=function(e){var t=e.existing,a=Object(m.f)();return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},t?n.a.createElement("p",{className:"text-center body-2 color-grey"},"Already have an account? ",n.a.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),a.push("/")},className:"body-2"},"Sign In")):n.a.createElement("p",{className:"text-center body-2 color-grey"},"New to Autodesk? ",n.a.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),a.push("/create")},className:"body-2"},"Create Account"))))},u=a(18),d=function(e){e.name;var t=e.label,a=e.message,c=Object(u.a)(e,["name","label","message"]);return n.a.createElement(r.Fragment,null,n.a.createElement("label",{className:"body-1"}," ",t," "),n.a.createElement("input",Object.assign({className:"input-text",placeholder:t},c)),n.a.createElement("div",{className:"invalid-feedback error-message"},a))},E=(a(34),function(){Object(r.useEffect)((function(){document.querySelectorAll("input").forEach((function(e){e.addEventListener("input",(function(){e.setCustomValidity("")}))}))}),[])}),f=function(e){var t=e.create,a=Object(m.f)(),c=Object(m.g)();E();var l=Object(r.useState)("Next"),s=Object(o.a)(l,2),u=s[0],f=s[1],p=Object(r.useRef)(null);console.log("LOC",c);return n.a.createElement("div",{className:"row content margin-t-6"},t&&n.a.createElement("div",{className:"alert-panel"},n.a.createElement("div",{className:"alert alert-primary success-alert",role:"alert"},"Account Created Successfully")),n.a.createElement("h1",{className:"col-12 title title-margin"},"Sign In"),n.a.createElement("div",{className:"col-12"},n.a.createElement("form",{className:"form",ref:p},n.a.createElement(d,{id:"inputUsername",label:"Username",message:"The username is not recognized"}),n.a.createElement("button",{type:"button",className:"btn btn-primary btn-login gutter-top gutter-bottom",onClick:function(){var e=p.current,t=document.querySelector("#inputUsername");f("Verifying"),t.setCustomValidity("");setTimeout((function(){"johnsmith"!==t.value?(t.setCustomValidity("Error"),f("Next"),e.classList.add("was-validated")):a.push("/password")}),1e3)}},u))),n.a.createElement("div",{className:"col-12 gutter-top"},n.a.createElement(i,null)))},p=function(e){var t=e.setCreate,a=Object(r.useRef)(null),c=Object(m.f)();E();return Object(r.useEffect)((function(){t(!1)}),[]),n.a.createElement("div",{className:"row margin-t-6"},n.a.createElement("form",{className:"form",ref:a},n.a.createElement("h1",{className:"col-12 title title-margin"},"CreateAccount"),n.a.createElement("div",{className:"col-12 row"},n.a.createElement("div",{className:"col-6"},n.a.createElement(d,{id:"firstName",label:"First name",message:"Please enter your first name",required:!0})),n.a.createElement("div",{className:"col-6"},n.a.createElement(d,{id:"lasttName",label:"Last name",message:"Please enter your last name",required:!0}))),n.a.createElement("div",{className:"col-12 gutter-top"},n.a.createElement(d,{id:"username",label:"Username",message:"Please enter your Userrname",required:!0})),n.a.createElement("div",{className:"col-12 gutter-top"},n.a.createElement(d,{id:"confirmUsername",label:"Re-type username",message:"Please enter same Username",required:!0})),n.a.createElement("div",{className:"col-12 gutter-top"},n.a.createElement(d,{type:"password",id:"password",label:"Password",message:"Please enter your Password",required:!0})),n.a.createElement("div",{className:"col-12 gutter-top"},n.a.createElement(d,{type:"password",id:"confirmPassword",label:"Re-type password",message:"Please enter same password",required:!0})),n.a.createElement("div",{className:"col-12 gutter-top"},n.a.createElement("button",{type:"button",className:"btn btn-primary btn-login gutter-top gutter-bottom",onClick:function(){var e=a.current,r=!0,n=!0,l=document.querySelector("#username"),s=document.querySelector("#confirmUsername"),o=document.querySelector("#password"),m=document.querySelector("#confirmPassword");s.setCustomValidity(""),m.setCustomValidity(""),l.value!==s.value&&(s.setCustomValidity("error"),r=!1),o.value!==m.value&&(m.setCustomValidity("error"),n=!1),e.classList.add("was-validated"),e.checkValidity()&&r&&n&&(c.push("/"),t(!0))}},"Create Account")),n.a.createElement("div",{className:"col-12 gutter-top"},n.a.createElement(i,{existing:!0}))))},b=(a(35),function(){var e=Object(m.f)();return n.a.createElement("div",{className:"row content margin-t-6"},n.a.createElement("div",{className:"col-12 row password-title-margin"},n.a.createElement("h1",{className:"col-5 title"}," ",n.a.createElement("a",{href:"#",onClick:function(){return e.push("/")}},"<")," "),n.a.createElement("h1",{className:"col-7 title"},"Welcome")),n.a.createElement("p",{className:"col-12 body-1 color-grey text-center"},"joshsmith"),n.a.createElement("div",{className:"col-12 password-input-margin"},n.a.createElement("label",{className:"body-1"}," Password "),n.a.createElement("input",{type:"password",className:"input-text gutter-bottom",id:"validationCustom01",placeholder:"First name",value:"johnsmith",required:!0}),n.a.createElement("div",{className:"valid-feedback"},"Looks good!"),n.a.createElement("button",{type:"button",className:"btn btn-primary btn-login gutter-bottom"},"Sign In")),n.a.createElement("div",{className:"col-12"},n.a.createElement(i,null)))}),v=a(40),g=a(39),N=(a(36),n.a.createContext({create:!1}),function(){var e=Object(m.g)(),t=Object(r.useState)(!1),a=Object(o.a)(t,2),c=a[0],l=a[1];return n.a.createElement(v.a,null,n.a.createElement(g.a,{key:e.pathname,classNames:"fade",timeout:300},n.a.createElement(m.c,{location:e},n.a.createElement(m.a,{exact:!0,path:"/",children:n.a.createElement(f,{create:c})}),n.a.createElement(m.a,{exact:!0,path:"/password",children:n.a.createElement(b,null)}),n.a.createElement(m.a,{exact:!0,path:"/create",children:n.a.createElement(p,{setCreate:l})}))))}),y=a(8);var h=function(){return n.a.createElement("div",{className:"container main-container"},n.a.createElement("div",{className:"content"},n.a.createElement(y.a,null,n.a.createElement(N,null))),n.a.createElement("div",{className:"footer gutter-bottom"},n.a.createElement(s,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.360b9849.chunk.js.map