"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["698299"],{422524(e,t,a){a.r(t),a.d(t,{metadata:()=>r,default:()=>p,frontMatter:()=>c,contentTitle:()=>u,toc:()=>m,assets:()=>h});var r=JSON.parse('{"id":"services/wafv2/rule_groups/index","title":"rule_groups","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/wafv2/rule_groups/index.md","sourceDirName":"services/wafv2/rule_groups","slug":"/services/wafv2/rule_groups/","permalink":"/services/wafv2/rule_groups/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"rule_groups","hide_title":false,"hide_table_of_contents":false,"keywords":["rule_groups","wafv2","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"resources_for_web_acls","permalink":"/services/wafv2/resources_for_web_acls/"},"next":{"title":"sampled_requests","permalink":"/services/wafv2/sampled_requests/"}}'),n=a(474848),i=a(28453),o=a(97362),s=a(897272),l=a(413554),d=a(541647);let c={title:"rule_groups",hide_title:!1,hide_table_of_contents:!1,keywords:["rule_groups","wafv2","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},u,h={},m=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function g(e){let t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Creates, updates, deletes, gets or lists a ",(0,n.jsx)("code",{children:"rule_groups"})," resource."]}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Name"})}),(0,n.jsx)("td",{children:(0,n.jsx)(o.A,{code:"rule_groups"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Type"})}),(0,n.jsx)("td",{children:"Resource"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Id"})}),(0,n.jsx)("td",{children:(0,n.jsx)(o.A,{code:"aws.wafv2.rule_groups"})})]})]})}),"\n",(0,n.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(t.p,{children:["The following fields are returned by ",(0,n.jsx)(t.code,{children:"SELECT"})," queries:"]}),"\n",(0,n.jsxs)(l.A,{defaultValue:"list_rule_groups",values:[{label:"list_rule_groups",value:"list_rule_groups"},{label:"get_rule_group",value:"get_rule_group"}],children:[(0,n.jsx)(d.A,{value:"list_rule_groups",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(o.A,{code:"NextMarker"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsxs)("td",{children:["When you request a list of objects with a Limit setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a NextMarker value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request. (pattern: <code>.",(0,n.jsx)(t.em,{children:"\\S."}),"</code>)"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(o.A,{code:"RuleGroups"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"array"})}),(0,n.jsx)("td",{children:"Array of rule groups. If you specified a Limit in your request, this might not be the full list."})]})]})]})}),(0,n.jsx)(d.A,{value:"get_rule_group",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(o.A,{code:"LockToken"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"A token used for optimistic locking. WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a WAFOptimisticLockException. If this happens, perform another get, and use the new token returned by that operation. (pattern: <code>^[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(o.A,{code:"RuleGroup"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"A rule group defines a collection of rules to inspect and control web requests that you can use in a WebACL. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements."})]})]})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(t.p,{children:"The following methods are available for this resource:"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Accessible by"}),(0,n.jsx)("th",{children:"Required Params"}),(0,n.jsx)("th",{children:"Optional Params"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#list_rule_groups",children:(0,n.jsx)(o.A,{code:"list_rule_groups"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(o.A,{code:"select"})}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Retrieves an array of RuleGroupSummary objects for the rule groups that you manage."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#get_rule_group",children:(0,n.jsx)(o.A,{code:"get_rule_group"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(o.A,{code:"select"})}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Retrieves the specified RuleGroup."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#create_rule_group",children:(0,n.jsx)(o.A,{code:"create_rule_group"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(o.A,{code:"insert"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-Name",children:(0,n.jsx)("code",{children:"Name"})}),", ",(0,n.jsx)("a",{href:"#parameter-Scope",children:(0,n.jsx)("code",{children:"Scope"})}),", ",(0,n.jsx)("a",{href:"#parameter-Capacity",children:(0,n.jsx)("code",{children:"Capacity"})}),", ",(0,n.jsx)("a",{href:"#parameter-VisibilityConfig",children:(0,n.jsx)("code",{children:"VisibilityConfig"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Creates a RuleGroup per the specifications provided. A rule group defines a collection of rules to inspect and control web requests that you can use in a WebACL. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#update_rule_group",children:(0,n.jsx)(o.A,{code:"update_rule_group"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(o.A,{code:"update"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-Name",children:(0,n.jsx)("code",{children:"Name"})}),", ",(0,n.jsx)("a",{href:"#parameter-Scope",children:(0,n.jsx)("code",{children:"Scope"})}),", ",(0,n.jsx)("a",{href:"#parameter-Id",children:(0,n.jsx)("code",{children:"Id"})}),", ",(0,n.jsx)("a",{href:"#parameter-VisibilityConfig",children:(0,n.jsx)("code",{children:"VisibilityConfig"})}),", ",(0,n.jsx)("a",{href:"#parameter-LockToken",children:(0,n.jsx)("code",{children:"LockToken"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Updates the specified RuleGroup. This operation completely replaces the mutable specifications that you already have for the rule group with the ones that you provide to this call. To modify a rule group, do the following: Retrieve it by calling GetRuleGroup Update its settings as needed Provide the complete rule group specification to this call A rule group defines a collection of rules to inspect and control web requests that you can use in a WebACL. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements. Temporary inconsistencies during updates When you create or change a web ACL or other WAF resources, the changes take a small amount of time to propagate to all areas where the resources are stored. The propagation time can be from a few seconds to a number of minutes. The following are examples of the temporary inconsistencies that you might notice during change propagation: After you create a web ACL, if you try to associate it with a resource, you might get an exception indicating that the web ACL is unavailable. After you add a rule group to a web ACL, the new rule group rules might be in effect in one area where the web ACL is used and not in another. After you change a rule action setting, you might see the old action in some places and the new action in others. After you add an IP address to an IP set that is in use in a blocking rule, the new address might be blocked in one area while still allowed in another."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#delete_rule_group",children:(0,n.jsx)(o.A,{code:"delete_rule_group"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(o.A,{code:"delete"})}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Deletes the specified RuleGroup."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#delete_firewall_manager_rule_groups",children:(0,n.jsx)(o.A,{code:"delete_firewall_manager_rule_groups"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(o.A,{code:"delete"})}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Deletes all rule groups that are managed by Firewall Manager from the specified WebACL. You can only use this if ManagedByFirewallManager and RetrofittedByFirewallManager are both false in the web ACL."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.p,{children:["Parameters can be passed in the ",(0,n.jsx)(t.code,{children:"WHERE"})," clause of a query. Check the ",(0,n.jsx)(t.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{id:"parameter-region",children:[(0,n.jsx)("td",{children:(0,n.jsx)(o.A,{code:"region"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,n.jsxs)(t.h2,{id:"select-examples",children:[(0,n.jsx)(t.code,{children:"SELECT"})," examples"]}),"\n",(0,n.jsxs)(l.A,{defaultValue:"list_rule_groups",values:[{label:"list_rule_groups",value:"list_rule_groups"},{label:"get_rule_group",value:"get_rule_group"}],children:[(0,n.jsxs)(d.A,{value:"list_rule_groups",children:[(0,n.jsx)(t.p,{children:"Retrieves an array of RuleGroupSummary objects for the rule groups that you manage."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT\nNextMarker,\nRuleGroups\nFROM aws.wafv2.rule_groups\nWHERE region = '{{ region }}' -- required\n;\n"})})]}),(0,n.jsxs)(d.A,{value:"get_rule_group",children:[(0,n.jsx)(t.p,{children:"Retrieves the specified RuleGroup."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT\nLockToken,\nRuleGroup\nFROM aws.wafv2.rule_groups\nWHERE region = '{{ region }}' -- required\n;\n"})})]})]}),"\n",(0,n.jsxs)(t.h2,{id:"insert-examples",children:[(0,n.jsx)(t.code,{children:"INSERT"})," examples"]}),"\n",(0,n.jsxs)(l.A,{defaultValue:"create_rule_group",values:[{label:"create_rule_group",value:"create_rule_group"},{label:"Manifest",value:"manifest"}],children:[(0,n.jsxs)(d.A,{value:"create_rule_group",children:[(0,n.jsx)(t.p,{children:"Creates a RuleGroup per the specifications provided. A rule group defines a collection of rules to inspect and control web requests that you can use in a WebACL. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"INSERT INTO aws.wafv2.rule_groups (\nName,\nScope,\nCapacity,\nDescription,\nRules,\nVisibilityConfig,\nTags,\nCustomResponseBodies,\nregion\n)\nSELECT \n'{{ Name }}' /* required */,\n'{{ Scope }}' /* required */,\n{{ Capacity }} /* required */,\n'{{ Description }}',\n'{{ Rules }}',\n'{{ VisibilityConfig }}' /* required */,\n'{{ Tags }}',\n'{{ CustomResponseBodies }}',\n'{{ region }}'\nRETURNING\nSummary\n;\n"})})]}),(0,n.jsx)(d.A,{value:"manifest",children:(0,n.jsx)(s.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: rule_groups
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the rule_groups resource.
  - name: Name
    value: "{{ Name }}"
    description: |
      The name of the rule group. You cannot change the name of a rule group after you create it.
  - name: Scope
    value: "{{ Scope }}"
    description: |
      Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use CLOUDFRONT. To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1. API and SDKs - For all calls, use the Region endpoint us-east-1.
    valid_values: ['CLOUDFRONT', 'REGIONAL']
  - name: Capacity
    value: {{ Capacity }}
    description: |
      The web ACL capacity units (WCUs) required for this rule group. When you create your own rule group, you define this, and you cannot change it after creation. When you add or modify the rules in a rule group, WAF enforces this limit. You can check the capacity for a set of rules using CheckCapacity. WAF uses WCUs to calculate and control the operating resources that are used to run your rules, rule groups, and web ACLs. WAF calculates capacity differently for each rule type, to reflect the relative cost of each rule. Simple rules that cost little to run use fewer WCUs than more complex rules that use more processing power. Rule group capacity is fixed at creation, which helps users plan their web ACL WCU usage when they use a rule group. For more information, see WAF web ACL capacity units (WCU) in the WAF Developer Guide.
  - name: Description
    value: "{{ Description }}"
    description: |
      A description of the rule group that helps with identification.
  - name: Rules
    description: |
      The Rule statements used to identify the web requests that you want to manage. Each rule includes one top-level statement that WAF uses to identify matching web requests, and parameters that govern how WAF handles them.
    value:
      - Name: "{{ Name }}"
        Priority: {{ Priority }}
        Statement:
          ByteMatchStatement:
            SearchString: "{{ SearchString }}"
            FieldToMatch:
              SingleHeader:
                Name: "{{ Name }}"
              SingleQueryArgument:
                Name: "{{ Name }}"
              AllQueryArguments: "{{ AllQueryArguments }}"
              UriPath: "{{ UriPath }}"
              QueryString: "{{ QueryString }}"
              Body:
                OversizeHandling: "{{ OversizeHandling }}"
              Method: "{{ Method }}"
              JsonBody:
                MatchPattern: "{{ MatchPattern }}"
                MatchScope: "{{ MatchScope }}"
                InvalidFallbackBehavior: "{{ InvalidFallbackBehavior }}"
                OversizeHandling: "{{ OversizeHandling }}"
              Headers:
                MatchPattern: "{{ MatchPattern }}"
                MatchScope: "{{ MatchScope }}"
                OversizeHandling: "{{ OversizeHandling }}"
              Cookies:
                MatchPattern: "{{ MatchPattern }}"
                MatchScope: "{{ MatchScope }}"
                OversizeHandling: "{{ OversizeHandling }}"
              HeaderOrder:
                OversizeHandling: "{{ OversizeHandling }}"
              JA3Fingerprint:
                FallbackBehavior: "{{ FallbackBehavior }}"
              JA4Fingerprint:
                FallbackBehavior: "{{ FallbackBehavior }}"
              UriFragment:
                FallbackBehavior: "{{ FallbackBehavior }}"
            TextTransformations:
              - Priority: {{ Priority }}
                Type: "{{ Type }}"
            PositionalConstraint: "{{ PositionalConstraint }}"
          SqliMatchStatement:
            FieldToMatch:
              SingleHeader:
                Name: "{{ Name }}"
              SingleQueryArgument:
                Name: "{{ Name }}"
              AllQueryArguments: "{{ AllQueryArguments }}"
              UriPath: "{{ UriPath }}"
              QueryString: "{{ QueryString }}"
              Body:
                OversizeHandling: "{{ OversizeHandling }}"
              Method: "{{ Method }}"
              JsonBody:
                MatchPattern: "{{ MatchPattern }}"
                MatchScope: "{{ MatchScope }}"
                InvalidFallbackBehavior: "{{ InvalidFallbackBehavior }}"
                OversizeHandling: "{{ OversizeHandling }}"
              Headers:
                MatchPattern: "{{ MatchPattern }}"
                MatchScope: "{{ MatchScope }}"
                OversizeHandling: "{{ OversizeHandling }}"
              Cookies:
                MatchPattern: "{{ MatchPattern }}"
                MatchScope: "{{ MatchScope }}"
                OversizeHandling: "{{ OversizeHandling }}"
              HeaderOrder:
                OversizeHandling: "{{ OversizeHandling }}"
              JA3Fingerprint:
                FallbackBehavior: "{{ FallbackBehavior }}"
              JA4Fingerprint:
                FallbackBehavior: "{{ FallbackBehavior }}"
              UriFragment:
                FallbackBehavior: "{{ FallbackBehavior }}"
            TextTransformations:
              - Priority: {{ Priority }}
                Type: "{{ Type }}"
            SensitivityLevel: "{{ SensitivityLevel }}"
          XssMatchStatement:
            FieldToMatch:
              SingleHeader:
                Name: "{{ Name }}"
              SingleQueryArgument:
                Name: "{{ Name }}"
              AllQueryArguments: "{{ AllQueryArguments }}"
              UriPath: "{{ UriPath }}"
              QueryString: "{{ QueryString }}"
              Body:
                OversizeHandling: "{{ OversizeHandling }}"
              Method: "{{ Method }}"
              JsonBody:
                MatchPattern: "{{ MatchPattern }}"
                MatchScope: "{{ MatchScope }}"
                InvalidFallbackBehavior: "{{ InvalidFallbackBehavior }}"
                OversizeHandling: "{{ OversizeHandling }}"
              Headers:
                MatchPattern: "{{ MatchPattern }}"
                MatchScope: "{{ MatchScope }}"
                OversizeHandling: "{{ OversizeHandling }}"
              Cookies:
                MatchPattern: "{{ MatchPattern }}"
                MatchScope: "{{ MatchScope }}"
                OversizeHandling: "{{ OversizeHandling }}"
              HeaderOrder:
                OversizeHandling: "{{ OversizeHandling }}"
              JA3Fingerprint:
                FallbackBehavior: "{{ FallbackBehavior }}"
              JA4Fingerprint:
                FallbackBehavior: "{{ FallbackBehavior }}"
              UriFragment:
                FallbackBehavior: "{{ FallbackBehavior }}"
            TextTransformations:
              - Priority: {{ Priority }}
                Type: "{{ Type }}"
          SizeConstraintStatement:
            FieldToMatch:
              SingleHeader:
                Name: "{{ Name }}"
              SingleQueryArgument:
                Name: "{{ Name }}"
              AllQueryArguments: "{{ AllQueryArguments }}"
              UriPath: "{{ UriPath }}"
              QueryString: "{{ QueryString }}"
              Body:
                OversizeHandling: "{{ OversizeHandling }}"
              Method: "{{ Method }}"
              JsonBody:
                MatchPattern: "{{ MatchPattern }}"
                MatchScope: "{{ MatchScope }}"
                InvalidFallbackBehavior: "{{ InvalidFallbackBehavior }}"
                OversizeHandling: "{{ OversizeHandling }}"
              Headers:
                MatchPattern: "{{ MatchPattern }}"
                MatchScope: "{{ MatchScope }}"
                OversizeHandling: "{{ OversizeHandling }}"
              Cookies:
                MatchPattern: "{{ MatchPattern }}"
                MatchScope: "{{ MatchScope }}"
                OversizeHandling: "{{ OversizeHandling }}"
              HeaderOrder:
                OversizeHandling: "{{ OversizeHandling }}"
              JA3Fingerprint:
                FallbackBehavior: "{{ FallbackBehavior }}"
              JA4Fingerprint:
                FallbackBehavior: "{{ FallbackBehavior }}"
              UriFragment:
                FallbackBehavior: "{{ FallbackBehavior }}"
            ComparisonOperator: "{{ ComparisonOperator }}"
            Size: {{ Size }}
            TextTransformations:
              - Priority: {{ Priority }}
                Type: "{{ Type }}"
          GeoMatchStatement:
            CountryCodes:
              - "{{ CountryCodes }}"
            ForwardedIPConfig:
              HeaderName: "{{ HeaderName }}"
              FallbackBehavior: "{{ FallbackBehavior }}"
          RuleGroupReferenceStatement:
            ARN: "{{ ARN }}"
            ExcludedRules:
              - Name: "{{ Name }}"
            RuleActionOverrides:
              - Name: "{{ Name }}"
                ActionToUse:
                  Block: "{{ Block }}"
                  Allow: "{{ Allow }}"
                  Count: "{{ Count }}"
                  Captcha: "{{ Captcha }}"
                  Challenge: "{{ Challenge }}"
          IPSetReferenceStatement:
            ARN: "{{ ARN }}"
            IPSetForwardedIPConfig:
              HeaderName: "{{ HeaderName }}"
              FallbackBehavior: "{{ FallbackBehavior }}"
              Position: "{{ Position }}"
          RegexPatternSetReferenceStatement:
            ARN: "{{ ARN }}"
            FieldToMatch:
              SingleHeader:
                Name: "{{ Name }}"
              SingleQueryArgument:
                Name: "{{ Name }}"
              AllQueryArguments: "{{ AllQueryArguments }}"
              UriPath: "{{ UriPath }}"
              QueryString: "{{ QueryString }}"
              Body:
                OversizeHandling: "{{ OversizeHandling }}"
              Method: "{{ Method }}"
              JsonBody:
                MatchPattern: "{{ MatchPattern }}"
                MatchScope: "{{ MatchScope }}"
                InvalidFallbackBehavior: "{{ InvalidFallbackBehavior }}"
                OversizeHandling: "{{ OversizeHandling }}"
              Headers:
                MatchPattern: "{{ MatchPattern }}"
                MatchScope: "{{ MatchScope }}"
                OversizeHandling: "{{ OversizeHandling }}"
              Cookies:
                MatchPattern: "{{ MatchPattern }}"
                MatchScope: "{{ MatchScope }}"
                OversizeHandling: "{{ OversizeHandling }}"
              HeaderOrder:
                OversizeHandling: "{{ OversizeHandling }}"
              JA3Fingerprint:
                FallbackBehavior: "{{ FallbackBehavior }}"
              JA4Fingerprint:
                FallbackBehavior: "{{ FallbackBehavior }}"
              UriFragment:
                FallbackBehavior: "{{ FallbackBehavior }}"
            TextTransformations:
              - Priority: {{ Priority }}
                Type: "{{ Type }}"
          RateBasedStatement:
            Limit: {{ Limit }}
            EvaluationWindowSec: {{ EvaluationWindowSec }}
            AggregateKeyType: "{{ AggregateKeyType }}"
            ScopeDownStatement:
              ByteMatchStatement:
                SearchString: "{{ SearchString }}"
                FieldToMatch: "{{ FieldToMatch }}"
                TextTransformations: "{{ TextTransformations }}"
                PositionalConstraint: "{{ PositionalConstraint }}"
              SqliMatchStatement:
                FieldToMatch: "{{ FieldToMatch }}"
                TextTransformations: "{{ TextTransformations }}"
                SensitivityLevel: "{{ SensitivityLevel }}"
              XssMatchStatement:
                FieldToMatch: "{{ FieldToMatch }}"
                TextTransformations: "{{ TextTransformations }}"
              SizeConstraintStatement:
                FieldToMatch: "{{ FieldToMatch }}"
                ComparisonOperator: "{{ ComparisonOperator }}"
                Size: {{ Size }}
                TextTransformations: "{{ TextTransformations }}"
              GeoMatchStatement:
                CountryCodes: "{{ CountryCodes }}"
                ForwardedIPConfig: "{{ ForwardedIPConfig }}"
              RuleGroupReferenceStatement:
                ARN: "{{ ARN }}"
                ExcludedRules: "{{ ExcludedRules }}"
                RuleActionOverrides: "{{ RuleActionOverrides }}"
              IPSetReferenceStatement:
                ARN: "{{ ARN }}"
                IPSetForwardedIPConfig: "{{ IPSetForwardedIPConfig }}"
              RegexPatternSetReferenceStatement:
                ARN: "{{ ARN }}"
                FieldToMatch: "{{ FieldToMatch }}"
                TextTransformations: "{{ TextTransformations }}"
              RateBasedStatement:
                Limit: {{ Limit }}
                EvaluationWindowSec: {{ EvaluationWindowSec }}
                AggregateKeyType: "{{ AggregateKeyType }}"
                ScopeDownStatement: "{{ ScopeDownStatement }}"
                ForwardedIPConfig: "{{ ForwardedIPConfig }}"
                CustomKeys: "{{ CustomKeys }}"
              AndStatement:
                Statements: "{{ Statements }}"
              OrStatement:
                Statements: "{{ Statements }}"
              NotStatement:
                Statement: "{{ Statement }}"
              ManagedRuleGroupStatement:
                VendorName: "{{ VendorName }}"
                Name: "{{ Name }}"
                Version: "{{ Version }}"
                ExcludedRules: "{{ ExcludedRules }}"
                ScopeDownStatement: "{{ ScopeDownStatement }}"
                ManagedRuleGroupConfigs: "{{ ManagedRuleGroupConfigs }}"
                RuleActionOverrides: "{{ RuleActionOverrides }}"
              LabelMatchStatement:
                Scope: "{{ Scope }}"
                Key: "{{ Key }}"
              RegexMatchStatement:
                RegexString: "{{ RegexString }}"
                FieldToMatch: "{{ FieldToMatch }}"
                TextTransformations: "{{ TextTransformations }}"
              AsnMatchStatement:
                AsnList: "{{ AsnList }}"
                ForwardedIPConfig: "{{ ForwardedIPConfig }}"
            ForwardedIPConfig:
              HeaderName: "{{ HeaderName }}"
              FallbackBehavior: "{{ FallbackBehavior }}"
            CustomKeys:
              - Header:
                  Name: "{{ Name }}"
                  TextTransformations: "{{ TextTransformations }}"
                Cookie:
                  Name: "{{ Name }}"
                  TextTransformations: "{{ TextTransformations }}"
                QueryArgument:
                  Name: "{{ Name }}"
                  TextTransformations: "{{ TextTransformations }}"
                QueryString:
                  TextTransformations: "{{ TextTransformations }}"
                HTTPMethod: "{{ HTTPMethod }}"
                ForwardedIP: "{{ ForwardedIP }}"
                IP: "{{ IP }}"
                LabelNamespace:
                  Namespace: "{{ Namespace }}"
                UriPath:
                  TextTransformations: "{{ TextTransformations }}"
                JA3Fingerprint:
                  FallbackBehavior: "{{ FallbackBehavior }}"
                JA4Fingerprint:
                  FallbackBehavior: "{{ FallbackBehavior }}"
                ASN: "{{ ASN }}"
          AndStatement:
            Statements:
              - ByteMatchStatement:
                  SearchString: "{{ SearchString }}"
                  FieldToMatch: "{{ FieldToMatch }}"
                  TextTransformations: "{{ TextTransformations }}"
                  PositionalConstraint: "{{ PositionalConstraint }}"
                SqliMatchStatement:
                  FieldToMatch: "{{ FieldToMatch }}"
                  TextTransformations: "{{ TextTransformations }}"
                  SensitivityLevel: "{{ SensitivityLevel }}"
                XssMatchStatement:
                  FieldToMatch: "{{ FieldToMatch }}"
                  TextTransformations: "{{ TextTransformations }}"
                SizeConstraintStatement:
                  FieldToMatch: "{{ FieldToMatch }}"
                  ComparisonOperator: "{{ ComparisonOperator }}"
                  Size: {{ Size }}
                  TextTransformations: "{{ TextTransformations }}"
                GeoMatchStatement:
                  CountryCodes: "{{ CountryCodes }}"
                  ForwardedIPConfig: "{{ ForwardedIPConfig }}"
                RuleGroupReferenceStatement:
                  ARN: "{{ ARN }}"
                  ExcludedRules: "{{ ExcludedRules }}"
                  RuleActionOverrides: "{{ RuleActionOverrides }}"
                IPSetReferenceStatement:
                  ARN: "{{ ARN }}"
                  IPSetForwardedIPConfig: "{{ IPSetForwardedIPConfig }}"
                RegexPatternSetReferenceStatement:
                  ARN: "{{ ARN }}"
                  FieldToMatch: "{{ FieldToMatch }}"
                  TextTransformations: "{{ TextTransformations }}"
                RateBasedStatement:
                  Limit: {{ Limit }}
                  EvaluationWindowSec: {{ EvaluationWindowSec }}
                  AggregateKeyType: "{{ AggregateKeyType }}"
                  ScopeDownStatement: "{{ ScopeDownStatement }}"
                  ForwardedIPConfig: "{{ ForwardedIPConfig }}"
                  CustomKeys: "{{ CustomKeys }}"
                AndStatement:
                  Statements: "{{ Statements }}"
                OrStatement:
                  Statements: "{{ Statements }}"
                NotStatement:
                  Statement: "{{ Statement }}"
                ManagedRuleGroupStatement:
                  VendorName: "{{ VendorName }}"
                  Name: "{{ Name }}"
                  Version: "{{ Version }}"
                  ExcludedRules: "{{ ExcludedRules }}"
                  ScopeDownStatement: "{{ ScopeDownStatement }}"
                  ManagedRuleGroupConfigs: "{{ ManagedRuleGroupConfigs }}"
                  RuleActionOverrides: "{{ RuleActionOverrides }}"
                LabelMatchStatement:
                  Scope: "{{ Scope }}"
                  Key: "{{ Key }}"
                RegexMatchStatement:
                  RegexString: "{{ RegexString }}"
                  FieldToMatch: "{{ FieldToMatch }}"
                  TextTransformations: "{{ TextTransformations }}"
                AsnMatchStatement:
                  AsnList: "{{ AsnList }}"
                  ForwardedIPConfig: "{{ ForwardedIPConfig }}"
          OrStatement:
            Statements:
              - ByteMatchStatement:
                  SearchString: "{{ SearchString }}"
                  FieldToMatch: "{{ FieldToMatch }}"
                  TextTransformations: "{{ TextTransformations }}"
                  PositionalConstraint: "{{ PositionalConstraint }}"
                SqliMatchStatement:
                  FieldToMatch: "{{ FieldToMatch }}"
                  TextTransformations: "{{ TextTransformations }}"
                  SensitivityLevel: "{{ SensitivityLevel }}"
                XssMatchStatement:
                  FieldToMatch: "{{ FieldToMatch }}"
                  TextTransformations: "{{ TextTransformations }}"
                SizeConstraintStatement:
                  FieldToMatch: "{{ FieldToMatch }}"
                  ComparisonOperator: "{{ ComparisonOperator }}"
                  Size: {{ Size }}
                  TextTransformations: "{{ TextTransformations }}"
                GeoMatchStatement:
                  CountryCodes: "{{ CountryCodes }}"
                  ForwardedIPConfig: "{{ ForwardedIPConfig }}"
                RuleGroupReferenceStatement:
                  ARN: "{{ ARN }}"
                  ExcludedRules: "{{ ExcludedRules }}"
                  RuleActionOverrides: "{{ RuleActionOverrides }}"
                IPSetReferenceStatement:
                  ARN: "{{ ARN }}"
                  IPSetForwardedIPConfig: "{{ IPSetForwardedIPConfig }}"
                RegexPatternSetReferenceStatement:
                  ARN: "{{ ARN }}"
                  FieldToMatch: "{{ FieldToMatch }}"
                  TextTransformations: "{{ TextTransformations }}"
                RateBasedStatement:
                  Limit: {{ Limit }}
                  EvaluationWindowSec: {{ EvaluationWindowSec }}
                  AggregateKeyType: "{{ AggregateKeyType }}"
                  ScopeDownStatement: "{{ ScopeDownStatement }}"
                  ForwardedIPConfig: "{{ ForwardedIPConfig }}"
                  CustomKeys: "{{ CustomKeys }}"
                AndStatement:
                  Statements: "{{ Statements }}"
                OrStatement:
                  Statements: "{{ Statements }}"
                NotStatement:
                  Statement: "{{ Statement }}"
                ManagedRuleGroupStatement:
                  VendorName: "{{ VendorName }}"
                  Name: "{{ Name }}"
                  Version: "{{ Version }}"
                  ExcludedRules: "{{ ExcludedRules }}"
                  ScopeDownStatement: "{{ ScopeDownStatement }}"
                  ManagedRuleGroupConfigs: "{{ ManagedRuleGroupConfigs }}"
                  RuleActionOverrides: "{{ RuleActionOverrides }}"
                LabelMatchStatement:
                  Scope: "{{ Scope }}"
                  Key: "{{ Key }}"
                RegexMatchStatement:
                  RegexString: "{{ RegexString }}"
                  FieldToMatch: "{{ FieldToMatch }}"
                  TextTransformations: "{{ TextTransformations }}"
                AsnMatchStatement:
                  AsnList: "{{ AsnList }}"
                  ForwardedIPConfig: "{{ ForwardedIPConfig }}"
          NotStatement:
            Statement:
              ByteMatchStatement:
                SearchString: "{{ SearchString }}"
                FieldToMatch: "{{ FieldToMatch }}"
                TextTransformations: "{{ TextTransformations }}"
                PositionalConstraint: "{{ PositionalConstraint }}"
              SqliMatchStatement:
                FieldToMatch: "{{ FieldToMatch }}"
                TextTransformations: "{{ TextTransformations }}"
                SensitivityLevel: "{{ SensitivityLevel }}"
              XssMatchStatement:
                FieldToMatch: "{{ FieldToMatch }}"
                TextTransformations: "{{ TextTransformations }}"
              SizeConstraintStatement:
                FieldToMatch: "{{ FieldToMatch }}"
                ComparisonOperator: "{{ ComparisonOperator }}"
                Size: {{ Size }}
                TextTransformations: "{{ TextTransformations }}"
              GeoMatchStatement:
                CountryCodes: "{{ CountryCodes }}"
                ForwardedIPConfig: "{{ ForwardedIPConfig }}"
              RuleGroupReferenceStatement:
                ARN: "{{ ARN }}"
                ExcludedRules: "{{ ExcludedRules }}"
                RuleActionOverrides: "{{ RuleActionOverrides }}"
              IPSetReferenceStatement:
                ARN: "{{ ARN }}"
                IPSetForwardedIPConfig: "{{ IPSetForwardedIPConfig }}"
              RegexPatternSetReferenceStatement:
                ARN: "{{ ARN }}"
                FieldToMatch: "{{ FieldToMatch }}"
                TextTransformations: "{{ TextTransformations }}"
              RateBasedStatement:
                Limit: {{ Limit }}
                EvaluationWindowSec: {{ EvaluationWindowSec }}
                AggregateKeyType: "{{ AggregateKeyType }}"
                ScopeDownStatement: "{{ ScopeDownStatement }}"
                ForwardedIPConfig: "{{ ForwardedIPConfig }}"
                CustomKeys: "{{ CustomKeys }}"
              AndStatement:
                Statements: "{{ Statements }}"
              OrStatement:
                Statements: "{{ Statements }}"
              NotStatement:
                Statement: "{{ Statement }}"
              ManagedRuleGroupStatement:
                VendorName: "{{ VendorName }}"
                Name: "{{ Name }}"
                Version: "{{ Version }}"
                ExcludedRules: "{{ ExcludedRules }}"
                ScopeDownStatement: "{{ ScopeDownStatement }}"
                ManagedRuleGroupConfigs: "{{ ManagedRuleGroupConfigs }}"
                RuleActionOverrides: "{{ RuleActionOverrides }}"
              LabelMatchStatement:
                Scope: "{{ Scope }}"
                Key: "{{ Key }}"
              RegexMatchStatement:
                RegexString: "{{ RegexString }}"
                FieldToMatch: "{{ FieldToMatch }}"
                TextTransformations: "{{ TextTransformations }}"
              AsnMatchStatement:
                AsnList: "{{ AsnList }}"
                ForwardedIPConfig: "{{ ForwardedIPConfig }}"
          ManagedRuleGroupStatement:
            VendorName: "{{ VendorName }}"
            Name: "{{ Name }}"
            Version: "{{ Version }}"
            ExcludedRules:
              - Name: "{{ Name }}"
            ScopeDownStatement:
              ByteMatchStatement:
                SearchString: "{{ SearchString }}"
                FieldToMatch: "{{ FieldToMatch }}"
                TextTransformations: "{{ TextTransformations }}"
                PositionalConstraint: "{{ PositionalConstraint }}"
              SqliMatchStatement:
                FieldToMatch: "{{ FieldToMatch }}"
                TextTransformations: "{{ TextTransformations }}"
                SensitivityLevel: "{{ SensitivityLevel }}"
              XssMatchStatement:
                FieldToMatch: "{{ FieldToMatch }}"
                TextTransformations: "{{ TextTransformations }}"
              SizeConstraintStatement:
                FieldToMatch: "{{ FieldToMatch }}"
                ComparisonOperator: "{{ ComparisonOperator }}"
                Size: {{ Size }}
                TextTransformations: "{{ TextTransformations }}"
              GeoMatchStatement:
                CountryCodes: "{{ CountryCodes }}"
                ForwardedIPConfig: "{{ ForwardedIPConfig }}"
              RuleGroupReferenceStatement:
                ARN: "{{ ARN }}"
                ExcludedRules: "{{ ExcludedRules }}"
                RuleActionOverrides: "{{ RuleActionOverrides }}"
              IPSetReferenceStatement:
                ARN: "{{ ARN }}"
                IPSetForwardedIPConfig: "{{ IPSetForwardedIPConfig }}"
              RegexPatternSetReferenceStatement:
                ARN: "{{ ARN }}"
                FieldToMatch: "{{ FieldToMatch }}"
                TextTransformations: "{{ TextTransformations }}"
              RateBasedStatement:
                Limit: {{ Limit }}
                EvaluationWindowSec: {{ EvaluationWindowSec }}
                AggregateKeyType: "{{ AggregateKeyType }}"
                ScopeDownStatement: "{{ ScopeDownStatement }}"
                ForwardedIPConfig: "{{ ForwardedIPConfig }}"
                CustomKeys: "{{ CustomKeys }}"
              AndStatement:
                Statements: "{{ Statements }}"
              OrStatement:
                Statements: "{{ Statements }}"
              NotStatement:
                Statement: "{{ Statement }}"
              ManagedRuleGroupStatement:
                VendorName: "{{ VendorName }}"
                Name: "{{ Name }}"
                Version: "{{ Version }}"
                ExcludedRules: "{{ ExcludedRules }}"
                ScopeDownStatement: "{{ ScopeDownStatement }}"
                ManagedRuleGroupConfigs: "{{ ManagedRuleGroupConfigs }}"
                RuleActionOverrides: "{{ RuleActionOverrides }}"
              LabelMatchStatement:
                Scope: "{{ Scope }}"
                Key: "{{ Key }}"
              RegexMatchStatement:
                RegexString: "{{ RegexString }}"
                FieldToMatch: "{{ FieldToMatch }}"
                TextTransformations: "{{ TextTransformations }}"
              AsnMatchStatement:
                AsnList: "{{ AsnList }}"
                ForwardedIPConfig: "{{ ForwardedIPConfig }}"
            ManagedRuleGroupConfigs:
              - LoginPath: "{{ LoginPath }}"
                PayloadType: "{{ PayloadType }}"
                UsernameField:
                  Identifier: "{{ Identifier }}"
                PasswordField:
                  Identifier: "{{ Identifier }}"
                AWSManagedRulesBotControlRuleSet:
                  InspectionLevel: "{{ InspectionLevel }}"
                  EnableMachineLearning: {{ EnableMachineLearning }}
                AWSManagedRulesATPRuleSet:
                  LoginPath: "{{ LoginPath }}"
                  RequestInspection: "{{ RequestInspection }}"
                  ResponseInspection: "{{ ResponseInspection }}"
                  EnableRegexInPath: {{ EnableRegexInPath }}
                AWSManagedRulesACFPRuleSet:
                  CreationPath: "{{ CreationPath }}"
                  RegistrationPagePath: "{{ RegistrationPagePath }}"
                  RequestInspection: "{{ RequestInspection }}"
                  ResponseInspection: "{{ ResponseInspection }}"
                  EnableRegexInPath: {{ EnableRegexInPath }}
                AWSManagedRulesAntiDDoSRuleSet:
                  ClientSideActionConfig: "{{ ClientSideActionConfig }}"
                  SensitivityToBlock: "{{ SensitivityToBlock }}"
            RuleActionOverrides:
              - Name: "{{ Name }}"
                ActionToUse:
                  Block: "{{ Block }}"
                  Allow: "{{ Allow }}"
                  Count: "{{ Count }}"
                  Captcha: "{{ Captcha }}"
                  Challenge: "{{ Challenge }}"
          LabelMatchStatement:
            Scope: "{{ Scope }}"
            Key: "{{ Key }}"
          RegexMatchStatement:
            RegexString: "{{ RegexString }}"
            FieldToMatch:
              SingleHeader:
                Name: "{{ Name }}"
              SingleQueryArgument:
                Name: "{{ Name }}"
              AllQueryArguments: "{{ AllQueryArguments }}"
              UriPath: "{{ UriPath }}"
              QueryString: "{{ QueryString }}"
              Body:
                OversizeHandling: "{{ OversizeHandling }}"
              Method: "{{ Method }}"
              JsonBody:
                MatchPattern: "{{ MatchPattern }}"
                MatchScope: "{{ MatchScope }}"
                InvalidFallbackBehavior: "{{ InvalidFallbackBehavior }}"
                OversizeHandling: "{{ OversizeHandling }}"
              Headers:
                MatchPattern: "{{ MatchPattern }}"
                MatchScope: "{{ MatchScope }}"
                OversizeHandling: "{{ OversizeHandling }}"
              Cookies:
                MatchPattern: "{{ MatchPattern }}"
                MatchScope: "{{ MatchScope }}"
                OversizeHandling: "{{ OversizeHandling }}"
              HeaderOrder:
                OversizeHandling: "{{ OversizeHandling }}"
              JA3Fingerprint:
                FallbackBehavior: "{{ FallbackBehavior }}"
              JA4Fingerprint:
                FallbackBehavior: "{{ FallbackBehavior }}"
              UriFragment:
                FallbackBehavior: "{{ FallbackBehavior }}"
            TextTransformations:
              - Priority: {{ Priority }}
                Type: "{{ Type }}"
          AsnMatchStatement:
            AsnList:
              - {{ AsnList }}
            ForwardedIPConfig:
              HeaderName: "{{ HeaderName }}"
              FallbackBehavior: "{{ FallbackBehavior }}"
        Action:
          Block:
            CustomResponse:
              ResponseCode: {{ ResponseCode }}
              CustomResponseBodyKey: "{{ CustomResponseBodyKey }}"
              ResponseHeaders:
                - Name: "{{ Name }}"
                  Value: "{{ Value }}"
          Allow:
            CustomRequestHandling:
              InsertHeaders:
                - Name: "{{ Name }}"
                  Value: "{{ Value }}"
          Count:
            CustomRequestHandling:
              InsertHeaders:
                - Name: "{{ Name }}"
                  Value: "{{ Value }}"
          Captcha:
            CustomRequestHandling:
              InsertHeaders:
                - Name: "{{ Name }}"
                  Value: "{{ Value }}"
          Challenge:
            CustomRequestHandling:
              InsertHeaders:
                - Name: "{{ Name }}"
                  Value: "{{ Value }}"
        OverrideAction:
          Count:
            CustomRequestHandling:
              InsertHeaders:
                - Name: "{{ Name }}"
                  Value: "{{ Value }}"
          None: "{{ None }}"
        RuleLabels: "{{ RuleLabels }}"
        VisibilityConfig:
          SampledRequestsEnabled: {{ SampledRequestsEnabled }}
          CloudWatchMetricsEnabled: {{ CloudWatchMetricsEnabled }}
          MetricName: "{{ MetricName }}"
        CaptchaConfig:
          ImmunityTimeProperty:
            ImmunityTime: {{ ImmunityTime }}
        ChallengeConfig:
          ImmunityTimeProperty:
            ImmunityTime: {{ ImmunityTime }}
  - name: VisibilityConfig
    description: |
      Defines and enables Amazon CloudWatch metrics and web request sample collection.
    value:
      SampledRequestsEnabled: {{ SampledRequestsEnabled }}
      CloudWatchMetricsEnabled: {{ CloudWatchMetricsEnabled }}
      MetricName: "{{ MetricName }}"
  - name: Tags
    description: |
      An array of key:value pairs to associate with the resource.
    value:
      - Key: "{{ Key }}"
        Value: "{{ Value }}"
  - name: CustomResponseBodies
    value: "{{ CustomResponseBodies }}"
    description: |
      A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the rule group, and then use them in the rules that you define in the rule group. For information about customizing web requests and responses, see Customizing web requests and responses in WAF in the WAF Developer Guide. For information about the limits on count and size for custom request and response settings, see WAF quotas in the WAF Developer Guide.
`})})]}),"\n",(0,n.jsxs)(t.h2,{id:"update-examples",children:[(0,n.jsx)(t.code,{children:"UPDATE"})," examples"]}),"\n",(0,n.jsx)(l.A,{defaultValue:"update_rule_group",values:[{label:"update_rule_group",value:"update_rule_group"}],children:(0,n.jsxs)(d.A,{value:"update_rule_group",children:[(0,n.jsx)(t.p,{children:"Updates the specified RuleGroup. This operation completely replaces the mutable specifications that you already have for the rule group with the ones that you provide to this call. To modify a rule group, do the following: Retrieve it by calling GetRuleGroup Update its settings as needed Provide the complete rule group specification to this call A rule group defines a collection of rules to inspect and control web requests that you can use in a WebACL. When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements. Temporary inconsistencies during updates When you create or change a web ACL or other WAF resources, the changes take a small amount of time to propagate to all areas where the resources are stored. The propagation time can be from a few seconds to a number of minutes. The following are examples of the temporary inconsistencies that you might notice during change propagation: After you create a web ACL, if you try to associate it with a resource, you might get an exception indicating that the web ACL is unavailable. After you add a rule group to a web ACL, the new rule group rules might be in effect in one area where the web ACL is used and not in another. After you change a rule action setting, you might see the old action in some places and the new action in others. After you add an IP address to an IP set that is in use in a blocking rule, the new address might be blocked in one area while still allowed in another."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"UPDATE aws.wafv2.rule_groups\nSET \nName = '{{ Name }}',\nScope = '{{ Scope }}',\nId = '{{ Id }}',\nDescription = '{{ Description }}',\nRules = '{{ Rules }}',\nVisibilityConfig = '{{ VisibilityConfig }}',\nLockToken = '{{ LockToken }}',\nCustomResponseBodies = '{{ CustomResponseBodies }}'\nWHERE \nregion = '{{ region }}' --required\nAND Name = '{{ Name }}' --required\nAND Scope = '{{ Scope }}' --required\nAND Id = '{{ Id }}' --required\nAND VisibilityConfig = '{{ VisibilityConfig }}' --required\nAND LockToken = '{{ LockToken }}' --required\nRETURNING\nNextLockToken;\n"})})]})}),"\n",(0,n.jsxs)(t.h2,{id:"delete-examples",children:[(0,n.jsx)(t.code,{children:"DELETE"})," examples"]}),"\n",(0,n.jsxs)(l.A,{defaultValue:"delete_rule_group",values:[{label:"delete_rule_group",value:"delete_rule_group"},{label:"delete_firewall_manager_rule_groups",value:"delete_firewall_manager_rule_groups"}],children:[(0,n.jsxs)(d.A,{value:"delete_rule_group",children:[(0,n.jsx)(t.p,{children:"Deletes the specified RuleGroup."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"DELETE FROM aws.wafv2.rule_groups\nWHERE region = '{{ region }}' --required\n;\n"})})]}),(0,n.jsxs)(d.A,{value:"delete_firewall_manager_rule_groups",children:[(0,n.jsx)(t.p,{children:"Deletes all rule groups that are managed by Firewall Manager from the specified WebACL. You can only use this if ManagedByFirewallManager and RetrofittedByFirewallManager are both false in the web ACL."}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"DELETE FROM aws.wafv2.rule_groups\nWHERE region = '{{ region }}' --required\n;\n"})})]})]})]})}function p(e={}){let{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}}}]);