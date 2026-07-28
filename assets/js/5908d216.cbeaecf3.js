"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["497631"],{968565(e,r,s){s.r(r),s.d(r,{metadata:()=>i,default:()=>m,frontMatter:()=>o,contentTitle:()=>u,toc:()=>p,assets:()=>h});var i=JSON.parse('{"id":"services/inspector2/filters/index","title":"filters","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/inspector2/filters/index.md","sourceDirName":"services/inspector2/filters","slug":"/services/inspector2/filters/","permalink":"/services/inspector2/filters/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"filters","hide_title":false,"hide_table_of_contents":false,"keywords":["filters","inspector2","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"encryption_keys","permalink":"/services/inspector2/encryption_keys/"},"next":{"title":"finding_aggregations","permalink":"/services/inspector2/finding_aggregations/"}}'),n=s(474848),a=s(28453),l=s(97362),t=s(897272),c=s(413554),d=s(541647);let o={title:"filters",hide_title:!1,hide_table_of_contents:!1,keywords:["filters","inspector2","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},u,h={},p=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function x(e){let r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["Creates, updates, deletes, gets or lists a ",(0,n.jsx)("code",{children:"filters"})," resource."]}),"\n",(0,n.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Name"})}),(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"filters"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Type"})}),(0,n.jsx)("td",{children:"Resource"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Id"})}),(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"aws.inspector2.filters"})})]})]})}),"\n",(0,n.jsx)(r.h2,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(r.p,{children:["The following fields are returned by ",(0,n.jsx)(r.code,{children:"SELECT"})," queries:"]}),"\n",(0,n.jsx)(c.A,{defaultValue:"list_filters",values:[{label:"list_filters",value:"list_filters"}],children:(0,n.jsx)(d.A,{value:"list_filters",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"name"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The name of the filter."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"action"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The action that is to be applied to the findings that match the filter. (NONE, SUPPRESS)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"arn"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The Amazon Resource Number (ARN) associated with this filter."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"createdAt"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"The date and time this filter was created at."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"criteria"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"Details on the criteria used to define the filter."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"description"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"A description of the filter."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"ownerId"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsxs)("td",{children:["The Amazon Web Services account ID of the account that created the filter. (pattern: <code>.",(0,n.jsx)(r.em,{children:"(^\\d{12}$)|(^o-[a-z0-9]{10,32}$)."}),"</code>)"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"reason"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The reason for the filter."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"tags"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"The tags attached to the filter."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"updatedAt"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"The date and time the filter was last updated at."})]})]})]})})}),"\n",(0,n.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(r.p,{children:"The following methods are available for this resource:"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Accessible by"}),(0,n.jsx)("th",{children:"Required Params"}),(0,n.jsx)("th",{children:"Optional Params"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#list_filters",children:(0,n.jsx)(l.A,{code:"list_filters"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"select"})}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Lists the filters associated with your account."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#create_filter",children:(0,n.jsx)(l.A,{code:"create_filter"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"insert"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-action",children:(0,n.jsx)("code",{children:"action"})}),", ",(0,n.jsx)("a",{href:"#parameter-filterCriteria",children:(0,n.jsx)("code",{children:"filterCriteria"})}),", ",(0,n.jsx)("a",{href:"#parameter-name",children:(0,n.jsx)("code",{children:"name"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Creates a filter resource using specified filter criteria. When the filter action is set to SUPPRESS this action creates a suppression rule."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#update_filter",children:(0,n.jsx)(l.A,{code:"update_filter"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"update"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-filterArn",children:(0,n.jsx)("code",{children:"filterArn"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Specifies the action that is to be applied to the findings that match the filter."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#delete_filter",children:(0,n.jsx)(l.A,{code:"delete_filter"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"delete"})}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Deletes a filter resource."})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["Parameters can be passed in the ",(0,n.jsx)(r.code,{children:"WHERE"})," clause of a query. Check the ",(0,n.jsx)(r.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{id:"parameter-region",children:[(0,n.jsx)("td",{children:(0,n.jsx)(l.A,{code:"region"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,n.jsxs)(r.h2,{id:"select-examples",children:[(0,n.jsx)(r.code,{children:"SELECT"})," examples"]}),"\n",(0,n.jsx)(c.A,{defaultValue:"list_filters",values:[{label:"list_filters",value:"list_filters"}],children:(0,n.jsxs)(d.A,{value:"list_filters",children:[(0,n.jsx)(r.p,{children:"Lists the filters associated with your account."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"SELECT\nname,\naction,\narn,\ncreatedAt,\ncriteria,\ndescription,\nownerId,\nreason,\ntags,\nupdatedAt\nFROM aws.inspector2.filters\nWHERE region = '{{ region }}' -- required\n;\n"})})]})}),"\n",(0,n.jsxs)(r.h2,{id:"insert-examples",children:[(0,n.jsx)(r.code,{children:"INSERT"})," examples"]}),"\n",(0,n.jsxs)(c.A,{defaultValue:"create_filter",values:[{label:"create_filter",value:"create_filter"},{label:"Manifest",value:"manifest"}],children:[(0,n.jsxs)(d.A,{value:"create_filter",children:[(0,n.jsx)(r.p,{children:"Creates a filter resource using specified filter criteria. When the filter action is set to SUPPRESS this action creates a suppression rule."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"INSERT INTO aws.inspector2.filters (\naction,\ndescription,\nfilterCriteria,\nname,\ntags,\nreason,\nregion\n)\nSELECT \n'{{ action }}' /* required */,\n'{{ description }}',\n'{{ filterCriteria }}' /* required */,\n'{{ name }}' /* required */,\n'{{ tags }}',\n'{{ reason }}',\n'{{ region }}'\nRETURNING\narn\n;\n"})})]}),(0,n.jsx)(d.A,{value:"manifest",children:(0,n.jsx)(t.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: filters
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the filters resource.
  - name: action
    value: "{{ action }}"
    valid_values: ['NONE', 'SUPPRESS']
  - name: description
    value: "{{ description }}"
  - name: filterCriteria
    description: |
      Details on the criteria used to define the filter.
    value:
      findingArn:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      awsAccountId:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      findingType:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      severity:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      firstObservedAt:
        - startInclusive: "{{ startInclusive }}"
          endInclusive: "{{ endInclusive }}"
      lastObservedAt:
        - startInclusive: "{{ startInclusive }}"
          endInclusive: "{{ endInclusive }}"
      updatedAt:
        - startInclusive: "{{ startInclusive }}"
          endInclusive: "{{ endInclusive }}"
      findingStatus:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      title_:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      inspectorScore:
        - upperInclusive: {{ upperInclusive }}
          lowerInclusive: {{ lowerInclusive }}
      resourceType:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      resourceId:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      resourceTags:
        - comparison: "{{ comparison }}"
          key: "{{ key }}"
          value: "{{ value }}"
      ec2InstanceImageId:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      ec2InstanceVpcId:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      ec2InstanceSubnetId:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      ecrImagePushedAt:
        - startInclusive: "{{ startInclusive }}"
          endInclusive: "{{ endInclusive }}"
      ecrImageArchitecture:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      ecrImageRegistry:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      ecrImageRepositoryName:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      ecrImageTags:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      ecrImageHash:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      ecrImageLastInUseAt:
        - startInclusive: "{{ startInclusive }}"
          endInclusive: "{{ endInclusive }}"
      ecrImageInUseCount:
        - upperInclusive: {{ upperInclusive }}
          lowerInclusive: {{ lowerInclusive }}
      portRange:
        - beginInclusive: {{ beginInclusive }}
          endInclusive: {{ endInclusive }}
      networkProtocol:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      componentId:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      componentType:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      vulnerabilityId:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      vulnerabilitySource:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      vendorSeverity:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      vulnerablePackages:
        - name:
            comparison: "{{ comparison }}"
            value: "{{ value }}"
          version:
            comparison: "{{ comparison }}"
            value: "{{ value }}"
          epoch:
            upperInclusive: {{ upperInclusive }}
            lowerInclusive: {{ lowerInclusive }}
          release:
            comparison: "{{ comparison }}"
            value: "{{ value }}"
          architecture:
            comparison: "{{ comparison }}"
            value: "{{ value }}"
          sourceLayerHash:
            comparison: "{{ comparison }}"
            value: "{{ value }}"
          sourceLambdaLayerArn:
            comparison: "{{ comparison }}"
            value: "{{ value }}"
          filePath:
            comparison: "{{ comparison }}"
            value: "{{ value }}"
      relatedVulnerabilities:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      fixAvailable:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      lambdaFunctionName:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      lambdaFunctionLayers:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      lambdaFunctionRuntime:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      lambdaFunctionLastModifiedAt:
        - startInclusive: "{{ startInclusive }}"
          endInclusive: "{{ endInclusive }}"
      lambdaFunctionExecutionRoleArn:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      exploitAvailable:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      codeVulnerabilityDetectorName:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      codeVulnerabilityDetectorTags:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      codeVulnerabilityFilePath:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      epssScore:
        - upperInclusive: {{ upperInclusive }}
          lowerInclusive: {{ lowerInclusive }}
      codeRepositoryProjectName:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
      codeRepositoryProviderType:
        - comparison: "{{ comparison }}"
          value: "{{ value }}"
  - name: name
    value: "{{ name }}"
  - name: tags
    value: "{{ tags }}"
  - name: reason
    value: "{{ reason }}"
`})})]}),"\n",(0,n.jsxs)(r.h2,{id:"update-examples",children:[(0,n.jsx)(r.code,{children:"UPDATE"})," examples"]}),"\n",(0,n.jsx)(c.A,{defaultValue:"update_filter",values:[{label:"update_filter",value:"update_filter"}],children:(0,n.jsxs)(d.A,{value:"update_filter",children:[(0,n.jsx)(r.p,{children:"Specifies the action that is to be applied to the findings that match the filter."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"UPDATE aws.inspector2.filters\nSET \naction = '{{ action }}',\ndescription = '{{ description }}',\nfilterCriteria = '{{ filterCriteria }}',\nname = '{{ name }}',\nfilterArn = '{{ filterArn }}',\nreason = '{{ reason }}'\nWHERE \nregion = '{{ region }}' --required\nAND filterArn = '{{ filterArn }}' --required\nRETURNING\narn;\n"})})]})}),"\n",(0,n.jsxs)(r.h2,{id:"delete-examples",children:[(0,n.jsx)(r.code,{children:"DELETE"})," examples"]}),"\n",(0,n.jsx)(c.A,{defaultValue:"delete_filter",values:[{label:"delete_filter",value:"delete_filter"}],children:(0,n.jsxs)(d.A,{value:"delete_filter",children:[(0,n.jsx)(r.p,{children:"Deletes a filter resource."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"DELETE FROM aws.inspector2.filters\nWHERE region = '{{ region }}' --required\n;\n"})})]})})]})}function m(e={}){let{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}}}]);