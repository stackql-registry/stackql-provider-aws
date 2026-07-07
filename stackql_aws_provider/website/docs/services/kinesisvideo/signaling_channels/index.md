--- 
title: signaling_channels
hide_title: false
hide_table_of_contents: false
keywords:
  - signaling_channels
  - kinesisvideo
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

Creates, updates, deletes, gets or lists a <code>signaling_channels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="signaling_channels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesisvideo.signaling_channels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_signaling_channel"
    values={[
        { label: 'describe_signaling_channel', value: 'describe_signaling_channel' }
    ]}
>
<TabItem value="describe_signaling_channel">

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
    <td><CopyableCode code="ChannelARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the signaling channel. (pattern: &lt;code&gt;arn:&#91;a-z\d-&#93;+:kinesisvideo:&#91;a-z0-9-&#93;+:&#91;0-9&#93;+:&#91;a-z&#93;+/&#91;a-zA-Z0-9_.-&#93;+/&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ChannelName" /></td>
    <td><code>string</code></td>
    <td>The name of the signaling channel. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ChannelStatus" /></td>
    <td><code>string</code></td>
    <td>Current status of the signaling channel. (CREATING, ACTIVE, UPDATING, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="ChannelType" /></td>
    <td><code>string</code></td>
    <td>The type of the signaling channel. (SINGLE_MASTER, FULL_MESH)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the signaling channel was created.</td>
</tr>
<tr>
    <td><CopyableCode code="SingleMasterConfiguration" /></td>
    <td><code>object</code></td>
    <td>A structure that contains the configuration for the SINGLE_MASTER channel type.</td>
</tr>
<tr>
    <td><CopyableCode code="Version" /></td>
    <td><code>string</code></td>
    <td>The current version of the signaling channel. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_signaling_channel"><CopyableCode code="describe_signaling_channel" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the most current information about the signaling channel. You must specify either the name or the Amazon Resource Name (ARN) of the channel that you want to describe.</td>
</tr>
<tr>
    <td><a href="#create_signaling_channel"><CopyableCode code="create_signaling_channel" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ChannelName"><code>ChannelName</code></a></td>
    <td></td>
    <td>Creates a signaling channel. CreateSignalingChannel is an asynchronous operation.</td>
</tr>
<tr>
    <td><a href="#update_signaling_channel"><CopyableCode code="update_signaling_channel" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ChannelARN"><code>ChannelARN</code></a>, <a href="#parameter-CurrentVersion"><code>CurrentVersion</code></a></td>
    <td></td>
    <td>Updates the existing signaling channel. This is an asynchronous operation and takes time to complete. If the MessageTtlSeconds value is updated (either increased or reduced), it only applies to new messages sent via this channel after it's been updated. Existing messages are still expired as per the previous MessageTtlSeconds value.</td>
</tr>
<tr>
    <td><a href="#delete_signaling_channel"><CopyableCode code="delete_signaling_channel" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specified signaling channel. DeleteSignalingChannel is an asynchronous operation. If you don't specify the channel's current version, the most recent version is deleted.</td>
</tr>
<tr>
    <td><a href="#list_signaling_channels"><CopyableCode code="list_signaling_channels" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an array of ChannelInfo objects. Each object describes a signaling channel. To retrieve only those channels that satisfy a specific condition, you can specify a ChannelNameCondition.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_signaling_channel"
    values={[
        { label: 'describe_signaling_channel', value: 'describe_signaling_channel' }
    ]}
>
<TabItem value="describe_signaling_channel">

Returns the most current information about the signaling channel. You must specify either the name or the Amazon Resource Name (ARN) of the channel that you want to describe.

```sql
SELECT
ChannelARN,
ChannelName,
ChannelStatus,
ChannelType,
CreationTime,
SingleMasterConfiguration,
Version
FROM aws.kinesisvideo.signaling_channels
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_signaling_channel"
    values={[
        { label: 'create_signaling_channel', value: 'create_signaling_channel' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_signaling_channel">

Creates a signaling channel. CreateSignalingChannel is an asynchronous operation.

```sql
INSERT INTO aws.kinesisvideo.signaling_channels (
ChannelName,
ChannelType,
SingleMasterConfiguration,
Tags,
region
)
SELECT 
'{{ ChannelName }}' /* required */,
'{{ ChannelType }}',
'{{ SingleMasterConfiguration }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
ChannelARN
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: signaling_channels
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the signaling_channels resource.
    - name: ChannelName
      value: "{{ ChannelName }}"
    - name: ChannelType
      value: "{{ ChannelType }}"
      valid_values: ['SINGLE_MASTER', 'FULL_MESH']
    - name: SingleMasterConfiguration
      description: |
        A structure that contains the configuration for the SINGLE_MASTER channel type.
      value:
        MessageTtlSeconds: {{ MessageTtlSeconds }}
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_signaling_channel"
    values={[
        { label: 'update_signaling_channel', value: 'update_signaling_channel' }
    ]}
>
<TabItem value="update_signaling_channel">

Updates the existing signaling channel. This is an asynchronous operation and takes time to complete. If the MessageTtlSeconds value is updated (either increased or reduced), it only applies to new messages sent via this channel after it's been updated. Existing messages are still expired as per the previous MessageTtlSeconds value.

```sql
UPDATE aws.kinesisvideo.signaling_channels
SET 
ChannelARN = '{{ ChannelARN }}',
CurrentVersion = '{{ CurrentVersion }}',
SingleMasterConfiguration = '{{ SingleMasterConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND ChannelARN = '{{ ChannelARN }}' --required
AND CurrentVersion = '{{ CurrentVersion }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_signaling_channel"
    values={[
        { label: 'delete_signaling_channel', value: 'delete_signaling_channel' }
    ]}
>
<TabItem value="delete_signaling_channel">

Deletes a specified signaling channel. DeleteSignalingChannel is an asynchronous operation. If you don't specify the channel's current version, the most recent version is deleted.

```sql
DELETE FROM aws.kinesisvideo.signaling_channels
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_signaling_channels"
    values={[
        { label: 'list_signaling_channels', value: 'list_signaling_channels' }
    ]}
>
<TabItem value="list_signaling_channels">

Returns an array of ChannelInfo objects. Each object describes a signaling channel. To retrieve only those channels that satisfy a specific condition, you can specify a ChannelNameCondition.

```sql
EXEC aws.kinesisvideo.signaling_channels.list_signaling_channels 
@region='{{ region }}' --required 
@@json=
'{
"MaxResults": {{ MaxResults }}, 
"NextToken": "{{ NextToken }}", 
"ChannelNameCondition": "{{ ChannelNameCondition }}"
}'
;
```
</TabItem>
</Tabs>
