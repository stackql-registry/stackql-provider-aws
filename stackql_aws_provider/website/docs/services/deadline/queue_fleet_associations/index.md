--- 
title: queue_fleet_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - queue_fleet_associations
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

Creates, updates, deletes, gets or lists a <code>queue_fleet_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="queue_fleet_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.deadline.queue_fleet_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_queue_fleet_association"
    values={[
        { label: 'get_queue_fleet_association', value: 'get_queue_fleet_association' },
        { label: 'list_queue_fleet_associations', value: 'list_queue_fleet_associations' }
    ]}
>
<TabItem value="get_queue_fleet_association">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The user or system that created this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="fleetId" /></td>
    <td><code>string</code></td>
    <td>The fleet ID for the queue-fleet association. (pattern: &lt;code&gt;fleet-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="queueId" /></td>
    <td><code>string</code></td>
    <td>The queue ID for the queue-fleet association. (pattern: &lt;code&gt;queue-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the queue-fleet association. (ACTIVE, STOP_SCHEDULING_AND_COMPLETE_TASKS, STOP_SCHEDULING_AND_CANCEL_TASKS, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedBy" /></td>
    <td><code>string</code></td>
    <td>The user or system that updated this resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_queue_fleet_associations">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The user or system that created this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="fleetId" /></td>
    <td><code>string</code></td>
    <td>The fleet ID. (pattern: &lt;code&gt;fleet-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="queueId" /></td>
    <td><code>string</code></td>
    <td>The queue ID. (pattern: &lt;code&gt;queue-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of task scheduling in the queue-fleet association. ACTIVE–Association is active. STOP_SCHEDULING_AND_COMPLETE_TASKS–Association has stopped scheduling new tasks and is completing current tasks. STOP_SCHEDULING_AND_CANCEL_TASKS–Association has stopped scheduling new tasks and is canceling current tasks. STOPPED–Association has been stopped. (ACTIVE, STOP_SCHEDULING_AND_COMPLETE_TASKS, STOP_SCHEDULING_AND_CANCEL_TASKS, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the resource was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedBy" /></td>
    <td><code>string</code></td>
    <td>The user or system that updated this resource.</td>
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
    <td><a href="#get_queue_fleet_association"><CopyableCode code="get_queue_fleet_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-fleet_id"><code>fleet_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a queue-fleet association.</td>
</tr>
<tr>
    <td><a href="#list_queue_fleet_associations"><CopyableCode code="list_queue_fleet_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-queueId"><code>queueId</code></a>, <a href="#parameter-fleetId"><code>fleetId</code></a></td>
    <td>Lists queue-fleet associations.</td>
</tr>
<tr>
    <td><a href="#create_queue_fleet_association"><CopyableCode code="create_queue_fleet_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-queueId"><code>queueId</code></a>, <a href="#parameter-fleetId"><code>fleetId</code></a></td>
    <td></td>
    <td>Creates an association between a queue and a fleet.</td>
</tr>
<tr>
    <td><a href="#update_queue_fleet_association"><CopyableCode code="update_queue_fleet_association" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-fleet_id"><code>fleet_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td></td>
    <td>Updates a queue-fleet association.</td>
</tr>
<tr>
    <td><a href="#delete_queue_fleet_association"><CopyableCode code="delete_queue_fleet_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-fleet_id"><code>fleet_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a queue-fleet association.</td>
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
    <td>The farm ID of the farm that holds the queue-fleet association.</td>
</tr>
<tr id="parameter-fleet_id">
    <td><CopyableCode code="fleet_id" /></td>
    <td><code>string</code></td>
    <td>The fleet ID of the queue-fleet association.</td>
</tr>
<tr id="parameter-queue_id">
    <td><CopyableCode code="queue_id" /></td>
    <td><code>string</code></td>
    <td>The queue ID of the queue-fleet association.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-fleetId">
    <td><CopyableCode code="fleetId" /></td>
    <td><code>string</code></td>
    <td>The fleet ID for the queue-fleet association list.</td>
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
<tr id="parameter-queueId">
    <td><CopyableCode code="queueId" /></td>
    <td><code>string</code></td>
    <td>The queue ID for the queue-fleet association list.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_queue_fleet_association"
    values={[
        { label: 'get_queue_fleet_association', value: 'get_queue_fleet_association' },
        { label: 'list_queue_fleet_associations', value: 'list_queue_fleet_associations' }
    ]}
>
<TabItem value="get_queue_fleet_association">

Gets a queue-fleet association.

```sql
SELECT
createdAt,
createdBy,
fleetId,
queueId,
status,
updatedAt,
updatedBy
FROM aws.deadline.queue_fleet_associations
WHERE farm_id = '{{ farm_id }}' -- required
AND queue_id = '{{ queue_id }}' -- required
AND fleet_id = '{{ fleet_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_queue_fleet_associations">

Lists queue-fleet associations.

```sql
SELECT
createdAt,
createdBy,
fleetId,
queueId,
status,
updatedAt,
updatedBy
FROM aws.deadline.queue_fleet_associations
WHERE farm_id = '{{ farm_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND queueId = '{{ queueId }}'
AND fleetId = '{{ fleetId }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_queue_fleet_association"
    values={[
        { label: 'create_queue_fleet_association', value: 'create_queue_fleet_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_queue_fleet_association">

Creates an association between a queue and a fleet.

```sql
INSERT INTO aws.deadline.queue_fleet_associations (
queueId,
fleetId,
farm_id,
region
)
SELECT 
'{{ queueId }}' /* required */,
'{{ fleetId }}' /* required */,
'{{ farm_id }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: queue_fleet_associations
  props:
    - name: farm_id
      value: "{{ farm_id }}"
      description: Required parameter for the queue_fleet_associations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the queue_fleet_associations resource.
    - name: queueId
      value: "{{ queueId }}"
    - name: fleetId
      value: "{{ fleetId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_queue_fleet_association"
    values={[
        { label: 'update_queue_fleet_association', value: 'update_queue_fleet_association' }
    ]}
>
<TabItem value="update_queue_fleet_association">

Updates a queue-fleet association.

```sql
UPDATE aws.deadline.queue_fleet_associations
SET 
status = '{{ status }}'
WHERE 
farm_id = '{{ farm_id }}' --required
AND queue_id = '{{ queue_id }}' --required
AND fleet_id = '{{ fleet_id }}' --required
AND region = '{{ region }}' --required
AND status = '{{ status }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_queue_fleet_association"
    values={[
        { label: 'delete_queue_fleet_association', value: 'delete_queue_fleet_association' }
    ]}
>
<TabItem value="delete_queue_fleet_association">

Deletes a queue-fleet association.

```sql
DELETE FROM aws.deadline.queue_fleet_associations
WHERE farm_id = '{{ farm_id }}' --required
AND queue_id = '{{ queue_id }}' --required
AND fleet_id = '{{ fleet_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
