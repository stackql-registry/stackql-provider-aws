"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["739229"],{784876(e,i,n){n.r(i),n.d(i,{metadata:()=>s,default:()=>m,frontMatter:()=>c,contentTitle:()=>h,toc:()=>g,assets:()=>u});var s=JSON.parse('{"id":"services/chime_sdk_media_pipelines/media_insights_pipeline_configurations/index","title":"media_insights_pipeline_configurations","description":"Query, deploy and manage aws resources using SQL","source":"@site/docs/services/chime_sdk_media_pipelines/media_insights_pipeline_configurations/index.md","sourceDirName":"services/chime_sdk_media_pipelines/media_insights_pipeline_configurations","slug":"/services/chime_sdk_media_pipelines/media_insights_pipeline_configurations/","permalink":"/services/chime_sdk_media_pipelines/media_insights_pipeline_configurations/","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"title":"media_insights_pipeline_configurations","hide_title":false,"hide_table_of_contents":false,"keywords":["media_insights_pipeline_configurations","chime_sdk_media_pipelines","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],"description":"Query, deploy and manage aws resources using SQL","custom_edit_url":null,"image":"/img/stackql-aws-provider-featured-image.png"},"sidebar":"mainSidebar","previous":{"title":"media_concatenation_pipelines","permalink":"/services/chime_sdk_media_pipelines/media_concatenation_pipelines/"},"next":{"title":"media_insights_pipeline_status","permalink":"/services/chime_sdk_media_pipelines/media_insights_pipeline_status/"}}'),t=n(474848),a=n(28453),r=n(97362),d=n(897272),l=n(413554),o=n(541647);let c={title:"media_insights_pipeline_configurations",hide_title:!1,hide_table_of_contents:!1,keywords:["media_insights_pipeline_configurations","chime_sdk_media_pipelines","aws","infrastructure-as-code","configuration-as-data","cloud inventory"],description:"Query, deploy and manage aws resources using SQL",custom_edit_url:null,image:"/img/stackql-aws-provider-featured-image.png"},h,u={},g=[{value:"Overview",id:"overview",level:2},{value:"Fields",id:"fields",level:2},{value:"Methods",id:"methods",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>SELECT</code> examples",id:"select-examples",level:2},{value:"<code>INSERT</code> examples",id:"insert-examples",level:2},{value:"<code>UPDATE</code> examples",id:"update-examples",level:2},{value:"<code>DELETE</code> examples",id:"delete-examples",level:2}];function p(e){let i={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:["Creates, updates, deletes, gets or lists a ",(0,t.jsx)("code",{children:"media_insights_pipeline_configurations"})," resource."]}),"\n",(0,t.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)("table",{children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Name"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"media_insights_pipeline_configurations"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Type"})}),(0,t.jsx)("td",{children:"Resource"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("b",{children:"Id"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"aws.chime_sdk_media_pipelines.media_insights_pipeline_configurations"})})]})]})}),"\n",(0,t.jsx)(i.h2,{id:"fields",children:"Fields"}),"\n",(0,t.jsxs)(i.p,{children:["The following fields are returned by ",(0,t.jsx)(i.code,{children:"SELECT"})," queries:"]}),"\n",(0,t.jsxs)(l.A,{defaultValue:"get_media_insights_pipeline_configuration",values:[{label:"get_media_insights_pipeline_configuration",value:"get_media_insights_pipeline_configuration"},{label:"list_media_insights_pipeline_configurations",value:"list_media_insights_pipeline_configurations"}],children:[(0,t.jsx)(o.A,{value:"get_media_insights_pipeline_configuration",children:(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Datatype"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"CreatedTimestamp"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string (date-time)"})}),(0,t.jsx)("td",{children:"The time at which the configuration was created."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"Elements"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"array"})}),(0,t.jsx)("td",{children:"The elements in the configuration."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"MediaInsightsPipelineConfigurationArn"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"The ARN of the configuration. (pattern: <code>^arn[/:-_.a-zA-Z0-9]+$</code>)"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"MediaInsightsPipelineConfigurationId"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"The ID of the configuration. (pattern: <code>[a-fA-F0-9]{8}(?:-[a-fA-F0-9]{4}){3}-[a-fA-F0-9]{12}</code>)"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"MediaInsightsPipelineConfigurationName"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"The name of the configuration. (pattern: <code>^[0-9a-zA-Z._-]+</code>)"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"RealTimeAlertConfiguration"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"object"})}),(0,t.jsx)("td",{children:"A structure that contains the configuration settings for real-time alerts."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"ResourceAccessRoleArn"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"The ARN of the role used by the service to access Amazon Web Services resources. (pattern: <code>^arn[/:-_.a-zA-Z0-9]+$</code>)"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"UpdatedTimestamp"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string (date-time)"})}),(0,t.jsx)("td",{children:"The time at which the configuration was last updated."})]})]})]})}),(0,t.jsx)(o.A,{value:"list_media_insights_pipeline_configurations",children:(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Datatype"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"MediaInsightsPipelineConfigurations"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"array"})}),(0,t.jsx)("td",{children:"The requested list of media insights pipeline configurations."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"NextToken"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"The token used to return the next page of results. (pattern: <code>.*</code>)"})]})]})]})})]}),"\n",(0,t.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(i.p,{children:"The following methods are available for this resource:"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Accessible by"}),(0,t.jsx)("th",{children:"Required Params"}),(0,t.jsx)("th",{children:"Optional Params"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#get_media_insights_pipeline_configuration",children:(0,t.jsx)(r.A,{code:"get_media_insights_pipeline_configuration"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"select"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("a",{href:"#parameter-identifier",children:(0,t.jsx)("code",{children:"identifier"})}),", ",(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})})]}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"Gets the configuration settings for a media insights pipeline."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#list_media_insights_pipeline_configurations",children:(0,t.jsx)(r.A,{code:"list_media_insights_pipeline_configurations"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"select"})}),(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("a",{href:"#parameter-next-token",children:(0,t.jsx)("code",{children:"next-token"})}),", ",(0,t.jsx)("a",{href:"#parameter-max-results",children:(0,t.jsx)("code",{children:"max-results"})})]}),(0,t.jsx)("td",{children:"Lists the available media insights pipeline configurations."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#create_media_insights_pipeline_configuration",children:(0,t.jsx)(r.A,{code:"create_media_insights_pipeline_configuration"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"insert"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})}),", ",(0,t.jsx)("a",{href:"#parameter-MediaInsightsPipelineConfigurationName",children:(0,t.jsx)("code",{children:"MediaInsightsPipelineConfigurationName"})}),", ",(0,t.jsx)("a",{href:"#parameter-ResourceAccessRoleArn",children:(0,t.jsx)("code",{children:"ResourceAccessRoleArn"})}),", ",(0,t.jsx)("a",{href:"#parameter-Elements",children:(0,t.jsx)("code",{children:"Elements"})})]}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"A structure that contains the static configurations for a media insights pipeline."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#create_media_insights_pipeline",children:(0,t.jsx)(r.A,{code:"create_media_insights_pipeline"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"insert"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})}),", ",(0,t.jsx)("a",{href:"#parameter-MediaInsightsPipelineConfigurationArn",children:(0,t.jsx)("code",{children:"MediaInsightsPipelineConfigurationArn"})})]}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"Creates a media insights pipeline."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#update_media_insights_pipeline_configuration",children:(0,t.jsx)(r.A,{code:"update_media_insights_pipeline_configuration"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"update"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("a",{href:"#parameter-identifier",children:(0,t.jsx)("code",{children:"identifier"})}),", ",(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})}),", ",(0,t.jsx)("a",{href:"#parameter-ResourceAccessRoleArn",children:(0,t.jsx)("code",{children:"ResourceAccessRoleArn"})}),", ",(0,t.jsx)("a",{href:"#parameter-Elements",children:(0,t.jsx)("code",{children:"Elements"})})]}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"Updates the media insights pipeline's configuration settings."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("a",{href:"#delete_media_insights_pipeline_configuration",children:(0,t.jsx)(r.A,{code:"delete_media_insights_pipeline_configuration"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"delete"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)("a",{href:"#parameter-identifier",children:(0,t.jsx)("code",{children:"identifier"})}),", ",(0,t.jsx)("a",{href:"#parameter-region",children:(0,t.jsx)("code",{children:"region"})})]}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:"Deletes the specified configuration settings."})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(i.p,{children:["Parameters can be passed in the ",(0,t.jsx)(i.code,{children:"WHERE"})," clause of a query. Check the ",(0,t.jsx)(i.a,{href:"#methods",children:"Methods"})," section to see which parameters are required or optional for each operation."]}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Datatype"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{id:"parameter-identifier",children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"identifier"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"The unique identifier of the resource to be deleted. Valid values include the name and ARN of the media insights pipeline configuration."})]}),(0,t.jsxs)("tr",{id:"parameter-region",children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"region"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"AWS region (default: us-east-1)"})]}),(0,t.jsxs)("tr",{id:"parameter-max-results",children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"max-results"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"integer"})}),(0,t.jsx)("td",{children:"The maximum number of results to return in a single call."})]}),(0,t.jsxs)("tr",{id:"parameter-next-token",children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.A,{code:"next-token"})}),(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"string"})}),(0,t.jsx)("td",{children:"The token used to return the next page of results."})]})]})]}),"\n",(0,t.jsxs)(i.h2,{id:"select-examples",children:[(0,t.jsx)(i.code,{children:"SELECT"})," examples"]}),"\n",(0,t.jsxs)(l.A,{defaultValue:"get_media_insights_pipeline_configuration",values:[{label:"get_media_insights_pipeline_configuration",value:"get_media_insights_pipeline_configuration"},{label:"list_media_insights_pipeline_configurations",value:"list_media_insights_pipeline_configurations"}],children:[(0,t.jsxs)(o.A,{value:"get_media_insights_pipeline_configuration",children:[(0,t.jsx)(i.p,{children:"Gets the configuration settings for a media insights pipeline."}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sql",children:"SELECT\nCreatedTimestamp,\nElements,\nMediaInsightsPipelineConfigurationArn,\nMediaInsightsPipelineConfigurationId,\nMediaInsightsPipelineConfigurationName,\nRealTimeAlertConfiguration,\nResourceAccessRoleArn,\nUpdatedTimestamp\nFROM aws.chime_sdk_media_pipelines.media_insights_pipeline_configurations\nWHERE identifier = '{{ identifier }}' -- required\nAND region = '{{ region }}' -- required\n;\n"})})]}),(0,t.jsxs)(o.A,{value:"list_media_insights_pipeline_configurations",children:[(0,t.jsx)(i.p,{children:"Lists the available media insights pipeline configurations."}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sql",children:"SELECT\nMediaInsightsPipelineConfigurations,\nNextToken\nFROM aws.chime_sdk_media_pipelines.media_insights_pipeline_configurations\nWHERE region = '{{ region }}' -- required\nAND `next-token` = '{{ next-token }}'\nAND `max-results` = '{{ max-results }}'\n;\n"})})]})]}),"\n",(0,t.jsxs)(i.h2,{id:"insert-examples",children:[(0,t.jsx)(i.code,{children:"INSERT"})," examples"]}),"\n",(0,t.jsxs)(l.A,{defaultValue:"create_media_insights_pipeline_configuration",values:[{label:"create_media_insights_pipeline_configuration",value:"create_media_insights_pipeline_configuration"},{label:"create_media_insights_pipeline",value:"create_media_insights_pipeline"},{label:"Manifest",value:"manifest"}],children:[(0,t.jsxs)(o.A,{value:"create_media_insights_pipeline_configuration",children:[(0,t.jsx)(i.p,{children:"A structure that contains the static configurations for a media insights pipeline."}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sql",children:"INSERT INTO aws.chime_sdk_media_pipelines.media_insights_pipeline_configurations (\nMediaInsightsPipelineConfigurationName,\nResourceAccessRoleArn,\nRealTimeAlertConfiguration,\nElements,\nTags,\nClientRequestToken,\nregion\n)\nSELECT \n'{{ MediaInsightsPipelineConfigurationName }}' /* required */,\n'{{ ResourceAccessRoleArn }}' /* required */,\n'{{ RealTimeAlertConfiguration }}',\n'{{ Elements }}' /* required */,\n'{{ Tags }}',\n'{{ ClientRequestToken }}',\n'{{ region }}'\nRETURNING\nMediaInsightsPipelineConfiguration\n;\n"})})]}),(0,t.jsxs)(o.A,{value:"create_media_insights_pipeline",children:[(0,t.jsx)(i.p,{children:"Creates a media insights pipeline."}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sql",children:"INSERT INTO aws.chime_sdk_media_pipelines.media_insights_pipeline_configurations (\nMediaInsightsPipelineConfigurationArn,\nKinesisVideoStreamSourceRuntimeConfiguration,\nMediaInsightsRuntimeMetadata,\nKinesisVideoStreamRecordingSourceRuntimeConfiguration,\nS3RecordingSinkRuntimeConfiguration,\nTags,\nClientRequestToken,\nregion\n)\nSELECT \n'{{ MediaInsightsPipelineConfigurationArn }}' /* required */,\n'{{ KinesisVideoStreamSourceRuntimeConfiguration }}',\n'{{ MediaInsightsRuntimeMetadata }}',\n'{{ KinesisVideoStreamRecordingSourceRuntimeConfiguration }}',\n'{{ S3RecordingSinkRuntimeConfiguration }}',\n'{{ Tags }}',\n'{{ ClientRequestToken }}',\n'{{ region }}'\nRETURNING\nMediaInsightsPipeline\n;\n"})})]}),(0,t.jsx)(o.A,{value:"manifest",children:(0,t.jsx)(d.A,{language:"yaml",children:`# Description fields are for documentation purposes
- name: media_insights_pipeline_configurations
props:
  - name: region
    value: "{{ region }}"
    description: Required parameter for the media_insights_pipeline_configurations resource.
  - name: MediaInsightsPipelineConfigurationName
    value: "{{ MediaInsightsPipelineConfigurationName }}"
  - name: ResourceAccessRoleArn
    value: "{{ ResourceAccessRoleArn }}"
  - name: RealTimeAlertConfiguration
    description: |
      A structure that contains the configuration settings for real-time alerts.
    value:
      Disabled: {{ Disabled }}
      Rules:
        - Type: "{{ Type }}"
          KeywordMatchConfiguration:
            RuleName: "{{ RuleName }}"
            Keywords:
              - "{{ Keywords }}"
            Negate: {{ Negate }}
          SentimentConfiguration:
            RuleName: "{{ RuleName }}"
            SentimentType: "{{ SentimentType }}"
            TimePeriod: {{ TimePeriod }}
          IssueDetectionConfiguration:
            RuleName: "{{ RuleName }}"
  - name: Elements
    value:
      - Type: "{{ Type }}"
        AmazonTranscribeCallAnalyticsProcessorConfiguration:
          LanguageCode: "{{ LanguageCode }}"
          VocabularyName: "{{ VocabularyName }}"
          VocabularyFilterName: "{{ VocabularyFilterName }}"
          VocabularyFilterMethod: "{{ VocabularyFilterMethod }}"
          LanguageModelName: "{{ LanguageModelName }}"
          EnablePartialResultsStabilization: {{ EnablePartialResultsStabilization }}
          PartialResultsStability: "{{ PartialResultsStability }}"
          ContentIdentificationType: "{{ ContentIdentificationType }}"
          ContentRedactionType: "{{ ContentRedactionType }}"
          PiiEntityTypes: "{{ PiiEntityTypes }}"
          FilterPartialResults: {{ FilterPartialResults }}
          PostCallAnalyticsSettings:
            OutputLocation: "{{ OutputLocation }}"
            DataAccessRoleArn: "{{ DataAccessRoleArn }}"
            ContentRedactionOutput: "{{ ContentRedactionOutput }}"
            OutputEncryptionKMSKeyId: "{{ OutputEncryptionKMSKeyId }}"
          CallAnalyticsStreamCategories:
            - "{{ CallAnalyticsStreamCategories }}"
        AmazonTranscribeProcessorConfiguration:
          LanguageCode: "{{ LanguageCode }}"
          VocabularyName: "{{ VocabularyName }}"
          VocabularyFilterName: "{{ VocabularyFilterName }}"
          VocabularyFilterMethod: "{{ VocabularyFilterMethod }}"
          ShowSpeakerLabel: {{ ShowSpeakerLabel }}
          EnablePartialResultsStabilization: {{ EnablePartialResultsStabilization }}
          PartialResultsStability: "{{ PartialResultsStability }}"
          ContentIdentificationType: "{{ ContentIdentificationType }}"
          ContentRedactionType: "{{ ContentRedactionType }}"
          PiiEntityTypes: "{{ PiiEntityTypes }}"
          LanguageModelName: "{{ LanguageModelName }}"
          FilterPartialResults: {{ FilterPartialResults }}
          IdentifyLanguage: {{ IdentifyLanguage }}
          IdentifyMultipleLanguages: {{ IdentifyMultipleLanguages }}
          LanguageOptions: "{{ LanguageOptions }}"
          PreferredLanguage: "{{ PreferredLanguage }}"
          VocabularyNames: "{{ VocabularyNames }}"
          VocabularyFilterNames: "{{ VocabularyFilterNames }}"
        KinesisDataStreamSinkConfiguration:
          InsightsTarget: "{{ InsightsTarget }}"
        S3RecordingSinkConfiguration:
          Destination: "{{ Destination }}"
          RecordingFileFormat: "{{ RecordingFileFormat }}"
        VoiceAnalyticsProcessorConfiguration:
          SpeakerSearchStatus: "{{ SpeakerSearchStatus }}"
          VoiceToneAnalysisStatus: "{{ VoiceToneAnalysisStatus }}"
        LambdaFunctionSinkConfiguration:
          InsightsTarget: "{{ InsightsTarget }}"
        SqsQueueSinkConfiguration:
          InsightsTarget: "{{ InsightsTarget }}"
        SnsTopicSinkConfiguration:
          InsightsTarget: "{{ InsightsTarget }}"
        VoiceEnhancementSinkConfiguration:
          Disabled: {{ Disabled }}
  - name: Tags
    value:
      - Key: "{{ Key }}"
        Value: "{{ Value }}"
  - name: ClientRequestToken
    value: "{{ ClientRequestToken }}"
  - name: MediaInsightsPipelineConfigurationArn
    value: "{{ MediaInsightsPipelineConfigurationArn }}"
  - name: KinesisVideoStreamSourceRuntimeConfiguration
    description: |
      The runtime configuration settings for the Kinesis video stream source.
    value:
      Streams:
        - StreamArn: "{{ StreamArn }}"
          FragmentNumber: "{{ FragmentNumber }}"
          StreamChannelDefinition:
            NumberOfChannels: {{ NumberOfChannels }}
            ChannelDefinitions:
              - ChannelId: {{ ChannelId }}
                ParticipantRole: "{{ ParticipantRole }}"
      MediaEncoding: "{{ MediaEncoding }}"
      MediaSampleRate: {{ MediaSampleRate }}
  - name: MediaInsightsRuntimeMetadata
    value: "{{ MediaInsightsRuntimeMetadata }}"
  - name: KinesisVideoStreamRecordingSourceRuntimeConfiguration
    description: |
      A structure that contains the runtime settings for recording a Kinesis video stream.
    value:
      Streams:
        - StreamArn: "{{ StreamArn }}"
      FragmentSelector:
        FragmentSelectorType: "{{ FragmentSelectorType }}"
        TimestampRange:
          StartTimestamp: "{{ StartTimestamp }}"
          EndTimestamp: "{{ EndTimestamp }}"
  - name: S3RecordingSinkRuntimeConfiguration
    description: |
      A structure that holds the settings for transmitting media files to the Amazon S3 bucket. If specified, the settings in this structure override any settings in S3RecordingSinkConfiguration.
    value:
      Destination: "{{ Destination }}"
      RecordingFileFormat: "{{ RecordingFileFormat }}"
