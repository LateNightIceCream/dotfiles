"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[499],{43011:function(e,t,a){a.d(t,{$:function(){return c}});var r=a(35181),n=a(27378),i=a.n(n),o=a(97015),l=a(18291),s=a(42044),u=a(39519);function d(e){return e.includes("Spotify")?e:`Spotify – ${e}`}const c=({children:e})=>{let t=d(e);const a=(0,l.Y)(u.yA)===s.q9.PLAYING,n=(0,l.Y)((e=>null==e?void 0:e.item));return n&&a&&((0,s.G_)(n)?t=[n.name,n.artists.map((e=>e.name)).join(r.ag.getSeparator())].join(" · "):(0,s.iw)(n)?t=[n.name,n.show.name].join(" · "):(0,s.k6)(n)&&(t=d(r.ag.get("ad-formats.advertisement")))),i().createElement(o.q,{defaultTitle:r.ag.get("page.generic-title"),defer:!1},i().createElement("title",null,t))}},11056:function(e,t,a){a.d(t,{T:function(){return c}});var r=a(27378),n=a.n(r),i=a(22117),o=a(66027),l=a(11541),s=a(58324),u="profile-editImage-imageContainer",d="profile-editImage-editImageButtonContainer";const c=function({onClick:e,name:t,images:a,canEdit:r,placeholderType:c,shape:m=o.Kc.SQUARE,dragUri:g=""}){const[p,f]=(0,o.RH)(a),v=(0,i.VO)(p,f)===i.KO.loaded,h=(0,s.O1)([g],t);return n().createElement("div",{className:u,"data-testid":`${c}-image`,draggable:!!g,onDragStart:h},n().createElement(o.Oe,{loading:"eager",name:t,images:a,placeholderType:c,shape:m}),r&&n().createElement("div",{className:d},n().createElement(l.F,{overlay:v,onClick:e,rounded:m===o.Kc.CIRCLE})))}},73745:function(e,t,a){a.r(t),a.d(t,{UserPage:function(){return gt},default:function(){return pt}});var r=a(27378),n=a.n(r),i=a(85002),o=a(66917),l=a.n(o),s=a(75260),u=a(60042),d=a.n(u),c={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",buddyFeedMinWidth:"72px",buddyFeedEmptyMinWidth:"270px",buddyFeedInitialWidth:"270px",buddyFeedMaxWidth:"384px",container:"profile-userOverview-container",background:"profile-userOverview-background",overlay:"profile-userOverview-overlay",loggedOut:"profile-userOverview-loggedOut",historyButtons:"profile-userOverview-historyButtons",icon:"profile-userOverview-icon",button:"profile-userOverview-button",forward:"profile-userOverview-forward",topbarContentWrapper:"profile-userOverview-topbarContentWrapper",topbarContent:"profile-userOverview-topbarContent",UpgradeButton:"profile-userOverview-UpgradeButton",indicators:"profile-userOverview-indicators",contentArea:"profile-userOverview-contentArea",back:"profile-userOverview-back",user:"profile-userOverview-user",section:"profile-userOverview-section",subPage:"profile-userOverview-subPage",imageContainer:"profile-userOverview-imageContainer",topTrackSubPage:"profile-userOverview-topTrackSubPage",header:"profile-userOverview-header",title:"profile-userOverview-title",userVerifiedBadge:"profile-userOverview-userVerifiedBadge"},m=a(66027),g=a(90849),p=a(41805),f=a(18010),v=a(35181),h=a(36726),b=a(99002),y=a(76385),E=a(88319),k=a(83509),w=a(68215),P=a(55078),I=a(31630),O=a(96816),_=a(44791);const N=e=>({owner:{display_name:e.owner_name},name:e.name,uri:e.uri,description:e.followers_count?v.ag.get("user.followers",e.followers_count):"",images:[{url:(0,_.p)({imageUriOrUrl:e.image_url}),width:300,height:300}]});function S(e){return{uri:e.uri,name:e.name,images:[{url:e.image_url}]}}function x(e=[]){return e.map(S)}function D(e){return{name:e.name,uri:e.uri,images:[{url:e.image_url}]}}var R=a(66422),A=a(9807),C=a(18686),M=a(49962),T=a(9271),j={container:"profile-userEditDetails-container",content:"profile-userEditDetails-content",header:"profile-userEditDetails-header",closeBtn:"profile-userEditDetails-closeBtn",image:"profile-userEditDetails-image",imageLoadingContainer:"profile-userEditDetails-imageLoadingContainer",textElement:"profile-userEditDetails-textElement",name:"profile-userEditDetails-name",textElementLabel:"profile-userEditDetails-textElementLabel",labelText:"profile-userEditDetails-labelText",nameInput:"profile-userEditDetails-nameInput",save:"profile-userEditDetails-save",disclaimer:"profile-userEditDetails-disclaimer"},U=a(58558),H=a(64649);function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function J(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(Object(a),!0).forEach((function(t){(0,H.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function L(e){return{type:"setLoading",loading:e}}function B(e){return{type:"setMessage",message:e}}function F(e,t){switch(t.type){case"setName":return J(J({},e),{},{name:t.name});case"setMessage":return J(J({},e),{},{message:t.message,loading:!1});case"setLoading":return J(J({},e),{},{loading:t.loading,message:null});case"setImageData":return J(J({},e),{},{imageData:t.data,removeImage:!1});case"setImageToken":return J(J({},e),{},{imageToken:t.token,removeImage:!1});case"removeImage":return J(J({},e),{},{imageToken:void 0,imageData:void 0,image:void 0,removeImage:!0});default:return e}}var G=a(34790);const K={type:"error",get message(){return v.ag.get("user.edit-details.error.file-size-exceeded",4)}},q={type:"error",get message(){return v.ag.get("user.edit-details.error.too-small",300,300)}},$={type:"error",get message(){return v.ag.get("user.edit-details.error.missing-name")}},Z={type:"error",get message(){return v.ag.get("user.edit-details.error.failed-to-save")}},V={type:"error",get message(){return v.ag.get("user.edit-details.error.file-upload-failed")}};var X=a(93088),Y=a(57019);function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function Q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(Object(a),!0).forEach((function(t){(0,H.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const ee={paths:""},te={encode(e,t=Y.Writer.create()){for(const a of e.paths)t.uint32(10).string(a);return t},decode(e,t){const a=e instanceof Uint8Array?new Y.Reader(e):e;let r=void 0===t?a.len:a.pos+t;const n=Q({},ee);for(n.paths=[];a.pos<r;){const e=a.uint32();switch(e>>>3){case 1:n.paths.push(a.string());break;default:a.skipType(7&e)}}return n},fromJSON(e){const t=Q({},ee);if(t.paths=[],void 0!==e.paths&&null!==e.paths)for(const a of e.paths)t.paths.push(String(a));return t},fromPartial(e){const t=Q({},ee);if(t.paths=[],void 0!==e.paths&&null!==e.paths)for(const a of e.paths)t.paths.push(a);return t},toJSON(e){const t={};return e.paths?t.paths=e.paths.map((e=>e)):t.paths=[],t}};var ae=a(24067),re=a(30816).Buffer;function ne(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function ie(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(a),!0).forEach((function(t){(0,H.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ne(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const oe={value:0},le={value:!1},se={value:""};const ue={encode:(e,t=Y.Writer.create())=>(t.uint32(8).int32(e.value),t),decode(e,t){const a=e instanceof Uint8Array?new Y.Reader(e):e;let r=void 0===t?a.len:a.pos+t;const n=ie({},oe);for(;a.pos<r;){const e=a.uint32();switch(e>>>3){case 1:n.value=a.int32();break;default:a.skipType(7&e)}}return n},fromJSON(e){const t=ie({},oe);return void 0!==e.value&&null!==e.value?t.value=Number(e.value):t.value=0,t},fromPartial(e){const t=ie({},oe);return void 0!==e.value&&null!==e.value?t.value=e.value:t.value=0,t},toJSON(e){const t={};return void 0!==e.value&&(t.value=e.value),t}},de={encode:(e,t=Y.Writer.create())=>(t.uint32(8).bool(e.value),t),decode(e,t){const a=e instanceof Uint8Array?new Y.Reader(e):e;let r=void 0===t?a.len:a.pos+t;const n=ie({},le);for(;a.pos<r;){const e=a.uint32();switch(e>>>3){case 1:n.value=a.bool();break;default:a.skipType(7&e)}}return n},fromJSON(e){const t=ie({},le);return void 0!==e.value&&null!==e.value?t.value=Boolean(e.value):t.value=!1,t},fromPartial(e){const t=ie({},le);return void 0!==e.value&&null!==e.value?t.value=e.value:t.value=!1,t},toJSON(e){const t={};return void 0!==e.value&&(t.value=e.value),t}},ce={encode:(e,t=Y.Writer.create())=>(t.uint32(10).string(e.value),t),decode(e,t){const a=e instanceof Uint8Array?new Y.Reader(e):e;let r=void 0===t?a.len:a.pos+t;const n=ie({},se);for(;a.pos<r;){const e=a.uint32();switch(e>>>3){case 1:n.value=a.string();break;default:a.skipType(7&e)}}return n},fromJSON(e){const t=ie({},se);return void 0!==e.value&&null!==e.value?t.value=String(e.value):t.value="",t},fromPartial(e){const t=ie({},se);return void 0!==e.value&&null!==e.value?t.value=e.value:t.value="",t},toJSON(e){const t={};return void 0!==e.value&&(t.value=e.value),t}};Y.util.Long!==ae&&(Y.util.Long=ae,(0,Y.configure)());const me=globalThis;me.atob,me.btoa;function ge(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function pe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(a),!0).forEach((function(t){(0,H.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ge(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const fe={maxWidth:0,maxHeight:0,url:""},ve={},he={},be={encode:(e,t=Y.Writer.create())=>(t.uint32(8).int32(e.maxWidth),t.uint32(16).int32(e.maxHeight),t.uint32(26).string(e.url),t),decode(e,t){const a=e instanceof Uint8Array?new Y.Reader(e):e;let r=void 0===t?a.len:a.pos+t;const n=pe({},fe);for(;a.pos<r;){const e=a.uint32();switch(e>>>3){case 1:n.maxWidth=a.int32();break;case 2:n.maxHeight=a.int32();break;case 3:n.url=a.string();break;default:a.skipType(7&e)}}return n},fromJSON(e){const t=pe({},fe);return void 0!==e.maxWidth&&null!==e.maxWidth?t.maxWidth=Number(e.maxWidth):t.maxWidth=0,void 0!==e.maxHeight&&null!==e.maxHeight?t.maxHeight=Number(e.maxHeight):t.maxHeight=0,void 0!==e.url&&null!==e.url?t.url=String(e.url):t.url="",t},fromPartial(e){const t=pe({},fe);return void 0!==e.maxWidth&&null!==e.maxWidth?t.maxWidth=e.maxWidth:t.maxWidth=0,void 0!==e.maxHeight&&null!==e.maxHeight?t.maxHeight=e.maxHeight:t.maxHeight=0,void 0!==e.url&&null!==e.url?t.url=e.url:t.url="",t},toJSON(e){const t={};return void 0!==e.maxWidth&&(t.maxWidth=e.maxWidth),void 0!==e.maxHeight&&(t.maxHeight=e.maxHeight),void 0!==e.url&&(t.url=e.url),t}},ye={encode(e,t=Y.Writer.create()){void 0!==e.username&&void 0!==e.username&&ce.encode({value:e.username},t.uint32(10).fork()).ldelim(),void 0!==e.name&&void 0!==e.name&&ce.encode({value:e.name},t.uint32(18).fork()).ldelim();for(const a of e.images)be.encode(a,t.uint32(26).fork()).ldelim();return void 0!==e.verified&&void 0!==e.verified&&de.encode({value:e.verified},t.uint32(34).fork()).ldelim(),void 0!==e.editProfileDisabled&&void 0!==e.editProfileDisabled&&de.encode({value:e.editProfileDisabled},t.uint32(42).fork()).ldelim(),void 0!==e.reportAbuseDisabled&&void 0!==e.reportAbuseDisabled&&de.encode({value:e.reportAbuseDisabled},t.uint32(50).fork()).ldelim(),void 0!==e.abuseReportedName&&void 0!==e.abuseReportedName&&de.encode({value:e.abuseReportedName},t.uint32(58).fork()).ldelim(),void 0!==e.abuseReportedImage&&void 0!==e.abuseReportedImage&&de.encode({value:e.abuseReportedImage},t.uint32(66).fork()).ldelim(),void 0!==e.hasSpotifyName&&void 0!==e.hasSpotifyName&&de.encode({value:e.hasSpotifyName},t.uint32(74).fork()).ldelim(),void 0!==e.hasSpotifyImage&&void 0!==e.hasSpotifyImage&&de.encode({value:e.hasSpotifyImage},t.uint32(82).fork()).ldelim(),void 0!==e.color&&void 0!==e.color&&ue.encode({value:e.color},t.uint32(90).fork()).ldelim(),t},decode(e,t){const a=e instanceof Uint8Array?new Y.Reader(e):e;let r=void 0===t?a.len:a.pos+t;const n=pe({},ve);for(n.images=[];a.pos<r;){const e=a.uint32();switch(e>>>3){case 1:n.username=ce.decode(a,a.uint32()).value;break;case 2:n.name=ce.decode(a,a.uint32()).value;break;case 3:n.images.push(be.decode(a,a.uint32()));break;case 4:n.verified=de.decode(a,a.uint32()).value;break;case 5:n.editProfileDisabled=de.decode(a,a.uint32()).value;break;case 6:n.reportAbuseDisabled=de.decode(a,a.uint32()).value;break;case 7:n.abuseReportedName=de.decode(a,a.uint32()).value;break;case 8:n.abuseReportedImage=de.decode(a,a.uint32()).value;break;case 9:n.hasSpotifyName=de.decode(a,a.uint32()).value;break;case 10:n.hasSpotifyImage=de.decode(a,a.uint32()).value;break;case 11:n.color=ue.decode(a,a.uint32()).value;break;default:a.skipType(7&e)}}return n},fromJSON(e){const t=pe({},ve);if(t.images=[],void 0!==e.username&&null!==e.username?t.username=String(e.username):t.username=void 0,void 0!==e.name&&null!==e.name?t.name=String(e.name):t.name=void 0,void 0!==e.images&&null!==e.images)for(const a of e.images)t.images.push(be.fromJSON(a));return void 0!==e.verified&&null!==e.verified?t.verified=Boolean(e.verified):t.verified=void 0,void 0!==e.editProfileDisabled&&null!==e.editProfileDisabled?t.editProfileDisabled=Boolean(e.editProfileDisabled):t.editProfileDisabled=void 0,void 0!==e.reportAbuseDisabled&&null!==e.reportAbuseDisabled?t.reportAbuseDisabled=Boolean(e.reportAbuseDisabled):t.reportAbuseDisabled=void 0,void 0!==e.abuseReportedName&&null!==e.abuseReportedName?t.abuseReportedName=Boolean(e.abuseReportedName):t.abuseReportedName=void 0,void 0!==e.abuseReportedImage&&null!==e.abuseReportedImage?t.abuseReportedImage=Boolean(e.abuseReportedImage):t.abuseReportedImage=void 0,void 0!==e.hasSpotifyName&&null!==e.hasSpotifyName?t.hasSpotifyName=Boolean(e.hasSpotifyName):t.hasSpotifyName=void 0,void 0!==e.hasSpotifyImage&&null!==e.hasSpotifyImage?t.hasSpotifyImage=Boolean(e.hasSpotifyImage):t.hasSpotifyImage=void 0,void 0!==e.color&&null!==e.color?t.color=Number(e.color):t.color=void 0,t},fromPartial(e){const t=pe({},ve);if(t.images=[],void 0!==e.username&&null!==e.username?t.username=e.username:t.username=void 0,void 0!==e.name&&null!==e.name?t.name=e.name:t.name=void 0,void 0!==e.images&&null!==e.images)for(const a of e.images)t.images.push(be.fromPartial(a));return void 0!==e.verified&&null!==e.verified?t.verified=e.verified:t.verified=void 0,void 0!==e.editProfileDisabled&&null!==e.editProfileDisabled?t.editProfileDisabled=e.editProfileDisabled:t.editProfileDisabled=void 0,void 0!==e.reportAbuseDisabled&&null!==e.reportAbuseDisabled?t.reportAbuseDisabled=e.reportAbuseDisabled:t.reportAbuseDisabled=void 0,void 0!==e.abuseReportedName&&null!==e.abuseReportedName?t.abuseReportedName=e.abuseReportedName:t.abuseReportedName=void 0,void 0!==e.abuseReportedImage&&null!==e.abuseReportedImage?t.abuseReportedImage=e.abuseReportedImage:t.abuseReportedImage=void 0,void 0!==e.hasSpotifyName&&null!==e.hasSpotifyName?t.hasSpotifyName=e.hasSpotifyName:t.hasSpotifyName=void 0,void 0!==e.hasSpotifyImage&&null!==e.hasSpotifyImage?t.hasSpotifyImage=e.hasSpotifyImage:t.hasSpotifyImage=void 0,void 0!==e.color&&null!==e.color?t.color=e.color:t.color=void 0,t},toJSON(e){const t={};return void 0!==e.username&&(t.username=e.username),void 0!==e.name&&(t.name=e.name),e.images?t.images=e.images.map((e=>e?be.toJSON(e):void 0)):t.images=[],void 0!==e.verified&&(t.verified=e.verified),void 0!==e.editProfileDisabled&&(t.editProfileDisabled=e.editProfileDisabled),void 0!==e.reportAbuseDisabled&&(t.reportAbuseDisabled=e.reportAbuseDisabled),void 0!==e.abuseReportedName&&(t.abuseReportedName=e.abuseReportedName),void 0!==e.abuseReportedImage&&(t.abuseReportedImage=e.abuseReportedImage),void 0!==e.hasSpotifyName&&(t.hasSpotifyName=e.hasSpotifyName),void 0!==e.hasSpotifyImage&&(t.hasSpotifyImage=e.hasSpotifyImage),void 0!==e.color&&(t.color=e.color),t}},Ee={encode:(e,t=Y.Writer.create())=>(void 0!==e.mask&&void 0!==e.mask&&te.encode(e.mask,t.uint32(10).fork()).ldelim(),void 0!==e.userProfile&&void 0!==e.userProfile&&ye.encode(e.userProfile,t.uint32(18).fork()).ldelim(),t),decode(e,t){const a=e instanceof Uint8Array?new Y.Reader(e):e;let r=void 0===t?a.len:a.pos+t;const n=pe({},he);for(;a.pos<r;){const e=a.uint32();switch(e>>>3){case 1:n.mask=te.decode(a,a.uint32());break;case 2:n.userProfile=ye.decode(a,a.uint32());break;default:a.skipType(7&e)}}return n},fromJSON(e){const t=pe({},he);return void 0!==e.mask&&null!==e.mask?t.mask=te.fromJSON(e.mask):t.mask=void 0,void 0!==e.userProfile&&null!==e.userProfile?t.userProfile=ye.fromJSON(e.userProfile):t.userProfile=void 0,t},fromPartial(e){const t=pe({},he);return void 0!==e.mask&&null!==e.mask?t.mask=te.fromPartial(e.mask):t.mask=void 0,void 0!==e.userProfile&&null!==e.userProfile?t.userProfile=ye.fromPartial(e.userProfile):t.userProfile=void 0,t},toJSON(e){const t={};return void 0!==e.mask&&(t.mask=e.mask?te.toJSON(e.mask):void 0),void 0!==e.userProfile&&(t.userProfile=e.userProfile?ye.toJSON(e.userProfile):void 0),t}},ke=`${X.XA}/identity`;async function we(e,t,{name:a,imageUploadToken:r}){void 0!==a&&await async function(e,t,a){const r=Ee.encode(Ee.fromPartial({mask:{paths:["name"]},userProfile:null!==a?{name:a}:{}}));await e.build().withHost(ke).withMethod("POST").withPath(`/v3/user/username/${encodeURIComponent(t)}`).withEndpointIdentifier("/v3/user/username/{username}").withBody(r.finish()).withoutMarket().send()}(e,t,a),void 0!==r&&(null!==r?await async function(e,t,a){await e.build().withHost(ke).withMethod("POST").withPath(`/v3/profile-image/${encodeURIComponent(t)}/${a}`).withEndpointIdentifier("/v3/profile-image/{username}/{uploadToken}").withoutMarket().send()}(e,t,r):await async function(e,t){await e.build().withHost(ke).withMethod("DELETE").withPath(`/v3/profile-image/${encodeURIComponent(t)}`).withEndpointIdentifier("/v3/profile-image/{username}").withoutMarket().send()}(e,t))}var Pe=a(60849);var Ie=a(57544),Oe=a(32321),_e=a(22117),Ne="uQ09anRR0xPvST8X8ixK",Se="Hkf_KdFIzKW2I_fjmwWA",xe="_kySQxSksHLKYgofFfhl",De="HXG6IcKr9KX6M3J0kJfa",Re="l2z5awDY8hMGHvR2_3td";const Ae=function({onClickEdit:e,onClickRemove:t,name:a,images:r}){const[i,o]=(0,m.RH)(r),l=(0,_e.VO)(i,o)===_e.KO.loaded;return n().createElement("div",{className:Ne},n().createElement(m.Oe,{loading:"eager",name:a,images:r,placeholderType:"user",shape:m.Kc.CIRCLE}),n().createElement("div",{className:d()(Se,{[De]:l})},n().createElement("button",{className:xe,"aria-haspopup":"true",onClick:e,type:"button"},n().createElement(A.Dy,null,v.ag.get("user.edit-details.choose-photo"))),n().createElement("div",{className:d()(Re,"icon")},n().createElement(Oe.f,{iconSize:48,"aria-hidden":!0})),n().createElement("button",{className:xe,onClick:t,type:"button"},n().createElement(A.Dy,null,v.ag.get("user.edit-details.remove-photo")))))},Ce=n().memo((({userId:e,name:t,image:a,onClose:i,shouldOpenImagePicker:o})=>{const[l,s]=(0,Ie.Hs)(),[u,c]=function({name:e,image:t}){return(0,r.useReducer)(F,{loading:!1,message:null,name:e,image:t})}({name:t,image:a}),m=(0,r.useMemo)((()=>{const e=u.imageData||u.image;return e?[{url:e,width:300,height:300}]:[]}),[u.image,u.imageData]);(0,r.useEffect)((()=>{o&&s()}),[s,o]);const g=(0,r.useCallback)((e=>{e===Ie.Hy.FILE_TOO_BIG?c(B(K)):e===Ie.Hy.IMAGE_TOO_SMALL&&c(B(q))}),[c]),p=(0,r.useCallback)((()=>{c({type:"removeImage"})}),[c]),f=(0,r.useCallback)((async t=>{t.preventDefault();if(0!==u.name.trim().length){c(L(!0));try{const t=u.removeImage?null:u.imageToken;await async function(e,{name:t,imageUploadToken:a}){await we(Pe.b.getInstance(),e,{name:t,imageUploadToken:a})}(e,{name:u.name,imageUploadToken:t}),i({name:u.name,image:u.imageData||u.image})}catch(e){c(B(Z))}}else c(B($))}),[c,i,u.image,u.imageData,u.imageToken,u.name,u.removeImage,e]);return n().createElement(C.Z,{isOpen:!0,contentLabel:v.ag.get("user.edit-details.title"),onRequestClose:()=>i()},n().createElement("div",{className:j.container},n().createElement("div",{className:j.header},n().createElement(A.Dy,{as:"h1",className:j.heading,variant:A.Dy.canon},v.ag.get("user.edit-details.title")),n().createElement("button",{className:j.closeBtn,onClick:()=>i(),"aria-label":v.ag.get("close")},n().createElement(M.j,{iconSize:16}))),u.message&&n().createElement(G.X,{isErrorMessage:"error"===u.message.type,message:u.message.message}),n().createElement("form",{className:j.content,onSubmit:f},n().createElement(Ie.uL,{isOpen:l,minImageWidth:300,minImageHeight:300,maxFileSizeMB:4,onChange:async function(e){if(!e)return;const{imageFile:t,imageDataUrl:a}=e;if(c(B(null)),c({type:"setImageData",data:a}),t)try{c(L(!0));const e=await async function(e){const t=await Pe.b.getInstance().build().withEndpointIdentifier("image-upload/v4/user-profile").withHost("https://image-upload.spotify.com/v4").withMethod("POST").withPath("/user-profile").withBody(e).withoutGlobalHeaders().withHeaders([{key:"Content-Type",value:"image/jpeg"}]).withoutMarket().send();if(!t.body)throw new Error("No upload token recieved");return t.body.uploadToken}(t);c({type:"setImageToken",token:e}),c(L(!1))}catch{c(B(V))}},onError:g}),n().createElement("div",{className:j.image},n().createElement(Ae,{name:t,images:m,onClickEdit:s,onClickRemove:p}),u.loading&&n().createElement("div",{className:j.imageLoadingContainer},n().createElement(T.T,null))),n().createElement("div",{className:j.name},n().createElement("label",{htmlFor:"user-edit-name",className:j.textElementLabel},n().createElement(A.Dy,{as:"span",variant:A.$e.finaleBold,className:j.labelText},v.ag.get("user.edit-details.name-label"))),n().createElement("input",{"data-testid":"user-edit-name-input",id:"user-edit-name",type:"text",dir:"auto",className:d()(j.textElement,j.nameInput),onChange:e=>{c(function(e){return{type:"setName",name:e}}(e.target.value))},placeholder:v.ag.get("user.edit-details.name-placeholder"),maxLength:32,value:u.name})),n().createElement(U.Y,{version:"secondary",className:j.save,onClick:f,disabled:u.loading},v.ag.get("save")),n().createElement(A.Dy,{as:"p",variant:A.$e.finaleBold,className:j.disclaimer},v.ag.get("image-upload.legal-disclaimer")))))}));var Me=a(28314),Te=a(1391),je=a(88886),Ue=a(58345),He=a(5312),We=a(11056);function Je(e,t){switch(t.type){case"OPEN_MODAL":return{isModalOpen:!0,shouldOpenImagePicker:!1};case"OPEN_MODAL_WITH_IMAGEPICKER":return{isModalOpen:!0,shouldOpenImagePicker:!0};case"CLOSE_MODAL":return{isModalOpen:!1,shouldOpenImagePicker:!1};default:return e}}var Le=a(410),Be=a(39536),Fe=a(12275),Ge=a(191),Ke=a(79378),qe=a(50878),$e=a(61750),Ze=a(40299),Ve=a(13122),Xe=a(23),Ye=a(64619);const ze=n().memo((({tracks:e,hasHeaderRow:t=!1,nrTracksVisible:a,userId:i})=>{const o=l().userToplistURI(i,"tracks").toURI(),s=a?e.slice(0,a):e,{usePlayContextItem:u}=(0,Xe.n)({uri:o,pages:[{items:e.map((e=>({type:Ye.p.TRACK,uri:e.uri,uid:null,provider:null})))}]},{featureIdentifier:"profile",referrerIdentifier:"user_profile"}),d=(0,r.useCallback)(((e,t)=>{var a;const r=(0,Ze.X)(null==e||null===(a=e.album)||void 0===a?void 0:a.images,{desiredSize:40});return n().createElement(Ve.SS,{key:t+e.uri,index:t,uri:(0,$e.$V)(e),duration_ms:e.duration_ms,name:e.name,artists:e.artists,album:e.album,isPlayable:!0,isExplicit:!!e.explicit,isMOGEFRestricted:!!e.mogef19,imgUrl:(null==r?void 0:r.url)||"",contextUri:o,usePlayContextItem:u})}),[o,u]);return n().createElement(qe.ZP,{value:"user-top-tracks-tracklist"},n().createElement(Ke.Pv,{ariaLabel:v.ag.get("top_tracks_this_month"),renderRow:d,nrTracks:s.length,tracks:s,resolveUri:e=>e.uri,hasHeaderRow:t,columns:[Ke.QD.INDEX,Ke.QD.TITLE,Ke.QD.ALBUM,Ke.QD.DURATION]}))}),((e,t)=>e.tracks===t.tracks)),Qe=n().memo((({tracks:e,title:t,tagline:a,seeAllUri:r,className:i,userId:o})=>{if(!e||0===e.length)return null;const l=e.length>4;return n().createElement("section",{className:i},n().createElement(Ge.r,{title:t,tagline:a,seeAllUri:r,hasMoreElements:l}),n().createElement(ze,{tracks:e,userId:o,nrTracksVisible:4}))}),((e,t)=>e.tracks===t.tracks));var et=a(69365),tt=a(16189),at=a(33954),rt=a(43011);const nt=e=>{var t,a;const i=(0,s.v9)(Te.Gf),o=(0,s.v9)(Te.A$),{userId:u}=e,_=l().profileURI(u.split("&")[0]).toURI(),S=(0,s.I0)(),A=(0,r.useMemo)((()=>(0,Ze.X)(o)),[o]),[{isModalOpen:C,shouldOpenImagePicker:M},T]=function(){const[e,t]=(0,r.useReducer)(Je,{isModalOpen:!1,shouldOpenImagePicker:!1});return[e,t]}(),j=(0,E.o)(),U=!(0,k.k)(),{data:H,loading:W}=(0,w.J)(P.n5.getProfile,[{username:u,playlists:10,artists:10}]),J=null==H?void 0:H.body,L=null==J?void 0:J.public_playlists,B=null==J?void 0:J.is_following,F=null==J?void 0:J.is_verified,G=(null==J?void 0:J.is_current_user)||!1,K=null==J?void 0:J.recently_played_artists,q=G?(null==A?void 0:A.url)||"":(null==J?void 0:J.image_url)||"",$=(0,s.v9)((e=>e.entities.follows[_])),Z=(0,s.v9)(at.C),V=(G?i:null==J?void 0:J.name)||"",X=(0,Be.Z)((null==J?void 0:J.image_url)||null),{data:Y,loading:z}=(0,w.J)(P.n5.getFollowing,[u]),Q=null==Y||null===(t=Y.body)||void 0===t?void 0:t.profiles,{data:ee,loading:te}=(0,w.J)(P.n5.getFollowers,[u]),ae=null==ee||null===(a=ee.body)||void 0===a?void 0:a.profiles,re=(0,r.useMemo)((()=>(e=>e?P.n5.getUserTopArtists:()=>Promise.resolve({status:200,body:{items:[],offset:0,limit:0,total:0,href:"",next:null,previous:null}}))(G)),[G]),ne=(0,r.useMemo)((()=>(e=>e?P.n5.getUserTopTracks:()=>Promise.resolve({status:200,body:{items:[],offset:0,limit:0,total:0,href:"",next:null,previous:null}}))(G&&!Z)),[G,Z]),{data:ie,loading:oe}=(0,w.J)(re,[]),{data:le,loading:se}=(0,w.J)(ne,[]),ue=null==ie?void 0:ie.body,de=null==le?void 0:le.body,ce=(0,r.useCallback)((()=>{j({targetUri:_,intent:$?"unfollow":"follow",type:"click"}),S($?(0,f.Oi)([_]):(0,f.cQ)([_]))}),[S,j,_,$]);(0,r.useEffect)((()=>{void 0===$&&void 0!==B&&S((0,f.NU)(_,B))}),[S,$,B,_]);const me=(0,r.useCallback)((e=>{T({type:"CLOSE_MODAL"}),e&&(S((0,Me.dL)(e.name)),S((0,Me.GR)(e.image?[{url:e.image,height:null,width:null}]:[])))}),[S,T]),ge=(0,r.useCallback)((()=>T({type:"OPEN_MODAL"})),[T]),pe=(0,r.useCallback)((()=>{T({type:"OPEN_MODAL_WITH_IMAGEPICKER"})}),[T]),fe=(0,r.useMemo)((()=>x(Q)),[Q]),ve=(0,r.useMemo)((()=>x(ae)),[ae]),he=(0,r.useMemo)((()=>(L||[]).map(N)),[L]),be=(0,r.useMemo)((()=>(K||[]).map(D)),[K]),ye=(0,r.useMemo)((()=>[{url:q}]),[q]);if(!J||W||z||te||se||oe)return n().createElement(h.h,{errorMessage:v.ag.get("error.not_found.title.page")});const Ee={total:J.followers_count},ke=d()("contentSpacing",c.section,c.shelf);return n().createElement("div",{className:c.user},n().createElement(rt.$,null,V),n().createElement(m.gF,{backgroundColor:X},n().createElement(g.W,null,n().createElement(p.i,{text:V})),n().createElement(Fe._,{menu:n().createElement(Ue.I,{uri:J.uri})},n().createElement("div",{className:c.imageContainer},n().createElement(We.T,{canEdit:G,name:V,images:ye,onClick:pe,placeholderType:"user",shape:m.Kc.CIRCLE}))),n().createElement(m.sP,null,n().createElement(m.dy,{small:!0,uppercase:!0},F&&n().createElement("span",{className:c.userVerifiedBadge},n().createElement(tt.S,null)),v.ag.get("card.tag.profile")),n().createElement(Fe._,{menu:n().createElement(Ue.I,{uri:J.uri})},n().createElement(m.xd,{canEdit:G,editTitle:v.ag.get("playlist.edit-details.title"),onClick:ge},V)),n().createElement(m.QS,{totalFollowers:Ee.total,totalFollowing:fe.length,publicPlaylists:J.total_public_playlists_count,userId:u}))),n().createElement(y.o,{backgroundColor:X},n().createElement(y.F,null,!G&&n().createElement(et.r,null,n().createElement(b.e,{isFollowing:Boolean($),onClick:ce,disabled:U})),n().createElement(je.y,{menu:n().createElement(Ue.I,{uri:J.uri,onEditProfileCallback:ge})},n().createElement(He.z,null)))),n().createElement(O.P,{className:ke,total:(null==ue?void 0:ue.total)||0,title:v.ag.get("top_artists_this_month"),tagline:v.ag.get("only_visible_to_you"),seeAllUri:`spotify:app:user:${u}:top:artists`},null==ue?void 0:ue.items.map((e=>n().createElement(Le.I,{key:e.uri,entity:e})))),n().createElement(Qe,{className:ke,title:v.ag.get("top_tracks_this_month"),tagline:v.ag.get("only_visible_to_you"),seeAllUri:`spotify:app:user:${u}:top:tracks`,userId:u,tracks:null==de?void 0:de.items}),n().createElement(O.P,{className:ke,total:J.total_public_playlists_count,title:v.ag.get("public_playlists"),seeAllUri:`spotify:app:user:${u}:playlists`},he.map((e=>n().createElement(R.Z,{key:e.uri,entity:e})))),be.length?n().createElement(O.P,{className:ke,total:be.length,title:v.ag.get("recently_played_artists"),seeAllUri:`spotify:app:user:${u}:recently-played-artists`},be.map((e=>n().createElement(Le.I,{key:e.uri,entity:e})))):null,ve.length?n().createElement(O.P,{className:ke,title:v.ag.get("followers"),total:ve.length,seeAllUri:`spotify:app:user:${u}:followers`},ve.map((e=>{const t=(0,I.U)(e.uri);return n().createElement(t,{key:e.uri,entity:e})}))):null,fe.length?n().createElement(O.P,{className:ke,title:v.ag.get("following"),total:fe.length,seeAllUri:`spotify:app:user:${u}:following`},fe.map((e=>{const t=(0,I.U)(e.uri);return n().createElement(t,{key:e.uri,entity:e})}))):null,G&&C?n().createElement(Ce,{userId:u,name:V,image:q,onClose:me,shouldOpenImagePicker:M}):null)},it=e=>{var t;const{userId:a}=e,{data:i,loading:o}=(0,w.J)(P.n5.getFollowing,[a]),l=null==i||null===(t=i.body)||void 0===t?void 0:t.profiles,s=(0,r.useMemo)((()=>x(l)),[l]);return o?n().createElement(h.h,{errorMessage:v.ag.get("error.not_found.title.page")}):n().createElement(O.P,{className:d()("contentSpacing",c.subPage),title:v.ag.get("following"),total:s.length,showAll:!0},s.map((e=>{const t=(0,I.U)(e.uri);return n().createElement(t,{entity:e,key:e.uri})})))},ot=e=>{var t;const{userId:a}=e,{data:i,loading:o}=(0,w.J)(P.n5.getFollowers,[a]),l=null==i||null===(t=i.body)||void 0===t?void 0:t.profiles,s=(0,r.useMemo)((()=>x(l)),[l]);return o?n().createElement(h.h,{errorMessage:v.ag.get("error.not_found.title.page")}):n().createElement(O.P,{className:d()("contentSpacing",c.subPage),title:v.ag.get("followers"),total:s.length,showAll:!0},s.map((e=>{const t=(0,I.U)(e.uri);return n().createElement(t,{entity:e,key:e.uri})})))},lt=e=>{const{userId:t}=e,{data:a,loading:i}=(0,w.J)(P.n5.getPlaylists,[{username:t}]),o=null==a?void 0:a.body,{public_playlists:l,total_public_playlists_count:s=0}=o||{},u=(0,r.useMemo)((()=>(l||[]).map(N)),[l]);return i?n().createElement(h.h,{errorMessage:v.ag.get("error.not_found.title.page")}):n().createElement(O.P,{className:d()("contentSpacing",c.subPage),total:s,title:v.ag.get("public_playlists"),showAll:!0},u.map((e=>n().createElement(R.Z,{key:e.uri,entity:e}))))},st=e=>{var t;const{userId:a}=e,{data:i,loading:o}=(0,w.J)(P.n5.getRecentlyPlayedArtists,[{username:a,limit:50}]),l=null==i||null===(t=i.body)||void 0===t?void 0:t.artists,s=(0,r.useMemo)((()=>(l||[]).map(D)),[l]);return o?n().createElement(h.h,{errorMessage:v.ag.get("error.not_found.title.page")}):n().createElement(O.P,{className:d()("contentSpacing",c.subPage),total:s.length,title:v.ag.get("recently_played_artists"),showAll:!0},s.map((e=>n().createElement(Le.I,{key:e.uri,entity:e}))))},ut=({userId:e})=>{const{data:t,loading:a}=(0,w.J)(P.n5.getUserTopTracks,[{offset:0,limit:50}]),r=null==t?void 0:t.body;return a?n().createElement(h.h,{errorMessage:v.ag.get("error.not_found.title.page")}):r?n().createElement("div",{className:d()("contentSpacing",c.subPage,c.topTrackSubPage)},n().createElement("div",{className:c.header},n().createElement(A.Dy,{as:"h1",variant:A.Dy.canon,className:c.title},v.ag.get("top_tracks_this_month")),n().createElement(A.Dy,{as:"p",variant:A.Dy.mesto},v.ag.get("only_visible_to_you"))),n().createElement(ze,{tracks:r.items,userId:e,hasHeaderRow:!0})):null},dt=({userId:e})=>{const{data:t,loading:a}=(0,w.J)(P.n5.getProfile,[{username:e}]),r=null==t?void 0:t.body,i=(null==r?void 0:r.is_current_user)||!1;return r&&!a&&i?n().createElement(ut,{userId:e}):n().createElement(h.h,{errorMessage:v.ag.get("error.not_found.title.page")})},ct=()=>{const{data:e,loading:t}=(0,w.J)(P.n5.getUserTopArtists),a=null==e?void 0:e.body;return t?n().createElement(h.h,{errorMessage:v.ag.get("error.not_found.title.page")}):a?n().createElement(O.P,{className:d()("contentSpacing",c.subPage),total:a.items.length,title:v.ag.get("top_artists_this_month"),tagline:v.ag.get("only_visible_to_you"),showAll:!0},a.items.map((e=>n().createElement(Le.I,{key:e.uri,entity:e})))):null},mt=({userId:e})=>{const{data:t,loading:a}=(0,w.J)(P.n5.getProfile,[{username:e}]),r=null==t?void 0:t.body,i=(null==r?void 0:r.is_current_user)||!1;return r&&!a&&i?n().createElement(ct,null):n().createElement(h.h,{errorMessage:v.ag.get("error.not_found.title.page")})},gt=n().memo((()=>{let{userId:e}=(0,i.UO)();return e=decodeURIComponent(e),n().createElement("section",null,n().createElement(i.AW,{exact:!0,path:"/user/:userId/playlists"},n().createElement(lt,{userId:e})),n().createElement(i.AW,{exact:!0,path:"/user/:userId/top/tracks"},n().createElement(dt,{userId:e})),n().createElement(i.AW,{exact:!0,path:"/user/:userId/top/artists"},n().createElement(mt,{userId:e})),n().createElement(i.AW,{exact:!0,path:"/user/:userId/recently-played-artists"},n().createElement(st,{userId:e})),n().createElement(i.AW,{exact:!0,path:"/user/:userId/following"},n().createElement(it,{userId:e})),n().createElement(i.AW,{exact:!0,path:"/user/:userId/followers"},n().createElement(ot,{userId:e})),n().createElement(i.AW,{exact:!0,path:"/user/:userId"},n().createElement(nt,{userId:e})))}));var pt=gt},61750:function(e,t,a){a.d(t,{$V:function(){return r}});const r=e=>{var t;return(null==e||null===(t=e.linked_from)||void 0===t?void 0:t.uri)||e.uri}},99002:function(e,t,a){a.d(t,{e:function(){return c}});var r=a(27378),n=a.n(r),i=a(35181),o=a(60042),l=a.n(o),s="show-followButton-button",u="iIqN__BtJ7Fh8CWMJ2kG",d="au_P98tSw_g2g0Vm__ro";const c=n().memo((({isFollowing:e,onClick:t,disabled:a=!1})=>{const r=e?i.ag.get("following"):i.ag.get("follow");return n().createElement("button",{type:"button",className:l()(s,{[u]:e,[d]:a}),onClick:t},r)}))},16189:function(e,t,a){a.d(t,{S:function(){return i}});var r=a(27378),n=a.n(r);const i=()=>n().createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n().createElement("path",{d:"M12 21.6596l-3.38079 1.8543-1.84158-3.3877-3.84662-.2679.28231-3.8456-3.09118-2.3049 2.31658-3.0825-1.3543-3.61028 3.61534-1.34071.81255-3.76935 3.76627.82672L12 0l2.7214 2.73168 3.7663-.82672.8125 3.76935 3.6154 1.34071-1.3543 3.61028 2.3166 3.0825-3.0912 2.3049.2823 3.8456-3.8466.2679-1.8416 3.3877L12 21.6596z",fill:"#2E77D0"}),n().createElement("path",{d:"M16.8637 7.41226l-6.6435 7.77824-2.80421-3.2842-.4935.5775 3.29771 3.8617 7.2135-8.44649-.57-.48675z",fill:"#fff"}))}}]);
//# sourceMappingURL=xpui-routes-profile.js.map