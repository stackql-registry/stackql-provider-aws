--- 
title: media_insights_pipeline_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - media_insights_pipeline_configurations
  - chime_sdk_media_pipelines
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>media_insights_pipeline_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="media_insights_pipeline_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_media_pipelines.media_insights_pipeline_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_media_insights_pipeline_configuration"
    values={[
        { label: 'get_media_insights_pipeline_configuration', value: 'get_media_insights_pipeline_configuration' },
        { label: 'list_media_insights_pipeline_configurations', value: 'list_media_insights_pipeline_configurations' }
    ]}
>
<TabItem value="get_media_insights_pipeline_configuration">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="elements" /></td>
    <td><code>array</code></td>
    <td>The elements in the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="media_insights_pipeline_configuration_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the configuration. (pattern: &lt;code&gt;^arn&#91;\/\:\-\_\.a-zA-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="media_insights_pipeline_configuration_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the configuration. (pattern: &lt;code&gt;&#91;a-fA-F0-9&#93;&#123;8&#125;(?:-&#91;a-fA-F0-9&#93;&#123;4&#125;)&#123;3&#125;-&#91;a-fA-F0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="media_insights_pipeline_configuration_name" /></td>
    <td><code>string</code></td>
    <td>The name of the configuration. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z._-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="real_time_alert_configuration" /></td>
    <td><code>object</code></td>
    <td>A structure that contains the configuration settings for real-time alerts.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_access_role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the role used by the service to access Amazon Web Services resources. (pattern: &lt;code&gt;^arn&#91;\/\:\-\_\.a-zA-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the configuration was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_media_insights_pipeline_configurations">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="media_insights_pipeline_configurations" /></td>
    <td><code>array</code></td>
    <td>The requested list of media insights pipeline configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token used to return the next page of results. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get_media_insights_pipeline_configuration"><CopyableCode code="get_media_insights_pipeline_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the configuration settings for a media insights pipeline.</td>
</tr>
<tr>
    <td><a href="#list_media_insights_pipeline_configurations"><CopyableCode code="list_media_insights_pipeline_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists the available media insights pipeline configurations.</td>
</tr>
<tr>
    <td><a href="#create_media_insights_pipeline_configuration"><CopyableCode code="create_media_insights_pipeline_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MediaInsightsPipelineConfigurationName"><code>MediaInsightsPipelineConfigurationName</code></a>, <a href="#parameter-ResourceAccessRoleArn"><code>ResourceAccessRoleArn</code></a>, <a href="#parameter-Elements"><code>Elements</code></a></td>
    <td></td>
    <td>A structure that contains the static configurations for a media insights pipeline.</td>
</tr>
<tr>
    <td><a href="#create_media_insights_pipeline"><CopyableCode code="create_media_insights_pipeline" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MediaInsightsPipelineConfigurationArn"><code>MediaInsightsPipelineConfigurationArn</code></a></td>
    <td></td>
    <td>Creates a media insights pipeline.</td>
</tr>
<tr>
    <td><a href="#update_media_insights_pipeline_configuration"><CopyableCode code="update_media_insights_pipeline_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceAccessRoleArn"><code>ResourceAccessRoleArn</code></a>, <a href="#parameter-Elements"><code>Elements</code></a></td>
    <td></td>
    <td>Updates the media insights pipeline's configuration settings.</td>
</tr>
<tr>
    <td><a href="#delete_media_insights_pipeline_configuration"><CopyableCode code="delete_media_insights_pipeline_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified configuration settings.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the resource to be deleted. Valid values include the name and ARN of the media insights pipeline configuration.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token used to return the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_media_insights_pipeline_configuration"
    values={[
        { label: 'get_media_insights_pipeline_configuration', value: 'get_media_insights_pipeline_configuration' },
        { label: 'list_media_insights_pipeline_configurations', value: 'list_media_insights_pipeline_configurations' }
    ]}
>
<TabItem value="get_media_insights_pipeline_configuration">

Gets the configuration settings for a media insights pipeline.

```sql
SELECT
created_timestamp,
elements,
media_insights_pipeline_configuration_arn,
media_insights_pipeline_configuration_id,
media_insights_pipeline_configuration_name,
real_time_alert_configuration,
resource_access_role_arn,
updated_timestamp
FROM aws.chime_sdk_media_pipelines.media_insights_pipeline_configurations
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_media_insights_pipeline_configurations">

Lists the available media insights pipeline configurations.

```sql
SELECT
media_insights_pipeline_configurations,
next_token
FROM aws.chime_sdk_media_pipelines.media_insights_pipeline_configurations
WHERE region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_media_insights_pipeline_configuration"
    values={[
        { label: 'create_media_insights_pipeline_configuration', value: 'create_media_insights_pipeline_configuration' },
        { label: 'create_media_insights_pipeline', value: 'create_media_insights_pipeline' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_media_insights_pipeline_configuration">

A structure that contains the static configurations for a media insights pipeline.

```sql
INSERT INTO aws.chime_sdk_media_pipelines.media_insights_pipeline_configurations (
MediaInsightsPipelineConfigurationName,
ResourceAccessRoleArn,
RealTimeAlertConfiguration,
Elements,
Tags,
ClientRequestToken,
region
)
SELECT 
'{{ MediaInsightsPipelineConfigurationName }}' /* required */,
'{{ ResourceAccessRoleArn }}' /* required */,
'{{ RealTimeAlertConfiguration }}',
'{{ Elements }}' /* required */,
'{{ Tags }}',
'{{ ClientRequestToken }}',
'{{ region }}'
RETURNING
media_insights_pipeline_configuration
;
```
</TabItem>
<TabItem value="create_media_insights_pipeline">

Creates a media insights pipeline.

```sql
INSERT INTO aws.chime_sdk_media_pipelines.media_insights_pipeline_configurations (
MediaInsightsPipelineConfigurationArn,
KinesisVideoStreamSourceRuntimeConfiguration,
MediaInsightsRuntimeMetadata,
KinesisVideoStreamRecordingSourceRuntimeConfiguration,
S3RecordingSinkRuntimeConfiguration,
Tags,
ClientRequestToken,
region
)
SELECT 
'{{ MediaInsightsPipelineConfigurationArn }}' /* required */,
'{{ KinesisVideoStreamSourceRuntimeConfiguration }}',
'{{ MediaInsightsRuntimeMetadata }}',
'{{ KinesisVideoStreamRecordingSourceRuntimeConfiguration }}',
'{{ S3RecordingSinkRuntimeConfiguration }}',
'{{ Tags }}',
'{{ ClientRequestToken }}',
'{{ region }}'
RETURNING
media_insights_pipeline
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
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
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_media_insights_pipeline_configuration"
    values={[
        { label: 'update_media_insights_pipeline_configuration', value: 'update_media_insights_pipeline_configuration' }
    ]}
>
<TabItem value="update_media_insights_pipeline_configuration">

Updates the media insights pipeline's configuration settings.

```sql
UPDATE aws.chime_sdk_media_pipelines.media_insights_pipeline_configurations
SET 
ResourceAccessRoleArn = '{{ ResourceAccessRoleArn }}',
RealTimeAlertConfiguration = '{{ RealTimeAlertConfiguration }}',
Elements = '{{ Elements }}'
WHERE 
identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
AND ResourceAccessRoleArn = '{{ ResourceAccessRoleArn }}' --required
AND Elements = '{{ Elements }}' --required
RETURNING
media_insights_pipeline_configuration;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_media_insights_pipeline_configuration"
    values={[
        { label: 'delete_media_insights_pipeline_configuration', value: 'delete_media_insights_pipeline_configuration' }
    ]}
>
<TabItem value="delete_media_insights_pipeline_configuration">

Deletes the specified configuration settings.

```sql
DELETE FROM aws.chime_sdk_media_pipelines.media_insights_pipeline_configurations
WHERE identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
