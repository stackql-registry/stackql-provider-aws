--- 
title: table_bucket_encryptions
hide_title: false
hide_table_of_contents: false
keywords:
  - table_bucket_encryptions
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

Creates, updates, deletes, gets or lists a <code>table_bucket_encryptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="table_bucket_encryptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3tables.table_bucket_encryptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_table_bucket_encryption"
    values={[
        { label: 'get_table_bucket_encryption', value: 'get_table_bucket_encryption' }
    ]}
>
<TabItem value="get_table_bucket_encryption">

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
    <td><CopyableCode code="kmsKeyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the KMS key to use for encryption. This field is required only when sseAlgorithm is set to aws:kms. (pattern: &lt;code&gt;(arn:aws&#91;-a-z0-9&#93;*:kms:&#91;-a-z0-9&#93;*:&#91;0-9&#93;&#123;12&#125;:key/.+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sseAlgorithm" /></td>
    <td><code>string</code></td>
    <td>The server-side encryption algorithm to use. Valid values are AES256 for S3-managed encryption keys, or aws:kms for Amazon Web Services KMS-managed encryption keys. If you choose SSE-KMS encryption you must grant the S3 Tables maintenance principal access to your KMS key. For more information, see Permissions requirements for S3 Tables SSE-KMS encryption. (AES256, aws:kms)</td>
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
    <td><a href="#get_table_bucket_encryption"><CopyableCode code="get_table_bucket_encryption" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-table_bucket_arn"><code>table_bucket_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the encryption configuration for a table bucket. Permissions You must have the s3tables:GetTableBucketEncryption permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#put_table_bucket_encryption"><CopyableCode code="put_table_bucket_encryption" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-table_bucket_arn"><code>table_bucket_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-encryptionConfiguration"><code>encryptionConfiguration</code></a></td>
    <td></td>
    <td>Sets the encryption configuration for a table bucket. Permissions You must have the s3tables:PutTableBucketEncryption permission to use this operation. If you choose SSE-KMS encryption you must grant the S3 Tables maintenance principal access to your KMS key. For more information, see Permissions requirements for S3 Tables SSE-KMS encryption in the Amazon Simple Storage Service User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_table_bucket_encryption"><CopyableCode code="delete_table_bucket_encryption" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-table_bucket_arn"><code>table_bucket_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the encryption configuration for a table bucket. Permissions You must have the s3tables:DeleteTableBucketEncryption permission to use this operation.</td>
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
    defaultValue="get_table_bucket_encryption"
    values={[
        { label: 'get_table_bucket_encryption', value: 'get_table_bucket_encryption' }
    ]}
>
<TabItem value="get_table_bucket_encryption">

Gets the encryption configuration for a table bucket. Permissions You must have the s3tables:GetTableBucketEncryption permission to use this operation.

```sql
SELECT
kmsKeyArn,
sseAlgorithm
FROM aws.s3tables.table_bucket_encryptions
WHERE table_bucket_arn = '{{ table_bucket_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_table_bucket_encryption"
    values={[
        { label: 'put_table_bucket_encryption', value: 'put_table_bucket_encryption' }
    ]}
>
<TabItem value="put_table_bucket_encryption">

Sets the encryption configuration for a table bucket. Permissions You must have the s3tables:PutTableBucketEncryption permission to use this operation. If you choose SSE-KMS encryption you must grant the S3 Tables maintenance principal access to your KMS key. For more information, see Permissions requirements for S3 Tables SSE-KMS encryption in the Amazon Simple Storage Service User Guide.

```sql
REPLACE aws.s3tables.table_bucket_encryptions
SET 
encryptionConfiguration = '{{ encryptionConfiguration }}'
WHERE 
table_bucket_arn = '{{ table_bucket_arn }}' --required
AND region = '{{ region }}' --required
AND encryptionConfiguration = '{{ encryptionConfiguration }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_table_bucket_encryption"
    values={[
        { label: 'delete_table_bucket_encryption', value: 'delete_table_bucket_encryption' }
    ]}
>
<TabItem value="delete_table_bucket_encryption">

Deletes the encryption configuration for a table bucket. Permissions You must have the s3tables:DeleteTableBucketEncryption permission to use this operation.

```sql
DELETE FROM aws.s3tables.table_bucket_encryptions
WHERE table_bucket_arn = '{{ table_bucket_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
