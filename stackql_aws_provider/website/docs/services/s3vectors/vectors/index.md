--- 
title: vectors
hide_title: false
hide_table_of_contents: false
keywords:
  - vectors
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

Creates, updates, deletes, gets or lists a <code>vectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3vectors.vectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_vectors"
    values={[
        { label: 'get_vectors', value: 'get_vectors' },
        { label: 'list_vectors', value: 'list_vectors' }
    ]}
>
<TabItem value="get_vectors">

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
    <td><CopyableCode code="vectors" /></td>
    <td><code>array</code></td>
    <td>The attributes of the vectors.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_vectors">

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
    <td><CopyableCode code="data" /></td>
    <td><code>object</code></td>
    <td>The vector data of the vector.</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>The name of the vector.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Metadata about the vector.</td>
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
    <td><a href="#get_vectors"><CopyableCode code="get_vectors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns vector attributes. To specify the vector index, you can either use both the vector bucket name and the vector index name, or use the vector index Amazon Resource Name (ARN). Permissions You must have the s3vectors:GetVectors permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#list_vectors"><CopyableCode code="list_vectors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List vectors in the specified vector index. To specify the vector index, you can either use both the vector bucket name and the vector index name, or use the vector index Amazon Resource Name (ARN). ListVectors operations proceed sequentially; however, for faster performance on a large number of vectors in a vector index, applications can request a parallel ListVectors operation by providing the segmentCount and segmentIndex parameters. Permissions You must have the s3vectors:ListVectors permission to use this operation. Additional permissions are required based on the request parameters you specify: With only s3vectors:ListVectors permission, you can list vector keys when returnData and returnMetadata are both set to false or not specified.. If you set returnData or returnMetadata to true, you must have both s3vectors:ListVectors and s3vectors:GetVectors permissions. The request fails with a 403 Forbidden error if you request vector data or metadata without the s3vectors:GetVectors permission.</td>
</tr>
<tr>
    <td><a href="#put_vectors"><CopyableCode code="put_vectors" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-vectors"><code>vectors</code></a></td>
    <td></td>
    <td>Adds one or more vectors to a vector index. To specify the vector index, you can either use both the vector bucket name and the vector index name, or use the vector index Amazon Resource Name (ARN). For more information about limits, see Limitations and restrictions in the Amazon S3 User Guide. When inserting vector data into your vector index, you must provide the vector data as float32 (32-bit floating point) values. If you pass higher-precision values to an Amazon Web Services SDK, S3 Vectors converts the values to 32-bit floating point before storing them, and GetVectors, ListVectors, and QueryVectors operations return the float32 values. Different Amazon Web Services SDKs may have different default numeric types, so ensure your vectors are properly formatted as float32 values regardless of which SDK you're using. For example, in Python, use numpy.float32 or explicitly cast your values. Permissions You must have the s3vectors:PutVectors permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#delete_vectors"><CopyableCode code="delete_vectors" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes one or more vectors in a vector index. To specify the vector index, you can either use both the vector bucket name and vector index name, or use the vector index Amazon Resource Name (ARN). Permissions You must have the s3vectors:DeleteVectors permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#query_vectors"><CopyableCode code="query_vectors" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-topK"><code>topK</code></a>, <a href="#parameter-queryVector"><code>queryVector</code></a></td>
    <td></td>
    <td>Performs an approximate nearest neighbor search query in a vector index using a query vector. By default, it returns the keys of approximate nearest neighbors. You can optionally include the computed distance (between the query vector and each vector in the response) and metadata of each vector in the response. To specify the vector index, you can either use both the vector bucket name and the vector index name, or use the vector index Amazon Resource Name (ARN). Permissions You must have the s3vectors:QueryVectors permission to use this operation. Additional permissions are required based on the request parameters you specify: With only s3vectors:QueryVectors permission, you can retrieve vector keys of approximate nearest neighbors and computed distances between these vectors. This permission is sufficient only when you don't set any metadata filters and don't request metadata (by keeping the returnMetadata parameter set to false or not specified). If you specify a metadata filter or set returnMetadata to true, you must have both s3vectors:QueryVectors and s3vectors:GetVectors permissions. The request fails with a 403 Forbidden error if you request metadata filtering or metadata without the s3vectors:GetVectors permission.</td>
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
    defaultValue="get_vectors"
    values={[
        { label: 'get_vectors', value: 'get_vectors' },
        { label: 'list_vectors', value: 'list_vectors' }
    ]}
>
<TabItem value="get_vectors">

