(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Li=globalThis,cr=Li.ShadowRoot&&(Li.ShadyCSS===void 0||Li.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dr=Symbol(),Zr=new WeakMap;let Go=class{constructor(t,i,n){if(this._$cssResult$=!0,n!==dr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(cr&&t===void 0){const n=i!==void 0&&i.length===1;n&&(t=Zr.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Zr.set(i,t))}return t}toString(){return this.cssText}};const Wa=e=>new Go(typeof e=="string"?e:e+"",void 0,dr),x=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((n,r,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[o+1],e[0]);return new Go(i,e,dr)},qa=(e,t)=>{if(cr)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const n=document.createElement("style"),r=Li.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=i.cssText,e.appendChild(n)}},Kr=cr?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const n of t.cssRules)i+=n.cssText;return Wa(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Za,defineProperty:Ka,getOwnPropertyDescriptor:Ya,getOwnPropertyNames:Ja,getOwnPropertySymbols:Xa,getPrototypeOf:Qa}=Object,Ht=globalThis,Yr=Ht.trustedTypes,tl=Yr?Yr.emptyScript:"",Sn=Ht.reactiveElementPolyfillSupport,Je=(e,t)=>e,ji={toAttribute(e,t){switch(t){case Boolean:e=e?tl:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},ur=(e,t)=>!Za(e,t),Jr={attribute:!0,type:String,converter:ji,reflect:!1,useDefault:!1,hasChanged:ur};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ht.litPropertyMetadata??(Ht.litPropertyMetadata=new WeakMap);let ke=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=Jr){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(t,i),!i.noAccessor){const n=Symbol(),r=this.getPropertyDescriptor(t,n,i);r!==void 0&&Ka(this.prototype,t,r)}}static getPropertyDescriptor(t,i,n){const{get:r,set:o}=Ya(this.prototype,t)??{get(){return this[i]},set(s){this[i]=s}};return{get:r,set(s){const a=r==null?void 0:r.call(this);o==null||o.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Jr}static _$Ei(){if(this.hasOwnProperty(Je("elementProperties")))return;const t=Qa(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Je("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Je("properties"))){const i=this.properties,n=[...Ja(i),...Xa(i)];for(const r of n)this.createProperty(r,i[r])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[n,r]of i)this.elementProperties.set(n,r)}this._$Eh=new Map;for(const[i,n]of this.elementProperties){const r=this._$Eu(i,n);r!==void 0&&this._$Eh.set(r,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const r of n)i.unshift(Kr(r))}else t!==void 0&&i.push(Kr(t));return i}static _$Eu(t,i){const n=i.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(i=>i(this))}addController(t){var i;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var i;(i=this._$EO)==null||i.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const n of i.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return qa(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostConnected)==null?void 0:n.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostDisconnected)==null?void 0:n.call(i)})}attributeChangedCallback(t,i,n){this._$AK(t,n)}_$ET(t,i){var o;const n=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,n);if(r!==void 0&&n.reflect===!0){const s=(((o=n.converter)==null?void 0:o.toAttribute)!==void 0?n.converter:ji).toAttribute(i,n.type);this._$Em=t,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(t,i){var o,s;const n=this.constructor,r=n._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const a=n.getPropertyOptions(r),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:ji;this._$Em=r,this[r]=l.fromAttribute(i,a.type)??((s=this._$Ej)==null?void 0:s.get(r))??null,this._$Em=null}}requestUpdate(t,i,n){var r;if(t!==void 0){const o=this.constructor,s=this[t];if(n??(n=o.getPropertyOptions(t)),!((n.hasChanged??ur)(s,i)||n.useDefault&&n.reflect&&s===((r=this._$Ej)==null?void 0:r.get(t))&&!this.hasAttribute(o._$Eu(t,n))))return;this.C(t,i,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,i,{useDefault:n,reflect:r,wrapped:o},s){n&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,s??i??this[t]),o!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(i=void 0),this._$AL.set(t,i)),r===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,s]of r){const{wrapped:a}=s,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,s,l)}}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(n=this._$EO)==null||n.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(i)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(i)}willUpdate(t){}_$AE(t){var i;(i=this._$EO)==null||i.forEach(n=>{var r;return(r=n.hostUpdated)==null?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(i=>this._$ET(i,this[i]))),this._$EM()}updated(t){}firstUpdated(t){}};ke.elementStyles=[],ke.shadowRootOptions={mode:"open"},ke[Je("elementProperties")]=new Map,ke[Je("finalized")]=new Map,Sn==null||Sn({ReactiveElement:ke}),(Ht.reactiveElementVersions??(Ht.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xe=globalThis,Ui=Xe.trustedTypes,Xr=Ui?Ui.createPolicy("lit-html",{createHTML:e=>e}):void 0,Wo="$lit$",Ft=`lit$${Math.random().toFixed(9).slice(2)}$`,qo="?"+Ft,el=`<${qo}>`,le=document,ni=()=>le.createComment(""),ri=e=>e===null||typeof e!="object"&&typeof e!="function",hr=Array.isArray,il=e=>hr(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",An=`[ 	
\f\r]`,Ze=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Qr=/-->/g,to=/>/g,te=RegExp(`>|${An}(?:([^\\s"'>=/]+)(${An}*=${An}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),eo=/'/g,io=/"/g,Zo=/^(?:script|style|textarea|title)$/i,Ko=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),f=Ko(1),M=Ko(2),kt=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),no=new WeakMap,ne=le.createTreeWalker(le,129);function Yo(e,t){if(!hr(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Xr!==void 0?Xr.createHTML(t):t}const nl=(e,t)=>{const i=e.length-1,n=[];let r,o=t===2?"<svg>":t===3?"<math>":"",s=Ze;for(let a=0;a<i;a++){const l=e[a];let c,d,u=-1,h=0;for(;h<l.length&&(s.lastIndex=h,d=s.exec(l),d!==null);)h=s.lastIndex,s===Ze?d[1]==="!--"?s=Qr:d[1]!==void 0?s=to:d[2]!==void 0?(Zo.test(d[2])&&(r=RegExp("</"+d[2],"g")),s=te):d[3]!==void 0&&(s=te):s===te?d[0]===">"?(s=r??Ze,u=-1):d[1]===void 0?u=-2:(u=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?te:d[3]==='"'?io:eo):s===io||s===eo?s=te:s===Qr||s===to?s=Ze:(s=te,r=void 0);const p=s===te&&e[a+1].startsWith("/>")?" ":"";o+=s===Ze?l+el:u>=0?(n.push(c),l.slice(0,u)+Wo+l.slice(u)+Ft+p):l+Ft+(u===-2?a:p)}return[Yo(e,o+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};let Dn=class Jo{constructor({strings:t,_$litType$:i},n){let r;this.parts=[];let o=0,s=0;const a=t.length-1,l=this.parts,[c,d]=nl(t,i);if(this.el=Jo.createElement(c,n),ne.currentNode=this.el.content,i===2||i===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=ne.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const u of r.getAttributeNames())if(u.endsWith(Wo)){const h=d[s++],p=r.getAttribute(u).split(Ft),g=/([.?@])?(.*)/.exec(h);l.push({type:1,index:o,name:g[2],strings:p,ctor:g[1]==="."?ol:g[1]==="?"?sl:g[1]==="@"?al:en}),r.removeAttribute(u)}else u.startsWith(Ft)&&(l.push({type:6,index:o}),r.removeAttribute(u));if(Zo.test(r.tagName)){const u=r.textContent.split(Ft),h=u.length-1;if(h>0){r.textContent=Ui?Ui.emptyScript:"";for(let p=0;p<h;p++)r.append(u[p],ni()),ne.nextNode(),l.push({type:2,index:++o});r.append(u[h],ni())}}}else if(r.nodeType===8)if(r.data===qo)l.push({type:2,index:o});else{let u=-1;for(;(u=r.data.indexOf(Ft,u+1))!==-1;)l.push({type:7,index:o}),u+=Ft.length-1}o++}}static createElement(t,i){const n=le.createElement("template");return n.innerHTML=t,n}};function Te(e,t,i=e,n){var s,a;if(t===kt)return t;let r=n!==void 0?(s=i._$Co)==null?void 0:s[n]:i._$Cl;const o=ri(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),o===void 0?r=void 0:(r=new o(e),r._$AT(e,i,n)),n!==void 0?(i._$Co??(i._$Co=[]))[n]=r:i._$Cl=r),r!==void 0&&(t=Te(e,r._$AS(e,t.values),r,n)),t}let rl=class{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:n}=this._$AD,r=((t==null?void 0:t.creationScope)??le).importNode(i,!0);ne.currentNode=r;let o=ne.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new tn(o,o.nextSibling,this,t):l.type===1?c=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(c=new ll(o,this,t)),this._$AV.push(c),l=n[++a]}s!==(l==null?void 0:l.index)&&(o=ne.nextNode(),s++)}return ne.currentNode=le,r}p(t){let i=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,i),i+=n.strings.length-2):n._$AI(t[i])),i++}},tn=class Xo{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,i,n,r){this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=n,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=Te(this,t,i),ri(t)?t===D||t==null||t===""?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==kt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):il(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==D&&ri(this._$AH)?this._$AA.nextSibling.data=t:this.T(le.createTextNode(t)),this._$AH=t}$(t){var o;const{values:i,_$litType$:n}=t,r=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Dn.createElement(Yo(n.h,n.h[0]),this.options)),n);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(i);else{const s=new rl(r,this),a=s.u(this.options);s.p(i),this.T(a),this._$AH=s}}_$AC(t){let i=no.get(t.strings);return i===void 0&&no.set(t.strings,i=new Dn(t)),i}k(t){hr(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,r=0;for(const o of t)r===i.length?i.push(n=new Xo(this.O(ni()),this.O(ni()),this,this.options)):n=i[r],n._$AI(o),r++;r<i.length&&(this._$AR(n&&n._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,i){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,i);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var i;this._$AM===void 0&&(this._$Cv=t,(i=this._$AP)==null||i.call(this,t))}};class en{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,n,r,o){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=i,this._$AM=r,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=D}_$AI(t,i=this,n,r){const o=this.strings;let s=!1;if(o===void 0)t=Te(this,t,i,0),s=!ri(t)||t!==this._$AH&&t!==kt,s&&(this._$AH=t);else{const a=t;let l,c;for(t=o[0],l=0;l<o.length-1;l++)c=Te(this,a[n+l],i,l),c===kt&&(c=this._$AH[l]),s||(s=!ri(c)||c!==this._$AH[l]),c===D?t=D:t!==D&&(t+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!r&&this.j(t)}j(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}let ol=class extends en{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===D?void 0:t}};class sl extends en{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==D)}}let al=class extends en{constructor(t,i,n,r,o){super(t,i,n,r,o),this.type=5}_$AI(t,i=this){if((t=Te(this,t,i,0)??D)===kt)return;const n=this._$AH,r=t===D&&n!==D||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==D&&(n===D||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,t):this._$AH.handleEvent(t)}};class ll{constructor(t,i,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Te(this,t)}}const cl={I:tn},On=Xe.litHtmlPolyfillSupport;On==null||On(Dn,tn),(Xe.litHtmlVersions??(Xe.litHtmlVersions=[])).push("3.3.0");const dl=(e,t,i)=>{const n=(i==null?void 0:i.renderBefore)??t;let r=n._$litPart$;if(r===void 0){const o=(i==null?void 0:i.renderBefore)??null;n._$litPart$=r=new tn(t.insertBefore(ni(),o),o,void 0,i??{})}return r._$AI(e),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const se=globalThis;let R=class extends ke{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i;const t=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=t.firstChild),t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=dl(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return kt}};var Ho;R._$litElement$=!0,R.finalized=!0,(Ho=se.litElementHydrateSupport)==null||Ho.call(se,{LitElement:R});const kn=se.litElementPolyfillSupport;kn==null||kn({LitElement:R});(se.litElementVersions??(se.litElementVersions=[])).push("4.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=e=>(t,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ul={attribute:!0,type:String,converter:ji,reflect:!1,hasChanged:ur},hl=(e=ul,t,i)=>{const{kind:n,metadata:r}=i;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),o.set(i.name,e),n==="accessor"){const{name:s}=i;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,l,e)},init(a){return a!==void 0&&this.C(s,void 0,e,a),a}}}if(n==="setter"){const{name:s}=i;return function(a){const l=this[s];t.call(this,a),this.requestUpdate(s,l,e)}}throw Error("Unsupported decorator location: "+n)};function y(e){return(t,i)=>typeof i=="object"?hl(e,t,i):((n,r,o)=>{const s=r.hasOwnProperty(o);return r.constructor.createProperty(o,n),s?Object.getOwnPropertyDescriptor(r,o):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function L(e){return y({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pr=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function I(e,t){return(i,n,r)=>{const o=s=>{var a;return((a=s.renderRoot)==null?void 0:a.querySelector(e))??null};return pr(i,n,{get(){return o(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pl(e){return(t,i)=>{const{slot:n,selector:r}=e??{},o="slot"+(n?`[name=${n}]`:":not([name])");return pr(t,i,{get(){var l;const s=(l=this.renderRoot)==null?void 0:l.querySelector(o),a=(s==null?void 0:s.assignedElements(e))??[];return r===void 0?a:a.filter(c=>c.matches(r))}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fl(e){return(t,i)=>{const{slot:n}=e??{},r="slot"+(n?`[name=${n}]`:":not([name])");return pr(t,i,{get(){var s;const o=(s=this.renderRoot)==null?void 0:s.querySelector(r);return(o==null?void 0:o.assignedNodes(e))??[]}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nn={ATTRIBUTE:1,CHILD:2},rn=e=>(...t)=>({_$litDirective$:e,values:t});let on=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,n){this._$Ct=t,this._$AM=i,this._$Ci=n}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Bn=class extends on{constructor(t){if(super(t),this.it=D,t.type!==nn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===D||t==null)return this._t=void 0,this.it=t;if(t===kt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}};Bn.directiveName="unsafeHTML",Bn.resultType=1;const fr=rn(Bn);var gl=Object.defineProperty,vl=Object.getOwnPropertyDescriptor,sn=(e,t,i,n)=>{for(var r=n>1?void 0:n?vl(t,i):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=(n?s(t,i,r):s(r))||r);return n&&r&&gl(t,i,r),r};let Le=class extends R{constructor(){super(...arguments),this.label="",this.placeholder="",this.value=""}render(){return f`
      ${this.label?f`<label>${this.label}</label>`:null}
      <textarea
        placeholder=${this.placeholder}
        .value=${this.value}
        @input=${this._onInput}
      ></textarea>
    `}_onInput(e){const t=e.target;this.value=t.value,this.dispatchEvent(new CustomEvent("input-change",{detail:{value:this.value},bubbles:!0,composed:!0}))}};Le.styles=x`
    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }

    textarea {
      width: 100%;
      font-size: 1rem;
      padding: 0.75rem;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-sizing: border-box;
      font-family: inherit;
      min-height: 120px;
      resize: none;
      background-color: #f5e9dc;
    }

    textarea:focus {
      border-color: blue;
      outline: none;
    }
  `;sn([y({type:String})],Le.prototype,"label",2);sn([y({type:String})],Le.prototype,"placeholder",2);sn([y({type:String})],Le.prototype,"value",2);Le=sn([z("custom-textarea")],Le);var ml=Object.defineProperty,bl=Object.getOwnPropertyDescriptor,gr=(e,t,i,n)=>{for(var r=n>1?void 0:n?bl(t,i):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=(n?s(t,i,r):s(r))||r);return n&&r&&ml(t,i,r),r};let oi=class extends R{constructor(){super(...arguments),this.label="Click",this.disabled=!1}render(){return f`<button
      .disabled=${this.disabled}
      @click=${this._onClick}
    >
      ${this.label}
    </button>`}_onClick(e){this.disabled||(e.preventDefault(),this.dispatchEvent(new CustomEvent("button-click",{detail:{label:this.label},bubbles:!0,composed:!0})))}};oi.styles=x`
    button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      border: none;
      border-radius: 6px;
      background-color: #007bff;
      color: white;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }

    button:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
  `;gr([y({type:String})],oi.prototype,"label",2);gr([y({type:Boolean})],oi.prototype,"disabled",2);oi=gr([z("custom-button")],oi);var yl=Object.defineProperty,_l=Object.getOwnPropertyDescriptor,vr=(e,t,i,n)=>{for(var r=n>1?void 0:n?_l(t,i):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=(n?s(t,i,r):s(r))||r);return n&&r&&yl(t,i,r),r};let si=class extends R{constructor(){super(...arguments),this.title="",this.text=""}render(){return f`
      <div class="card__container">
        ${this.title?f`<div class="card__title">${this.title}</div>`:null}
        ${this.text?f`<div class="card__text">${this.text}</div>`:null}
        <div class="card__content">
          <slot></slot>
        </div>
      </div>
    `}};si.styles=x`
    .card__container {
      width: 100%;
      max-width: 600px;
      box-sizing: border-box;
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
      background: #fff;
      font-family: sans-serif;
    }

    .card__content {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .card__title {
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    .card__text {
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }
  `;vr([y({type:String})],si.prototype,"title",2);vr([y({type:String})],si.prototype,"text",2);si=vr([z("custom-card")],si);var wl=Object.defineProperty,Cl=Object.getOwnPropertyDescriptor,an=(e,t,i,n)=>{for(var r=n>1?void 0:n?Cl(t,i):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=(n?s(t,i,r):s(r))||r);return n&&r&&wl(t,i,r),r};let Ie=class extends R{constructor(){super(...arguments),this.label="",this.placeholder="",this.value=""}render(){return f`
      ${this.label?f`<label>${this.label}</label>`:null}
      <input
        type="text"
        placeholder=${this.placeholder}
        .value=${this.value}
        @input=${this._onInput}
      ></input>
    `}_onInput(e){const t=e.target;this.value=t.value,this.dispatchEvent(new CustomEvent("input-change",{detail:{value:this.value},bubbles:!0,composed:!0}))}};Ie.styles=x`
    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }

    input {
      width: 100%;
      font-size: 1rem;
      padding: 0.75rem;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-sizing: border-box;
      background-color: #f5e9dc;
    }

    input:focus {
      border-color: blue;
      outline: none;
    }
  `;an([y({type:String})],Ie.prototype,"label",2);an([y({type:String})],Ie.prototype,"placeholder",2);an([y({type:String})],Ie.prototype,"value",2);Ie=an([z("custom-textinput")],Ie);var xl=Object.defineProperty,Sl=Object.getOwnPropertyDescriptor,mr=(e,t,i,n)=>{for(var r=n>1?void 0:n?Sl(t,i):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=(n?s(t,i,r):s(r))||r);return n&&r&&xl(t,i,r),r};let ai=class extends R{constructor(){super(...arguments),this.title="",this.text=""}render(){return f`
     <custom-card .title=${this.title} text="">
        <div class="highlight">
          ${fr(this.text)}
        </div>
      </custom-card>
    `}};ai.styles=x`
    .highlight .med {
      color: blue;
      font-weight: bold;
    }
    .highlight .symptom {
      color: red;
      font-weight: bold;
    }
    .highlight .action {
      color: green;
      font-weight: bold;
    }
  `;mr([y({type:String})],ai.prototype,"title",2);mr([y({type:String})],ai.prototype,"text",2);ai=mr([z("transcript-card")],ai);const Ae=Symbol("LitMobxRenderReaction"),ro=Symbol("LitMobxRequestUpdate");function Al(e,t){var i,n;return n=class extends e{constructor(){super(...arguments),this[i]=()=>{this.requestUpdate()}}connectedCallback(){super.connectedCallback();const o=this.constructor.name||this.nodeName;this[Ae]=new t(`${o}.update()`,this[ro]),this.hasUpdated&&this.requestUpdate()}disconnectedCallback(){super.disconnectedCallback(),this[Ae]&&(this[Ae].dispose(),this[Ae]=void 0)}update(o){this[Ae]?this[Ae].track(super.update.bind(this,o)):super.update(o)}},i=ro,n}function E(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];throw new Error(typeof e=="number"?"[MobX] minified error nr: "+e+(i.length?" "+i.map(String).join(","):"")+". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts":"[MobX] "+e)}var Ol={};function br(){return typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:Ol}var Qo=Object.assign,Ni=Object.getOwnPropertyDescriptor,xt=Object.defineProperty,ln=Object.prototype,jn=[];Object.freeze(jn);var ts={};Object.freeze(ts);var kl=typeof Proxy<"u",El=Object.toString();function es(){kl||E("Proxy not available")}function is(e){var t=!1;return function(){if(!t)return t=!0,e.apply(this,arguments)}}var Ee=function(){};function ut(e){return typeof e=="function"}function ce(e){var t=typeof e;switch(t){case"string":case"symbol":case"number":return!0}return!1}function cn(e){return e!==null&&typeof e=="object"}function It(e){if(!cn(e))return!1;var t=Object.getPrototypeOf(e);if(t==null)return!0;var i=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return typeof i=="function"&&i.toString()===El}function ns(e){var t=e==null?void 0:e.constructor;return t?t.name==="GeneratorFunction"||t.displayName==="GeneratorFunction":!1}function dn(e,t,i){xt(e,t,{enumerable:!1,writable:!0,configurable:!0,value:i})}function rs(e,t,i){xt(e,t,{enumerable:!1,writable:!1,configurable:!0,value:i})}function ve(e,t){var i="isMobX"+e;return t.prototype[i]=!0,function(n){return cn(n)&&n[i]===!0}}function Ve(e){return e!=null&&Object.prototype.toString.call(e)==="[object Map]"}function Pl(e){var t=Object.getPrototypeOf(e),i=Object.getPrototypeOf(t),n=Object.getPrototypeOf(i);return n===null}function Rt(e){return e!=null&&Object.prototype.toString.call(e)==="[object Set]"}var os=typeof Object.getOwnPropertySymbols<"u";function $l(e){var t=Object.keys(e);if(!os)return t;var i=Object.getOwnPropertySymbols(e);return i.length?[].concat(t,i.filter(function(n){return ln.propertyIsEnumerable.call(e,n)})):t}var li=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:os?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames;function ss(e){return e===null?null:typeof e=="object"?""+e:e}function Gt(e,t){return ln.hasOwnProperty.call(e,t)}var Ml=Object.getOwnPropertyDescriptors||function(t){var i={};return li(t).forEach(function(n){i[n]=Ni(t,n)}),i};function Z(e,t){return!!(e&t)}function K(e,t,i){return i?e|=t:e&=~t,e}function oo(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,n=Array(t);i<t;i++)n[i]=e[i];return n}function Rl(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,Ll(n.key),n)}}function Fe(e,t,i){return t&&Rl(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Pe(e,t){var i=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(i)return(i=i.call(e)).next.bind(i);if(Array.isArray(e)||(i=Il(e))||t){i&&(e=i);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function De(){return De=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)({}).hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},De.apply(null,arguments)}function as(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Un(e,t)}function Un(e,t){return Un=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,n){return i.__proto__=n,i},Un(e,t)}function Tl(e,t){if(typeof e!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var n=i.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function Ll(e){var t=Tl(e,"string");return typeof t=="symbol"?t:t+""}function Il(e,t){if(e){if(typeof e=="string")return oo(e,t);var i={}.toString.call(e).slice(8,-1);return i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set"?Array.from(e):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?oo(e,t):void 0}}var $e=Symbol("mobx-stored-annotations");function St(e){function t(i,n){if(bi(n))return e.decorate_20223_(i,n);mi(i,n,e)}return Object.assign(t,e)}function mi(e,t,i){Gt(e,$e)||dn(e,$e,De({},e[$e])),Vl(i)||(e[$e][t]=i)}function bi(e){return typeof e=="object"&&typeof e.kind=="string"}var _=Symbol("mobx administration"),Jt=function(){function e(i){i===void 0&&(i="Atom"),this.name_=void 0,this.flags_=0,this.observers_=new Set,this.lastAccessedBy_=0,this.lowestObserverState_=k.NOT_TRACKING_,this.onBOL=void 0,this.onBUOL=void 0,this.name_=i}var t=e.prototype;return t.onBO=function(){this.onBOL&&this.onBOL.forEach(function(n){return n()})},t.onBUO=function(){this.onBUOL&&this.onBUOL.forEach(function(n){return n()})},t.reportObserved=function(){return xs(this)},t.reportChanged=function(){nt(),Ss(this),rt()},t.toString=function(){return this.name_},Fe(e,[{key:"isBeingObserved",get:function(){return Z(this.flags_,e.isBeingObservedMask_)},set:function(n){this.flags_=K(this.flags_,e.isBeingObservedMask_,n)}},{key:"isPendingUnobservation",get:function(){return Z(this.flags_,e.isPendingUnobservationMask_)},set:function(n){this.flags_=K(this.flags_,e.isPendingUnobservationMask_,n)}},{key:"diffValue",get:function(){return Z(this.flags_,e.diffValueMask_)?1:0},set:function(n){this.flags_=K(this.flags_,e.diffValueMask_,n===1)}}])}();Jt.isBeingObservedMask_=1;Jt.isPendingUnobservationMask_=2;Jt.diffValueMask_=4;var yr=ve("Atom",Jt);function ls(e,t,i){t===void 0&&(t=Ee),i===void 0&&(i=Ee);var n=new Jt(e);return t!==Ee&&Fc(n,t),i!==Ee&&$s(n,i),n}function Dl(e,t){return Fs(e,t)}function Bl(e,t){return Object.is?Object.is(e,t):e===t?e!==0||1/e===1/t:e!==e&&t!==t}var Vi={structural:Dl,default:Bl};function de(e,t,i){return Ls(e)?e:Array.isArray(e)?F.array(e,{name:i}):It(e)?F.object(e,void 0,{name:i}):Ve(e)?F.map(e,{name:i}):Rt(e)?F.set(e,{name:i}):typeof e=="function"&&!di(e)&&!ui(e)?ns(e)?Be(e):ci(i,e):e}function jl(e,t,i){if(e==null||vn(e)||gn(e)||be(e)||_t(e))return e;if(Array.isArray(e))return F.array(e,{name:i,deep:!1});if(It(e))return F.object(e,void 0,{name:i,deep:!1});if(Ve(e))return F.map(e,{name:i,deep:!1});if(Rt(e))return F.set(e,{name:i,deep:!1})}function un(e){return e}function Ul(e,t){return Fs(e,t)?t:e}var Nl="override";function Vl(e){return e.annotationType_===Nl}function yi(e,t){return{annotationType_:e,options_:t,make_:Fl,extend_:zl,decorate_20223_:Hl}}function Fl(e,t,i,n){var r;if((r=this.options_)!=null&&r.bound)return this.extend_(e,t,i,!1)===null?0:1;if(n===e.target_)return this.extend_(e,t,i,!1)===null?0:2;if(di(i.value))return 1;var o=cs(e,this,t,i,!1);return xt(n,t,o),2}function zl(e,t,i,n){var r=cs(e,this,t,i);return e.defineProperty_(t,r,n)}function Hl(e,t){var i=t.kind,n=t.name,r=t.addInitializer,o=this,s=function(c){var d,u,h,p;return ue((d=(u=o.options_)==null?void 0:u.name)!=null?d:n.toString(),c,(h=(p=o.options_)==null?void 0:p.autoAction)!=null?h:!1)};if(i=="field")return function(l){var c,d=l;return di(d)||(d=s(d)),(c=o.options_)!=null&&c.bound&&(d=d.bind(this),d.isMobxAction=!0),d};if(i=="method"){var a;return di(e)||(e=s(e)),(a=this.options_)!=null&&a.bound&&r(function(){var l=this,c=l[n].bind(l);c.isMobxAction=!0,l[n]=c}),e}E("Cannot apply '"+o.annotationType_+"' to '"+String(n)+"' (kind: "+i+"):"+(`
'`+o.annotationType_+"' can only be used on properties with a function value."))}function Gl(e,t,i,n){t.annotationType_,n.value}function cs(e,t,i,n,r){var o,s,a,l,c,d,u;r===void 0&&(r=m.safeDescriptors),Gl(e,t,i,n);var h=n.value;if((o=t.options_)!=null&&o.bound){var p;h=h.bind((p=e.proxy_)!=null?p:e.target_)}return{value:ue((s=(a=t.options_)==null?void 0:a.name)!=null?s:i.toString(),h,(l=(c=t.options_)==null?void 0:c.autoAction)!=null?l:!1,(d=t.options_)!=null&&d.bound?(u=e.proxy_)!=null?u:e.target_:void 0),configurable:r?e.isPlainObject_:!0,enumerable:!1,writable:!r}}function ds(e,t){return{annotationType_:e,options_:t,make_:Wl,extend_:ql,decorate_20223_:Zl}}function Wl(e,t,i,n){var r;if(n===e.target_)return this.extend_(e,t,i,!1)===null?0:2;if((r=this.options_)!=null&&r.bound&&(!Gt(e.target_,t)||!ui(e.target_[t]))&&this.extend_(e,t,i,!1)===null)return 0;if(ui(i.value))return 1;var o=us(e,this,t,i,!1,!1);return xt(n,t,o),2}function ql(e,t,i,n){var r,o=us(e,this,t,i,(r=this.options_)==null?void 0:r.bound);return e.defineProperty_(t,o,n)}function Zl(e,t){var i,n=t.name,r=t.addInitializer;return ui(e)||(e=Be(e)),(i=this.options_)!=null&&i.bound&&r(function(){var o=this,s=o[n].bind(o);s.isMobXFlow=!0,o[n]=s}),e}function Kl(e,t,i,n){t.annotationType_,n.value}function us(e,t,i,n,r,o){o===void 0&&(o=m.safeDescriptors),Kl(e,t,i,n);var s=n.value;if(ui(s)||(s=Be(s)),r){var a;s=s.bind((a=e.proxy_)!=null?a:e.target_),s.isMobXFlow=!0}return{value:s,configurable:o?e.isPlainObject_:!0,enumerable:!1,writable:!o}}function _r(e,t){return{annotationType_:e,options_:t,make_:Yl,extend_:Jl,decorate_20223_:Xl}}function Yl(e,t,i){return this.extend_(e,t,i,!1)===null?0:1}function Jl(e,t,i,n){return Ql(e,this,t,i),e.defineComputedProperty_(t,De({},this.options_,{get:i.get,set:i.set}),n)}function Xl(e,t){var i=this,n=t.name,r=t.addInitializer;return r(function(){var o=ze(this)[_],s=De({},i.options_,{get:e,context:this});s.name||(s.name="ObservableObject."+n.toString()),o.values_.set(n,new ht(s))}),function(){return this[_].getObservablePropValue_(n)}}function Ql(e,t,i,n){t.annotationType_,n.get}function hn(e,t){return{annotationType_:e,options_:t,make_:tc,extend_:ec,decorate_20223_:ic}}function tc(e,t,i){return this.extend_(e,t,i,!1)===null?0:1}function ec(e,t,i,n){var r,o;return nc(e,this),e.defineObservableProperty_(t,i.value,(r=(o=this.options_)==null?void 0:o.enhancer)!=null?r:de,n)}function ic(e,t){var i=this,n=t.kind,r=t.name,o=new WeakSet;function s(a,l){var c,d,u=ze(a)[_],h=new ae(l,(c=(d=i.options_)==null?void 0:d.enhancer)!=null?c:de,"ObservableObject."+r.toString(),!1);u.values_.set(r,h),o.add(a)}if(n=="accessor")return{get:function(){return o.has(this)||s(this,e.get.call(this)),this[_].getObservablePropValue_(r)},set:function(l){return o.has(this)||s(this,l),this[_].setObservablePropValue_(r,l)},init:function(l){return o.has(this)||s(this,l),l}}}function nc(e,t,i,n){t.annotationType_}var rc="true",oc=hs();function hs(e){return{annotationType_:rc,options_:e,make_:sc,extend_:ac,decorate_20223_:lc}}function sc(e,t,i,n){var r,o;if(i.get)return pn.make_(e,t,i,n);if(i.set){var s=ue(t.toString(),i.set);return n===e.target_?e.defineProperty_(t,{configurable:m.safeDescriptors?e.isPlainObject_:!0,set:s})===null?0:2:(xt(n,t,{configurable:!0,set:s}),2)}if(n!==e.target_&&typeof i.value=="function"){var a;if(ns(i.value)){var l,c=(l=this.options_)!=null&&l.autoBind?Be.bound:Be;return c.make_(e,t,i,n)}var d=(a=this.options_)!=null&&a.autoBind?ci.bound:ci;return d.make_(e,t,i,n)}var u=((r=this.options_)==null?void 0:r.deep)===!1?F.ref:F;if(typeof i.value=="function"&&(o=this.options_)!=null&&o.autoBind){var h;i.value=i.value.bind((h=e.proxy_)!=null?h:e.target_)}return u.make_(e,t,i,n)}function ac(e,t,i,n){var r,o;if(i.get)return pn.extend_(e,t,i,n);if(i.set)return e.defineProperty_(t,{configurable:m.safeDescriptors?e.isPlainObject_:!0,set:ue(t.toString(),i.set)},n);if(typeof i.value=="function"&&(r=this.options_)!=null&&r.autoBind){var s;i.value=i.value.bind((s=e.proxy_)!=null?s:e.target_)}var a=((o=this.options_)==null?void 0:o.deep)===!1?F.ref:F;return a.extend_(e,t,i,n)}function lc(e,t){E("'"+this.annotationType_+"' cannot be used as a decorator")}var cc="observable",dc="observable.ref",uc="observable.shallow",hc="observable.struct",ps={deep:!0,name:void 0,defaultDecorator:void 0,proxy:!0};Object.freeze(ps);function Ei(e){return e||ps}var Nn=hn(cc),pc=hn(dc,{enhancer:un}),fc=hn(uc,{enhancer:jl}),gc=hn(hc,{enhancer:Ul}),fs=St(Nn);function Pi(e){return e.deep===!0?de:e.deep===!1?un:mc(e.defaultDecorator)}function vc(e){var t;return e?(t=e.defaultDecorator)!=null?t:hs(e):void 0}function mc(e){var t,i;return e&&(t=(i=e.options_)==null?void 0:i.enhancer)!=null?t:de}function gs(e,t,i){if(bi(t))return Nn.decorate_20223_(e,t);if(ce(t)){mi(e,t,Nn);return}return Ls(e)?e:It(e)?F.object(e,t,i):Array.isArray(e)?F.array(e,t):Ve(e)?F.map(e,t):Rt(e)?F.set(e,t):typeof e=="object"&&e!==null?e:F.box(e,t)}Qo(gs,fs);var bc={box:function(t,i){var n=Ei(i);return new ae(t,Pi(n),n.name,!0,n.equals)},array:function(t,i){var n=Ei(i);return(m.useProxies===!1||n.proxy===!1?sd:Yc)(t,Pi(n),n.name)},map:function(t,i){var n=Ei(i);return new Ds(t,Pi(n),n.name)},set:function(t,i){var n=Ei(i);return new Bs(t,Pi(n),n.name)},object:function(t,i,n){return ye(function(){return Rs(m.useProxies===!1||(n==null?void 0:n.proxy)===!1?ze({},n):qc({},n),t,i)})},ref:St(pc),shallow:St(fc),deep:fs,struct:St(gc)},F=Qo(gs,bc),vs="computed",yc="computed.struct",Vn=_r(vs),_c=_r(yc,{equals:Vi.structural}),pn=function(t,i){if(bi(i))return Vn.decorate_20223_(t,i);if(ce(i))return mi(t,i,Vn);if(It(t))return St(_r(vs,t));var n=It(i)?i:{};return n.get=t,n.name||(n.name=t.name||""),new ht(n)};Object.assign(pn,Vn);pn.struct=St(_c);var so,ao,Fi=0,wc=1,Cc=(so=(ao=Ni(function(){},"name"))==null?void 0:ao.configurable)!=null?so:!1,lo={value:"action",configurable:!0,writable:!1,enumerable:!1};function ue(e,t,i,n){i===void 0&&(i=!1);function r(){return ms(e,i,t,n||this,arguments)}return r.isMobxAction=!0,r.toString=function(){return t.toString()},Cc&&(lo.value=e,xt(r,"name",lo)),r}function ms(e,t,i,n,r){var o=xc(e,t);try{return i.apply(n,r)}catch(s){throw o.error_=s,s}finally{Sc(o)}}function xc(e,t,i,n){var r=!1,o=0,s=m.trackingDerivation,a=!t||!s;nt();var l=m.allowStateChanges;a&&(me(),l=wr(!0));var c=xr(!0),d={runAsAction_:a,prevDerivation_:s,prevAllowStateChanges_:l,prevAllowStateReads_:c,notifySpy_:r,startTime_:o,actionId_:wc++,parentActionId_:Fi};return Fi=d.actionId_,d}function Sc(e){Fi!==e.actionId_&&E(30),Fi=e.parentActionId_,e.error_!==void 0&&(m.suppressReactionErrors=!0),Cr(e.prevAllowStateChanges_),Qe(e.prevAllowStateReads_),rt(),e.runAsAction_&&Lt(e.prevDerivation_),m.suppressReactionErrors=!1}function wr(e){var t=m.allowStateChanges;return m.allowStateChanges=e,t}function Cr(e){m.allowStateChanges=e}var ae=function(e){function t(n,r,o,s,a){var l;return o===void 0&&(o="ObservableValue"),a===void 0&&(a=Vi.default),l=e.call(this,o)||this,l.enhancer=void 0,l.name_=void 0,l.equals=void 0,l.hasUnreportedChange_=!1,l.interceptors_=void 0,l.changeListeners_=void 0,l.value_=void 0,l.dehancer=void 0,l.enhancer=r,l.name_=o,l.equals=a,l.value_=r(n,void 0,o),l}as(t,e);var i=t.prototype;return i.dehanceValue=function(r){return this.dehancer!==void 0?this.dehancer(r):r},i.set=function(r){this.value_,r=this.prepareNewValue_(r),r!==m.UNCHANGED&&this.setNewValue_(r)},i.prepareNewValue_=function(r){if(tt(this)){var o=et(this,{object:this,type:At,newValue:r});if(!o)return m.UNCHANGED;r=o.newValue}return r=this.enhancer(r,this.value_,this.name_),this.equals(this.value_,r)?m.UNCHANGED:r},i.setNewValue_=function(r){var o=this.value_;this.value_=r,this.reportChanged(),ct(this)&&dt(this,{type:At,object:this,newValue:r,oldValue:o})},i.get=function(){return this.reportObserved(),this.dehanceValue(this.value_)},i.intercept_=function(r){return _i(this,r)},i.observe_=function(r,o){return o&&r({observableKind:"value",debugObjectName:this.name_,object:this,type:At,newValue:this.value_,oldValue:void 0}),wi(this,r)},i.raw=function(){return this.value_},i.toJSON=function(){return this.get()},i.toString=function(){return this.name_+"["+this.value_+"]"},i.valueOf=function(){return ss(this.get())},i[Symbol.toPrimitive]=function(){return this.valueOf()},t}(Jt),ht=function(){function e(i){this.dependenciesState_=k.NOT_TRACKING_,this.observing_=[],this.newObserving_=null,this.observers_=new Set,this.runId_=0,this.lastAccessedBy_=0,this.lowestObserverState_=k.UP_TO_DATE_,this.unboundDepsCount_=0,this.value_=new Hi(null),this.name_=void 0,this.triggeredBy_=void 0,this.flags_=0,this.derivation=void 0,this.setter_=void 0,this.isTracing_=zi.NONE,this.scope_=void 0,this.equals_=void 0,this.requiresReaction_=void 0,this.keepAlive_=void 0,this.onBOL=void 0,this.onBUOL=void 0,i.get||E(31),this.derivation=i.get,this.name_=i.name||"ComputedValue",i.set&&(this.setter_=ue("ComputedValue-setter",i.set)),this.equals_=i.equals||(i.compareStructural||i.struct?Vi.structural:Vi.default),this.scope_=i.context,this.requiresReaction_=i.requiresReaction,this.keepAlive_=!!i.keepAlive}var t=e.prototype;return t.onBecomeStale_=function(){Ec(this)},t.onBO=function(){this.onBOL&&this.onBOL.forEach(function(n){return n()})},t.onBUO=function(){this.onBUOL&&this.onBUOL.forEach(function(n){return n()})},t.get=function(){if(this.isComputing&&E(32,this.name_,this.derivation),m.inBatch===0&&this.observers_.size===0&&!this.keepAlive_)Fn(this)&&(this.warnAboutUntrackedRead_(),nt(),this.value_=this.computeValue_(!1),rt());else if(xs(this),Fn(this)){var n=m.trackingContext;this.keepAlive_&&!n&&(m.trackingContext=this),this.trackAndCompute()&&kc(this),m.trackingContext=n}var r=this.value_;if(Ii(r))throw r.cause;return r},t.set=function(n){if(this.setter_){this.isRunningSetter&&E(33,this.name_),this.isRunningSetter=!0;try{this.setter_.call(this.scope_,n)}finally{this.isRunningSetter=!1}}else E(34,this.name_)},t.trackAndCompute=function(){var n=this.value_,r=this.dependenciesState_===k.NOT_TRACKING_,o=this.computeValue_(!0),s=r||Ii(n)||Ii(o)||!this.equals_(n,o);return s&&(this.value_=o),s},t.computeValue_=function(n){this.isComputing=!0;var r=wr(!1),o;if(n)o=bs(this,this.derivation,this.scope_);else if(m.disableErrorBoundaries===!0)o=this.derivation.call(this.scope_);else try{o=this.derivation.call(this.scope_)}catch(s){o=new Hi(s)}return Cr(r),this.isComputing=!1,o},t.suspend_=function(){this.keepAlive_||(zn(this),this.value_=void 0)},t.observe_=function(n,r){var o=this,s=!0,a=void 0;return Bc(function(){var l=o.get();if(!s||r){var c=me();n({observableKind:"computed",debugObjectName:o.name_,type:At,object:o,newValue:l,oldValue:a}),Lt(c)}s=!1,a=l})},t.warnAboutUntrackedRead_=function(){},t.toString=function(){return this.name_+"["+this.derivation.toString()+"]"},t.valueOf=function(){return ss(this.get())},t[Symbol.toPrimitive]=function(){return this.valueOf()},Fe(e,[{key:"isComputing",get:function(){return Z(this.flags_,e.isComputingMask_)},set:function(n){this.flags_=K(this.flags_,e.isComputingMask_,n)}},{key:"isRunningSetter",get:function(){return Z(this.flags_,e.isRunningSetterMask_)},set:function(n){this.flags_=K(this.flags_,e.isRunningSetterMask_,n)}},{key:"isBeingObserved",get:function(){return Z(this.flags_,e.isBeingObservedMask_)},set:function(n){this.flags_=K(this.flags_,e.isBeingObservedMask_,n)}},{key:"isPendingUnobservation",get:function(){return Z(this.flags_,e.isPendingUnobservationMask_)},set:function(n){this.flags_=K(this.flags_,e.isPendingUnobservationMask_,n)}},{key:"diffValue",get:function(){return Z(this.flags_,e.diffValueMask_)?1:0},set:function(n){this.flags_=K(this.flags_,e.diffValueMask_,n===1)}}])}();ht.isComputingMask_=1;ht.isRunningSetterMask_=2;ht.isBeingObservedMask_=4;ht.isPendingUnobservationMask_=8;ht.diffValueMask_=16;var fn=ve("ComputedValue",ht),k;(function(e){e[e.NOT_TRACKING_=-1]="NOT_TRACKING_",e[e.UP_TO_DATE_=0]="UP_TO_DATE_",e[e.POSSIBLY_STALE_=1]="POSSIBLY_STALE_",e[e.STALE_=2]="STALE_"})(k||(k={}));var zi;(function(e){e[e.NONE=0]="NONE",e[e.LOG=1]="LOG",e[e.BREAK=2]="BREAK"})(zi||(zi={}));var Hi=function(t){this.cause=void 0,this.cause=t};function Ii(e){return e instanceof Hi}function Fn(e){switch(e.dependenciesState_){case k.UP_TO_DATE_:return!1;case k.NOT_TRACKING_:case k.STALE_:return!0;case k.POSSIBLY_STALE_:{for(var t=xr(!0),i=me(),n=e.observing_,r=n.length,o=0;o<r;o++){var s=n[o];if(fn(s)){if(m.disableErrorBoundaries)s.get();else try{s.get()}catch{return Lt(i),Qe(t),!0}if(e.dependenciesState_===k.STALE_)return Lt(i),Qe(t),!0}}return _s(e),Lt(i),Qe(t),!1}}}function bs(e,t,i){var n=xr(!0);_s(e),e.newObserving_=new Array(e.runId_===0?100:e.observing_.length),e.unboundDepsCount_=0,e.runId_=++m.runId;var r=m.trackingDerivation;m.trackingDerivation=e,m.inBatch++;var o;if(m.disableErrorBoundaries===!0)o=t.call(i);else try{o=t.call(i)}catch(s){o=new Hi(s)}return m.inBatch--,m.trackingDerivation=r,Ac(e),Qe(n),o}function Ac(e){for(var t=e.observing_,i=e.observing_=e.newObserving_,n=k.UP_TO_DATE_,r=0,o=e.unboundDepsCount_,s=0;s<o;s++){var a=i[s];a.diffValue===0&&(a.diffValue=1,r!==s&&(i[r]=a),r++),a.dependenciesState_>n&&(n=a.dependenciesState_)}for(i.length=r,e.newObserving_=null,o=t.length;o--;){var l=t[o];l.diffValue===0&&ws(l,e),l.diffValue=0}for(;r--;){var c=i[r];c.diffValue===1&&(c.diffValue=0,Oc(c,e))}n!==k.UP_TO_DATE_&&(e.dependenciesState_=n,e.onBecomeStale_())}function zn(e){var t=e.observing_;e.observing_=[];for(var i=t.length;i--;)ws(t[i],e);e.dependenciesState_=k.NOT_TRACKING_}function ys(e){var t=me();try{return e()}finally{Lt(t)}}function me(){var e=m.trackingDerivation;return m.trackingDerivation=null,e}function Lt(e){m.trackingDerivation=e}function xr(e){var t=m.allowStateReads;return m.allowStateReads=e,t}function Qe(e){m.allowStateReads=e}function _s(e){if(e.dependenciesState_!==k.UP_TO_DATE_){e.dependenciesState_=k.UP_TO_DATE_;for(var t=e.observing_,i=t.length;i--;)t[i].lowestObserverState_=k.UP_TO_DATE_}}var En=function(){this.version=6,this.UNCHANGED={},this.trackingDerivation=null,this.trackingContext=null,this.runId=0,this.mobxGuid=0,this.inBatch=0,this.pendingUnobservations=[],this.pendingReactions=[],this.isRunningReactions=!1,this.allowStateChanges=!1,this.allowStateReads=!0,this.enforceActions=!0,this.spyListeners=[],this.globalReactionErrorHandlers=[],this.computedRequiresReaction=!1,this.reactionRequiresObservable=!1,this.observableRequiresReaction=!1,this.disableErrorBoundaries=!1,this.suppressReactionErrors=!1,this.useProxies=!0,this.verifyProxies=!1,this.safeDescriptors=!0},Pn=!0,m=function(){var e=br();return e.__mobxInstanceCount>0&&!e.__mobxGlobals&&(Pn=!1),e.__mobxGlobals&&e.__mobxGlobals.version!==new En().version&&(Pn=!1),Pn?e.__mobxGlobals?(e.__mobxInstanceCount+=1,e.__mobxGlobals.UNCHANGED||(e.__mobxGlobals.UNCHANGED={}),e.__mobxGlobals):(e.__mobxInstanceCount=1,e.__mobxGlobals=new En):(setTimeout(function(){E(35)},1),new En)}();function Oc(e,t){e.observers_.add(t),e.lowestObserverState_>t.dependenciesState_&&(e.lowestObserverState_=t.dependenciesState_)}function ws(e,t){e.observers_.delete(t),e.observers_.size===0&&Cs(e)}function Cs(e){e.isPendingUnobservation===!1&&(e.isPendingUnobservation=!0,m.pendingUnobservations.push(e))}function nt(){m.inBatch++}function rt(){if(--m.inBatch===0){As();for(var e=m.pendingUnobservations,t=0;t<e.length;t++){var i=e[t];i.isPendingUnobservation=!1,i.observers_.size===0&&(i.isBeingObserved&&(i.isBeingObserved=!1,i.onBUO()),i instanceof ht&&i.suspend_())}m.pendingUnobservations=[]}}function xs(e){var t=m.trackingDerivation;return t!==null?(t.runId_!==e.lastAccessedBy_&&(e.lastAccessedBy_=t.runId_,t.newObserving_[t.unboundDepsCount_++]=e,!e.isBeingObserved&&m.trackingContext&&(e.isBeingObserved=!0,e.onBO())),e.isBeingObserved):(e.observers_.size===0&&m.inBatch>0&&Cs(e),!1)}function Ss(e){e.lowestObserverState_!==k.STALE_&&(e.lowestObserverState_=k.STALE_,e.observers_.forEach(function(t){t.dependenciesState_===k.UP_TO_DATE_&&t.onBecomeStale_(),t.dependenciesState_=k.STALE_}))}function kc(e){e.lowestObserverState_!==k.STALE_&&(e.lowestObserverState_=k.STALE_,e.observers_.forEach(function(t){t.dependenciesState_===k.POSSIBLY_STALE_?t.dependenciesState_=k.STALE_:t.dependenciesState_===k.UP_TO_DATE_&&(e.lowestObserverState_=k.UP_TO_DATE_)}))}function Ec(e){e.lowestObserverState_===k.UP_TO_DATE_&&(e.lowestObserverState_=k.POSSIBLY_STALE_,e.observers_.forEach(function(t){t.dependenciesState_===k.UP_TO_DATE_&&(t.dependenciesState_=k.POSSIBLY_STALE_,t.onBecomeStale_())}))}var Dt=function(){function e(i,n,r,o){i===void 0&&(i="Reaction"),this.name_=void 0,this.onInvalidate_=void 0,this.errorHandler_=void 0,this.requiresObservable_=void 0,this.observing_=[],this.newObserving_=[],this.dependenciesState_=k.NOT_TRACKING_,this.runId_=0,this.unboundDepsCount_=0,this.flags_=0,this.isTracing_=zi.NONE,this.name_=i,this.onInvalidate_=n,this.errorHandler_=r,this.requiresObservable_=o}var t=e.prototype;return t.onBecomeStale_=function(){this.schedule_()},t.schedule_=function(){this.isScheduled||(this.isScheduled=!0,m.pendingReactions.push(this),As())},t.runReaction_=function(){if(!this.isDisposed){nt(),this.isScheduled=!1;var n=m.trackingContext;if(m.trackingContext=this,Fn(this)){this.isTrackPending=!0;try{this.onInvalidate_()}catch(r){this.reportExceptionInDerivation_(r)}}m.trackingContext=n,rt()}},t.track=function(n){if(!this.isDisposed){nt(),this.isRunning=!0;var r=m.trackingContext;m.trackingContext=this;var o=bs(this,n,void 0);m.trackingContext=r,this.isRunning=!1,this.isTrackPending=!1,this.isDisposed&&zn(this),Ii(o)&&this.reportExceptionInDerivation_(o.cause),rt()}},t.reportExceptionInDerivation_=function(n){var r=this;if(this.errorHandler_){this.errorHandler_(n,this);return}if(m.disableErrorBoundaries)throw n;var o="[mobx] uncaught error in '"+this+"'";m.suppressReactionErrors||console.error(o,n),m.globalReactionErrorHandlers.forEach(function(s){return s(n,r)})},t.dispose=function(){this.isDisposed||(this.isDisposed=!0,this.isRunning||(nt(),zn(this),rt()))},t.getDisposer_=function(n){var r=this,o=function s(){r.dispose(),n==null||n.removeEventListener==null||n.removeEventListener("abort",s)};return n==null||n.addEventListener==null||n.addEventListener("abort",o),o[_]=this,o},t.toString=function(){return"Reaction["+this.name_+"]"},t.trace=function(n){},Fe(e,[{key:"isDisposed",get:function(){return Z(this.flags_,e.isDisposedMask_)},set:function(n){this.flags_=K(this.flags_,e.isDisposedMask_,n)}},{key:"isScheduled",get:function(){return Z(this.flags_,e.isScheduledMask_)},set:function(n){this.flags_=K(this.flags_,e.isScheduledMask_,n)}},{key:"isTrackPending",get:function(){return Z(this.flags_,e.isTrackPendingMask_)},set:function(n){this.flags_=K(this.flags_,e.isTrackPendingMask_,n)}},{key:"isRunning",get:function(){return Z(this.flags_,e.isRunningMask_)},set:function(n){this.flags_=K(this.flags_,e.isRunningMask_,n)}},{key:"diffValue",get:function(){return Z(this.flags_,e.diffValueMask_)?1:0},set:function(n){this.flags_=K(this.flags_,e.diffValueMask_,n===1)}}])}();Dt.isDisposedMask_=1;Dt.isScheduledMask_=2;Dt.isTrackPendingMask_=4;Dt.isRunningMask_=8;Dt.diffValueMask_=16;var Pc=100,$c=function(t){return t()};function As(){m.inBatch>0||m.isRunningReactions||$c(Mc)}function Mc(){m.isRunningReactions=!0;for(var e=m.pendingReactions,t=0;e.length>0;){++t===Pc&&(console.error("[mobx] cycle in reaction: "+e[0]),e.splice(0));for(var i=e.splice(0),n=0,r=i.length;n<r;n++)i[n].runReaction_()}m.isRunningReactions=!1}var Gi=ve("Reaction",Dt);function ti(){return!1}function Rc(e){return console.warn("[mobx.spy] Is a no-op in production builds"),function(){}}var Os="action",Tc="action.bound",ks="autoAction",Lc="autoAction.bound",Es="<unnamed action>",Hn=yi(Os),Ic=yi(Tc,{bound:!0}),Gn=yi(ks,{autoAction:!0}),Dc=yi(Lc,{autoAction:!0,bound:!0});function Ps(e){var t=function(n,r){if(ut(n))return ue(n.name||Es,n,e);if(ut(r))return ue(n,r,e);if(bi(r))return(e?Gn:Hn).decorate_20223_(n,r);if(ce(r))return mi(n,r,e?Gn:Hn);if(ce(n))return St(yi(e?ks:Os,{name:n,autoAction:e}))};return t}var Me=Ps(!1);Object.assign(Me,Hn);var ci=Ps(!0);Object.assign(ci,Gn);Me.bound=St(Ic);ci.bound=St(Dc);function Wn(e){return ms(e.name||Es,!1,e,this,void 0)}function di(e){return ut(e)&&e.isMobxAction===!0}function Bc(e,t){var i,n,r,o;t===void 0&&(t=ts);var s=(i=(n=t)==null?void 0:n.name)!=null?i:"Autorun",a=!t.scheduler&&!t.delay,l;if(a)l=new Dt(s,function(){this.track(u)},t.onError,t.requiresObservable);else{var c=Uc(t),d=!1;l=new Dt(s,function(){d||(d=!0,c(function(){d=!1,l.isDisposed||l.track(u)}))},t.onError,t.requiresObservable)}function u(){e(l)}return(r=t)!=null&&(r=r.signal)!=null&&r.aborted||l.schedule_(),l.getDisposer_((o=t)==null?void 0:o.signal)}var jc=function(t){return t()};function Uc(e){return e.scheduler?e.scheduler:e.delay?function(t){return setTimeout(t,e.delay)}:jc}var Nc="onBO",Vc="onBUO";function Fc(e,t,i){return Ms(Nc,e,t,i)}function $s(e,t,i){return Ms(Vc,e,t,i)}function Ms(e,t,i,n){var r=qn(t),o=ut(n)?n:i,s=e+"L";return r[s]?r[s].add(o):r[s]=new Set([o]),function(){var a=r[s];a&&(a.delete(o),a.size===0&&delete r[s])}}function Rs(e,t,i,n){var r=Ml(t);return ye(function(){var o=ze(e,n)[_];li(r).forEach(function(s){o.extend_(s,r[s],i&&s in i?i[s]:!0)})}),e}var zc=0;function Ts(){this.message="FLOW_CANCELLED"}Ts.prototype=Object.create(Error.prototype);var $n=ds("flow"),Hc=ds("flow.bound",{bound:!0}),Be=Object.assign(function(t,i){if(bi(i))return $n.decorate_20223_(t,i);if(ce(i))return mi(t,i,$n);var n=t,r=n.name||"<unnamed flow>",o=function(){var a=this,l=arguments,c=++zc,d=Me(r+" - runid: "+c+" - init",n).apply(a,l),u,h=void 0,p=new Promise(function(g,v){var b=0;u=v;function w(A){h=void 0;var O;try{O=Me(r+" - runid: "+c+" - yield "+b++,d.next).call(d,A)}catch(B){return v(B)}S(O)}function C(A){h=void 0;var O;try{O=Me(r+" - runid: "+c+" - yield "+b++,d.throw).call(d,A)}catch(B){return v(B)}S(O)}function S(A){if(ut(A==null?void 0:A.then)){A.then(S,v);return}return A.done?g(A.value):(h=Promise.resolve(A.value),h.then(w,C))}w(void 0)});return p.cancel=Me(r+" - runid: "+c+" - cancel",function(){try{h&&co(h);var g=d.return(void 0),v=Promise.resolve(g.value);v.then(Ee,Ee),co(v),u(new Ts)}catch(b){u(b)}}),p};return o.isMobXFlow=!0,o},$n);Be.bound=St(Hc);function co(e){ut(e.cancel)&&e.cancel()}function ui(e){return(e==null?void 0:e.isMobXFlow)===!0}function Gc(e,t){return e?vn(e)||!!e[_]||yr(e)||Gi(e)||fn(e):!1}function Ls(e){return Gc(e)}function Tt(e,t){t===void 0&&(t=void 0),nt();try{return e.apply(t)}finally{rt()}}function Oe(e){return e[_]}var Wc={has:function(t,i){return Oe(t).has_(i)},get:function(t,i){return Oe(t).get_(i)},set:function(t,i,n){var r;return ce(i)?(r=Oe(t).set_(i,n,!0))!=null?r:!0:!1},deleteProperty:function(t,i){var n;return ce(i)?(n=Oe(t).delete_(i,!0))!=null?n:!0:!1},defineProperty:function(t,i,n){var r;return(r=Oe(t).defineProperty_(i,n))!=null?r:!0},ownKeys:function(t){return Oe(t).ownKeys_()},preventExtensions:function(t){E(13)}};function qc(e,t){var i,n;return es(),e=ze(e,t),(n=(i=e[_]).proxy_)!=null?n:i.proxy_=new Proxy(e,Wc)}function tt(e){return e.interceptors_!==void 0&&e.interceptors_.length>0}function _i(e,t){var i=e.interceptors_||(e.interceptors_=[]);return i.push(t),is(function(){var n=i.indexOf(t);n!==-1&&i.splice(n,1)})}function et(e,t){var i=me();try{for(var n=[].concat(e.interceptors_||[]),r=0,o=n.length;r<o&&(t=n[r](t),t&&!t.type&&E(14),!!t);r++);return t}finally{Lt(i)}}function ct(e){return e.changeListeners_!==void 0&&e.changeListeners_.length>0}function wi(e,t){var i=e.changeListeners_||(e.changeListeners_=[]);return i.push(t),is(function(){var n=i.indexOf(t);n!==-1&&i.splice(n,1)})}function dt(e,t){var i=me(),n=e.changeListeners_;if(n){n=n.slice();for(var r=0,o=n.length;r<o;r++)n[r](t);Lt(i)}}var Mn=Symbol("mobx-keys");function Sr(e,t,i){return It(e)?Rs(e,e,t,i):(ye(function(){var n=ze(e,i)[_];if(!e[Mn]){var r=Object.getPrototypeOf(e),o=new Set([].concat(li(e),li(r)));o.delete("constructor"),o.delete(_),dn(r,Mn,o)}e[Mn].forEach(function(s){return n.make_(s,t&&s in t?t[s]:!0)})}),e)}var uo="splice",At="update",Zc=1e4,Kc={get:function(t,i){var n=t[_];return i===_?n:i==="length"?n.getArrayLength_():typeof i=="string"&&!isNaN(i)?n.get_(parseInt(i)):Gt(Wi,i)?Wi[i]:t[i]},set:function(t,i,n){var r=t[_];return i==="length"&&r.setArrayLength_(n),typeof i=="symbol"||isNaN(i)?t[i]=n:r.set_(parseInt(i),n),!0},preventExtensions:function(){E(15)}},Ar=function(){function e(i,n,r,o){i===void 0&&(i="ObservableArray"),this.owned_=void 0,this.legacyMode_=void 0,this.atom_=void 0,this.values_=[],this.interceptors_=void 0,this.changeListeners_=void 0,this.enhancer_=void 0,this.dehancer=void 0,this.proxy_=void 0,this.lastKnownLength_=0,this.owned_=r,this.legacyMode_=o,this.atom_=new Jt(i),this.enhancer_=function(s,a){return n(s,a,"ObservableArray[..]")}}var t=e.prototype;return t.dehanceValue_=function(n){return this.dehancer!==void 0?this.dehancer(n):n},t.dehanceValues_=function(n){return this.dehancer!==void 0&&n.length>0?n.map(this.dehancer):n},t.intercept_=function(n){return _i(this,n)},t.observe_=function(n,r){return r===void 0&&(r=!1),r&&n({observableKind:"array",object:this.proxy_,debugObjectName:this.atom_.name_,type:"splice",index:0,added:this.values_.slice(),addedCount:this.values_.length,removed:[],removedCount:0}),wi(this,n)},t.getArrayLength_=function(){return this.atom_.reportObserved(),this.values_.length},t.setArrayLength_=function(n){(typeof n!="number"||isNaN(n)||n<0)&&E("Out of range: "+n);var r=this.values_.length;if(n!==r)if(n>r){for(var o=new Array(n-r),s=0;s<n-r;s++)o[s]=void 0;this.spliceWithArray_(r,0,o)}else this.spliceWithArray_(n,r-n)},t.updateArrayLength_=function(n,r){n!==this.lastKnownLength_&&E(16),this.lastKnownLength_+=r,this.legacyMode_&&r>0&&Vs(n+r+1)},t.spliceWithArray_=function(n,r,o){var s=this;this.atom_;var a=this.values_.length;if(n===void 0?n=0:n>a?n=a:n<0&&(n=Math.max(0,a+n)),arguments.length===1?r=a-n:r==null?r=0:r=Math.max(0,Math.min(r,a-n)),o===void 0&&(o=jn),tt(this)){var l=et(this,{object:this.proxy_,type:uo,index:n,removedCount:r,added:o});if(!l)return jn;r=l.removedCount,o=l.added}if(o=o.length===0?o:o.map(function(u){return s.enhancer_(u,void 0)}),this.legacyMode_){var c=o.length-r;this.updateArrayLength_(a,c)}var d=this.spliceItemsIntoValues_(n,r,o);return(r!==0||o.length!==0)&&this.notifyArraySplice_(n,o,d),this.dehanceValues_(d)},t.spliceItemsIntoValues_=function(n,r,o){if(o.length<Zc){var s;return(s=this.values_).splice.apply(s,[n,r].concat(o))}else{var a=this.values_.slice(n,n+r),l=this.values_.slice(n+r);this.values_.length+=o.length-r;for(var c=0;c<o.length;c++)this.values_[n+c]=o[c];for(var d=0;d<l.length;d++)this.values_[n+o.length+d]=l[d];return a}},t.notifyArrayChildUpdate_=function(n,r,o){var s=!this.owned_&&ti(),a=ct(this),l=a||s?{observableKind:"array",object:this.proxy_,type:At,debugObjectName:this.atom_.name_,index:n,newValue:r,oldValue:o}:null;this.atom_.reportChanged(),a&&dt(this,l)},t.notifyArraySplice_=function(n,r,o){var s=!this.owned_&&ti(),a=ct(this),l=a||s?{observableKind:"array",object:this.proxy_,debugObjectName:this.atom_.name_,type:uo,index:n,removed:o,added:r,removedCount:o.length,addedCount:r.length}:null;this.atom_.reportChanged(),a&&dt(this,l)},t.get_=function(n){if(this.legacyMode_&&n>=this.values_.length){console.warn("[mobx] Out of bounds read: "+n);return}return this.atom_.reportObserved(),this.dehanceValue_(this.values_[n])},t.set_=function(n,r){var o=this.values_;if(this.legacyMode_&&n>o.length&&E(17,n,o.length),n<o.length){this.atom_;var s=o[n];if(tt(this)){var a=et(this,{type:At,object:this.proxy_,index:n,newValue:r});if(!a)return;r=a.newValue}r=this.enhancer_(r,s);var l=r!==s;l&&(o[n]=r,this.notifyArrayChildUpdate_(n,r,s))}else{for(var c=new Array(n+1-o.length),d=0;d<c.length-1;d++)c[d]=void 0;c[c.length-1]=r,this.spliceWithArray_(o.length,0,c)}},e}();function Yc(e,t,i,n){return i===void 0&&(i="ObservableArray"),n===void 0&&(n=!1),es(),ye(function(){var r=new Ar(i,t,n,!1);rs(r.values_,_,r);var o=new Proxy(r.values_,Kc);return r.proxy_=o,e&&e.length&&r.spliceWithArray_(0,0,e),o})}var Wi={clear:function(){return this.splice(0)},replace:function(t){var i=this[_];return i.spliceWithArray_(0,i.values_.length,t)},toJSON:function(){return this.slice()},splice:function(t,i){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];var s=this[_];switch(arguments.length){case 0:return[];case 1:return s.spliceWithArray_(t);case 2:return s.spliceWithArray_(t,i)}return s.spliceWithArray_(t,i,r)},spliceWithArray:function(t,i,n){return this[_].spliceWithArray_(t,i,n)},push:function(){for(var t=this[_],i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return t.spliceWithArray_(t.values_.length,0,n),t.values_.length},pop:function(){return this.splice(Math.max(this[_].values_.length-1,0),1)[0]},shift:function(){return this.splice(0,1)[0]},unshift:function(){for(var t=this[_],i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return t.spliceWithArray_(0,0,n),t.values_.length},reverse:function(){return m.trackingDerivation&&E(37,"reverse"),this.replace(this.slice().reverse()),this},sort:function(){m.trackingDerivation&&E(37,"sort");var t=this.slice();return t.sort.apply(t,arguments),this.replace(t),this},remove:function(t){var i=this[_],n=i.dehanceValues_(i.values_).indexOf(t);return n>-1?(this.splice(n,1),!0):!1}};T("at",X);T("concat",X);T("flat",X);T("includes",X);T("indexOf",X);T("join",X);T("lastIndexOf",X);T("slice",X);T("toString",X);T("toLocaleString",X);T("toSorted",X);T("toSpliced",X);T("with",X);T("every",gt);T("filter",gt);T("find",gt);T("findIndex",gt);T("findLast",gt);T("findLastIndex",gt);T("flatMap",gt);T("forEach",gt);T("map",gt);T("some",gt);T("toReversed",gt);T("reduce",Is);T("reduceRight",Is);function T(e,t){typeof Array.prototype[e]=="function"&&(Wi[e]=t(e))}function X(e){return function(){var t=this[_];t.atom_.reportObserved();var i=t.dehanceValues_(t.values_);return i[e].apply(i,arguments)}}function gt(e){return function(t,i){var n=this,r=this[_];r.atom_.reportObserved();var o=r.dehanceValues_(r.values_);return o[e](function(s,a){return t.call(i,s,a,n)})}}function Is(e){return function(){var t=this,i=this[_];i.atom_.reportObserved();var n=i.dehanceValues_(i.values_),r=arguments[0];return arguments[0]=function(o,s,a){return r(o,s,a,t)},n[e].apply(n,arguments)}}var Jc=ve("ObservableArrayAdministration",Ar);function gn(e){return cn(e)&&Jc(e[_])}var Xc={},zt="add",qi="delete",Ds=function(){function e(i,n,r){var o=this;n===void 0&&(n=de),r===void 0&&(r="ObservableMap"),this.enhancer_=void 0,this.name_=void 0,this[_]=Xc,this.data_=void 0,this.hasMap_=void 0,this.keysAtom_=void 0,this.interceptors_=void 0,this.changeListeners_=void 0,this.dehancer=void 0,this.enhancer_=n,this.name_=r,ut(Map)||E(18),ye(function(){o.keysAtom_=ls("ObservableMap.keys()"),o.data_=new Map,o.hasMap_=new Map,i&&o.merge(i)})}var t=e.prototype;return t.has_=function(n){return this.data_.has(n)},t.has=function(n){var r=this;if(!m.trackingDerivation)return this.has_(n);var o=this.hasMap_.get(n);if(!o){var s=o=new ae(this.has_(n),un,"ObservableMap.key?",!1);this.hasMap_.set(n,s),$s(s,function(){return r.hasMap_.delete(n)})}return o.get()},t.set=function(n,r){var o=this.has_(n);if(tt(this)){var s=et(this,{type:o?At:zt,object:this,newValue:r,name:n});if(!s)return this;r=s.newValue}return o?this.updateValue_(n,r):this.addValue_(n,r),this},t.delete=function(n){var r=this;if(this.keysAtom_,tt(this)){var o=et(this,{type:qi,object:this,name:n});if(!o)return!1}if(this.has_(n)){var s=ti(),a=ct(this),l=a||s?{observableKind:"map",debugObjectName:this.name_,type:qi,object:this,oldValue:this.data_.get(n).value_,name:n}:null;return Tt(function(){var c;r.keysAtom_.reportChanged(),(c=r.hasMap_.get(n))==null||c.setNewValue_(!1);var d=r.data_.get(n);d.setNewValue_(void 0),r.data_.delete(n)}),a&&dt(this,l),!0}return!1},t.updateValue_=function(n,r){var o=this.data_.get(n);if(r=o.prepareNewValue_(r),r!==m.UNCHANGED){var s=ti(),a=ct(this),l=a||s?{observableKind:"map",debugObjectName:this.name_,type:At,object:this,oldValue:o.value_,name:n,newValue:r}:null;o.setNewValue_(r),a&&dt(this,l)}},t.addValue_=function(n,r){var o=this;this.keysAtom_,Tt(function(){var c,d=new ae(r,o.enhancer_,"ObservableMap.key",!1);o.data_.set(n,d),r=d.value_,(c=o.hasMap_.get(n))==null||c.setNewValue_(!0),o.keysAtom_.reportChanged()});var s=ti(),a=ct(this),l=a||s?{observableKind:"map",debugObjectName:this.name_,type:zt,object:this,name:n,newValue:r}:null;a&&dt(this,l)},t.get=function(n){return this.has(n)?this.dehanceValue_(this.data_.get(n).get()):this.dehanceValue_(void 0)},t.dehanceValue_=function(n){return this.dehancer!==void 0?this.dehancer(n):n},t.keys=function(){return this.keysAtom_.reportObserved(),this.data_.keys()},t.values=function(){var n=this,r=this.keys();return ho({next:function(){var s=r.next(),a=s.done,l=s.value;return{done:a,value:a?void 0:n.get(l)}}})},t.entries=function(){var n=this,r=this.keys();return ho({next:function(){var s=r.next(),a=s.done,l=s.value;return{done:a,value:a?void 0:[l,n.get(l)]}}})},t[Symbol.iterator]=function(){return this.entries()},t.forEach=function(n,r){for(var o=Pe(this),s;!(s=o()).done;){var a=s.value,l=a[0],c=a[1];n.call(r,c,l,this)}},t.merge=function(n){var r=this;return be(n)&&(n=new Map(n)),Tt(function(){It(n)?$l(n).forEach(function(o){return r.set(o,n[o])}):Array.isArray(n)?n.forEach(function(o){var s=o[0],a=o[1];return r.set(s,a)}):Ve(n)?(Pl(n)||E(19,n),n.forEach(function(o,s){return r.set(s,o)})):n!=null&&E(20,n)}),this},t.clear=function(){var n=this;Tt(function(){ys(function(){for(var r=Pe(n.keys()),o;!(o=r()).done;){var s=o.value;n.delete(s)}})})},t.replace=function(n){var r=this;return Tt(function(){for(var o=Qc(n),s=new Map,a=!1,l=Pe(r.data_.keys()),c;!(c=l()).done;){var d=c.value;if(!o.has(d)){var u=r.delete(d);if(u)a=!0;else{var h=r.data_.get(d);s.set(d,h)}}}for(var p=Pe(o.entries()),g;!(g=p()).done;){var v=g.value,b=v[0],w=v[1],C=r.data_.has(b);if(r.set(b,w),r.data_.has(b)){var S=r.data_.get(b);s.set(b,S),C||(a=!0)}}if(!a)if(r.data_.size!==s.size)r.keysAtom_.reportChanged();else for(var A=r.data_.keys(),O=s.keys(),B=A.next(),j=O.next();!B.done;){if(B.value!==j.value){r.keysAtom_.reportChanged();break}B=A.next(),j=O.next()}r.data_=s}),this},t.toString=function(){return"[object ObservableMap]"},t.toJSON=function(){return Array.from(this)},t.observe_=function(n,r){return wi(this,n)},t.intercept_=function(n){return _i(this,n)},Fe(e,[{key:"size",get:function(){return this.keysAtom_.reportObserved(),this.data_.size}},{key:Symbol.toStringTag,get:function(){return"Map"}}])}(),be=ve("ObservableMap",Ds);function ho(e){return e[Symbol.toStringTag]="MapIterator",kr(e)}function Qc(e){if(Ve(e)||be(e))return e;if(Array.isArray(e))return new Map(e);if(It(e)){var t=new Map;for(var i in e)t.set(i,e[i]);return t}else return E(21,e)}var td={},Bs=function(){function e(i,n,r){var o=this;n===void 0&&(n=de),r===void 0&&(r="ObservableSet"),this.name_=void 0,this[_]=td,this.data_=new Set,this.atom_=void 0,this.changeListeners_=void 0,this.interceptors_=void 0,this.dehancer=void 0,this.enhancer_=void 0,this.name_=r,ut(Set)||E(22),this.enhancer_=function(s,a){return n(s,a,r)},ye(function(){o.atom_=ls(o.name_),i&&o.replace(i)})}var t=e.prototype;return t.dehanceValue_=function(n){return this.dehancer!==void 0?this.dehancer(n):n},t.clear=function(){var n=this;Tt(function(){ys(function(){for(var r=Pe(n.data_.values()),o;!(o=r()).done;){var s=o.value;n.delete(s)}})})},t.forEach=function(n,r){for(var o=Pe(this),s;!(s=o()).done;){var a=s.value;n.call(r,a,a,this)}},t.add=function(n){var r=this;if(this.atom_,tt(this)){var o=et(this,{type:zt,object:this,newValue:n});if(!o)return this;n=o.newValue}if(!this.has(n)){Tt(function(){r.data_.add(r.enhancer_(n,void 0)),r.atom_.reportChanged()});var s=!1,a=ct(this),l=a||s?{observableKind:"set",debugObjectName:this.name_,type:zt,object:this,newValue:n}:null;a&&dt(this,l)}return this},t.delete=function(n){var r=this;if(tt(this)){var o=et(this,{type:qi,object:this,oldValue:n});if(!o)return!1}if(this.has(n)){var s=!1,a=ct(this),l=a||s?{observableKind:"set",debugObjectName:this.name_,type:qi,object:this,oldValue:n}:null;return Tt(function(){r.atom_.reportChanged(),r.data_.delete(n)}),a&&dt(this,l),!0}return!1},t.has=function(n){return this.atom_.reportObserved(),this.data_.has(this.dehanceValue_(n))},t.entries=function(){var n=this.values();return po({next:function(){var o=n.next(),s=o.value,a=o.done;return a?{value:void 0,done:a}:{value:[s,s],done:a}}})},t.keys=function(){return this.values()},t.values=function(){this.atom_.reportObserved();var n=this,r=this.data_.values();return po({next:function(){var s=r.next(),a=s.value,l=s.done;return l?{value:void 0,done:l}:{value:n.dehanceValue_(a),done:l}}})},t.intersection=function(n){if(Rt(n)&&!_t(n))return n.intersection(this);var r=new Set(this);return r.intersection(n)},t.union=function(n){if(Rt(n)&&!_t(n))return n.union(this);var r=new Set(this);return r.union(n)},t.difference=function(n){return new Set(this).difference(n)},t.symmetricDifference=function(n){if(Rt(n)&&!_t(n))return n.symmetricDifference(this);var r=new Set(this);return r.symmetricDifference(n)},t.isSubsetOf=function(n){return new Set(this).isSubsetOf(n)},t.isSupersetOf=function(n){return new Set(this).isSupersetOf(n)},t.isDisjointFrom=function(n){if(Rt(n)&&!_t(n))return n.isDisjointFrom(this);var r=new Set(this);return r.isDisjointFrom(n)},t.replace=function(n){var r=this;return _t(n)&&(n=new Set(n)),Tt(function(){Array.isArray(n)?(r.clear(),n.forEach(function(o){return r.add(o)})):Rt(n)?(r.clear(),n.forEach(function(o){return r.add(o)})):n!=null&&E("Cannot initialize set from "+n)}),this},t.observe_=function(n,r){return wi(this,n)},t.intercept_=function(n){return _i(this,n)},t.toJSON=function(){return Array.from(this)},t.toString=function(){return"[object ObservableSet]"},t[Symbol.iterator]=function(){return this.values()},Fe(e,[{key:"size",get:function(){return this.atom_.reportObserved(),this.data_.size}},{key:Symbol.toStringTag,get:function(){return"Set"}}])}(),_t=ve("ObservableSet",Bs);function po(e){return e[Symbol.toStringTag]="SetIterator",kr(e)}var fo=Object.create(null),go="remove",js=function(){function e(i,n,r,o){n===void 0&&(n=new Map),o===void 0&&(o=oc),this.target_=void 0,this.values_=void 0,this.name_=void 0,this.defaultAnnotation_=void 0,this.keysAtom_=void 0,this.changeListeners_=void 0,this.interceptors_=void 0,this.proxy_=void 0,this.isPlainObject_=void 0,this.appliedAnnotations_=void 0,this.pendingKeys_=void 0,this.target_=i,this.values_=n,this.name_=r,this.defaultAnnotation_=o,this.keysAtom_=new Jt("ObservableObject.keys"),this.isPlainObject_=It(this.target_)}var t=e.prototype;return t.getObservablePropValue_=function(n){return this.values_.get(n).get()},t.setObservablePropValue_=function(n,r){var o=this.values_.get(n);if(o instanceof ht)return o.set(r),!0;if(tt(this)){var s=et(this,{type:At,object:this.proxy_||this.target_,name:n,newValue:r});if(!s)return null;r=s.newValue}if(r=o.prepareNewValue_(r),r!==m.UNCHANGED){var a=ct(this),l=!1,c=a||l?{type:At,observableKind:"object",debugObjectName:this.name_,object:this.proxy_||this.target_,oldValue:o.value_,name:n,newValue:r}:null;o.setNewValue_(r),a&&dt(this,c)}return!0},t.get_=function(n){return m.trackingDerivation&&!Gt(this.target_,n)&&this.has_(n),this.target_[n]},t.set_=function(n,r,o){return o===void 0&&(o=!1),Gt(this.target_,n)?this.values_.has(n)?this.setObservablePropValue_(n,r):o?Reflect.set(this.target_,n,r):(this.target_[n]=r,!0):this.extend_(n,{value:r,enumerable:!0,writable:!0,configurable:!0},this.defaultAnnotation_,o)},t.has_=function(n){if(!m.trackingDerivation)return n in this.target_;this.pendingKeys_||(this.pendingKeys_=new Map);var r=this.pendingKeys_.get(n);return r||(r=new ae(n in this.target_,un,"ObservableObject.key?",!1),this.pendingKeys_.set(n,r)),r.get()},t.make_=function(n,r){if(r===!0&&(r=this.defaultAnnotation_),r!==!1){if(!(n in this.target_)){var o;if((o=this.target_[$e])!=null&&o[n])return;E(1,r.annotationType_,this.name_+"."+n.toString())}for(var s=this.target_;s&&s!==ln;){var a=Ni(s,n);if(a){var l=r.make_(this,n,a,s);if(l===0)return;if(l===1)break}s=Object.getPrototypeOf(s)}mo(this,r,n)}},t.extend_=function(n,r,o,s){if(s===void 0&&(s=!1),o===!0&&(o=this.defaultAnnotation_),o===!1)return this.defineProperty_(n,r,s);var a=o.extend_(this,n,r,s);return a&&mo(this,o,n),a},t.defineProperty_=function(n,r,o){o===void 0&&(o=!1),this.keysAtom_;try{nt();var s=this.delete_(n);if(!s)return s;if(tt(this)){var a=et(this,{object:this.proxy_||this.target_,name:n,type:zt,newValue:r.value});if(!a)return null;var l=a.newValue;r.value!==l&&(r=De({},r,{value:l}))}if(o){if(!Reflect.defineProperty(this.target_,n,r))return!1}else xt(this.target_,n,r);this.notifyPropertyAddition_(n,r.value)}finally{rt()}return!0},t.defineObservableProperty_=function(n,r,o,s){s===void 0&&(s=!1),this.keysAtom_;try{nt();var a=this.delete_(n);if(!a)return a;if(tt(this)){var l=et(this,{object:this.proxy_||this.target_,name:n,type:zt,newValue:r});if(!l)return null;r=l.newValue}var c=vo(n),d={configurable:m.safeDescriptors?this.isPlainObject_:!0,enumerable:!0,get:c.get,set:c.set};if(s){if(!Reflect.defineProperty(this.target_,n,d))return!1}else xt(this.target_,n,d);var u=new ae(r,o,"ObservableObject.key",!1);this.values_.set(n,u),this.notifyPropertyAddition_(n,u.value_)}finally{rt()}return!0},t.defineComputedProperty_=function(n,r,o){o===void 0&&(o=!1),this.keysAtom_;try{nt();var s=this.delete_(n);if(!s)return s;if(tt(this)){var a=et(this,{object:this.proxy_||this.target_,name:n,type:zt,newValue:void 0});if(!a)return null}r.name||(r.name="ObservableObject.key"),r.context=this.proxy_||this.target_;var l=vo(n),c={configurable:m.safeDescriptors?this.isPlainObject_:!0,enumerable:!1,get:l.get,set:l.set};if(o){if(!Reflect.defineProperty(this.target_,n,c))return!1}else xt(this.target_,n,c);this.values_.set(n,new ht(r)),this.notifyPropertyAddition_(n,void 0)}finally{rt()}return!0},t.delete_=function(n,r){if(r===void 0&&(r=!1),this.keysAtom_,!Gt(this.target_,n))return!0;if(tt(this)){var o=et(this,{object:this.proxy_||this.target_,name:n,type:go});if(!o)return null}try{var s;nt();var a=ct(this),l=!1,c=this.values_.get(n),d=void 0;if(!c&&(a||l)){var u;d=(u=Ni(this.target_,n))==null?void 0:u.value}if(r){if(!Reflect.deleteProperty(this.target_,n))return!1}else delete this.target_[n];if(c&&(this.values_.delete(n),c instanceof ae&&(d=c.value_),Ss(c)),this.keysAtom_.reportChanged(),(s=this.pendingKeys_)==null||(s=s.get(n))==null||s.set(n in this.target_),a||l){var h={type:go,observableKind:"object",object:this.proxy_||this.target_,debugObjectName:this.name_,oldValue:d,name:n};a&&dt(this,h)}}finally{rt()}return!0},t.observe_=function(n,r){return wi(this,n)},t.intercept_=function(n){return _i(this,n)},t.notifyPropertyAddition_=function(n,r){var o,s=ct(this),a=!1;if(s||a){var l=s||a?{type:zt,observableKind:"object",debugObjectName:this.name_,object:this.proxy_||this.target_,name:n,newValue:r}:null;s&&dt(this,l)}(o=this.pendingKeys_)==null||(o=o.get(n))==null||o.set(!0),this.keysAtom_.reportChanged()},t.ownKeys_=function(){return this.keysAtom_.reportObserved(),li(this.target_)},t.keys_=function(){return this.keysAtom_.reportObserved(),Object.keys(this.target_)},e}();function ze(e,t){var i;if(Gt(e,_))return e;var n=(i=t==null?void 0:t.name)!=null?i:"ObservableObject",r=new js(e,new Map,String(n),vc(t));return dn(e,_,r),e}var ed=ve("ObservableObjectAdministration",js);function vo(e){return fo[e]||(fo[e]={get:function(){return this[_].getObservablePropValue_(e)},set:function(i){return this[_].setObservablePropValue_(e,i)}})}function vn(e){return cn(e)?ed(e[_]):!1}function mo(e,t,i){var n;(n=e.target_[$e])==null||delete n[i]}var id=Ns(0),nd=function(){var e=!1,t={};return Object.defineProperty(t,"0",{set:function(){e=!0}}),Object.create(t)[0]=1,e===!1}(),Rn=0,Us=function(){};function rd(e,t){Object.setPrototypeOf?Object.setPrototypeOf(e.prototype,t):e.prototype.__proto__!==void 0?e.prototype.__proto__=t:e.prototype=t}rd(Us,Array.prototype);var Or=function(e){function t(n,r,o,s){var a;return o===void 0&&(o="ObservableArray"),s===void 0&&(s=!1),a=e.call(this)||this,ye(function(){var l=new Ar(o,r,s,!0);l.proxy_=a,rs(a,_,l),n&&n.length&&a.spliceWithArray(0,0,n),nd&&Object.defineProperty(a,"0",id)}),a}as(t,e);var i=t.prototype;return i.concat=function(){this[_].atom_.reportObserved();for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return Array.prototype.concat.apply(this.slice(),o.map(function(a){return gn(a)?a.slice():a}))},i[Symbol.iterator]=function(){var n=this,r=0;return kr({next:function(){return r<n.length?{value:n[r++],done:!1}:{done:!0,value:void 0}}})},Fe(t,[{key:"length",get:function(){return this[_].getArrayLength_()},set:function(r){this[_].setArrayLength_(r)}},{key:Symbol.toStringTag,get:function(){return"Array"}}])}(Us);Object.entries(Wi).forEach(function(e){var t=e[0],i=e[1];t!=="concat"&&dn(Or.prototype,t,i)});function Ns(e){return{enumerable:!1,configurable:!0,get:function(){return this[_].get_(e)},set:function(i){this[_].set_(e,i)}}}function od(e){xt(Or.prototype,""+e,Ns(e))}function Vs(e){if(e>Rn){for(var t=Rn;t<e+100;t++)od(t);Rn=e}}Vs(1e3);function sd(e,t,i){return new Or(e,t,i)}function qn(e,t){if(typeof e=="object"&&e!==null){if(gn(e))return t!==void 0&&E(23),e[_].atom_;if(_t(e))return e.atom_;if(be(e)){if(t===void 0)return e.keysAtom_;var i=e.data_.get(t)||e.hasMap_.get(t);return i||E(25,t,Zn(e)),i}if(vn(e)){if(!t)return E(26);var n=e[_].values_.get(t);return n||E(27,t,Zn(e)),n}if(yr(e)||fn(e)||Gi(e))return e}else if(ut(e)&&Gi(e[_]))return e[_];E(28)}function ad(e,t){if(e||E(29),yr(e)||fn(e)||Gi(e)||be(e)||_t(e))return e;if(e[_])return e[_];E(24,e)}function Zn(e,t){var i;if(t!==void 0)i=qn(e,t);else{if(di(e))return e.name;vn(e)||be(e)||_t(e)?i=ad(e):i=qn(e)}return i.name_}function ye(e){var t=me(),i=wr(!0);nt();try{return e()}finally{rt(),Cr(i),Lt(t)}}var bo=ln.toString;function Fs(e,t,i){return i===void 0&&(i=-1),Kn(e,t,i)}function Kn(e,t,i,n,r){if(e===t)return e!==0||1/e===1/t;if(e==null||t==null)return!1;if(e!==e)return t!==t;var o=typeof e;if(o!=="function"&&o!=="object"&&typeof t!="object")return!1;var s=bo.call(e);if(s!==bo.call(t))return!1;switch(s){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!=+e?+t!=+t:+e==0?1/+e===1/t:+e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object Symbol]":return typeof Symbol<"u"&&Symbol.valueOf.call(e)===Symbol.valueOf.call(t);case"[object Map]":case"[object Set]":i>=0&&i++;break}e=yo(e),t=yo(t);var a=s==="[object Array]";if(!a){if(typeof e!="object"||typeof t!="object")return!1;var l=e.constructor,c=t.constructor;if(l!==c&&!(ut(l)&&l instanceof l&&ut(c)&&c instanceof c)&&"constructor"in e&&"constructor"in t)return!1}if(i===0)return!1;i<0&&(i=-1),n=n||[],r=r||[];for(var d=n.length;d--;)if(n[d]===e)return r[d]===t;if(n.push(e),r.push(t),a){if(d=e.length,d!==t.length)return!1;for(;d--;)if(!Kn(e[d],t[d],i-1,n,r))return!1}else{var u=Object.keys(e),h=u.length;if(Object.keys(t).length!==h)return!1;for(var p=0;p<h;p++){var g=u[p];if(!(Gt(t,g)&&Kn(e[g],t[g],i-1,n,r)))return!1}}return n.pop(),r.pop(),!0}function yo(e){return gn(e)?e.slice():Ve(e)||be(e)||Rt(e)||_t(e)?Array.from(e.entries()):e}var _o,ld=((_o=br().Iterator)==null?void 0:_o.prototype)||{};function kr(e){return e[Symbol.iterator]=cd,Object.assign(Object.create(ld),e)}function cd(){return this}["Symbol","Map","Set"].forEach(function(e){var t=br();typeof t[e]>"u"&&E("MobX requires global '"+e+"' to be available or polyfilled")});typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__=="object"&&__MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({spy:Rc,extras:{getDebugName:Zn},$mobx:_});function dd(e){return Al(e,Dt)}class _e extends dd(R){}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=rn(class extends on{constructor(e){var t;if(super(e),e.type!==nn.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,r;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((n=this.nt)!=null&&n.has(o))&&this.st.add(o);return this.render(t)}const i=e.element.classList;for(const o of this.st)o in t||(i.remove(o),this.st.delete(o));for(const o in t){const s=!!t[o];s===this.st.has(o)||(r=this.nt)!=null&&r.has(o)||(s?(i.add(o),this.st.add(o)):(i.remove(o),this.st.delete(o)))}return kt}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mn=e=>e??D;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zs="important",ud=" !"+zs,Hs=rn(class extends on{constructor(e){var t;if(super(e),e.type!==nn.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const n=e[i];return n==null?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:i}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?i.removeProperty(n):i[n]=null);for(const n in t){const r=t[n];if(r!=null){this.ft.add(n);const o=typeof r=="string"&&r.endsWith(ud);n.includes("-")||o?i.setProperty(n,o?r.slice(0,-11):r,o?zs:""):i[n]=r}}return kt}}),Zt=Math.min,q=Math.max,Zi=Math.round,$i=Math.floor,Ot=e=>({x:e,y:e}),hd={left:"right",right:"left",bottom:"top",top:"bottom"},pd={start:"end",end:"start"};function Yn(e,t,i){return q(e,Zt(t,i))}function He(e,t){return typeof e=="function"?e(t):e}function Kt(e){return e.split("-")[0]}function Ge(e){return e.split("-")[1]}function Gs(e){return e==="x"?"y":"x"}function Er(e){return e==="y"?"height":"width"}function Wt(e){return["top","bottom"].includes(Kt(e))?"y":"x"}function Pr(e){return Gs(Wt(e))}function fd(e,t,i){i===void 0&&(i=!1);const n=Ge(e),r=Pr(e),o=Er(r);let s=r==="x"?n===(i?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(s=Ki(s)),[s,Ki(s)]}function gd(e){const t=Ki(e);return[Jn(e),t,Jn(t)]}function Jn(e){return e.replace(/start|end/g,t=>pd[t])}function vd(e,t,i){const n=["left","right"],r=["right","left"],o=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return i?t?r:n:t?n:r;case"left":case"right":return t?o:s;default:return[]}}function md(e,t,i,n){const r=Ge(e);let o=vd(Kt(e),i==="start",n);return r&&(o=o.map(s=>s+"-"+r),t&&(o=o.concat(o.map(Jn)))),o}function Ki(e){return e.replace(/left|right|bottom|top/g,t=>hd[t])}function bd(e){return{top:0,right:0,bottom:0,left:0,...e}}function Ws(e){return typeof e!="number"?bd(e):{top:e,right:e,bottom:e,left:e}}function Yi(e){const{x:t,y:i,width:n,height:r}=e;return{width:n,height:r,top:i,left:t,right:t+n,bottom:i+r,x:t,y:i}}function wo(e,t,i){let{reference:n,floating:r}=e;const o=Wt(t),s=Pr(t),a=Er(s),l=Kt(t),c=o==="y",d=n.x+n.width/2-r.width/2,u=n.y+n.height/2-r.height/2,h=n[a]/2-r[a]/2;let p;switch(l){case"top":p={x:d,y:n.y-r.height};break;case"bottom":p={x:d,y:n.y+n.height};break;case"right":p={x:n.x+n.width,y:u};break;case"left":p={x:n.x-r.width,y:u};break;default:p={x:n.x,y:n.y}}switch(Ge(t)){case"start":p[s]-=h*(i&&c?-1:1);break;case"end":p[s]+=h*(i&&c?-1:1);break}return p}const yd=async(e,t,i)=>{const{placement:n="bottom",strategy:r="absolute",middleware:o=[],platform:s}=i,a=o.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t));let c=await s.getElementRects({reference:e,floating:t,strategy:r}),{x:d,y:u}=wo(c,n,l),h=n,p={},g=0;for(let v=0;v<a.length;v++){const{name:b,fn:w}=a[v],{x:C,y:S,data:A,reset:O}=await w({x:d,y:u,initialPlacement:n,placement:h,strategy:r,middlewareData:p,rects:c,platform:s,elements:{reference:e,floating:t}});d=C??d,u=S??u,p={...p,[b]:{...p[b],...A}},O&&g<=50&&(g++,typeof O=="object"&&(O.placement&&(h=O.placement),O.rects&&(c=O.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:r}):O.rects),{x:d,y:u}=wo(c,h,l)),v=-1)}return{x:d,y:u,placement:h,strategy:r,middlewareData:p}};async function $r(e,t){var i;t===void 0&&(t={});const{x:n,y:r,platform:o,rects:s,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:h=!1,padding:p=0}=He(t,e),g=Ws(p),b=a[h?u==="floating"?"reference":"floating":u],w=Yi(await o.getClippingRect({element:(i=await(o.isElement==null?void 0:o.isElement(b)))==null||i?b:b.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:c,rootBoundary:d,strategy:l})),C=u==="floating"?{x:n,y:r,width:s.floating.width,height:s.floating.height}:s.reference,S=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),A=await(o.isElement==null?void 0:o.isElement(S))?await(o.getScale==null?void 0:o.getScale(S))||{x:1,y:1}:{x:1,y:1},O=Yi(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:C,offsetParent:S,strategy:l}):C);return{top:(w.top-O.top+g.top)/A.y,bottom:(O.bottom-w.bottom+g.bottom)/A.y,left:(w.left-O.left+g.left)/A.x,right:(O.right-w.right+g.right)/A.x}}const _d=e=>({name:"arrow",options:e,async fn(t){const{x:i,y:n,placement:r,rects:o,platform:s,elements:a,middlewareData:l}=t,{element:c,padding:d=0}=He(e,t)||{};if(c==null)return{};const u=Ws(d),h={x:i,y:n},p=Pr(r),g=Er(p),v=await s.getDimensions(c),b=p==="y",w=b?"top":"left",C=b?"bottom":"right",S=b?"clientHeight":"clientWidth",A=o.reference[g]+o.reference[p]-h[p]-o.floating[g],O=h[p]-o.reference[p],B=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let j=B?B[S]:0;(!j||!await(s.isElement==null?void 0:s.isElement(B)))&&(j=a.floating[S]||o.floating[g]);const $t=A/2-O/2,vt=j/2-v[g]/2-1,Q=Zt(u[w],vt),jt=Zt(u[C],vt),mt=Q,Ut=j-v[g]-jt,bt=j/2-v[g]/2+$t,st=Yn(mt,bt,Ut),Qt=!l.arrow&&Ge(r)!=null&&bt!==st&&o.reference[g]/2-(bt<mt?Q:jt)-v[g]/2<0,Mt=Qt?bt<mt?bt-mt:bt-Ut:0;return{[p]:h[p]+Mt,data:{[p]:st,centerOffset:bt-st-Mt,...Qt&&{alignmentOffset:Mt}},reset:Qt}}}),wd=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var i,n;const{placement:r,middlewareData:o,rects:s,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:h,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:v=!0,...b}=He(e,t);if((i=o.arrow)!=null&&i.alignmentOffset)return{};const w=Kt(r),C=Wt(a),S=Kt(a)===a,A=await(l.isRTL==null?void 0:l.isRTL(c.floating)),O=h||(S||!v?[Ki(a)]:gd(a)),B=g!=="none";!h&&B&&O.push(...md(a,v,g,A));const j=[a,...O],$t=await $r(t,b),vt=[];let Q=((n=o.flip)==null?void 0:n.overflows)||[];if(d&&vt.push($t[w]),u){const st=fd(r,s,A);vt.push($t[st[0]],$t[st[1]])}if(Q=[...Q,{placement:r,overflows:vt}],!vt.every(st=>st<=0)){var jt,mt;const st=(((jt=o.flip)==null?void 0:jt.index)||0)+1,Qt=j[st];if(Qt){var Ut;const Nt=u==="alignment"?C!==Wt(Qt):!1,yt=((Ut=Q[0])==null?void 0:Ut.overflows[0])>0;if(!Nt||yt)return{data:{index:st,overflows:Q},reset:{placement:Qt}}}let Mt=(mt=Q.filter(Nt=>Nt.overflows[0]<=0).sort((Nt,yt)=>Nt.overflows[1]-yt.overflows[1])[0])==null?void 0:mt.placement;if(!Mt)switch(p){case"bestFit":{var bt;const Nt=(bt=Q.filter(yt=>{if(B){const Vt=Wt(yt.placement);return Vt===C||Vt==="y"}return!0}).map(yt=>[yt.placement,yt.overflows.filter(Vt=>Vt>0).reduce((Vt,Ga)=>Vt+Ga,0)]).sort((yt,Vt)=>yt[1]-Vt[1])[0])==null?void 0:bt[0];Nt&&(Mt=Nt);break}case"initialPlacement":Mt=a;break}if(r!==Mt)return{reset:{placement:Mt}}}return{}}}};async function Cd(e,t){const{placement:i,platform:n,elements:r}=e,o=await(n.isRTL==null?void 0:n.isRTL(r.floating)),s=Kt(i),a=Ge(i),l=Wt(i)==="y",c=["left","top"].includes(s)?-1:1,d=o&&l?-1:1,u=He(t,e);let{mainAxis:h,crossAxis:p,alignmentAxis:g}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return a&&typeof g=="number"&&(p=a==="end"?g*-1:g),l?{x:p*d,y:h*c}:{x:h*c,y:p*d}}const xd=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var i,n;const{x:r,y:o,placement:s,middlewareData:a}=t,l=await Cd(t,e);return s===((i=a.offset)==null?void 0:i.placement)&&(n=a.arrow)!=null&&n.alignmentOffset?{}:{x:r+l.x,y:o+l.y,data:{...l,placement:s}}}}},Sd=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:n,placement:r}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:a={fn:b=>{let{x:w,y:C}=b;return{x:w,y:C}}},...l}=He(e,t),c={x:i,y:n},d=await $r(t,l),u=Wt(Kt(r)),h=Gs(u);let p=c[h],g=c[u];if(o){const b=h==="y"?"top":"left",w=h==="y"?"bottom":"right",C=p+d[b],S=p-d[w];p=Yn(C,p,S)}if(s){const b=u==="y"?"top":"left",w=u==="y"?"bottom":"right",C=g+d[b],S=g-d[w];g=Yn(C,g,S)}const v=a.fn({...t,[h]:p,[u]:g});return{...v,data:{x:v.x-i,y:v.y-n,enabled:{[h]:o,[u]:s}}}}}},Ad=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var i,n;const{placement:r,rects:o,platform:s,elements:a}=t,{apply:l=()=>{},...c}=He(e,t),d=await $r(t,c),u=Kt(r),h=Ge(r),p=Wt(r)==="y",{width:g,height:v}=o.floating;let b,w;u==="top"||u==="bottom"?(b=u,w=h===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(w=u,b=h==="end"?"top":"bottom");const C=v-d.top-d.bottom,S=g-d.left-d.right,A=Zt(v-d[b],C),O=Zt(g-d[w],S),B=!t.middlewareData.shift;let j=A,$t=O;if((i=t.middlewareData.shift)!=null&&i.enabled.x&&($t=S),(n=t.middlewareData.shift)!=null&&n.enabled.y&&(j=C),B&&!h){const Q=q(d.left,0),jt=q(d.right,0),mt=q(d.top,0),Ut=q(d.bottom,0);p?$t=g-2*(Q!==0||jt!==0?Q+jt:q(d.left,d.right)):j=v-2*(mt!==0||Ut!==0?mt+Ut:q(d.top,d.bottom))}await l({...t,availableWidth:$t,availableHeight:j});const vt=await s.getDimensions(a.floating);return g!==vt.width||v!==vt.height?{reset:{rects:!0}}:{}}}};function bn(){return typeof window<"u"}function We(e){return qs(e)?(e.nodeName||"").toLowerCase():"#document"}function J(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Pt(e){var t;return(t=(qs(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function qs(e){return bn()?e instanceof Node||e instanceof J(e).Node:!1}function pt(e){return bn()?e instanceof Element||e instanceof J(e).Element:!1}function Et(e){return bn()?e instanceof HTMLElement||e instanceof J(e).HTMLElement:!1}function Co(e){return!bn()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof J(e).ShadowRoot}function Ci(e){const{overflow:t,overflowX:i,overflowY:n,display:r}=ft(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+i)&&!["inline","contents"].includes(r)}function Od(e){return["table","td","th"].includes(We(e))}function yn(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Mr(e){const t=Rr(),i=pt(e)?ft(e):e;return["transform","translate","scale","rotate","perspective"].some(n=>i[n]?i[n]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!t&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!t&&(i.filter?i.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(n=>(i.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(i.contain||"").includes(n))}function kd(e){let t=Yt(e);for(;Et(t)&&!je(t);){if(Mr(t))return t;if(yn(t))return null;t=Yt(t)}return null}function Rr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function je(e){return["html","body","#document"].includes(We(e))}function ft(e){return J(e).getComputedStyle(e)}function _n(e){return pt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Yt(e){if(We(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Co(e)&&e.host||Pt(e);return Co(t)?t.host:t}function Zs(e){const t=Yt(e);return je(t)?e.ownerDocument?e.ownerDocument.body:e.body:Et(t)&&Ci(t)?t:Zs(t)}function hi(e,t,i){var n;t===void 0&&(t=[]),i===void 0&&(i=!0);const r=Zs(e),o=r===((n=e.ownerDocument)==null?void 0:n.body),s=J(r);if(o){const a=Xn(s);return t.concat(s,s.visualViewport||[],Ci(r)?r:[],a&&i?hi(a):[])}return t.concat(r,hi(r,[],i))}function Xn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ks(e){const t=ft(e);let i=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const r=Et(e),o=r?e.offsetWidth:i,s=r?e.offsetHeight:n,a=Zi(i)!==o||Zi(n)!==s;return a&&(i=o,n=s),{width:i,height:n,$:a}}function Tr(e){return pt(e)?e:e.contextElement}function Re(e){const t=Tr(e);if(!Et(t))return Ot(1);const i=t.getBoundingClientRect(),{width:n,height:r,$:o}=Ks(t);let s=(o?Zi(i.width):i.width)/n,a=(o?Zi(i.height):i.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const Ed=Ot(0);function Ys(e){const t=J(e);return!Rr()||!t.visualViewport?Ed:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Pd(e,t,i){return t===void 0&&(t=!1),!i||t&&i!==J(e)?!1:t}function he(e,t,i,n){t===void 0&&(t=!1),i===void 0&&(i=!1);const r=e.getBoundingClientRect(),o=Tr(e);let s=Ot(1);t&&(n?pt(n)&&(s=Re(n)):s=Re(e));const a=Pd(o,i,n)?Ys(o):Ot(0);let l=(r.left+a.x)/s.x,c=(r.top+a.y)/s.y,d=r.width/s.x,u=r.height/s.y;if(o){const h=J(o),p=n&&pt(n)?J(n):n;let g=h,v=Xn(g);for(;v&&n&&p!==g;){const b=Re(v),w=v.getBoundingClientRect(),C=ft(v),S=w.left+(v.clientLeft+parseFloat(C.paddingLeft))*b.x,A=w.top+(v.clientTop+parseFloat(C.paddingTop))*b.y;l*=b.x,c*=b.y,d*=b.x,u*=b.y,l+=S,c+=A,g=J(v),v=Xn(g)}}return Yi({width:d,height:u,x:l,y:c})}function Lr(e,t){const i=_n(e).scrollLeft;return t?t.left+i:he(Pt(e)).left+i}function Js(e,t,i){i===void 0&&(i=!1);const n=e.getBoundingClientRect(),r=n.left+t.scrollLeft-(i?0:Lr(e,n)),o=n.top+t.scrollTop;return{x:r,y:o}}function $d(e){let{elements:t,rect:i,offsetParent:n,strategy:r}=e;const o=r==="fixed",s=Pt(n),a=t?yn(t.floating):!1;if(n===s||a&&o)return i;let l={scrollLeft:0,scrollTop:0},c=Ot(1);const d=Ot(0),u=Et(n);if((u||!u&&!o)&&((We(n)!=="body"||Ci(s))&&(l=_n(n)),Et(n))){const p=he(n);c=Re(n),d.x=p.x+n.clientLeft,d.y=p.y+n.clientTop}const h=s&&!u&&!o?Js(s,l,!0):Ot(0);return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-l.scrollLeft*c.x+d.x+h.x,y:i.y*c.y-l.scrollTop*c.y+d.y+h.y}}function Md(e){return Array.from(e.getClientRects())}function Rd(e){const t=Pt(e),i=_n(e),n=e.ownerDocument.body,r=q(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),o=q(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let s=-i.scrollLeft+Lr(e);const a=-i.scrollTop;return ft(n).direction==="rtl"&&(s+=q(t.clientWidth,n.clientWidth)-r),{width:r,height:o,x:s,y:a}}function Td(e,t){const i=J(e),n=Pt(e),r=i.visualViewport;let o=n.clientWidth,s=n.clientHeight,a=0,l=0;if(r){o=r.width,s=r.height;const c=Rr();(!c||c&&t==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:o,height:s,x:a,y:l}}function Ld(e,t){const i=he(e,!0,t==="fixed"),n=i.top+e.clientTop,r=i.left+e.clientLeft,o=Et(e)?Re(e):Ot(1),s=e.clientWidth*o.x,a=e.clientHeight*o.y,l=r*o.x,c=n*o.y;return{width:s,height:a,x:l,y:c}}function xo(e,t,i){let n;if(t==="viewport")n=Td(e,i);else if(t==="document")n=Rd(Pt(e));else if(pt(t))n=Ld(t,i);else{const r=Ys(e);n={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return Yi(n)}function Xs(e,t){const i=Yt(e);return i===t||!pt(i)||je(i)?!1:ft(i).position==="fixed"||Xs(i,t)}function Id(e,t){const i=t.get(e);if(i)return i;let n=hi(e,[],!1).filter(a=>pt(a)&&We(a)!=="body"),r=null;const o=ft(e).position==="fixed";let s=o?Yt(e):e;for(;pt(s)&&!je(s);){const a=ft(s),l=Mr(s);!l&&a.position==="fixed"&&(r=null),(o?!l&&!r:!l&&a.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||Ci(s)&&!l&&Xs(e,s))?n=n.filter(d=>d!==s):r=a,s=Yt(s)}return t.set(e,n),n}function Dd(e){let{element:t,boundary:i,rootBoundary:n,strategy:r}=e;const s=[...i==="clippingAncestors"?yn(t)?[]:Id(t,this._c):[].concat(i),n],a=s[0],l=s.reduce((c,d)=>{const u=xo(t,d,r);return c.top=q(u.top,c.top),c.right=Zt(u.right,c.right),c.bottom=Zt(u.bottom,c.bottom),c.left=q(u.left,c.left),c},xo(t,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Bd(e){const{width:t,height:i}=Ks(e);return{width:t,height:i}}function jd(e,t,i){const n=Et(t),r=Pt(t),o=i==="fixed",s=he(e,!0,o,t);let a={scrollLeft:0,scrollTop:0};const l=Ot(0);function c(){l.x=Lr(r)}if(n||!n&&!o)if((We(t)!=="body"||Ci(r))&&(a=_n(t)),n){const p=he(t,!0,o,t);l.x=p.x+t.clientLeft,l.y=p.y+t.clientTop}else r&&c();o&&!n&&r&&c();const d=r&&!n&&!o?Js(r,a):Ot(0),u=s.left+a.scrollLeft-l.x-d.x,h=s.top+a.scrollTop-l.y-d.y;return{x:u,y:h,width:s.width,height:s.height}}function Tn(e){return ft(e).position==="static"}function So(e,t){if(!Et(e)||ft(e).position==="fixed")return null;if(t)return t(e);let i=e.offsetParent;return Pt(e)===i&&(i=i.ownerDocument.body),i}function Qs(e,t){const i=J(e);if(yn(e))return i;if(!Et(e)){let r=Yt(e);for(;r&&!je(r);){if(pt(r)&&!Tn(r))return r;r=Yt(r)}return i}let n=So(e,t);for(;n&&Od(n)&&Tn(n);)n=So(n,t);return n&&je(n)&&Tn(n)&&!Mr(n)?i:n||kd(e)||i}const Ud=async function(e){const t=this.getOffsetParent||Qs,i=this.getDimensions,n=await i(e.floating);return{reference:jd(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Nd(e){return ft(e).direction==="rtl"}const Vd={convertOffsetParentRelativeRectToViewportRelativeRect:$d,getDocumentElement:Pt,getClippingRect:Dd,getOffsetParent:Qs,getElementRects:Ud,getClientRects:Md,getDimensions:Bd,getScale:Re,isElement:pt,isRTL:Nd};function ta(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Fd(e,t){let i=null,n;const r=Pt(e);function o(){var a;clearTimeout(n),(a=i)==null||a.disconnect(),i=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),o();const c=e.getBoundingClientRect(),{left:d,top:u,width:h,height:p}=c;if(a||t(),!h||!p)return;const g=$i(u),v=$i(r.clientWidth-(d+h)),b=$i(r.clientHeight-(u+p)),w=$i(d),S={rootMargin:-g+"px "+-v+"px "+-b+"px "+-w+"px",threshold:q(0,Zt(1,l))||1};let A=!0;function O(B){const j=B[0].intersectionRatio;if(j!==l){if(!A)return s();j?s(!1,j):n=setTimeout(()=>{s(!1,1e-7)},1e3)}j===1&&!ta(c,e.getBoundingClientRect())&&s(),A=!1}try{i=new IntersectionObserver(O,{...S,root:r.ownerDocument})}catch{i=new IntersectionObserver(O,S)}i.observe(e)}return s(!0),o}function zd(e,t,i,n){n===void 0&&(n={});const{ancestorScroll:r=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,c=Tr(e),d=r||o?[...c?hi(c):[],...hi(t)]:[];d.forEach(w=>{r&&w.addEventListener("scroll",i,{passive:!0}),o&&w.addEventListener("resize",i)});const u=c&&a?Fd(c,i):null;let h=-1,p=null;s&&(p=new ResizeObserver(w=>{let[C]=w;C&&C.target===c&&p&&(p.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var S;(S=p)==null||S.observe(t)})),i()}),c&&!l&&p.observe(c),p.observe(t));let g,v=l?he(e):null;l&&b();function b(){const w=he(e);v&&!ta(v,w)&&i(),v=w,g=requestAnimationFrame(b)}return i(),()=>{var w;d.forEach(C=>{r&&C.removeEventListener("scroll",i),o&&C.removeEventListener("resize",i)}),u==null||u(),(w=p)==null||w.disconnect(),p=null,l&&cancelAnimationFrame(g)}}const Hd=xd,Gd=Sd,Wd=wd,qd=Ad,Zd=_d,Kd=(e,t,i)=>{const n=new Map,r={platform:Vd,...i},o={...r.platform,_c:n};return yd(e,t,{...r,platform:o})};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Yd}=cl,Ao=()=>document.createComment(""),Ke=(e,t,i)=>{var o;const n=e._$AA.parentNode,r=t===void 0?e._$AB:t._$AA;if(i===void 0){const s=n.insertBefore(Ao(),r),a=n.insertBefore(Ao(),r);i=new Yd(s,a,e,e.options)}else{const s=i._$AB.nextSibling,a=i._$AM,l=a!==e;if(l){let c;(o=i._$AQ)==null||o.call(i,e),i._$AM=e,i._$AP!==void 0&&(c=e._$AU)!==a._$AU&&i._$AP(c)}if(s!==r||l){let c=i._$AA;for(;c!==s;){const d=c.nextSibling;n.insertBefore(c,r),c=d}}}return i},ee=(e,t,i=e)=>(e._$AI(t,i),e),Jd={},Xd=(e,t=Jd)=>e._$AH=t,Qd=e=>e._$AH,Ln=e=>{var n;(n=e._$AP)==null||n.call(e,!1,!0);let t=e._$AA;const i=e._$AB.nextSibling;for(;t!==i;){const r=t.nextSibling;t.remove(),t=r}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oo=(e,t,i)=>{const n=new Map;for(let r=t;r<=i;r++)n.set(e[r],r);return n},tu=rn(class extends on{constructor(e){if(super(e),e.type!==nn.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let n;i===void 0?i=t:t!==void 0&&(n=t);const r=[],o=[];let s=0;for(const a of e)r[s]=n?n(a,s):s,o[s]=i(a,s),s++;return{values:o,keys:r}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,n]){const r=Qd(e),{values:o,keys:s}=this.dt(t,i,n);if(!Array.isArray(r))return this.ut=s,o;const a=this.ut??(this.ut=[]),l=[];let c,d,u=0,h=r.length-1,p=0,g=o.length-1;for(;u<=h&&p<=g;)if(r[u]===null)u++;else if(r[h]===null)h--;else if(a[u]===s[p])l[p]=ee(r[u],o[p]),u++,p++;else if(a[h]===s[g])l[g]=ee(r[h],o[g]),h--,g--;else if(a[u]===s[g])l[g]=ee(r[u],o[g]),Ke(e,l[g+1],r[u]),u++,g--;else if(a[h]===s[p])l[p]=ee(r[h],o[p]),Ke(e,r[u],r[h]),h--,p++;else if(c===void 0&&(c=Oo(s,p,g),d=Oo(a,u,h)),c.has(a[u]))if(c.has(a[h])){const v=d.get(s[p]),b=v!==void 0?r[v]:null;if(b===null){const w=Ke(e,r[u]);ee(w,o[p]),l[p]=w}else l[p]=ee(b,o[p]),Ke(e,r[u],b),r[v]=null;p++}else Ln(r[h]),h--;else Ln(r[u]),u++;for(;p<=g;){const v=Ke(e,l[g+1]);ee(v,o[p]),l[p++]=v}for(;u<=h;){const v=r[u++];v!==null&&Ln(v)}return this.ut=s,Xd(e,l),kt}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*eu(e,t){if(e!==void 0){let i=0;for(const n of e)yield t(n,i++)}}var pi=(e=>(e.attendiSpeechServiceDone="attendi-speech-service-done",e.attendiSpeechServiceCancel="attendi-speech-service-cancel",e.attendiSpeechServiceError="attendi-speech-service-error",e.attendiSpeechSegment="attendi-speech-segment",e))(pi||{});function iu(e){return new CustomEvent("attendi-speech-service-done",{detail:e})}function Qn(e){return new CustomEvent("attendi-speech-segment",{detail:e})}function nu(){return new CustomEvent("attendi-speech-service-cancel",{bubbles:!0,composed:!0})}function ru(e){return new CustomEvent("attendi-speech-service-error",{detail:{error:ou(e),fullError:e},bubbles:!0,composed:!0})}function ou(e){return Object.getPrototypeOf(e).constructor.name}x`#ff7449`;const su=x`#fe6163`,au=x`#ef7930`,ea=x`#48c0de`,it={small:576,medium:768,verticalSmall:400},Ir=560,lu=600,ia=200,cu=480,du=400,uu=480,hu=400,Dr=16e3,pu={name:"/"};class fu{constructor(){this.history=[],Sr(this)}push(t){this.history.push(t)}async pop(){var t,i;if(((t=this.currentRoute.settings)==null?void 0:t.onWillPop)===void 0)return Wn(()=>this.history.pop());if(await((i=this.currentRoute.settings)==null?void 0:i.onWillPop()))return Wn(()=>this.history.pop())}popUntil(t){for(let i=this.history.length-1;i>=0;i--){const n=this.history[i];if(t!==void 0&&n.name===t)return;this.pop()}}popAll(){this.popUntil()}get currentRoute(){return this.history.length===0?pu:this.history[this.history.length-1]}}const qt=new fu,we=x`
  .typography {
    font-family: var(
      --attendi-speech-service-font-family,
      "Open Sans",
      "PT Sans",
      Calibri,
      Tahoma,
      sans-serif
    );
  }

  .icon-button {
    border-radius: 50%;
    color: white;
    border-width: 0;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    /* no (blue) highlight color when tapping on button on mobile phone */
    -webkit-tap-highlight-color: transparent;
  }
`,gu=M`
  <svg
    viewBox="0 0 56 56"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.5766 34.2601C22.1848 34.6585 21.5425 34.6585 21.1506 34.2601L15.1789 28.1877C14.7871 27.7893 14.1448 27.7893 13.7529 28.1877L12.6896 29.269C12.3069 29.6581 12.3069 30.2822 12.6896 30.6713L21.1506 39.275C21.5425 39.6734 22.1848 39.6734 22.5766 39.275L42.3104 19.2086C42.6931 18.8195 42.6931 18.1954 42.3104 17.8063L41.2471 16.725C40.8552 16.3266 40.2129 16.3266 39.8211 16.725L22.5766 34.2601Z"
    />
  </svg>
`,vu=M`
  <svg
    viewBox="0 0 26 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.6936 6.24917V0L4.76011 7.81146L12.6936 15.6229V9.37375C17.9456 9.37375 22.2138 13.5763 22.2138 18.7475C22.2138 23.9187 17.9456 28.1213 12.6936 28.1213C7.78411 28.1213 3.73424 24.4489 3.22694 19.7459C3.16771 19.1968 2.72569 18.7475 2.17341 18.7475H0.999999C0.447715 18.7475 -0.00422657 19.1968 0.0399776 19.7473C0.556878 26.1847 6.02221 31.2458 12.6936 31.2458C19.7069 31.2458 25.3872 25.6528 25.3872 18.7475C25.3872 11.8422 19.7069 6.24917 12.6936 6.24917Z"
    />
  </svg>
`,ko=M`
  <svg
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.7832 7.89312V13.3938C16.7832 14.9281 15.5394 16.1719 14.0051 16.1719C12.4707 16.1719 11.2269 14.9281 11.2269 13.3938V7.89312C11.2269 6.3588 12.4707 5.115 14.0051 5.115C15.5394 5.115 16.7832 6.3588 16.7832 7.89312ZM9.56006 7.89312C9.56006 5.43821 11.5502 3.44812 14.0051 3.44812C16.46 3.44812 18.4501 5.43821 18.4501 7.89312V13.3938C18.4501 15.8487 16.46 17.8388 14.0051 17.8388C11.5502 17.8388 9.56006 15.8487 9.56006 13.3938V7.89312ZM7.61683 17.4684C7.99199 17.1382 8.56376 17.1747 8.89392 17.5498C9.53274 18.2757 10.3191 18.857 11.2004 19.2547C12.081 19.6522 13.0361 19.8573 14.0022 19.8565L14.0058 19.8565L14.0095 19.8565C14.9755 19.8573 15.9307 19.6522 16.8113 19.2547C17.6926 18.857 18.4789 18.2757 19.1178 17.5498C19.4479 17.1747 20.0197 17.1382 20.3948 17.4684C20.77 17.7985 20.8065 18.3703 20.4763 18.7454C19.6674 19.6646 18.6717 20.4006 17.5558 20.9043C16.7161 21.2832 15.823 21.5241 14.9107 21.6196V22.7521H15.9363C16.436 22.7521 16.8411 23.1573 16.8411 23.657C16.8411 24.1567 16.436 24.5619 15.9363 24.5619L14.0058 24.5619L12.0755 24.5619C11.5757 24.5619 11.1706 24.1567 11.1706 23.657C11.1706 23.1573 11.5757 22.7521 12.0755 22.7521H13.1009V21.6195C12.1887 21.5241 11.2955 21.2832 10.4559 20.9043C9.33994 20.4006 8.34425 19.6646 7.53536 18.7454C7.2052 18.3703 7.24168 17.7985 7.61683 17.4684Z"
      fill="currentColor"
    />
  </svg>`;M`
  <svg viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M27.3334 10.2493C27.3334 6.4754 24.274 3.41602 20.5001 3.41602C16.7261 3.41602 13.6667 6.4754 13.6667 10.2493V18.791C13.6667 22.565 16.7261 25.6243 20.5001 25.6243C24.274 25.6243 27.3334 22.565 27.3334 18.791V10.2493Z"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30.75 27.832C29.4688 29.2878 27.8918 30.4535 26.1242 31.2513C24.3567 32.049 22.4393 32.4605 20.5 32.4582C18.5607 32.4605 16.6433 32.049 14.8758 31.2513C13.1082 30.4535 11.5312 29.2878 10.25 27.832"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20.5 32.457V37.582"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.0833 37.582H23.9166"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
`;M`
  <svg viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M27.3334 10.2493C27.3334 6.4754 24.274 3.41602 20.5001 3.41602C16.7261 3.41602 13.6667 6.4754 13.6667 10.2493V18.791C13.6667 22.565 16.7261 25.6243 20.5001 25.6243C24.274 25.6243 27.3334 22.565 27.3334 18.791V10.2493Z"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30.75 27.832C29.4688 29.2878 27.8918 30.4535 26.1242 31.2513C24.3567 32.049 22.4393 32.4605 20.5 32.4582C18.5607 32.4605 16.6433 32.049 14.8758 31.2513C13.1082 30.4535 11.5312 29.2878 10.25 27.832"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20.5 32.457V37.582"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.0833 37.582H23.9166"
      stroke="currentColor"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
`;M`
  <svg
    viewBox="0 0 21 30"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0.541016" y="0.541016" width="4.18227" height="29.2759" rx="1" />
    <path
      d="M16.4336 1.54101C16.4336 0.98873 16.8813 0.541016 17.4336 0.541016H19.6159C20.1681 0.541016 20.6159 0.988731 20.6159 1.54102V28.8169C20.6159 29.3692 20.1681 29.8169 19.6159 29.8169H17.4336C16.8813 29.8169 16.4336 29.3692 16.4336 28.8169V1.54101Z"
    />
  </svg>
`;M`
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0" y="0" width="20" height="20" rx="2" />
  </svg>
`;const mu=M`
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11.7423" cy="11.7423" r="11.7423" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.7746 17.425C6.16513 17.8155 6.79829 17.8155 7.18882 17.425L11.5706 13.0432L15.9552 17.4221C16.346 17.8124 16.9792 17.812 17.3694 17.4212L17.4313 17.3593C17.8215 16.9685 17.8211 16.3353 17.4303 15.9451L13.0467 11.5671L17.4275 7.18635C17.818 6.79582 17.818 6.16266 17.4275 5.77213L17.3656 5.71025C16.9751 5.31973 16.3419 5.31973 15.9514 5.71025L11.5696 10.092L7.18499 5.71314C6.79421 5.32287 6.16104 5.32328 5.77077 5.71406L5.70893 5.77599C5.31867 6.16677 5.31908 6.79993 5.70986 7.1902L10.0935 11.5681L5.71272 15.9489C5.3222 16.3394 5.3222 16.9726 5.71272 17.3631L5.7746 17.425Z"
      fill="currentColor"
    />
  </svg>
`;M`
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="27.636" cy="27.6355" r="27.6355" fill="currentColor" />
    <path
      d="M35.3717 36.7623H18.1872V19.5778H28.5135L30.0757 18.0156H18.1872C17.7729 18.0156 17.3755 18.1802 17.0826 18.4732C16.7896 18.7662 16.625 19.1635 16.625 19.5778V36.7623C16.625 37.1766 16.7896 37.574 17.0826 37.867C17.3755 38.1599 17.7729 38.3245 18.1872 38.3245H35.3717C35.786 38.3245 36.1834 38.1599 36.4763 37.867C36.7693 37.574 36.9339 37.1766 36.9339 36.7623V25.0456L35.3717 26.6078V36.7623Z"
      fill="#F8F8F8"
    />
    <path
      d="M39.6912 17.8906L37.0589 15.2582C36.942 15.1411 36.8032 15.0481 36.6504 14.9847C36.4976 14.9213 36.3338 14.8887 36.1684 14.8887C36.003 14.8887 35.8391 14.9213 35.6863 14.9847C35.5335 15.0481 35.3947 15.1411 35.2779 15.2582L24.5689 26.0298L23.7019 29.7869C23.6649 29.969 23.6688 30.1571 23.7132 30.3375C23.7576 30.518 23.8415 30.6863 23.9588 30.8305C24.076 30.9746 24.2238 31.091 24.3914 31.1712C24.559 31.2515 24.7424 31.2935 24.9282 31.2944C25.0242 31.305 25.1212 31.305 25.2172 31.2944L29.0056 30.4587L39.6912 19.6715C39.8083 19.5547 39.9013 19.4159 39.9647 19.2631C40.0281 19.1103 40.0608 18.9465 40.0608 18.781C40.0608 18.6156 40.0281 18.4518 39.9647 18.299C39.9013 18.1462 39.8083 18.0074 39.6912 17.8906V17.8906ZM28.1932 29.0136L25.3344 29.6463L25.9983 26.8109L34.0594 18.6951L36.2621 20.8979L28.1932 29.0136ZM37.1448 20.0152L34.942 17.8125L36.1528 16.5783L38.3711 18.7967L37.1448 20.0152Z"
      fill="#F8F8F8"
    />
    <defs>
      <linearGradient
        id="paint0_linear_601_370"
        x1="27.636"
        y1="0"
        x2="27.636"
        y2="55.2709"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FE6163" />
        <stop offset="1" stop-color="#EF7930" />
      </linearGradient>
    </defs>
  </svg>
`;M`
  <?xml version="1.0" encoding="UTF-8"?>
  <svg
    viewBox="0 0 344 344"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <!-- Generator: Sketch 61.2 (89653) - https://sketch.com -->
    <title>Attendi_Logo_Color (Icon)</title>
    <desc>Created with Sketch.</desc>
    <defs>
      <linearGradient
        x1="99.8047829%"
        y1="0.0949532544%"
        x2="0%"
        y2="100%"
        id="linearGradient-1"
      >
        <stop stop-color="#0073D5" offset="0.09765625%"></stop>
        <stop stop-color="#02BC96" offset="100%"></stop>
        <stop stop-color="#02BC96" offset="100%"></stop>
      </linearGradient>
      <path
        d="M75.1375257,74.6797678 L103.246381,162.519942 C103.953338,164.729181 102.735497,167.093225 100.526258,167.800181 C100.112475,167.932592 99.6806526,168 99.2462,168 L71.4,168 C66.7608081,168 63,164.239192 63,159.6 L63,113.4 C63,108.760808 59.2391919,105 54.6,105 L4.2,105 C1.88040405,105 -6.04109844e-16,103.119596 0,100.8 L0,71.4 C1.20821969e-15,66.7608081 3.7608081,63 8.4,63 L59.1368,63 C66.4426012,63 72.9108948,67.7215463 75.1375257,74.6797678 Z"
        id="path-2"
      ></path>
      <linearGradient
        x1="100%"
        y1="0%"
        x2="0.0369510135%"
        y2="99.963049%"
        id="linearGradient-3"
      >
        <stop stop-color="#FEC02E" offset="0%"></stop>
        <stop stop-color="#FF0E52" offset="99.963049%"></stop>
      </linearGradient>
      <path
        d="M105,8.4 L105,54.6 C105,59.2391919 108.760808,63 113.4,63 L163.8,63 C166.119596,63 168,64.8804041 168,67.2 L168,96.6 C168,101.239192 164.239192,105 159.6,105 L108.8632,105 C101.557399,105 95.0891052,100.278454 92.8624743,93.3202322 L64.7536186,5.48005805 C64.046662,3.27081886 65.2645027,0.906775124 67.4737419,0.199818582 C67.8875251,0.0674079705 68.3193474,-1.69654919e-15 68.7538,0 L96.6,0 C101.239192,-8.52205726e-16 105,3.7608081 105,8.4 Z"
        id="path-4"
      ></path>
    </defs>
    <g
      id="Attendi_Logo_Color-(Icon)"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="Group" transform="translate(88.000000, 88.000000)">
        <g id="Group-2">
          <g id="Path">
            <use fill="url(#linearGradient-1)" xlink:href="#path-2"></use>
            <use fill-opacity="0.5" fill="#39CBD6" xlink:href="#path-2"></use>
          </g>
          <g id="Path">
            <use fill="url(#linearGradient-3)" xlink:href="#path-4"></use>
            <use fill-opacity="0.5" fill="#FF897F" xlink:href="#path-4"></use>
          </g>
        </g>
      </g>
    </g>
  </svg>
`;const Eo=M`
<svg viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M20.126 20.0034L27.6551 43.5318C27.8444 44.1236 27.5182 44.7568 26.9265 44.9462C26.8156 44.9816 26.7 44.9997 26.5836 44.9997H19.1248C17.8822 44.9997 16.8749 43.9924 16.8749 42.7497V30.3748C16.8749 29.1322 15.8675 28.1248 14.6249 28.1248H1.12499C0.503675 28.1248 0 27.6212 0 26.9999V19.1249C0 17.8823 1.00735 16.8749 2.24998 16.8749H15.8401C17.797 16.8749 19.5295 18.1396 20.126 20.0034Z"
        fill="currentColor" />
    <path
        d="M28.1241 2.24998V14.6249C28.1241 15.8675 29.1314 16.8749 30.374 16.8749H43.8739C44.4952 16.8749 44.9989 17.3785 44.9989 17.9998V25.8748C44.9989 27.1174 43.9916 28.1248 42.7489 28.1248H29.1588C27.2019 28.1248 25.4694 26.8601 24.873 24.9963L17.3439 1.46786C17.1545 0.876105 17.4807 0.242884 18.0725 0.0535224C18.1833 0.0180556 18.299 0 18.4153 0H25.8741C27.1167 0 28.1241 1.00735 28.1241 2.24998Z"
        fill="currentColor" />
</svg>`;M`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 344 344"
    shape-rendering="geometricPrecision"
    text-rendering="geometricPrecision"
  >
    <style>
      #eqnIYt56pkM4_tr {
        animation: eqnIYt56pkM4_tr__tr 2000ms linear infinite normal forwards;
      }
      @keyframes eqnIYt56pkM4_tr__tr {
        0% {
          transform: translate(172px, 172px) rotate(0deg);
          animation-timing-function: cubic-bezier(0.715, 0.15, 0.175, 0.84);
        }
        100% {
          transform: translate(172px, 172px) rotate(360deg);
        }
      }
    </style>
    <defs>
      <path
        id="eqnIYt56pkM2"
        d="M75.137526,74.679768l28.108855,87.840174c.706957,2.209239-.510884,4.573283-2.720123,5.280239-.413783.132411-.845605.199819-1.280058.199819L71.4,168c-4.639192,0-8.4-3.760808-8.4-8.4v-46.2c0-4.639192-3.760808-8.4-8.4-8.4h-50.4c-2.319596,0-4.2-1.880404-4.2-4.2v-29.4C0,66.760808,3.760808,63,8.4,63h50.7368c7.305801,0,13.774095,4.721546,16.000726,11.679768Z"
      />
      <path
        id="eqnIYt56pkM3"
        d="M105,8.4v46.2c0,4.639192,3.760808,8.4,8.4,8.4h50.4c2.319596,0,4.2,1.880404,4.2,4.2v29.4c0,4.639192-3.760808,8.4-8.4,8.4h-50.7368c-7.305801,0-13.774095-4.721546-16.000726-11.679768L64.753619,5.480058c-.706957-2.209239.510884-4.573283,2.720123-5.280239C67.887525,0.067408,68.319347,0,68.7538,0L96.6,0c4.639192,0,8.4,3.760808,8.4,8.4Z"
      />
      <linearGradient
        id="eqnIYt56pkM8-fill"
        x1="0.998048"
        y1="0.00095"
        x2="0"
        y2="1"
        spreadMethod="pad"
        gradientUnits="objectBoundingBox"
        gradientTransform="translate(0 0)"
      >
        <stop
          id="eqnIYt56pkM8-fill-0"
          offset="0.097656%"
          stop-color="#0073d5"
        />
        <stop id="eqnIYt56pkM8-fill-1" offset="100%" stop-color="#02bc96" />
        <stop id="eqnIYt56pkM8-fill-2" offset="100%" stop-color="#02bc96" />
      </linearGradient>
      <linearGradient
        id="eqnIYt56pkM11-fill"
        x1="1"
        y1="0"
        x2="0.00037"
        y2="0.99963"
        spreadMethod="pad"
        gradientUnits="objectBoundingBox"
        gradientTransform="translate(0 0)"
      >
        <stop id="eqnIYt56pkM11-fill-0" offset="0%" stop-color="#fec02e" />
        <stop
          id="eqnIYt56pkM11-fill-1"
          offset="99.963049%"
          stop-color="#ff0e52"
        />
      </linearGradient>
    </defs>
    <g id="eqnIYt56pkM4_tr" transform="translate(172,172) rotate(0)">
      <g transform="translate(-172,-172)" opacity="0.82">
        <g transform="translate(88 88)">
          <g>
            <g>
              <use
                width="103.447334"
                height="105"
                xlink:href="#eqnIYt56pkM2"
                fill="url(#eqnIYt56pkM8-fill)"
                fill-rule="evenodd"
              />
              <use
                width="103.447334"
                height="105"
                xlink:href="#eqnIYt56pkM2"
                fill="#39cbd6"
                fill-opacity="0.5"
                fill-rule="evenodd"
              />
            </g>
            <g>
              <use
                width="103.447334"
                height="105"
                xlink:href="#eqnIYt56pkM3"
                fill="url(#eqnIYt56pkM11-fill)"
                fill-rule="evenodd"
              />
              <use
                width="103.447334"
                height="105"
                xlink:href="#eqnIYt56pkM3"
                fill="#ff897f"
                fill-opacity="0.5"
                fill-rule="evenodd"
              />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
`;M`
  <svg
    id="eJTrhDvPlsY1"
    class="recording-animation"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 100 100"
    shape-rendering="geometricPrecision"
    text-rendering="geometricPrecision"
  >
    <style>
      #eJTrhDvPlsY2_ts {
        animation: eJTrhDvPlsY2_ts__ts 3000ms linear infinite normal forwards;
      }
      @keyframes eJTrhDvPlsY2_ts__ts {
        0% {
          transform: translate(50px, 50px) scale(1, 1);
          animation-timing-function: step-end;
        }
        45% {
          transform: translate(50px, 50px) scale(1.12, 1.12);
          animation-timing-function: step-end;
        }
        75% {
          transform: translate(50px, 50px) scale(1.06, 1.06);
        }
        100% {
          transform: translate(50px, 50px) scale(1.06, 1.06);
        }
      }
      #eJTrhDvPlsY2 {
        animation: eJTrhDvPlsY2_c_o 10000ms linear infinite normal forwards;
      }
      @keyframes eJTrhDvPlsY2_c_o {
        0% {
          opacity: 0;
          animation-timing-function: step-end;
        }
        15% {
          opacity: 0.5;
        }
        100% {
          opacity: 0.5;
        }
      }
      #eJTrhDvPlsY3_ts {
        animation: eJTrhDvPlsY3_ts__ts 10000ms linear infinite normal forwards;
      }
      @keyframes eJTrhDvPlsY3_ts__ts {
        0% {
          transform: translate(50px, 50px) scale(1, 1);
          animation-timing-function: step-end;
        }
        30% {
          transform: translate(50px, 50px) scale(0.9, 0.9);
          animation-timing-function: step-end;
        }
        60% {
          transform: translate(50px, 50px) scale(1.03, 1.03);
          animation-timing-function: step-end;
        }
        90% {
          transform: translate(50px, 50px) scale(1, 1);
        }
        100% {
          transform: translate(50px, 50px) scale(1, 1);
        }
      }
    </style>
    <defs>
      <linearGradient
        id="eJTrhDvPlsY2-fill"
        x1="0.5"
        y1="0"
        x2="0.5"
        y2="1"
        spreadMethod="pad"
        gradientUnits="objectBoundingBox"
        gradientTransform="translate(0 0)"
      >
        <stop id="eJTrhDvPlsY2-fill-0" offset="0%" stop-color="#fe6163" />
        <stop id="eJTrhDvPlsY2-fill-1" offset="100%" stop-color="#ef7930" />
      </linearGradient>
      <linearGradient
        id="eJTrhDvPlsY3-fill"
        x1="0.5"
        y1="0"
        x2="0.5"
        y2="1"
        spreadMethod="pad"
        gradientUnits="objectBoundingBox"
        gradientTransform="translate(0 0)"
      >
        <stop id="eJTrhDvPlsY3-fill-0" offset="0%" stop-color="#fe6163" />
        <stop id="eJTrhDvPlsY3-fill-1" offset="100%" stop-color="#ef7930" />
      </linearGradient>
    </defs>
    <g id="eJTrhDvPlsY2_ts" transform="translate(50,50) scale(1,1)">
      <ellipse
        id="eJTrhDvPlsY2"
        rx="41"
        ry="41"
        transform="translate(0,0)"
        opacity="0"
        fill="url(#eJTrhDvPlsY2-fill)"
        stroke-width="0"
      />
    </g>
    <g id="eJTrhDvPlsY3_ts" transform="translate(50,50) scale(1,1)">
      <ellipse
        rx="36"
        ry="36"
        transform="translate(0,0)"
        opacity="0.7"
        fill="url(#eJTrhDvPlsY3-fill)"
        stroke-width="0"
      />
    </g>
  </svg>
`;M`
<svg viewBox="0 0 27 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.5837 9.83333C21.5837 5.5071 18.0766 2 13.7503 2C9.42409 2 5.91699 5.5071 5.91699 9.83333V19.625C5.91699 23.9512 9.42409 27.4583 13.7503 27.4583C18.0766 27.4583 21.5837 23.9512 21.5837 19.625V9.83333Z" fill="white" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.5 29.9883C24.0313 31.6571 22.2235 32.9934 20.1973 33.9079C18.1711 34.8224 15.973 35.2941 13.75 35.2914C11.527 35.2941 9.32893 34.8224 7.30269 33.9079C5.27646 32.9934 3.46866 31.6571 2 29.9883" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.75 35.292V41.167" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.83301 41.167H17.6663" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;M`
<svg viewBox="0 0 27 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.1637 9.83333C21.1637 5.5071 17.6566 2 13.3304 2C9.00417 2 5.49707 5.5071 5.49707 9.83333V19.625C5.49707 23.9512 9.00417 27.4583 13.3304 27.4583C17.6566 27.4583 21.1637 23.9512 21.1637 19.625V9.83333Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.0801 29.9883C23.6114 31.6571 21.8036 32.9934 19.7774 33.9079C17.7512 34.8224 15.5531 35.2941 13.3301 35.2914C11.107 35.2941 8.90901 34.8224 6.88277 33.9079C4.85654 32.9934 3.04874 31.6571 1.58008 29.9883" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3301 35.292V41.167" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.41309 41.167H17.2464" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;const Br=M`
  <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M27 1.93922e-05C30.5463 -0.00423698 34.0585 0.692214 37.3349 2.04937C40.6112 3.40651 43.5871 5.39759 46.0916 7.90823C48.6022 10.4128 50.5933 13.3888 51.9505 16.6651C53.3076 19.9415 54.0041 23.4537 53.9999 27C54.0042 30.5463 53.3078 34.0585 51.9506 37.3349C50.5934 40.6112 48.6023 43.5871 46.0917 46.0917C43.5871 48.6023 40.6112 50.5934 37.3349 51.9506C34.0585 53.3078 30.5463 54.0042 26.9999 53.9999C23.4537 54.0041 19.9415 53.3076 16.6651 51.9505C13.3888 50.5933 10.4129 48.6023 7.90831 46.0917C5.39764 43.5871 3.40653 40.6112 2.04937 37.3349C0.692218 34.0585 -0.00423343 30.5463 1.93598e-05 27C-0.00416667 23.4537 0.692316 19.9415 2.04947 16.6651C3.40662 13.3888 5.39768 10.4129 7.90829 7.90829C10.4129 5.39768 13.3888 3.40662 16.6651 2.04947C19.9415 0.692319 23.4537 -0.00416283 27 1.93922e-05ZM27 52.0003L27.0026 49.9999C30.0227 50.0039 33.0139 49.4109 35.8041 48.2551C38.5943 47.0993 41.1286 45.4035 43.2614 43.2651L43.2651 43.2614C45.4035 41.1286 47.0993 38.5943 48.2551 35.8041C49.4109 33.0139 50.0039 30.0227 49.9999 27.0026V26.9974C50.0038 23.9773 49.4108 20.9862 48.255 18.1959C47.0992 15.4057 45.4034 12.8713 43.2651 10.7386L43.2614 10.7349C41.1286 8.59648 38.5943 6.90066 35.8041 5.74487C33.0139 4.58908 30.0227 3.99611 27.0026 4.00002H26.9974C23.9773 3.99617 20.9862 4.58918 18.1959 5.74497C15.4057 6.90076 12.8713 8.59655 10.7386 10.7349L10.7349 10.7386C8.59655 12.8713 6.90076 15.4057 5.74497 18.1959C4.58918 20.9862 3.99617 23.9773 4.00002 26.9974V27.0026C3.99611 30.0227 4.58908 33.0139 5.74487 35.8041C6.90066 38.5943 8.59648 41.1286 10.7349 43.2614L10.7386 43.2651C12.8713 45.4034 15.4057 47.0992 18.1959 48.255C20.9862 49.4108 23.9773 50.0038 26.9974 49.9999L27 52.0003ZM27 43.25C27.8288 43.25 28.6236 42.9208 29.2097 42.3347C29.7958 41.7487 30.125 40.9538 30.125 40.125C30.125 39.2962 29.7958 38.5013 29.2097 37.9153C28.6236 37.3292 27.8288 37 27 37C26.1712 37 25.3763 37.3292 24.7903 37.9153C24.2042 38.5013 23.875 39.2962 23.875 40.125C23.875 40.9538 24.2042 41.7487 24.7903 42.3347C25.3763 42.9208 26.1712 43.25 27 43.25ZM29 12C29 10.8954 28.1046 10 27 10C25.8954 10 25 10.8954 25 12V32C25 33.1045 25.8954 34 27 34C28.1046 34 29 33.1045 29 32V12Z"
      fill="currentColor"
      fill-opacity="0.5"
    />
  </svg>
`,bu=M`
  <svg
    viewBox="0 0 29 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="2.74324" cy="10.7432" r="2.74324" fill="#48C0DE" />
    <circle cx="2.74324" cy="2.74324" r="2.74324" fill="#48C0DE" />
    <circle cx="2.74324" cy="18.7432" r="2.74324" fill="#48C0DE" />
    <circle cx="2.74324" cy="10.7432" r="2.74324" fill="#48C0DE" />
    <circle cx="2.74324" cy="2.74324" r="2.74324" fill="#48C0DE" />
    <circle cx="2.74324" cy="18.7432" r="2.74324" fill="#48C0DE" />
    <rect x="8" y="17" width="21" height="3.5" rx="1.75" fill="#48C0DE" />
    <rect x="8" y="9" width="21" height="3.5" rx="1.75" fill="#48C0DE" />
    <rect x="8" y="1" width="21" height="3.5" rx="1.75" fill="#48C0DE" />
  </svg>
`,yu=M`
  <svg
    viewBox="0 0 15 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.3338 24.3423C14.545 24.1351 14.7125 23.8891 14.8268 23.6182C14.9412 23.3474 15 23.057 15 22.7638C15 22.4706 14.9412 22.1802 14.8268 21.9093C14.7125 21.6385 14.545 21.3924 14.3338 21.1853L5.49541 12.4981L14.3338 3.81079C14.7598 3.39215 14.999 2.82436 14.999 2.23231C14.999 1.64027 14.7598 1.07247 14.3338 0.653826C13.9079 0.235186 13.3302 1.45976e-07 12.7279 1.98635e-07C12.1255 2.51294e-07 11.5479 0.235186 11.1219 0.653826L0.666169 10.9308C0.454996 11.1379 0.287458 11.3839 0.173148 11.6548C0.0588377 11.9257 -1.63938e-07 12.216 -1.38302e-07 12.5092C-1.12667e-07 12.8025 0.0588378 13.0928 0.173148 13.3637C0.287458 13.6346 0.454996 13.8806 0.666169 14.0877L11.1219 24.3647C11.9875 25.2155 13.4454 25.2155 14.3338 24.3423Z"
      fill="currentColor"
    />
  </svg>
`,_u=M`
  <svg
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14 28C11.2311 28 8.52431 27.1789 6.22202 25.6406C3.91973 24.1022 2.12532 21.9157 1.06569 19.3576C0.00606597 16.7994 -0.271181 13.9845 0.269012 11.2687C0.809205 8.55301 2.14258 6.05845 4.10051 4.10051C6.05845 2.14258 8.55301 0.809205 11.2687 0.269012C13.9845 -0.271181 16.7994 0.00606597 19.3576 1.06569C21.9157 2.12532 24.1022 3.91973 25.6406 6.22202C27.1789 8.52431 28 11.2311 28 14C28 17.713 26.525 21.274 23.8995 23.8995C21.274 26.525 17.713 28 14 28ZM14 2.00001C11.6266 2.00001 9.30655 2.70379 7.33316 4.02237C5.35977 5.34095 3.8217 7.21509 2.91345 9.40781C2.0052 11.6005 1.76756 14.0133 2.23058 16.3411C2.69361 18.6689 3.83649 20.8071 5.51472 22.4853C7.19295 24.1635 9.33115 25.3064 11.6589 25.7694C13.9867 26.2325 16.3995 25.9948 18.5922 25.0866C20.7849 24.1783 22.6591 22.6402 23.9776 20.6668C25.2962 18.6935 26 16.3734 26 14C26 10.8174 24.7357 7.76516 22.4853 5.51472C20.2348 3.26429 17.1826 2.00001 14 2.00001ZM12 23V12H16V23H12ZM14 9C15.1046 9 16 8.10457 16 7C16 5.89543 15.1046 5 14 5C12.8954 5 12 5.89543 12 7C12 8.10457 12.8954 9 14 9Z"
      fill="currentColor"
    />
  </svg>
`;M`<svg
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M16.0531 6.14928L15.3579 4.64903L13.8576 3.9538L15.3579 3.25855L16.0531 1.7583L16.7484 3.25855L18.2486 3.9538L16.7484 4.64903L16.0531 6.14928ZM6.67813 6.14928L5.9829 4.64903L4.48266 3.9538L5.9829 3.25855L6.67813 1.7583L7.37338 3.25855L8.87363 3.9538L7.37338 4.64903L6.67813 6.14928ZM16.0531 15.5243L15.3579 14.024L13.8576 13.3288L15.3579 12.6336L16.0531 11.1333L16.7484 12.6336L18.2486 13.3288L16.7484 14.024L16.0531 15.5243ZM3.86084 18.0307L1.97626 16.1461C1.83095 15.9989 1.7583 15.8211 1.7583 15.6127C1.7583 15.4042 1.83095 15.2273 1.97626 15.082L10.8352 6.23907C10.9823 6.09378 11.1602 6.02113 11.3686 6.02113C11.5771 6.02113 11.754 6.09378 11.8993 6.23907L13.7839 8.12366C13.9292 8.27082 14.0018 8.44864 14.0018 8.65711C14.0018 8.86557 13.9292 9.04245 13.7839 9.18776L4.92493 18.0307C4.77777 18.176 4.59996 18.2486 4.39149 18.2486C4.18302 18.2486 4.00613 18.176 3.86084 18.0307ZM4.4057 16.7935L10.3801 10.7935L9.21338 9.62686L3.21338 15.6012L4.4057 16.7935Z"
    fill="currentColor"
  />
</svg>`;M`
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="7.99992"
      cy="7.99992"
      r="7.16667"
      fill="currentColor"
      stroke="white"
    />
    <path
      d="M7.99991 8.70246L10.0486 10.7512C10.1409 10.8435 10.257 10.8907 10.3967 10.8928C10.5364 10.895 10.6546 10.8478 10.7512 10.7512C10.8478 10.6546 10.8961 10.5375 10.8961 10.3999C10.8961 10.2623 10.8478 10.1452 10.7512 10.0486L8.70246 7.99991L10.7512 5.95118C10.8435 5.85888 10.8907 5.74285 10.8928 5.60311C10.895 5.46338 10.8478 5.34522 10.7512 5.24864C10.6546 5.15205 10.5375 5.10376 10.3999 5.10376C10.2623 5.10376 10.1452 5.15205 10.0486 5.24864L7.99991 7.29736L5.95118 5.24864C5.85888 5.15633 5.74285 5.10911 5.60311 5.10698C5.46338 5.10483 5.34522 5.15205 5.24864 5.24864C5.15205 5.34522 5.10376 5.46231 5.10376 5.59991C5.10376 5.73751 5.15205 5.8546 5.24864 5.95118L7.29736 7.99991L5.24864 10.0486C5.15633 10.1409 5.10911 10.257 5.10698 10.3967C5.10483 10.5364 5.15205 10.6546 5.24864 10.7512C5.34522 10.8478 5.46231 10.8961 5.59991 10.8961C5.73751 10.8961 5.8546 10.8478 5.95118 10.7512L7.99991 8.70246Z"
      fill="white"
    />
  </svg>
`;const wu=M`<svg
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <linearGradient id="microphoneFillGradient" x1="0%" y1="100%" x2="0%" y2="0%">
      <!-- The offset percentage controls what percentage the microphone cone is filled. 100% Means the microphone is fully filled in. -->
      <stop id="microphoneFill" offset="0%" stop-color="currentColor" />
      <stop id="transparentStop" offset="0%" stop-opacity="0" />
    </linearGradient>
  </defs>

  <path
    id="cone"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12 2.5 C9.79086 2.5 8 4.29086 8 6.5 V11.45 C8 13.6591 9.79086 15.45 12 15.45 C14.2091 15.45 16 13.6591 16 11.45 V6.5 C16 4.29086 14.2091 2.5 12 2.5 Z"
    stroke="currentColor"
    stroke-width="2"
    fill="url(#microphoneFillGradient)"
  />

  <path
    id="base"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M6.24631 15.1166 C6.58391 14.8195 7.09844 14.8524 7.39555 15.19 C7.97041 15.8432 8.67802 16.3662 9.47113 16.7242 C10.2635 17.0818 11.1231 17.2664 11.9924 17.2657 L11.9957 17.2657 L11.999 17.2657 C12.8683 17.2664 13.7279 17.0818 14.5203 16.7242 C15.3134 16.3662 16.021 15.8432 16.5958 15.19 C16.893 14.8524 17.4075 14.8195 17.7451 15.1166 C18.0827 15.4137 18.1155 15.9283 17.8184 16.2659 C17.0905 17.093 16.1945 17.7553 15.1902 18.2086 C14.4347 18.5496 13.6309 18.7663 12.81 18.8522 V19.8714 H13.7329 C14.1826 19.8714 14.5471 20.236 14.5471 20.6857 C14.5471 21.1354 14.1826 21.5 13.7329 21.5 L11.9957 21.5 L10.2586 21.5 C9.80885 21.5 9.44428 21.1354 9.44428 20.6857 C9.44428 20.236 9.80885 19.8714 10.2586 19.8714 H11.1814 V18.8522 C10.3604 18.7663 9.55671 18.5496 8.80117 18.2086 C7.79691 17.7553 6.9009 17.093 6.17299 16.2659 C5.87588 15.9283 5.90871 15.4137 6.24631 15.1166 Z"
    fill="currentColor"
  />
</svg>`,na=class extends R{render(){return f`
      <div class="menu-container">
        <slot></slot>
      </div>
    `}};na.styles=x`
    .menu-container {
      width: var(--attendi-action-menu-width);
      display: flex;
      flex-direction: column;
      gap: 4px;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      padding-top: 8px;
      padding-bottom: 4px;
    }
  `;let Cu=na;customElements.get("attendi-action-menu")||customElements.define("attendi-action-menu",Cu);var xu=Object.defineProperty,ra=(e,t,i,n)=>{for(var r=void 0,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=s(t,i,r)||r);return r&&xu(t,i,r),r};const oa=class extends R{constructor(){super(...arguments),this.strength="standard",this.height="1px"}render(){const e=ot({[this.strength]:!0});return f`<hr
      class="divider ${e}"
      style=${Hs({"border-width":this.height})}
    />`}};oa.styles=x`
    :host {
      --color-weak: #d7d5d5;
      --color-standard: #bebbbb;
      --color-strong: #8d8787;

      --default-height: 1px;

      width: 100%;
    }

    .divider {
      margin: 0;
    }

    .weak {
      border: var(--default-height) solid var(--color-weak);
    }

    .standard {
      border: var(--default-height) solid var(--color-standard);
    }

    .strong {
      border: var(--default-height) solid var(--color-strong);
    }
  `;let jr=oa;ra([y({type:String})],jr.prototype,"strength");ra([y({type:String})],jr.prototype,"height");customElements.get("attendi-divider")||customElements.define("attendi-divider",jr);var Su=Object.defineProperty,sa=(e,t,i,n)=>{for(var r=void 0,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=s(t,i,r)||r);return r&&Su(t,i,r),r};const aa=class extends R{constructor(){super(...arguments),this.icon=!1,this.divider=""}render(){return f`
      <div class="menu-flex">
        ${this.divider==="top"?f`<attendi-divider
              class="divider--top"
              strength="weak"
            ></attendi-divider>`:void 0}

        <div class="inline-flex">
          <slot name="icon"></slot>

          <slot></slot>
        </div>

        ${this.divider==="bottom"?f`<attendi-divider
              class="divider--bottom"
              strength="weak"
            ></attendi-divider>`:void 0}
      </div>
    `}};aa.styles=x`
    :host {
      --color: #3d3d3d;
      --sizes-small: 16px;
      --icon-size: var(--sizes-small);

      color: var(--color);
    }

    .menu-flex {
      display: flex;
      flex-direction: column;
    }

    .inline-flex {
      display: flex;
      align-items: center;
      padding: 0px 16px;
      padding-bottom: 8px;
    }

    ::slotted([slot="icon"]) {
      width: var(--icon-size);
      height: var(--icon-size);
      padding-right: 8px;
    }

    .divider--top {
      margin-bottom: 8px;
    }
  `;let Ur=aa;sa([y({type:Boolean})],Ur.prototype,"icon");sa([y({type:String})],Ur.prototype,"divider");customElements.get("attendi-action-menu-header")||customElements.define("attendi-action-menu-header",Ur);const la=class extends R{render(){return f`
      <div class="rows-container">
        <slot></slot>
      </div>
    `}};la.styles=x`
    .rows-container {
      display: flex;
      flex-direction: column;
      padding: 0px 8px;
    }
  `;let Au=la;customElements.get("attendi-action-menu-rows")||customElements.define("attendi-action-menu-rows",Au);M`
<svg viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
        d="M9.78319 4.89312V10.3938C9.78319 11.9281 8.53938 13.1719 7.00506 13.1719C5.47075 13.1719 4.22694 11.9281 4.22694 10.3938V4.89312C4.22694 3.3588 5.47074 2.115 7.00506 2.115C8.53938 2.115 9.78319 3.3588 9.78319 4.89312ZM2.56006 4.89312C2.56006 2.43821 4.55016 0.44812 7.00506 0.44812C9.45997 0.44812 11.4501 2.43821 11.4501 4.89312V10.3938C11.4501 12.8487 9.45997 14.8388 7.00506 14.8388C4.55016 14.8388 2.56006 12.8487 2.56006 10.3938V4.89312ZM0.616833 14.4684C0.991991 14.1382 1.56376 14.1747 1.89392 14.5498C2.53274 15.2757 3.31907 15.857 4.20041 16.2547C5.08097 16.6522 6.03611 16.8573 7.00218 16.8565L7.00582 16.8565L7.00946 16.8565C7.97554 16.8573 8.9307 16.6522 9.81127 16.2547C10.6926 15.857 11.4789 15.2757 12.1178 14.5498C12.4479 14.1747 13.0197 14.1382 13.3948 14.4684C13.77 14.7985 13.8065 15.3703 13.4763 15.7454C12.6674 16.6646 11.6717 17.4006 10.5558 17.9043C9.71615 18.2832 8.82299 18.5241 7.9107 18.6196V19.7521H8.93626C9.436 19.7521 9.84113 20.1573 9.84113 20.657C9.84113 21.1567 9.436 21.5619 8.93626 21.5619L7.00582 21.5619L5.07545 21.5619C4.57571 21.5619 4.17058 21.1567 4.17058 20.657C4.17058 20.1573 4.57571 19.7521 5.07545 19.7521H6.10095V18.6195C5.18867 18.5241 4.29552 18.2832 3.45593 17.9043C2.33994 17.4006 1.34425 16.6646 0.535356 15.7454C0.205197 15.3703 0.241675 14.7985 0.616833 14.4684Z"
        fill="#333333" />
</svg>
`;const ca=M`
  <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14 17.2778C13.8518 17.2778 13.713 17.2544 13.5833 17.2078C13.4537 17.1618 13.3333 17.0833 13.2222 16.9722L8.08333 11.8333C7.87962 11.6296 7.78259 11.3748 7.79222 11.0689C7.80111 10.7637 7.9074 10.5092 8.11111 10.3055C8.31481 10.1018 8.57407 9.99999 8.88888 9.99999C9.2037 9.99999 9.46296 10.1018 9.66666 10.3055L14 14.6389L18.3611 10.2778C18.5648 10.0741 18.8196 9.97665 19.1256 9.98554C19.4307 9.99517 19.6852 10.1018 19.8889 10.3055C20.0926 10.5092 20.1944 10.7685 20.1944 11.0833C20.1944 11.3981 20.0926 11.6574 19.8889 11.8611L14.7778 16.9722C14.6667 17.0833 14.5463 17.1618 14.4167 17.2078C14.287 17.2544 14.1481 17.2778 14 17.2778Z"
      fill="currentColor"
    />
  </svg>
`,Ou=M`<svg
  class="icon"
  viewBox="0 0 16 16"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M3 9C2.72222 9 2.48622 8.90267 2.292 8.708C2.09733 8.51378 2 8.27778 2 8C2 7.72222 2.09733 7.48622 2.292 7.292C2.48622 7.09733 2.72222 7 3 7C3.27778 7 3.51378 7.09733 3.708 7.292C3.90267 7.48622 4 7.72222 4 8C4 8.27778 3.90267 8.51378 3.708 8.708C3.51378 8.90267 3.27778 9 3 9ZM3 5C2.72222 5 2.48622 4.90267 2.292 4.708C2.09733 4.51378 2 4.27778 2 4C2 3.72222 2.09733 3.48622 2.292 3.292C2.48622 3.09733 2.72222 3 3 3C3.27778 3 3.51378 3.09733 3.708 3.292C3.90267 3.48622 4 3.72222 4 4C4 4.27778 3.90267 4.51378 3.708 4.708C3.51378 4.90267 3.27778 5 3 5ZM3 13C2.72222 13 2.48622 12.9027 2.292 12.708C2.09733 12.5138 2 12.2778 2 12C2 11.7222 2.09733 11.4862 2.292 11.292C2.48622 11.0973 2.72222 11 3 11C3.27778 11 3.51378 11.0973 3.708 11.292C3.90267 11.4862 4 11.7222 4 12C4 12.2778 3.90267 12.5138 3.708 12.708C3.51378 12.9027 3.27778 13 3 13ZM6 12.6667C5.81111 12.6667 5.65289 12.6027 5.52533 12.4747C5.39733 12.3471 5.33333 12.1889 5.33333 12C5.33333 11.8111 5.39733 11.6529 5.52533 11.5253C5.65289 11.3973 5.81111 11.3333 6 11.3333H13.3333C13.5222 11.3333 13.6804 11.3973 13.808 11.5253C13.936 11.6529 14 11.8111 14 12C14 12.1889 13.936 12.3471 13.808 12.4747C13.6804 12.6027 13.5222 12.6667 13.3333 12.6667H6ZM6 8.66667C5.81111 8.66667 5.65289 8.60267 5.52533 8.47467C5.39733 8.34711 5.33333 8.18889 5.33333 8C5.33333 7.81111 5.39733 7.65267 5.52533 7.52467C5.65289 7.39711 5.81111 7.33333 6 7.33333H13.3333C13.5222 7.33333 13.6804 7.39711 13.808 7.52467C13.936 7.65267 14 7.81111 14 8C14 8.18889 13.936 8.34711 13.808 8.47467C13.6804 8.60267 13.5222 8.66667 13.3333 8.66667H6ZM6 4.66667C5.81111 4.66667 5.65289 4.60289 5.52533 4.47533C5.39733 4.34733 5.33333 4.18889 5.33333 4C5.33333 3.81111 5.39733 3.65267 5.52533 3.52467C5.65289 3.39711 5.81111 3.33333 6 3.33333H13.3333C13.5222 3.33333 13.6804 3.39711 13.808 3.52467C13.936 3.65267 14 3.81111 14 4C14 4.18889 13.936 4.34733 13.808 4.47533C13.6804 4.60289 13.5222 4.66667 13.3333 4.66667H6Z"
    fill="#6B6B6B"
  />
</svg>`;M`
<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M12.667 6.00033L11.8337 4.16699L10.0003 3.33366L11.8337 2.50033L12.667 0.666992L13.5003 2.50033L15.3337 3.33366L13.5003 4.16699L12.667 6.00033ZM12.667 15.3337L11.8337 13.5003L10.0003 12.667L11.8337 11.8337L12.667 10.0003L13.5003 11.8337L15.3337 12.667L13.5003 13.5003L12.667 15.3337ZM6.00033 13.3337L4.33366 9.66699L0.666992 8.00033L4.33366 6.33366L6.00033 2.66699L7.66699 6.33366L11.3337 8.00033L7.66699 9.66699L6.00033 13.3337ZM6.00033 10.1003L6.66699 8.66699L8.10032 8.00033L6.66699 7.33366L6.00033 5.90033L5.33366 7.33366L3.90033 8.00033L5.33366 8.66699L6.00033 10.1003Z"
        fill="#6B6B6B" />
</svg>
`;M`<svg
  width="48"
  height="48"
  viewBox="0 0 48 48"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect x="0.5" y="0.5" width="47" height="47" rx="3.5" fill="white" />
  <g clip-path="url(#clip0_922_4227)">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M24.8718 23.75C24.8718 23.2668 25.2636 22.875 25.7468 22.875H41.0752C41.5584 22.875 41.9502 23.2668 41.9502 23.75C41.9502 24.2332 41.5584 24.625 41.0752 24.625H25.7468C25.2636 24.625 24.8718 24.2332 24.8718 23.75ZM6.7002 30.75C6.7002 30.2668 7.09195 29.875 7.5752 29.875H41.0752C41.5584 29.875 41.9502 30.2668 41.9502 30.75C41.9502 31.2332 41.5584 31.625 41.0752 31.625H7.5752C7.09195 31.625 6.7002 31.2332 6.7002 30.75ZM6.7002 37.75C6.7002 37.2668 7.09195 36.875 7.5752 36.875H41.0752C41.5584 36.875 41.9502 37.2668 41.9502 37.75C41.9502 38.2332 41.5584 38.625 41.0752 38.625H7.5752C7.09195 38.625 6.7002 38.2332 6.7002 37.75Z"
      fill="#BEBBBB"
    />
    <path
      d="M20.7897 14.5104L20.1151 13.0548L18.6595 12.3802L20.1151 11.7056L20.7897 10.25L21.4643 11.7056L22.9199 12.3802L21.4643 13.0548L20.7897 14.5104ZM11.6935 14.5104L11.0189 13.0548L9.56327 12.3802L11.0189 11.7056L11.6935 10.25L12.368 11.7056L13.8237 12.3802L12.368 13.0548L11.6935 14.5104ZM20.7897 23.6067L20.1151 22.151L18.6595 21.4764L20.1151 20.8019L20.7897 19.3462L21.4643 20.8019L22.9199 21.4764L21.4643 22.151L20.7897 23.6067ZM8.95995 26.0385L7.1314 24.21C6.99041 24.0672 6.91992 23.8947 6.91992 23.6924C6.91992 23.4901 6.99041 23.3185 7.1314 23.1775L15.7269 14.5975C15.8697 14.4566 16.0422 14.3861 16.2445 14.3861C16.4468 14.3861 16.6184 14.4566 16.7594 14.5975L18.5879 16.4261C18.7289 16.5689 18.7994 16.7414 18.7994 16.9437C18.7994 17.1459 18.7289 17.3176 18.5879 17.4586L9.99239 26.0385C9.84961 26.1795 9.67709 26.25 9.47482 26.25C9.27254 26.25 9.10092 26.1795 8.95995 26.0385ZM9.4886 24.8382L15.2853 19.0166L14.1533 17.8846L8.33174 23.6813L9.4886 24.8382Z"
      fill="#9747FF"
    />
  </g>
  <rect
    x="0.5"
    y="0.5"
    width="47"
    height="47"
    rx="3.5"
    stroke="#D7D5D5"
  />
  <defs>
    <clipPath id="clip0_922_4227">
      <rect
        width="36"
        height="36"
        fill="white"
        transform="translate(6 6)"
      />
    </clipPath>
  </defs>
</svg>`;var ku=Object.defineProperty,Nr=(e,t,i,n)=>{for(var r=void 0,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=s(t,i,r)||r);return r&&ku(t,i,r),r};const da=class extends R{constructor(){super(...arguments),this.chevron=!1,this.subtitle="",this.isIconSet=!1}render(){const e=ot({"has-chevron":this.chevron}),t=ot({"has-icon":this.isIconSet});return f`<div class="row ${e}">
      <slot name="icon" @slotchange=${this.handleIconSet}></slot>

      <div class="title-and-subtitle ${t}">
        <div class="title">
          <slot></slot>
        </div>

        ${this.subtitle!==""?f`<div class="subtitle">${this.subtitle}</div>`:null}
      </div>

      ${this.chevron?f`<div class="chevron">${ca}</div>`:null}
    </div>`}handleIconSet(e){e.target.assignedNodes().length===0?this.isIconSet=!1:this.isIconSet=!0}};da.styles=x`
    .row {
      padding: 10px 8px;
      display: flex;
      justify-content: start;
      align-items: center;
      border-radius: 8px;
      cursor: pointer;
    }

    .row.has-chevron {
      justify-content: space-between;
    }

    .row:hover {
      background-color: #f5f5f5;
    }

    .row:active {
      background-color: #d7d7d7;
    }

    .row:focus {
      border: 1px solid black;
    }

    .chevron {
      display: contents;
    }

    .chevron svg {
      width: 24px;
      transform: rotate(-90deg);
    }

    .title-and-subtitle {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 4px;
    }

    .title {
      font-size: 14px;
      text-align: left;
    }

    .title-and-subtitle.has-icon {
      /* Margin is only necessary when there is an icon */
      margin-left: 8px;
    }

    .subtitle {
      color: rgba(107, 107, 107, 1);
      font-size: 12px;
      text-align: left;
    }
  `;let wn=da;Nr([y({attribute:"chevron",type:Boolean})],wn.prototype,"chevron");Nr([y({type:String})],wn.prototype,"subtitle");Nr([L()],wn.prototype,"isIconSet");customElements.get("attendi-action-menu-row")||customElements.define("attendi-action-menu-row",wn);var Eu=Object.defineProperty,ua=(e,t,i,n)=>{for(var r=void 0,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=s(t,i,r)||r);return r&&Eu(t,i,r),r};const ha=class extends R{constructor(){super(...arguments),this._value=""}get value(){return this._value}set value(e){this._value=e,this.dispatchValueChangedEvents(e)}render(){return f`
      <div class="container">
        <div class="editor-container">
          <textarea
            class="editor"
            spellcheck="false"
            @input=${e=>{const t=e.target.value;this.value=t}}
            @change=${e=>{const t=e.target.value;this.value=t}}
            .value=${this.value}
          ></textarea>
        </div>
        <div class="buttons">
          <slot></slot>
        </div>
      </div>
    `}dispatchValueChangedEvents(e){const t=Pu(e),i=$u(e);this.dispatchEvent(t),this.dispatchEvent(i)}addText(e){if(this.editor!==void 0){const t=this.editor.value===""?e:this.value+`

`+e;this.value=t}}};ha.styles=x`
    :host {
      width: 100%;
      height: 100%;
    }

    .container {
      display: flex;
      flex-direction: column;
      border-radius: 8px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      height: 100%;
    }

    .editor {
      height: 100%;
      background: transparent;
      border: none;
      color: black;
      flex: 1;
      font-family: inherit;
      /* overflow: auto hidden; */
      padding: 0px;
      resize: none;
      white-space: pre-wrap;
      width: 100%;
      caret-color: black;
      /* font-size: 18px; */
      line-height: 24px;
    }

    .editor:focus-visible {
      outline: none;
    }

    .editor-container {
      height: 100%;
      padding: 20px 58px 20px 24px;
    }

    .buttons {
      display: flex;
      align-items: center;
      margin-top: auto;
      padding-bottom: 8px;
      padding-left: 11px;
    }
  `;let Vr=ha;ua([y()],Vr.prototype,"_value");ua([I(".editor")],Vr.prototype,"editor");function Pu(e){return new CustomEvent("attendieditorvaluechanged",{detail:e,bubbles:!0,composed:!0})}function $u(e){return new CustomEvent("change",{detail:e,bubbles:!1,composed:!0})}customElements.get("attendi-buttoned-textarea")||customElements.define("attendi-buttoned-textarea",Vr);var Mu=Object.defineProperty,xi=(e,t,i,n)=>{for(var r=void 0,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=s(t,i,r)||r);return r&&Mu(t,i,r),r};const pa=class extends R{constructor(){super(...arguments),this.hasOptionsMenu=!1,this.name="Button",this.backgroundColor=void 0,this.isOptionsOpen=!1}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.onDocumentClick.bind(this))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.onDocumentClick.bind(this))}onDocumentClick(e){this.clickedOutsideOfOptionsMenu(e)&&this.hide()}clickedOutsideOfOptionsMenu(e){return!e.composedPath().includes(this)}hide(){this.isOptionsOpen=!1}render(){const e=ot({open:this.isOptionsOpen});return f`
      <div class="split-button" tabindex="0">
        <button
          tabindex="0"
          class="main-action-button"
          @click=${()=>this.dispatchEvent(new CustomEvent("main-button-clicked"))}
        >
          <slot name="main-action"></slot>
        </button>

        <button
          data-test="attendi-split-button__options-button"
          tabindex="0"
          class="options-button ${e}"
          @click=${()=>{this.isOptionsOpen?this.isOptionsOpen=!1:this.isOptionsOpen=!0,this.dispatchEvent(new CustomEvent("options-button-clicked"))}}
        >
          <slot name="options-action">${ca}</slot>

          <div class="options-slot-container ${e}">
            <slot name="options"></slot>
          </div>
        </button>
      </div>
    `}};pa.styles=x`
    :host {
      --attendi-color-background: #f4f4f4;
      --attendi-color-background-hover: #c9c9c9;
      --attendi-color-background-active: rgb(151, 151, 151);
      --theme-text: black;
      --attendi-color-border: #bebbbb;
      --attendi-color-icon: #333333;
      --attendi-color-icon-hover: #333333;
      --attendi-split-button-border-radius: var(--attendi-border-radius, 30px);
      --attendi-split-button-border-width: 1px;
      --popupbg: hsl(220 0% 100%);

      --border: var(--attendi-split-button-border-width) solid
        var(--attendi-color-border);
      --outer-radius: 50px;
      --radius: 6px;
      --in-speed: 500ms;
      --out-speed: 100ms;

      display: inline-block;
      /* show options menu */
      overflow: visible;
    }

    /* Reset default button styles */
    button,
    input[type="submit"],
    input[type="reset"] {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      margin: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
    }

    .split-button {
      display: grid;
      grid-template-columns: 3fr 2fr;
      width: 100%;
      height: 100%;
    }

    .split-button:focus-visible {
      outline: none;
    }

    .main-action-button {
      background-color: var(--attendi-color-background);
      /* Assumes that the main action button will just contain an icon */
      color: var(--attendi-color-icon);
      position: relative;
      border: var(--border);
      border-right: none;
      border-top-left-radius: var(
        --attendi-split-button-border-top-left-radius,
        var(--attendi-split-button-border-radius)
      );
      border-bottom-left-radius: var(
        --attendi-split-button-border-bottom-left-radius,
        var(--attendi-split-button-border-radius)
      );

      transition-property: background-color, color;
      transition-duration: 0.2s;
      transition-timing-function: ease-in-out;
      -webkit-tap-highlight-color: transparent;
    }

    .main-action-button:hover {
      color: var(--attendi-color-icon-hover);
    }

    /* Divider / border that is smaller than the full height of the element. */
    .main-action-button:after {
      content: "";
      height: 50%;
      width: 1px;
      position: absolute;
      right: 0;
      top: 25%;
      background-color: var(--attendi-color-border);
    }

    .main-action-button:hover {
      background-color: var(--attendi-color-background-hover);
    }

    .main-action-button:active {
      background-color: var(--attendi-color-background-active);
    }

    .options-button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(
        --attendi-split-button-option-action-color-background,
        var(--attendi-color-background)
      );
      border: var(--border);
      border-left: none;
      border-top-right-radius: var(
        --attendi-split-button-border-top-right-radius,
        var(--attendi-split-button-border-radius)
      );
      border-bottom-right-radius: var(
        --attendi-split-button-border-bottom-right-radius,
        var(--attendi-split-button-border-radius)
      );
      transition: background-color 0.2s ease-in-out;
      position: relative;
      -webkit-tap-highlight-color: transparent;
    }

    .options-button:hover {
      background-color: var(
        --attendi-split-button-option-action-color-background,
        var(--attendi-color-background-hover)
      );
    }

    .options-button:active {
      background-color: var(
        --attendi-split-button-option-action-color-background,
        var(--attendi-color-background-active)
      );
    }

    .options-button svg {
      width: calc(26.67 / 40 * 100%);
      color: var(--attendi-color-icon);
      transition-duration: var(--in-speed);
      transform: rotateZ(0turn);
    }

    .options-button:hover svg {
      color: var(--attendi-color-icon-hover);
    }

    .options-button.open svg {
      transition-duration: var(--in-speed);
      transform: rotateZ(-0.5turn);
    }

    ::slotted([slot="options-action"]) {
      width: 50%;
      height: 50%;
      color: var(--attendi-color-icon);
    }

    ::slotted([slot="main-action"]) {
      /* If not present, might encounter issues where the inserted div makes the 
      child content too large for the split button, thereby increasing the height of
      the whole button. */
      height: 78%;
    }

    .options-slot-container {
      opacity: 0;
      pointer-events: none;
      position: absolute;
      inset-block-end: 80%;
      inset-inline-start: -1.5ch;
      padding-inline: 0;
      padding-block: 0.5ch;
      transition: opacity var(--out-speed) ease;
    }

    /* We don't want the whole container to have cursor: pointer, which happens now
      since the options container is within a button element
      (for which we have set cursor: pointer by default) */
    .options-slot-container ::slotted(*) {
      cursor: default;
    }

    .options-slot-container.open {
      opacity: 1;
      pointer-events: auto;
    }
  `;let qe=pa;xi([fl({slot:"options",flatten:!0})],qe.prototype,"optionsMenuNodes");xi([L()],qe.prototype,"hasOptionsMenu");xi([y()],qe.prototype,"name");xi([y()],qe.prototype,"backgroundColor");xi([L()],qe.prototype,"isOptionsOpen");customElements.get("attendi-split-button")||customElements.define("attendi-split-button",qe);var Ru=Object.defineProperty,Tu=(e,t,i,n)=>{for(var r=void 0,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=s(t,i,r)||r);return r&&Ru(t,i,r),r};const fa=class extends R{constructor(){super(...arguments),this.disabled=!1}render(){return f`
      <button ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `}};fa.styles=x`
    :host {
      --attendi-color-background: white;
      --attendi-color-background-hover: #c9c9c9;
      --attendi-color-background-active: rgb(151, 151, 151);
      --attendi-color-background-disabled: #f2f2f2;
      --attendi-color-border: #bebbbb;
      --attendi-button-color: #333333;
      --attendi-button-color-hover: #333333;
      --attendi-button-border-radius: var(--attendi-border-radius, 30px);
      --theme-text: black;
      --theme-border: #bebbbb;
      --theme-border-width: var(--attendi-button-border-width, 1px);
      --ontheme: #333333;
      --popupbg: hsl(220 0% 100%);

      --border: 1px solid var(--attendi-color-border);
      --outer-radius: 50px;
      --radius: 6px;
      --in-speed: 500ms;
      --out-speed: 100ms;

      display: block;
      height: 100%;
      width: 100%;
    }

    /* Reset default button styles */
    button {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
    }

    button {
      background-color: var(--attendi-color-background);
      color: var(--attendi-button-color);
      border: var(--border);
      border-width: var(--theme-border-width);
      border-radius: var(--attendi-button-border-radius);
      border-top-left-radius: var(
        --attendi-button-border-top-left-radius,
        var(--attendi-button-border-radius)
      );
      border-top-right-radius: var(
        --attendi-button-border-top-right-radius,
        var(--attendi-button-border-radius)
      );
      border-bottom-left-radius: var(
        --attendi-button-border-bottom-left-radius,
        var(--attendi-button-border-radius)
      );
      border-bottom-right-radius: var(
        --attendi-button-border-bottom-right-radius,
        var(--attendi-button-border-radius)
      );
      width: 100%;
      height: 100%;
      -webkit-tap-highlight-color: transparent;
      transition-property: background-color, color;
      transition-duration: 0.2s;
      transition-timing-function: ease-in-out;
    }

    button:hover {
      background-color: var(--attendi-color-background-hover);
      color: var(--attendi-button-color-hover);
    }

    button:active {
      background-color: var(--attendi-color-background-active);
    }

    button:disabled {
      background-color: var(--attendi-color-background-disabled);
    }
  `;let ga=fa;Tu([y({attribute:"disabled",type:Boolean})],ga.prototype,"disabled");customElements.get("attendi-button")||customElements.define("attendi-button",ga);var Lu=Object.defineProperty,va=(e,t,i,n)=>{for(var r=void 0,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=s(t,i,r)||r);return r&&Lu(t,i,r),r};x``;const ma=class extends R{constructor(){super(...arguments),this.open=!1}showModal(){var e;this.open=!0,(e=this.dialog)==null||e.showModal()}close(){var e;this.open=!1,(e=this.dialog)==null||e.close()}firstUpdated(){var e;(e=this.dialog)==null||e.addEventListener("close",()=>{this.open=!1,this.dispatchCloseEvent()})}render(){return f`
      <dialog>
        ${this.exitButton()}
        <slot></slot>
      </dialog>
    `}exitButton(){return f`<div @click=${()=>{var e;return(e=this.dialog)==null?void 0:e.close()}}>
      <div
        class="exit-button"
        data-test="attendi-speech-service-dialog__exit-button"
      >
        ${Du}
      </div>
    </div>`}dispatchCloseEvent(){this.dispatchEvent(new CustomEvent(Iu.close))}};ma.styles=x`
    :host {
      /* By default, width of modal will be 90% on small screens, and is capped */
      --attendi-dialog-width: min(90%, 560px);
    }

    dialog {
      border: 1px solid #888;
      border-radius: 10px;
      box-shadow: 0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      padding: 10px; /* Padding between modal edge and inner content */
      width: var(--attendi-dialog-width);
      position: fixed;
      background-color: white;
      top: auto;
      bottom: 1%;
      overflow: hidden;
    }

    dialog::backdrop {
      background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
    }

    .exit-button {
      width: 28px;
      height: 28px;
      margin-left: auto;
      cursor: pointer;
      position: absolute;
      right: 4%;
    }

    /*
      This is used to create a larger clickable area for the exit button
      for UX purposes.
      */
    .exit-button:after {
      content: "";
      position: absolute;
      left: -10px;
      top: -10px;
      width: 40px;
      height: 40px;
    }

    .exit-button svg {
      color: white;
      fill: #c4c4c4;
      transition: 0.3s fill;
    }

    .exit-button svg:hover {
      fill: #a2a2a2;
    }

    @media screen and (min-width: 576px) {
      /* Put the modal more at the top / middle when on larger screens. */
      dialog {
        top: 15%;
        bottom: auto;
        padding: 15px;
      }
    }
  `;let Fr=ma;va([y({type:Boolean,reflect:!0})],Fr.prototype,"open");va([I("dialog")],Fr.prototype,"dialog");const ba=class{};ba.close="attendi-dialog-close";let Iu=ba;const Du=M`
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11.7423" cy="11.7423" r="11.7423" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.7746 17.425C6.16513 17.8155 6.79829 17.8155 7.18882 17.425L11.5706 13.0432L15.9552 17.4221C16.346 17.8124 16.9792 17.812 17.3694 17.4212L17.4313 17.3593C17.8215 16.9685 17.8211 16.3353 17.4303 15.9451L13.0467 11.5671L17.4275 7.18635C17.818 6.79582 17.818 6.16266 17.4275 5.77213L17.3656 5.71025C16.9751 5.31973 16.3419 5.31973 15.9514 5.71025L11.5696 10.092L7.18499 5.71314C6.79421 5.32287 6.16104 5.32328 5.77077 5.71406L5.70893 5.77599C5.31867 6.16677 5.31908 6.79993 5.70986 7.1902L10.0935 11.5681L5.71272 15.9489C5.3222 16.3394 5.3222 16.9726 5.71272 17.3631L5.7746 17.425Z"
      fill="currentColor"
    />
  </svg>
`;customElements.get("attendi-dialog")||customElements.define("attendi-dialog",Fr);class Bu extends Error{constructor(t){super(t),this.name="AttendiRecordingError"}}class ju extends Bu{constructor(t){super(t),this.name="AttendiRecordingPermissionDeniedError"}}const ya="attendierror";function Mi(e){return new CustomEvent(ya,{bubbles:!0,composed:!0,detail:e})}const U=class{static get noMicrophonePermissionErrorDialogContent(){return f`
      Door een instelling van uw browser mag deze pagina de microfoon niet
      gebruiken. Op ${Uu()} staan
      instructies om dit probleem te verhelpen. Probeer na het volgen van deze
      instructies opnieuw in te spreken.
    `}static get emptyRecordingErrorDialogContent(){return f`
      Er is op uw apparaat iets misgegaan bij het opnemen van geluid. Ververs
      alstublieft de pagina en probeer daarna opnieuw in te spreken. Als dit
      niet werkt, neem dan contact op met uw ECD-leverancier.
    `}};U.recorderStart="Start",U.recorderPause="Pauzeer",U.recorderRedo="Opnieuw",U.done="Klaar",U.linearReportingMethod_previousStep="Vorige",U.linearReportingMethod_nextStep="Volgende",U.selectReportingMethodScreen_header="Methodes",U.selectReportingMethodScreen_report="verslag",U.ok="OK",U.confirmRecordRedoModal_header="Opnieuw beginnen",U.confirmRecordRedoModal_caption="Als u opnieuw begint, wordt de huidige rapportage verwijderd",U.cancel="Annuleer",U.noMicrophonePermissionErrorDialogTitle="Wij hebben geen toegang tot uw microfoon",U.genericStartRecordingErrorDialogTitle="Het is niet mogelijk om geluid op te nemen",U.genericStartRecordingErrorDialogContent="Ververs de pagina en probeer opnieuw op te nemen. Als dit niet werkt,neem dan contact op met uw ECD-leverancier",U.emptyRecordingErrorDialogTitle="Kon geen geluid opnemen",U.genericErrorDialogTitle="Er is iets misgegaan",U.genericErrorDialogContent="Ververs de pagina en probeer opnieuw op te nemen. Als dit niet werkt, neem dan contact op met uw ECD-leverancier";let V=U;function Uu(){return f`
    <a
      href="javascript:void(0);"
      onclick="window.open('https://attenditechnology.notion.site/Microfoon-toestaan-953087d19ba44192a2e79bcf74774a2d', '_blank').focus()"
    >
      deze pagina</a>
  `}const Nu=12,_a=24,Di=Nu+_a,Vu=8,wa=class{};wa.PCM=1;let Fu=wa;class zu{encode(t,i=16e3){return new Hu(t,i).encode()}decode(t){const i=t.byteLength,n=new DataView(t),r=i-8;if(n.getUint32(4,!0)!==r)throw new Error(`Invalid RIFF chunk size: ${r}. Expected ${i-8}`);const o=Wu(n),s=qu(n),a=Zu(n,Di,s);return{header:o,format:s,data:a}}}class Hu{constructor(t,i=16e3){if(this.formatCode=Fu.PCM,this.bitsPerSample=16,this.bytesPerSample=Math.ceil(this.bitsPerSample/8),this.dataView=void 0,this.channelData=t,this.numberOfChannels=this.channelData.length,this.numberOfChannels<1)throw new Error("No audio channels.");this.numberOfFrames=this.channelData[0].length,this.sampleRate=i}encode(){if(this.channelData===void 0)throw new Error("No channel data.");const t=Di+Vu,i=this.numberOfChannels*this.numberOfFrames*this.bytesPerSample,n=t+i,r=new ArrayBuffer(n);return this.dataView=new DataView(r),this.writeHeader(t,i),this.writeSampleData(t),new Uint8Array(r)}writeHeader(t,i){if(this.dataView===void 0)throw new Error("No data view.");const n=t+i,r=this.numberOfChannels*this.bytesPerSample;this.setHeader(n),this.setFormatChunk(r),this.setDataChunk(i)}setHeader(t){this.setString(0,"RIFF"),this.setFileSize(t),this.setString(8,"WAVE")}setFileSize(t){this.dataView.setUint32(4,t-8,!0)}setFormatChunk(t){this.setFmtChunkId(),this.setFmtChunkSize(),this.setFormatCode(),this.setNumberOfChannels(),this.setSampleRate(),this.setByteRate(),this.setBlockAlign(t),this.setBitsPerSample()}setFmtChunkId(){this.setString(12,"fmt ")}setFmtChunkSize(){this.dataView.setUint32(16,_a-8,!0)}setFormatCode(){this.dataView.setUint16(20,this.formatCode,!0)}setNumberOfChannels(){this.dataView.setUint16(22,this.numberOfChannels,!0)}setSampleRate(){this.dataView.setUint32(24,this.sampleRate,!0)}setByteRate(){const t=this.sampleRate*this.numberOfChannels*this.bytesPerSample;this.dataView.setUint32(28,t,!0)}setBlockAlign(t){this.dataView.setUint16(32,t,!0)}setBitsPerSample(){this.dataView.setUint16(34,this.bitsPerSample,!0)}setDataChunk(t){this.setString(Di,"data"),this.dataView.setUint32(Di+4,t,!0)}setString(t,i){if(this.dataView===void 0)throw new Error("No data view.");for(let n=0;n<i.length;n++)this.dataView.setUint8(t+n,i.charCodeAt(n))}writeSampleData(t){if(this.dataView===void 0)throw new Error("No data view.");let i=t;for(let n=0;n<this.numberOfFrames;n++)for(let r=0;r<this.numberOfChannels;r++){const o=this.channelData[r][n],s=Gu(o);this.dataView.setInt16(i,s,!0),i+=this.bytesPerSample}}}function Gu(e){return Math.max(-32768,Math.min(32767,Math.round(e*32768)))}function Wu(e){const t=String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3)),i=e.getUint32(4,!0),n=String.fromCharCode(e.getUint8(8),e.getUint8(9),e.getUint8(10),e.getUint8(11));return{magic:t,size:i,format:n}}function qu(e){const t=String.fromCharCode(e.getUint8(12),e.getUint8(13),e.getUint8(14),e.getUint8(15)),i=e.getUint32(16,!0),n=e.getUint16(20,!0),r=e.getUint16(22,!0),o=e.getUint32(24,!0),s=e.getUint32(28,!0),a=e.getUint16(32,!0),l=e.getUint16(34,!0);return{id:t,size:i,audioFormat:n,numChannels:r,sampleRate:o,byteRate:s,blockAlign:a,bitsPerSample:l}}function Zu(e,t,i){const n=String.fromCharCode(e.getUint8(t),e.getUint8(t+1),e.getUint8(t+2),e.getUint8(t+3)),r=e.getUint32(t+4,!0),o=Array.from({length:i.numChannels},()=>[]),s=r/(i.numChannels*(i.bitsPerSample/8));let a;if(i.bitsPerSample===8)a=e.getInt8;else if(i.bitsPerSample===16)a=l=>e.getInt16(l,!0);else if(i.bitsPerSample===32)a=l=>e.getInt32(l,!0);else throw new Error(`Unsupported bits per sample: ${i.bitsPerSample}`);for(let l=0;l<s;l++)for(let c=0;c<i.numChannels;c++){const d=t+8+(l*i.numChannels+c)*(i.bitsPerSample/8),u=a(d);o[c].push(u)}return{id:n,size:r,channelData:o}}let Ri;const Ku=new Uint8Array(16);function Yu(){if(!Ri&&(Ri=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Ri))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Ri(Ku)}const N=[];for(let e=0;e<256;++e)N.push((e+256).toString(16).slice(1));function Ju(e,t=0){return(N[e[t+0]]+N[e[t+1]]+N[e[t+2]]+N[e[t+3]]+"-"+N[e[t+4]]+N[e[t+5]]+"-"+N[e[t+6]]+N[e[t+7]]+"-"+N[e[t+8]]+N[e[t+9]]+"-"+N[e[t+10]]+N[e[t+11]]+N[e[t+12]]+N[e[t+13]]+N[e[t+14]]+N[e[t+15]]).toLowerCase()}const Xu=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Po={randomUUID:Xu};function ei(e,t,i){if(Po.randomUUID&&!e)return Po.randomUUID();e=e||{};const n=e.random||(e.rng||Yu)();return n[6]=n[6]&15|64,n[8]=n[8]&63|128,Ju(n)}function tr(){if(document.body===null||document.body===void 0)return;const e=document.body.style.top;document.body.style.position="",document.body.style.top="",document.body.style.width="",window.scrollTo(0,parseInt(e||"0")*-1)}function er(){document.body.style.top=`-${window.scrollY}px`,document.body.style.position="fixed",document.body.style.width="100vw"}function Qu(e){return new Promise(t=>setTimeout(t,e))}function th(e){return new Promise((t,i)=>{const n=new FileReader;n.onload=()=>{eh(n,t,i)},n.onerror=i,n.readAsDataURL(e)})}function eh(e,t,i){var n;const r=(n=e.result)==null?void 0:n.toString();r?t(r.slice(r.indexOf(",")+1)):i("Audio is empty")}function ir(){return ei()}function Ji(){return ei()}async function Ca(e){const t=new zu().encode([e]),i=new Blob([t],{type:"audio/wav"});return await th(i)}function ih(e,t){return new CustomEvent("recordersegmenttranscribed",{detail:{transcript:e,eventMetadata:t},bubbles:!0,composed:!0})}function nh(){return new CustomEvent("recorderredo",{bubbles:!0,composed:!0})}function rh(){return new CustomEvent("recorderdone",{bubbles:!0,composed:!0})}const ie="#000000",wt="#ffffff";function at(e,t,i){i=zr(i,0,1);const n=1-i,[r,o,s]=$o(e),[a,l,c]=$o(t),d=Math.round(r*i+a*n),u=Math.round(o*i+l*n),h=Math.round(s*i+c*n);return lh(d,u,h)}function zr(e,t,i){return Math.min(Math.max(t,e),i)}const oh=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;function $o(e){e=ah(e);const t=oh.exec(e);if(t===null)throw new Error(`Invalid hex color: ${e}`);return[In(t[1]),In(t[2]),In(t[3])]}function In(e){return parseInt(e,16)}const sh=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;function ah(e){return e=e.replace(sh,(t,i,n,r)=>i+i+n+n+r+r),e}function lh(e,t,i){return"#"+Bi(e)+Bi(t)+Bi(i)}const xa=255;function Bi(e){return e=zr(e,0,xa),e.toString(16).toLowerCase().padStart(2,"0")}function lt(e,t){t=Math.round(zr(t,0,1)*xa);const i=Bi(t);return e+i}function ch(e){return{fill:{default:{enabled:wt,hover:at(wt,ie,.93),active:at(wt,ie,.86),disabled:at(wt,ie,.95)},active:{enabled:e,hover:at(ie,e,.08),active:at(ie,e,.16),disabled:at(wt,e,.8)}},outline:{default:{enabled:"#bebbbb",hover:"#bebbbb",active:"#bebbbb",disabled:"#d7d5d5"},active:{enabled:lt(e,.16),hover:lt(e,.32),active:lt(e,.64),disabled:lt(e,.08)}},icon:{default:{enabled:"#000000",hover:"#000000"},active:{enabled:"#ffffff",hover:"#ffffff"}},volumeFeedback:lt(e,.4)}}function dh(e){return{fill:{default:{enabled:wt,hover:at(wt,e,.9),active:at(wt,e,.8),disabled:wt},active:{enabled:e,hover:at(ie,e,.08),active:at(ie,e,.16),disabled:at(wt,e,.8)}},outline:{default:{enabled:e,hover:e,active:e,disabled:"#d7d5d5"},active:{enabled:lt(e,.16),hover:lt(e,.32),active:lt(e,.64),disabled:lt(e,.08)}},icon:{default:{enabled:e,hover:e},active:{enabled:"#ffffff",hover:"#ffffff"}},volumeFeedback:lt(e,.4)}}function uh(e,t){e.style.setProperty("--color-icon-enabled",t.icon.default.enabled),e.style.setProperty("--color-icon-active-enabled",t.icon.active.enabled),e.style.setProperty("--color-icon-hover",t.icon.default.hover),e.style.setProperty("--color-icon-active-hover",t.icon.active.hover),e.style.setProperty("--color-fill-enabled",t.fill.default.enabled),e.style.setProperty("--color-fill-hover",t.fill.default.hover),e.style.setProperty("--color-fill-active",t.fill.default.active),e.style.setProperty("--color-fill-disabled",t.fill.default.disabled),e.style.setProperty("--color-fill-active-enabled",t.fill.active.enabled),e.style.setProperty("--color-fill-active-hover",t.fill.active.hover),e.style.setProperty("--color-fill-active-active",t.fill.active.active),e.style.setProperty("--color-fill-active-disabled",t.fill.active.disabled),e.style.setProperty("--color-outline-enabled",t.outline.default.enabled),e.style.setProperty("--color-outline-hover",t.outline.default.hover),e.style.setProperty("--color-outline-active",t.outline.default.active),e.style.setProperty("--color-outline-disabled",t.outline.default.disabled),e.style.setProperty("--color-outline-active-enabled",t.outline.active.enabled),e.style.setProperty("--color-outline-active-hover",t.outline.active.hover),e.style.setProperty("--color-outline-active-active",t.outline.active.active),e.style.setProperty("--color-outline-active-disabled",t.outline.active.disabled),e.style.setProperty("--color-volume-feedback",t.volumeFeedback)}const hh=x`
  .loader {
    width: clamp(2px, 4%, 5px);
    transform: scaleY(0.2);
    background-color: #fff;
    animation: processing 0.85s ease-in-out infinite alternate;
  }

  .l1 {
    animation-delay: 0.1s;
  }

  .l2 {
    animation-delay: 0.2s;
  }

  .l3 {
    animation-delay: 0.3s;
  }

  .l4 {
    animation-delay: 0.4s;
  }

  .l5 {
    animation-delay: 0.5s;
  }

  @keyframes processing {
    100% {
      transform: scaleY(1);
    }
  }
`,ph=x`
  .w-100 {
    width: 100%;
  }
`;function fh(e,t,i,n){Kd(e,t,{placement:n==null?void 0:n.placement,middleware:[Hd(n==null?void 0:n.offsetOptions),Wd(),Gd({padding:5}),Zd({element:i}),qd()]}).then(({x:r,y:o,placement:s,middlewareData:a})=>{Object.assign(t.style,{left:`${r}px`,top:`${o}px`});const{x:l,y:c}=a.arrow,d={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];Object.assign(i.style,{left:l!=null?`${l}px`:"",top:c!=null?`${c}px`:"",right:"",bottom:"",[d]:"-4px"})})}async function nr(e,t){const i=await(await fetch(e)).arrayBuffer();return await t.decodeAudioData(i)}function Sa(e,t,i){return new Promise(n=>{const r=gh(e,t,i);r.onended=()=>n(),r.start(0)})}function gh(e,t,i){const n=t.createBufferSource();return n.buffer=e,n.connect(i),n}const rr=class{};rr.playStart="attendi.core.notification-audio.play-start",rr.playStop="attendi.core.notification-audio.play-stop";let Ye=rr;const vh={startNotificationAudioURL:"https://stbinarydata.blob.core.windows.net/binarydata/start_notification.mp3",stopNotificationAudioURL:"https://stbinarydata.blob.core.windows.net/binarydata/stop_notification.mp3"};class Mo{constructor(t){this.notificationSoundsLoaded=!1,this.notificationSoundContext=void 0,this.notificationSoundGain=void 0,this.startNotificationAudio=void 0,this.stopNotificationAudio=void 0,this.pluginCleanupCallbacks=[];const i={...vh,...t};this.startNotificationAudioURL=i.startNotificationAudioURL,this.stopNotificationAudioURL=i.stopNotificationAudioURL}activate(t){this.pluginCleanupCallbacks.push(t.hooks.onBeforeStartRecording(async()=>{this.notificationSoundsLoaded||await this.loadNotificationSounds()}),t.addCommand(Ye.playStart,async()=>{await this.playAudio(this.startNotificationAudio)}),t.addCommand(Ye.playStop,()=>{this.playAudio(this.stopNotificationAudio)}),t.hooks.onBeforeStartRecording(async()=>{const i=Date.now();await t.executeAsyncCommand(Ye.playStart);const n=Date.now()-i;t.shortenShowRecordingDelayByMilliseconds+=n}),t.hooks.onStopRecording(()=>t.executeCommand(Ye.playStop)))}async loadNotificationSounds(){this.notificationSoundsLoaded||(this.notificationSoundContext=new AudioContext,this.notificationSoundGain=this.notificationSoundContext.createGain(),this.notificationSoundGain.gain.value=.25,this.notificationSoundGain.connect(this.notificationSoundContext.destination),this.startNotificationAudio=await nr(this.startNotificationAudioURL,this.notificationSoundContext),this.stopNotificationAudio=await nr(this.stopNotificationAudioURL,this.notificationSoundContext),this.notificationSoundsLoaded=!0)}async playAudio(t){t!==void 0&&this.notificationSoundContext!==void 0&&this.notificationSoundGain!==void 0&&await Sa(t,this.notificationSoundContext,this.notificationSoundGain)}deactivate(){this.notificationSoundsLoaded=!1,this.notificationSoundContext=void 0,this.notificationSoundGain=void 0,this.startNotificationAudio=void 0,this.stopNotificationAudio=void 0;for(const t of this.pluginCleanupCallbacks)t();this.pluginCleanupCallbacks=[]}}var ii=(e=>(e.SOEP="SOEP",e.SOAP="SOAP",e.TIME="TIME",e))(ii||{});const Hr={reportingMethodType:"SOEP",name:"SOEP",displayName:"SOEP",steps:[{name:"Subjectief",symbol:"S",prompt:"Informatie afkomstig van de cliënt zelf"},{name:"Objectief",symbol:"O",prompt:"Wat zijn jouw observaties van de situatie?"},{name:"Evaluatie",symbol:"E",prompt:"Wat concludeer je uit de informatie die je hebt?"},{name:"Plan",symbol:"P",prompt:"Wat zijn de vervolgstappen die je gaat nemen?"}],description:"Gebruik deze methode om meer structuur aan te brengen in een rapportage. Dit is vooral nuttig bij een veranderende zorgsituatie."},mh={reportingMethodType:"SOAP",name:"SOAP",displayName:"SOAP",steps:[{name:"Subjectief",symbol:"S",prompt:"Informatie afkomstig van de cliënt zelf"},{name:"Objectief",symbol:"O",prompt:"Wat zijn jouw observaties van de situatie?"},{name:"Analyse",symbol:"A",prompt:"Wat concludeer je uit de informatie die je hebt?"},{name:"Plan",symbol:"P",prompt:"Wat zijn de vervolgstappen die je gaat nemen?"}],description:"Gebruik deze methode om meer structuur aan te brengen in een rapportage. Dit is vooral nuttig bij een veranderende zorgsituatie."},bh={reportingMethodType:"TIME",name:"TIME",displayName:"TIME",steps:[{name:"Tissue (weefsel)",symbol:"T",prompt:"Is er vitaal of dood weefsel?"},{name:"Infection (infectie)",symbol:"I",prompt:"Is er een infectie of ontsteking?"},{name:"Moisture (vochtbalans)",symbol:"M",prompt:"Is de wond te vochtig of te droog?"},{name:"Edge (wondrand)",symbol:"E",prompt:"Is er een niet-sluitende of ondermijnende wondrand?"}],description:"Gebruik deze methode bij het beoordelen en bepalen van het wondbeleid voor moeilijke en complexe wonden, met focus op gezonde wondgenezing."},fi=new Map([["SOEP",Hr],["SOAP",mh],["TIME",bh]]),Ro="#1C69E8";class yh{constructor(t){this.baseColor=Ro,this.pluginCleanupCallbacks=[],this.transcribeConfig={metadata:{userAgent:navigator.userAgent,...t.metadata},...t}}activate(t){var i,n;if(this.transcribeConfig.customerKey===void 0)throw new Error("Customer key is required for the linear reporting method plugin");const r={apiURL:this.transcribeConfig.apiURL,customerKey:this.transcribeConfig.customerKey,unitId:this.transcribeConfig.unitId??"unknown",userId:this.transcribeConfig.userId,modelType:(i=this.transcribeConfig.config)==null?void 0:i.model,userAgent:((n=this.transcribeConfig.metadata)==null?void 0:n.userAgent)??void 0};this.pluginCleanupCallbacks.push(t.addMenuGroup({id:"reporting-methods",title:"Rapportagemethodes",priority:1,icon:Ou}),t.addMenuItem({groupId:"reporting-methods",title:"SOEP",command:"open-reporting-method-soep"}),t.addMenuItem({groupId:"reporting-methods",title:"SOAP",command:"open-reporting-method-soap"}),t.addMenuItem({groupId:"reporting-methods",title:"TIME",command:"open-reporting-method-time"}),t.addDialog({id:"linear-reporting-method-soep",dialog:this.getLinearReportingMethodDialog(ii.SOEP,t,r)}),t.addDialog({id:"linear-reporting-method-soap",dialog:this.getLinearReportingMethodDialog(ii.SOAP,t,r)}),t.addDialog({id:"linear-reporting-method-time",dialog:this.getLinearReportingMethodDialog(ii.TIME,t,r)}),t.addCommand("open-reporting-method-soep",()=>{t.showDialog("linear-reporting-method-soep"),t.dispatchEvent(new CustomEvent("attendi-reporting-method-soep-open",{bubbles:!0,composed:!0}))}),t.addCommand("open-reporting-method-soap",()=>{t.showDialog("linear-reporting-method-soap"),t.dispatchEvent(new CustomEvent("attendi-reporting-method-soap-open",{bubbles:!0,composed:!0}))}),t.addCommand("open-reporting-method-time",()=>{t.showDialog("linear-reporting-method-time"),t.dispatchEvent(new CustomEvent("attendi-reporting-method-time-open",{bubbles:!0,composed:!0}))}),t.hooks.onAttributeChanged((o,s,a)=>{o===t.attributeNames.baseColor&&(this.baseColor=a)}))}getLinearReportingMethodDialog(t,i,n){return f`
      <attendi-dialog
        class="reporting-method-dialog"
        @attendi-dialog-close=${()=>{i.closeDialog(),i.dispatchEvent(new CustomEvent("attendi-reporting-method-close",{bubbles:!0,composed:!0}))}}
      >
        <div style="padding-top: 30px">
          <attendi-linear-reporting-method-screen
            @attendi-linear-reporting-method-done=${r=>{i.dispatchEvent(Qn({transcript:r.detail,text:r.detail})),i.dispatchEvent(iu({transcript:r.detail,text:r.detail})),i.closeDialog()}}
            base-color=${mn(this.baseColor)}
            .transcribeAPIConfig=${n}
            reporting-method-type=${t}
          ></attendi-linear-reporting-method-screen>
        </div>
      </attendi-dialog>
    `}deactivate(){this.baseColor=Ro;for(const t of this.pluginCleanupCallbacks)t();this.pluginCleanupCallbacks=[]}}const _h=/\{[^{}]+\}/g,Cn=({allowReserved:e,name:t,value:i})=>{if(i==null)return"";if(typeof i=="object")throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");return`${t}=${e?i:encodeURIComponent(i)}`},wh=e=>{switch(e){case"label":return".";case"matrix":return";";case"simple":return",";default:return"&"}},Ch=e=>{switch(e){case"form":return",";case"pipeDelimited":return"|";case"spaceDelimited":return"%20";default:return","}},xh=e=>{switch(e){case"label":return".";case"matrix":return";";case"simple":return",";default:return"&"}},Aa=({allowReserved:e,explode:t,name:i,style:n,value:r})=>{if(!t){const a=(e?r:r.map(l=>encodeURIComponent(l))).join(Ch(n));switch(n){case"label":return`.${a}`;case"matrix":return`;${i}=${a}`;case"simple":return a;default:return`${i}=${a}`}}const o=wh(n),s=r.map(a=>n==="label"||n==="simple"?e?a:encodeURIComponent(a):Cn({allowReserved:e,name:i,value:a})).join(o);return n==="label"||n==="matrix"?o+s:s},Oa=({allowReserved:e,explode:t,name:i,style:n,value:r})=>{if(r instanceof Date)return`${i}=${r.toISOString()}`;if(n!=="deepObject"&&!t){let a=[];Object.entries(r).forEach(([c,d])=>{a=[...a,c,e?d:encodeURIComponent(d)]});const l=a.join(",");switch(n){case"form":return`${i}=${l}`;case"label":return`.${l}`;case"matrix":return`;${i}=${l}`;default:return l}}const o=xh(n),s=Object.entries(r).map(([a,l])=>Cn({allowReserved:e,name:n==="deepObject"?`${i}[${a}]`:a,value:l})).join(o);return n==="label"||n==="matrix"?o+s:s},Sh=({path:e,url:t})=>{let i=t;const n=t.match(_h);if(n)for(const r of n){let o=!1,s=r.substring(1,r.length-1),a="simple";s.endsWith("*")&&(o=!0,s=s.substring(0,s.length-1)),s.startsWith(".")?(s=s.substring(1),a="label"):s.startsWith(";")&&(s=s.substring(1),a="matrix");const l=e[s];if(l!=null){if(Array.isArray(l)){i=i.replace(r,Aa({explode:o,name:s,style:a,value:l}));continue}if(typeof l=="object"){i=i.replace(r,Oa({explode:o,name:s,style:a,value:l}));continue}if(a==="matrix"){i=i.replace(r,`;${Cn({name:s,value:l})}`);continue}i=i.replace(r,a==="label"?`.${l}`:l)}}return i},ka=({allowReserved:e,array:t,object:i}={})=>n=>{let r=[];if(n&&typeof n=="object")for(const o in n){const s=n[o];if(s!=null){if(Array.isArray(s)){r=[...r,Aa({allowReserved:e,explode:!0,name:o,style:"form",value:s,...t})];continue}if(typeof s=="object"){r=[...r,Oa({allowReserved:e,explode:!0,name:o,style:"deepObject",value:s,...i})];continue}r=[...r,Cn({allowReserved:e,name:o,value:s})]}}return r.join("&")},Ah=e=>{if(e){if(e.startsWith("application/json")||e.endsWith("+json"))return"json";if(e==="multipart/form-data")return"formData";if(["application/","audio/","image/","video/"].some(t=>e.startsWith(t)))return"blob";if(e.startsWith("text/"))return"text"}},Oh=({baseUrl:e,path:t,query:i,querySerializer:n,url:r})=>{const o=r.startsWith("/")?r:`/${r}`;let s=e+o;t&&(s=Sh({path:t,url:s}));let a=i?n(i):"";return a.startsWith("?")&&(a=a.substring(1)),a&&(s+=`?${a}`),s},To=(e,t)=>{var i;const n={...e,...t};return(i=n.baseUrl)!=null&&i.endsWith("/")&&(n.baseUrl=n.baseUrl.substring(0,n.baseUrl.length-1)),n.headers=Ea(e.headers,t.headers),n},Ea=(...e)=>{const t=new Headers;for(const i of e){if(!i||typeof i!="object")continue;const n=i instanceof Headers?i.entries():Object.entries(i);for(const[r,o]of n)if(o===null)t.delete(r);else if(Array.isArray(o))for(const s of o)t.append(r,s);else o!==void 0&&t.set(r,typeof o=="object"?JSON.stringify(o):o)}return t};class Lo{constructor(){this._fns=[]}eject(t){const i=this._fns.indexOf(t);i!==-1&&(this._fns=[...this._fns.slice(0,i),...this._fns.slice(i+1)])}use(t){this._fns=[...this._fns,t]}}const kh=()=>({request:new Lo,response:new Lo}),Eh={bodySerializer:e=>JSON.stringify(e)},Ph=ka({allowReserved:!1,array:{explode:!0,style:"form"},object:{explode:!0,style:"deepObject"}}),$h={"Content-Type":"application/json"},Pa=(e={})=>({...Eh,baseUrl:"",fetch:globalThis.fetch,headers:$h,parseAs:"auto",querySerializer:Ph,...e}),Mh=(e={})=>{let t=To(Pa(),e);const i=()=>({...t}),n=s=>(t=To(t,s),i()),r=kh(),o=async s=>{const a={...t,...s,headers:Ea(t.headers,s.headers)};a.body&&a.bodySerializer&&(a.body=a.bodySerializer(a.body)),a.body||a.headers.delete("Content-Type");const l=Oh({baseUrl:a.baseUrl??"",path:a.path,query:a.query,querySerializer:typeof a.querySerializer=="function"?a.querySerializer:ka(a.querySerializer),url:a.url}),c={redirect:"follow",...a};let d=new Request(l,c);for(const v of r.request._fns)d=await v(d,a);const u=a.fetch;let h=await u(d);for(const v of r.response._fns)h=await v(h,d,a);const p={request:d,response:h};if(h.ok){if(h.status===204||h.headers.get("Content-Length")==="0")return{data:{},...p};if(a.parseAs==="stream")return{data:h.body,...p};const v=(a.parseAs==="auto"?Ah(h.headers.get("Content-Type")):a.parseAs)??"json";let b=await h[v]();return v==="json"&&a.responseTransformer&&(b=await a.responseTransformer(b)),{data:b,...p}}let g=await h.text();if(a.throwOnError)throw new Error(g);try{g=JSON.parse(g)}catch{}return{error:g||{},...p}};return{connect:s=>o({...s,method:"CONNECT"}),delete:s=>o({...s,method:"DELETE"}),get:s=>o({...s,method:"GET"}),getConfig:i,head:s=>o({...s,method:"HEAD"}),interceptors:r,options:s=>o({...s,method:"OPTIONS"}),patch:s=>o({...s,method:"PATCH"}),post:s=>o({...s,method:"POST"}),put:s=>o({...s,method:"PUT"}),request:o,setConfig:n,trace:s=>o({...s,method:"TRACE"})}},$a=Mh(Pa()),Ma=e=>((e==null?void 0:e.client)??$a).post({...e,url:"/v1/speech/transcribe"}),Ra=e=>((e==null?void 0:e.client)??$a).put({...e,url:"/v1/reports/{id}"});class Gr{constructor(t,i){this.sessionId=Ji(),this.reportId=ir(),this.clearOnStopRecordingListener=void 0,this.transcribeConfig={metadata:{userAgent:navigator.userAgent,...t.metadata},...t},this.onTranscript=i}activate(t){var i;(i=this.clearOnStopRecordingListener)==null||i.call(this),this.clearOnStopRecordingListener=t.hooks.onStopRecording(async(n,r)=>{if(!r.shouldProcessRecording)return;const o=await Ca(n);let s={};this.transcribeConfig.customerKey&&(s["x-api-key"]=this.transcribeConfig.customerKey),s={...s,...this.transcribeConfig.headers};const a=(await Ma({baseUrl:this.transcribeConfig.apiURL??"https://api.attendi.nl",body:{audio:o,userId:this.transcribeConfig.userId,unitId:this.transcribeConfig.unitId,config:this.transcribeConfig.config,metadata:{reportId:this.reportId,sessionId:this.sessionId,userAgent:navigator.userAgent,...this.transcribeConfig.metadata}},headers:s})).data;if((a==null?void 0:a.transcript)===void 0||(a==null?void 0:a.transcript)===null)throw new Error("No response from transcribe service");await this.onTranscript(a.transcript,t)})}deactivate(){var t;(t=this.clearOnStopRecordingListener)==null||t.call(this),this.clearOnStopRecordingListener=void 0}setSessionId(t){this.sessionId=t}resetSessionId(){this.sessionId=Ji()}setReportId(t){this.reportId=t}resetReportId(){this.reportId=ir()}setConfig(t){this.transcribeConfig=t}}const G=8;var Ta=(e=>(e.none="none",e.outer="outer",e.inner="inner",e))(Ta||{}),La=(e=>(e.left="left",e.right="right",e.top="top",e.bottom="bottom",e.all="all",e))(La||{});class Rh{constructor(){this.volume=0,this.pluginCleanupCallbacks=[]}activate(t){this.handleVolumeUpdateBound=i=>{var n;const r=(n=i.detail)==null?void 0:n.volume;r!==void 0&&this.updateVolume(r,t)},t.addEventListener("attendi-microphone-volume-updated",this.handleVolumeUpdateBound),this.addVariableWrapperClasses(t),this.addDynamicStyle(t),this.pluginCleanupCallbacks.push(t.ui.transformViewOnState((i,n)=>{if(i==null)return i;if(n==="Recording"&&t.volumeFeedbackType==="outer"){const r=this.getOuterVolumeFeedbackAnimationStyle(t);return f`
            <div class="inner-button-height w-100" style="position: relative;">
              <div
                class="volume-feedback inner-button-height w-100"
                style=${r}
              ></div>

              ${i}
            </div>
          `}return i}))}addDynamicStyle(t){this.pluginCleanupCallbacks.push(t.addDynamicStyle("volume-feedback",x`
          .variable-wrapper.outer-volume-feedback-type.no-volume-feedback {
            --attendi-microphone-padding: 0px;
          }

          .variable-wrapper.outer-volume-feedback-type.outer-volume-feedback-type-left {
            --attendi-microphone-padding-left: ${G}px;
          }

          .variable-wrapper.outer-volume-feedback-type.outer-volume-feedback-type-right {
            --attendi-microphone-padding-right: ${G}px;
          }

          .variable-wrapper.outer-volume-feedback-type.outer-volume-feedback-type-top {
            --attendi-microphone-padding-top: ${G}px;
          }

          .variable-wrapper.outer-volume-feedback-type.outer-volume-feedback-type-bottom {
            --attendi-microphone-padding-bottom: ${G}px;
          }

          .variable-wrapper.outer-volume-feedback-type.outer-volume-feedback-type-all {
            --attendi-microphone-padding-top: ${G}px;
            --attendi-microphone-padding-right: ${G}px;
            --attendi-microphone-padding-bottom: ${G}px;
            --attendi-microphone-padding-left: ${G}px;
          }

          /* The div that represents the volume feedback, placed behind the microphone button */
          .volume-feedback {
            position: absolute;
            border-radius: var(--attendi-microphone-border-radius);
            background-color: var(--color-volume-feedback);
          }
        `),t.ui.transformViewOnState((i,n)=>{if(i==null)return i;if(n==="Recording"&&t.volumeFeedbackType==="outer"){const r=this.getOuterVolumeFeedbackAnimationStyle(t);return f`
            <div class="inner-button-height w-100" style="position: relative;">
              <div
                class="volume-feedback inner-button-height w-100"
                style=${r}
              ></div>

              ${i}
            </div>
          `}return i}),t.hooks.onBeforeStopRecording(()=>{t.animatableElements.setAnimatedMicrophoneFill(0)}))}addVariableWrapperClasses(t){this.pluginCleanupCallbacks.push(t.addVariableWrapperClass("outer-volume-feedback-type",()=>t.volumeFeedbackType==="outer"),t.addVariableWrapperClass("inner-volume-feedback-type",()=>t.volumeFeedbackType==="inner"),t.addVariableWrapperClass("outer-volume-feedback-type-all",()=>t.outerVolumeFeedbackType==="all"),t.addVariableWrapperClass("outer-volume-feedback-type-left",()=>t.outerVolumeFeedbackType==="left"),t.addVariableWrapperClass("outer-volume-feedback-type-right",()=>t.outerVolumeFeedbackType==="right"),t.addVariableWrapperClass("outer-volume-feedback-type-top",()=>t.outerVolumeFeedbackType==="top"),t.addVariableWrapperClass("outer-volume-feedback-type-bottom",()=>t.outerVolumeFeedbackType==="bottom"))}updateVolume(t,i){const n=.825*this.volume+.175*t;this.setVolume(n,i)}setVolume(t,i){const n=this.volume;this.volume=t,!(Math.abs(n-t)<5e-5)&&(i.animatedMicrophoneFill!==void 0&&i.volumeFeedbackType==="inner"&&this.updateInnerVolumeFeedback(i),i.requestUpdate())}updateInnerVolumeFeedback(t){const i=(.2+.8*this.volume)*100,n=t.animatableElements.getAnimatedMicrophoneFill();Math.abs(n-i)>.05&&t.animatableElements.setAnimatedMicrophoneFill(i)}getOuterVolumeFeedbackAnimationStyle(t){var i;const n=(i=t.recordingButton)==null?void 0:i.getBoundingClientRect(),r=t.outerVolumeFeedbackType;return Hs(Th(this.volume,n,r))}deactivate(t){this.handleVolumeUpdateBound!==void 0&&t.removeEventListener("attendi-microphone-volume-updated",this.handleVolumeUpdateBound);for(const i of this.pluginCleanupCallbacks)i();this.pluginCleanupCallbacks=[]}}function Th(e,t,i){const n=(t==null?void 0:t.width)??0,r=(t==null?void 0:t.height)??0,o=G/n,s=G/r,a=o*2,l=s*2,c=.3,d=1+(c+(1-c)*e)*a,u=1+(c+(1-c)*e)*l;if(i==="left")return{transform:`scaleX(${h(d)})`,"transform-origin":"100% 50%"};if(i==="right")return{transform:`scaleX(${h(d)})`,"transform-origin":"0% 50%"};if(i==="top")return{transform:`scaleY(${h(u)})`,"transform-origin":"50% 100%"};if(i==="bottom")return{transform:`scaleY(${h(u)})`,"transform-origin":"50% 0%"};return{transform:`scaleX(${d}) scaleY(${u})`};function h(p){return 1+(p-1)/2}}const Lh={errorNotificationAudioURL:"https://stbinarydata.blob.core.windows.net/binarydata/error_notification.mp3",silent:!1};class Io{constructor(t){this.errorSoundLoaded=!1,this.notificationSoundContext=void 0,this.notificationSoundGain=void 0,this.errorNotificationAudio=void 0,this.pluginCleanupCallbacks=[];const i={...Lh,...t};this.errorNotificationAudioURL=i.errorNotificationAudioURL,this.silent=i.silent}activate(t){this.pluginCleanupCallbacks.push(t.hooks.onFirstClick(async()=>{this.silent||await this.loadNotificationSounds()}),t.hooks.onError(i=>{var n;console.log("there was an error: ",((n=i.detail)==null?void 0:n.title)??""),t.showErrorDialog(i),!this.silent&&this.playAudio(this.errorNotificationAudio)}))}async playAudio(t){t!==void 0&&this.notificationSoundContext!==void 0&&this.notificationSoundGain!==void 0&&await Sa(t,this.notificationSoundContext,this.notificationSoundGain)}async loadNotificationSounds(){if(!this.errorSoundLoaded){try{this.notificationSoundContext=new AudioContext}catch{console.error("Failed to create AudioContext. Error sound will not be played.");return}this.notificationSoundGain=this.notificationSoundContext.createGain(),this.notificationSoundGain.gain.value=.25,this.notificationSoundGain.connect(this.notificationSoundContext.destination),this.errorNotificationAudio=await nr(this.errorNotificationAudioURL,this.notificationSoundContext),this.errorSoundLoaded=!0}}deactivate(){this.errorSoundLoaded=!1,this.notificationSoundContext=void 0,this.notificationSoundGain=void 0,this.errorNotificationAudio=void 0;for(const t of this.pluginCleanupCallbacks)t();this.pluginCleanupCallbacks=[]}}const Ih=new Error("Current device does not support microphone API");class Ia extends Error{constructor(t){super(t),this.name="NoAudioConsentError"}}async function Do(){Dh();const e={video:!1};let t=!1;try{t=window.navigator.mediaDevices.getSupportedConstraints().sampleRate===!0}catch{}t?e.audio={sampleRate:Dr,channelCount:1}:e.audio=!0;try{return await window.navigator.mediaDevices.getUserMedia(e)}catch(i){throw new Ia(i.message)}}function Dh(){var e;if(((e=window.navigator)==null?void 0:e.mediaDevices)===void 0)throw Ih}function Bo(e){e.getTracks().forEach(t=>t.stop())}const Bh=new Error("Current device does not support microphone API"),jh=256,Uh=163840,Nh=2;class Vh{constructor(){this.areAudioNodesConnected=!1,this.bufferPosition=0,this.signalEnergyCallbacks={},this.audioFrameCallbacks={},this.bufferCallbacks={},this._buffer=new Float32Array(Uh)}get buffer(){return this._buffer.subarray(0,this.bufferPosition)}set buffer(t){this._buffer=t,this.bufferPosition=t.length,Object.values(this.bufferCallbacks).forEach(i=>i(t))}async initialize(t){var i;jo(t),this.audioContext!==void 0&&(await((i=this.audioContext)==null?void 0:i.close()),this.audioContext=void 0),this.scriptProcessorNode!==void 0&&(this.scriptProcessorNode.disconnect(),this.scriptProcessorNode.onaudioprocess=()=>{},this.scriptProcessorNode=void 0),this.mediaStreamSourceNode!==void 0&&(this.mediaStreamSourceNode.disconnect(),this.mediaStreamSourceNode=void 0);const n=await Gh(),r=n.createMediaStreamSource(t),o=n.sampleRate,s=Dr,a=o/s,l=a!==1;if(l&&a<1)throw new Error(`We will try to resample as we expect to record at a sample rate of ${s} Hz, but the current sample rate is ${o} Hz. However, The original sample rate (${o} Hz) is lower than the target sample rate (${s} Hz). Resampling to a higher rate is not supported.`);const c=await Zh(n,({inputBuffer:d})=>{const u=d.getChannelData(0);let h=u;l&&(h=zh(u,a)),this.addToBuffer(h);const p=Fh(h);Object.values(this.signalEnergyCallbacks).forEach(g=>g(p))});this.audioContext=n,this.scriptProcessorNode=c,this.mediaStreamSourceNode=r}addToBuffer(t){if(Object.values(this.audioFrameCallbacks).forEach(n=>n(t)),this.bufferPosition+t.length>this._buffer.length){const n=Math.max(this._buffer.length*Nh,this.bufferPosition+t.length),r=new Float32Array(n);r.set(this._buffer.subarray(0,this.bufferPosition)),this._buffer=r}this._buffer.set(t,this.bufferPosition),this.bufferPosition+=t.length;const i=this._buffer.subarray(0,this.bufferPosition);Object.values(this.bufferCallbacks).forEach(n=>n(i))}clearBuffer(){this.bufferPosition=0}async start(){if(this.mediaStreamSourceNode===void 0)throw new Error("MediaStreamSourceNode is undefined. The `initialize` method must be called before calling this method.");if(jo(this.mediaStreamSourceNode.mediaStream),!this.areAudioNodesConnected){if(this.scriptProcessorNode===void 0||this.audioContext===void 0)throw new Error("ScriptProcessorNode or AudioContext is undefined. The `initialize` method must be called before calling this method.");this.scriptProcessorNode.connect(this.audioContext.destination),this.mediaStreamSourceNode.connect(this.scriptProcessorNode),this.areAudioNodesConnected=!0}}async stop(){if(this.areAudioNodesConnected){if(this.mediaStreamSourceNode===void 0||this.scriptProcessorNode===void 0)throw new Error("MediaStreamSourceNode or ScriptProcessorNode undefined. The `initialize` method must be called before calling this method.");this.mediaStreamSourceNode.disconnect(),this.scriptProcessorNode.disconnect(),this.areAudioNodesConnected=!1}}onSignalEnergy(t){const i=ei();return this.signalEnergyCallbacks[i]=t,()=>{delete this.signalEnergyCallbacks[i]}}onAudioFrames(t){const i=ei();return this.audioFrameCallbacks[i]=t,()=>{delete this.audioFrameCallbacks[i]}}onBuffer(t){const i=ei();return this.bufferCallbacks[i]=t,()=>{delete this.bufferCallbacks[i]}}}function jo(e){if(!e.active)throw new Error("MediaStream is not active. Please provide an active MediaStream.")}function Fh(e){const t=e.length,i=e.reduce((r,o)=>r+o)/t,n=e.map(r=>Math.pow(r-i,2));return Math.sqrt(n.reduce((r,o)=>r+o)/t)}function zh(e,t){const i=Math.floor(e.length/t),n=new Float32Array(i);for(let r=0,o=0;r<i;r++,o+=t)n[r]=e[Math.floor(o)];return n}async function Hh(e){e.state==="running"&&await e.resume()}async function Gh(){try{return await Wh()}catch{throw Bh}}async function Wh(){const e={};window.navigator.mediaDevices.getSupportedConstraints().sampleRate!==void 0&&(e.sampleRate=Dr);let t;return window.webkitAudioContext!==void 0?t=await qh(e):t=new AudioContext(e),await Hh(t),t}async function qh(e){let t;try{t=new window.webkitAudioContext(e)}catch{t=new window.webkitAudioContext}return await t.resume(),t}async function Zh(e,t){const i=e.createScriptProcessor(jh,1,1);return i.onaudioprocess=t,i}class Kh extends Error{constructor(t){super(t)}}var Yh=Object.defineProperty,$=(e,t,i,n)=>{for(var r=void 0,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=s(t,i,r)||r);return r&&Yh(t,i,r),r},Ct=(e=>(e.NotStartedRecording="NotStartedRecording",e.LoadingBeforeRecording="LoadingBeforeRecording",e.Recording="Recording",e.ProcessingRecording="ProcessingRecording",e))(Ct||{});const Jh={stopDelayMilliseconds:ia,shouldProcessRecording:!0,shouldClearBuffer:!0},Xh="#1C69E8",Qh={"attendi.assistant.write-my-report":{isEnabled:!1},"attendi.reporting-methods.soep":{isEnabled:!0},"attendi.reporting-methods.soap":{isEnabled:!0},"attendi.reporting-methods.time":{isEnabled:!0}},H=Object.freeze({transcribeAPIConfig:"transcribe-api-config",baseColor:"base-color",volumeFeedbackType:"volume-feedback-type",outerVolumeFeedbackType:"outer-volume-feedback-type",noVolumeFeedback:"no-volume-feedback",showOptions:"show-options",silent:"silent",showRecordingDelayMilliseconds:"show-recording-delay-milliseconds",stayLarge:"stay-large",featureOverrides:"feature-overrides",defaultPlugins:"default-plugins"}),Da=class extends R{constructor(){super(...arguments),this._transcribeAPIConfig=void 0,this.noVolumeFeedback=!1,this.showOptions=!1,this.stayLarge=!1,this.silent=!1,this.showRecordingDelayMilliseconds=lu,this.shortenShowRecordingDelayByMilliseconds=0,this.volumeFeedbackType=Ta.inner,this.outerVolumeFeedbackType=La.all,this.featureOverrides={},this._defaultPlugins=["notification-audio","volume-feedback","attendi-transcribe","linear-reporting-method","error"],this.removeDispatchVolumeEventCallback=void 0,this.recorder=new Vh,this._microphoneUIState="NotStartedRecording",this.errorModalContent=void 0,this.stopRecordingDelayMilliseconds=ia,this.firstClickHappened=!1,this.checkEmptyRecording=!0,this._colorTheme=void 0,this.plugins={registeredPlugins:{},activatedPlugins:new Set,add(t,i){this.registeredPlugins[t]=i},remove:t=>{var i,n;this.plugins.hasPlugin(t)&&(this.plugins.isPluginActivated(t)&&((n=(i=this.plugins.registeredPlugins[t]).deactivate)==null||n.call(i,this)),delete this.plugins.registeredPlugins[t],this.plugins.activatedPlugins.delete(t))},removeAll:()=>{for(const t of Object.keys(this.plugins.registeredPlugins))this.plugins.remove(t)},get:t=>this.plugins.registeredPlugins[t],activate:()=>{for(const[t,i]of Object.entries(this.plugins.registeredPlugins))this.plugins.isPluginActivated(t)||(i.activate(this),this.plugins.activatedPlugins.add(t))},deactivate:()=>{var t;for(const[i,n]of Object.entries(this.plugins.registeredPlugins))this.plugins.isPluginActivated(i)&&((t=n.deactivate)==null||t.call(n,this),this.plugins.activatedPlugins.delete(i))},hasPlugin(t){return t in this.registeredPlugins},isPluginActivated(t){return this.hasPlugin(t)&&this.activatedPlugins.has(t)}},this.addPluginCleanups=[],this.variableWrapperClassFunctions=[],this.dynamicStyles={},this.commands={},this.menuGroups=[],this.menuItems={},this.tooltips={},this.tooltipContent=void 0,this.isTooltipOpen=!1,this.dialogs={},this.dialogContent=void 0,this.stateRenderers=new W,this.viewTransformers=new W,this.menuOptionsIcon=void 0,this.ui={renderOnState:t=>{this.stateRenderers.push(t)},transformViewOnState:t=>(this.viewTransformers.addEventListener(t),()=>{this.viewTransformers.removeEventListener(t)}),menu:{hidden:!1,hide:()=>this.ui.menu.hidden=!0,unhide:()=>this.ui.menu.hidden=!1,setIcon:t=>{this.menuOptionsIcon=t},resetIcon:()=>{this.menuOptionsIcon=void 0}}},this.microphoneCallbacks={firstClickCbs:new W,beforeStartRecordingCbs:new W,startRecordingCbs:new W,beforeStopRecordingCbs:new W,stopRecordingCbs:new W,errorCbs:new W,UIStateCbs:new W,audioFrameCbs:new W,transcribeAPIConfigCallbacks:new W,attributeChangedCbs:new W,propertiesChangedCbs:new W},this.hooks={onFirstClick:t=>(this.microphoneCallbacks.firstClickCbs.addEventListener(t),()=>this.microphoneCallbacks.firstClickCbs.removeEventListener(t)),onUIState:t=>(this.microphoneCallbacks.UIStateCbs.addEventListener(t),()=>this.microphoneCallbacks.UIStateCbs.removeEventListener(t)),onAudioFrames:t=>this.recorder.onAudioFrames(t),onBeforeStartRecording:t=>(this.microphoneCallbacks.beforeStartRecordingCbs.addEventListener(t),()=>this.microphoneCallbacks.beforeStartRecordingCbs.removeEventListener(t)),onStartRecording:t=>(this.microphoneCallbacks.startRecordingCbs.addEventListener(t),()=>this.microphoneCallbacks.startRecordingCbs.removeEventListener(t)),onBeforeStopRecording:t=>(this.microphoneCallbacks.beforeStopRecordingCbs.addEventListener(t),()=>this.microphoneCallbacks.beforeStopRecordingCbs.removeEventListener(t)),onStopRecording:t=>(this.microphoneCallbacks.stopRecordingCbs.addEventListener(t),()=>this.microphoneCallbacks.stopRecordingCbs.removeEventListener(t)),onError:t=>(this.microphoneCallbacks.errorCbs.addEventListener(t),()=>this.microphoneCallbacks.errorCbs.removeEventListener(t)),onTranscribeAPIConfig:t=>(this.microphoneCallbacks.transcribeAPIConfigCallbacks.addEventListener(t),()=>this.microphoneCallbacks.transcribeAPIConfigCallbacks.removeEventListener(t)),onAttributeChanged:t=>(this.microphoneCallbacks.attributeChangedCbs.addEventListener(t),()=>this.microphoneCallbacks.attributeChangedCbs.removeEventListener(t)),onPropertiesChanged:t=>(this.microphoneCallbacks.propertiesChangedCbs.addEventListener(t),()=>this.microphoneCallbacks.propertiesChangedCbs.removeEventListener(t))},this.animatableElements=Object.freeze({setAnimatedMicrophoneFill:t=>{var i;return(i=this.animatedMicrophoneFill)==null?void 0:i.setAttribute("offset",`${t}%`)},getAnimatedMicrophoneFill:()=>{var t;const i=(t=this.animatedMicrophoneFill)==null?void 0:t.getAttribute("offset");return Number.parseFloat((i==null?void 0:i.slice(0,-1))??"0")}})}get transcribeAPIConfig(){return this._transcribeAPIConfig}set transcribeAPIConfig(t){if(t!==null&&t!==this._transcribeAPIConfig){this._transcribeAPIConfig=t,this.reset();for(const i of this.microphoneCallbacks.transcribeAPIConfigCallbacks)i(t)}}get defaultPlugins(){return this._defaultPlugins}set defaultPlugins(t){this.updateDefaultPlugins(this.defaultPlugins,t),this._defaultPlugins=t}get audioBuffer(){var t;const i=(t=this.recorder)==null?void 0:t.buffer;if(i!==void 0)return new Float32Array(i)}clearBuffer(){var t;(t=this.recorder)==null||t.clearBuffer()}get microphoneUIState(){return this._microphoneUIState}set microphoneUIState(t){this._microphoneUIState=t;for(const i of this.microphoneCallbacks.UIStateCbs)i(t);this.dispatchEvent(new CustomEvent("microphoneuistateupdated",{detail:t,bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("attendi-microphone-ui-state-updated",{detail:t,bubbles:!0,composed:!0}))}get animatedMicrophoneFill(){const t="#microphoneFill";return this.slottedMicrophoneIconElements.length>0?this.slottedMicrophoneIconElements[0].querySelector(t):this.renderRoot.querySelector(t)}connectedCallback(){super.connectedCallback(),this.addEventListener(ya,this.handleError),this.defaultPlugins.length>0&&this.updateDefaultPlugins([],this.defaultPlugins),this.setColors()}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.tooltipCleanup)==null||t.call(this),this.plugins.deactivate()}updated(t){for(const i of this.microphoneCallbacks.propertiesChangedCbs)i(t)}attributeChangedCallback(t,i,n){if(super.attributeChangedCallback(t,i,n),t===H.transcribeAPIConfig&&(this.transcribeAPIConfig=JSON.parse(n)),t===H.defaultPlugins){const r=i===null?[]:JSON.parse(i),o=n===null?[]:JSON.parse(n);this.updateDefaultPlugins(r,o)}for(const r of this.microphoneCallbacks.attributeChangedCbs)r(t,i,n)}render(){const t={"show-options":this.showOptions,"stay-large":this.stayLarge};for(const{className:o,predicate:s}of this.variableWrapperClassFunctions)s()&&(t[o]=!0);const i=ot(t),n=ot({"not-started-recording":this.microphoneUIState==="NotStartedRecording","loading-before-recording":this.microphoneUIState==="LoadingBeforeRecording",recording:this.microphoneUIState==="Recording","processing-recording":this.microphoneUIState==="ProcessingRecording"}),r=ot({open:this.isTooltipOpen});return f`
      <!-- Allow styles to be inserted at runtime. Sometimes the CSS rules will have
          to add '!important' as they have lower priority than the CSS defined in this
          class itself.  -->
      ${Object.values(this.dynamicStyles).map(o=>f`<style>
            ${o}
          </style>`)}

      <!-- The variable wrapper div only exists to set some CSS variables depending on the
           values of the microphone component variables. It's set to 'display: contents;', so it
           doesn't influence any of the styling itself. -->
      <div class="variable-wrapper ${i}">
        <div
          class="view-wrapper ${n}"
          data-test="attendi-microphone__view-wrapper"
        >
          ${this.getTransformedView()}
        </div>
      </div>

      <div class="dialog-container">${this.dialogContent}</div>

      <!-- TODO: can use the existing dialog (?) -->
      ${this.getErrorModal()}

      <div class="tooltip ${r}" role="tooltip">
        ${this.tooltipContent}
        <div class="tooltip__arrow"></div>
      </div>
    `}getTransformedView(){let t=this.getView();for(const i of this.viewTransformers)t=i(t,this.microphoneUIState);return t}getView(){for(const t of this.stateRenderers){const i=t(this.microphoneUIState);if(i!==void 0)return i}switch(this.microphoneUIState){case"NotStartedRecording":return this.getNotStartedRecordingView();case"LoadingBeforeRecording":return this.getLoadingBeforeRecordingView();case"Recording":return this.getRecordingView();case"ProcessingRecording":return this.getProcessingRecordingView();default:return null}}getNotStartedRecordingView(){return this.showOptions?f`<attendi-split-button
        class="not-started-recording-button inner-button-height w-100"
        @main-button-clicked=${this.handleClicked}
      >
        <div slot="main-action" class="recording-inner-button">
          <div class="split-button-microphone-icon">
            <slot name="microphone-icon">${ko}</slot>
          </div>
        </div>

        ${this.menuOptionsIcon!==void 0?f`<div slot="options-action">${this.menuOptionsIcon}</div>`:null}
        ${this.menuOptions}
      </attendi-split-button>`:f`
        <attendi-button
          class="not-started-recording-button inner-button-height w-100"
          @click=${this.handleClicked}
        >
          <div class="button-microphone-icon">
            <slot name="microphone-icon">${ko}</slot>
          </div>
        </attendi-button>
      `}getLoadingBeforeRecordingView(){return this.showOptions?f`
        <attendi-split-button
          class="loading-before-recording-button inner-button-height w-100"
          @main-button-clicked=${this.handleClicked}
        >
          <div slot="main-action" class="recording-inner-button">
            <div class="loading-before-recording-icon show-options">
              ${Eo}
            </div>
          </div>

          ${this.renderMenuOptionsIcon()} ${this.menuOptions}
        </attendi-split-button>
      `:f`
        <attendi-button
          class="loading-before-recording-button inner-button-height w-100"
          @click=${this.handleClicked}
        >
          <div class="loading-before-recording-icon">${Eo}</div>
        </attendi-button>
      `}getRecordingView(){return f`
      <div class="position-relative inner-button-height w-100">
        <attendi-button
          class="recording-button inner-button-height no-border"
          @click=${this.handleClicked}
        >
          <div class="recording-inner-button">
            <div class="split-button-microphone-icon">
              <slot name="microphone-icon"
                >${wu}</slot
              >
            </div>
          </div>
        </attendi-button>
      </div>
    `}getProcessingRecordingView(){return f`
      <attendi-button
        class="processing-recording inner-button-height w-100 no-border "
      >
        ${this.processingAnimation}
      </attendi-button>
    `}get processingAnimation(){return f`
      <div style="display: flex; justify-content: center; height: 100%;">
        <div class="loading-wrapper">
          <div class="loader l1"></div>
          <div class="loader l2"></div>
          <div class="loader l3"></div>
          <div class="loader l4"></div>
          <div class="loader l5"></div>
        </div>
      </div>
    `}get menuOptions(){return this.ui.menu.hidden?null:f`<attendi-action-menu slot="options" class="options-menu">
      ${this.menuGroups.map((t,i)=>this.renderMenuGroup(i,t))}
    </attendi-action-menu>`}renderMenuGroup(t,i){const n=t===0?"bottom":"top";return f`
      ${this.renderMenuGroupHeader(n,i)}
      ${this.renderMenuRows(i)}
    `}renderMenuGroupHeader(t,i){return f`
      <attendi-action-menu-header divider=${t}>
        ${i.icon!==void 0?f`<div slot="icon" class="attendi-action-menu-header-icon">
              ${i.icon}
            </div>`:null}
        ${i.title}
      </attendi-action-menu-header>
    `}renderMenuRows(t){return f`
      <attendi-action-menu-rows>
        ${this.menuItems[t.id].map(i=>this.renderMenuItem(i))}
      </attendi-action-menu-rows>
    `}renderMenuItem(t){return f`
      <attendi-action-menu-row
        @click=${()=>this.executeCommand(t.command)}
        subtitle=${mn(t.subtitle)}
      >
        ${t.icon!==void 0?f`<div slot="icon">${t.icon}</div>`:null}
        ${t.title}
      </attendi-action-menu-row>
    `}handleClicked(){try{this._handleClicked()}catch(t){this.catchRecordingOrTranscribeErrorAndDispatchErrorEvent(t)}}async _handleClicked(){if(!this.firstClickHappened){for(const t of this.microphoneCallbacks.firstClickCbs)await t();this.firstClickHappened=!0}this.microphoneUIState==="NotStartedRecording"?await this.start():this.microphoneUIState==="Recording"&&await this.stop({stopDelayMilliseconds:this.stopRecordingDelayMilliseconds})}async start(){this.microphoneUIState="LoadingBeforeRecording";const t=new Date().getTime();this.mediaStream!==void 0&&Bo(this.mediaStream);try{this.mediaStream=await Do();const i=new Date().getTime()-t;this.shortenShowRecordingDelayByMilliseconds+=i;for(const n of this.microphoneCallbacks.beforeStartRecordingCbs)await n();await this.startRecording()}catch(i){this.reset(),i instanceof Ia?this.dispatchMicrophonePermissionErrorEvent():this.dispatchGeneralStartRecordingErrorEvent()}}async startRecording(){var t;const i=new Date().getTime();(this.mediaStream===void 0||this.mediaStream.active===!1)&&(this.mediaStream=await Do()),(t=this.removeDispatchVolumeEventCallback)==null||t.call(this),this.removeDispatchVolumeEventCallback=this.recorder.onSignalEnergy(n=>{this.dispatchEvent(new CustomEvent("attendi-microphone-volume-updated",{detail:{volumeRaw:n,volume:tp(n)}}))}),await this.recorder.initialize(this.mediaStream),await this.recorder.start(),this.shortenShowRecordingDelayByMilliseconds+=new Date().getTime()-i;for(const n of this.microphoneCallbacks.startRecordingCbs)await n();this.setUIToRecordingAfterDelay(this.shortenShowRecordingDelayByMilliseconds),this.shortenShowRecordingDelayByMilliseconds=0}setUIToRecordingAfterDelay(t){const i=Math.max(this.showRecordingDelayMilliseconds-t,0);this.setUIStartedRecordingTimeout=setTimeout(()=>{this.microphoneUIState="Recording"},i)}async stop(t){const i={...Jh,...t};try{if(this.recorder===void 0)throw new Kh("Recorder is undefined");for(const n of this.microphoneCallbacks.beforeStopRecordingCbs)await n(this.recorder.buffer,i);i.shouldProcessRecording&&(this.microphoneUIState="ProcessingRecording"),await this.stopRecording(i.stopDelayMilliseconds);for(const n of this.microphoneCallbacks.stopRecordingCbs)await n(this.recorder.buffer,i);this.audioBuffer!==void 0&&this.audioBuffer.length===0&&this.checkEmptyRecording&&this.dispatchEmptyRecordingErrorEvent(),i.shouldClearBuffer&&this.clearBuffer(),this.microphoneUIState="NotStartedRecording"}catch(n){console.error(n),this.reset(),n instanceof ju?this.dispatchMicrophonePermissionErrorEvent():this.dispatchGeneralStartRecordingErrorEvent()}}async stopRecording(t=0){var i;await Qu(t),(i=this.recorder)==null||i.stop(),this.mediaStream!==void 0&&Bo(this.mediaStream),this.mediaStream=void 0}dispatchMicrophonePermissionErrorEvent(){this.dispatchEvent(Mi({title:V.noMicrophonePermissionErrorDialogTitle,content:V.noMicrophonePermissionErrorDialogContent}))}dispatchGeneralStartRecordingErrorEvent(){this.dispatchEvent(Mi({title:V.genericStartRecordingErrorDialogTitle,content:V.genericStartRecordingErrorDialogContent}))}getErrorModal(){if(this.errorModalContent!==void 0)return f`<attendi-dialog
        class="error-dialog"
        data-test="attendi-microphone-error-dialog"
      >
        ${this.errorModalContent}
      </attendi-dialog>`}dispatchEmptyRecordingErrorEvent(){this.dispatchEvent(Mi({title:V.emptyRecordingErrorDialogTitle,content:V.emptyRecordingErrorDialogContent}))}dispatchGeneralTranscribeErrorEvent(){this.dispatchEvent(Mi({title:V.genericErrorDialogTitle,content:V.genericErrorDialogContent}))}dispatchSegmentTranscribedEvent(t,i){const n=ih(t,i);this.dispatchEvent(n)}catchRecordingOrTranscribeErrorAndDispatchErrorEvent(t){const i=ru(t);this.dispatchEvent(i),this.reset()}reset(){this.stopRecording(),this.clearBuffer(),this.setUIStartedRecordingTimeout!==void 0&&(clearTimeout(this.setUIStartedRecordingTimeout),this.setUIStartedRecordingTimeout=void 0),this.microphoneUIState="NotStartedRecording",this.shortenShowRecordingDelayByMilliseconds=0}async handleError(t){for(const i of this.microphoneCallbacks.errorCbs)await i(t)}async showErrorDialog(t){var i;if(t.detail===void 0)return;const n=t.detail;this.errorModalContent=this.getTitledInnerModalContent(n.title,n.content),await this.updateComplete,(i=this.errorDialog)==null||i.showModal()}getTitledInnerModalContent(t,i){const n={icon:Br,header:t??"",content:i??"",buttons:f`
        <div
          class="titled-inner-modal-content__buttons__confirm"
          @click=${()=>this.closeErrorModal()}
          data-test="root-inner-modal__close"
        >
          ${V.ok}
        </div>
      `};return f` <div class="titled-inner-modal-content-wrapper">
      <attendi-titled-inner-modal
        .data=${n}
      ></attendi-titled-inner-modal>
    </div>`}closeErrorModal(){this.errorDialog.close(),this.errorModalContent=void 0}setColors(t){const i=this.baseColor!==void 0||t!==void 0?dh:ch,n=t??this.baseColor??Xh;this.colorTheme=i(n)}get colorTheme(){return this._colorTheme}set colorTheme(t){var i;this._colorTheme=t;const n=(i=this.shadowRoot)==null?void 0:i.host;n===void 0||t===void 0||uh(n,t)}updateDefaultPlugins(t,i){const n=t.filter(o=>!i.includes(o));let r=i.filter(o=>!t.includes(o));this.silent&&(r=r.filter(o=>o!=="notification-audio")),this.noVolumeFeedback&&(r=r.filter(o=>o!=="volume-feedback"));for(const o of n)this.plugins.remove(o);for(const o of this.addPluginCleanups)o();this.addPluginCleanups=[];for(const o of r)this.addDefaultPlugin(o);r.length>0&&this.plugins.activate()}addDefaultPlugin(t){switch(t){case"notification-audio":this.plugins.add(t,new Mo),this.addPluginCleanups.push(this.hooks.onAttributeChanged((i,n,r)=>{this.defaultPlugins.includes(t)&&i===H.silent&&(n===null&&r!==null?this.plugins.remove(t):n!==null&&r===null&&(this.plugins.remove(t),this.plugins.add(t,new Mo)))}));break;case"volume-feedback":{this.plugins.add(t,new Rh);break}case"attendi-transcribe":this.transcribeAPIConfig!==void 0&&this.addDefaultAttendiTranscribePlugin(this.transcribeAPIConfig),this.addPluginCleanups.push(this.hooks.onTranscribeAPIConfig(i=>{if(i===void 0){this.plugins.remove(t);return}this.addDefaultAttendiTranscribePlugin(i),this.plugins.activate()}));break;case"linear-reporting-method":this.addPluginCleanups.push(this.hooks.onTranscribeAPIConfig(i=>{if(this.plugins.remove(t),i===void 0)return;const n={apiURL:i.apiURL,customerKey:i.customerKey,userId:i.userId,config:{model:i.modelType},unitId:i.unitId};this.plugins.add(t,new yh(n)),this.plugins.activate()}));break;case"error":this.plugins.add(t,new Io({silent:this.silent})),this.addPluginCleanups.push(this.hooks.onAttributeChanged((i,n,r)=>{if(this.defaultPlugins.includes(t)&&i==="silent"){const o=r!==null;this.plugins.remove(t),this.plugins.add(t,new Io({silent:o}))}}));break;default:throw new Error(`Plugin ${t} not found.`)}}addDefaultAttendiTranscribePlugin(t){if(!this.defaultPlugins.includes("attendi-transcribe")||(this.plugins.remove("attendi-transcribe"),t===void 0))return;const i={apiURL:t.apiURL,customerKey:t.customerKey,userId:t.userId,config:{model:t.modelType},unitId:t.unitId};this.plugins.add("attendi-transcribe",new Gr(i,n=>{this.dispatchEvent(new CustomEvent("attendi-microphone-transcript",{detail:{transcript:n}})),this.dispatchEvent(new CustomEvent("recordersegmenttranscribed",{detail:{transcript:n,text:n},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("attendi-speech-segment",{detail:{transcript:n,text:n}})),this.dispatchEvent(new CustomEvent("attendi-speech-service-done",{detail:{transcript:n,text:n}}))}))}addVariableWrapperClass(t,i){return this.variableWrapperClassFunctions.push({className:t,predicate:i}),()=>{this.variableWrapperClassFunctions=this.variableWrapperClassFunctions.filter(n=>n.className!==t)}}addDynamicStyle(t,i){return this.dynamicStyles[t]=i,()=>{delete this.dynamicStyles[t]}}addCommand(t,i){return this.commands[t]=i,()=>{delete this.commands[t]}}executeCommand(t,...i){const n=this.commands[t];if(n===void 0){console.warn(`Command ${t} not found`);return}n(...i)}async executeAsyncCommand(t,...i){const n=this.commands[t];if(n===void 0){console.warn(`Command ${t} not found`);return}await n(...i)}addMenuGroup({id:t,title:i,icon:n,priority:r=1}){return this.menuGroups=[...this.menuGroups,{id:t,title:i,priority:r,icon:n}],this.menuGroups.sort((o,s)=>o.priority-s.priority),()=>{this.menuGroups=this.menuGroups.filter(o=>o.id!==t)}}addMenuItem({groupId:t,title:i,subtitle:n,icon:r,command:o}){return this.menuItems[t]=[...this.menuItems[t]??[],{title:i,command:o,icon:r,subtitle:n}],()=>{this.menuItems[t]=this.menuItems[t].filter(s=>s.title!==i)}}async showTooltipWithContent(t){this.tooltipContent=t,await this.updateComplete,this.showTooltip()}showTooltip(){this.tooltipContent===void 0&&console.warn("Tooltip content is undefined"),this.updateTooltipPosition(),this.isTooltipOpen=!0,this.splitButtonMainAction!==void 0&&(this.tooltipCleanup=zd(this.splitButtonMainAction,this.tooltip,this.updateTooltipPosition.bind(this)))}closeTooltip(){this.isTooltipOpen=!1}updateTooltipPosition(){this.splitButtonMainAction!==void 0&&fh(this.splitButtonMainAction,this.tooltip,this.tooltipArrow,{offsetOptions:16,placement:"top-start"})}addDialog({id:t,dialog:i}){return this.dialogs[t]=i,()=>{delete this.dialogs[t]}}async showDialog(t){const i=this.dialogs[t];this.dialogContent=i,await this.updateComplete,er(),document.activeElement instanceof HTMLElement&&document.activeElement.blur(),this.dialogChild!==void 0&&this.dialogChild.showModal()}closeDialog(){this.dialogContent=void 0,tr()}renderMenuOptionsIcon(){return this.menuOptionsIcon!==void 0?f`<div slot="options-action">${this.menuOptionsIcon}</div>`:null}get attributeNames(){return H}get featureSettings(){const t=this.featureOverrides;return{...Qh,...t}}};Da.styles=[hh,[ph,x`
        :host {
          display: block;

          --attendi-microphone-padding: var(
              --attendi-microphone-padding-top,
              ${G}px
            )
            var(
              --attendi-microphone-padding-right,
              ${G}px
            )
            var(
              --attendi-microphone-padding-bottom,
              ${G}px
            )
            var(--attendi-microphone-padding-left, ${G}px);

          --attendi-microphone-border-radius: var(
            --attendi-border-radius,
            30px
          );

          /* Style the attendi-button border radii

          To set the border radii for individual corners, use the following variables:
          --attendi-microphone-border-top-left-radius
          --attendi-microphone-border-top-right-radius
          --attendi-microphone-border-bottom-left-radius
          --attendi-microphone-border-bottom-right-radius

          This will set the border radii for the attendi-button
          and attendi-split-button components.
          */
          /* attendi-button */
          --attendi-button-border-top-left-radius: var(
            --attendi-microphone-border-top-left-radius
          );
          --attendi-button-border-top-right-radius: var(
            --attendi-microphone-border-top-right-radius
          );
          --attendi-button-border-bottom-left-radius: var(
            --attendi-microphone-border-bottom-left-radius
          );
          --attendi-button-border-bottom-right-radius: var(
            --attendi-microphone-border-bottom-right-radius
          );

          /* attendi-split-button */
          --attendi-split-button-border-top-left-radius: var(
            --attendi-microphone-border-top-left-radius
          );
          --attendi-split-button-border-top-right-radius: var(
            --attendi-microphone-border-top-right-radius
          );
          --attendi-split-button-border-bottom-left-radius: var(
            --attendi-microphone-border-bottom-left-radius
          );
          --attendi-split-button-border-bottom-right-radius: var(
            --attendi-microphone-border-bottom-right-radius
          );

          /*
        The width of the component depends on a couple of factors:
        - The state of the microphone (recording, processing, etc.)
        - Whether or not the component has options
        resulting in two different widths.

        The below defined variables define the ratios between the different
        widths (small / large).

        **States and widths:**

        State | show-options | Width | Max width (with current show-options settings)
        ------------ | ------------ | ------------ | ------------
        NotStarted + Loading | 0 | s | s
        Recording + Processing | 0 | s | s
        NotStarted + Loading | 1 | l | l
        Recording + Processing | 1 | s | l
        */
          --attendi-microphone-large-max-width: 96;
          --attendi-microphone-small-max-width: 40;

          --attendi-microphone-small-to-large-width-ratio: calc(
            var(--attendi-microphone-small-max-width) /
              var(--attendi-microphone-large-max-width)
          );
        }

        /* The variable-wrapper is a utility class used to set CSS variables
        based on the component's attributes and state. It is for example used to set
        the width of the component and the padding. This is necessary, as the classes
        can change at runtime. (Or at least, I haven't yet found a better way to do it.)
        */
        .variable-wrapper {
          display: contents;

          /* No options, so max. width is 'small', aka square / circle */
          --max-width: var(
            --attendi-microphone-max-width,
            calc(var(--attendi-microphone-small-max-width) * 1px)
          );
          --not-started-or-loading-before-recording-width: var(--max-width);
          --recording-or-processing-width: var(--max-width);
          --attendi-button-border-width: var(
            --attendi-microphone-border-width,
            0px
          );

          --attendi-microphone-padding-top: 0px;
          --attendi-microphone-padding-right: 0px;
          --attendi-microphone-padding-bottom: 0px;
          --attendi-microphone-padding-left: 0px;
        }

        /* Only options present, so max. width is 'large' */
        .variable-wrapper.show-options {
          --max-width: var(
            --attendi-microphone-max-width,
            calc(var(--attendi-microphone-large-max-width) * 1px)
          );
          --not-started-or-loading-before-recording-width: var(--max-width);
          --recording-or-processing-width: calc(
            var(--max-width) *
              var(--attendi-microphone-small-to-large-width-ratio)
          );
        }

        /* Only options present, so max. width is 'large' */
        .variable-wrapper.show-options.stay-large {
          --recording-or-processing-width: var(--max-width);
        }

        /* Sizes of the icons need to be adjusted depending on the size of
        their parent. E.g. if the parent button is wider, the width percentage
        needs to be lower. */
        .variable-wrapper.stay-large .recording-button .stop-wrapper svg {
          width: 18%;
        }
        .variable-wrapper.stay-large
          .recording-button
          .split-button-microphone-icon
          svg,
        .variable-wrapper.stay-large
          .recording-button
          .split-button-microphone-icon
          ::slotted([slot="microphone-icon"]) {
          width: 30%;
        }

        .variable-wrapper {
          --attendi-microphone-padding: var(--attendi-microphone-padding-top)
            var(--attendi-microphone-padding-right)
            var(--attendi-microphone-padding-bottom)
            var(--attendi-microphone-padding-left);
        }

        .not-started-recording,
        .loading-before-recording {
          width: var(--not-started-or-loading-before-recording-width);
        }

        .recording,
        .processing-recording {
          width: var(--recording-or-processing-width);
        }

        .inner-button-height {
          height: var(--attendi-microphone-height, 40px);
        }

        .not-started-recording-button,
        .loading-before-recording-button {
          --attendi-color-background: var(--color-fill-enabled);
          --attendi-color-border: var(--color-outline-enabled);
          /* TODO: separate into --attendi-split-button-color and
          --attendi-button-color */
          --attendi-color-icon: var(--color-icon-enabled);
          --attendi-color-icon-hover: var(--color-icon-hover);
          --attendi-button-color: var(--color-icon-enabled);
          --attendi-button-color-hover: var(--color-icon-hover);

          --attendi-color-background-hover: var(--color-fill-hover);
          --attendi-color-background-active: var(--color-fill-active);
        }

        .no-border {
          --border: none;
        }

        .recording-button {
          position: absolute;
          --attendi-color-background: var(--color-fill-active-enabled);
          --attendi-color-background-hover: var(--color-fill-active-hover);
          --attendi-color-background-active: var(--color-fill-active-active);
          --attendi-color-background-disabled: var(
            --color-fill-active-disabled
          );
        }

        .recording-button svg,
        .recording-button ::slotted([slot="microphone-icon"]) {
          color: var(--color-icon-active-enabled, white);
        }

        .recording-button [slot="options-action"] svg,
        .processing-recording [slot="options-action"] svg {
          color: var(--color-icon-enabled, white);
        }

        attendi-split-button.recording-button,
        attendi-split-button.processing-recording {
          --attendi-split-button-option-action-color-background: white;
        }

        .loading-before-recording-button {
          --attendi-color-background: #ffffff;
        }

        .loading-before-recording-button svg,
        .loading-before-recording-button ::slotted([slot="microphone-icon"]) {
          color: var(--color-icon-enabled);
        }

        .processing-recording {
          --attendi-color-background: var(--color-fill-active-enabled);
          --attendi-color-background-hover: var(--color-fill-active-enabled);
          --attendi-color-background-active: var(--color-fill-active-enabled);
          --attendi-color-background-disabled: var(
            --color-fill-active-disabled
          );
          cursor: default;
        }

        .recording-inner-button {
          margin: auto;
          display: flex;
          place-items: center;
          justify-content: center;
        }

        .stop-wrapper {
          display: flex;
          padding: 0px;
          justify-content: center;
        }

        .stop-wrapper svg {
          width: 36%;
        }

        .loading-wrapper {
          display: flex;
          gap: 4.5%;
          width: 100%;
          height: 100%;
          justify-content: center;
          transform: scaleY(0.5);
        }

        .view-wrapper {
          display: flex;
          padding: var(
            --attendi-microphone-padding
          ); /* to account for volume feedback around button, which needs its own space */
        }

        .mic-icon {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .titled-inner-modal-content-wrapper {
          width: 300px;
        }

        .error-dialog {
          --attendi-dialog-width: fit-content;
        }

        .loading-before-recording-icon {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .loading-before-recording-icon svg {
          width: 35%;
          color: var(--color-icon-enabled);
          animation: processing-rotation 2s infinite linear;
        }

        .loading-before-recording-icon.show-options svg {
          width: 23%;
          color: var(--color-icon-enabled);
          animation: processing-rotation 2s infinite linear;
        }

        @keyframes processing-rotation {
          from {
            transform: rotate(0deg);
            animation-timing-function: cubic-bezier(0.715, 0.15, 0.175, 0.84);
          }
          to {
            transform: rotate(359deg);
          }
        }

        .split-button-microphone-icon {
          display: contents;
        }

        .not-started-recording-button .split-button-microphone-icon svg,
        .not-started-recording-button
          .split-button-microphone-icon
          ::slotted([slot="microphone-icon"]) {
          width: calc(26.67 / 56 * 100%);
        }

        .recording-button .split-button-microphone-icon svg,
        .recording-button
          .split-button-microphone-icon
          ::slotted([slot="microphone-icon"]) {
          width: calc(32 / 56 * 100%);
        }

        .button-microphone-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }

        .button-microphone-icon svg,
        .button-microphone-icon ::slotted([slot="microphone-icon"]) {
          width: calc(21.33 / 32 * 100%);
          height: 100%;
        }

        attendi-action-menu-header [slot="icon"] > svg {
          width: 100%;
          height: 100%;
        }

        @media (min-width: ${it.medium}px) {
          attendi-action-menu-row {
            width: 300px;
          }
        }

        .tooltip {
          /* General tooltip positioning, always applicable with floating-ui tooltips */
          display: none;
          width: max-content;
          position: absolute;
          top: 0;
          left: 0;

          /* Appearance */
          background: white;
          color: black;
          border-radius: 8px;
          font-size: 90%;
          padding: 4px 8px;
          box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px 1px;

          /* Layout inside tooltip */
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .tooltip.open {
          display: flex;
        }

        .tooltip__arrow {
          position: absolute;
          background: white;
          width: 8px;
          height: 8px;
          transform: rotate(45deg);
        }

        .dialog-container {
          display: contents;
        }

        .position-relative {
          position: relative;
        }
      `]];let P=Da;$([y({attribute:H.transcribeAPIConfig,type:Object,reflect:!1})],P.prototype,"_transcribeAPIConfig");$([y({attribute:H.noVolumeFeedback,type:Boolean})],P.prototype,"noVolumeFeedback");$([y({attribute:H.showOptions,type:Boolean})],P.prototype,"showOptions");$([y({attribute:H.stayLarge,type:Boolean})],P.prototype,"stayLarge");$([y({attribute:H.silent,type:Boolean,reflect:!0})],P.prototype,"silent");$([y({attribute:H.showRecordingDelayMilliseconds,type:Number,reflect:!1})],P.prototype,"showRecordingDelayMilliseconds");$([y({attribute:H.baseColor,type:String})],P.prototype,"baseColor");$([y({attribute:H.volumeFeedbackType,type:String})],P.prototype,"volumeFeedbackType");$([y({attribute:H.outerVolumeFeedbackType,type:String})],P.prototype,"outerVolumeFeedbackType");$([y({attribute:H.featureOverrides,type:Object})],P.prototype,"featureOverrides");$([y({type:Array,attribute:H.defaultPlugins})],P.prototype,"_defaultPlugins");$([L()],P.prototype,"_microphoneUIState");$([L()],P.prototype,"errorModalContent");$([I(".error-dialog")],P.prototype,"errorDialog");$([I(".recording-button")],P.prototype,"recordingButton");$([I(":host")],P.prototype,"host");$([I(".options-menu")],P.prototype,"optionsMenu");$([pl({slot:"microphone-icon"})],P.prototype,"slottedMicrophoneIconElements");$([L()],P.prototype,"dynamicStyles");$([L()],P.prototype,"menuGroups");$([L()],P.prototype,"menuItems");$([L()],P.prototype,"tooltips");$([L()],P.prototype,"tooltipContent");$([L()],P.prototype,"isTooltipOpen");$([I(".tooltip")],P.prototype,"tooltip");$([I(".tooltip__arrow")],P.prototype,"tooltipArrow");$([I("[slot='main-action']")],P.prototype,"splitButtonMainAction");$([L()],P.prototype,"dialogs");$([L()],P.prototype,"dialogContent");$([I(".dialog-container")],P.prototype,"dialogContainer");$([I(".dialog-container > *")],P.prototype,"dialogChild");class W extends Array{addEventListener(t){this.push(t)}removeEventListener(t){const i=this.findIndex(n=>n===t);i>=0&&this.splice(i,1)}}function tp(e){const t=e*10,i=ep(t,-.44,15);return Math.pow(i,.5)}function ep(e,t=.12,i=3){const n=e-t,r=1/(1+(n/(1-n))**-i);return Math.min(Math.max(r,0),1)}var ip=Object.defineProperty,np=Object.getOwnPropertyDescriptor,Wr=(e,t,i,n)=>{for(var r=n>1?void 0:n?np(t,i):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=(n?s(t,i,r):s(r))||r);return n&&r&&ip(t,i,r),r};let gi=class extends R{constructor(){super(...arguments),this._value="",this.mostRecentCursorPosition=0}get value(){return this._value}set value(e){this._value=e,this.resetCursorPositionIfItExceedsTextLength(),this.dispatchValueChangedEvents(e)}resetCursorPositionIfItExceedsTextLength(){this.value.length<(this.cursorPosition??0)&&(this.cursorPosition=this.value.length)}get cursorPosition(){return this.selectionStart()}set cursorPosition(e){e!==void 0&&this.editor!==void 0&&(this.editor.selectionEnd=e,this.editor.selectionStart=e,this.mostRecentCursorPosition=e)}render(){return f`
      <textarea
        class="editor typography"
        rows="2"
        spellcheck="false"
        @input=${e=>{const t=e.target.value;this.value=t,this.updateMostRecentCursorPosition()}}
        @change=${e=>{const t=e.target.value;this.value=t,this.updateMostRecentCursorPosition()}}
        .value=${this.value}
      >
      </textarea>
    `}dispatchValueChangedEvents(e){const t=rp(e),i=op(e);try{this.dispatchEvent(t),this.dispatchEvent(i)}catch{}}firstUpdated(){this.updateMostRecentCursorPositionWhenBlurred(),this.restoreToMostRecentCursorPositionWhenFocused()}updateMostRecentCursorPositionWhenBlurred(){var e;(e=this.editor)==null||e.addEventListener("blur",()=>{this.updateMostRecentCursorPosition()})}restoreToMostRecentCursorPositionWhenFocused(){var e;(e=this.editor)==null||e.addEventListener("focus",()=>{this.cursorPosition=this.mostRecentCursorPosition})}async addText(e){if(Y(e))return;this.updateCursorPositionIfItWasReset();const t=this.getUpdatedTextAndCursorPositionAfterAddingTextAtCursor(e);t!==void 0&&this.updateTextAndCursorValue(t)}updateCursorPositionIfItWasReset(){this.cursorPositionWasReset()&&(this.cursorPosition=this.mostRecentCursorPosition)}cursorPositionWasReset(){return this.cursorPosition===0&&this.mostRecentCursorPosition!==0}async updateTextAndCursorValue(e){const{updatedTextValue:t,cursorPositionAfterAddedText:i}=e;this.value=t,this.dispatchValueChangedEvents(this.value),await this.updateComplete,this.cursorPosition=i,this.scrollToEndIfAddedTextAtEnd(i)}scrollToEndIfAddedTextAtEnd(e){this.editor!==void 0&&e===this.value.length&&this.scrollToEnd()}scrollToEnd(){var e;this.editor!==void 0&&(this.editor.scrollTop=(e=this.editor)==null?void 0:e.scrollHeight)}getUpdatedTextAndCursorPositionAfterAddingTextAtCursor(e){if(Y(e))return;const t=this.cursorPosition;if(t===void 0)return;const{firstPartOfString:i,paddingBeforeAddedText:n,paddingAfterAddedText:r,lastPartOfString:o}=sp(this.value,t),s=c(e,this.value.length),a=i+n+s+r+o,l=(i+n+s).length;return{updatedTextValue:a,cursorPositionAfterAddedText:l};function c(d,u){let h=d;return p()&&(h=xp(d)),g()&&(h=Sp(h)),h;function p(){const C=!Y(i)&&!Vo(i);return v()&&C}function g(){const C=!Uo(i)&&No(o),S=Vo(i)&&kp(o),A=C||S;return v()&&!A}function v(){const C=Cp(i);return b()||w()&&!C}function b(){const C=Pp(i.split(`
`),""),S=$p(o.split(`
`),""),A=Fo(C)||Y(C),O=Fo(S)||Y(S);return!(A||O)}function w(){return!(Uo(i)&&No(o)||t===0||t===u)}}}selectionStart(){var e;return(e=this.editor)==null?void 0:e.selectionStart}selectionEnd(){var e;return(e=this.editor)==null?void 0:e.selectionEnd}updateMostRecentCursorPosition(){this.mostRecentCursorPosition=this.cursorPosition??0}};gi.styles=[we,x`
      .editor {
        height: 100%;
        width: 100%;
        padding: min(1%, 1rem) 2%;
        box-sizing: border-box;
        border-radius: 4px;
        font-size: clamp(0.9rem, 4.4vw, 1.1rem);
        letter-spacing: 0.015rem;
        line-height: clamp(1.3rem, 7vw, 1.75rem);
        resize: none;
        border-color: #8d8787;
        overflow-y: auto;
      }
    `];Wr([y()],gi.prototype,"_value",2);Wr([I(".editor")],gi.prototype,"editor",2);gi=Wr([z("attendi-speech-service-editor")],gi);function rp(e){return new CustomEvent("attendieditorvaluechanged",{detail:e,bubbles:!0,composed:!0})}function op(e){return new CustomEvent("change",{detail:e,bubbles:!1,composed:!0})}function sp(e,t){const{firstPartOfString:i,lastPartOfString:n}=pp(e,t),r=ap(i,n),o=up(i,n);return{firstPartOfString:i,paddingBeforeAddedText:r,paddingAfterAddedText:o,lastPartOfString:n}}function ap(e,t){if(Y(e))return"";let i="";return Y(t)?i=lp(e):n()&&(i=" "),i;function n(){return _p(e)}}function lp(e){const t=fp(e),i=Ba(t);return`
`.repeat(i)}const cp=0,dp=2;function Ba(e){return Math.max(cp,dp-e)}function up(e,t){if(Y(t))return"";let i="";return Y(e)?i=hp(t):n()&&(i=" "),i;function n(){return bp(t)}}function hp(e){const t=gp(e),i=Ba(t);return`
`.repeat(i)}function pp(e,t){const i=e.substring(0,t),n=e.substring(t,e.length);return{firstPartOfString:i,lastPartOfString:n}}function fp(e){let t=0;for(let i=e.length-1;i>=0&&e.charAt(i)===`
`;i--)t+=1;return t}function gp(e){let t=0;for(let i=0;i<e.length&&e.charAt(i)===`
`;i++)t+=1;return t}function Uo(e){return!Y(e)&&e.charAt(e.length-1)==`
`}function No(e){return!Y(e)&&e.charAt(0)==`
`}const vp=/^\s+.*/,mp=/^\.+.*/;function bp(e){return!vp.test(e)&&!mp.test(e)}const yp=/.*\s+$/;function _p(e){return!yp.test(e)}const wp=/\.+([^\S\r\n]+)?/;function Cp(e){return wp.test(e)}function xp(e){return Y(e)?e:e[0].toLowerCase()+e.slice(1)}function Sp(e){return Y(e)?e:e.replace(/\.$/,"")}function Y(e){return e===""}const Ap=/\.(\s+)?$/;function Vo(e){return Ap.test(e)}const Op=/^(\s+)?[A-Z]/;function kp(e){return Op.test(e)}const Ep=/^\s+$/;function Fo(e){return Ep.test(e)}function Pp(e,t){return e.length===0?t:e[e.length-1]}function $p(e,t){return e.length===0?t:e[0]}const Mp=x`
  .recorder-view-container {
    display: grid;
    justify-content: center;
    grid-template-columns:
      clamp(42px, min(20%, 12vh), 60px) clamp(
        calc(33 / 18 * 42px),
        min(35%, 33/18 * 12vh),
        calc(33 / 18 * 60px)
      )
      clamp(42px, min(20%, 12vh), 60px);
    gap: 7%;
    justify-items: center;
    align-items: center;
    height: 100%;
  }

  .redo-button svg {
    width: 50%;
  }

  .done-button svg {
    width: 100%;
  }

  .recorder-button-text {
    margin: 0;
    padding: 0;
    font-weight: bold;
    letter-spacing: 0.025rem;
  }

  .recording-text {
    display: none;
  }

  .recording-text.processing {
    opacity: 0.2;
  }

  .icon-button--recording-side-button--inactive {
    opacity: 0.4;
    cursor: default;
  }

  .icon-button--recording-side-button {
    background-color: var(
      --attendi-speech-service-button-color-secondary,
      ${ea}
    );
  }

  .icon-button--recording-side-button.base-color {
    background-color: transparent;
    color: var(--attendi-speech-service-recorder-base-color);
  }

  .icon-button--recording-side-button.base-color:hover {
    background-color: var(--color-fill-hover);
    transition: background-color 0.2s ease-in-out;
  }

  .icon-button--recording-side-button--inactive.base-color:hover {
    background-color: transparent;
  }

  @media only screen and (min-width: ${it.small}px) and (min-height: ${it.verticalSmall}px) {
    .icon-button--recording-side-button {
      width: 75%;
    }

    .recorder-view-container {
      grid-template-columns:
        clamp(30px, 15%, 25vh) clamp(calc(18 / 15 * 30px), 18%, 18/15 * 25vh)
        clamp(30px, 15%, 25vh);

      column-gap: 4%;
      row-gap: 0px;

      font-size: clamp(0.25rem, 7vh, 1.25rem);
    }

    .recording-text {
      display: inline;
      align-self: start;
    }

    .recording-text--recording-side-button {
      margin: -5px;
    }

    .recording-text--recording-side-button--inactive {
      opacity: 0.2;
    }

    .recording-text--recording-button {
      align-self: center;
    }
  }
`;var Rp=Object.defineProperty,Tp=Object.getOwnPropertyDescriptor,ja=(e,t,i,n)=>{for(var r=n>1?void 0:n?Tp(t,i):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=(n?s(t,i,r):s(r))||r);return n&&r&&Rp(t,i,r),r};let Xi=class extends R{render(){if(this.data!==void 0)return f`
      <div class="titled-inner-modal-content typography">
        ${this.getIcon()} ${this.getHeader()} ${this.getContent()}

        <div
          class="titled-inner-modal-content__buttons inner-modal-text-header"
        >
          ${this.data.buttons}
        </div>
      </div>
    `}getIcon(){return f`
      <div class="titled-inner-modal-content__icon">${this.data.icon}</div>
    `}getHeader(){return f`
      <div class="inner-modal-text-header">${this.data.header}</div>
    `}getContent(){return f`
      <div class="titled-inner-modal-content__caption">
        ${this.data.content}
      </div>
    `}};Xi.styles=[x`
      :host {
        display: contents;
      }

      .inner-modal-text-header {
        font-weight: 800;
        font-size: clamp(0.9rem, 8vmin, 1.3rem);
        letter-spacing: 0.01rem;
      }

      .titled-inner-modal-content {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
        gap: min(30px, 3vh);
        padding: 20px 10px;
        padding-bottom: 0px;
      }

      .titled-inner-modal-content__icon {
        width: max(20%, 40px);
        color: var(--attendi-titled-inner-modal-icon-color, #48c0de);
      }

      .titled-inner-modal-content__caption {
        font-size: clamp(0.75rem, 5vmin, 0.9rem);
        line-height: clamp(0.9rem, 5vh, 1.3rem);
        color: rgb(98, 98, 98);
        margin-top: -10px;
      }

      .titled-inner-modal-content__buttons {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
      }

      .titled-inner-modal-content__buttons > * {
        cursor: pointer;
        padding: 15px;
      }
    `,we];ja([y({type:Object})],Xi.prototype,"data",2);Xi=ja([z("attendi-titled-inner-modal")],Xi);var Lp=Object.defineProperty,Ip=Object.getOwnPropertyDescriptor,Si=(e,t,i,n)=>{for(var r=n>1?void 0:n?Ip(t,i):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=(n?s(t,i,r):s(r))||r);return n&&r&&Lp(t,i,r),r};let pe=class extends _e{constructor(){super(...arguments),this.microphoneUIState=Ct.NotStartedRecording,this.redoButtonIsActive=()=>!0,this.doneButtonIsActive=()=>!0}connectedCallback(){var e;if(super.connectedCallback(),this.baseColor===void 0)return;const t=(e=this.shadowRoot)==null?void 0:e.host;t!==void 0&&t.style.setProperty("--attendi-speech-service-recorder-base-color",this.baseColor)}firstUpdated(e){super.firstUpdated(e),this.dispatchEvent(new CustomEvent("attendi-speech-service-recorder-first-updated"))}render(){return f`
        <div class="recorder-view-container">
          ${this.getRedoButton()}

          <!-- The microphone component can be accessed by parent components
           using 'recorder.microphone'. So we don't need to worry about passing
           transcribe configs here.
            -->
          <attendi-microphone
            base-color=${mn(this.baseColor)}
            @microphoneuistateupdated=${this.handleMicrophoneUIStateUpdated}
            data-test="recorder__microphone"
          ></attendi-microphone>

          ${this.getDoneButton()}
        </div>
      </div>

      <attendi-speech-service-inner-modal class="confirm-record-redo-modal" data-test="confirm-record-redo-modal">
      ${this.getConfirmRecordRedoModalContent()}
      </attendi-speech-service-inner-modal>
    `}handleMicrophoneUIStateUpdated(e){const t=e.detail;t!==void 0&&(this.microphoneUIState=t)}getRedoButton(){const e={"icon-button--recording-side-button--inactive":!this.redoButtonIsActive(this.microphoneUIState),processing:this.isProcessing(),"loading-before-recording":this.isLoadingBeforeRecording(),"base-color":this.baseColor!==void 0};return f`
      <button
        @click=${this.handleClickRedoButton}
        class="icon-button icon-button--recording-side-button redo-button ${ot(e)}"
        data-test="recorder__redo-button"
      >
        ${vu}
      </button>
    `}handleClickRedoButton(){this.redoButtonIsActive(this.microphoneUIState)&&this.openConfirmRedoModal()}getDoneButton(){const e={"icon-button--recording-side-button--inactive":!this.doneButtonIsActive(this.microphoneUIState),processing:this.isProcessing(),"loading-before-recording":this.isLoadingBeforeRecording(),"base-color":this.baseColor!==void 0};return f`
      <button
        class="icon-button icon-button--recording-side-button done-button ${ot(e)}"
        @click=${this.handleClickDoneButton}
        data-test="recorder__done-button"
      >
        ${gu}
      </button>
    `}isRecording(){return this.microphoneUIState===Ct.Recording}isProcessing(){return this.microphoneUIState===Ct.ProcessingRecording}isLoadingBeforeRecording(){return this.microphoneUIState===Ct.LoadingBeforeRecording}handleClickDoneButton(){this.doneButtonIsActive(this.microphoneUIState)&&this.dispatchEvent(rh())}reset(){this.microphone.reset(),this.requestUpdate()}openConfirmRedoModal(){this.confirmRecordRedoModal.open()}getConfirmRecordRedoModalContent(){return f`
      <attendi-titled-inner-modal
        style="--attendi-titled-inner-modal-icon-color: var(--attendi-speech-service-recorder-base-color, #48c0de);"
        .data=${{icon:Br,header:V.confirmRecordRedoModal_header,content:V.confirmRecordRedoModal_caption,buttons:f`
            <div
              @click=${this.closeConfirmRedoModal.bind(this)}
              data-test="confirm-record-redo-modal__cancel"
            >
              ${V.cancel}
            </div>
            <div
              @click=${this.confirmRecordRedo.bind(this)}
              data-test="confirm-record-redo-modal__confirm"
            >
              ${V.ok}
            </div>
          `}}
      ></attendi-titled-inner-modal>
    `}confirmRecordRedo(){this.dispatchEvent(nh()),this.reset(),this.closeConfirmRedoModal()}closeConfirmRedoModal(){this.confirmRecordRedoModal.close()}};pe.styles=[we,Mp,x`
      attendi-microphone {
        --attendi-microphone-height: 70px;
        --attendi-microphone-max-width: 70px;
        --attendi-border-radius: 50%;
      }
    `];Si([y({attribute:"base-color",type:String})],pe.prototype,"baseColor",2);Si([I(".confirm-record-redo-modal")],pe.prototype,"confirmRecordRedoModal",2);Si([I("attendi-microphone")],pe.prototype,"microphone",2);Si([L()],pe.prototype,"microphoneUIState",2);pe=Si([z("attendi-speech-service-recorder")],pe);var Dp=Object.defineProperty,Ce=(e,t,i,n)=>{for(var r=void 0,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=s(t,i,r)||r);return r&&Dp(t,i,r),r};const Bp=3/282,jp=.5,Ua=class extends R{constructor(){super(),this.running=!1,this.updatePeriodMilliseconds=75,this.volumeBarThicknessMultiplier=1,this.nBars=0,this.volumeBins=[],this.barWidth=0,this.barGap=0,this.volumeBuffer=[],this.updateBinsTimerId=void 0,this.resizeObserver=new ResizeObserver(()=>this.handleResize())}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}handleResize(){this.barWidth=this.clientWidth*Bp*this.volumeBarThicknessMultiplier,this.barGap=this.barWidth*jp;const t=Math.floor(this.clientWidth/(this.barWidth+this.barGap));t!==this.nBars&&(this.nBars=t,this.volumeBins=Array.from({length:this.nBars},(i,n)=>({id:n,volume:n<this.volumeBins.length?this.volumeBins[n].volume:0})))}willUpdate(t){if(t.has("running")&&(this.running?this.start():this.stop()),t.has("volumeBarThicknessMultiplier")&&this.handleResize(),t.has("updatePeriodMilliseconds")){if(!this.running)return;this.updateBinsTimerId!==void 0&&clearInterval(this.updateBinsTimerId),this.updateBinsTimerId=setInterval(()=>this.updateBins(),this.updatePeriodMilliseconds)}super.willUpdate(t)}render(){return f`
      <div class="container" data-test="attendi-volume-over-time__container">
        ${tu(this.volumeBins,t=>t.id,t=>f`
            <div
              class="volume-bar"
              data-test="attendi-volume-over-time__volume-bar"
              style="
                width: ${this.barWidth}px;
                margin: 0 ${this.barGap/2}px;
                height: ${this.getBarHeight(t.volume)}%;
              "
            ></div>
          `)}
      </div>
    `}getBarHeight(t){return 5+t*95}start(){this.running||(this.running=!0,this.updateBinsTimerId!==void 0&&clearInterval(this.updateBinsTimerId),this.volumeBuffer=[],this.updateBinsTimerId=setInterval(()=>this.updateBins(),this.updatePeriodMilliseconds))}updateBins(){if(this.volumeBuffer.length===0)return;const t=this.volumeBuffer.reduce((i,n)=>i+n,0)/this.volumeBuffer.length;this.volumeBins.shift(),this.volumeBins.push({id:this.nBars-1,volume:t}),this.volumeBins=this.volumeBins.map((i,n)=>({...i,id:n})),this.volumeBuffer=[],this.dispatchEvent(new CustomEvent("attendi-volume-over-time-updated",{detail:this.volumeBins.map(i=>i.volume)}))}stop(){this.running&&(this.updateBinsTimerId&&clearInterval(this.updateBinsTimerId),this.running=!1)}reset(){this.volumeBins=this.volumeBins.map(t=>({...t,volume:0})),this.volumeBuffer=[]}addVolume(t){if(this.running){if(t<0||t>1)throw new Error(`Volume value must be in the range [0, 1]. Received: ${t}`);this.volumeBuffer.push(t)}}};Ua.styles=x`
    :host {
      display: block;
    }

    .container {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(
        --attendi-volume-over-time-background-color,
        transparent
      );
      border-radius: var(--attendi-volume-over-time-border-radius, 0px);
      overflow: hidden;
    }

    .volume-bar {
      border-radius: var(
        --attendi-volume-over-time-volume-bar-border-radius,
        2px
      );
      background-color: var(
        --attendi-volume-over-time-volume-bar-color,
        #1c69e8
      );
    }
  `;let Xt=Ua;Ce([y({type:Boolean,reflect:!0})],Xt.prototype,"running");Ce([y({type:Number,attribute:"update-period-milliseconds",reflect:!0})],Xt.prototype,"updatePeriodMilliseconds");Ce([y({type:Number,attribute:"volume-bar-thickness-multiplier"})],Xt.prototype,"volumeBarThicknessMultiplier");Ce([L()],Xt.prototype,"nBars");Ce([L()],Xt.prototype,"volumeBins");Ce([L()],Xt.prototype,"barWidth");Ce([L()],Xt.prototype,"barGap");class Up{constructor(){this.callback=(t,i)=>{}}handleRequestEvent(t){const i=t,n=i.detail,r=this.callback(n.key,n.options);r&&(i.detail.provider=()=>r,i.preventDefault(),i.stopPropagation())}setResolveCallback(t){this.callback=t}connect(t){t.addEventListener(or,this.handleRequestEvent.bind(this))}disconnect(t){t.removeEventListener(or,this.handleRequestEvent.bind(this))}}class Np{constructor(t){this.element=t}requestInstance(t,i){const n=new CustomEvent(or,{detail:{key:t,options:i},bubbles:!0,cancelable:!0,composed:!0});if(this.element.dispatchEvent(n),n.defaultPrevented&&n.detail.provider)return n.detail.provider();throw new Error(`no provider found for ${t}`)}}const or="request-dependency";function Vp(e){return class extends e{constructor(){super(...arguments),this.dependencyResolver=new Up}resolveDependency(t,i){}connectedCallback(){super.connectedCallback!==void 0&&super.connectedCallback(),this.dependencyResolver.connect(this),this.dependencyResolver.setResolveCallback(this.resolveDependency.bind(this))}disconnectedCallback(){this.dependencyResolver.disconnect(this),super.disconnectedCallback!==void 0&&super.disconnectedCallback()}}}function Na(e){return class extends e{constructor(){super(...arguments),this.dependencyRequester=new Np(this)}requestInstance(t,i){return this.dependencyRequester.requestInstance(t,i)}}}const Fp={empty:!1};function Qi(e={}){const t={...Fp};for(const[i,n]of Object.entries(e))n!==void 0&&(t[i]=n);return{setFeature(i,n){t[i]=n},isEnabled(i){return t[i]}}}const sr=Qi();var zp=Object.defineProperty,Hp=Object.getOwnPropertyDescriptor,Ai=(e,t,i,n)=>{for(var r=n>1?void 0:n?Hp(t,i):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=(n?s(t,i,r):s(r))||r);return n&&r&&zp(t,i,r),r};const Ti="attendi-transcribe";let fe=class extends Na(_e){constructor(){super(...arguments),this.dataTest="recording-screen",this.editorTextValue="",this.clearAttendiMicrophoneOnStopRecordingListener=void 0}connectedCallback(){super.connectedCallback(),this.featureFlagRouter=this.requestInstance("featureFlagRouter")??sr}render(){return f`
      <div class="recording-view-container typography">
        <attendi-speech-service-editor
          @change=${e=>{var t;this.editorTextValue=e.target.value,(t=this.recorder)==null||t.requestUpdate()}}
          .value=${this.editorTextValue}
          data-test="editor"
        ></attendi-speech-service-editor>

        <attendi-speech-service-recorder
          class="recorder"
          @recorderredo=${this.reset}
          @recorderdone=${this.handleRecorderDoneEvent}
          @attendi-speech-service-recorder-first-updated=${()=>{try{const e=this.requestInstance("transcribeAPIConfig")??void 0;if(e===void 0)return;this.initializeAttendiMicrophoneTranscribe(e)}catch{}}}
          .redoButtonIsActive=${e=>{const t=this.editorTextValue.length>0,i=e===Ct.Recording;return t||i}}
          .doneButtonIsActive=${e=>e!==Ct.Recording&&e!==Ct.ProcessingRecording}
          base-color="#48c0de"
          data-test="recorder"
        >
        </attendi-speech-service-recorder>
      </div>
    `}initializeAttendiMicrophoneTranscribe(e){if(e===void 0)throw new Error("Transcribe API config not set");const t=this.recorder.microphone;if(t==null)return;t.plugins.remove(Ti);const i={apiURL:e.apiURL,customerKey:e.customerKey,userId:e.userId,config:{model:e.modelType},unitId:e.unitId};t.plugins.add(Ti,new Gr(i,n=>{this.editor.addText(n)})),t.plugins.activate()}firstUpdated(e){super.firstUpdated(e),oe.onTranscribeAPIConfig(t=>{t!==null&&this.initializeAttendiMicrophoneTranscribe(t)})}reset(){this.editorTextValue="",this.resetRecorder();const e=this.recorder.microphone;if(e==null)return;const t=e.plugins.get(Ti);t!==void 0&&(t.resetSessionId(),t.resetReportId())}handleRecorderDoneEvent(){this.resetRecorder(),this.sendUpdatedReportingMethodToBackend(),this.dispatchEvent(new CustomEvent(pi.attendiSpeechServiceDone,{detail:{transcript:this.editorTextValue,text:this.editorTextValue},bubbles:!0,composed:!0}))}resetRecorder(){this.recorder.reset()}sendUpdatedReportingMethodToBackend(){var e;const t=this.recorder.microphone;if(oe.transcribeAPIConfig===null||t===void 0||t===null)return;const i=t.plugins.get(Ti);Ra({baseUrl:((e=oe.transcribeAPIConfig)==null?void 0:e.apiURL)??"https://api.attendi.nl",path:{id:i.reportId},body:{sessions:[{id:i.sessionId,transcript:this.editorTextValue}]},headers:{"x-api-key":oe.transcribeAPIConfig.customerKey},parseAs:"stream"})}};fe.styles=[we,x`
      .recording-view-container {
        display: grid;
        grid-template-rows: 2.75fr 1fr;
        height: min(${cu}px, 75vh);
        justify-items: center;
        row-gap: 1%;
      }

      attendi-speech-service-editor {
        width: 97%;
        height: 100%;
      }

      .recorder {
        /*
        for some browsers (Firefox and Safari), the width of the recorder does not 
        automatically adapt properly, which is why we add 100% width.
        */
        width: 100%;
      }

      @media only screen and (min-width: ${it.small}px) and (min-height: ${it.verticalSmall}px) {
        .recording-view-container {
          display: grid;
          height: min(${du}px, 70vh);
          justify-items: center;
          row-gap: 0%;
        }
      }
    `];Ai([y({reflect:!0,attribute:"data-test"})],fe.prototype,"dataTest",2);Ai([L()],fe.prototype,"editorTextValue",2);Ai([I("attendi-speech-service-recorder")],fe.prototype,"recorder",2);Ai([I("attendi-speech-service-editor")],fe.prototype,"editor",2);fe=Ai([z("attendi-speech-service-recording-screen")],fe);var Gp=Object.defineProperty,Wp=Object.getOwnPropertyDescriptor,Va=(e,t,i,n)=>{for(var r=n>1?void 0:n?Wp(t,i):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=(n?s(t,i,r):s(r))||r);return n&&r&&Gp(t,i,r),r};const qp=300;let Ue=class extends R{constructor(){super(...arguments),this.isOpen=!1}render(){const e={open:this.isOpen};return f`
      <div class="modal ${ot(e)}">
        <div class="modal-content">
          <slot></slot>
        </div>
      </div>
    `}close(){this.isOpen=!1}open(){this.isOpen=!0}_slottedChildren(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("slot");return t==null?void 0:t.assignedElements({flatten:!0})}};Ue.styles=x`
    .modal {
      display: none; /* Hidden by default */
      position: fixed; /* Stay in place */
      left: 0;
      top: 0;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
      overflow: auto; /* Enable scroll if needed */
      background-color: rgb(0, 0, 0); /* Fallback color */
      background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
      z-index: inherit;
    }

    .open {
      display: block;
    }

    /* Modal content box */
    .modal-content {
      position: relative;
      left: 50%; /* Center the modal horizontally */
      top: 50%; /* Center the modal vertically */
      transform: translate(
        -50%,
        -50%
      ); /* Center the modal horizontally and vertically */
      width: min(83%, ${qp}px);
      padding: 10px; /* Padding between modal edge and inner content */
      background-color: white;
      border-radius: 10px;
      border: 1px solid #888;
    }

    .exit-button {
      width: clamp(22px, 6%, 28px);
      aspect-ratio: 1;
      margin-left: auto;
      cursor: pointer;
      position: absolute;
      right: 4%;
    }

    .exit-button svg {
      color: white;
      fill: #c4c4c4;
      transition: 0.3s fill;
    }

    .exit-button svg:hover {
      fill: #a2a2a2;
    }
  `;Va([y({attribute:"open",type:Boolean,reflect:!0})],Ue.prototype,"isOpen",2);Ue=Va([z("attendi-speech-service-inner-modal")],Ue);var Zp=Object.defineProperty,Kp=Object.getOwnPropertyDescriptor,xn=(e,t,i,n)=>{for(var r=n>1?void 0:n?Kp(t,i):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=(n?s(t,i,r):s(r))||r);return n&&r&&Zp(t,i,r),r};let Ne=class extends _e{constructor(){super(...arguments),this.modalMethodInformationText=""}render(){return f`
      <div class="reporting-method-screen-container typography">
        <div class="header">
          ${V.selectReportingMethodScreen_header}
        </div>
        <div class="methods">${this._getReportingMethodLinks()}</div>

        ${this._getMethodInformationModal()}
      </div>
    `}_getReportingMethodLinks(){return Array.from(fi.keys()).map(this._getReportingMethodLinkAndInformationButton.bind(this))}_getReportingMethodLinkAndInformationButton(e){if(this.transcribeAPIConfig===void 0)throw new Error("No config");return f`<div class="methods__method">
      <div class="methods__method__details">
        ${Yp(e,this.transcribeAPIConfig)}
        ${this._getReportingMethodInformationIcon(e)}
      </div>
    </div>`}_getReportingMethodInformationIcon(e){return f`
      <div
        class="methods__method__details__description-icon"
        @click=${()=>this.openMethodInformationModal(e)}
      >
        ${_u}
      </div>
    `}_getMethodInformationModal(){return f`
      <attendi-speech-service-inner-modal class="method-information-modal">
        <div class="method-information-modal-content">
          <div class="method-information-modal-content__text">
            ${this.modalMethodInformationText}
          </div>

          <div
            class="method-information-modal-content__ok-button"
            @click=${this.closeMethodInformationModal}
          >
            ${V.ok}
          </div>
        </div>
      </attendi-speech-service-inner-modal>
    `}openMethodInformationModal(e){var t;this._innerModal!==void 0&&this._innerModal instanceof Ue&&(this.modalMethodInformationText=((t=fi.get(e))==null?void 0:t.description)??"Geen extra informatie voor deze methode.",this._innerModal.open())}closeMethodInformationModal(){this._innerModal!==void 0&&this._innerModal instanceof Ue&&this._innerModal.close()}};Ne.styles=[we,x`
      :host {
        display: block;
        padding-left: 10px;
        padding-right: 10px;
      }

      .header {
        color: #1b94b1;
        font-size: 1.5rem;
        font-weight: bold;
        letter-spacing: 0.015rem;
        margin-bottom: 10px;
        padding-top: 5px;
      }

      .methods {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }

      .methods__method__details {
        display: flex;
        gap: 10px;
        align-items: center;
      }

      .methods__method__details__display-name {
        color: #48c0de;
        font-size: 1.2rem;
        cursor: pointer;
      }

      .methods__method__details__description-icon {
        color: #48c0de;
        width: 20px;
        height: 20px;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
      }

      .method-information-modal-content {
        padding: 10px;
        display: flex;
        flex-direction: column;
      }

      .method-information-modal-content__ok-button {
        align-self: end;
        display: inline;
        justify-self: end;
        padding: 20px 15px 0px 15px;
        color: #30809c;
        cursor: pointer;
      }

      .reporting-method-screen-container {
        min-height: 200px;
      }
    `];xn([I("attendi-speech-service-inner-modal")],Ne.prototype,"_innerModal",2);xn([L()],Ne.prototype,"modalMethodInformationText",2);xn([y({type:Object})],Ne.prototype,"transcribeAPIConfig",2);Ne=xn([z("attendi-select-reporting-method-screen")],Ne);function Yp(e,t){var i;return f`
    <div
      class="methods__method__details__display-name"
      @click=${()=>Jp(e,t)}
      data-test="reporting-method-link"
    >
      ${((i=fi.get(e))==null?void 0:i.displayName)??""}
      ${V.selectReportingMethodScreen_report}
    </div>
  `}function Jp(e,t){const i={properties:{reportingMethodType:e,transcribeAPIConfig:t,baseColor:"#48c0de"}};qt.push({name:re.reportingMethod,settings:i})}class zo{constructor(t){this.currentStep=0,this.reportingMethod=fi.get(t)??Hr,this.stepTexts=this.reportingMethod.steps.map(()=>""),this.sessionIds=this.reportingMethod.steps.map(()=>Ji()),this.stepStartedEditingOrTranscribing=this.reportingMethod.steps.map(()=>!1),Sr(this)}setStepText(t,i){this.checkStepIndexInRange(t),Wn(()=>{this.stepTexts[t]=i})}setCurrentStepText(t){this.setStepText(this.currentStep,t)}resetCurrentStepText(){this.setCurrentStepText("")}stepSessionId(t,i){this.checkStepIndexInRange(t),this.sessionIds[t]=i}getStepSessionId(t){return this.checkStepIndexInRange(t),this.sessionIds[t]}resetCurrentStepSessionId(){const t=Ji();this.setCurrentStepSessionId(t)}setCurrentStepSessionId(t){this.stepSessionId(this.currentStep,t)}setCurrentStep(t){this.currentStep=this.clampStep(t)}clampStep(t){return tf(t,0,this.nSteps-1)}addParagraphToStep(t,i){const n=this.getStepText(t),r=Xp(n,i);this.setStepText(t,r)}addParagraphToCurrentStep(t){this.addParagraphToStep(this.currentStep,t)}getStepName(t){if(t<0||t>=this.nSteps)throw new RangeError(`step index should be in interval [0, ${this.nSteps-1}]`);return this.reportingMethod.steps[t].name}getStepText(t){return this.checkStepIndexInRange(t),this.stepTexts[t]}get currentStepText(){return this.getStepText(this.currentStep)}stepHasText(t){return this.getStepText(t).length>0}get currentStepSessionId(){return this.getSessionId(this.currentStep)}getSessionId(t){return this.checkStepIndexInRange(t),this.sessionIds[t]}get currentStepHasText(){return this.getStepText(this.currentStep).length>0}get currentMethodStepName(){return this.reportingMethod.steps[this.currentStep].name}get currentMethodStepPrompt(){return this.reportingMethod.steps[this.currentStep].prompt}get nSteps(){return this.stepTexts.length}get currentStepIsFinalStep(){return this.currentStep===this.nSteps-1}resetCurrentStep(){this.resetCurrentStepSessionId(),this.resetCurrentStepText()}get currentStepStartedEditingOrTranscribing(){return this.startedEditingOrTranscribing(this.currentStep)}startedEditingOrTranscribing(t){return this.checkStepIndexInRange(t),this.stepStartedEditingOrTranscribing[t]}setCurrentStepStartedEditingOrTranscribing(t){this.setStartedEditingOrTranscribing(this.currentStep,t)}setStartedEditingOrTranscribing(t,i){this.checkStepIndexInRange(t),this.stepStartedEditingOrTranscribing[t]=i}resetCurrentStepStartedEditingOrTranscribing(){this.resetStartedEditingOrTranscribing(this.currentStep)}resetStartedEditingOrTranscribing(t){this.setStartedEditingOrTranscribing(t,!1)}checkStepIndexInRange(t){if(t<0||t>=this.nSteps)throw new RangeError(`step index should be in interval [0, ${this.nSteps-1}]`)}}function Xp(e,t){const i=Qp(e,t);return e+i+t}function Qp(e,t){const i=e.length===0,n=t.length===0;return i||n?"":`

`}const tf=(e,t,i)=>Math.min(Math.max(e,t),i);class ef{constructor(t){this.reportHeaderFormatter=()=>"",this.stepHeaderFormatter=i=>`${i}:
`,t!==void 0&&(t.reportHeaderFormatter!==void 0&&(this.reportHeaderFormatter=t.reportHeaderFormatter),t.stepHeaderFormatter!==void 0&&(this.stepHeaderFormatter=t.stepHeaderFormatter))}format(t){let i=this.reportHeaderFormatter(t.reportingMethod.name);this.reportHeaderFormatter.length>0&&l();for(let c=0;c<t.nSteps;c++){const d=this._getStepHeaderAndText(t,c);d!==void 0&&(i+=d,n(c)&&l())}return i;function n(c){return!r(c)}function r(c){return o(c)||s(c)}function o(c){return c===t.nSteps-1}function s(c){return c===a()}function a(){for(let c=t.nSteps-1;c>=0;c--)if(t.getStepText(c).length>0)return c;return 0}function l(){i+=`

`}}_getStepHeaderAndText(t,i){if(t===void 0)return;let n="";const r=t.getStepName(i),o=t.getStepText(i);if(o.length!==0)return n+=this._getReportingMethodStepHeader(r),n+=o,n}_getReportingMethodStepHeader(t){return t===void 0?"":this.stepHeaderFormatter(t)}}const nf=new ef;var rf=Object.defineProperty,of=Object.getOwnPropertyDescriptor,xe=(e,t,i,n)=>{for(var r=n>1?void 0:n?of(t,i):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=(n?s(t,i,r):s(r))||r);return n&&r&&rf(t,i,r),r};const sf="attendi-transcribe";let Bt=class extends Na(_e){constructor(){super(...arguments),this.reportingMethodType=ii.SOEP,this.sessionGroupId=ir(),this.state=new zo(this.reportingMethodType),this.clearAttendiMicrophoneOnStopRecordingListener=void 0}get reportingMethod(){return fi.get(this.reportingMethodType)??Hr}firstUpdated(){this.initializeReportingMethodState()}initializeReportingMethodState(){this.state=new zo(this.reportingMethodType),setTimeout(()=>this.requestUpdate(),0)}updated(e){this.updateStateOnReportingMethodTypeChanged(e)}updateStateOnReportingMethodTypeChanged(e){e.has("reportingMethodType")&&e.get("reportingMethodType")!==void 0&&this.initializeReportingMethodState()}connectedCallback(){var e;super.connectedCallback();try{this.featureFlagRouter=this.requestInstance("featureFlagRouter")??sr}catch{this.featureFlagRouter=sr}if(this.baseColor===void 0)return;const t=(e=this.shadowRoot)==null?void 0:e.host;t!==void 0&&(t.style.setProperty("--attendi-linear-reporting-method-screen-base-color",this.baseColor),t.style.setProperty("--attendi-linear-reporting-method-screen-navigator-fill-color",lt(this.baseColor,.22)))}render(){return f`<div class="linear-reporting-method-container">
      <div class="linear-reporting-method-navigator">
        ${eu(this.reportingMethod.steps,(e,t)=>this.mapStepToNavigator(e,t))}
      </div>

      <div class="recording-view-container typography">
        <div class="step-header">${this.state.currentMethodStepName??""}</div>

        <div class="step-prompt">
          ${this.state.currentMethodStepPrompt??""}
        </div>

        <attendi-speech-service-editor
          @change=${e=>{var t;const i=e.detail;i!==void 0&&(this.state.setCurrentStepText(i),this.setCurrentStepStartedEditingOrTranscribingOnEditorChange(i),(t=this.recorder)==null||t.requestUpdate())}}
          .value=${this.state.currentStepText??""}
          data-test="editor"
        ></attendi-speech-service-editor>

        <attendi-speech-service-recorder
          class="recorder"
          .redoButtonIsActive=${e=>e===Ct.Recording||(this.state.currentStepHasText??!1)}
          .doneButtonIsActive=${e=>e===Ct.NotStartedRecording}
          @recorderredo=${this.resetCurrentStep}
          @recorderdone=${this.handleDoneButtonClicked}
          @attendi-speech-service-recorder-first-updated=${this.initializeAttendiMicrophoneTranscribe}
          base-color=${mn(this.baseColor)}
        >
        </attendi-speech-service-recorder>
      </div>
    </div>`}mapStepToNavigator(e,t){const i=this.reportingMethod.steps.map((n,r)=>this._getStepClassesFromIndex(r));return f`
      <div
        class="linear-reporting-method-navigator__button ${ot(i[t])}"
        @click=${()=>this.onClickNavigatorButton(t)}
        data-test=${`linear-reporting-method-navigation-indicator-${t}`}
      >
        ${e.symbol??0}
      </div>
    `}onClickNavigatorButton(e){this.state.currentStep!==e&&this.changeStep(e)}_getStepClassesFromIndex(e){return{"linear-reporting-method-navigator__button--active":this.state.currentStep===e,"linear-reporting-method-navigator__button--filled":this.state.stepHasText(e)}}reset(){this.initializeReportingMethodState(),this.recorder.reset()}initializeAttendiMicrophoneTranscribe(){const e=this.recorder.microphone;if(e==null)throw new Error("Cannot initialize transcribe functionality without initialized attendi-microphone.");if(this.transcribeAPIConfig===void 0)throw new Error("Transcribe API config not set.");const t={apiURL:this.transcribeAPIConfig.apiURL,customerKey:this.transcribeAPIConfig.customerKey,userId:this.transcribeAPIConfig.userId,config:{model:this.transcribeAPIConfig.modelType},unitId:this.transcribeAPIConfig.unitId};this.transcribePlugin=new Gr(t,i=>{this.addTranscriptFromAPIResponse(this.state.currentStep,i),this.state.setStartedEditingOrTranscribing(this.state.currentStep,!0)}),this.transcribePlugin.setReportId(this.sessionGroupId),this.transcribePlugin.setSessionId(this.state.currentStepSessionId),e.plugins.add(sf,this.transcribePlugin),e.plugins.activate()}setCurrentStepStartedEditingOrTranscribingOnEditorChange(e){const t=e.length!==0,i=!this.state.currentStepStartedEditingOrTranscribing;t&&i&&this.state.setCurrentStepStartedEditingOrTranscribing(!0)}resetCurrentStep(){this.state.resetCurrentStep(),this.state.resetCurrentStepStartedEditingOrTranscribing(),this.transcribePlugin!==void 0&&this.transcribePlugin.setSessionId(this.state.currentStepSessionId)}addTranscriptFromAPIResponse(e,t){var i;e===this.state.currentStep?(i=this.editor)==null||i.addText(t):this.state.addParagraphToStep(e,t)}handleDoneButtonClicked(){try{this.sendUpdatedReportingMethodToBackend()}catch(e){console.error(e)}this.dispatchDoneEvent(),qt.popAll()}sendUpdatedReportingMethodToBackend(){var e;const t=this.getReportingMethodSessionData();t.length!==0&&Ra({baseUrl:((e=this.transcribeAPIConfig)==null?void 0:e.apiURL)??"https://api.attendi.nl",path:{id:this.sessionGroupId},body:{reportingMethod:this.state.reportingMethod.name,sessions:t},headers:{"x-api-key":this.transcribeAPIConfig.customerKey},parseAs:"stream"})}getReportingMethodSessionData(){return[...Array(this.state.nSteps).keys()].filter(e=>this.state.startedEditingOrTranscribing(e)&&this.state.getStepText(e).trim().length>0).map(e=>({id:this.state.getStepSessionId(e),reportingMethodStep:this.state.reportingMethod.steps[e].name,transcript:this.state.getStepText(e)}))}dispatchDoneEvent(){const e=nf.format(this.state),t=af(e);this.dispatchEvent(t)}async changeStep(e){this.recorder.isRecording()&&(this.transcribeCurrentStep(),this.state.stepHasText(e)&&(this.recorder.microphone.reset(),this.recorder.microphone.executeCommand(Ye.playStop))),this.state.setCurrentStep(e),this.transcribePlugin!==void 0&&this.transcribePlugin.setSessionId(this.state.currentStepSessionId)}async transcribeCurrentStep(){const e=this.state.currentStep,t=this.state.currentStepSessionId.toString(),i=this.recorder.microphone.audioBuffer;if(i===void 0)return;const n=new Float32Array(i);this.recorder.microphone.clearBuffer();const r=await Ca(n);if(this.transcribeAPIConfig===void 0)return;const o=(await Ma({baseUrl:this.transcribeAPIConfig.apiURL??"https://api.attendi.nl",body:{audio:r,userId:this.transcribeAPIConfig.userId,unitId:this.transcribeAPIConfig.unitId,config:{model:this.transcribeAPIConfig.modelType},metadata:{reportId:this.sessionGroupId,sessionId:t,userAgent:navigator.userAgent}},headers:{"x-api-key":this.transcribeAPIConfig.customerKey}})).data;if((o==null?void 0:o.transcript)===void 0||(o==null?void 0:o.transcript)===null)throw new Error("No response from transcription service");this.addTranscriptFromAPIResponse(e,o.transcript),this.state.setStartedEditingOrTranscribing(e,!0)}};Bt.styles=[we,x`
      .linear-reporting-method-container {
        display: grid;
        place-items: center;
        grid-template-rows: auto 1fr;
        height: min(${uu}px, 75vh);
      }

      .recording-view {
        height: 100%;
        width: 100%;
      }

      .linear-reporting-method-navigator {
        display: flex;
        justify-content: space-evenly;
        width: clamp(230px, 80%, 300px);
        margin-top: -15px;
      }

      .linear-reporting-method-navigator__button {
        width: 13%;
        aspect-ratio: 1;
        border-radius: 50%;
        border-width: 2px;
        border-color: #cecece;
        border-style: solid;
        display: flex;
        place-items: center;
        justify-content: center;
        color: #515151;
        font-size: clamp(1.3rem, 5vw, 1.6rem);
        font-family: sans-serif;
        padding: 1.4%;
        background-clip: content-box;
        cursor: pointer;
        /* no (blue) highlight color when tapping on button on mobile phone */
        -webkit-tap-highlight-color: transparent;
      }

      .linear-reporting-method-navigator__button--active {
        border-color: var(
          --attendi-linear-reporting-method-screen-base-color,
          #48c0de
        );
      }

      .linear-reporting-method-navigator__button--filled {
        background-color: var(
          --attendi-linear-reporting-method-screen-navigator-fill-color,
          #b6e6f2
        );
      }

      @media only screen and (min-width: ${it.small}px) and (min-height: ${it.verticalSmall}px) {
        .linear-reporting-method-container {
          height: min(${hu}px, 70vh);
        }

        .linear-reporting-method-navigator {
          margin-top: -25px;
          padding-bottom: 10px;
        }
      }

      @media only screen and (max-height: 314px) {
        .linear-reporting-method-navigator {
          display: none;
        }

        .linear-reporting-method-container {
          display: block;
          margin-top: -30px;
        }
      }

      /* New CSS */
      .recording-view-container {
        display: grid;
        grid-template-rows: auto auto 1.75fr 1fr;
        justify-items: center;
        align-items: center;
        height: 100%;
      }

      .step-header {
        font-weight: bold;
        align-self: end;
        padding-top: clamp(5px, 3vh, 10px);
        font-size: clamp(0.9rem, 7vh, 1.1rem);
        letter-spacing: 0.015rem;
      }

      .step-prompt {
        padding: 5px 5% 10px;
        color: #585858;
        text-align: center;
        font-size: clamp(0.7rem, 5vh, 1rem);
      }

      .recorder {
        /*
        for some devices, the width of the recorder does not 
        automatically adapt properly, which is why we add 100% width.
        */
        width: 100%;
        height: 100%;
      }

      attendi-speech-service-editor {
        width: 97%;
        height: 100%;
      }

      @media only screen and (min-width: ${it.small}px) {
        .step-header,
        .step-prompt {
          text-align: start;
          justify-self: center;
          width: 97%;
          font-size: large;
          letter-spacing: 0.015rem;
        }
      }

      @media only screen and (min-width: ${it.small}px) and (min-height: ${it.verticalSmall}px) {
        .recording-view-container {
          grid-template-rows: 30px 30px 1.75fr 1fr;
        }
      }

      @media only screen and (max-height: 314px) {
        .recording-view-container {
          grid-template-rows: 30px 30px 1fr 1fr;
        }
      }
    `];xe([y({attribute:"reporting-method-type",type:String,reflect:!1})],Bt.prototype,"reportingMethodType",2);xe([y({type:Object})],Bt.prototype,"transcribeAPIConfig",2);xe([y({attribute:"base-color",type:String})],Bt.prototype,"baseColor",2);xe([y()],Bt.prototype,"sessionGroupId",2);xe([I("attendi-speech-service-editor")],Bt.prototype,"editor",2);xe([I("attendi-speech-service-recorder")],Bt.prototype,"recorder",2);Bt=xe([z("attendi-linear-reporting-method-screen")],Bt);function af(e){return new CustomEvent("attendi-linear-reporting-method-done",{detail:e,composed:!0})}var lf=Object.defineProperty,cf=Object.getOwnPropertyDescriptor,qr=(e,t,i,n)=>{for(var r=n>1?void 0:n?cf(t,i):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=(n?s(t,i,r):s(r))||r);return n&&r&&lf(t,i,r),r};const re={homeRoute:"/",recordingScreen:"/recordingScreen",selectReportingMethodScreen:"/selectReportingMethodScreen",reportingMethod:"/reportingMethod"},df={[re.homeRoute]:"attendi-speech-service-recording-screen",[re.recordingScreen]:"attendi-speech-service-recording-screen",[re.selectReportingMethodScreen]:"attendi-select-reporting-method-screen",[re.reportingMethod]:"attendi-linear-reporting-method-screen"};let vi=class extends _e{constructor(){super(...arguments),this.navigator=qt}updated(){this.setCurrentRouteProperties()}setCurrentRouteProperties(){var e;const t=this.navigator.currentRoute.settings;t!==void 0&&((e=Object.entries(t.properties))==null||e.forEach(([i,n])=>{this.currentChild[i]=n}))}render(){return f`<div class="navigator-child">
      ${this.getCurrentComponent()}
    </div>`}getCurrentComponent(){const e=this.constructHTMLTagForCurrentRoute();return f`${fr(e)}`}constructHTMLTagForCurrentRoute(){const e=this.getCurrentTagName();return uf(e)}getCurrentTagName(){return df[this.navigator.currentRoute.name]}reset(){var e;typeof((e=this.currentChild)==null?void 0:e.reset)=="function"&&this.currentChild.reset(),this.navigator.popAll()}};vi.styles=x`
    .navigator-child {
      padding-top: clamp(28px, 8vh, 40px);
    }
  `;qr([y({type:Object})],vi.prototype,"navigator",2);qr([I(".navigator-child > *")],vi.prototype,"currentChild",2);vi=qr([z("attendi-navigator")],vi);function uf(e){return`<${e}></${e}>`}class hf{constructor(){this.transcribeAPIConfig=null,this.transcribeAPIConfigCallbacks=new Set,Sr(this)}setTranscribeAPIConfig(t){this.transcribeAPIConfig=t;for(const i of this.transcribeAPIConfigCallbacks)i(t)}onTranscribeAPIConfig(t){return this.transcribeAPIConfigCallbacks.add(t),()=>{this.transcribeAPIConfigCallbacks.delete(t)}}}var pf=(e,t,i,n)=>{for(var r=t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=s(r)||r);return r};let ar=class extends _e{constructor(){super(...arguments),this.navigator=qt}render(){return f` <div @click=${this.handleMenuButtonClicked}>
      <div
        class="menu-button"
        data-test="attendi-speech-service__navigator-button"
      >
        ${this._getMenuIcon()}
      </div>
    </div>`}_getMenuIcon(){return qt.history.length>0?f` <div class="menu-button__back-icon">
        ${yu}
      </div>`:f` <div class="menu-button__menu-icon">${bu}</div>`}handleMenuButtonClicked(){this.dispatchEvent(new CustomEvent("menu-button-clicked"))}};ar.styles=x`
    .menu-button {
      max-width: 28px;
      height: 28px;
      cursor: pointer;
      position: absolute;
      left: 4%;
      -webkit-tap-highlight-color: transparent;
    }

    /*
    This is used to create a larger clickable area for the menu button
    for UX purposes.
    */
    .menu-button:after {
      content: "";
      position: absolute;
      left: -12px;
      top: -16px;
      width: 48px;
      height: 48px;
    }

    .menu-button__menu-icon {
      height: inherit;
      width: 28px;
    }

    .menu-button__back-icon {
      height: 100%;
    }

    .menu-button * svg {
      color: ${ea};
      height: 100%;
      width: 100%;
      transition: 0.3s color;
    }
  `;ar=pf([z("attendi-speech-service-menu-button")],ar);const ff={checkEmptyRecordings:!0};var gf=(e,t,i,n)=>{for(var r=t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=s(r)||r);return r};let lr=class extends Vp(R){constructor(){super(...arguments),this.featureFlagRouter=Qi(),this.appConfig={...ff}}resolveDependency(e,t){switch(e){case"featureFlagRouter":return this.featureFlagRouter;case"appConfig":return this.appConfig;case"transcribeAPIConfig":return this.transcribeAPIConfig}return super.resolveDependency(e,t)}getFeatureFlagRouter(){return Qi()}render(){return f`<slot></slot>`}};lr.styles=x`
    :host {
      display: contents;
    }
  `;lr=gf([z("attendi-dependency-provider")],lr);const vf=x`
  dialog {
    border: 1px solid #888;
    border-radius: 10px;
    box-shadow:
      0 0 #0000,
      0 0 #0000,
      0 25px 50px -12px rgba(0, 0, 0, 0.25);
    padding: 10px; /* Padding between modal edge and inner content */
    width: min(
      90%,
      ${Ir}px
    ); /* Width of modal will be 90% on small screens, and is capped at 500px */
    position: fixed;
    background-color: white;
    top: auto;
    bottom: 1%;
    overflow: hidden;
  }

  dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  }

  .exit-button {
    width: 28px;
    height: 28px;
    margin-left: auto;
    cursor: pointer;
    position: absolute;
    right: 4%;
  }

  /*
      This is used to create a larger clickable area for the exit button
      for UX purposes.
      */
  .exit-button:after {
    content: "";
    position: absolute;
    left: -10px;
    top: -10px;
    width: 40px;
    height: 40px;
  }

  .exit-button svg {
    color: white;
    fill: #c4c4c4;
    transition: 0.3s fill;
  }

  .exit-button svg:hover {
    fill: #a2a2a2;
  }

  .open-speech-service-dialog-button {
    width: 100%;
    height: 100%;

    background: linear-gradient(
      var(
        --attendi-speech-service-button-color-primary,
        var(
          --attendi-speech-button-color-primary-gradient-upper,
          ${su}
        )
      ),
      var(
        --attendi-speech-service-button-color-primary,
        var(
          --attendi-speech-button-color-primary-gradient-lower,
          ${au}
        )
      )
    );
  }

  .open-speech-service-dialog-button svg {
    width: 85%;
  }

  @media screen and (min-width: ${it.small}px) {
    /* Put the modal more at the top / middle when on larger screens. */
    dialog {
      top: 15%;
      bottom: auto;
      padding: 15px;
    }
  }
`;var mf=Object.defineProperty,bf=Object.getOwnPropertyDescriptor,Oi=(e,t,i,n)=>{for(var r=n>1?void 0:n?bf(t,i):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=(n?s(t,i,r):s(r))||r);return n&&r&&mf(t,i,r),r};const oe=new hf,Fa=class extends _e{constructor(){super(...arguments),this.innerModalContent=void 0,this.featureFlagRouter=Qi()}set transcribeAPIConfig(t){t!==void 0&&oe.setTranscribeAPIConfig(t)}get transcribeAPIConfig(){if(oe.transcribeAPIConfig!==null)return oe.transcribeAPIConfig}connectedCallback(){super.connectedCallback(),this.addEventListener(pi.attendiSpeechServiceDone,this.handleAttendiSpeechServiceDone),this.addEventListener("attendi-linear-reporting-method-done",t=>{const i=t.detail;this.dispatchEvent(Qn({transcript:i,text:i})),this.dispatchEvent(new CustomEvent(pi.attendiSpeechServiceDone,{detail:{transcript:i,text:i},composed:!0,bubbles:!0})),this.reset()})}dispatchAttendiSpeechSegmentEvent(t){const i=Qn({transcript:t});this.dispatchEvent(i)}handleAttendiSpeechServiceDone(t){var i,n;((i=t.detail)==null?void 0:i.transcript)!==void 0&&this.dispatchAttendiSpeechSegmentEvent((n=t.detail)==null?void 0:n.transcript),this.reset()}render(){return f`
      <link
        rel="preconnect"
        href="//fonts.googleapis.com/css2?family=Open+Sans:wght@300..800&display=swap"
      />

      <attendi-dependency-provider
        data-test="dependency-provider"
        .featureFlagRouter=${this.featureFlagRouter}
        .transcribeAPIConfig=${this.transcribeAPIConfig}
      >
        ${this.speechServiceContent}
      </attendi-dependency-provider>
    `}get speechServiceContent(){return f`<div class="speech-service-container">
        <div class="view-container">
          <attendi-speech-service-menu-button
            @click=${this.handleMenuButtonClicked}
          ></attendi-speech-service-menu-button>
          <attendi-navigator data-test="attendi-navigator"></attendi-navigator>
        </div>
      </div>

      ${this.errorModal}`}handleMenuButtonClicked(){qt.currentRoute.name===re.homeRoute?this.goToSelectReportingMethodScreen():qt.popAll()}goToSelectReportingMethodScreen(){qt.push({name:re.selectReportingMethodScreen,settings:{properties:{transcribeAPIConfig:this.transcribeAPIConfig}}})}get errorModal(){if(this.innerModalContent!==void 0)return f`<attendi-speech-service-inner-modal data-test="inner-modal">
        ${this.innerModalContent}
      </attendi-speech-service-inner-modal>`}cancel(){this.dispatchCancelEvent(),this.reset()}reset(){var t;(t=this.attendiNavigator)==null||t.reset()}dispatchCancelEvent(){const t=nu();this.dispatchEvent(t)}async showErrorDialog(t){var i;if(console.log("there was an error: ",((i=t.detail)==null?void 0:i.title)??""),t.detail===void 0)return;const n=t.detail;this.innerModalContent=this.getTitledInnerModalContent(n.title,n.content),await this.updateComplete,this.innerModal.open()}getTitledInnerModalContent(t,i){return f`<attendi-titled-inner-modal
      .data=${{icon:Br,header:t??"",content:i??"",buttons:f`
          <div
            class="titled-inner-modal-content__buttons__confirm"
            @click=${()=>this.closeInnerModal()}
            data-test="root-inner-modal__close"
          >
            ${V.ok}
          </div>
        `}}
    ></attendi-titled-inner-modal>`}closeInnerModal(){this.innerModal.close(),this.innerModalContent=void 0}};Fa.styles=[we,vf,x`
      :host {
        display: block;

        /* 
        This is very hacky, as it hardcodes the color. We use it so that the
        attendi-speech-service-recorder's buttons backgrounds have a color on hover.
        I will allow it for now since the 'AttendiSpeechService' will soon be out
        of use.
        */
        --color-fill-hover: #edf9fc;
      }

      .view-container {
        height: 100%;
      }

      .speech-service-container {
        margin: auto;
        width: min(100%, ${Ir}px);
      }

      .button-container {
        position: relative;
        height: 100%;
        width: 100%;
      }

      button {
        position: absolute;
        top: 0px;
        left: 0px;
      }
    `];let Se=Fa;Oi([y({attribute:"transcribe-api-config",type:Object,reflect:!1})],Se.prototype,"transcribeAPIConfig",1);Oi([I("attendi-navigator")],Se.prototype,"attendiNavigator",2);Oi([I("attendi-dependency-provider")],Se.prototype,"attendiDependencyProvider",2);Oi([I("attendi-speech-service-inner-modal")],Se.prototype,"innerModal",2);Oi([L()],Se.prototype,"innerModalContent",2);var yf=Object.defineProperty,_f=(e,t,i,n)=>{for(var r=void 0,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=s(t,i,r)||r);return r&&yf(t,i,r),r};const wf=1300,za=class extends R{constructor(){super(...arguments),this.isOpen=!1}render(){const t={open:this.isOpen};return f`
      <div class="modal ${ot(t)}">
        <div
          class="attendi-speech-service-modal-content"
          data-test="attendi-speech-service-modal-content"
        >
          <!-- We use an extra div for the larger clickable area (see CSS comment above) -->
          <div @click=${this.cancel}>
            <div
              class="exit-button"
              data-test="attendi-speech-service-modal__exit-button"
            >
              ${mu}
            </div>
          </div>
          <slot></slot>
        </div>
      </div>
    `}updated(t){t.has("isOpen")&&(this.isOpen?er():tr())}connectedCallback(){super.connectedCallback(),this.isOpen&&er(),this.addEventListener(pi.attendiSpeechServiceDone,()=>{this.close()}),window.addEventListener("keyup",t=>{t.key==="Escape"&&this.cancel()})}disconnectedCallback(){tr(),window.removeEventListener("keyup",t=>{t.key==="Escape"&&this.cancel()}),super.disconnectedCallback()}cancel(){var t;(t=this.getAttendiSpeechServiceElement())==null||t.dispatchCancelEvent(),this.close()}close(){var t;(t=this.getAttendiSpeechServiceElement())==null||t.reset(),this.isOpen=!1}getAttendiSpeechServiceElement(){const t=this._slottedChildren();if(t!==void 0){const i=t[0];if(i instanceof Se)return i}}open(){this.isOpen=!0}_slottedChildren(){var t;const i=(t=this.shadowRoot)==null?void 0:t.querySelector("slot");return i==null?void 0:i.assignedElements({flatten:!0})}};za.styles=x`
    :host {
      z-index: ${wf};
    }

    .modal {
      display: none; /* Hidden by default */
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto; /* Enable scroll if needed */
      background-color: rgb(0, 0, 0); /* Fallback color */
      background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
      z-index: inherit;
    }

    .open {
      display: block;
    }

    /* Modal content box */
    .attendi-speech-service-modal-content {
      position: fixed;
      left: 50%; /* Center the modal horizontally */
      transform: translateX(-50%); /* Center the modal horizontally */
      bottom: 1%; /* Place the modal (almost) at the bottom (on small screens) */
      width: min(
        90%,
        ${Ir}px
      ); /* Width of modal will be 90% on small screens, and is capped at 500px */
      padding: 10px; /* Padding between modal edge and inner content */
      background-color: white;
      border-radius: 10px;
      border: 1px solid #888;
    }

    .exit-button {
      width: 28px;
      height: 28px;
      margin-left: auto;
      cursor: pointer;
      position: absolute;
      right: 4%;
    }

    /*
    This is used to create a larger clickable area for the exit button
    for UX purposes.
    */
    .exit-button:after {
      content: "";
      position: absolute;
      left: -10px;
      top: -10px;
      width: 40px;
      height: 40px;
    }

    .exit-button svg {
      color: white;
      fill: #c4c4c4;
      transition: 0.3s fill;
    }

    .exit-button svg:hover {
      fill: #a2a2a2;
    }

    @media screen and (min-width: ${it.small}px) {
      /* Put the modal more at the top / middle when on larger screens. */
      .attendi-speech-service-modal-content {
        top: 15%;
        bottom: auto;
        padding: 15px;
      }
    }
  `;let Ha=za;_f([y({attribute:"open",type:Boolean,reflect:!0})],Ha.prototype,"isOpen");customElements.get("attendi-speech-service")||customElements.define("attendi-speech-service",Se);customElements.get("attendi-speech-service-modal")||customElements.define("attendi-speech-service-modal",Ha);customElements.get("attendi-microphone")||customElements.define("attendi-microphone",P);customElements.get("attendi-volume-over-time")||customElements.define("attendi-volume-over-time",Xt);var Cf=Object.defineProperty,xf=Object.getOwnPropertyDescriptor,ki=(e,t,i,n)=>{for(var r=n>1?void 0:n?xf(t,i):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(r=(n?s(t,i,r):s(r))||r);return n&&r&&Cf(t,i,r),r};let ge=class extends R{constructor(){super(...arguments),this.rawTitle="",this.rawText="",this.isPreview=!1,this.submitted=[]}_highlightText(e){const t=["omeprazole","simvastatin","paracetamol","simbrinza"],i=["nausea","headache","fatigue"],n=["follow-up","prescribed","refer"];return e.split(/(\W+)/).map(o=>{const s=o.toLowerCase().replace(/[^a-z-]/g,"");return t.includes(s)?`<a class="med" href="https://www.apotheek.nl/medicijnen/${s}" target="_blank" rel="noopener noreferrer">${o}</a>`:i.includes(s)?`<span class="symptom">${o}</span>`:n.includes(s)?`<span class="action">${o}</span>`:o}).join("")}render(){return f`
      <custom-card
        title="Medical report"
        text="Type or speak a medical transcript, and it will highlight medications, symptoms, and actions."
      >
        ${this.isPreview?f`
              <div class="highlight">
                ${fr(this._highlightText(this.rawText))}
              </div>
              <button @click=${()=>this.isPreview=!1}>Edit</button>
            `:f`
              <div class="input-microphone__wrapper">
                <custom-textinput
                  .value=${this.rawTitle}
                  label="Titel"
                  @input-change=${e=>{var t;this.rawTitle=((t=e.detail)==null?void 0:t.value)||""}}
                ></custom-textinput>
                <attendi-microphone
                  default-plugins="[]"
                  @click=${()=>{this.rawTitle="Fatigue and nausea"}}
                ></attendi-microphone>
              </div>

              <div class="textarea-microphone__wrapper">
                <custom-textarea
                  .value=${this.rawText}
                  label="Verslag"
                  @input-change=${e=>{var t;this.rawText=((t=e.detail)==null?void 0:t.value)||""}}
                ></custom-textarea>
                <attendi-microphone
                  default-plugins="[]"
                  @click=${()=>{this.rawText="The patient reports nausea and fatigue, was prescribed simbrinza and paracetamol, and will follow-up after the specialist refer."}}
                ></attendi-microphone>
              </div>

              <custom-button
                .disabled=${!this.rawText.trim()}
                label="Confirm"
                @button-click=${()=>{const e=this._highlightText(this.rawText);this.submitted=[...this.submitted,{title:this.rawTitle,html:e}],this.rawText="",this.rawTitle="",this.isPreview=!1}}
              ></custom-button>
            `}
      </custom-card>

      ${this.submitted.map(e=>f`
          <div class="transcript-card-wrapper">
            <transcript-card
              .title=${e.title}
              .text=${e.html}
            ></transcript-card>
          </div>
        `)}
    `}};ge.styles=x`

    .input-microphone__wrapper attendi-microphone,
    .textarea-microphone__wrapper attendi-microphone {
      align-self: center;
    }

    .input-microphone__wrapper {
      display: flex;
      gap: 0.5rem;
    }

    custom-textinput, custom-textarea {
      flex-grow: 1;
    }

    .input-microphone__wrapper attendi-microphone {
      margin-top: 2rem;
    }

    .textarea-microphone__wrapper {
      display: flex;
      gap: 0.5rem;
    }

    .textarea-microphone__wrapper attendi-microphone {
      margin-top: -3rem;
    }

    .transcript-card-wrapper {
      margin-top: 2rem;
    }
  `;ki([L()],ge.prototype,"rawTitle",2);ki([L()],ge.prototype,"rawText",2);ki([L()],ge.prototype,"isPreview",2);ki([L()],ge.prototype,"submitted",2);ge=ki([z("transcript-highlighter")],ge);
