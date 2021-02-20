(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a.n(s),i=a(7),r=a.n(i),o=(a(15),a(6)),l=a(2),u=a.p+"static/media/logo.c2821b38.svg";var p=function(){return Object(n.jsx)("header",{className:"header",children:Object(n.jsx)("img",{className:"header__logo",src:u,alt:"\u041b\u043e\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430"})})},d=a.p+"static/media/like-button.df0c9655.svg",b=c.a.createContext();var h=function(e){var t=c.a.useContext(b),a=e.card.owner._id===t._id,s=e.card.likes.some((function(e){return e._id===t._id})),i="cards__like-button ".concat(s?"cards__like-button_active":""),r="cards__remove-button ".concat(a?"":"cards__remove-button_hidden");return Object(n.jsxs)("div",{className:"cards__item",children:[Object(n.jsx)("img",{className:"cards__image",src:e.card.link,alt:e.card.name,onClick:function(){e.onClick(e.card)}}),Object(n.jsx)("button",{className:r,type:"button",onClick:function(){e.onCardDelete(e.card)}}),Object(n.jsxs)("div",{className:"cards__description",children:[Object(n.jsx)("h2",{className:"cards__title",children:e.card.name}),Object(n.jsxs)("div",{className:"cards__like-container",children:[Object(n.jsx)("img",{src:d,className:i,alt:"\u041b\u0430\u0439\u043a",onClick:function(){e.onCardLike(e.card)}}),Object(n.jsx)("span",{className:"cards__like-number",children:e.card.likes.length})]})]})]})};var _=function(e){var t=c.a.useContext(b);return Object(n.jsxs)("main",{className:"content",children:[Object(n.jsxs)("section",{className:"profile",children:[Object(n.jsx)("div",{className:"profile__avatar-container",onClick:e.onEditAvatar,children:Object(n.jsx)("img",{className:"profile__avatar",src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u0440\u043e\u0444\u0438\u043b\u044f"})}),Object(n.jsxs)("div",{className:"profile__info",children:[Object(n.jsxs)("div",{className:"profile__title",children:[Object(n.jsx)("h1",{className:"profile__name",children:t.name}),Object(n.jsx)("button",{className:"profile__edit-button",onClick:e.onEditProfile,type:"button"})]}),Object(n.jsx)("p",{className:"profile__profession",children:t.about})]}),Object(n.jsx)("button",{className:"profile__add-button",onClick:e.onAddPlace,type:"button"})]}),Object(n.jsx)("section",{className:"cards",children:e.cards.map((function(t){return Object(n.jsx)(h,{card:t,onClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})]})};var m=function(){return Object(n.jsx)("footer",{className:"footer",children:Object(n.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Mesto Russia"})})};var j=function(e){return Object(n.jsx)("div",{className:"popup ".concat(e.isOpen&&"popup_opened"," popup_type_").concat(e.name),children:Object(n.jsxs)("div",{className:"popup__container",children:[Object(n.jsx)("button",{type:"button",onClick:e.onClose,className:"popup__close-button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(n.jsx)("h2",{className:"popup__title",children:e.title}),Object(n.jsx)("form",{className:"popup__form",name:e.name,noValidate:!0,onSubmit:e.onSubmit,children:e.children})]})})};var f=function(e){var t=e.card,a=e.isOpen,s=e.onClose;return Object(n.jsx)("div",{className:"popup ".concat(a&&"popup_opened"," popup_type_lightbox"),children:Object(n.jsxs)("div",{className:"lightbox",children:[Object(n.jsx)("button",{className:"popup__close-button",type:"button",onClick:s,"aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(n.jsx)("img",{className:"lightbox__image",src:t.link,alt:t.name}),Object(n.jsx)("h2",{className:"lightbox__image-title",children:t.name})]})})};var O=function(e){var t=c.a.useContext(b),a=c.a.useState(""),s=Object(l.a)(a,2),i=s[0],r=s[1],o=c.a.useState(""),u=Object(l.a)(o,2),p=u[0],d=u[1];return c.a.useEffect((function(){r(t.name),d(t.about)}),[t]),Object(n.jsxs)(j,{isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:i,about:p}),r(""),d("")},name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",children:[Object(n.jsx)("input",{type:"text",className:"popup__input popup__input_name-field",id:"name",name:"name",minLength:"2",maxLength:"40",value:i,onChange:function(e){r(e.target.value)},required:!0}),Object(n.jsx)("span",{id:"name-error",className:"popup__input-error"}),Object(n.jsx)("input",{type:"text",className:"popup__input popup__input_profession",id:"profession",name:"about",minLength:"2",maxLength:"200",value:p,onChange:function(e){d(e.target.value)},required:!0}),Object(n.jsx)("span",{id:"profession-error",className:"popup__input-error"}),Object(n.jsx)("button",{type:"submit",className:"popup__submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})};var v=function(e){var t=c.a.useRef();return Object(n.jsxs)(j,{isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(a){a.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},name:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",children:[Object(n.jsx)("input",{type:"url",className:"popup__input popup__input_avatar-link",id:"avatar-link",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",ref:t,required:!0}),Object(n.jsx)("span",{id:"avatar-link-error",className:"popup__input-error"}),Object(n.jsx)("button",{type:"submit",className:"popup__submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})};var x=function(e){var t=c.a.useRef(),a=c.a.useRef();return Object(n.jsxs)(j,{isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onAddPlace({name:t.current.value,link:a.current.value})},name:"add-new-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",children:[Object(n.jsx)("input",{type:"text",className:"popup__input popup__input_place-name",id:"place-name",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",ref:t,required:!0}),Object(n.jsx)("span",{id:"place-name-error",className:"popup__input-error"}),Object(n.jsx)("input",{type:"url",className:"popup__input popup__input_place-link",id:"place-link",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",ref:a,required:!0}),Object(n.jsx)("span",{id:"place-link-error",className:"popup__input-error"}),Object(n.jsx)("button",{type:"submit",className:"popup__submit",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})},k=a(8),g=a(9),N={baseUrl:"https://mesto.nomoreparties.co/v1/cohort-19",headers:{authorization:"d9b0d4bd-9467-4294-aae9-066f4b6515ac","Content-Type":"application/json"}},C=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(k.a)(this,e),this._baseUrl=a,this._headers=n}return Object(g.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers,method:"GET"}).then(this._getResponseData)}},{key:"getProfileData",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers,method:"GET"}).then(this._getResponseData)}},{key:"setProfileData",value:function(e){var t=e.name,a=e.about;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:t,about:a})}).then(this._getResponseData)}},{key:"createCard",value:function(e){var t=e.name,a=e.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:a})}).then(this._getResponseData)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"putLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._getResponseData)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._getResponseData)}}]),e}())(N);var y=function(){var e=c.a.useState(!1),t=Object(l.a)(e,2),a=t[0],s=t[1],i=c.a.useState(!1),r=Object(l.a)(i,2),u=r[0],d=r[1],h=c.a.useState(!1),k=Object(l.a)(h,2),g=k[0],N=k[1],y=c.a.useState(!1),D=Object(l.a)(y,2),S=D[0],U=D[1],P=c.a.useState({link:"",name:""}),E=Object(l.a)(P,2),L=E[0],R=E[1],A=c.a.useState({name:"",about:"",avatar:""}),T=Object(l.a)(A,2),w=T[0],q=T[1],J=c.a.useState([]),I=Object(l.a)(J,2),G=I[0],H=I[1];function M(){N(!1),s(!1),d(!1),U(!1)}return c.a.useEffect((function(){Promise.all([C.getProfileData(),C.getInitialCards()]).then((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];q(a),H(Object(o.a)(n))})).catch((function(e){return console.log(e)}))}),[]),Object(n.jsxs)(b.Provider,{value:w,children:[Object(n.jsxs)("div",{className:"page",children:[Object(n.jsx)(p,{}),Object(n.jsx)(_,{cards:G,onEditProfile:function(){s(!0)},onAddPlace:function(){d(!0)},onEditAvatar:function(){N(!0)},onCardClick:function(e){var t=e.name,a=e.link;R({name:t,link:a}),U(!0)},onCardDelete:function(e){C.deleteCard(e._id).then((function(){var t=G.filter((function(t){return t._id!==e._id}));H(t)})).catch((function(e){return console.log(e)}))},onCardLike:function(e){(e.likes.some((function(e){return e._id===w._id}))?C.deleteLike(e._id):C.putLike(e._id)).then((function(t){var a=G.map((function(a){return a._id===e._id?t:a}));H(a)})).catch((function(e){return console.log(e)}))}}),Object(n.jsx)(m,{})]}),Object(n.jsx)(O,{isOpen:a,onClose:M,onUpdateUser:function(e){C.setProfileData(e).then((function(e){q(e),M()})).catch((function(e){return console.log(e)}))}}),Object(n.jsx)(v,{isOpen:g,onClose:M,onUpdateAvatar:function(e){C.editAvatar(e).then((function(e){q(e),M()})).catch((function(e){return console.log(e)}))}}),Object(n.jsx)(x,{isOpen:u,onClose:M,onAddPlace:function(e){C.createCard(e).then((function(e){H([e].concat(Object(o.a)(G))),M()})).catch((function(e){return console.log(e)}))}}),Object(n.jsx)(j,{name:"delete-card",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b",children:Object(n.jsx)("button",{type:"submit",className:"popup__submit popup__submit-confirm",children:"\u0414\u0430"})}),Object(n.jsx)(f,{isOpen:S,onClose:M,card:L})]})};r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.839a1ece.chunk.js.map