--- 
title: table_bucket_storage_class
hide_title: false
hide_table_of_contents: false
keywords:
  - table_bucket_storage_class
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

Creates, updates, deletes, gets or lists a <code>table_bucket_storage_class</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="table_bucket_storage_class" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3tables.table_bucket_storage_class" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_table_bucket_storage_class"
    values={[
        { label: 'get_table_bucket_storage_class', value: 'get_table_bucket_storage_class' }
    ]}
>
<TabItem value="get_table_bucket_storage_class">

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
    <td><CopyableCode code="storageClass" /></td>
    <td><code>string</code></td>
    <td>The storage class for the table or table bucket. Valid values include storage classes optimized for different access patterns and cost profiles. (STANDARD, INTELLIGENT_TIERING)</td>
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
    <td><a href="#get_table_bucket_storage_class"><CopyableCode code="get_table_bucket_storage_class" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-table_bucket_arn"><code>table_bucket_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the storage class configuration for a specific table. This allows you to view the storage class settings that apply to an individual table, which may differ from the table bucket's default configuration. Permissions You must have the s3tables:GetTableBucketStorageClass permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#put_table_bucket_storage_class"><CopyableCode code="put_table_bucket_storage_class" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-table_bucket_arn"><code>table_bucket_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-storageClassConfiguration"><code>storageClassConfiguration</code></a></td>
    <td></td>
    <td>Sets or updates the storage class configuration for a table bucket. This configuration serves as the default storage class for all new tables created in the bucket, allowing you to optimize storage costs at the bucket level. Permissions You must have the s3tables:PutTableBucketStorageClass permission to use this operation.</td>
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
    defaultValue="get_table_bucket_storage_class"
    values={[
        { label: 'get_table_bucket_storage_class', value: 'get_table_bucket_storage_class' }
    ]}
>
<TabItem value="get_table_bucket_storage_class">

Retrieves the storage class configuration for a specific table. This allows you to view the storage class settings that apply to an individual table, which may differ from the table bucket's default configuration. Permissions You must have the s3tables:GetTableBucketStorageClass permission to use this operation.

```sql
SELECT
storageClass
FROM aws.s3tables.table_bucket_storage_class
WHERE table_bucket_arn = '{{ table_bucket_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_table_bucket_storage_class"
    values={[
        { label: 'put_table_bucket_storage_class', value: 'put_table_bucket_storage_class' }
    ]}
>
<TabItem value="put_table_bucket_storage_class">

Sets or updates the storage class configuration for a table bucket. This configuration serves as the default storage class for all new tables created in the bucket, allowing you to optimize storage costs at the bucket level. Permissions You must have the s3tables:PutTableBucketStorageClass permission to use this operation.

```sql
REPLACE aws.s3tables.table_bucket_storage_class
SET 
storageClassConfiguration = '{{ storageClassConfiguration }}'
WHERE 
table_bucket_arn = '{{ table_bucket_arn }}' --required
AND region = '{{ region }}' --required
AND storageClassConfiguration = '{{ storageClassConfiguration }}' --required;
```
</TabItem>
</Tabs>
