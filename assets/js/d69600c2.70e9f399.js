"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["360060"],{892830(e,s,t){t.r(s),t.d(s,{metadata:()=>i,default:()=>f,frontMatter:()=>l,contentTitle:()=>h,toc:()=>g,assets:()=>u});var i=JSON.parse('{"id":"services/ce/cost_category_definitions/index","title":"cost_category_definitions","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/ce/cost_category_definitions/index.md","sourceDirName":"services/ce/cost_category_definitions","slug":"/services/ce/cost_category_definitions/","permalink":"/services/ce/cost_category_definitions/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"cost_category_definitions","hide_title":false,"hide_table_of_contents":false,"keywords":["cost_category_definitions","ce","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"cost_categories","permalink":"/services/ce/cost_categories/"},"next":{"title":"cost_category_resource_associations","permalink":"/services/ce/cost_category_resource_associations/"}}'),n=t(474848),o=t(28453),r=t(97362),a=t(897272),c=t(413554),d=t(541647);let l={title:"cost_category_definitions",hide_title:!1,hide_table_of_contents:!1,keywords:["cost_category_definitions","ce","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,u={},g=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function x(e){let s={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["Creates, updates, deletes, gets or lists a ",(0,n.jsx)("code",{children:"cost_category_definitions"})," resource."]}),"\n",(0,n.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Name"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"cost_category_definitions"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Type"})}),(0,n.jsx)("td",{children:"Resource"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Id"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"aws.ce.cost_category_definitions"})})]})]})}),"\n",(0,n.jsx)(s.h2,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(s.p,{children:["The following fields are returned by ",(0,n.jsx)(s.code,{children:"SELECT"})," queries:"]}),"\n",(0,n.jsxs)(c.A,{defaultValue:"describe_cost_category_definition",values:[{label:"describe_cost_category_definition",value:"describe_cost_category_definition"},{label:"list_cost_category_definitions",value:"list_cost_category_definitions"}],children:[(0,n.jsx)(d.A,{value:"describe_cost_category_definition",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"CostCategoryArn"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsxs)("td",{children:["The unique identifier for your cost category. (pattern: <code>arn",":aws","[-a-z0-9]",(0,n.jsx)(s.em,{children:":[a-z0-9]+:[-a-z0-9]"}),":[0-9]{12}:[-a-zA-Z0-9/:_]+</code>)"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"DefaultValue"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The default value for the cost category. (pattern: <code>^(?! )[\\p{L}\\p{N}\\p{Z}-_]*(?<! )$</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"EffectiveEnd"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The effective end date of your cost category. (pattern: <code>^\\d{4}-\\d\\d-\\d\\dT\\d\\d:\\d\\d:\\d\\d(([+-]\\d\\d:\\d\\d)|Z)$</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"EffectiveStart"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The effective start date of your cost category. (pattern: <code>^\\d{4}-\\d\\d-\\d\\dT\\d\\d:\\d\\d:\\d\\d(([+-]\\d\\d:\\d\\d)|Z)$</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"Name"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The unique name of the cost category. (pattern: <code>^(?! )[\\p{L}\\p{N}\\p{Z}-_]*(?<! )$</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"ProcessingStatus"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"array"})}),(0,n.jsx)("td",{children:"The list of processing statuses for Cost Management products for a specific cost category."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"RuleVersion"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The rule schema version in this particular cost category. (CostCategoryExpression.v1)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"Rules"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"array"})}),(0,n.jsx)("td",{children:"The rules are processed in order. If there are multiple rules that match the line item, then the first rule to match is used to determine that cost category value."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"SplitChargeRules"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"array"})}),(0,n.jsx)("td",{children:"The split charge rules that are used to allocate your charges between your cost category values."})]})]})]})}),(0,n.jsx)(d.A,{value:"list_cost_category_definitions",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"CostCategoryArn"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsxs)("td",{children:["The unique identifier for your cost category. (pattern: <code>arn",":aws","[-a-z0-9]",(0,n.jsx)(s.em,{children:":[a-z0-9]+:[-a-z0-9]"}),":[0-9]{12}:[-a-zA-Z0-9/:_]+</code>)"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"DefaultValue"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The default value for the cost category. (pattern: <code>^(?! )[\\p{L}\\p{N}\\p{Z}-_]*(?<! )$</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"EffectiveEnd"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The period of time that you want the usage and costs for. (pattern: <code>^\\d{4}-\\d\\d-\\d\\dT\\d\\d:\\d\\d:\\d\\d(([+-]\\d\\d:\\d\\d)|Z)$</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"EffectiveStart"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The period of time that you want the usage and costs for. (pattern: <code>^\\d{4}-\\d\\d-\\d\\dT\\d\\d:\\d\\d:\\d\\d(([+-]\\d\\d:\\d\\d)|Z)$</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"Name"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The unique name of the cost category. (pattern: <code>^(?! )[\\p{L}\\p{N}\\p{Z}-_]*(?<! )$</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"NumberOfRules"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"integer"})}),(0,n.jsx)("td",{children:"The number of rules that are associated with a specific cost category."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"ProcessingStatus"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"array"})}),(0,n.jsx)("td",{children:"The list of processing statuses for Cost Management products for a specific cost category."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"SupportedResourceTypes"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"array"})}),(0,n.jsx)("td",{children:"The resource types supported by a specific cost category."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"Values"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"array"})}),(0,n.jsx)("td",{children:"A list of unique cost category values in a specific cost category."})]})]})]})})]}),"\n",(0,n.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(s.p,{children:"The following methods are available for this resource:"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Accessible by"}),(0,n.jsx)("th",{children:"Required Params"}),(0,n.jsx)("th",{children:"Optional Params"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#describe_cost_category_definition",children:(0,n.jsx)(r.A,{code:"describe_cost_category_definition"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"select"})}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Returns the name, Amazon Resource Name (ARN), rules, definition, and effective dates of a cost category that's defined in the account. You have the option to use EffectiveOn to return a cost category that's active on a specific date. If there's no EffectiveOn specified, you see a Cost Category that's effective on the current date. If cost category is still effective, EffectiveEnd is omitted in the response."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#list_cost_category_definitions",children:(0,n.jsx)(r.A,{code:"list_cost_category_definitions"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"select"})}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Returns the name, Amazon Resource Name (ARN), NumberOfRules and effective dates of all cost categories defined in the account. You have the option to use EffectiveOn and SupportedResourceTypes to return a list of cost categories that were active on a specific date. If there is no EffectiveOn specified, you\u2019ll see cost categories that are effective on the current date. If cost category is still effective, EffectiveEnd is omitted in the response. ListCostCategoryDefinitions supports pagination. The request can have a MaxResults range up to 100."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#create_cost_category_definition",children:(0,n.jsx)(r.A,{code:"create_cost_category_definition"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"insert"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-RuleVersion",children:(0,n.jsx)("code",{children:"RuleVersion"})}),", ",(0,n.jsx)("a",{href:"#parameter-Rules",children:(0,n.jsx)("code",{children:"Rules"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Creates a new cost category with the requested name and rules."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#update_cost_category_definition",children:(0,n.jsx)(r.A,{code:"update_cost_category_definition"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"update"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-CostCategoryArn",children:(0,n.jsx)("code",{children:"CostCategoryArn"})}),", ",(0,n.jsx)("a",{href:"#parameter-RuleVersion",children:(0,n.jsx)("code",{children:"RuleVersion"})}),", ",(0,n.jsx)("a",{href:"#parameter-Rules",children:(0,n.jsx)("code",{children:"Rules"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Updates an existing cost category. Changes made to the cost category rules will be used to categorize the current month\u2019s expenses and future expenses. This won\u2019t change categorization for the previous months."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#delete_cost_category_definition",children:(0,n.jsx)(r.A,{code:"delete_cost_category_definition"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"delete"})}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Deletes a cost category. Expenses from this month going forward will no longer be categorized with this cost category."})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["Parameters can be passed in the ",(0,n.jsx)(s.code,{children:"WHERE"})," clause of a query. Check the ",(0,n.jsx)(s.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{id:"parameter-region",children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.A,{code:"region"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,n.jsxs)(s.h2,{id:"select-examples",children:[(0,n.jsx)(s.code,{children:"SELECT"})," examples"]}),"\n",(0,n.jsxs)(c.A,{defaultValue:"describe_cost_category_definition",values:[{label:"describe_cost_category_definition",value:"describe_cost_category_definition"},{label:"list_cost_category_definitions",value:"list_cost_category_definitions"}],children:[(0,n.jsxs)(d.A,{value:"describe_cost_category_definition",children:[(0,n.jsx)(s.p,{children:"Returns the name, Amazon Resource Name (ARN), rules, definition, and effective dates of a cost category that's defined in the account. You have the option to use EffectiveOn to return a cost category that's active on a specific date. If there's no EffectiveOn specified, you see a Cost Category that's effective on the current date. If cost category is still effective, EffectiveEnd is omitted in the response."}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT\nCostCategoryArn,\nDefaultValue,\nEffectiveEnd,\nEffectiveStart,\nName,\nProcessingStatus,\nRuleVersion,\nRules,\nSplitChargeRules\nFROM aws.ce.cost_category_definitions\nWHERE region = '{{ region }}' -- required\n;\n"})})]}),(0,n.jsxs)(d.A,{value:"list_cost_category_definitions",children:[(0,n.jsx)(s.p,{children:"Returns the name, Amazon Resource Name (ARN), NumberOfRules and effective dates of all cost categories defined in the account. You have the option to use EffectiveOn and SupportedResourceTypes to return a list of cost categories that were active on a specific date. If there is no EffectiveOn specified, you\u2019ll see cost categories that are effective on the current date. If cost category is still effective, EffectiveEnd is omitted in the response. ListCostCategoryDefinitions supports pagination. The request can have a MaxResults range up to 100."}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT\nCostCategoryArn,\nDefaultValue,\nEffectiveEnd,\nEffectiveStart,\nName,\nNumberOfRules,\nProcessingStatus,\nSupportedResourceTypes,\nValues\nFROM aws.ce.cost_category_definitions\nWHERE region = '{{ region }}' -- required\n;\n"})})]})]}),"\n",(0,n.jsxs)(s.h2,{id:"insert-examples",children:[(0,n.jsx)(s.code,{children:"INSERT"})," examples"]}),"\n",(0,n.jsxs)(c.A,{defaultValue:"create_cost_category_definition",values:[{label:"create_cost_category_definition",value:"create_cost_category_definition"},{label:"Manifest",value:"manifest"}],children:[(0,n.jsxs)(d.A,{value:"create_cost_category_definition",children:[(0,n.jsx)(s.p,{children:"Creates a new cost category with the requested name and rules."}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"INSERT INTO aws.ce.cost_category_definitions (\nName,\nEffectiveStart,\nRuleVersion,\nRules,\nDefaultValue,\nSplitChargeRules,\nResourceTags,\nregion\n)\nSELECT \n'{{ Name }}',\n'{{ EffectiveStart }}',\n'{{ RuleVersion }}' /* required */,\n'{{ Rules }}' /* required */,\n'{{ DefaultValue }}',\n'{{ SplitChargeRules }}',\n'{{ ResourceTags }}',\n'{{ region }}'\nRETURNING\nCostCategoryArn,\nEffectiveStart\n;\n"})})]}),(0,n.jsx)(d.A,{value:"manifest",children:(0,n.jsx)(a.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: cost_category_definitions
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the cost_category_definitions resource.
  - name: Name
    value: "{{ Name }}"
    description: |
      The unique name of the cost category.
  - name: EffectiveStart
    value: "{{ EffectiveStart }}"
    description: |
      The cost category's effective start date. It can only be a billing start date (first day of the month). If the date isn't provided, it's the first day of the current month. Dates can't be before the previous twelve months, or in the future.
  - name: RuleVersion
    value: "{{ RuleVersion }}"
    description: |
      The rule schema version in this particular cost category.
    valid_values: ['CostCategoryExpression.v1']
  - name: Rules
    description: |
      The cost category rules used to categorize costs. For more information, see CostCategoryRule.
    value:
      - Value: "{{ Value }}"
        Rule:
          Or:
            - Or: "{{ Or }}"
              And: "{{ And }}"
              Not:
                Or:
                  - Or: "{{ Or }}"
                    And: "{{ And }}"
                    Not:
                      Or: "{{ Or }}"
                      And: "{{ And }}"
                      Not: "{{ Not }}"
                      Dimensions: "{{ Dimensions }}"
                      Tags: "{{ Tags }}"
                      CostCategories: "{{ CostCategories }}"
                    Dimensions:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                    Tags:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                    CostCategories:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                And:
                  - Or: "{{ Or }}"
                    And: "{{ And }}"
                    Not:
                      Or: "{{ Or }}"
                      And: "{{ And }}"
                      Not: "{{ Not }}"
                      Dimensions: "{{ Dimensions }}"
                      Tags: "{{ Tags }}"
                      CostCategories: "{{ CostCategories }}"
                    Dimensions:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                    Tags:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                    CostCategories:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                Not:
                  Or: "{{ Or }}"
                  And: "{{ And }}"
                  Not: "{{ Not }}"
                  Dimensions: "{{ Dimensions }}"
                  Tags: "{{ Tags }}"
                  CostCategories: "{{ CostCategories }}"
                Dimensions:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
                Tags:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
                CostCategories:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
              Dimensions:
                Key: "{{ Key }}"
                Values:
                  - "{{ Values }}"
                MatchOptions:
                  - "{{ MatchOptions }}"
              Tags:
                Key: "{{ Key }}"
                Values:
                  - "{{ Values }}"
                MatchOptions:
                  - "{{ MatchOptions }}"
              CostCategories:
                Key: "{{ Key }}"
                Values:
                  - "{{ Values }}"
                MatchOptions:
                  - "{{ MatchOptions }}"
          And:
            - Or: "{{ Or }}"
              And: "{{ And }}"
              Not:
                Or:
                  - Or: "{{ Or }}"
                    And: "{{ And }}"
                    Not:
                      Or: "{{ Or }}"
                      And: "{{ And }}"
                      Not: "{{ Not }}"
                      Dimensions: "{{ Dimensions }}"
                      Tags: "{{ Tags }}"
                      CostCategories: "{{ CostCategories }}"
                    Dimensions:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                    Tags:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                    CostCategories:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                And:
                  - Or: "{{ Or }}"
                    And: "{{ And }}"
                    Not:
                      Or: "{{ Or }}"
                      And: "{{ And }}"
                      Not: "{{ Not }}"
                      Dimensions: "{{ Dimensions }}"
                      Tags: "{{ Tags }}"
                      CostCategories: "{{ CostCategories }}"
                    Dimensions:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                    Tags:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                    CostCategories:
                      Key: "{{ Key }}"
                      Values: "{{ Values }}"
                      MatchOptions: "{{ MatchOptions }}"
                Not:
                  Or: "{{ Or }}"
                  And: "{{ And }}"
                  Not: "{{ Not }}"
                  Dimensions: "{{ Dimensions }}"
                  Tags: "{{ Tags }}"
                  CostCategories: "{{ CostCategories }}"
                Dimensions:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
                Tags:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
                CostCategories:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
              Dimensions:
                Key: "{{ Key }}"
                Values:
                  - "{{ Values }}"
                MatchOptions:
                  - "{{ MatchOptions }}"
              Tags:
                Key: "{{ Key }}"
                Values:
                  - "{{ Values }}"
                MatchOptions:
                  - "{{ MatchOptions }}"
              CostCategories:
                Key: "{{ Key }}"
                Values:
                  - "{{ Values }}"
                MatchOptions:
                  - "{{ MatchOptions }}"
          Not:
            Or:
              - Or: "{{ Or }}"
                And: "{{ And }}"
                Not:
                  Or: "{{ Or }}"
                  And: "{{ And }}"
                  Not: "{{ Not }}"
                  Dimensions: "{{ Dimensions }}"
                  Tags: "{{ Tags }}"
                  CostCategories: "{{ CostCategories }}"
                Dimensions:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
                Tags:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
                CostCategories:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
            And:
              - Or: "{{ Or }}"
                And: "{{ And }}"
                Not:
                  Or: "{{ Or }}"
                  And: "{{ And }}"
                  Not: "{{ Not }}"
                  Dimensions: "{{ Dimensions }}"
                  Tags: "{{ Tags }}"
                  CostCategories: "{{ CostCategories }}"
                Dimensions:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
                Tags:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
                CostCategories:
                  Key: "{{ Key }}"
                  Values: "{{ Values }}"
                  MatchOptions: "{{ MatchOptions }}"
            Not:
              Or:
                - Or: "{{ Or }}"
                  And: "{{ And }}"
                  Not:
                    Or: "{{ Or }}"
                    And: "{{ And }}"
                    Not: "{{ Not }}"
                    Dimensions: "{{ Dimensions }}"
                    Tags: "{{ Tags }}"
                    CostCategories: "{{ CostCategories }}"
                  Dimensions:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
                  Tags:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
                  CostCategories:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
              And:
                - Or: "{{ Or }}"
                  And: "{{ And }}"
                  Not:
                    Or: "{{ Or }}"
                    And: "{{ And }}"
                    Not: "{{ Not }}"
                    Dimensions: "{{ Dimensions }}"
                    Tags: "{{ Tags }}"
                    CostCategories: "{{ CostCategories }}"
                  Dimensions:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
                  Tags:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
                  CostCategories:
                    Key: "{{ Key }}"
                    Values: "{{ Values }}"
                    MatchOptions: "{{ MatchOptions }}"
              Not:
                Or: "{{ Or }}"
                And: "{{ And }}"
                Not: "{{ Not }}"
                Dimensions: "{{ Dimensions }}"
                Tags: "{{ Tags }}"
                CostCategories: "{{ CostCategories }}"
              Dimensions:
                Key: "{{ Key }}"
                Values: "{{ Values }}"
                MatchOptions: "{{ MatchOptions }}"
              Tags:
                Key: "{{ Key }}"
                Values: "{{ Values }}"
                MatchOptions: "{{ MatchOptions }}"
              CostCategories:
                Key: "{{ Key }}"
                Values: "{{ Values }}"
                MatchOptions: "{{ MatchOptions }}"
            Dimensions:
              Key: "{{ Key }}"
              Values:
                - "{{ Values }}"
              MatchOptions:
                - "{{ MatchOptions }}"
            Tags:
              Key: "{{ Key }}"
              Values:
                - "{{ Values }}"
              MatchOptions:
                - "{{ MatchOptions }}"
            CostCategories:
              Key: "{{ Key }}"
              Values:
                - "{{ Values }}"
              MatchOptions:
                - "{{ MatchOptions }}"
          Dimensions:
            Key: "{{ Key }}"
            Values:
              - "{{ Values }}"
            MatchOptions:
              - "{{ MatchOptions }}"
          Tags:
            Key: "{{ Key }}"
            Values:
              - "{{ Values }}"
            MatchOptions:
              - "{{ MatchOptions }}"
          CostCategories:
            Key: "{{ Key }}"
            Values:
              - "{{ Values }}"
            MatchOptions:
              - "{{ MatchOptions }}"
        InheritedValue:
          DimensionName: "{{ DimensionName }}"
          DimensionKey: "{{ DimensionKey }}"
        Type: "{{ Type }}"
  - name: DefaultValue
    value: "{{ DefaultValue }}"
    description: |
      The default value for the cost category.
  - name: SplitChargeRules
    description: |
      The split charge rules used to allocate your charges between your cost category values.
    value:
      - Source: "{{ Source }}"
        Targets: "{{ Targets }}"
        Method: "{{ Method }}"
        Parameters: "{{ Parameters }}"
  - name: ResourceTags
    description: |
      An optional list of tags to associate with the specified CostCategory . You can use resource tags to control access to your cost category using IAM policies. Each tag consists of a key and a value, and each key must be unique for the resource. The following restrictions apply to resource tags: Although the maximum number of array members is 200, you can assign a maximum of 50 user-tags to one resource. The remaining are reserved for Amazon Web Services use The maximum length of a key is 128 characters The maximum length of a value is 256 characters Keys and values can only contain alphanumeric characters, spaces, and any of the following: _.:/=+@- Keys and values are case sensitive Keys and values are trimmed for any leading or trailing whitespaces Don\u{2019}t use aws: as a prefix for your keys. This prefix is reserved for Amazon Web Services use
    value:
      - Key: "{{ Key }}"
        Value: "{{ Value }}"
`})})]}),"\n",(0,n.jsxs)(s.h2,{id:"update-examples",children:[(0,n.jsx)(s.code,{children:"UPDATE"})," examples"]}),"\n",(0,n.jsx)(c.A,{defaultValue:"update_cost_category_definition",values:[{label:"update_cost_category_definition",value:"update_cost_category_definition"}],children:(0,n.jsxs)(d.A,{value:"update_cost_category_definition",children:[(0,n.jsx)(s.p,{children:"Updates an existing cost category. Changes made to the cost category rules will be used to categorize the current month\u2019s expenses and future expenses. This won\u2019t change categorization for the previous months."}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"UPDATE aws.ce.cost_category_definitions\nSET \nCostCategoryArn = '{{ CostCategoryArn }}',\nEffectiveStart = '{{ EffectiveStart }}',\nRuleVersion = '{{ RuleVersion }}',\nRules = '{{ Rules }}',\nDefaultValue = '{{ DefaultValue }}',\nSplitChargeRules = '{{ SplitChargeRules }}'\nWHERE \nregion = '{{ region }}' --required\nAND CostCategoryArn = '{{ CostCategoryArn }}' --required\nAND RuleVersion = '{{ RuleVersion }}' --required\nAND Rules = '{{ Rules }}' --required\nRETURNING\nCostCategoryArn,\nEffectiveStart;\n"})})]})}),"\n",(0,n.jsxs)(s.h2,{id:"delete-examples",children:[(0,n.jsx)(s.code,{children:"DELETE"})," examples"]}),"\n",(0,n.jsx)(c.A,{defaultValue:"delete_cost_category_definition",values:[{label:"delete_cost_category_definition",value:"delete_cost_category_definition"}],children:(0,n.jsxs)(d.A,{value:"delete_cost_category_definition",children:[(0,n.jsx)(s.p,{children:"Deletes a cost category. Expenses from this month going forward will no longer be categorized with this cost category."}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"DELETE FROM aws.ce.cost_category_definitions\nWHERE region = '{{ region }}' --required\n;\n"})})]})})]})}function f(e={}){let{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}}}]);