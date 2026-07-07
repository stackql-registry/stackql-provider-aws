--- 
title: job_queue_snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - job_queue_snapshots
  - batch
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

Creates, updates, deletes, gets or lists a <code>job_queue_snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="job_queue_snapshots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.batch.job_queue_snapshots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_job_queue_snapshot"
    values={[
        { label: 'get_job_queue_snapshot', value: 'get_job_queue_snapshot' }
    ]}
>
<TabItem value="get_job_queue_snapshot">

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
    <td><CopyableCode code="frontOfQueue" /></td>
    <td><code>object</code></td>
    <td>The list of the first 100 RUNNABLE jobs in each job queue. For first-in-first-out (FIFO) job queues, jobs are ordered based on their submission time. For job queues with an attached fair-share scheduling (FSS) or quota-share policy, jobs are ordered based on their job priority and share usage.</td>
</tr>
<tr>
    <td><CopyableCode code="frontOfQuotaShares" /></td>
    <td><code>object</code></td>
    <td>The first RUNNABLE job in each quota share. Jobs are ordered based on their job priority and share usage.</td>
</tr>
<tr>
    <td><CopyableCode code="queueUtilization" /></td>
    <td><code>object</code></td>
    <td>The job queue's capacity utilization, including total usage and breakdown per given share.</td>
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
    <td><a href="#get_job_queue_snapshot"><CopyableCode code="get_job_queue_snapshot" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a snapshot of job queue state, including ordering of RUNNABLE jobs, as well as capacity utilization for already dispatched jobs. The first 100 RUNNABLE jobs in the job queue are listed in order of dispatch. For job queues with an attached quota-share policy, the first RUNNABLE job in each quota share is also listed. Capacity utilization for the job queue is provided, as well as break downs by share for job queues with attached fair-share or quota-share scheduling policies.</td>
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
    defaultValue="get_job_queue_snapshot"
    values={[
        { label: 'get_job_queue_snapshot', value: 'get_job_queue_snapshot' }
    ]}
>
<TabItem value="get_job_queue_snapshot">

Provides a snapshot of job queue state, including ordering of RUNNABLE jobs, as well as capacity utilization for already dispatched jobs. The first 100 RUNNABLE jobs in the job queue are listed in order of dispatch. For job queues with an attached quota-share policy, the first RUNNABLE job in each quota share is also listed. Capacity utilization for the job queue is provided, as well as break downs by share for job queues with attached fair-share or quota-share scheduling policies.

```sql
SELECT
frontOfQueue,
frontOfQuotaShares,
queueUtilization
FROM aws.batch.job_queue_snapshots
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
