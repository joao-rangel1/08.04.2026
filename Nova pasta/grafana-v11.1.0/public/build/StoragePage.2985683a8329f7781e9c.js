"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1927],{68932:(Q,W,n)=>{n.r(W),n.d(W,{default:()=>Ie});var i=n(32196),e=n(96540),$=n(16817),j=n(14236),H=n(12131),I=n(40845),K=n(62930),D=n(42418),z=n(90613),U=n(8984),s=n(67061),c=n(55852),P=n(63021),A=n(40675),N=n(28138),O=n(67608),X=n(25249),k=n(28444);function q({onPathChange:t}){return e.createElement("div",null,e.createElement("div",null,"TODO... Add ROOT"),e.createElement(c.$n,{variant:"secondary",onClick:()=>t("/")},"Cancel"))}var V=n(2543),Z=n(14578);function _({pathName:t,onPathChange:r,rootIcon:m}){const a=(0,I.of)(ee),o=t.split("/").filter(Boolean);return e.createElement("ul",{className:a.breadCrumb},m&&e.createElement("li",null,e.createElement(Z.I,{name:m,onClick:()=>r("")})),o.map((l,F)=>{let g="/"+o.slice(0,F+1).join("/");const p=()=>r(g),x=F===o.length-1;return e.createElement("li",{key:(0,V.uniqueId)(l),onClick:x?void 0:p},l)}))}function ee(t){return{breadCrumb:(0,i.css)`
      list-style: none;
      padding: ${t.spacing(2,1)};

      li {
        display: inline;

        :not(:last-child) {
          color: ${t.colors.text.link};
          cursor: pointer;
        }
        + li:before {
          content: '>';
          padding: ${t.spacing(1)};
          color: ${t.colors.text.secondary};
        }
      }
    `}}var G=n(37390),te=n(88575),ne=n(10354),ae=n(72235);const re={folderName:""};function se({validate:t,onDismiss:r,onSubmit:m}){return e.createElement(G.a,{onDismiss:r,isOpen:!0,title:"New Folder"},e.createElement(ae.l,{defaultValues:re,onSubmit:m,maxWidth:"none"},({register:a,errors:o})=>e.createElement(e.Fragment,null,e.createElement(te.D,{label:"Folder name",invalid:!!o.folderName,error:o.folderName&&o.folderName.message},e.createElement(ne.p,{id:"folder-name-input",...a("folderName",{required:"Folder name is required.",validate:{validate:t}})})),e.createElement(G.a.ButtonRow,null,e.createElement(c.$n,{type:"submit"},"Create")))))}var J=n(70713),oe=n(32372),le=n(47694),b=n(53652),C=(t=>(t.Data="data",t.Config="config",t.Perms="perms",t.History="history",t.AddRoot="add",t))(C||{}),ie=(t=>(t.Save="save",t.PR="pr",t.Push="push",t))(ie||{});function ce({listing:t,path:r,onPathChange:m,view:a}){const o=(0,I.of)(ue),l=(0,e.useMemo)(()=>de(r),[r]),F=(0,$.A)(async()=>{if(l.category==="text"){const p=await(0,b.o)().get(r);return(0,V.isString)(p)?p:JSON.stringify(p,null,2)}return null},[l,r]);switch(a){case C.Config:return e.createElement("div",null,"CONFIGURE?");case C.Perms:return e.createElement("div",null,"Permissions");case C.History:return e.createElement("div",null,"TODO... history")}let g=`api/storage/read/${r}`;switch(g.endsWith("/")&&(g=g.substring(0,g.length-1)),l.category){case"svg":return e.createElement("div",null,e.createElement(le.y,{src:g,className:o.icon}));case"image":return e.createElement("div",null,e.createElement("a",{target:"_self",href:g},e.createElement("img",{src:g,alt:"File preview",className:o.img})));case"text":return e.createElement("div",{className:o.tableWrapper},e.createElement(J.Ay,null,({width:p,height:x})=>e.createElement(oe.B,{width:p,height:x,value:F.value??"",showLineNumbers:!1,readOnly:!0,language:l.language??"text",showMiniMap:!1,onBlur:h=>{console.log("CHANGED!",h)}})))}return e.createElement("div",null,"FILE: ",e.createElement("a",{href:g},r))}function de(t){const r=t.lastIndexOf(".");if(r<0)return{};switch(t.substring(r+1).toLowerCase()){case"svg":return{category:"svg"};case"jpg":case"jpeg":case"png":case"webp":case"gif":return{category:"image"};case"geojson":case"json":return{category:"text",language:"json"};case"text":case"go":case"md":return{category:"text"}}return{}}const ue=t=>({wrapper:(0,i.css)`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,tableControlRowWrapper:(0,i.css)`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: ${t.spacing(2)};
  `,tableWrapper:(0,i.css)`
    border: 1px solid ${t.colors.border.medium};
    height: 100%;
  `,uploadSpot:(0,i.css)`
    margin-left: ${t.spacing(2)};
  `,border:(0,i.css)`
    border: 1px solid ${t.colors.border.medium};
    padding: ${t.spacing(2)};
  `,img:(0,i.css)`
    max-width: 100%;
    // max-height: 147px;
    // fill: ${t.colors.text.primary};
  `,icon:(0,i.css)`
    // max-width: 100%;
    // max-height: 147px;
    // fill: ${t.colors.text.primary};
  `});var me=n(77093);function ge({listing:t,view:r}){const m=(0,I.of)(fe);switch(r){case C.Config:return e.createElement("div",null,"CONFIGURE?");case C.Perms:return e.createElement("div",null,"Permissions")}return e.createElement("div",{className:m.tableWrapper},e.createElement(J.Ay,null,({width:a,height:o})=>e.createElement("div",{style:{width:`${a}px`,height:`${o}px`}},e.createElement(me.X,{height:o,width:a,data:t,noHeader:!1,showTypeIcons:!1,resizable:!1}))))}const fe=t=>({wrapper:(0,i.css)`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,tableControlRowWrapper:(0,i.css)`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: ${t.spacing(2)};
  `,tableWrapper:(0,i.css)`
    border: 1px solid ${t.colors.border.medium};
    height: 100%;
  `,uploadSpot:(0,i.css)`
    margin-left: ${t.spacing(2)};
  `,border:(0,i.css)`
    border: 1px solid ${t.colors.border.medium};
    padding: ${t.spacing(2)};
  `});var L=n(10860),pe=n(64149),he=n(14186),Ee=n(67647);function ve({root:t,onPathChange:r}){const m=(0,I.of)(ye),a=(0,$.A)((0,b.o)().getConfig),[o,l]=(0,e.useState)("");let F=location.pathname;F.endsWith("/")||(F+="/");const g=(0,e.useMemo)(()=>{let x=a.value??[];if(o?.length){const E=o.toLowerCase();x=x.filter(S=>{const u=S.config;return u.name.toLowerCase().indexOf(E)>=0||u.description.toLowerCase().indexOf(E)>=0})}const h=[],d=[];for(const E of x??[])E.config.underContentRoot?d.push(E):E.config.prefix!=="content"&&h.push(E);return{base:h,content:d}},[o,a]),p=(x,h)=>e.createElement(s.B,{direction:"column"},h.map(d=>{const E=d.ready;return e.createElement(L.Z,{key:d.config.prefix,href:E?`admin/storage/${x}${d.config.prefix}/`:void 0},e.createElement(L.Z.Heading,null,d.config.name),e.createElement(L.Z.Meta,{className:m.clickable},d.config.description,d.config.git?.remote&&e.createElement("a",{href:d.config.git?.remote},d.config.git?.remote)),d.notice?.map(S=>e.createElement(D.F,{key:S.text,severity:S.severity,title:S.text})),e.createElement(L.Z.Tags,{className:m.clickable},e.createElement(s.B,null,e.createElement(pe.L,{tags:xe(d)}))),e.createElement(L.Z.Figure,{className:m.clickable},e.createElement(Z.I,{name:Ce(d.config.type),size:"xxxl",className:m.secondaryTextColor})))}));return e.createElement("div",null,e.createElement("div",{className:"page-action-bar"},e.createElement(he.I,{grow:!0},e.createElement(Ee.Z,{placeholder:"Search Storage",value:o,onChange:l})),e.createElement(c.$n,{className:"pull-right",onClick:()=>r("",C.AddRoot)},"Add Root")),e.createElement("div",null,p("",g.base)),e.createElement("div",null,e.createElement("h3",null,"Content"),p("content/",g.content)))}function ye(t){return{secondaryTextColor:(0,i.css)`
      color: ${t.colors.text.secondary};
    `,clickable:(0,i.css)`
      pointer-events: none;
    `}}function xe(t){const r=[];return t.builtin&&r.push("Builtin"),t.ready||r.push("Not ready"),r}function Ce(t){switch(t){case"git":return"code-branch";case"disk":return"folder-open";case"sql":return"database";default:return"folder-open"}}var Fe=n(73546),we=n(96374);const $e="image/jpg, image/jpeg, image/png, image/gif, image/webp";function Ne({setErrorMessages:t,setPath:r,path:m,fileNames:a}){const o=(0,I.of)(Ae),[l,F]=(0,e.useState)(void 0),[g,p]=(0,e.useState)(!1),[x,h]=(0,e.useState)(1),[d,E]=(0,e.useState)(!0);(0,e.useEffect)(()=>{h(f=>f+1)},[l]);const S=f=>{console.log("Uploaded: "+m),f.path?r(f.path):r(m)},u=async(f,T)=>{if(!f){t(["Please select a file."]);return}const R=await(0,b.o)().upload(m,f,T);R.status!==200?t([R.message]):S(R)},v=f=>{t([]);const T=f.currentTarget.files&&f.currentTarget.files.length>0&&f.currentTarget.files[0]?f.currentTarget.files[0]:void 0;T&&(F(T),(0,b.E)(T.name,a)?(p(!0),E(!0)):(p(!1),u(T,!1).then(y=>{})))},w=()=>{l&&(u(l,!0).then(f=>{}),E(!1))},M=()=>{F(void 0),p(!1),E(!1)};return e.createElement(e.Fragment,null,e.createElement(Fe.e,{accept:$e,onFileUpload:v,key:x,className:o.uploadButton},"Upload"),l&&g&&e.createElement(we.u,{isOpen:d,body:e.createElement("div",null,e.createElement("p",null,l?.name),e.createElement("p",null,"A file with this name already exists."),e.createElement("p",null,"What would you like to do?")),title:"This file already exists",confirmText:"Replace",onConfirm:w,onDismiss:M}))}const Ae=t=>({uploadButton:(0,i.css)`
    margin-right: ${t.spacing(2)};
  `}),Oe=/^[a-z\d!\-_.*'() ]+$/,Y=256,Se=t=>{const r=t.lastIndexOf("/");return r<1?"":t.substring(0,r)};function Ie(t){const r=(0,I.of)(Pe),m=(0,X.C)("storage"),a=t.match.params.path??"",o=t.queryParams.view??C.Data,l=(u,v)=>{let w=("/admin/storage/"+u).replace("//","/");v&&v!==C.Data&&(w+="?view="+v),H.Ny.push(w)},[F,g]=(0,e.useState)(!1),[p,x]=(0,e.useState)([]),h=(0,$.A)(()=>(0,b.o)().list(a).then(u=>{if(u){const v=u.fields[0];u.fields[0]={...v,getLinks:w=>{const M=v.values[w.valueRowIndex??0],f=a+"/"+M;return[{title:`Open ${M}`,href:`/admin/storage/${f}`,target:"_self",origin:v,onClick:()=>{l(f)}}]}}}return u}),[a]),d=(0,e.useMemo)(()=>{let u=a?.indexOf("/")<0;if(h.value)if(h.value.length===1){const w=h.value.fields[0].values[0];u=!a.endsWith(w)}else u=!0;return u},[a,h]),E=(0,e.useMemo)(()=>h.value?.fields?.find(u=>u.name==="name")?.values.filter(u=>typeof u=="string")??[],[h]),S=()=>{const u=!a?.length||a==="/";switch(o){case C.AddRoot:return u?e.createElement(q,{onPathChange:l}):(l(""),e.createElement(K.y,null))}const v=h.value;if(!(0,j.ci)(v))return e.createElement(e.Fragment,null);if(u)return e.createElement(ve,{root:v,onPathChange:l});const w=[{what:C.Data,text:"Data"}];a.indexOf("/")<0&&w.push({what:C.Config,text:"Configure"}),d||w.push({what:C.History,text:"History"});const M=d&&(a.startsWith("resources")||a.startsWith("content")),f=a.startsWith("resources/")||a.startsWith("content/"),T=()=>e.createElement("div",{className:r.errorAlert},e.createElement(D.F,{title:"Upload failed",severity:"error",onRemove:R},p.map(y=>e.createElement("div",{key:y},y)))),R=()=>{x([])};return e.createElement("div",{className:r.wrapper},e.createElement(z.a,{display:"flex",justifyContent:"space-between",width:"100%",height:3},e.createElement(_,{pathName:a,onPathChange:l,rootIcon:(0,U.toIconName)(m.node.icon??"")}),e.createElement(s.B,null,M&&e.createElement(e.Fragment,null,e.createElement(Ne,{path:a,setErrorMessages:x,fileNames:E,setPath:l}),e.createElement(c.$n,{onClick:()=>g(!0)},"New Folder")),f&&e.createElement(c.$n,{variant:"destructive",onClick:()=>{const y=d?"Are you sure you want to delete this folder and all its contents?":"Are you sure you want to delete this file?",B=Se(a);N.A.publish(new k.bY({title:`Delete ${d?"folder":"file"}`,text:y,icon:"trash-alt",yesText:"Delete",onConfirm:()=>(0,b.o)().delete({path:a,isFolder:d}).then(()=>{l(B)})}))}},"Delete"))),p.length>0&&T(),e.createElement(P.U,null,w.map(y=>e.createElement(A.o,{key:y.what,label:y.text,active:y.what===o,onChangeTab:()=>l(a,y.what)}))),d?e.createElement(ge,{listing:v,view:o}):e.createElement(ce,{path:a,listing:v,onPathChange:l,view:o}),F&&e.createElement(se,{onSubmit:async({folderName:y})=>{const B=`${a}/${y}`;typeof(await(0,b.o)().createFolder(B))?.error!="string"&&(l(B),g(!1))},onDismiss:()=>{g(!1)},validate:y=>{const B=y.toLowerCase();return(0,b.E)(y,E)?"A file or a folder with the same name already exists":Oe.test(B)?y.length>Y?`Name is too long, maximum length: ${Y} characters`:!0:"Name contains illegal characters"}}))};return e.createElement(O.Y,{navModel:m},e.createElement(O.Y.Contents,{isLoading:h.loading},S()))}const Pe=t=>({wrapper:(0,i.css)`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,tableControlRowWrapper:(0,i.css)`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: ${t.spacing(2)};
  `,tableWrapper:(0,i.css)`
    border: 1px solid ${t.colors.border.medium};
    height: 100%;
  `,border:(0,i.css)`
    border: 1px solid ${t.colors.border.medium};
    padding: ${t.spacing(2)};
  `,errorAlert:(0,i.css)`
    padding-top: 20px;
  `,uploadButton:(0,i.css)`
    margin-right: ${t.spacing(2)};
  `})},53652:(Q,W,n)=>{n.d(W,{E:()=>K,o:()=>z});var i=n(89667),e=n(57875),$=n(17172),j=n(32264),H=n(27677);class I{constructor(){}async get(s){const c=`api/storage/read/${s}`.replace("//","/");return(0,$.AI)().get(c)}async list(s){let c="api/storage/list/";s&&(c+=s+"/");const P=await(0,$.AI)().get(c);if(P?.data){const A=(0,i.or)(P);for(const N of A.fields)N.display=(0,e.J)({field:N,theme:j.$.theme2});return A}}async createFolder(s){const c=await(0,$.AI)().post("/api/storage/createFolder",JSON.stringify({path:s}));return c.success?{}:{error:c.message??"unknown error"}}async deleteFolder(s){const c=await(0,$.AI)().post("/api/storage/deleteFolder",JSON.stringify(s));return c.success?{}:{error:c.message??"unknown error"}}async deleteFile(s){const c=await(0,$.AI)().post(`/api/storage/delete/${s.path}`);return c.success?{}:{error:c.message??"unknown error"}}async delete(s){return s.isFolder?this.deleteFolder({path:s.path,force:!0}):this.deleteFile({path:s.path})}async upload(s,c,P){const A=new FormData;A.append("folder",s),A.append("file",c),A.append("overwriteExistingFile",String(P));const N=await fetch("/api/storage/upload",{method:"POST",body:A});let O=await N.json();return O||(O={}),O.status=N.status,O.statusText=N.statusText,N.status!==200&&!O.err&&(O.err=!0),O}async write(s,c){return H.IB.post(`/api/storage/write/${s}`,c)}async getConfig(){return(0,$.AI)().get("/api/storage/config")}async getOptions(s){return(0,$.AI)().get(`/api/storage/options/${s}`)}}function K(U,s){const P=U.toLowerCase().trim();return s.map(N=>N.trim().toLowerCase()).includes(P)}let D;function z(){return D||(D=new I),D}}}]);

//# sourceMappingURL=StoragePage.2985683a8329f7781e9c.js.map