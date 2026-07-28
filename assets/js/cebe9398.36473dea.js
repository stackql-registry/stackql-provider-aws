"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["901184"],{671794(e,n,i){i.r(n),i.d(n,{metadata:()=>a,default:()=>u,frontMatter:()=>l,contentTitle:()=>g,toc:()=>x,assets:()=>h});var a=JSON.parse('{"id":"services/mediapackage_vod/packaging_configurations/index","title":"packaging_configurations","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/mediapackage_vod/packaging_configurations/index.md","sourceDirName":"services/mediapackage_vod/packaging_configurations","slug":"/services/mediapackage_vod/packaging_configurations/","permalink":"/services/mediapackage_vod/packaging_configurations/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"packaging_configurations","hide_title":false,"hide_table_of_contents":false,"keywords":["packaging_configurations","mediapackage_vod","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"assets","permalink":"/services/mediapackage_vod/assets/"},"next":{"title":"packaging_groups","permalink":"/services/mediapackage_vod/packaging_groups/"}}'),r=i(474848),s=i(28453),d=i(97362),c=i(897272),t=i(413554),o=i(541647);let l={title:"packaging_configurations",hide_title:!1,hide_table_of_contents:!1,keywords:["packaging_configurations","mediapackage_vod","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},g,h={},x=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function j(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Creates, updates, deletes, gets or lists a ",(0,r.jsx)("code",{children:"packaging_configurations"})," resource."]}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Name"})}),(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"packaging_configurations"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Type"})}),(0,r.jsx)("td",{children:"Resource"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("b",{children:"Id"})}),(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"aws.mediapackage_vod.packaging_configurations"})})]})]})}),"\n",(0,r.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsxs)(n.p,{children:["The following fields are returned by ",(0,r.jsx)(n.code,{children:"SELECT"})," queries:"]}),"\n",(0,r.jsxs)(t.A,{defaultValue:"describe_packaging_configuration",values:[{label:"describe_packaging_configuration",value:"describe_packaging_configuration"},{label:"list_packaging_configurations",value:"list_packaging_configurations"}],children:[(0,r.jsx)(o.A,{value:"describe_packaging_configuration",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"Arn"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The ARN of the PackagingConfiguration."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"CmafPackage"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"A CMAF packaging configuration."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"CreatedAt"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The time the PackagingConfiguration was created."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"DashPackage"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"HlsPackage"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"An HTTP Live Streaming (HLS) packaging configuration."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"Id"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The ID of the PackagingConfiguration."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"MssPackage"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"A Microsoft Smooth Streaming (MSS) PackagingConfiguration."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"PackagingGroupId"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The ID of a PackagingGroup."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"Tags"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{})]})]})]})}),(0,r.jsx)(o.A,{value:"list_packaging_configurations",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"Arn"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The ARN of the PackagingConfiguration."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"CmafPackage"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"A CMAF packaging configuration."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"CreatedAt"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The time the PackagingConfiguration was created."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"DashPackage"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"HlsPackage"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"An HTTP Live Streaming (HLS) packaging configuration."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"Id"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The ID of the PackagingConfiguration."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"MssPackage"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{children:"A Microsoft Smooth Streaming (MSS) PackagingConfiguration."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"PackagingGroupId"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The ID of a PackagingGroup."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"Tags"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"object"})}),(0,r.jsx)("td",{})]})]})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.p,{children:"The following methods are available for this resource:"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Accessible by"}),(0,r.jsx)("th",{children:"Required Params"}),(0,r.jsx)("th",{children:"Optional Params"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#describe_packaging_configuration",children:(0,r.jsx)(d.A,{code:"describe_packaging_configuration"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"select"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-id",children:(0,r.jsx)("code",{children:"id"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Returns a description of a MediaPackage VOD PackagingConfiguration resource."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#list_packaging_configurations",children:(0,r.jsx)(d.A,{code:"list_packaging_configurations"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"select"})}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-maxResults",children:(0,r.jsx)("code",{children:"maxResults"})}),", ",(0,r.jsx)("a",{href:"#parameter-nextToken",children:(0,r.jsx)("code",{children:"nextToken"})}),", ",(0,r.jsx)("a",{href:"#parameter-packagingGroupId",children:(0,r.jsx)("code",{children:"packagingGroupId"})})]}),(0,r.jsx)("td",{children:"Returns a collection of MediaPackage VOD PackagingConfiguration resources."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#create_packaging_configuration",children:(0,r.jsx)(d.A,{code:"create_packaging_configuration"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"insert"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})}),", ",(0,r.jsx)("a",{href:"#parameter-PackagingGroupId",children:(0,r.jsx)("code",{children:"PackagingGroupId"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Creates a new MediaPackage VOD PackagingConfiguration resource."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"#delete_packaging_configuration",children:(0,r.jsx)(d.A,{code:"delete_packaging_configuration"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"delete"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)("a",{href:"#parameter-id",children:(0,r.jsx)("code",{children:"id"})}),", ",(0,r.jsx)("a",{href:"#parameter-region",children:(0,r.jsx)("code",{children:"region"})})]}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:"Deletes a MediaPackage VOD PackagingConfiguration resource."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.p,{children:["Parameters can be passed in the ",(0,r.jsx)(n.code,{children:"WHERE"})," clause of a query. Check the ",(0,r.jsx)(n.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Datatype"}),(0,r.jsx)("th",{children:"Description"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{id:"parameter-id",children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"id"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"The ID of the MediaPackage VOD PackagingConfiguration resource to delete."})]}),(0,r.jsxs)("tr",{id:"parameter-region",children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"region"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"AWS region (default: us-east-1)"})]}),(0,r.jsxs)("tr",{id:"parameter-maxResults",children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"maxResults"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"integer"})}),(0,r.jsx)("td",{children:"Upper bound on number of records to return."})]}),(0,r.jsxs)("tr",{id:"parameter-nextToken",children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"nextToken"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"A token used to resume pagination from the end of a previous request."})]}),(0,r.jsxs)("tr",{id:"parameter-packagingGroupId",children:[(0,r.jsx)("td",{children:(0,r.jsx)(d.A,{code:"packagingGroupId"})}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"string"})}),(0,r.jsx)("td",{children:"Returns MediaPackage VOD PackagingConfigurations associated with the specified PackagingGroup."})]})]})]}),"\n",(0,r.jsxs)(n.h2,{id:"select-examples",children:[(0,r.jsx)(n.code,{children:"SELECT"})," examples"]}),"\n",(0,r.jsxs)(t.A,{defaultValue:"describe_packaging_configuration",values:[{label:"describe_packaging_configuration",value:"describe_packaging_configuration"},{label:"list_packaging_configurations",value:"list_packaging_configurations"}],children:[(0,r.jsxs)(o.A,{value:"describe_packaging_configuration",children:[(0,r.jsx)(n.p,{children:"Returns a description of a MediaPackage VOD PackagingConfiguration resource."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT\nArn,\nCmafPackage,\nCreatedAt,\nDashPackage,\nHlsPackage,\nId,\nMssPackage,\nPackagingGroupId,\nTags\nFROM aws.mediapackage_vod.packaging_configurations\nWHERE id = '{{ id }}' -- required\nAND region = '{{ region }}' -- required\n;\n"})})]}),(0,r.jsxs)(o.A,{value:"list_packaging_configurations",children:[(0,r.jsx)(n.p,{children:"Returns a collection of MediaPackage VOD PackagingConfiguration resources."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT\nArn,\nCmafPackage,\nCreatedAt,\nDashPackage,\nHlsPackage,\nId,\nMssPackage,\nPackagingGroupId,\nTags\nFROM aws.mediapackage_vod.packaging_configurations\nWHERE region = '{{ region }}' -- required\nAND maxResults = '{{ maxResults }}'\nAND nextToken = '{{ nextToken }}'\nAND packagingGroupId = '{{ packagingGroupId }}'\n;\n"})})]})]}),"\n",(0,r.jsxs)(n.h2,{id:"insert-examples",children:[(0,r.jsx)(n.code,{children:"INSERT"})," examples"]}),"\n",(0,r.jsxs)(t.A,{defaultValue:"create_packaging_configuration",values:[{label:"create_packaging_configuration",value:"create_packaging_configuration"},{label:"Manifest",value:"manifest"}],children:[(0,r.jsxs)(o.A,{value:"create_packaging_configuration",children:[(0,r.jsx)(n.p,{children:"Creates a new MediaPackage VOD PackagingConfiguration resource."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"INSERT INTO aws.mediapackage_vod.packaging_configurations (\nCmafPackage,\nDashPackage,\nHlsPackage,\nId,\nMssPackage,\nPackagingGroupId,\nTags,\nregion\n)\nSELECT \n'{{ CmafPackage }}',\n'{{ DashPackage }}',\n'{{ HlsPackage }}',\n'{{ Id }}',\n'{{ MssPackage }}',\n'{{ PackagingGroupId }}' /* required */,\n'{{ Tags }}',\n'{{ region }}'\nRETURNING\nArn,\nCmafPackage,\nCreatedAt,\nDashPackage,\nHlsPackage,\nId,\nMssPackage,\nPackagingGroupId,\nTags\n;\n"})})]}),(0,r.jsx)(o.A,{value:"manifest",children:(0,r.jsx)(c.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: packaging_configurations
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the packaging_configurations resource.
  - name: CmafPackage
    description: |
      A CMAF packaging configuration.
    value:
      Encryption:
        ConstantInitializationVector: "{{ ConstantInitializationVector }}"
        SpekeKeyProvider:
          EncryptionContractConfiguration:
            PresetSpeke20Audio: "{{ PresetSpeke20Audio }}"
            PresetSpeke20Video: "{{ PresetSpeke20Video }}"
          RoleArn: "{{ RoleArn }}"
          SystemIds:
            - "{{ SystemIds }}"
          Url: "{{ Url }}"
      HlsManifests:
        - AdMarkers: "{{ AdMarkers }}"
          IncludeIframeOnlyStream: {{ IncludeIframeOnlyStream }}
          ManifestName: "{{ ManifestName }}"
          ProgramDateTimeIntervalSeconds: {{ ProgramDateTimeIntervalSeconds }}
          RepeatExtXKey: {{ RepeatExtXKey }}
          StreamSelection:
            MaxVideoBitsPerSecond: {{ MaxVideoBitsPerSecond }}
            MinVideoBitsPerSecond: {{ MinVideoBitsPerSecond }}
            StreamOrder: "{{ StreamOrder }}"
      IncludeEncoderConfigurationInSegments: {{ IncludeEncoderConfigurationInSegments }}
      SegmentDurationSeconds: {{ SegmentDurationSeconds }}
  - name: DashPackage
    description: |
      A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.
    value:
      DashManifests:
        - ManifestLayout: "{{ ManifestLayout }}"
          ManifestName: "{{ ManifestName }}"
          MinBufferTimeSeconds: {{ MinBufferTimeSeconds }}
          Profile: "{{ Profile }}"
          ScteMarkersSource: "{{ ScteMarkersSource }}"
          StreamSelection:
            MaxVideoBitsPerSecond: {{ MaxVideoBitsPerSecond }}
            MinVideoBitsPerSecond: {{ MinVideoBitsPerSecond }}
            StreamOrder: "{{ StreamOrder }}"
      Encryption:
        SpekeKeyProvider:
          EncryptionContractConfiguration:
            PresetSpeke20Audio: "{{ PresetSpeke20Audio }}"
            PresetSpeke20Video: "{{ PresetSpeke20Video }}"
          RoleArn: "{{ RoleArn }}"
          SystemIds:
            - "{{ SystemIds }}"
          Url: "{{ Url }}"
      IncludeEncoderConfigurationInSegments: {{ IncludeEncoderConfigurationInSegments }}
      IncludeIframeOnlyStream: {{ IncludeIframeOnlyStream }}
      PeriodTriggers:
        - "{{ PeriodTriggers }}"
      SegmentDurationSeconds: {{ SegmentDurationSeconds }}
      SegmentTemplateFormat: "{{ SegmentTemplateFormat }}"
  - name: HlsPackage
    description: |
      An HTTP Live Streaming (HLS) packaging configuration.
    value:
      Encryption:
        ConstantInitializationVector: "{{ ConstantInitializationVector }}"
        EncryptionMethod: "{{ EncryptionMethod }}"
        SpekeKeyProvider:
          EncryptionContractConfiguration:
            PresetSpeke20Audio: "{{ PresetSpeke20Audio }}"
            PresetSpeke20Video: "{{ PresetSpeke20Video }}"
          RoleArn: "{{ RoleArn }}"
          SystemIds:
            - "{{ SystemIds }}"
          Url: "{{ Url }}"
      HlsManifests:
        - AdMarkers: "{{ AdMarkers }}"
          IncludeIframeOnlyStream: {{ IncludeIframeOnlyStream }}
          ManifestName: "{{ ManifestName }}"
          ProgramDateTimeIntervalSeconds: {{ ProgramDateTimeIntervalSeconds }}
          RepeatExtXKey: {{ RepeatExtXKey }}
          StreamSelection:
            MaxVideoBitsPerSecond: {{ MaxVideoBitsPerSecond }}
            MinVideoBitsPerSecond: {{ MinVideoBitsPerSecond }}
            StreamOrder: "{{ StreamOrder }}"
      IncludeDvbSubtitles: {{ IncludeDvbSubtitles }}
      SegmentDurationSeconds: {{ SegmentDurationSeconds }}
      UseAudioRenditionGroup: {{ UseAudioRenditionGroup }}
  - name: Id
    value: "{{ Id }}"
  - name: MssPackage
    description: |
      A Microsoft Smooth Streaming (MSS) PackagingConfiguration.
    value:
      Encryption:
        SpekeKeyProvider:
          EncryptionContractConfiguration:
            PresetSpeke20Audio: "{{ PresetSpeke20Audio }}"
            PresetSpeke20Video: "{{ PresetSpeke20Video }}"
          RoleArn: "{{ RoleArn }}"
          SystemIds:
            - "{{ SystemIds }}"
          Url: "{{ Url }}"
      MssManifests:
        - ManifestName: "{{ ManifestName }}"
          StreamSelection:
            MaxVideoBitsPerSecond: {{ MaxVideoBitsPerSecond }}
            MinVideoBitsPerSecond: {{ MinVideoBitsPerSecond }}
            StreamOrder: "{{ StreamOrder }}"
      SegmentDurationSeconds: {{ SegmentDurationSeconds }}
  - name: PackagingGroupId
    value: "{{ PackagingGroupId }}"
  - name: Tags
    value: "{{ Tags }}"
    description: |
      A collection of tags associated with a resource
`})})]}),"\n",(0,r.jsxs)(n.h2,{id:"delete-examples",children:[(0,r.jsx)(n.code,{children:"DELETE"})," examples"]}),"\n",(0,r.jsx)(t.A,{defaultValue:"delete_packaging_configuration",values:[{label:"delete_packaging_configuration",value:"delete_packaging_configuration"}],children:(0,r.jsxs)(o.A,{value:"delete_packaging_configuration",children:[(0,r.jsx)(n.p,{children:"Deletes a MediaPackage VOD PackagingConfiguration resource."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"DELETE FROM aws.mediapackage_vod.packaging_configurations\nWHERE id = '{{ id }}' --required\nAND region = '{{ region }}' --required\n;\n"})})]})})]})}function u(e={}){let{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}}}]);