(this.webpackJsonpnewsapp=this.webpackJsonpnewsapp||[]).push([[0],{18:function(e,t,a){e.exports={detailWrapper:"Detail_detailWrapper__1_0mJ",detailImage:"Detail_detailImage__Ozk66",detailContent:"Detail_detailContent__2SJzb",detailTitle:"Detail_detailTitle__r9CKX",detailText:"Detail_detailText__2I2Gt"}},27:function(e,t,a){e.exports={article:"Article_article__3-Zz1",articleImage:"Article_articleImage__2RMjn",articleAbout:"Article_articleAbout__2j_FO",articleTitle:"Article_articleTitle__kfq9u"}},31:function(e,t,a){e.exports={navbar:"Navbar_navbar__CLYHD",links:"Navbar_links__2x1pm",link:"Navbar_link__TNvz9"}},32:function(e,t,a){e.exports={header:"Links_header__15HST",links:"Links_links__1uoe0",link:"Links_link__1Aq79"}},50:function(e,t,a){e.exports={container:"App_container__1MQN3",main:"App_main__3ZkGI"}},51:function(e,t,a){e.exports={articles:"Articles_articles__1y9Vl"}},53:function(e,t,a){e.exports={loader:"Content_loader__2suYc",home:"Content_home__2Tj9_"}},54:function(e,t,a){e.exports={loader:"Loader_loader__1j2Bs"}},56:function(e,t,a){e.exports={articleCover:"Details_articleCover__3NKhw",loader:"Details_loader__26G8z"}},57:function(e,t,a){e.exports={button:"LinkButton_button__6r3YB"}},58:function(e,t,a){e.exports={sidebar:"Sidebar_sidebar__2Jpsx"}},61:function(e,t,a){e.exports=a(91)},66:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(28),c=a.n(i),o=(a(66),a(22)),s=a(9),l=a(13),u={stories:[],error:null,isLoading:!1},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOP_STORIES_REQUEST":return Object(s.a)({},e,{isLoading:!0});case"TOP_STORIES_SUCCESS":return Object(s.a)({},e,{stories:t.stories,isLoading:!1});case"TOP_STORIES_ERROR":return Object(s.a)({},e,{error:t.error,isLoading:!1});default:return Object(s.a)({},e)}},p={article:null,error:null,isLoading:!1},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ARTICLE_REQUEST":return Object(s.a)({},e,{isLoading:!0});case"ARTICLE_RESPONSE":return Object(s.a)({},e,{article:t.article,isLoading:!1});case"ARTICLE_ERROR":return Object(s.a)({},e,{error:t.error,isLoading:!1});default:return Object(s.a)({},e)}},_=Object(l.c)({stories:m,article:d}),h=a(60);var v=a(17),E=a.n(v),b=a(12),f=a(37),O=a.n(f),g="0aNSREv95ecJFbefoN0mJLNVECuvgeZV";function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"home";return O.a.get("https://api.nytimes.com/svc/topstories/v2/".concat(e,".json?api-key=").concat(g)).then((function(e){return e.data.results}))}function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"The Most Powerful Lightning Strikes in Unexpected Places";return O.a.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=".concat(e,"&api-key=").concat(g)).then((function(e){return e.data.response.docs[0]}))}var S=function(e){return{type:"TOP_STORIES_SUCCESS",stories:e}},T=E.a.mark(R),x=E.a.mark(N);function R(e){var t;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(b.a)(k,e.section);case 3:return t=a.sent,a.next=6,Object(b.b)(S(t));case 6:a.next=12;break;case 8:return a.prev=8,a.t0=a.catch(0),a.next=12,Object(b.b)({type:"TOP_STORIES_ERROR",error:a.t0});case 12:case"end":return a.stop()}}),T,null,[[0,8]])}function N(e){var t;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(b.a)(j,e.title);case 3:return t=a.sent,a.next=6,Object(b.b)({type:"ARTICLE_RESPONSE",article:t});case 6:a.next=12;break;case 8:return a.prev=8,a.t0=a.catch(0),a.next=12,Object(b.b)({type:"ARTICLE_ERROR",error:a.t0});case 12:case"end":return a.stop()}}),x,null,[[0,8]])}var w=E.a.mark(y);function y(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.c)("TOP_STORIES_REQUEST",R);case 2:return e.next=4,Object(b.c)("ARTICLE_REQUEST",N);case 4:case"end":return e.stop()}}),w)}var C=a(50),L=a.n(C),A=a(19),I=a(20),P=a(23),U=a(21),D=a(24),z=a(51),J=a.n(z),M=a(27),Q=a.n(M),B=function(e){var t=e.data.multimedia,a="https://upload.wikimedia.org/wikipedia/commons/b/b9/No_Cover.jpg",n=t.length>0&&t[4]?t[4].url:a;return r.a.createElement("div",{className:Q.a.article},r.a.createElement("img",{src:n,alt:"img",className:Q.a.articleImage}),r.a.createElement("div",{className:Q.a.articleAbout},r.a.createElement("div",{className:Q.a.articleTitle},e.data.title)))},W=a(15),$=a(38),q=a.n($),G=function(e){return q.a.extend({$:"$"}),r.a.createElement("div",{className:J.a.articles},e.data.map((function(e){var t=q()(e.title,{remove:/[*+~.(),$'"!:@]/g,lower:!0});return r.a.createElement(W.b,{to:"details/".concat(t),key:t},r.a.createElement(B,{data:e}))})))},H=a(53),V=a.n(H),Y=a(54),Z=a.n(Y),F=a(93),K=function(e){return r.a.createElement(F.a,{className:Z.a.loader,color:"rgb(55, 71, 79)",size:64})},X=function(e){function t(){var e,a;Object(A.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(P.a)(this,(e=Object(U.a)(t)).call.apply(e,[this].concat(r)))).state={section:"home"},a}return Object(D.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params?this.props.match.params.section:"home";this.props.loadStories(e)}},{key:"componentDidUpdate",value:function(){if(this.props.match.params.section!==this.state.section){var e=this.props.match.params.section;this.setState({section:e}),this.props.loadStories(e)}}},{key:"render",value:function(){return r.a.createElement("div",{className:V.a.home},this.props.stories.isLoading?r.a.createElement(K,null):r.a.createElement(G,{data:this.props.stories.stories}))}}]),t}(r.a.Component);var ee=Object(o.b)((function(e){return{stories:e.stories}}),(function(e){return{loadStories:function(t){e(function(e){return{type:"TOP_STORIES_REQUEST",section:e}}(t))}}}))(X),te=a(56),ae=a.n(te),ne=a(18),re=a.n(ne),ie=a(57),ce=a.n(ie),oe=function(e){return r.a.createElement("a",{href:e.target,className:ce.a.button},e.name)},se=function(e){var t="https://upload.wikimedia.org/wikipedia/commons/b/b9/No_Cover.jpg",a=e.article&&e.article.multimedia&&e.article.multimedia[9]?"http://nyt.com/"+e.article.multimedia[9].url:t;return r.a.createElement("div",{className:re.a.detailWrapper},r.a.createElement("img",{src:a,className:re.a.detailImage,alt:"img"}),r.a.createElement("div",{className:re.a.detailContent},r.a.createElement("div",{className:re.a.detailTitle},e.article&&e.article.headline?e.article.headline.main:"Title"),r.a.createElement("div",{className:re.a.detailText},e.article?e.article.abstract:"Abstarct"),r.a.createElement("div",{className:re.a.detailText},e.article?e.article.lead_paragraph:"Starting Paragraph")),r.a.createElement(oe,{name:"Read More...",target:e.article?e.article.web_url:"#"}))},le=function(e){function t(){return Object(A.a)(this,t),Object(P.a)(this,Object(U.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(I.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params?this.props.match.params.title:"The Most Powerful Lightning Strikes in Unexpected Places";this.props.loadArticle(e)}},{key:"render",value:function(){return r.a.createElement("div",{className:ae.a.details},this.props.article.isLoading?r.a.createElement(K,null):r.a.createElement(se,{article:this.props.article.article}))}}]),t}(r.a.Component);var ue=Object(o.b)((function(e){return{article:e.article}}),(function(e){return{loadArticle:function(t){e(function(e){return{type:"ARTICLE_REQUEST",title:e}}(t))}}}))(le),me=a(31),pe=a.n(me),de=function(e){return r.a.createElement("div",{className:pe.a.navbar},r.a.createElement("ul",{className:pe.a.links},r.a.createElement("li",{className:pe.a.link},r.a.createElement(W.b,{to:"/"},"Home"))))},_e=a(16),he=a(32),ve=a.n(he),Ee=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:ve.a.header},"Sections"),e.links?r.a.createElement("ul",{className:ve.a.links},e.links.map((function(e){var t="/".concat(e);return r.a.createElement("li",{className:ve.a.link,key:e},r.a.createElement(W.b,{to:t},function(e){return e.charAt(0).toUpperCase()+e.slice(1)}(e)))}))):null)},be=["arts","automobiles","books","business","fashion","food","health","home","insider","magazine","movies","national","nyregion","obituaries","opinion","politics","realestate","science","sports","sundayreview","technology","theater","tmagazine","travel","upshot","world"],fe=a(58),Oe=a.n(fe),ge=function(e){function t(){return Object(A.a)(this,t),Object(P.a)(this,Object(U.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:Oe.a.sidebar},r.a.createElement(Ee,{links:be}))}}]),t}(r.a.Component),ke=a(59),je=function(){var e=Object(h.a)();return Object(s.a)({},Object(l.e)(_,Object(l.a)(e)),{runSaga:e.run})}();je.runSaga(y);var Se=function(){return r.a.createElement(o.a,{store:je},r.a.createElement(W.a,{basename:"/newsapp"},r.a.createElement(de,null),r.a.createElement("div",{className:L.a.container},r.a.createElement(ke.a,{offsetTop:20,offsetBottom:20},r.a.createElement(ge,null)),r.a.createElement(_e.c,null,r.a.createElement(_e.a,{exact:!0,path:"/",component:ee}),r.a.createElement(_e.a,{exact:!0,path:"/:section",component:ee}),r.a.createElement(_e.a,{exact:!0,path:"/details/:title",component:ue})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[61,1,2]]]);
//# sourceMappingURL=main.322122ec.chunk.js.map