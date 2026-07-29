--- 
title: voice_connector_streaming_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - voice_connector_streaming_configurations
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

Creates, updates, deletes, gets or lists a <code>voice_connector_streaming_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="voice_connector_streaming_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_voice.voice_connector_streaming_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_voice_connector_streaming_configuration"
    values={[
        { label: 'get_voice_connector_streaming_configuration', value: 'get_voice_connector_streaming_configuration' }
    ]}
>
<TabItem value="get_voice_connector_streaming_configuration">

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
    <td><CopyableCode code="data_retention_in_hours" /></td>
    <td><code>integer</code></td>
    <td>The amount of time, in hours, to the Kinesis data.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>When true, streaming to Kinesis is off.</td>
</tr>
<tr>
    <td><CopyableCode code="media_insights_configuration" /></td>
    <td><code>object</code></td>
    <td>The call analytics configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="streaming_notification_targets" /></td>
    <td><code>array</code></td>
    <td>The streaming notification targets.</td>
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
    <td><a href="#get_voice_connector_streaming_configuration"><CopyableCode code="get_voice_connector_streaming_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-voice_connector_id"><code>voice_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the streaming configuration details for the specified Amazon Chime SDK Voice Connector. Shows whether media streaming is enabled for sending to Amazon Kinesis. It also shows the retention period, in hours, for the Amazon Kinesis data.</td>
</tr>
<tr>
    <td><a href="#put_voice_connector_streaming_configuration"><CopyableCode code="put_voice_connector_streaming_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-voice_connector_id"><code>voice_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-StreamingConfiguration"><code>StreamingConfiguration</code></a></td>
    <td></td>
    <td>Updates a Voice Connector's streaming configuration settings.</td>
</tr>
<tr>
    <td><a href="#delete_voice_connector_streaming_configuration"><CopyableCode code="delete_voice_connector_streaming_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-voice_connector_id"><code>voice_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Voice Connector's streaming configuration.</td>
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
<tr id="parameter-voice_connector_id">
    <td><CopyableCode code="voice_connector_id" /></td>
    <td><code>string</code></td>
    <td>The Voice Connector ID.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_voice_connector_streaming_configuration"
    values={[
        { label: 'get_voice_connector_streaming_configuration', value: 'get_voice_connector_streaming_configuration' }
    ]}
>
<TabItem value="get_voice_connector_streaming_configuration">

Retrieves the streaming configuration details for the specified Amazon Chime SDK Voice Connector. Shows whether media streaming is enabled for sending to Amazon Kinesis. It also shows the retention period, in hours, for the Amazon Kinesis data.

```sql
SELECT
data_retention_in_hours,
disabled,
media_insights_configuration,
streaming_notification_targets
FROM aws.chime_sdk_voice.voice_connector_streaming_configurations
WHERE voice_connector_id = '{{ voice_connector_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_voice_connector_streaming_configuration"
    values={[
        { label: 'put_voice_connector_streaming_configuration', value: 'put_voice_connector_streaming_configuration' }
    ]}
>
<TabItem value="put_voice_connector_streaming_configuration">

Updates a Voice Connector's streaming configuration settings.

```sql
REPLACE aws.chime_sdk_voice.voice_connector_streaming_configurations
SET 
StreamingConfiguration = '{{ StreamingConfiguration }}'
WHERE 
voice_connector_id = '{{ voice_connector_id }}' --required
AND region = '{{ region }}' --required
AND StreamingConfiguration = '{{ StreamingConfiguration }}' --required
RETURNING
streaming_configuration;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_voice_connector_streaming_configuration"
    values={[
        { label: 'delete_voice_connector_streaming_configuration', value: 'delete_voice_connector_streaming_configuration' }
    ]}
>
<TabItem value="delete_voice_connector_streaming_configuration">

Deletes a Voice Connector's streaming configuration.

```sql
DELETE FROM aws.chime_sdk_voice.voice_connector_streaming_configurations
WHERE voice_connector_id = '{{ voice_connector_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
