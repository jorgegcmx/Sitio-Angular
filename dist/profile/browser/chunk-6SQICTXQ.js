import{A as v,Da as A,E as d,M as p,T as m,Y as g,Z as D,_ as N,a as l,aa as P,ba as f,d as h,ia as c,k as u,l as w,m as k,r as y,sa as S,ya as O,yb as U}from"./chunk-VPUTUWOC.js";var _=class{constructor(){}loadScript(e,b,s,t=null){if(typeof document<"u"&&!document.getElementById(e)){let i=document.createElement("script");i.async=!0,i.src=b,i.onload=s,t||(t=document.head),t.appendChild(i)}}},R=class{},z={oneTapEnabled:!0},I=(()=>{let e=class e extends _{constructor(s,t){super(),this.clientId=s,this.initOptions=t,this.changeUser=new m,this._socialUser=new u(null),this._accessToken=new u(null),this._receivedAccessToken=new m,this.initOptions=l(l({},z),this.initOptions),this._socialUser.pipe(p(1)).subscribe(this.changeUser),this._accessToken.pipe(p(1)).subscribe(this._receivedAccessToken)}initialize(s){return new Promise((t,i)=>{try{this.loadScript(e.PROVIDER_ID,"https://accounts.google.com/gsi/client",()=>{if(google.accounts.id.initialize({client_id:this.clientId,auto_select:s,callback:({credential:n})=>{let o=this.createSocialUser(n);this._socialUser.next(o)},prompt_parent_id:this.initOptions?.prompt_parent_id,itp_support:this.initOptions.oneTapEnabled}),this.initOptions.oneTapEnabled&&this._socialUser.pipe(v(n=>n===null)).subscribe(()=>google.accounts.id.prompt(console.debug)),this.initOptions.scopes){let n=this.initOptions.scopes instanceof Array?this.initOptions.scopes.filter(o=>o).join(" "):this.initOptions.scopes;this._tokenClient=google.accounts.oauth2.initTokenClient({client_id:this.clientId,scope:n,prompt:this.initOptions.prompt,callback:o=>{o.error?this._accessToken.error({code:o.error,description:o.error_description,uri:o.error_uri}):this._accessToken.next(o.access_token)}})}t()})}catch(n){i(n)}})}getLoginStatus(){return new Promise((s,t)=>{this._socialUser.value?s(this._socialUser.value):t(`No user is currently logged in with ${e.PROVIDER_ID}`)})}refreshToken(){return new Promise((s,t)=>{google.accounts.id.revoke(this._socialUser.value.id,i=>{i.error?t(i.error):s(this._socialUser.value)})})}getAccessToken(){return new Promise((s,t)=>{this._tokenClient?(this._tokenClient.requestAccessToken({hint:this._socialUser.value?.email}),this._receivedAccessToken.pipe(d(1)).subscribe(s)):this._socialUser.value?t("No token client was instantiated, you should specify some scopes."):t("You should be logged-in first.")})}revokeAccessToken(){return new Promise((s,t)=>{this._tokenClient?this._accessToken.value?google.accounts.oauth2.revoke(this._accessToken.value,()=>{this._accessToken.next(null),s()}):t("No access token to revoke"):t("No token client was instantiated, you should specify some scopes.")})}signIn(){return Promise.reject('You should not call this method directly for Google, use "<asl-google-signin-button>" wrapper or generate the button yourself with "google.accounts.id.renderButton()" (https://developers.google.com/identity/gsi/web/guides/display-button#javascript)')}signOut(){return h(this,null,function*(){google.accounts.id.disableAutoSelect(),this._socialUser.next(null)})}createSocialUser(s){let t=new R;t.idToken=s;let i=this.decodeJwt(s);return t.id=i.sub,t.name=i.name,t.email=i.email,t.photoUrl=i.picture,t.firstName=i.given_name,t.lastName=i.family_name,t}decodeJwt(s){let i=s.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(window.atob(i).split("").map(function(o){return"%"+("00"+o.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(n)}};e.PROVIDER_ID="GOOGLE";let r=e;return r})(),E=(()=>{let e=class e{get authState(){return this._authState.asObservable()}get initState(){return this._initState.asObservable()}constructor(s,t,i){this._ngZone=t,this._injector=i,this.providers=new Map,this.autoLogin=!1,this._user=null,this._authState=new w(1),this.initialized=!1,this._initState=new k,s instanceof Promise?s.then(n=>{this.initialize(n)}):this.initialize(s)}initialize(s){this.autoLogin=s.autoLogin!==void 0?s.autoLogin:!1;let{onError:t=console.error}=s;s.providers.forEach(i=>{this.providers.set(i.id,"prototype"in i.provider?this._injector.get(i.provider):i.provider)}),Promise.all(Array.from(this.providers.values()).map(i=>i.initialize(this.autoLogin))).then(()=>{if(this.autoLogin){let i=[],n=!1;this.providers.forEach((o,a)=>{let T=o.getLoginStatus();i.push(T),T.then(L=>{this.setUser(L,a),n=!0}).catch(console.debug)}),Promise.all(i).catch(()=>{n||(this._user=null,this._authState.next(null))})}this.providers.forEach((i,n)=>{y(i.changeUser)&&i.changeUser.subscribe(o=>{this._ngZone.run(()=>{this.setUser(o,n)})})})}).catch(i=>{t(i)}).finally(()=>{this.initialized=!0,this._initState.next(this.initialized),this._initState.complete()})}getAccessToken(s){return h(this,null,function*(){let t=this.providers.get(s);if(this.initialized)if(t){if(!(t instanceof I))throw e.ERR_NOT_SUPPORTED_FOR_ACCESS_TOKEN}else throw e.ERR_LOGIN_PROVIDER_NOT_FOUND;else throw e.ERR_NOT_INITIALIZED;return yield t.getAccessToken()})}refreshAuthToken(s){return new Promise((t,i)=>{if(!this.initialized)i(e.ERR_NOT_INITIALIZED);else{let n=this.providers.get(s);n?typeof n.refreshToken!="function"?i(e.ERR_NOT_SUPPORTED_FOR_REFRESH_TOKEN):n.refreshToken().then(o=>{this.setUser(o,s),t()}).catch(o=>{i(o)}):i(e.ERR_LOGIN_PROVIDER_NOT_FOUND)}})}refreshAccessToken(s){return new Promise((t,i)=>{if(!this.initialized)i(e.ERR_NOT_INITIALIZED);else if(s!==I.PROVIDER_ID)i(e.ERR_NOT_SUPPORTED_FOR_REFRESH_TOKEN);else{let n=this.providers.get(s);n instanceof I?n.revokeAccessToken().then(t).catch(i):i(e.ERR_LOGIN_PROVIDER_NOT_FOUND)}})}signIn(s,t){return new Promise((i,n)=>{if(!this.initialized)n(e.ERR_NOT_INITIALIZED);else{let o=this.providers.get(s);o?o.signIn(t).then(a=>{this.setUser(a,s),i(a)}).catch(a=>{n(a)}):n(e.ERR_LOGIN_PROVIDER_NOT_FOUND)}})}signOut(s=!1){return new Promise((t,i)=>{if(!this.initialized)i(e.ERR_NOT_INITIALIZED);else if(!this._user)i(e.ERR_NOT_LOGGED_IN);else{let n=this._user.provider,o=this.providers.get(n);o?o.signOut(s).then(()=>{t(),this.setUser(null)}).catch(a=>{i(a)}):i(e.ERR_LOGIN_PROVIDER_NOT_FOUND)}})}setUser(s,t){s&&t&&(s.provider=t),this._user=s,this._authState.next(s)}};e.ERR_LOGIN_PROVIDER_NOT_FOUND="Login provider not found",e.ERR_NOT_LOGGED_IN="Not logged in",e.ERR_NOT_INITIALIZED="Login providers not ready yet. Are there errors on your console?",e.ERR_NOT_SUPPORTED_FOR_REFRESH_TOKEN="Chosen login provider is not supported for refreshing a token",e.ERR_NOT_SUPPORTED_FOR_ACCESS_TOKEN="Chosen login provider is not supported for getting an access token",e.\u0275fac=function(t){return new(t||e)(c("SocialAuthServiceConfig"),c(A),c(S))},e.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})(),H=(()=>{let e=class e{static initialize(s){return{ngModule:e,providers:[E,{provide:"SocialAuthServiceConfig",useValue:s}]}}constructor(s){if(s)throw new Error("SocialLoginModule is already loaded. Import it in the AppModule only")}};e.\u0275fac=function(t){return new(t||e)(c(e,12))},e.\u0275mod=g({type:e}),e.\u0275inj=f({providers:[E],imports:[U]});let r=e;return r})();var J=(()=>{let e=class e{constructor(s,t){this.type="icon",this.size="medium",this.text="signin_with",this.shape="rectangular",this.theme="outline",this.logo_alignment="left",this.width=0,this.locale="",t.initState.pipe(d(1)).subscribe(()=>{Promise.resolve(this.width).then(i=>{i>400||i<200&&i!=0?Promise.reject("Please note .. max-width 400 , min-width 200 (https://developers.google.com/identity/gsi/web/tools/configurator)"):google.accounts.id.renderButton(s.nativeElement,{type:this.type,size:this.size,text:this.text,width:this.width,shape:this.shape,theme:this.theme,logo_alignment:this.logo_alignment,locale:this.locale})})})}};e.\u0275fac=function(t){return new(t||e)(O(N),O(E))},e.\u0275dir=D({type:e,selectors:[["asl-google-signin-button"]],inputs:{type:"type",size:"size",text:"text",shape:"shape",theme:"theme",logo_alignment:"logo_alignment",width:"width",locale:"locale"}});let r=e;return r})(),Y=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=g({type:e}),e.\u0275inj=f({});let r=e;return r})();export{I as a,E as b,H as c,J as d,Y as e};
