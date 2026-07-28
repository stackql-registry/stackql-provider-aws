--- 
title: indexes
hide_title: false
hide_table_of_contents: false
keywords:
  - indexes
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

Creates, updates, deletes, gets or lists an <code>indexes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="indexes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3vectors.indexes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_index"
    values={[
        { label: 'get_index', value: 'get_index' },
        { label: 'list_indexes', value: 'list_indexes' }
    ]}
>
<TabItem value="get_index">

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
    <td>Date and time when the vector index was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataType" /></td>
    <td><code>string</code></td>
    <td>The data type of the vectors inserted into the vector index. (float32)</td>
</tr>
<tr>
    <td><CopyableCode code="dimension" /></td>
    <td><code>integer</code></td>
    <td>The number of values in the vectors that are inserted into the vector index.</td>
</tr>
<tr>
    <td><CopyableCode code="distanceMetric" /></td>
    <td><code>string</code></td>
    <td>The distance metric to be used for similarity search. (euclidean, cosine)</td>
</tr>
<tr>
    <td><CopyableCode code="encryptionConfiguration" /></td>
    <td><code>object</code></td>
    <td>The encryption configuration for a vector bucket or index. By default, if you don't specify, all new vectors in Amazon S3 vector buckets use server-side encryption with Amazon S3 managed keys (SSE-S3), specifically AES256. You can optionally override bucket level encryption settings, and set a specific encryption configuration for a vector index at the time of index creation.</td>
</tr>
<tr>
    <td><CopyableCode code="indexArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the vector index. (pattern: &lt;code&gt;arn:aws&#91;-a-z0-9&#93;*:s3vectors:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:bucket/&#91;a-z0-9&#93;&#91;a-z0-9-.&#93;&#123;1,61&#125;&#91;a-z0-9&#93;/index/&#91;a-z0-9&#93;&#91;a-z0-9-.&#93;&#123;1,61&#125;&#91;a-z0-9&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="indexName" /></td>
    <td><code>string</code></td>
    <td>The name of the vector index.</td>
</tr>
<tr>
    <td><CopyableCode code="metadataConfiguration" /></td>
    <td><code>object</code></td>
    <td>The metadata configuration for a vector index.</td>
</tr>
<tr>
    <td><CopyableCode code="vectorBucketName" /></td>
    <td><code>string</code></td>
    <td>The name of the vector bucket that contains the vector index.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_indexes">

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
    <td>Date and time when the vector index was created.</td>
</tr>
<tr>
    <td><CopyableCode code="indexArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the vector index. (pattern: &lt;code&gt;arn:aws&#91;-a-z0-9&#93;*:s3vectors:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:bucket/&#91;a-z0-9&#93;&#91;a-z0-9-.&#93;&#123;1,61&#125;&#91;a-z0-9&#93;/index/&#91;a-z0-9&#93;&#91;a-z0-9-.&#93;&#123;1,61&#125;&#91;a-z0-9&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="indexName" /></td>
    <td><code>string</code></td>
    <td>The name of the vector index.</td>
</tr>
<tr>
    <td><CopyableCode code="vectorBucketName" /></td>
    <td><code>string</code></td>
    <td>The name of the vector bucket that contains the vector index.</td>
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
    <td><a href="#get_index"><CopyableCode code="get_index" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns vector index attributes. To specify the vector index, you can either use both the vector bucket name and the vector index name, or use the vector index Amazon Resource Name (ARN). Permissions You must have the s3vectors:GetIndex permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#list_indexes"><CopyableCode code="list_indexes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of all the vector indexes within the specified vector bucket. To specify the bucket, you must use either the vector bucket name or the vector bucket Amazon Resource Name (ARN). Permissions You must have the s3vectors:ListIndexes permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#create_index"><CopyableCode code="create_index" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-indexName"><code>indexName</code></a>, <a href="#parameter-dataType"><code>dataType</code></a>, <a href="#parameter-dimension"><code>dimension</code></a>, <a href="#parameter-distanceMetric"><code>distanceMetric</code></a></td>
    <td></td>
    <td>Creates a vector index within a vector bucket. To specify the vector bucket, you must use either the vector bucket name or the vector bucket Amazon Resource Name (ARN). Permissions You must have the s3vectors:CreateIndex permission to use this operation. You must have the s3vectors:TagResource permission in addition to s3vectors:CreateIndex permission to create a vector index with tags.</td>
