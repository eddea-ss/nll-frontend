import{B as G,C as j,E as A,g as I,o as E,p as v,q as M,r as V,u as T,w as N,x as P}from"./chunk-UV36F6Q7.js";import{E as g,F as _,Fa as y,O as r,W as p,Xa as w,Y as o,Za as C,cb as S,fa as i,ga as a,ha as d,ib as k,jb as L,na as b,oa as f,pb as F,w as u,x as h,xa as s,za as x}from"./chunk-FGHEDK35.js";function z(t,n){t&1&&(i(0,"div"),s(1," El correo es obligatorio. "),a())}function D(t,n){t&1&&(i(0,"div"),s(1," Por favor, ingresa un correo v\xE1lido. "),a())}function U(t,n){if(t&1&&(i(0,"div",27),p(1,z,2,0,"div",28)(2,D,2,0,"div",28),a()),t&2){let l,e,m=f();r(),o("ngIf",(l=m.loginForm.get("email"))==null||l.errors==null?null:l.errors.required),r(),o("ngIf",(e=m.loginForm.get("email"))==null||e.errors==null?null:e.errors.email)}}function R(t,n){t&1&&(g(),d(0,"path",29))}function B(t,n){t&1&&(g(),d(0,"path",30))}function H(t,n){t&1&&(g(),d(0,"path",31))}function Z(t,n){t&1&&(g(),d(0,"path",32))}function $(t,n){t&1&&(i(0,"div"),s(1," La contrase\xF1a es obligatoria. "),a())}function J(t,n){if(t&1&&(i(0,"div",27),p(1,$,2,0,"div",28),a()),t&2){let l,e=f();r(),o("ngIf",(l=e.loginForm.get("password"))==null||l.errors==null?null:l.errors.required)}}function K(t,n){if(t&1&&(i(0,"div",33),s(1),a()),t&2){let l=f();r(),x(" ",l.errorMessage," ")}}var q=class t{title=u(L);meta=u(k);loginService=u(I);fb=u(j);loginForm=this.fb.group({email:["",[v.required,v.email]],password:["",[v.required]]});isLoading=!1;errorMessage="";isPasswordVisible=!1;hasLength=!1;hasUppercase=!1;hasSpecialChar=!1;hasNumber=!1;constructor(){this.title.setTitle("Acceso a la Plataforma | Nuevo Los Lagos"),this.meta.updateTag({name:"description",content:'Accede a la plataforma "Nuevo Los Lagos" y con\xE9ctate con una red colaborativa. Descubre nuevas oportunidades de negocio en la regi\xF3n.'}),this.loginForm.get("password")?.valueChanges.subscribe(n=>{this.validatePassword(n)})}validatePassword(n){this.hasLength=n.length>=8,this.hasUppercase=/[A-Z]/.test(n),this.hasSpecialChar=/[!@#$%^&*(),.?":{}|<>]/.test(n),this.hasNumber=/[0-9]/.test(n)}togglePasswordVisibility(){this.isPasswordVisible=!this.isPasswordVisible}onSubmit(){if(this.loginForm.invalid)return;this.isLoading=!0,this.errorMessage="";let{email:n,password:l}=this.loginForm.value;this.loginService.login({correo:n,password:l}).subscribe({next:()=>{this.isLoading=!1},error:e=>{this.errorMessage=e?.error?.error||"Error al iniciar sesi\xF3n.",this.isLoading=!1}})}static \u0275fac=function(l){return new(l||t)};static \u0275cmp=h({type:t,selectors:[["app-login"]],standalone:!0,features:[y],decls:44,vars:15,consts:[[1,"bg-gray-100","flex","items-center","justify-center",2,"min-height","70vh"],[1,"bg-white","p-8","shadow-md","w-full","max-w-md"],[1,"text-2xl","font-bold","mb-6","text-center"],[3,"ngSubmit","formGroup"],[1,"mb-4"],["for","email",1,"block","text-gray-700","font-semibold","mb-2"],["id","email","type","email","formControlName","email","required","","placeholder","Ingresa tu correo electr\xF3nico",1,"w-full","px-4","py-2","border","border-gray-300","rounded-lg","focus:outline-none","focus:ring","focus:border-blue-300"],["class","mt-2 text-sm text-red-600",4,"ngIf"],[1,"mb-6"],["for","password",1,"block","text-gray-700","font-semibold","mb-2"],[1,"relative"],["id","password","formControlName","password","required","","placeholder","Ingresa tu contrase\xF1a",1,"w-full","px-4","py-2","border","border-gray-300","rounded-lg","focus:outline-none","focus:ring","focus:border-blue-300",3,"type"],["type","button",1,"absolute","inset-y-0","right-0","pr-3","flex","items-center","text-sm","leading-5",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-5","w-5",3,"ngClass"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M15 12a3 3 0 11-6 0 3 3 0 016 0z",4,"ngIf"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",4,"ngIf"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.977 9.977 0 014.058-5.642M15 12a3 3 0 11-6 0 3 3 0 016 0z",4,"ngIf"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M3 3l18 18",4,"ngIf"],[1,"my-4","grid","grid-cols-2","gap-4"],[1,"flex","items-center","text-sm"],[1,"w-4","h-4","inline-block","rounded-full","mr-2",3,"ngClass"],["class","text-center text-sm text-red-600",4,"ngIf"],["type","submit",1,"w-full","text-center","bg-gray-800","text-white","py-2","px-4","rounded-lg","hover:bg-yellow-600","transition","duration-300",3,"disabled"],[1,"my-4","border-t","border-gray-300","w-3/4","mx-auto"],[1,"flex","flex-col","space-y-4"],["routerLink","/registro","href","/registro",1,"w-full","text-center","mt-4","bg-indigo-600","text-white","py-2","px-4","rounded-lg","hover:bg-blue-600","focus:outline-none","focus:ring"],["routerLink","/","href","/",1,"w-full","text-center","bg-white","border","border-gray-300","text-gray-900","py-2","px-4","rounded-lg","hover:bg-gray-100","transition","duration-300"],[1,"mt-2","text-sm","text-red-600"],[4,"ngIf"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M15 12a3 3 0 11-6 0 3 3 0 016 0z"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.977 9.977 0 014.058-5.642M15 12a3 3 0 11-6 0 3 3 0 016 0z"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M3 3l18 18"],[1,"text-center","text-sm","text-red-600"]],template:function(l,e){if(l&1&&(i(0,"div",0)(1,"div",1)(2,"h1",2),s(3,"Iniciar Sesi\xF3n"),a(),i(4,"form",3),b("ngSubmit",function(){return e.onSubmit()}),i(5,"div",4)(6,"label",5),s(7,"Correo"),a(),d(8,"input",6),p(9,U,3,2,"div",7),a(),i(10,"div",8)(11,"label",9),s(12,"Contrase\xF1a"),a(),i(13,"div",10),d(14,"input",11),i(15,"button",12),b("click",function(){return e.togglePasswordVisibility()}),g(),i(16,"svg",13),p(17,R,1,0,"path",14)(18,B,1,0,"path",15)(19,H,1,0,"path",16)(20,Z,1,0,"path",17),a()()(),p(21,J,2,1,"div",7),_(),i(22,"div",18)(23,"div",19),d(24,"span",20),s(25," Al menos 8 caracteres "),a(),i(26,"div",19),d(27,"span",20),s(28," Una letra may\xFAscula "),a(),i(29,"div",19),d(30,"span",20),s(31," Un car\xE1cter especial "),a(),i(32,"div",19),d(33,"span",20),s(34," Un n\xFAmero "),a()()(),p(35,K,2,1,"div",21),i(36,"button",22),s(37," Iniciar Sesi\xF3n "),a(),d(38,"hr",23),i(39,"div",24)(40,"a",25),s(41," Crear Cuenta "),a(),i(42,"a",26),s(43," Volver "),a()()()()()),l&2){let m,c;r(4),o("formGroup",e.loginForm),r(5),o("ngIf",((m=e.loginForm.get("email"))==null?null:m.touched)&&((m=e.loginForm.get("email"))==null?null:m.invalid)),r(5),o("type",e.isPasswordVisible?"text":"password"),r(2),o("ngClass",e.isPasswordVisible?"text-gray-700":"text-gray-500"),r(),o("ngIf",e.isPasswordVisible),r(),o("ngIf",e.isPasswordVisible),r(),o("ngIf",!e.isPasswordVisible),r(),o("ngIf",!e.isPasswordVisible),r(),o("ngIf",((c=e.loginForm.get("password"))==null?null:c.touched)&&((c=e.loginForm.get("password"))==null?null:c.invalid)),r(3),o("ngClass",e.hasLength?"bg-green-500":"bg-gray-300"),r(3),o("ngClass",e.hasUppercase?"bg-green-500":"bg-gray-300"),r(3),o("ngClass",e.hasSpecialChar?"bg-green-500":"bg-gray-300"),r(3),o("ngClass",e.hasNumber?"bg-green-500":"bg-gray-300"),r(2),o("ngIf",e.errorMessage),r(),o("disabled",e.isLoading||!e.loginForm.valid)}},dependencies:[A,T,E,M,V,G,N,P,S,w,C,F]})};export{q as a};
