(this["webpackJsonpsocial-network-ts"]=this["webpackJsonpsocial-network-ts"]||[]).push([[0],{13:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__2R6vH",dialogs_items:"Dialogs_dialogs_items__Ckxz2",active:"Dialogs_active__oDa8w",dialog:"Dialogs_dialog__25TZP",messages:"Dialogs_messages__2x5Gv",message:"Dialogs_message__LRm7p"}},20:function(e,t,s){e.exports={item:"Post_item__3ZUrT",likesCount:"Post_likesCount__3XH3W"}},22:function(e,t,s){},32:function(e,t,s){e.exports={header:"Header_header__3X5wX"}},34:function(e,t,s){e.exports={posts:"MyPosts_posts__2q_8H"}},35:function(e,t,s){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1v9W_"}},41:function(e,t,s){},67:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),i=s(16),c=s.n(i),r=(s(41),s(22),s(32)),o=s.n(r),l=s(0),d=function(){return Object(l.jsx)("header",{className:o.a.header,children:Object(l.jsx)("img",{src:"https://www.softermii.com/assets/uploads/blog/20181127/inner-05.png",alt:"react-logo"})})},j=s(7),u=s(10),b=s(3),x="ADD-POST",m="UPDATE-NEW-POST-TEXT",O={postData:[{id:1,message:"hi, how are you?",likesCount:12},{id:2,message:"it is my firt post",likesCount:15},{id:2,message:"aaaaaa",likesCount:1}],newPostText:""},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:var s=e.postData.length+1,a={id:s,message:e.newPostText,likesCount:0};return Object(b.a)(Object(b.a)({},e),{},{postData:[].concat(Object(u.a)(e.postData),[a]),newPostText:""});case m:return Object(b.a)(Object(b.a)({},e),{},{newPostText:t.payload.newText});default:return e}},f=s(34),v=s.n(f),g=s(20),p=s.n(g),_=function(e){return Object(l.jsxs)("div",{className:p.a.item,children:[Object(l.jsx)("img",{src:"https://cs13.pikabu.ru/avatars/2487/x2487329-146029786.png",alt:"avatar"}),e.message,Object(l.jsxs)("span",{className:p.a.likesCount,children:[e.likesCount," likes"]})]})},w=function(e){var t=e.posts.map((function(e){return Object(l.jsx)(_,{message:e.message,likesCount:e.likesCount})}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"My posts"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("textarea",{onChange:function(t){var s=t.currentTarget.value;e.updateNewPostText(s)},value:e.newPostText})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(){e.addPost()},children:"Add post"})})]}),Object(l.jsx)("div",{className:v.a.posts,children:t})]})},N=Object(j.b)((function(e){return{posts:e.profilePage.postData,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(){e({type:x})},updateNewPostText:function(t){e(function(e){return{type:m,payload:{newText:e}}}(t))}}}))(w),k=s(35),y=s.n(k),P=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:"https://thumbs.dreamstime.com/b/\u0431\u043e\u043b\u044c\u0448\u0438\u0435-\u0434\u0430\u043d\u043d\u044b\u0435-\u0438-\u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u0442\u0435\u043d\u0434\u0435\u043d\u0446\u0438\u0438-\u0432\u0435\u0449\u0435\u0439-\u0440\u0430\u0431\u043e\u0447\u0435\u0435-\u043c\u0435\u0441\u0442\u043e-\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u0443-132754575.jpg",alt:"aaa"})}),Object(l.jsx)("div",{className:y.a.descriptionBlock,children:"Ava + description"})]})},T=function(e){return Object(l.jsxs)("div",{className:"main-content",children:[Object(l.jsx)(P,{}),Object(l.jsx)(N,{})]})},D=function(){return Object(l.jsx)("div",{children:"News"})},C=function(){return Object(l.jsx)("div",{children:"Music"})},A=function(){return Object(l.jsx)("div",{children:"Settings"})},U=s(2),S="UPDATE-NEW-MESSAGE-TEXT",M="ADD-MESSAGE",B={dialogsData:[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valery"}],messagesData:[{id:1,text:"Hi"},{id:2,text:"How are you?"},{id:3,text:"What are you doing?"},{id:4,text:"Hello my friend;)"},{id:5,text:"Yo!"},{id:6,text:"Goodbye!"}],newMessageText:""},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(b.a)(Object(b.a)({},e),{},{newMessageText:t.payload.newText});case M:var s=e.messagesData.length+1,a={id:s,text:e.newMessageText};return Object(b.a)(Object(b.a)({},e),{},{messagesData:[].concat(Object(u.a)(e.messagesData),[a]),newMessageText:""});default:return e}},F=s(6),H=s(13),L=s.n(H),W=function(e){var t="/dialgs/"+e.id;return Object(l.jsx)("div",{className:L.a.dialog,children:Object(l.jsx)(F.b,{to:t,children:e.name})})},G=function(e){return Object(l.jsx)("div",{className:L.a.message,children:e.text})},I=function(e){var t=e.dialogsPage.dialogsData.map((function(e){return Object(l.jsx)(W,{name:e.name,id:e.id})})),s=e.dialogsPage.messagesData.map((function(e){return Object(l.jsx)(G,{text:e.text})}));return Object(l.jsxs)("div",{className:L.a.dialogs,children:[Object(l.jsx)("div",{className:L.a.dialogs_items,children:t}),Object(l.jsxs)("div",{className:L.a.messages,children:[s,Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)("textarea",{onChange:function(t){var s=t.currentTarget.value;e.updateNewMessageText(s)},value:e.dialogsPage.newMessageText})}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(){e.addMessage()},children:"Send"})})]})]})]})},X=Object(j.b)((function(e){return{dialogsPage:e.messagesPage}}),(function(e){return{addMessage:function(){e({type:M})},updateNewMessageText:function(t){e(function(e){return{type:S,payload:{newText:e}}}(t))}}}))(I),R=s(8),q=s.n(R),J=function(e){var t=e.state.friends.map((function(e){return Object(l.jsxs)("div",{className:q.a.friend,children:[Object(l.jsx)("img",{src:e.link,alt:"img"}),e.name]})}));return Object(l.jsxs)("nav",{className:q.a.nav,children:[Object(l.jsx)("div",{className:q.a.item,children:Object(l.jsx)(F.b,{to:"/profile",className:function(e){return e.isActive?"active-link":""},children:"Profile"})}),Object(l.jsx)("div",{className:q.a.item,children:Object(l.jsx)(F.b,{to:"/dialogs",className:function(e){return e.isActive?"active-link":""},children:"Messages"})}),Object(l.jsx)("div",{className:q.a.item,children:Object(l.jsx)(F.b,{to:"/news",className:function(e){return e.isActive?"active-link":""},children:"News"})}),Object(l.jsx)("div",{className:q.a.item,children:Object(l.jsx)(F.b,{to:"/music",className:function(e){return e.isActive?"active-link":""},children:"Music"})}),Object(l.jsx)("div",{className:q.a.item,children:Object(l.jsx)(F.b,{to:"/settings",className:function(e){return e.isActive?"active-link":""},children:"Settings"})}),Object(l.jsx)("div",{className:q.a.item,children:Object(l.jsx)(F.b,{to:"/users",className:function(e){return e.isActive?"active-link":""},children:"Users"})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:q.a.friends,children:"Friends"}),t]})]})},V=Object(j.b)((function(e){return{state:e.sidebar}}),(function(e){return{}}))(J),Z="FOLLOW",z="UNFOLLOW",K="SET_USERS",Q={users:[]},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return Object(b.a)(Object(b.a)({},e),{},{users:e.users.map((function(e){return e.id===t.payload.id?Object(b.a)(Object(b.a)({},e),{},{followed:!0}):e}))});case z:return Object(b.a)(Object(b.a)({},e),{},{users:e.users.map((function(e){return e.id===t.payload.id?Object(b.a)(Object(b.a)({},e),{},{followed:!1}):e}))});case K:return Object(b.a)(Object(b.a)({},e),{},{users:[].concat(Object(u.a)(e.users),Object(u.a)(t.payload.users))});default:return e}},$=s(36),ee=s.n($),te=s(9),se=s.n(te),ae=s.p+"static/media/user.02d5ce4f.png",ne=function(e){var t=e.users.map((function(t){return Object(l.jsxs)("div",{className:se.a.UserCard,children:[Object(l.jsxs)("span",{className:se.a.avatarBlock,children:[Object(l.jsx)("div",{className:se.a.Avatar,children:Object(l.jsx)("img",{src:null!==t.photos.small?t.photos.small:ae,alt:"Avatar"})}),Object(l.jsx)("div",{children:t.followed?Object(l.jsx)("button",{className:se.a.FollowButton,onClick:function(){return e.unfollow(t.id)},children:"Unfollow"}):Object(l.jsx)("button",{className:se.a.FollowButton,onClick:function(){return e.follow(t.id)},children:"Follow"})})]}),Object(l.jsxs)("div",{className:se.a.infoBlock,children:[Object(l.jsxs)("span",{className:se.a.userInfo,children:[Object(l.jsx)("div",{children:t.name}),Object(l.jsx)("div",{children:t.status})]}),Object(l.jsxs)("span",{children:[Object(l.jsx)("div",{children:"user.location.country"}),Object(l.jsx)("div",{children:"user.location.city"})]})]})]},t.id)}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:function(){0===e.users.length&&ee.a.get("https://social-network.samuraijs.com/api/1.0/users").then((function(t){return e.setUsers(t.data.items)}))},children:"Get Users"}),t]})},ie=Object(j.b)((function(e){return{users:e.usersPage.users}}),(function(e){return{follow:function(t){e(function(e){return{type:Z,payload:{id:e}}}(t))},unfollow:function(t){e(function(e){return{type:z,payload:{id:e}}}(t))},setUsers:function(t){e(function(e){return{type:K,payload:{users:e}}}(t))}}}))(ne),ce=function(e){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{}),Object(l.jsx)(V,{}),Object(l.jsx)("div",{className:"app-wrapper-content",children:Object(l.jsxs)(U.c,{children:[Object(l.jsx)(U.a,{path:"/dialogs",element:Object(l.jsx)(X,{})}),Object(l.jsx)(U.a,{path:"/profile",element:Object(l.jsx)(T,{})}),Object(l.jsx)(U.a,{path:"/news",element:Object(l.jsx)(D,{})}),Object(l.jsx)(U.a,{path:"/music",element:Object(l.jsx)(C,{})}),Object(l.jsx)(U.a,{path:"/settings",element:Object(l.jsx)(A,{})}),Object(l.jsx)(U.a,{path:"/users",element:Object(l.jsx)(ie,{})})]})})]})},re=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,68)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),i(e),c(e)}))},oe=s(21),le={friends:[{id:1,name:"Dimych",link:"https://cs6.pikabu.ru/avatars/404/x404070-828004264.png"},{id:2,name:"Andrey",link:"https://aftershock.news/sites/default/files/pictures/picture-42471-1586248390.jpg"},{id:3,name:"Sveta",link:"https://www.meme-arsenal.com/memes/cdfd31e349e0124972afec8440807b32.jpg"}]},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le;return e},je=Object(oe.a)({profilePage:h,messagesPage:E,sidebar:de,usersPage:Y}),ue=Object(oe.b)(je);ue.getState(),c.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(F.a,{children:Object(l.jsx)(j.a,{store:ue,children:Object(l.jsx)(ce,{})})})}),document.getElementById("root")),re()},8:function(e,t,s){e.exports={nav:"Navbar_nav__DF114",item:"Navbar_item__EPJmQ","active-link":"Navbar_active-link__3FqVw",active:"Navbar_active__1y0Ce",friend:"Navbar_friend__1GKxm"}},9:function(e,t,s){e.exports={Avatar:"Users_Avatar__Uezqs",FollowButton:"Users_FollowButton__3tp_j",UserCard:"Users_UserCard__1P3-U",avatarBlock:"Users_avatarBlock__aj0Au",userInfo:"Users_userInfo__34aiX",infoBlock:"Users_infoBlock__1ZxRK"}}},[[67,1,2]]]);
//# sourceMappingURL=main.f8954167.chunk.js.map