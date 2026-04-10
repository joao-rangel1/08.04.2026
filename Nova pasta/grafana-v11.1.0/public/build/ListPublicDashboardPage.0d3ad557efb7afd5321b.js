"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5761],{53371:(V,P,t)=>{t.r(P),t.d(P,{ListPublicDashboardPage:()=>T,default:()=>F});var a=t(96540),d=t(32196),$=t(49045),C=t(13544),S=t(14110),v=t(40845),p=t(10860),U=t(56034),N=t(14578),A=t(15292),f=t(55852),I=t(62930),B=t(69529),R=t(72109),z=t(66864),M=t(19384),x=t(67608),l=t(8484),Y=t(16233),E=t(72686),D=t(72254),Z=t(31678),O=t(71678),W=t(90591);const j=({dashboard:e,publicDashboard:s,loader:i,children:n,onDismiss:r,...h})=>{const[o,{isLoading:y}]=(0,E.bN)(),c=(b,u)=>{o({dashboard:e,uid:b.uid,dashboardUid:b.dashboardUid}),u()};return a.createElement(O.$s,null,({showModal:b,hideModal:u})=>{const g=(0,l.t)("public-dashboard-list.button.revoke-button-text","Revoke public URL");return a.createElement(f.$n,{"aria-label":g,title:g,onClick:()=>b(W.m,{dashboardTitle:s.title,onConfirm:()=>c(s,u),onDismiss:()=>{r?r():u()}}),...h},y&&i?i:n)})},k=({pd:e})=>{const s=(0,v.of)(L),i=(0,v.$j)(),n=(0,$.A)(`(max-width: ${i.breakpoints.values.sm}px)`),[r,{isLoading:h}]=(0,E.T2)(),o=C.Tp.pages.PublicDashboards,y=Y.TP.hasPermission(Z.AccessControlAction.DashboardsPublicWrite),c=!e.dashboardUid,b=(m,G)=>{const H={dashboard:{uid:m.dashboardUid},payload:{uid:m.uid,isEnabled:!G}};r(H)},u=(0,a.useMemo)(()=>n?p.Z.Actions:p.Z.SecondaryActions,[n]),g=(0,l.t)("public-dashboard-list.toggle.pause-sharing-toggle-text","Pause sharing");return a.createElement(p.Z,{className:s.card,href:c?void 0:`/d/${e.dashboardUid}`},a.createElement(p.Z.Heading,{className:s.heading},c?a.createElement(U.m,{content:(0,l.t)("public-dashboard-list.dashboard-title.orphaned-tooltip","The linked dashboard has already been deleted"),placement:"top"},a.createElement("div",{className:s.orphanedTitle},a.createElement(l.x6,{i18nKey:"public-dashboard-list.dashboard-title.orphaned-title"},a.createElement("span",null,"Orphaned public dashboard")),a.createElement(N.I,{name:"info-circle"}))):a.createElement("span",null,e.title)),a.createElement(u,{className:s.actions},a.createElement("div",{className:s.pauseSwitch},a.createElement(A.d,{value:!e.isEnabled,label:g,disabled:h,onChange:m=>{(0,S.rR)("grafana_dashboards_public_enable_clicked",{action:m.currentTarget.checked?"disable":"enable"}),b(e,m.currentTarget.checked)},"data-testid":o.ListItem.pauseSwitch}),a.createElement("span",null,g)),a.createElement(f.z9,{disabled:c,fill:"text",icon:"external-link-alt",variant:"secondary",target:"_blank",color:i.colors.warning.text,href:(0,D.mL)(e.accessToken),key:"public-dashboard-url",tooltip:(0,l.t)("public-dashboard-list.button.view-button-tooltip","View public dashboard"),"data-testid":o.ListItem.linkButton}),a.createElement(f.z9,{disabled:c,fill:"text",icon:"cog",variant:"secondary",color:i.colors.warning.text,href:(0,D.gN)(e.dashboardUid,e.slug),key:"public-dashboard-config-url",tooltip:(0,l.t)("public-dashboard-list.button.config-button-tooltip","Configure public dashboard"),"data-testid":o.ListItem.configButton}),y&&a.createElement(j,{fill:"text",icon:"trash-alt",variant:"secondary",publicDashboard:e,tooltip:(0,l.t)("public-dashboard-list.button.revoke-button-tooltip","Revoke public dashboard URL"),loader:a.createElement(I.y,null),"data-testid":o.ListItem.trashcanButton})))},K=()=>{const[e,s]=(0,a.useState)(1),i=(0,v.of)(L),{data:n,isLoading:r,isError:h}=(0,E._e)(e);return a.createElement(x.Y,{navId:"dashboards/public"},a.createElement(x.Y.Contents,{isLoading:r},!r&&!h&&!!n&&a.createElement("div",null,n.publicDashboards.length===0?a.createElement(B.p,{variant:"call-to-action",message:(0,l.t)("public-dashboard-list.empty-state.message","You haven't created any public dashboards yet")},a.createElement(l.x6,{i18nKey:"public-dashboard-list.empty-state.more-info"},"Create a public dashboard from any existing dashboard through the ",a.createElement("b",null,"Share")," modal."," ",a.createElement(R.Y,{external:!0,href:"https://grafana.com/docs/grafana/latest/dashboards/dashboard-public/#make-a-dashboard-public"},"Learn more"))):a.createElement(a.Fragment,null,a.createElement("ul",{className:i.list},n.publicDashboards.map(o=>a.createElement("li",{key:o.uid},a.createElement(k,{pd:o})))),a.createElement(z.Gy,{justify:"flex-end"},a.createElement(M.d,{onNavigate:s,currentPage:n.page,numberOfPages:n.totalPages,hideWhenSinglePage:!0}))))))},L=e=>({list:(0,d.css)`
    list-style-type: none;
    margin-bottom: ${e.spacing(2)};
  `,card:(0,d.css)`
    ${e.breakpoints.up("sm")} {
      display: flex;
    }
  `,heading:(0,d.css)`
    display: flex;
    align-items: center;
    gap: ${e.spacing(1)};
    flex: 1;
  `,orphanedTitle:(0,d.css)`
    display: flex;
    align-items: center;
    gap: ${e.spacing(1)};
  `,actions:(0,d.css)`
    display: flex;
    align-items: center;
    position: relative;

    gap: ${e.spacing(.5)};
    ${e.breakpoints.up("sm")} {
      gap: ${e.spacing(1)};
    }
  `,pauseSwitch:(0,d.css)`
    display: flex;
    gap: ${e.spacing(1)};
    align-items: center;
    font-size: ${e.typography.bodySmall.fontSize};
    margin-bottom: 0;
    flex: 1;

    ${e.breakpoints.up("sm")} {
      padding-right: ${e.spacing(2)};
    }
  `}),T=({})=>a.createElement(K,null),F=T}}]);

//# sourceMappingURL=ListPublicDashboardPage.0d3ad557efb7afd5321b.js.map