`})})]}),"\n",(0,t.jsxs)(i.h2,{id:"update-examples",children:[(0,t.jsx)(i.code,{children:"UPDATE"})," examples"]}),"\n",(0,t.jsx)(l.A,{defaultValue:"update_media_insights_pipeline_configuration",values:[{label:"update_media_insights_pipeline_configuration",value:"update_media_insights_pipeline_configuration"}],children:(0,t.jsxs)(o.A,{value:"update_media_insights_pipeline_configuration",children:[(0,t.jsx)(i.p,{children:"Updates the media insights pipeline's configuration settings."}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sql",children:"UPDATE aws.chime_sdk_media_pipelines.media_insights_pipeline_configurations\nSET \nResourceAccessRoleArn = '{{ ResourceAccessRoleArn }}',\nRealTimeAlertConfiguration = '{{ RealTimeAlertConfiguration }}',\nElements = '{{ Elements }}'\nWHERE \nidentifier = '{{ identifier }}' --required\nAND region = '{{ region }}' --required\nAND ResourceAccessRoleArn = '{{ ResourceAccessRoleArn }}' --required\nAND Elements = '{{ Elements }}' --required\nRETURNING\nMediaInsightsPipelineConfiguration;\n"})})]})}),"\n",(0,t.jsxs)(i.h2,{id:"delete-examples",children:[(0,t.jsx)(i.code,{children:"DELETE"})," examples"]}),"\n",(0,t.jsx)(l.A,{defaultValue:"delete_media_insights_pipeline_configuration",values:[{label:"delete_media_insights_pipeline_configuration",value:"delete_media_insights_pipeline_configuration"}],children:(0,t.jsxs)(o.A,{value:"delete_media_insights_pipeline_configuration",children:[(0,t.jsx)(i.p,{children:"Deletes the specified configuration settings."}),(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-sql",children:"DELETE FROM aws.chime_sdk_media_pipelines.media_insights_pipeline_configurations\nWHERE identifier = '{{ identifier }}' --required\nAND region = '{{ region }}' --required\n;\n"})})]})})]})}function m(e={}){let{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}}}]);