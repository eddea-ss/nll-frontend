import{b as F,c as D,e as R,j as N,l as U,w as B}from"./chunk-UO6YBY2O.js";import{a as I,d as A,f as V,g as z}from"./chunk-SZULK6WB.js";import{B as h,C as f,D as p,E as m,Ea as O,K as M,Ka as E,Ma as L,N as s,Ua as k,V as x,X as g,aa as v,ba as P,ca as y,da as w,ea as e,fa as t,ga as l,ka as b,ma as C,na as d,pb as T,v as u,w as _,wa as n,ya as S}from"./chunk-BKSLIME4.js";function $(r,a){if(r&1){let i=b();e(0,"div",38)(1,"div",39)(2,"div",40)(3,"div",41),n(4),t(),e(5,"h3",42),n(6),t()(),e(7,"div",43),l(8,"p",44),E(9,"truncate"),e(10,"a",45),C("click",function(){let c=h(i).$index,Y=d(2);return f(Y.openModal(c))}),n(11," Leer m\xE1s \u2192 "),t()()()()}if(r&2){let i=a.$implicit,o=a.$index,c=d(2);s(4),S("0",o+1,""),s(2),S(" ",i==null?null:i.titulo," "),s(2),g("innerHTML",L(9,3,c.recursosService.sanitizedString(i==null?null:i.resumen),120,!0),M)}}function j(r,a){if(r&1&&(e(0,"div",5)(1,"h2",36),n(2," Art\xEDculos Destacados \u2192 "),t(),e(3,"div",37),y(4,$,12,7,"div",38,P),t()()),r&2){let i=d();s(4),w(i.data.slice(0,6))}}function G(r,a){if(r&1){let i=b();e(0,"app-article-modal",46),C("close",function(){h(i);let c=d();return f(c.closeModal())}),t()}if(r&2){let i=d();g("data",i.dataModal)("showNext",!1)}}var H=class r{loginService=u(z);authState=this.loginService.authState;currentUser=this.loginService.currentUser;recursosService=u(I);AuthState=A;UserType=V;slides=[];data=[];isModalOpen=!1;dataModal;currentIndex=0;titleSection={title:"",description:"",buttonText:"",buttonLink:"",imageSrc:"assets/hero.webp",imageAlt:"mockup"};constructor(){k(()=>{let a=this.authState(),i=this.currentUser();a==="LOGGED_IN"?(this.titleSection.title="Bienvenido!",this.titleSection.description="Aprende m\xE1s sobre tus clientes y comerciales",this.titleSection.buttonText="Empezar",i?.type==="SUPPLIER"?this.titleSection.buttonLink="/evaluaciones-proveedor":i?.type==="COMPANY"?this.titleSection.buttonLink="/evaluaciones-madurez":i?.type==="STARTUP"&&(this.titleSection.buttonLink="/evaluaciones-startup")):(this.titleSection.title="Encuentra la innovaci\xF3n en Nuevo Los Lagos",this.titleSection.description="Descubre c\xF3mo conectarte con empresas de la Industria 4.0",this.titleSection.buttonText="Reg\xEDstrate",this.titleSection.buttonLink="/registro")})}ngOnInit(){this.fetchSuggestions()}fetchSuggestions(){let{pathMatch:a,searchKey:i}={pathMatch:"articles",searchKey:"articulo"};this.recursosService.searchResources(i,a,3).subscribe({next:o=>{this.data=o},error:o=>{console.error("Error al obtener los datos:",o),this.data=[]}})}closeModal(){this.isModalOpen=!1,this.dataModal=void 0}openModal(a){this.currentIndex=a,this.dataModal=this.data[this.currentIndex],this.isModalOpen=!0}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=_({type:r,selectors:[["app-landing-page3"]],standalone:!0,features:[O],decls:82,vars:8,consts:[["type","varios11"],[1,"custom-shape-divider-bottom-1737000036",2,"margin-top","-60px"],["data-name","Layer 1","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 1200 120","preserveAspectRatio","none"],["d","M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z",1,"shape-fill"],["data-aos","fade-up","type","articulos1"],[1,"mb-16","mx-8","sm:mx-8","lg:mx-20","xl:mx-32"],["data-aos","fade-up"],[3,"title","description","buttonText","buttonLink","imageSrc","imageAlt"],["data-aos","fade-right"],[1,"custom-shape-divider-bottom-1736997902"],["d","M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z","opacity",".25",1,"shape-fill"],["d","M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z","opacity",".5",1,"shape-fill"],["d","M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z",1,"shape-fill"],[1,"bg-yellow-500","py-10"],[1,"max-w-6xl","mx-auto","px-4","sm:px-6","lg:px-8"],[1,"flex","flex-col","gap-12","lg:flex-row","items-center"],[1,"lg:w-1/2"],[1,"text-3xl","font-bold","leading-tight","mb-4"],[1,"text-xl","mb-8"],["routerLink","/investigacion-podcasts","href","/investigacion-podcasts",1,"bg-gray-800","text-white","py-3","px-6","rounded-lg","shadow-lg","hover:shadow-xl","transition","duration-200"],[1,"lg:w-1/4","lg:flex","lg:justify-end","hidden"],["src","assets/podcast.webp","alt","Podcast","width","auto","height","auto","loading","eager"],[1,"custom-shape-divider-top-1736997818"],[1,"py-20","bg-white"],[1,"container","mx-auto","px-4","sm:px-6","lg:px-8"],["data-aos","zoom-in-down",1,"lg:text-center"],[1,"font-heading","mb-4","bg-yellow-500","inline-block","px-4","py-2","rounded-lg","md:w-64","md:mx-auto","text-xs","font-semibold","tracking-widest","text-black","uppercase","title-font"],[1,"font-heading","mt-2","text-2xl","leading-8","font-semibold","tracking-tight","text-gray-900","sm:text-3xl",2,"letter-spacing","0.025em"],[1,"mt-4","max-w-2xl","text-lg","text-gray-500","lg:mx-auto",2,"margin-left","auto","margin-right","auto"],["data-aos","zoom-in",1,"mt-10"],[1,"feature-grid"],[1,"feature-item"],[1,"feature-item-title"],[1,"feature-item-heading"],[1,"feature-item-description"],[3,"data","showNext"],["routerLink","/buscador",1,"text-3xl","cursor-pointer","font-bold","mb-16","text-gray-800","transform","duration-300","hover:text-blue-800","relative","inline-block","after:content-['']","after:absolute","after:bottom-0","after:left-0","after:w-full","after:h-1","after:bg-yellow-500"],[1,"grid","grid-cols-1","md:grid-cols-2","lg:grid-cols-3","gap-12"],[1,"article-card","group"],[1,"article-content"],[1,"article-header"],[1,"article-number"],[1,"text-xl","font-bold","text-gray-800"],[1,"article-body"],[3,"innerHTML"],[1,"read-more-link",3,"click"],[3,"close","data","showNext"]],template:function(i,o){i&1&&(l(0,"app-extras",0),e(1,"div",1),p(),e(2,"svg",2),l(3,"path",3),t()(),m(),e(4,"section",4),x(5,j,6,0,"div",5),t(),e(6,"section",6),l(7,"app-title-section",7),t(),e(8,"div",8)(9,"div",9),p(),e(10,"svg",2),l(11,"path",10)(12,"path",11)(13,"path",12),t()(),m(),e(14,"section",13)(15,"div",14)(16,"div",15)(17,"div",16)(18,"h1",17),n(19," Escucha nuestros Podcast "),t(),e(20,"p",18),n(21," Podcast creados con IA, acerca de la industria 4.0 y sus tecnolog\xEDas. "),t(),e(22,"a",19),n(23,"Ir a Escuchar "),t()(),e(24,"div",20),l(25,"img",21),t()()()(),e(26,"div",22),p(),e(27,"svg",2),l(28,"path",10)(29,"path",11)(30,"path",12),t()()(),m(),e(31,"section")(32,"div",23)(33,"div",24)(34,"div",25)(35,"h2",26),n(36," \xBF Qu\xE9 es Nuevo los lagos ? "),t(),e(37,"p",27),n(38," Plataforma para fortalecer la industria regional "),t(),e(39,"p",28),n(40," Iniciativa web desarrollada por Corfo Los Lagos, Universidad Santo Tom\xE1s, Asimet y Grupo Centinela. "),t()(),e(41,"div",29)(42,"dl",30)(43,"div",31)(44,"div",32)(45,"p",33),n(46,"Buscador Proveedores"),t()(),e(47,"div",34),n(48," Herramienta para conectar empresas y proveedores de la industria en la regi\xF3n de Los Lagos. "),t()(),e(49,"div",31)(50,"div",32)(51,"p",33),n(52,"Buscador de Cursos I 4.0"),t()(),e(53,"div",34),n(54," Plataforma para busqueda de cursos especializados en Industria 4.0 para el desarrollo de profesionales. "),t()(),e(55,"div",31)(56,"div",32)(57,"p",33),n(58,"Art\xEDculos de inter\xE9s"),t()(),e(59,"div",34),n(60," Compendio de art\xEDculos relevantes sobre Industria 4.0, enfocados en ofrecer informaci\xF3n \xFAtil a las empresas. "),t()(),e(61,"div",31)(62,"div",32)(63,"p",33),n(64,"Proyectos destacados"),t()(),e(65,"div",34),n(66," Selecci\xF3n de proyectos sobresalientes en Industria 4.0, con informaci\xF3n relevante para el sector empresarial. "),t()(),e(67,"div",31)(68,"div",32)(69,"p",33),n(70," Investigaciones sobre la Industria Regional "),t()(),e(71,"div",34),n(72," Acceso a investigaciones y estudios que analizan el impacto y desarrollo de la industria en la regi\xF3n de Los Lagos. "),t()(),e(73,"div",31)(74,"div",32)(75,"p",33),n(76," Contenido Exclusivo en Industria 4.0 "),t()(),e(77,"div",34),n(78," Recursos especializados y contenido exclusivo sobre tendencias, innovaciones y mejores pr\xE1cticas en Industria 4.0. "),t()()()()()()(),l(79,"app-patrocinadores")(80,"app-footer"),x(81,G,1,2,"app-article-modal",35)),i&2&&(s(5),v(o.data.length?5:-1),s(2),g("title",o.titleSection.title)("description",o.titleSection.description)("buttonText",o.titleSection.buttonText)("buttonLink",o.titleSection.buttonLink)("imageSrc",o.titleSection.imageSrc)("imageAlt",o.titleSection.imageAlt),s(74),v(o.isModalOpen&&o.dataModal?81:-1))},dependencies:[R,D,F,B,U,N,T],styles:['.custom-shape-divider-bottom-1736997406[_ngcontent-%COMP%]{bottom:0;left:0;width:100%;overflow:hidden;line-height:0;transform:rotate(180deg)}.custom-shape-divider-bottom-1736997406[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{position:relative;display:block;width:calc(225% + 1.3px);height:60px}.custom-shape-divider-bottom-1736997406[_ngcontent-%COMP%]   .shape-fill[_ngcontent-%COMP%]{fill:#eab308}.custom-shape-divider-top-1736997818[_ngcontent-%COMP%]{top:0;left:0;width:100%;overflow:hidden;line-height:0}.custom-shape-divider-top-1736997818[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{position:relative;display:block;width:calc(100% + 1.3px);height:65px;transform:rotateY(180deg)}.custom-shape-divider-top-1736997818[_ngcontent-%COMP%]   .shape-fill[_ngcontent-%COMP%]{fill:#eab308}.custom-shape-divider-bottom-1736997902[_ngcontent-%COMP%]{bottom:0;left:0;width:100%;overflow:hidden;line-height:0;transform:rotate(180deg)}.custom-shape-divider-bottom-1736997902[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{position:relative;display:block;width:calc(100% + 1.3px);height:65px;transform:rotateY(180deg)}.custom-shape-divider-bottom-1736997902[_ngcontent-%COMP%]   .shape-fill[_ngcontent-%COMP%]{fill:#eab308}.custom-shape-divider-bottom-1736999892[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;width:100%;overflow:hidden;line-height:0}.custom-shape-divider-bottom-1736999892[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{position:relative;display:block;width:calc(153% + 1.3px);height:86px;transform:rotateY(180deg)}.custom-shape-divider-bottom-1736999892[_ngcontent-%COMP%]   .shape-fill[_ngcontent-%COMP%]{fill:#fff}.custom-shape-divider-bottom-1737000036[_ngcontent-%COMP%]{bottom:0;left:0;width:100%;overflow:hidden;line-height:0}.custom-shape-divider-bottom-1737000036[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{position:relative;display:block;width:calc(100% + 1.3px);height:59px}.custom-shape-divider-bottom-1737000036[_ngcontent-%COMP%]   .shape-fill[_ngcontent-%COMP%]{fill:#fff}.article-card[_ngcontent-%COMP%]{position:relative;padding:2.5rem;transition:all .4s ease;display:flex;flex-direction:column;min-height:340px;background:#fff;border:1px solid #f0f0f0}.article-card[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;top:0;width:2px;height:40px;background:#eab308;transition:height .4s ease}.article-card[_ngcontent-%COMP%]:hover{transform:translateY(-6px);background:linear-gradient(to right,rgba(234,179,8,.03),transparent 80%)}.article-card[_ngcontent-%COMP%]:hover:before{height:100%}.article-card[_ngcontent-%COMP%]:hover   .article-number[_ngcontent-%COMP%]{color:#eab308}.article-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;gap:1.5rem}.article-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.article-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.25rem;line-height:1.5;font-weight:600;color:#1a1a1a}.article-number[_ngcontent-%COMP%]{font-size:.875rem;font-weight:500;color:#6b7280;letter-spacing:.05em;transition:color .3s ease}.article-body[_ngcontent-%COMP%]{flex-grow:1;display:flex;flex-direction:column;justify-content:space-between;gap:2rem}.article-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.7;color:#4b5563;font-weight:400}.read-more-link[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;font-weight:500;color:#eab308;transition:all .3s ease;width:fit-content}.read-more-link[_ngcontent-%COMP%]:hover{transform:translate(6px)}.article-card[_ngcontent-%COMP%]:after{content:"";position:absolute;top:-2px;right:-2px;width:10px;height:10px;background:#eab308;clip-path:polygon(100% 0,0 0,100% 100%)}']})};export{H as a};