Returns vector attributes. To specify the vector index, you can either use both the vector bucket name and the vector index name, or use the vector index Amazon Resource Name (ARN). Permissions You must have the s3vectors:GetVectors permission to use this operation.

```sql
SELECT
vectors
FROM aws.s3vectors.vectors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_vectors">

List vectors in the specified vector index. To specify the vector index, you can either use both the vector bucket name and the vector index name, or use the vector index Amazon Resource Name (ARN). ListVectors operations proceed sequentially; however, for faster performance on a large number of vectors in a vector index, applications can request a parallel ListVectors operation by providing the segmentCount and segmentIndex parameters. Permissions You must have the s3vectors:ListVectors permission to use this operation. Additional permissions are required based on the request parameters you specify: With only s3vectors:ListVectors permission, you can list vector keys when returnData and returnMetadata are both set to false or not specified.. If you set returnData or returnMetadata to true, you must have both s3vectors:ListVectors and s3vectors:GetVectors permissions. The request fails with a 403 Forbidden error if you request vector data or metadata without the s3vectors:GetVectors permission.

```sql
SELECT
data,
key,
metadata
FROM aws.s3vectors.vectors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_vectors"
    values={[
        { label: 'put_vectors', value: 'put_vectors' }
    ]}
>
<TabItem value="put_vectors">

Adds one or more vectors to a vector index. To specify the vector index, you can either use both the vector bucket name and the vector index name, or use the vector index Amazon Resource Name (ARN). For more information about limits, see Limitations and restrictions in the Amazon S3 User Guide. When inserting vector data into your vector index, you must provide the vector data as float32 (32-bit floating point) values. If you pass higher-precision values to an Amazon Web Services SDK, S3 Vectors converts the values to 32-bit floating point before storing them, and GetVectors, ListVectors, and QueryVectors operations return the float32 values. Different Amazon Web Services SDKs may have different default numeric types, so ensure your vectors are properly formatted as float32 values regardless of which SDK you're using. For example, in Python, use numpy.float32 or explicitly cast your values. Permissions You must have the s3vectors:PutVectors permission to use this operation.

```sql
REPLACE aws.s3vectors.vectors
SET 
vectorBucketName = '{{ vectorBucketName }}',
indexName = '{{ indexName }}',
indexArn = '{{ indexArn }}',
vectors = '{{ vectors }}'
WHERE 
region = '{{ region }}' --required
AND vectors = '{{ vectors }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_vectors"
    values={[
        { label: 'delete_vectors', value: 'delete_vectors' }
    ]}
>
<TabItem value="delete_vectors">

Deletes one or more vectors in a vector index. To specify the vector index, you can either use both the vector bucket name and vector index name, or use the vector index Amazon Resource Name (ARN). Permissions You must have the s3vectors:DeleteVectors permission to use this operation.

```sql
DELETE FROM aws.s3vectors.vectors
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="query_vectors"
    values={[
        { label: 'query_vectors', value: 'query_vectors' }
    ]}
>
<TabItem value="query_vectors">

Performs an approximate nearest neighbor search query in a vector index using a query vector. By default, it returns the keys of approximate nearest neighbors. You can optionally include the computed distance (between the query vector and each vector in the response) and metadata of each vector in the response. To specify the vector index, you can either use both the vector bucket name and the vector index name, or use the vector index Amazon Resource Name (ARN). Permissions You must have the s3vectors:QueryVectors permission to use this operation. Additional permissions are required based on the request parameters you specify: With only s3vectors:QueryVectors permission, you can retrieve vector keys of approximate nearest neighbors and computed distances between these vectors. This permission is sufficient only when you don't set any metadata filters and don't request metadata (by keeping the returnMetadata parameter set to false or not specified). If you specify a metadata filter or set returnMetadata to true, you must have both s3vectors:QueryVectors and s3vectors:GetVectors permissions. The request fails with a 403 Forbidden error if you request metadata filtering or metadata without the s3vectors:GetVectors permission.

```sql
EXEC aws.s3vectors.vectors.query_vectors 
@region='{{ region }}' --required 
@@json=
'{
"vectorBucketName": "{{ vectorBucketName }}", 
"indexName": "{{ indexName }}", 
"indexArn": "{{ indexArn }}", 
"topK": {{ topK }}, 
"queryVector": "{{ queryVector }}", 
"filter": "{{ filter }}", 
"returnMetadata": {{ returnMetadata }}, 
"returnDistance": {{ returnDistance }}, 
"nextToken": "{{ nextToken }}"
}'
;
```
</TabItem>
</Tabs>
