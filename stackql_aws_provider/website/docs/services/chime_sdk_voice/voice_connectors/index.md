--- 
title: voice_connectors
hide_title: false
hide_table_of_contents: false
keywords:
  - voice_connectors
  - chime_sdk_voice
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

Creates, updates, deletes, gets or lists a <code>voice_connectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="voice_connectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_voice.voice_connectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_voice_connector"
    values={[
        { label: 'get_voice_connector', value: 'get_voice_connector' },
        { label: 'list_voice_connectors', value: 'list_voice_connectors' }
    ]}
>
<TabItem value="get_voice_connector">

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
    <td><CopyableCode code="AwsRegion" /></td>
    <td><code>string</code></td>
    <td>The AWS Region in which the Voice Connector is created. Default: us-east-1. (us-east-1, us-west-2, ca-central-1, eu-central-1, eu-west-1, eu-west-2, ap-northeast-2, ap-northeast-1, ap-southeast-1, ap-southeast-2)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Voice Connector's creation timestamp, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="IntegrationType" /></td>
    <td><code>string</code></td>
    <td>The connectors for use with Amazon Connect. (CONNECT_CALL_TRANSFER_CONNECTOR, CONNECT_ANALYTICS_CONNECTOR)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The Voice Connector's name. (pattern: &lt;code&gt;&#91;a-zA-Z0-9 _.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkType" /></td>
    <td><code>string</code></td>
    <td>The type of network of the Voice Connector. Either IPv4 only or dual-stack (IPv4 and IPv6). (IPV4_ONLY, DUAL_STACK)</td>
</tr>
<tr>
    <td><CopyableCode code="OutboundHostName" /></td>
    <td><code>string</code></td>
    <td>The outbound host name for the Voice Connector.</td>
</tr>
<tr>
    <td><CopyableCode code="RequireEncryption" /></td>
    <td><code>boolean</code></td>
    <td>Enables or disables encryption for the Voice Connector.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Voice Connector's updated timestamp, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="VoiceConnectorArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Voice Connector. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="VoiceConnectorId" /></td>
    <td><code>string</code></td>
    <td>The Voice Connector's ID. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_voice_connectors">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token used to return the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="VoiceConnectors" /></td>
    <td><code>array</code></td>
    <td>The details of the Voice Connectors.</td>
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
    <td><a href="#get_voice_connector"><CopyableCode code="get_voice_connector" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-voice_connector_id"><code>voice_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details for the specified Amazon Chime SDK Voice Connector, such as timestamps,name, outbound host, and encryption requirements.</td>
</tr>
<tr>
    <td><a href="#list_voice_connectors"><CopyableCode code="list_voice_connectors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists the Amazon Chime SDK Voice Connectors in the administrators AWS account.</td>
</tr>
<tr>
    <td><a href="#create_voice_connector"><CopyableCode code="create_voice_connector" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-RequireEncryption"><code>RequireEncryption</code></a></td>
    <td></td>
    <td>Creates an Amazon Chime SDK Voice Connector. For more information about Voice Connectors, see Managing Amazon Chime SDK Voice Connector groups in the Amazon Chime SDK Administrator Guide.</td>
</tr>
<tr>
    <td><a href="#update_voice_connector"><CopyableCode code="update_voice_connector" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-voice_connector_id"><code>voice_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-RequireEncryption"><code>RequireEncryption</code></a></td>
    <td></td>
    <td>Updates the details for the specified Amazon Chime SDK Voice Connector.</td>
</tr>
<tr>
    <td><a href="#associate_phone_numbers_with_voice_connector"><CopyableCode code="associate_phone_numbers_with_voice_connector" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-voice_connector_id"><code>voice_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-E164PhoneNumbers"><code>E164PhoneNumbers</code></a></td>
    <td></td>
    <td>Associates phone numbers with the specified Amazon Chime SDK Voice Connector.</td>
</tr>
<tr>
    <td><a href="#delete_voice_connector"><CopyableCode code="delete_voice_connector" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-voice_connector_id"><code>voice_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Chime SDK Voice Connector. Any phone numbers associated with the Amazon Chime SDK Voice Connector must be disassociated from it before it can be deleted.</td>
</tr>
<tr>
    <td><a href="#disassociate_phone_numbers_from_voice_connector"><CopyableCode code="disassociate_phone_numbers_from_voice_connector" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-voice_connector_id"><code>voice_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-E164PhoneNumbers"><code>E164PhoneNumbers</code></a></td>
    <td></td>
    <td>Disassociates the specified phone numbers from the specified Amazon Chime SDK Voice Connector.</td>
