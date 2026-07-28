"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["893977"],{722081(e,s,n){n.r(s),n.d(s,{metadata:()=>r,default:()=>p,frontMatter:()=>o,contentTitle:()=>u,toc:()=>x,assets:()=>h});var r=JSON.parse('{"id":"services/connectcases/case_rules/index","title":"case_rules","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/connectcases/case_rules/index.md","sourceDirName":"services/connectcases/case_rules","slug":"/services/connectcases/case_rules/","permalink":"/services/connectcases/case_rules/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"case_rules","hide_title":false,"hide_table_of_contents":false,"keywords":["case_rules","connectcases","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"case_event_configurations","permalink":"/services/connectcases/case_event_configurations/"},"next":{"title":"cases","permalink":"/services/connectcases/cases/"}}'),d=n(474848),a=n(28453),i=n(97362),l=n(897272),c=n(413554),t=n(541647);let o={title:"case_rules",hide_title:!1,hide_table_of_contents:!1,keywords:["case_rules","connectcases","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},u,h={},x=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function j(e){let s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.p,{children:["Creates, updates, deletes, gets or lists a ",(0,d.jsx)("code",{children:"case_rules"})," resource."]}),"\n",(0,d.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,d.jsx)("table",{children:(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"Name"})}),(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"case_rules"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"Type"})}),(0,d.jsx)("td",{children:"Resource"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"Id"})}),(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"aws.connectcases.case_rules"})})]})]})}),"\n",(0,d.jsx)(s.h2,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(s.p,{children:["The following fields are returned by ",(0,d.jsx)(s.code,{children:"SELECT"})," queries:"]}),"\n",(0,d.jsxs)(c.A,{defaultValue:"batch_get_case_rule",values:[{label:"batch_get_case_rule",value:"batch_get_case_rule"},{label:"list_case_rules",value:"list_case_rules"}],children:[(0,d.jsx)(t.A,{value:"batch_get_case_rule",children:(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Name"}),(0,d.jsx)("th",{children:"Datatype"}),(0,d.jsx)("th",{children:"Description"})]})}),(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"caseRules"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"array"})}),(0,d.jsx)("td",{children:"A list of detailed case rule information."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"errors"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"array"})}),(0,d.jsx)("td",{children:"A list of case rule errors."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"unprocessedCaseRules"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"array"})}),(0,d.jsx)("td",{children:"A list of unprocessed case rule identifiers."})]})]})]})}),(0,d.jsx)(t.A,{value:"list_case_rules",children:(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Name"}),(0,d.jsx)("th",{children:"Datatype"}),(0,d.jsx)("th",{children:"Description"})]})}),(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"name"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"Name of the case rule. (pattern: <code>.*[\\S]</code>)"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"caseRuleArn"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"The Amazon Resource Name (ARN) of the case rule."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"caseRuleId"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"Unique identifier of a case rule."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"description"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"Description of a case rule."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"ruleType"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"Possible types for a rule. (Required, Hidden, FieldOptions)"})]})]})]})})]}),"\n",(0,d.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,d.jsx)(s.p,{children:"The following methods are available for this resource:"}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Name"}),(0,d.jsx)("th",{children:"Accessible by"}),(0,d.jsx)("th",{children:"Required Params"}),(0,d.jsx)("th",{children:"Optional Params"}),(0,d.jsx)("th",{children:"Description"})]})}),(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("a",{href:"#batch_get_case_rule",children:(0,d.jsx)(i.A,{code:"batch_get_case_rule"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"select"})}),(0,d.jsxs)("td",{children:[(0,d.jsx)("a",{href:"#parameter-domain_id",children:(0,d.jsx)("code",{children:"domain_id"})}),", ",(0,d.jsx)("a",{href:"#parameter-region",children:(0,d.jsx)("code",{children:"region"})})]}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:"Gets a batch of case rules. In the Amazon Connect admin website, case rules are known as case field conditions. For more information about case field conditions, see Add case field conditions to a case template."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("a",{href:"#list_case_rules",children:(0,d.jsx)(i.A,{code:"list_case_rules"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"select"})}),(0,d.jsxs)("td",{children:[(0,d.jsx)("a",{href:"#parameter-domain_id",children:(0,d.jsx)("code",{children:"domain_id"})}),", ",(0,d.jsx)("a",{href:"#parameter-region",children:(0,d.jsx)("code",{children:"region"})})]}),(0,d.jsxs)("td",{children:[(0,d.jsx)("a",{href:"#parameter-maxResults",children:(0,d.jsx)("code",{children:"maxResults"})}),", ",(0,d.jsx)("a",{href:"#parameter-nextToken",children:(0,d.jsx)("code",{children:"nextToken"})})]}),(0,d.jsx)("td",{children:"Lists all case rules in a Cases domain. In the Amazon Connect admin website, case rules are known as case field conditions. For more information about case field conditions, see Add case field conditions to a case template."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("a",{href:"#create_case_rule",children:(0,d.jsx)(i.A,{code:"create_case_rule"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"insert"})}),(0,d.jsxs)("td",{children:[(0,d.jsx)("a",{href:"#parameter-domain_id",children:(0,d.jsx)("code",{children:"domain_id"})}),", ",(0,d.jsx)("a",{href:"#parameter-region",children:(0,d.jsx)("code",{children:"region"})}),", ",(0,d.jsx)("a",{href:"#parameter-name",children:(0,d.jsx)("code",{children:"name"})}),", ",(0,d.jsx)("a",{href:"#parameter-rule",children:(0,d.jsx)("code",{children:"rule"})})]}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:"Creates a new case rule. In the Amazon Connect admin website, case rules are known as case field conditions. For more information about case field conditions, see Add case field conditions to a case template."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("a",{href:"#update_case_rule",children:(0,d.jsx)(i.A,{code:"update_case_rule"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"update"})}),(0,d.jsxs)("td",{children:[(0,d.jsx)("a",{href:"#parameter-domain_id",children:(0,d.jsx)("code",{children:"domain_id"})}),", ",(0,d.jsx)("a",{href:"#parameter-case_rule_id",children:(0,d.jsx)("code",{children:"case_rule_id"})}),", ",(0,d.jsx)("a",{href:"#parameter-region",children:(0,d.jsx)("code",{children:"region"})})]}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:"Updates a case rule. In the Amazon Connect admin website, case rules are known as case field conditions. For more information about case field conditions, see Add case field conditions to a case template."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("a",{href:"#delete_case_rule",children:(0,d.jsx)(i.A,{code:"delete_case_rule"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"delete"})}),(0,d.jsxs)("td",{children:[(0,d.jsx)("a",{href:"#parameter-domain_id",children:(0,d.jsx)("code",{children:"domain_id"})}),", ",(0,d.jsx)("a",{href:"#parameter-case_rule_id",children:(0,d.jsx)("code",{children:"case_rule_id"})}),", ",(0,d.jsx)("a",{href:"#parameter-region",children:(0,d.jsx)("code",{children:"region"})})]}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:"Deletes a case rule. In the Amazon Connect admin website, case rules are known as case field conditions. For more information about case field conditions, see Add case field conditions to a case template."})]})]})]}),"\n",(0,d.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsxs)(s.p,{children:["Parameters can be passed in the ",(0,d.jsx)(s.code,{children:"WHERE"})," clause of a query. Check the ",(0,d.jsx)(s.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Name"}),(0,d.jsx)("th",{children:"Datatype"}),(0,d.jsx)("th",{children:"Description"})]})}),(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{id:"parameter-case_rule_id",children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"case_rule_id"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"Unique identifier of a case rule."})]}),(0,d.jsxs)("tr",{id:"parameter-domain_id",children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"domain_id"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"Unique identifier of a Cases domain."})]}),(0,d.jsxs)("tr",{id:"parameter-region",children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"region"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"AWS region (default: us-east-1)"})]}),(0,d.jsxs)("tr",{id:"parameter-maxResults",children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"maxResults"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"integer"})}),(0,d.jsx)("td",{children:"The maximum number of results to return per page."})]}),(0,d.jsxs)("tr",{id:"parameter-nextToken",children:[(0,d.jsx)("td",{children:(0,d.jsx)(i.A,{code:"nextToken"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results."})]})]})]}),"\n",(0,d.jsxs)(s.h2,{id:"select-examples",children:[(0,d.jsx)(s.code,{children:"SELECT"})," examples"]}),"\n",(0,d.jsxs)(c.A,{defaultValue:"batch_get_case_rule",values:[{label:"batch_get_case_rule",value:"batch_get_case_rule"},{label:"list_case_rules",value:"list_case_rules"}],children:[(0,d.jsxs)(t.A,{value:"batch_get_case_rule",children:[(0,d.jsx)(s.p,{children:"Gets a batch of case rules. In the Amazon Connect admin website, case rules are known as case field conditions. For more information about case field conditions, see Add case field conditions to a case template."}),(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-sql",children:"SELECT\ncaseRules,\nerrors,\nunprocessedCaseRules\nFROM aws.connectcases.case_rules\nWHERE domain_id = '{{ domain_id }}' -- required\nAND region = '{{ region }}' -- required\n;\n"})})]}),(0,d.jsxs)(t.A,{value:"list_case_rules",children:[(0,d.jsx)(s.p,{children:"Lists all case rules in a Cases domain. In the Amazon Connect admin website, case rules are known as case field conditions. For more information about case field conditions, see Add case field conditions to a case template."}),(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-sql",children:"SELECT\nname,\ncaseRuleArn,\ncaseRuleId,\ndescription,\nruleType\nFROM aws.connectcases.case_rules\nWHERE domain_id = '{{ domain_id }}' -- required\nAND region = '{{ region }}' -- required\nAND maxResults = '{{ maxResults }}'\nAND nextToken = '{{ nextToken }}'\n;\n"})})]})]}),"\n",(0,d.jsxs)(s.h2,{id:"insert-examples",children:[(0,d.jsx)(s.code,{children:"INSERT"})," examples"]}),"\n",(0,d.jsxs)(c.A,{defaultValue:"create_case_rule",values:[{label:"create_case_rule",value:"create_case_rule"},{label:"Manifest",value:"manifest"}],children:[(0,d.jsxs)(t.A,{value:"create_case_rule",children:[(0,d.jsx)(s.p,{children:"Creates a new case rule. In the Amazon Connect admin website, case rules are known as case field conditions. For more information about case field conditions, see Add case field conditions to a case template."}),(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-sql",children:"INSERT INTO aws.connectcases.case_rules (\nname,\ndescription,\nrule,\ndomain_id,\nregion\n)\nSELECT \n'{{ name }}' /* required */,\n'{{ description }}',\n'{{ rule }}' /* required */,\n'{{ domain_id }}',\n'{{ region }}'\nRETURNING\ncaseRuleArn,\ncaseRuleId\n;\n"})})]}),(0,d.jsx)(t.A,{value:"manifest",children:(0,d.jsx)(l.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: case_rules
props:
  - name: domain_id
    value: "{{ domain_id }}"
    description: Required parameter for the case_rules resource.
  - name: region
    value: "{{ region }}"
    description: Required parameter for the case_rules resource.
  - name: name
    value: "{{ name }}"
  - name: description
    value: "{{ description }}"
  - name: rule
    description: |
      Represents what rule type should take place, under what conditions. In the Amazon Connect admin website, case rules are known as case field conditions. For more information about case field conditions, see Add case field conditions to a case template.
    value:
      required_:
        defaultValue: {{ defaultValue }}
        conditions:
          - equalTo:
              operandOne:
                fieldId: "{{ fieldId }}"
              operandTwo:
                stringValue: "{{ stringValue }}"
                booleanValue: {{ booleanValue }}
                doubleValue: {{ doubleValue }}
                emptyValue: "{{ emptyValue }}"
              result: {{ result }}
            notEqualTo:
              operandOne:
                fieldId: "{{ fieldId }}"
              operandTwo:
                stringValue: "{{ stringValue }}"
                booleanValue: {{ booleanValue }}
                doubleValue: {{ doubleValue }}
                emptyValue: "{{ emptyValue }}"
              result: {{ result }}
            andAll:
              conditions:
                - equalTo:
                    operandOne: "{{ operandOne }}"
                    operandTwo: "{{ operandTwo }}"
                    result: {{ result }}
                  notEqualTo:
                    operandOne: "{{ operandOne }}"
                    operandTwo: "{{ operandTwo }}"
                    result: {{ result }}
                  andAll:
                    conditions: "{{ conditions }}"
                  orAll:
                    conditions: "{{ conditions }}"
            orAll:
              conditions:
                - equalTo:
                    operandOne: "{{ operandOne }}"
                    operandTwo: "{{ operandTwo }}"
                    result: {{ result }}
                  notEqualTo:
                    operandOne: "{{ operandOne }}"
                    operandTwo: "{{ operandTwo }}"
                    result: {{ result }}
                  andAll:
                    conditions: "{{ conditions }}"
                  orAll:
                    conditions: "{{ conditions }}"
      fieldOptions:
        parentFieldId: "{{ parentFieldId }}"
        childFieldId: "{{ childFieldId }}"
        parentChildFieldOptionsMappings:
          - parentFieldOptionValue: "{{ parentFieldOptionValue }}"
            childFieldOptionValues: "{{ childFieldOptionValues }}"
      hidden:
        defaultValue: {{ defaultValue }}
        conditions:
          - equalTo:
              operandOne:
                fieldId: "{{ fieldId }}"
              operandTwo:
                stringValue: "{{ stringValue }}"
                booleanValue: {{ booleanValue }}
                doubleValue: {{ doubleValue }}
                emptyValue: "{{ emptyValue }}"
              result: {{ result }}
            notEqualTo:
              operandOne:
                fieldId: "{{ fieldId }}"
              operandTwo:
                stringValue: "{{ stringValue }}"
                booleanValue: {{ booleanValue }}
                doubleValue: {{ doubleValue }}
                emptyValue: "{{ emptyValue }}"
              result: {{ result }}
            andAll:
              conditions:
                - equalTo:
                    operandOne: "{{ operandOne }}"
                    operandTwo: "{{ operandTwo }}"
                    result: {{ result }}
                  notEqualTo:
                    operandOne: "{{ operandOne }}"
                    operandTwo: "{{ operandTwo }}"
                    result: {{ result }}
                  andAll:
                    conditions: "{{ conditions }}"
                  orAll:
                    conditions: "{{ conditions }}"
            orAll:
              conditions:
                - equalTo:
                    operandOne: "{{ operandOne }}"
                    operandTwo: "{{ operandTwo }}"
                    result: {{ result }}
                  notEqualTo:
                    operandOne: "{{ operandOne }}"
                    operandTwo: "{{ operandTwo }}"
                    result: {{ result }}
                  andAll:
                    conditions: "{{ conditions }}"
                  orAll:
                    conditions: "{{ conditions }}"
`})})]}),"\n",(0,d.jsxs)(s.h2,{id:"update-examples",children:[(0,d.jsx)(s.code,{children:"UPDATE"})," examples"]}),"\n",(0,d.jsx)(c.A,{defaultValue:"update_case_rule",values:[{label:"update_case_rule",value:"update_case_rule"}],children:(0,d.jsxs)(t.A,{value:"update_case_rule",children:[(0,d.jsx)(s.p,{children:"Updates a case rule. In the Amazon Connect admin website, case rules are known as case field conditions. For more information about case field conditions, see Add case field conditions to a case template."}),(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-sql",children:"UPDATE aws.connectcases.case_rules\nSET \nname = '{{ name }}',\ndescription = '{{ description }}',\nrule = '{{ rule }}'\nWHERE \ndomain_id = '{{ domain_id }}' --required\nAND case_rule_id = '{{ case_rule_id }}' --required\nAND region = '{{ region }}' --required;\n"})})]})}),"\n",(0,d.jsxs)(s.h2,{id:"delete-examples",children:[(0,d.jsx)(s.code,{children:"DELETE"})," examples"]}),"\n",(0,d.jsx)(c.A,{defaultValue:"delete_case_rule",values:[{label:"delete_case_rule",value:"delete_case_rule"}],children:(0,d.jsxs)(t.A,{value:"delete_case_rule",children:[(0,d.jsx)(s.p,{children:"Deletes a case rule. In the Amazon Connect admin website, case rules are known as case field conditions. For more information about case field conditions, see Add case field conditions to a case template."}),(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-sql",children:"DELETE FROM aws.connectcases.case_rules\nWHERE domain_id = '{{ domain_id }}' --required\nAND case_rule_id = '{{ case_rule_id }}' --required\nAND region = '{{ region }}' --required\n;\n"})})]})})]})}function p(e={}){let{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(j,{...e})}):j(e)}}}]);