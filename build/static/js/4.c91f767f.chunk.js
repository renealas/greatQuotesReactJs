(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{45:function(e,t,c){e.exports={item:"CommentItem_item__24mbD"}},46:function(e,t,c){e.exports={comments:"CommentsList_comments__valp0"}},47:function(e,t,c){e.exports={comments:"Comments_comments__iZX-v"}},48:function(e,t,c){e.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},49:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__nE9T6"}},54:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(2),o=c(7),a=c(38),r=c(36),m=c(37),i=c(16),j=c(45),d=c.n(j),u=c(1),l=function(e){return Object(u.jsx)("li",{className:d.a.item,children:Object(u.jsx)("p",{children:e.text})})},b=c(46),x=c.n(b),O=function(e){return Object(u.jsx)("ul",{className:x.a.comments,children:e.comments.map((function(e){return Object(u.jsx)(l,{text:e.text},e.id)}))})},h=c(47),f=c.n(h),p=c(48),_=c.n(p),N=function(e){var t=Object(n.useRef)(),c=Object(r.a)(m.a),s=c.sendRequest,o=c.status,a=c.error,j=e.onAddedComment;Object(n.useEffect)((function(){"completed"!==o||a||j()}),[o,a,j]);var d=function(c){c.preventDefault();var n=t.current.value;s({commentData:{text:n},quoteId:e.quoteId})};return Object(u.jsxs)("form",{className:_.a.form,onSubmit:d,children:["pending"===o&&Object(u.jsx)("div",{className:"centered",children:Object(u.jsx)(i.a,{})}),Object(u.jsxs)("div",{className:_.a.control,onSubmit:d,children:[Object(u.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(u.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(u.jsx)("div",{className:_.a.actions,children:Object(u.jsx)("button",{className:"btn",children:"Add Comment"})})]})},C=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],o=t[1],j=Object(s.j)().quoteId,d=Object(r.a)(m.c),l=d.sendRequest,b=d.status,x=d.data;Object(n.useEffect)((function(){l(j)}),[j,l]);var h,p=Object(n.useCallback)((function(){l(j)}),[l,j]);return"pending"===b&&(h=Object(u.jsx)("div",{className:"centered",children:Object(u.jsx)(i.a,{})})),"completed"===b&&x&&x.length>0&&(h=Object(u.jsx)(O,{comments:x})),"completed"!==b||x&&0!==x.length||(h=Object(u.jsx)("p",{className:"centered",children:"No Existen Comentatios Aun!!!"})),Object(u.jsxs)("section",{className:f.a.comments,children:[Object(u.jsx)("h2",{children:"Comentarios de Usuarios"}),!c&&Object(u.jsx)("button",{className:"btn",onClick:function(){o(!0)},children:"A\xf1adir Comentario"}),c&&Object(u.jsx)(N,{quoteId:j,onAddedComment:p}),h]})},v=c(49),g=c.n(v),q=function(e){return Object(u.jsxs)("figure",{className:g.a.quote,children:[Object(u.jsx)("p",{children:e.text}),Object(u.jsx)("figcaption",{children:e.author})]})};t.default=function(e){var t=Object(s.k)(),c=Object(s.j)().quoteId,a=Object(r.a)(m.e,!0),j=a.sendRequest,d=a.status,l=a.data,b=a.error;return Object(n.useEffect)((function(){j(c)}),[j,c]),"pending"===d?Object(u.jsx)("div",{className:"centered",children:Object(u.jsx)(i.a,{})}):b?Object(u.jsx)("p",{className:"centered",children:b}):l.text?Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)(q,{text:l.text,author:l.author}),Object(u.jsx)(s.c,{path:"".concat(t.path),exact:!0,children:Object(u.jsx)("div",{className:"centered",children:Object(u.jsx)(o.b,{className:"btn--flat",to:"".concat(t.url,"/comments"),children:"Cargar Comentarios"})})}),Object(u.jsx)(s.c,{path:"".concat(t.path,"/comments"),children:Object(u.jsx)(C,{})})]}):Object(u.jsx)("p",{children:"No Quote Found!"})}}}]);
//# sourceMappingURL=4.c91f767f.chunk.js.map