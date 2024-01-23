import './polyfills.server.mjs';
import{A as I,C as F,D as O,E as P,F as D,G as H,J as j,N as A,Q as B,R,S as z,a as _,b as L,c as d,d as w,e as M,f as m,g as f,h as T,i as v,j as k,k as u,l as S,m as g,n as e,o as t,p,q as E,r as i,s,t as c}from"./chunk-2HPCOBBT.mjs";var $=(()=>{let n=class n{constructor(){this.title="CicketApp"}};n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=d({type:n,selectors:[["app-root"]],standalone:!0,features:[c],decls:35,vars:0,consts:[[1,"bg-blue-500","p-4","text-white"],[1,"container","mx-auto","flex","justify-between","items-center"],[1,"text-2xl","font-bold"],[1,"hidden","md:flex","space-x-4"],["routerLink","/home",1,"hover:text-gray-300"],["routerLink","/live",1,"hover:text-gray-300"],["routerLink","/points-table",1,"hover:text-gray-300"],["routerLink","/history",1,"hover:text-gray-300"],[1,"md:hidden"],["id","menu-toggle",1,"text-white","focus:outline-none"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"h-6","w-6"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M4 6h16M4 12h16m-7 6h7"],["id","mobile-menu",1,"md:hidden","fixed","inset-0","bg-blue-500","bg-opacity-75","z-50","hidden"],[1,"flex","justify-end","p-4"],["id","close-menu",1,"text-white","focus:outline-none"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M6 18L18 6M6 6l12 12"],[1,"flex","flex-col","items-center"],["routerLink","/home",1,"text-white","py-2","hover:text-gray-300"],["routerLink","/live",1,"text-white","py-2","hover:text-gray-300"],["routerLink","/points-table",1,"text-white","py-2","hover:text-gray-300"],["routerLink","/history",1,"text-white","py-2","hover:text-gray-300"],[1,"px-5","py-8"]],template:function(o,x){o&1&&(e(0,"header",0)(1,"div",1)(2,"div")(3,"h1",2),i(4,"CrickInformer"),t()(),e(5,"nav",3)(6,"a",4),i(7,"Home"),t(),e(8,"a",5),i(9,"Live Matches"),t(),e(10,"a",6),i(11,"Points Table"),t(),e(12,"a",7),i(13,"History"),t()(),p(14,"div"),e(15,"div",8)(16,"button",9),w(),e(17,"svg",10),p(18,"path",11),t()()()()(),M(),e(19,"div",12)(20,"div",13)(21,"button",14),w(),e(22,"svg",10),p(23,"path",15),t()()(),M(),e(24,"div",16)(25,"a",17),i(26,"Home"),t(),e(27,"a",18),i(28,"Live"),t(),e(29,"a",19),i(30,"Points Table"),t(),e(31,"a",20),i(32,"History"),t()()(),e(33,"div",21),p(34,"router-outlet"),t())},dependencies:[A,z,B]});let r=n;return r})();var U=(()=>{let n=class n{};n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=d({type:n,selectors:[["app-home"]],standalone:!0,features:[c],decls:47,vars:0,consts:[[1,"container","m-2","mt-8","grid","gap-5","grid-cols-1","sm:grid-cols-2","md:grid-cols-3","lg:grid-cols-2","xl:grid-cols-3"],[1,"max-w-md","bg-white","rounded","overflow-hidden","shadow-lg"],[1,"max-w-md","bg-white","rounded-lg","overflow-hidden","shadow-md"],[1,"bg-blue-500","text-white","px-6","py-4"],[1,"text-xl","font-semibold"],[1,"text-sm"],[1,"px-6","py-4"],[1,"flex","justify-between","mb-4"],[1,"text-gray-600"],[1,"text-2xl","font-semibold","text-blue-500"],[1,"flex","justify-between"],[1,"text-gray-700"]],template:function(o,x){o&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2",4),i(5,"Cricket Match"),t(),e(6,"p",5),i(7,"Team A vs Team B"),t()(),e(8,"div",6)(9,"div",7)(10,"div",8),i(11,"Team A"),t(),e(12,"div",9),i(13,"120/5"),t()(),e(14,"div",10)(15,"div",8),i(16,"Team B"),t(),e(17,"div",9),i(18,"130/3"),t()()(),e(19,"div",6)(20,"p",11),i(21,"Overs: 15"),t(),e(22,"p",11),i(23,"Result: Team B won by 10 runs"),t()()()(),e(24,"div",1)(25,"div",2)(26,"div",3)(27,"h2",4),i(28,"Cricket Match"),t(),e(29,"p",5),i(30,"Team A vs Team B"),t()(),e(31,"div",6)(32,"div",7)(33,"div",8),i(34,"Team A"),t(),e(35,"div",9),i(36,"120/5"),t()(),e(37,"div",10)(38,"div",8),i(39,"Team B"),t(),e(40,"div",9),i(41,"130/3"),t()()(),e(42,"div",6)(43,"p",11),i(44,"Overs: 15"),t(),e(45,"p",11),i(46,"Result: Team B won by 10 runs"),t()()()()())}});let r=n;return r})();function Q(r,n){if(r&1&&(e(0,"p",12),i(1),t()),r&2){let l=E(2);m(),s(l.match.liveText)}}function X(r,n){if(r&1&&(e(0,"p",13),i(1),t()),r&2){let l=E(2);m(),s(l.match.textComplete)}}function Y(r,n){if(r&1&&(e(0,"div",1)(1,"div",2)(2,"div",3)(3,"p"),i(4),t(),e(5,"h2",4),i(6),t(),e(7,"p",5),i(8),t()(),e(9,"div",6)(10,"div",7)(11,"div",8),i(12),t(),e(13,"div",9),i(14),t()(),e(15,"div",10)(16,"div",8),i(17),t(),e(18,"div",9),i(19),t()()(),e(20,"div",6),T(21,Q,2,1,"p",11)(22,X,2,1),t()()()),r&2){let l=E();m(4),s(l.match.status),m(2),s(l.match.teamHeading),m(2),s(l.match.matchNumberVenue),m(4),s(l.match.battingTeam),m(2),s(l.match.battingTeamScore),m(3),s(l.match.bowlTeam),m(2),s(l.match.bowlTeamScore),m(2),k(21,l.match.status=="LIVE"?21:22)}}var b=(()=>{let n=class n{};n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=d({type:n,selectors:[["app-match-card"]],inputs:{match:"match"},standalone:!0,features:[c],decls:1,vars:1,consts:[["class",`cursor-pointer
max-w-md bg-white rounded overflow-hidden shadow-lg`],[1,"cursor-pointer","max-w-md","bg-white","rounded","overflow-hidden","shadow-lg"],[1,"hover:bg-gray-200","max-w-md","bg-white","rounded-lg","overflow-hidden","shadow-md"],[1,"bg-blue-500","px-6","py-4"],[1,"text-xl","text-white","font-semibold"],[1,"text-sm","text-gray-100"],[1,"px-6","py-4"],[1,"flex","justify-between","mb-4"],[1,"text-gray-600"],[1,"text-1xl","font-semibold","text-blue-500"],[1,"flex","justify-between"],["class","text-red-600"],[1,"text-red-600"],[1,"text-green-500"]],template:function(o,x){o&1&&T(0,Y,23,8,"div",0),o&2&&k(0,x.match?0:-1)}});let r=n;return r})();var y={apiUrl:"http://localhost:8081"};var C=(()=>{let n=class n{constructor(a){this.http=a}getAllMatches(){return this.http.get(`${y.apiUrl}/match/allmatches`)}getLiveMatches(){return this.http.get(`${y.apiUrl}/match/live`)}getPointsTable(){return this.http.get(`${y.apiUrl}/match/pointstable`)}};n.\u0275fac=function(o){return new(o||n)(L(F))},n.\u0275prov=_({token:n,factory:n.\u0275fac,providedIn:"root"});let r=n;return r})();function Z(r,n){if(r&1&&(e(0,"div",3),p(1,"app-match-card",4),t()),r&2){let l=n.$implicit;m(),v("match",l)}}function ee(r,n){r&1&&i(0," there is no match ")}var G=(()=>{let n=class n{constructor(a){this._api=a,this.allMatches=[]}ngOnInit(){this._api.getAllMatches().subscribe({next:a=>{this.allMatches=a,console.log(this.allMatches)}})}};n.\u0275fac=function(o){return new(o||n)(f(C))},n.\u0275cmp=d({type:n,selectors:[["app-history"]],standalone:!0,features:[c],decls:7,vars:1,consts:[[1,""],[1,"text-2xl","font-extrabold","text-gray-800"],[1,"container","m-2","mt-8","grid","gap-5","grid-cols-1","sm:grid-cols-2","md:grid-cols-3","lg:grid-cols-2","xl:grid-cols-3"],[1,"m-2","w-[100%]"],[3,"match"],["class","m-2 w-[100%]"]],template:function(o,x){o&1&&(e(0,"div",0)(1,"h1",1),i(2,"All Matches"),t(),e(3,"div",2),S(4,Z,2,1,"div",5,u,!1,ee,1,0),t()()),o&2&&(m(4),g(x.allMatches))},dependencies:[b]});let r=n;return r})();function te(r,n){if(r&1&&(e(0,"div",3),p(1,"app-match-card",4),t()),r&2){let l=n.$implicit;m(),v("match",l)}}function ie(r,n){r&1&&i(0," there is no match ")}var N=(()=>{let n=class n{constructor(a){this.apiService=a,this.liveMatches=[]}ngOnInit(){this.loadLiveMatchesData()}loadLiveMatchesData(){this.apiService.getLiveMatches().subscribe(a=>{console.log(a),this.liveMatches=a})}};n.\u0275fac=function(o){return new(o||n)(f(C))},n.\u0275cmp=d({type:n,selectors:[["app-live"]],standalone:!0,features:[c],decls:7,vars:1,consts:[[1,""],[1,"text-2xl","font-extrabold","text-gray-800"],[1,"card-container","flex-col","md:flex-row","flex"],[1,"m-2","w-[100%]"],[3,"match"],["class","m-2 w-[100%]"]],template:function(o,x){o&1&&(e(0,"div",0)(1,"h1",1),i(2,"Live Cricket Score"),t(),e(3,"div",2),S(4,te,2,1,"div",5,u,!1,ie,1,0),t()()),o&2&&(m(4),g(x.liveMatches))},dependencies:[b]});let r=n;return r})();var W=(()=>{let n=class n{};n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=d({type:n,selectors:[["app-point-table"]],standalone:!0,features:[c],decls:140,vars:0,consts:[[1,"container","mx-auto"],[1,"overflow-x-auto"],[1,"w-full"],[1,"py-2","px-4","bg-blue-500"],[1,"highlight-green"],[1,"py-2","px-4"],[1,"highlight-red"]],template:function(o,x){o&1&&(e(0,"div",0)(1,"div",1)(2,"table",2)(3,"thead")(4,"tr")(5,"th",3),i(6,"Team"),t(),e(7,"th",3),i(8,"Matches"),t(),e(9,"th",3),i(10,"Won"),t(),e(11,"th",3),i(12,"Lost"),t(),e(13,"th",3),i(14,"Tied"),t(),e(15,"th",3),i(16,"NRR"),t(),e(17,"th",3),i(18,"Points"),t()()(),e(19,"tbody")(20,"tr",4)(21,"td",5),i(22,"Team 1"),t(),e(23,"td",5),i(24,"10"),t(),e(25,"td",5),i(26,"7"),t(),e(27,"td",5),i(28,"2"),t(),e(29,"td",5),i(30,"1"),t(),e(31,"td",5),i(32,"+0.5"),t(),e(33,"td",5),i(34,"14"),t()(),e(35,"tr",4)(36,"td",5),i(37,"Team 2"),t(),e(38,"td",5),i(39,"10"),t(),e(40,"td",5),i(41,"6"),t(),e(42,"td",5),i(43,"3"),t(),e(44,"td",5),i(45,"1"),t(),e(46,"td",5),i(47,"+0.3"),t(),e(48,"td",5),i(49,"13"),t()(),e(50,"tr",4)(51,"td",5),i(52,"Team 3"),t(),e(53,"td",5),i(54,"10"),t(),e(55,"td",5),i(56,"6"),t(),e(57,"td",5),i(58,"3"),t(),e(59,"td",5),i(60,"1"),t(),e(61,"td",5),i(62,"+0.2"),t(),e(63,"td",5),i(64,"13"),t()(),e(65,"tr",4)(66,"td",5),i(67,"Team 4"),t(),e(68,"td",5),i(69,"10"),t(),e(70,"td",5),i(71,"5"),t(),e(72,"td",5),i(73,"4"),t(),e(74,"td",5),i(75,"1"),t(),e(76,"td",5),i(77,"-0.1"),t(),e(78,"td",5),i(79,"11"),t()(),e(80,"tr",6)(81,"td",5),i(82,"Team 5"),t(),e(83,"td",5),i(84,"10"),t(),e(85,"td",5),i(86,"4"),t(),e(87,"td",5),i(88,"5"),t(),e(89,"td",5),i(90,"1"),t(),e(91,"td",5),i(92,"-0.5"),t(),e(93,"td",5),i(94,"9"),t()(),e(95,"tr",6)(96,"td",5),i(97,"Team 6"),t(),e(98,"td",5),i(99,"10"),t(),e(100,"td",5),i(101,"3"),t(),e(102,"td",5),i(103,"6"),t(),e(104,"td",5),i(105,"1"),t(),e(106,"td",5),i(107,"-0.3"),t(),e(108,"td",5),i(109,"7"),t()(),e(110,"tr",6)(111,"td",5),i(112,"Team 7"),t(),e(113,"td",5),i(114,"10"),t(),e(115,"td",5),i(116,"2"),t(),e(117,"td",5),i(118,"7"),t(),e(119,"td",5),i(120,"1"),t(),e(121,"td",5),i(122,"-0.6"),t(),e(123,"td",5),i(124,"5"),t()(),e(125,"tr",6)(126,"td",5),i(127,"Team 8"),t(),e(128,"td",5),i(129,"10"),t(),e(130,"td",5),i(131,"1"),t(),e(132,"td",5),i(133,"8"),t(),e(134,"td",5),i(135,"1"),t(),e(136,"td",5),i(137,"-0.8"),t(),e(138,"td",5),i(139,"3"),t()()()()()())},styles:[".container[_ngcontent-%COMP%]{margin:5% auto}table[_ngcontent-%COMP%]{width:96%;min-height:500px;border-collapse:collapse;margin-top:20px;margin-left:2%;overflow:hidden;box-shadow:0 0 5% #0000001a;background-color:#fff;border-radius:10px}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:1% 1.5%;text-align:left;border-bottom:1.5px solid #ddd}th[_ngcontent-%COMP%]{font-size:80%;color:#fff;height:40px}tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f5f5f5}td[_ngcontent-%COMP%]:nth-child(7){font-size:130%}td[_ngcontent-%COMP%]:nth-child(1){color:#000;font-size:120%}tr.highlight-green[_ngcontent-%COMP%]{font-size:80%;background-color:#3ccf3c;color:#fff}tr.highlight-red[_ngcontent-%COMP%]{font-size:80%;background-color:#b56861;color:#fff}"]});let r=n;return r})();var q=[{path:"home",component:U},{path:"history",component:G},{path:"live",component:N},{path:"points-table",component:W}];var J={providers:[O(P()),R(q),H()]};var ne={providers:[j()]},K=I(J,ne);var re=()=>D($,K),He=re;export{He as a};
