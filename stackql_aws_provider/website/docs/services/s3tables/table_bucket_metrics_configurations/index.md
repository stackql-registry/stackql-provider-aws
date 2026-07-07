--- 
title: table_bucket_metrics_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - table_bucket_metrics_configurations
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

Creates, updates, deletes, gets or lists a <code>table_bucket_metrics_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="table_bucket_metrics_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3tables.table_bucket_metrics_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_table_bucket_metrics_configuration"
    values={[
        { label: 'get_table_bucket_metrics_configuration', value: 'get_table_bucket_metrics_configuration' }
    ]}
>
<TabItem value="get_table_bucket_metrics_configuration">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the metrics configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="tableBucketARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the table bucket. (pattern: &lt;code&gt;(arn:aws&#91;-a-z0-9&#93;*:&#91;a-z0-9&#93;+:&#91;-a-z0-9&#93;*:&#91;0-9&#93;&#123;12&#125;:bucket/&#91;a-z0-9_-&#93;&#123;3,63&#125;)&lt;/code&gt;)</td>
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
    <td><a href="#get_table_bucket_metrics_configuration"><CopyableCode code="get_table_bucket_metrics_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-table_bucket_arn"><code>table_bucket_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the metrics configuration for a table bucket. Permissions You must have the s3tables:GetTableBucketMetricsConfiguration permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#put_table_bucket_metrics_configuration"><CopyableCode code="put_table_bucket_metrics_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-table_bucket_arn"><code>table_bucket_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Sets the metrics configuration for a table bucket. Permissions You must have the s3tables:PutTableBucketMetricsConfiguration permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#delete_table_bucket_metrics_configuration"><CopyableCode code="delete_table_bucket_metrics_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-table_bucket_arn"><code>table_bucket_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the metrics configuration for a table bucket. Permissions You must have the s3tables:DeleteTableBucketMetricsConfiguration permission to use this operation.</td>
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
<tr id="parameter-table_bucket_arn">
    <td><CopyableCode code="table_bucket_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the table bucket.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_table_bucket_metrics_configuration"
    values={[
        { label: 'get_table_bucket_metrics_configuration', value: 'get_table_bucket_metrics_configuration' }
    ]}
>
<TabItem value="get_table_bucket_metrics_configuration">

Gets the metrics configuration for a table bucket. Permissions You must have the s3tables:GetTableBucketMetricsConfiguration permission to use this operation.

```sql
SELECT
id,
tableBucketARN
FROM aws.s3tables.table_bucket_metrics_configurations
WHERE table_bucket_arn = '{{ table_bucket_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_table_bucket_metrics_configuration"
    values={[
        { label: 'put_table_bucket_metrics_configuration', value: 'put_table_bucket_metrics_configuration' }
    ]}
>
<TabItem value="put_table_bucket_metrics_configuration">

Sets the metrics configuration for a table bucket. Permissions You must have the s3tables:PutTableBucketMetricsConfiguration permission to use this operation.

```sql
REPLACE aws.s3tables.table_bucket_metrics_configurations
SET 
-- No updatable properties
WHERE 
table_bucket_arn = '{{ table_bucket_arn }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_table_bucket_metrics_configuration"
    values={[
        { label: 'delete_table_bucket_metrics_configuration', value: 'delete_table_bucket_metrics_configuration' }
    ]}
>
<TabItem value="delete_table_bucket_metrics_configuration">

Deletes the metrics configuration for a table bucket. Permissions You must have the s3tables:DeleteTableBucketMetricsConfiguration permission to use this operation.

```sql
DELETE FROM aws.s3tables.table_bucket_metrics_configurations
WHERE table_bucket_arn = '{{ table_bucket_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
