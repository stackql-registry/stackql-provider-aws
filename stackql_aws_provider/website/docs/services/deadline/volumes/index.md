--- 
title: volumes
hide_title: false
hide_table_of_contents: false
keywords:
  - volumes
  - deadline
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

Creates, updates, deletes, gets or lists a <code>volumes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="volumes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.deadline.volumes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_volume"
    values={[
        { label: 'get_volume', value: 'get_volume' },
        { label: 'list_volumes', value: 'list_volumes' }
    ]}
>
<TabItem value="get_volume">

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
    <td><CopyableCode code="attached_worker_id" /></td>
    <td><code>string</code></td>
    <td>The worker ID of the worker the volume is attached to. (pattern: &lt;code&gt;worker-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone_id" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone ID of the volume.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the volume expires and will be deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="farm_id" /></td>
    <td><code>string</code></td>
    <td>The farm ID of the farm that contains the fleet. (pattern: &lt;code&gt;farm-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_id" /></td>
    <td><code>string</code></td>
    <td>The fleet ID of the fleet that contains the volume. (pattern: &lt;code&gt;fleet-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="iops" /></td>
    <td><code>integer</code></td>
    <td>The IOPS of the volume.</td>
</tr>
<tr>
    <td><CopyableCode code="last_assigned_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the volume was last assigned to a worker.</td>
</tr>
<tr>
    <td><CopyableCode code="last_released_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the volume was last released from a worker.</td>
</tr>
<tr>
    <td><CopyableCode code="size_gi_b" /></td>
    <td><code>integer</code></td>
    <td>The volume size in GiB.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the volume. (PENDING_CREATION, PENDING_ATTACHMENT, IN_USE, AVAILABLE, PENDING_DELETION)</td>
</tr>
<tr>
    <td><CopyableCode code="throughput_mi_b" /></td>
    <td><code>integer</code></td>
    <td>The throughput of the volume in MiB.</td>
</tr>
<tr>
    <td><CopyableCode code="volume_id" /></td>
    <td><code>string</code></td>
    <td>The volume ID. (pattern: &lt;code&gt;volume-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="volume_type" /></td>
    <td><code>string</code></td>
    <td>The EBS volume type. (gp3)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_volumes">

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
    <td><CopyableCode code="attached_worker_id" /></td>
    <td><code>string</code></td>
    <td>The worker ID of the worker the volume is attached to. (pattern: &lt;code&gt;worker-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone_id" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone ID of the volume.</td>
</tr>
<tr>
    <td><CopyableCode code="farm_id" /></td>
    <td><code>string</code></td>
    <td>The farm ID of the farm that contains the fleet. (pattern: &lt;code&gt;farm-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="fleet_id" /></td>
    <td><code>string</code></td>
    <td>The fleet ID of the fleet that contains the volume. (pattern: &lt;code&gt;fleet-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="size_gi_b" /></td>
    <td><code>integer</code></td>
    <td>The volume size in GiB.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the volume. (PENDING_CREATION, PENDING_ATTACHMENT, IN_USE, AVAILABLE, PENDING_DELETION)</td>
</tr>
<tr>
    <td><CopyableCode code="volume_id" /></td>
    <td><code>string</code></td>
    <td>The volume ID. (pattern: &lt;code&gt;volume-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_volume"><CopyableCode code="get_volume" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-fleet_id"><code>fleet_id</code></a>, <a href="#parameter-volume_id"><code>volume_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a persistent volume.</td>
</tr>
<tr>
    <td><a href="#list_volumes"><CopyableCode code="list_volumes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-fleet_id"><code>fleet_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the persistent volumes in a fleet.</td>
</tr>
<tr>
    <td><a href="#delete_volume"><CopyableCode code="delete_volume" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-fleet_id"><code>fleet_id</code></a>, <a href="#parameter-volume_id"><code>volume_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a persistent volume.</td>
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
<tr id="parameter-farm_id">
    <td><CopyableCode code="farm_id" /></td>
    <td><code>string</code></td>
    <td>The farm ID of the farm that contains the fleet.</td>
</tr>
<tr id="parameter-fleet_id">
    <td><CopyableCode code="fleet_id" /></td>
    <td><code>string</code></td>
    <td>The fleet ID of the fleet that contains the volume.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-volume_id">
    <td><CopyableCode code="volume_id" /></td>
    <td><code>string</code></td>
    <td>The volume ID of the volume to delete.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return. Use this parameter with NextToken to get results as a set of sequential pages.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null to start from the beginning.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_volume"
    values={[
        { label: 'get_volume', value: 'get_volume' },
        { label: 'list_volumes', value: 'list_volumes' }
    ]}
>
<TabItem value="get_volume">

Gets a persistent volume.

```sql
SELECT
attached_worker_id,
availability_zone_id,
created_at,
expires_at,
farm_id,
fleet_id,
iops,
last_assigned_at,
last_released_at,
size_gi_b,
state,
throughput_mi_b,
volume_id,
volume_type
FROM aws.deadline.volumes
WHERE farm_id = '{{ farm_id }}' -- required
AND fleet_id = '{{ fleet_id }}' -- required
AND volume_id = '{{ volume_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_volumes">

Lists the persistent volumes in a fleet.

```sql
SELECT
attached_worker_id,
availability_zone_id,
farm_id,
fleet_id,
size_gi_b,
state,
volume_id
FROM aws.deadline.volumes
WHERE farm_id = '{{ farm_id }}' -- required
AND fleet_id = '{{ fleet_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_volume"
    values={[
        { label: 'delete_volume', value: 'delete_volume' }
    ]}
>
<TabItem value="delete_volume">

Deletes a persistent volume.

```sql
DELETE FROM aws.deadline.volumes
WHERE farm_id = '{{ farm_id }}' --required
AND fleet_id = '{{ fleet_id }}' --required
AND volume_id = '{{ volume_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
