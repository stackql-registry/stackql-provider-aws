--- 
title: vector_bucket_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - vector_bucket_policies
  - s3vectors
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

Creates, updates, deletes, gets or lists a <code>vector_bucket_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vector_bucket_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3vectors.vector_bucket_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_vector_bucket_policy"
    values={[
        { label: 'get_vector_bucket_policy', value: 'get_vector_bucket_policy' }
    ]}
>
<TabItem value="get_vector_bucket_policy">

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
    <td><CopyableCode code="policy" /></td>
    <td><code>string</code></td>
    <td>The JSON that defines the policy.</td>
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
    <td><a href="#get_vector_bucket_policy"><CopyableCode code="get_vector_bucket_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets details about a vector bucket policy. To specify the bucket, you must use either the vector bucket name or the vector bucket Amazon Resource Name (ARN). Permissions You must have the s3vectors:GetVectorBucketPolicy permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#put_vector_bucket_policy"><CopyableCode code="put_vector_bucket_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policy"><code>policy</code></a></td>
    <td></td>
    <td>Creates a bucket policy for a vector bucket. To specify the bucket, you must use either the vector bucket name or the vector bucket Amazon Resource Name (ARN). Permissions You must have the s3vectors:PutVectorBucketPolicy permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#delete_vector_bucket_policy"><CopyableCode code="delete_vector_bucket_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a vector bucket policy. To specify the bucket, you must use either the vector bucket name or the vector bucket Amazon Resource Name (ARN). Permissions You must have the s3vectors:DeleteVectorBucketPolicy permission to use this operation.</td>
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

## `SELECT` examples

<Tabs
    defaultValue="get_vector_bucket_policy"
    values={[
        { label: 'get_vector_bucket_policy', value: 'get_vector_bucket_policy' }
    ]}
>
<TabItem value="get_vector_bucket_policy">

Gets details about a vector bucket policy. To specify the bucket, you must use either the vector bucket name or the vector bucket Amazon Resource Name (ARN). Permissions You must have the s3vectors:GetVectorBucketPolicy permission to use this operation.

```sql
SELECT
policy
FROM aws.s3vectors.vector_bucket_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_vector_bucket_policy"
    values={[
        { label: 'put_vector_bucket_policy', value: 'put_vector_bucket_policy' }
    ]}
>
<TabItem value="put_vector_bucket_policy">

Creates a bucket policy for a vector bucket. To specify the bucket, you must use either the vector bucket name or the vector bucket Amazon Resource Name (ARN). Permissions You must have the s3vectors:PutVectorBucketPolicy permission to use this operation.

```sql
REPLACE aws.s3vectors.vector_bucket_policies
SET 
vectorBucketName = '{{ vectorBucketName }}',
vectorBucketArn = '{{ vectorBucketArn }}',
policy = '{{ policy }}'
WHERE 
region = '{{ region }}' --required
AND policy = '{{ policy }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_vector_bucket_policy"
    values={[
        { label: 'delete_vector_bucket_policy', value: 'delete_vector_bucket_policy' }
    ]}
>
<TabItem value="delete_vector_bucket_policy">

Deletes a vector bucket policy. To specify the bucket, you must use either the vector bucket name or the vector bucket Amazon Resource Name (ARN). Permissions You must have the s3vectors:DeleteVectorBucketPolicy permission to use this operation.

```sql
DELETE FROM aws.s3vectors.vector_bucket_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
