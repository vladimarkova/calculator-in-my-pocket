"use strict";(self.webpackChunkcalculator_in_my_pocket=self.webpackChunkcalculator_in_my_pocket||[]).push([[706],{7706:(G,h,c)=>{c.r(h),c.d(h,{CalculatorModule:()=>$});var s=c(6895),p=c(3286),g=c(294),C=c(4466),f=c(1399),y=c(4004),i=(()=>{return(o=i||(i={})).OPERATION="operation",o.CLEAR="clear",o.DIGIT="digit",o.DECIMAL_POINT="decimal point",i;var o})(),e=c(1571),T=c(9841),O=c(9300),v=c(5698),_=c(6979),m=c(9912);const d=(0,m.ZF)("theme"),P=(0,m.P1)(d,o=>o.themes),M=(0,m.P1)(d,o=>o.totalCount),k=(0,m.P1)(d,o=>o.selectedTheme),b=(0,m.P1)(d,o=>o.loading),x=(0,m.P1)(d,o=>o.error),w=function(o){return{"delete-red":o}};function I(o,a){if(1&o){const n=e.EpF();e.TgZ(0,"div",10)(1,"div",11)(2,"div",12),e._UZ(3,"div",13),e.TgZ(4,"span",14),e.NdJ("click",function(){const r=e.CHM(n).$implicit,u=e.oxw(4);return e.KtG(u.handleSelectTheme(r))}),e._uU(5),e.qZA()()(),e.TgZ(6,"div",15)(7,"i",16),e.ALo(8,"async"),e._uU(9),e.ALo(10,"async"),e.qZA()()()}if(2&o){const n=a.$implicit,l=e.oxw(4);let t,r;e.xp6(3),e.Udp("background-color",n.mainBgColorHex),e.xp6(2),e.Oqu(n.title),e.xp6(2),e.Q6J("ngClass",e.VKq(9,w,n.id!==(null==(t=e.lcZ(8,5,l.selectedTheme$))?null:t.id))),e.xp6(2),e.Oqu(n.id!==(null==(r=e.lcZ(10,7,l.selectedTheme$))?null:r.id)?"do_not_disturb_on":"check_circle")}}function A(o,a){if(1&o){const n=e.EpF();e.TgZ(0,"div",6)(1,"div",7),e.NdJ("click",function(){e.CHM(n);const t=e.oxw(3);return e.KtG(t.handleCloseThemeSelection())}),e.TgZ(2,"i",8),e._uU(3,"clear"),e.qZA()(),e.YNc(4,I,11,11,"div",9),e.qZA()}if(2&o){const n=e.oxw().ngIf,l=e.oxw(2);e.Udp("background-color",l.dynamicBgColor),e.xp6(4),e.Q6J("ngForOf",n)}}function Z(o,a){1&o&&(e.TgZ(0,"div",17),e._uU(1,"No themes available..."),e.qZA())}function N(o,a){if(1&o&&(e.ynx(0),e.YNc(1,A,5,3,"div",4),e.YNc(2,Z,2,0,"div",5),e.BQk()),2&o){const n=a.ngIf;e.xp6(1),e.Q6J("ngIf",null==n?null:n.length),e.xp6(1),e.Q6J("ngIf",!(null!=n&&n.length))}}function U(o,a){if(1&o&&(e.YNc(0,N,3,2,"ng-container",3),e.ALo(1,"async")),2&o){const n=e.oxw();e.Q6J("ngIf",e.lcZ(1,1,n.themes$))}}function L(o,a){1&o&&e._uU(0," Loading...\n")}function S(o,a){1&o&&e.GkF(0)}let B=(()=>{class o{constructor(n,l,t){this.themeStore=n,this.router=l,this.activatedRoute=t,this.themes$=this.themeStore.select(P),this.totalCount$=this.themeStore.select(M),this.loading$=this.themeStore.select(b),this.error$=this.themeStore.select(x),this.selectedTheme$=this.themeStore.select(k),this.dynamicBgColor="#8076a3",this.applyThemeEvent=new e.vpe}ngOnInit(){this.themeStore.dispatch((0,_.c4)()),this.sub=(0,T.a)([this.themes$,this.selectedTheme$]).subscribe(([n,l])=>{const r=this.router.parseUrl(this.router.url).queryParams.theme;!l&&r?this.router.navigate([],{relativeTo:this.activatedRoute}):n&&this.handleSelectTheme(n[0])})}handleSelectTheme(n){this.themeStore.dispatch((0,_.Pu)({id:n.id})),this.addThemeIdToParams(n.id),this.applyThemeEvent.emit({theme:n}),this.dynamicBgColor=n.mainBgColorHex}addThemeIdToParams(n){const t=this.router.parseUrl(this.router.url).queryParams;t.theme=n,this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:t})}handleCloseThemeSelection(){this.themes$.pipe((0,O.h)(n=>!!n),(0,v.q)(1)).subscribe(n=>{n&&this.handleSelectTheme(n[0])}),this.router.navigate(["/calculator"])}ngOnDestroy(){this.sub.unsubscribe()}static#e=this.\u0275fac=function(l){return new(l||o)(e.Y36(m.yh),e.Y36(p.F0),e.Y36(p.gz))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-theme-select-list"]],outputs:{applyThemeEvent:"applyThemeEvent"},decls:6,vars:5,consts:[["themeSelectListTemplate",""],["loader",""],[4,"ngIf","ngIfThen","ngIfElse"],[4,"ngIf"],["class","container",3,"backgroundColor",4,"ngIf"],["class","no-themes",4,"ngIf"],[1,"container"],[1,"close-icon-wrapper","hover",3,"click"],[1,"material-icons","close-icon"],["class","row",4,"ngFor","ngForOf"],[1,"row"],[1,"col"],[1,"col-content"],[1,"color-box"],[1,"title","hover",3,"click"],[1,"actions"],[1,"material-icons",3,"ngClass"],[1,"no-themes"]],template:function(l,t){if(1&l&&(e.YNc(0,U,2,3,"ng-template",null,0,e.W1O),e.YNc(2,L,1,0,"ng-template",null,1,e.W1O),e.YNc(4,S,1,0,"ng-container",2),e.ALo(5,"async")),2&l){const r=e.MAs(1),u=e.MAs(3);e.xp6(4),e.Q6J("ngIf",e.lcZ(5,3,t.loading$))("ngIfThen",u)("ngIfElse",r)}},dependencies:[s.mk,s.sg,s.O5,s.Ov],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;border-radius:5px;color:#fff;padding:10px}.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:5px}.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{padding:5px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-content[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-content[_ngcontent-%COMP%]:first-child{display:flex}.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-content[_ngcontent-%COMP%]:first-child   .color-box[_ngcontent-%COMP%]{width:20px;height:20px;border-radius:5px;border:2px solid #000000;margin-right:12px}.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:hover{text-decoration:underline}.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{padding:5px;display:flex}.container[_ngcontent-%COMP%]   .close-icon-wrapper[_ngcontent-%COMP%]{align-self:flex-end;display:flex;margin-bottom:12px;border:1px solid #8076a3;border-radius:5px}.container[_ngcontent-%COMP%]   .close-icon-wrapper[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{color:#d43322}.container[_ngcontent-%COMP%]   .close-icon-wrapper[_ngcontent-%COMP%]:hover{border:1px solid #ffffff}.delete-red[_ngcontent-%COMP%]{color:#d43322!important}"]})}return o})();var E=c(8419),J=c(8275);function q(o,a){if(1&o){const n=e.EpF();e.ynx(0),e.TgZ(1,"app-theme-select-list",18),e.NdJ("applyThemeEvent",function(t){e.CHM(n);const r=e.oxw();return e.KtG(r.applyTheme(t))}),e.qZA(),e.BQk()}}const D=["+","-","*","/","="],R=p.Bz.forChild([{path:"",component:(()=>{class o{get result(){return this.memory?this.memory.find(n=>"NaN"===n)?"NaN":this.memory[2]?this.memory[2]:this.memory[0]:"0"}get dynamicBgColor(){return this.themeToApply?.mainBgColorHex||"#8076a3"}get dynamicHighlightColor(){return this.themeToApply?.highlightColorHex||"#9bc400"}get dynamicTextColor(){return this.themeToApply?.textColorHex||"#ffffff"}constructor(n,l){this.route=n,this.renderer=l,this.memory=null,this.largeFont="3rem",this.smallFont="1.5rem",this.isUndoImplemented=!1,this.charactersToCutAfterDecimal=15,this.symbolType=i,this.queryParams$=this.route.queryParams,this.selectThemeListVisible$=this.queryParams$.pipe((0,y.U)(t=>!!t&&"true"===t?.["select-theme-list"])),this.themeToApply=null}handleButtonClick(n){const{type:l,value:t}=n;if(l!==i.CLEAR)if(this.memory){if(("0"!==this.memory[0]||this.memory[0].includes(".")||"0"!==t)&&(!this.memory[2]||"0"!==this.memory[2]||this.memory[2].includes(".")||"0"!==t)&&(!this.memory[0]?.includes(".")||this.memory[1]||this.memory[2]||l!==i.DECIMAL_POINT)&&(!this.memory[2]?.includes(".")||l!==i.DECIMAL_POINT)){if(this.memory[2]&&l===i.OPERATION)return this.calculate(),void("="!==t&&(this.memory[1]=t));if(this.memoryIncludesOperation())l!==i.OPERATION?this.addDigitToMemory(t,"right"):("="!==t&&(this.memory[1]=t),this.calculate());else{if(l===i.OPERATION)return void(this.memory[1]=t);this.addDigitToMemory(t,"left")}}}else{if(l===i.OPERATION)return;this.memory=[t]}else this.memory=null}memoryIncludesOperation(){return this.memory?.find(n=>D.includes(n))}addDigitToMemory(n,l){if(!this.memory)return this.memory=[n],void("."===this.memory[0]&&(this.memory[0]="0."));if("left"===l){if(!this.memory?.[0]||"0"===this.memory[0])return void(this.memory[0]="."===n?"0.":n);this.memory[0]=this.memory[0]+n}else{if("."===this.memory[2])return void(this.memory[2]="0.");if(!this.memory?.[2]||"0"===this.memory[2])return void(this.memory[2]="."===n?"0.":n);this.memory[2]=this.memory[2]+n}}undoLast(){console.log("Implement me...!")}calculate(){if(!(this.memory&&this.memory?.[0]&&this.memory?.[1]&&this.memory?.[2]))return;let n=0;const l=parseFloat(this.memory[0]),t=parseFloat(this.memory[2]),r=this.memory[1];switch("/"===r&&(n=0!==t?l/t:"NaN"),r){case"+":n=l+t;break;case"-":n=l-t;break;case"*":n=l*t}this.memory=[n.toString()]}applyTheme({theme:n}){this.themeToApply={...n}}setBackgroundColor(n,l){this.renderer.setStyle(n,"background-color",l)}static#e=this.\u0275fac=function(l){return new(l||o)(e.Y36(p.gz),e.Y36(e.Qsj))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-calculator"]],decls:52,vars:29,consts:[[1,"page-wrapper"],[1,"calculator-and-themes"],[1,"calculator-wrapper"],[1,"main"],[1,"display","b-b"],[1,"symbols-and-actions"],[1,"first-row","b-b"],[1,"regular-cell","b-r","hover","clear",3,"click"],[1,"back-arrow-wrapper","hover",3,"click"],[1,"regular-cell","hover","flex-custom",3,"click"],[1,"digits-and-action","b-b"],[1,"regular-cell","b-r","hover",3,"click"],[1,"regular-cell","hover",3,"click"],[1,"third-row"],[1,"last-row-cell","b-r","flex-3","hover",3,"click"],[1,"last-row-cell","b-r","flex-1","hover",3,"click"],[1,"last-row-cell","flex-1","hover",3,"click"],[4,"ngIf"],[1,"select-theme-list",3,"applyThemeEvent"]],template:function(l,t){1&l&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e._uU(5),e.ALo(6,"replaceSymbolWithAnotherSymbol"),e.ALo(7,"cutNNumbersAfterSymbolFromString"),e.qZA(),e.TgZ(8,"div",5)(9,"div",6)(10,"div",7),e.NdJ("click",function(){return t.handleButtonClick({type:t.symbolType.CLEAR,value:"C"})}),e._uU(11,"C"),e.qZA(),e.TgZ(12,"div",8),e.NdJ("click",function(){return t.undoLast()}),e._uU(13),e.qZA(),e.TgZ(14,"div",9),e.NdJ("click",function(){return t.handleButtonClick({type:t.symbolType.OPERATION,value:"/"})}),e._uU(15,"/"),e.qZA()(),e.TgZ(16,"div",10)(17,"div",11),e.NdJ("click",function(){return t.handleButtonClick({type:t.symbolType.DIGIT,value:"7"})}),e._uU(18,"7 "),e.qZA(),e.TgZ(19,"div",11),e.NdJ("click",function(){return t.handleButtonClick({type:t.symbolType.DIGIT,value:"8"})}),e._uU(20,"8 "),e.qZA(),e.TgZ(21,"div",11),e.NdJ("click",function(){return t.handleButtonClick({type:t.symbolType.DIGIT,value:"9"})}),e._uU(22,"9 "),e.qZA(),e.TgZ(23,"div",12),e.NdJ("click",function(){return t.handleButtonClick({type:t.symbolType.OPERATION,value:"*"})}),e._uU(24,"*"),e.qZA()(),e.TgZ(25,"div",10)(26,"div",11),e.NdJ("click",function(){return t.handleButtonClick({type:t.symbolType.DIGIT,value:"4"})}),e._uU(27,"4 "),e.qZA(),e.TgZ(28,"div",11),e.NdJ("click",function(){return t.handleButtonClick({type:t.symbolType.DIGIT,value:"5"})}),e._uU(29,"5 "),e.qZA(),e.TgZ(30,"div",11),e.NdJ("click",function(){return t.handleButtonClick({type:t.symbolType.DIGIT,value:"6"})}),e._uU(31,"6 "),e.qZA(),e.TgZ(32,"div",12),e.NdJ("click",function(){return t.handleButtonClick({type:t.symbolType.OPERATION,value:"-"})}),e._uU(33,"-"),e.qZA()(),e.TgZ(34,"div",10)(35,"div",11),e.NdJ("click",function(){return t.handleButtonClick({type:t.symbolType.DIGIT,value:"1"})}),e._uU(36,"1 "),e.qZA(),e.TgZ(37,"div",11),e.NdJ("click",function(){return t.handleButtonClick({type:t.symbolType.DIGIT,value:"2"})}),e._uU(38,"2 "),e.qZA(),e.TgZ(39,"div",11),e.NdJ("click",function(){return t.handleButtonClick({type:t.symbolType.DIGIT,value:"3"})}),e._uU(40,"3 "),e.qZA(),e.TgZ(41,"div",12),e.NdJ("click",function(){return t.handleButtonClick({type:t.symbolType.OPERATION,value:"+"})}),e._uU(42,"+"),e.qZA()(),e.TgZ(43,"div",13)(44,"div",14),e.NdJ("click",function(){return t.handleButtonClick({type:t.symbolType.DIGIT,value:"0"})}),e._uU(45,"0"),e.qZA(),e.TgZ(46,"div",15),e.NdJ("click",function(){return t.handleButtonClick({type:t.symbolType.DECIMAL_POINT,value:"."})}),e._uU(47,","),e.qZA(),e.TgZ(48,"div",16),e.NdJ("click",function(){return t.handleButtonClick({type:t.symbolType.OPERATION,value:"="})}),e._uU(49,"="),e.qZA()()()()(),e.YNc(50,q,2,0,"ng-container",17),e.ALo(51,"async"),e.qZA()()),2&l&&(e.xp6(3),e.Udp("background-color",t.dynamicBgColor)("color",t.dynamicTextColor),e.xp6(1),e.Udp("font-size",t.result.length>8?t.smallFont:t.largeFont),e.xp6(1),e.hij("",e.Dn7(6,19,e.Dn7(7,23,t.result,t.charactersToCutAfterDecimal,"."),".",",")," "),e.xp6(8),e.Oqu(t.isUndoImplemented?"BACK":""),e.xp6(1),e.Udp("background-color",t.dynamicHighlightColor),e.xp6(9),e.Udp("background-color",t.dynamicHighlightColor),e.xp6(9),e.Udp("background-color",t.dynamicHighlightColor),e.xp6(9),e.Udp("background-color",t.dynamicHighlightColor),e.xp6(7),e.Udp("background-color",t.dynamicHighlightColor),e.xp6(2),e.Q6J("ngIf",e.lcZ(51,27,t.selectThemeListVisible$)))},dependencies:[s.O5,B,s.Ov,E.L,J.R],styles:[".page-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;padding-top:8%}.page-wrapper[_ngcontent-%COMP%]   .calculator-and-themes[_ngcontent-%COMP%]{display:flex}.page-wrapper[_ngcontent-%COMP%]   .calculator-and-themes[_ngcontent-%COMP%]   .calculator-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.page-wrapper[_ngcontent-%COMP%]   .calculator-and-themes[_ngcontent-%COMP%]   .calculator-wrapper[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{padding-top:10px;border-radius:5px;min-width:260px;border:2px solid #ffffff}.page-wrapper[_ngcontent-%COMP%]   .calculator-and-themes[_ngcontent-%COMP%]   .calculator-wrapper[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .display[_ngcontent-%COMP%]{text-align:end;padding-right:10px;padding-bottom:5px;padding-top:26px;line-height:1;height:50px}.page-wrapper[_ngcontent-%COMP%]   .calculator-and-themes[_ngcontent-%COMP%]   .calculator-wrapper[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .regular-cell[_ngcontent-%COMP%]{padding:12px 15px;font-size:1.2rem;flex:1}.page-wrapper[_ngcontent-%COMP%]   .calculator-and-themes[_ngcontent-%COMP%]   .calculator-wrapper[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .last-row-cell[_ngcontent-%COMP%]{padding:12px 15px 16px;font-size:1.2rem}.page-wrapper[_ngcontent-%COMP%]   .calculator-and-themes[_ngcontent-%COMP%]   .calculator-wrapper[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .div-spacer[_ngcontent-%COMP%]{padding:12px 17px}.page-wrapper[_ngcontent-%COMP%]   .calculator-and-themes[_ngcontent-%COMP%]   .calculator-wrapper[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.page-wrapper[_ngcontent-%COMP%]   .calculator-and-themes[_ngcontent-%COMP%]   .calculator-wrapper[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .back-arrow-wrapper[_ngcontent-%COMP%]{padding:12px 15px;flex:3;border-right:2px solid #ffffff;text-align:end;color:#c9c6d0}.page-wrapper[_ngcontent-%COMP%]   .calculator-and-themes[_ngcontent-%COMP%]   .calculator-wrapper[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .first-row[_ngcontent-%COMP%]   .back-arrow-wrapper[_ngcontent-%COMP%]:hover{color:#fff}.page-wrapper[_ngcontent-%COMP%]   .calculator-and-themes[_ngcontent-%COMP%]   .calculator-wrapper[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .digits-and-action[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.page-wrapper[_ngcontent-%COMP%]   .calculator-and-themes[_ngcontent-%COMP%]   .calculator-wrapper[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .third-row[_ngcontent-%COMP%]{display:flex}.page-wrapper[_ngcontent-%COMP%]   .calculator-and-themes[_ngcontent-%COMP%]   .select-theme-list[_ngcontent-%COMP%]{margin-left:50px}.b-t[_ngcontent-%COMP%]{border-top:2px solid #ffffff}.b-r[_ngcontent-%COMP%]{border-right:2px solid #ffffff}.b-b[_ngcontent-%COMP%]{border-bottom:2px solid #ffffff}.b-l[_ngcontent-%COMP%]{border-left:2px solid #ffffff}.clear[_ngcontent-%COMP%]{background-color:#c9c6d0}.flex-3[_ngcontent-%COMP%]{flex:3}.flex-1[_ngcontent-%COMP%]{flex:1}.flex-custom[_ngcontent-%COMP%]{flex:.52}"]})}return o})()}]);let $=(()=>{class o{static#e=this.\u0275fac=function(l){return new(l||o)};static#t=this.\u0275mod=e.oAB({type:o});static#n=this.\u0275inj=e.cJS({imports:[s.ez,p.Bz,g.I,C.m,f.ThemesModule,R]})}return o})()}}]);