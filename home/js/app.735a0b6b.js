(function(){var A={711:function(A,t,n){"use strict";var e=n(144),r=function(){var A=this,t=A._self._c;return t("div",[t("SayWHome")],1)},o=[],a=function(){var A=this,t=A._self._c;return t("div",{staticClass:"HomeCss"},[t("HomeTop"),t("HomeContent",{on:{testevent:A.showlog}}),t("HomeFooter")],1)},i=[],s=function(){var A=this,t=A._self._c;return t("div",{staticClass:"top"},[t("table",{staticClass:"btnsView"},A._l(A.banners,(function(n,e){return t("tr",{key:e},A._l(n,(function(n,r){return t("td",{key:r,staticClass:"td",on:{click:function(t){return A.itemClink(4*e+r)}}},[t("img",{attrs:{src:A.getImageName(4*e+r+1)}}),t("p",[A._v(A._s(n))])])})),0)})),0)])},u=[],g={name:"HomeTop",data(){return{msg:"首页",banners:[["详情","分享","扫一扫","定位"],["小程序","添加桌面","离线包","Vue学习"]]}},methods:{mpClink(A,t){window.AlipayJSBridge.call("umapJsApis",{operationType:A,params:t},(function(A){console.log(A)}))},openNewPage(A){window.AlipayJSBridge.call("pushWindow",{url:A,param:{readTitle:!0,showOptionMenu:!1}})},getImageName(A){return n(512)("./0"+A+".png")},itemClink(A){switch(A){case 0:this.openNewPage("https://houhout.github.io/testCode/testCode.html");break;case 1:this.mpClink("shareMore");break;case 2:this.mpClink("scanCode");break;case 3:this.mpClink("addresss");break;case 4:this.mpClink("tiny",{appId:"2021003186692012"});break;case 5:this.mpClink("addDeskTop",{url:"https://houhout.github.io/iOS/appStart.html?appName=哈哈哈&appIcon=https://houhout.github.io/img/seaworldLogo.jpg"});break;case 6:this.mpClink("startAppId",{appId:"20230000"});break;case 7:this.mpClink("startAppUrl",{url:"https://v2.cn.vuejs.org/"})}}}},c=g,p=n(1),l=(0,p.Z)(c,s,u,!1,null,"7fd326a2",null),h=l.exports,m=function(){var A=this,t=A._self._c;return t("div",{staticClass:"contt"},[t("img",{staticClass:"adbannner",attrs:{src:A.imgStr}})])},C=[],f=n(154),w={name:"HomeContent",data(){return{imgStr:""}},mounted(){f.Z.get("https://api.oioweb.cn/api/common/OneDayEnglish").then((A=>{this.imgStr=A.data["result"]["img"]})).catch((A=>console.log(A)))}},k=w,B=(0,p.Z)(k,m,C,!1,null,"7cff695c",null),b=B.exports,y=function(){var A=this;A._self._c;return A._m(0)},d=[function(){var A=this,t=A._self._c;return t("div",[t("h5",[A._v("Vue 学习页面底部")])])}],U={name:"HomeFooter"},E=U,F=(0,p.Z)(E,y,d,!1,null,null,null),v=F.exports,O={name:"SayWHome",components:{HomeTop:h,HomeContent:b,HomeFooter:v},methods:{showlog(A){console.log("666666666",A)}}},R=O,J=(0,p.Z)(R,a,i,!1,null,null,null),Z=J.exports,H={name:"App",components:{SayWHome:Z},beforeCreate(){}},V=H,Q=(0,p.Z)(V,r,o,!1,null,null,null),I=Q.exports;e.ZP.config.productionTip=!1,new e.ZP({render:A=>A(I),beforeCreate(){e.ZP.prototype.$bus=this}}).$mount("#app")},512:function(A,t,n){var e={"./01.png":3,"./02.png":212,"./03.png":439,"./04.png":751,"./05.png":449,"./06.png":583,"./07.png":83,"./08.png":594};function r(A){var t=o(A);return n(t)}function o(A){if(!n.o(e,A)){var t=new Error("Cannot find module '"+A+"'");throw t.code="MODULE_NOT_FOUND",t}return e[A]}r.keys=function(){return Object.keys(e)},r.resolve=o,A.exports=r,r.id=512},3:function(A){"use strict";A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAlJJREFUWEfVmUtywzAIhtHJ2kxypGTddJ0cKZm6J1MHjdBgAhKS3dr1pp1Ej08/CAMJsPA53eI7W4L/P+Hnj0tIf0efMDIRoWKADwDgQOZSIcJnhr327tcFeLrFawbr3aeMR9jHJbhBXYANxYoJQ4RvIokB3moKe0GbgIZqCSpvUvWx7KPkEjPlPZBVwOM9fgkVJg+UZX/rsM9zOFhzTMDjPUY+yXNar2NqoM9zUFnUD6Vya8LRIRTISVPyBVBODBEOS2NZxeTom+hG6dGEmAEqcF0hwWtiPq4lyAyQ+91vmNV5eWamLoDyJNJpxSvNJRZ3DYqlGCu1QM39notTAGvqyRvtohM+JdZ/8et8gOKPJFACrKknJ3rh8rhkLrmG5T5CxXSIF0Btcj4AvrrcT37tTWRmLoIHEADS4RJgS3431cKBmpmDZfuFew1Pl2aWgGo0H95tYKIGWHK8v4x9FvsQIKVMA4JoU8rF0b6UlwlNXFVwYZhRz1SzFN8Px7l8cDRQW4q3XAlFwzCT4qBQSL0kK5sYKz1/TeIBXMn3hpbZVaDWTkCAvPbYPBZyUHoX88x2M0Dyde6jVro1S4e8yUKtOms5oAh3ZX8rYS0q9sTBVvioQVr5qEz5iy/yzZT62ArAQwVWLR+VRZNZZbVS/tHKr1Wo/a+yk+y2UeEOWndhN60Pq0HQ2zxSq/9WCKHvrTZerXsx2n5LoJRx1ABbvcVW7GwCamWpAoRtOdm8xGFmi9gbM12AzET7bAFLxXJCCR396uHGZ5eCRg1BZpTmXOVniB/FAAUNhfl58gAAAABJRU5ErkJggg=="},212:function(A){"use strict";A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAgNJREFUWEftmE9OwkAUxt9gNAbYCq5ZcwSIZeO+W1dujWcwUD2DuvYEPQI1cAE9hcCWYKLRZ17TSbCd6fxtYQEbEvrn/fjevO+blsGef9ie88EB0LVDlSh4PouDX4CA4JbDcOIC6RUwBWMwLQAhRLag3gA7s3gCDMYytRoIo49hmJiq6Q9wHqOq+HIQGtczvkAG0dEAtFHRC6B07eX+zc4AiUNHwZ22+GweT1lmLaJlgADJahCOVOs0f9xLi9vPD0Gj1Zye9nrS+jbtpZs5A7ae7sn3yJQTxljU7PeDbbsh5Y4QIhuLcQIk1RAxNWWGGK1vx/8SgwbHFmq7DaUKUpGfzHwZwiuPrrxq65s7YwPWXYtSQNmi/14s4WuxEKqmW9TkPCGgKrZw8/myury6Nilke24BUMd0bS3DBrIAqFKPF7ExXS+AOgqmw2IR/LUCbt7eC9ZiA6C6RjgkqtjanmQqkPdAVVGT40JA7n/CbM12x+3HaIKMpRtUMuqqQEuNOh0YAEAGF/QtiqyqQZ2zmLcrD6pqu24UegPUBS3YGELUAEhkue0dsAy0bPhk27HKAPOgJ90uHHc70gGWpVPlgJxI55FApOJeAYLgAf8AyFusSidZvtemoHITInl/UxsgKSTdypW8XKoVkLebv54jg6bfyh6udgLovJsxuUHV5x4UdFX4D5rqCjh6xD47AAAAAElFTkSuQmCC"},439:function(A){"use strict";A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAoCAYAAACFFRgXAAAAAXNSR0IArs4c6QAAAg1JREFUWEftmVFuwyAMhk2rnaA9TqStJ1t7snZSjtOeYEoyOcQNJNjgJCjNVF6mqGA+fozBnoHE9lscv7DrHppv/NsAtN9TmwG4WTvmZ1/ez6l2TKwjgiLkXMDYPADm0goSgReBq+J4hk7R+IRL9TAXCZoFrovDNb+q4UWiu+zKxyn0axB4TViC5KBHwOu4AedOY/fwgDlYXC2e5rBZGzVSG2fLQPMZcsEazOmjvLcRBVsUWPInNKDbEflAhVxxOP8A+NAMlXIHYIjbDeIvpwxzYII7RVGBW7yr8hNYcgc8sRa2uaZuva6fVV4FzEUGUnhNYHeXnwpvDrgqxv7bnco2iK+psL2yH624jg/LwLpooPNgfEdIPqwC7qLfRRMNtLi0k9JTIFnhKZPnGPMGzqGqa1OlMGUHOaFiT1kFsHz/L7kI6VmbDIzqVl36siRcyJZ09ScD54ZMtf8GTlVqar//rbBNa+YVTiRl+7SJT7cUCscfJlO3uR9n51gkrKW8pOYCUwqkAuY751c4BqzKOF5B4SAwn1GsrzCJ5mUcMeC+BuF7rOZhHyqi1AA3KpRwbkkRwgPGj5RCxvCA6VInfSHFVXcELKkcigQadd0QprPlL3LbxUBa+abKra8ArS5oE7TuQM2972j8xH8Z+ND4pasDa/Eps3FrweHDqbCMimNkaPFnvt4osaX0KwZKmH9op7Q4mXHXXAAAAABJRU5ErkJggg=="},751:function(A){"use strict";A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAzxJREFUWEftmM9rE0EUx18qiL8uogiiJ8F60IMHQejFFCIExYOh1aMXz+LFk9A0/gH+gv4B3qTVeg0lmOQieFTaHiyVVBRRLBYh2orNyndnX/ftdrPzZrOHIi4su9nMznzy/b73ZjIF2uFHYYfz0b8PWCqPFYl6ReOEd8FcC22ioRbuGvVn/jXrkVnBUrkySURV+8Bei2hXLStoJkAJN3zpms94ePgMHTp52r9fXVqgb+/m/SvO4Kg16rP4UU6HE2BgZxMjAOzU5evWwQD46uFE0M5rNeovRq0viQaOgFebRIWiFk6CADJQ00lJNWCpnB2OQV/en6Dusm+5GlIFyNYixkZu39sS5vxBIpyvv5tTHpWj5tPs5/DpyuI8vZ0yedWoz6rGVjVi9QDHiYBBju8lkiAffxkYBsf94/dR8Lnpp7TRnlGrqASseHH1eFgAAhRwUEvC4TNDc/s3az36cHccNVOVMFbAfvZKXW6dMJ8AA1gcSbbjeQios1kNGLdXAkqr0+AY8MvctG+zJg4VgGbGSAKUdkYjLVRUJgmetr9u0kZrJojDoVHbDDMQYFy5OCTHJT9f++35Fv98UqM/HZSbHAFtxZlh41ASutPt0UrX2wLMyWJ/tdLsBwiwY3vMydn8aT3EkvUR6kHFHzUzf+cCiI5K5YqH65Wp5xEXbTEo6yDbC2thcW5lJgD0EyWuolQP7bjEcO2Dkqwgq+cSf+jTmiQG0NicpCJLmhaDWdVTA6apKD3HrCJV4+9QWnCE6uW8WOCB+sViUg3kZ2yta+zx+yqLBWBiLPYDZGuj6tlrn+zPCVBmdNrUh3YSLpw5dAuEAQHHirsP7H9w7uads3LpFVdxu7W6uhfvx1lB7uDRsje5urRQTYJkOLTloqyZ1pJCJTMg/7OL10aezrJmbW4KynhkSAk3SNwNFIPyZVnAj1wcp/URrJRJLKfckyJXBWUBx/2+G1Xa7Czyfw7VYiCthuK7zDEYVTJpG8St3vUDzQUwrmTWjM01i5M6Q0zalvA2S3OPQdcBXdunWmxqHe/5uXadaFgbO1zRftO35hSAmj1ANby/J8M7Feat9GTKLUnUiI4N/wM6Crat+V9AdPQ41IifIgAAAABJRU5ErkJggg=="},449:function(A){"use strict";A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAg9JREFUWEfVmWl2gyAUhS/dWHEBtUtqXFLTBZRsrPYAomAZLora5E/OCdPH5U0Qga2fLynN0BEf3hT2N0BNbQ/z/a5uW5cR1QM/5Q0CrwAcDD/FiKEWlge0YL5aPNi6ZwVoGVAf5Yjv7TSZkQRoHrClainOAmQa8Aw4B52BjAOeCVeA/At4BVwGMgS8Es5BCnR4UzaOAggB73Js7K3zQlVxs1cz1wLYVj0FgcFXwmycXcNzmgWwlXpEbMNd6riaz0STihaQ3Vnp/H04G+B15nE5e0lzTPCf5rKArdVLAyj0qpvWLKlo+rYFdMadOxHnpYyKAp1odry6xGLUcWbAmNUlgE5BBhBQgvKoknPY9rKCvhMxnnwiYBgXOfXMprWCtdnDLvYDuaqsUwouv28IaXWA6yAcHlP6iPW4F6ggLnJmA94Gc0GYtUESyutGO8miTtp+yk5yGKBTLx9c2wOOGATIiG4qk7z3/QPA3GbCGFcbGeKH3yvhcjGVuLNJvibHsrY4AzKB0y/Fw/5bg3AeMyi3uJIrDLix6ZmNVqgX3knYyWMV87o4ZSFS/aIlP6eiP6W7ENU/IpU2EL006UFMyClNvrd9dUJPdnF3u2ftca9a/vjEbfBJH4/OVHLz89sZkKt3mJjFlF9YjwBlXh+mdXnA/aC6on4c94ieSm02H+lXf/0J/4awbYNp8Z7Uapz/F/tBVNe7hrQ4AAAAAElFTkSuQmCC"},583:function(A){"use strict";A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAjdJREFUWEfNmG1SAyEMhkM9mPY4drxD7R2cepyuB1McYBf5SEIC7I77s1PgIZ8vMfDPP9PLZ9/gpXdtuc58wELtpQL0UN9wBTMPrgC7mTu8p7+JAe3FL7zOshqzTwapAbTVphYWMPA1CI1dOkKKACvrWVjMJ5wHweJyzDvmDp5NBvgKjxh3k+E2ygryBGeXPDLAC6TurQJ5oiX/zukF3Ew/Cyrdx6aeogBjKQkBMK3WwZpQZRlRAXq4H3jsYZ1kTzJEWAuycO72vR/mBSLReMDU/w7GQT3BjWtDUma0yK8xJnaxPSBTMwshViQtWLp3r0zNzukGHCjE3pUWnovsv/mCsIqA1FOlIaQWVBdihZBwsLH3HgKogKtyandAFA5XOKhM2xUQqZtsaHCKJQoGqtUVh/EHlfUy7C6K2ywJQuJkYmUoSTi5Ly1LrXI2BlhK/rXT+BLCPHrKzCgaQmb9bsAsfgZbYOnm7QLOC3MAkR4q7cm+xQfFlMq4kOGbINnERaoHW0nCVX8NHPZfso52AQ60Qe4iqNtVgElpkWasxrJTAWEwBgk3V2/u7NnZjMH6KSAqzBIrUjGoAvRJRo0+Zj8His7kW01LSMZeecx8pp7NSAGzOlYLU4lH6f8QDaC2oKL5a4mqbD2F+Y5oPsj1SC1I1X/xuaIo0aLcYZSxf1N0fS4MvImQCYWwXOV67JgkyBRM6+LVdGvkjdE6rGcYQI7fENXRPJ/8wymMTjS6cdtLNB/sJxtf+Quz9aY43swNuQAAAABJRU5ErkJggg=="},83:function(A){"use strict";A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAnpJREFUWEfVmTtOAzEQhsfhAFTQAXXOkCKEI0DD8xogpEgQKRKCawAJDRyBR5EzpAY6qDhAYvQ7cfA6fow3u4viZpPVePfzvDyeFZRzHF/JbUwdrdCFfoSQpO5JQa+4CklvuPbOxGXO15BInXhwI1+mL1cw3AFoAKfCsgEPryW0MNMWF8wj1+GCRgFhynGNlNZKGFHQIGDBWvOtLwjpBawITkN7IZ2AFcMFIecA/wnOC5kBtOH2GkS7DV5oPA2IHgc82ZBUbUytu3Oh8qhKZ6bw4bWU5v/707QXFgXZOxMzrtkPl2k14NFNGLS+SdTen8h0H4iGH2kLc0jPgsYEzGgPk7iAkDXdoQhIrUUF6AuMFEAbkqPDkEtga+yfipYCxP6qN3qXD8ZMbM6BJusbcTy4BVwB2naNDKAdHHpCqgbjWBMJ7bMhQMghokUo7y0lIFa/6NhaJzrZIXr/Irp9/nuaHf2qRPP5nyuKkUqKAPQt0A6aJEDTb4afi+qQaG2V6Ptn6pMbk4U7AX0BYmtQ57midgtzidoyrmyBIJlL0K4oLitgYhsC2wfLAgxZhu2DMCuqmjLMWyhgEXusHV4Ry3RE6FBkl1spWx4nzhmBxwes2rxYICoaVrEA4TIAQ+ZNqmYAWLR5GQWDKlpZBWus6uD4my0T879MwYrJoZK/DPPq3cOTGeZL/inkQoemPJp0uY7z0ISH2ymnfcCrjvOAYQ6Kjm5/bnamy7BcB3e9ln/qLjj7M8vZPKpYk/nab1VA2n0YV7BFO6wlgUY7q/q9bEATVApqug76oXSjO//oFqSkpWRA8+HTaMdnhybu258hcG9lRB1czZZaCuAvVlZ4J8suZDEAAAAASUVORK5CYII="},594:function(A){"use strict";A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAnpJREFUWEfVmTtOAzEQhsfhAFTQAXXOkCKEI0DD8xogpEgQKRKCawAJDRyBR5EzpAY6qDhAYvQ7cfA6fow3u4viZpPVePfzvDyeFZRzHF/JbUwdrdCFfoSQpO5JQa+4CklvuPbOxGXO15BInXhwI1+mL1cw3AFoAKfCsgEPryW0MNMWF8wj1+GCRgFhynGNlNZKGFHQIGDBWvOtLwjpBawITkN7IZ2AFcMFIecA/wnOC5kBtOH2GkS7DV5oPA2IHgc82ZBUbUytu3Oh8qhKZ6bw4bWU5v/707QXFgXZOxMzrtkPl2k14NFNGLS+SdTen8h0H4iGH2kLc0jPgsYEzGgPk7iAkDXdoQhIrUUF6AuMFEAbkqPDkEtga+yfipYCxP6qN3qXD8ZMbM6BJusbcTy4BVwB2naNDKAdHHpCqgbjWBMJ7bMhQMghokUo7y0lIFa/6NhaJzrZIXr/Irp9/nuaHf2qRPP5nyuKkUqKAPQt0A6aJEDTb4afi+qQaG2V6Ptn6pMbk4U7AX0BYmtQ57midgtzidoyrmyBIJlL0K4oLitgYhsC2wfLAgxZhu2DMCuqmjLMWyhgEXusHV4Ry3RE6FBkl1spWx4nzhmBxwes2rxYICoaVrEA4TIAQ+ZNqmYAWLR5GQWDKlpZBWus6uD4my0T879MwYrJoZK/DPPq3cOTGeZL/inkQoemPJp0uY7z0ISH2ymnfcCrjvOAYQ6Kjm5/bnamy7BcB3e9ln/qLjj7M8vZPKpYk/nab1VA2n0YV7BFO6wlgUY7q/q9bEATVApqug76oXSjO//oFqSkpWRA8+HTaMdnhybu258hcG9lRB1czZZaCuAvVlZ4J8suZDEAAAAASUVORK5CYII="}},t={};function n(e){var r=t[e];if(void 0!==r)return r.exports;var o=t[e]={exports:{}};return A[e](o,o.exports,n),o.exports}n.m=A,function(){var A=[];n.O=function(t,e,r,o){if(!e){var a=1/0;for(g=0;g<A.length;g++){e=A[g][0],r=A[g][1],o=A[g][2];for(var i=!0,s=0;s<e.length;s++)(!1&o||a>=o)&&Object.keys(n.O).every((function(A){return n.O[A](e[s])}))?e.splice(s--,1):(i=!1,o<a&&(a=o));if(i){A.splice(g--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var g=A.length;g>0&&A[g-1][2]>o;g--)A[g]=A[g-1];A[g]=[e,r,o]}}(),function(){n.d=function(A,t){for(var e in t)n.o(t,e)&&!n.o(A,e)&&Object.defineProperty(A,e,{enumerable:!0,get:t[e]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(A){if("object"===typeof window)return window}}()}(),function(){n.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)}}(),function(){var A={143:0};n.O.j=function(t){return 0===A[t]};var t=function(t,e){var r,o,a=e[0],i=e[1],s=e[2],u=0;if(a.some((function(t){return 0!==A[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(s)var g=s(n)}for(t&&t(e);u<a.length;u++)o=a[u],n.o(A,o)&&A[o]&&A[o][0](),A[o]=0;return n.O(g)},e=self["webpackChunksayw"]=self["webpackChunksayw"]||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var e=n.O(void 0,[998],(function(){return n(711)}));e=n.O(e)})();
//# sourceMappingURL=app.735a0b6b.js.map