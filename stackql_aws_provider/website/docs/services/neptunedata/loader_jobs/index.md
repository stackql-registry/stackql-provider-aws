--- 
title: loader_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - loader_jobs
  - neptunedata
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

Creates, updates, deletes, gets or lists a <code>loader_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="loader_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.neptunedata.loader_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_loader_jobs"
    values={[
        { label: 'list_loader_jobs', value: 'list_loader_jobs' }
    ]}
>
<TabItem value="list_loader_jobs">

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
    <td><CopyableCode code="payload" /></td>
    <td><code>object</code></td>
    <td>The requested list of job IDs.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Returns the status of the job list request.</td>
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
    <td><a href="#list_loader_jobs"><CopyableCode code="list_loader_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-includeQueuedLoads"><code>includeQueuedLoads</code></a></td>
    <td>Retrieves a list of the loadIds for all active loader jobs. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:ListLoaderJobs IAM action in that cluster..</td>
</tr>
<tr>
    <td><a href="#cancel_loader_job"><CopyableCode code="cancel_loader_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-load_id"><code>load_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Cancels a specified load job. This is an HTTP DELETE request. See Neptune Loader Get-Status API for more information. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:CancelLoaderJob IAM action in that cluster..</td>
</tr>
<tr>
    <td><a href="#start_loader_job"><CopyableCode code="start_loader_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-source"><code>source</code></a>, <a href="#parameter-format"><code>format</code></a>, <a href="#parameter-s3BucketRegion"><code>s3BucketRegion</code></a>, <a href="#parameter-iamRoleArn"><code>iamRoleArn</code></a></td>
    <td></td>
    <td>Starts a Neptune bulk loader job to load data from an Amazon S3 bucket into a Neptune DB instance. See Using the Amazon Neptune Bulk Loader to Ingest Data. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:StartLoaderJob IAM action in that cluster.</td>
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
<tr id="parameter-load_id">
    <td><CopyableCode code="load_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the load job to be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-includeQueuedLoads">
    <td><CopyableCode code="includeQueuedLoads" /></td>
    <td><code>boolean</code></td>
    <td>An optional parameter that can be used to exclude the load IDs of queued load requests when requesting a list of load IDs by setting the parameter to FALSE. The default value is TRUE.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The number of load IDs to list. Must be a positive integer greater than zero and not more than 100 (which is the default).</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_loader_jobs"
    values={[
        { label: 'list_loader_jobs', value: 'list_loader_jobs' }
    ]}
>
<TabItem value="list_loader_jobs">

Retrieves a list of the loadIds for all active loader jobs. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:ListLoaderJobs IAM action in that cluster..

```sql
SELECT
payload,
status
FROM aws.neptunedata.loader_jobs
WHERE region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND includeQueuedLoads = '{{ includeQueuedLoads }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="cancel_loader_job"
    values={[
        { label: 'cancel_loader_job', value: 'cancel_loader_job' },
        { label: 'start_loader_job', value: 'start_loader_job' }
    ]}
>
<TabItem value="cancel_loader_job">

Cancels a specified load job. This is an HTTP DELETE request. See Neptune Loader Get-Status API for more information. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:CancelLoaderJob IAM action in that cluster..

```sql
EXEC aws.neptunedata.loader_jobs.cancel_loader_job 
@load_id='{{ load_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="start_loader_job">

Starts a Neptune bulk loader job to load data from an Amazon S3 bucket into a Neptune DB instance. See Using the Amazon Neptune Bulk Loader to Ingest Data. When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the neptune-db:StartLoaderJob IAM action in that cluster.

```sql
EXEC aws.neptunedata.loader_jobs.start_loader_job 
@region='{{ region }}' --required 
@@json=
'{
"source": "{{ source }}", 
"format": "{{ format }}", 
"s3BucketRegion": "{{ s3BucketRegion }}", 
"iamRoleArn": "{{ iamRoleArn }}", 
"mode": "{{ mode }}", 
"failOnError": {{ failOnError }}, 
"parallelism": "{{ parallelism }}", 
"parserConfiguration": "{{ parserConfiguration }}", 
"updateSingleCardinalityProperties": {{ updateSingleCardinalityProperties }}, 
"queueRequest": {{ queueRequest }}, 
"dependencies": "{{ dependencies }}", 
"userProvidedEdgeIds": {{ userProvidedEdgeIds }}, 
"edgeOnlyLoad": {{ edgeOnlyLoad }}
}'
;
```
</TabItem>
</Tabs>
