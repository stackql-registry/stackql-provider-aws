"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["803932"],{39098(e,t,r){r.r(t),r.d(t,{metadata:()=>n,default:()=>p,frontMatter:()=>d,contentTitle:()=>h,toc:()=>u,assets:()=>f});var n=JSON.parse('{"id":"services/appflow/flows/index","title":"flows","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/appflow/flows/index.md","sourceDirName":"services/appflow/flows","slug":"/services/appflow/flows/","permalink":"/services/appflow/flows/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"flows","hide_title":false,"hide_table_of_contents":false,"keywords":["flows","appflow","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"flow_execution_records","permalink":"/services/appflow/flow_execution_records/"},"next":{"title":"tags","permalink":"/services/appflow/tags/"}}'),i=r(474848),s=r(28453),o=r(97362),a=r(897272),l=r(413554),c=r(541647);let d={title:"flows",hide_title:!1,hide_table_of_contents:!1,keywords:["flows","appflow","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,f={},u=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2},{value:"Lifecycle Methods",id:"lifecycle-methods",level:2}];function x(e){let t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Creates, updates, deletes, gets or lists a ",(0,i.jsx)("code",{children:"flows"})," resource."]}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Name"})}),(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"flows"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Type"})}),(0,i.jsx)("td",{children:"Resource"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Id"})}),(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"aws.appflow.flows"})})]})]})}),"\n",(0,i.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.p,{children:["The following fields are returned by ",(0,i.jsx)(t.code,{children:"SELECT"})," queries:"]}),"\n",(0,i.jsxs)(l.A,{defaultValue:"describe_flow",values:[{label:"describe_flow",value:"describe_flow"},{label:"list_flows",value:"list_flows"}],children:[(0,i.jsx)(c.A,{value:"describe_flow",children:(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Datatype"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"createdAt"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string (date-time)"})}),(0,i.jsx)("td",{children:"Specifies when the flow was created."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"createdBy"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The ARN of the user who created the flow. (pattern: <code>\\S+</code>)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"description"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"A description of the flow. (pattern: <code>[\\w!@#-.?,\\s]*</code>)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"destinationFlowConfigList"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"array"})}),(0,i.jsx)("td",{children:"The configuration that controls how Amazon AppFlow transfers data to the destination connector."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"flowArn"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsxs)("td",{children:["The flow's Amazon Resource Name (ARN). (pattern: <code>arn:aws:appflow:.",(0,i.jsx)(t.em,{children:":[0-9]+:."}),"</code>)"]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"flowName"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. (pattern: <code>[a-zA-Z0-9][\\w!@#.-]+</code>)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"flowStatus"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Indicates the current status of the flow. (Active, Deprecated, Deleted, Draft, Errored, Suspended)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"flowStatusMessage"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Contains an error message if the flow status is in a suspended or error state. This applies only to scheduled or event-triggered flows. (pattern: <code>[\\s\\w/!@#+=.-]*</code>)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"kmsArn"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsxs)("td",{children:["The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key. (pattern: <code>arn:aws:kms:.",(0,i.jsx)(t.em,{children:":[0-9]+:."}),"</code>)"]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"lastRunExecutionDetails"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"Describes the details of the most recent flow run."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"lastRunMetadataCatalogDetails"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"array"})}),(0,i.jsx)("td",{children:"Describes the metadata catalog, metadata table, and data partitions that Amazon AppFlow used for the associated flow run."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"lastUpdatedAt"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string (date-time)"})}),(0,i.jsx)("td",{children:"Specifies when the flow was last updated."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"lastUpdatedBy"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Specifies the user name of the account that performed the most recent update. (pattern: <code>\\S+</code>)"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"metadataCatalogConfig"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"Specifies the configuration that Amazon AppFlow uses when it catalogs your data. When Amazon AppFlow catalogs your data, it stores metadata in a data catalog."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"schemaVersion"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"integer (int64)"})}),(0,i.jsx)("td",{children:"The version number of your data schema. Amazon AppFlow assigns this version number. The version number increases by one when you change any of the following settings in your flow configuration: Source-to-destination field mappings Field data types Partition keys"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"sourceFlowConfig"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"Contains information about the configuration of the source connector used in the flow."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"tags"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"The tags used to organize, track, or control access for your flow."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"tasks"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"array"})}),(0,i.jsx)("td",{children:"A list of tasks that Amazon AppFlow performs while transferring the data in the flow run."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"triggerConfig"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"The trigger settings that determine how and when Amazon AppFlow runs the specified flow."})]})]})]})}),(0,i.jsx)(c.A,{value:"list_flows",children:(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Datatype"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"flows"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"array"})}),(0,i.jsx)("td",{children:"The list of flows associated with your account."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"nextToken"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The pagination token for next page of data. (pattern: <code>\\S+</code>)"})]})]})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(t.p,{children:"The following methods are available for this resource:"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Accessible by"}),(0,i.jsx)("th",{children:"Required Params"}),(0,i.jsx)("th",{children:"Optional Params"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#describe_flow",children:(0,i.jsx)(o.A,{code:"describe_flow"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"select"})}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Provides a description of the specified flow."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#list_flows",children:(0,i.jsx)(o.A,{code:"list_flows"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"select"})}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Lists all of the flows associated with your account."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#create_flow",children:(0,i.jsx)(o.A,{code:"create_flow"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"insert"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})}),", ",(0,i.jsx)("a",{href:"#parameter-flowName",children:(0,i.jsx)("code",{children:"flowName"})}),", ",(0,i.jsx)("a",{href:"#parameter-triggerConfig",children:(0,i.jsx)("code",{children:"triggerConfig"})}),", ",(0,i.jsx)("a",{href:"#parameter-sourceFlowConfig",children:(0,i.jsx)("code",{children:"sourceFlowConfig"})}),", ",(0,i.jsx)("a",{href:"#parameter-destinationFlowConfigList",children:(0,i.jsx)("code",{children:"destinationFlowConfigList"})}),", ",(0,i.jsx)("a",{href:"#parameter-tasks",children:(0,i.jsx)("code",{children:"tasks"})})]}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Enables your application to create a new flow using Amazon AppFlow. You must create a connector profile before calling this API. Please note that the Request Syntax below shows syntax for multiple destinations, however, you can only transfer data to one item in this list at a time. Amazon AppFlow does not currently support flows to multiple destinations at once."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#update_flow",children:(0,i.jsx)(o.A,{code:"update_flow"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"update"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})}),", ",(0,i.jsx)("a",{href:"#parameter-flowName",children:(0,i.jsx)("code",{children:"flowName"})}),", ",(0,i.jsx)("a",{href:"#parameter-triggerConfig",children:(0,i.jsx)("code",{children:"triggerConfig"})}),", ",(0,i.jsx)("a",{href:"#parameter-sourceFlowConfig",children:(0,i.jsx)("code",{children:"sourceFlowConfig"})}),", ",(0,i.jsx)("a",{href:"#parameter-destinationFlowConfigList",children:(0,i.jsx)("code",{children:"destinationFlowConfigList"})}),", ",(0,i.jsx)("a",{href:"#parameter-tasks",children:(0,i.jsx)("code",{children:"tasks"})})]}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Updates an existing flow."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#delete_flow",children:(0,i.jsx)(o.A,{code:"delete_flow"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"delete"})}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can delete flows one at a time."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#cancel_flow_executions",children:(0,i.jsx)(o.A,{code:"cancel_flow_executions"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"exec"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})}),", ",(0,i.jsx)("a",{href:"#parameter-flowName",children:(0,i.jsx)("code",{children:"flowName"})})]}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Cancels active runs for a flow. You can cancel all of the active runs for a flow, or you can cancel specific runs by providing their IDs. You can cancel a flow run only when the run is in progress. You can't cancel a run that has already completed or failed. You also can't cancel a run that's scheduled to occur but hasn't started yet. To prevent a scheduled run, you can deactivate the flow with the StopFlow action. You cannot resume a run after you cancel it. When you send your request, the status for each run becomes CancelStarted. When the cancellation completes, the status becomes Canceled. When you cancel a run, you still incur charges for any data that the run already processed before the cancellation. If the run had already written some data to the flow destination, then that data remains in the destination. If you configured the flow to use a batch API (such as the Salesforce Bulk API 2.0), then the run will finish reading or writing its entire batch of data after the cancellation. For these operations, the data processing charges for Amazon AppFlow apply. For the pricing information, see Amazon AppFlow pricing."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#start_flow",children:(0,i.jsx)(o.A,{code:"start_flow"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"exec"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})}),", ",(0,i.jsx)("a",{href:"#parameter-flowName",children:(0,i.jsx)("code",{children:"flowName"})})]}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Activates an existing flow. For on-demand flows, this operation runs the flow immediately. For schedule and event-triggered flows, this operation activates the flow."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#stop_flow",children:(0,i.jsx)(o.A,{code:"stop_flow"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"exec"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})}),", ",(0,i.jsx)("a",{href:"#parameter-flowName",children:(0,i.jsx)("code",{children:"flowName"})})]}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Deactivates the existing flow. For on-demand flows, this operation returns an unsupportedOperationException error message. For schedule and event-triggered flows, this operation deactivates the flow."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.p,{children:["Parameters can be passed in the ",(0,i.jsx)(t.code,{children:"WHERE"})," clause of a query. Check the ",(0,i.jsx)(t.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Datatype"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsx)("tbody",{children:(0,i.jsxs)("tr",{id:"parameter-region",children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"region"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,i.jsxs)(t.h2,{id:"select-examples",children:[(0,i.jsx)(t.code,{children:"SELECT"})," examples"]}),"\n",(0,i.jsxs)(l.A,{defaultValue:"describe_flow",values:[{label:"describe_flow",value:"describe_flow"},{label:"list_flows",value:"list_flows"}],children:[(0,i.jsxs)(c.A,{value:"describe_flow",children:[(0,i.jsx)(t.p,{children:"Provides a description of the specified flow."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"SELECT\ncreatedAt,\ncreatedBy,\ndescription,\ndestinationFlowConfigList,\nflowArn,\nflowName,\nflowStatus,\nflowStatusMessage,\nkmsArn,\nlastRunExecutionDetails,\nlastRunMetadataCatalogDetails,\nlastUpdatedAt,\nlastUpdatedBy,\nmetadataCatalogConfig,\nschemaVersion,\nsourceFlowConfig,\ntags,\ntasks,\ntriggerConfig\nFROM aws.appflow.flows\nWHERE region = '{{ region }}' -- required\n;\n"})})]}),(0,i.jsxs)(c.A,{value:"list_flows",children:[(0,i.jsx)(t.p,{children:"Lists all of the flows associated with your account."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"SELECT\nflows,\nnextToken\nFROM aws.appflow.flows\nWHERE region = '{{ region }}' -- required\n;\n"})})]})]}),"\n",(0,i.jsxs)(t.h2,{id:"insert-examples",children:[(0,i.jsx)(t.code,{children:"INSERT"})," examples"]}),"\n",(0,i.jsxs)(l.A,{defaultValue:"create_flow",values:[{label:"create_flow",value:"create_flow"},{label:"Manifest",value:"manifest"}],children:[(0,i.jsxs)(c.A,{value:"create_flow",children:[(0,i.jsx)(t.p,{children:"Enables your application to create a new flow using Amazon AppFlow. You must create a connector profile before calling this API. Please note that the Request Syntax below shows syntax for multiple destinations, however, you can only transfer data to one item in this list at a time. Amazon AppFlow does not currently support flows to multiple destinations at once."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"INSERT INTO aws.appflow.flows (\nflowName,\ndescription,\nkmsArn,\ntriggerConfig,\nsourceFlowConfig,\ndestinationFlowConfigList,\ntasks,\ntags,\nmetadataCatalogConfig,\nclientToken,\nregion\n)\nSELECT \n'{{ flowName }}' /* required */,\n'{{ description }}',\n'{{ kmsArn }}',\n'{{ triggerConfig }}' /* required */,\n'{{ sourceFlowConfig }}' /* required */,\n'{{ destinationFlowConfigList }}' /* required */,\n'{{ tasks }}' /* required */,\n'{{ tags }}',\n'{{ metadataCatalogConfig }}',\n'{{ clientToken }}',\n'{{ region }}'\nRETURNING\nflowArn,\nflowStatus\n;\n"})})]}),(0,i.jsx)(c.A,{value:"manifest",children:(0,i.jsx)(a.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: flows
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the flows resource.
  - name: flowName
    value: "{{ flowName }}"
  - name: description
    value: "{{ description }}"
  - name: kmsArn
    value: "{{ kmsArn }}"
  - name: triggerConfig
    description: |
      The trigger settings that determine how and when Amazon AppFlow runs the specified flow.
    value:
      triggerType: "{{ triggerType }}"
      triggerProperties:
        Scheduled:
          scheduleExpression: "{{ scheduleExpression }}"
          dataPullMode: "{{ dataPullMode }}"
          scheduleStartTime: "{{ scheduleStartTime }}"
          scheduleEndTime: "{{ scheduleEndTime }}"
          timezone: "{{ timezone }}"
          scheduleOffset: {{ scheduleOffset }}
          firstExecutionFrom: "{{ firstExecutionFrom }}"
          flowErrorDeactivationThreshold: {{ flowErrorDeactivationThreshold }}
  - name: sourceFlowConfig
    description: |
      Contains information about the configuration of the source connector used in the flow.
    value:
      connectorType: "{{ connectorType }}"
      apiVersion: "{{ apiVersion }}"
      connectorProfileName: "{{ connectorProfileName }}"
      sourceConnectorProperties:
        Amplitude:
          object: "{{ object }}"
        Datadog:
          object: "{{ object }}"
        Dynatrace:
          object: "{{ object }}"
        GoogleAnalytics:
          object: "{{ object }}"
        InforNexus:
          object: "{{ object }}"
        Marketo:
          object: "{{ object }}"
        S3:
          bucketName: "{{ bucketName }}"
          bucketPrefix: "{{ bucketPrefix }}"
          s3InputFormatConfig:
            s3InputFileType: "{{ s3InputFileType }}"
        Salesforce:
          object: "{{ object }}"
          enableDynamicFieldUpdate: {{ enableDynamicFieldUpdate }}
          includeDeletedRecords: {{ includeDeletedRecords }}
          dataTransferApi: "{{ dataTransferApi }}"
        ServiceNow:
          object: "{{ object }}"
        Singular:
          object: "{{ object }}"
        Slack:
          object: "{{ object }}"
        Trendmicro:
          object: "{{ object }}"
        Veeva:
          object: "{{ object }}"
          documentType: "{{ documentType }}"
          includeSourceFiles: {{ includeSourceFiles }}
          includeRenditions: {{ includeRenditions }}
          includeAllVersions: {{ includeAllVersions }}
        Zendesk:
          object: "{{ object }}"
        SAPOData:
          objectPath: "{{ objectPath }}"
          parallelismConfig:
            maxParallelism: {{ maxParallelism }}
          paginationConfig:
            maxPageSize: {{ maxPageSize }}
        CustomConnector:
          entityName: "{{ entityName }}"
          customProperties: "{{ customProperties }}"
          dataTransferApi:
            Name: "{{ Name }}"
            Type: "{{ Type }}"
        Pardot:
          object: "{{ object }}"
      incrementalPullConfig:
        datetimeTypeFieldName: "{{ datetimeTypeFieldName }}"
  - name: destinationFlowConfigList
    value:
      - connectorType: "{{ connectorType }}"
        apiVersion: "{{ apiVersion }}"
        connectorProfileName: "{{ connectorProfileName }}"
        destinationConnectorProperties:
          Redshift:
            object: "{{ object }}"
            intermediateBucketName: "{{ intermediateBucketName }}"
            bucketPrefix: "{{ bucketPrefix }}"
            errorHandlingConfig:
              failOnFirstDestinationError: {{ failOnFirstDestinationError }}
              bucketPrefix: "{{ bucketPrefix }}"
              bucketName: "{{ bucketName }}"
          S3:
            bucketName: "{{ bucketName }}"
            bucketPrefix: "{{ bucketPrefix }}"
            s3OutputFormatConfig:
              fileType: "{{ fileType }}"
              prefixConfig:
                prefixType: "{{ prefixType }}"
                prefixFormat: "{{ prefixFormat }}"
                pathPrefixHierarchy: "{{ pathPrefixHierarchy }}"
              aggregationConfig:
                aggregationType: "{{ aggregationType }}"
                targetFileSize: {{ targetFileSize }}
              preserveSourceDataTyping: {{ preserveSourceDataTyping }}
          Salesforce:
            object: "{{ object }}"
            idFieldNames:
              - "{{ idFieldNames }}"
            errorHandlingConfig:
              failOnFirstDestinationError: {{ failOnFirstDestinationError }}
              bucketPrefix: "{{ bucketPrefix }}"
              bucketName: "{{ bucketName }}"
            writeOperationType: "{{ writeOperationType }}"
            dataTransferApi: "{{ dataTransferApi }}"
          Snowflake:
            object: "{{ object }}"
            intermediateBucketName: "{{ intermediateBucketName }}"
            bucketPrefix: "{{ bucketPrefix }}"
            errorHandlingConfig:
              failOnFirstDestinationError: {{ failOnFirstDestinationError }}
              bucketPrefix: "{{ bucketPrefix }}"
              bucketName: "{{ bucketName }}"
          EventBridge:
            object: "{{ object }}"
            errorHandlingConfig:
              failOnFirstDestinationError: {{ failOnFirstDestinationError }}
              bucketPrefix: "{{ bucketPrefix }}"
              bucketName: "{{ bucketName }}"
          LookoutMetrics: "{{ LookoutMetrics }}"
          Upsolver:
            bucketName: "{{ bucketName }}"
            bucketPrefix: "{{ bucketPrefix }}"
            s3OutputFormatConfig:
              fileType: "{{ fileType }}"
              prefixConfig:
                prefixType: "{{ prefixType }}"
                prefixFormat: "{{ prefixFormat }}"
                pathPrefixHierarchy: "{{ pathPrefixHierarchy }}"
              aggregationConfig:
                aggregationType: "{{ aggregationType }}"
                targetFileSize: {{ targetFileSize }}
          Honeycode:
            object: "{{ object }}"
            errorHandlingConfig:
              failOnFirstDestinationError: {{ failOnFirstDestinationError }}
              bucketPrefix: "{{ bucketPrefix }}"
              bucketName: "{{ bucketName }}"
          CustomerProfiles:
            domainName: "{{ domainName }}"
            objectTypeName: "{{ objectTypeName }}"
          Zendesk:
            object: "{{ object }}"
            idFieldNames:
              - "{{ idFieldNames }}"
            errorHandlingConfig:
              failOnFirstDestinationError: {{ failOnFirstDestinationError }}
              bucketPrefix: "{{ bucketPrefix }}"
              bucketName: "{{ bucketName }}"
            writeOperationType: "{{ writeOperationType }}"
          Marketo:
            object: "{{ object }}"
            errorHandlingConfig:
              failOnFirstDestinationError: {{ failOnFirstDestinationError }}
              bucketPrefix: "{{ bucketPrefix }}"
              bucketName: "{{ bucketName }}"
          CustomConnector:
            entityName: "{{ entityName }}"
            errorHandlingConfig:
              failOnFirstDestinationError: {{ failOnFirstDestinationError }}
              bucketPrefix: "{{ bucketPrefix }}"
              bucketName: "{{ bucketName }}"
            writeOperationType: "{{ writeOperationType }}"
            idFieldNames:
              - "{{ idFieldNames }}"
            customProperties: "{{ customProperties }}"
          SAPOData:
            objectPath: "{{ objectPath }}"
            successResponseHandlingConfig:
              bucketPrefix: "{{ bucketPrefix }}"
              bucketName: "{{ bucketName }}"
            idFieldNames:
              - "{{ idFieldNames }}"
            errorHandlingConfig:
              failOnFirstDestinationError: {{ failOnFirstDestinationError }}
              bucketPrefix: "{{ bucketPrefix }}"
              bucketName: "{{ bucketName }}"
            writeOperationType: "{{ writeOperationType }}"
  - name: tasks
    value:
      - sourceFields: "{{ sourceFields }}"
        connectorOperator:
          Amplitude: "{{ Amplitude }}"
          Datadog: "{{ Datadog }}"
          Dynatrace: "{{ Dynatrace }}"
          GoogleAnalytics: "{{ GoogleAnalytics }}"
          InforNexus: "{{ InforNexus }}"
          Marketo: "{{ Marketo }}"
          S3: "{{ S3 }}"
          Salesforce: "{{ Salesforce }}"
          ServiceNow: "{{ ServiceNow }}"
          Singular: "{{ Singular }}"
          Slack: "{{ Slack }}"
          Trendmicro: "{{ Trendmicro }}"
          Veeva: "{{ Veeva }}"
          Zendesk: "{{ Zendesk }}"
          SAPOData: "{{ SAPOData }}"
          CustomConnector: "{{ CustomConnector }}"
          Pardot: "{{ Pardot }}"
        destinationField: "{{ destinationField }}"
        taskType: "{{ taskType }}"
        taskProperties: "{{ taskProperties }}"
  - name: tags
    value: "{{ tags }}"
  - name: metadataCatalogConfig
    description: |
      Specifies the configuration that Amazon AppFlow uses when it catalogs your data. When Amazon AppFlow catalogs your data, it stores metadata in a data catalog.
    value:
      glueDataCatalog:
        roleArn: "{{ roleArn }}"
        databaseName: "{{ databaseName }}"
        tablePrefix: "{{ tablePrefix }}"
  - name: clientToken
    value: "{{ clientToken }}"
`})})]}),"\n",(0,i.jsxs)(t.h2,{id:"update-examples",children:[(0,i.jsx)(t.code,{children:"UPDATE"})," examples"]}),"\n",(0,i.jsx)(l.A,{defaultValue:"update_flow",values:[{label:"update_flow",value:"update_flow"}],children:(0,i.jsxs)(c.A,{value:"update_flow",children:[(0,i.jsx)(t.p,{children:"Updates an existing flow."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"UPDATE aws.appflow.flows\nSET \nflowName = '{{ flowName }}',\ndescription = '{{ description }}',\ntriggerConfig = '{{ triggerConfig }}',\nsourceFlowConfig = '{{ sourceFlowConfig }}',\ndestinationFlowConfigList = '{{ destinationFlowConfigList }}',\ntasks = '{{ tasks }}',\nmetadataCatalogConfig = '{{ metadataCatalogConfig }}',\nclientToken = '{{ clientToken }}'\nWHERE \nregion = '{{ region }}' --required\nAND flowName = '{{ flowName }}' --required\nAND triggerConfig = '{{ triggerConfig }}' --required\nAND sourceFlowConfig = '{{ sourceFlowConfig }}' --required\nAND destinationFlowConfigList = '{{ destinationFlowConfigList }}' --required\nAND tasks = '{{ tasks }}' --required\nRETURNING\nflowStatus;\n"})})]})}),"\n",(0,i.jsxs)(t.h2,{id:"delete-examples",children:[(0,i.jsx)(t.code,{children:"DELETE"})," examples"]}),"\n",(0,i.jsx)(l.A,{defaultValue:"delete_flow",values:[{label:"delete_flow",value:"delete_flow"}],children:(0,i.jsxs)(c.A,{value:"delete_flow",children:[(0,i.jsx)(t.p,{children:"Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can delete flows one at a time."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"DELETE FROM aws.appflow.flows\nWHERE region = '{{ region }}' --required\n;\n"})})]})}),"\n",(0,i.jsx)(t.h2,{id:"lifecycle-methods",children:"Lifecycle Methods"}),"\n",(0,i.jsxs)(l.A,{defaultValue:"cancel_flow_executions",values:[{label:"cancel_flow_executions",value:"cancel_flow_executions"},{label:"start_flow",value:"start_flow"},{label:"stop_flow",value:"stop_flow"}],children:[(0,i.jsxs)(c.A,{value:"cancel_flow_executions",children:[(0,i.jsx)(t.p,{children:"Cancels active runs for a flow. You can cancel all of the active runs for a flow, or you can cancel specific runs by providing their IDs. You can cancel a flow run only when the run is in progress. You can't cancel a run that has already completed or failed. You also can't cancel a run that's scheduled to occur but hasn't started yet. To prevent a scheduled run, you can deactivate the flow with the StopFlow action. You cannot resume a run after you cancel it. When you send your request, the status for each run becomes CancelStarted. When the cancellation completes, the status becomes Canceled. When you cancel a run, you still incur charges for any data that the run already processed before the cancellation. If the run had already written some data to the flow destination, then that data remains in the destination. If you configured the flow to use a batch API (such as the Salesforce Bulk API 2.0), then the run will finish reading or writing its entire batch of data after the cancellation. For these operations, the data processing charges for Amazon AppFlow apply. For the pricing information, see Amazon AppFlow pricing."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'EXEC aws.appflow.flows.cancel_flow_executions \n@region=\'{{ region }}\' --required \n@@json=\n\'{\n"flowName": "{{ flowName }}", \n"executionIds": "{{ executionIds }}"\n}\'\n;\n'})})]}),(0,i.jsxs)(c.A,{value:"start_flow",children:[(0,i.jsx)(t.p,{children:"Activates an existing flow. For on-demand flows, this operation runs the flow immediately. For schedule and event-triggered flows, this operation activates the flow."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'EXEC aws.appflow.flows.start_flow \n@region=\'{{ region }}\' --required \n@@json=\n\'{\n"flowName": "{{ flowName }}", \n"clientToken": "{{ clientToken }}"\n}\'\n;\n'})})]}),(0,i.jsxs)(c.A,{value:"stop_flow",children:[(0,i.jsx)(t.p,{children:"Deactivates the existing flow. For on-demand flows, this operation returns an unsupportedOperationException error message. For schedule and event-triggered flows, this operation deactivates the flow."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"EXEC aws.appflow.flows.stop_flow \n@region='{{ region }}' --required \n@@json=\n'{\n\"flowName\": \"{{ flowName }}\"\n}'\n;\n"})})]})]})]})}function p(e={}){let{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}}}]);