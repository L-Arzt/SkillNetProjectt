"use strict";(()=>{var e={};e.id=278,e.ids=[278],e.modules={53524:e=>{e.exports=require("@prisma/client")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},26879:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>l,originalPathname:()=>x,patchFetch:()=>P,requestAsyncStorage:()=>d,routeModule:()=>u,serverHooks:()=>m,staticGenerationAsyncStorage:()=>c,staticGenerationBailout:()=>h});var a={};r.r(a),r.d(a,{PATCH:()=>p});var o=r(95419),i=r(69108),n=r(99678),s=r(53524);async function p(e){let t=Object.fromEntries(await e.formData());console.log(t);let r=new s.PrismaClient;return await r.course.update({data:{name:t.name,topic:t.topic,description:t.description,author:t.author,peopleMax:parseInt(t.maxPeople),price:parseInt(t.price)},where:{id:parseInt(t.id)}})?Response.json({result:"OK"}):Response.json({result:"fail"})}let u=new o.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/admin/rooms/update/route",pathname:"/api/admin/rooms/update",filename:"route",bundlePath:"app/api/admin/rooms/update/route"},resolvedPagePath:"/Users/der/Documents/SkillNetProject/app/api/admin/rooms/update/route.js",nextConfigOutput:"",userland:a}),{requestAsyncStorage:d,staticGenerationAsyncStorage:c,serverHooks:m,headerHooks:l,staticGenerationBailout:h}=u,x="/api/admin/rooms/update/route";function P(){return(0,n.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:c})}},95419:(e,t,r)=>{e.exports=r(30517)}};var t=require("../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[638],()=>r(26879));module.exports=a})();