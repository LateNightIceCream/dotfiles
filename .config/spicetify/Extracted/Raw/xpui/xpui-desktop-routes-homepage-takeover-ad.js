"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[364],{91504:function(e,t,a){a.r(t),a.d(t,{HptoContainer:function(){return ke},VIEW_MAP:function(){return fe},default:function(){return ye}});var r=a(25773),n=a(27378),l=a.n(n),c=a(75260),s=a(60042),i=a.n(s),m="desktoproutes-homepage-takeover-ad-hptoComponent-parentContainer",o="_PBi8UdCynarVYSD7_Ya",u=a(11661),d=a(44135),g=a(28482);const h=({children:e,fetchingState:t})=>{const a=(0,c.I0)(),r=(0,n.useRef)(null);(0,n.useEffect)((()=>(r.current&&a((0,u.az)(r.current)),()=>{a((0,u.MJ)())})),[a]),(0,n.useEffect)((()=>{t===g.Y.FETCHED&&a((0,u.Fw)())}),[t,a]);const s=(0,n.useCallback)((e=>{a((0,u.lT)(e.message))}),[a]);return l().createElement(d.S,{onError:s},l().createElement("div",{className:i()(m,"contentSpacing")},l().createElement("div",{"data-testid":"test-htpo-ref",ref:r,className:o},e)))};var E="X30fTeUBGxnhVzz4ugRu",p="_oFZlXH9t49HcyePykHn",v="_3JVFJyoAfN9S1742erf",f="DCYVcPj_ZLDJ7YyCu9ND",k="_KORtUPAkUQGSpSjzKdb",y="GszqoSchrEwt1l3BEKJx",b="aZ06GpjihBXn_vIvGaWt",T="_oCxQOWDuRaMuF3BzrIA",_="W2fFv1PaGWQCdk3zO8C5",C="SqqqQfMsVzIpUzWQwQ_s",z="hFZuwl4vZbkbqWnGsO_Z",N="OICUrE9_gOCgk0ZN7x4W",V="oDGdEXjMfFo3hsG397Mc",M="MJF7tDQzeKwK1l4g0WLd",I="EEsdZL6l52EjrQEvLF_g",F="rMiWFYrRZwV2_tHJlKUT",w="WJ73_dyDXmZg_e0jcI4Z",P="XRrfYf7pC_zwLtt7oFa8",A="_TTBKWM581yUc8EH2oPw",S="hU6OylA3Evbtbhlu_QTq",L="W2_sjTbM_c6sI2d__AED",B="T_N2zdWMjyp_gZE1kWGg",W="_V0Iydu2ZpTc0BhbJnHU",Z="QSX6qZ_CpNv_5E6nb1AD",U=a(66917),H=a.n(U),O="desktoproutes-homepage-takeover-ad-floatingTagOrButton-sponsoredTag",D="_QffGoZQh6tB2Xh68lpI",J=a(35181),Q=a(44621);const G=({isPremium:e})=>{const t=(0,c.I0)();return e?l().createElement("button",{className:D,onClick:()=>t((0,Q.xG)())},J.ag.get("ad-formats.hideAnnouncements")):l().createElement("span",{className:O},J.ag.get("ad-formats.sponsored"))};var Y=a(64954),x=a(89614),K=a(88319),R=a(88886),j=a(5312),X=a(52003),q=a(7164),$=a(16023),ee=a(75933),te=a(33060),ae=a(18237),re=a(37585),ne=a(34761),le=a(50878),ce=a(78939),se=a(19421);const ie=l().memo((({uri:e})=>l().createElement(le.ZP,{value:"generic"},l().createElement(ne.v,null,l().createElement(se.q,{divider:"before"},l().createElement(ce.Jx,{uri:e,displayText:J.ag.get("context-menu.copy-generic-link")}),l().createElement(ce.W2,{uri:e}))))));var me=a(23);const oe=({playBtnUri:e,uri:t,uriType:a})=>{const r=(0,c.I0)(),[s,m]=(0,x.Z)(t),o=(0,K.o)(),{togglePlay:d,isPlaying:g}=(0,me.n)({uri:e},{featureIdentifier:"hpto"}),h=(0,n.useCallback)((()=>{d(),r((0,u.kh)("event_clicked","ne-play-button"))}),[r,d]),E=(0,n.useCallback)((async()=>{try{await m(!s)}catch{(0,u.lT)(`invalid button uri type ${t}`)}o({targetUri:t,intent:s?"unsave":"save",type:"click"})}),[s,m,t,o]),p=(0,n.useCallback)((()=>{r((0,u.kh)("event_clicked","ne-more-button"))}),[r]);let v=null;return v=H().isAlbum(t)?l().createElement(X.Y,{uri:t}):H().isArtist(t)?l().createElement(q.m,{uri:t}):H().isPlaylistV1OrV2(t)?l().createElement($.X,{uri:t}):H().isShow(t)?l().createElement(ee.M,{uri:t}):H().isTrack(t)?l().createElement(te.$,{uri:t}):H().isEpisode(t)?l().createElement(ae.k,{uri:t}):H().isLocalTrack(t)?l().createElement(re.N,{uri:t}):l().createElement(ie,{uri:t}),l().createElement("div",{className:A,"data-testid":"hpto-native-buttons"},l().createElement(Y.z,{version:"primary",onClick:h},g?J.ag.get("pause"):J.ag.get("play")),l().createElement(Y.z,{version:"outlined",className:i()({[Z]:s}),onClick:E},((e,t)=>{switch(e){case H().Type.ALBUM:case H().Type.TRACK:case H().Type.EPISODE:case H().Type.PLAYLIST:return t?J.ag.get("ad-formats.remove"):J.ag.get("ad-formats.save");default:return t?J.ag.get("unfollow"):J.ag.get("follow")}})(a,s)),l().createElement(R.y,{menu:v},l().createElement(j.z,{onClick:p,size:32,className:S})))},ue=({className:e})=>l().createElement("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",width:"150",height:"20",viewBox:"0 0 147 20"},l().createElement("g",{fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:"1"},l().createElement("path",{fill:"#FFF",d:"M70 5H71V16H70z"}),l().createElement("g",null,l().createElement("path",{fill:"#84BD00",d:"M10.001.045C4.489.045.02 4.49.02 9.975c0 5.486 4.469 9.932 9.981 9.932 5.513 0 9.981-4.446 9.981-9.931 0-5.485-4.468-9.931-9.981-9.931"}),l().createElement("path",{fill:"#000",d:"M15.544 10.6C12.463 8.717 7.956 8.186 4.33 9.28a.775.775 0 00-.519.967.78.78 0 00.972.515c3.173-.958 7.263-.483 9.945 1.158a.78.78 0 001.07-.255.772.772 0 00-.255-1.065"}),l().createElement("path",{fill:"#000",d:"M16.858 7.251c-3.704-2.187-9.565-2.393-13.09-1.328A.928.928 0 104.31 7.7c3.07-.927 8.378-.752 11.595 1.149a.936.936 0 001.28-.325.926.926 0 00-.327-1.273"}),l().createElement("path",{fill:"#000",d:"M14.372 13.518c-2.63-1.6-5.892-1.972-9.694-1.107a.618.618 0 10.277 1.206c3.474-.79 6.424-.467 8.768.958a.624.624 0 00.855-.206.617.617 0 00-.206-.851"})),l().createElement("g",{fill:"#FFF",transform:"translate(25 5)"},l().createElement("path",{d:"M3.806 4.194C2.23 3.822 1.95 3.56 1.95 3.013c0-.518.493-.867 1.226-.867.711 0 1.416.265 2.156.81a.104.104 0 00.146-.023l.77-1.073a.102.102 0 00-.02-.139C5.347 1.023 4.357.684 3.199.684 1.496.684.307 1.694.307 3.14c0 1.55 1.026 2.099 2.799 2.522 1.508.344 1.763.632 1.763 1.147 0 .57-.515.924-1.343.924-.92 0-1.672-.306-2.511-1.025a.109.109 0 00-.076-.025.103.103 0 00-.071.036L.005 7.734a.1.1 0 00.01.142 5.18 5.18 0 003.476 1.318c1.834 0 3.02-.991 3.02-2.525 0-1.297-.784-2.014-2.705-2.475"}),l().createElement("path",{d:"M10.661 2.656c-.795 0-1.447.31-1.985.944v-.714a.103.103 0 00-.103-.102H7.16a.103.103 0 00-.103.102v7.935c0 .057.046.102.103.102h1.412a.103.103 0 00.103-.102V8.316c.538.597 1.19.889 1.985.889 1.478 0 2.973-1.125 2.973-3.274 0-2.15-1.495-3.275-2.973-3.275zm1.332 3.275c0 1.094-.682 1.858-1.659 1.858-.965 0-1.693-.798-1.693-1.858s.728-1.858 1.693-1.858c.961 0 1.659.78 1.659 1.858z"}),l().createElement("path",{d:"M17.468 2.656c-1.903 0-3.393 1.449-3.393 3.298 0 1.83 1.48 3.263 3.37 3.263 1.91 0 3.405-1.444 3.405-3.286 0-1.836-1.485-3.275-3.382-3.275zm0 5.145c-1.012 0-1.775-.804-1.775-1.87 0-1.07.737-1.847 1.752-1.847 1.019 0 1.787.804 1.787 1.87 0 1.07-.742 1.847-1.764 1.847z"}),l().createElement("path",{d:"M24.913 2.784H23.36v-1.57a.103.103 0 00-.104-.103h-1.411a.103.103 0 00-.104.102v1.57h-.679a.103.103 0 00-.102.103v1.2c0 .056.046.102.102.102h.68v3.104c0 1.254.63 1.89 1.876 1.89.507 0 .927-.103 1.323-.325a.102.102 0 00.052-.089V7.626a.102.102 0 00-.049-.087.104.104 0 00-.1-.004 1.797 1.797 0 01-.83.197c-.452 0-.654-.203-.654-.659V4.188h1.553a.103.103 0 00.103-.102v-1.2a.103.103 0 00-.103-.102"}),l().createElement("path",{d:"M30.326 2.79v-.193c0-.567.22-.82.714-.82.294 0 .53.057.795.145.033.01.067.005.093-.014a.101.101 0 00.043-.083V.648a.102.102 0 00-.073-.098 3.916 3.916 0 00-1.173-.166c-1.305 0-1.994.726-1.994 2.098v.296h-.678a.103.103 0 00-.104.102v1.206c0 .056.047.102.104.102h.678v4.788c0 .056.046.102.103.102h1.412a.103.103 0 00.103-.102V4.188h1.319l2.019 4.787c-.23.502-.455.603-.762.603-.25 0-.511-.074-.779-.219a.107.107 0 00-.082-.007.104.104 0 00-.061.055l-.479 1.038a.1.1 0 00.045.132 3 3 0 001.507.381c1.043 0 1.62-.48 2.127-1.771l2.45-6.258a.1.1 0 00-.011-.095.103.103 0 00-.085-.044h-1.47a.104.104 0 00-.098.068L34.483 7.11l-1.649-4.254a.103.103 0 00-.096-.066h-2.412"}),l().createElement("path",{d:"M27.188 2.784h-1.412a.103.103 0 00-.103.102v6.09c0 .056.046.102.103.102h1.412a.103.103 0 00.103-.102v-6.09a.103.103 0 00-.103-.102"}),l().createElement("path",{d:"M26.49.011c-.56 0-1.014.448-1.014 1 0 .554.454 1.002 1.013 1.002.56 0 1.013-.448 1.013-1.001 0-.553-.454-1-1.013-1"}),l().createElement("path",{d:"M38.858 4.742a.984.984 0 01-.994-.983c0-.538.44-.987 1-.987a.984.984 0 11-.006 1.97zm.005-1.872c-.509 0-.894.4-.894.89 0 .489.382.884.889.884.509 0 .894-.4.894-.89a.876.876 0 00-.889-.884zm.22.985l.281.389h-.237l-.253-.357h-.217v.357h-.198V3.213h.465c.242 0 .401.122.401.329 0 .169-.098.272-.242.313zm-.167-.465h-.26v.326h.26c.129 0 .206-.063.206-.163 0-.107-.077-.163-.206-.163z"})),l().createElement("path",{fill:"#FFF",d:"M79.9 13.12c1.8 0 2.37-1.03 2.37-1.89 0-2.49-4-1.55-4-3.26 0-.72.67-1.23 1.56-1.23.75 0 1.43.26 1.91.84l.38-.42c-.52-.59-1.26-.94-2.26-.94-1.21 0-2.19.69-2.19 1.78 0 2.33 4 1.31 4 3.27 0 .57-.39 1.33-1.76 1.33-.95 0-1.65-.47-2.08-.97l-.37.43c.51.62 1.34 1.06 2.44 1.06zm6.61-.12v-2.77h1.93c1.27 0 2.01-.9 2.01-1.95 0-1.05-.73-1.95-2.01-1.95h-2.5V13h.57zm1.87-3.29h-1.87V6.85h1.87c.88 0 1.47.59 1.47 1.43s-.59 1.43-1.47 1.43zm8.56 3.41c1.95 0 3.24-1.5 3.24-3.45 0-1.95-1.29-3.45-3.24-3.45-1.96 0-3.24 1.5-3.24 3.45 0 1.95 1.28 3.45 3.24 3.45zm0-.52c-1.62 0-2.64-1.25-2.64-2.93 0-1.7 1.02-2.93 2.64-2.93 1.6 0 2.64 1.23 2.64 2.93 0 1.68-1.04 2.93-2.64 2.93zm8.94.4V6.85h2.18v-.52h-4.94v.52h2.18V13h.58zm9.46 0v-.52h-3.23V6.33h-.57V13h3.8zm4.11 0V6.33h-.57V13h.57zm7.09.13c1.05 0 1.94-.45 2.53-1.11V9.69h-3.09v.51h2.52v1.6c-.37.37-1.07.81-1.96.81-1.57 0-2.78-1.22-2.78-2.94 0-1.74 1.21-2.93 2.78-2.93.85 0 1.61.37 2.08.93l.43-.31c-.61-.7-1.41-1.14-2.51-1.14-1.87 0-3.38 1.39-3.38 3.45 0 2.06 1.51 3.46 3.38 3.46zM138.2 13V6.33h-.58v2.98h-4.23V6.33h-.57V13h.57V9.83h4.23V13h.58zm6.23 0V6.85h2.18v-.52h-4.94v.52h2.18V13h.58z"}))),de=(e,t)=>"spotlight"===e?l().createElement(ue,{className:M}):"exclusive"===e?l().createElement("p",{dir:"auto",className:i()(M,I)},J.ag.get("ad-formats.exclusive")):l().createElement("p",{dir:"auto",className:M},(e=>{switch(e){case H().Type.ALBUM:return J.ag.get("card.tag.album");case H().Type.TRACK:return J.ag.get("card.tag.track");case H().Type.ARTIST:return J.ag.get("card.tag.artist");case H().Type.EPISODE:return J.ag.get("card.tag.episode");case H().Type.SHOW:return J.ag.get("card.tag.show");case H().Type.PLAYLIST:case H().Type.PLAYLIST_V2:return J.ag.get("card.tag.playlist");default:return""}})(t));var ge="_Q8g_EthDejjj17nz5mc",he="LSJGlmyc1bmWDe5FVlQc";var Ee="desktoproutes-homepage-takeover-ad-hptoHtml-slot",pe="YOdXJ1s6_xBh4Tftyu2f";var ve=a(67455);const fe={[g.O.NATIVE]:({name:e,uri:t,playBtnUri:a,description:r,smallImage:n,isSponsored:s,backgroundImage:m,sponsoredLogo:o,uriType:d,logoBlurb:g,isPremium:h,artists:M,badgeType:I})=>{const A=(0,c.I0)(),S=M.length>0,Z=!h&&s;return l().createElement(l().Fragment,null,l().createElement("div",{className:i()(s?p:E,{[k]:s})},s&&l().createElement("div",{className:y},l().createElement("div",null,l().createElement("p",{className:V},J.ag.get("ad-formats.presentedBy")),l().createElement("img",{draggable:!1,className:z,src:o,alt:""}),l().createElement("p",{className:N},g))),l().createElement("div",{className:s?f:v},l().createElement("a",{"data-testid":"ne-image-link-test",onClick:()=>{A((0,u.kh)("event_clicked","ne-image-link"))},className:_,href:t},l().createElement("img",{className:i()(T,{[C]:s}),alt:"",src:n}))),l().createElement("div",{className:b},de(I,d),l().createElement("a",{"data-testid":"ne-name-link-test",onClick:()=>{A((0,u.kh)("event_clicked","ne-name-link"))},href:t,dir:"auto",className:s?w:F},e),S&&l().createElement("div",null,M.map(((e,a)=>l().createElement("span",{key:`${t}-${a}`},a?J.ag.getSeparator():"",l().createElement("a",{"data-testid":`ne-attrib-link-${a}-test`,onClick:()=>{A((0,u.kh)("event_clicked","ne-attrib-link"))},draggable:!1,href:e.uri},e.name))))),l().createElement("span",{dir:"auto",className:P},r),l().createElement(oe,{playBtnUri:a,uri:t,uriType:d}))),l().createElement("div",{draggable:!1,className:i()(s?B:L,{[W]:!s}),style:{backgroundImage:`url(${m})`}}),!Z&&l().createElement(G,{isPremium:h}))},[g.O.IMAGE]:({isPremium:e,backgroundColor:t,backgroundImage:a,clickThroughUrl:r})=>{(0,n.useEffect)((()=>{if(!a)throw Error("[Image HPTO] Missing background image")}),[a]);const s=(0,c.I0)();return l().createElement(l().Fragment,null,l().createElement("a",{draggable:!1,onClick:()=>{s((0,u.kh)("event_clicked"))},className:ge,style:{backgroundColor:t},href:r},l().createElement("img",{draggable:!1,className:he,alt:"",src:a})),l().createElement(G,{isPremium:e}))},[g.O.HTML]:({isPremium:e,backgroundColor:t,backgroundImage:a,backgroundUrl:r,loaderFrame:s})=>{const i=(0,n.useRef)(null),[m,o]=(0,n.useState)(!1),d=(0,c.I0)();return(0,n.useEffect)((()=>{const e=()=>{var e;o(!0),null===(e=s.contentWindow)||void 0===e||e.postMessage({name:"fireHptoViewEvent"},"*")};return i&&i.current&&(s.style.display="",s.className=pe,s.setAttribute("aria-hidden","true"),s.addEventListener("load",e),i.current.innerHTML="",i.current.insertBefore(s,i.current.firstChild)),()=>{s.removeEventListener("load",e)}}),[i,s]),l().createElement(l().Fragment,null,l().createElement("a",{draggable:!1,href:r,ref:i,className:Ee,onClick:()=>{r&&d((0,u.kh)("event_clicked"))},style:{backgroundColor:t,opacity:m?1:0,backgroundImage:m?`url(${a})`:"none"}}),l().createElement(G,{isPremium:e}))}},ke=()=>{const e=(0,c.I0)(),t=(0,c.v9)(ve.LA),a=(0,c.v9)(ve.sp),s=(0,c.v9)(ve.Jk),i=(0,c.v9)(ve.F7);if((0,n.useEffect)((()=>{e((0,u.fm)())}),[e]),!i||null===t)return null;const m=fe[t.bannerMode];return l().createElement(h,{fetchingState:a},l().createElement(m,(0,r.Z)({},t,{isPremium:s})))};var ye=ke}}]);
//# sourceMappingURL=xpui-desktop-routes-homepage-takeover-ad.js.map