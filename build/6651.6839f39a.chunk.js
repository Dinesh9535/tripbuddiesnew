"use strict";(self.webpackChunktripbuddies_cms=self.webpackChunktripbuddies_cms||[]).push([[6651],{6651:(I,n,_)=>{_.r(n),_.d(n,{LoginEE:()=>K});var E=_(92132),D=_(48653),a=_(94061),O=_(83997),o=_(30893),l=_(54894),i=_(63891),d=_(88880),P=_(77452),r=_(55506),B=_(15126),M=_(63299),h=_(67014),s=_(59080),L=_(79275),C=_(14718),t=_(21272),W=_(82437),m=_(61535),g=_(5790),x=_(12083),j=_(35223),f=_(5409),y=_(74930),c=_(2600),S=_(48940),$=_(41286),N=_(56336),F=_(13426),z=_(84624),G=_(77965),H=_(54257),V=_(71210),Z=_(51187),J=_(39404),Q=_(58692),X=_(501),Y=_(57646),u=_(23120),p=_(44414),e=_(25962),w=_(14664),k=_(42588),b=_(90325),q=_(62785),__=_(87443),E_=_(41032),s_=_(22957),t_=_(93179),a_=_(73055),O_=_(15747),d_=_(85306),n_=_(26509),D_=_(32058),P_=_(81185),M_=_(82261);const A=(0,i.default)(D.c)`
  flex: 1;
`,K=R=>{const{formatMessage:T}=(0,l.A)(),{isLoading:U,data:v=[]}=(0,d.g)(void 0,{skip:!window.strapi.features.isEnabled(window.strapi.features.SSO)});return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!U&&v.length===0?(0,E.jsx)(d.L,{...R}):(0,E.jsx)(d.L,{...R,children:(0,E.jsx)(a.a,{paddingTop:7,children:(0,E.jsxs)(O.s,{direction:"column",alignItems:"stretch",gap:7,children:[(0,E.jsxs)(O.s,{children:[(0,E.jsx)(A,{}),(0,E.jsx)(a.a,{paddingLeft:3,paddingRight:3,children:(0,E.jsx)(o.o,{variant:"sigma",textColor:"neutral600",children:T({id:"Auth.login.sso.divider"})})}),(0,E.jsx)(A,{})]}),(0,E.jsx)(P.S,{providers:v,displayAllProviders:!1})]})})})}},77452:(I,n,_)=>{_.d(n,{S:()=>r});var E=_(92132),D=_(90151),a=_(68074),O=_(79739),o=_(83997),l=_(30893),i=_(54894),d=_(71389),P=_(63891);const r=({providers:s,displayAllProviders:L})=>{const{formatMessage:C}=(0,i.A)();return L?(0,E.jsx)(D.x,{gap:4,children:s.map(t=>(0,E.jsx)(a.E,{col:4,children:(0,E.jsx)(M,{provider:t})},t.uid))}):s.length>2&&!L?(0,E.jsxs)(D.x,{gap:4,children:[s.slice(0,2).map(t=>(0,E.jsx)(a.E,{col:4,children:(0,E.jsx)(M,{provider:t})},t.uid)),(0,E.jsx)(a.E,{col:4,children:(0,E.jsx)(O.m,{label:C({id:"global.see-more"}),children:(0,E.jsx)(h,{as:d.N_,to:"/auth/providers",children:(0,E.jsx)("span",{"aria-hidden":!0,children:"\u2022\u2022\u2022"})})})})]}):(0,E.jsx)(B,{justifyContent:"center",children:s.map(t=>(0,E.jsx)(M,{provider:t},t.uid))})},B=(0,P.default)(o.s)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:s})=>s.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:s})=>s.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:s})=>s.spaces[2]};
  }
`,M=({provider:s})=>(0,E.jsx)(O.m,{label:s.displayName,children:(0,E.jsx)(h,{href:`${window.strapi.backendURL}/admin/connect/${s.uid}`,children:s.icon?(0,E.jsx)("img",{src:s.icon,"aria-hidden":!0,alt:"",height:"32px"}):(0,E.jsx)(l.o,{children:s.displayName})})}),h=P.default.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:s})=>s.colors.neutral150};
  border-radius: ${({theme:s})=>s.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:s})=>s.colors.neutral600};
`}}]);
