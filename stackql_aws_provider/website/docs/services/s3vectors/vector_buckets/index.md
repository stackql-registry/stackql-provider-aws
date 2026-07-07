--- 
title: vector_buckets
hide_title: false
hide_table_of_contents: false
keywords:
  - vector_buckets
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

Creates, updates, deletes, gets or lists a <code>vector_buckets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vector_buckets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3vectors.vector_buckets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_vector_bucket"
    values={[
        { label: 'get_vector_bucket', value: 'get_vector_bucket' }
    ]}
>
<TabItem value="get_vector_bucket">

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
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time when the vector bucket was created.</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionConfiguration" /></td>
    <td><code>object</code></td>
    <td>The encryption configuration for a vector bucket or index. By default, if you don't specify, all new vectors in Amazon S3 vector buckets use server-side encryption with Amazon S3 managed keys (SSE-S3), specifically AES256. You can optionally override bucket level encryption settings, and set a specific encryption configuration for a vector index at the time of index creation.</td>
</tr>
<tr>
    <td><CopyableCode code="vectorBucketArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the vector bucket. (pattern: &lt;code&gt;arn:aws&#91;-a-z0-9&#93;*:s3vectors:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:bucket/&#91;a-z0-9&#93;&#91;a-z0-9-.&#93;&#123;1,61&#125;&#91;a-z0-9&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vectorBucketName" /></td>
    <td><code>string</code></td>
    <td>The name of the vector bucket.</td>
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
    <td><a href="#get_vector_bucket"><CopyableCode code="get_vector_bucket" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns vector bucket attributes. To specify the bucket, you must use either the vector bucket name or the vector bucket Amazon Resource Name (ARN). Permissions You must have the s3vectors:GetVectorBucket permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#create_vector_bucket"><CopyableCode code="create_vector_bucket" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-vectorBucketName"><code>vectorBucketName</code></a></td>
    <td></td>
    <td>Creates a vector bucket in the Amazon Web Services Region that you want your bucket to be in. Permissions You must have the s3vectors:CreateVectorBucket permission to use this operation. You must have the s3vectors:TagResource permission in addition to s3vectors:CreateVectorBucket permission to create a vector bucket with tags.</td>
</tr>
<tr>
    <td><a href="#delete_vector_bucket"><CopyableCode code="delete_vector_bucket" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a vector bucket. All vector indexes in the vector bucket must be deleted before the vector bucket can be deleted. To perform this operation, you must use either the vector bucket name or the vector bucket Amazon Resource Name (ARN). Permissions You must have the s3vectors:DeleteVectorBucket permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#list_vector_buckets"><CopyableCode code="list_vector_buckets" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of all the vector buckets that are owned by the authenticated sender of the request. Permissions You must have the s3vectors:ListVectorBuckets permission to use this operation.</td>
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
    defaultValue="get_vector_bucket"
    values={[
        { label: 'get_vector_bucket', value: 'get_vector_bucket' }
    ]}
>
<TabItem value="get_vector_bucket">

Returns vector bucket attributes. To specify the bucket, you must use either the vector bucket name or the vector bucket Amazon Resource Name (ARN). Permissions You must have the s3vectors:GetVectorBucket permission to use this operation.

```sql
SELECT
creationTime,
encryptionConfiguration,
vectorBucketArn,
vectorBucketName
FROM aws.s3vectors.vector_buckets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_vector_bucket"
    values={[
        { label: 'create_vector_bucket', value: 'create_vector_bucket' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_vector_bucket">

Creates a vector bucket in the Amazon Web Services Region that you want your bucket to be in. Permissions You must have the s3vectors:CreateVectorBucket permission to use this operation. You must have the s3vectors:TagResource permission in addition to s3vectors:CreateVectorBucket permission to create a vector bucket with tags.

```sql
INSERT INTO aws.s3vectors.vector_buckets (
vectorBucketName,
encryptionConfiguration,
tags,
region
)
SELECT 
'{{ vectorBucketName }}' /* required */,
'{{ encryptionConfiguration }}',
'{{ tags }}',
'{{ region }}'
RETURNING
vectorBucketArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vector_buckets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vector_buckets resource.
    - name: vectorBucketName
      value: "{{ vectorBucketName }}"
    - name: encryptionConfiguration
      description: |
        The encryption configuration for a vector bucket or index. By default, if you don't specify, all new vectors in Amazon S3 vector buckets use server-side encryption with Amazon S3 managed keys (SSE-S3), specifically AES256. You can optionally override bucket level encryption settings, and set a specific encryption configuration for a vector index at the time of index creation.
      value:
        sseType: "{{ sseType }}"
        kmsKeyArn: "{{ kmsKeyArn }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_vector_bucket"
    values={[
        { label: 'delete_vector_bucket', value: 'delete_vector_bucket' }
    ]}
>
<TabItem value="delete_vector_bucket">

Deletes a vector bucket. All vector indexes in the vector bucket must be deleted before the vector bucket can be deleted. To perform this operation, you must use either the vector bucket name or the vector bucket Amazon Resource Name (ARN). Permissions You must have the s3vectors:DeleteVectorBucket permission to use this operation.

```sql
DELETE FROM aws.s3vectors.vector_buckets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_vector_buckets"
    values={[
        { label: 'list_vector_buckets', value: 'list_vector_buckets' }
    ]}
>
<TabItem value="list_vector_buckets">

Returns a list of all the vector buckets that are owned by the authenticated sender of the request. Permissions You must have the s3vectors:ListVectorBuckets permission to use this operation.

```sql
EXEC aws.s3vectors.vector_buckets.list_vector_buckets 
@region='{{ region }}' --required 
@@json=
'{
"maxResults": {{ maxResults }}, 
"nextToken": "{{ nextToken }}", 
"prefix": "{{ prefix }}"
}'
;
```
</TabItem>
</Tabs>
