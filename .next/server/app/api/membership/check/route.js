"use strict";(()=>{var e={};e.id=446,e.ids=[446],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},6113:e=>{e.exports=require("crypto")},1605:(e,r,a)=>{a.r(r),a.d(r,{originalPathname:()=>h,patchFetch:()=>w,requestAsyncStorage:()=>p,routeModule:()=>m,serverHooks:()=>l,staticGenerationAsyncStorage:()=>d});var t={};a.r(t),a.d(t,{POST:()=>c});var s=a(9303),n=a(8716),i=a(670),o=a(7070),u=a(3287);async function c(e){let r=await e.json().catch(()=>null),a=r?.email??"";return a?o.NextResponse.json({ok:!0,exists:await (0,u.pI)(a)}):o.NextResponse.json({ok:!1,error:"Missing email"},{status:400})}let m=new s.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/membership/check/route",pathname:"/api/membership/check",filename:"route",bundlePath:"app/api/membership/check/route"},resolvedPagePath:"/workspaces/Farmers-trustees-trust-platform/src/app/api/membership/check/route.ts",nextConfigOutput:"",userland:t}),{requestAsyncStorage:p,staticGenerationAsyncStorage:d,serverHooks:l}=m,h="/api/membership/check/route";function w(){return(0,i.patchFetch)({serverHooks:l,staticGenerationAsyncStorage:d})}},8784:(e,r,a)=>{a.d(r,{z:()=>i});let t=require("pg"),{Pool:s}=a.n(t)(),n=new s({connectionString:process.env.DATABASE_URL,max:5});async function i(){return n}},3287:(e,r,a)=>{a.d(r,{Rt:()=>o,o1:()=>i,pI:()=>n});var t=a(8691),s=a(8784);async function n(e){let r=await (0,s.z)();return((await r.query("select 1 from membership_accounts where email = $1 limit 1",[e.trim().toLowerCase()])).rowCount??0)>0}async function i(e){let r=await (0,s.z)(),a=await t.ZP.hash(e.password,12),n=e.email.trim().toLowerCase();return(await r.query(`insert into membership_accounts
     (category, email, name, username, number, address, password_hash)
     values ($1,$2,$3,$4,$5,$6,$7)
     returning id, category, email, name, username, number, address, password_hash as passwordHash, created_at as createdAt`,[e.category,n,e.name,e.username,e.number,e.address,a])).rows[0]}async function o(e){let r=await (0,s.z)();return(await r.query(`select id,
            category,
            email,
            name,
            username,
            number,
            address,
            password_hash as passwordHash,
            created_at as createdAt
     from membership_accounts
     where email = $1
     limit 1`,[e.trim().toLowerCase()])).rows[0]??null}}};var r=require("../../../../webpack-runtime.js");r.C(e);var a=e=>r(r.s=e),t=r.X(0,[948,972,691],()=>a(1605));module.exports=t})();