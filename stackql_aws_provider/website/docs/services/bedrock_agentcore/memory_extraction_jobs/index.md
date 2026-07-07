--- 
title: memory_extraction_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - memory_extraction_jobs
  - bedrock_agentcore
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

Creates, updates, deletes, gets or lists a <code>memory_extraction_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="memory_extraction_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore.memory_extraction_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_memory_extraction_jobs"
    values={[
        { label: 'list_memory_extraction_jobs', value: 'list_memory_extraction_jobs' }
    ]}
>
<TabItem value="list_memory_extraction_jobs">

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
    <td><CopyableCode code="actorId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the actor for this extraction job.</td>
</tr>
<tr>
    <td><CopyableCode code="failureReason" /></td>
    <td><code>string</code></td>
    <td>The cause of failure, if the job did not complete successfully.</td>
</tr>
<tr>
    <td><CopyableCode code="jobID" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the extraction job.</td>
</tr>
<tr>
    <td><CopyableCode code="messages" /></td>
    <td><code>object</code></td>
    <td>The messages associated with the extraction job.</td>
</tr>
<tr>
    <td><CopyableCode code="sessionId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the session for this extraction job.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the extraction job. (FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="strategyId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the memory strategy for this extraction job.</td>
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
    <td><a href="#list_memory_extraction_jobs"><CopyableCode code="list_memory_extraction_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-memory_id"><code>memory_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all long-term memory extraction jobs that are eligible to be started with optional filtering. To use this operation, you must have the bedrock-agentcore:ListMemoryExtractionJobs permission.</td>
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
<tr id="parameter-memory_id">
    <td><CopyableCode code="memory_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the memory to list extraction jobs for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_memory_extraction_jobs"
    values={[
        { label: 'list_memory_extraction_jobs', value: 'list_memory_extraction_jobs' }
    ]}
>
<TabItem value="list_memory_extraction_jobs">

Lists all long-term memory extraction jobs that are eligible to be started with optional filtering. To use this operation, you must have the bedrock-agentcore:ListMemoryExtractionJobs permission.

```sql
SELECT
actorId,
failureReason,
jobID,
messages,
sessionId,
status,
strategyId
FROM aws.bedrock_agentcore.memory_extraction_jobs
WHERE memory_id = '{{ memory_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
