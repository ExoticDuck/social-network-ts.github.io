(this["webpackJsonpsocial-network-ts"]=this["webpackJsonpsocial-network-ts"]||[]).push([[0],{110:function(e,t,n){},129:function(e,t,n){e.exports={Loader:"Preloader_Loader__3O9yV"}},130:function(e,t,n){e.exports={mainContent:"Profile_mainContent__1v0_A"}},131:function(e,t,n){e.exports={LoginPage:"Login_LoginPage__1tX-g"}},14:function(e,t,n){e.exports={Avatar:"Users_Avatar__Uezqs",followBox:"Users_followBox__G_ywg",FollowButton:"Users_FollowButton__3tp_j",UserCard:"Users_UserCard__1P3-U",avatarBlock:"Users_avatarBlock__aj0Au",userInfo:"Users_userInfo__34aiX",Status:"Users_Status__3Bdku",location:"Users_location__1rnO4",infoBlock:"Users_infoBlock__1ZxRK",page:"Users_page__19XVr",SelectedPage:"Users_SelectedPage__oFelf",PagesContainer:"Users_PagesContainer__2RkrP"}},161:function(e,t,n){},25:function(e,t,n){e.exports={nav:"Navbar_nav__DF114",item:"Navbar_item__EPJmQ","active-link":"Navbar_active-link__3FqVw",friend:"Navbar_friend__1GKxm"}},289:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),r=n(62),i=n.n(r),o=(n(161),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,290)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),r(e),i(e)}))}),c=n(8),l=n(5),u=n(33),d=n(124),j=n.n(d).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0",withCredentials:!0,headers:{"API-KEY":"c4deeac1-451b-4ef8-8dc8-a4ffeee3c9cc"}}),p=function(e,t){return j.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},f=function(e){return j.get("profile/"+e)},b=function(e){return j.get("profile/status/"+e)},h=function(e){return j.put("profile/status",{status:e})},g=function(){return j.get("https://social-network.samuraijs.com/api/1.0/auth/me")},O=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return j.post("auth/login",{email:e,password:t,rememberMe:n})},m=function(){return j.delete("auth/login")},x=function(e){return j.post("/follow/".concat(e),{},{})},v=function(e){return j.delete("/follow/".concat(e))},_="SET_USER_DATA",P={id:null,email:null,login:null,isAuth:!1},y=function(e,t,n,s){return{type:_,payload:{id:e,email:t,login:n,isAuth:s}}},C=function(){return function(e){g().then((function(t){if(0===t.data.resultCode){var n=t.data.data,s=n.id,a=n.email,r=n.login;e(y(s,a,r,!0))}}))}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(l.a)(Object(l.a)({},e),t.payload);default:return e}},w=n(30),N="ADD-MESSAGE",k={dialogsData:[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valery"}],messagesData:[{id:1,text:"Hi"},{id:2,text:"How are you?"},{id:3,text:"What are you doing?"},{id:4,text:"Hello my friend;)"},{id:5,text:"Yo!"},{id:6,text:"Goodbye!"}]},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:var n=e.messagesData.length+1,s={id:n,text:t.payload.value};return Object(l.a)(Object(l.a)({},e),{},{messagesData:[].concat(Object(w.a)(e.messagesData),[s])});default:return e}},I="ADD-POST",A="SET-USER-PROFILE",F="SET-USER-STATUS",D={postData:[{id:1,message:"hi, how are you?",likesCount:12},{id:2,message:"it is my firt post",likesCount:15},{id:2,message:"aaaaaa",likesCount:1}],profile:null,status:""},E=function(e){return{type:F,payload:{status:e}}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:var n=e.postData.length+1,s={id:n,message:t.payload.text,likesCount:0};return Object(l.a)(Object(l.a)({},e),{},{postData:[].concat(Object(w.a)(e.postData),[s])});case A:return Object(l.a)(Object(l.a)({},e),{},{profile:t.payload.profile});case F:return Object(l.a)(Object(l.a)({},e),{},{status:t.payload.status});default:return e}},T={friends:[{id:1,name:"Dimych",link:"https://cs6.pikabu.ru/avatars/404/x404070-828004264.png"},{id:2,name:"Andrey",link:"https://aftershock.news/sites/default/files/pictures/picture-42471-1586248390.jpg"},{id:3,name:"Sveta",link:"https://www.meme-arsenal.com/memes/cdfd31e349e0124972afec8440807b32.jpg"}]},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T;return e},B="FOLLOW",z="UNFOLLOW",R="SET-USERS",G="SET-CURRENT-PAGE",H="SET-TOTAL-USERS-COUNT",X="TOGGLE-IS-FETCHING",V="TOGGLE-FOLLOWING-IN-PROGRESS",W={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},Z=function(e){return{type:R,payload:{users:e}}},q=function(e){return{type:H,payload:{totalCount:e}}},K=function(e){return{type:X,payload:{isFetching:e}}},J=function(e,t){return{type:V,payload:{following:e,userId:t}}},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(l.a)(Object(l.a)({},e),{},{users:e.users.map((function(e){return e.id===t.payload.id?Object(l.a)(Object(l.a)({},e),{},{followed:!0}):e}))});case z:return Object(l.a)(Object(l.a)({},e),{},{users:e.users.map((function(e){return e.id===t.payload.id?Object(l.a)(Object(l.a)({},e),{},{followed:!1}):e}))});case R:return Object(l.a)(Object(l.a)({},e),{},{users:Object(w.a)(t.payload.users)});case G:return Object(l.a)(Object(l.a)({},e),{},{currentPage:t.payload.currentPage});case H:return Object(l.a)(Object(l.a)({},e),{},{totalUsersCount:t.payload.totalCount});case X:return Object(l.a)(Object(l.a)({},e),{},{isFetching:t.payload.isFetching});case V:return Object(l.a)(Object(l.a)({},e),{},{followingInProgress:t.payload.following?[].concat(Object(w.a)(e.followingInProgress),[t.payload.userId]):Object(w.a)(e.followingInProgress.filter((function(e){return e!==t.payload.userId})))});default:return e}},Y=n(126),$=n(123),ee="SET-INITIALIZED",te={initialized:!1},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee:return Object(l.a)(Object(l.a)({},e),{},{initialized:!0});default:return e}},se=Object(c.c)({profilePage:M,messagesPage:U,sidebar:L,usersPage:Q,auth:S,form:$.a,app:ne}),ae=Object(c.e)(se,Object(c.a)(Y.a)),re=n(10),ie=n(9),oe=n(21),ce=n(22),le=n(24),ue=n(23),de=(n(110),n(0)),je=function(){return Object(de.jsx)("div",{children:"News"})},pe=function(){return Object(de.jsx)("div",{children:"Music"})},fe=function(){return Object(de.jsx)("div",{children:"Settings"})},be=n(35),he=n(43),ge=n.n(he),Oe=n(121),me=n(122),xe=n(42),ve=n(51),_e=n.n(ve),Pe=function(e){e.input;var t=e.meta,n=(e.child,Object(xe.a)(e,["input","meta","child"])),s=t.touched&&t.error;return Object(de.jsxs)("div",{className:_e.a.formControl+" "+(s?_e.a.error:""),children:[n.children,Object(de.jsx)("div",{children:s&&Object(de.jsx)("span",{children:t.error})})]})},ye=function(e){var t=e.input,n=(e.meta,e.child,Object(xe.a)(e,["input","meta","child"]));return Object(de.jsx)(Pe,Object(l.a)(Object(l.a)({},e),{},{children:Object(de.jsx)("textarea",Object(l.a)(Object(l.a)({},t),n))}))},Ce=function(e){var t=e.input,n=(e.meta,e.child,Object(xe.a)(e,["input","meta","child"]));return Object(de.jsx)(Pe,Object(l.a)(Object(l.a)({},e),{},{children:Object(de.jsx)("input",Object(l.a)(Object(l.a)({},t),n))}))},Se=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},we=function(e){if(!e)return"Field is required"},Ne=function(e){var t="/dialgs/"+e.id;return Object(de.jsx)("div",{className:ge.a.dialog,children:Object(de.jsx)(re.b,{to:t,children:e.name})})},ke=function(e){return Object(de.jsx)("div",{className:ge.a.message,children:e.text})},Ue=Se(100),Ie=Object(me.a)({form:"dialogAddMessageForm"})((function(e){return Object(de.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(de.jsx)("div",{children:Object(de.jsx)(Oe.a,{name:"newMessageBody",component:ye,placeholder:"Enter your message",validate:[we,Ue]})}),Object(de.jsx)("div",{children:Object(de.jsx)("button",{children:"Send"})})]})})),Ae=function(e){var t=e.dialogsPage.dialogsData.map((function(e){return Object(de.jsx)(Ne,{name:e.name,id:e.id})})),n=e.dialogsPage.messagesData.map((function(e){return Object(de.jsx)(ke,{text:e.text})}));return Object(de.jsxs)("div",{className:ge.a.dialogs,children:[Object(de.jsx)("div",{className:ge.a.dialogs_items,children:t}),Object(de.jsxs)("div",{className:ge.a.messages,children:[n,Object(de.jsx)(Ie,{onSubmit:function(t){e.addMessage(t.newMessageBody)}})]})]})},Fe=function(e){return{isAuth:e.auth.isAuth}};function De(e){return Object(ie.b)(Fe)((function(t){var n=t.isAuth,s=Object(xe.a)(t,["isAuth"]);return n?Object(de.jsx)(e,Object(l.a)({},s)):Object(de.jsx)(be.a,{to:"/login"})}))}var Ee=Object(c.d)(Object(ie.b)((function(e){return{dialogsPage:e.messagesPage}}),(function(e){return{addMessage:function(t){e(function(e){return{type:N,payload:{value:e}}}(t))}}})),De)(Ae),Me=n(25),Te=n.n(Me),Le=function(e){var t=e.state.friends.map((function(e){return Object(de.jsxs)("div",{className:Te.a.friend,children:[Object(de.jsx)("img",{src:e.link,alt:"img"}),e.name]})}));return Object(de.jsxs)("nav",{className:Te.a.nav,children:[Object(de.jsx)("div",{className:Te.a.item,children:Object(de.jsx)(re.b,{to:"/profile/:userId",className:function(e){return e?"active-link":""},children:"Profile"})}),Object(de.jsx)("div",{className:Te.a.item,children:Object(de.jsx)(re.b,{to:"/dialogs",className:function(e){return e?"active-link":""},children:"Messages"})}),Object(de.jsx)("div",{className:Te.a.item,children:Object(de.jsx)(re.b,{to:"/news",className:function(e){return e?"active-link":""},children:"News"})}),Object(de.jsx)("div",{className:Te.a.item,children:Object(de.jsx)(re.b,{to:"/music",className:function(e){return e?"active-link":""},children:"Music"})}),Object(de.jsx)("div",{className:Te.a.item,children:Object(de.jsx)(re.b,{to:"/settings",className:function(e){return e?"active-link":""},children:"Settings"})}),Object(de.jsx)("div",{className:Te.a.item,children:Object(de.jsx)(re.b,{to:"/users",className:function(e){return e?"active-link":""},children:"Users"})}),Object(de.jsxs)("div",{children:[Object(de.jsx)("div",{className:Te.a.friends,children:"Friends"}),t]})]})},Be=Object(ie.b)((function(e){return{state:e.sidebar}}),(function(e){return{}}))(Le),ze=n(14),Re=n.n(ze),Ge=n.p+"static/media/user.02d5ce4f.png",He=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],s=1;s<=t;s++)n.push(s);return n.length=20,Object(de.jsxs)("div",{children:[Object(de.jsx)("div",{className:Re.a.PagesContainer,children:n.map((function(t){return Object(de.jsxs)("span",{onClick:function(n){e.onPageChanged(t)},className:e.currentPage===t?Re.a.SelectedPage:Re.a.page,children:[t," "]})}))}),e.users.map((function(t){return Object(de.jsxs)("div",{className:Re.a.UserCard,children:[Object(de.jsx)("span",{className:Re.a.avatarBlock,children:Object(de.jsx)("div",{className:Re.a.Avatar,children:Object(de.jsx)(re.b,{to:"/profile/"+t.id,children:Object(de.jsx)("img",{src:null!==t.photos.small?t.photos.small:Ge,alt:"Avatar"})})})}),Object(de.jsxs)("div",{className:Re.a.infoBlock,children:[Object(de.jsxs)("span",{className:Re.a.userInfo,children:[Object(de.jsx)("div",{children:t.name}),Object(de.jsx)("div",{className:Re.a.Status,children:t.status})]}),Object(de.jsxs)("span",{className:Re.a.location,children:[Object(de.jsx)("div",{children:"Country"}),Object(de.jsx)("div",{children:"City"})]}),Object(de.jsx)("div",{className:Re.a.followBox,children:t.followed?Object(de.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),className:Re.a.FollowButton,onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(de.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),className:Re.a.FollowButton,onClick:function(){e.follow(t.id)},children:"Follow"})})]})]},t.id)}))]})},Xe=n.p+"static/media/loader2.f396a593.gif",Ve=n(129),We=n.n(Ve),Ze=function(e){return Object(de.jsx)("div",{children:Object(de.jsx)("img",{className:We.a.Loader,src:Xe,alt:"loader"})})},qe=function(e){Object(le.a)(n,e);var t=Object(ue.a)(n);function n(){var e;Object(oe.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize),e.props.SetCurrentPage(t)},e}return Object(ce.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(de.jsxs)(de.Fragment,{children:[this.props.isFetching?Object(de.jsx)(Ze,{}):null,Object(de.jsx)(He,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,onPageChanged:this.onPageChanged,currentPage:this.props.currentPage,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,ToggleFollowingInProgress:this.props.ToggleFollowingInProgress,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),Ke=Object(ie.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{follow:function(e){return function(t){t(J(!0,e)),x(e).then((function(n){0===n.data.resultCode&&t({type:B,payload:{id:e}}),t(J(!1,e))}))}},unfollow:function(e){return function(t){t(J(!0,e)),v(e).then((function(n){0===n.data.resultCode&&t({type:z,payload:{id:e}}),t(J(!1,e))}))}},SetUsers:Z,SetCurrentPage:function(e){return{type:G,payload:{currentPage:e}}},SetTotalUsersCount:q,ToggleIsFetching:K,ToggleFollowingInProgress:J,getUsers:function(e,t){return function(n){n(K(!0)),p(e,t).then((function(e){setTimeout((function(){return n(K(!1))}),200),n(Z(e.items)),n(q(e.totalCount))}))}}})(qe),Je=n(86),Qe=n.n(Je),Ye=n(87),$e=n.n(Ye),et=function(e){return Object(de.jsxs)("div",{className:$e.a.item,children:[Object(de.jsx)("img",{src:"https://cs13.pikabu.ru/avatars/2487/x2487329-146029786.png",alt:"avatar"}),e.message,Object(de.jsxs)("span",{className:$e.a.likesCount,children:[e.likesCount," likes"]})]})},tt=Se(10),nt=Object(me.a)({form:"addPostForm"})((function(e){return Object(de.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(de.jsx)("div",{children:Object(de.jsx)(Oe.a,{name:"post",component:ye,validate:[we,tt]})}),Object(de.jsx)("div",{children:Object(de.jsx)("button",{children:"Add post"})})]})})),st=function(e){var t=e.posts.map((function(e){return Object(de.jsx)(et,{message:e.message,likesCount:e.likesCount})}));return Object(de.jsxs)("div",{className:Qe.a.PostsContainer,children:[Object(de.jsx)("h3",{children:"My posts"}),Object(de.jsx)(nt,{onSubmit:function(t){e.addPost(t.post)}}),Object(de.jsx)("div",{className:Qe.a.posts,children:t})]})},at=Object(ie.b)((function(e){return{posts:e.profilePage.postData}}),(function(e){return{addPost:function(t){e(function(e){return{type:I,payload:{text:e}}}(t))}}}))(st),rt=n(36),it=n.n(rt),ot=function(e){Object(le.a)(n,e);var t=Object(ue.a)(n);function n(){var e;Object(oe.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={editMode:!1,status:e.props.status},e.activateEditMode=function(){e.setState({editMode:!0})},e.deactivateEditMode=function(){e.setState({editMode:!1}),e.props.updateUserStatus(e.state.status)},e.onChangeHandler=function(t){e.setState({status:t.currentTarget.value})},e}return Object(ce.a)(n,[{key:"componentDidUpdate",value:function(e,t){e.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){var e=this;return Object(de.jsxs)("div",{children:[!this.state.editMode&&Object(de.jsx)("div",{children:Object(de.jsx)("span",{onDoubleClick:function(){e.activateEditMode()},children:this.props.status||"status"})}),this.state.editMode&&Object(de.jsx)("div",{children:Object(de.jsx)("input",{value:this.state.status,autoFocus:!0,onChange:this.onChangeHandler,onBlur:function(){e.deactivateEditMode()}})})]})}}]),n}(a.a.Component),ct=function(e){return e.profile?Object(de.jsxs)("div",{className:it.a.InfoContainer,children:[Object(de.jsx)("div",{className:it.a.ProfilePhoto}),Object(de.jsxs)("div",{className:it.a.descriptionBlock,children:[Object(de.jsx)("div",{className:it.a.Avatar,children:Object(de.jsx)("img",{src:e.profile.photos.small||Ge,alt:""})}),Object(de.jsxs)("div",{className:it.a.description,children:[Object(de.jsx)("div",{className:it.a.Name,children:e.profile.fullName}),Object(de.jsx)(ot,{status:e.status,updateUserStatus:e.updateUserStatus})]})]})]}):Object(de.jsx)("div",{children:Object(de.jsx)(Ze,{})})},lt=n(130),ut=n.n(lt),dt=function(e){Object(le.a)(n,e);var t=Object(ue.a)(n);function n(){return Object(oe.a)(this,n),t.apply(this,arguments)}return Object(ce.a)(n,[{key:"componentDidMount",value:function(){var e,t=null===(e=this.props.match)||void 0===e?void 0:e.params.userId;t&&":userId"!==t||(t=this.props.authorizedUserId.toString())||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getUserStatus(t)}},{key:"render",value:function(){return Object(de.jsxs)("div",{className:ut.a.mainContent,children:[Object(de.jsx)(ct,{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus}),Object(de.jsx)(at,{})]})}}]),n}(a.a.Component),jt=Object(c.d)(Object(ie.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(t){return f(e).then((function(e){var n;t((n=e.data,{type:A,payload:{profile:n}}))}))}},getUserStatus:function(e){return function(t){return b(e).then((function(e){t(E(e.data))}))}},updateUserStatus:function(e){return function(t){return h(e).then((function(n){0===n.data.resultCode&&t(E(e))}))}}}),be.e,De)(dt),pt=n(88),ft=n.n(pt),bt=n.p+"static/media/logo.5f0a2246.png",ht=function(e){return Object(de.jsxs)("header",{className:ft.a.header,children:[Object(de.jsx)("img",{src:bt,alt:"logo"}),Object(de.jsx)("div",{className:ft.a.LoginBlock,children:e.isAuth?Object(de.jsxs)("div",{children:[e.login," ",Object(de.jsx)("button",{onClick:e.logout,children:"Logout"})]}):Object(de.jsx)(re.b,{to:"/login",children:"Login"})})]})},gt=function(e){Object(le.a)(n,e);var t=Object(ue.a)(n);function n(){return Object(oe.a)(this,n),t.apply(this,arguments)}return Object(ce.a)(n,[{key:"render",value:function(){return Object(de.jsx)(ht,Object(l.a)({},this.props))}}]),n}(a.a.Component),Ot=Object(ie.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(e){m().then((function(t){0===t.data.resultCode&&e(y(null,null,null,!1))}))}}})(gt),mt=function(e){return Object(de.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(de.jsx)("div",{children:Object(de.jsx)(Oe.a,{placeholder:"Login",name:"login",component:Ce,validate:[we]})}),Object(de.jsx)("div",{children:Object(de.jsx)(Oe.a,{placeholder:"Password",name:"password",component:Ce,validate:[we],type:"password"})}),Object(de.jsxs)("div",{children:[Object(de.jsx)(Oe.a,{component:"input",name:"rememberMe",type:"checkbox"})," Remember me"]}),e.error&&Object(de.jsxs)("div",{className:_e.a.formSummaryError,children:[" ",e.error," "]}),Object(de.jsx)("div",{children:Object(de.jsx)("button",{children:"Login"})})]})},xt=n(131),vt=n.n(xt),_t=Object(me.a)({form:"login"})(mt),Pt=Object(ie.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(s){O(e,t,n).then((function(e){if(0===e.data.resultCode)s(C());else{var t=e.data.messages.length>0?e.data.messages[0]:"Some error";s(Object(u.a)("login",{_error:t}))}}))}}})((function(e){if(e.isAuth)return Object(de.jsx)(be.a,{to:"/profile"});return e.isAuth?Object(de.jsx)(be.a,{to:"/profile"}):Object(de.jsxs)("div",{className:vt.a.LoginPage,children:[Object(de.jsx)("h1",{children:"Login"}),Object(de.jsx)(_t,{onSubmit:function(t){e.login(t.login,t.password,t.rememberMe)}})]})})),yt=function(e){Object(le.a)(n,e);var t=Object(ue.a)(n);function n(){return Object(oe.a)(this,n),t.apply(this,arguments)}return Object(ce.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(de.jsxs)("div",{className:"App",children:[Object(de.jsx)(Ot,{}),Object(de.jsx)(Be,{}),Object(de.jsxs)("div",{className:"app-wrapper-content",children:[Object(de.jsx)(be.b,{path:"/dialogs",render:function(){return Object(de.jsx)(Ee,{})}}),Object(de.jsx)(be.b,{path:"/profile/:userId?",render:function(){return Object(de.jsx)(jt,{})}}),Object(de.jsx)(be.b,{path:"/news",render:function(){return Object(de.jsx)(je,{})}}),Object(de.jsx)(be.b,{path:"/music",render:function(){return Object(de.jsx)(pe,{})}}),Object(de.jsx)(be.b,{path:"/settings",render:function(){return Object(de.jsx)(fe,{})}}),Object(de.jsx)(be.b,{path:"/users",render:function(){return Object(de.jsx)(Ke,{})}}),Object(de.jsx)(be.b,{path:"/login",render:function(){return Object(de.jsx)(Pt,{})}})]})]}):Object(de.jsx)(Ze,{})}}]),n}(a.a.Component),Ct=Object(c.d)(be.e,Object(ie.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(C());Promise.all([t]).then((function(){e({type:ee})}))}}}))(yt);ae.getState(),i.a.render(Object(de.jsx)(a.a.StrictMode,{children:Object(de.jsx)(re.a,{children:Object(de.jsx)(ie.a,{store:ae,children:Object(de.jsx)(Ct,{})})})}),document.getElementById("root")),o()},36:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1v9W_",InfoContainer:"ProfileInfo_InfoContainer__3yQRD",ProfilePhoto:"ProfileInfo_ProfilePhoto__227Ns",Avatar:"ProfileInfo_Avatar__FpOi8",description:"ProfileInfo_description__1rKpA",Name:"ProfileInfo_Name__3Mhn3"}},43:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2R6vH",dialogs_items:"Dialogs_dialogs_items__Ckxz2",active:"Dialogs_active__oDa8w",dialog:"Dialogs_dialog__25TZP",messages:"Dialogs_messages__2x5Gv",message:"Dialogs_message__LRm7p"}},51:function(e,t,n){e.exports={formControl:"FormControl_formControl__1ZzNG",error:"FormControl_error__3dUKT",formSummaryError:"FormControl_formSummaryError__ucq0Z"}},86:function(e,t,n){e.exports={posts:"MyPosts_posts__2q_8H",PostsContainer:"MyPosts_PostsContainer__1b_Xt"}},87:function(e,t,n){e.exports={item:"Post_item__3ZUrT",likesCount:"Post_likesCount__3XH3W"}},88:function(e,t,n){e.exports={header:"Header_header__3X5wX",LoginBlock:"Header_LoginBlock__1lnVl"}}},[[289,1,2]]]);
//# sourceMappingURL=main.68242721.chunk.js.map