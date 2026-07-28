"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["920570"],{796249(e,s,t){t.r(s),t.d(s,{metadata:()=>n,default:()=>_,frontMatter:()=>h,contentTitle:()=>o,toc:()=>x,assets:()=>u});var n=JSON.parse('{"id":"services/license_manager/license_asset_rulesets/index","title":"license_asset_rulesets","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/license_manager/license_asset_rulesets/index.md","sourceDirName":"services/license_manager/license_asset_rulesets","slug":"/services/license_manager/license_asset_rulesets/","permalink":"/services/license_manager/license_asset_rulesets/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"license_asset_rulesets","hide_title":false,"hide_table_of_contents":false,"keywords":["license_asset_rulesets","license_manager","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"license_asset_groups","permalink":"/services/license_manager/license_asset_groups/"},"next":{"title":"license_configurations","permalink":"/services/license_manager/license_configurations/"}}'),l=t(474848),r=t(28453),i=t(97362),a=t(897272),c=t(413554),d=t(541647);let h={title:"license_asset_rulesets",hide_title:!1,hide_table_of_contents:!1,keywords:["license_asset_rulesets","license_manager","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},o,u={},x=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function j(e){let s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.p,{children:["Creates, updates, deletes, gets or lists a ",(0,l.jsx)("code",{children:"license_asset_rulesets"})," resource."]}),"\n",(0,l.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,l.jsx)("table",{children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("b",{children:"Name"})}),(0,l.jsx)("td",{children:(0,l.jsx)(i.A,{code:"license_asset_rulesets"})})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("b",{children:"Type"})}),(0,l.jsx)("td",{children:"Resource"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("b",{children:"Id"})}),(0,l.jsx)("td",{children:(0,l.jsx)(i.A,{code:"aws.license_manager.license_asset_rulesets"})})]})]})}),"\n",(0,l.jsx)(s.h2,{id:"fields",children:"Fields"}),"\n",(0,l.jsxs)(s.p,{children:["The following fields are returned by ",(0,l.jsx)(s.code,{children:"SELECT"})," queries:"]}),"\n",(0,l.jsxs)(c.A,{defaultValue:"get_license_asset_ruleset",values:[{label:"get_license_asset_ruleset",value:"get_license_asset_ruleset"},{label:"list_license_asset_rulesets",value:"list_license_asset_rulesets"}],children:[(0,l.jsx)(d.A,{value:"get_license_asset_ruleset",children:(0,l.jsxs)("table",{children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Name"}),(0,l.jsx)("th",{children:"Datatype"}),(0,l.jsx)("th",{children:"Description"})]})}),(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)(i.A,{code:"Description"})}),(0,l.jsx)("td",{children:(0,l.jsx)("code",{children:"string"})}),(0,l.jsx)("td",{children:"License asset ruleset description."})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)(i.A,{code:"LicenseAssetRulesetArn"})}),(0,l.jsx)("td",{children:(0,l.jsx)("code",{children:"string"})}),(0,l.jsxs)("td",{children:["Amazon Resource Name (ARN) of the license asset ruleset. (pattern: <code>^arn",":aws","[a-zA-Z-]*:[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,1023}$</code>)"]})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)(i.A,{code:"Name"})}),(0,l.jsx)("td",{children:(0,l.jsx)("code",{children:"string"})}),(0,l.jsx)("td",{children:"License asset ruleset name."})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)(i.A,{code:"Rules"})}),(0,l.jsx)("td",{children:(0,l.jsx)("code",{children:"array"})}),(0,l.jsx)("td",{children:"License asset rules."})]})]})]})}),(0,l.jsx)(d.A,{value:"list_license_asset_rulesets",children:(0,l.jsxs)("table",{children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Name"}),(0,l.jsx)("th",{children:"Datatype"}),(0,l.jsx)("th",{children:"Description"})]})}),(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)(i.A,{code:"LicenseAssetRulesets"})}),(0,l.jsx)("td",{children:(0,l.jsx)("code",{children:"array"})}),(0,l.jsx)("td",{children:"License asset rulesets."})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)(i.A,{code:"NextToken"})}),(0,l.jsx)("td",{children:(0,l.jsx)("code",{children:"string"})}),(0,l.jsx)("td",{children:"Token for the next set of results."})]})]})]})})]}),"\n",(0,l.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,l.jsx)(s.p,{children:"The following methods are available for this resource:"}),"\n",(0,l.jsxs)("table",{children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Name"}),(0,l.jsx)("th",{children:"Accessible by"}),(0,l.jsx)("th",{children:"Required Params"}),(0,l.jsx)("th",{children:"Optional Params"}),(0,l.jsx)("th",{children:"Description"})]})}),(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("a",{href:"#get_license_asset_ruleset",children:(0,l.jsx)(i.A,{code:"get_license_asset_ruleset"})})}),(0,l.jsx)("td",{children:(0,l.jsx)(i.A,{code:"select"})}),(0,l.jsx)("td",{children:(0,l.jsx)("a",{href:"#parameter-region",children:(0,l.jsx)("code",{children:"region"})})}),(0,l.jsx)("td",{}),(0,l.jsx)("td",{children:"Gets a license asset ruleset."})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("a",{href:"#list_license_asset_rulesets",children:(0,l.jsx)(i.A,{code:"list_license_asset_rulesets"})})}),(0,l.jsx)("td",{children:(0,l.jsx)(i.A,{code:"select"})}),(0,l.jsx)("td",{children:(0,l.jsx)("a",{href:"#parameter-region",children:(0,l.jsx)("code",{children:"region"})})}),(0,l.jsx)("td",{}),(0,l.jsx)("td",{children:"Lists license asset rulesets."})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("a",{href:"#create_license_asset_ruleset",children:(0,l.jsx)(i.A,{code:"create_license_asset_ruleset"})})}),(0,l.jsx)("td",{children:(0,l.jsx)(i.A,{code:"insert"})}),(0,l.jsxs)("td",{children:[(0,l.jsx)("a",{href:"#parameter-region",children:(0,l.jsx)("code",{children:"region"})}),", ",(0,l.jsx)("a",{href:"#parameter-Name",children:(0,l.jsx)("code",{children:"Name"})}),", ",(0,l.jsx)("a",{href:"#parameter-Rules",children:(0,l.jsx)("code",{children:"Rules"})}),", ",(0,l.jsx)("a",{href:"#parameter-ClientToken",children:(0,l.jsx)("code",{children:"ClientToken"})})]}),(0,l.jsx)("td",{}),(0,l.jsx)("td",{children:"Creates a license asset ruleset."})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("a",{href:"#update_license_asset_ruleset",children:(0,l.jsx)(i.A,{code:"update_license_asset_ruleset"})})}),(0,l.jsx)("td",{children:(0,l.jsx)(i.A,{code:"update"})}),(0,l.jsxs)("td",{children:[(0,l.jsx)("a",{href:"#parameter-region",children:(0,l.jsx)("code",{children:"region"})}),", ",(0,l.jsx)("a",{href:"#parameter-Rules",children:(0,l.jsx)("code",{children:"Rules"})}),", ",(0,l.jsx)("a",{href:"#parameter-LicenseAssetRulesetArn",children:(0,l.jsx)("code",{children:"LicenseAssetRulesetArn"})}),", ",(0,l.jsx)("a",{href:"#parameter-ClientToken",children:(0,l.jsx)("code",{children:"ClientToken"})})]}),(0,l.jsx)("td",{}),(0,l.jsx)("td",{children:"Updates a license asset ruleset."})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("a",{href:"#delete_license_asset_ruleset",children:(0,l.jsx)(i.A,{code:"delete_license_asset_ruleset"})})}),(0,l.jsx)("td",{children:(0,l.jsx)(i.A,{code:"delete"})}),(0,l.jsx)("td",{children:(0,l.jsx)("a",{href:"#parameter-region",children:(0,l.jsx)("code",{children:"region"})})}),(0,l.jsx)("td",{}),(0,l.jsx)("td",{children:"Deletes a license asset ruleset."})]})]})]}),"\n",(0,l.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(s.p,{children:["Parameters can be passed in the ",(0,l.jsx)(s.code,{children:"WHERE"})," clause of a query. Check the ",(0,l.jsx)(s.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,l.jsxs)("table",{children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Name"}),(0,l.jsx)("th",{children:"Datatype"}),(0,l.jsx)("th",{children:"Description"})]})}),(0,l.jsx)("tbody",{children:(0,l.jsxs)("tr",{id:"parameter-region",children:[(0,l.jsx)("td",{children:(0,l.jsx)(i.A,{code:"region"})}),(0,l.jsx)("td",{children:(0,l.jsx)("code",{children:"string"})}),(0,l.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,l.jsxs)(s.h2,{id:"select-examples",children:[(0,l.jsx)(s.code,{children:"SELECT"})," examples"]}),"\n",(0,l.jsxs)(c.A,{defaultValue:"get_license_asset_ruleset",values:[{label:"get_license_asset_ruleset",value:"get_license_asset_ruleset"},{label:"list_license_asset_rulesets",value:"list_license_asset_rulesets"}],children:[(0,l.jsxs)(d.A,{value:"get_license_asset_ruleset",children:[(0,l.jsx)(s.p,{children:"Gets a license asset ruleset."}),(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sql",children:"SELECT\nDescription,\nLicenseAssetRulesetArn,\nName,\nRules\nFROM aws.license_manager.license_asset_rulesets\nWHERE region = '{{ region }}' -- required\n;\n"})})]}),(0,l.jsxs)(d.A,{value:"list_license_asset_rulesets",children:[(0,l.jsx)(s.p,{children:"Lists license asset rulesets."}),(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sql",children:"SELECT\nLicenseAssetRulesets,\nNextToken\nFROM aws.license_manager.license_asset_rulesets\nWHERE region = '{{ region }}' -- required\n;\n"})})]})]}),"\n",(0,l.jsxs)(s.h2,{id:"insert-examples",children:[(0,l.jsx)(s.code,{children:"INSERT"})," examples"]}),"\n",(0,l.jsxs)(c.A,{defaultValue:"create_license_asset_ruleset",values:[{label:"create_license_asset_ruleset",value:"create_license_asset_ruleset"},{label:"Manifest",value:"manifest"}],children:[(0,l.jsxs)(d.A,{value:"create_license_asset_ruleset",children:[(0,l.jsx)(s.p,{children:"Creates a license asset ruleset."}),(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sql",children:"INSERT INTO aws.license_manager.license_asset_rulesets (\nName,\nDescription,\nRules,\nTags,\nClientToken,\nregion\n)\nSELECT \n'{{ Name }}' /* required */,\n'{{ Description }}',\n'{{ Rules }}' /* required */,\n'{{ Tags }}',\n'{{ ClientToken }}' /* required */,\n'{{ region }}'\nRETURNING\nLicenseAssetRulesetArn\n;\n"})})]}),(0,l.jsx)(d.A,{value:"manifest",children:(0,l.jsx)(a.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: license_asset_rulesets
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the license_asset_rulesets resource.
  - name: Name
    value: "{{ Name }}"
    description: |
      License asset ruleset name.
  - name: Description
    value: "{{ Description }}"
    description: |
      License asset ruleset description.
  - name: Rules
    description: |
      License asset rules.
    value:
      - RuleStatement:
          LicenseConfigurationRuleStatement:
            AndRuleStatement:
              MatchingRuleStatements:
                - KeyToMatch: "{{ KeyToMatch }}"
                  Constraint: "{{ Constraint }}"
                  ValueToMatch: "{{ ValueToMatch }}"
              ScriptRuleStatements:
                - KeyToMatch: "{{ KeyToMatch }}"
                  Script: "{{ Script }}"
            OrRuleStatement:
              MatchingRuleStatements:
                - KeyToMatch: "{{ KeyToMatch }}"
                  Constraint: "{{ Constraint }}"
                  ValueToMatch: "{{ ValueToMatch }}"
              ScriptRuleStatements:
                - KeyToMatch: "{{ KeyToMatch }}"
                  Script: "{{ Script }}"
            MatchingRuleStatement:
              KeyToMatch: "{{ KeyToMatch }}"
              Constraint: "{{ Constraint }}"
              ValueToMatch:
                - "{{ ValueToMatch }}"
          LicenseRuleStatement:
            AndRuleStatement:
              MatchingRuleStatements:
                - KeyToMatch: "{{ KeyToMatch }}"
                  Constraint: "{{ Constraint }}"
                  ValueToMatch: "{{ ValueToMatch }}"
              ScriptRuleStatements:
                - KeyToMatch: "{{ KeyToMatch }}"
                  Script: "{{ Script }}"
            OrRuleStatement:
              MatchingRuleStatements:
                - KeyToMatch: "{{ KeyToMatch }}"
                  Constraint: "{{ Constraint }}"
                  ValueToMatch: "{{ ValueToMatch }}"
              ScriptRuleStatements:
                - KeyToMatch: "{{ KeyToMatch }}"
                  Script: "{{ Script }}"
            MatchingRuleStatement:
              KeyToMatch: "{{ KeyToMatch }}"
              Constraint: "{{ Constraint }}"
              ValueToMatch:
                - "{{ ValueToMatch }}"
          InstanceRuleStatement:
            AndRuleStatement:
              MatchingRuleStatements:
                - KeyToMatch: "{{ KeyToMatch }}"
                  Constraint: "{{ Constraint }}"
                  ValueToMatch: "{{ ValueToMatch }}"
              ScriptRuleStatements:
                - KeyToMatch: "{{ KeyToMatch }}"
                  Script: "{{ Script }}"
            OrRuleStatement:
              MatchingRuleStatements:
                - KeyToMatch: "{{ KeyToMatch }}"
                  Constraint: "{{ Constraint }}"
                  ValueToMatch: "{{ ValueToMatch }}"
              ScriptRuleStatements:
                - KeyToMatch: "{{ KeyToMatch }}"
                  Script: "{{ Script }}"
            MatchingRuleStatement:
              KeyToMatch: "{{ KeyToMatch }}"
              Constraint: "{{ Constraint }}"
              ValueToMatch:
                - "{{ ValueToMatch }}"
            ScriptRuleStatement:
              KeyToMatch: "{{ KeyToMatch }}"
              Script: "{{ Script }}"
  - name: Tags
    description: |
      Tags to add to the license asset ruleset.
    value:
      - Key: "{{ Key }}"
        Value: "{{ Value }}"
  - name: ClientToken
    value: "{{ ClientToken }}"
    description: |
      Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
`})})]}),"\n",(0,l.jsxs)(s.h2,{id:"update-examples",children:[(0,l.jsx)(s.code,{children:"UPDATE"})," examples"]}),"\n",(0,l.jsx)(c.A,{defaultValue:"update_license_asset_ruleset",values:[{label:"update_license_asset_ruleset",value:"update_license_asset_ruleset"}],children:(0,l.jsxs)(d.A,{value:"update_license_asset_ruleset",children:[(0,l.jsx)(s.p,{children:"Updates a license asset ruleset."}),(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sql",children:"UPDATE aws.license_manager.license_asset_rulesets\nSET \nName = '{{ Name }}',\nDescription = '{{ Description }}',\nRules = '{{ Rules }}',\nLicenseAssetRulesetArn = '{{ LicenseAssetRulesetArn }}',\nClientToken = '{{ ClientToken }}'\nWHERE \nregion = '{{ region }}' --required\nAND Rules = '{{ Rules }}' --required\nAND LicenseAssetRulesetArn = '{{ LicenseAssetRulesetArn }}' --required\nAND ClientToken = '{{ ClientToken }}' --required\nRETURNING\nLicenseAssetRulesetArn;\n"})})]})}),"\n",(0,l.jsxs)(s.h2,{id:"delete-examples",children:[(0,l.jsx)(s.code,{children:"DELETE"})," examples"]}),"\n",(0,l.jsx)(c.A,{defaultValue:"delete_license_asset_ruleset",values:[{label:"delete_license_asset_ruleset",value:"delete_license_asset_ruleset"}],children:(0,l.jsxs)(d.A,{value:"delete_license_asset_ruleset",children:[(0,l.jsx)(s.p,{children:"Deletes a license asset ruleset."}),(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-sql",children:"DELETE FROM aws.license_manager.license_asset_rulesets\nWHERE region = '{{ region }}' --required\n;\n"})})]})})]})}function _(e={}){let{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(j,{...e})}):j(e)}}}]);