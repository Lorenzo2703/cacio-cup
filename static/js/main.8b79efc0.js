(()=>{"use strict";var e={1281:(e,t,n)=>{n.r(t);var o=n(9766),i=n(9293),a=n(885),r=n(4942),s=n(5774),l=n(8077),d=n(2610),c=n(4431),u=n(5861),g=n(3936),f=n(115),h=n(8344),m=n(3173),A=n(7901),p=n(4279),b=n(4574),y=n(9403),w=n(2813);const j=n.p+"static/media/trophy.82be584979a55474b6b4.png",v=n.p+"static/media/star.009744590c070d1f0a0d.png",x=n.p+"static/media/starb.190d870d386afd29523a.png",O=n.p+"static/media/starc.0fd28a6ea8f1655111f3.png",C=n.p+"static/media/n01.482357d25050b9f1be1e.png",S=n.p+"static/media/n02.09789d3d24bdebd8c387.png",B=n.p+"static/media/n03.0a0c16221af37e93d389.png",R=n.p+"static/media/n04.ce9db21804b5106f9cc5.png",I=n.p+"static/media/n05.647c284a7c12b05fb8bc.png",z=n.p+"static/media/andrea.0221cd114729be7580b5.png",k=n.p+"static/media/agace.fc07de57cab8148cab66.png",P=n.p+"static/media/emanuele.12add1c22f5a08be629e.png",E=n.p+"static/media/goglia.ce6a3db43a76d91a8eb7.png",T=n.p+"static/media/matteo.32bee631764ae183ec95.png",D=n.p+"static/media/seraf.e9ec1266bc1be6d4e531.png",M=n.p+"static/media/LorenzoGiare.5c15e54ff68a3307da19.png",U=n.p+"static/media/Giacomo.83942f6a4c8d898f712f.png",F={badge:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH0SURBVHgB7ZZPTsJAFMa/mSYao4l/Fq40qa6MJkZuoDdALiDsWeAF1HgB2LkEL4BduIcbgLqXsjeBjRoX7fgelgjttHYQQ0j8kgaYDu/H63vvG4B/zYOyLWXTtYYJJDGBGJZ7VFUp0aGrl3tSlzCUgKE4S0viTgFHoUiO76HgZEQ/TRzxA2QNFrLSgz1YsLAKhTy9i3u8LnzcDj/4FtrOoXCMwbkH1aEXG7+RQK1+KArR5RhRtsdUvwamIN/HergEEzWXqeQilSi8hhkpCWxjSvI/sIM0YB4Zqq/xbBa3gZs9YNkaXxcS5bDRaME8pzDMmKEn68CbB7x6ITDNvLRQTgSTI5Uj5hBocwGJUPcduHjW7+H5z7VUKRYcGEREBytfj7G4lQwNZzsWWuIsFizYfTTiwHydbHzDTaAD+ejGgj0f7DIRv+WgHHwI5+yNoLSVSlgaSTAq6sA8dXVVd4879nqXOm/JCMrulSH3aieCWactVRMjNQnDOdtGLx2UHvF5PSMqo0uxBkI3nLh7DLt/SQkdcNHUxNfL09R5UpFX9yJrmJGSwG1MR259X3RTg/n8pE48VWrwA1zEzLdG/eF++m6TY+g2Gf/nItu7gv4A6QfdW0MKGYNZNOfZYM6HJ47LmY3O6Z+AA7gtAiciR6oQ1MU86BPav7zxMT2P3wAAAABJRU5ErkJggg==",eth:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALASURBVHgB7ZhPchJBFMa/nkncCcnGxCqFzs6ygMITSJaujCeQnCDkBIYb4AkgJwBXLsETBAu0skuLLpKsRldaKaZ9PWaoBAZn+o9WSvNbAMMMzDfd/b73XgO3/OP4cAV/xJG/30Zu4we+nR/DEQwuUOLkal99io6nchtfxgM4wIML5GobsTiFz7qRaAfYC+SVV/Ram/t2LRpRXl2DJXYCeWUPUh4sOws57cIS8yDhj6uQrJd2FfKbwNezdzDETGAUFCtvoaYyDUbTv74pEJy9hwH6Ucw5ra+7R7gaFOkEYNNtiI9DaKK/BsOcCgq+eEIOEGIXEocJv6KH8o0iW28EVcReD4qABPXgyUOIK77Hq5zMsEbn5h6GDcE8GslhgIxkF/iwvEPj3Z0JY/I1sNJKvRkv168JlWhhMtqHc4GFUouufkojQFPodXRG4ZfQUg0hq0f/8Wm0hb+OCp5CpeEqg8TY52IlLMzt0ZQ3ENuORAfeRRPiWMASc4FJwuZxINTMB9OELTKgCqdpUuHoCyyWyKRZFSaw6RNds9Y3asaa9Cqgh7Il+t0dAU0s1uCcv2GpsGx+uQQHUZwo1FpYjJuSXxEJlRQ8eONCWIxOqqtH7/7FwNg2HlA28dhznVSXPUh8yenqNpXyJyiU25kzRpxhiuUT6lX6NCQ70EBviotl1bnVZsfKiEOqZJL8LdkvaW36ZDVDgT8iUDVBcppUrAqqBZv4POpcTuNL+uf64t3CfYgPLWhgkEmq/FKkXscmyQcn4wNoYhbFnGpDCZ2OrUcl1gsYYNY0BbS1sX6PHo7VMlwtaN09Q3D6HQaYt53B+QD5jS2ag9/lZSVOlfinMMSucff8RtRnLIPJXZ2ITbwFbFDZgnlqbYmFcyoohP0GkqPdLbXL4B/NjiXl4cm4gRsFj7KFpHqxjxuLg92sW/47fgLGl/bkQKsjUQAAAABJRU5ErkJggg==",heart:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKlSURBVHgB7ZlLctpAEIa7RyZrH0HLVCo4+ASBSkhll3AChxPEPoHNCUxOAL4B3qWCUygniIhTqSx1BNYG1GkNqOKSRtLogRm79C1AjOb1T/e8GoCampqafYJ5MtPLt20Q0AISr/nX4b1qXCD/Gn/fONr1oPjAj/b/enAB6M9hhRP8M3VBEy0BmwbxnHO3M7J6QDDA2+lYWc9R9zN/XnCzhxn18IAg1/NtkpEvWwAdvbvkz1PIhwt3yx7+dTxZx/O2DY3GSGMAIo3jkEWcpWVJFcAj9pO/WlAMj0V05NOzxgykuxTCBbHsoOssVC9FUqnNyBfufIAtO16u8yD7sG5cJr1UWoCa3U/8ZgQmQdhTzQm1BRDOwTSQlFaICaDmm49QzuS7wparYQSFBeT6bCYWnkST4gKw1MTdLRRfhlVzwFwBCtcW8Mh5kgI8MBcvmqASoNyyjYDIiyapBMzBVBBjfYsLIHDAVAhi94S4AGuZeQbfG5blRJNiAuSx1UgroIvuVy+amnCYo2swDaIvqmS1ALEacwmDViP0VO4ToBSwvf0oFe8H/0rlPgHJO7FYDc2wAo++OBgnvU0UsLXCAPYN0SBp9AOyoxLN7ix3NKEqEMY4n/bTsmQf5qxlT5rxweE20cr0AL3A1otuCw5ophGQqooFCOs4zXVCtI7TMtRH1IeHgrCv0/kA7fsA3n6f8A69exG07uuEFENyBXdl/UHUAnG0A3dagE893QBxSG4BAdR6b4Pv85wgGyohWOtFR9dt7lPoSikb4gb58QrKgjQBcXdcpPOyOJRkE4bk0Ht+a/BGyZvUr5shlKC0gICNS60v+PFEqwBvUIDLs6SIcx4qERCSKYTIkX+A5JyoaVQqIGQr5JQ7/Grbyo/gQFbUz2tqamrM5R+Bh+NQqQhTqgAAAABJRU5ErkJggg==",left:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFxSURBVHgB7dkxTsNAEIXht3boSYNAAsklBaDcgNBRchOOQHIDrkHHDUKZMgU9Lgk0TkdjFr8oshFKtbM7U7Cf5Mhx9X4pimwZyLIs+39OL6bbI4IC2qqrB5RusT3OLu8gpBvA8d7P+u8lDiGkF/B3PPyqK3iGkIOGfePd6Ab1qoFQ+oCE4yltQOLxlC5AYTylCVAaT/EDFMdT3ADl8RQvwGA8xQkwGk/yAMPxJAswHk/hAdV5BX/wNlzQH0+Cm7ny961wbTGewgN8cd2fO8wtxpMgAJv+vG1hJTyg8PVwPrpHNRE/nATNQLDRY/ex+9n4Cfz3wiIiPIC/eefmwwWbiBISzXqJ8VH3V+ymuyvH3XGL8ckTmvcvKJAFUPPxYhkhDyDDiDgBZBQRL4AMIuIGkHJE/ABSjEgTQEoR6QJIISJtACWOSB9ACSN0AmhfhG/X2HwuIaD7fqB+ncH54QawKEweguSq7vVSFecVU5Zlma0fOKHkc33LBmcAAAAASUVORK5CYII=",search:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJcSURBVHgB1ViBdZswED1ngTICI2SD0gmaDeJOUG9gNmg6gd0Jkk6AM4GdCSATxBtcTuFIjrMACQnl5b93D4Gkr68Tkk4C+AJYQQQgYkaP7J10tWogImaJJFE5PW7JCrJrEAIFGrIT2X+yQ2zhY+IKsgrnYcedW0xcPiHuhawWllYsEf5mEVpURbYeapC+X3N+ZRFam3yIASLaWsSV2E4UHx4zEnuL2FsIgUXgMXSY2LN1FKEWgXtf741w50roi/fQM0lPIESGRWjt5QRdGRYCC5UTsnStuFZezGFBEP+NGvZpb/Lk8OtZILC/RJVThfOUXhTtFtKbU4U3ovAOEgL7/2ah869E+qdIP0Ja/BPpQmdKkXKtOkFanAZ0fMDMKvkzQmJgu893OOr8zpNy6jeQHmeRvliGruALoBM52pMEkG2edeabSArtzyIzw0jBhAemRTIakY4TkLqjEOknnSlFyrXxBtLiu0gfBkt5bU8R4b0dq+1pDQmA7cGsw4NLhVJUqJeeQBYvFi6VMuXNP7AgsB9gVz4VN6p3G1gAxgFe/6KF4F4RhB09L/m3ir8EX/CwHxXRFgLBvDvFewdzgZcnOuT3HGYA2/OM5tt3bcFc4PAdkPlmDm3ZRH3juc0Axx2X2U45wOnqj/+ZoeE+QLulPvP7N2j34oIst5Q3e/MvihcemPsePnY4w/Nj9jUhDt/nuMJ6j4RtwCuXvRpDD4Es1gzh0VFcxeWzEc5RoUHX0dywiZhy6A9tA+25peEw0IXL8JgFvevMX6q7yBodBOXR1JGYO7BdET7jdBCGV9C9x6bWYygmAAAAAElFTkSuQmCC",trophy:j,star:v,starb:x,starc:O,n01:C,n02:S,n03:B,n04:R,n05:I,ludovica:n.p+"static/media/Ludovica.96ed14845c725f54c043.png",irene:n.p+"static/media/Irene.068405022ed0e74eb8c2.png",andrea:z,agace:k,emanuele:P,goglia:E,matteo:T,seraf:D,lorenzogiare:M,giacomo:U};var L="#001F2D",Q="#9Edddd",N="#FFF",G="#74858C",V=10,J=12,Y=14,H=16,X=18,q=24,W="InterBold",Z="InterSemiBold",K="InterRegular",_={light:{shadowColor:G,shadowOffset:{width:0,height:1},shadowOpacity:.22,shadowRadius:2.22,elevation:3},medium:{shadowColor:G,shadowOffset:{width:0,height:3},shadowOpacity:.29,shadowRadius:4.65,elevation:7},dark:{shadowColor:G,shadowOffset:{width:0,height:7},shadowOpacity:.41,shadowRadius:9.11,elevation:14}},$=[{id:"01",nome:"Giulia",cognome:"Marinucci",images:F.n01,commenti:[{id:"1",voto:"1.0",motivazione:""}],punti:0},{id:"02",nome:"Chiara",cognome:"Ruggeri",images:F.n02,commenti:[{id:"1",voto:"0.0",motivazione:""}],punti:0},{id:"03",nome:"Lucrezia",cognome:"Bernazzani",images:F.n03,commenti:[{id:"1",voto:"0.0",motivazione:""}],punti:0},{id:"04",nome:"Fabiana",cognome:"Luciani",images:F.n04,commenti:[{id:"1",voto:"0.0",motivazione:""}],punti:0},{id:"05",nome:"Sara",cognome:"Di Stefano",images:F.n05,commenti:[{id:"1",voto:"0.0",motivazione:""}],punti:0},{id:"06",nome:"Ludovica",cognome:"Rossi",images:F.ludovica,commenti:[{id:"1",voto:"0.0",motivazione:""}],punti:0},{id:"07",nome:"Irene",cognome:"Moretti",images:F.irene,commenti:[{id:"1",voto:"0.0",motivazione:""}],punti:0},{id:"08",nome:"Andrea",cognome:"Cotini",images:F.andrea,commenti:[{id:"1",voto:"0.0",motivazione:""}],punti:0},{id:"09",nome:"Lollino",cognome:"Goglia",images:F.goglia,commenti:[{id:"1",voto:"0.0",motivazione:""}],punti:0},{id:"10",nome:"Matteo",cognome:"Di Mango",images:F.matteo,commenti:[{id:"1",voto:"0.0",motivazione:""}],punti:0},{id:"11",nome:"Alessandro",cognome:"Serafini",images:F.seraf,commenti:[{id:"1",voto:"0.0",motivazione:""}],punti:0},{id:"12",nome:"Lorenzo",cognome:"Giare",images:F.lorenzogiare,commenti:[{id:"1",voto:"0.0",motivazione:""}],punti:0},{id:"13",nome:"Ale",cognome:"Agace",images:F.agace,commenti:[{id:"1",voto:"0.0",motivazione:""}],punti:0},{id:"14",nome:"Giacomo",cognome:"Macchi",images:F.giacomo,commenti:[{id:"1",voto:"0.0",motivazione:""}],punti:0},{id:"15",nome:"Emanuele",cognome:"Carosi",images:F.emanuele,commenti:[{id:"1",voto:"0.0",motivazione:""}],punti:0}],ee=n(5770);const te=function(e){var t=e.onSearch,n=e.data,o=(0,y.useNavigation)();return(0,ee.jsxs)(g.default,{style:{backgroundColor:L,padding:Y},children:[(0,ee.jsxs)(g.default,{style:{flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[(0,ee.jsx)(A.default,{style:{fontSize:q,color:N},children:"Cacio cup V2"}),(0,ee.jsx)(w.TouchableHighlight,{onPress:function(){return o.navigate("Rank",{data:n})},underlayColor:"primary",children:(0,ee.jsx)(g.default,{style:{width:45,height:45},children:(0,ee.jsx)(p.default,{source:F.trophy,resizeMode:"contain",style:{width:"100%",height:"100%"}})})})]}),(0,ee.jsxs)(g.default,{style:{marginVertical:Y},children:[(0,ee.jsx)(A.default,{style:{fontFamily:K,fontSize:J,color:N},children:"Ma che ne sanno quelli della boiler summer cup \ud83d\udc4b"}),(0,ee.jsx)(A.default,{style:{fontFamily:W,fontSize:H,color:N,marginTop:V},children:"Ecco i migliori peggiori \ud83d\ude18"})]}),(0,ee.jsx)(g.default,{style:{marginTop:Y},children:(0,ee.jsxs)(g.default,{style:{width:"100%",borderRadius:Y,backgroundColor:G,flexDirection:"row",alignItems:"center",paddingHorizontal:Y,paddingVertical:J-2},children:[(0,ee.jsx)(p.default,{source:F.search,resizeMode:"contain",style:{width:20,height:20,marginRight:V}}),(0,ee.jsx)(b.default,{placeholder:"Search...",style:{flex:1,color:N,padding:V},onChangeText:t})]})})]})};var ne=n(7775),oe=n(2388),ie=n(5230),ae=n(6771);var re=function(e){var t=e.title,n=(e.subTitle,e.titleSize);e.subTitleSize;return(0,ee.jsx)(g.default,{children:(0,ee.jsx)(A.default,{style:{fontFamily:Z,fontSize:n,color:L},children:t})})},se=function(e){var t=e.price;return(0,ee.jsxs)(g.default,{style:{flexDirection:"row",alignItems:"center"},children:[(0,ee.jsx)(p.default,{source:F.star,resizeMode:"contain",style:{width:20,height:20,marginRight:5}}),(0,ee.jsx)(A.default,{style:{fontFamily:Z,fontSize:Y,color:L},children:t})]})},le=n(4615),de=n(4703);function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ge=ne.default.create({centeredView:{flex:1,justifyContent:"center",alignItems:"center",marginTop:22},input:{height:170,width:"90%",margin:0,marginBottom:10,borderWidth:.1,padding:6,borderRadius:10},input1:{height:30,width:"90%",margin:0,borderRadius:10,marginBottom:10,borderWidth:.1,padding:6},modalView:{margin:10,width:"85%",backgroundColor:"white",borderRadius:20,padding:30,alignItems:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:4,elevation:5},modalCustomView:{margin:5,backgroundColor:"white",borderRadius:10,padding:5,alignItems:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:4,elevation:5},button:{borderRadius:20,padding:10,elevation:2},buttonOpen:{backgroundColor:L},buttonClose:{backgroundColor:L},buttonCloseCustom:{backgroundColor:G,padding:8},buttonCloseCustom1:{padding:8,marginLeft:10,backgroundColor:L},textStyle:{color:"white",padding:6,paddingLeft:20,paddingRight:20,fontWeight:"bold",textAlign:"center"},modalText:{marginBottom:15,padding:10,fontSize:18,fontWeight:"bold",textAlign:"center"},modalText1:{marginBottom:5,padding:5,fontSize:18,fontWeight:"bold",textAlign:"center"}});const fe=function(e){var t,n,i=e.data,r=(0,y.useNavigation)(),s=(0,o.useState)(!1),l=(0,a.default)(s,2),d=l[0],c=l[1],u=(0,o.useState)(0),f=(0,a.default)(u,2),h=f[0],m=f[1],j=(0,o.useState)(""),v=(0,a.default)(j,2),x=v[0],O=v[1],C=(0,o.useState)(""),S=(0,a.default)(C,2),B=S[0],R=S[1];return(0,o.useEffect)((function(){de.getIpAddressAsync().then((function(e){console.log(e),n=e}))}),[]),(0,ee.jsxs)(g.default,{style:ue({backgroundColor:N,borderRadius:Y,marginBottom:q,margin:V},_.dark),children:[(0,ee.jsx)(oe.default,{animationType:"slide",transparent:!0,visible:d,onRequestClose:function(){c(!d)},children:(0,ee.jsx)(g.default,{style:ge.centeredView,children:(0,ee.jsxs)(g.default,{style:ge.modalView,children:[(0,ee.jsx)(A.default,{style:ge.modalText,children:"Racconta il misfatto \ud83d\ude12"}),(0,ee.jsx)(b.default,{style:ge.input,editable:!0,maxLength:200,multiline:!0,numberOfLines:4,onChangeText:O,value:x}),(0,ee.jsx)(A.default,{style:ge.modalText1,children:"Firmati "}),(0,ee.jsx)(b.default,{style:ge.input1,editable:!0,maxLength:200,numberOfLines:1,onChangeText:R,value:B}),(0,ee.jsx)(A.default,{style:ge.modalText,children:"Aggiungi un voto \ud83d\ude01"}),(0,ee.jsxs)(g.default,{style:{flexDirection:"row",marginBottom:30,justifyContent:"space-between"},children:[(0,ee.jsx)(ie.default,{onPress:function(){return m(1)},children:(0,ee.jsx)(g.default,{style:ge.modalCustomView,children:0==h?(0,ee.jsx)(p.default,{source:F.starb,resizeMode:"cover",style:{width:20,height:20}}):(0,ee.jsx)(p.default,{source:F.starc,resizeMode:"cover",style:{width:20,height:20}})})}),(0,ee.jsx)(ie.default,{onPress:function(){return m(2)},children:(0,ee.jsx)(g.default,{style:ge.modalCustomView,children:h<2?(0,ee.jsx)(p.default,{source:F.starb,resizeMode:"cover",style:{width:20,height:20}}):(0,ee.jsx)(p.default,{source:F.starc,resizeMode:"cover",style:{width:20,height:20}})})}),(0,ee.jsx)(ie.default,{onPress:function(){return m(3)},children:(0,ee.jsx)(g.default,{style:ge.modalCustomView,children:h<3?(0,ee.jsx)(p.default,{source:F.starb,resizeMode:"cover",style:{width:20,height:20}}):(0,ee.jsx)(p.default,{source:F.starc,resizeMode:"cover",style:{width:20,height:20}})})}),(0,ee.jsx)(ie.default,{onPress:function(){return m(4)},children:(0,ee.jsx)(g.default,{style:ge.modalCustomView,children:h<4?(0,ee.jsx)(p.default,{source:F.starb,resizeMode:"cover",style:{width:20,height:20}}):(0,ee.jsx)(p.default,{source:F.starc,resizeMode:"cover",style:{width:20,height:20}})})}),(0,ee.jsx)(ie.default,{onPress:function(){return m(5)},children:(0,ee.jsx)(g.default,{style:ge.modalCustomView,children:h<5?(0,ee.jsx)(p.default,{source:F.starb,resizeMode:"cover",style:{width:20,height:20}}):(0,ee.jsx)(p.default,{source:F.starc,resizeMode:"cover",style:{width:20,height:20}})})})]}),(0,ee.jsxs)(g.default,{style:{flexDirection:"row",marginBottom:10},children:[(0,ee.jsx)(ie.default,{style:[ge.button,ge.buttonCloseCustom],onPress:function(){m(0),O(""),R(""),c(!d)},children:(0,ee.jsx)(A.default,{style:ge.textStyle,children:"Annulla"})}),(0,ee.jsx)(ie.default,{style:[ge.button,ge.buttonCloseCustom1],onPress:function(){var e,t;e=i.nome,t={commenti:{id:(0,ae.default)(),voto:h,motivazione:x,autore:B,data:(new Date).toLocaleDateString(),ip:n,imei:(null==le?void 0:le.deviceName)+"-"+(null==le?void 0:le.brand)+"-"+(null==le?void 0:le.modelName)}},fetch("https://eu-central-1.aws.data.mongodb-api.com/app/application-0-zzwcv/endpoint/api/insert?secret=test&arg1="+e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){e.json().then((function(e){return console.log(e)}))})),m(0),O(""),R(""),c(!d)},children:(0,ee.jsx)(A.default,{style:ge.textStyle,children:"Conferma"})})]})]})})}),(0,ee.jsx)(w.TouchableHighlight,{onPress:function(){r.navigate("Details",{data:i})},underlayColor:"white",children:(0,ee.jsx)(g.default,{style:{width:"100%",height:360},children:(0,ee.jsx)(p.default,{source:i.images,resizeMode:"cover",style:{width:"100%",height:"100%",background:"linear-gradient(#9Edddd, #04b0b0)",borderTopLeftRadius:Y,borderTopRightRadius:Y}})})}),(0,ee.jsxs)(g.default,{style:{width:"100%",padding:Y},children:[(0,ee.jsx)(re,{title:i.nome+" "+i.cognome,titleSize:X,subTitleSize:J}),(0,ee.jsxs)(g.default,{style:{marginTop:Y,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[null!=(t=i.commenti[0])&&t.voto?(0,ee.jsx)(se,{price:function(e){if(e.length){for(var t=0,n=0;n<e.length;n++)t+=e[n].voto;return parseFloat(t/e.length).toFixed(1)}return 0}(i.commenti)}):(0,ee.jsx)(se,{price:0}),(0,ee.jsx)(ie.default,{style:[ge.button,ge.buttonOpen],onPress:function(){return c(!0)},children:(0,ee.jsx)(A.default,{style:ge.textStyle,children:"Vota"})})]})]})]})};var he=n(5987),me=n(5012),Ae=["imgUrl","handlePress"];function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function be(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ye=function(e){var t=e.imgUrl,n=e.handlePress,o=(0,he.default)(e,Ae);return(0,ee.jsx)(me.default,{style:be(be({width:40,height:40,backgroundColor:N,position:"absolute",borderRadius:q,alignItems:"center",justifyContent:"center"},_.light),o),onPress:n,children:(0,ee.jsx)(p.default,{source:t,resizeMode:"contain",style:{width:24,height:24}})})};var we=n(4547);function je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}const ve=function(e){return(0,y.useIsFocused)()?(0,ee.jsx)(we.default,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?je(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):je(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({animated:!0},e)):null};const xe=function(){function e(){return(e=(0,u.default)((function*(e){try{var t=JSON.stringify(e);yield m.default.setItem("nftData",t)}catch(n){}}))).apply(this,arguments)}var t=(0,o.useState)(!1),n=(0,a.default)(t,2),i=n[0],r=n[1];function s(){return l.apply(this,arguments)}function l(){return(l=(0,u.default)((function*(){try{var e=yield m.default.getItem("nftData");return null!=e?JSON.parse(e):null}catch(t){}}))).apply(this,arguments)}var d=function(){var e=(0,u.default)((function*(){r(!0),setTimeout((function(){r(!1)}),2e3)}));return function(){return e.apply(this,arguments)}}(),c=(0,o.useState)($),A=(0,a.default)(c,2),p=A[0],b=A[1];(0,o.useEffect)((function(){s().then((function(e){b(e)})).catch((function(e){console.log(e)})),fetch("https://eu-central-1.aws.data.mongodb-api.com/app/application-0-zzwcv/endpoint/api?secret=test",{method:"GET",headers:{"Content-Type":"application/json"}}).catch((function(e){s().then((function(e){b(e)}))})).then((function(t){t.json().then((function(t){t.forEach((function(e,t){$[t].commenti=e.commenti})),b($),function(t){e.apply(this,arguments)}($)}))})).catch((function(e){s().then((function(e){b(e)}))}))}),[i]);return(0,ee.jsxs)(f.default,{style:{flex:1},children:[(0,ee.jsx)(ve,{backgroundColor:L}),(0,ee.jsxs)(g.default,{style:{flex:1},children:[(0,ee.jsx)(g.default,{style:{zIndex:0},children:(0,ee.jsx)(h.default,{data:p,renderItem:function(e){var t=e.item;return(0,ee.jsx)(fe,{data:t})},keyExtractor:function(e){return e.id},onRefresh:d,progressViewOffset:100,extraData:p,alwaysBounceVertical:!0,alwaysBounceHorizontal:!1,refreshing:i,showsVerticalScrollIndicator:!1,ListHeaderComponent:(0,ee.jsx)(te,{onSearch:function(e){0===e.length&&b($);var t=$.filter((function(t){return t.nome.toLowerCase().includes(e.toLowerCase())||t.cognome.toLowerCase().includes(e.toLowerCase())}));0===t.length?b($):b(t)},data:p})})}),(0,ee.jsxs)(g.default,{style:{position:"absolute",top:0,bottom:0,right:0,left:0,zIndex:-1},children:[(0,ee.jsx)(g.default,{style:{height:350,backgroundColor:L}}),(0,ee.jsx)(g.default,{style:{flex:1,backgroundColor:N}})]})]})]})};var Oe=n(9492),Ce=n(782);const Se=function(e){var t,n,o,i,a=e.route,r=e.navigation,s=(null==a?void 0:a.params).data,l={data:[]};return null==s||null==(t=s.commenti)||t.forEach((function(e){var t;null==l||null==(t=l.data)||t.push(null==e?void 0:e.voto)})),(0,ee.jsxs)(f.default,{style:{flex:1},children:[(0,ee.jsxs)(g.default,{style:{width:"100%",height:370},children:[(0,ee.jsx)(p.default,{source:s.images,resizeMode:"cover",style:{width:"100%",height:"100%",backgroundColor:Q}}),(0,ee.jsx)(ye,{imgUrl:F.left,handlePress:function(){return r.goBack()},left:25,top:35})]}),(0,ee.jsx)(ve,{barStyle:"dark-content",backgroundColor:"transparent",translucent:!0}),(0,ee.jsx)(g.default,{children:(null==l||null==(n=l.data)?void 0:n.length)>1&&(0,ee.jsx)(Ce.LineChart,{data:{labels:[],datasets:[l||[1]]},width:Oe.default.get("window").width-10,height:200,yAxisLabel:"",yAxisSuffix:"",yAxisInterval:1,chartConfig:{backgroundColor:"#e26a00",backgroundGradientFrom:"#ff0f7b",backgroundGradientTo:"#f89b29",decimalPlaces:2,color:function(){return"rgba(255, 255, 255, "+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)+")"},labelColor:function(){return"rgba(255, 255, 255, "+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)+")"},style:{borderRadius:16},propsForDots:{r:"6",strokeWidth:"2",stroke:"#ff5e5a"}},bezier:!0,style:{marginVertical:8,marginHorizontal:5,borderRadius:10}})}),(null==s||null==(o=s.commenti)?void 0:o.length)>0&&(0,ee.jsx)(h.default,{data:s.commenti,renderItem:function(e){var t=e.item;return(0,ee.jsx)(A.default,{style:{padding:8,width:"95%",backgroundColor:"white",borderRadius:10,marginHorizontal:10,marginVertical:5,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:4,elevation:2,textAlign:"center"},children:"Voto perch\xe8: "+t.motivazione+"\n\n con voto: "+t.voto+"\n\n Autore: "+(null==t.autore||void 0===t.autore?"Anonimo":t.autore)})},showsVerticalScrollIndicator:!1,keyExtractor:function(e){return e.id},contentContainerStyle:{paddingBottom:3*q}}),0===(null==s||null==(i=s.commenti)?void 0:i.length)&&(0,ee.jsx)(A.default,{style:{padding:8,width:"95%",backgroundColor:"white",borderRadius:10,marginHorizontal:10,marginVertical:5,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:4,elevation:2,textAlign:"center",fontSize:26},children:"Nessun commento... \n\n Io direi di aggiungere qualcosa! \ud83d\ude08"})]})};var Be=n(2982);const Re=function(e){var t=e.navigation,n=e.route,o=n.params.data.slice(0,7),i=n.params.data.slice(7);Object.keys(o).forEach((function(e){var t=0;o[e].commenti.forEach((function(e){t+=e.voto})),o[e].punti=t}));var r=Object.entries(o).sort((function(e,t){return t[1].punti-e[1].punti}));Object.keys(i).forEach((function(e){var t=0;i[e].commenti.forEach((function(e){t+=e.voto})),i[e].punti=t}));var s=Object.entries(i).sort((function(e,t){return t[1].punti-e[1].punti}));return(0,ee.jsxs)(f.default,{style:{flex:1,backgroundColor:L},children:[(0,ee.jsxs)(g.default,{style:{width:"100%",height:80},children:[(0,ee.jsx)(ve,{barStyle:"dark-content",backgroundColor:"transparent",translucent:!0}),(0,ee.jsx)(ye,{imgUrl:F.left,handlePress:function(){t.goBack()},left:25,top:35})]}),(0,ee.jsxs)(g.default,{style:{width:"100%",paddingVertical:Y,justifyContent:"center",alignItems:"center",zIndex:1},children:[(0,ee.jsxs)(A.default,{style:{width:"90%",margin:10,fontSize:25,textAlign:"center",color:N,fontFamily:W},children:["Ottimo ",r[0][1].nome,"! sei 1\xb0","\n\n Con: "+r[0][1].punti," punti"]}),(0,ee.jsx)(p.default,{source:r[0][1].images,resizeMode:"cover",style:{width:200,padding:10,margin:5,height:200,borderRadius:18,background:"linear-gradient(#20A4F3, #182B3A)"}}),(0,ee.jsx)(g.default,{style:{width:"100%",paddingVertical:Y,justifyContent:"center",alignItems:"center",zIndex:1},children:(0,ee.jsxs)(A.default,{style:{width:"90%",margin:10,fontSize:22,fontWeight:"400",letterSpacing:2,textAlign:"center",color:N},children:[(0,ee.jsxs)("ol",{children:["La classifica Ragazze","\n\n",(0,Be.default)(r).map((function(e){var t=(0,a.default)(e,2),n=t[0],o=t[1];return(0,ee.jsxs)("li",{children:[o.nome," con ",o.punti," punti"]},n)}))]}),(0,ee.jsxs)(g.default,{style:{width:"100%",paddingVertical:Y,justifyContent:"center",alignItems:"center",zIndex:1},children:[(0,ee.jsxs)(A.default,{style:{width:"90%",margin:10,fontSize:25,textAlign:"center",color:N,fontFamily:W,marginTop:60},children:["Ottimo ",s[0][1].nome,"! sei 1\xb0","\n\n Con: "+s[0][1].punti," punti"]}),(0,ee.jsx)(p.default,{source:s[0][1].images,resizeMode:"cover",style:{width:200,padding:10,margin:5,height:200,borderRadius:18,background:"linear-gradient(#20A4F3, #182B3A)"}})]}),(0,ee.jsxs)("ol",{children:["La classifica Ragazzi","\n\n",(0,Be.default)(s).map((function(e){var t=(0,a.default)(e,2),n=t[0],o=t[1];return(0,ee.jsxs)("li",{children:[o.nome," con ",o.punti," punti"]},n)}))]})]})})]})]})};function Ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function ze(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ie(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ke=ze(ze({},l.default),{},{colors:ze(ze({},l.default.colors),{},{background:"transparent"})}),Pe=(0,s.default)();const Ee=function(){var e=(0,c.useFonts)({InterBold:n(7373),InterSemiBold:n(257),InterMedium:n(3909),InterRegular:n(6652),InterLight:n(5760)});return(0,a.default)(e,1)[0]?(0,ee.jsx)(d.default,{theme:ke,children:(0,ee.jsxs)(Pe.Navigator,{screenOptions:{headerShown:!1},initialRouteName:"Home",children:[(0,ee.jsx)(Pe.Screen,{name:"Home",component:xe}),(0,ee.jsx)(Pe.Screen,{name:"Details",component:Se}),(0,ee.jsx)(Pe.Screen,{name:"Rank",component:Re})]})}):null};i.createRoot(document.getElementById("root")).render((0,ee.jsx)(Ee,{}))},7373:(e,t,n)=>{e.exports=n.p+"static/media/Inter-Bold.a73db89c43e44ca8f5e0.ttf"},5760:(e,t,n)=>{e.exports=n.p+"static/media/Inter-Light.58a136ec3193fa8a63e5.ttf"},3909:(e,t,n)=>{e.exports=n.p+"static/media/Inter-Medium.e7231ba33760832432b8.ttf"},6652:(e,t,n)=>{e.exports=n.p+"static/media/Inter-Regular.2391725004ae05a27e8e.ttf"},257:(e,t,n)=>{e.exports=n.p+"static/media/Inter-SemiBold.45b4c2ae493bb481102f.ttf"}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,n.amdO={},(()=>{var e=[];n.O=(t,o,i,a)=>{if(!o){var r=1/0;for(c=0;c<e.length;c++){for(var[o,i,a]=e[c],s=!0,l=0;l<o.length;l++)(!1&a||r>=a)&&Object.keys(n.O).every((e=>n.O[e](o[l])))?o.splice(l--,1):(s=!1,a<r&&(r=a));if(s){e.splice(c--,1);var d=i();void 0!==d&&(t=d)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,i,a]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(o,i){if(1&i&&(o=this(o)),8&i)return o;if("object"===typeof o&&o){if(4&i&&o.__esModule)return o;if(16&i&&"function"===typeof o.then)return o}var a=Object.create(null);n.r(a);var r={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&o;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>r[e]=()=>o[e]));return r.default=()=>o,n.d(a,r),a}})(),n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.p="/cacio-cup/",(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var i,a,[r,s,l]=o,d=0;if(r.some((t=>0!==e[t]))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)var c=l(n)}for(t&&t(o);d<r.length;d++)a=r[d],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},o=self.webpackChunkweb=self.webpackChunkweb||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=n.O(void 0,[188],(()=>n(1281)));o=n.O(o)})();
//# sourceMappingURL=main.8b79efc0.js.map