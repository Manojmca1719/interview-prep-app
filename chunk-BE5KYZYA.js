import{a as M}from"./chunk-LI6RSAV7.js";import{a as v}from"./chunk-SAUTWDEZ.js";import{$a as $,Da as f,Ea as Q,Ga as c,Ha as _,Ia as u,Ja as C,Ka as r,La as o,Ma as J,Na as b,Oa as g,Pa as S,Qa as l,Ta as w,Ua as A,V as h,Va as E,Wa as p,Xa as D,Ya as x,Za as I,ab as k,ba as y,ca as q,ra as n,sa as F,ya as T}from"./chunk-TNPYSMCI.js";var R=["qusContainerRef"];function V(e,i){if(e&1&&(r(0,"div",7),p(1),o()),e&2){let t=l().$implicit;n(),x(" - ",t.data," ")}}function j(e,i){if(e&1&&(r(0,"li"),p(1),o()),e&2){let t=i.$implicit;n(),D(t)}}function B(e,i){if(e&1&&(r(0,"ul",8),u(1,j,2,1,"li",null,_),o()),e&2){let t=l().$implicit;n(),C(t.data)}}function P(e,i){if(e&1&&(r(0,"code")(1,"pre"),p(2),o()()),e&2){let t=l().$implicit;n(2),x("                    ",t.data,`
                `)}}function O(e,i){if(e&1&&f(0,V,2,1,"div",7)(1,B,3,0,"ul",8)(2,P,3,1,"code"),e&2){let t=i.$implicit;c(t.dataType=="paragraph"?0:-1),n(),c(t.dataType=="list"?1:-1),n(),c(t.dataType=="code"?2:-1)}}function z(e,i){if(e&1&&(r(0,"div",3)(1,"div",5),p(2),o(),r(3,"div",6),u(4,O,3,3,null,null,_),o()()),e&2){let t=l().$implicit;n(),Q("id","question-"+t.id),n(),I("",t.id,". ",t.qus,""),n(2),C(t.ans)}}function G(e,i){e&1&&J(0,"hr",4)}function H(e,i){if(e&1&&f(0,z,6,3,"div",3)(1,G,1,0,"hr",4),e&2){let t=i.$implicit;c(t.visibility?0:-1),n(),c(t.length!=t.id&&t.visibility?1:-1)}}var ee=(()=>{let i=class i{constructor(s){this.commonService=s,this.dataQusAns=[],this.qusAloneData=[],this.getQusAnsJsonData()}getQusAnsJsonData(){this.commonService.getData("./assets/jsQus.json").subscribe(s=>{this.dataQusAns=s,this.dataQusAns.forEach(a=>{this.qusAloneData.push(a.qus),a.visibility="ans"in a})})}getQusModal(){this.qusContainer.clear(),this.qusComponent=this.qusContainer.createComponent(M),this.qusComponent.instance.isComponentReady.subscribe(()=>{this.qusComponent.instance.openQusModal("Javascript",this.qusAloneData)})}};i.\u0275fac=function(a){return new(a||i)(F(v))},i.\u0275cmp=h({type:i,selectors:[["app-javascript"]],viewQuery:function(a,d){if(a&1&&w(R,5,T),a&2){let m;A(m=E())&&(d.qusContainer=m.first)}},standalone:!0,features:[$([v]),k],decls:6,vars:0,consts:[["qusContainerRef",""],[1,"question-contented-area"],[1,"secrat-box",3,"click"],[1,"question-answer","p-3"],[1,"m-0"],[1,"question"],[1,"answer"],[1,"ans"],[1,"mb-0"]],template:function(a,d){if(a&1){let m=g();r(0,"div",1)(1,"div",2),S("click",function(){return y(m),q(d.getQusModal())}),o(),u(2,H,2,2,null,null,_),o(),b(4,null,0)}a&2&&(n(2),C(d.dataQusAns))},styles:[".secrat-box[_ngcontent-%COMP%]{width:20px;height:20px;position:absolute}"]});let e=i;return e})();export{ee as JavascriptComponent};