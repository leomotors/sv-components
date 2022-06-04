import{F as we,S as x,i as $,s as ee,G as J,H as K,a as w,d as c,b as u,g as A,n as Z,I as de,e as L,x as he,c as S,y as _e,z as me,J as ge,r as U,p as P,C as pe,t as F,k as N,h as q,m as T,K as p,j as be,l as ne,L as ke,M as ve,N as ye,o as Ee,q as Oe,O as ae,P as De,w as ze,Q as Le,R as Se,T as se,U as Me}from"../chunks/index-93884d8d.js";const Ae=()=>{const n=we("__svelte__");return{page:{subscribe:n.page.subscribe},navigating:{subscribe:n.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:n.navigating.subscribe}},session:n.session,updated:n.updated}},Be={subscribe(n){return Ae().page.subscribe(n)}};function Ie(n){let e;return{c(){e=J("path"),this.h()},l(t){e=K(t,"path",{d:!0}),w(e).forEach(c),this.h()},h(){u(e,"d","M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z")},m(t,l){A(t,e,l)},d(t){t&&c(e)}}}function He(n){let e;return{c(){e=J("path"),this.h()},l(t){e=K(t,"path",{d:!0}),w(e).forEach(c),this.h()},h(){u(e,"d","M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z")},m(t,l){A(t,e,l)},d(t){t&&c(e)}}}function Ne(n){let e;function t(f,o){return f[0]?He:Ie}let l=t(n),r=l(n);return{c(){e=J("svg"),r.c(),this.h()},l(f){e=K(f,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0});var o=w(e);r.l(o),o.forEach(c),this.h()},h(){u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"width","28"),u(e,"height","28"),u(e,"fill","currentColor"),u(e,"viewBox","0 0 16 16")},m(f,o){A(f,e,o),r.m(e,null)},p(f,[o]){l!==(l=t(f))&&(r.d(1),r=l(f),r&&(r.c(),r.m(e,null)))},i:Z,o:Z,d(f){f&&c(e),r.d()}}}function Te(n,e,t){let{dark:l}=e;return n.$$set=r=>{"dark"in r&&t(0,l=r.dark)},[l]}class je extends x{constructor(e){super(),$(this,e,Te,Ne,ee,{dark:0})}}function re(n,e,t){const l=n.slice();return l[14]=e[t][0],l[15]=e[t][1],l}function ie(n,e,t){const l=n.slice();return l[14]=e[t][0],l[15]=e[t][1],l}const Ce=n=>({}),oe=n=>({});function Ue(n){let e,t;return{c(){e=L("p"),t=F("Your Logo Here Please")},l(l){e=S(l,"P",{});var r=w(e);t=q(r,"Your Logo Here Please"),r.forEach(c)},m(l,r){A(l,e,r),p(e,t)},p:Z,d(l){l&&c(e)}}}function fe(n){let e,t,l,r,f;return t=new je({props:{dark:n[0]}}),{c(){e=L("button"),he(t.$$.fragment)},l(o){e=S(o,"BUTTON",{});var a=w(e);_e(t.$$.fragment,a),a.forEach(c)},m(o,a){A(o,e,a),me(t,e,null),l=!0,r||(f=ge(e,"click",n[9]),r=!0)},p(o,a){const i={};a&1&&(i.dark=o[0]),t.$set(i)},i(o){l||(U(t.$$.fragment,o),l=!0)},o(o){P(t.$$.fragment,o),l=!1},d(o){o&&c(e),pe(t),r=!1,f()}}}function ue(n){let e,t=n[15]+"",l,r,f,o;return{c(){e=L("a"),l=F(t),r=N(),this.h()},l(a){e=S(a,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var i=w(e);l=q(i,t),r=T(i),i.forEach(c),this.h()},h(){var a,i;u(e,"class",f="rounded p-2 text-xl transition-all "+((n[14]=="/"?n[8].url.pathname=="/":n[8].url.pathname=="/"+n[14])?`${(a=n[6].bgSelected)!=null?a:"bg-slate-400 dark:bg-slate-800"} cursor-default`:(i=n[6].bgUnselected)!=null?i:"hover:bg-slate-300 dark:hover:bg-slate-700")),u(e,"sveltekit:prefetch",""),u(e,"href",o=n[14])},m(a,i){A(a,e,i),p(e,l),p(e,r)},p(a,i){var g,k;i&2&&t!==(t=a[15]+"")&&be(l,t),i&322&&f!==(f="rounded p-2 text-xl transition-all "+((a[14]=="/"?a[8].url.pathname=="/":a[8].url.pathname=="/"+a[14])?`${(g=a[6].bgSelected)!=null?g:"bg-slate-400 dark:bg-slate-800"} cursor-default`:(k=a[6].bgUnselected)!=null?k:"hover:bg-slate-300 dark:hover:bg-slate-700"))&&u(e,"class",f),i&2&&o!==(o=a[14])&&u(e,"href",o)},d(a){a&&c(e)}}}function ce(n){let e,t=n[15]+"",l,r,f,o;return{c(){e=L("a"),l=F(t),r=N(),this.h()},l(a){e=S(a,"A",{class:!0,"sveltekit:prefetch":!0,href:!0});var i=w(e);l=q(i,t),r=T(i),i.forEach(c),this.h()},h(){var a,i;u(e,"class",f="text-xl "+((n[14]=="/"?n[8].url.pathname=="/":n[8].url.pathname=="/"+n[14])?(a=n[6].mobileSelected)!=null?a:"text-pink-500":(i=n[6].mobileUnselected)!=null?i:"")+" rounded p-2 transition-all"),u(e,"sveltekit:prefetch",""),u(e,"href",o=n[14])},m(a,i){A(a,e,i),p(e,l),p(e,r)},p(a,i){var g,k;i&2&&t!==(t=a[15]+"")&&be(l,t),i&322&&f!==(f="text-xl "+((a[14]=="/"?a[8].url.pathname=="/":a[8].url.pathname=="/"+a[14])?(g=a[6].mobileSelected)!=null?g:"text-pink-500":(k=a[6].mobileUnselected)!=null?k:"")+" rounded p-2 transition-all")&&u(e,"class",f),i&2&&o!==(o=a[14])&&u(e,"href",o)},d(a){a&&c(e)}}}function Ve(n){let e,t;return{c(){e=L("style"),t=F(`.mobilemenu {
      display: inline;
    }

    .desktopnav {
      display: none;
    }

    @media (min-width: 1024px) {
      .mobilemenu {
        display: none;
      }

      .desktopnav {
        display: flex;
      }
    }`),this.h()},l(l){e=S(l,"STYLE",{lang:!0});var r=w(e);t=q(r,`.mobilemenu {
      display: inline;
    }

    .desktopnav {
      display: none;
    }

    @media (min-width: 1024px) {
      .mobilemenu {
        display: none;
      }

      .desktopnav {
        display: flex;
      }
    }`),r.forEach(c),this.h()},h(){u(e,"lang","css")},m(l,r){A(l,e,r),p(e,t)},d(l){l&&c(e)}}}function Ye(n){let e,t;return{c(){e=L("style"),t=F(`.mobilemenu {
      display: inline;
    }

    .desktopnav {
      display: none;
    }

    @media (min-width: 768px) {
      .mobilemenu {
        display: none;
      }

      .desktopnav {
        display: flex;
      }
    }`),this.h()},l(l){e=S(l,"STYLE",{lang:!0});var r=w(e);t=q(r,`.mobilemenu {
      display: inline;
    }

    .desktopnav {
      display: none;
    }

    @media (min-width: 768px) {
      .mobilemenu {
        display: none;
      }

      .desktopnav {
        display: flex;
      }
    }`),r.forEach(c),this.h()},h(){u(e,"lang","css")},m(l,r){A(l,e,r),p(e,t)},d(l){l&&c(e)}}}function Pe(n){let e,t;return{c(){e=L("style"),t=F(`.mobilemenu {
      display: inline;
    }

    .desktopnav {
      display: none;
    }

    @media (min-width: 640px) {
      .mobilemenu {
        display: none;
      }

      .desktopnav {
        display: flex;
      }
    }`),this.h()},l(l){e=S(l,"STYLE",{lang:!0});var r=w(e);t=q(r,`.mobilemenu {
      display: inline;
    }

    .desktopnav {
      display: none;
    }

    @media (min-width: 640px) {
      .mobilemenu {
        display: none;
      }

      .desktopnav {
        display: flex;
      }
    }`),r.forEach(c),this.h()},h(){u(e,"lang","css")},m(l,r){A(l,e,r),p(e,t)},d(l){l&&c(e)}}}function Fe(n){let e,t,l,r,f,o,a,i,g,k,I,M,b,h,E,v,d,R;const X=n[12].left,Q=de(X,n,n[11],oe),B=Q||Ue();let y=n[2]&&fe(n),V=Object.entries(n[1]),D=[];for(let s=0;s<V.length;s+=1)D[s]=ue(ie(n,V,s));let Y=Object.entries(n[1]),z=[];for(let s=0;s<Y.length;s+=1)z[s]=ce(re(n,Y,s));function te(s,m){return s[5]=="sm"?Pe:s[5]=="md"?Ye:Ve}let W=te(n),H=W(n);return{c(){e=L("nav"),B&&B.c(),t=N(),l=L("div"),y&&y.c(),r=N(),f=L("div");for(let s=0;s<D.length;s+=1)D[s].c();o=N(),a=L("div"),i=J("svg"),g=J("path"),I=N(),M=L("div");for(let s=0;s<z.length;s+=1)z[s].c();h=N(),H.c(),E=ne(),this.h()},l(s){e=S(s,"NAV",{class:!0});var m=w(e);B&&B.l(m),t=T(m),l=S(m,"DIV",{class:!0});var O=w(l);y&&y.l(O),r=T(O),f=S(O,"DIV",{class:!0});var G=w(f);for(let C=0;C<D.length;C+=1)D[C].l(G);G.forEach(c),o=T(O),a=S(O,"DIV",{class:!0});var _=w(a);i=K(_,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0});var j=w(i);g=K(j,"path",{"fill-rule":!0,d:!0}),w(g).forEach(c),j.forEach(c),_.forEach(c),O.forEach(c),I=T(m),M=S(m,"DIV",{class:!0});var le=w(M);for(let C=0;C<z.length;C+=1)z[C].l(le);le.forEach(c),m.forEach(c),h=T(s),H.l(s),E=ne(),this.h()},h(){var s,m;u(f,"class","desktopnav flex-row items-center justify-end gap-2 px-4"),u(g,"fill-rule","evenodd"),u(g,"d","M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"),u(i,"xmlns","http://www.w3.org/2000/svg"),u(i,"width","32"),u(i,"height","32"),u(i,"fill","currentColor"),u(i,"viewBox","0 0 16 16"),u(a,"class",k="mobilemenu "+((s=n[6].bgMenu)!=null?s:"bg-slate-200 dark:bg-slate-800 hover:bg-slate-400 dark:hover:bg-slate-600")+" rounded p-2 transition-all"),u(l,"class","right flex flex-row gap-4"),u(M,"class",b=((m=n[6].bgFlyout)!=null?m:"bg-slate-200 dark:bg-slate-800")+" flex flex-col rounded "+(n[7]?`${n[3]} opacity-100`:`${n[4]} opacity-0`)+" absolute top-4 p-2 transition-all"),u(e,"class","mx-auto flex h-32 w-4/5 select-none flex-row items-center justify-between text-black dark:text-white svelte-1tyngoe")},m(s,m){A(s,e,m),B&&B.m(e,null),p(e,t),p(e,l),y&&y.m(l,null),p(l,r),p(l,f);for(let O=0;O<D.length;O+=1)D[O].m(f,null);p(l,o),p(l,a),p(a,i),p(i,g),p(e,I),p(e,M);for(let O=0;O<z.length;O+=1)z[O].m(M,null);A(s,h,m),H.m(s,m),A(s,E,m),v=!0,d||(R=ge(a,"click",n[13]),d=!0)},p(s,[m]){var O,G;if(Q&&Q.p&&(!v||m&2048)&&ke(Q,X,s,s[11],v?ye(X,s[11],m,Ce):ve(s[11]),oe),s[2]?y?(y.p(s,m),m&4&&U(y,1)):(y=fe(s),y.c(),U(y,1),y.m(l,r)):y&&(Ee(),P(y,1,1,()=>{y=null}),Oe()),m&322){V=Object.entries(s[1]);let _;for(_=0;_<V.length;_+=1){const j=ie(s,V,_);D[_]?D[_].p(j,m):(D[_]=ue(j),D[_].c(),D[_].m(f,null))}for(;_<D.length;_+=1)D[_].d(1);D.length=V.length}if((!v||m&64&&k!==(k="mobilemenu "+((O=s[6].bgMenu)!=null?O:"bg-slate-200 dark:bg-slate-800 hover:bg-slate-400 dark:hover:bg-slate-600")+" rounded p-2 transition-all"))&&u(a,"class",k),m&322){Y=Object.entries(s[1]);let _;for(_=0;_<Y.length;_+=1){const j=re(s,Y,_);z[_]?z[_].p(j,m):(z[_]=ce(j),z[_].c(),z[_].m(M,null))}for(;_<z.length;_+=1)z[_].d(1);z.length=Y.length}(!v||m&216&&b!==(b=((G=s[6].bgFlyout)!=null?G:"bg-slate-200 dark:bg-slate-800")+" flex flex-col rounded "+(s[7]?`${s[3]} opacity-100`:`${s[4]} opacity-0`)+" absolute top-4 p-2 transition-all"))&&u(M,"class",b),W!==(W=te(s))&&(H.d(1),H=W(s),H&&(H.c(),H.m(E.parentNode,E)))},i(s){v||(U(B,s),U(y),v=!0)},o(s){P(B,s),P(y),v=!1},d(s){s&&c(e),B&&B.d(s),y&&y.d(),ae(D,s),ae(z,s),s&&c(h),H.d(s),s&&c(E),d=!1,R()}}}function qe(n,e,t){let l;De(n,Be,d=>t(8,l=d));let{$$slots:r={},$$scope:f}=e,o=!1,{routes:a}=e,{useLightDark:i=!1}=e,{defaultDark:g=!0}=e,{dark:k=g}=e,{popupOnOffset:I="right-8"}=e,{popupOffOffset:M="-right-28"}=e,{mobileBreakpoint:b="sm"}=e,{colors:h={}}=e;function E(){t(0,k=!k),localStorage.setItem("dark",k?"true":"false")}ze(()=>{var R;if(window.addEventListener("click",()=>t(7,o=!1)),!i)return;const d=(R=localStorage.getItem("dark"))!=null?R:window.matchMedia("(prefers-color-scheme: dark)").matches;d&&d=="true"?t(0,k=!0):t(0,k=!1)});const v=()=>setTimeout(()=>t(7,o=!o),10);return n.$$set=d=>{"routes"in d&&t(1,a=d.routes),"useLightDark"in d&&t(2,i=d.useLightDark),"defaultDark"in d&&t(10,g=d.defaultDark),"dark"in d&&t(0,k=d.dark),"popupOnOffset"in d&&t(3,I=d.popupOnOffset),"popupOffOffset"in d&&t(4,M=d.popupOffOffset),"mobileBreakpoint"in d&&t(5,b=d.mobileBreakpoint),"colors"in d&&t(6,h=d.colors),"$$scope"in d&&t(11,f=d.$$scope)},[k,a,i,I,M,b,h,o,l,E,g,f,r,v]}class Re extends x{constructor(e){super(),$(this,e,qe,Fe,ee,{routes:1,useLightDark:2,defaultDark:10,dark:0,popupOnOffset:3,popupOffOffset:4,mobileBreakpoint:5,colors:6})}}function Ge(n){let e,t,l,r,f,o,a,i,g;function k(h){n[3](h)}let I={routes:{"/":"Home",about:"About","9chicken":"\u0E01\u0E49\u0E32\u0E27\u0E44\u0E01\u0E48"},useLightDark:!0,defaultDark:!1,colors:{bgSelected:"bg-orange-300 dark:bg-orange-500",bgUnselected:"hover:bg-orange-100 dark:hover:bg-orange-800"}};n[0]!==void 0&&(I.dark=n[0]),l=new Re({props:I}),Le.push(()=>Se(l,"dark",k));const M=n[2].default,b=de(M,n,n[1],null);return{c(){e=L("div"),t=L("main"),he(l.$$.fragment),f=N(),o=L("hr"),a=N(),i=L("section"),b&&b.c(),this.h()},l(h){e=S(h,"DIV",{});var E=w(e);t=S(E,"MAIN",{class:!0});var v=w(t);_e(l.$$.fragment,v),f=T(v),o=S(v,"HR",{class:!0}),a=T(v),i=S(v,"SECTION",{class:!0});var d=w(i);b&&b.l(d),d.forEach(c),v.forEach(c),E.forEach(c),this.h()},h(){u(o,"class","mx-auto mb-10 w-[90%]"),u(i,"class","min-h-[calc(100vh-8rem-2.5rem-1px)]"),u(t,"class","text-black transition-all dark:bg-slate-900 dark:text-white"),se(e,"dark",n[0])},m(h,E){A(h,e,E),p(e,t),me(l,t,null),p(t,f),p(t,o),p(t,a),p(t,i),b&&b.m(i,null),g=!0},p(h,[E]){const v={};!r&&E&1&&(r=!0,v.dark=h[0],Me(()=>r=!1)),l.$set(v),b&&b.p&&(!g||E&2)&&ke(b,M,h,h[1],g?ye(M,h[1],E,null):ve(h[1]),null),E&1&&se(e,"dark",h[0])},i(h){g||(U(l.$$.fragment,h),U(b,h),g=!0)},o(h){P(l.$$.fragment,h),P(b,h),g=!1},d(h){h&&c(e),pe(l),b&&b.d(h)}}}function Je(n,e,t){let{$$slots:l={},$$scope:r}=e,f;function o(a){f=a,t(0,f)}return n.$$set=a=>{"$$scope"in a&&t(1,r=a.$$scope)},[f,r,l,o]}class Qe extends x{constructor(e){super(),$(this,e,Je,Ge,ee,{})}}export{Qe as default};
