import{a as M}from"./chunk-JWLMFWVN.js";import{a as C}from"./chunk-VOGP6IXP.js";import{Aa as F,Ca as l,Da as m,Ea as _,Fa as u,Ga as s,Ha as o,Ia as T,Ja as Q,La as b,Ma as c,Pa as J,Qa as S,Ra as g,Sa as p,T as h,Ta as w,Ua as x,Va as A,Wa as E,Za as D,qa as n,ra as q,xb as I,ya as y,za as f}from"./chunk-NBPZEFZV.js";var $=["qusContainerRef"];function k(e,i){if(e&1&&(s(0,"div",10),p(1),o()),e&2){let t=c().$implicit;n(),x(" - ",t.data," ")}}function R(e,i){if(e&1&&(s(0,"li"),p(1),o()),e&2){let t=i.$implicit;n(),w(t)}}function j(e,i){if(e&1&&(s(0,"ul",11),_(1,R,2,1,"li",null,m),o()),e&2){let t=c().$implicit;n(),u(t.data)}}function B(e,i){if(e&1&&(s(0,"code")(1,"pre"),p(2),o()()),e&2){let t=c().$implicit;n(2),x("                    ",t.data,`
                `)}}function P(e,i){if(e&1&&f(0,k,2,1,"div",8)(1,j,3,0,"ul",9)(2,B,3,1,"code"),e&2){let t=i.$implicit;l(0,t.dataType=="paragraph"?0:-1),n(),l(1,t.dataType=="list"?1:-1),n(),l(2,t.dataType=="code"?2:-1)}}function V(e,i){if(e&1&&(s(0,"div",5)(1,"div",6),p(2),o(),s(3,"div",7),_(4,P,3,3,null,null,m),o()()),e&2){let t=c().$implicit;n(),F("id","question-"+t.id),n(),A("",t.id,". ",t.qus,""),n(2),u(t.ans)}}function H(e,i){e&1&&T(0,"hr",12)}function O(e,i){if(e&1&&f(0,V,6,3,"div",3)(1,H,1,0,"hr",4),e&2){let t=i.$implicit;l(0,t.visibility?0:-1),n(),l(1,t.length!=t.id&&t.visibility?1:-1)}}var Y=(()=>{let i=class i{constructor(r){this.commonService=r,this.dataQusAns=[],this.qusAloneData=[],this.getQusAnsJsonData()}getQusAnsJsonData(){this.commonService.getData("./assets/jsQus.json").subscribe(r=>{this.dataQusAns=r,this.dataQusAns.forEach(a=>{this.qusAloneData.push(a.qus),a.visibility="ans"in a})})}getQusModal(){this.qusContainer.clear(),this.qusComponent=this.qusContainer.createComponent(M),this.qusComponent.instance.isComponentReady.subscribe(()=>{this.qusComponent.instance.openQusModal("Javascript",this.qusAloneData)})}};i.\u0275fac=function(a){return new(a||i)(q(C))},i.\u0275cmp=h({type:i,selectors:[["app-javascript"]],viewQuery:function(a,d){if(a&1&&J($,5,y),a&2){let v;S(v=g())&&(d.qusContainer=v.first)}},standalone:!0,features:[E([C]),D],decls:6,vars:0,consts:[[1,"question-contented-area"],[1,"secrat-box",3,"click"],["qusContainerRef",""],["class","question-answer p-3"],["class","m-0"],[1,"question-answer","p-3"],[1,"question"],[1,"answer"],["class","ans"],["class","mb-0"],[1,"ans"],[1,"mb-0"],[1,"m-0"]],template:function(a,d){a&1&&(s(0,"div",0)(1,"div",1),b("click",function(){return d.getQusModal()}),o(),_(2,O,2,2,null,null,m),o(),Q(4,null,2)),a&2&&(n(2),u(d.dataQusAns))},dependencies:[I],styles:[".secrat-box[_ngcontent-%COMP%]{width:20px;height:20px;position:absolute}"]});let e=i;return e})();export{Y as JavascriptComponent};