</tr>
<tr>
    <td><a href="#start_speaker_search_task"><CopyableCode code="start_speaker_search_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-voice_connector_id"><code>voice_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TransactionId"><code>TransactionId</code></a>, <a href="#parameter-VoiceProfileDomainId"><code>VoiceProfileDomainId</code></a></td>
    <td></td>
    <td>Starts a speaker search task. Before starting any speaker search tasks, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the AWS service terms for the Amazon Chime SDK.</td>
</tr>
<tr>
    <td><a href="#start_voice_tone_analysis_task"><CopyableCode code="start_voice_tone_analysis_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-voice_connector_id"><code>voice_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TransactionId"><code>TransactionId</code></a>, <a href="#parameter-LanguageCode"><code>LanguageCode</code></a></td>
    <td></td>
    <td>Starts a voice tone analysis task. For more information about voice tone analysis, see Using Amazon Chime SDK voice analytics in the Amazon Chime SDK Developer Guide. Before starting any voice tone analysis tasks, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the AWS service terms for the Amazon Chime SDK.</td>
</tr>
<tr>
    <td><a href="#stop_speaker_search_task"><CopyableCode code="stop_speaker_search_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-voice_connector_id"><code>voice_connector_id</code></a>, <a href="#parameter-speaker_search_task_id"><code>speaker_search_task_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops a speaker search task.</td>
</tr>
<tr>
    <td><a href="#stop_voice_tone_analysis_task"><CopyableCode code="stop_voice_tone_analysis_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-voice_connector_id"><code>voice_connector_id</code></a>, <a href="#parameter-voice_tone_analysis_task_id"><code>voice_tone_analysis_task_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops a voice tone analysis task.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-speaker_search_task_id">
    <td><CopyableCode code="speaker_search_task_id" /></td>
    <td><code>string</code></td>
    <td>The speaker search task ID.</td>
</tr>
<tr id="parameter-voice_connector_id">
    <td><CopyableCode code="voice_connector_id" /></td>
    <td><code>string</code></td>
    <td>The Voice Connector ID.</td>
</tr>
<tr id="parameter-voice_tone_analysis_task_id">
    <td><CopyableCode code="voice_tone_analysis_task_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the voice tone analysis task.</td>
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
    defaultValue="get_voice_connector"
    values={[
        { label: 'get_voice_connector', value: 'get_voice_connector' },
        { label: 'list_voice_connectors', value: 'list_voice_connectors' }
    ]}
>
<TabItem value="get_voice_connector">

Retrieves details for the specified Amazon Chime SDK Voice Connector, such as timestamps,name, outbound host, and encryption requirements.

