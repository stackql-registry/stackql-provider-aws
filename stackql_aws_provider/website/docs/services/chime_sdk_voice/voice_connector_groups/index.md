--- 
title: voice_connector_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - voice_connector_groups
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

Creates, updates, deletes, gets or lists a <code>voice_connector_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="voice_connector_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_voice.voice_connector_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_voice_connector_group"
    values={[
        { label: 'get_voice_connector_group', value: 'get_voice_connector_group' },
        { label: 'list_voice_connector_groups', value: 'list_voice_connector_groups' }
    ]}
>
<TabItem value="get_voice_connector_group">

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
    <td><CopyableCode code="call_distribution_type" /></td>
    <td><code>string</code></td>
    <td> (PriorityWeightedDistribution, LoadBalancedDistribution)</td>
</tr>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Voice Connector group's creation time stamp, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of a Voice Connector group. (pattern: &lt;code&gt;&#91;a-zA-Z0-9 _.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Voice Connector group's creation time stamp, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="voice_connector_group_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Voice Connector group. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="voice_connector_group_id" /></td>
    <td><code>string</code></td>
    <td>The ID of a Voice Connector group. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="voice_connector_items" /></td>
    <td><code>array</code></td>
    <td>The Voice Connectors to which you route inbound calls.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_voice_connector_groups">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token used to return the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="voice_connector_groups" /></td>
    <td><code>array</code></td>
    <td>The details of the Voice Connector groups.</td>
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
    <td><a href="#get_voice_connector_group"><CopyableCode code="get_voice_connector_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-voice_connector_group_id"><code>voice_connector_group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details for the specified Amazon Chime SDK Voice Connector group, such as timestamps,name, and associated VoiceConnectorItems.</td>
</tr>
<tr>
    <td><a href="#list_voice_connector_groups"><CopyableCode code="list_voice_connector_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists the Amazon Chime SDK Voice Connector groups in the administrator's AWS account.</td>
</tr>
<tr>
    <td><a href="#create_voice_connector_group"><CopyableCode code="create_voice_connector_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a></td>
    <td></td>
    <td>Creates an Amazon Chime SDK Voice Connector group under the administrator's AWS account. You can associate Amazon Chime SDK Voice Connectors with the Voice Connector group by including VoiceConnectorItems in the request. You can include Voice Connectors from different AWS Regions in your group. This creates a fault tolerant mechanism for fallback in case of availability events.</td>
</tr>
<tr>
    <td><a href="#update_voice_connector_group"><CopyableCode code="update_voice_connector_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-voice_connector_group_id"><code>voice_connector_group_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-VoiceConnectorItems"><code>VoiceConnectorItems</code></a></td>
    <td></td>
    <td>Updates the settings for the specified Amazon Chime SDK Voice Connector group.</td>
</tr>
<tr>
    <td><a href="#associate_phone_numbers_with_voice_connector_group"><CopyableCode code="associate_phone_numbers_with_voice_connector_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-voice_connector_group_id"><code>voice_connector_group_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-E164PhoneNumbers"><code>E164PhoneNumbers</code></a></td>
    <td></td>
    <td>Associates phone numbers with the specified Amazon Chime SDK Voice Connector group.</td>
</tr>
<tr>
    <td><a href="#delete_voice_connector_group"><CopyableCode code="delete_voice_connector_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-voice_connector_group_id"><code>voice_connector_group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Chime SDK Voice Connector group. Any VoiceConnectorItems and phone numbers associated with the group must be removed before it can be deleted.</td>
</tr>
<tr>
    <td><a href="#disassociate_phone_numbers_from_voice_connector_group"><CopyableCode code="disassociate_phone_numbers_from_voice_connector_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-voice_connector_group_id"><code>voice_connector_group_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-E164PhoneNumbers"><code>E164PhoneNumbers</code></a></td>
    <td></td>
    <td>Disassociates the specified phone numbers from the specified Amazon Chime SDK Voice Connector group.</td>
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
<tr id="parameter-voice_connector_group_id">
    <td><CopyableCode code="voice_connector_group_id" /></td>
    <td><code>string</code></td>
    <td>The Voice Connector group ID.</td>
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
    defaultValue="get_voice_connector_group"
    values={[
        { label: 'get_voice_connector_group', value: 'get_voice_connector_group' },
        { label: 'list_voice_connector_groups', value: 'list_voice_connector_groups' }
    ]}
>
<TabItem value="get_voice_connector_group">

Retrieves details for the specified Amazon Chime SDK Voice Connector group, such as timestamps,name, and associated VoiceConnectorItems.

