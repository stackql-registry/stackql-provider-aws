--- 
title: table_buckets
hide_title: false
hide_table_of_contents: false
keywords:
  - table_buckets
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

Creates, updates, deletes, gets or lists a <code>table_buckets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="table_buckets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3tables.table_buckets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_table_bucket"
    values={[
        { label: 'get_table_bucket', value: 'get_table_bucket' },
        { label: 'list_table_buckets', value: 'list_table_buckets' }
    ]}
>
<TabItem value="get_table_bucket">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the table bucket (pattern: &lt;code&gt;&#91;0-9a-z-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the table bucket. (pattern: &lt;code&gt;(arn:aws&#91;-a-z0-9&#93;*:&#91;a-z0-9&#93;+:&#91;-a-z0-9&#93;*:&#91;0-9&#93;&#123;12&#125;:bucket/&#91;a-z0-9_-&#93;&#123;3,63&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the table bucket was created.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the account that owns the table bucket. (pattern: &lt;code&gt;&#91;0-9&#93;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="table_bucket_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the table bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the table bucket. (customer, aws)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_table_buckets">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the table bucket. (pattern: &lt;code&gt;&#91;0-9a-z-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the table bucket. (pattern: &lt;code&gt;(arn:aws&#91;-a-z0-9&#93;*:&#91;a-z0-9&#93;+:&#91;-a-z0-9&#93;*:&#91;0-9&#93;&#123;12&#125;:bucket/&#91;a-z0-9_-&#93;&#123;3,63&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the table bucket was created at.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the account that owns the table bucket. (pattern: &lt;code&gt;&#91;0-9&#93;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="table_bucket_id" /></td>
    <td><code>string</code></td>
    <td>The system-assigned unique identifier for the table bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the table bucket. (customer, aws)</td>
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
    <td><a href="#get_table_bucket"><CopyableCode code="get_table_bucket" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-table_bucket_arn"><code>table_bucket_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets details on a table bucket. For more information, see Viewing details about an Amazon S3 table bucket in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:GetTableBucket permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#list_table_buckets"><CopyableCode code="list_table_buckets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-prefix"><code>prefix</code></a>, <a href="#parameter-continuationToken"><code>continuationToken</code></a>, <a href="#parameter-maxBuckets"><code>maxBuckets</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td>Lists table buckets for your account. For more information, see S3 Table buckets in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:ListTableBuckets permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#create_table_bucket"><CopyableCode code="create_table_bucket" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a table bucket. For more information, see Creating a table bucket in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:CreateTableBucket permission to use this operation. If you use this operation with the optional encryptionConfiguration parameter you must have the s3tables:PutTableBucketEncryption permission. If you use this operation with the storageClassConfiguration request parameter, you must have the s3tables:PutTableBucketStorageClass permission. To create a table bucket with tags, you must have the s3tables:TagResource permission in addition to s3tables:CreateTableBucket permission.</td>
</tr>
<tr>
    <td><a href="#delete_table_bucket"><CopyableCode code="delete_table_bucket" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-table_bucket_arn"><code>table_bucket_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a table bucket. For more information, see Deleting a table bucket in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:DeleteTableBucket permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#rename_table"><CopyableCode code="rename_table" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-table_bucket_arn"><code>table_bucket_arn</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Renames a table or a namespace. For more information, see S3 Tables in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:RenameTable permission to use this operation.</td>
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
    <td>The current name of the table.</td>
</tr>
<tr id="parameter-namespace">
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace associated with the table.</td>
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
<tr id="parameter-continuationToken">
    <td><CopyableCode code="continuationToken" /></td>
    <td><code>string</code></td>
    <td>ContinuationToken indicates to Amazon S3 that the list is being continued on this bucket with a token. ContinuationToken is obfuscated and is not a real key. You can use this ContinuationToken for pagination of the list results.</td>
</tr>
<tr id="parameter-maxBuckets">
    <td><CopyableCode code="maxBuckets" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of table buckets to return in the list.</td>
</tr>
<tr id="parameter-prefix">
    <td><CopyableCode code="prefix" /></td>
    <td><code>string</code></td>
    <td>The prefix of the table buckets.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of table buckets to filter by in the list.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_table_bucket"
    values={[
        { label: 'get_table_bucket', value: 'get_table_bucket' },
        { label: 'list_table_buckets', value: 'list_table_buckets' }
    ]}
>
<TabItem value="get_table_bucket">

Gets details on a table bucket. For more information, see Viewing details about an Amazon S3 table bucket in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:GetTableBucket permission to use this operation.

```sql
SELECT
name,
arn,
created_at,
owner_account_id,
table_bucket_id,
type_
FROM aws.s3tables.table_buckets
WHERE table_bucket_arn = '{{ table_bucket_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_table_buckets">

Lists table buckets for your account. For more information, see S3 Table buckets in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:ListTableBuckets permission to use this operation.

```sql
SELECT
name,
arn,
created_at,
owner_account_id,
table_bucket_id,
type_
FROM aws.s3tables.table_buckets
WHERE region = '{{ region }}' -- required
AND prefix = '{{ prefix }}'
AND continuationToken = '{{ continuationToken }}'
AND maxBuckets = '{{ maxBuckets }}'
AND type = '{{ type }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_table_bucket"
    values={[
        { label: 'create_table_bucket', value: 'create_table_bucket' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_table_bucket">

Creates a table bucket. For more information, see Creating a table bucket in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:CreateTableBucket permission to use this operation. If you use this operation with the optional encryptionConfiguration parameter you must have the s3tables:PutTableBucketEncryption permission. If you use this operation with the storageClassConfiguration request parameter, you must have the s3tables:PutTableBucketStorageClass permission. To create a table bucket with tags, you must have the s3tables:TagResource permission in addition to s3tables:CreateTableBucket permission.

```sql
INSERT INTO aws.s3tables.table_buckets (
name,
encryptionConfiguration,
storageClassConfiguration,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ encryptionConfiguration }}',
'{{ storageClassConfiguration }}',
'{{ tags }}',
'{{ region }}'
RETURNING
arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: table_buckets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the table_buckets resource.
    - name: name
      value: "{{ name }}"
    - name: encryptionConfiguration
      description: |
        Configuration specifying how data should be encrypted. This structure defines the encryption algorithm and optional KMS key to be used for server-side encryption.
      value:
        sseAlgorithm: "{{ sseAlgorithm }}"
        kmsKeyArn: "{{ kmsKeyArn }}"
    - name: storageClassConfiguration
      description: |
        The configuration details for the storage class of tables or table buckets. This allows you to optimize storage costs by selecting the appropriate storage class based on your access patterns and performance requirements.
      value:
        storageClass: "{{ storageClass }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_table_bucket"
    values={[
        { label: 'delete_table_bucket', value: 'delete_table_bucket' }
    ]}
>
<TabItem value="delete_table_bucket">

Deletes a table bucket. For more information, see Deleting a table bucket in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:DeleteTableBucket permission to use this operation.

```sql
DELETE FROM aws.s3tables.table_buckets
WHERE table_bucket_arn = '{{ table_bucket_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="rename_table"
    values={[
        { label: 'rename_table', value: 'rename_table' }
    ]}
>
<TabItem value="rename_table">

Renames a table or a namespace. For more information, see S3 Tables in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:RenameTable permission to use this operation.

```sql
EXEC aws.s3tables.table_buckets.rename_table 
@table_bucket_arn='{{ table_bucket_arn }}' --required, 
@namespace='{{ namespace }}' --required, 
@name='{{ name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"newNamespaceName": "{{ newNamespaceName }}", 
"newName": "{{ newName }}", 
"versionToken": "{{ versionToken }}"
}'
;
```
</TabItem>
</Tabs>
