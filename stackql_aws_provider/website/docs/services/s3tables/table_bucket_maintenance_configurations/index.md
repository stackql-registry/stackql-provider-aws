--- 
title: table_bucket_maintenance_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - table_bucket_maintenance_configurations
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

Creates, updates, deletes, gets or lists a <code>table_bucket_maintenance_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="table_bucket_maintenance_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3tables.table_bucket_maintenance_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_table_bucket_maintenance_configuration"
    values={[
        { label: 'get_table_bucket_maintenance_configuration', value: 'get_table_bucket_maintenance_configuration' }
    ]}
>
<TabItem value="get_table_bucket_maintenance_configuration">

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
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Details about the maintenance configuration for the table bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="table_bucket_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the table bucket associated with the maintenance configuration. (pattern: &lt;code&gt;(arn:aws&#91;-a-z0-9&#93;*:&#91;a-z0-9&#93;+:&#91;-a-z0-9&#93;*:&#91;0-9&#93;&#123;12&#125;:bucket/&#91;a-z0-9_-&#93;&#123;3,63&#125;)&lt;/code&gt;)</td>
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
    <td><a href="#get_table_bucket_maintenance_configuration"><CopyableCode code="get_table_bucket_maintenance_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-table_bucket_arn"><code>table_bucket_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets details about a maintenance configuration for a given table bucket. For more information, see Amazon S3 table bucket maintenance in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:GetTableBucketMaintenanceConfiguration permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#put_table_bucket_maintenance_configuration"><CopyableCode code="put_table_bucket_maintenance_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-table_bucket_arn"><code>table_bucket_arn</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-value"><code>value</code></a></td>
    <td></td>
    <td>Creates a new maintenance configuration or replaces an existing maintenance configuration for a table bucket. For more information, see Amazon S3 table bucket maintenance in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:PutTableBucketMaintenanceConfiguration permission to use this operation.</td>
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
    <td>The Amazon Resource Name (ARN) of the table bucket associated with the maintenance configuration.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the maintenance configuration.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_table_bucket_maintenance_configuration"
    values={[
        { label: 'get_table_bucket_maintenance_configuration', value: 'get_table_bucket_maintenance_configuration' }
    ]}
>
<TabItem value="get_table_bucket_maintenance_configuration">

Gets details about a maintenance configuration for a given table bucket. For more information, see Amazon S3 table bucket maintenance in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:GetTableBucketMaintenanceConfiguration permission to use this operation.

```sql
SELECT
configuration,
table_bucket_arn
FROM aws.s3tables.table_bucket_maintenance_configurations
WHERE table_bucket_arn = '{{ table_bucket_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_table_bucket_maintenance_configuration"
    values={[
        { label: 'put_table_bucket_maintenance_configuration', value: 'put_table_bucket_maintenance_configuration' }
    ]}
>
<TabItem value="put_table_bucket_maintenance_configuration">

Creates a new maintenance configuration or replaces an existing maintenance configuration for a table bucket. For more information, see Amazon S3 table bucket maintenance in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:PutTableBucketMaintenanceConfiguration permission to use this operation.

```sql
REPLACE aws.s3tables.table_bucket_maintenance_configurations
SET 
value = '{{ value }}'
WHERE 
table_bucket_arn = '{{ table_bucket_arn }}' --required
AND type = '{{ type }}' --required
AND region = '{{ region }}' --required
AND value = '{{ value }}' --required;
```
</TabItem>
</Tabs>
