"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["789250"],{546493(e,a,r){r.r(a),r.d(a,{metadata:()=>s,default:()=>p,frontMatter:()=>u,contentTitle:()=>c,toc:()=>m,assets:()=>h});var s=JSON.parse('{"id":"services/securityhub/automation_rules/index","title":"automation_rules","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/securityhub/automation_rules/index.md","sourceDirName":"services/securityhub/automation_rules","slug":"/services/securityhub/automation_rules/","permalink":"/services/securityhub/automation_rules/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"automation_rules","hide_title":false,"hide_table_of_contents":false,"keywords":["automation_rules","securityhub","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"automation_rule_v2s","permalink":"/services/securityhub/automation_rule_v2s/"},"next":{"title":"automation_rules_v2s","permalink":"/services/securityhub/automation_rules_v2s/"}}'),t=r(474848),n=r(28453),i=r(97362),o=r(897272),l=r(413554),d=r(541647);let u={title:"automation_rules",hide_title:!1,hide_table_of_contents:!1,keywords:["automation_rules","securityhub","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},c,h={},m=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"Lifecycle Methods",id:"lifecycle-methods",level:2}];function x(e){let a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["Creates, updates, deletes, gets or lists an ",(0,t.jsx)("code",{children:"automation_rules"})," resource."]}),"\n",(0,t.jsx)(a.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)("table",{children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Name"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.A,{code:"automation_rules"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Type"})}),(0,t.jsx)("td",{children:"Resource"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Id"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.A,{code:"aws.securityhub.automation_rules"})})]})]})}),"\n",(0,t.jsx)(a.h2,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(a.p,{children:["The following fields are returned by ",(0,t.jsx)(a.code,{children:"SELECT"})," queries:"]}),"\n",(0,t.jsxs)(l.A,{defaultValue:"batch_get_automation_rules",values:[{label:"batch_get_automation_rules",value:"batch_get_automation_rules"},{label:"list_automation_rules",value:"list_automation_rules"}],children:[(0,t.jsx)(d.A,{value:"batch_get_automation_rules",children:(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Datatype"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(i.A,{code:"Rules"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"array"})}),(0,t.jsx)("td",{children:"A list of rule details for the provided rule ARNs."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(i.A,{code:"UnprocessedAutomationRules"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"array"})}),(0,t.jsx)("td",{children:"A list of objects containing RuleArn, ErrorCode, and ErrorMessage. This parameter tells you which automation rules the request didn't retrieve and why."})]})]})]})}),(0,t.jsx)(d.A,{value:"list_automation_rules",children:(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Datatype"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(i.A,{code:"AutomationRulesMetadata"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"array"})}),(0,t.jsx)("td",{children:"Metadata for rules in the calling account. The response includes rules with a RuleStatus of ENABLED and DISABLED."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(i.A,{code:"NextToken"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"A pagination token for the response."})]})]})]})})]}),"\n",(0,t.jsx)(a.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(a.p,{children:"The following methods are available for this resource:"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Accessible by"}),(0,t.jsx)("th",{children:"Required Params"}),(0,t.jsx)("th",{children:"Optional Params"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#batch_get_automation_rules",children:(0,t.jsx)(i.A,{code:"batch_get_automation_rules"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.A,{code:"select"})}),(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"Retrieves a list of details for automation rules based on rule Amazon Resource Names (ARNs)."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#list_automation_rules",children:(0,t.jsx)(i.A,{code:"list_automation_rules"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.A,{code:"select"})}),(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("a",{href:"#parameter-NextToken",children:(0,t.jsx)("code",{children:"NextToken"})}),", ",(0,t.jsx)("a",{href:"#parameter-MaxResults",children:(0,t.jsx)("code",{children:"MaxResults"})})]}),(0,t.jsx)("td",{children:"A list of automation rules and their metadata for the calling account."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#create_automation_rule",children:(0,t.jsx)(i.A,{code:"create_automation_rule"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.A,{code:"insert"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})}),", ",(0,t.jsx)("a",{href:"#parameter-RuleOrder",children:(0,t.jsx)("code",{children:"RuleOrder"})}),", ",(0,t.jsx)("a",{href:"#parameter-RuleName",children:(0,t.jsx)("code",{children:"RuleName"})}),", ",(0,t.jsx)("a",{href:"#parameter-Description",children:(0,t.jsx)("code",{children:"Description"})}),", ",(0,t.jsx)("a",{href:"#parameter-Criteria",children:(0,t.jsx)("code",{children:"Criteria"})}),", ",(0,t.jsx)("a",{href:"#parameter-Actions",children:(0,t.jsx)("code",{children:"Actions"})})]}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"Creates an automation rule based on input parameters."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#batch_delete_automation_rules",children:(0,t.jsx)(i.A,{code:"batch_delete_automation_rules"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.A,{code:"exec"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})}),", ",(0,t.jsx)("a",{href:"#parameter-AutomationRulesArns",children:(0,t.jsx)("code",{children:"AutomationRulesArns"})})]}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"Deletes one or more automation rules."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#batch_update_automation_rules",children:(0,t.jsx)(i.A,{code:"batch_update_automation_rules"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.A,{code:"exec"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})}),", ",(0,t.jsx)("a",{href:"#parameter-UpdateAutomationRulesRequestItems",children:(0,t.jsx)("code",{children:"UpdateAutomationRulesRequestItems"})})]}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"Updates one or more automation rules based on rule Amazon Resource Names (ARNs) and input parameters."})]})]})]}),"\n",(0,t.jsx)(a.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(a.p,{children:["Parameters can be passed in the ",(0,t.jsx)(a.code,{children:"WHERE"})," clause of a query. Check the ",(0,t.jsx)(a.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Datatype"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{id:"parameter-region",children:[(0,t.jsx)("td",{children:(0,t.jsx)(i.A,{code:"region"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"AWS region (default: us-east-1)"})]}),(0,t.jsxs)("tr",{id:"parameter-MaxResults",children:[(0,t.jsx)("td",{children:(0,t.jsx)(i.A,{code:"MaxResults"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"integer"})}),(0,t.jsx)("td",{children:"The maximum number of rules to return in the response. This currently ranges from 1 to 100."})]}),(0,t.jsxs)("tr",{id:"parameter-NextToken",children:[(0,t.jsx)("td",{children:(0,t.jsx)(i.A,{code:"NextToken"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"A token to specify where to start paginating the response. This is the NextToken from a previously truncated response. On your first call to the ListAutomationRules API, set the value of this parameter to NULL."})]})]})]}),"\n",(0,t.jsxs)(a.h2,{id:"select-examples",children:[(0,t.jsx)(a.code,{children:"SELECT"})," examples"]}),"\n",(0,t.jsxs)(l.A,{defaultValue:"batch_get_automation_rules",values:[{label:"batch_get_automation_rules",value:"batch_get_automation_rules"},{label:"list_automation_rules",value:"list_automation_rules"}],children:[(0,t.jsxs)(d.A,{value:"batch_get_automation_rules",children:[(0,t.jsx)(a.p,{children:"Retrieves a list of details for automation rules based on rule Amazon Resource Names (ARNs)."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"SELECT\nRules,\nUnprocessedAutomationRules\nFROM aws.securityhub.automation_rules\nWHERE region = '{{ region }}' -- required\n;\n"})})]}),(0,t.jsxs)(d.A,{value:"list_automation_rules",children:[(0,t.jsx)(a.p,{children:"A list of automation rules and their metadata for the calling account."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"SELECT\nAutomationRulesMetadata,\nNextToken\nFROM aws.securityhub.automation_rules\nWHERE region = '{{ region }}' -- required\nAND NextToken = '{{ NextToken }}'\nAND MaxResults = '{{ MaxResults }}'\n;\n"})})]})]}),"\n",(0,t.jsxs)(a.h2,{id:"insert-examples",children:[(0,t.jsx)(a.code,{children:"INSERT"})," examples"]}),"\n",(0,t.jsxs)(l.A,{defaultValue:"create_automation_rule",values:[{label:"create_automation_rule",value:"create_automation_rule"},{label:"Manifest",value:"manifest"}],children:[(0,t.jsxs)(d.A,{value:"create_automation_rule",children:[(0,t.jsx)(a.p,{children:"Creates an automation rule based on input parameters."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"INSERT INTO aws.securityhub.automation_rules (\nTags,\nRuleStatus,\nRuleOrder,\nRuleName,\nDescription,\nIsTerminal,\nCriteria,\nActions,\nregion\n)\nSELECT \n'{{ Tags }}',\n'{{ RuleStatus }}',\n{{ RuleOrder }} /* required */,\n'{{ RuleName }}' /* required */,\n'{{ Description }}' /* required */,\n{{ IsTerminal }},\n'{{ Criteria }}' /* required */,\n'{{ Actions }}' /* required */,\n'{{ region }}'\nRETURNING\nRuleArn\n;\n"})})]}),(0,t.jsx)(d.A,{value:"manifest",children:(0,t.jsx)(o.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: automation_rules
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the automation_rules resource.
  - name: Tags
    value: "{{ Tags }}"
  - name: RuleStatus
    value: "{{ RuleStatus }}"
    valid_values: ['ENABLED', 'DISABLED']
  - name: RuleOrder
    value: {{ RuleOrder }}
  - name: RuleName
    value: "{{ RuleName }}"
  - name: Description
    value: "{{ Description }}"
  - name: IsTerminal
    value: {{ IsTerminal }}
  - name: Criteria
    description: |
      The criteria that determine which findings a rule applies to.
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
      SourceUrl:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ProductName:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      CompanyName:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      SeverityLabel:
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
      ResourceDetailsOther:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ComplianceStatus:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ComplianceSecurityControlId:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ComplianceAssociatedStandardsId:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      VerificationState:
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
      UserDefinedFields:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ResourceApplicationArn:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      ResourceApplicationName:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
      AwsAccountName:
        - Value: "{{ Value }}"
          Comparison: "{{ Comparison }}"
  - name: Actions
    value:
      - Type: "{{ Type }}"
        FindingFieldsUpdate:
          Note:
            Text: "{{ Text }}"
            UpdatedBy: "{{ UpdatedBy }}"
          Severity:
            Normalized: {{ Normalized }}
            Product: {{ Product }}
            Label: "{{ Label }}"
          VerificationState: "{{ VerificationState }}"
          Confidence: {{ Confidence }}
          Criticality: {{ Criticality }}
          Types:
            - "{{ Types }}"
          UserDefinedFields: "{{ UserDefinedFields }}"
          Workflow:
            Status: "{{ Status }}"
          RelatedFindings:
            - ProductArn: "{{ ProductArn }}"
              Id: "{{ Id }}"
`})})]}),"\n",(0,t.jsx)(a.h2,{id:"lifecycle-methods",children:"Lifecycle Methods"}),"\n",(0,t.jsxs)(l.A,{defaultValue:"batch_delete_automation_rules",values:[{label:"batch_delete_automation_rules",value:"batch_delete_automation_rules"},{label:"batch_update_automation_rules",value:"batch_update_automation_rules"}],children:[(0,t.jsxs)(d.A,{value:"batch_delete_automation_rules",children:[(0,t.jsx)(a.p,{children:"Deletes one or more automation rules."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"EXEC aws.securityhub.automation_rules.batch_delete_automation_rules \n@region='{{ region }}' --required \n@@json=\n'{\n\"AutomationRulesArns\": \"{{ AutomationRulesArns }}\"\n}'\n;\n"})})]}),(0,t.jsxs)(d.A,{value:"batch_update_automation_rules",children:[(0,t.jsx)(a.p,{children:"Updates one or more automation rules based on rule Amazon Resource Names (ARNs) and input parameters."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"EXEC aws.securityhub.automation_rules.batch_update_automation_rules \n@region='{{ region }}' --required \n@@json=\n'{\n\"UpdateAutomationRulesRequestItems\": \"{{ UpdateAutomationRulesRequestItems }}\"\n}'\n;\n"})})]})]})]})}function p(e={}){let{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}}}]);