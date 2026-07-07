--- 
title: earth_observation_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - earth_observation_jobs
  - sagemaker_geospatial
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

Creates, updates, deletes, gets or lists an <code>earth_observation_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="earth_observation_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker_geospatial.earth_observation_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_earth_observation_job"
    values={[
        { label: 'get_earth_observation_job', value: 'get_earth_observation_job' },
        { label: 'list_earth_observation_jobs', value: 'list_earth_observation_jobs' }
    ]}
>
<TabItem value="get_earth_observation_job">

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
    <td>The Amazon Resource Name (ARN) of the Earth Observation job.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the initiated Earth Observation job.</td>
</tr>
<tr>
    <td><CopyableCode code="DurationInSeconds" /></td>
    <td><code>integer</code></td>
    <td>The duration of Earth Observation job, in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorDetails" /></td>
    <td><code>object</code></td>
    <td>Details about the errors generated during the Earth Observation job.</td>
</tr>
<tr>
    <td><CopyableCode code="ExecutionRoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that you specified for the job. (pattern: &lt;code&gt;^arn:(aws&#91;a-z-&#93;*):iam::(&#91;0-9&#93;&#123;12&#125;):role/&#91;a-zA-Z0-9+=,.@_/-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ExportErrorDetails" /></td>
    <td><code>object</code></td>
    <td>Details about the errors generated during ExportEarthObservationJob.</td>
</tr>
<tr>
    <td><CopyableCode code="ExportStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the Earth Observation job. (IN_PROGRESS, SUCCEEDED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="InputConfig" /></td>
    <td><code>object</code></td>
    <td>Input data for the Earth Observation job.</td>
</tr>
<tr>
    <td><CopyableCode code="JobConfig" /></td>
    <td><code>object</code></td>
    <td>An object containing information about the job configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The Key Management Service key ID for server-side encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the Earth Observation job.</td>
</tr>
<tr>
    <td><CopyableCode code="OutputBands" /></td>
    <td><code>array</code></td>
    <td>Bands available in the output of an operation.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of a previously initiated Earth Observation job. (INITIALIZING, IN_PROGRESS, STOPPING, COMPLETED, STOPPED, FAILED, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>Each tag consists of a key and a value.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_earth_observation_jobs">

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
    <td>The Amazon Resource Name (ARN) of the list of the Earth Observation jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="DurationInSeconds" /></td>
    <td><code>integer</code></td>
    <td>The duration of the session, in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The names of the Earth Observation jobs in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="OperationType" /></td>
    <td><code>string</code></td>
    <td>The operation type for an Earth Observation job.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the list of the Earth Observation jobs. (INITIALIZING, IN_PROGRESS, STOPPING, COMPLETED, STOPPED, FAILED, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>Each tag consists of a key and a value.</td>
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
    <td><a href="#get_earth_observation_job"><CopyableCode code="get_earth_observation_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the details for a previously initiated Earth Observation job.</td>
</tr>
<tr>
    <td><a href="#list_earth_observation_jobs"><CopyableCode code="list_earth_observation_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use this operation to get a list of the Earth Observation jobs associated with the calling Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#delete_earth_observation_job"><CopyableCode code="delete_earth_observation_job" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use this operation to delete an Earth Observation job.</td>
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
<tr id="parameter-arn">
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Earth Observation job being deleted.</td>
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
    defaultValue="get_earth_observation_job"
    values={[
        { label: 'get_earth_observation_job', value: 'get_earth_observation_job' },
        { label: 'list_earth_observation_jobs', value: 'list_earth_observation_jobs' }
    ]}
>
<TabItem value="get_earth_observation_job">

Get the details for a previously initiated Earth Observation job.

```sql
SELECT
Arn,
CreationTime,
DurationInSeconds,
ErrorDetails,
ExecutionRoleArn,
ExportErrorDetails,
ExportStatus,
InputConfig,
JobConfig,
KmsKeyId,
Name,
OutputBands,
Status,
Tags
FROM aws.sagemaker_geospatial.earth_observation_jobs
WHERE arn = '{{ arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_earth_observation_jobs">

Use this operation to get a list of the Earth Observation jobs associated with the calling Amazon Web Services account.

```sql
SELECT
Arn,
CreationTime,
DurationInSeconds,
Name,
OperationType,
Status,
Tags
FROM aws.sagemaker_geospatial.earth_observation_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_earth_observation_job"
    values={[
        { label: 'delete_earth_observation_job', value: 'delete_earth_observation_job' }
    ]}
>
<TabItem value="delete_earth_observation_job">

Use this operation to delete an Earth Observation job.

```sql
DELETE FROM aws.sagemaker_geospatial.earth_observation_jobs
WHERE arn = '{{ arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
