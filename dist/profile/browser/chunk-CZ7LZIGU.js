import{b as x,c as b,d as y,e as C}from"./chunk-6SQICTXQ.js";import{Ja as v,La as a,Pa as l,Qa as s,Ra as c,Ta as h,Ua as S,X as p,Za as g,_a as u,bb as I,ua as d,wb as _,xa as n,ya as f}from"./chunk-VPUTUWOC.js";function G(e,t){e&1&&c(0,"asl-google-signin-button",2)}function M(e,t){if(e&1&&(l(0,"div"),c(1,"img",3),l(2,"div")(3,"h4"),g(4),s(),l(5,"p"),g(6),s()()()),e&2){let r=h();n(),S("src",r.user.photoUrl,d),n(3),u(r.user.name),n(2),u(r.user.email)}}var F=(()=>{let t=class t{constructor(i){this.authService=i,this.title="angular-google"}ngOnInit(){this.authService.authState.subscribe(i=>{this.user=i,this.loggedIn=i!=null,console.log(this.user)})}};t.\u0275fac=function(o){return new(o||t)(f(x))},t.\u0275cmp=p({type:t,selectors:[["app-google"]],standalone:!0,features:[I],decls:2,vars:2,consts:[["theme","filled_blue",4,"ngIf"],[4,"ngIf"],["theme","filled_blue"],[3,"src"]],template:function(o,m){o&1&&v(0,G,1,0,"asl-google-signin-button",0)(1,M,7,3,"div",1),o&2&&(a("ngIf",!m.user),n(),a("ngIf",m.user))},dependencies:[b,C,y,_]});let e=t;return e})();export{F as a};
