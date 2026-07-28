"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["960399"],{857975(e,r,s){s.r(r),s.d(r,{metadata:()=>i,default:()=>f,frontMatter:()=>l,contentTitle:()=>h,toc:()=>m,assets:()=>u});var i=JSON.parse('{"id":"services/ds/microsoft_ads/index","title":"microsoft_ads","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/ds/microsoft_ads/index.md","sourceDirName":"services/ds/microsoft_ads","slug":"/services/ds/microsoft_ads/","permalink":"/services/ds/microsoft_ads/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"microsoft_ads","hide_title":false,"hide_table_of_contents":false,"keywords":["microsoft_ads","ds","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"log_subscriptions","permalink":"/services/ds/log_subscriptions/"},"next":{"title":"regions","permalink":"/services/ds/regions/"}}'),t=s(474848),o=s(28453),a=s(97362),n=s(897272),d=s(413554),c=s(541647);let l={title:"microsoft_ads",hide_title:!1,hide_table_of_contents:!1,keywords:["microsoft_ads","ds","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,u={},m=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2}];function p(e){let r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["Creates, updates, deletes, gets or lists a ",(0,t.jsx)("code",{children:"microsoft_ads"})," resource."]}),"\n",(0,t.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)("table",{children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Name"})}),(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"microsoft_ads"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Type"})}),(0,t.jsx)("td",{children:"Resource"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Id"})}),(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"aws.ds.microsoft_ads"})})]})]})}),"\n",(0,t.jsx)(r.h2,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(r.p,{children:["The following fields are returned by ",(0,t.jsx)(r.code,{children:"SELECT"})," queries:"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"SELECT"})," not supported for this resource, use ",(0,t.jsx)(r.code,{children:"SHOW METHODS"})," to view available operations for the resource."]}),"\n",(0,t.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(r.p,{children:"The following methods are available for this resource:"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Accessible by"}),(0,t.jsx)("th",{children:"Required Params"}),(0,t.jsx)("th",{children:"Optional Params"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#create_microsoft_ad",children:(0,t.jsx)(a.A,{code:"create_microsoft_ad"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"insert"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})}),", ",(0,t.jsx)("a",{href:"#parameter-Name",children:(0,t.jsx)("code",{children:"Name"})}),", ",(0,t.jsx)("a",{href:"#parameter-Password",children:(0,t.jsx)("code",{children:"Password"})}),", ",(0,t.jsx)("a",{href:"#parameter-VpcSettings",children:(0,t.jsx)("code",{children:"VpcSettings"})})]}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"Creates a Microsoft AD directory in the Amazon Web Services Cloud. For more information, see Managed Microsoft AD in the Directory Service Admin Guide. Before you call CreateMicrosoftAD, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the CreateMicrosoftAD operation, see Directory Service API Permissions: Actions, Resources, and Conditions Reference."})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.p,{children:["Parameters can be passed in the ",(0,t.jsx)(r.code,{children:"WHERE"})," clause of a query. Check the ",(0,t.jsx)(r.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Datatype"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{id:"parameter-region",children:[(0,t.jsx)("td",{children:(0,t.jsx)(a.A,{code:"region"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,t.jsxs)(r.h2,{id:"insert-examples",children:[(0,t.jsx)(r.code,{children:"INSERT"})," examples"]}),"\n",(0,t.jsxs)(d.A,{defaultValue:"create_microsoft_ad",values:[{label:"create_microsoft_ad",value:"create_microsoft_ad"},{label:"Manifest",value:"manifest"}],children:[(0,t.jsxs)(c.A,{value:"create_microsoft_ad",children:[(0,t.jsx)(r.p,{children:"Creates a Microsoft AD directory in the Amazon Web Services Cloud. For more information, see Managed Microsoft AD in the Directory Service Admin Guide. Before you call CreateMicrosoftAD, ensure that all of the required permissions have been explicitly granted through a policy. For details about what permissions are required to run the CreateMicrosoftAD operation, see Directory Service API Permissions: Actions, Resources, and Conditions Reference."}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"INSERT INTO aws.ds.microsoft_ads (\nName,\nShortName,\nPassword,\nDescription,\nVpcSettings,\nEdition,\nTags,\nNetworkType,\nregion\n)\nSELECT \n'{{ Name }}' /* required */,\n'{{ ShortName }}',\n'{{ Password }}' /* required */,\n'{{ Description }}',\n'{{ VpcSettings }}' /* required */,\n'{{ Edition }}',\n'{{ Tags }}',\n'{{ NetworkType }}',\n'{{ region }}'\nRETURNING\nDirectoryId\n;\n"})})]}),(0,t.jsx)(c.A,{value:"manifest",children:(0,t.jsx)(n.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: microsoft_ads
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the microsoft_ads resource.
  - name: Name
    value: "{{ Name }}"
    description: |
      The fully qualified domain name for the Managed Microsoft AD directory, such as corp.example.com. This name will resolve inside your VPC only. It does not need to be publicly resolvable.
  - name: ShortName
    value: "{{ ShortName }}"
    description: |
      The NetBIOS name for your domain, such as CORP. If you don't specify a NetBIOS name, it will default to the first part of your directory DNS. For example, CORP for the directory DNS corp.example.com.
  - name: Password
    value: "{{ Password }}"
    description: |
      The password for the default administrative user named Admin. If you need to change the password for the administrator account, you can use the ResetUserPassword API call.
  - name: Description
    value: "{{ Description }}"
    description: |
      A description for the directory. This label will appear on the Amazon Web Services console Directory Details page after the directory is created.
  - name: VpcSettings
    description: |
      Contains VPC information for the CreateDirectory, CreateMicrosoftAD, or CreateHybridAD operation.
    value:
      VpcId: "{{ VpcId }}"
      SubnetIds:
        - "{{ SubnetIds }}"
  - name: Edition
    value: "{{ Edition }}"
    description: |
      Managed Microsoft AD is available in two editions: Standard and Enterprise. Enterprise is the default.
    valid_values: ['Enterprise', 'Standard', 'Hybrid']
  - name: Tags
    description: |
      The tags to be assigned to the Managed Microsoft AD directory.
    value:
      - Key: "{{ Key }}"
        Value: "{{ Value }}"
  - name: NetworkType
    value: "{{ NetworkType }}"
    description: |
      The network type for your domain. The default value is IPv4 or IPv6 based on the provided subnet capabilities.
    valid_values: ['Dual-stack', 'IPv4', 'IPv6']
`})})]})]})}function f(e={}){let{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}}}]);