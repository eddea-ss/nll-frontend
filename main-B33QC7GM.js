import{b as L}from"./chunk-KEGPPJHL.js";import"./chunk-RXVSV4J6.js";import"./chunk-C6OKI7EA.js";import"./chunk-VSDABVWC.js";import"./chunk-QDV4Z7UF.js";import"./chunk-CLD2IHKC.js";import"./chunk-2NTWZQ2X.js";import"./chunk-EM22AR2C.js";import"./chunk-AATOIFQG.js";import"./chunk-XTOXFYLV.js";import"./chunk-5CUMJXU7.js";import"./chunk-I2XMHMXO.js";import"./chunk-TNGJREGI.js";import"./chunk-RYQQHJ3W.js";import"./chunk-DNZ6UIGO.js";import"./chunk-G2YJTG3K.js";import"./chunk-ZVPV47XU.js";import{m as A}from"./chunk-2TTZR7RJ.js";import{B as f,C,Ea as a,Ha as k,N as g,V as b,Wa as w,X as m,Ya as R,cb as T,ea as c,fa as l,ga as x,gb as _,hb as M,ib as P,jb as I,k as h,ka as v,lb as E,ma as y,na as d,nb as F,ob as D,qb as N,v as n,w as r,wa as u,xa as S}from"./chunk-BKSLIME4.js";var H=(e,o)=>({"opacity-100":e,"opacity-0":o});function U(e,o){if(e&1){let t=v();c(0,"div",1)(1,"span",2),u(2),l(),c(3,"button",3),y("click",function(){f(t);let z=d();return C(z.dismiss())}),u(4," \xD7 "),l()()}if(e&2){let t=d();m("ngClass",k(2,H,t.show,!t.show)),g(2),S(t.message.text)}}var i=class e{message=null;show=!1;snackbarService=n(A);ngOnInit(){this.snackbarService.snackbar$.subscribe(o=>{o&&(this.message=o,this.show=!0,setTimeout(()=>{this.dismiss()},o.duration||3e3))})}dismiss(){this.show=!1,setTimeout(()=>{this.message=null},300)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["app-snackbar"]],standalone:!0,features:[a],decls:1,vars:1,consts:[["class","fixed gap-4 border border-blue bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-4 rounded shadow-lg flex items-center space-x-2 transition-opacity duration-300",3,"ngClass",4,"ngIf"],[1,"fixed","gap-4","border","border-blue","bottom-8","left-1/2","transform","-translate-x-1/2","bg-gray-800","text-white","px-6","py-4","rounded","shadow-lg","flex","items-center","space-x-2","transition-opacity","duration-300",3,"ngClass"],[1,"text-white",2,"font-weight","bold"],[1,"text-white","size-10","focus:outline-none",2,"scale","2",3,"click"]],template:function(t,s){t&1&&b(0,U,5,5,"div",0),t&2&&m("ngIf",s.message)},dependencies:[T,w,R],styles:["div[_ngcontent-%COMP%]{transition:opacity .3s ease-in-out}"]})};var p=class e{titleService=n(I);metaService=n(P);router=n(D);title="Nuevo los Lagos";constructor(){this.router.events.pipe(h(o=>o instanceof E)).subscribe(()=>{this.updateCanonicalUrl()})}updateCanonicalUrl(){let o=window.location.origin+this.router.url.split("?")[0],t=document.querySelector("link[rel='canonical']");t===null&&(t=document.createElement("link"),t.setAttribute("rel","canonical"),document.head.appendChild(t)),t.setAttribute("href",o)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["app-root"]],standalone:!0,features:[a],decls:2,vars:0,template:function(t,s){t&1&&x(0,"router-outlet")(1,"app-snackbar")},dependencies:[F,i]})};var O=[{path:"",loadComponent:()=>import("./chunk-ZKPBHDQK.js").then(e=>e.LandingPage3Component)},{path:"",component:L,children:[{path:"landing",loadComponent:()=>import("./chunk-SKGLT33T.js").then(e=>e.LandingPageComponent)},{path:"landing2",loadComponent:()=>import("./chunk-AQKQOOWU.js").then(e=>e.LandingPage2Component)},{path:"buscador",loadComponent:()=>import("./chunk-X234JBW4.js").then(e=>e.GeneralSearchComponent)},{path:"proyecto-equipo",loadComponent:()=>import("./chunk-PGMQTERA.js").then(e=>e.ProyectoEquipoComponent)},{path:"proyecto-plataforma",loadComponent:()=>import("./chunk-5V3LLC3T.js").then(e=>e.ProyectoPlataformaComponent)},{path:"evaluaciones-madurez",loadComponent:()=>import("./chunk-Q3TXG72I.js").then(e=>e.EvaluacionesMadurezComponent)},{path:"evaluaciones-proveedor",loadComponent:()=>import("./chunk-KDCVCRMB.js").then(e=>e.EvaluacionesProveedorComponent)},{path:"evaluaciones-startup",loadComponent:()=>import("./chunk-DTTVPCZF.js").then(e=>e.EvaluacionesStartupComponent)},{path:"investigacion-podcasts",loadComponent:()=>import("./chunk-3QRKRIE7.js").then(e=>e.PodcastsComponent)},{path:"investigacion-diagnostico",loadComponent:()=>import("./chunk-GI7WW57L.js").then(e=>e.InformeComponent)},{path:"buscador-cursos",loadComponent:()=>import("./chunk-7KP3LMZE.js").then(e=>e.ResourceSearchComponent),data:{resourceType:"curses"}},{path:"buscador-articulos",loadComponent:()=>import("./chunk-7KP3LMZE.js").then(e=>e.ResourceSearchComponent),data:{resourceType:"articles"}},{path:"buscador-proyectos",loadComponent:()=>import("./chunk-7KP3LMZE.js").then(e=>e.ResourceSearchComponent),data:{resourceType:"projects"}},{path:"buscador-financiamiento",loadComponent:()=>import("./chunk-7KP3LMZE.js").then(e=>e.ResourceSearchComponent),data:{resourceType:"financing"}},{path:"buscador-proveedores",loadComponent:()=>import("./chunk-7KP3LMZE.js").then(e=>e.ResourceSearchComponent),data:{resourceType:"suppliers"}},{path:"buscador-startup",loadComponent:()=>import("./chunk-7KP3LMZE.js").then(e=>e.ResourceSearchComponent),data:{resourceType:"startups"}},{path:"login",loadComponent:()=>import("./chunk-XOTH6EHG.js").then(e=>e.LoginComponent)},{path:"registro",loadComponent:()=>import("./chunk-5B6J3LIU.js").then(e=>e.SelectionRegisterComponent)},{path:"registro-persona",loadComponent:()=>import("./chunk-Q4RATCXP.js").then(e=>e.FormRegisterComponent)},{path:"registro-industria",loadComponent:()=>import("./chunk-Q4RATCXP.js").then(e=>e.FormRegisterComponent)},{path:"registro-proveedor",loadComponent:()=>import("./chunk-Q4RATCXP.js").then(e=>e.FormRegisterComponent)},{path:"modelo-caracterizacion/:part",loadComponent:()=>import("./chunk-RQXBJLJ3.js").then(e=>e.SurveyFormComponent)},{path:"**",redirectTo:"",pathMatch:"full"}]}];M(p,{providers:[N(O),_()]}).catch(e=>console.error(e));
