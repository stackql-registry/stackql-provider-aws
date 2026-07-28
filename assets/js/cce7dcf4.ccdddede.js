"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["115365"],{891390(e,i,n){n.r(i),n.d(i,{metadata:()=>s,default:()=>j,frontMatter:()=>o,contentTitle:()=>h,toc:()=>p,assets:()=>u});var s=JSON.parse('{"id":"services/inspector2/findings/index","title":"findings","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/inspector2/findings/index.md","sourceDirName":"services/inspector2/findings","slug":"/services/inspector2/findings/","permalink":"/services/inspector2/findings/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"findings","hide_title":false,"hide_table_of_contents":false,"keywords":["findings","inspector2","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"finding_details","permalink":"/services/inspector2/finding_details/"},"next":{"title":"findings_report_status","permalink":"/services/inspector2/findings_report_status/"}}'),r=n(474848),t=n(28453),d=n(97362),a=n(897272),c=n(413554),l=n(541647);let o={title:"findings",hide_title:!1,hide_table_of_contents:!1,keywords:["findings","inspector2","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,u={},p=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"Lifecycle Methods",id:"lifecycle-methods",level:2}];function x(e){let i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.p,{children:["Creates, updates, deletes, gets or lists a ",(0,r.jsx)("code",{children:"findings"})," resource."]}),"\n",(0,r.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Name"})}),(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"findings"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Type"})}),(0,r.jsx)("td",{children:"Resource"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Id"})}),(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"aws.inspector2.findings"})})]})]})}),"\n",(0,r.jsx)(i.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(i.p,{children:["The following fields are returned by ",(0,r.jsx)(i.code,{children:"SELECT"})," queries:"]}),"\n",(0,r.jsx)(c.A,{defaultValue:"list_findings",values:[{label:"list_findings",value:"list_findings"}],children:(0,r.jsx)(l.A,{value:"list_findings",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"awsAccountId"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The Amazon Web Services account ID associated with the finding. (pattern: <code>\\d{12}</code>)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"codeVulnerabilityDetails"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"Details about the code vulnerability identified in a Lambda function used to filter findings."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"description"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The description of the finding."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"epss"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"The finding's EPSS score."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"exploitAvailable"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"If a finding discovered in your environment has an exploit available. (YES, NO)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"exploitabilityDetails"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"The details of an exploit available for a finding discovered in your environment."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"findingArn"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsxs)("td",{children:["The Amazon Resource Number (ARN) of the finding. (pattern: <code>arn:(aws[a-zA-Z-]*)?:inspector2:[a-z]{2}(-gov)?-[a-z]+-\\d{1}:\\d{12}",":finding","/[a-f0-9]{32}</code>)"]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"firstObservedAt"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string (date-time)"})}),(0,r.jsx)("td",{children:"The date and time that the finding was first observed."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"fixAvailable"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"Details on whether a fix is available through a version update. This value can be YES, NO, or PARTIAL. A PARTIAL fix means that some, but not all, of the packages identified in the finding have fixes available through updated versions. (YES, NO, PARTIAL)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"inspectorScore"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"number (double)"})}),(0,r.jsx)("td",{children:"The Amazon Inspector score given to the finding."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"inspectorScoreDetails"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"An object that contains details of the Amazon Inspector score."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"lastObservedAt"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string (date-time)"})}),(0,r.jsx)("td",{children:"The date and time the finding was last observed. This timestamp for this field remains unchanged until a finding is updated."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"networkReachabilityDetails"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"An object that contains the details of a network reachability finding."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"packageVulnerabilityDetails"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"An object that contains the details of a package vulnerability finding."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"remediation"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"An object that contains the details about how to remediate a finding."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"resources"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"array"})}),(0,r.jsx)("td",{children:"Contains information on the resources involved in a finding. The resource value determines the valid values for type in your request. For more information, see Finding types in the Amazon Inspector user guide."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"severity"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The severity of the finding. UNTRIAGED applies to PACKAGE_VULNERABILITY type findings that the vendor has not assigned a severity yet. For more information, see Severity levels for findings in the Amazon Inspector user guide. (INFORMATIONAL, LOW, MEDIUM, HIGH, CRITICAL, UNTRIAGED)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"status"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The status of the finding. (ACTIVE, SUPPRESSED, CLOSED)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"title_"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The title of the finding."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"type_"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The type of the finding. The type value determines the valid values for resource in your request. For more information, see Finding types in the Amazon Inspector user guide. (NETWORK_REACHABILITY, PACKAGE_VULNERABILITY, CODE_VULNERABILITY)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"updatedAt"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string (date-time)"})}),(0,r.jsx)("td",{children:"The date and time the finding was last updated at."})]})]})]})})}),"\n",(0,r.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(i.p,{children:"The following methods are available for this resource:"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Accessible by"}),(0,r.jsx)("th",{children:"Required Params"}),(0,r.jsx)("th",{children:"Optional Params"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#list_findings",children:(0,r.jsx)(d.A,{code:"list_findings"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"select"})}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Lists findings for your environment."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#create_findings_report",children:(0,r.jsx)(d.A,{code:"create_findings_report"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"insert"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})}),", ",(0,r.jsx)("a",{href:"#parameter-reportFormat",children:(0,r.jsx)("code",{children:"reportFormat"})}),", ",(0,r.jsx)("a",{href:"#parameter-s3Destination",children:(0,r.jsx)("code",{children:"s3Destination"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Creates a finding report. By default only ACTIVE findings are returned in the report. To see SUPRESSED or CLOSED findings you must specify a value for the findingStatus filter criteria."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#cancel_findings_report",children:(0,r.jsx)(d.A,{code:"cancel_findings_report"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"exec"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})}),", ",(0,r.jsx)("a",{href:"#parameter-reportId",children:(0,r.jsx)("code",{children:"reportId"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Cancels the given findings report."})]})]})]}),"\n",(0,r.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(i.p,{children:["Parameters can be passed in the ",(0,r.jsx)(i.code,{children:"WHERE"})," clause of a query. Check the ",(0,r.jsx)(i.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{id:"parameter-region",children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"region"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,r.jsxs)(i.h2,{id:"select-examples",children:[(0,r.jsx)(i.code,{children:"SELECT"})," examples"]}),"\n",(0,r.jsx)(c.A,{defaultValue:"list_findings",values:[{label:"list_findings",value:"list_findings"}],children:(0,r.jsxs)(l.A,{value:"list_findings",children:[(0,r.jsx)(i.p,{children:"Lists findings for your environment."}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"SELECT\nawsAccountId,\ncodeVulnerabilityDetails,\ndescription,\nepss,\nexploitAvailable,\nexploitabilityDetails,\nfindingArn,\nfirstObservedAt,\nfixAvailable,\ninspectorScore,\ninspectorScoreDetails,\nlastObservedAt,\nnetworkReachabilityDetails,\npackageVulnerabilityDetails,\nremediation,\nresources,\nseverity,\nstatus,\ntitle_,\ntype_,\nupdatedAt\nFROM aws.inspector2.findings\nWHERE region = '{{ region }}' -- required\n;\n"})})]})}),"\n",(0,r.jsxs)(i.h2,{id:"insert-examples",children:[(0,r.jsx)(i.code,{children:"INSERT"})," examples"]}),"\n",(0,r.jsxs)(c.A,{defaultValue:"create_findings_report",values:[{label:"create_findings_report",value:"create_findings_report"},{label:"Manifest",value:"manifest"}],children:[(0,r.jsxs)(l.A,{value:"create_findings_report",children:[(0,r.jsx)(i.p,{children:"Creates a finding report. By default only ACTIVE findings are returned in the report. To see SUPRESSED or CLOSED findings you must specify a value for the findingStatus filter criteria."}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"INSERT INTO aws.inspector2.findings (\nfilterCriteria,\nreportFormat,\ns3Destination,\nregion\n)\nSELECT \n'{{ filterCriteria }}',\n'{{ reportFormat }}' /* required */,\n'{{ s3Destination }}' /* required */,\n'{{ region }}'\nRETURNING\nreportId\n;\n"})})]}),(0,r.jsx)(l.A,{value:"manifest",children:(0,r.jsx)(a.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: findings
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the findings resource.
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
  - name: reportFormat
    value: "{{ reportFormat }}"
    valid_values: ['CSV', 'JSON']
  - name: s3Destination
    description: |
      Contains details of the Amazon S3 bucket and KMS key used to export findings.
    value:
      bucketName: "{{ bucketName }}"
      keyPrefix: "{{ keyPrefix }}"
      kmsKeyArn: "{{ kmsKeyArn }}"
`})})]}),"\n",(0,r.jsx)(i.h2,{id:"lifecycle-methods",children:"Lifecycle Methods"}),"\n",(0,r.jsx)(c.A,{defaultValue:"cancel_findings_report",values:[{label:"cancel_findings_report",value:"cancel_findings_report"}],children:(0,r.jsxs)(l.A,{value:"cancel_findings_report",children:[(0,r.jsx)(i.p,{children:"Cancels the given findings report."}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"EXEC aws.inspector2.findings.cancel_findings_report \n@region='{{ region }}' --required \n@@json=\n'{\n\"reportId\": \"{{ reportId }}\"\n}'\n;\n"})})]})})]})}function j(e={}){let{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}}}]);