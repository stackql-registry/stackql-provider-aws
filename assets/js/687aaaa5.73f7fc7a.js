"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["748870"],{378748(e,r,t){t.r(r),t.d(r,{metadata:()=>n,default:()=>m,frontMatter:()=>c,contentTitle:()=>h,toc:()=>f,assets:()=>u});var n=JSON.parse('{"id":"services/mediaconnect/flows/index","title":"flows","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/mediaconnect/flows/index.md","sourceDirName":"services/mediaconnect/flows","slug":"/services/mediaconnect/flows/","permalink":"/services/mediaconnect/flows/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"flows","hide_title":false,"hide_table_of_contents":false,"keywords":["flows","mediaconnect","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"flow_source_thumbnails","permalink":"/services/mediaconnect/flow_source_thumbnails/"},"next":{"title":"gateway_instances","permalink":"/services/mediaconnect/gateway_instances/"}}'),a=t(474848),o=t(28453),s=t(97362),i=t(897272),d=t(413554),l=t(541647);let c={title:"flows",hide_title:!1,hide_table_of_contents:!1,keywords:["flows","mediaconnect","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,u={},f=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2},{value:"Lifecycle Methods",id:"lifecycle-methods",level:2}];function x(e){let r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:["Creates, updates, deletes, gets or lists a ",(0,a.jsx)("code",{children:"flows"})," resource."]}),"\n",(0,a.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)("table",{children:(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("b",{children:"Name"})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"flows"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("b",{children:"Type"})}),(0,a.jsx)("td",{children:"Resource"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("b",{children:"Id"})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"aws.mediaconnect.flows"})})]})]})}),"\n",(0,a.jsx)(r.h2,{id:"fields",children:"Fields"}),"\n",(0,a.jsxs)(r.p,{children:["The following fields are returned by ",(0,a.jsx)(r.code,{children:"SELECT"})," queries:"]}),"\n",(0,a.jsxs)(d.A,{defaultValue:"describe_flow",values:[{label:"describe_flow",value:"describe_flow"},{label:"list_flows",value:"list_flows"}],children:[(0,a.jsx)(l.A,{value:"describe_flow",children:(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Datatype"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"Flow"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"The flow that you requested a description of."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"Messages"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"Any errors that apply currently to the flow. If there are no errors, MediaConnect will not include this field in the response."})]})]})]})}),(0,a.jsx)(l.A,{value:"list_flows",children:(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Datatype"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"AvailabilityZone"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The Availability Zone that the flow was created in."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"Description"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"A description of the flow."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"FlowArn"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The ARN of the flow."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"Maintenance"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"object"})}),(0,a.jsx)("td",{children:"The maintenance settings for the flow."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"Name"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The name of the flow."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"SourceType"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The type of source. This value is either owned (originated somewhere other than an MediaConnect flow owned by another Amazon Web Services account) or entitled (originated at a MediaConnect flow owned by another Amazon Web Services account). (OWNED, ENTITLED)"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"Status"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The current status of the flow. (STANDBY, ACTIVE, UPDATING, DELETING, STARTING, STOPPING, ERROR)"})]})]})]})})]}),"\n",(0,a.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,a.jsx)(r.p,{children:"The following methods are available for this resource:"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Accessible by"}),(0,a.jsx)("th",{children:"Required Params"}),(0,a.jsx)("th",{children:"Optional Params"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#describe_flow",children:(0,a.jsx)(s.A,{code:"describe_flow"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"select"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-flow_arn",children:(0,a.jsx)("code",{children:"flow_arn"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Displays the details of a flow. The response includes the flow Amazon Resource Name (ARN), name, and Availability Zone, as well as details about the source, outputs, and entitlements."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#list_flows",children:(0,a.jsx)(s.A,{code:"list_flows"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"select"})}),(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-maxResults",children:(0,a.jsx)("code",{children:"maxResults"})}),", ",(0,a.jsx)("a",{href:"#parameter-nextToken",children:(0,a.jsx)("code",{children:"nextToken"})})]}),(0,a.jsx)("td",{children:"Displays a list of flows that are associated with this account. This request returns a paginated result."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#create_flow",children:(0,a.jsx)(s.A,{code:"create_flow"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"insert"})}),(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Creates a new flow. The request must include one source. The request optionally can include outputs (up to 50) and entitlements (up to 50)."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#add_flow_media_streams",children:(0,a.jsx)(s.A,{code:"add_flow_media_streams"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"update"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-flow_arn",children:(0,a.jsx)("code",{children:"flow_arn"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})}),", ",(0,a.jsx)("a",{href:"#parameter-MediaStreams",children:(0,a.jsx)("code",{children:"MediaStreams"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Adds media streams to an existing flow. After you add a media stream to a flow, you can associate it with a source and/or an output that uses the ST 2110 JPEG XS or CDI protocol."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#add_flow_vpc_interfaces",children:(0,a.jsx)(s.A,{code:"add_flow_vpc_interfaces"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"update"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-flow_arn",children:(0,a.jsx)("code",{children:"flow_arn"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})}),", ",(0,a.jsx)("a",{href:"#parameter-VpcInterfaces",children:(0,a.jsx)("code",{children:"VpcInterfaces"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Adds VPC interfaces to a flow."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#remove_flow_media_stream",children:(0,a.jsx)(s.A,{code:"remove_flow_media_stream"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"update"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-flow_arn",children:(0,a.jsx)("code",{children:"flow_arn"})}),", ",(0,a.jsx)("a",{href:"#parameter-media_stream_name",children:(0,a.jsx)("code",{children:"media_stream_name"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Removes a media stream from a flow. This action is only available if the media stream is not associated with a source or output."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#remove_flow_output",children:(0,a.jsx)(s.A,{code:"remove_flow_output"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"update"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-flow_arn",children:(0,a.jsx)("code",{children:"flow_arn"})}),", ",(0,a.jsx)("a",{href:"#parameter-output_arn",children:(0,a.jsx)("code",{children:"output_arn"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Removes an output from an existing flow. This request can be made only on an output that does not have an entitlement associated with it. If the output has an entitlement, you must revoke the entitlement instead. When an entitlement is revoked from a flow, the service automatically removes the associated output."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#remove_flow_source",children:(0,a.jsx)(s.A,{code:"remove_flow_source"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"update"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-flow_arn",children:(0,a.jsx)("code",{children:"flow_arn"})}),", ",(0,a.jsx)("a",{href:"#parameter-source_arn",children:(0,a.jsx)("code",{children:"source_arn"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Removes a source from an existing flow. This request can be made only if there is more than one source on the flow."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#remove_flow_vpc_interface",children:(0,a.jsx)(s.A,{code:"remove_flow_vpc_interface"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"update"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-flow_arn",children:(0,a.jsx)("code",{children:"flow_arn"})}),", ",(0,a.jsx)("a",{href:"#parameter-vpc_interface_name",children:(0,a.jsx)("code",{children:"vpc_interface_name"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Removes a VPC Interface from an existing flow. This request can be made only on a VPC interface that does not have a Source or Output associated with it. If the VPC interface is referenced by a Source or Output, you must first delete or update the Source or Output to no longer reference the VPC interface."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#update_flow",children:(0,a.jsx)(s.A,{code:"update_flow"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"update"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-flow_arn",children:(0,a.jsx)("code",{children:"flow_arn"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Updates an existing flow. Because UpdateFlowSources and UpdateFlow are separate operations, you can't change both the source type AND the flow size in a single request. If you have a MEDIUM flow and you want to change the flow source to NDI\xae: First, use the UpdateFlow operation to upgrade the flow size to LARGE. After that, you can then use the UpdateFlowSource operation to configure the NDI source. If you're switching from an NDI source to a transport stream (TS) source and want to downgrade the flow size: First, use the UpdateFlowSource operation to change the flow source type. After that, you can then use the UpdateFlow operation to downgrade the flow size to MEDIUM."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#delete_flow",children:(0,a.jsx)(s.A,{code:"delete_flow"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"delete"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-flow_arn",children:(0,a.jsx)("code",{children:"flow_arn"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Deletes a flow. Before you can delete a flow, you must stop the flow."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#add_flow_outputs",children:(0,a.jsx)(s.A,{code:"add_flow_outputs"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"exec"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-flow_arn",children:(0,a.jsx)("code",{children:"flow_arn"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Adds outputs to an existing flow. You can create up to 50 outputs per flow."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#add_flow_sources",children:(0,a.jsx)(s.A,{code:"add_flow_sources"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"exec"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-flow_arn",children:(0,a.jsx)("code",{children:"flow_arn"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Adds sources to a flow."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#update_flow_media_stream",children:(0,a.jsx)(s.A,{code:"update_flow_media_stream"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"exec"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-flow_arn",children:(0,a.jsx)("code",{children:"flow_arn"})}),", ",(0,a.jsx)("a",{href:"#parameter-media_stream_name",children:(0,a.jsx)("code",{children:"media_stream_name"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Updates an existing media stream."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#update_flow_output",children:(0,a.jsx)(s.A,{code:"update_flow_output"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"exec"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-flow_arn",children:(0,a.jsx)("code",{children:"flow_arn"})}),", ",(0,a.jsx)("a",{href:"#parameter-output_arn",children:(0,a.jsx)("code",{children:"output_arn"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Updates an existing flow output."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#update_flow_source",children:(0,a.jsx)(s.A,{code:"update_flow_source"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"exec"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-flow_arn",children:(0,a.jsx)("code",{children:"flow_arn"})}),", ",(0,a.jsx)("a",{href:"#parameter-source_arn",children:(0,a.jsx)("code",{children:"source_arn"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Updates the source of a flow. Because UpdateFlowSources and UpdateFlow are separate operations, you can't change both the source type AND the flow size in a single request. If you have a MEDIUM flow and you want to change the flow source to NDI\xae: First, use the UpdateFlow operation to upgrade the flow size to LARGE. After that, you can then use the UpdateFlowSource operation to configure the NDI source. If you're switching from an NDI source to a transport stream (TS) source and want to downgrade the flow size: First, use the UpdateFlowSource operation to change the flow source type. After that, you can then use the UpdateFlow operation to downgrade the flow size to MEDIUM."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#start_flow",children:(0,a.jsx)(s.A,{code:"start_flow"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"exec"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-flow_arn",children:(0,a.jsx)("code",{children:"flow_arn"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Starts a flow."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("a",{href:"#stop_flow",children:(0,a.jsx)(s.A,{code:"stop_flow"})})}),(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"exec"})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("a",{href:"#parameter-flow_arn",children:(0,a.jsx)("code",{children:"flow_arn"})}),", ",(0,a.jsx)("a",{href:"#parameter-region",children:(0,a.jsx)("code",{children:"region"})})]}),(0,a.jsx)("td",{}),(0,a.jsx)("td",{children:"Stops a flow."})]})]})]}),"\n",(0,a.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(r.p,{children:["Parameters can be passed in the ",(0,a.jsx)(r.code,{children:"WHERE"})," clause of a query. Check the ",(0,a.jsx)(r.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Datatype"}),(0,a.jsx)("th",{children:"Description"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{id:"parameter-flow_arn",children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"flow_arn"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The Amazon Resource Name (ARN) of the flow that you want to stop."})]}),(0,a.jsxs)("tr",{id:"parameter-media_stream_name",children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"media_stream_name"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The media stream that you updated."})]}),(0,a.jsxs)("tr",{id:"parameter-output_arn",children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"output_arn"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The ARN of the output that you want to update."})]}),(0,a.jsxs)("tr",{id:"parameter-region",children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"region"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"AWS region (default: us-east-1)"})]}),(0,a.jsxs)("tr",{id:"parameter-source_arn",children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"source_arn"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The ARN of the source that you want to update."})]}),(0,a.jsxs)("tr",{id:"parameter-vpc_interface_name",children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"vpc_interface_name"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The name of the VPC interface that you want to remove."})]}),(0,a.jsxs)("tr",{id:"parameter-maxResults",children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"maxResults"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"integer"})}),(0,a.jsx)("td",{children:"The maximum number of results to return per API request. For example, you submit a ListFlows request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page."})]}),(0,a.jsxs)("tr",{id:"parameter-nextToken",children:[(0,a.jsx)("td",{children:(0,a.jsx)(s.A,{code:"nextToken"})}),(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:"string"})}),(0,a.jsx)("td",{children:"The token that identifies the batch of results that you want to see. For example, you submit a ListFlows request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListFlows request a second time and specify the NextToken value."})]})]})]}),"\n",(0,a.jsxs)(r.h2,{id:"select-examples",children:[(0,a.jsx)(r.code,{children:"SELECT"})," examples"]}),"\n",(0,a.jsxs)(d.A,{defaultValue:"describe_flow",values:[{label:"describe_flow",value:"describe_flow"},{label:"list_flows",value:"list_flows"}],children:[(0,a.jsxs)(l.A,{value:"describe_flow",children:[(0,a.jsx)(r.p,{children:"Displays the details of a flow. The response includes the flow Amazon Resource Name (ARN), name, and Availability Zone, as well as details about the source, outputs, and entitlements."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"SELECT\nFlow,\nMessages\nFROM aws.mediaconnect.flows\nWHERE flow_arn = '{{ flow_arn }}' -- required\nAND region = '{{ region }}' -- required\n;\n"})})]}),(0,a.jsxs)(l.A,{value:"list_flows",children:[(0,a.jsx)(r.p,{children:"Displays a list of flows that are associated with this account. This request returns a paginated result."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"SELECT\nAvailabilityZone,\nDescription,\nFlowArn,\nMaintenance,\nName,\nSourceType,\nStatus\nFROM aws.mediaconnect.flows\nWHERE region = '{{ region }}' -- required\nAND maxResults = '{{ maxResults }}'\nAND nextToken = '{{ nextToken }}'\n;\n"})})]})]}),"\n",(0,a.jsxs)(r.h2,{id:"insert-examples",children:[(0,a.jsx)(r.code,{children:"INSERT"})," examples"]}),"\n",(0,a.jsxs)(d.A,{defaultValue:"create_flow",values:[{label:"create_flow",value:"create_flow"},{label:"Manifest",value:"manifest"}],children:[(0,a.jsxs)(l.A,{value:"create_flow",children:[(0,a.jsx)(r.p,{children:"Creates a new flow. The request must include one source. The request optionally can include outputs (up to 50) and entitlements (up to 50)."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"INSERT INTO aws.mediaconnect.flows (\nAvailabilityZone,\nEntitlements,\nMediaStreams,\nName,\nOutputs,\nSource,\nSourceFailoverConfig,\nSources,\nVpcInterfaces,\nMaintenance,\nSourceMonitoringConfig,\nFlowSize,\nNdiConfig,\nEncodingConfig,\nFlowTags,\nregion\n)\nSELECT \n'{{ AvailabilityZone }}',\n'{{ Entitlements }}',\n'{{ MediaStreams }}',\n'{{ Name }}',\n'{{ Outputs }}',\n'{{ Source }}',\n'{{ SourceFailoverConfig }}',\n'{{ Sources }}',\n'{{ VpcInterfaces }}',\n'{{ Maintenance }}',\n'{{ SourceMonitoringConfig }}',\n'{{ FlowSize }}',\n'{{ NdiConfig }}',\n'{{ EncodingConfig }}',\n'{{ FlowTags }}',\n'{{ region }}'\nRETURNING\nFlow\n;\n"})})]}),(0,a.jsx)(l.A,{value:"manifest",children:(0,a.jsx)(i.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: flows
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the flows resource.
  - name: AvailabilityZone
    value: "{{ AvailabilityZone }}"
  - name: Entitlements
    value:
      - DataTransferSubscriberFeePercent: {{ DataTransferSubscriberFeePercent }}
        Description: "{{ Description }}"
        Encryption:
          Algorithm: "{{ Algorithm }}"
          ConstantInitializationVector: "{{ ConstantInitializationVector }}"
          DeviceId: "{{ DeviceId }}"
          KeyType: "{{ KeyType }}"
          Region: "{{ Region }}"
          ResourceId: "{{ ResourceId }}"
          RoleArn: "{{ RoleArn }}"
          SecretArn: "{{ SecretArn }}"
          Url: "{{ Url }}"
        EntitlementStatus: "{{ EntitlementStatus }}"
        Name: "{{ Name }}"
        Subscribers: "{{ Subscribers }}"
        EntitlementTags: "{{ EntitlementTags }}"
  - name: MediaStreams
    value:
      - Attributes:
          Fmtp:
            ChannelOrder: "{{ ChannelOrder }}"
            Colorimetry: "{{ Colorimetry }}"
            ExactFramerate: "{{ ExactFramerate }}"
            Par: "{{ Par }}"
            Range: "{{ Range }}"
            ScanMode: "{{ ScanMode }}"
            Tcs: "{{ Tcs }}"
          Lang: "{{ Lang }}"
        ClockRate: {{ ClockRate }}
        Description: "{{ Description }}"
        MediaStreamId: {{ MediaStreamId }}
        MediaStreamName: "{{ MediaStreamName }}"
        MediaStreamType: "{{ MediaStreamType }}"
        VideoFormat: "{{ VideoFormat }}"
        MediaStreamTags: "{{ MediaStreamTags }}"
  - name: Name
    value: "{{ Name }}"
  - name: Outputs
    value:
      - CidrAllowList: "{{ CidrAllowList }}"
        Description: "{{ Description }}"
        Destination: "{{ Destination }}"
        Encryption:
          Algorithm: "{{ Algorithm }}"
          ConstantInitializationVector: "{{ ConstantInitializationVector }}"
          DeviceId: "{{ DeviceId }}"
          KeyType: "{{ KeyType }}"
          Region: "{{ Region }}"
          ResourceId: "{{ ResourceId }}"
          RoleArn: "{{ RoleArn }}"
          SecretArn: "{{ SecretArn }}"
          Url: "{{ Url }}"
        MaxLatency: {{ MaxLatency }}
        MediaStreamOutputConfigurations: "{{ MediaStreamOutputConfigurations }}"
        MinLatency: {{ MinLatency }}
        Name: "{{ Name }}"
        Port: {{ Port }}
        Protocol: "{{ Protocol }}"
        RemoteId: "{{ RemoteId }}"
        SenderControlPort: {{ SenderControlPort }}
        SmoothingLatency: {{ SmoothingLatency }}
        StreamId: "{{ StreamId }}"
        VpcInterfaceAttachment:
          VpcInterfaceName: "{{ VpcInterfaceName }}"
        OutputStatus: "{{ OutputStatus }}"
        NdiSpeedHqQuality: {{ NdiSpeedHqQuality }}
        NdiProgramName: "{{ NdiProgramName }}"
        OutputTags: "{{ OutputTags }}"
        RouterIntegrationState: "{{ RouterIntegrationState }}"
        RouterIntegrationTransitEncryption:
          EncryptionKeyType: "{{ EncryptionKeyType }}"
          EncryptionKeyConfiguration:
            SecretsManager:
              SecretArn: "{{ SecretArn }}"
              RoleArn: "{{ RoleArn }}"
            Automatic: "{{ Automatic }}"
  - name: Source
    description: |
      The settings for the source of the flow.
    value:
      Decryption:
        Algorithm: "{{ Algorithm }}"
        ConstantInitializationVector: "{{ ConstantInitializationVector }}"
        DeviceId: "{{ DeviceId }}"
        KeyType: "{{ KeyType }}"
        Region: "{{ Region }}"
        ResourceId: "{{ ResourceId }}"
        RoleArn: "{{ RoleArn }}"
        SecretArn: "{{ SecretArn }}"
        Url: "{{ Url }}"
      Description: "{{ Description }}"
      EntitlementArn: "{{ EntitlementArn }}"
      IngestPort: {{ IngestPort }}
      MaxBitrate: {{ MaxBitrate }}
      MaxLatency: {{ MaxLatency }}
      MaxSyncBuffer: {{ MaxSyncBuffer }}
      MediaStreamSourceConfigurations:
        - EncodingName: "{{ EncodingName }}"
          InputConfigurations: "{{ InputConfigurations }}"
          MediaStreamName: "{{ MediaStreamName }}"
      MinLatency: {{ MinLatency }}
      Name: "{{ Name }}"
      Protocol: "{{ Protocol }}"
      SenderControlPort: {{ SenderControlPort }}
      SenderIpAddress: "{{ SenderIpAddress }}"
      SourceListenerAddress: "{{ SourceListenerAddress }}"
      SourceListenerPort: {{ SourceListenerPort }}
      StreamId: "{{ StreamId }}"
      VpcInterfaceName: "{{ VpcInterfaceName }}"
      WhitelistCidr: "{{ WhitelistCidr }}"
      GatewayBridgeSource:
        BridgeArn: "{{ BridgeArn }}"
        VpcInterfaceAttachment:
          VpcInterfaceName: "{{ VpcInterfaceName }}"
      NdiSourceSettings:
        SourceName: "{{ SourceName }}"
      SourceTags: "{{ SourceTags }}"
      RouterIntegrationState: "{{ RouterIntegrationState }}"
      RouterIntegrationTransitDecryption:
        EncryptionKeyType: "{{ EncryptionKeyType }}"
        EncryptionKeyConfiguration:
          SecretsManager:
            SecretArn: "{{ SecretArn }}"
            RoleArn: "{{ RoleArn }}"
          Automatic: "{{ Automatic }}"
  - name: SourceFailoverConfig
    description: |
      The settings for source failover.
    value:
      FailoverMode: "{{ FailoverMode }}"
      RecoveryWindow: {{ RecoveryWindow }}
      SourcePriority:
        PrimarySource: "{{ PrimarySource }}"
      State: "{{ State }}"
  - name: Sources
    value:
      - Decryption:
          Algorithm: "{{ Algorithm }}"
          ConstantInitializationVector: "{{ ConstantInitializationVector }}"
          DeviceId: "{{ DeviceId }}"
          KeyType: "{{ KeyType }}"
          Region: "{{ Region }}"
          ResourceId: "{{ ResourceId }}"
          RoleArn: "{{ RoleArn }}"
          SecretArn: "{{ SecretArn }}"
          Url: "{{ Url }}"
        Description: "{{ Description }}"
        EntitlementArn: "{{ EntitlementArn }}"
        IngestPort: {{ IngestPort }}
        MaxBitrate: {{ MaxBitrate }}
        MaxLatency: {{ MaxLatency }}
        MaxSyncBuffer: {{ MaxSyncBuffer }}
        MediaStreamSourceConfigurations: "{{ MediaStreamSourceConfigurations }}"
        MinLatency: {{ MinLatency }}
        Name: "{{ Name }}"
        Protocol: "{{ Protocol }}"
        SenderControlPort: {{ SenderControlPort }}
        SenderIpAddress: "{{ SenderIpAddress }}"
        SourceListenerAddress: "{{ SourceListenerAddress }}"
        SourceListenerPort: {{ SourceListenerPort }}
        StreamId: "{{ StreamId }}"
        VpcInterfaceName: "{{ VpcInterfaceName }}"
        WhitelistCidr: "{{ WhitelistCidr }}"
        GatewayBridgeSource:
          BridgeArn: "{{ BridgeArn }}"
          VpcInterfaceAttachment:
            VpcInterfaceName: "{{ VpcInterfaceName }}"
        NdiSourceSettings:
          SourceName: "{{ SourceName }}"
        SourceTags: "{{ SourceTags }}"
        RouterIntegrationState: "{{ RouterIntegrationState }}"
        RouterIntegrationTransitDecryption:
          EncryptionKeyType: "{{ EncryptionKeyType }}"
          EncryptionKeyConfiguration:
            SecretsManager:
              SecretArn: "{{ SecretArn }}"
              RoleArn: "{{ RoleArn }}"
            Automatic: "{{ Automatic }}"
  - name: VpcInterfaces
    value:
      - Name: "{{ Name }}"
        NetworkInterfaceType: "{{ NetworkInterfaceType }}"
        RoleArn: "{{ RoleArn }}"
        SecurityGroupIds: "{{ SecurityGroupIds }}"
        SubnetId: "{{ SubnetId }}"
        VpcInterfaceTags: "{{ VpcInterfaceTags }}"
  - name: Maintenance
    description: |
      Create a maintenance setting for a flow.
    value:
      MaintenanceDay: "{{ MaintenanceDay }}"
      MaintenanceStartHour: "{{ MaintenanceStartHour }}"
  - name: SourceMonitoringConfig
    description: |
      The settings for source monitoring.
    value:
      ThumbnailState: "{{ ThumbnailState }}"
      AudioMonitoringSettings:
        - SilentAudio:
            State: "{{ State }}"
            ThresholdSeconds: {{ ThresholdSeconds }}
      ContentQualityAnalysisState: "{{ ContentQualityAnalysisState }}"
      VideoMonitoringSettings:
        - BlackFrames:
            State: "{{ State }}"
            ThresholdSeconds: {{ ThresholdSeconds }}
          FrozenFrames:
            State: "{{ State }}"
            ThresholdSeconds: {{ ThresholdSeconds }}
  - name: FlowSize
    value: "{{ FlowSize }}"
    valid_values: ['MEDIUM', 'LARGE', 'LARGE_4X']
  - name: NdiConfig
    description: |
      Specifies the configuration settings for NDI sources and outputs.
    value:
      NdiState: "{{ NdiState }}"
      MachineName: "{{ MachineName }}"
      NdiDiscoveryServers:
        - DiscoveryServerAddress: "{{ DiscoveryServerAddress }}"
          DiscoveryServerPort: {{ DiscoveryServerPort }}
          VpcInterfaceAdapter: "{{ VpcInterfaceAdapter }}"
  - name: EncodingConfig
    description: |
      The encoding configuration to apply to the NDI\xae source when transcoding it to a transport stream for downstream distribution. You can choose between several predefined encoding profiles based on common use cases.
    value:
      EncodingProfile: "{{ EncodingProfile }}"
      VideoMaxBitrate: {{ VideoMaxBitrate }}
  - name: FlowTags
    value: "{{ FlowTags }}"
`})})]}),"\n",(0,a.jsxs)(r.h2,{id:"update-examples",children:[(0,a.jsx)(r.code,{children:"UPDATE"})," examples"]}),"\n",(0,a.jsxs)(d.A,{defaultValue:"add_flow_media_streams",values:[{label:"add_flow_media_streams",value:"add_flow_media_streams"},{label:"add_flow_vpc_interfaces",value:"add_flow_vpc_interfaces"},{label:"remove_flow_media_stream",value:"remove_flow_media_stream"},{label:"remove_flow_output",value:"remove_flow_output"},{label:"remove_flow_source",value:"remove_flow_source"},{label:"remove_flow_vpc_interface",value:"remove_flow_vpc_interface"},{label:"update_flow",value:"update_flow"}],children:[(0,a.jsxs)(l.A,{value:"add_flow_media_streams",children:[(0,a.jsx)(r.p,{children:"Adds media streams to an existing flow. After you add a media stream to a flow, you can associate it with a source and/or an output that uses the ST 2110 JPEG XS or CDI protocol."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"UPDATE aws.mediaconnect.flows\nSET \nMediaStreams = '{{ MediaStreams }}'\nWHERE \nflow_arn = '{{ flow_arn }}' --required\nAND region = '{{ region }}' --required\nAND MediaStreams = '{{ MediaStreams }}' --required\nRETURNING\nFlowArn,\nMediaStreams;\n"})})]}),(0,a.jsxs)(l.A,{value:"add_flow_vpc_interfaces",children:[(0,a.jsx)(r.p,{children:"Adds VPC interfaces to a flow."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"UPDATE aws.mediaconnect.flows\nSET \nVpcInterfaces = '{{ VpcInterfaces }}'\nWHERE \nflow_arn = '{{ flow_arn }}' --required\nAND region = '{{ region }}' --required\nAND VpcInterfaces = '{{ VpcInterfaces }}' --required\nRETURNING\nFlowArn,\nVpcInterfaces;\n"})})]}),(0,a.jsxs)(l.A,{value:"remove_flow_media_stream",children:[(0,a.jsx)(r.p,{children:"Removes a media stream from a flow. This action is only available if the media stream is not associated with a source or output."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"UPDATE aws.mediaconnect.flows\nSET \n-- No updatable properties\nWHERE \nflow_arn = '{{ flow_arn }}' --required\nAND media_stream_name = '{{ media_stream_name }}' --required\nAND region = '{{ region }}' --required\nRETURNING\nFlowArn,\nMediaStreamName;\n"})})]}),(0,a.jsxs)(l.A,{value:"remove_flow_output",children:[(0,a.jsx)(r.p,{children:"Removes an output from an existing flow. This request can be made only on an output that does not have an entitlement associated with it. If the output has an entitlement, you must revoke the entitlement instead. When an entitlement is revoked from a flow, the service automatically removes the associated output."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"UPDATE aws.mediaconnect.flows\nSET \n-- No updatable properties\nWHERE \nflow_arn = '{{ flow_arn }}' --required\nAND output_arn = '{{ output_arn }}' --required\nAND region = '{{ region }}' --required\nRETURNING\nFlowArn,\nOutputArn;\n"})})]}),(0,a.jsxs)(l.A,{value:"remove_flow_source",children:[(0,a.jsx)(r.p,{children:"Removes a source from an existing flow. This request can be made only if there is more than one source on the flow."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"UPDATE aws.mediaconnect.flows\nSET \n-- No updatable properties\nWHERE \nflow_arn = '{{ flow_arn }}' --required\nAND source_arn = '{{ source_arn }}' --required\nAND region = '{{ region }}' --required\nRETURNING\nFlowArn,\nSourceArn;\n"})})]}),(0,a.jsxs)(l.A,{value:"remove_flow_vpc_interface",children:[(0,a.jsx)(r.p,{children:"Removes a VPC Interface from an existing flow. This request can be made only on a VPC interface that does not have a Source or Output associated with it. If the VPC interface is referenced by a Source or Output, you must first delete or update the Source or Output to no longer reference the VPC interface."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"UPDATE aws.mediaconnect.flows\nSET \n-- No updatable properties\nWHERE \nflow_arn = '{{ flow_arn }}' --required\nAND vpc_interface_name = '{{ vpc_interface_name }}' --required\nAND region = '{{ region }}' --required\nRETURNING\nFlowArn,\nNonDeletedNetworkInterfaceIds,\nVpcInterfaceName;\n"})})]}),(0,a.jsxs)(l.A,{value:"update_flow",children:[(0,a.jsx)(r.p,{children:"Updates an existing flow. Because UpdateFlowSources and UpdateFlow are separate operations, you can't change both the source type AND the flow size in a single request. If you have a MEDIUM flow and you want to change the flow source to NDI\xae: First, use the UpdateFlow operation to upgrade the flow size to LARGE. After that, you can then use the UpdateFlowSource operation to configure the NDI source. If you're switching from an NDI source to a transport stream (TS) source and want to downgrade the flow size: First, use the UpdateFlowSource operation to change the flow source type. After that, you can then use the UpdateFlow operation to downgrade the flow size to MEDIUM."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"UPDATE aws.mediaconnect.flows\nSET \nSourceFailoverConfig = '{{ SourceFailoverConfig }}',\nMaintenance = '{{ Maintenance }}',\nSourceMonitoringConfig = '{{ SourceMonitoringConfig }}',\nNdiConfig = '{{ NdiConfig }}',\nFlowSize = '{{ FlowSize }}',\nEncodingConfig = '{{ EncodingConfig }}'\nWHERE \nflow_arn = '{{ flow_arn }}' --required\nAND region = '{{ region }}' --required\nRETURNING\nFlow;\n"})})]})]}),"\n",(0,a.jsxs)(r.h2,{id:"delete-examples",children:[(0,a.jsx)(r.code,{children:"DELETE"})," examples"]}),"\n",(0,a.jsx)(d.A,{defaultValue:"delete_flow",values:[{label:"delete_flow",value:"delete_flow"}],children:(0,a.jsxs)(l.A,{value:"delete_flow",children:[(0,a.jsx)(r.p,{children:"Deletes a flow. Before you can delete a flow, you must stop the flow."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"DELETE FROM aws.mediaconnect.flows\nWHERE flow_arn = '{{ flow_arn }}' --required\nAND region = '{{ region }}' --required\n;\n"})})]})}),"\n",(0,a.jsx)(r.h2,{id:"lifecycle-methods",children:"Lifecycle Methods"}),"\n",(0,a.jsxs)(d.A,{defaultValue:"add_flow_outputs",values:[{label:"add_flow_outputs",value:"add_flow_outputs"},{label:"add_flow_sources",value:"add_flow_sources"},{label:"update_flow_media_stream",value:"update_flow_media_stream"},{label:"update_flow_output",value:"update_flow_output"},{label:"update_flow_source",value:"update_flow_source"},{label:"start_flow",value:"start_flow"},{label:"stop_flow",value:"stop_flow"}],children:[(0,a.jsxs)(l.A,{value:"add_flow_outputs",children:[(0,a.jsx)(r.p,{children:"Adds outputs to an existing flow. You can create up to 50 outputs per flow."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"EXEC aws.mediaconnect.flows.add_flow_outputs \n@flow_arn='{{ flow_arn }}' --required, \n@region='{{ region }}' --required \n@@json=\n'{\n\"Outputs\": \"{{ Outputs }}\"\n}'\n;\n"})})]}),(0,a.jsxs)(l.A,{value:"add_flow_sources",children:[(0,a.jsx)(r.p,{children:"Adds sources to a flow."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"EXEC aws.mediaconnect.flows.add_flow_sources \n@flow_arn='{{ flow_arn }}' --required, \n@region='{{ region }}' --required \n@@json=\n'{\n\"Sources\": \"{{ Sources }}\"\n}'\n;\n"})})]}),(0,a.jsxs)(l.A,{value:"update_flow_media_stream",children:[(0,a.jsx)(r.p,{children:"Updates an existing media stream."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:'EXEC aws.mediaconnect.flows.update_flow_media_stream \n@flow_arn=\'{{ flow_arn }}\' --required, \n@media_stream_name=\'{{ media_stream_name }}\' --required, \n@region=\'{{ region }}\' --required \n@@json=\n\'{\n"Attributes": "{{ Attributes }}", \n"ClockRate": {{ ClockRate }}, \n"Description": "{{ Description }}", \n"MediaStreamType": "{{ MediaStreamType }}", \n"VideoFormat": "{{ VideoFormat }}"\n}\'\n;\n'})})]}),(0,a.jsxs)(l.A,{value:"update_flow_output",children:[(0,a.jsx)(r.p,{children:"Updates an existing flow output."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:'EXEC aws.mediaconnect.flows.update_flow_output \n@flow_arn=\'{{ flow_arn }}\' --required, \n@output_arn=\'{{ output_arn }}\' --required, \n@region=\'{{ region }}\' --required \n@@json=\n\'{\n"CidrAllowList": "{{ CidrAllowList }}", \n"Description": "{{ Description }}", \n"Destination": "{{ Destination }}", \n"Encryption": "{{ Encryption }}", \n"MaxLatency": {{ MaxLatency }}, \n"MediaStreamOutputConfigurations": "{{ MediaStreamOutputConfigurations }}", \n"MinLatency": {{ MinLatency }}, \n"Port": {{ Port }}, \n"Protocol": "{{ Protocol }}", \n"RemoteId": "{{ RemoteId }}", \n"SenderControlPort": {{ SenderControlPort }}, \n"SenderIpAddress": "{{ SenderIpAddress }}", \n"SmoothingLatency": {{ SmoothingLatency }}, \n"StreamId": "{{ StreamId }}", \n"VpcInterfaceAttachment": "{{ VpcInterfaceAttachment }}", \n"OutputStatus": "{{ OutputStatus }}", \n"NdiProgramName": "{{ NdiProgramName }}", \n"NdiSpeedHqQuality": {{ NdiSpeedHqQuality }}, \n"RouterIntegrationState": "{{ RouterIntegrationState }}", \n"RouterIntegrationTransitEncryption": "{{ RouterIntegrationTransitEncryption }}"\n}\'\n;\n'})})]}),(0,a.jsxs)(l.A,{value:"update_flow_source",children:[(0,a.jsx)(r.p,{children:"Updates the source of a flow. Because UpdateFlowSources and UpdateFlow are separate operations, you can't change both the source type AND the flow size in a single request. If you have a MEDIUM flow and you want to change the flow source to NDI\xae: First, use the UpdateFlow operation to upgrade the flow size to LARGE. After that, you can then use the UpdateFlowSource operation to configure the NDI source. If you're switching from an NDI source to a transport stream (TS) source and want to downgrade the flow size: First, use the UpdateFlowSource operation to change the flow source type. After that, you can then use the UpdateFlow operation to downgrade the flow size to MEDIUM."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:'EXEC aws.mediaconnect.flows.update_flow_source \n@flow_arn=\'{{ flow_arn }}\' --required, \n@source_arn=\'{{ source_arn }}\' --required, \n@region=\'{{ region }}\' --required \n@@json=\n\'{\n"Decryption": "{{ Decryption }}", \n"Description": "{{ Description }}", \n"EntitlementArn": "{{ EntitlementArn }}", \n"IngestPort": {{ IngestPort }}, \n"MaxBitrate": {{ MaxBitrate }}, \n"MaxLatency": {{ MaxLatency }}, \n"MaxSyncBuffer": {{ MaxSyncBuffer }}, \n"MediaStreamSourceConfigurations": "{{ MediaStreamSourceConfigurations }}", \n"MinLatency": {{ MinLatency }}, \n"Protocol": "{{ Protocol }}", \n"SenderControlPort": {{ SenderControlPort }}, \n"SenderIpAddress": "{{ SenderIpAddress }}", \n"SourceListenerAddress": "{{ SourceListenerAddress }}", \n"SourceListenerPort": {{ SourceListenerPort }}, \n"StreamId": "{{ StreamId }}", \n"VpcInterfaceName": "{{ VpcInterfaceName }}", \n"WhitelistCidr": "{{ WhitelistCidr }}", \n"GatewayBridgeSource": "{{ GatewayBridgeSource }}", \n"NdiSourceSettings": "{{ NdiSourceSettings }}", \n"RouterIntegrationState": "{{ RouterIntegrationState }}", \n"RouterIntegrationTransitDecryption": "{{ RouterIntegrationTransitDecryption }}"\n}\'\n;\n'})})]}),(0,a.jsxs)(l.A,{value:"start_flow",children:[(0,a.jsx)(r.p,{children:"Starts a flow."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"EXEC aws.mediaconnect.flows.start_flow \n@flow_arn='{{ flow_arn }}' --required, \n@region='{{ region }}' --required\n;\n"})})]}),(0,a.jsxs)(l.A,{value:"stop_flow",children:[(0,a.jsx)(r.p,{children:"Stops a flow."}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:"EXEC aws.mediaconnect.flows.stop_flow \n@flow_arn='{{ flow_arn }}' --required, \n@region='{{ region }}' --required\n;\n"})})]})]})]})}function m(e={}){let{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}}}]);