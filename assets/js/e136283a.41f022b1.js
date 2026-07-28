"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["865833"],{376303(e,a,i){i.r(a),i.d(a,{metadata:()=>s,default:()=>x,frontMatter:()=>c,contentTitle:()=>h,toc:()=>p,assets:()=>m});var s=JSON.parse('{"id":"services/lakeformation/lake_formation_opt_ins/index","title":"lake_formation_opt_ins","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/lakeformation/lake_formation_opt_ins/index.md","sourceDirName":"services/lakeformation/lake_formation_opt_ins","slug":"/services/lakeformation/lake_formation_opt_ins/","permalink":"/services/lakeformation/lake_formation_opt_ins/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"lake_formation_opt_ins","hide_title":false,"hide_table_of_contents":false,"keywords":["lake_formation_opt_ins","lakeformation","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"lake_formation_identity_center_configurations","permalink":"/services/lakeformation/lake_formation_identity_center_configurations/"},"next":{"title":"lf_tag_expressions","permalink":"/services/lakeformation/lf_tag_expressions/"}}'),r=i(474848),n=i(28453),t=i(97362),o=i(897272),l=i(413554),d=i(541647);let c={title:"lake_formation_opt_ins",hide_title:!1,hide_table_of_contents:!1,keywords:["lake_formation_opt_ins","lakeformation","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,m={},p=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function _(e){let a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:["Creates, updates, deletes, gets or lists a ",(0,r.jsx)("code",{children:"lake_formation_opt_ins"})," resource."]}),"\n",(0,r.jsx)(a.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Name"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.A,{code:"lake_formation_opt_ins"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Type"})}),(0,r.jsx)("td",{children:"Resource"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Id"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.A,{code:"aws.lakeformation.lake_formation_opt_ins"})})]})]})}),"\n",(0,r.jsx)(a.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(a.p,{children:["The following fields are returned by ",(0,r.jsx)(a.code,{children:"SELECT"})," queries:"]}),"\n",(0,r.jsx)(l.A,{defaultValue:"list_lake_formation_opt_ins",values:[{label:"list_lake_formation_opt_ins",value:"list_lake_formation_opt_ins"}],children:(0,r.jsx)(d.A,{value:"list_lake_formation_opt_ins",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.A,{code:"LakeFormationOptInsInfoList"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"array"})}),(0,r.jsx)("td",{children:"A list of principal-resource pairs that have Lake Formation permissins enforced."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.A,{code:"NextToken"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"A continuation token, if this is not the first call to retrieve this list."})]})]})]})})}),"\n",(0,r.jsx)(a.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(a.p,{children:"The following methods are available for this resource:"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Accessible by"}),(0,r.jsx)("th",{children:"Required Params"}),(0,r.jsx)("th",{children:"Optional Params"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#list_lake_formation_opt_ins",children:(0,r.jsx)(t.A,{code:"list_lake_formation_opt_ins"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.A,{code:"select"})}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Retrieve the current list of resources and principals that are opt in to enforce Lake Formation permissions."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#create_lake_formation_opt_in",children:(0,r.jsx)(t.A,{code:"create_lake_formation_opt_in"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.A,{code:"insert"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})}),", ",(0,r.jsx)("a",{href:"#parameter-Principal",children:(0,r.jsx)("code",{children:"Principal"})}),", ",(0,r.jsx)("a",{href:"#parameter-Resource",children:(0,r.jsx)("code",{children:"Resource"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Enforce Lake Formation permissions for the given databases, tables, and principals."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#delete_lake_formation_opt_in",children:(0,r.jsx)(t.A,{code:"delete_lake_formation_opt_in"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.A,{code:"delete"})}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Remove the Lake Formation permissions enforcement of the given databases, tables, and principals."})]})]})]}),"\n",(0,r.jsx)(a.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(a.p,{children:["Parameters can be passed in the ",(0,r.jsx)(a.code,{children:"WHERE"})," clause of a query. Check the ",(0,r.jsx)(a.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{id:"parameter-region",children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.A,{code:"region"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,r.jsxs)(a.h2,{id:"select-examples",children:[(0,r.jsx)(a.code,{children:"SELECT"})," examples"]}),"\n",(0,r.jsx)(l.A,{defaultValue:"list_lake_formation_opt_ins",values:[{label:"list_lake_formation_opt_ins",value:"list_lake_formation_opt_ins"}],children:(0,r.jsxs)(d.A,{value:"list_lake_formation_opt_ins",children:[(0,r.jsx)(a.p,{children:"Retrieve the current list of resources and principals that are opt in to enforce Lake Formation permissions."}),(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-sql",children:"SELECT\nLakeFormationOptInsInfoList,\nNextToken\nFROM aws.lakeformation.lake_formation_opt_ins\nWHERE region = '{{ region }}' -- required\n;\n"})})]})}),"\n",(0,r.jsxs)(a.h2,{id:"insert-examples",children:[(0,r.jsx)(a.code,{children:"INSERT"})," examples"]}),"\n",(0,r.jsxs)(l.A,{defaultValue:"create_lake_formation_opt_in",values:[{label:"create_lake_formation_opt_in",value:"create_lake_formation_opt_in"},{label:"Manifest",value:"manifest"}],children:[(0,r.jsxs)(d.A,{value:"create_lake_formation_opt_in",children:[(0,r.jsx)(a.p,{children:"Enforce Lake Formation permissions for the given databases, tables, and principals."}),(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-sql",children:"INSERT INTO aws.lakeformation.lake_formation_opt_ins (\nPrincipal,\nResource,\nCondition,\nregion\n)\nSELECT \n'{{ Principal }}' /* required */,\n'{{ Resource }}' /* required */,\n'{{ Condition }}',\n'{{ region }}'\n;\n"})})]}),(0,r.jsx)(d.A,{value:"manifest",children:(0,r.jsx)(o.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: lake_formation_opt_ins
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the lake_formation_opt_ins resource.
  - name: Principal
    description: |
      The Lake Formation principal. Supported principals are IAM users or IAM roles.
    value:
      DataLakePrincipalIdentifier: "{{ DataLakePrincipalIdentifier }}"
  - name: Resource
    description: |
      A structure for the resource.
    value:
      Catalog:
        Id: "{{ Id }}"
      Database:
        CatalogId: "{{ CatalogId }}"
        Name: "{{ Name }}"
      Table:
        CatalogId: "{{ CatalogId }}"
        DatabaseName: "{{ DatabaseName }}"
        Name: "{{ Name }}"
        TableWildcard: "{{ TableWildcard }}"
      TableWithColumns:
        CatalogId: "{{ CatalogId }}"
        DatabaseName: "{{ DatabaseName }}"
        Name: "{{ Name }}"
        ColumnNames:
          - "{{ ColumnNames }}"
        ColumnWildcard:
          ExcludedColumnNames:
            - "{{ ExcludedColumnNames }}"
      DataLocation:
        CatalogId: "{{ CatalogId }}"
        ResourceArn: "{{ ResourceArn }}"
      DataCellsFilter:
        TableCatalogId: "{{ TableCatalogId }}"
        DatabaseName: "{{ DatabaseName }}"
        TableName: "{{ TableName }}"
        Name: "{{ Name }}"
      LFTag:
        CatalogId: "{{ CatalogId }}"
        TagKey: "{{ TagKey }}"
        TagValues:
          - "{{ TagValues }}"
      LFTagPolicy:
        CatalogId: "{{ CatalogId }}"
        ResourceType: "{{ ResourceType }}"
        Expression:
          - TagKey: "{{ TagKey }}"
            TagValues: "{{ TagValues }}"
        ExpressionName: "{{ ExpressionName }}"
      LFTagExpression:
        CatalogId: "{{ CatalogId }}"
        Name: "{{ Name }}"
  - name: Condition
    description: |
      A Lake Formation condition, which applies to permissions and opt-ins that contain an expression.
    value:
      Expression: "{{ Expression }}"
`})})]}),"\n",(0,r.jsxs)(a.h2,{id:"delete-examples",children:[(0,r.jsx)(a.code,{children:"DELETE"})," examples"]}),"\n",(0,r.jsx)(l.A,{defaultValue:"delete_lake_formation_opt_in",values:[{label:"delete_lake_formation_opt_in",value:"delete_lake_formation_opt_in"}],children:(0,r.jsxs)(d.A,{value:"delete_lake_formation_opt_in",children:[(0,r.jsx)(a.p,{children:"Remove the Lake Formation permissions enforcement of the given databases, tables, and principals."}),(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-sql",children:"DELETE FROM aws.lakeformation.lake_formation_opt_ins\nWHERE region = '{{ region }}' --required\n;\n"})})]})})]})}function x(e={}){let{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(_,{...e})}):_(e)}}}]);