```sql
SELECT
AwsRegion,
CreatedTimestamp,
IntegrationType,
Name,
NetworkType,
OutboundHostName,
RequireEncryption,
UpdatedTimestamp,
VoiceConnectorArn,
VoiceConnectorId
FROM aws.chime_sdk_voice.voice_connectors
WHERE voice_connector_id = '{{ voice_connector_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_voice_connectors">

Lists the Amazon Chime SDK Voice Connectors in the administrators AWS account.

```sql
SELECT
NextToken,
VoiceConnectors
FROM aws.chime_sdk_voice.voice_connectors
WHERE region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_voice_connector"
    values={[
        { label: 'create_voice_connector', value: 'create_voice_connector' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_voice_connector">

Creates an Amazon Chime SDK Voice Connector. For more information about Voice Connectors, see Managing Amazon Chime SDK Voice Connector groups in the Amazon Chime SDK Administrator Guide.

```sql
INSERT INTO aws.chime_sdk_voice.voice_connectors (
Name,
AwsRegion,
RequireEncryption,
Tags,
IntegrationType,
NetworkType,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ AwsRegion }}',
{{ RequireEncryption }} /* required */,
'{{ Tags }}',
'{{ IntegrationType }}',
'{{ NetworkType }}',
'{{ region }}'
RETURNING
VoiceConnector
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: voice_connectors
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the voice_connectors resource.
    - name: Name
      value: "{{ Name }}"
    - name: AwsRegion
      value: "{{ AwsRegion }}"
      valid_values: ['us-east-1', 'us-west-2', 'ca-central-1', 'eu-central-1', 'eu-west-1', 'eu-west-2', 'ap-northeast-2', 'ap-northeast-1', 'ap-southeast-1', 'ap-southeast-2']
    - name: RequireEncryption
      value: {{ RequireEncryption }}
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: IntegrationType
      value: "{{ IntegrationType }}"
      valid_values: ['CONNECT_CALL_TRANSFER_CONNECTOR', 'CONNECT_ANALYTICS_CONNECTOR']
    - name: NetworkType
      value: "{{ NetworkType }}"
      valid_values: ['IPV4_ONLY', 'DUAL_STACK']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_voice_connector"
    values={[
        { label: 'update_voice_connector', value: 'update_voice_connector' },
        { label: 'associate_phone_numbers_with_voice_connector', value: 'associate_phone_numbers_with_voice_connector' }
    ]}
>
<TabItem value="update_voice_connector">

Updates the details for the specified Amazon Chime SDK Voice Connector.

```sql
UPDATE aws.chime_sdk_voice.voice_connectors
SET 
Name = '{{ Name }}',
RequireEncryption = {{ RequireEncryption }}
WHERE 
voice_connector_id = '{{ voice_connector_id }}' --required
AND region = '{{ region }}' --required
AND Name = '{{ Name }}' --required
AND RequireEncryption = {{ RequireEncryption }} --required
RETURNING
VoiceConnector;
```
</TabItem>
<TabItem value="associate_phone_numbers_with_voice_connector">

Associates phone numbers with the specified Amazon Chime SDK Voice Connector.

```sql
UPDATE aws.chime_sdk_voice.voice_connectors
SET 
E164PhoneNumbers = '{{ E164PhoneNumbers }}',
ForceAssociate = {{ ForceAssociate }}
WHERE 
voice_connector_id = '{{ voice_connector_id }}' --required
AND region = '{{ region }}' --required
AND E164PhoneNumbers = '{{ E164PhoneNumbers }}' --required
RETURNING
PhoneNumberErrors;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_voice_connector"
    values={[
        { label: 'delete_voice_connector', value: 'delete_voice_connector' }
    ]}
>
<TabItem value="delete_voice_connector">

Deletes an Amazon Chime SDK Voice Connector. Any phone numbers associated with the Amazon Chime SDK Voice Connector must be disassociated from it before it can be deleted.

```sql
DELETE FROM aws.chime_sdk_voice.voice_connectors
WHERE voice_connector_id = '{{ voice_connector_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_phone_numbers_from_voice_connector"
    values={[
        { label: 'disassociate_phone_numbers_from_voice_connector', value: 'disassociate_phone_numbers_from_voice_connector' },
        { label: 'start_speaker_search_task', value: 'start_speaker_search_task' },
        { label: 'start_voice_tone_analysis_task', value: 'start_voice_tone_analysis_task' },
        { label: 'stop_speaker_search_task', value: 'stop_speaker_search_task' },
        { label: 'stop_voice_tone_analysis_task', value: 'stop_voice_tone_analysis_task' }
    ]}
>
<TabItem value="disassociate_phone_numbers_from_voice_connector">

Disassociates the specified phone numbers from the specified Amazon Chime SDK Voice Connector.

```sql
EXEC aws.chime_sdk_voice.voice_connectors.disassociate_phone_numbers_from_voice_connector 
@voice_connector_id='{{ voice_connector_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"E164PhoneNumbers": "{{ E164PhoneNumbers }}"
}'
;
```
</TabItem>
<TabItem value="start_speaker_search_task">

Starts a speaker search task. Before starting any speaker search tasks, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the AWS service terms for the Amazon Chime SDK.

```sql
EXEC aws.chime_sdk_voice.voice_connectors.start_speaker_search_task 
@voice_connector_id='{{ voice_connector_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"TransactionId": "{{ TransactionId }}", 
"VoiceProfileDomainId": "{{ VoiceProfileDomainId }}", 
"ClientRequestToken": "{{ ClientRequestToken }}", 
"CallLeg": "{{ CallLeg }}"
}'
;
```
</TabItem>
<TabItem value="start_voice_tone_analysis_task">

Starts a voice tone analysis task. For more information about voice tone analysis, see Using Amazon Chime SDK voice analytics in the Amazon Chime SDK Developer Guide. Before starting any voice tone analysis tasks, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the AWS service terms for the Amazon Chime SDK.

```sql
EXEC aws.chime_sdk_voice.voice_connectors.start_voice_tone_analysis_task 
@voice_connector_id='{{ voice_connector_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"TransactionId": "{{ TransactionId }}", 
"LanguageCode": "{{ LanguageCode }}", 
"ClientRequestToken": "{{ ClientRequestToken }}"
}'
;
```
</TabItem>
<TabItem value="stop_speaker_search_task">

Stops a speaker search task.

```sql
EXEC aws.chime_sdk_voice.voice_connectors.stop_speaker_search_task 
@voice_connector_id='{{ voice_connector_id }}' --required, 
@speaker_search_task_id='{{ speaker_search_task_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="stop_voice_tone_analysis_task">

Stops a voice tone analysis task.

```sql
EXEC aws.chime_sdk_voice.voice_connectors.stop_voice_tone_analysis_task 
@voice_connector_id='{{ voice_connector_id }}' --required, 
@voice_tone_analysis_task_id='{{ voice_tone_analysis_task_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
