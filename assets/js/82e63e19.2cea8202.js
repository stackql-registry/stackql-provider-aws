"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["631939"],{17631(e,r,i){i.r(r),i.d(r,{metadata:()=>t,default:()=>u,frontMatter:()=>l,contentTitle:()=>h,toc:()=>m,assets:()=>p});var t=JSON.parse('{"id":"services/pipes/pipes/index","title":"pipes","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/pipes/pipes/index.md","sourceDirName":"services/pipes/pipes","slug":"/services/pipes/pipes/","permalink":"/services/pipes/pipes/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"pipes","hide_title":false,"hide_table_of_contents":false,"keywords":["pipes","pipes","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"pipes","permalink":"/services/pipes/"},"next":{"title":"tags","permalink":"/services/pipes/tags/"}}'),n=i(474848),s=i(28453),a=i(97362),d=i(897272),o=i(413554),c=i(541647);let l={title:"pipes",hide_title:!1,hide_table_of_contents:!1,keywords:["pipes","pipes","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,p={},m=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function x(e){let r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["Creates, updates, deletes, gets or lists a ",(0,n.jsx)("code",{children:"pipes"})," resource."]}),"\n",(0,n.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Name"})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"pipes"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Type"})}),(0,n.jsx)("td",{children:"Resource"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Id"})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"aws.pipes.pipes"})})]})]})}),"\n",(0,n.jsx)(r.h2,{id:"fields",children:"Fields"}),"\n",(0,n.jsxs)(r.p,{children:["The following fields are returned by ",(0,n.jsx)(r.code,{children:"SELECT"})," queries:"]}),"\n",(0,n.jsxs)(o.A,{defaultValue:"describe_pipe",values:[{label:"describe_pipe",value:"describe_pipe"},{label:"list_pipes",value:"list_pipes"}],children:[(0,n.jsx)(c.A,{value:"describe_pipe",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"Arn"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsxs)("td",{children:["The ARN of the pipe. (pattern: <code>arn",":aws","([a-z]|-)",(0,n.jsx)(r.em,{children:":([a-zA-Z0-9-]+):([a-z]|\\d|-)"}),":([0-9]{12})?:(.+)</code>)"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"CreationTime"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"The time the pipe was created."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"CurrentState"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The state the pipe is in. (RUNNING, STOPPED, CREATING, UPDATING, DELETING, STARTING, STOPPING, CREATE_FAILED, UPDATE_FAILED, START_FAILED, STOP_FAILED, DELETE_FAILED, CREATE_ROLLBACK_FAILED, DELETE_ROLLBACK_FAILED, UPDATE_ROLLBACK_FAILED)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"Description"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"A description of the pipe. (pattern: <code>.*</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"DesiredState"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The state the pipe should be in. (RUNNING, STOPPED, DELETED)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"Enrichment"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The ARN of the enrichment resource. (pattern: <code>$|arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9-]+):([a-z]{2,4}((-gov)|(-de)|(-iso([a-z]?)))?-[a-z]+(-\\d{1})?)?:(\\d{12})?:(.+)</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"EnrichmentParameters"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"The parameters required to set up enrichment on your pipe."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"KmsKeyIdentifier"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The identifier of the KMS customer managed key for EventBridge to use to encrypt pipe data, if one has been specified. For more information, see Data encryption in EventBridge in the Amazon EventBridge User Guide. (pattern: <code>[a-zA-Z0-9_-/:]*</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"LastModifiedTime"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsxs)("td",{children:["When the pipe was last updated, in ISO-8601 format (YYYY-MM-DDThh:mm",":ss",".sTZD)."]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"LogConfiguration"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"The logging configuration settings for the pipe."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"Name"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The name of the pipe. (pattern: <code>[.-_A-Za-z0-9]+</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"RoleArn"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsxs)("td",{children:["The ARN of the role that allows the pipe to send data to the target. (pattern: <code>arn:(aws[a-zA-Z-]*)?:iam::\\d{12}",":role","/?[a-zA-Z0-9+=,.@-_/]+</code>)"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"Source"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsxs)("td",{children:["The ARN of the source resource. (pattern: <code>smk:\u200B//(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]",(0,n.jsx)(r.em,{children:"[a-zA-Z0-9]).)"}),"([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]",(0,n.jsx)(r.em,{children:"[A-Za-z0-9]):[0-9]{1,5}|arn:(aws[a-zA-Z0-9-]"}),"):([a-zA-Z0-9-]+):([a-z]{2,4}((-gov)|(-de)|(-iso([a-z]?)))?-[a-z]+(-\\d{1})?)?:(\\d{12})?:(.+)</code>)"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"SourceParameters"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"The parameters required to set up a source for your pipe."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"StateReason"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The reason the pipe is in its current state. (pattern: <code>.*</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"Tags"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"The list of key-value pairs to associate with the pipe."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"Target"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The ARN of the target resource. (pattern: <code>arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9-]+):([a-z]{2,4}((-gov)|(-de)|(-iso([a-z]?)))?-[a-z]+(-\\d{1})?)?:(\\d{12})?:(.+)</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"TargetParameters"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"object"})}),(0,n.jsx)("td",{children:"The parameters required to set up a target for your pipe. For more information about pipe target parameters, including how to use dynamic path parameters, see Target parameters in the Amazon EventBridge User Guide."})]})]})]})}),(0,n.jsx)(c.A,{value:"list_pipes",children:(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"Arn"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsxs)("td",{children:["The ARN of the pipe. (pattern: <code>arn",":aws","([a-z]|-)",(0,n.jsx)(r.em,{children:":([a-zA-Z0-9-]+):([a-z]|\\d|-)"}),":([0-9]{12})?:(.+)</code>)"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"CreationTime"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsx)("td",{children:"The time the pipe was created."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"CurrentState"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The state the pipe is in. (RUNNING, STOPPED, CREATING, UPDATING, DELETING, STARTING, STOPPING, CREATE_FAILED, UPDATE_FAILED, START_FAILED, STOP_FAILED, DELETE_FAILED, CREATE_ROLLBACK_FAILED, DELETE_ROLLBACK_FAILED, UPDATE_ROLLBACK_FAILED)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"DesiredState"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The state the pipe should be in. (RUNNING, STOPPED)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"Enrichment"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The ARN of the enrichment resource. (pattern: <code>$|arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9-]+):([a-z]{2,4}((-gov)|(-de)|(-iso([a-z]?)))?-[a-z]+(-\\d{1})?)?:(\\d{12})?:(.+)</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"LastModifiedTime"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string (date-time)"})}),(0,n.jsxs)("td",{children:["When the pipe was last updated, in ISO-8601 format (YYYY-MM-DDThh:mm",":ss",".sTZD)."]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"Name"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The name of the pipe. (pattern: <code>[.-_A-Za-z0-9]+</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"Source"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsxs)("td",{children:["The ARN of the source resource. (pattern: <code>smk:\u200B//(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]",(0,n.jsx)(r.em,{children:"[a-zA-Z0-9]).)"}),"([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]",(0,n.jsx)(r.em,{children:"[A-Za-z0-9]):[0-9]{1,5}|arn:(aws[a-zA-Z0-9-]"}),"):([a-zA-Z0-9-]+):([a-z]{2,4}((-gov)|(-de)|(-iso([a-z]?)))?-[a-z]+(-\\d{1})?)?:(\\d{12})?:(.+)</code>)"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"StateReason"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The reason the pipe is in its current state. (pattern: <code>.*</code>)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"Target"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The ARN of the target resource. (pattern: <code>arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9-]+):([a-z]{2,4}((-gov)|(-de)|(-iso([a-z]?)))?-[a-z]+(-\\d{1})?)?:(\\d{12})?:(.+)</code>)"})]})]})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(r.p,{children:"The following methods are available for this resource:"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Accessible by"}),(0,n.jsx)("th",{children:"Required Params"}),(0,n.jsx)("th",{children:"Optional Params"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#describe_pipe",children:(0,n.jsx)(a.A,{code:"describe_pipe"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"select"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-name",children:(0,n.jsx)("code",{children:"name"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Get the information about an existing pipe. For more information about pipes, see Amazon EventBridge Pipes in the Amazon EventBridge User Guide."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#list_pipes",children:(0,n.jsx)(a.A,{code:"list_pipes"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"select"})}),(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-NamePrefix",children:(0,n.jsx)("code",{children:"NamePrefix"})}),", ",(0,n.jsx)("a",{href:"#parameter-DesiredState",children:(0,n.jsx)("code",{children:"DesiredState"})}),", ",(0,n.jsx)("a",{href:"#parameter-CurrentState",children:(0,n.jsx)("code",{children:"CurrentState"})}),", ",(0,n.jsx)("a",{href:"#parameter-SourcePrefix",children:(0,n.jsx)("code",{children:"SourcePrefix"})}),", ",(0,n.jsx)("a",{href:"#parameter-TargetPrefix",children:(0,n.jsx)("code",{children:"TargetPrefix"})}),", ",(0,n.jsx)("a",{href:"#parameter-NextToken",children:(0,n.jsx)("code",{children:"NextToken"})}),", ",(0,n.jsx)("a",{href:"#parameter-Limit",children:(0,n.jsx)("code",{children:"Limit"})})]}),(0,n.jsx)("td",{children:"Get the pipes associated with this account. For more information about pipes, see Amazon EventBridge Pipes in the Amazon EventBridge User Guide."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#create_pipe",children:(0,n.jsx)(a.A,{code:"create_pipe"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"insert"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-name",children:(0,n.jsx)("code",{children:"name"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-RoleArn",children:(0,n.jsx)("code",{children:"RoleArn"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Create a pipe. Amazon EventBridge Pipes connect event sources to targets and reduces the need for specialized knowledge and integration code."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#update_pipe",children:(0,n.jsx)(a.A,{code:"update_pipe"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"update"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-name",children:(0,n.jsx)("code",{children:"name"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})}),", ",(0,n.jsx)("a",{href:"#parameter-RoleArn",children:(0,n.jsx)("code",{children:"RoleArn"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Update an existing pipe. When you call UpdatePipe, EventBridge only the updates fields you have specified in the request; the rest remain unchanged. The exception to this is if you modify any Amazon Web Services-service specific fields in the SourceParameters, EnrichmentParameters, or TargetParameters objects. For example, DynamoDBStreamParameters or EventBridgeEventBusParameters. EventBridge updates the fields in these objects atomically as one and overrides existing values. This is by design, and means that if you don't specify an optional field in one of these Parameters objects, EventBridge sets that field to its system-default value during the update. For more information about pipes, see Amazon EventBridge Pipes in the Amazon EventBridge User Guide."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("a",{href:"#delete_pipe",children:(0,n.jsx)(a.A,{code:"delete_pipe"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"delete"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("a",{href:"#parameter-name",children:(0,n.jsx)("code",{children:"name"})}),", ",(0,n.jsx)("a",{href:"#parameter-region",children:(0,n.jsx)("code",{children:"region"})})]}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Delete an existing pipe. For more information about pipes, see Amazon EventBridge Pipes in the Amazon EventBridge User Guide."})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["Parameters can be passed in the ",(0,n.jsx)(r.code,{children:"WHERE"})," clause of a query. Check the ",(0,n.jsx)(r.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Datatype"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{id:"parameter-name",children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"name"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The name of the pipe."})]}),(0,n.jsxs)("tr",{id:"parameter-region",children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"region"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"AWS region (default: us-east-1)"})]}),(0,n.jsxs)("tr",{id:"parameter-CurrentState",children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"CurrentState"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The state the pipe is in."})]}),(0,n.jsxs)("tr",{id:"parameter-DesiredState",children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"DesiredState"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The state the pipe should be in."})]}),(0,n.jsxs)("tr",{id:"parameter-Limit",children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"Limit"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"integer"})}),(0,n.jsx)("td",{children:"The maximum number of pipes to include in the response."})]}),(0,n.jsxs)("tr",{id:"parameter-NamePrefix",children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"NamePrefix"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:'A value that will return a subset of the pipes associated with this account. For example, "NamePrefix": "ABC" will return all endpoints with "ABC" in the name.'})]}),(0,n.jsxs)("tr",{id:"parameter-NextToken",children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"NextToken"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error."})]}),(0,n.jsxs)("tr",{id:"parameter-SourcePrefix",children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"SourcePrefix"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The prefix matching the pipe source."})]}),(0,n.jsxs)("tr",{id:"parameter-TargetPrefix",children:[(0,n.jsx)("td",{children:(0,n.jsx)(a.A,{code:"TargetPrefix"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"string"})}),(0,n.jsx)("td",{children:"The prefix matching the pipe target."})]})]})]}),"\n",(0,n.jsxs)(r.h2,{id:"select-examples",children:[(0,n.jsx)(r.code,{children:"SELECT"})," examples"]}),"\n",(0,n.jsxs)(o.A,{defaultValue:"describe_pipe",values:[{label:"describe_pipe",value:"describe_pipe"},{label:"list_pipes",value:"list_pipes"}],children:[(0,n.jsxs)(c.A,{value:"describe_pipe",children:[(0,n.jsx)(r.p,{children:"Get the information about an existing pipe. For more information about pipes, see Amazon EventBridge Pipes in the Amazon EventBridge User Guide."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"SELECT\nArn,\nCreationTime,\nCurrentState,\nDescription,\nDesiredState,\nEnrichment,\nEnrichmentParameters,\nKmsKeyIdentifier,\nLastModifiedTime,\nLogConfiguration,\nName,\nRoleArn,\nSource,\nSourceParameters,\nStateReason,\nTags,\nTarget,\nTargetParameters\nFROM aws.pipes.pipes\nWHERE name = '{{ name }}' -- required\nAND region = '{{ region }}' -- required\n;\n"})})]}),(0,n.jsxs)(c.A,{value:"list_pipes",children:[(0,n.jsx)(r.p,{children:"Get the pipes associated with this account. For more information about pipes, see Amazon EventBridge Pipes in the Amazon EventBridge User Guide."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"SELECT\nArn,\nCreationTime,\nCurrentState,\nDesiredState,\nEnrichment,\nLastModifiedTime,\nName,\nSource,\nStateReason,\nTarget\nFROM aws.pipes.pipes\nWHERE region = '{{ region }}' -- required\nAND NamePrefix = '{{ NamePrefix }}'\nAND DesiredState = '{{ DesiredState }}'\nAND CurrentState = '{{ CurrentState }}'\nAND SourcePrefix = '{{ SourcePrefix }}'\nAND TargetPrefix = '{{ TargetPrefix }}'\nAND NextToken = '{{ NextToken }}'\nAND Limit = '{{ Limit }}'\n;\n"})})]})]}),"\n",(0,n.jsxs)(r.h2,{id:"insert-examples",children:[(0,n.jsx)(r.code,{children:"INSERT"})," examples"]}),"\n",(0,n.jsxs)(o.A,{defaultValue:"create_pipe",values:[{label:"create_pipe",value:"create_pipe"},{label:"Manifest",value:"manifest"}],children:[(0,n.jsxs)(c.A,{value:"create_pipe",children:[(0,n.jsx)(r.p,{children:"Create a pipe. Amazon EventBridge Pipes connect event sources to targets and reduces the need for specialized knowledge and integration code."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"INSERT INTO aws.pipes.pipes (\nDescription,\nDesiredState,\nSource,\nSourceParameters,\nEnrichment,\nEnrichmentParameters,\nTarget,\nTargetParameters,\nRoleArn,\nTags,\nLogConfiguration,\nKmsKeyIdentifier,\nname,\nregion\n)\nSELECT \n'{{ Description }}',\n'{{ DesiredState }}',\n'{{ Source }}',\n'{{ SourceParameters }}',\n'{{ Enrichment }}',\n'{{ EnrichmentParameters }}',\n'{{ Target }}',\n'{{ TargetParameters }}',\n'{{ RoleArn }}' /* required */,\n'{{ Tags }}',\n'{{ LogConfiguration }}',\n'{{ KmsKeyIdentifier }}',\n'{{ name }}',\n'{{ region }}'\nRETURNING\nArn,\nCreationTime,\nCurrentState,\nDesiredState,\nLastModifiedTime,\nName\n;\n"})})]}),(0,n.jsx)(c.A,{value:"manifest",children:(0,n.jsx)(d.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: pipes
props:
  - name: name
    value: "{{ name }}"
    description: Required parameter for the pipes resource.
  - name: region
    value: "{{ region }}"
    description: Required parameter for the pipes resource.
  - name: Description
    value: "{{ Description }}"
  - name: DesiredState
    value: "{{ DesiredState }}"
    valid_values: ['RUNNING', 'STOPPED']
  - name: Source
    value: "{{ Source }}"
  - name: SourceParameters
    description: |
      The parameters required to set up a source for your pipe.
    value:
      FilterCriteria:
        Filters:
          - Pattern: "{{ Pattern }}"
      KinesisStreamParameters:
        BatchSize: {{ BatchSize }}
        DeadLetterConfig:
          Arn: "{{ Arn }}"
        OnPartialBatchItemFailure: "{{ OnPartialBatchItemFailure }}"
        MaximumBatchingWindowInSeconds: {{ MaximumBatchingWindowInSeconds }}
        MaximumRecordAgeInSeconds: {{ MaximumRecordAgeInSeconds }}
        MaximumRetryAttempts: {{ MaximumRetryAttempts }}
        ParallelizationFactor: {{ ParallelizationFactor }}
        StartingPosition: "{{ StartingPosition }}"
        StartingPositionTimestamp: "{{ StartingPositionTimestamp }}"
      DynamoDBStreamParameters:
        BatchSize: {{ BatchSize }}
        DeadLetterConfig:
          Arn: "{{ Arn }}"
        OnPartialBatchItemFailure: "{{ OnPartialBatchItemFailure }}"
        MaximumBatchingWindowInSeconds: {{ MaximumBatchingWindowInSeconds }}
        MaximumRecordAgeInSeconds: {{ MaximumRecordAgeInSeconds }}
        MaximumRetryAttempts: {{ MaximumRetryAttempts }}
        ParallelizationFactor: {{ ParallelizationFactor }}
        StartingPosition: "{{ StartingPosition }}"
      SqsQueueParameters:
        BatchSize: {{ BatchSize }}
        MaximumBatchingWindowInSeconds: {{ MaximumBatchingWindowInSeconds }}
      ActiveMQBrokerParameters:
        Credentials:
          BasicAuth: "{{ BasicAuth }}"
        QueueName: "{{ QueueName }}"
        BatchSize: {{ BatchSize }}
        MaximumBatchingWindowInSeconds: {{ MaximumBatchingWindowInSeconds }}
      RabbitMQBrokerParameters:
        Credentials:
          BasicAuth: "{{ BasicAuth }}"
        QueueName: "{{ QueueName }}"
        VirtualHost: "{{ VirtualHost }}"
        BatchSize: {{ BatchSize }}
        MaximumBatchingWindowInSeconds: {{ MaximumBatchingWindowInSeconds }}
      ManagedStreamingKafkaParameters:
        TopicName: "{{ TopicName }}"
        StartingPosition: "{{ StartingPosition }}"
        BatchSize: {{ BatchSize }}
        MaximumBatchingWindowInSeconds: {{ MaximumBatchingWindowInSeconds }}
        ConsumerGroupID: "{{ ConsumerGroupID }}"
        Credentials:
          SaslScram512Auth: "{{ SaslScram512Auth }}"
          ClientCertificateTlsAuth: "{{ ClientCertificateTlsAuth }}"
      SelfManagedKafkaParameters:
        TopicName: "{{ TopicName }}"
        StartingPosition: "{{ StartingPosition }}"
        AdditionalBootstrapServers:
          - "{{ AdditionalBootstrapServers }}"
        BatchSize: {{ BatchSize }}
        MaximumBatchingWindowInSeconds: {{ MaximumBatchingWindowInSeconds }}
        ConsumerGroupID: "{{ ConsumerGroupID }}"
        Credentials:
          BasicAuth: "{{ BasicAuth }}"
          SaslScram512Auth: "{{ SaslScram512Auth }}"
          SaslScram256Auth: "{{ SaslScram256Auth }}"
          ClientCertificateTlsAuth: "{{ ClientCertificateTlsAuth }}"
        ServerRootCaCertificate: "{{ ServerRootCaCertificate }}"
        Vpc:
          Subnets:
            - "{{ Subnets }}"
          SecurityGroup:
            - "{{ SecurityGroup }}"
  - name: Enrichment
    value: "{{ Enrichment }}"
  - name: EnrichmentParameters
    description: |
      The parameters required to set up enrichment on your pipe.
    value:
      InputTemplate: "{{ InputTemplate }}"
      HttpParameters:
        PathParameterValues:
          - "{{ PathParameterValues }}"
        HeaderParameters: "{{ HeaderParameters }}"
        QueryStringParameters: "{{ QueryStringParameters }}"
  - name: Target
    value: "{{ Target }}"
  - name: TargetParameters
    description: |
      The parameters required to set up a target for your pipe. For more information about pipe target parameters, including how to use dynamic path parameters, see Target parameters in the Amazon EventBridge User Guide.
    value:
      InputTemplate: "{{ InputTemplate }}"
      LambdaFunctionParameters:
        InvocationType: "{{ InvocationType }}"
      StepFunctionStateMachineParameters:
        InvocationType: "{{ InvocationType }}"
      KinesisStreamParameters:
        PartitionKey: "{{ PartitionKey }}"
      EcsTaskParameters:
        TaskDefinitionArn: "{{ TaskDefinitionArn }}"
        TaskCount: {{ TaskCount }}
        LaunchType: "{{ LaunchType }}"
        NetworkConfiguration:
          awsvpcConfiguration:
            Subnets:
              - "{{ Subnets }}"
            SecurityGroups:
              - "{{ SecurityGroups }}"
            AssignPublicIp: "{{ AssignPublicIp }}"
        PlatformVersion: "{{ PlatformVersion }}"
        Group: "{{ Group }}"
        CapacityProviderStrategy:
          - capacityProvider: "{{ capacityProvider }}"
            weight: {{ weight }}
            base: {{ base }}
        EnableECSManagedTags: {{ EnableECSManagedTags }}
        EnableExecuteCommand: {{ EnableExecuteCommand }}
        PlacementConstraints:
          - type_: "{{ type_ }}"
            expression: "{{ expression }}"
        PlacementStrategy:
          - type_: "{{ type_ }}"
            field: "{{ field }}"
        PropagateTags: "{{ PropagateTags }}"
        ReferenceId: "{{ ReferenceId }}"
        Overrides:
          ContainerOverrides:
            - Command: "{{ Command }}"
              Cpu: {{ Cpu }}
              Environment: "{{ Environment }}"
              EnvironmentFiles: "{{ EnvironmentFiles }}"
              Memory: {{ Memory }}
              MemoryReservation: {{ MemoryReservation }}
              Name: "{{ Name }}"
              ResourceRequirements: "{{ ResourceRequirements }}"
          Cpu: "{{ Cpu }}"
          EphemeralStorage:
            sizeInGiB: {{ sizeInGiB }}
          ExecutionRoleArn: "{{ ExecutionRoleArn }}"
          InferenceAcceleratorOverrides:
            - deviceName: "{{ deviceName }}"
              deviceType: "{{ deviceType }}"
          Memory: "{{ Memory }}"
          TaskRoleArn: "{{ TaskRoleArn }}"
        Tags:
          - Key: "{{ Key }}"
            Value: "{{ Value }}"
      BatchJobParameters:
        JobDefinition: "{{ JobDefinition }}"
        JobName: "{{ JobName }}"
        ArrayProperties:
          Size: {{ Size }}
        RetryStrategy:
          Attempts: {{ Attempts }}
        ContainerOverrides:
          Command:
            - "{{ Command }}"
          Environment:
            - Name: "{{ Name }}"
              Value: "{{ Value }}"
          InstanceType: "{{ InstanceType }}"
          ResourceRequirements:
            - Type: "{{ Type }}"
              Value: "{{ Value }}"
        DependsOn:
          - JobId: "{{ JobId }}"
            Type: "{{ Type }}"
        Parameters: "{{ Parameters }}"
      SqsQueueParameters:
        MessageGroupId: "{{ MessageGroupId }}"
        MessageDeduplicationId: "{{ MessageDeduplicationId }}"
      HttpParameters:
        PathParameterValues:
          - "{{ PathParameterValues }}"
        HeaderParameters: "{{ HeaderParameters }}"
        QueryStringParameters: "{{ QueryStringParameters }}"
      RedshiftDataParameters:
        SecretManagerArn: "{{ SecretManagerArn }}"
        Database: "{{ Database }}"
        DbUser: "{{ DbUser }}"
        StatementName: "{{ StatementName }}"
        WithEvent: {{ WithEvent }}
        Sqls:
          - "{{ Sqls }}"
      SageMakerPipelineParameters:
        PipelineParameterList:
          - Name: "{{ Name }}"
            Value: "{{ Value }}"
      EventBridgeEventBusParameters:
        EndpointId: "{{ EndpointId }}"
        DetailType: "{{ DetailType }}"
        Source: "{{ Source }}"
        Resources:
          - "{{ Resources }}"
        Time: "{{ Time }}"
      CloudWatchLogsParameters:
        LogStreamName: "{{ LogStreamName }}"
        Timestamp: "{{ Timestamp }}"
      TimestreamParameters:
        TimeValue: "{{ TimeValue }}"
        EpochTimeUnit: "{{ EpochTimeUnit }}"
        TimeFieldType: "{{ TimeFieldType }}"
        TimestampFormat: "{{ TimestampFormat }}"
        VersionValue: "{{ VersionValue }}"
        DimensionMappings:
          - DimensionValue: "{{ DimensionValue }}"
            DimensionValueType: "{{ DimensionValueType }}"
            DimensionName: "{{ DimensionName }}"
        SingleMeasureMappings:
          - MeasureValue: "{{ MeasureValue }}"
            MeasureValueType: "{{ MeasureValueType }}"
            MeasureName: "{{ MeasureName }}"
        MultiMeasureMappings:
          - MultiMeasureName: "{{ MultiMeasureName }}"
            MultiMeasureAttributeMappings: "{{ MultiMeasureAttributeMappings }}"
  - name: RoleArn
    value: "{{ RoleArn }}"
  - name: Tags
    value: "{{ Tags }}"
  - name: LogConfiguration
    description: |
      Specifies the logging configuration settings for the pipe. When you call UpdatePipe, EventBridge updates the fields in the PipeLogConfigurationParameters object atomically as one and overrides existing values. This is by design. If you don't specify an optional field in any of the Amazon Web Services service parameters objects (CloudwatchLogsLogDestinationParameters, FirehoseLogDestinationParameters, or S3LogDestinationParameters), EventBridge sets that field to its system-default value during the update. For example, suppose when you created the pipe you specified a Firehose stream log destination. You then update the pipe to add an Amazon S3 log destination. In addition to specifying the S3LogDestinationParameters for the new log destination, you must also specify the fields in the FirehoseLogDestinationParameters object in order to retain the Firehose stream log destination. For more information on generating pipe log records, see Log EventBridge Pipes in the Amazon EventBridge User Guide.
    value:
      S3LogDestination:
        BucketName: "{{ BucketName }}"
        BucketOwner: "{{ BucketOwner }}"
        OutputFormat: "{{ OutputFormat }}"
        Prefix: "{{ Prefix }}"
      FirehoseLogDestination:
        DeliveryStreamArn: "{{ DeliveryStreamArn }}"
      CloudwatchLogsLogDestination:
        LogGroupArn: "{{ LogGroupArn }}"
      Level: "{{ Level }}"
      IncludeExecutionData:
        - "{{ IncludeExecutionData }}"
  - name: KmsKeyIdentifier
    value: "{{ KmsKeyIdentifier }}"
`})})]}),"\n",(0,n.jsxs)(r.h2,{id:"update-examples",children:[(0,n.jsx)(r.code,{children:"UPDATE"})," examples"]}),"\n",(0,n.jsx)(o.A,{defaultValue:"update_pipe",values:[{label:"update_pipe",value:"update_pipe"}],children:(0,n.jsxs)(c.A,{value:"update_pipe",children:[(0,n.jsx)(r.p,{children:"Update an existing pipe. When you call UpdatePipe, EventBridge only the updates fields you have specified in the request; the rest remain unchanged. The exception to this is if you modify any Amazon Web Services-service specific fields in the SourceParameters, EnrichmentParameters, or TargetParameters objects. For example, DynamoDBStreamParameters or EventBridgeEventBusParameters. EventBridge updates the fields in these objects atomically as one and overrides existing values. This is by design, and means that if you don't specify an optional field in one of these Parameters objects, EventBridge sets that field to its system-default value during the update. For more information about pipes, see Amazon EventBridge Pipes in the Amazon EventBridge User Guide."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"UPDATE aws.pipes.pipes\nSET \nDescription = '{{ Description }}',\nDesiredState = '{{ DesiredState }}',\nSourceParameters = '{{ SourceParameters }}',\nEnrichment = '{{ Enrichment }}',\nEnrichmentParameters = '{{ EnrichmentParameters }}',\nTarget = '{{ Target }}',\nTargetParameters = '{{ TargetParameters }}',\nRoleArn = '{{ RoleArn }}',\nLogConfiguration = '{{ LogConfiguration }}',\nKmsKeyIdentifier = '{{ KmsKeyIdentifier }}'\nWHERE \nname = '{{ name }}' --required\nAND region = '{{ region }}' --required\nAND RoleArn = '{{ RoleArn }}' --required\nRETURNING\nArn,\nCreationTime,\nCurrentState,\nDesiredState,\nLastModifiedTime,\nName;\n"})})]})}),"\n",(0,n.jsxs)(r.h2,{id:"delete-examples",children:[(0,n.jsx)(r.code,{children:"DELETE"})," examples"]}),"\n",(0,n.jsx)(o.A,{defaultValue:"delete_pipe",values:[{label:"delete_pipe",value:"delete_pipe"}],children:(0,n.jsxs)(c.A,{value:"delete_pipe",children:[(0,n.jsx)(r.p,{children:"Delete an existing pipe. For more information about pipes, see Amazon EventBridge Pipes in the Amazon EventBridge User Guide."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"DELETE FROM aws.pipes.pipes\nWHERE name = '{{ name }}' --required\nAND region = '{{ region }}' --required\n;\n"})})]})})]})}function u(e={}){let{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}}}]);