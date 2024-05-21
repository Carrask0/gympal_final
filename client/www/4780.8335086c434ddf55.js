"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4780],{4780:(x,c,n)=>{n.r(c),n.d(c,{EstadisticasEjercicioPage:()=>_});var e=n(4496),l=n(1368),p=n(4716),d=n(1956),h=n(764),g=n(7476),E=n(740),C=n(4848),m=n(36);function u(i,r){if(1&i&&(e.I0R(0,"div",13),e.wR5(1,"canvas",14),e.I0R(2,"p",6),e.OEk(3,"Repeticion m\xe1xima"),e.C$Y()()),2&i){const a=e.GaO();e.yG2(),e.E7m("type","line")("data",a.repMaxLineChart)("options",a.lineChartOptions)("legend",a.lineChartLegend)}}function v(i,r){if(1&i&&(e.I0R(0,"div",13),e.wR5(1,"canvas",14),e.I0R(2,"p",6),e.OEk(3,"Peso efectivo"),e.C$Y()()),2&i){const a=e.GaO();e.yG2(),e.E7m("type","line")("data",a.pesoEfectivoLineChart)("options",a.lineChartOptions)("legend",a.lineChartLegend)}}function f(i,r){if(1&i&&(e.I0R(0,"div",13),e.wR5(1,"canvas",14),e.I0R(2,"p",5),e.OEk(3,"Volumen por sesi\xf3n"),e.C$Y()()),2&i){const a=e.GaO();e.yG2(),e.E7m("type","line")("data",a.volumenTotalLineChart)("options",a.lineChartOptions)("legend",a.lineChartLegend)}}let _=(()=>{var i;class r{getTotalVolume(s){return s?s.volumenTotal.reduce((t,o)=>t+o.value,0):0}onClickBack(){this.repositoryService.dumpExerciseId(),this.router.navigate(["/estadisticas"])}transformData(s,t){let o=[{name:t,series:s}];return console.log(o),o}constructor(s){this.router=s,this.repositoryService=(0,e.uUt)(C.g),this.totalVolume=0,this.expectedMax=0,this.exercise={},this.repMaxLineChart={labels:[],datasets:[{data:[],label:"Repeticion m\xe1xima",fill:!1,tension:.5,borderColor:"#39AFAC",backgroundColor:"#39AFAC"}]},this.pesoEfectivoLineChart={labels:[],datasets:[{data:[],label:"Peso efectivo",fill:!1,tension:.5,borderColor:"#39AFAC",backgroundColor:"#39AFAC"}]},this.volumenTotalLineChart={labels:[],datasets:[{data:[],label:"Total volume",fill:!1,tension:.5,borderColor:"#39AFAC",backgroundColor:"#39AFAC"}]},this.lineChartOptions={scales:{y:{suggestedMin:0}},responsive:!1},this.lineChartLegend=!1,(0,g.a)({arrowBack:E.wvf})}ngOnInit(){let s=this.repositoryService.getExerciseId();this.repositoryService.getExercise(s).subscribe(t=>{this.exercise=t,console.log(this.exercise),this.totalVolume=this.getTotalVolume(this.exercise),this.expectedMax=120,this.repMaxLineChart.datasets[0].data=this.exercise.repeticionMaxima.map(o=>Number(o.value)),this.repMaxLineChart.labels=Array(this.exercise.repeticionMaxima.length).fill(""),console.log(this.repMaxLineChart.datasets[0].data),this.pesoEfectivoLineChart.datasets[0].data=this.exercise.pesoEfectivo.map(o=>Number(o.value)),this.pesoEfectivoLineChart.labels=Array(this.exercise.pesoEfectivo.length).fill(""),console.log(this.pesoEfectivoLineChart.datasets[0].data),this.volumenTotalLineChart.datasets[0].data=this.exercise.volumenTotal.map(o=>Number(o.value)),this.volumenTotalLineChart.labels=Array(this.exercise.volumenTotal.length).fill(""),console.log(this.volumenTotalLineChart.datasets[0].data)})}}return(i=r).\u0275fac=function(s){return new(s||i)(e.GI1(m.E5))},i.\u0275cmp=e.In1({type:i,selectors:[["app-estadisticas-ejercicio"]],standalone:!0,features:[e.UHJ],decls:24,vars:7,consts:[[3,"fullscreen"],[1,"page"],[1,"arrow-back-area"],["src","assets/icons/arrow-back.svg","alt","Arrow Back",1,"arrow-back",3,"click"],[1,"ejercicio-main-content"],[1,"text-white"],[1,"text-title-white"],[1,"ejercicio-stats"],[1,"ejercicio-stats-item"],[1,"ejercicio-stats-value"],[1,"ejercicio-stats-label"],["style","display: block;","class","graph-container","style","display: block;",4,"ngIf"],["class","graph-container","style","display: block;",4,"ngIf"],[1,"graph-container",2,"display","block"],["baseChart","","width","350","height","100",3,"type","data","options","legend"]],template:function(s,t){1&s&&(e.I0R(0,"ion-content",0)(1,"div",1)(2,"div",2)(3,"img",3),e.qCj("click",function(){return t.onClickBack()}),e.C$Y()(),e.I0R(4,"div",4)(5,"p",5),e.OEk(6,"Estadisticas"),e.C$Y(),e.I0R(7,"p",6),e.OEk(8),e.C$Y(),e.I0R(9,"div",7)(10,"div",8)(11,"p",9),e.OEk(12),e.C$Y(),e.I0R(13,"p",10),e.OEk(14,"Kgs movidos"),e.C$Y()(),e.I0R(15,"div",8)(16,"p",9),e.OEk(17),e.C$Y(),e.I0R(18,"p",10),e.OEk(19,"M\xe1xima esperada"),e.C$Y()()(),e.I0R(20,"div"),e.yuY(21,u,4,4,"div",11)(22,v,4,4,"div",12)(23,f,4,4,"div",12),e.C$Y()()()()),2&s&&(e.E7m("fullscreen",!0),e.yG2(8),e.cNF(t.exercise.name),e.yG2(4),e.cNF(t.totalVolume),e.yG2(5),e.oRS("",t.expectedMax,"kgs"),e.yG2(4),e.E7m("ngIf",t.repMaxLineChart&&t.repMaxLineChart.datasets[0].data.length>0),e.yG2(),e.E7m("ngIf",t.pesoEfectivoLineChart&&t.pesoEfectivoLineChart.datasets[0].data.length>0),e.yG2(),e.E7m("ngIf",t.volumenTotalLineChart&&t.volumenTotalLineChart.datasets[0].data.length>0))},dependencies:[d.wZ,d._i,l.MD,l.u_,p.y,h.YR],styles:[".ejercicio-main-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:20px}.ejercicio-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.ejercicio-stats[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;align-items:center;margin-top:20px;width:90vw}.ejercicio-stats-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.ejercicio-stats-value[_ngcontent-%COMP%]{font-size:1.5em;font-weight:700;color:var(--teal500);padding:0;margin:0}.ejercicio-stats-label[_ngcontent-%COMP%]{font-size:1em;color:#fff}.graph-container[_ngcontent-%COMP%]{margin-top:20px;display:flex;flex-direction:column;justify-content:center;align-items:center}.graph-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font-size:1em}"]}),r})()}}]);