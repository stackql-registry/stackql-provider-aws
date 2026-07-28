"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["509776"],{744032(e,s,t){t.r(s),t.d(s,{metadata:()=>o,default:()=>p,frontMatter:()=>c,contentTitle:()=>h,toc:()=>u,assets:()=>m});var o=JSON.parse('{"id":"services/ce/anomaly_monitors/index","title":"anomaly_monitors","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/ce/anomaly_monitors/index.md","sourceDirName":"services/ce/anomaly_monitors","slug":"/services/ce/anomaly_monitors/","permalink":"/services/ce/anomaly_monitors/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"anomaly_monitors","hide_title":false,"hide_table_of_contents":false,"keywords":["anomaly_monitors","ce","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"anomalies","permalink":"/services/ce/anomalies/"},"next":{"title":"anomaly_subscriptions","permalink":"/services/ce/anomaly_subscriptions/"}}'),n=t(474848),a=t(28453),i=t(97362),r=t(897272),l=t(413554),d=t(541647);let c={title:"anomaly_monitors",hide_title:!1,hide_table_of_contents:!1,keywords:["anomaly_monitors","ce","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,m={},u=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function y(e){let s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["Creates, updates, deletes, gets or lists an ",(0,n.jsx)("code",{children:"anomaly_monitors"})," resource."]}),"\n",(0,n.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Name"})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.A,{code:"anomaly_monitors"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Type"})}),(0,n.jsx)("td",{children:"Resource"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Id"})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.A,{code:"aws.ce.anomaly_monitors"})})]})]})}),"\n",(0,n.jsx)(s.h2,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(s.p,{children:["The following fields are returned by ",(0,n.jsx)(s.code,{children:"SELECT"})," queries:"]}),"\n",(0,n.jsx)(l.A,{defaultValue:"get_anomaly_monitors",values:[{label:"get_anomaly_monitors",value:"get_anomaly_monitors"}],children:(0,n.jsx)(d.A,{value:"get_anomaly_monitors",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i.A,{code:"CreationDate"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The date when the monitor was created. (pattern: <code>(\\d{4}-\\d{2}-\\d{2})(T\\d{2}:\\d{2}:\\d{2}Z)?</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i.A,{code:"DimensionalValueCount"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"integer"})}),(0,n.jsx)("td",{children:"The value for evaluated dimensions."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i.A,{code:"LastEvaluatedDate"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The date when the monitor last evaluated for anomalies. (pattern: <code>(\\d{4}-\\d{2}-\\d{2})(T\\d{2}:\\d{2}:\\d{2}Z)?</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i.A,{code:"LastUpdatedDate"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The date when the monitor was last updated. (pattern: <code>(\\d{4}-\\d{2}-\\d{2})(T\\d{2}:\\d{2}:\\d{2}Z)?</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i.A,{code:"MonitorArn"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The Amazon Resource Name (ARN) value. (pattern: <code>[\\S\\s]*</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i.A,{code:"MonitorDimension"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"For customer managed monitors, do not specify this field. For Amazon Web Services managed monitors, this field controls which cost dimension is automatically analyzed by the monitor. For TAG and COST_CATEGORY dimensions, you must also specify MonitorSpecification to configure the specific tag or cost category key to analyze. (SERVICE, LINKED_ACCOUNT, TAG, COST_CATEGORY)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i.A,{code:"MonitorName"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The name of the monitor. (pattern: <code>[\\S\\s]*</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i.A,{code:"MonitorSpecification"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:'An Expression object used to control what costs the monitor analyzes for anomalies. For Amazon Web Services managed monitors: If MonitorDimension is SERVICE or LINKED_ACCOUNT, do not specify this field If MonitorDimension is TAG, set this field to { "Tags": { "Key": "your tag key" } } If MonitorDimension is COST_CATEGORY, set this field to { "CostCategories": { "Key": "your cost category key" } } For customer managed monitors: To track linked accounts, set this field to { "Dimensions": { "Key": "LINKED_ACCOUNT", "Values": [ "your list of up to 10 account IDs" ] } } To track cost allocation tags, set this field to { "Tags": { "Key": "your tag key", "Values": [ "your list of up to 10 tag values" ] } } To track cost categories, set this field to{ "CostCategories": { "Key": "your cost category key", "Values": [ "your cost category value" ] } }'})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i.A,{code:"MonitorType"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The type of the monitor. Set this to DIMENSIONAL for an Amazon Web Services managed monitor. Amazon Web Services managed monitors automatically track up to the top 5,000 values by cost within a dimension of your choosing. Each dimension value is evaluated independently. If you start incurring cost in a new value of your chosen dimension, it will automatically be analyzed by an Amazon Web Services managed monitor. Set this to CUSTOM for a customer managed monitor. Customer managed monitors let you select specific dimension values that get monitored in aggregate. For more information about monitor types, see Monitor types in the Billing and Cost Management User Guide. (DIMENSIONAL, CUSTOM)"})]})]})]})})}),"\n",(0,n.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(s.p,{children:"The following methods are available for this resource:"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Accessible by"}),(0,n.jsx)("th",{children:"Required Params"}),(0,n.jsx)("th",{children:"Optional Params"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#get_anomaly_monitors",children:(0,n.jsx)(i.A,{code:"get_anomaly_monitors"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.A,{code:"select"})}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Retrieves the cost anomaly monitor definitions for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs)."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#create_anomaly_monitor",children:(0,n.jsx)(i.A,{code:"create_anomaly_monitor"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.A,{code:"insert"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-AnomalyMonitor",children:(0,n.jsx)("code",{children:"AnomalyMonitor"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Creates a new cost anomaly detection monitor with the requested type and monitor specification."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#update_anomaly_monitor",children:(0,n.jsx)(i.A,{code:"update_anomaly_monitor"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.A,{code:"update"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-MonitorArn",children:(0,n.jsx)("code",{children:"MonitorArn"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Updates an existing cost anomaly monitor. The changes made are applied going forward, and doesn't change anomalies detected in the past."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#delete_anomaly_monitor",children:(0,n.jsx)(i.A,{code:"delete_anomaly_monitor"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.A,{code:"delete"})}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Deletes a cost anomaly monitor."})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:["Parameters can be passed in the ",(0,n.jsx)(s.code,{children:"WHERE"})," clause of a query. Check the ",(0,n.jsx)(s.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{id:"parameter-region",children:[(0,n.jsx)("td",{children:(0,n.jsx)(i.A,{code:"region"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,n.jsxs)(s.h2,{id:"select-examples",children:[(0,n.jsx)(s.code,{children:"SELECT"})," examples"]}),"\n",(0,n.jsx)(l.A,{defaultValue:"get_anomaly_monitors",values:[{label:"get_anomaly_monitors",value:"get_anomaly_monitors"}],children:(0,n.jsxs)(d.A,{value:"get_anomaly_monitors",children:[(0,n.jsx)(s.p,{children:"Retrieves the cost anomaly monitor definitions for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs)."}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"SELECT\nCreationDate,\nDimensionalValueCount,\nLastEvaluatedDate,\nLastUpdatedDate,\nMonitorArn,\nMonitorDimension,\nMonitorName,\nMonitorSpecification,\nMonitorType\nFROM aws.ce.anomaly_monitors\nWHERE region = '{{ region }}' -- required\n;\n"})})]})}),"\n",(0,n.jsxs)(s.h2,{id:"insert-examples",children:[(0,n.jsx)(s.code,{children:"INSERT"})," examples"]}),"\n",(0,n.jsxs)(l.A,{defaultValue:"create_anomaly_monitor",values:[{label:"create_anomaly_monitor",value:"create_anomaly_monitor"},{label:"Manifest",value:"manifest"}],children:[(0,n.jsxs)(d.A,{value:"create_anomaly_monitor",children:[(0,n.jsx)(s.p,{children:"Creates a new cost anomaly detection monitor with the requested type and monitor specification."}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"INSERT INTO aws.ce.anomaly_monitors (\nAnomalyMonitor,\nResourceTags,\nregion\n)\nSELECT \n'{{ AnomalyMonitor }}' /* required */,\n'{{ ResourceTags }}',\n'{{ region }}'\nRETURNING\nMonitorArn\n;\n"})})]}),(0,n.jsx)(d.A,{value:"manifest",children:(0,n.jsx)(r.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: anomaly_monitors
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the anomaly_monitors resource.
  - name: AnomalyMonitor
    description: |
      The cost anomaly detection monitor object that you want to create.
    value:
      MonitorArn: "{{ MonitorArn }}"
      MonitorName: "{{ MonitorName }}"
      CreationDate: "{{ CreationDate }}"
      LastUpdatedDate: "{{ LastUpdatedDate }}"
      LastEvaluatedDate: "{{ LastEvaluatedDate }}"
      MonitorType: "{{ MonitorType }}"
      MonitorDimension: "{{ MonitorDimension }}"
      MonitorSpecification:
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
      DimensionalValueCount: {{ DimensionalValueCount }}
  - name: ResourceTags
    description: |
      An optional list of tags to associate with the specified AnomalyMonitor . You can use resource tags to control access to your monitor using IAM policies. Each tag consists of a key and a value, and each key must be unique for the resource. The following restrictions apply to resource tags: Although the maximum number of array members is 200, you can assign a maximum of 50 user-tags to one resource. The remaining are reserved for Amazon Web Services use The maximum length of a key is 128 characters The maximum length of a value is 256 characters Keys and values can only contain alphanumeric characters, spaces, and any of the following: _.:/=+@- Keys and values are case sensitive Keys and values are trimmed for any leading or trailing whitespaces Don\u{2019}t use aws: as a prefix for your keys. This prefix is reserved for Amazon Web Services use
    value:
      - Key: "{{ Key }}"
        Value: "{{ Value }}"
`})})]}),"\n",(0,n.jsxs)(s.h2,{id:"update-examples",children:[(0,n.jsx)(s.code,{children:"UPDATE"})," examples"]}),"\n",(0,n.jsx)(l.A,{defaultValue:"update_anomaly_monitor",values:[{label:"update_anomaly_monitor",value:"update_anomaly_monitor"}],children:(0,n.jsxs)(d.A,{value:"update_anomaly_monitor",children:[(0,n.jsx)(s.p,{children:"Updates an existing cost anomaly monitor. The changes made are applied going forward, and doesn't change anomalies detected in the past."}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"UPDATE aws.ce.anomaly_monitors\nSET \nMonitorArn = '{{ MonitorArn }}',\nMonitorName = '{{ MonitorName }}'\nWHERE \nregion = '{{ region }}' --required\nAND MonitorArn = '{{ MonitorArn }}' --required\nRETURNING\nMonitorArn;\n"})})]})}),"\n",(0,n.jsxs)(s.h2,{id:"delete-examples",children:[(0,n.jsx)(s.code,{children:"DELETE"})," examples"]}),"\n",(0,n.jsx)(l.A,{defaultValue:"delete_anomaly_monitor",values:[{label:"delete_anomaly_monitor",value:"delete_anomaly_monitor"}],children:(0,n.jsxs)(d.A,{value:"delete_anomaly_monitor",children:[(0,n.jsx)(s.p,{children:"Deletes a cost anomaly monitor."}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"DELETE FROM aws.ce.anomaly_monitors\nWHERE region = '{{ region }}' --required\n;\n"})})]})})]})}function p(e={}){let{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(y,{...e})}):y(e)}}}]);