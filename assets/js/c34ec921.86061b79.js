"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["794884"],{357423(e,s,n){n.r(s),n.d(s,{metadata:()=>t,default:()=>y,frontMatter:()=>d,contentTitle:()=>h,toc:()=>p,assets:()=>u});var t=JSON.parse('{"id":"services/ce/anomaly_subscriptions/index","title":"anomaly_subscriptions","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/ce/anomaly_subscriptions/index.md","sourceDirName":"services/ce/anomaly_subscriptions","slug":"/services/ce/anomaly_subscriptions/","permalink":"/services/ce/anomaly_subscriptions/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"anomaly_subscriptions","hide_title":false,"hide_table_of_contents":false,"keywords":["anomaly_subscriptions","ce","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"anomaly_monitors","permalink":"/services/ce/anomaly_monitors/"},"next":{"title":"approximate_usage_records","permalink":"/services/ce/approximate_usage_records/"}}'),i=n(474848),o=n(28453),a=n(97362),r=n(897272),c=n(413554),l=n(541647);let d={title:"anomaly_subscriptions",hide_title:!1,hide_table_of_contents:!1,keywords:["anomaly_subscriptions","ce","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,u={},p=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function m(e){let s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["Creates, updates, deletes, gets or lists an ",(0,i.jsx)("code",{children:"anomaly_subscriptions"})," resource."]}),"\n",(0,i.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Name"})}),(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"anomaly_subscriptions"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Type"})}),(0,i.jsx)("td",{children:"Resource"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Id"})}),(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"aws.ce.anomaly_subscriptions"})})]})]})}),"\n",(0,i.jsx)(s.h2,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(s.p,{children:["The following fields are returned by ",(0,i.jsx)(s.code,{children:"SELECT"})," queries:"]}),"\n",(0,i.jsx)(c.A,{defaultValue:"get_anomaly_subscriptions",values:[{label:"get_anomaly_subscriptions",value:"get_anomaly_subscriptions"}],children:(0,i.jsx)(l.A,{value:"get_anomaly_subscriptions",children:(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Datatype"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"AccountId"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Your unique account identifier. (pattern: <code>[\\S\\s]*</code>)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"Frequency"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The frequency that anomaly notifications are sent. Notifications are sent either over email (for DAILY and WEEKLY frequencies) or SNS (for IMMEDIATE frequency). For more information, see Creating an Amazon SNS topic for anomaly notifications. (DAILY, IMMEDIATE, WEEKLY)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"MonitorArnList"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"array"})}),(0,i.jsx)("td",{children:"A list of cost anomaly monitors."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"Subscribers"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"array"})}),(0,i.jsx)("td",{children:"A list of subscribers to notify."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"SubscriptionArn"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The AnomalySubscription Amazon Resource Name (ARN). (pattern: <code>[\\S\\s]*</code>)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"SubscriptionName"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The name for the subscription. (pattern: <code>[\\S\\s]*</code>)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"Threshold"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"number (double)"})}),(0,i.jsx)("td",{children:"(deprecated) An absolute dollar value that must be exceeded by the anomaly's total impact (see Impact for more details) for an anomaly notification to be generated. This field has been deprecated. To specify a threshold, use ThresholdExpression. Continued use of Threshold will be treated as shorthand syntax for a ThresholdExpression. One of Threshold or ThresholdExpression is required for this resource. You cannot specify both."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"ThresholdExpression"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:'Use Expression to filter in various Cost Explorer APIs. Not all Expression types are supported in each API. Refer to the documentation for each specific API to see what is supported. There are two patterns: Simple dimension values. There are three types of simple dimension values: CostCategories, Tags, and Dimensions. Specify the CostCategories field to define a filter that acts on Cost Categories. Specify the Tags field to define a filter that acts on Cost Allocation Tags. Specify the Dimensions field to define a filter that acts on the DimensionValues . For each filter type, you can set the dimension name and values for the filters that you plan to use. For example, you can filter for REGION==us-east-1 OR REGION==us-west-1. For GetRightsizingRecommendation, the Region is a full name (for example, REGION==US East (N. Virginia). The corresponding Expression for this example is as follows: { "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] } } As shown in the previous example, lists of dimension values are combined with OR when applying the filter. You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported. For example, you can filter for linked account names that start with "a". The corresponding Expression for this example is as follows: { "Dimensions": { "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": [ "STARTS_WITH" ], "Values": [ "a" ] } } Compound Expression types with logical operations. You can use multiple Expression types and the logical operators AND/OR/NOT to create a list of one or more Expression objects. By doing this, you can filter by more advanced options. For example, you can filter by ((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer). The corresponding Expression for this example is as follows: { "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } Because each Expression can have only one operator, the service returns an error if more than one is specified. The following example shows an Expression object that creates an error: { "And": [ ... ], "Dimensions": { "Key": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } The following is an example of the corresponding error message: "Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories" For the GetRightsizingRecommendation action, a combination of OR and NOT isn\'t supported. OR isn\'t supported between different dimensions, or dimensions and tags. NOT operators aren\'t supported. Dimensions are also limited to LINKED_ACCOUNT, REGION, or RIGHTSIZING_TYPE. For the GetReservationPurchaseRecommendation action, only NOT is supported. AND and OR aren\'t supported. Dimensions are limited to LINKED_ACCOUNT.'})]})]})]})})}),"\n",(0,i.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(s.p,{children:"The following methods are available for this resource:"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Accessible by"}),(0,i.jsx)("th",{children:"Required Params"}),(0,i.jsx)("th",{children:"Optional Params"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#get_anomaly_subscriptions",children:(0,i.jsx)(a.A,{code:"get_anomaly_subscriptions"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"select"})}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Retrieves the cost anomaly subscription objects for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs)."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#create_anomaly_subscription",children:(0,i.jsx)(a.A,{code:"create_anomaly_subscription"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"insert"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})}),", ",(0,i.jsx)("a",{href:"#parameter-AnomalySubscription",children:(0,i.jsx)("code",{children:"AnomalySubscription"})})]}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Adds an alert subscription to a cost anomaly detection monitor. You can use each subscription to define subscribers with email or SNS notifications. Email subscribers can set an absolute or percentage threshold and a time frequency for receiving notifications."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#update_anomaly_subscription",children:(0,i.jsx)(a.A,{code:"update_anomaly_subscription"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"update"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})}),", ",(0,i.jsx)("a",{href:"#parameter-SubscriptionArn",children:(0,i.jsx)("code",{children:"SubscriptionArn"})})]}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Updates an existing cost anomaly subscription. Specify the fields that you want to update. Omitted fields are unchanged. The JSON below describes the generic construct for each type. See Request Parameters for possible values as they apply to AnomalySubscription."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#delete_anomaly_subscription",children:(0,i.jsx)(a.A,{code:"delete_anomaly_subscription"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"delete"})}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Deletes a cost anomaly subscription."})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.p,{children:["Parameters can be passed in the ",(0,i.jsx)(s.code,{children:"WHERE"})," clause of a query. Check the ",(0,i.jsx)(s.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Datatype"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsx)("tbody",{children:(0,i.jsxs)("tr",{id:"parameter-region",children:[(0,i.jsx)("td",{children:(0,i.jsx)(a.A,{code:"region"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,i.jsxs)(s.h2,{id:"select-examples",children:[(0,i.jsx)(s.code,{children:"SELECT"})," examples"]}),"\n",(0,i.jsx)(c.A,{defaultValue:"get_anomaly_subscriptions",values:[{label:"get_anomaly_subscriptions",value:"get_anomaly_subscriptions"}],children:(0,i.jsxs)(l.A,{value:"get_anomaly_subscriptions",children:[(0,i.jsx)(s.p,{children:"Retrieves the cost anomaly subscription objects for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs)."}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"SELECT\nAccountId,\nFrequency,\nMonitorArnList,\nSubscribers,\nSubscriptionArn,\nSubscriptionName,\nThreshold,\nThresholdExpression\nFROM aws.ce.anomaly_subscriptions\nWHERE region = '{{ region }}' -- required\n;\n"})})]})}),"\n",(0,i.jsxs)(s.h2,{id:"insert-examples",children:[(0,i.jsx)(s.code,{children:"INSERT"})," examples"]}),"\n",(0,i.jsxs)(c.A,{defaultValue:"create_anomaly_subscription",values:[{label:"create_anomaly_subscription",value:"create_anomaly_subscription"},{label:"Manifest",value:"manifest"}],children:[(0,i.jsxs)(l.A,{value:"create_anomaly_subscription",children:[(0,i.jsx)(s.p,{children:"Adds an alert subscription to a cost anomaly detection monitor. You can use each subscription to define subscribers with email or SNS notifications. Email subscribers can set an absolute or percentage threshold and a time frequency for receiving notifications."}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"INSERT INTO aws.ce.anomaly_subscriptions (\nAnomalySubscription,\nResourceTags,\nregion\n)\nSELECT \n'{{ AnomalySubscription }}' /* required */,\n'{{ ResourceTags }}',\n'{{ region }}'\nRETURNING\nSubscriptionArn\n;\n"})})]}),(0,i.jsx)(l.A,{value:"manifest",children:(0,i.jsx)(r.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: anomaly_subscriptions
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the anomaly_subscriptions resource.
  - name: AnomalySubscription
    description: |
      The cost anomaly subscription object that you want to create.
    value:
      SubscriptionArn: "{{ SubscriptionArn }}"
      AccountId: "{{ AccountId }}"
      MonitorArnList:
        - "{{ MonitorArnList }}"
      Subscribers:
        - Address: "{{ Address }}"
          Type: "{{ Type }}"
          Status: "{{ Status }}"
      Threshold: {{ Threshold }}
      Frequency: "{{ Frequency }}"
      SubscriptionName: "{{ SubscriptionName }}"
      ThresholdExpression:
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
  - name: ResourceTags
    description: |
      An optional list of tags to associate with the specified AnomalySubscription . You can use resource tags to control access to your subscription using IAM policies. Each tag consists of a key and a value, and each key must be unique for the resource. The following restrictions apply to resource tags: Although the maximum number of array members is 200, you can assign a maximum of 50 user-tags to one resource. The remaining are reserved for Amazon Web Services use The maximum length of a key is 128 characters The maximum length of a value is 256 characters Keys and values can only contain alphanumeric characters, spaces, and any of the following: _.:/=+@- Keys and values are case sensitive Keys and values are trimmed for any leading or trailing whitespaces Don\u{2019}t use aws: as a prefix for your keys. This prefix is reserved for Amazon Web Services use
    value:
      - Key: "{{ Key }}"
        Value: "{{ Value }}"
`})})]}),"\n",(0,i.jsxs)(s.h2,{id:"update-examples",children:[(0,i.jsx)(s.code,{children:"UPDATE"})," examples"]}),"\n",(0,i.jsx)(c.A,{defaultValue:"update_anomaly_subscription",values:[{label:"update_anomaly_subscription",value:"update_anomaly_subscription"}],children:(0,i.jsxs)(l.A,{value:"update_anomaly_subscription",children:[(0,i.jsx)(s.p,{children:"Updates an existing cost anomaly subscription. Specify the fields that you want to update. Omitted fields are unchanged. The JSON below describes the generic construct for each type. See Request Parameters for possible values as they apply to AnomalySubscription."}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"UPDATE aws.ce.anomaly_subscriptions\nSET \nSubscriptionArn = '{{ SubscriptionArn }}',\nThreshold = {{ Threshold }},\nFrequency = '{{ Frequency }}',\nMonitorArnList = '{{ MonitorArnList }}',\nSubscribers = '{{ Subscribers }}',\nSubscriptionName = '{{ SubscriptionName }}',\nThresholdExpression = '{{ ThresholdExpression }}'\nWHERE \nregion = '{{ region }}' --required\nAND SubscriptionArn = '{{ SubscriptionArn }}' --required\nRETURNING\nSubscriptionArn;\n"})})]})}),"\n",(0,i.jsxs)(s.h2,{id:"delete-examples",children:[(0,i.jsx)(s.code,{children:"DELETE"})," examples"]}),"\n",(0,i.jsx)(c.A,{defaultValue:"delete_anomaly_subscription",values:[{label:"delete_anomaly_subscription",value:"delete_anomaly_subscription"}],children:(0,i.jsxs)(l.A,{value:"delete_anomaly_subscription",children:[(0,i.jsx)(s.p,{children:"Deletes a cost anomaly subscription."}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"DELETE FROM aws.ce.anomaly_subscriptions\nWHERE region = '{{ region }}' --required\n;\n"})})]})})]})}function y(e={}){let{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}}}]);