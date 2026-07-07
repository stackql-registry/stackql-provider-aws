--- 
title: job_entities
hide_title: false
hide_table_of_contents: false
keywords:
  - job_entities
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

Creates, updates, deletes, gets or lists a <code>job_entities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="job_entities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.deadline.job_entities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_job_entity"
    values={[
        { label: 'batch_get_job_entity', value: 'batch_get_job_entity' }
    ]}
>
<TabItem value="batch_get_job_entity">

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
    <td><CopyableCode code="entities" /></td>
    <td><code>array</code></td>
    <td>A list of the job entities, or details, in the batch.</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>A list of errors from the job error logs for the batch.</td>
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
    <td><a href="#batch_get_job_entity"><CopyableCode code="batch_get_job_entity" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-fleet_id"><code>fleet_id</code></a>, <a href="#parameter-worker_id"><code>worker_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get batched job details for a worker.</td>
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
    <td>The farm ID of the worker that's fetching job details. The worker must have an assignment on a job to fetch job details.</td>
</tr>
<tr id="parameter-fleet_id">
    <td><CopyableCode code="fleet_id" /></td>
    <td><code>string</code></td>
    <td>The fleet ID of the worker that's fetching job details. The worker must have an assignment on a job to fetch job details.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-worker_id">
    <td><CopyableCode code="worker_id" /></td>
    <td><code>string</code></td>
    <td>The worker ID of the worker containing the job details to get.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="batch_get_job_entity"
    values={[
        { label: 'batch_get_job_entity', value: 'batch_get_job_entity' }
    ]}
>
<TabItem value="batch_get_job_entity">

Get batched job details for a worker.

```sql
SELECT
entities,
errors
FROM aws.deadline.job_entities
WHERE farm_id = '{{ farm_id }}' -- required
AND fleet_id = '{{ fleet_id }}' -- required
AND worker_id = '{{ worker_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
