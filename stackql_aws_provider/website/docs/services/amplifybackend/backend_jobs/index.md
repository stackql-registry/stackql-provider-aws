--- 
title: backend_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - backend_jobs
  - amplifybackend
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

Creates, updates, deletes, gets or lists a <code>backend_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="backend_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.amplifybackend.backend_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_backend_job"
    values={[
        { label: 'get_backend_job', value: 'get_backend_job' },
        { label: 'list_backend_jobs', value: 'list_backend_jobs' }
    ]}
>
<TabItem value="get_backend_job">

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
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The app ID.</td>
</tr>
<tr>
    <td><CopyableCode code="backend_environment_name" /></td>
    <td><code>string</code></td>
    <td>The name of the backend environment.</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string</code></td>
    <td>The time when the job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>string</code></td>
    <td>If the request fails, this error is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the job.</td>
</tr>
<tr>
    <td><CopyableCode code="operation" /></td>
    <td><code>string</code></td>
    <td>The name of the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string</code></td>
    <td>The time when the job was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_backend_jobs">

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
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The app ID.</td>
</tr>
<tr>
    <td><CopyableCode code="backend_environment_name" /></td>
    <td><code>string</code></td>
    <td>The name of the backend environment.</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string</code></td>
    <td>The time when the job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>string</code></td>
    <td>If the request fails, this error is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the job.</td>
</tr>
<tr>
    <td><CopyableCode code="operation" /></td>
    <td><code>string</code></td>
    <td>The name of the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="update_time" /></td>
    <td><code>string</code></td>
    <td>The time when the job was last updated.</td>
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
    <td><a href="#get_backend_job"><CopyableCode code="get_backend_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-backend_environment_name"><code>backend_environment_name</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specific job.</td>
</tr>
<tr>
    <td><a href="#list_backend_jobs"><CopyableCode code="list_backend_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-backend_environment_name"><code>backend_environment_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the jobs for the backend of an Amplify app.</td>
</tr>
<tr>
    <td><a href="#update_backend_job"><CopyableCode code="update_backend_job" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-backend_environment_name"><code>backend_environment_name</code></a>, <a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a specific job.</td>
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
<tr id="parameter-app_id">
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The app ID.</td>
</tr>
<tr id="parameter-backend_environment_name">
    <td><CopyableCode code="backend_environment_name" /></td>
    <td><code>string</code></td>
    <td>The name of the backend environment.</td>
</tr>
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the job.</td>
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
    defaultValue="get_backend_job"
    values={[
        { label: 'get_backend_job', value: 'get_backend_job' },
        { label: 'list_backend_jobs', value: 'list_backend_jobs' }
    ]}
>
<TabItem value="get_backend_job">

Returns information about a specific job.

```sql
SELECT
app_id,
backend_environment_name,
create_time,
error,
job_id,
operation,
status,
update_time
FROM aws.amplifybackend.backend_jobs
WHERE app_id = '{{ app_id }}' -- required
AND backend_environment_name = '{{ backend_environment_name }}' -- required
AND job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_backend_jobs">

Lists the jobs for the backend of an Amplify app.

```sql
SELECT
app_id,
backend_environment_name,
create_time,
error,
job_id,
operation,
status,
update_time
FROM aws.amplifybackend.backend_jobs
WHERE app_id = '{{ app_id }}' -- required
AND backend_environment_name = '{{ backend_environment_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_backend_job"
    values={[
        { label: 'update_backend_job', value: 'update_backend_job' }
    ]}
>
<TabItem value="update_backend_job">

Updates a specific job.

```sql
UPDATE aws.amplifybackend.backend_jobs
SET 
Operation = '{{ Operation }}',
Status = '{{ Status }}'
WHERE 
app_id = '{{ app_id }}' --required
AND backend_environment_name = '{{ backend_environment_name }}' --required
AND job_id = '{{ job_id }}' --required
AND region = '{{ region }}' --required
RETURNING
app_id,
backend_environment_name,
create_time,
error,
job_id,
operation,
status,
update_time;
```
</TabItem>
</Tabs>
