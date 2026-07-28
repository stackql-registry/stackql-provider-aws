"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["817687"],{614626(e,i,n){n.r(i),n.d(i,{metadata:()=>s,default:()=>m,frontMatter:()=>c,contentTitle:()=>p,toc:()=>_,assets:()=>h});var s=JSON.parse('{"id":"services/chime_sdk_media_pipelines/media_live_connector_pipelines/index","title":"media_live_connector_pipelines","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/chime_sdk_media_pipelines/media_live_connector_pipelines/index.md","sourceDirName":"services/chime_sdk_media_pipelines/media_live_connector_pipelines","slug":"/services/chime_sdk_media_pipelines/media_live_connector_pipelines/","permalink":"/services/chime_sdk_media_pipelines/media_live_connector_pipelines/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"media_live_connector_pipelines","hide_title":false,"hide_table_of_contents":false,"keywords":["media_live_connector_pipelines","chime_sdk_media_pipelines","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"media_insights_pipeline_status","permalink":"/services/chime_sdk_media_pipelines/media_insights_pipeline_status/"},"next":{"title":"media_pipeline_kinesis_video_stream_pools","permalink":"/services/chime_sdk_media_pipelines/media_pipeline_kinesis_video_stream_pools/"}}'),r=n(474848),t=n(28453),l=n(97362),a=n(897272),o=n(413554),d=n(541647);let c={title:"media_live_connector_pipelines",hide_title:!1,hide_table_of_contents:!1,keywords:["media_live_connector_pipelines","chime_sdk_media_pipelines","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},p,h={},_=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2}];function u(e){let i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.p,{children:["Creates, updates, deletes, gets or lists a ",(0,r.jsx)("code",{children:"media_live_connector_pipelines"})," resource."]}),"\n",(0,r.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Name"})}),(0,r.jsx)("td",{children:(0,r.jsx)(l.A,{code:"media_live_connector_pipelines"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Type"})}),(0,r.jsx)("td",{children:"Resource"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Id"})}),(0,r.jsx)("td",{children:(0,r.jsx)(l.A,{code:"aws.chime_sdk_media_pipelines.media_live_connector_pipelines"})})]})]})}),"\n",(0,r.jsx)(i.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(i.p,{children:["The following fields are returned by ",(0,r.jsx)(i.code,{children:"SELECT"})," queries:"]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"SELECT"})," not supported for this resource, use ",(0,r.jsx)(i.code,{children:"SHOW METHODS"})," to view available operations for the resource."]}),"\n",(0,r.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(i.p,{children:"The following methods are available for this resource:"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Accessible by"}),(0,r.jsx)("th",{children:"Required Params"}),(0,r.jsx)("th",{children:"Optional Params"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#create_media_live_connector_pipeline",children:(0,r.jsx)(l.A,{code:"create_media_live_connector_pipeline"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(l.A,{code:"insert"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})}),", ",(0,r.jsx)("a",{href:"#parameter-Sources",children:(0,r.jsx)("code",{children:"Sources"})}),", ",(0,r.jsx)("a",{href:"#parameter-Sinks",children:(0,r.jsx)("code",{children:"Sinks"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Creates a media live connector pipeline in an Amazon Chime SDK meeting."})]})})]}),"\n",(0,r.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(i.p,{children:["Parameters can be passed in the ",(0,r.jsx)(i.code,{children:"WHERE"})," clause of a query. Check the ",(0,r.jsx)(i.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{id:"parameter-region",children:[(0,r.jsx)("td",{children:(0,r.jsx)(l.A,{code:"region"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"AWS region (default: us-east-1)"})]})})]}),"\n",(0,r.jsxs)(i.h2,{id:"insert-examples",children:[(0,r.jsx)(i.code,{children:"INSERT"})," examples"]}),"\n",(0,r.jsxs)(o.A,{defaultValue:"create_media_live_connector_pipeline",values:[{label:"create_media_live_connector_pipeline",value:"create_media_live_connector_pipeline"},{label:"Manifest",value:"manifest"}],children:[(0,r.jsxs)(d.A,{value:"create_media_live_connector_pipeline",children:[(0,r.jsx)(i.p,{children:"Creates a media live connector pipeline in an Amazon Chime SDK meeting."}),(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"INSERT INTO aws.chime_sdk_media_pipelines.media_live_connector_pipelines (\nSources,\nSinks,\nClientRequestToken,\nTags,\nregion\n)\nSELECT \n'{{ Sources }}' /* required */,\n'{{ Sinks }}' /* required */,\n'{{ ClientRequestToken }}',\n'{{ Tags }}',\n'{{ region }}'\nRETURNING\nMediaLiveConnectorPipeline\n;\n"})})]}),(0,r.jsx)(d.A,{value:"manifest",children:(0,r.jsx)(a.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: media_live_connector_pipelines
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the media_live_connector_pipelines resource.
  - name: Sources
    value:
      - SourceType: "{{ SourceType }}"
        ChimeSdkMeetingLiveConnectorConfiguration:
          Arn: "{{ Arn }}"
          MuxType: "{{ MuxType }}"
          CompositedVideo:
            Layout: "{{ Layout }}"
            Resolution: "{{ Resolution }}"
            GridViewConfiguration:
              ContentShareLayout: "{{ ContentShareLayout }}"
              PresenterOnlyConfiguration:
                PresenterPosition: "{{ PresenterPosition }}"
              ActiveSpeakerOnlyConfiguration:
                ActiveSpeakerPosition: "{{ ActiveSpeakerPosition }}"
              HorizontalLayoutConfiguration:
                TileOrder: "{{ TileOrder }}"
                TilePosition: "{{ TilePosition }}"
                TileCount: {{ TileCount }}
                TileAspectRatio: "{{ TileAspectRatio }}"
              VerticalLayoutConfiguration:
                TileOrder: "{{ TileOrder }}"
                TilePosition: "{{ TilePosition }}"
                TileCount: {{ TileCount }}
                TileAspectRatio: "{{ TileAspectRatio }}"
              VideoAttribute:
                CornerRadius: {{ CornerRadius }}
                BorderColor: "{{ BorderColor }}"
                HighlightColor: "{{ HighlightColor }}"
                BorderThickness: {{ BorderThickness }}
              CanvasOrientation: "{{ CanvasOrientation }}"
          SourceConfiguration:
            SelectedVideoStreams:
              AttendeeIds:
                - "{{ AttendeeIds }}"
              ExternalUserIds:
                - "{{ ExternalUserIds }}"
  - name: Sinks
    value:
      - SinkType: "{{ SinkType }}"
        RTMPConfiguration:
          Url: "{{ Url }}"
          AudioChannels: "{{ AudioChannels }}"
          AudioSampleRate: "{{ AudioSampleRate }}"
  - name: ClientRequestToken
    value: "{{ ClientRequestToken }}"
  - name: Tags
    value:
      - Key: "{{ Key }}"
        Value: "{{ Value }}"
`})})]})]})}function m(e={}){let{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}}}]);