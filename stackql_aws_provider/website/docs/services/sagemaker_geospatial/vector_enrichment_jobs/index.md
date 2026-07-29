--- 
title: vector_enrichment_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - vector_enrichment_jobs
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

Creates, updates, deletes, gets or lists a <code>vector_enrichment_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vector_enrichment_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker_geospatial.vector_enrichment_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_vector_enrichment_job"
    values={[
        { label: 'get_vector_enrichment_job', value: 'get_vector_enrichment_job' },
        { label: 'list_vector_enrichment_jobs', value: 'list_vector_enrichment_jobs' }
    ]}
>
<TabItem value="get_vector_enrichment_job">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Vector Enrichment job.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="duration_in_seconds" /></td>
    <td><code>integer</code></td>
    <td>The duration of the Vector Enrichment job, in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="error_details" /></td>
    <td><code>object</code></td>
    <td>Details about the errors generated during the Vector Enrichment job.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that you specified for the job. (pattern: &lt;code&gt;^arn:(aws&#91;a-z-&#93;*):iam::(&#91;0-9&#93;&#123;12&#125;):role/&#91;a-zA-Z0-9+=,.@_/-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="export_error_details" /></td>
    <td><code>object</code></td>
    <td>Details about the errors generated during the ExportVectorEnrichmentJob.</td>
</tr>
<tr>
    <td><CopyableCode code="export_status" /></td>
    <td><code>string</code></td>
    <td>The export status of the Vector Enrichment job being initiated. (IN_PROGRESS, SUCCEEDED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="input_config" /></td>
    <td><code>object</code></td>
    <td>Input configuration information for the Vector Enrichment job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_config" /></td>
    <td><code>object</code></td>
    <td>An object containing information about the job configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The Key Management Service key ID for server-side encryption.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the Vector Enrichment job.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the initiated Vector Enrichment job. (INITIALIZING, IN_PROGRESS, STOPPING, STOPPED, COMPLETED, FAILED, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Each tag consists of a key and a value.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the Vector Enrichment job being initiated. (REVERSE_GEOCODING, MAP_MATCHING)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_vector_enrichment_jobs">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the list of the Vector Enrichment jobs. (pattern: &lt;code&gt;^arn:aws&#91;a-z-&#93;&#123;0,12&#125;:sagemaker-geospatial:&#91;a-z0-9-&#93;&#123;1,25&#125;:&#91;0-9&#93;&#123;12&#125;:vector-enrichment-job/&#91;a-z0-9&#93;&#123;12,&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time.</td>
</tr>
<tr>
    <td><CopyableCode code="duration_in_seconds" /></td>
    <td><code>integer</code></td>
    <td>The duration of the session, in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The names of the Vector Enrichment jobs in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the Vector Enrichment jobs list. (INITIALIZING, IN_PROGRESS, STOPPING, STOPPED, COMPLETED, FAILED, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Each tag consists of a key and a value.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the list of Vector Enrichment jobs. (REVERSE_GEOCODING, MAP_MATCHING)</td>
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
    <td><a href="#get_vector_enrichment_job"><CopyableCode code="get_vector_enrichment_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details of a Vector Enrichment Job for a given job Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><a href="#list_vector_enrichment_jobs"><CopyableCode code="list_vector_enrichment_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of vector enrichment jobs.</td>
</tr>
<tr>
    <td><a href="#delete_vector_enrichment_job"><CopyableCode code="delete_vector_enrichment_job" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use this operation to delete a Vector Enrichment job.</td>
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
    <td>The Amazon Resource Name (ARN) of the Vector Enrichment job being deleted.</td>
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
    defaultValue="get_vector_enrichment_job"
    values={[
        { label: 'get_vector_enrichment_job', value: 'get_vector_enrichment_job' },
        { label: 'list_vector_enrichment_jobs', value: 'list_vector_enrichment_jobs' }
    ]}
>
<TabItem value="get_vector_enrichment_job">

Retrieves details of a Vector Enrichment Job for a given job Amazon Resource Name (ARN).

```sql
SELECT
arn,
creation_time,
duration_in_seconds,
error_details,
execution_role_arn,
export_error_details,
export_status,
input_config,
job_config,
kms_key_id,
name,
status,
tags,
type
FROM aws.sagemaker_geospatial.vector_enrichment_jobs
WHERE arn = '{{ arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_vector_enrichment_jobs">

Retrieves a list of vector enrichment jobs.

```sql
SELECT
arn,
creation_time,
duration_in_seconds,
name,
status,
tags,
type
FROM aws.sagemaker_geospatial.vector_enrichment_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_vector_enrichment_job"
    values={[
        { label: 'delete_vector_enrichment_job', value: 'delete_vector_enrichment_job' }
    ]}
>
<TabItem value="delete_vector_enrichment_job">

Use this operation to delete a Vector Enrichment job.

```sql
DELETE FROM aws.sagemaker_geospatial.vector_enrichment_jobs
WHERE arn = '{{ arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
