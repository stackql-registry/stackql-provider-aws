--- 
title: multiplexes
hide_title: false
hide_table_of_contents: false
keywords:
  - multiplexes
  - medialive
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

Creates, updates, deletes, gets or lists a <code>multiplexes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="multiplexes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.medialive.multiplexes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_multiplex"
    values={[
        { label: 'describe_multiplex', value: 'describe_multiplex' },
        { label: 'list_multiplexes', value: 'list_multiplexes' }
    ]}
>
<TabItem value="describe_multiplex">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zones" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOf__string</td>
</tr>
<tr>
    <td><CopyableCode code="destinations" /></td>
    <td><code>array</code></td>
    <td>A list of the multiplex output destinations.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="multiplex_settings" /></td>
    <td><code>object</code></td>
    <td>Contains configuration for a Multiplex event</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="pipelines_running_count" /></td>
    <td><code>integer</code></td>
    <td>Placeholder documentation for __integer</td>
</tr>
<tr>
    <td><CopyableCode code="program_count" /></td>
    <td><code>integer</code></td>
    <td>Placeholder documentation for __integer</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the multiplex. (CREATING, CREATE_FAILED, IDLE, STARTING, RUNNING, RECOVERING, STOPPING, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A collection of key-value pairs.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_multiplexes">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zones" /></td>
    <td><code>array</code></td>
    <td>Placeholder documentation for __listOf__string</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="multiplex_settings" /></td>
    <td><code>object</code></td>
    <td>Configuration for a multiplex event.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Placeholder documentation for __string</td>
</tr>
<tr>
    <td><CopyableCode code="pipelines_running_count" /></td>
    <td><code>integer</code></td>
    <td>The number of currently healthy pipelines.</td>
</tr>
<tr>
    <td><CopyableCode code="program_count" /></td>
    <td><code>integer</code></td>
    <td>The number of programs in the multiplex.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the multiplex. (CREATING, CREATE_FAILED, IDLE, STARTING, RUNNING, RECOVERING, STOPPING, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A collection of key-value pairs.</td>
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
    <td><a href="#describe_multiplex"><CopyableCode code="describe_multiplex" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-multiplex_id"><code>multiplex_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets details about a multiplex.</td>
</tr>
<tr>
    <td><a href="#list_multiplexes"><CopyableCode code="list_multiplexes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieve a list of the existing multiplexes.</td>
</tr>
<tr>
    <td><a href="#create_multiplex"><CopyableCode code="create_multiplex" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AvailabilityZones"><code>AvailabilityZones</code></a>, <a href="#parameter-MultiplexSettings"><code>MultiplexSettings</code></a>, <a href="#parameter-RequestId"><code>RequestId</code></a></td>
    <td></td>
    <td>Create a new multiplex.</td>
</tr>
<tr>
    <td><a href="#update_multiplex"><CopyableCode code="update_multiplex" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-multiplex_id"><code>multiplex_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a multiplex.</td>
</tr>
<tr>
    <td><a href="#delete_multiplex"><CopyableCode code="delete_multiplex" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-multiplex_id"><code>multiplex_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete a multiplex. The multiplex must be idle.</td>
</tr>
<tr>
    <td><a href="#start_multiplex"><CopyableCode code="start_multiplex" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-multiplex_id"><code>multiplex_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Start (run) the multiplex. Starting the multiplex does not start the channels. You must explicitly start each channel.</td>
</tr>
<tr>
    <td><a href="#stop_multiplex"><CopyableCode code="stop_multiplex" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-multiplex_id"><code>multiplex_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops a running multiplex. If the multiplex isn't running, this action has no effect.</td>
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
<tr id="parameter-multiplex_id">
    <td><CopyableCode code="multiplex_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the multiplex.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_multiplex"
    values={[
        { label: 'describe_multiplex', value: 'describe_multiplex' },
        { label: 'list_multiplexes', value: 'list_multiplexes' }
    ]}
>
<TabItem value="describe_multiplex">

Gets details about a multiplex.

```sql
SELECT
arn,
availability_zones,
destinations,
id,
multiplex_settings,
name,
pipelines_running_count,
program_count,
state,
tags
FROM aws.medialive.multiplexes
WHERE multiplex_id = '{{ multiplex_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_multiplexes">

Retrieve a list of the existing multiplexes.

```sql
SELECT
arn,
availability_zones,
id,
multiplex_settings,
name,
pipelines_running_count,
program_count,
state,
tags
FROM aws.medialive.multiplexes
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_multiplex"
    values={[
        { label: 'create_multiplex', value: 'create_multiplex' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_multiplex">

Create a new multiplex.

```sql
INSERT INTO aws.medialive.multiplexes (
AvailabilityZones,
MultiplexSettings,
Name,
RequestId,
Tags,
region
)
SELECT 
'{{ AvailabilityZones }}' /* required */,
'{{ MultiplexSettings }}' /* required */,
'{{ Name }}',
'{{ RequestId }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
multiplex
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: multiplexes
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the multiplexes resource.
    - name: AvailabilityZones
      value:
        - "{{ AvailabilityZones }}"
      description: |
        Placeholder documentation for __listOf__string
    - name: MultiplexSettings
      description: |
        Contains configuration for a Multiplex event
      value:
        MaximumVideoBufferDelayMilliseconds: {{ MaximumVideoBufferDelayMilliseconds }}
        TransportStreamBitrate: {{ TransportStreamBitrate }}
        TransportStreamId: {{ TransportStreamId }}
        TransportStreamReservedBitrate: {{ TransportStreamReservedBitrate }}
    - name: Name
      value: "{{ Name }}"
      description: |
        Placeholder documentation for __string
    - name: RequestId
      value: "{{ RequestId }}"
      description: |
        Placeholder documentation for __string
    - name: Tags
      value: "{{ Tags }}"
      description: |
        Placeholder documentation for Tags
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_multiplex"
    values={[
        { label: 'update_multiplex', value: 'update_multiplex' }
    ]}
>
<TabItem value="update_multiplex">

Updates a multiplex.

```sql
UPDATE aws.medialive.multiplexes
SET 
MultiplexSettings = '{{ MultiplexSettings }}',
Name = '{{ Name }}',
PacketIdentifiersMapping = '{{ PacketIdentifiersMapping }}'
WHERE 
multiplex_id = '{{ multiplex_id }}' --required
AND region = '{{ region }}' --required
RETURNING
multiplex;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_multiplex"
    values={[
        { label: 'delete_multiplex', value: 'delete_multiplex' }
    ]}
>
<TabItem value="delete_multiplex">

Delete a multiplex. The multiplex must be idle.

```sql
DELETE FROM aws.medialive.multiplexes
WHERE multiplex_id = '{{ multiplex_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_multiplex"
    values={[
        { label: 'start_multiplex', value: 'start_multiplex' },
        { label: 'stop_multiplex', value: 'stop_multiplex' }
    ]}
>
<TabItem value="start_multiplex">

Start (run) the multiplex. Starting the multiplex does not start the channels. You must explicitly start each channel.

```sql
EXEC aws.medialive.multiplexes.start_multiplex 
@multiplex_id='{{ multiplex_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="stop_multiplex">

Stops a running multiplex. If the multiplex isn't running, this action has no effect.

```sql
EXEC aws.medialive.multiplexes.stop_multiplex 
@multiplex_id='{{ multiplex_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