</tr>
<tr>
    <td><a href="#delete_index"><CopyableCode code="delete_index" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a vector index. To specify the vector index, you can either use both the vector bucket name and vector index name, or use the vector index Amazon Resource Name (ARN). Permissions You must have the s3vectors:DeleteIndex permission to use this operation.</td>
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
    defaultValue="get_index"
    values={[
        { label: 'get_index', value: 'get_index' },
        { label: 'list_indexes', value: 'list_indexes' }
    ]}
>
<TabItem value="get_index">

Returns vector index attributes. To specify the vector index, you can either use both the vector bucket name and the vector index name, or use the vector index Amazon Resource Name (ARN). Permissions You must have the s3vectors:GetIndex permission to use this operation.

```sql
SELECT
creationTime,
dataType,
dimension,
distanceMetric,
encryptionConfiguration,
indexArn,
indexName,
metadataConfiguration,
vectorBucketName
FROM aws.s3vectors.indexes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_indexes">

Returns a list of all the vector indexes within the specified vector bucket. To specify the bucket, you must use either the vector bucket name or the vector bucket Amazon Resource Name (ARN). Permissions You must have the s3vectors:ListIndexes permission to use this operation.

```sql
SELECT
creationTime,
indexArn,
indexName,
vectorBucketName
FROM aws.s3vectors.indexes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_index"
    values={[
        { label: 'create_index', value: 'create_index' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_index">

Creates a vector index within a vector bucket. To specify the vector bucket, you must use either the vector bucket name or the vector bucket Amazon Resource Name (ARN). Permissions You must have the s3vectors:CreateIndex permission to use this operation. You must have the s3vectors:TagResource permission in addition to s3vectors:CreateIndex permission to create a vector index with tags.

```sql
INSERT INTO aws.s3vectors.indexes (
vectorBucketName,
vectorBucketArn,
indexName,
dataType,
dimension,
distanceMetric,
metadataConfiguration,
encryptionConfiguration,
tags,
region
)
SELECT 
'{{ vectorBucketName }}',
'{{ vectorBucketArn }}',
'{{ indexName }}' /* required */,
'{{ dataType }}' /* required */,
{{ dimension }} /* required */,
'{{ distanceMetric }}' /* required */,
'{{ metadataConfiguration }}',
'{{ encryptionConfiguration }}',
'{{ tags }}',
'{{ region }}'
RETURNING
indexArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: indexes
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the indexes resource.
    - name: vectorBucketName
      value: "{{ vectorBucketName }}"
    - name: vectorBucketArn
      value: "{{ vectorBucketArn }}"
    - name: indexName
      value: "{{ indexName }}"
    - name: dataType
      value: "{{ dataType }}"
      valid_values: ['float32']
    - name: dimension
      value: {{ dimension }}
    - name: distanceMetric
      value: "{{ distanceMetric }}"
      valid_values: ['euclidean', 'cosine']
    - name: metadataConfiguration
      description: |
        The metadata configuration for a vector index.
      value:
        nonFilterableMetadataKeys:
          - "{{ nonFilterableMetadataKeys }}"
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
    defaultValue="delete_index"
    values={[
        { label: 'delete_index', value: 'delete_index' }
    ]}
>
<TabItem value="delete_index">

Deletes a vector index. To specify the vector index, you can either use both the vector bucket name and vector index name, or use the vector index Amazon Resource Name (ARN). Permissions You must have the s3vectors:DeleteIndex permission to use this operation.

```sql
DELETE FROM aws.s3vectors.indexes
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
