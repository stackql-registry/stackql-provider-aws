"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["269291"],{37213(e,t,r){r.r(t),r.d(t,{metadata:()=>a,default:()=>g,frontMatter:()=>c,contentTitle:()=>m,toc:()=>h,assets:()=>u});var a=JSON.parse('{"id":"services/mediaconvert/presets/index","title":"presets","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/mediaconvert/presets/index.md","sourceDirName":"services/mediaconvert/presets","slug":"/services/mediaconvert/presets/","permalink":"/services/mediaconvert/presets/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"presets","hide_title":false,"hide_table_of_contents":false,"keywords":["presets","mediaconvert","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"policies","permalink":"/services/mediaconvert/policies/"},"next":{"title":"queues","permalink":"/services/mediaconvert/queues/"}}'),i=r(474848),n=r(28453),o=r(97362),s=r(897272),l=r(413554),d=r(541647);let c={title:"presets",hide_title:!1,hide_table_of_contents:!1,keywords:["presets","mediaconvert","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},m,u={},h=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function p(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Creates, updates, deletes, gets or lists a ",(0,i.jsx)("code",{children:"presets"})," resource."]}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Name"})}),(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"presets"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Type"})}),(0,i.jsx)("td",{children:"Resource"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("b",{children:"Id"})}),(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"aws.mediaconvert.presets"})})]})]})}),"\n",(0,i.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(t.p,{children:["The following fields are returned by ",(0,i.jsx)(t.code,{children:"SELECT"})," queries:"]}),"\n",(0,i.jsxs)(l.A,{defaultValue:"get_preset",values:[{label:"get_preset",value:"get_preset"},{label:"list_presets",value:"list_presets"}],children:[(0,i.jsx)(d.A,{value:"get_preset",children:(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Datatype"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"Arn"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"An identifier for this resource that is unique within all of AWS."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"Category"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"An optional category you create to organize your presets."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"CreatedAt"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string (date-time)"})}),(0,i.jsx)("td",{children:"The timestamp in epoch seconds for preset creation."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"Description"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"An optional description you create for each preset."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"LastUpdated"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string (date-time)"})}),(0,i.jsx)("td",{children:"The timestamp in epoch seconds when the preset was last updated."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"Name"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"A name you create for each preset. Each name must be unique within your account."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"Settings"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"Settings for preset"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"Type"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"A preset can be of two types: system or custom. System or built-in preset can't be modified or deleted by the user. (SYSTEM, CUSTOM)"})]})]})]})}),(0,i.jsx)(d.A,{value:"list_presets",children:(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Datatype"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"Arn"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"An identifier for this resource that is unique within all of AWS."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"Category"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"An optional category you create to organize your presets."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"CreatedAt"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string (date-time)"})}),(0,i.jsx)("td",{children:"The timestamp in epoch seconds for preset creation."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"Description"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"An optional description you create for each preset."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"LastUpdated"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string (date-time)"})}),(0,i.jsx)("td",{children:"The timestamp in epoch seconds when the preset was last updated."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"Name"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"A name you create for each preset. Each name must be unique within your account."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"Settings"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"object"})}),(0,i.jsx)("td",{children:"Settings for preset"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"Type"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"A preset can be of two types: system or custom. System or built-in preset can't be modified or deleted by the user. (SYSTEM, CUSTOM)"})]})]})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(t.p,{children:"The following methods are available for this resource:"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Accessible by"}),(0,i.jsx)("th",{children:"Required Params"}),(0,i.jsx)("th",{children:"Optional Params"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#get_preset",children:(0,i.jsx)(o.A,{code:"get_preset"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"select"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("a",{href:"#parameter-name",children:(0,i.jsx)("code",{children:"name"})}),", ",(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})})]}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Retrieve the JSON for a specific preset."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#list_presets",children:(0,i.jsx)(o.A,{code:"list_presets"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"select"})}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("a",{href:"#parameter-category",children:(0,i.jsx)("code",{children:"category"})}),", ",(0,i.jsx)("a",{href:"#parameter-listBy",children:(0,i.jsx)("code",{children:"listBy"})}),", ",(0,i.jsx)("a",{href:"#parameter-maxResults",children:(0,i.jsx)("code",{children:"maxResults"})}),", ",(0,i.jsx)("a",{href:"#parameter-nextToken",children:(0,i.jsx)("code",{children:"nextToken"})}),", ",(0,i.jsx)("a",{href:"#parameter-order",children:(0,i.jsx)("code",{children:"order"})})]}),(0,i.jsx)("td",{children:"Retrieve a JSON array of up to twenty of your presets. This will return the presets themselves, not just a list of them. To retrieve the next twenty presets, use the nextToken string returned with the array."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#create_preset",children:(0,i.jsx)(o.A,{code:"create_preset"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"insert"})}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})})}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Create a new preset. For information about job templates see the User Guide at http:\u200B//docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#update_preset",children:(0,i.jsx)(o.A,{code:"update_preset"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"update"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("a",{href:"#parameter-name",children:(0,i.jsx)("code",{children:"name"})}),", ",(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})})]}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Modify one of your existing presets."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#delete_preset",children:(0,i.jsx)(o.A,{code:"delete_preset"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"delete"})}),(0,i.jsxs)("td",{children:[(0,i.jsx)("a",{href:"#parameter-name",children:(0,i.jsx)("code",{children:"name"})}),", ",(0,i.jsx)("a",{href:"#parameter-region",children:(0,i.jsx)("code",{children:"region"})})]}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{children:"Permanently delete a preset you have created."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.p,{children:["Parameters can be passed in the ",(0,i.jsx)(t.code,{children:"WHERE"})," clause of a query. Check the ",(0,i.jsx)(t.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Datatype"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{id:"parameter-name",children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"name"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"The name of the preset to be deleted."})]}),(0,i.jsxs)("tr",{id:"parameter-region",children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"region"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"AWS region (default: us-east-1)"})]}),(0,i.jsxs)("tr",{id:"parameter-category",children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"category"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Optionally, specify a preset category to limit responses to only presets from that category."})]}),(0,i.jsxs)("tr",{id:"parameter-listBy",children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"listBy"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Optional. When you request a list of presets, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by name."})]}),(0,i.jsxs)("tr",{id:"parameter-maxResults",children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"maxResults"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"integer"})}),(0,i.jsx)("td",{children:"Optional. Number of presets, up to twenty, that will be returned at one time"})]}),(0,i.jsxs)("tr",{id:"parameter-nextToken",children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"nextToken"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Use this string, provided with the response to a previous request, to request the next batch of presets."})]}),(0,i.jsxs)("tr",{id:"parameter-order",children:[(0,i.jsx)("td",{children:(0,i.jsx)(o.A,{code:"order"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"string"})}),(0,i.jsx)("td",{children:"Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource."})]})]})]}),"\n",(0,i.jsxs)(t.h2,{id:"select-examples",children:[(0,i.jsx)(t.code,{children:"SELECT"})," examples"]}),"\n",(0,i.jsxs)(l.A,{defaultValue:"get_preset",values:[{label:"get_preset",value:"get_preset"},{label:"list_presets",value:"list_presets"}],children:[(0,i.jsxs)(d.A,{value:"get_preset",children:[(0,i.jsx)(t.p,{children:"Retrieve the JSON for a specific preset."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"SELECT\nArn,\nCategory,\nCreatedAt,\nDescription,\nLastUpdated,\nName,\nSettings,\nType\nFROM aws.mediaconvert.presets\nWHERE name = '{{ name }}' -- required\nAND region = '{{ region }}' -- required\n;\n"})})]}),(0,i.jsxs)(d.A,{value:"list_presets",children:[(0,i.jsx)(t.p,{children:"Retrieve a JSON array of up to twenty of your presets. This will return the presets themselves, not just a list of them. To retrieve the next twenty presets, use the nextToken string returned with the array."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"SELECT\nArn,\nCategory,\nCreatedAt,\nDescription,\nLastUpdated,\nName,\nSettings,\nType\nFROM aws.mediaconvert.presets\nWHERE region = '{{ region }}' -- required\nAND category = '{{ category }}'\nAND listBy = '{{ listBy }}'\nAND maxResults = '{{ maxResults }}'\nAND nextToken = '{{ nextToken }}'\nAND order = '{{ order }}'\n;\n"})})]})]}),"\n",(0,i.jsxs)(t.h2,{id:"insert-examples",children:[(0,i.jsx)(t.code,{children:"INSERT"})," examples"]}),"\n",(0,i.jsxs)(l.A,{defaultValue:"create_preset",values:[{label:"create_preset",value:"create_preset"},{label:"Manifest",value:"manifest"}],children:[(0,i.jsxs)(d.A,{value:"create_preset",children:[(0,i.jsxs)(t.p,{children:["Create a new preset. For information about job templates see the User Guide at ",(0,i.jsx)(t.a,{href:"http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html",children:"http://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html"})]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"INSERT INTO aws.mediaconvert.presets (\nCategory,\nDescription,\nName,\nSettings,\nTags,\nregion\n)\nSELECT \n'{{ Category }}',\n'{{ Description }}',\n'{{ Name }}',\n'{{ Settings }}',\n'{{ Tags }}',\n'{{ region }}'\nRETURNING\nPreset\n;\n"})})]}),(0,i.jsx)(d.A,{value:"manifest",children:(0,i.jsx)(s.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: presets
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the presets resource.
  - name: Category
    value: "{{ Category }}"
  - name: Description
    value: "{{ Description }}"
  - name: Name
    value: "{{ Name }}"
  - name: Settings
    description: |
      Settings for preset
    value:
      AudioDescriptions:
        - AudioChannelTaggingSettings:
            ChannelTag: "{{ ChannelTag }}"
            ChannelTags:
              - "{{ ChannelTags }}"
          AudioNormalizationSettings:
            Algorithm: "{{ Algorithm }}"
            AlgorithmControl: "{{ AlgorithmControl }}"
            CorrectionGateLevel: {{ CorrectionGateLevel }}
            LoudnessLogging: "{{ LoudnessLogging }}"
            PeakCalculation: "{{ PeakCalculation }}"
            TargetLkfs: {{ TargetLkfs }}
            TruePeakLimiterThreshold: {{ TruePeakLimiterThreshold }}
          AudioPitchCorrectionSettings:
            SlowPalPitchCorrection: "{{ SlowPalPitchCorrection }}"
          AudioSourceName: "{{ AudioSourceName }}"
          AudioType: {{ AudioType }}
          AudioTypeControl: "{{ AudioTypeControl }}"
          CodecSettings:
            AacSettings:
              AudioDescriptionBroadcasterMix: "{{ AudioDescriptionBroadcasterMix }}"
              Bitrate: {{ Bitrate }}
              CodecProfile: "{{ CodecProfile }}"
              CodingMode: "{{ CodingMode }}"
              LoudnessMeasurementMode: "{{ LoudnessMeasurementMode }}"
              RapInterval: {{ RapInterval }}
              RateControlMode: "{{ RateControlMode }}"
              RawFormat: "{{ RawFormat }}"
              SampleRate: {{ SampleRate }}
              Specification: "{{ Specification }}"
              TargetLoudnessRange: {{ TargetLoudnessRange }}
              VbrQuality: "{{ VbrQuality }}"
            Ac3Settings:
              Bitrate: {{ Bitrate }}
              BitstreamMode: "{{ BitstreamMode }}"
              CodingMode: "{{ CodingMode }}"
              Dialnorm: {{ Dialnorm }}
              DynamicRangeCompressionLine: "{{ DynamicRangeCompressionLine }}"
              DynamicRangeCompressionProfile: "{{ DynamicRangeCompressionProfile }}"
              DynamicRangeCompressionRf: "{{ DynamicRangeCompressionRf }}"
              LfeFilter: "{{ LfeFilter }}"
              MetadataControl: "{{ MetadataControl }}"
              SampleRate: {{ SampleRate }}
            Ac4Settings:
              Bitrate: {{ Bitrate }}
              BitstreamMode: "{{ BitstreamMode }}"
              CodingMode: "{{ CodingMode }}"
              DynamicRangeCompressionFlatPanelTv: "{{ DynamicRangeCompressionFlatPanelTv }}"
              DynamicRangeCompressionHomeTheater: "{{ DynamicRangeCompressionHomeTheater }}"
              DynamicRangeCompressionPortableHeadphones: "{{ DynamicRangeCompressionPortableHeadphones }}"
              DynamicRangeCompressionPortableSpeakers: "{{ DynamicRangeCompressionPortableSpeakers }}"
              LoRoCenterMixLevel: {{ LoRoCenterMixLevel }}
              LoRoSurroundMixLevel: {{ LoRoSurroundMixLevel }}
              LtRtCenterMixLevel: {{ LtRtCenterMixLevel }}
              LtRtSurroundMixLevel: {{ LtRtSurroundMixLevel }}
              SampleRate: {{ SampleRate }}
              StereoDownmix: "{{ StereoDownmix }}"
            AiffSettings:
              BitDepth: {{ BitDepth }}
              Channels: {{ Channels }}
              SampleRate: {{ SampleRate }}
            Codec: "{{ Codec }}"
            Eac3AtmosSettings:
              Bitrate: {{ Bitrate }}
              BitstreamMode: "{{ BitstreamMode }}"
              CodingMode: "{{ CodingMode }}"
              DialogueIntelligence: "{{ DialogueIntelligence }}"
              DownmixControl: "{{ DownmixControl }}"
              DynamicRangeCompressionLine: "{{ DynamicRangeCompressionLine }}"
              DynamicRangeCompressionRf: "{{ DynamicRangeCompressionRf }}"
              DynamicRangeControl: "{{ DynamicRangeControl }}"
              LoRoCenterMixLevel: {{ LoRoCenterMixLevel }}
              LoRoSurroundMixLevel: {{ LoRoSurroundMixLevel }}
              LtRtCenterMixLevel: {{ LtRtCenterMixLevel }}
              LtRtSurroundMixLevel: {{ LtRtSurroundMixLevel }}
              MeteringMode: "{{ MeteringMode }}"
              SampleRate: {{ SampleRate }}
              SpeechThreshold: {{ SpeechThreshold }}
              StereoDownmix: "{{ StereoDownmix }}"
              SurroundExMode: "{{ SurroundExMode }}"
            Eac3Settings:
              AttenuationControl: "{{ AttenuationControl }}"
              Bitrate: {{ Bitrate }}
              BitstreamMode: "{{ BitstreamMode }}"
              CodingMode: "{{ CodingMode }}"
              DcFilter: "{{ DcFilter }}"
              Dialnorm: {{ Dialnorm }}
              DynamicRangeCompressionLine: "{{ DynamicRangeCompressionLine }}"
              DynamicRangeCompressionRf: "{{ DynamicRangeCompressionRf }}"
              LfeControl: "{{ LfeControl }}"
              LfeFilter: "{{ LfeFilter }}"
              LoRoCenterMixLevel: {{ LoRoCenterMixLevel }}
              LoRoSurroundMixLevel: {{ LoRoSurroundMixLevel }}
              LtRtCenterMixLevel: {{ LtRtCenterMixLevel }}
              LtRtSurroundMixLevel: {{ LtRtSurroundMixLevel }}
              MetadataControl: "{{ MetadataControl }}"
              PassthroughControl: "{{ PassthroughControl }}"
              PhaseControl: "{{ PhaseControl }}"
              SampleRate: {{ SampleRate }}
              StereoDownmix: "{{ StereoDownmix }}"
              SurroundExMode: "{{ SurroundExMode }}"
              SurroundMode: "{{ SurroundMode }}"
            FlacSettings:
              BitDepth: {{ BitDepth }}
              Channels: {{ Channels }}
              SampleRate: {{ SampleRate }}
            Mp2Settings:
              AudioDescriptionMix: "{{ AudioDescriptionMix }}"
              Bitrate: {{ Bitrate }}
              Channels: {{ Channels }}
              SampleRate: {{ SampleRate }}
            Mp3Settings:
              Bitrate: {{ Bitrate }}
              Channels: {{ Channels }}
              RateControlMode: "{{ RateControlMode }}"
              SampleRate: {{ SampleRate }}
              VbrQuality: {{ VbrQuality }}
            OpusSettings:
              Bitrate: {{ Bitrate }}
              Channels: {{ Channels }}
              SampleRate: {{ SampleRate }}
            VorbisSettings:
              Channels: {{ Channels }}
              SampleRate: {{ SampleRate }}
              VbrQuality: {{ VbrQuality }}
            WavSettings:
              BitDepth: {{ BitDepth }}
              Channels: {{ Channels }}
              Format: "{{ Format }}"
              SampleRate: {{ SampleRate }}
          CustomLanguageCode: "{{ CustomLanguageCode }}"
          LanguageCode: "{{ LanguageCode }}"
          LanguageCodeControl: "{{ LanguageCodeControl }}"
          RemixSettings:
            AudioDescriptionAudioChannel: {{ AudioDescriptionAudioChannel }}
            AudioDescriptionDataChannel: {{ AudioDescriptionDataChannel }}
            ChannelMapping:
              OutputChannels:
                - InputChannels: "{{ InputChannels }}"
                  InputChannelsFineTune: "{{ InputChannelsFineTune }}"
            ChannelsIn: {{ ChannelsIn }}
            ChannelsOut: {{ ChannelsOut }}
          StreamName: "{{ StreamName }}"
      CaptionDescriptions:
        - CustomLanguageCode: "{{ CustomLanguageCode }}"
          DestinationSettings:
            BurninDestinationSettings:
              Alignment: "{{ Alignment }}"
              ApplyFontColor: "{{ ApplyFontColor }}"
              BackgroundColor: "{{ BackgroundColor }}"
              BackgroundOpacity: {{ BackgroundOpacity }}
              FallbackFont: "{{ FallbackFont }}"
              FontColor: "{{ FontColor }}"
              FontFileBold: "{{ FontFileBold }}"
              FontFileBoldItalic: "{{ FontFileBoldItalic }}"
              FontFileItalic: "{{ FontFileItalic }}"
              FontFileRegular: "{{ FontFileRegular }}"
              FontOpacity: {{ FontOpacity }}
              FontResolution: {{ FontResolution }}
              FontScript: "{{ FontScript }}"
              FontSize: {{ FontSize }}
              HexFontColor: "{{ HexFontColor }}"
              OutlineColor: "{{ OutlineColor }}"
              OutlineSize: {{ OutlineSize }}
              RemoveRubyReserveAttributes: "{{ RemoveRubyReserveAttributes }}"
              ShadowColor: "{{ ShadowColor }}"
              ShadowOpacity: {{ ShadowOpacity }}
              ShadowXOffset: {{ ShadowXOffset }}
              ShadowYOffset: {{ ShadowYOffset }}
              StylePassthrough: "{{ StylePassthrough }}"
              TeletextSpacing: "{{ TeletextSpacing }}"
              XPosition: {{ XPosition }}
              YPosition: {{ YPosition }}
            DestinationType: "{{ DestinationType }}"
            DvbSubDestinationSettings:
              Alignment: "{{ Alignment }}"
              ApplyFontColor: "{{ ApplyFontColor }}"
              BackgroundColor: "{{ BackgroundColor }}"
              BackgroundOpacity: {{ BackgroundOpacity }}
              DdsHandling: "{{ DdsHandling }}"
              DdsXCoordinate: {{ DdsXCoordinate }}
              DdsYCoordinate: {{ DdsYCoordinate }}
              FallbackFont: "{{ FallbackFont }}"
              FontColor: "{{ FontColor }}"
              FontFileBold: "{{ FontFileBold }}"
              FontFileBoldItalic: "{{ FontFileBoldItalic }}"
              FontFileItalic: "{{ FontFileItalic }}"
              FontFileRegular: "{{ FontFileRegular }}"
              FontOpacity: {{ FontOpacity }}
              FontResolution: {{ FontResolution }}
              FontScript: "{{ FontScript }}"
              FontSize: {{ FontSize }}
              Height: {{ Height }}
              HexFontColor: "{{ HexFontColor }}"
              OutlineColor: "{{ OutlineColor }}"
              OutlineSize: {{ OutlineSize }}
              ShadowColor: "{{ ShadowColor }}"
              ShadowOpacity: {{ ShadowOpacity }}
              ShadowXOffset: {{ ShadowXOffset }}
              ShadowYOffset: {{ ShadowYOffset }}
              StylePassthrough: "{{ StylePassthrough }}"
              SubtitlingType: "{{ SubtitlingType }}"
              TeletextSpacing: "{{ TeletextSpacing }}"
              Width: {{ Width }}
              XPosition: {{ XPosition }}
              YPosition: {{ YPosition }}
            EmbeddedDestinationSettings:
              Destination608ChannelNumber: {{ Destination608ChannelNumber }}
              Destination708ServiceNumber: {{ Destination708ServiceNumber }}
            ImscDestinationSettings:
              Accessibility: "{{ Accessibility }}"
              StylePassthrough: "{{ StylePassthrough }}"
            SccDestinationSettings:
              Framerate: "{{ Framerate }}"
            SrtDestinationSettings:
              StylePassthrough: "{{ StylePassthrough }}"
            TeletextDestinationSettings:
              PageNumber: "{{ PageNumber }}"
              PageTypes:
                - "{{ PageTypes }}"
            TtmlDestinationSettings:
              StylePassthrough: "{{ StylePassthrough }}"
            WebvttDestinationSettings:
              Accessibility: "{{ Accessibility }}"
              StylePassthrough: "{{ StylePassthrough }}"
          LanguageCode: "{{ LanguageCode }}"
          LanguageDescription: "{{ LanguageDescription }}"
      ContainerSettings:
        CmfcSettings:
          AudioDuration: "{{ AudioDuration }}"
          AudioGroupId: "{{ AudioGroupId }}"
          AudioRenditionSets: "{{ AudioRenditionSets }}"
          AudioTrackType: "{{ AudioTrackType }}"
          C2paManifest: "{{ C2paManifest }}"
          CertificateSecret: "{{ CertificateSecret }}"
          DescriptiveVideoServiceFlag: "{{ DescriptiveVideoServiceFlag }}"
          IFrameOnlyManifest: "{{ IFrameOnlyManifest }}"
          KlvMetadata: "{{ KlvMetadata }}"
          ManifestMetadataSignaling: "{{ ManifestMetadataSignaling }}"
          Scte35Esam: "{{ Scte35Esam }}"
          Scte35Source: "{{ Scte35Source }}"
          SigningKmsKey: "{{ SigningKmsKey }}"
          TimedMetadata: "{{ TimedMetadata }}"
          TimedMetadataBoxVersion: "{{ TimedMetadataBoxVersion }}"
          TimedMetadataSchemeIdUri: "{{ TimedMetadataSchemeIdUri }}"
          TimedMetadataValue: "{{ TimedMetadataValue }}"
        Container: "{{ Container }}"
        F4vSettings:
          MoovPlacement: "{{ MoovPlacement }}"
        M2tsSettings:
          AudioBufferModel: "{{ AudioBufferModel }}"
          AudioDuration: "{{ AudioDuration }}"
          AudioFramesPerPes: {{ AudioFramesPerPes }}
          AudioPids:
            - {{ AudioPids }}
          AudioPtsOffsetDelta: {{ AudioPtsOffsetDelta }}
          Bitrate: {{ Bitrate }}
          BufferModel: "{{ BufferModel }}"
          DataPTSControl: "{{ DataPTSControl }}"
          DvbNitSettings:
            NetworkId: {{ NetworkId }}
            NetworkName: "{{ NetworkName }}"
            NitInterval: {{ NitInterval }}
          DvbSdtSettings:
            OutputSdt: "{{ OutputSdt }}"
            SdtInterval: {{ SdtInterval }}
            ServiceName: "{{ ServiceName }}"
            ServiceProviderName: "{{ ServiceProviderName }}"
          DvbSubPids:
            - {{ DvbSubPids }}
          DvbTdtSettings:
            TdtInterval: {{ TdtInterval }}
          DvbTeletextPid: {{ DvbTeletextPid }}
          EbpAudioInterval: "{{ EbpAudioInterval }}"
          EbpPlacement: "{{ EbpPlacement }}"
          EsRateInPes: "{{ EsRateInPes }}"
          ForceTsVideoEbpOrder: "{{ ForceTsVideoEbpOrder }}"
          FragmentTime: {{ FragmentTime }}
          KlvMetadata: "{{ KlvMetadata }}"
          MaxPcrInterval: {{ MaxPcrInterval }}
          MinEbpInterval: {{ MinEbpInterval }}
          NielsenId3: "{{ NielsenId3 }}"
          NullPacketBitrate: {{ NullPacketBitrate }}
          PatInterval: {{ PatInterval }}
          PcrControl: "{{ PcrControl }}"
          PcrPid: {{ PcrPid }}
          PmtInterval: {{ PmtInterval }}
          PmtPid: {{ PmtPid }}
          PreventBufferUnderflow: "{{ PreventBufferUnderflow }}"
          PrivateMetadataPid: {{ PrivateMetadataPid }}
          ProgramNumber: {{ ProgramNumber }}
          PtsOffset: {{ PtsOffset }}
          PtsOffsetMode: "{{ PtsOffsetMode }}"
          RateMode: "{{ RateMode }}"
          Scte35Esam:
            Scte35EsamPid: {{ Scte35EsamPid }}
          Scte35Pid: {{ Scte35Pid }}
          Scte35Source: "{{ Scte35Source }}"
          SegmentationMarkers: "{{ SegmentationMarkers }}"
          SegmentationStyle: "{{ SegmentationStyle }}"
          SegmentationTime: {{ SegmentationTime }}
          TimedMetadataPid: {{ TimedMetadataPid }}
          TransportStreamId: {{ TransportStreamId }}
          VideoPid: {{ VideoPid }}
        M3u8Settings:
          AudioDuration: "{{ AudioDuration }}"
          AudioFramesPerPes: {{ AudioFramesPerPes }}
          AudioPids:
            - {{ AudioPids }}
          AudioPtsOffsetDelta: {{ AudioPtsOffsetDelta }}
          DataPTSControl: "{{ DataPTSControl }}"
          MaxPcrInterval: {{ MaxPcrInterval }}
          NielsenId3: "{{ NielsenId3 }}"
          PatInterval: {{ PatInterval }}
          PcrControl: "{{ PcrControl }}"
          PcrPid: {{ PcrPid }}
          PmtInterval: {{ PmtInterval }}
          PmtPid: {{ PmtPid }}
          PrivateMetadataPid: {{ PrivateMetadataPid }}
          ProgramNumber: {{ ProgramNumber }}
          PtsOffset: {{ PtsOffset }}
          PtsOffsetMode: "{{ PtsOffsetMode }}"
          Scte35Pid: {{ Scte35Pid }}
          Scte35Source: "{{ Scte35Source }}"
          TimedMetadata: "{{ TimedMetadata }}"
          TimedMetadataPid: {{ TimedMetadataPid }}
          TransportStreamId: {{ TransportStreamId }}
          VideoPid: {{ VideoPid }}
        MovSettings:
          ClapAtom: "{{ ClapAtom }}"
          CslgAtom: "{{ CslgAtom }}"
          Mpeg2FourCCControl: "{{ Mpeg2FourCCControl }}"
          PaddingControl: "{{ PaddingControl }}"
          Reference: "{{ Reference }}"
        Mp4Settings:
          AudioDuration: "{{ AudioDuration }}"
          C2paManifest: "{{ C2paManifest }}"
          CertificateSecret: "{{ CertificateSecret }}"
          CslgAtom: "{{ CslgAtom }}"
          CttsVersion: {{ CttsVersion }}
          FreeSpaceBox: "{{ FreeSpaceBox }}"
          MoovPlacement: "{{ MoovPlacement }}"
          Mp4MajorBrand: "{{ Mp4MajorBrand }}"
          SigningKmsKey: "{{ SigningKmsKey }}"
        MpdSettings:
          AccessibilityCaptionHints: "{{ AccessibilityCaptionHints }}"
          AudioDuration: "{{ AudioDuration }}"
          C2paManifest: "{{ C2paManifest }}"
          CaptionContainerType: "{{ CaptionContainerType }}"
          CertificateSecret: "{{ CertificateSecret }}"
          KlvMetadata: "{{ KlvMetadata }}"
          ManifestMetadataSignaling: "{{ ManifestMetadataSignaling }}"
          Scte35Esam: "{{ Scte35Esam }}"
          Scte35Source: "{{ Scte35Source }}"
          SigningKmsKey: "{{ SigningKmsKey }}"
          TimedMetadata: "{{ TimedMetadata }}"
          TimedMetadataBoxVersion: "{{ TimedMetadataBoxVersion }}"
          TimedMetadataSchemeIdUri: "{{ TimedMetadataSchemeIdUri }}"
          TimedMetadataValue: "{{ TimedMetadataValue }}"
        MxfSettings:
          AfdSignaling: "{{ AfdSignaling }}"
          Profile: "{{ Profile }}"
          UncompressedAudioWrapping: "{{ UncompressedAudioWrapping }}"
          XavcProfileSettings:
            DurationMode: "{{ DurationMode }}"
            MaxAncDataSize: {{ MaxAncDataSize }}
      VideoDescription:
        AfdSignaling: "{{ AfdSignaling }}"
        AntiAlias: "{{ AntiAlias }}"
        ChromaPositionMode: "{{ ChromaPositionMode }}"
        CodecSettings:
          Av1Settings:
            AdaptiveQuantization: "{{ AdaptiveQuantization }}"
            BitDepth: "{{ BitDepth }}"
            FilmGrainSynthesis: "{{ FilmGrainSynthesis }}"
            FramerateControl: "{{ FramerateControl }}"
            FramerateConversionAlgorithm: "{{ FramerateConversionAlgorithm }}"
            FramerateDenominator: {{ FramerateDenominator }}
            FramerateNumerator: {{ FramerateNumerator }}
            GopSize: {{ GopSize }}
            MaxBitrate: {{ MaxBitrate }}
            NumberBFramesBetweenReferenceFrames: {{ NumberBFramesBetweenReferenceFrames }}
            PerFrameMetrics:
              - "{{ PerFrameMetrics }}"
            QvbrSettings:
              QvbrQualityLevel: {{ QvbrQualityLevel }}
              QvbrQualityLevelFineTune: {{ QvbrQualityLevelFineTune }}
            RateControlMode: "{{ RateControlMode }}"
            Slices: {{ Slices }}
            SpatialAdaptiveQuantization: "{{ SpatialAdaptiveQuantization }}"
          AvcIntraSettings:
            AvcIntraClass: "{{ AvcIntraClass }}"
            AvcIntraUhdSettings:
              QualityTuningLevel: "{{ QualityTuningLevel }}"
            FramerateControl: "{{ FramerateControl }}"
            FramerateConversionAlgorithm: "{{ FramerateConversionAlgorithm }}"
            FramerateDenominator: {{ FramerateDenominator }}
            FramerateNumerator: {{ FramerateNumerator }}
            InterlaceMode: "{{ InterlaceMode }}"
            PerFrameMetrics:
              - "{{ PerFrameMetrics }}"
            ScanTypeConversionMode: "{{ ScanTypeConversionMode }}"
            SlowPal: "{{ SlowPal }}"
            Telecine: "{{ Telecine }}"
          Codec: "{{ Codec }}"
          FrameCaptureSettings:
            FramerateDenominator: {{ FramerateDenominator }}
            FramerateNumerator: {{ FramerateNumerator }}
            MaxCaptures: {{ MaxCaptures }}
            Quality: {{ Quality }}
          GifSettings:
            FramerateControl: "{{ FramerateControl }}"
            FramerateConversionAlgorithm: "{{ FramerateConversionAlgorithm }}"
            FramerateDenominator: {{ FramerateDenominator }}
            FramerateNumerator: {{ FramerateNumerator }}
          H264Settings:
            AdaptiveQuantization: "{{ AdaptiveQuantization }}"
            BandwidthReductionFilter:
              Sharpening: "{{ Sharpening }}"
              Strength: "{{ Strength }}"
            Bitrate: {{ Bitrate }}
            CodecLevel: "{{ CodecLevel }}"
            CodecProfile: "{{ CodecProfile }}"
            DynamicSubGop: "{{ DynamicSubGop }}"
            EndOfStreamMarkers: "{{ EndOfStreamMarkers }}"
            EntropyEncoding: "{{ EntropyEncoding }}"
            FieldEncoding: "{{ FieldEncoding }}"
            FlickerAdaptiveQuantization: "{{ FlickerAdaptiveQuantization }}"
            FramerateControl: "{{ FramerateControl }}"
            FramerateConversionAlgorithm: "{{ FramerateConversionAlgorithm }}"
            FramerateDenominator: {{ FramerateDenominator }}
            FramerateNumerator: {{ FramerateNumerator }}
            GopBReference: "{{ GopBReference }}"
            GopClosedCadence: {{ GopClosedCadence }}
            GopSize: {{ GopSize }}
            GopSizeUnits: "{{ GopSizeUnits }}"
            HrdBufferFinalFillPercentage: {{ HrdBufferFinalFillPercentage }}
            HrdBufferInitialFillPercentage: {{ HrdBufferInitialFillPercentage }}
            HrdBufferSize: {{ HrdBufferSize }}
            InterlaceMode: "{{ InterlaceMode }}"
            MaxBitrate: {{ MaxBitrate }}
            MinIInterval: {{ MinIInterval }}
            NumberBFramesBetweenReferenceFrames: {{ NumberBFramesBetweenReferenceFrames }}
            NumberReferenceFrames: {{ NumberReferenceFrames }}
            ParControl: "{{ ParControl }}"
            ParDenominator: {{ ParDenominator }}
            ParNumerator: {{ ParNumerator }}
            PerFrameMetrics:
              - "{{ PerFrameMetrics }}"
            QualityTuningLevel: "{{ QualityTuningLevel }}"
            QvbrSettings:
              MaxAverageBitrate: {{ MaxAverageBitrate }}
              QvbrQualityLevel: {{ QvbrQualityLevel }}
              QvbrQualityLevelFineTune: {{ QvbrQualityLevelFineTune }}
            RateControlMode: "{{ RateControlMode }}"
            RepeatPps: "{{ RepeatPps }}"
            SaliencyAwareEncoding: "{{ SaliencyAwareEncoding }}"
            ScanTypeConversionMode: "{{ ScanTypeConversionMode }}"
            SceneChangeDetect: "{{ SceneChangeDetect }}"
            Slices: {{ Slices }}
            SlowPal: "{{ SlowPal }}"
            Softness: {{ Softness }}
            SpatialAdaptiveQuantization: "{{ SpatialAdaptiveQuantization }}"
            Syntax: "{{ Syntax }}"
            Telecine: "{{ Telecine }}"
            TemporalAdaptiveQuantization: "{{ TemporalAdaptiveQuantization }}"
            UnregisteredSeiTimecode: "{{ UnregisteredSeiTimecode }}"
            WriteMp4PackagingType: "{{ WriteMp4PackagingType }}"
          H265Settings:
            AdaptiveQuantization: "{{ AdaptiveQuantization }}"
            AlternateTransferFunctionSei: "{{ AlternateTransferFunctionSei }}"
            BandwidthReductionFilter:
              Sharpening: "{{ Sharpening }}"
              Strength: "{{ Strength }}"
            Bitrate: {{ Bitrate }}
            CodecLevel: "{{ CodecLevel }}"
            CodecProfile: "{{ CodecProfile }}"
            Deblocking: "{{ Deblocking }}"
            DynamicSubGop: "{{ DynamicSubGop }}"
            EndOfStreamMarkers: "{{ EndOfStreamMarkers }}"
            FlickerAdaptiveQuantization: "{{ FlickerAdaptiveQuantization }}"
            FramerateControl: "{{ FramerateControl }}"
            FramerateConversionAlgorithm: "{{ FramerateConversionAlgorithm }}"
            FramerateDenominator: {{ FramerateDenominator }}
            FramerateNumerator: {{ FramerateNumerator }}
            GopBReference: "{{ GopBReference }}"
            GopClosedCadence: {{ GopClosedCadence }}
            GopSize: {{ GopSize }}
            GopSizeUnits: "{{ GopSizeUnits }}"
            HrdBufferFinalFillPercentage: {{ HrdBufferFinalFillPercentage }}
            HrdBufferInitialFillPercentage: {{ HrdBufferInitialFillPercentage }}
            HrdBufferSize: {{ HrdBufferSize }}
            InterlaceMode: "{{ InterlaceMode }}"
            MaxBitrate: {{ MaxBitrate }}
            MinIInterval: {{ MinIInterval }}
            MvOverPictureBoundaries: "{{ MvOverPictureBoundaries }}"
            MvTemporalPredictor: "{{ MvTemporalPredictor }}"
            NumberBFramesBetweenReferenceFrames: {{ NumberBFramesBetweenReferenceFrames }}
            NumberReferenceFrames: {{ NumberReferenceFrames }}
            ParControl: "{{ ParControl }}"
            ParDenominator: {{ ParDenominator }}
            ParNumerator: {{ ParNumerator }}
            PerFrameMetrics:
              - "{{ PerFrameMetrics }}"
            QualityTuningLevel: "{{ QualityTuningLevel }}"
            QvbrSettings:
              MaxAverageBitrate: {{ MaxAverageBitrate }}
              QvbrQualityLevel: {{ QvbrQualityLevel }}
              QvbrQualityLevelFineTune: {{ QvbrQualityLevelFineTune }}
            RateControlMode: "{{ RateControlMode }}"
            SampleAdaptiveOffsetFilterMode: "{{ SampleAdaptiveOffsetFilterMode }}"
            ScanTypeConversionMode: "{{ ScanTypeConversionMode }}"
            SceneChangeDetect: "{{ SceneChangeDetect }}"
            Slices: {{ Slices }}
            SlowPal: "{{ SlowPal }}"
            SpatialAdaptiveQuantization: "{{ SpatialAdaptiveQuantization }}"
            Telecine: "{{ Telecine }}"
            TemporalAdaptiveQuantization: "{{ TemporalAdaptiveQuantization }}"
            TemporalIds: "{{ TemporalIds }}"
            TileHeight: {{ TileHeight }}
            TilePadding: "{{ TilePadding }}"
            TileWidth: {{ TileWidth }}
            Tiles: "{{ Tiles }}"
            TreeBlockSize: "{{ TreeBlockSize }}"
            UnregisteredSeiTimecode: "{{ UnregisteredSeiTimecode }}"
            WriteMp4PackagingType: "{{ WriteMp4PackagingType }}"
          Mpeg2Settings:
            AdaptiveQuantization: "{{ AdaptiveQuantization }}"
            Bitrate: {{ Bitrate }}
            CodecLevel: "{{ CodecLevel }}"
            CodecProfile: "{{ CodecProfile }}"
            DynamicSubGop: "{{ DynamicSubGop }}"
            FramerateControl: "{{ FramerateControl }}"
            FramerateConversionAlgorithm: "{{ FramerateConversionAlgorithm }}"
            FramerateDenominator: {{ FramerateDenominator }}
            FramerateNumerator: {{ FramerateNumerator }}
            GopClosedCadence: {{ GopClosedCadence }}
            GopSize: {{ GopSize }}
            GopSizeUnits: "{{ GopSizeUnits }}"
            HrdBufferFinalFillPercentage: {{ HrdBufferFinalFillPercentage }}
            HrdBufferInitialFillPercentage: {{ HrdBufferInitialFillPercentage }}
            HrdBufferSize: {{ HrdBufferSize }}
            InterlaceMode: "{{ InterlaceMode }}"
            IntraDcPrecision: "{{ IntraDcPrecision }}"
            MaxBitrate: {{ MaxBitrate }}
            MinIInterval: {{ MinIInterval }}
            NumberBFramesBetweenReferenceFrames: {{ NumberBFramesBetweenReferenceFrames }}
            ParControl: "{{ ParControl }}"
            ParDenominator: {{ ParDenominator }}
            ParNumerator: {{ ParNumerator }}
            PerFrameMetrics:
              - "{{ PerFrameMetrics }}"
            QualityTuningLevel: "{{ QualityTuningLevel }}"
            RateControlMode: "{{ RateControlMode }}"
            ScanTypeConversionMode: "{{ ScanTypeConversionMode }}"
            SceneChangeDetect: "{{ SceneChangeDetect }}"
            SlowPal: "{{ SlowPal }}"
            Softness: {{ Softness }}
            SpatialAdaptiveQuantization: "{{ SpatialAdaptiveQuantization }}"
            Syntax: "{{ Syntax }}"
            Telecine: "{{ Telecine }}"
            TemporalAdaptiveQuantization: "{{ TemporalAdaptiveQuantization }}"
          PassthroughSettings:
            FrameControl: "{{ FrameControl }}"
            VideoSelectorMode: "{{ VideoSelectorMode }}"
          ProresSettings:
            ChromaSampling: "{{ ChromaSampling }}"
            CodecProfile: "{{ CodecProfile }}"
            FramerateControl: "{{ FramerateControl }}"
            FramerateConversionAlgorithm: "{{ FramerateConversionAlgorithm }}"
            FramerateDenominator: {{ FramerateDenominator }}
            FramerateNumerator: {{ FramerateNumerator }}
            InterlaceMode: "{{ InterlaceMode }}"
            ParControl: "{{ ParControl }}"
            ParDenominator: {{ ParDenominator }}
            ParNumerator: {{ ParNumerator }}
            PerFrameMetrics:
              - "{{ PerFrameMetrics }}"
            ScanTypeConversionMode: "{{ ScanTypeConversionMode }}"
            SlowPal: "{{ SlowPal }}"
            Telecine: "{{ Telecine }}"
          UncompressedSettings:
            Fourcc: "{{ Fourcc }}"
            FramerateControl: "{{ FramerateControl }}"
            FramerateConversionAlgorithm: "{{ FramerateConversionAlgorithm }}"
            FramerateDenominator: {{ FramerateDenominator }}
            FramerateNumerator: {{ FramerateNumerator }}
            InterlaceMode: "{{ InterlaceMode }}"
            ScanTypeConversionMode: "{{ ScanTypeConversionMode }}"
            SlowPal: "{{ SlowPal }}"
            Telecine: "{{ Telecine }}"
          Vc3Settings:
            FramerateControl: "{{ FramerateControl }}"
            FramerateConversionAlgorithm: "{{ FramerateConversionAlgorithm }}"
            FramerateDenominator: {{ FramerateDenominator }}
            FramerateNumerator: {{ FramerateNumerator }}
            InterlaceMode: "{{ InterlaceMode }}"
            ScanTypeConversionMode: "{{ ScanTypeConversionMode }}"
            SlowPal: "{{ SlowPal }}"
            Telecine: "{{ Telecine }}"
            Vc3Class: "{{ Vc3Class }}"
          Vp8Settings:
            Bitrate: {{ Bitrate }}
            FramerateControl: "{{ FramerateControl }}"
            FramerateConversionAlgorithm: "{{ FramerateConversionAlgorithm }}"
            FramerateDenominator: {{ FramerateDenominator }}
            FramerateNumerator: {{ FramerateNumerator }}
            GopSize: {{ GopSize }}
            HrdBufferSize: {{ HrdBufferSize }}
            MaxBitrate: {{ MaxBitrate }}
            ParControl: "{{ ParControl }}"
            ParDenominator: {{ ParDenominator }}
            ParNumerator: {{ ParNumerator }}
            QualityTuningLevel: "{{ QualityTuningLevel }}"
            RateControlMode: "{{ RateControlMode }}"
          Vp9Settings:
            Bitrate: {{ Bitrate }}
            FramerateControl: "{{ FramerateControl }}"
            FramerateConversionAlgorithm: "{{ FramerateConversionAlgorithm }}"
            FramerateDenominator: {{ FramerateDenominator }}
            FramerateNumerator: {{ FramerateNumerator }}
            GopSize: {{ GopSize }}
            HrdBufferSize: {{ HrdBufferSize }}
            MaxBitrate: {{ MaxBitrate }}
            ParControl: "{{ ParControl }}"
            ParDenominator: {{ ParDenominator }}
            ParNumerator: {{ ParNumerator }}
            QualityTuningLevel: "{{ QualityTuningLevel }}"
            RateControlMode: "{{ RateControlMode }}"
          XavcSettings:
            AdaptiveQuantization: "{{ AdaptiveQuantization }}"
            EntropyEncoding: "{{ EntropyEncoding }}"
            FramerateControl: "{{ FramerateControl }}"
            FramerateConversionAlgorithm: "{{ FramerateConversionAlgorithm }}"
            FramerateDenominator: {{ FramerateDenominator }}
            FramerateNumerator: {{ FramerateNumerator }}
            PerFrameMetrics:
              - "{{ PerFrameMetrics }}"
            Profile: "{{ Profile }}"
            SlowPal: "{{ SlowPal }}"
            Softness: {{ Softness }}
            SpatialAdaptiveQuantization: "{{ SpatialAdaptiveQuantization }}"
            TemporalAdaptiveQuantization: "{{ TemporalAdaptiveQuantization }}"
            Xavc4kIntraCbgProfileSettings:
              XavcClass: "{{ XavcClass }}"
            Xavc4kIntraVbrProfileSettings:
              XavcClass: "{{ XavcClass }}"
            Xavc4kProfileSettings:
              BitrateClass: "{{ BitrateClass }}"
              CodecProfile: "{{ CodecProfile }}"
              FlickerAdaptiveQuantization: "{{ FlickerAdaptiveQuantization }}"
              GopBReference: "{{ GopBReference }}"
              GopClosedCadence: {{ GopClosedCadence }}
              HrdBufferSize: {{ HrdBufferSize }}
              QualityTuningLevel: "{{ QualityTuningLevel }}"
              Slices: {{ Slices }}
            XavcHdIntraCbgProfileSettings:
              XavcClass: "{{ XavcClass }}"
            XavcHdProfileSettings:
              BitrateClass: "{{ BitrateClass }}"
              FlickerAdaptiveQuantization: "{{ FlickerAdaptiveQuantization }}"
              GopBReference: "{{ GopBReference }}"
              GopClosedCadence: {{ GopClosedCadence }}
              HrdBufferSize: {{ HrdBufferSize }}
              InterlaceMode: "{{ InterlaceMode }}"
              QualityTuningLevel: "{{ QualityTuningLevel }}"
              Slices: {{ Slices }}
              Telecine: "{{ Telecine }}"
        ColorMetadata: "{{ ColorMetadata }}"
        Crop:
          Height: {{ Height }}
          Width: {{ Width }}
          X: {{ X }}
          Y: {{ Y }}
        DropFrameTimecode: "{{ DropFrameTimecode }}"
        FixedAfd: {{ FixedAfd }}
        Height: {{ Height }}
        Position:
          Height: {{ Height }}
          Width: {{ Width }}
          X: {{ X }}
          Y: {{ Y }}
        RespondToAfd: "{{ RespondToAfd }}"
        ScalingBehavior: "{{ ScalingBehavior }}"
        Sharpness: {{ Sharpness }}
        TimecodeInsertion: "{{ TimecodeInsertion }}"
        TimecodeTrack: "{{ TimecodeTrack }}"
        VideoPreprocessors:
          ColorCorrector:
            Brightness: {{ Brightness }}
            ClipLimits:
              MaximumRGBTolerance: {{ MaximumRGBTolerance }}
              MaximumYUV: {{ MaximumYUV }}
              MinimumRGBTolerance: {{ MinimumRGBTolerance }}
              MinimumYUV: {{ MinimumYUV }}
            ColorSpaceConversion: "{{ ColorSpaceConversion }}"
            Contrast: {{ Contrast }}
            Hdr10Metadata:
              BluePrimaryX: {{ BluePrimaryX }}
              BluePrimaryY: {{ BluePrimaryY }}
              GreenPrimaryX: {{ GreenPrimaryX }}
              GreenPrimaryY: {{ GreenPrimaryY }}
              MaxContentLightLevel: {{ MaxContentLightLevel }}
              MaxFrameAverageLightLevel: {{ MaxFrameAverageLightLevel }}
              MaxLuminance: {{ MaxLuminance }}
              MinLuminance: {{ MinLuminance }}
              RedPrimaryX: {{ RedPrimaryX }}
              RedPrimaryY: {{ RedPrimaryY }}
              WhitePointX: {{ WhitePointX }}
              WhitePointY: {{ WhitePointY }}
            HdrToSdrToneMapper: "{{ HdrToSdrToneMapper }}"
            Hue: {{ Hue }}
            MaxLuminance: {{ MaxLuminance }}
            SampleRangeConversion: "{{ SampleRangeConversion }}"
            Saturation: {{ Saturation }}
            SdrReferenceWhiteLevel: {{ SdrReferenceWhiteLevel }}
          Deinterlacer:
            Algorithm: "{{ Algorithm }}"
            Control: "{{ Control }}"
            Mode: "{{ Mode }}"
          DolbyVision:
            Compatibility: "{{ Compatibility }}"
            L6Metadata:
              MaxCll: {{ MaxCll }}
              MaxFall: {{ MaxFall }}
            L6Mode: "{{ L6Mode }}"
            Mapping: "{{ Mapping }}"
            Profile: "{{ Profile }}"
          Hdr10Plus:
            MasteringMonitorNits: {{ MasteringMonitorNits }}
            TargetMonitorNits: {{ TargetMonitorNits }}
          ImageInserter:
            InsertableImages:
              - Duration: {{ Duration }}
                FadeIn: {{ FadeIn }}
                FadeOut: {{ FadeOut }}
                Height: {{ Height }}
                ImageInserterInput: "{{ ImageInserterInput }}"
                ImageX: {{ ImageX }}
                ImageY: {{ ImageY }}
                Layer: {{ Layer }}
                Opacity: {{ Opacity }}
                StartTime: "{{ StartTime }}"
                Width: {{ Width }}
            SdrReferenceWhiteLevel: {{ SdrReferenceWhiteLevel }}
          NoiseReducer:
            Filter: "{{ Filter }}"
            FilterSettings:
              Strength: {{ Strength }}
            SpatialFilterSettings:
              PostFilterSharpenStrength: {{ PostFilterSharpenStrength }}
              Speed: {{ Speed }}
              Strength: {{ Strength }}
            TemporalFilterSettings:
              AggressiveMode: {{ AggressiveMode }}
              PostTemporalSharpening: "{{ PostTemporalSharpening }}"
              PostTemporalSharpeningStrength: "{{ PostTemporalSharpeningStrength }}"
              Speed: {{ Speed }}
              Strength: {{ Strength }}
          PartnerWatermarking:
            NexguardFileMarkerSettings:
              License: "{{ License }}"
              Payload: {{ Payload }}
              Preset: "{{ Preset }}"
              Strength: "{{ Strength }}"
          TimecodeBurnin:
            FontSize: {{ FontSize }}
            Position: "{{ Position }}"
            Prefix: "{{ Prefix }}"
        Width: {{ Width }}
  - name: Tags
    value: "{{ Tags }}"
`})})]}),"\n",(0,i.jsxs)(t.h2,{id:"update-examples",children:[(0,i.jsx)(t.code,{children:"UPDATE"})," examples"]}),"\n",(0,i.jsx)(l.A,{defaultValue:"update_preset",values:[{label:"update_preset",value:"update_preset"}],children:(0,i.jsxs)(d.A,{value:"update_preset",children:[(0,i.jsx)(t.p,{children:"Modify one of your existing presets."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"UPDATE aws.mediaconvert.presets\nSET \nCategory = '{{ Category }}',\nDescription = '{{ Description }}',\nSettings = '{{ Settings }}'\nWHERE \nname = '{{ name }}' --required\nAND region = '{{ region }}' --required\nRETURNING\nPreset;\n"})})]})}),"\n",(0,i.jsxs)(t.h2,{id:"delete-examples",children:[(0,i.jsx)(t.code,{children:"DELETE"})," examples"]}),"\n",(0,i.jsx)(l.A,{defaultValue:"delete_preset",values:[{label:"delete_preset",value:"delete_preset"}],children:(0,i.jsxs)(d.A,{value:"delete_preset",children:[(0,i.jsx)(t.p,{children:"Permanently delete a preset you have created."}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:"DELETE FROM aws.mediaconvert.presets\nWHERE name = '{{ name }}' --required\nAND region = '{{ region }}' --required\n;\n"})})]})})]})}function g(e={}){let{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}}}]);