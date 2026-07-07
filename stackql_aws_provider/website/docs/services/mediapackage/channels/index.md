--- 
title: channels
hide_title: false
hide_table_of_contents: false
keywords:
  - channels
  - mediapackage
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

Creates, updates, deletes, gets or lists a <code>channels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="channels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediapackage.channels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_channel"
    values={[
        { label: 'describe_channel', value: 'describe_channel' },
        { label: 'list_channels', value: 'list_channels' }
    ]}
>
<TabItem value="describe_channel">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) assigned to the Channel.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string</code></td>
    <td>The date and time the Channel was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A short text description of the Channel.</td>
</tr>
<tr>
    <td><CopyableCode code="EgressAccessLogs" /></td>
    <td><code>object</code></td>
    <td>Configure egress access logging.</td>
</tr>
<tr>
    <td><CopyableCode code="HlsIngest" /></td>
    <td><code>object</code></td>
    <td>An HTTP Live Streaming (HLS) ingest resource configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Channel.</td>
</tr>
<tr>
    <td><CopyableCode code="IngressAccessLogs" /></td>
    <td><code>object</code></td>
    <td>Configure ingress access logging.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_channels">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) assigned to the Channel.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string</code></td>
    <td>The date and time the Channel was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A short text description of the Channel.</td>
</tr>
<tr>
    <td><CopyableCode code="EgressAccessLogs" /></td>
    <td><code>object</code></td>
    <td>Configure egress access logging.</td>
</tr>
<tr>
    <td><CopyableCode code="HlsIngest" /></td>
    <td><code>object</code></td>
    <td>An HTTP Live Streaming (HLS) ingest resource configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Channel.</td>
</tr>
<tr>
    <td><CopyableCode code="IngressAccessLogs" /></td>
    <td><code>object</code></td>
    <td>Configure ingress access logging.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td></td>
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
    <td><a href="#describe_channel"><CopyableCode code="describe_channel" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets details about a Channel.</td>
</tr>
<tr>
    <td><a href="#list_channels"><CopyableCode code="list_channels" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a collection of Channels.</td>
</tr>
<tr>
    <td><a href="#create_channel"><CopyableCode code="create_channel" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new Channel.</td>
</tr>
<tr>
    <td><a href="#update_channel"><CopyableCode code="update_channel" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an existing Channel.</td>
</tr>
<tr>
    <td><a href="#delete_channel"><CopyableCode code="delete_channel" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing Channel.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Channel to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Upper bound on number of records to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token used to resume pagination from the end of a previous request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_channel"
    values={[
        { label: 'describe_channel', value: 'describe_channel' },
        { label: 'list_channels', value: 'list_channels' }
    ]}
>
<TabItem value="describe_channel">

Gets details about a Channel.

```sql
SELECT
Arn,
CreatedAt,
Description,
EgressAccessLogs,
HlsIngest,
Id,
IngressAccessLogs,
Tags
FROM aws.mediapackage.channels
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_channels">

Returns a collection of Channels.

```sql
SELECT
Arn,
CreatedAt,
Description,
EgressAccessLogs,
HlsIngest,
Id,
IngressAccessLogs,
Tags
FROM aws.mediapackage.channels
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_channel"
    values={[
        { label: 'create_channel', value: 'create_channel' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_channel">

Creates a new Channel.

```sql
INSERT INTO aws.mediapackage.channels (
Description,
Id,
Tags,
region
)
SELECT 
'{{ Description }}',
'{{ Id }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
Arn,
CreatedAt,
Description,
EgressAccessLogs,
HlsIngest,
Id,
IngressAccessLogs,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: channels
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the channels resource.
    - name: Description
      value: "{{ Description }}"
    - name: Id
      value: "{{ Id }}"
    - name: Tags
      value: "{{ Tags }}"
      description: |
        A collection of tags associated with a resource
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_channel"
    values={[
        { label: 'update_channel', value: 'update_channel' }
    ]}
>
<TabItem value="update_channel">

Updates an existing Channel.

```sql
UPDATE aws.mediapackage.channels
SET 
Description = '{{ Description }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
RETURNING
Arn,
CreatedAt,
Description,
EgressAccessLogs,
HlsIngest,
Id,
IngressAccessLogs,
Tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_channel"
    values={[
        { label: 'delete_channel', value: 'delete_channel' }
    ]}
>
<TabItem value="delete_channel">

Deletes an existing Channel.

```sql
DELETE FROM aws.mediapackage.channels
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
