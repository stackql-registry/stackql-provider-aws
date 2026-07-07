--- 
title: jobs_by_consumable_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - jobs_by_consumable_resources
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

Creates, updates, deletes, gets or lists a <code>jobs_by_consumable_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="jobs_by_consumable_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.batch.jobs_by_consumable_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_jobs_by_consumable_resource"
    values={[
        { label: 'list_jobs_by_consumable_resource', value: 'list_jobs_by_consumable_resource' }
    ]}
>
<TabItem value="list_jobs_by_consumable_resource">

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
    <td><CopyableCode code="consumableResourceProperties" /></td>
    <td><code>object</code></td>
    <td>Contains a list of consumable resources required by the job.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>integer (int64)</code></td>
    <td>The Unix timestamp (in milliseconds) for when the consumable resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="jobArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="jobDefinitionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the job definition.</td>
</tr>
<tr>
    <td><CopyableCode code="jobName" /></td>
    <td><code>string</code></td>
    <td>The name of the job.</td>
</tr>
<tr>
    <td><CopyableCode code="jobQueueArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the job queue.</td>
</tr>
<tr>
    <td><CopyableCode code="jobStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the job. Can be one of: SUBMITTED PENDING RUNNABLE STARTING RUNNING SUCCEEDED FAILED</td>
</tr>
<tr>
    <td><CopyableCode code="quantity" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total amount of the consumable resource that is available.</td>
</tr>
<tr>
    <td><CopyableCode code="shareIdentifier" /></td>
    <td><code>string</code></td>
    <td>The fair-share scheduling identifier for the job.</td>
</tr>
<tr>
    <td><CopyableCode code="startedAt" /></td>
    <td><code>integer (int64)</code></td>
    <td>The Unix timestamp for when the job was started. More specifically, it's when the job transitioned from the STARTING state to the RUNNING state.</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>A short, human-readable string to provide more details for the current status of the job.</td>
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
    <td><a href="#list_jobs_by_consumable_resource"><CopyableCode code="list_jobs_by_consumable_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of Batch jobs that require a specific consumable resource.</td>
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
    defaultValue="list_jobs_by_consumable_resource"
    values={[
        { label: 'list_jobs_by_consumable_resource', value: 'list_jobs_by_consumable_resource' }
    ]}
>
<TabItem value="list_jobs_by_consumable_resource">

Returns a list of Batch jobs that require a specific consumable resource.

```sql
SELECT
consumableResourceProperties,
createdAt,
jobArn,
jobDefinitionArn,
jobName,
jobQueueArn,
jobStatus,
quantity,
shareIdentifier,
startedAt,
statusReason
FROM aws.batch.jobs_by_consumable_resources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
