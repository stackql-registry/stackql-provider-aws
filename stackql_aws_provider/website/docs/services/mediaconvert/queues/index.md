--- 
title: queues
hide_title: false
hide_table_of_contents: false
keywords:
  - queues
  - mediaconvert
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

Creates, updates, deletes, gets or lists a <code>queues</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="queues" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediaconvert.queues" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_queue"
    values={[
        { label: 'get_queue', value: 'get_queue' },
        { label: 'list_queues', value: 'list_queues' }
    ]}
>
<TabItem value="get_queue">

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
    <td>An identifier for this resource that is unique within all of AWS.</td>
</tr>
<tr>
    <td><CopyableCode code="ConcurrentJobs" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of jobs your queue can process concurrently.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp in epoch seconds for when you created the queue.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>An optional description that you create for each queue.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp in epoch seconds for when you most recently updated the queue.</td>
</tr>
<tr>
    <td><CopyableCode code="MaximumConcurrentFeeds" /></td>
    <td><code>integer</code></td>
    <td>Specify the maximum number of Elemental Inference feeds MediaConvert can process concurrently.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A name that you create for each queue. Each name must be unique within your account.</td>
</tr>
<tr>
    <td><CopyableCode code="PricingPlan" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the pricing plan for the queue is on-demand or reserved. For on-demand, you pay per minute, billed in increments of .01 minute. For reserved, you pay for the transcoding capacity of the entire queue, regardless of how much or how little you use it. Reserved pricing requires a 12-month commitment. (ON_DEMAND, RESERVED)</td>
</tr>
<tr>
    <td><CopyableCode code="ProgressingJobsCount" /></td>
    <td><code>integer</code></td>
    <td>The estimated number of jobs with a PROGRESSING status.</td>
</tr>
<tr>
    <td><CopyableCode code="ReservationPlan" /></td>
    <td><code>object</code></td>
    <td>Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceOverrides" /></td>
    <td><code>array</code></td>
    <td>A list of any service overrides applied by MediaConvert to the settings that you have configured. If you see any overrides, we recommend that you contact AWS Support.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Queues can be ACTIVE or PAUSED. If you pause a queue, jobs in that queue won't begin. Jobs that are running when you pause a queue continue to run until they finish or result in an error. (ACTIVE, PAUSED)</td>
</tr>
<tr>
    <td><CopyableCode code="SubmittedJobsCount" /></td>
    <td><code>integer</code></td>
    <td>The estimated number of jobs with a SUBMITTED status.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>Specifies whether this on-demand queue is system or custom. System queues are built in. You can't modify or delete system queues. You can create and modify custom queues. (SYSTEM, CUSTOM)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_queues">

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
    <td>An identifier for this resource that is unique within all of AWS.</td>
</tr>
<tr>
    <td><CopyableCode code="ConcurrentJobs" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of jobs your queue can process concurrently.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp in epoch seconds for when you created the queue.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>An optional description that you create for each queue.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp in epoch seconds for when you most recently updated the queue.</td>
</tr>
<tr>
    <td><CopyableCode code="MaximumConcurrentFeeds" /></td>
    <td><code>integer</code></td>
    <td>Specify the maximum number of Elemental Inference feeds MediaConvert can process concurrently.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A name that you create for each queue. Each name must be unique within your account.</td>
</tr>
<tr>
    <td><CopyableCode code="PricingPlan" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the pricing plan for the queue is on-demand or reserved. For on-demand, you pay per minute, billed in increments of .01 minute. For reserved, you pay for the transcoding capacity of the entire queue, regardless of how much or how little you use it. Reserved pricing requires a 12-month commitment. (ON_DEMAND, RESERVED)</td>
</tr>
<tr>
    <td><CopyableCode code="ProgressingJobsCount" /></td>
    <td><code>integer</code></td>
    <td>The estimated number of jobs with a PROGRESSING status.</td>
</tr>
<tr>
    <td><CopyableCode code="ReservationPlan" /></td>
    <td><code>object</code></td>
    <td>Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceOverrides" /></td>
    <td><code>array</code></td>
    <td>A list of any service overrides applied by MediaConvert to the settings that you have configured. If you see any overrides, we recommend that you contact AWS Support.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Queues can be ACTIVE or PAUSED. If you pause a queue, jobs in that queue won't begin. Jobs that are running when you pause a queue continue to run until they finish or result in an error. (ACTIVE, PAUSED)</td>
</tr>
<tr>
    <td><CopyableCode code="SubmittedJobsCount" /></td>
    <td><code>integer</code></td>
    <td>The estimated number of jobs with a SUBMITTED status.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>Specifies whether this on-demand queue is system or custom. System queues are built in. You can't modify or delete system queues. You can create and modify custom queues. (SYSTEM, CUSTOM)</td>
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
    <td><a href="#get_queue"><CopyableCode code="get_queue" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve the JSON for a specific queue.</td>
</tr>
<tr>
    <td><a href="#list_queues"><CopyableCode code="list_queues" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-listBy"><code>listBy</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-order"><code>order</code></a></td>
    <td>Retrieve a JSON array of up to twenty of your queues. This will return the queues themselves, not just a list of them. To retrieve the next twenty queues, use the nextToken string returned with the array.</td>
