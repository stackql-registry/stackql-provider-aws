"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["418997"],{76550(e,n,i){i.r(n),i.d(n,{metadata:()=>r,default:()=>p,frontMatter:()=>l,contentTitle:()=>h,toc:()=>j,assets:()=>x});var r=JSON.parse('{"id":"services/mediapackage/origin_endpoints/index","title":"origin_endpoints","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/mediapackage/origin_endpoints/index.md","sourceDirName":"services/mediapackage/origin_endpoints","slug":"/services/mediapackage/origin_endpoints/","permalink":"/services/mediapackage/origin_endpoints/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"origin_endpoints","hide_title":false,"hide_table_of_contents":false,"keywords":["origin_endpoints","mediapackage","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"harvest_jobs","permalink":"/services/mediapackage/harvest_jobs/"},"next":{"title":"tags","permalink":"/services/mediapackage/tags/"}}'),d=i(474848),t=i(28453),s=i(97362),o=i(897272),a=i(413554),c=i(541647);let l={title:"origin_endpoints",hide_title:!1,hide_table_of_contents:!1,keywords:["origin_endpoints","mediapackage","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,x={},j=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function g(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:["Creates, updates, deletes, gets or lists an ",(0,d.jsx)("code",{children:"origin_endpoints"})," resource."]}),"\n",(0,d.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,d.jsx)("table",{children:(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"Name"})}),(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"origin_endpoints"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"Type"})}),(0,d.jsx)("td",{children:"Resource"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("b",{children:"Id"})}),(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"aws.mediapackage.origin_endpoints"})})]})]})}),"\n",(0,d.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,d.jsxs)(n.p,{children:["The following fields are returned by ",(0,d.jsx)(n.code,{children:"SELECT"})," queries:"]}),"\n",(0,d.jsxs)(a.A,{defaultValue:"describe_origin_endpoint",values:[{label:"describe_origin_endpoint",value:"describe_origin_endpoint"},{label:"list_origin_endpoints",value:"list_origin_endpoints"}],children:[(0,d.jsx)(c.A,{value:"describe_origin_endpoint",children:(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Name"}),(0,d.jsx)("th",{children:"Datatype"}),(0,d.jsx)("th",{children:"Description"})]})}),(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"Arn"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"The Amazon Resource Name (ARN) assigned to the OriginEndpoint."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"Authorization"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"object"})}),(0,d.jsx)("td",{children:"CDN Authorization credentials"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"ChannelId"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"The ID of the Channel the OriginEndpoint is associated with."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"CmafPackage"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"object"})}),(0,d.jsx)("td",{children:"A Common Media Application Format (CMAF) packaging configuration."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"CreatedAt"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"The date and time the OriginEndpoint was created."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"DashPackage"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"object"})}),(0,d.jsx)("td",{children:"A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"Description"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"A short text description of the OriginEndpoint."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"HlsPackage"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"object"})}),(0,d.jsx)("td",{children:"An HTTP Live Streaming (HLS) packaging configuration."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"Id"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"The ID of the OriginEndpoint."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"ManifestName"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"A short string appended to the end of the OriginEndpoint URL."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"MssPackage"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"object"})}),(0,d.jsx)("td",{children:"A Microsoft Smooth Streaming (MSS) packaging configuration."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"Origination"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination (ALLOW, DENY)"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"StartoverWindowSeconds"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"integer"})}),(0,d.jsx)("td",{children:"Maximum duration (seconds) of content to retain for startover playback. If not specified, startover playback will be disabled for the OriginEndpoint."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"Tags"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"object"})}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"TimeDelaySeconds"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"integer"})}),(0,d.jsx)("td",{children:"Amount of delay (seconds) to enforce on the playback of live content. If not specified, there will be no time delay in effect for the OriginEndpoint."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"Url"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"The URL of the packaged OriginEndpoint for consumption."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"Whitelist"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"array"})}),(0,d.jsx)("td",{children:"A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint."})]})]})]})}),(0,d.jsx)(c.A,{value:"list_origin_endpoints",children:(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Name"}),(0,d.jsx)("th",{children:"Datatype"}),(0,d.jsx)("th",{children:"Description"})]})}),(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"Arn"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"The Amazon Resource Name (ARN) assigned to the OriginEndpoint."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"Authorization"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"object"})}),(0,d.jsx)("td",{children:"CDN Authorization credentials"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"ChannelId"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"The ID of the Channel the OriginEndpoint is associated with."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"CmafPackage"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"object"})}),(0,d.jsx)("td",{children:"A Common Media Application Format (CMAF) packaging configuration."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"CreatedAt"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"The date and time the OriginEndpoint was created."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"DashPackage"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"object"})}),(0,d.jsx)("td",{children:"A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"Description"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"A short text description of the OriginEndpoint."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"HlsPackage"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"object"})}),(0,d.jsx)("td",{children:"An HTTP Live Streaming (HLS) packaging configuration."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"Id"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"The ID of the OriginEndpoint."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"ManifestName"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"A short string appended to the end of the OriginEndpoint URL."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"MssPackage"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"object"})}),(0,d.jsx)("td",{children:"A Microsoft Smooth Streaming (MSS) packaging configuration."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"Origination"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination (ALLOW, DENY)"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"StartoverWindowSeconds"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"integer"})}),(0,d.jsx)("td",{children:"Maximum duration (seconds) of content to retain for startover playback. If not specified, startover playback will be disabled for the OriginEndpoint."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"Tags"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"object"})}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"TimeDelaySeconds"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"integer"})}),(0,d.jsx)("td",{children:"Amount of delay (seconds) to enforce on the playback of live content. If not specified, there will be no time delay in effect for the OriginEndpoint."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"Url"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"The URL of the packaged OriginEndpoint for consumption."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"Whitelist"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"array"})}),(0,d.jsx)("td",{children:"A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint."})]})]})]})})]}),"\n",(0,d.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,d.jsx)(n.p,{children:"The following methods are available for this resource:"}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Name"}),(0,d.jsx)("th",{children:"Accessible by"}),(0,d.jsx)("th",{children:"Required Params"}),(0,d.jsx)("th",{children:"Optional Params"}),(0,d.jsx)("th",{children:"Description"})]})}),(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("a",{href:"#describe_origin_endpoint",children:(0,d.jsx)(s.A,{code:"describe_origin_endpoint"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"select"})}),(0,d.jsxs)("td",{children:[(0,d.jsx)("a",{href:"#parameter-id",children:(0,d.jsx)("code",{children:"id"})}),", ",(0,d.jsx)("a",{href:"#parameter-region",children:(0,d.jsx)("code",{children:"region"})})]}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:"Gets details about an existing OriginEndpoint."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("a",{href:"#list_origin_endpoints",children:(0,d.jsx)(s.A,{code:"list_origin_endpoints"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"select"})}),(0,d.jsx)("td",{children:(0,d.jsx)("a",{href:"#parameter-region",children:(0,d.jsx)("code",{children:"region"})})}),(0,d.jsxs)("td",{children:[(0,d.jsx)("a",{href:"#parameter-channelId",children:(0,d.jsx)("code",{children:"channelId"})}),", ",(0,d.jsx)("a",{href:"#parameter-maxResults",children:(0,d.jsx)("code",{children:"maxResults"})}),", ",(0,d.jsx)("a",{href:"#parameter-nextToken",children:(0,d.jsx)("code",{children:"nextToken"})})]}),(0,d.jsx)("td",{children:"Returns a collection of OriginEndpoint records."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("a",{href:"#create_origin_endpoint",children:(0,d.jsx)(s.A,{code:"create_origin_endpoint"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"insert"})}),(0,d.jsxs)("td",{children:[(0,d.jsx)("a",{href:"#parameter-region",children:(0,d.jsx)("code",{children:"region"})}),", ",(0,d.jsx)("a",{href:"#parameter-ChannelId",children:(0,d.jsx)("code",{children:"ChannelId"})})]}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:"Creates a new OriginEndpoint record."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("a",{href:"#update_origin_endpoint",children:(0,d.jsx)(s.A,{code:"update_origin_endpoint"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"update"})}),(0,d.jsxs)("td",{children:[(0,d.jsx)("a",{href:"#parameter-id",children:(0,d.jsx)("code",{children:"id"})}),", ",(0,d.jsx)("a",{href:"#parameter-region",children:(0,d.jsx)("code",{children:"region"})})]}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:"Updates an existing OriginEndpoint."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("a",{href:"#delete_origin_endpoint",children:(0,d.jsx)(s.A,{code:"delete_origin_endpoint"})})}),(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"delete"})}),(0,d.jsxs)("td",{children:[(0,d.jsx)("a",{href:"#parameter-id",children:(0,d.jsx)("code",{children:"id"})}),", ",(0,d.jsx)("a",{href:"#parameter-region",children:(0,d.jsx)("code",{children:"region"})})]}),(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:"Deletes an existing OriginEndpoint."})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsxs)(n.p,{children:["Parameters can be passed in the ",(0,d.jsx)(n.code,{children:"WHERE"})," clause of a query. Check the ",(0,d.jsx)(n.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Name"}),(0,d.jsx)("th",{children:"Datatype"}),(0,d.jsx)("th",{children:"Description"})]})}),(0,d.jsxs)("tbody",{children:[(0,d.jsxs)("tr",{id:"parameter-id",children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"id"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"The ID of the OriginEndpoint to delete."})]}),(0,d.jsxs)("tr",{id:"parameter-region",children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"region"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"AWS region (default: us-east-1)"})]}),(0,d.jsxs)("tr",{id:"parameter-channelId",children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"channelId"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"When specified, the request will return only OriginEndpoints associated with the given Channel ID."})]}),(0,d.jsxs)("tr",{id:"parameter-maxResults",children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"maxResults"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"integer"})}),(0,d.jsx)("td",{children:"The upper bound on the number of records to return."})]}),(0,d.jsxs)("tr",{id:"parameter-nextToken",children:[(0,d.jsx)("td",{children:(0,d.jsx)(s.A,{code:"nextToken"})}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"string"})}),(0,d.jsx)("td",{children:"A token used to resume pagination from the end of a previous request."})]})]})]}),"\n",(0,d.jsxs)(n.h2,{id:"select-examples",children:[(0,d.jsx)(n.code,{children:"SELECT"})," examples"]}),"\n",(0,d.jsxs)(a.A,{defaultValue:"describe_origin_endpoint",values:[{label:"describe_origin_endpoint",value:"describe_origin_endpoint"},{label:"list_origin_endpoints",value:"list_origin_endpoints"}],children:[(0,d.jsxs)(c.A,{value:"describe_origin_endpoint",children:[(0,d.jsx)(n.p,{children:"Gets details about an existing OriginEndpoint."}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"SELECT\nArn,\nAuthorization,\nChannelId,\nCmafPackage,\nCreatedAt,\nDashPackage,\nDescription,\nHlsPackage,\nId,\nManifestName,\nMssPackage,\nOrigination,\nStartoverWindowSeconds,\nTags,\nTimeDelaySeconds,\nUrl,\nWhitelist\nFROM aws.mediapackage.origin_endpoints\nWHERE id = '{{ id }}' -- required\nAND region = '{{ region }}' -- required\n;\n"})})]}),(0,d.jsxs)(c.A,{value:"list_origin_endpoints",children:[(0,d.jsx)(n.p,{children:"Returns a collection of OriginEndpoint records."}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"SELECT\nArn,\nAuthorization,\nChannelId,\nCmafPackage,\nCreatedAt,\nDashPackage,\nDescription,\nHlsPackage,\nId,\nManifestName,\nMssPackage,\nOrigination,\nStartoverWindowSeconds,\nTags,\nTimeDelaySeconds,\nUrl,\nWhitelist\nFROM aws.mediapackage.origin_endpoints\nWHERE region = '{{ region }}' -- required\nAND channelId = '{{ channelId }}'\nAND maxResults = '{{ maxResults }}'\nAND nextToken = '{{ nextToken }}'\n;\n"})})]})]}),"\n",(0,d.jsxs)(n.h2,{id:"insert-examples",children:[(0,d.jsx)(n.code,{children:"INSERT"})," examples"]}),"\n",(0,d.jsxs)(a.A,{defaultValue:"create_origin_endpoint",values:[{label:"create_origin_endpoint",value:"create_origin_endpoint"},{label:"Manifest",value:"manifest"}],children:[(0,d.jsxs)(c.A,{value:"create_origin_endpoint",children:[(0,d.jsx)(n.p,{children:"Creates a new OriginEndpoint record."}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"INSERT INTO aws.mediapackage.origin_endpoints (\nAuthorization,\nChannelId,\nCmafPackage,\nDashPackage,\nDescription,\nHlsPackage,\nId,\nManifestName,\nMssPackage,\nOrigination,\nStartoverWindowSeconds,\nTags,\nTimeDelaySeconds,\nWhitelist,\nregion\n)\nSELECT \n'{{ Authorization }}',\n'{{ ChannelId }}' /* required */,\n'{{ CmafPackage }}',\n'{{ DashPackage }}',\n'{{ Description }}',\n'{{ HlsPackage }}',\n'{{ Id }}',\n'{{ ManifestName }}',\n'{{ MssPackage }}',\n'{{ Origination }}',\n{{ StartoverWindowSeconds }},\n'{{ Tags }}',\n{{ TimeDelaySeconds }},\n'{{ Whitelist }}',\n'{{ region }}'\nRETURNING\nArn,\nAuthorization,\nChannelId,\nCmafPackage,\nCreatedAt,\nDashPackage,\nDescription,\nHlsPackage,\nId,\nManifestName,\nMssPackage,\nOrigination,\nStartoverWindowSeconds,\nTags,\nTimeDelaySeconds,\nUrl,\nWhitelist\n;\n"})})]}),(0,d.jsx)(c.A,{value:"manifest",children:(0,d.jsx)(o.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: origin_endpoints
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the origin_endpoints resource.
  - name: Authorization
    description: |
      CDN Authorization credentials
    value:
      CdnIdentifierSecret: "{{ CdnIdentifierSecret }}"
      SecretsRoleArn: "{{ SecretsRoleArn }}"
  - name: ChannelId
    value: "{{ ChannelId }}"
  - name: CmafPackage
    description: |
      A Common Media Application Format (CMAF) packaging configuration.
    value:
      Encryption:
        ConstantInitializationVector: "{{ ConstantInitializationVector }}"
        EncryptionMethod: "{{ EncryptionMethod }}"
        KeyRotationIntervalSeconds: {{ KeyRotationIntervalSeconds }}
        SpekeKeyProvider:
          CertificateArn: "{{ CertificateArn }}"
          EncryptionContractConfiguration:
            PresetSpeke20Audio: "{{ PresetSpeke20Audio }}"
            PresetSpeke20Video: "{{ PresetSpeke20Video }}"
          ResourceId: "{{ ResourceId }}"
          RoleArn: "{{ RoleArn }}"
          SystemIds:
            - "{{ SystemIds }}"
          Url: "{{ Url }}"
      HlsManifests:
        - AdMarkers: "{{ AdMarkers }}"
          AdTriggers: "{{ AdTriggers }}"
          AdsOnDeliveryRestrictions: "{{ AdsOnDeliveryRestrictions }}"
          Id: "{{ Id }}"
          IncludeIframeOnlyStream: {{ IncludeIframeOnlyStream }}
          ManifestName: "{{ ManifestName }}"
          PlaylistType: "{{ PlaylistType }}"
          PlaylistWindowSeconds: {{ PlaylistWindowSeconds }}
          ProgramDateTimeIntervalSeconds: {{ ProgramDateTimeIntervalSeconds }}
      SegmentDurationSeconds: {{ SegmentDurationSeconds }}
      SegmentPrefix: "{{ SegmentPrefix }}"
      StreamSelection:
        MaxVideoBitsPerSecond: {{ MaxVideoBitsPerSecond }}
        MinVideoBitsPerSecond: {{ MinVideoBitsPerSecond }}
        StreamOrder: "{{ StreamOrder }}"
  - name: DashPackage
    description: |
      A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
    value:
      AdTriggers:
        - "{{ AdTriggers }}"
      AdsOnDeliveryRestrictions: "{{ AdsOnDeliveryRestrictions }}"
      Encryption:
        KeyRotationIntervalSeconds: {{ KeyRotationIntervalSeconds }}
        SpekeKeyProvider:
          CertificateArn: "{{ CertificateArn }}"
          EncryptionContractConfiguration:
            PresetSpeke20Audio: "{{ PresetSpeke20Audio }}"
            PresetSpeke20Video: "{{ PresetSpeke20Video }}"
          ResourceId: "{{ ResourceId }}"
          RoleArn: "{{ RoleArn }}"
          SystemIds:
            - "{{ SystemIds }}"
          Url: "{{ Url }}"
      IncludeIframeOnlyStream: {{ IncludeIframeOnlyStream }}
      ManifestLayout: "{{ ManifestLayout }}"
      ManifestWindowSeconds: {{ ManifestWindowSeconds }}
      MinBufferTimeSeconds: {{ MinBufferTimeSeconds }}
      MinUpdatePeriodSeconds: {{ MinUpdatePeriodSeconds }}
      PeriodTriggers:
        - "{{ PeriodTriggers }}"
      Profile: "{{ Profile }}"
      SegmentDurationSeconds: {{ SegmentDurationSeconds }}
      SegmentTemplateFormat: "{{ SegmentTemplateFormat }}"
      StreamSelection:
        MaxVideoBitsPerSecond: {{ MaxVideoBitsPerSecond }}
        MinVideoBitsPerSecond: {{ MinVideoBitsPerSecond }}
        StreamOrder: "{{ StreamOrder }}"
      SuggestedPresentationDelaySeconds: {{ SuggestedPresentationDelaySeconds }}
      UtcTiming: "{{ UtcTiming }}"
      UtcTimingUri: "{{ UtcTimingUri }}"
  - name: Description
    value: "{{ Description }}"
  - name: HlsPackage
    description: |
      An HTTP Live Streaming (HLS) packaging configuration.
    value:
      AdMarkers: "{{ AdMarkers }}"
      AdTriggers:
        - "{{ AdTriggers }}"
      AdsOnDeliveryRestrictions: "{{ AdsOnDeliveryRestrictions }}"
      Encryption:
        ConstantInitializationVector: "{{ ConstantInitializationVector }}"
        EncryptionMethod: "{{ EncryptionMethod }}"
        KeyRotationIntervalSeconds: {{ KeyRotationIntervalSeconds }}
        RepeatExtXKey: {{ RepeatExtXKey }}
        SpekeKeyProvider:
          CertificateArn: "{{ CertificateArn }}"
          EncryptionContractConfiguration:
            PresetSpeke20Audio: "{{ PresetSpeke20Audio }}"
            PresetSpeke20Video: "{{ PresetSpeke20Video }}"
          ResourceId: "{{ ResourceId }}"
          RoleArn: "{{ RoleArn }}"
          SystemIds:
            - "{{ SystemIds }}"
          Url: "{{ Url }}"
      IncludeDvbSubtitles: {{ IncludeDvbSubtitles }}
      IncludeIframeOnlyStream: {{ IncludeIframeOnlyStream }}
      PlaylistType: "{{ PlaylistType }}"
      PlaylistWindowSeconds: {{ PlaylistWindowSeconds }}
      ProgramDateTimeIntervalSeconds: {{ ProgramDateTimeIntervalSeconds }}
      SegmentDurationSeconds: {{ SegmentDurationSeconds }}
      StreamSelection:
        MaxVideoBitsPerSecond: {{ MaxVideoBitsPerSecond }}
        MinVideoBitsPerSecond: {{ MinVideoBitsPerSecond }}
        StreamOrder: "{{ StreamOrder }}"
      UseAudioRenditionGroup: {{ UseAudioRenditionGroup }}
  - name: Id
    value: "{{ Id }}"
  - name: ManifestName
    value: "{{ ManifestName }}"
  - name: MssPackage
    description: |
      A Microsoft Smooth Streaming (MSS) packaging configuration.
    value:
      Encryption:
        SpekeKeyProvider:
          CertificateArn: "{{ CertificateArn }}"
          EncryptionContractConfiguration:
            PresetSpeke20Audio: "{{ PresetSpeke20Audio }}"
            PresetSpeke20Video: "{{ PresetSpeke20Video }}"
          ResourceId: "{{ ResourceId }}"
          RoleArn: "{{ RoleArn }}"
          SystemIds:
            - "{{ SystemIds }}"
          Url: "{{ Url }}"
      ManifestWindowSeconds: {{ ManifestWindowSeconds }}
      SegmentDurationSeconds: {{ SegmentDurationSeconds }}
      StreamSelection:
        MaxVideoBitsPerSecond: {{ MaxVideoBitsPerSecond }}
        MinVideoBitsPerSecond: {{ MinVideoBitsPerSecond }}
        StreamOrder: "{{ StreamOrder }}"
  - name: Origination
    value: "{{ Origination }}"
    valid_values: ['ALLOW', 'DENY']
  - name: StartoverWindowSeconds
    value: {{ StartoverWindowSeconds }}
  - name: Tags
    value: "{{ Tags }}"
    description: |
      A collection of tags associated with a resource
  - name: TimeDelaySeconds
    value: {{ TimeDelaySeconds }}
  - name: Whitelist
    value:
      - "{{ Whitelist }}"
`})})]}),"\n",(0,d.jsxs)(n.h2,{id:"update-examples",children:[(0,d.jsx)(n.code,{children:"UPDATE"})," examples"]}),"\n",(0,d.jsx)(a.A,{defaultValue:"update_origin_endpoint",values:[{label:"update_origin_endpoint",value:"update_origin_endpoint"}],children:(0,d.jsxs)(c.A,{value:"update_origin_endpoint",children:[(0,d.jsx)(n.p,{children:"Updates an existing OriginEndpoint."}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"UPDATE aws.mediapackage.origin_endpoints\nSET \nAuthorization = '{{ Authorization }}',\nCmafPackage = '{{ CmafPackage }}',\nDashPackage = '{{ DashPackage }}',\nDescription = '{{ Description }}',\nHlsPackage = '{{ HlsPackage }}',\nManifestName = '{{ ManifestName }}',\nMssPackage = '{{ MssPackage }}',\nOrigination = '{{ Origination }}',\nStartoverWindowSeconds = {{ StartoverWindowSeconds }},\nTimeDelaySeconds = {{ TimeDelaySeconds }},\nWhitelist = '{{ Whitelist }}'\nWHERE \nid = '{{ id }}' --required\nAND region = '{{ region }}' --required\nRETURNING\nArn,\nAuthorization,\nChannelId,\nCmafPackage,\nCreatedAt,\nDashPackage,\nDescription,\nHlsPackage,\nId,\nManifestName,\nMssPackage,\nOrigination,\nStartoverWindowSeconds,\nTags,\nTimeDelaySeconds,\nUrl,\nWhitelist;\n"})})]})}),"\n",(0,d.jsxs)(n.h2,{id:"delete-examples",children:[(0,d.jsx)(n.code,{children:"DELETE"})," examples"]}),"\n",(0,d.jsx)(a.A,{defaultValue:"delete_origin_endpoint",values:[{label:"delete_origin_endpoint",value:"delete_origin_endpoint"}],children:(0,d.jsxs)(c.A,{value:"delete_origin_endpoint",children:[(0,d.jsx)(n.p,{children:"Deletes an existing OriginEndpoint."}),(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"DELETE FROM aws.mediapackage.origin_endpoints\nWHERE id = '{{ id }}' --required\nAND region = '{{ region }}' --required\n;\n"})})]})})]})}function p(e={}){let{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(g,{...e})}):g(e)}}}]);