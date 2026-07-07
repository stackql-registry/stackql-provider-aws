--- 
title: queue_limit_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - queue_limit_associations
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

Creates, updates, deletes, gets or lists a <code>queue_limit_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="queue_limit_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.deadline.queue_limit_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_queue_limit_association"
    values={[
        { label: 'get_queue_limit_association', value: 'get_queue_limit_association' },
        { label: 'list_queue_limit_associations', value: 'list_queue_limit_associations' }
    ]}
>
<TabItem value="get_queue_limit_association">

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
    <td>The Unix timestamp of the date and time that the association was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The user identifier of the person that created the association.</td>
</tr>
<tr>
    <td><CopyableCode code="limitId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the limit associated with the queue. (pattern: &lt;code&gt;limit-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="queueId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the queue associated with the limit. (pattern: &lt;code&gt;queue-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the limit. (ACTIVE, STOP_LIMIT_USAGE_AND_COMPLETE_TASKS, STOP_LIMIT_USAGE_AND_CANCEL_TASKS, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp of the date and time that the association was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedBy" /></td>
    <td><code>string</code></td>
    <td>The user identifier of the person that last updated the association.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_queue_limit_associations">

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
    <td>The Unix timestamp of the date and time that the association was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The user identifier of the person that created the association.</td>
</tr>
<tr>
    <td><CopyableCode code="limitId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the limit in the association. (pattern: &lt;code&gt;limit-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="queueId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the queue in the association. (pattern: &lt;code&gt;queue-&#91;0-9a-f&#93;&#123;32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of task scheduling in the queue-limit association. ACTIVE - Association is active. STOP_LIMIT_USAGE_AND_COMPLETE_TASKS - Association has stopped scheduling new tasks and is completing current tasks. STOP_LIMIT_USAGE_AND_CANCEL_TASKS - Association has stopped scheduling new tasks and is canceling current tasks. STOPPED - Association has been stopped. (ACTIVE, STOP_LIMIT_USAGE_AND_COMPLETE_TASKS, STOP_LIMIT_USAGE_AND_CANCEL_TASKS, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp of the date and time that the association was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedBy" /></td>
    <td><code>string</code></td>
    <td>The user identifier of the person that updated the association.</td>
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
    <td><a href="#get_queue_limit_association"><CopyableCode code="get_queue_limit_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-limit_id"><code>limit_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a specific association between a queue and a limit.</td>
</tr>
<tr>
    <td><a href="#list_queue_limit_associations"><CopyableCode code="list_queue_limit_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-queueId"><code>queueId</code></a>, <a href="#parameter-limitId"><code>limitId</code></a></td>
    <td>Gets a list of the associations between queues and limits defined in a farm.</td>
</tr>
<tr>
    <td><a href="#create_queue_limit_association"><CopyableCode code="create_queue_limit_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-queueId"><code>queueId</code></a>, <a href="#parameter-limitId"><code>limitId</code></a></td>
    <td></td>
    <td>Associates a limit with a particular queue. After the limit is associated, all workers for jobs that specify the limit associated with the queue are subject to the limit. You can't associate two limits with the same amountRequirementName to the same queue.</td>
</tr>
<tr>
    <td><a href="#update_queue_limit_association"><CopyableCode code="update_queue_limit_association" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-limit_id"><code>limit_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td></td>
    <td>Updates the status of the queue. If you set the status to one of the STOP_LIMIT_USAGE* values, there will be a delay before the status transitions to the STOPPED state.</td>
</tr>
<tr>
    <td><a href="#delete_queue_limit_association"><CopyableCode code="delete_queue_limit_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-limit_id"><code>limit_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the association between a queue and a limit. You must use the UpdateQueueLimitAssociation operation to set the status to STOP_LIMIT_USAGE_AND_COMPLETE_TASKS or STOP_LIMIT_USAGE_AND_CANCEL_TASKS. The status does not change immediately. Use the GetQueueLimitAssociation operation to see if the status changed to STOPPED before deleting the association.</td>
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
    <td>The unique identifier of the farm that contains the queue and limit to disassociate.</td>
</tr>
<tr id="parameter-limit_id">
    <td><CopyableCode code="limit_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the limit to disassociate.</td>
</tr>
<tr id="parameter-queue_id">
    <td><CopyableCode code="queue_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the queue to disassociate.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-limitId">
    <td><CopyableCode code="limitId" /></td>
    <td><code>string</code></td>
    <td>Specifies that the operation should return only the queue limit associations for the specified limit. If you specify both the queueId and the limitId, only the specified limit is returned if it exists.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of associations to return in each page of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null to start from the beginning.</td>
</tr>
<tr id="parameter-queueId">
    <td><CopyableCode code="queueId" /></td>
    <td><code>string</code></td>
    <td>Specifies that the operation should return only the queue limit associations for the specified queue. If you specify both the queueId and the limitId, only the specified limit is returned if it exists.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_queue_limit_association"
    values={[
        { label: 'get_queue_limit_association', value: 'get_queue_limit_association' },
        { label: 'list_queue_limit_associations', value: 'list_queue_limit_associations' }
    ]}
>
<TabItem value="get_queue_limit_association">

Gets information about a specific association between a queue and a limit.

```sql
SELECT
createdAt,
createdBy,
limitId,
queueId,
status,
updatedAt,
updatedBy
FROM aws.deadline.queue_limit_associations
WHERE farm_id = '{{ farm_id }}' -- required
AND queue_id = '{{ queue_id }}' -- required
AND limit_id = '{{ limit_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_queue_limit_associations">

Gets a list of the associations between queues and limits defined in a farm.

```sql
SELECT
createdAt,
createdBy,
limitId,
queueId,
status,
updatedAt,
updatedBy
FROM aws.deadline.queue_limit_associations
WHERE farm_id = '{{ farm_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND queueId = '{{ queueId }}'
AND limitId = '{{ limitId }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_queue_limit_association"
    values={[
        { label: 'create_queue_limit_association', value: 'create_queue_limit_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_queue_limit_association">

Associates a limit with a particular queue. After the limit is associated, all workers for jobs that specify the limit associated with the queue are subject to the limit. You can't associate two limits with the same amountRequirementName to the same queue.

```sql
INSERT INTO aws.deadline.queue_limit_associations (
queueId,
limitId,
farm_id,
region
)
SELECT 
'{{ queueId }}' /* required */,
'{{ limitId }}' /* required */,
'{{ farm_id }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: queue_limit_associations
  props:
    - name: farm_id
      value: "{{ farm_id }}"
      description: Required parameter for the queue_limit_associations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the queue_limit_associations resource.
    - name: queueId
      value: "{{ queueId }}"
    - name: limitId
      value: "{{ limitId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_queue_limit_association"
    values={[
        { label: 'update_queue_limit_association', value: 'update_queue_limit_association' }
    ]}
>
<TabItem value="update_queue_limit_association">

Updates the status of the queue. If you set the status to one of the STOP_LIMIT_USAGE* values, there will be a delay before the status transitions to the STOPPED state.

```sql
UPDATE aws.deadline.queue_limit_associations
SET 
status = '{{ status }}'
WHERE 
farm_id = '{{ farm_id }}' --required
AND queue_id = '{{ queue_id }}' --required
AND limit_id = '{{ limit_id }}' --required
AND region = '{{ region }}' --required
AND status = '{{ status }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_queue_limit_association"
    values={[
        { label: 'delete_queue_limit_association', value: 'delete_queue_limit_association' }
    ]}
>
<TabItem value="delete_queue_limit_association">

Removes the association between a queue and a limit. You must use the UpdateQueueLimitAssociation operation to set the status to STOP_LIMIT_USAGE_AND_COMPLETE_TASKS or STOP_LIMIT_USAGE_AND_CANCEL_TASKS. The status does not change immediately. Use the GetQueueLimitAssociation operation to see if the status changed to STOPPED before deleting the association.

```sql
DELETE FROM aws.deadline.queue_limit_associations
WHERE farm_id = '{{ farm_id }}' --required
AND queue_id = '{{ queue_id }}' --required
AND limit_id = '{{ limit_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
