"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[622],{8622:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var r=e(5861),o=e(885),i=e(7757),a=e.n(i),c=e(2791),u=e(4952),s=e(9467),p=e(6168),f=e(184);function l(n){var t=n.films;return(0,f.jsx)(p.eW,{children:t.map((function(n){var t=n.id,e=n.title,r=n.name,o=n.backdrop_path,i=n.release_date;return(0,f.jsx)(s.Z,{id:t,name:r,title:e,backdrop_path:o,release_date:i},t)}))})}function d(){var n=(0,c.useState)([]),t=(0,o.Z)(n,2),e=t[0],i=t[1];(0,c.useEffect)((function(){var n=function(){var n=(0,r.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.KJ)().then((function(n){return i(n.results)}));case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]);var s=(new Date).toLocaleDateString();return(0,f.jsxs)("article",{children:[(0,f.jsxs)(p.Dx,{children:["Trending today: ",s]}),(0,f.jsx)(l,{films:e})]})}},9467:function(n,t,e){e.d(t,{Z:function(){return c}});var r=e(6871),o=e(113),i=e(6168),a=e(184);function c(n){var t=n.id,e=n.title,c=n.name,u=n.backdrop_path,s=n.release_date,p=(0,r.TH)(),f=new Date(s);return(0,a.jsx)(i.H2,{children:(0,a.jsxs)(i.jJ,{to:"/movies/".concat(t),state:{from:p},children:[u?(0,a.jsx)(i.Xb,{src:"https://image.tmdb.org/t/p/w300".concat(u),alt:""}):(0,a.jsx)(i.Xb,{src:o,alt:""}),(0,a.jsxs)(i.$4,{children:[(0,a.jsx)(i.sj,{children:e||c}),(0,a.jsx)(i.MW,{children:f.toLocaleDateString()})]})]})},t)}},4952:function(n,t,e){e.d(t,{Ai:function(){return m},Bt:function(){return v},KJ:function(){return x},Y5:function(){return h},y:function(){return g}});var r=e(5861),o=e(7757),i=e.n(o),a=e(4569),c=e.n(a),u=e(2007),s=e.n(u),p="https://api.themoviedb.org/3/",f="f7e01896e2d5fbc24092901b8d13f2b9";function l(){return d.apply(this,arguments)}function d(){return d=(0,r.Z)(i().mark((function n(){var t,e,r,o=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"",e=o.length>1&&void 0!==o[1]?o[1]:{},n.next=4,c().get(t,e);case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)}))),d.apply(this,arguments)}function x(){return l("".concat(p,"/trending/movie/day?api_key=").concat(f))}function m(n){return l("".concat(p,"search/movie?api_key=").concat(f,"&query=").concat(n,"&language=en-US&include_adult=false"))}function h(n){return l("".concat(p,"movie/").concat(n,"?api_key=").concat(f,"&language=en-US"))}function g(n){return l("".concat(p,"movie/").concat(n,"/credits?api_key=").concat(f,"&language=en-US&"))}function v(n){return l("".concat(p,"/movie/").concat(n,"/reviews?api_key=").concat(f,"&language=en-US&"))}m.propTypes={search:s().string.isRequired},h.propTypes={id:s().number.isRequired},v.propTypes={id:s().number.isRequired},g.propTypes={id:s().number.isRequired}},6168:function(n,t,e){e.d(t,{$4:function(){return b},Dx:function(){return g},Ei:function(){return k},H2:function(){return _},MW:function(){return j},US:function(){return w},Xb:function(){return P},eW:function(){return y},jJ:function(){return v},sj:function(){return Z}});var r,o,i,a,c,u,s,p,f,l,d,x=e(168),m=e(6444),h=e(501),g=(m.ZP.section(r||(r=(0,x.Z)(["\n  display: flex;\n  margin-top: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  justify-content: center;\n"]))),m.ZP.h1(o||(o=(0,x.Z)(["\n  text-align: center;\n  font-size: 28px;\n  margin-bottom: 10px;\n  color: ",";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])),(function(n){return n.theme.colors.primaryText}))),v=(0,m.ZP)(h.OL)(i||(i=(0,x.Z)(["\n  text-decoration: none;\n"]))),b=m.ZP.div(a||(a=(0,x.Z)(["\n  padding: 0 10px;\n"]))),w=m.ZP.h2(c||(c=(0,x.Z)(["\n  font-size: 26px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: ",";\n"])),(function(n){return n.theme.colors.primaryText})),Z=m.ZP.h3(u||(u=(0,x.Z)(["\n  font-size: 16px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: ",";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])),(function(n){return n.theme.colors.primaryText})),y=m.ZP.ul(s||(s=(0,x.Z)(["\n  display: grid;\n  max-width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  grid-gap: 24px;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n"]))),_=m.ZP.li(p||(p=(0,x.Z)(["\n  width: 100%;\n  display: block;\n  padding: 5px;\n  background-color: ",";\n  transform: scale(1);\n  transition: transform 250ms linear;\n  border-radius: 15px 15px 0 0;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  :hover,\n  :focus {\n    transform: scale(1.05);\n    cursor: pointer;\n  }\n"])),(function(n){return n.theme.colors.buttonBg})),j=m.ZP.p(f||(f=(0,x.Z)(["\n  margin-bottom: 10px;\n  color: ",";\n  font-size: 14px;\n  font-weight: bold;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])),(function(n){return n.theme.colors.grey})),k=m.ZP.img(l||(l=(0,x.Z)(["\n  border-radius: 15px 15px 0 0;\n  max-width: 300px;\n"]))),P=m.ZP.img(d||(d=(0,x.Z)(["\n  border-radius: 15px 15px 0 0;\n  width: 100%;\n"])))},113:function(n,t,e){n.exports=e.p+"static/media/noFilm.810972a1e8e7804a3ef2.jpg"}}]);
//# sourceMappingURL=622.289a0088.chunk.js.map