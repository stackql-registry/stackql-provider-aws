"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["576195"],{578020(e,s,n){n.r(s),n.d(s,{metadata:()=>i,default:()=>j,frontMatter:()=>o,contentTitle:()=>h,toc:()=>x,assets:()=>u});var i=JSON.parse('{"id":"services/license_manager/license_versions/index","title":"license_versions","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/license_manager/license_versions/index.md","sourceDirName":"services/license_manager/license_versions","slug":"/services/license_manager/license_versions/","permalink":"/services/license_manager/license_versions/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"license_versions","hide_title":false,"hide_table_of_contents":false,"keywords":["license_versions","license_manager","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"license_usages","permalink":"/services/license_manager/license_usages/"},"next":{"title":"licenses","permalink":"/services/license_manager/licenses/"}}'),r=n(474848),l=n(28453),a=n(97362),t=n(897272),c=n(413554),d=n(541647);let o={title:"license_versions",hide_title:!1,hide_table_of_contents:!1,keywords:["license_versions","license_manager","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,u={},x=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2}];function m(e){let s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["Creates, updates, deletes, gets or lists a ",(0,r.jsx)("code",{children:"license_versions"})," resource."]}),"\n",(0,r.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Name"})}),(0,r.jsx)("td",{children:(0,r.jsx)(a.A,{code:"license_versions"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Type"})}),(0,r.jsx)("td",{children:"Resource"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Id"})}),(0,r.jsx)("td",{children:(0,r.jsx)(a.A,{code:"aws.license_manager.license_versions"})})]})]})}),"\n",(0,r.jsx)(s.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(s.p,{children:["The following fields are returned by ",(0,r.jsx)(s.code,{children:"SELECT"})," queries:"]}),"\n",(0,r.jsx)(c.A,{defaultValue:"list_license_versions",values:[{label:"list_license_versions",value:"list_license_versions"}],children:(0,r.jsx)(d.A,{value:"list_license_versions",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(a.A,{code:"Licenses"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"array"})}),(0,r.jsx)("td",{children:"License details."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(a.A,{code:"NextToken"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"Token for the next set of results."})]})]})]})})}),"\n",(0,r.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(s.p,{children:"The following methods are available for this resource:"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Accessible by"}),(0,r.jsx)("th",{children:"Required Params"}),(0,r.jsx)("th",{children:"Optional Params"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#list_license_versions",children:(0,r.jsx)(a.A,{code:"list_license_versions"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(a.A,{code:"select"})}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Lists all versions of the specified license."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#create_license_version",children:(0,r.jsx)(a.A,{code:"create_license_version"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(a.A,{code:"insert"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})}),", ",(0,r.jsx)("a",{href:"#parameter-LicenseArn",children:(0,r.jsx)("code",{children:"LicenseArn"})}),", ",(0,r.jsx)("a",{href:"#parameter-LicenseName",children:(0,r.jsx)("code",{children:"LicenseName"})}),", ",(0,r.jsx)("a",{href:"#parameter-ProductName",children:(0,r.jsx)("code",{children:"ProductName"})}),", ",(0,r.jsx)("a",{href:"#parameter-Issuer",children:(0,r.jsx)("code",{children:"Issuer"})}),", ",(0,r.jsx)("a",{href:"#parameter-HomeRegion",children:(0,r.jsx)("code",{children:"HomeRegion"})}),", ",(0,r.jsx)("a",{href:"#parameter-Validity",children:(0,r.jsx)("code",{children:"Validity"})}),", ",(0,r.jsx)("a",{href:"#parameter-Entitlements",children:(0,r.jsx)("code",{children:"Entitlements"})}),", ",(0,r.jsx)("a",{href:"#parameter-ConsumptionConfiguration",children:(0,r.jsx)("code",{children:"ConsumptionConfiguration"})}),", ",(0,r.jsx)("a",{href:"#parameter-ClientToken",children:(0,r.jsx)("code",{children:"ClientToken"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Creates a new version of the specified license."})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.p,{children:["Parameters can be passed in the ",(0,r.jsx)(s.code,{children:"WHERE"})," clause of a query. Check the ",(0,r.jsx)(s.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{id:"parameter-region",children:[(0,r.jsx)("td",{children:(0,r.jsx)(a.A,{code:"region"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,r.jsxs)(s.h2,{id:"select-examples",children:[(0,r.jsx)(s.code,{children:"SELECT"})," examples"]}),"\n",(0,r.jsx)(c.A,{defaultValue:"list_license_versions",values:[{label:"list_license_versions",value:"list_license_versions"}],children:(0,r.jsxs)(d.A,{value:"list_license_versions",children:[(0,r.jsx)(s.p,{children:"Lists all versions of the specified license."}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"SELECT\nLicenses,\nNextToken\nFROM aws.license_manager.license_versions\nWHERE region = '{{ region }}' -- required\n;\n"})})]})}),"\n",(0,r.jsxs)(s.h2,{id:"insert-examples",children:[(0,r.jsx)(s.code,{children:"INSERT"})," examples"]}),"\n",(0,r.jsxs)(c.A,{defaultValue:"create_license_version",values:[{label:"create_license_version",value:"create_license_version"},{label:"Manifest",value:"manifest"}],children:[(0,r.jsxs)(d.A,{value:"create_license_version",children:[(0,r.jsx)(s.p,{children:"Creates a new version of the specified license."}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"INSERT INTO aws.license_manager.license_versions (\nLicenseArn,\nLicenseName,\nProductName,\nIssuer,\nHomeRegion,\nValidity,\nLicenseMetadata,\nEntitlements,\nConsumptionConfiguration,\nStatus,\nClientToken,\nSourceVersion,\nregion\n)\nSELECT \n'{{ LicenseArn }}' /* required */,\n'{{ LicenseName }}' /* required */,\n'{{ ProductName }}' /* required */,\n'{{ Issuer }}' /* required */,\n'{{ HomeRegion }}' /* required */,\n'{{ Validity }}' /* required */,\n'{{ LicenseMetadata }}',\n'{{ Entitlements }}' /* required */,\n'{{ ConsumptionConfiguration }}' /* required */,\n'{{ Status }}',\n'{{ ClientToken }}' /* required */,\n'{{ SourceVersion }}',\n'{{ region }}'\nRETURNING\nLicenseArn,\nStatus,\nVersion\n;\n"})})]}),(0,r.jsx)(d.A,{value:"manifest",children:(0,r.jsx)(t.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: license_versions
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the license_versions resource.
  - name: LicenseArn
    value: "{{ LicenseArn }}"
    description: |
      Amazon Resource Name (ARN) of the license.
  - name: LicenseName
    value: "{{ LicenseName }}"
    description: |
      License name.
  - name: ProductName
    value: "{{ ProductName }}"
    description: |
      Product name.
  - name: Issuer
    description: |
      License issuer.
    value:
      Name: "{{ Name }}"
      SignKey: "{{ SignKey }}"
  - name: HomeRegion
    value: "{{ HomeRegion }}"
    description: |
      Home Region of the license.
  - name: Validity
    description: |
      Date and time range during which the license is valid, in ISO8601-UTC format.
    value:
      Begin: "{{ Begin }}"
      End: "{{ End }}"
  - name: LicenseMetadata
    description: |
      Information about the license.
    value:
      - Name: "{{ Name }}"
        Value: "{{ Value }}"
  - name: Entitlements
    description: |
      License entitlements.
    value:
      - Name: "{{ Name }}"
        Value: "{{ Value }}"
        MaxCount: {{ MaxCount }}
        Overage: {{ Overage }}
        Unit: "{{ Unit }}"
        AllowCheckIn: {{ AllowCheckIn }}
  - name: ConsumptionConfiguration
    description: |
      Configuration for consumption of the license. Choose a provisional configuration for workloads running with continuous connectivity. Choose a borrow configuration for workloads with offline usage.
    value:
      RenewType: "{{ RenewType }}"
      ProvisionalConfiguration:
        MaxTimeToLiveInMinutes: {{ MaxTimeToLiveInMinutes }}
      BorrowConfiguration:
        AllowEarlyCheckIn: {{ AllowEarlyCheckIn }}
        MaxTimeToLiveInMinutes: {{ MaxTimeToLiveInMinutes }}
  - name: Status
    value: "{{ Status }}"
    description: |
      License status.
    valid_values: ['AVAILABLE', 'PENDING_AVAILABLE', 'DEACTIVATED', 'SUSPENDED', 'EXPIRED', 'PENDING_DELETE', 'DELETED']
  - name: ClientToken
    value: "{{ ClientToken }}"
    description: |
      Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  - name: SourceVersion
    value: "{{ SourceVersion }}"
    description: |
      Current version of the license.
`})})]})]})}function j(e={}){let{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}}}]);