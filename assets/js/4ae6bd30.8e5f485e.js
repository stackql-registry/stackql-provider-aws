"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["787185"],{616560(e,t,a){a.r(t),a.d(t,{metadata:()=>n,default:()=>g,frontMatter:()=>d,contentTitle:()=>h,toc:()=>m,assets:()=>u});var n=JSON.parse('{"id":"services/wafv2/web_acls/index","title":"web_acls","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/wafv2/web_acls/index.md","sourceDirName":"services/wafv2/web_acls","slug":"/services/wafv2/web_acls/","permalink":"/services/wafv2/web_acls/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"web_acls","hide_title":false,"hide_table_of_contents":false,"keywords":["web_acls","wafv2","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"web_acl_for_resources","permalink":"/services/wafv2/web_acl_for_resources/"},"next":{"title":"wellarchitected","permalink":"/services/wellarchitected/"}}'),o=a(474848),i=a(28453),r=a(97362),s=a(897272),l=a(413554),c=a(541647);let d={title:"web_acls",hide_title:!1,hide_table_of_contents:!1,keywords:["web_acls","wafv2","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,u={},m=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function p(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Creates, updates, deletes, gets or lists a ",(0,o.jsx)("code",{children:"web_acls"})," resource."]}),"\n",(0,o.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)("table",{children:(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("b",{children:"Name"})}),(0,o.jsx)("td",{children:(0,o.jsx)(r.A,{code:"web_acls"})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("b",{children:"Type"})}),(0,o.jsx)("td",{children:"Resource"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("b",{children:"Id"})}),(0,o.jsx)("td",{children:(0,o.jsx)(r.A,{code:"aws.wafv2.web_acls"})})]})]})}),"\n",(0,o.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,o.jsxs)(t.p,{children:["The following fields are returned by ",(0,o.jsx)(t.code,{children:"SELECT"})," queries:"]}),"\n",(0,o.jsx)(l.A,{defaultValue:"get_web_acl",values:[{label:"get_web_acl",value:"get_web_acl"}],children:(0,o.jsx)(c.A,{value:"get_web_acl",children:(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Name"}),(0,o.jsx)("th",{children:"Datatype"}),(0,o.jsx)("th",{children:"Description"})]})}),(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(r.A,{code:"ApplicationIntegrationURL"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"string"})}),(0,o.jsx)("td",{children:"The URL to use in SDK integrations with Amazon Web Services managed rule groups. For example, you can use the integration SDKs with the account takeover prevention managed rule group AWSManagedRulesATPRuleSet and the account creation fraud prevention managed rule group AWSManagedRulesACFPRuleSet. This is only populated if you are using a rule group in your web ACL that integrates with your applications in this way. For more information, see WAF client application integration in the WAF Developer Guide."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(r.A,{code:"LockToken"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"string"})}),(0,o.jsx)("td",{children:"A token used for optimistic locking. WAF returns a token to your get and list requests, to mark the state of the entity at the time of the request. To make changes to the entity associated with the token, you provide the token to operations like update and delete. WAF uses the token to ensure that no changes have been made to the entity since you last retrieved it. If a change has been made, the update fails with a WAFOptimisticLockException. If this happens, perform another get, and use the new token returned by that operation. (pattern: <code>^[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$</code>)"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(r.A,{code:"WebACL"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"object"})}),(0,o.jsx)("td",{children:"The web ACL specification. You can modify the settings in this web ACL and use it to update this web ACL or create a new one."})]})]})]})})}),"\n",(0,o.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,o.jsx)(t.p,{children:"The following methods are available for this resource:"}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Name"}),(0,o.jsx)("th",{children:"Accessible by"}),(0,o.jsx)("th",{children:"Required Params"}),(0,o.jsx)("th",{children:"Optional Params"}),(0,o.jsx)("th",{children:"Description"})]})}),(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#get_web_acl",children:(0,o.jsx)(r.A,{code:"get_web_acl"})})}),(0,o.jsx)("td",{children:(0,o.jsx)(r.A,{code:"select"})}),(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#parameter-region",children:(0,o.jsx)("code",{children:"region"})})}),(0,o.jsx)("td",{}),(0,o.jsx)("td",{children:"Retrieves the specified WebACL."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#create_web_acl",children:(0,o.jsx)(r.A,{code:"create_web_acl"})})}),(0,o.jsx)("td",{children:(0,o.jsx)(r.A,{code:"insert"})}),(0,o.jsxs)("td",{children:[(0,o.jsx)("a",{href:"#parameter-region",children:(0,o.jsx)("code",{children:"region"})}),", ",(0,o.jsx)("a",{href:"#parameter-Name",children:(0,o.jsx)("code",{children:"Name"})}),", ",(0,o.jsx)("a",{href:"#parameter-Scope",children:(0,o.jsx)("code",{children:"Scope"})}),", ",(0,o.jsx)("a",{href:"#parameter-DefaultAction",children:(0,o.jsx)("code",{children:"DefaultAction"})}),", ",(0,o.jsx)("a",{href:"#parameter-VisibilityConfig",children:(0,o.jsx)("code",{children:"VisibilityConfig"})})]}),(0,o.jsx)("td",{}),(0,o.jsx)("td",{children:"Creates a WebACL per the specifications provided. A web ACL defines a collection of rules to use to inspect and control web requests. Each rule has a statement that defines what to look for in web requests and an action that WAF applies to requests that match the statement. In the web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a web ACL can be a combination of the types Rule, RuleGroup, and managed rule group. You can associate a web ACL with one or more Amazon Web Services resources to protect. The resource types include Amazon CloudFront distribution, Amazon API Gateway REST API, Application Load Balancer, AppSync GraphQL API, Amazon Cognito user pool, App Runner service, Amplify application, and Amazon Web Services Verified Access instance."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#update_web_acl",children:(0,o.jsx)(r.A,{code:"update_web_acl"})})}),(0,o.jsx)("td",{children:(0,o.jsx)(r.A,{code:"update"})}),(0,o.jsxs)("td",{children:[(0,o.jsx)("a",{href:"#parameter-region",children:(0,o.jsx)("code",{children:"region"})}),", ",(0,o.jsx)("a",{href:"#parameter-Name",children:(0,o.jsx)("code",{children:"Name"})}),", ",(0,o.jsx)("a",{href:"#parameter-Scope",children:(0,o.jsx)("code",{children:"Scope"})}),", ",(0,o.jsx)("a",{href:"#parameter-Id",children:(0,o.jsx)("code",{children:"Id"})}),", ",(0,o.jsx)("a",{href:"#parameter-DefaultAction",children:(0,o.jsx)("code",{children:"DefaultAction"})}),", ",(0,o.jsx)("a",{href:"#parameter-VisibilityConfig",children:(0,o.jsx)("code",{children:"VisibilityConfig"})}),", ",(0,o.jsx)("a",{href:"#parameter-LockToken",children:(0,o.jsx)("code",{children:"LockToken"})})]}),(0,o.jsx)("td",{}),(0,o.jsx)("td",{children:"Updates the specified WebACL. While updating a web ACL, WAF provides continuous coverage to the resources that you have associated with the web ACL. This operation completely replaces the mutable specifications that you already have for the web ACL with the ones that you provide to this call. To modify a web ACL, do the following: Retrieve it by calling GetWebACL Update its settings as needed Provide the complete web ACL specification to this call A web ACL defines a collection of rules to use to inspect and control web requests. Each rule has a statement that defines what to look for in web requests and an action that WAF applies to requests that match the statement. In the web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a web ACL can be a combination of the types Rule, RuleGroup, and managed rule group. You can associate a web ACL with one or more Amazon Web Services resources to protect. The resource types include Amazon CloudFront distribution, Amazon API Gateway REST API, Application Load Balancer, AppSync GraphQL API, Amazon Cognito user pool, App Runner service, Amplify application, and Amazon Web Services Verified Access instance. Temporary inconsistencies during updates When you create or change a web ACL or other WAF resources, the changes take a small amount of time to propagate to all areas where the resources are stored. The propagation time can be from a few seconds to a number of minutes. The following are examples of the temporary inconsistencies that you might notice during change propagation: After you create a web ACL, if you try to associate it with a resource, you might get an exception indicating that the web ACL is unavailable. After you add a rule group to a web ACL, the new rule group rules might be in effect in one area where the web ACL is used and not in another. After you change a rule action setting, you might see the old action in some places and the new action in others. After you add an IP address to an IP set that is in use in a blocking rule, the new address might be blocked in one area while still allowed in another."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#associate_web_acl",children:(0,o.jsx)(r.A,{code:"associate_web_acl"})})}),(0,o.jsx)("td",{children:(0,o.jsx)(r.A,{code:"update"})}),(0,o.jsxs)("td",{children:[(0,o.jsx)("a",{href:"#parameter-region",children:(0,o.jsx)("code",{children:"region"})}),", ",(0,o.jsx)("a",{href:"#parameter-WebACLArn",children:(0,o.jsx)("code",{children:"WebACLArn"})}),", ",(0,o.jsx)("a",{href:"#parameter-ResourceArn",children:(0,o.jsx)("code",{children:"ResourceArn"})})]}),(0,o.jsx)("td",{}),(0,o.jsx)("td",{children:"Associates a web ACL with a resource, to protect the resource. Use this for all resource types except for Amazon CloudFront distributions. For Amazon CloudFront, call UpdateDistribution for the distribution and provide the Amazon Resource Name (ARN) of the web ACL in the web ACL ID. For information, see UpdateDistribution in the Amazon CloudFront Developer Guide. Required permissions for customer-managed IAM policies This call requires permissions that are specific to the protected resource type. For details, see Permissions for AssociateWebACL in the WAF Developer Guide. Temporary inconsistencies during updates When you create or change a web ACL or other WAF resources, the changes take a small amount of time to propagate to all areas where the resources are stored. The propagation time can be from a few seconds to a number of minutes. The following are examples of the temporary inconsistencies that you might notice during change propagation: After you create a web ACL, if you try to associate it with a resource, you might get an exception indicating that the web ACL is unavailable. After you add a rule group to a web ACL, the new rule group rules might be in effect in one area where the web ACL is used and not in another. After you change a rule action setting, you might see the old action in some places and the new action in others. After you add an IP address to an IP set that is in use in a blocking rule, the new address might be blocked in one area while still allowed in another."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#disassociate_web_acl",children:(0,o.jsx)(r.A,{code:"disassociate_web_acl"})})}),(0,o.jsx)("td",{children:(0,o.jsx)(r.A,{code:"update"})}),(0,o.jsxs)("td",{children:[(0,o.jsx)("a",{href:"#parameter-region",children:(0,o.jsx)("code",{children:"region"})}),", ",(0,o.jsx)("a",{href:"#parameter-ResourceArn",children:(0,o.jsx)("code",{children:"ResourceArn"})})]}),(0,o.jsx)("td",{}),(0,o.jsx)("td",{children:"Disassociates the specified resource from its web ACL association, if it has one. Use this for all resource types except for Amazon CloudFront distributions. For Amazon CloudFront, call UpdateDistribution for the distribution and provide an empty web ACL ID. For information, see UpdateDistribution in the Amazon CloudFront API Reference. Required permissions for customer-managed IAM policies This call requires permissions that are specific to the protected resource type. For details, see Permissions for DisassociateWebACL in the WAF Developer Guide."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#delete_web_acl",children:(0,o.jsx)(r.A,{code:"delete_web_acl"})})}),(0,o.jsx)("td",{children:(0,o.jsx)(r.A,{code:"delete"})}),(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:"#parameter-region",children:(0,o.jsx)("code",{children:"region"})})}),(0,o.jsx)("td",{}),(0,o.jsx)("td",{children:"Deletes the specified WebACL. You can only use this if ManagedByFirewallManager is false in the web ACL. Before deleting any web ACL, first disassociate it from all resources. To retrieve a list of the resources that are associated with a web ACL, use the following calls: For Amazon CloudFront distributions, use the CloudFront call ListDistributionsByWebACLId. For information, see ListDistributionsByWebACLId in the Amazon CloudFront API Reference. For all other resources, call ListResourcesForWebACL. To disassociate a resource from a web ACL, use the following calls: For Amazon CloudFront distributions, provide an empty web ACL ID in the CloudFront call UpdateDistribution. For information, see UpdateDistribution in the Amazon CloudFront API Reference. For all other resources, call DisassociateWebACL."})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(t.p,{children:["Parameters can be passed in the ",(0,o.jsx)(t.code,{children:"WHERE"})," clause of a query. Check the ",(0,o.jsx)(t.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Name"}),(0,o.jsx)("th",{children:"Datatype"}),(0,o.jsx)("th",{children:"Description"})]})}),(0,o.jsx)("tbody",{children:(0,o.jsxs)("tr",{id:"parameter-region",children:[(0,o.jsx)("td",{children:(0,o.jsx)(r.A,{code:"region"})}),(0,o.jsx)("td",{children:(0,o.jsx)("code",{children:"string"})}),(0,o.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,o.jsxs)(t.h2,{id:"select-examples",children:[(0,o.jsx)(t.code,{children:"SELECT"})," examples"]}),"\n",(0,o.jsx)(l.A,{defaultValue:"get_web_acl",values:[{label:"get_web_acl",value:"get_web_acl"}],children:(0,o.jsxs)(c.A,{value:"get_web_acl",children:[(0,o.jsx)(t.p,{children:"Retrieves the specified WebACL."}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"SELECT\nApplicationIntegrationURL,\nLockToken,\nWebACL\nFROM aws.wafv2.web_acls\nWHERE region = '{{ region }}' -- required\n;\n"})})]})}),"\n",(0,o.jsxs)(t.h2,{id:"insert-examples",children:[(0,o.jsx)(t.code,{children:"INSERT"})," examples"]}),"\n",(0,o.jsxs)(l.A,{defaultValue:"create_web_acl",values:[{label:"create_web_acl",value:"create_web_acl"},{label:"Manifest",value:"manifest"}],children:[(0,o.jsxs)(c.A,{value:"create_web_acl",children:[(0,o.jsx)(t.p,{children:"Creates a WebACL per the specifications provided. A web ACL defines a collection of rules to use to inspect and control web requests. Each rule has a statement that defines what to look for in web requests and an action that WAF applies to requests that match the statement. In the web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a web ACL can be a combination of the types Rule, RuleGroup, and managed rule group. You can associate a web ACL with one or more Amazon Web Services resources to protect. The resource types include Amazon CloudFront distribution, Amazon API Gateway REST API, Application Load Balancer, AppSync GraphQL API, Amazon Cognito user pool, App Runner service, Amplify application, and Amazon Web Services Verified Access instance."}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"INSERT INTO aws.wafv2.web_acls (\nName,\nScope,\nDefaultAction,\nDescription,\nRules,\nVisibilityConfig,\nDataProtectionConfig,\nTags,\nCustomResponseBodies,\nCaptchaConfig,\nChallengeConfig,\nTokenDomains,\nAssociationConfig,\nOnSourceDDoSProtectionConfig,\nApplicationConfig,\nregion\n)\nSELECT \n'{{ Name }}' /* required */,\n'{{ Scope }}' /* required */,\n'{{ DefaultAction }}' /* required */,\n'{{ Description }}',\n'{{ Rules }}',\n'{{ VisibilityConfig }}' /* required */,\n'{{ DataProtectionConfig }}',\n'{{ Tags }}',\n'{{ CustomResponseBodies }}',\n'{{ CaptchaConfig }}',\n'{{ ChallengeConfig }}',\n'{{ TokenDomains }}',\n'{{ AssociationConfig }}',\n'{{ OnSourceDDoSProtectionConfig }}',\n'{{ ApplicationConfig }}',\n'{{ region }}'\nRETURNING\nSummary\n;\n"})})]}),(0,o.jsx)(c.A,{value:"manifest",children:(0,o.jsx)(s.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: web_acls
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the web_acls resource.
  - name: Name
    value: "{{ Name }}"
    description: |
      The name of the web ACL. You cannot change the name of a web ACL after you create it.
  - name: Scope
    value: "{{ Scope }}"
    description: |
      Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use CLOUDFRONT. To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1. API and SDKs - For all calls, use the Region endpoint us-east-1.
    valid_values: ['CLOUDFRONT', 'REGIONAL']
  - name: DefaultAction
    description: |
      The action to perform if none of the Rules contained in the WebACL match.
    value:
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
  - name: Description
    value: "{{ Description }}"
    description: |
      A description of the web ACL that helps with identification.
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
  - name: DataProtectionConfig
    description: |
      Specifies data protection to apply to the web request data for the web ACL. This is a web ACL level data protection option. The data protection that you configure for the web ACL alters the data that's available for any other data collection activity, including your WAF logging destinations, web ACL request sampling, and Amazon Security Lake data collection and management. Your other option for data protection is in the logging configuration, which only affects logging.
    value:
      DataProtections:
        - Field:
            FieldType: "{{ FieldType }}"
            FieldKeys:
              - "{{ FieldKeys }}"
          Action: "{{ Action }}"
          ExcludeRuleMatchDetails: {{ ExcludeRuleMatchDetails }}
          ExcludeRateBasedDetails: {{ ExcludeRateBasedDetails }}
  - name: Tags
    description: |
      An array of key:value pairs to associate with the resource.
    value:
      - Key: "{{ Key }}"
        Value: "{{ Value }}"
  - name: CustomResponseBodies
    value: "{{ CustomResponseBodies }}"
    description: |
      A map of custom response keys and content bodies. When you create a rule with a block action, you can send a custom response to the web request. You define these for the web ACL, and then use them in the rules and default actions that you define in the web ACL. For information about customizing web requests and responses, see Customizing web requests and responses in WAF in the WAF Developer Guide. For information about the limits on count and size for custom request and response settings, see WAF quotas in the WAF Developer Guide.
  - name: CaptchaConfig
    description: |
      Specifies how WAF should handle CAPTCHA evaluations for rules that don't have their own CaptchaConfig settings. If you don't specify this, WAF uses its default settings for CaptchaConfig.
    value:
      ImmunityTimeProperty:
        ImmunityTime: {{ ImmunityTime }}
  - name: ChallengeConfig
    description: |
      Specifies how WAF should handle challenge evaluations for rules that don't have their own ChallengeConfig settings. If you don't specify this, WAF uses its default settings for ChallengeConfig.
    value:
      ImmunityTimeProperty:
        ImmunityTime: {{ ImmunityTime }}
  - name: TokenDomains
    value:
      - "{{ TokenDomains }}"
    description: |
      Specifies the domains that WAF should accept in a web request token. This enables the use of tokens across multiple protected websites. When WAF provides a token, it uses the domain of the Amazon Web Services resource that the web ACL is protecting. If you don't specify a list of token domains, WAF accepts tokens only for the domain of the protected resource. With a token domain list, WAF accepts the resource's host domain plus all domains in the token domain list, including their prefixed subdomains. Example JSON: "TokenDomains": { "mywebsite.com", "myotherwebsite.com" } Public suffixes aren't allowed. For example, you can't use gov.au or co.uk as token domains.
  - name: AssociationConfig
    description: |
      Specifies custom configurations for the associations between the web ACL and protected resources. Use this to customize the maximum size of the request body that your protected resources forward to WAF for inspection. You can customize this setting for CloudFront, API Gateway, Amazon Cognito, App Runner, or Verified Access resources. The default setting is 16 KB (16,384 bytes). You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see WAF Pricing. For Application Load Balancer and AppSync, the limit is fixed at 8 KB (8,192 bytes).
    value:
      RequestBody: "{{ RequestBody }}"
  - name: OnSourceDDoSProtectionConfig
    description: |
      Specifies the type of DDoS protection to apply to web request data for a web ACL. For most scenarios, it is recommended to use the default protection level, ACTIVE_UNDER_DDOS. If a web ACL is associated with multiple Application Load Balancers, the changes you make to DDoS protection in that web ACL will apply to all associated Application Load Balancers.
    value:
      ALBLowReputationMode: "{{ ALBLowReputationMode }}"
  - name: ApplicationConfig
    description: |
      Configures the ability for the WAF console to store and retrieve application attributes during the web ACL creation process. Application attributes help WAF give recommendations for protection packs.
    value:
      Attributes:
        - Name: "{{ Name }}"
          Values: "{{ Values }}"
`})})]}),"\n",(0,o.jsxs)(t.h2,{id:"update-examples",children:[(0,o.jsx)(t.code,{children:"UPDATE"})," examples"]}),"\n",(0,o.jsxs)(l.A,{defaultValue:"update_web_acl",values:[{label:"update_web_acl",value:"update_web_acl"},{label:"associate_web_acl",value:"associate_web_acl"},{label:"disassociate_web_acl",value:"disassociate_web_acl"}],children:[(0,o.jsxs)(c.A,{value:"update_web_acl",children:[(0,o.jsx)(t.p,{children:"Updates the specified WebACL. While updating a web ACL, WAF provides continuous coverage to the resources that you have associated with the web ACL. This operation completely replaces the mutable specifications that you already have for the web ACL with the ones that you provide to this call. To modify a web ACL, do the following: Retrieve it by calling GetWebACL Update its settings as needed Provide the complete web ACL specification to this call A web ACL defines a collection of rules to use to inspect and control web requests. Each rule has a statement that defines what to look for in web requests and an action that WAF applies to requests that match the statement. In the web ACL, you assign a default action to take (allow, block) for any request that does not match any of the rules. The rules in a web ACL can be a combination of the types Rule, RuleGroup, and managed rule group. You can associate a web ACL with one or more Amazon Web Services resources to protect. The resource types include Amazon CloudFront distribution, Amazon API Gateway REST API, Application Load Balancer, AppSync GraphQL API, Amazon Cognito user pool, App Runner service, Amplify application, and Amazon Web Services Verified Access instance. Temporary inconsistencies during updates When you create or change a web ACL or other WAF resources, the changes take a small amount of time to propagate to all areas where the resources are stored. The propagation time can be from a few seconds to a number of minutes. The following are examples of the temporary inconsistencies that you might notice during change propagation: After you create a web ACL, if you try to associate it with a resource, you might get an exception indicating that the web ACL is unavailable. After you add a rule group to a web ACL, the new rule group rules might be in effect in one area where the web ACL is used and not in another. After you change a rule action setting, you might see the old action in some places and the new action in others. After you add an IP address to an IP set that is in use in a blocking rule, the new address might be blocked in one area while still allowed in another."}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"UPDATE aws.wafv2.web_acls\nSET \nName = '{{ Name }}',\nScope = '{{ Scope }}',\nId = '{{ Id }}',\nDefaultAction = '{{ DefaultAction }}',\nDescription = '{{ Description }}',\nRules = '{{ Rules }}',\nVisibilityConfig = '{{ VisibilityConfig }}',\nDataProtectionConfig = '{{ DataProtectionConfig }}',\nLockToken = '{{ LockToken }}',\nCustomResponseBodies = '{{ CustomResponseBodies }}',\nCaptchaConfig = '{{ CaptchaConfig }}',\nChallengeConfig = '{{ ChallengeConfig }}',\nTokenDomains = '{{ TokenDomains }}',\nAssociationConfig = '{{ AssociationConfig }}',\nOnSourceDDoSProtectionConfig = '{{ OnSourceDDoSProtectionConfig }}',\nApplicationConfig = '{{ ApplicationConfig }}'\nWHERE \nregion = '{{ region }}' --required\nAND Name = '{{ Name }}' --required\nAND Scope = '{{ Scope }}' --required\nAND Id = '{{ Id }}' --required\nAND DefaultAction = '{{ DefaultAction }}' --required\nAND VisibilityConfig = '{{ VisibilityConfig }}' --required\nAND LockToken = '{{ LockToken }}' --required\nRETURNING\nNextLockToken;\n"})})]}),(0,o.jsxs)(c.A,{value:"associate_web_acl",children:[(0,o.jsx)(t.p,{children:"Associates a web ACL with a resource, to protect the resource. Use this for all resource types except for Amazon CloudFront distributions. For Amazon CloudFront, call UpdateDistribution for the distribution and provide the Amazon Resource Name (ARN) of the web ACL in the web ACL ID. For information, see UpdateDistribution in the Amazon CloudFront Developer Guide. Required permissions for customer-managed IAM policies This call requires permissions that are specific to the protected resource type. For details, see Permissions for AssociateWebACL in the WAF Developer Guide. Temporary inconsistencies during updates When you create or change a web ACL or other WAF resources, the changes take a small amount of time to propagate to all areas where the resources are stored. The propagation time can be from a few seconds to a number of minutes. The following are examples of the temporary inconsistencies that you might notice during change propagation: After you create a web ACL, if you try to associate it with a resource, you might get an exception indicating that the web ACL is unavailable. After you add a rule group to a web ACL, the new rule group rules might be in effect in one area where the web ACL is used and not in another. After you change a rule action setting, you might see the old action in some places and the new action in others. After you add an IP address to an IP set that is in use in a blocking rule, the new address might be blocked in one area while still allowed in another."}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"UPDATE aws.wafv2.web_acls\nSET \nWebACLArn = '{{ WebACLArn }}',\nResourceArn = '{{ ResourceArn }}'\nWHERE \nregion = '{{ region }}' --required\nAND WebACLArn = '{{ WebACLArn }}' --required\nAND ResourceArn = '{{ ResourceArn }}' --required;\n"})})]}),(0,o.jsxs)(c.A,{value:"disassociate_web_acl",children:[(0,o.jsx)(t.p,{children:"Disassociates the specified resource from its web ACL association, if it has one. Use this for all resource types except for Amazon CloudFront distributions. For Amazon CloudFront, call UpdateDistribution for the distribution and provide an empty web ACL ID. For information, see UpdateDistribution in the Amazon CloudFront API Reference. Required permissions for customer-managed IAM policies This call requires permissions that are specific to the protected resource type. For details, see Permissions for DisassociateWebACL in the WAF Developer Guide."}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"UPDATE aws.wafv2.web_acls\nSET \nResourceArn = '{{ ResourceArn }}'\nWHERE \nregion = '{{ region }}' --required\nAND ResourceArn = '{{ ResourceArn }}' --required;\n"})})]})]}),"\n",(0,o.jsxs)(t.h2,{id:"delete-examples",children:[(0,o.jsx)(t.code,{children:"DELETE"})," examples"]}),"\n",(0,o.jsx)(l.A,{defaultValue:"delete_web_acl",values:[{label:"delete_web_acl",value:"delete_web_acl"}],children:(0,o.jsxs)(c.A,{value:"delete_web_acl",children:[(0,o.jsx)(t.p,{children:"Deletes the specified WebACL. You can only use this if ManagedByFirewallManager is false in the web ACL. Before deleting any web ACL, first disassociate it from all resources. To retrieve a list of the resources that are associated with a web ACL, use the following calls: For Amazon CloudFront distributions, use the CloudFront call ListDistributionsByWebACLId. For information, see ListDistributionsByWebACLId in the Amazon CloudFront API Reference. For all other resources, call ListResourcesForWebACL. To disassociate a resource from a web ACL, use the following calls: For Amazon CloudFront distributions, provide an empty web ACL ID in the CloudFront call UpdateDistribution. For information, see UpdateDistribution in the Amazon CloudFront API Reference. For all other resources, call DisassociateWebACL."}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"DELETE FROM aws.wafv2.web_acls\nWHERE region = '{{ region }}' --required\n;\n"})})]})})]})}function g(e={}){let{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}}}]);