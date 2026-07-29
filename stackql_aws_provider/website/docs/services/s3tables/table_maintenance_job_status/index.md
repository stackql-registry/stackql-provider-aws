--- 
title: table_maintenance_job_status
hide_title: false
hide_table_of_contents: false
keywords:
  - table_maintenance_job_status
  - s3tables
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

Creates, updates, deletes, gets or lists a <code>table_maintenance_job_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="table_maintenance_job_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3tables.table_maintenance_job_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_table_maintenance_job_status"
    values={[
        { label: 'get_table_maintenance_job_status', value: 'get_table_maintenance_job_status' }
    ]}
>
<TabItem value="get_table_maintenance_job_status">

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
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the maintenance job.</td>
</tr>
<tr>
    <td><CopyableCode code="table_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the table. (pattern: &lt;code&gt;(arn:aws&#91;-a-z0-9&#93;*:&#91;a-z0-9&#93;+:&#91;-a-z0-9&#93;*:&#91;0-9&#93;&#123;12&#125;:bucket/&#91;a-z0-9_-&#93;&#123;3,63&#125;/table/&#91;a-zA-Z0-9-_&#93;&#123;1,255&#125;)&lt;/code&gt;)</td>
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
    <td><a href="#get_table_maintenance_job_status"><CopyableCode code="get_table_maintenance_job_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-table_bucket_arn"><code>table_bucket_arn</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the status of a maintenance job for a table. For more information, see S3 Tables maintenance in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:GetTableMaintenanceJobStatus permission to use this operation.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the table containing the maintenance job status you want to check.</td>
</tr>
<tr id="parameter-namespace">
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The name of the namespace the table is associated with.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-table_bucket_arn">
    <td><CopyableCode code="table_bucket_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the table bucket.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_table_maintenance_job_status"
    values={[
        { label: 'get_table_maintenance_job_status', value: 'get_table_maintenance_job_status' }
    ]}
>
<TabItem value="get_table_maintenance_job_status">

Gets the status of a maintenance job for a table. For more information, see S3 Tables maintenance in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:GetTableMaintenanceJobStatus permission to use this operation.

```sql
SELECT
status,
table_arn
FROM aws.s3tables.table_maintenance_job_status
WHERE table_bucket_arn = '{{ table_bucket_arn }}' -- required
AND namespace = '{{ namespace }}' -- required
AND name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
