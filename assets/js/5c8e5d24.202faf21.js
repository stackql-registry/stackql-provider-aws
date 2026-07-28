"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["514788"],{113784(e,a,s){s.r(a),s.d(a,{metadata:()=>t,default:()=>p,frontMatter:()=>o,contentTitle:()=>h,toc:()=>x,assets:()=>u});var t=JSON.parse('{"id":"services/qbusiness/data_accessors/index","title":"data_accessors","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/qbusiness/data_accessors/index.md","sourceDirName":"services/qbusiness/data_accessors","slug":"/services/qbusiness/data_accessors/","permalink":"/services/qbusiness/data_accessors/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"data_accessors","hide_title":false,"hide_table_of_contents":false,"keywords":["data_accessors","qbusiness","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"conversations","permalink":"/services/qbusiness/conversations/"},"next":{"title":"data_source_sync_jobs","permalink":"/services/qbusiness/data_source_sync_jobs/"}}'),n=s(474848),i=s(28453),r=s(97362),l=s(897272),d=s(413554),c=s(541647);let o={title:"data_accessors",hide_title:!1,hide_table_of_contents:!1,keywords:["data_accessors","qbusiness","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,u={},x=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function j(e){let a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["Creates, updates, deletes, gets or lists a ",(0,n.jsx)("code",{children:"data_accessors"})," resource."]}),"\n",(0,n.jsx)(a.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Name"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"data_accessors"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Type"})}),(0,n.jsx)("td",{children:"Resource"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Id"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"aws.qbusiness.data_accessors"})})]})]})}),"\n",(0,n.jsx)(a.h2,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(a.p,{children:["The following fields are returned by ",(0,n.jsx)(a.code,{children:"SELECT"})," queries:"]}),"\n",(0,n.jsxs)(d.A,{defaultValue:"get_data_accessor",values:[{label:"get_data_accessor",value:"get_data_accessor"},{label:"list_data_accessors",value:"list_data_accessors"}],children:[(0,n.jsx)(c.A,{value:"get_data_accessor",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"actionConfigurations"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"array"})}),(0,n.jsx)("td",{children:"The list of action configurations specifying the allowed actions and any associated filters."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"applicationId"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The unique identifier of the Amazon Q Business application associated with this data accessor. (pattern: <code>[a-zA-Z0-9][a-zA-Z0-9-]{35}</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"authenticationDetail"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"Contains the authentication configuration details for a data accessor. This structure defines how the ISV authenticates when accessing data through the data accessor."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"createdAt"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"The timestamp when the data accessor was created."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"dataAccessorArn"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The Amazon Resource Name (ARN) of the data accessor. (pattern: <code>arn:[a-z0-9-.]{1,63}:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[^/].{0,1023}</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"dataAccessorId"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The unique identifier of the data accessor. (pattern: <code>[a-zA-Z0-9][a-zA-Z0-9-]{35}</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"displayName"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The friendly name of the data accessor. (pattern: <code>[a-zA-Z0-9][a-zA-Z0-9_-]*</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"idcApplicationArn"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsxs)("td",{children:["The Amazon Resource Name (ARN) of the IAM Identity Center application associated with this data accessor. (pattern: <code>arn:[a-z0-9-.]{1,63}:sso::\\d{12}",":application","/(sso)?ins-[a-zA-Z0-9-.]{16}/apl-[a-zA-Z0-9]{16}</code>)"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"principal"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsxs)("td",{children:["The Amazon Resource Name (ARN) of the IAM role for the ISV associated with this data accessor. (pattern: <code>arn:[a-z0-9-.]{1,63}:iam::[0-9]{12}",":role","/[a-zA-Z0-9_/+=,.@-]+</code>)"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"updatedAt"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"The timestamp when the data accessor was last updated."})]})]})]})}),(0,n.jsx)(c.A,{value:"list_data_accessors",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"authenticationDetail"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"Contains the authentication configuration details for a data accessor. This structure defines how the ISV authenticates when accessing data through the data accessor."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"createdAt"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"The timestamp when the data accessor was created."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"dataAccessorArn"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The Amazon Resource Name (ARN) of the data accessor. (pattern: <code>arn:[a-z0-9-.]{1,63}:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[^/].{0,1023}</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"dataAccessorId"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The unique identifier of the data accessor. (pattern: <code>[a-zA-Z0-9][a-zA-Z0-9-]{35}</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"displayName"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The friendly name of the data accessor. (pattern: <code>[a-zA-Z0-9][a-zA-Z0-9_-]*</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"idcApplicationArn"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsxs)("td",{children:["The Amazon Resource Name (ARN) of the associated IAM Identity Center application. (pattern: <code>arn:[a-z0-9-.]{1,63}:sso::\\d{12}",":application","/(sso)?ins-[a-zA-Z0-9-.]{16}/apl-[a-zA-Z0-9]{16}</code>)"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"principal"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsxs)("td",{children:["The Amazon Resource Name (ARN) of the IAM role for the ISV associated with this data accessor. (pattern: <code>arn:[a-z0-9-.]{1,63}:iam::[0-9]{12}",":role","/[a-zA-Z0-9_/+=,.@-]+</code>)"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"updatedAt"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"The timestamp when the data accessor was last updated."})]})]})]})})]}),"\n",(0,n.jsx)(a.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(a.p,{children:"The following methods are available for this resource:"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Accessible by"}),(0,n.jsx)("th",{children:"Required Params"}),(0,n.jsx)("th",{children:"Optional Params"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#get_data_accessor",children:(0,n.jsx)(r.A,{code:"get_data_accessor"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"select"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-application_id",children:(0,n.jsx)("code",{children:"application_id"})}),", ",(0,n.jsx)("a",{href:"#parameter-data_accessor_id",children:(0,n.jsx)("code",{children:"data_accessor_id"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Retrieves information about a specified data accessor. This operation returns details about the data accessor, including its display name, unique identifier, Amazon Resource Name (ARN), the associated Amazon Q Business application and IAM Identity Center application, the IAM role for the ISV, the action configurations, and the timestamps for when the data accessor was created and last updated."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#list_data_accessors",children:(0,n.jsx)(r.A,{code:"list_data_accessors"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"select"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-application_id",children:(0,n.jsx)("code",{children:"application_id"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})]}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-nextToken",children:(0,n.jsx)("code",{children:"nextToken"})}),", ",(0,n.jsx)("a",{href:"#parameter-maxResults",children:(0,n.jsx)("code",{children:"maxResults"})})]}),(0,n.jsx)("td",{children:"Lists the data accessors for a Amazon Q Business application. This operation returns a paginated list of data accessor summaries, including the friendly name, unique identifier, ARN, associated IAM role, and creation/update timestamps for each data accessor."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#create_data_accessor",children:(0,n.jsx)(r.A,{code:"create_data_accessor"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"insert"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-application_id",children:(0,n.jsx)("code",{children:"application_id"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-principal",children:(0,n.jsx)("code",{children:"principal"})}),", ",(0,n.jsx)("a",{href:"#parameter-actionConfigurations",children:(0,n.jsx)("code",{children:"actionConfigurations"})}),", ",(0,n.jsx)("a",{href:"#parameter-displayName",children:(0,n.jsx)("code",{children:"displayName"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Creates a new data accessor for an ISV to access data from a Amazon Q Business application. The data accessor is an entity that represents the ISV's access to the Amazon Q Business application's data. It includes the IAM role ARN for the ISV, a friendly name, and a set of action configurations that define the specific actions the ISV is allowed to perform and any associated data filters. When the data accessor is created, an IAM Identity Center application is also created to manage the ISV's identity and authentication for accessing the Amazon Q Business application."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#update_data_accessor",children:(0,n.jsx)(r.A,{code:"update_data_accessor"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"update"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-application_id",children:(0,n.jsx)("code",{children:"application_id"})}),", ",(0,n.jsx)("a",{href:"#parameter-data_accessor_id",children:(0,n.jsx)("code",{children:"data_accessor_id"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-actionConfigurations",children:(0,n.jsx)("code",{children:"actionConfigurations"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Updates an existing data accessor. This operation allows modifying the action configurations (the allowed actions and associated filters) and the display name of the data accessor. It does not allow changing the IAM role associated with the data accessor or other core properties of the data accessor."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#delete_data_accessor",children:(0,n.jsx)(r.A,{code:"delete_data_accessor"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"delete"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-application_id",children:(0,n.jsx)("code",{children:"application_id"})}),", ",(0,n.jsx)("a",{href:"#parameter-data_accessor_id",children:(0,n.jsx)("code",{children:"data_accessor_id"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Deletes a specified data accessor. This operation permanently removes the data accessor and its associated IAM Identity Center application. Any access granted to the ISV through this data accessor will be revoked."})]})]})]}),"\n",(0,n.jsx)(a.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(a.p,{children:["Parameters can be passed in the ",(0,n.jsx)(a.code,{children:"WHERE"})," clause of a query. Check the ",(0,n.jsx)(a.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{id:"parameter-application_id",children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"application_id"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The unique identifier of the Amazon Q Business application."})]}),(0,n.jsxs)("tr",{id:"parameter-data_accessor_id",children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"data_accessor_id"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The unique identifier of the data accessor to delete."})]}),(0,n.jsxs)("tr",{id:"parameter-region",children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"region"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"AWS region (default: us-east-1)"})]}),(0,n.jsxs)("tr",{id:"parameter-maxResults",children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"maxResults"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"integer"})}),(0,n.jsx)("td",{children:"The maximum number of results to return in a single call."})]}),(0,n.jsxs)("tr",{id:"parameter-nextToken",children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"nextToken"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The token for the next set of results. (You received this token from a previous call.)"})]})]})]}),"\n",(0,n.jsxs)(a.h2,{id:"select-examples",children:[(0,n.jsx)(a.code,{children:"SELECT"})," examples"]}),"\n",(0,n.jsxs)(d.A,{defaultValue:"get_data_accessor",values:[{label:"get_data_accessor",value:"get_data_accessor"},{label:"list_data_accessors",value:"list_data_accessors"}],children:[(0,n.jsxs)(c.A,{value:"get_data_accessor",children:[(0,n.jsx)(a.p,{children:"Retrieves information about a specified data accessor. This operation returns details about the data accessor, including its display name, unique identifier, Amazon Resource Name (ARN), the associated Amazon Q Business application and IAM Identity Center application, the IAM role for the ISV, the action configurations, and the timestamps for when the data accessor was created and last updated."}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"SELECT\nactionConfigurations,\napplicationId,\nauthenticationDetail,\ncreatedAt,\ndataAccessorArn,\ndataAccessorId,\ndisplayName,\nidcApplicationArn,\nprincipal,\nupdatedAt\nFROM aws.qbusiness.data_accessors\nWHERE application_id = '{{ application_id }}' -- required\nAND data_accessor_id = '{{ data_accessor_id }}' -- required\nAND region = '{{ region }}' -- required\n;\n"})})]}),(0,n.jsxs)(c.A,{value:"list_data_accessors",children:[(0,n.jsx)(a.p,{children:"Lists the data accessors for a Amazon Q Business application. This operation returns a paginated list of data accessor summaries, including the friendly name, unique identifier, ARN, associated IAM role, and creation/update timestamps for each data accessor."}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"SELECT\nauthenticationDetail,\ncreatedAt,\ndataAccessorArn,\ndataAccessorId,\ndisplayName,\nidcApplicationArn,\nprincipal,\nupdatedAt\nFROM aws.qbusiness.data_accessors\nWHERE application_id = '{{ application_id }}' -- required\nAND region = '{{ region }}' -- required\nAND nextToken = '{{ nextToken }}'\nAND maxResults = '{{ maxResults }}'\n;\n"})})]})]}),"\n",(0,n.jsxs)(a.h2,{id:"insert-examples",children:[(0,n.jsx)(a.code,{children:"INSERT"})," examples"]}),"\n",(0,n.jsxs)(d.A,{defaultValue:"create_data_accessor",values:[{label:"create_data_accessor",value:"create_data_accessor"},{label:"Manifest",value:"manifest"}],children:[(0,n.jsxs)(c.A,{value:"create_data_accessor",children:[(0,n.jsx)(a.p,{children:"Creates a new data accessor for an ISV to access data from a Amazon Q Business application. The data accessor is an entity that represents the ISV's access to the Amazon Q Business application's data. It includes the IAM role ARN for the ISV, a friendly name, and a set of action configurations that define the specific actions the ISV is allowed to perform and any associated data filters. When the data accessor is created, an IAM Identity Center application is also created to manage the ISV's identity and authentication for accessing the Amazon Q Business application."}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"INSERT INTO aws.qbusiness.data_accessors (\nprincipal,\nactionConfigurations,\nclientToken,\ndisplayName,\nauthenticationDetail,\ntags,\napplication_id,\nregion\n)\nSELECT \n'{{ principal }}' /* required */,\n'{{ actionConfigurations }}' /* required */,\n'{{ clientToken }}',\n'{{ displayName }}' /* required */,\n'{{ authenticationDetail }}',\n'{{ tags }}',\n'{{ application_id }}',\n'{{ region }}'\nRETURNING\ndataAccessorArn,\ndataAccessorId,\nidcApplicationArn\n;\n"})})]}),(0,n.jsx)(c.A,{value:"manifest",children:(0,n.jsx)(l.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: data_accessors
props:
  - name: application_id
    value: "{{ application_id }}"
    description: Required parameter for the data_accessors resource.
  - name: region
    value: "{{ region }}"
    description: Required parameter for the data_accessors resource.
  - name: principal
    value: "{{ principal }}"
  - name: actionConfigurations
    value:
      - action: "{{ action }}"
        filterConfiguration:
          documentAttributeFilter:
            andAllFilters:
              - andAllFilters: "{{ andAllFilters }}"
                orAllFilters: "{{ orAllFilters }}"
                notFilter:
                  andAllFilters: "{{ andAllFilters }}"
                  orAllFilters: "{{ orAllFilters }}"
                  notFilter: "{{ notFilter }}"
                  equalsTo: "{{ equalsTo }}"
                  containsAll: "{{ containsAll }}"
                  containsAny: "{{ containsAny }}"
                  greaterThan: "{{ greaterThan }}"
                  greaterThanOrEquals: "{{ greaterThanOrEquals }}"
                  lessThan: "{{ lessThan }}"
                  lessThanOrEquals: "{{ lessThanOrEquals }}"
                equalsTo:
                  name: "{{ name }}"
                  value: "{{ value }}"
                containsAll:
                  name: "{{ name }}"
                  value: "{{ value }}"
                containsAny:
                  name: "{{ name }}"
                  value: "{{ value }}"
                greaterThan:
                  name: "{{ name }}"
                  value: "{{ value }}"
                greaterThanOrEquals:
                  name: "{{ name }}"
                  value: "{{ value }}"
                lessThan:
                  name: "{{ name }}"
                  value: "{{ value }}"
                lessThanOrEquals:
                  name: "{{ name }}"
                  value: "{{ value }}"
            orAllFilters:
              - andAllFilters: "{{ andAllFilters }}"
                orAllFilters: "{{ orAllFilters }}"
                notFilter:
                  andAllFilters: "{{ andAllFilters }}"
                  orAllFilters: "{{ orAllFilters }}"
                  notFilter: "{{ notFilter }}"
                  equalsTo: "{{ equalsTo }}"
                  containsAll: "{{ containsAll }}"
                  containsAny: "{{ containsAny }}"
                  greaterThan: "{{ greaterThan }}"
                  greaterThanOrEquals: "{{ greaterThanOrEquals }}"
                  lessThan: "{{ lessThan }}"
                  lessThanOrEquals: "{{ lessThanOrEquals }}"
                equalsTo:
                  name: "{{ name }}"
                  value: "{{ value }}"
                containsAll:
                  name: "{{ name }}"
                  value: "{{ value }}"
                containsAny:
                  name: "{{ name }}"
                  value: "{{ value }}"
                greaterThan:
                  name: "{{ name }}"
                  value: "{{ value }}"
                greaterThanOrEquals:
                  name: "{{ name }}"
                  value: "{{ value }}"
                lessThan:
                  name: "{{ name }}"
                  value: "{{ value }}"
                lessThanOrEquals:
                  name: "{{ name }}"
                  value: "{{ value }}"
            notFilter:
              andAllFilters:
                - andAllFilters: "{{ andAllFilters }}"
                  orAllFilters: "{{ orAllFilters }}"
                  notFilter:
                    andAllFilters: "{{ andAllFilters }}"
                    orAllFilters: "{{ orAllFilters }}"
                    notFilter: "{{ notFilter }}"
                    equalsTo: "{{ equalsTo }}"
                    containsAll: "{{ containsAll }}"
                    containsAny: "{{ containsAny }}"
                    greaterThan: "{{ greaterThan }}"
                    greaterThanOrEquals: "{{ greaterThanOrEquals }}"
                    lessThan: "{{ lessThan }}"
                    lessThanOrEquals: "{{ lessThanOrEquals }}"
                  equalsTo:
                    name: "{{ name }}"
                    value: "{{ value }}"
                  containsAll:
                    name: "{{ name }}"
                    value: "{{ value }}"
                  containsAny:
                    name: "{{ name }}"
                    value: "{{ value }}"
                  greaterThan:
                    name: "{{ name }}"
                    value: "{{ value }}"
                  greaterThanOrEquals:
                    name: "{{ name }}"
                    value: "{{ value }}"
                  lessThan:
                    name: "{{ name }}"
                    value: "{{ value }}"
                  lessThanOrEquals:
                    name: "{{ name }}"
                    value: "{{ value }}"
              orAllFilters:
                - andAllFilters: "{{ andAllFilters }}"
                  orAllFilters: "{{ orAllFilters }}"
                  notFilter:
                    andAllFilters: "{{ andAllFilters }}"
                    orAllFilters: "{{ orAllFilters }}"
                    notFilter: "{{ notFilter }}"
                    equalsTo: "{{ equalsTo }}"
                    containsAll: "{{ containsAll }}"
                    containsAny: "{{ containsAny }}"
                    greaterThan: "{{ greaterThan }}"
                    greaterThanOrEquals: "{{ greaterThanOrEquals }}"
                    lessThan: "{{ lessThan }}"
                    lessThanOrEquals: "{{ lessThanOrEquals }}"
                  equalsTo:
                    name: "{{ name }}"
                    value: "{{ value }}"
                  containsAll:
                    name: "{{ name }}"
                    value: "{{ value }}"
                  containsAny:
                    name: "{{ name }}"
                    value: "{{ value }}"
                  greaterThan:
                    name: "{{ name }}"
                    value: "{{ value }}"
                  greaterThanOrEquals:
                    name: "{{ name }}"
                    value: "{{ value }}"
                  lessThan:
                    name: "{{ name }}"
                    value: "{{ value }}"
                  lessThanOrEquals:
                    name: "{{ name }}"
                    value: "{{ value }}"
              notFilter:
                andAllFilters: "{{ andAllFilters }}"
                orAllFilters: "{{ orAllFilters }}"
                notFilter: "{{ notFilter }}"
                equalsTo: "{{ equalsTo }}"
                containsAll: "{{ containsAll }}"
                containsAny: "{{ containsAny }}"
                greaterThan: "{{ greaterThan }}"
                greaterThanOrEquals: "{{ greaterThanOrEquals }}"
                lessThan: "{{ lessThan }}"
                lessThanOrEquals: "{{ lessThanOrEquals }}"
              equalsTo:
                name: "{{ name }}"
                value: "{{ value }}"
              containsAll:
                name: "{{ name }}"
                value: "{{ value }}"
              containsAny:
                name: "{{ name }}"
                value: "{{ value }}"
              greaterThan:
                name: "{{ name }}"
                value: "{{ value }}"
              greaterThanOrEquals:
                name: "{{ name }}"
                value: "{{ value }}"
              lessThan:
                name: "{{ name }}"
                value: "{{ value }}"
              lessThanOrEquals:
                name: "{{ name }}"
                value: "{{ value }}"
            equalsTo:
              name: "{{ name }}"
              value:
                stringValue: "{{ stringValue }}"
                stringListValue: "{{ stringListValue }}"
                longValue: {{ longValue }}
                dateValue: "{{ dateValue }}"
            containsAll:
              name: "{{ name }}"
              value:
                stringValue: "{{ stringValue }}"
                stringListValue: "{{ stringListValue }}"
                longValue: {{ longValue }}
                dateValue: "{{ dateValue }}"
            containsAny:
              name: "{{ name }}"
              value:
                stringValue: "{{ stringValue }}"
                stringListValue: "{{ stringListValue }}"
                longValue: {{ longValue }}
                dateValue: "{{ dateValue }}"
            greaterThan:
              name: "{{ name }}"
              value:
                stringValue: "{{ stringValue }}"
                stringListValue: "{{ stringListValue }}"
                longValue: {{ longValue }}
                dateValue: "{{ dateValue }}"
            greaterThanOrEquals:
              name: "{{ name }}"
              value:
                stringValue: "{{ stringValue }}"
                stringListValue: "{{ stringListValue }}"
                longValue: {{ longValue }}
                dateValue: "{{ dateValue }}"
            lessThan:
              name: "{{ name }}"
              value:
                stringValue: "{{ stringValue }}"
                stringListValue: "{{ stringListValue }}"
                longValue: {{ longValue }}
                dateValue: "{{ dateValue }}"
            lessThanOrEquals:
              name: "{{ name }}"
              value:
                stringValue: "{{ stringValue }}"
                stringListValue: "{{ stringListValue }}"
                longValue: {{ longValue }}
                dateValue: "{{ dateValue }}"
  - name: clientToken
    value: "{{ clientToken }}"
  - name: displayName
    value: "{{ displayName }}"
  - name: authenticationDetail
    description: |
      Contains the authentication configuration details for a data accessor. This structure defines how the ISV authenticates when accessing data through the data accessor.
    value:
      authenticationType: "{{ authenticationType }}"
      authenticationConfiguration:
        idcTrustedTokenIssuerConfiguration:
          idcTrustedTokenIssuerArn: "{{ idcTrustedTokenIssuerArn }}"
      externalIds:
        - "{{ externalIds }}"
  - name: tags
    value:
      - key: "{{ key }}"
        value: "{{ value }}"
`})})]}),"\n",(0,n.jsxs)(a.h2,{id:"update-examples",children:[(0,n.jsx)(a.code,{children:"UPDATE"})," examples"]}),"\n",(0,n.jsx)(d.A,{defaultValue:"update_data_accessor",values:[{label:"update_data_accessor",value:"update_data_accessor"}],children:(0,n.jsxs)(c.A,{value:"update_data_accessor",children:[(0,n.jsx)(a.p,{children:"Updates an existing data accessor. This operation allows modifying the action configurations (the allowed actions and associated filters) and the display name of the data accessor. It does not allow changing the IAM role associated with the data accessor or other core properties of the data accessor."}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"UPDATE aws.qbusiness.data_accessors\nSET \nactionConfigurations = '{{ actionConfigurations }}',\nauthenticationDetail = '{{ authenticationDetail }}',\ndisplayName = '{{ displayName }}'\nWHERE \napplication_id = '{{ application_id }}' --required\nAND data_accessor_id = '{{ data_accessor_id }}' --required\nAND region = '{{ region }}' --required\nAND actionConfigurations = '{{ actionConfigurations }}' --required;\n"})})]})}),"\n",(0,n.jsxs)(a.h2,{id:"delete-examples",children:[(0,n.jsx)(a.code,{children:"DELETE"})," examples"]}),"\n",(0,n.jsx)(d.A,{defaultValue:"delete_data_accessor",values:[{label:"delete_data_accessor",value:"delete_data_accessor"}],children:(0,n.jsxs)(c.A,{value:"delete_data_accessor",children:[(0,n.jsx)(a.p,{children:"Deletes a specified data accessor. This operation permanently removes the data accessor and its associated IAM Identity Center application. Any access granted to the ISV through this data accessor will be revoked."}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"DELETE FROM aws.qbusiness.data_accessors\nWHERE application_id = '{{ application_id }}' --required\nAND data_accessor_id = '{{ data_accessor_id }}' --required\nAND region = '{{ region }}' --required\n;\n"})})]})})]})}function p(e={}){let{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}}}]);