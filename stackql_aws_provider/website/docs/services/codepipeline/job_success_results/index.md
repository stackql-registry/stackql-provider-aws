--- 
title: job_success_results
hide_title: false
hide_table_of_contents: false
keywords:
  - job_success_results
  - codepipeline
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

Creates, updates, deletes, gets or lists a <code>job_success_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="job_success_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codepipeline.job_success_results" /></td></tr>
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
    <td><a href="#put_job_success_result"><CopyableCode code="put_job_success_result" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-jobId"><code>jobId</code></a></td>
    <td></td>
    <td>Represents the success of a job as returned to the pipeline by a job worker. Used for custom actions only.</td>
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

## `REPLACE` examples

<Tabs
    defaultValue="put_job_success_result"
    values={[
        { label: 'put_job_success_result', value: 'put_job_success_result' }
    ]}
>
<TabItem value="put_job_success_result">

Represents the success of a job as returned to the pipeline by a job worker. Used for custom actions only.

```sql
REPLACE aws.codepipeline.job_success_results
SET 
jobId = '{{ jobId }}',
currentRevision = '{{ currentRevision }}',
continuationToken = '{{ continuationToken }}',
executionDetails = '{{ executionDetails }}',
outputVariables = '{{ outputVariables }}'
WHERE 
region = '{{ region }}' --required
AND jobId = '{{ jobId }}' --required;
```
</TabItem>
</Tabs>
