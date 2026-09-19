--- 
title: next_pending_job_executions
hide_title: false
hide_table_of_contents: false
keywords:
  - next_pending_job_executions
  - iot_jobs_data
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

Creates, updates, deletes, gets or lists a <code>next_pending_job_executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="next_pending_job_executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_jobs_data.next_pending_job_executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#start_next_pending_job_execution"><CopyableCode code="start_next_pending_job_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-thing_name"><code>thing_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets and starts the next pending (status IN_PROGRESS or QUEUED) job execution for a thing. Requires permission to access the StartNextPendingJobExecution action.</td>
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
<tr id="parameter-thing_name">
    <td><CopyableCode code="thing_name" /></td>
    <td><code>string</code></td>
    <td>The name of the thing associated with the device.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="start_next_pending_job_execution"
    values={[
        { label: 'start_next_pending_job_execution', value: 'start_next_pending_job_execution' }
    ]}
>
<TabItem value="start_next_pending_job_execution">

Gets and starts the next pending (status IN_PROGRESS or QUEUED) job execution for a thing. Requires permission to access the StartNextPendingJobExecution action.

```sql
EXEC aws.iot_jobs_data.next_pending_job_executions.start_next_pending_job_execution 
@thing_name='{{ thing_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"statusDetails": "{{ statusDetails }}", 
"stepTimeoutInMinutes": {{ stepTimeoutInMinutes }}
}'
;
```
</TabItem>
</Tabs>
