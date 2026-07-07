--- 
title: workers
hide_title: false
hide_table_of_contents: false
keywords:
  - workers
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

Creates, updates, deletes, gets or lists a <code>workers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.deadline.workers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_worker"
    values={[
        { label: 'get_worker', value: 'get_worker' },
        { label: 'search_workers', value: 'search_workers' },
        { label: 'list_workers', value: 'list_workers' },
        { label: 'batch_get_worker', value: 'batch_get_worker' }
    ]}
>
<TabItem value="get_worker">

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
    <td><CopyableCode code="farmId" /></td>
    <td><code>string</code></td>
    <td>The farm ID. (pattern: &lt;code&gt;farm-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="fleetId" /></td>
    <td><code>string</code></td>
    <td>The fleet ID. (pattern: &lt;code&gt;fleet-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="hostProperties" /></td>
    <td><code>object</code></td>
    <td>The host properties for the worker.</td>
</tr>
<tr>
    <td><CopyableCode code="log" /></td>
    <td><code>object</code></td>
    <td>The logs for the associated worker.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the worker. (CREATED, STARTED, STOPPING, STOPPED, NOT_RESPONDING, NOT_COMPATIBLE, RUNNING, IDLE)</td>
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
<tr>
    <td><CopyableCode code="workerId" /></td>
    <td><code>string</code></td>
    <td>The worker ID. (pattern: &lt;code&gt;worker-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_workers">

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
    <td><CopyableCode code="nextItemOffset" /></td>
    <td><code>integer</code></td>
    <td>The next item offset for the search results.</td>
</tr>
<tr>
    <td><CopyableCode code="totalResults" /></td>
    <td><code>integer</code></td>
    <td>The total number of results in the search.</td>
</tr>
<tr>
    <td><CopyableCode code="workers" /></td>
    <td><code>array</code></td>
    <td>The workers for the search.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workers">

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
    <td><CopyableCode code="farmId" /></td>
    <td><code>string</code></td>
    <td>The farm ID. (pattern: &lt;code&gt;farm-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="fleetId" /></td>
    <td><code>string</code></td>
    <td>The fleet ID. (pattern: &lt;code&gt;fleet-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="hostProperties" /></td>
    <td><code>object</code></td>
    <td>The host properties of the worker.</td>
</tr>
<tr>
    <td><CopyableCode code="log" /></td>
    <td><code>object</code></td>
    <td>The log configuration for the worker.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the worker. (CREATED, STARTED, STOPPING, STOPPED, NOT_RESPONDING, NOT_COMPATIBLE, RUNNING, IDLE)</td>
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
<tr>
    <td><CopyableCode code="workerId" /></td>
    <td><code>string</code></td>
    <td>The worker ID. (pattern: &lt;code&gt;worker-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="batch_get_worker">

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
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>A list of errors for workers that could not be retrieved.</td>
</tr>
<tr>
    <td><CopyableCode code="workers" /></td>
    <td><code>array</code></td>
    <td>A list of workers that were successfully retrieved.</td>
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
    <td><a href="#get_worker"><CopyableCode code="get_worker" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-fleet_id"><code>fleet_id</code></a>, <a href="#parameter-worker_id"><code>worker_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a worker.</td>
</tr>
<tr>
    <td><a href="#search_workers"><CopyableCode code="search_workers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for workers.</td>
</tr>
<tr>
    <td><a href="#list_workers"><CopyableCode code="list_workers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-fleet_id"><code>fleet_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists workers.</td>
</tr>
<tr>
    <td><a href="#batch_get_worker"><CopyableCode code="batch_get_worker" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves multiple workers in a single request. This is a batch version of the GetWorker API. The result of getting each worker is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.</td>
</tr>
<tr>
    <td><a href="#create_worker"><CopyableCode code="create_worker" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-fleet_id"><code>fleet_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-X-Amz-Client-Token"><code>X-Amz-Client-Token</code></a></td>
    <td>Creates a worker. A worker tells your instance how much processing power (vCPU), and memory (GiB) you’ll need to assemble the digital assets held within a particular instance. You can specify certain instance types to use, or let the worker know which instances types to exclude. Deadline Cloud limits the number of workers to less than or equal to the fleet's maximum worker count. The service maintains eventual consistency for the worker count. If you make multiple rapid calls to CreateWorker before the field updates, you might exceed your fleet's maximum worker count. For example, if your maxWorkerCount is 10 and you currently have 9 workers, making two quick CreateWorker calls might successfully create 2 workers instead of 1, resulting in 11 total workers.</td>
</tr>
<tr>
    <td><a href="#update_worker"><CopyableCode code="update_worker" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-fleet_id"><code>fleet_id</code></a>, <a href="#parameter-worker_id"><code>worker_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a worker.</td>
</tr>
<tr>
    <td><a href="#delete_worker"><CopyableCode code="delete_worker" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-fleet_id"><code>fleet_id</code></a>, <a href="#parameter-worker_id"><code>worker_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a worker.</td>
</tr>
<tr>
    <td><a href="#assume_fleet_role_for_worker"><CopyableCode code="assume_fleet_role_for_worker" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-fleet_id"><code>fleet_id</code></a>, <a href="#parameter-worker_id"><code>worker_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get credentials from the fleet role for a worker.</td>
</tr>
<tr>
    <td><a href="#assume_queue_role_for_worker"><CopyableCode code="assume_queue_role_for_worker" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-fleet_id"><code>fleet_id</code></a>, <a href="#parameter-worker_id"><code>worker_id</code></a>, <a href="#parameter-queueId"><code>queueId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Allows a worker to assume a queue role.</td>
</tr>
<tr>
    <td><a href="#update_worker_schedule"><CopyableCode code="update_worker_schedule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-fleet_id"><code>fleet_id</code></a>, <a href="#parameter-worker_id"><code>worker_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the schedule for a worker.</td>
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
    <td>The farm ID to update.</td>
</tr>
<tr id="parameter-fleet_id">
    <td><CopyableCode code="fleet_id" /></td>
    <td><code>string</code></td>
    <td>The fleet ID to update.</td>
</tr>
<tr id="parameter-queueId">
    <td><CopyableCode code="queueId" /></td>
    <td><code>string</code></td>
    <td>The queue ID of the worker assuming the queue role.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-worker_id">
    <td><CopyableCode code="worker_id" /></td>
    <td><code>string</code></td>
    <td>The worker ID to update.</td>
</tr>
<tr id="parameter-X-Amz-Client-Token">
    <td><CopyableCode code="X-Amz-Client-Token" /></td>
    <td><code>string</code></td>
    <td>The unique token which the server uses to recognize retries of the same request.</td>
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
    defaultValue="get_worker"
    values={[
        { label: 'get_worker', value: 'get_worker' },
        { label: 'search_workers', value: 'search_workers' },
        { label: 'list_workers', value: 'list_workers' },
        { label: 'batch_get_worker', value: 'batch_get_worker' }
    ]}
>
<TabItem value="get_worker">

Gets a worker.

```sql
SELECT
createdAt,
createdBy,
farmId,
fleetId,
hostProperties,
log,
status,
updatedAt,
updatedBy,
workerId
FROM aws.deadline.workers
WHERE farm_id = '{{ farm_id }}' -- required
AND fleet_id = '{{ fleet_id }}' -- required
AND worker_id = '{{ worker_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="search_workers">

Searches for workers.

```sql
SELECT
nextItemOffset,
totalResults,
workers
FROM aws.deadline.workers
WHERE farm_id = '{{ farm_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_workers">

Lists workers.

```sql
SELECT
createdAt,
createdBy,
farmId,
fleetId,
hostProperties,
log,
status,
updatedAt,
updatedBy,
workerId
FROM aws.deadline.workers
WHERE farm_id = '{{ farm_id }}' -- required
AND fleet_id = '{{ fleet_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
<TabItem value="batch_get_worker">

Retrieves multiple workers in a single request. This is a batch version of the GetWorker API. The result of getting each worker is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.

```sql
SELECT
errors,
workers
FROM aws.deadline.workers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_worker"
    values={[
        { label: 'create_worker', value: 'create_worker' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_worker">

Creates a worker. A worker tells your instance how much processing power (vCPU), and memory (GiB) you’ll need to assemble the digital assets held within a particular instance. You can specify certain instance types to use, or let the worker know which instances types to exclude. Deadline Cloud limits the number of workers to less than or equal to the fleet's maximum worker count. The service maintains eventual consistency for the worker count. If you make multiple rapid calls to CreateWorker before the field updates, you might exceed your fleet's maximum worker count. For example, if your maxWorkerCount is 10 and you currently have 9 workers, making two quick CreateWorker calls might successfully create 2 workers instead of 1, resulting in 11 total workers.

```sql
INSERT INTO aws.deadline.workers (
hostProperties,
tags,
farm_id,
fleet_id,
region,
`X-Amz-Client-Token`
)
SELECT 
'{{ hostProperties }}',
'{{ tags }}',
'{{ farm_id }}',
'{{ fleet_id }}',
'{{ region }}',
'{{ X-Amz-Client-Token }}'
RETURNING
workerId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workers
  props:
    - name: farm_id
      value: "{{ farm_id }}"
      description: Required parameter for the workers resource.
    - name: fleet_id
      value: "{{ fleet_id }}"
      description: Required parameter for the workers resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the workers resource.
    - name: hostProperties
      description: |
        The host property details.
      value:
        ipAddresses:
          ipV4Addresses:
            - "{{ ipV4Addresses }}"
          ipV6Addresses:
            - "{{ ipV6Addresses }}"
        hostName: "{{ hostName }}"
    - name: tags
      value: "{{ tags }}"
    - name: X-Amz-Client-Token
      value: "{{ X-Amz-Client-Token }}"
      description: The unique token which the server uses to recognize retries of the same request.
      description: The unique token which the server uses to recognize retries of the same request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_worker"
    values={[
        { label: 'update_worker', value: 'update_worker' }
    ]}
>
<TabItem value="update_worker">

Updates a worker.

```sql
UPDATE aws.deadline.workers
SET 
status = '{{ status }}',
capabilities = '{{ capabilities }}',
hostProperties = '{{ hostProperties }}'
WHERE 
farm_id = '{{ farm_id }}' --required
AND fleet_id = '{{ fleet_id }}' --required
AND worker_id = '{{ worker_id }}' --required
AND region = '{{ region }}' --required
RETURNING
hostConfiguration,
log;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_worker"
    values={[
        { label: 'delete_worker', value: 'delete_worker' }
    ]}
>
<TabItem value="delete_worker">

Deletes a worker.

```sql
DELETE FROM aws.deadline.workers
WHERE farm_id = '{{ farm_id }}' --required
AND fleet_id = '{{ fleet_id }}' --required
AND worker_id = '{{ worker_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="assume_fleet_role_for_worker"
    values={[
        { label: 'assume_fleet_role_for_worker', value: 'assume_fleet_role_for_worker' },
        { label: 'assume_queue_role_for_worker', value: 'assume_queue_role_for_worker' },
        { label: 'update_worker_schedule', value: 'update_worker_schedule' }
    ]}
>
<TabItem value="assume_fleet_role_for_worker">

Get credentials from the fleet role for a worker.

```sql
EXEC aws.deadline.workers.assume_fleet_role_for_worker 
@farm_id='{{ farm_id }}' --required, 
@fleet_id='{{ fleet_id }}' --required, 
@worker_id='{{ worker_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="assume_queue_role_for_worker">

Allows a worker to assume a queue role.

```sql
EXEC aws.deadline.workers.assume_queue_role_for_worker 
@farm_id='{{ farm_id }}' --required, 
@fleet_id='{{ fleet_id }}' --required, 
@worker_id='{{ worker_id }}' --required, 
@queueId='{{ queueId }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="update_worker_schedule">

Updates the schedule for a worker.

```sql
EXEC aws.deadline.workers.update_worker_schedule 
@farm_id='{{ farm_id }}' --required, 
@fleet_id='{{ fleet_id }}' --required, 
@worker_id='{{ worker_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"updatedSessionActions": "{{ updatedSessionActions }}"
}'
;
```
</TabItem>
</Tabs>
