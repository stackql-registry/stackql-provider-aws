"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["253676"],{933381(e,i,s){s.r(i),s.d(i,{metadata:()=>a,default:()=>C,frontMatter:()=>u,contentTitle:()=>c,toc:()=>p,assets:()=>h});var a=JSON.parse('{"id":"services/securityhub/insights/index","title":"insights","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/securityhub/insights/index.md","sourceDirName":"services/securityhub/insights","slug":"/services/securityhub/insights/","permalink":"/services/securityhub/insights/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"insights","hide_title":false,"hide_table_of_contents":false,"keywords":["insights","securityhub","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"insight_results","permalink":"/services/securityhub/insight_results/"},"next":{"title":"invitations","permalink":"/services/securityhub/invitations/"}}'),r=s(474848),t=s(28453),n=s(97362),o=s(897272),l=s(413554),d=s(541647);let u={title:"insights",hide_title:!1,hide_table_of_contents:!1,keywords:["insights","securityhub","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},c,h={},p=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function m(e){let i={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.p,{children:["Creates, updates, deletes, gets or lists an ",(0,r.jsx)("code",{children:"insights"})," resource."]}),"\n",(0,r.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Name"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"insights"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Type"})}),(0,r.jsx)("td",{children:"Resource"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Id"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"aws.securityhub.insights"})})]})]})}),"\n",(0,r.jsx)(i.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(i.p,{children:["The following fields are returned by ",(0,r.jsx)(i.code,{children:"SELECT"})," queries:"]}),"\n",(0,r.jsx)(l.A,{defaultValue:"get_insights",values:[{label:"get_insights",value:"get_insights"}],children:(0,r.jsx)(d.A,{value:"get_insights",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"Filters"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"A collection of filters that are applied to all active findings aggregated by Security Hub CSPM. You can filter by up to ten finding attributes. For each attribute, you can provide up to 20 filter values."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"GroupByAttribute"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsxs)("td",{children:["The grouping attribute for the insight's findings. Indicates how to group the matching findings, and identifies the type of item that the insight applies to. For example, if an insight is grouped by resource identifier, then the insight produces a list of resource identifiers. (pattern: <code>.",(0,r.jsx)(i.em,{children:"\\S."}),"</code>)"]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"InsightArn"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsxs)("td",{children:["The ARN of a Security Hub CSPM insight. (pattern: <code>.",(0,r.jsx)(i.em,{children:"\\S."}),"</code>)"]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"Name"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsxs)("td",{children:["The name of a Security Hub CSPM insight. (pattern: <code>.",(0,r.jsx)(i.em,{children:"\\S."}),"</code>)"]})]})]})]})})}),"\n",(0,r.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(i.p,{children:"The following methods are available for this resource:"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Accessible by"}),(0,r.jsx)("th",{children:"Required Params"}),(0,r.jsx)("th",{children:"Optional Params"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#get_insights",children:(0,r.jsx)(n.A,{code:"get_insights"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"select"})}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Lists and describes insights for the specified insight ARNs."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#create_insight",children:(0,r.jsx)(n.A,{code:"create_insight"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"insert"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})}),", ",(0,r.jsx)("a",{href:"#parameter-GroupByAttribute",children:(0,r.jsx)("code",{children:"GroupByAttribute"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Creates a custom insight in Security Hub CSPM. An insight is a consolidation of findings that relate to a security issue that requires attention or remediation. To group the related findings in the insight, use the GroupByAttribute."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#update_insight",children:(0,r.jsx)(n.A,{code:"update_insight"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"update"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-insight_arn",children:(0,r.jsx)("code",{children:"insight_arn"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Updates the Security Hub CSPM insight identified by the specified insight ARN."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#delete_insight",children:(0,r.jsx)(n.A,{code:"delete_insight"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"delete"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-insight_arn",children:(0,r.jsx)("code",{children:"insight_arn"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Deletes the insight specified by the InsightArn."})]})]})]}),"\n",(0,r.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(i.p,{children:["Parameters can be passed in the ",(0,r.jsx)(i.code,{children:"WHERE"})," clause of a query. Check the ",(0,r.jsx)(i.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{id:"parameter-insight_arn",children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"insight_arn"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The ARN of the insight to delete."})]}),(0,r.jsxs)("tr",{id:"parameter-region",children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.A,{code:"region"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"AWS region (default: us-east-1)"})]})]})]}),"\n",(0,r.jsxs)(i.h2,{id:"select-examples",children:[(0,r.jsx)(i.code,{children:"SELECT"})," examples"]}),"\n",(0,r.jsx)(l.A,{defaultValue:"get_insights",values:[{label:"get_insights",value:"get_insights"}],children:(0,r.jsxs)(d.A,{value:"get_insights",children:[(0,r.jsx)(i.p,{children:"Lists and describes insights for the specified insight ARNs."}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"SELECT\nFilters,\nGroupByAttribute,\nInsightArn,\nName\nFROM aws.securityhub.insights\nWHERE region = '{{ region }}' -- required\n;\n"})})]})}),"\n",(0,r.jsxs)(i.h2,{id:"insert-examples",children:[(0,r.jsx)(i.code,{children:"INSERT"})," examples"]}),"\n",(0,r.jsxs)(l.A,{defaultValue:"create_insight",values:[{label:"create_insight",value:"create_insight"},{label:"Manifest",value:"manifest"}],children:[(0,r.jsxs)(d.A,{value:"create_insight",children:[(0,r.jsx)(i.p,{children:"Creates a custom insight in Security Hub CSPM. An insight is a consolidation of findings that relate to a security issue that requires attention or remediation. To group the related findings in the insight, use the GroupByAttribute."}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"INSERT INTO aws.securityhub.insights (\nName,\nFilters,\nGroupByAttribute,\nregion\n)\nSELECT \n'{{ Name }}',\n'{{ Filters }}',\n'{{ GroupByAttribute }}' /* required */,\n'{{ region }}'\nRETURNING\nInsightArn\n;\n"})})]}),(0,r.jsx)(d.A,{value:"manifest",children:(0,r.jsx)(o.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: insights
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the insights resource.
  - name: Name
    value: "{{ Name }}"
  - name: Filters
    description: |
      A collection of filters that are applied to all active findings aggregated by Security Hub CSPM. You can filter by up to ten finding attributes. For each attribute, you can provide up to 20 filter values.
    value:
      ProductArn:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      AwsAccountId:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      Id:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      GeneratorId:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      Region:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      Type:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      FirstObservedAt:
        - Start: "{{ Start }}"
          End: "{{ End }}"
          DateRange:
            Value: {{ Value }}
            Unit: "{{ Unit }}"
            Comparison: "{{ Comparison }}"
      LastObservedAt:
        - Start: "{{ Start }}"
          End: "{{ End }}"
          DateRange:
            Value: {{ Value }}
            Unit: "{{ Unit }}"
            Comparison: "{{ Comparison }}"
      CreatedAt:
        - Start: "{{ Start }}"
          End: "{{ End }}"
          DateRange:
            Value: {{ Value }}
            Unit: "{{ Unit }}"
            Comparison: "{{ Comparison }}"
      UpdatedAt:
        - Start: "{{ Start }}"
          End: "{{ End }}"
          DateRange:
            Value: {{ Value }}
            Unit: "{{ Unit }}"
            Comparison: "{{ Comparison }}"
      SeverityProduct:
        - Gte: {{ Gte }}
          Lte: {{ Lte }}
          Eq: {{ Eq }}
          Gt: {{ Gt }}
          Lt: {{ Lt }}
      SeverityNormalized:
        - Gte: {{ Gte }}
          Lte: {{ Lte }}
          Eq: {{ Eq }}
          Gt: {{ Gt }}
          Lt: {{ Lt }}
      SeverityLabel:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      Confidence:
        - Gte: {{ Gte }}
          Lte: {{ Lte }}
          Eq: {{ Eq }}
          Gt: {{ Gt }}
          Lt: {{ Lt }}
      Criticality:
        - Gte: {{ Gte }}
          Lte: {{ Lte }}
          Eq: {{ Eq }}
          Gt: {{ Gt }}
          Lt: {{ Lt }}
      Title:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      Description:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      RecommendationText:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      SourceUrl:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ProductFields:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ProductName:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      CompanyName:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      UserDefinedFields:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      MalwareName:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      MalwareType:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      MalwarePath:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      MalwareState:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      NetworkDirection:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      NetworkProtocol:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      NetworkSourceIpV4:
        - Cidr: "{{ Cidr }}"
      NetworkSourceIpV6:
        - Cidr: "{{ Cidr }}"
      NetworkSourcePort:
        - Gte: {{ Gte }}
          Lte: {{ Lte }}
          Eq: {{ Eq }}
          Gt: {{ Gt }}
          Lt: {{ Lt }}
      NetworkSourceDomain:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      NetworkSourceMac:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      NetworkDestinationIpV4:
        - Cidr: "{{ Cidr }}"
      NetworkDestinationIpV6:
        - Cidr: "{{ Cidr }}"
      NetworkDestinationPort:
        - Gte: {{ Gte }}
          Lte: {{ Lte }}
          Eq: {{ Eq }}
          Gt: {{ Gt }}
          Lt: {{ Lt }}
      NetworkDestinationDomain:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ProcessName:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ProcessPath:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ProcessPid:
        - Gte: {{ Gte }}
          Lte: {{ Lte }}
          Eq: {{ Eq }}
          Gt: {{ Gt }}
          Lt: {{ Lt }}
      ProcessParentPid:
        - Gte: {{ Gte }}
          Lte: {{ Lte }}
          Eq: {{ Eq }}
          Gt: {{ Gt }}
          Lt: {{ Lt }}
      ProcessLaunchedAt:
        - Start: "{{ Start }}"
          End: "{{ End }}"
          DateRange:
            Value: {{ Value }}
            Unit: "{{ Unit }}"
            Comparison: "{{ Comparison }}"
      ProcessTerminatedAt:
        - Start: "{{ Start }}"
          End: "{{ End }}"
          DateRange:
            Value: {{ Value }}
            Unit: "{{ Unit }}"
            Comparison: "{{ Comparison }}"
      ThreatIntelIndicatorType:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ThreatIntelIndicatorValue:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ThreatIntelIndicatorCategory:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ThreatIntelIndicatorLastObservedAt:
        - Start: "{{ Start }}"
          End: "{{ End }}"
          DateRange:
            Value: {{ Value }}
            Unit: "{{ Unit }}"
            Comparison: "{{ Comparison }}"
      ThreatIntelIndicatorSource:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ThreatIntelIndicatorSourceUrl:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ResourceType:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ResourceId:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ResourcePartition:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ResourceRegion:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ResourceTags:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ResourceAwsEc2InstanceType:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ResourceAwsEc2InstanceImageId:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ResourceAwsEc2InstanceIpV4Addresses:
        - Cidr: "{{ Cidr }}"
      ResourceAwsEc2InstanceIpV6Addresses:
        - Cidr: "{{ Cidr }}"
      ResourceAwsEc2InstanceKeyName:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ResourceAwsEc2InstanceIamInstanceProfileArn:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ResourceAwsEc2InstanceVpcId:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ResourceAwsEc2InstanceSubnetId:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ResourceAwsEc2InstanceLaunchedAt:
        - Start: "{{ Start }}"
          End: "{{ End }}"
          DateRange:
            Value: {{ Value }}
            Unit: "{{ Unit }}"
            Comparison: "{{ Comparison }}"
      ResourceAwsS3BucketOwnerId:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ResourceAwsS3BucketOwnerName:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ResourceAwsIamAccessKeyUserName:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ResourceAwsIamAccessKeyPrincipalName:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ResourceAwsIamAccessKeyStatus:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ResourceAwsIamAccessKeyCreatedAt:
        - Start: "{{ Start }}"
          End: "{{ End }}"
          DateRange:
            Value: {{ Value }}
            Unit: "{{ Unit }}"
            Comparison: "{{ Comparison }}"
      ResourceAwsIamUserUserName:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ResourceContainerName:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ResourceContainerImageId:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ResourceContainerImageName:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ResourceContainerLaunchedAt:
        - Start: "{{ Start }}"
          End: "{{ End }}"
          DateRange:
            Value: {{ Value }}
            Unit: "{{ Unit }}"
            Comparison: "{{ Comparison }}"
      ResourceDetailsOther:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ComplianceStatus:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      VerificationState:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      WorkflowState:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      WorkflowStatus:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      RecordState:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      RelatedFindingsProductArn:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      RelatedFindingsId:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      NoteText:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      NoteUpdatedAt:
        - Start: "{{ Start }}"
          End: "{{ End }}"
          DateRange:
            Value: {{ Value }}
            Unit: "{{ Unit }}"
            Comparison: "{{ Comparison }}"
      NoteUpdatedBy:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      Keyword:
        - Value: "{{ Value }}"
      FindingProviderFieldsConfidence:
        - Gte: {{ Gte }}
          Lte: {{ Lte }}
          Eq: {{ Eq }}
          Gt: {{ Gt }}
          Lt: {{ Lt }}
      FindingProviderFieldsCriticality:
        - Gte: {{ Gte }}
          Lte: {{ Lte }}
          Eq: {{ Eq }}
          Gt: {{ Gt }}
          Lt: {{ Lt }}
      FindingProviderFieldsRelatedFindingsId:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      FindingProviderFieldsRelatedFindingsProductArn:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      FindingProviderFieldsSeverityLabel:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      FindingProviderFieldsSeverityOriginal:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      FindingProviderFieldsTypes:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      Sample:
        - Value: {{ Value }}
      ComplianceSecurityControlId:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ComplianceAssociatedStandardsId:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      VulnerabilitiesExploitAvailable:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      VulnerabilitiesFixAvailable:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ComplianceSecurityControlParametersName:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ComplianceSecurityControlParametersValue:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      AwsAccountName:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ResourceApplicationName:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ResourceApplicationArn:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
  - name: GroupByAttribute
    value: "{{ GroupByAttribute }}"
`})})]}),"\n",(0,r.jsxs)(i.h2,{id:"update-examples",children:[(0,r.jsx)(i.code,{children:"UPDATE"})," examples"]}),"\n",(0,r.jsx)(l.A,{defaultValue:"update_insight",values:[{label:"update_insight",value:"update_insight"}],children:(0,r.jsxs)(d.A,{value:"update_insight",children:[(0,r.jsx)(i.p,{children:"Updates the Security Hub CSPM insight identified by the specified insight ARN."}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"UPDATE aws.securityhub.insights\nSET \nName = '{{ Name }}',\nFilters = '{{ Filters }}',\nGroupByAttribute = '{{ GroupByAttribute }}'\nWHERE \ninsight_arn = '{{ insight_arn }}' --required\nAND region = '{{ region }}' --required;\n"})})]})}),"\n",(0,r.jsxs)(i.h2,{id:"delete-examples",children:[(0,r.jsx)(i.code,{children:"DELETE"})," examples"]}),"\n",(0,r.jsx)(l.A,{defaultValue:"delete_insight",values:[{label:"delete_insight",value:"delete_insight"}],children:(0,r.jsxs)(d.A,{value:"delete_insight",children:[(0,r.jsx)(i.p,{children:"Deletes the insight specified by the InsightArn."}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"DELETE FROM aws.securityhub.insights\nWHERE insight_arn = '{{ insight_arn }}' --required\nAND region = '{{ region }}' --required\n;\n"})})]})})]})}function C(e={}){let{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}}}]);