```sql
SELECT
call_distribution_type,
created_timestamp,
name,
updated_timestamp,
voice_connector_group_arn,
voice_connector_group_id,
voice_connector_items
FROM aws.chime_sdk_voice.voice_connector_groups
WHERE voice_connector_group_id = '{{ voice_connector_group_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_voice_connector_groups">

Lists the Amazon Chime SDK Voice Connector groups in the administrator's AWS account.

```sql
SELECT
next_token,
voice_connector_groups
FROM aws.chime_sdk_voice.voice_connector_groups
WHERE region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_voice_connector_group"
    values={[
        { label: 'create_voice_connector_group', value: 'create_voice_connector_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_voice_connector_group">

Creates an Amazon Chime SDK Voice Connector group under the administrator's AWS account. You can associate Amazon Chime SDK Voice Connectors with the Voice Connector group by including VoiceConnectorItems in the request. You can include Voice Connectors from different AWS Regions in your group. This creates a fault tolerant mechanism for fallback in case of availability events.

```sql
INSERT INTO aws.chime_sdk_voice.voice_connector_groups (
Name,
VoiceConnectorItems,
CallDistributionType,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ VoiceConnectorItems }}',
'{{ CallDistributionType }}',
'{{ region }}'
RETURNING
voice_connector_group
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: voice_connector_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the voice_connector_groups resource.
    - name: Name
      value: "{{ Name }}"
    - name: VoiceConnectorItems
      value:
        - VoiceConnectorId: "{{ VoiceConnectorId }}"
          Priority: {{ Priority }}
    - name: CallDistributionType
      value: "{{ CallDistributionType }}"
      valid_values: ['PriorityWeightedDistribution', 'LoadBalancedDistribution']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_voice_connector_group"
    values={[
        { label: 'update_voice_connector_group', value: 'update_voice_connector_group' },
        { label: 'associate_phone_numbers_with_voice_connector_group', value: 'associate_phone_numbers_with_voice_connector_group' }
    ]}
>
<TabItem value="update_voice_connector_group">

Updates the settings for the specified Amazon Chime SDK Voice Connector group.

```sql
UPDATE aws.chime_sdk_voice.voice_connector_groups
SET 
Name = '{{ Name }}',
VoiceConnectorItems = '{{ VoiceConnectorItems }}',
CallDistributionType = '{{ CallDistributionType }}'
WHERE 
voice_connector_group_id = '{{ voice_connector_group_id }}' --required
AND region = '{{ region }}' --required
AND Name = '{{ Name }}' --required
AND VoiceConnectorItems = '{{ VoiceConnectorItems }}' --required
RETURNING
voice_connector_group;
```
</TabItem>
<TabItem value="associate_phone_numbers_with_voice_connector_group">

Associates phone numbers with the specified Amazon Chime SDK Voice Connector group.

```sql
UPDATE aws.chime_sdk_voice.voice_connector_groups
SET 
E164PhoneNumbers = '{{ E164PhoneNumbers }}',
ForceAssociate = {{ ForceAssociate }}
WHERE 
voice_connector_group_id = '{{ voice_connector_group_id }}' --required
AND region = '{{ region }}' --required
AND E164PhoneNumbers = '{{ E164PhoneNumbers }}' --required
RETURNING
phone_number_errors;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_voice_connector_group"
    values={[
        { label: 'delete_voice_connector_group', value: 'delete_voice_connector_group' }
    ]}
>
<TabItem value="delete_voice_connector_group">

Deletes an Amazon Chime SDK Voice Connector group. Any VoiceConnectorItems and phone numbers associated with the group must be removed before it can be deleted.

```sql
DELETE FROM aws.chime_sdk_voice.voice_connector_groups
WHERE voice_connector_group_id = '{{ voice_connector_group_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_phone_numbers_from_voice_connector_group"
    values={[
        { label: 'disassociate_phone_numbers_from_voice_connector_group', value: 'disassociate_phone_numbers_from_voice_connector_group' }
    ]}
>
<TabItem value="disassociate_phone_numbers_from_voice_connector_group">

Disassociates the specified phone numbers from the specified Amazon Chime SDK Voice Connector group.

```sql
EXEC aws.chime_sdk_voice.voice_connector_groups.disassociate_phone_numbers_from_voice_connector_group 
@voice_connector_group_id='{{ voice_connector_group_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"E164PhoneNumbers": "{{ E164PhoneNumbers }}"
}'
;
```
</TabItem>
</Tabs>
