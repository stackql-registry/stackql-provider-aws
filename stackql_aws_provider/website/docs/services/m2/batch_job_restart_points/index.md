--- 
title: batch_job_restart_points
hide_title: false
hide_table_of_contents: false
keywords:
  - batch_job_restart_points
  - m2
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

Creates, updates, deletes, gets or lists a <code>batch_job_restart_points</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="batch_job_restart_points" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.m2.batch_job_restart_points" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_batch_job_restart_points"
    values={[
        { label: 'list_batch_job_restart_points', value: 'list_batch_job_restart_points' }
    ]}
>
<TabItem value="list_batch_job_restart_points">

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
    <td><CopyableCode code="batch_job_steps" /></td>
    <td><code>array</code></td>
    <td>Returns all the batch job steps and related information for a batch job that previously ran.</td>
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
    <td><a href="#list_batch_job_restart_points"><CopyableCode code="list_batch_job_restart_points" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-execution_id"><code>execution_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-authSecretsManagerArn"><code>authSecretsManagerArn</code></a></td>
    <td>Lists all the job steps for a JCL file to restart a batch job. This is only applicable for Micro Focus engine with versions 8.0.6 and above.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the application.</td>
</tr>
<tr id="parameter-execution_id">
    <td><CopyableCode code="execution_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the batch job execution.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-authSecretsManagerArn">
    <td><CopyableCode code="authSecretsManagerArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Secrets Manager containing user's credentials for authentication and authorization for List Batch Job Restart Points operation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_batch_job_restart_points"
    values={[
        { label: 'list_batch_job_restart_points', value: 'list_batch_job_restart_points' }
    ]}
>
<TabItem value="list_batch_job_restart_points">

Lists all the job steps for a JCL file to restart a batch job. This is only applicable for Micro Focus engine with versions 8.0.6 and above.

```sql
SELECT
batch_job_steps
FROM aws.m2.batch_job_restart_points
WHERE application_id = '{{ application_id }}' -- required
AND execution_id = '{{ execution_id }}' -- required
AND region = '{{ region }}' -- required
AND authSecretsManagerArn = '{{ authSecretsManagerArn }}'
;
```
</TabItem>
</Tabs>
