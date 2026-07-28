"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["39422"],{396179(e,n,t){t.r(n),t.d(n,{metadata:()=>i,default:()=>x,frontMatter:()=>c,contentTitle:()=>h,toc:()=>g,assets:()=>u});var i=JSON.parse('{"id":"services/medialive/channels/index","title":"channels","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/medialive/channels/index.md","sourceDirName":"services/medialive/channels","slug":"/services/medialive/channels/","permalink":"/services/medialive/channels/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"channels","hide_title":false,"hide_table_of_contents":false,"keywords":["channels","medialive","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"channel_placement_groups","permalink":"/services/medialive/channel_placement_groups/"},"next":{"title":"cloud_watch_alarm_template_groups","permalink":"/services/medialive/cloud_watch_alarm_template_groups/"}}'),a=t(474848),r=t(28453),s=t(97362),o=t(897272),l=t(413554),d=t(541647);let c={title:"channels",hide_title:!1,hide_table_of_contents:!1,keywords:["channels","medialive","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,u={},g=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2},{value:"Lifecycle Methods",id:"lifecycle-methods",level:2}];function p(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Creates, updates, deletes, gets or lists a ",(0,a.jsx)("code",{children:"channels"})," resource."]}),"\n",(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)("table",{children:(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("b",{children:"Name"})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"channels"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("b",{children:"Type"})}),(0,a.jsx)("td",{children:"Resource"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("b",{children:"Id"})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"aws.medialive.channels"})})]})]})}),"\n",(0,a.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(n.p,{children:["The following fields are returned by ",(0,a.jsx)(n.code,{children:"SELECT"})," queries:"]}),"\n",(0,a.jsxs)(l.A,{defaultValue:"describe_channel",values:[{label:"describe_channel",value:"describe_channel"},{label:"list_channels",value:"list_channels"}],children:[(0,a.jsx)(d.A,{value:"describe_channel",children:(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Datatype"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"AnywhereSettings"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"Anywhere settings for this channel."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"Arn"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"Placeholder documentation for __string"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"CdiInputSpecification"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"Placeholder documentation for CdiInputSpecification"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"ChannelClass"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"A standard channel has two encoding pipelines and a single pipeline channel only has one. (STANDARD, SINGLE_PIPELINE)"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"ChannelEngineVersion"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"Placeholder documentation for ChannelEngineVersionResponse"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"ChannelSecurityGroups"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"array"})}),(0,a.jsx)("td",{children:"Placeholder documentation for __listOf__string"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"Destinations"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"array"})}),(0,a.jsx)("td",{children:"Placeholder documentation for __listOfOutputDestination"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"EgressEndpoints"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"array"})}),(0,a.jsx)("td",{children:"The endpoints where outgoing connections initiate from"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"EncoderSettings"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"Encoder Settings"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"Id"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"Placeholder documentation for __string"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"InferenceSettings"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"Include this setting to include Elemental Inference features in this channel."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"InputAttachments"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"array"})}),(0,a.jsx)("td",{children:"Placeholder documentation for __listOfInputAttachment"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"InputSpecification"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"Placeholder documentation for InputSpecification"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"LinkedChannelSettings"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"Linked Channel Settings for this channel."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"LogLevel"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The log level the user wants for their channel. (ERROR, WARNING, INFO, DEBUG, DISABLED)"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"Maintenance"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"Maintenance settings for this channel."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"Name"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"Placeholder documentation for __string"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"PipelineDetails"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"array"})}),(0,a.jsx)("td",{children:"Runtime details for the pipelines of a running channel."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"PipelinesRunningCount"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"integer"})}),(0,a.jsx)("td",{children:"Placeholder documentation for __integer"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"RoleArn"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"Placeholder documentation for __string"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"State"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"Placeholder documentation for ChannelState (CREATING, CREATE_FAILED, IDLE, STARTING, RUNNING, RECOVERING, STOPPING, DELETING, DELETED, UPDATING, UPDATE_FAILED)"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"Tags"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"A collection of key-value pairs."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"Vpc"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"Settings for VPC output"})]})]})]})}),(0,a.jsx)(d.A,{value:"list_channels",children:(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Datatype"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"AnywhereSettings"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"AnywhereSettings settings for this channel."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"Arn"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"Placeholder documentation for __string"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"CdiInputSpecification"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"Placeholder documentation for CdiInputSpecification"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"ChannelClass"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"A standard channel has two encoding pipelines and a single pipeline channel only has one. (STANDARD, SINGLE_PIPELINE)"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"ChannelEngineVersion"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"The engine version that you requested for this channel."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"ChannelSecurityGroups"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"array"})}),(0,a.jsx)("td",{children:"Placeholder documentation for __listOf__string"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"Destinations"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"array"})}),(0,a.jsx)("td",{children:"Placeholder documentation for __listOfOutputDestination"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"EgressEndpoints"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"array"})}),(0,a.jsx)("td",{children:"The endpoints where outgoing connections initiate from"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"Id"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"Placeholder documentation for __string"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"InferenceSettings"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"Include this setting to include Elemental Inference features in this channel."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"InputAttachments"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"array"})}),(0,a.jsx)("td",{children:"Placeholder documentation for __listOfInputAttachment"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"InputSpecification"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"Placeholder documentation for InputSpecification"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"LinkedChannelSettings"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"Linked Channel Settings for this channel."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"LogLevel"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The log level the user wants for their channel. (ERROR, WARNING, INFO, DEBUG, DISABLED)"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"Maintenance"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"Maintenance settings for this channel."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"Name"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"Placeholder documentation for __string"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"PipelinesRunningCount"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"integer"})}),(0,a.jsx)("td",{children:"The number of currently healthy pipelines."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"RoleArn"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"Placeholder documentation for __string"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"State"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"Placeholder documentation for ChannelState (CREATING, CREATE_FAILED, IDLE, STARTING, RUNNING, RECOVERING, STOPPING, DELETING, DELETED, UPDATING, UPDATE_FAILED)"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"Tags"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"A collection of key-value pairs."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"UsedChannelEngineVersions"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"array"})}),(0,a.jsx)("td",{children:"The engine version that the running pipelines are using."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"Vpc"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"Settings for any VPC outputs."})]})]})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,a.jsx)(n.p,{children:"The following methods are available for this resource:"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Accessible by"}),(0,a.jsx)("th",{children:"Required Params"}),(0,a.jsx)("th",{children:"Optional Params"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#describe_channel",children:(0,a.jsx)(s.A,{code:"describe_channel"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"select"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-channel_id",children:(0,a.jsx)("code",{children:"channel_id"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Gets details about a channel"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#list_channels",children:(0,a.jsx)(s.A,{code:"list_channels"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"select"})}),(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-maxResults",children:(0,a.jsx)("code",{children:"maxResults"})}),", ",(0,a.jsx)("a",{href:"#parameter-nextToken",children:(0,a.jsx)("code",{children:"nextToken"})})]}),(0,a.jsx)("td",{children:"Produces list of channels that have been created"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#create_channel",children:(0,a.jsx)(s.A,{code:"create_channel"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"insert"})}),(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Creates a new channel"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#update_channel_class",children:(0,a.jsx)(s.A,{code:"update_channel_class"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"update"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-channel_id",children:(0,a.jsx)("code",{children:"channel_id"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})}),", ",(0,a.jsx)("a",{href:"#parameter-ChannelClass",children:(0,a.jsx)("code",{children:"ChannelClass"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Changes the class of the channel."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#update_channel",children:(0,a.jsx)(s.A,{code:"update_channel"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"update"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-channel_id",children:(0,a.jsx)("code",{children:"channel_id"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Updates a channel."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#delete_channel",children:(0,a.jsx)(s.A,{code:"delete_channel"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"delete"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-channel_id",children:(0,a.jsx)("code",{children:"channel_id"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Starts deletion of channel. The associated outputs are also deleted."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#batch_update_schedule",children:(0,a.jsx)(s.A,{code:"batch_update_schedule"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"exec"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-channel_id",children:(0,a.jsx)("code",{children:"channel_id"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Update a channel schedule"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#restart_channel_pipelines",children:(0,a.jsx)(s.A,{code:"restart_channel_pipelines"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"exec"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-channel_id",children:(0,a.jsx)("code",{children:"channel_id"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Restart pipelines in one channel that is currently running."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#start_channel",children:(0,a.jsx)(s.A,{code:"start_channel"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"exec"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-channel_id",children:(0,a.jsx)("code",{children:"channel_id"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Starts an existing channel"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#stop_channel",children:(0,a.jsx)(s.A,{code:"stop_channel"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"exec"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-channel_id",children:(0,a.jsx)("code",{children:"channel_id"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Stops a running channel"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.p,{children:["Parameters can be passed in the ",(0,a.jsx)(n.code,{children:"WHERE"})," clause of a query. Check the ",(0,a.jsx)(n.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Datatype"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{id:"parameter-channel_id",children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"channel_id"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"A request to stop a running channel"})]}),(0,a.jsxs)("tr",{id:"parameter-region",children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"region"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"AWS region (default: us-east-1)"})]}),(0,a.jsxs)("tr",{id:"parameter-maxResults",children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"maxResults"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"integer"})}),(0,a.jsx)("td",{})]}),(0,a.jsxs)("tr",{id:"parameter-nextToken",children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"nextToken"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{})]})]})]}),"\n",(0,a.jsxs)(n.h2,{id:"select-examples",children:[(0,a.jsx)(n.code,{children:"SELECT"})," examples"]}),"\n",(0,a.jsxs)(l.A,{defaultValue:"describe_channel",values:[{label:"describe_channel",value:"describe_channel"},{label:"list_channels",value:"list_channels"}],children:[(0,a.jsxs)(d.A,{value:"describe_channel",children:[(0,a.jsx)(n.p,{children:"Gets details about a channel"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT\nAnywhereSettings,\nArn,\nCdiInputSpecification,\nChannelClass,\nChannelEngineVersion,\nChannelSecurityGroups,\nDestinations,\nEgressEndpoints,\nEncoderSettings,\nId,\nInferenceSettings,\nInputAttachments,\nInputSpecification,\nLinkedChannelSettings,\nLogLevel,\nMaintenance,\nName,\nPipelineDetails,\nPipelinesRunningCount,\nRoleArn,\nState,\nTags,\nVpc\nFROM aws.medialive.channels\nWHERE channel_id = '{{ channel_id }}' -- required\nAND region = '{{ region }}' -- required\n;\n"})})]}),(0,a.jsxs)(d.A,{value:"list_channels",children:[(0,a.jsx)(n.p,{children:"Produces list of channels that have been created"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT\nAnywhereSettings,\nArn,\nCdiInputSpecification,\nChannelClass,\nChannelEngineVersion,\nChannelSecurityGroups,\nDestinations,\nEgressEndpoints,\nId,\nInferenceSettings,\nInputAttachments,\nInputSpecification,\nLinkedChannelSettings,\nLogLevel,\nMaintenance,\nName,\nPipelinesRunningCount,\nRoleArn,\nState,\nTags,\nUsedChannelEngineVersions,\nVpc\nFROM aws.medialive.channels\nWHERE region = '{{ region }}' -- required\nAND maxResults = '{{ maxResults }}'\nAND nextToken = '{{ nextToken }}'\n;\n"})})]})]}),"\n",(0,a.jsxs)(n.h2,{id:"insert-examples",children:[(0,a.jsx)(n.code,{children:"INSERT"})," examples"]}),"\n",(0,a.jsxs)(l.A,{defaultValue:"create_channel",values:[{label:"create_channel",value:"create_channel"},{label:"Manifest",value:"manifest"}],children:[(0,a.jsxs)(d.A,{value:"create_channel",children:[(0,a.jsx)(n.p,{children:"Creates a new channel"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"INSERT INTO aws.medialive.channels (\nCdiInputSpecification,\nChannelClass,\nDestinations,\nEncoderSettings,\nInputAttachments,\nInputSpecification,\nLogLevel,\nMaintenance,\nName,\nRequestId,\nReserved,\nRoleArn,\nTags,\nVpc,\nAnywhereSettings,\nChannelEngineVersion,\nDryRun,\nLinkedChannelSettings,\nChannelSecurityGroups,\nInferenceSettings,\nregion\n)\nSELECT \n'{{ CdiInputSpecification }}',\n'{{ ChannelClass }}',\n'{{ Destinations }}',\n'{{ EncoderSettings }}',\n'{{ InputAttachments }}',\n'{{ InputSpecification }}',\n'{{ LogLevel }}',\n'{{ Maintenance }}',\n'{{ Name }}',\n'{{ RequestId }}',\n'{{ Reserved }}',\n'{{ RoleArn }}',\n'{{ Tags }}',\n'{{ Vpc }}',\n'{{ AnywhereSettings }}',\n'{{ ChannelEngineVersion }}',\n{{ DryRun }},\n'{{ LinkedChannelSettings }}',\n'{{ ChannelSecurityGroups }}',\n'{{ InferenceSettings }}',\n'{{ region }}'\nRETURNING\nChannel\n;\n"})})]}),(0,a.jsx)(d.A,{value:"manifest",children:(0,a.jsx)(o.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: channels
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the channels resource.
  - name: CdiInputSpecification
    description: |
      Placeholder documentation for CdiInputSpecification
    value:
      Resolution: "{{ Resolution }}"
  - name: ChannelClass
    value: "{{ ChannelClass }}"
    description: |
      A standard channel has two encoding pipelines and a single pipeline channel only has one.
    valid_values: ['STANDARD', 'SINGLE_PIPELINE']
  - name: Destinations
    description: |
      Placeholder documentation for __listOfOutputDestination
    value:
      - Id: "{{ Id }}"
        MediaPackageSettings: "{{ MediaPackageSettings }}"
        MultiplexSettings:
          MultiplexId: "{{ MultiplexId }}"
          ProgramName: "{{ ProgramName }}"
        Settings: "{{ Settings }}"
        SrtSettings: "{{ SrtSettings }}"
        LogicalInterfaceNames: "{{ LogicalInterfaceNames }}"
        MediaConnectRouterSettings: "{{ MediaConnectRouterSettings }}"
  - name: EncoderSettings
    description: |
      Encoder Settings
    value:
      AudioDescriptions:
        - AudioNormalizationSettings:
            Algorithm: "{{ Algorithm }}"
            AlgorithmControl: "{{ AlgorithmControl }}"
            TargetLkfs: {{ TargetLkfs }}
          AudioSelectorName: "{{ AudioSelectorName }}"
          AudioType: "{{ AudioType }}"
          AudioTypeControl: "{{ AudioTypeControl }}"
          AudioWatermarkingSettings:
            NielsenWatermarksSettings:
              NielsenCbetSettings:
                CbetCheckDigitString: "{{ CbetCheckDigitString }}"
                CbetStepaside: "{{ CbetStepaside }}"
                Csid: "{{ Csid }}"
              NielsenDistributionType: "{{ NielsenDistributionType }}"
              NielsenNaesIiNwSettings:
                CheckDigitString: "{{ CheckDigitString }}"
                Sid: {{ Sid }}
                Timezone: "{{ Timezone }}"
          CodecSettings:
            AacSettings:
              Bitrate: {{ Bitrate }}
              CodingMode: "{{ CodingMode }}"
              InputType: "{{ InputType }}"
              Profile: "{{ Profile }}"
              RateControlMode: "{{ RateControlMode }}"
              RawFormat: "{{ RawFormat }}"
              SampleRate: {{ SampleRate }}
              Spec: "{{ Spec }}"
              VbrQuality: "{{ VbrQuality }}"
            Ac3Settings:
              Bitrate: {{ Bitrate }}
              BitstreamMode: "{{ BitstreamMode }}"
              CodingMode: "{{ CodingMode }}"
              Dialnorm: {{ Dialnorm }}
              DrcProfile: "{{ DrcProfile }}"
              LfeFilter: "{{ LfeFilter }}"
              MetadataControl: "{{ MetadataControl }}"
              AttenuationControl: "{{ AttenuationControl }}"
            Eac3AtmosSettings:
              Bitrate: {{ Bitrate }}
              CodingMode: "{{ CodingMode }}"
              Dialnorm: {{ Dialnorm }}
              DrcLine: "{{ DrcLine }}"
              DrcRf: "{{ DrcRf }}"
              HeightTrim: {{ HeightTrim }}
              SurroundTrim: {{ SurroundTrim }}
            Eac3Settings:
              AttenuationControl: "{{ AttenuationControl }}"
              Bitrate: {{ Bitrate }}
              BitstreamMode: "{{ BitstreamMode }}"
              CodingMode: "{{ CodingMode }}"
              DcFilter: "{{ DcFilter }}"
              Dialnorm: {{ Dialnorm }}
              DrcLine: "{{ DrcLine }}"
              DrcRf: "{{ DrcRf }}"
              LfeControl: "{{ LfeControl }}"
              LfeFilter: "{{ LfeFilter }}"
              LoRoCenterMixLevel: {{ LoRoCenterMixLevel }}
              LoRoSurroundMixLevel: {{ LoRoSurroundMixLevel }}
              LtRtCenterMixLevel: {{ LtRtCenterMixLevel }}
              LtRtSurroundMixLevel: {{ LtRtSurroundMixLevel }}
              MetadataControl: "{{ MetadataControl }}"
              PassthroughControl: "{{ PassthroughControl }}"
              PhaseControl: "{{ PhaseControl }}"
              StereoDownmix: "{{ StereoDownmix }}"
              SurroundExMode: "{{ SurroundExMode }}"
              SurroundMode: "{{ SurroundMode }}"
            Mp2Settings:
              Bitrate: {{ Bitrate }}
              CodingMode: "{{ CodingMode }}"
              SampleRate: {{ SampleRate }}
            PassThroughSettings: "{{ PassThroughSettings }}"
            WavSettings:
              BitDepth: {{ BitDepth }}
              CodingMode: "{{ CodingMode }}"
              SampleRate: {{ SampleRate }}
          LanguageCode: "{{ LanguageCode }}"
          LanguageCodeControl: "{{ LanguageCodeControl }}"
          Name: "{{ Name }}"
          RemixSettings:
            ChannelMappings:
              - InputChannelLevels: "{{ InputChannelLevels }}"
                OutputChannel: {{ OutputChannel }}
            ChannelsIn: {{ ChannelsIn }}
            ChannelsOut: {{ ChannelsOut }}
          StreamName: "{{ StreamName }}"
          AudioDashRoles: "{{ AudioDashRoles }}"
          DvbDashAccessibility: "{{ DvbDashAccessibility }}"
      AvailBlanking:
        AvailBlankingImage:
          PasswordParam: "{{ PasswordParam }}"
          Uri: "{{ Uri }}"
          Username: "{{ Username }}"
        State: "{{ State }}"
      AvailConfiguration:
        AvailSettings:
          Esam:
            AcquisitionPointId: "{{ AcquisitionPointId }}"
            AdAvailOffset: {{ AdAvailOffset }}
            PasswordParam: "{{ PasswordParam }}"
            PoisEndpoint: "{{ PoisEndpoint }}"
            Username: "{{ Username }}"
            ZoneIdentity: "{{ ZoneIdentity }}"
          Scte35SpliceInsert:
            AdAvailOffset: {{ AdAvailOffset }}
            NoRegionalBlackoutFlag: "{{ NoRegionalBlackoutFlag }}"
            WebDeliveryAllowedFlag: "{{ WebDeliveryAllowedFlag }}"
          Scte35TimeSignalApos:
            AdAvailOffset: {{ AdAvailOffset }}
            NoRegionalBlackoutFlag: "{{ NoRegionalBlackoutFlag }}"
            WebDeliveryAllowedFlag: "{{ WebDeliveryAllowedFlag }}"
        Scte35SegmentationScope: "{{ Scte35SegmentationScope }}"
      BlackoutSlate:
        BlackoutSlateImage:
          PasswordParam: "{{ PasswordParam }}"
          Uri: "{{ Uri }}"
          Username: "{{ Username }}"
        NetworkEndBlackout: "{{ NetworkEndBlackout }}"
        NetworkEndBlackoutImage:
          PasswordParam: "{{ PasswordParam }}"
          Uri: "{{ Uri }}"
          Username: "{{ Username }}"
        NetworkId: "{{ NetworkId }}"
        State: "{{ State }}"
      CaptionDescriptions:
        - Accessibility: "{{ Accessibility }}"
          CaptionSelectorName: "{{ CaptionSelectorName }}"
          DestinationSettings:
            AribDestinationSettings: "{{ AribDestinationSettings }}"
            BurnInDestinationSettings:
              Alignment: "{{ Alignment }}"
              BackgroundColor: "{{ BackgroundColor }}"
              BackgroundOpacity: {{ BackgroundOpacity }}
              Font:
                PasswordParam: "{{ PasswordParam }}"
                Uri: "{{ Uri }}"
                Username: "{{ Username }}"
              FontColor: "{{ FontColor }}"
              FontOpacity: {{ FontOpacity }}
              FontResolution: {{ FontResolution }}
              FontSize: "{{ FontSize }}"
              OutlineColor: "{{ OutlineColor }}"
              OutlineSize: {{ OutlineSize }}
              ShadowColor: "{{ ShadowColor }}"
              ShadowOpacity: {{ ShadowOpacity }}
              ShadowXOffset: {{ ShadowXOffset }}
              ShadowYOffset: {{ ShadowYOffset }}
              TeletextGridControl: "{{ TeletextGridControl }}"
              XPosition: {{ XPosition }}
              YPosition: {{ YPosition }}
              SubtitleRows: "{{ SubtitleRows }}"
            DvbSubDestinationSettings:
              Alignment: "{{ Alignment }}"
              BackgroundColor: "{{ BackgroundColor }}"
              BackgroundOpacity: {{ BackgroundOpacity }}
              Font:
                PasswordParam: "{{ PasswordParam }}"
                Uri: "{{ Uri }}"
                Username: "{{ Username }}"
              FontColor: "{{ FontColor }}"
              FontOpacity: {{ FontOpacity }}
              FontResolution: {{ FontResolution }}
              FontSize: "{{ FontSize }}"
              OutlineColor: "{{ OutlineColor }}"
              OutlineSize: {{ OutlineSize }}
              ShadowColor: "{{ ShadowColor }}"
              ShadowOpacity: {{ ShadowOpacity }}
              ShadowXOffset: {{ ShadowXOffset }}
              ShadowYOffset: {{ ShadowYOffset }}
              TeletextGridControl: "{{ TeletextGridControl }}"
              XPosition: {{ XPosition }}
              YPosition: {{ YPosition }}
              SubtitleRows: "{{ SubtitleRows }}"
            EbuTtDDestinationSettings:
              CopyrightHolder: "{{ CopyrightHolder }}"
              FillLineGap: "{{ FillLineGap }}"
              FontFamily: "{{ FontFamily }}"
              StyleControl: "{{ StyleControl }}"
              DefaultFontSize: {{ DefaultFontSize }}
              DefaultLineHeight: {{ DefaultLineHeight }}
            EmbeddedDestinationSettings: "{{ EmbeddedDestinationSettings }}"
            EmbeddedPlusScte20DestinationSettings: "{{ EmbeddedPlusScte20DestinationSettings }}"
            RtmpCaptionInfoDestinationSettings: "{{ RtmpCaptionInfoDestinationSettings }}"
            Scte20PlusEmbeddedDestinationSettings: "{{ Scte20PlusEmbeddedDestinationSettings }}"
            Scte27DestinationSettings: "{{ Scte27DestinationSettings }}"
            SmpteTtDestinationSettings: "{{ SmpteTtDestinationSettings }}"
            TeletextDestinationSettings: "{{ TeletextDestinationSettings }}"
            TtmlDestinationSettings:
              StyleControl: "{{ StyleControl }}"
            WebvttDestinationSettings:
              StyleControl: "{{ StyleControl }}"
          LanguageCode: "{{ LanguageCode }}"
          LanguageDescription: "{{ LanguageDescription }}"
          Name: "{{ Name }}"
          CaptionDashRoles: "{{ CaptionDashRoles }}"
          DvbDashAccessibility: "{{ DvbDashAccessibility }}"
      FeatureActivations:
        InputPrepareScheduleActions: "{{ InputPrepareScheduleActions }}"
        OutputStaticImageOverlayScheduleActions: "{{ OutputStaticImageOverlayScheduleActions }}"
      GlobalConfiguration:
        InitialAudioGain: {{ InitialAudioGain }}
        InputEndAction: "{{ InputEndAction }}"
        InputLossBehavior:
          BlackFrameMsec: {{ BlackFrameMsec }}
          InputLossImageColor: "{{ InputLossImageColor }}"
          InputLossImageSlate:
            PasswordParam: "{{ PasswordParam }}"
            Uri: "{{ Uri }}"
            Username: "{{ Username }}"
          InputLossImageType: "{{ InputLossImageType }}"
          RepeatFrameMsec: {{ RepeatFrameMsec }}
        OutputLockingMode: "{{ OutputLockingMode }}"
        OutputTimingSource: "{{ OutputTimingSource }}"
        SupportLowFramerateInputs: "{{ SupportLowFramerateInputs }}"
        OutputLockingSettings:
          EpochLockingSettings:
            CustomEpoch: "{{ CustomEpoch }}"
            JamSyncTime: "{{ JamSyncTime }}"
          PipelineLockingSettings:
            PipelineLockingMethod: "{{ PipelineLockingMethod }}"
            CustomEpoch: "{{ CustomEpoch }}"
          DisabledLockingSettings:
            CustomEpoch: "{{ CustomEpoch }}"
      MotionGraphicsConfiguration:
        MotionGraphicsInsertion: "{{ MotionGraphicsInsertion }}"
        MotionGraphicsSettings:
          HtmlMotionGraphicsSettings: "{{ HtmlMotionGraphicsSettings }}"
      NielsenConfiguration:
        DistributorId: "{{ DistributorId }}"
        NielsenPcmToId3Tagging: "{{ NielsenPcmToId3Tagging }}"
      OutputGroups:
        - Name: "{{ Name }}"
          OutputGroupSettings:
            ArchiveGroupSettings:
              ArchiveCdnSettings:
                ArchiveS3Settings: "{{ ArchiveS3Settings }}"
              Destination:
                DestinationRefId: "{{ DestinationRefId }}"
              RolloverInterval: {{ RolloverInterval }}
            FrameCaptureGroupSettings:
              Destination:
                DestinationRefId: "{{ DestinationRefId }}"
              FrameCaptureCdnSettings:
                FrameCaptureS3Settings: "{{ FrameCaptureS3Settings }}"
            HlsGroupSettings:
              AdMarkers:
                - "{{ AdMarkers }}"
              BaseUrlContent: "{{ BaseUrlContent }}"
              BaseUrlContent1: "{{ BaseUrlContent1 }}"
              BaseUrlManifest: "{{ BaseUrlManifest }}"
              BaseUrlManifest1: "{{ BaseUrlManifest1 }}"
              CaptionLanguageMappings:
                - CaptionChannel: {{ CaptionChannel }}
                  LanguageCode: "{{ LanguageCode }}"
                  LanguageDescription: "{{ LanguageDescription }}"
              CaptionLanguageSetting: "{{ CaptionLanguageSetting }}"
              ClientCache: "{{ ClientCache }}"
              CodecSpecification: "{{ CodecSpecification }}"
              ConstantIv: "{{ ConstantIv }}"
              Destination:
                DestinationRefId: "{{ DestinationRefId }}"
              DirectoryStructure: "{{ DirectoryStructure }}"
              DiscontinuityTags: "{{ DiscontinuityTags }}"
              EncryptionType: "{{ EncryptionType }}"
              HlsCdnSettings:
                HlsAkamaiSettings: "{{ HlsAkamaiSettings }}"
                HlsBasicPutSettings: "{{ HlsBasicPutSettings }}"
                HlsMediaStoreSettings: "{{ HlsMediaStoreSettings }}"
                HlsS3Settings: "{{ HlsS3Settings }}"
                HlsWebdavSettings: "{{ HlsWebdavSettings }}"
              HlsId3SegmentTagging: "{{ HlsId3SegmentTagging }}"
              IFrameOnlyPlaylists: "{{ IFrameOnlyPlaylists }}"
              IncompleteSegmentBehavior: "{{ IncompleteSegmentBehavior }}"
              IndexNSegments: {{ IndexNSegments }}
              InputLossAction: "{{ InputLossAction }}"
              IvInManifest: "{{ IvInManifest }}"
              IvSource: "{{ IvSource }}"
              KeepSegments: {{ KeepSegments }}
              KeyFormat: "{{ KeyFormat }}"
              KeyFormatVersions: "{{ KeyFormatVersions }}"
              KeyProviderSettings:
                StaticKeySettings: "{{ StaticKeySettings }}"
              ManifestCompression: "{{ ManifestCompression }}"
              ManifestDurationFormat: "{{ ManifestDurationFormat }}"
              MinSegmentLength: {{ MinSegmentLength }}
              Mode: "{{ Mode }}"
              OutputSelection: "{{ OutputSelection }}"
              ProgramDateTime: "{{ ProgramDateTime }}"
              ProgramDateTimeClock: "{{ ProgramDateTimeClock }}"
              ProgramDateTimePeriod: {{ ProgramDateTimePeriod }}
              RedundantManifest: "{{ RedundantManifest }}"
              SegmentLength: {{ SegmentLength }}
              SegmentationMode: "{{ SegmentationMode }}"
              SegmentsPerSubdirectory: {{ SegmentsPerSubdirectory }}
              StreamInfResolution: "{{ StreamInfResolution }}"
              TimedMetadataId3Frame: "{{ TimedMetadataId3Frame }}"
              TimedMetadataId3Period: {{ TimedMetadataId3Period }}
              TimestampDeltaMilliseconds: {{ TimestampDeltaMilliseconds }}
              TsFileMode: "{{ TsFileMode }}"
            MediaPackageGroupSettings:
              Destination:
                DestinationRefId: "{{ DestinationRefId }}"
              MediapackageV2GroupSettings:
                CaptionLanguageMappings: "{{ CaptionLanguageMappings }}"
                Id3Behavior: "{{ Id3Behavior }}"
                KlvBehavior: "{{ KlvBehavior }}"
                NielsenId3Behavior: "{{ NielsenId3Behavior }}"
                Scte35Type: "{{ Scte35Type }}"
                SegmentLength: {{ SegmentLength }}
                SegmentLengthUnits: "{{ SegmentLengthUnits }}"
                TimedMetadataId3Frame: "{{ TimedMetadataId3Frame }}"
                TimedMetadataId3Period: {{ TimedMetadataId3Period }}
                TimedMetadataPassthrough: "{{ TimedMetadataPassthrough }}"
                AdditionalDestinations: "{{ AdditionalDestinations }}"
            MsSmoothGroupSettings:
              AcquisitionPointId: "{{ AcquisitionPointId }}"
              AudioOnlyTimecodeControl: "{{ AudioOnlyTimecodeControl }}"
              CertificateMode: "{{ CertificateMode }}"
              ConnectionRetryInterval: {{ ConnectionRetryInterval }}
              Destination:
                DestinationRefId: "{{ DestinationRefId }}"
              EventId: "{{ EventId }}"
              EventIdMode: "{{ EventIdMode }}"
              EventStopBehavior: "{{ EventStopBehavior }}"
              FilecacheDuration: {{ FilecacheDuration }}
              FragmentLength: {{ FragmentLength }}
              InputLossAction: "{{ InputLossAction }}"
              NumRetries: {{ NumRetries }}
              RestartDelay: {{ RestartDelay }}
              SegmentationMode: "{{ SegmentationMode }}"
              SendDelayMs: {{ SendDelayMs }}
              SparseTrackType: "{{ SparseTrackType }}"
              StreamManifestBehavior: "{{ StreamManifestBehavior }}"
              TimestampOffset: "{{ TimestampOffset }}"
              TimestampOffsetMode: "{{ TimestampOffsetMode }}"
            MultiplexGroupSettings: "{{ MultiplexGroupSettings }}"
            RtmpGroupSettings:
              AdMarkers:
                - "{{ AdMarkers }}"
              AuthenticationScheme: "{{ AuthenticationScheme }}"
              CacheFullBehavior: "{{ CacheFullBehavior }}"
              CacheLength: {{ CacheLength }}
              CaptionData: "{{ CaptionData }}"
              InputLossAction: "{{ InputLossAction }}"
              RestartDelay: {{ RestartDelay }}
              IncludeFillerNalUnits: "{{ IncludeFillerNalUnits }}"
            UdpGroupSettings:
              InputLossAction: "{{ InputLossAction }}"
              TimedMetadataId3Frame: "{{ TimedMetadataId3Frame }}"
              TimedMetadataId3Period: {{ TimedMetadataId3Period }}
            CmafIngestGroupSettings:
              Destination:
                DestinationRefId: "{{ DestinationRefId }}"
              NielsenId3Behavior: "{{ NielsenId3Behavior }}"
              Scte35Type: "{{ Scte35Type }}"
              SegmentLength: {{ SegmentLength }}
              SegmentLengthUnits: "{{ SegmentLengthUnits }}"
              SendDelayMs: {{ SendDelayMs }}
              KlvBehavior: "{{ KlvBehavior }}"
              KlvNameModifier: "{{ KlvNameModifier }}"
              NielsenId3NameModifier: "{{ NielsenId3NameModifier }}"
              Scte35NameModifier: "{{ Scte35NameModifier }}"
              Id3Behavior: "{{ Id3Behavior }}"
              Id3NameModifier: "{{ Id3NameModifier }}"
              CaptionLanguageMappings:
                - CaptionChannel: {{ CaptionChannel }}
                  LanguageCode: "{{ LanguageCode }}"
              TimedMetadataId3Frame: "{{ TimedMetadataId3Frame }}"
              TimedMetadataId3Period: {{ TimedMetadataId3Period }}
              TimedMetadataPassthrough: "{{ TimedMetadataPassthrough }}"
              AdditionalDestinations:
                - Destination:
                    DestinationRefId: "{{ DestinationRefId }}"
            SrtGroupSettings:
              InputLossAction: "{{ InputLossAction }}"
            MediaConnectRouterGroupSettings:
              AvailabilityZones:
                - "{{ AvailabilityZones }}"
          Outputs: "{{ Outputs }}"
      TimecodeConfig:
        Source: "{{ Source }}"
        SyncThreshold: {{ SyncThreshold }}
      VideoDescriptions:
        - CodecSettings:
            FrameCaptureSettings:
              CaptureInterval: {{ CaptureInterval }}
              CaptureIntervalUnits: "{{ CaptureIntervalUnits }}"
              TimecodeBurninSettings:
                FontSize: "{{ FontSize }}"
                Position: "{{ Position }}"
                Prefix: "{{ Prefix }}"
            H264Settings:
              AdaptiveQuantization: "{{ AdaptiveQuantization }}"
              AfdSignaling: "{{ AfdSignaling }}"
              Bitrate: {{ Bitrate }}
              BufFillPct: {{ BufFillPct }}
              BufSize: {{ BufSize }}
              ColorMetadata: "{{ ColorMetadata }}"
              ColorSpaceSettings:
                ColorSpacePassthroughSettings: "{{ ColorSpacePassthroughSettings }}"
                Rec601Settings: "{{ Rec601Settings }}"
                Rec709Settings: "{{ Rec709Settings }}"
              EntropyEncoding: "{{ EntropyEncoding }}"
              FilterSettings:
                TemporalFilterSettings: "{{ TemporalFilterSettings }}"
                BandwidthReductionFilterSettings: "{{ BandwidthReductionFilterSettings }}"
              FixedAfd: "{{ FixedAfd }}"
              FlickerAq: "{{ FlickerAq }}"
              ForceFieldPictures: "{{ ForceFieldPictures }}"
              FramerateControl: "{{ FramerateControl }}"
              FramerateDenominator: {{ FramerateDenominator }}
              FramerateNumerator: {{ FramerateNumerator }}
              GopBReference: "{{ GopBReference }}"
              GopClosedCadence: {{ GopClosedCadence }}
              GopNumBFrames: {{ GopNumBFrames }}
              GopSize: {{ GopSize }}
              GopSizeUnits: "{{ GopSizeUnits }}"
              Level: "{{ Level }}"
              LookAheadRateControl: "{{ LookAheadRateControl }}"
              MaxBitrate: {{ MaxBitrate }}
              MinIInterval: {{ MinIInterval }}
              NumRefFrames: {{ NumRefFrames }}
              ParControl: "{{ ParControl }}"
              ParDenominator: {{ ParDenominator }}
              ParNumerator: {{ ParNumerator }}
              Profile: "{{ Profile }}"
              QualityLevel: "{{ QualityLevel }}"
              QvbrQualityLevel: {{ QvbrQualityLevel }}
              RateControlMode: "{{ RateControlMode }}"
              ScanType: "{{ ScanType }}"
              SceneChangeDetect: "{{ SceneChangeDetect }}"
              Slices: {{ Slices }}
              Softness: {{ Softness }}
              SpatialAq: "{{ SpatialAq }}"
              SubgopLength: "{{ SubgopLength }}"
              Syntax: "{{ Syntax }}"
              TemporalAq: "{{ TemporalAq }}"
              TimecodeInsertion: "{{ TimecodeInsertion }}"
              TimecodeBurninSettings:
                FontSize: "{{ FontSize }}"
                Position: "{{ Position }}"
                Prefix: "{{ Prefix }}"
              MinQp: {{ MinQp }}
              MinBitrate: {{ MinBitrate }}
            H265Settings:
              AdaptiveQuantization: "{{ AdaptiveQuantization }}"
              AfdSignaling: "{{ AfdSignaling }}"
              AlternativeTransferFunction: "{{ AlternativeTransferFunction }}"
              Bitrate: {{ Bitrate }}
              BufSize: {{ BufSize }}
              ColorMetadata: "{{ ColorMetadata }}"
              ColorSpaceSettings:
                ColorSpacePassthroughSettings: "{{ ColorSpacePassthroughSettings }}"
                DolbyVision81Settings: "{{ DolbyVision81Settings }}"
                Hdr10Settings: "{{ Hdr10Settings }}"
                Rec601Settings: "{{ Rec601Settings }}"
                Rec709Settings: "{{ Rec709Settings }}"
                Hlg2020Settings: "{{ Hlg2020Settings }}"
              FilterSettings:
                TemporalFilterSettings: "{{ TemporalFilterSettings }}"
                BandwidthReductionFilterSettings: "{{ BandwidthReductionFilterSettings }}"
              FixedAfd: "{{ FixedAfd }}"
              FlickerAq: "{{ FlickerAq }}"
              FramerateDenominator: {{ FramerateDenominator }}
              FramerateNumerator: {{ FramerateNumerator }}
              GopClosedCadence: {{ GopClosedCadence }}
              GopSize: {{ GopSize }}
              GopSizeUnits: "{{ GopSizeUnits }}"
              Level: "{{ Level }}"
              LookAheadRateControl: "{{ LookAheadRateControl }}"
              MaxBitrate: {{ MaxBitrate }}
              MinIInterval: {{ MinIInterval }}
              ParDenominator: {{ ParDenominator }}
              ParNumerator: {{ ParNumerator }}
              Profile: "{{ Profile }}"
              QvbrQualityLevel: {{ QvbrQualityLevel }}
              RateControlMode: "{{ RateControlMode }}"
              ScanType: "{{ ScanType }}"
              SceneChangeDetect: "{{ SceneChangeDetect }}"
              Slices: {{ Slices }}
              Tier: "{{ Tier }}"
              TimecodeInsertion: "{{ TimecodeInsertion }}"
              TimecodeBurninSettings:
                FontSize: "{{ FontSize }}"
                Position: "{{ Position }}"
                Prefix: "{{ Prefix }}"
              MvOverPictureBoundaries: "{{ MvOverPictureBoundaries }}"
              MvTemporalPredictor: "{{ MvTemporalPredictor }}"
              TileHeight: {{ TileHeight }}
              TilePadding: "{{ TilePadding }}"
              TileWidth: {{ TileWidth }}
              TreeblockSize: "{{ TreeblockSize }}"
              MinQp: {{ MinQp }}
              Deblocking: "{{ Deblocking }}"
              GopBReference: "{{ GopBReference }}"
              GopNumBFrames: {{ GopNumBFrames }}
              MinBitrate: {{ MinBitrate }}
              SubgopLength: "{{ SubgopLength }}"
            Mpeg2Settings:
              AdaptiveQuantization: "{{ AdaptiveQuantization }}"
              AfdSignaling: "{{ AfdSignaling }}"
              ColorMetadata: "{{ ColorMetadata }}"
              ColorSpace: "{{ ColorSpace }}"
              DisplayAspectRatio: "{{ DisplayAspectRatio }}"
              FilterSettings:
                TemporalFilterSettings: "{{ TemporalFilterSettings }}"
              FixedAfd: "{{ FixedAfd }}"
              FramerateDenominator: {{ FramerateDenominator }}
              FramerateNumerator: {{ FramerateNumerator }}
              GopClosedCadence: {{ GopClosedCadence }}
              GopNumBFrames: {{ GopNumBFrames }}
              GopSize: {{ GopSize }}
              GopSizeUnits: "{{ GopSizeUnits }}"
              ScanType: "{{ ScanType }}"
              SubgopLength: "{{ SubgopLength }}"
              TimecodeInsertion: "{{ TimecodeInsertion }}"
              TimecodeBurninSettings:
                FontSize: "{{ FontSize }}"
                Position: "{{ Position }}"
                Prefix: "{{ Prefix }}"
            Av1Settings:
              AfdSignaling: "{{ AfdSignaling }}"
              BufSize: {{ BufSize }}
              ColorSpaceSettings:
                ColorSpacePassthroughSettings: "{{ ColorSpacePassthroughSettings }}"
                Hdr10Settings: "{{ Hdr10Settings }}"
                Rec601Settings: "{{ Rec601Settings }}"
                Rec709Settings: "{{ Rec709Settings }}"
                Hlg2020Settings: "{{ Hlg2020Settings }}"
              FixedAfd: "{{ FixedAfd }}"
              FramerateDenominator: {{ FramerateDenominator }}
              FramerateNumerator: {{ FramerateNumerator }}
              GopSize: {{ GopSize }}
              GopSizeUnits: "{{ GopSizeUnits }}"
              Level: "{{ Level }}"
              LookAheadRateControl: "{{ LookAheadRateControl }}"
              MaxBitrate: {{ MaxBitrate }}
              MinIInterval: {{ MinIInterval }}
              ParDenominator: {{ ParDenominator }}
              ParNumerator: {{ ParNumerator }}
              QvbrQualityLevel: {{ QvbrQualityLevel }}
              SceneChangeDetect: "{{ SceneChangeDetect }}"
              TimecodeBurninSettings:
                FontSize: "{{ FontSize }}"
                Position: "{{ Position }}"
                Prefix: "{{ Prefix }}"
              Bitrate: {{ Bitrate }}
              RateControlMode: "{{ RateControlMode }}"
              MinBitrate: {{ MinBitrate }}
              SpatialAq: "{{ SpatialAq }}"
              TemporalAq: "{{ TemporalAq }}"
              TimecodeInsertion: "{{ TimecodeInsertion }}"
              BitDepth: "{{ BitDepth }}"
          Height: {{ Height }}
          Name: "{{ Name }}"
          RespondToAfd: "{{ RespondToAfd }}"
          ScalingBehavior: "{{ ScalingBehavior }}"
          Sharpness: {{ Sharpness }}
          Width: {{ Width }}
      ThumbnailConfiguration:
        State: "{{ State }}"
      ColorCorrectionSettings:
        GlobalColorCorrections:
          - InputColorSpace: "{{ InputColorSpace }}"
            OutputColorSpace: "{{ OutputColorSpace }}"
            Uri: "{{ Uri }}"
  - name: InputAttachments
    description: |
      Placeholder documentation for __listOfInputAttachment
    value:
      - AutomaticInputFailoverSettings:
          ErrorClearTimeMsec: {{ ErrorClearTimeMsec }}
          FailoverConditions:
            - FailoverConditionSettings:
                AudioSilenceSettings:
                  AudioSelectorName: "{{ AudioSelectorName }}"
                  AudioSilenceThresholdMsec: {{ AudioSilenceThresholdMsec }}
                InputLossSettings:
                  InputLossThresholdMsec: {{ InputLossThresholdMsec }}
                VideoBlackSettings:
                  BlackDetectThreshold: {{ BlackDetectThreshold }}
                  VideoBlackThresholdMsec: {{ VideoBlackThresholdMsec }}
          InputPreference: "{{ InputPreference }}"
          SecondaryInputId: "{{ SecondaryInputId }}"
        InputAttachmentName: "{{ InputAttachmentName }}"
        InputId: "{{ InputId }}"
        InputSettings:
          AudioSelectors:
            - Name: "{{ Name }}"
              SelectorSettings:
                AudioHlsRenditionSelection:
                  GroupId: "{{ GroupId }}"
                  Name: "{{ Name }}"
                AudioLanguageSelection:
                  LanguageCode: "{{ LanguageCode }}"
                  LanguageSelectionPolicy: "{{ LanguageSelectionPolicy }}"
                AudioPidSelection:
                  Pid: {{ Pid }}
                AudioTrackSelection:
                  Tracks: "{{ Tracks }}"
                  DolbyEDecode: "{{ DolbyEDecode }}"
          CaptionSelectors:
            - LanguageCode: "{{ LanguageCode }}"
              Name: "{{ Name }}"
              SelectorSettings:
                AncillarySourceSettings:
                  SourceAncillaryChannelNumber: {{ SourceAncillaryChannelNumber }}
                AribSourceSettings: "{{ AribSourceSettings }}"
                DvbSubSourceSettings:
                  OcrLanguage: "{{ OcrLanguage }}"
                  Pid: {{ Pid }}
                EmbeddedSourceSettings:
                  Convert608To708: "{{ Convert608To708 }}"
                  Scte20Detection: "{{ Scte20Detection }}"
                  Source608ChannelNumber: {{ Source608ChannelNumber }}
                  Source608TrackNumber: {{ Source608TrackNumber }}
                Scte20SourceSettings:
                  Convert608To708: "{{ Convert608To708 }}"
                  Source608ChannelNumber: {{ Source608ChannelNumber }}
                Scte27SourceSettings:
                  OcrLanguage: "{{ OcrLanguage }}"
                  Pid: {{ Pid }}
                TeletextSourceSettings:
                  OutputRectangle: "{{ OutputRectangle }}"
                  PageNumber: "{{ PageNumber }}"
          DeblockFilter: "{{ DeblockFilter }}"
          DenoiseFilter: "{{ DenoiseFilter }}"
          FilterStrength: {{ FilterStrength }}
          InputFilter: "{{ InputFilter }}"
          NetworkInputSettings:
            HlsInputSettings:
              Bandwidth: {{ Bandwidth }}
              BufferSegments: {{ BufferSegments }}
              Retries: {{ Retries }}
              RetryInterval: {{ RetryInterval }}
              Scte35Source: "{{ Scte35Source }}"
            ServerValidation: "{{ ServerValidation }}"
            MulticastInputSettings:
              SourceIpAddress: "{{ SourceIpAddress }}"
          Scte35Pid: {{ Scte35Pid }}
          Smpte2038DataPreference: "{{ Smpte2038DataPreference }}"
          SourceEndBehavior: "{{ SourceEndBehavior }}"
          VideoSelector:
            ColorSpace: "{{ ColorSpace }}"
            ColorSpaceSettings:
              Hdr10Settings:
                MaxCll: {{ MaxCll }}
                MaxFall: {{ MaxFall }}
            ColorSpaceUsage: "{{ ColorSpaceUsage }}"
            SelectorSettings:
              VideoSelectorPid:
                Pid: {{ Pid }}
              VideoSelectorProgramId:
                ProgramId: {{ ProgramId }}
        LogicalInterfaceNames: "{{ LogicalInterfaceNames }}"
  - name: InputSpecification
    description: |
      Placeholder documentation for InputSpecification
    value:
      Codec: "{{ Codec }}"
      MaximumBitrate: "{{ MaximumBitrate }}"
      Resolution: "{{ Resolution }}"
  - name: LogLevel
    value: "{{ LogLevel }}"
    description: |
      The log level the user wants for their channel.
    valid_values: ['ERROR', 'WARNING', 'INFO', 'DEBUG', 'DISABLED']
  - name: Maintenance
    description: |
      Placeholder documentation for MaintenanceCreateSettings
    value:
      MaintenanceDay: "{{ MaintenanceDay }}"
      MaintenanceStartTime: "{{ MaintenanceStartTime }}"
  - name: Name
    value: "{{ Name }}"
    description: |
      Placeholder documentation for __string
  - name: RequestId
    value: "{{ RequestId }}"
    description: |
      Placeholder documentation for __string
  - name: Reserved
    value: "{{ Reserved }}"
    description: |
      Placeholder documentation for __string
  - name: RoleArn
    value: "{{ RoleArn }}"
    description: |
      Placeholder documentation for __string
  - name: Tags
    value: "{{ Tags }}"
    description: |
      Placeholder documentation for Tags
  - name: Vpc
    description: |
      The properties for a private VPC Output When this property is specified, the output egress addresses will be created in a user specified VPC
    value:
      PublicAddressAllocationIds:
        - "{{ PublicAddressAllocationIds }}"
      SecurityGroupIds:
        - "{{ SecurityGroupIds }}"
      SubnetIds:
        - "{{ SubnetIds }}"
  - name: AnywhereSettings
    description: |
      Elemental anywhere settings
    value:
      ChannelPlacementGroupId: "{{ ChannelPlacementGroupId }}"
      ClusterId: "{{ ClusterId }}"
  - name: ChannelEngineVersion
    description: |
      Placeholder documentation for ChannelEngineVersionRequest
    value:
      Version: "{{ Version }}"
  - name: DryRun
    value: {{ DryRun }}
    description: |
      Placeholder documentation for __boolean
  - name: LinkedChannelSettings
    description: |
      Configuration for linked channel relationships
    value:
      FollowerChannelSettings:
        LinkedChannelType: "{{ LinkedChannelType }}"
        PrimaryChannelArn: "{{ PrimaryChannelArn }}"
      PrimaryChannelSettings:
        LinkedChannelType: "{{ LinkedChannelType }}"
  - name: ChannelSecurityGroups
    value:
      - "{{ ChannelSecurityGroups }}"
    description: |
      Placeholder documentation for __listOf__string
  - name: InferenceSettings
    description: |
      Configures Elemental Inference features in a channel.
    value:
      FeedArn: "{{ FeedArn }}"
`})})]}),"\n",(0,a.jsxs)(n.h2,{id:"update-examples",children:[(0,a.jsx)(n.code,{children:"UPDATE"})," examples"]}),"\n",(0,a.jsxs)(l.A,{defaultValue:"update_channel_class",values:[{label:"update_channel_class",value:"update_channel_class"},{label:"update_channel",value:"update_channel"}],children:[(0,a.jsxs)(d.A,{value:"update_channel_class",children:[(0,a.jsx)(n.p,{children:"Changes the class of the channel."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"UPDATE aws.medialive.channels\nSET \nChannelClass = '{{ ChannelClass }}',\nDestinations = '{{ Destinations }}'\nWHERE \nchannel_id = '{{ channel_id }}' --required\nAND region = '{{ region }}' --required\nAND ChannelClass = '{{ ChannelClass }}' --required\nRETURNING\nChannel;\n"})})]}),(0,a.jsxs)(d.A,{value:"update_channel",children:[(0,a.jsx)(n.p,{children:"Updates a channel."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"UPDATE aws.medialive.channels\nSET \nCdiInputSpecification = '{{ CdiInputSpecification }}',\nDestinations = '{{ Destinations }}',\nEncoderSettings = '{{ EncoderSettings }}',\nInputAttachments = '{{ InputAttachments }}',\nInputSpecification = '{{ InputSpecification }}',\nLogLevel = '{{ LogLevel }}',\nMaintenance = '{{ Maintenance }}',\nName = '{{ Name }}',\nRoleArn = '{{ RoleArn }}',\nChannelEngineVersion = '{{ ChannelEngineVersion }}',\nDryRun = {{ DryRun }},\nAnywhereSettings = '{{ AnywhereSettings }}',\nLinkedChannelSettings = '{{ LinkedChannelSettings }}',\nChannelSecurityGroups = '{{ ChannelSecurityGroups }}',\nInferenceSettings = '{{ InferenceSettings }}',\nSpecialRouterSettings = '{{ SpecialRouterSettings }}'\nWHERE \nchannel_id = '{{ channel_id }}' --required\nAND region = '{{ region }}' --required\nRETURNING\nChannel;\n"})})]})]}),"\n",(0,a.jsxs)(n.h2,{id:"delete-examples",children:[(0,a.jsx)(n.code,{children:"DELETE"})," examples"]}),"\n",(0,a.jsx)(l.A,{defaultValue:"delete_channel",values:[{label:"delete_channel",value:"delete_channel"}],children:(0,a.jsxs)(d.A,{value:"delete_channel",children:[(0,a.jsx)(n.p,{children:"Starts deletion of channel. The associated outputs are also deleted."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"DELETE FROM aws.medialive.channels\nWHERE channel_id = '{{ channel_id }}' --required\nAND region = '{{ region }}' --required\n;\n"})})]})}),"\n",(0,a.jsx)(n.h2,{id:"lifecycle-methods",children:"Lifecycle Methods"}),"\n",(0,a.jsxs)(l.A,{defaultValue:"batch_update_schedule",values:[{label:"batch_update_schedule",value:"batch_update_schedule"},{label:"restart_channel_pipelines",value:"restart_channel_pipelines"},{label:"start_channel",value:"start_channel"},{label:"stop_channel",value:"stop_channel"}],children:[(0,a.jsxs)(d.A,{value:"batch_update_schedule",children:[(0,a.jsx)(n.p,{children:"Update a channel schedule"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'EXEC aws.medialive.channels.batch_update_schedule \n@channel_id=\'{{ channel_id }}\' --required, \n@region=\'{{ region }}\' --required \n@@json=\n\'{\n"Creates": "{{ Creates }}", \n"Deletes": "{{ Deletes }}"\n}\'\n;\n'})})]}),(0,a.jsxs)(d.A,{value:"restart_channel_pipelines",children:[(0,a.jsx)(n.p,{children:"Restart pipelines in one channel that is currently running."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"EXEC aws.medialive.channels.restart_channel_pipelines \n@channel_id='{{ channel_id }}' --required, \n@region='{{ region }}' --required \n@@json=\n'{\n\"PipelineIds\": \"{{ PipelineIds }}\"\n}'\n;\n"})})]}),(0,a.jsxs)(d.A,{value:"start_channel",children:[(0,a.jsx)(n.p,{children:"Starts an existing channel"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"EXEC aws.medialive.channels.start_channel \n@channel_id='{{ channel_id }}' --required, \n@region='{{ region }}' --required\n;\n"})})]}),(0,a.jsxs)(d.A,{value:"stop_channel",children:[(0,a.jsx)(n.p,{children:"Stops a running channel"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"EXEC aws.medialive.channels.stop_channel \n@channel_id='{{ channel_id }}' --required, \n@region='{{ region }}' --required\n;\n"})})]})]})]})}function x(e={}){let{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}}}]);