</tr>
<tr>
    <td><a href="#create_queue"><CopyableCode code="create_queue" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Create a new transcoding queue. For information about queues, see Working With Queues in the User Guide at https:​//docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html</td>
</tr>
<tr>
    <td><a href="#update_queue"><CopyableCode code="update_queue" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Modify one of your existing queues.</td>
</tr>
<tr>
    <td><a href="#delete_queue"><CopyableCode code="delete_queue" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Permanently delete a queue you have created.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the queue that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-listBy">
    <td><CopyableCode code="listBy" /></td>
    <td><code>string</code></td>
    <td>Optional. When you request a list of queues, you can choose to list them alphabetically by NAME or chronologically by CREATION_DATE. If you don't specify, the service will list them by creation date.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Optional. Number of queues, up to twenty, that will be returned at one time.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Use this string, provided with the response to a previous request, to request the next batch of queues.</td>
</tr>
<tr id="parameter-order">
    <td><CopyableCode code="order" /></td>
    <td><code>string</code></td>
    <td>Optional. When you request lists of resources, you can specify whether they are sorted in ASCENDING or DESCENDING order. Default varies by resource.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_queue"
    values={[
        { label: 'get_queue', value: 'get_queue' },
        { label: 'list_queues', value: 'list_queues' }
    ]}
>
<TabItem value="get_queue">

Retrieve the JSON for a specific queue.

```sql
SELECT
Arn,
ConcurrentJobs,
CreatedAt,
Description,
LastUpdated,
MaximumConcurrentFeeds,
Name,
PricingPlan,
ProgressingJobsCount,
ReservationPlan,
ServiceOverrides,
Status,
SubmittedJobsCount,
Type
FROM aws.mediaconvert.queues
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_queues">

Retrieve a JSON array of up to twenty of your queues. This will return the queues themselves, not just a list of them. To retrieve the next twenty queues, use the nextToken string returned with the array.

```sql
SELECT
Arn,
ConcurrentJobs,
CreatedAt,
Description,
LastUpdated,
MaximumConcurrentFeeds,
Name,
PricingPlan,
ProgressingJobsCount,
ReservationPlan,
ServiceOverrides,
Status,
SubmittedJobsCount,
Type
FROM aws.mediaconvert.queues
WHERE region = '{{ region }}' -- required
AND listBy = '{{ listBy }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND order = '{{ order }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_queue"
    values={[
        { label: 'create_queue', value: 'create_queue' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_queue">

Create a new transcoding queue. For information about queues, see Working With Queues in the User Guide at https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html

```sql
INSERT INTO aws.mediaconvert.queues (
ConcurrentJobs,
Description,
MaximumConcurrentFeeds,
Name,
PricingPlan,
ReservationPlanSettings,
Status,
Tags,
region
)
SELECT 
{{ ConcurrentJobs }},
'{{ Description }}',
{{ MaximumConcurrentFeeds }},
'{{ Name }}',
'{{ PricingPlan }}',
'{{ ReservationPlanSettings }}',
'{{ Status }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
Queue
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: queues
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the queues resource.
    - name: ConcurrentJobs
      value: {{ ConcurrentJobs }}
    - name: Description
      value: "{{ Description }}"
    - name: MaximumConcurrentFeeds
      value: {{ MaximumConcurrentFeeds }}
    - name: Name
      value: "{{ Name }}"
    - name: PricingPlan
      value: "{{ PricingPlan }}"
      description: |
        Specifies whether the pricing plan for the queue is on-demand or reserved. For on-demand, you pay per minute, billed in increments of .01 minute. For reserved, you pay for the transcoding capacity of the entire queue, regardless of how much or how little you use it. Reserved pricing requires a 12-month commitment.
      valid_values: ['ON_DEMAND', 'RESERVED']
    - name: ReservationPlanSettings
      description: |
        Details about the pricing plan for your reserved queue. Required for reserved queues and not applicable to on-demand queues.
      value:
        Commitment: "{{ Commitment }}"
        RenewalType: "{{ RenewalType }}"
        ReservedSlots: {{ ReservedSlots }}
    - name: Status
      value: "{{ Status }}"
      description: |
        Queues can be ACTIVE or PAUSED. If you pause a queue, jobs in that queue won't begin. Jobs that are running when you pause a queue continue to run until they finish or result in an error.
      valid_values: ['ACTIVE', 'PAUSED']
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_queue"
    values={[
        { label: 'update_queue', value: 'update_queue' }
    ]}
>
<TabItem value="update_queue">

Modify one of your existing queues.

```sql
UPDATE aws.mediaconvert.queues
SET 
ConcurrentJobs = {{ ConcurrentJobs }},
Description = '{{ Description }}',
MaximumConcurrentFeeds = {{ MaximumConcurrentFeeds }},
ReservationPlanSettings = '{{ ReservationPlanSettings }}',
Status = '{{ Status }}'
WHERE 
name = '{{ name }}' --required
AND region = '{{ region }}' --required
RETURNING
Queue;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_queue"
    values={[
        { label: 'delete_queue', value: 'delete_queue' }
    ]}
>
<TabItem value="delete_queue">

Permanently delete a queue you have created.

```sql
DELETE FROM aws.mediaconvert.queues
WHERE name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
