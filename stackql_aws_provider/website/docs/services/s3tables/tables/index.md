--- 
title: tables
hide_title: false
hide_table_of_contents: false
keywords:
  - tables
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

Creates, updates, deletes, gets or lists a <code>tables</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tables" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3tables.tables" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_tables"
    values={[
        { label: 'list_tables', value: 'list_tables' },
        { label: 'get_table', value: 'get_table' }
    ]}
>
<TabItem value="list_tables">

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
    <td>The name of the table. (pattern: &lt;code&gt;&#91;0-9a-z_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the table was created at.</td>
</tr>
<tr>
    <td><CopyableCode code="managed_by_service" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services service managing this table, if applicable. For example, a replicated table is managed by the S3 Tables replication service.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the table was last modified at.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace" /></td>
    <td><code>array</code></td>
    <td>The name of the namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the namespace that contains this table.</td>
</tr>
<tr>
    <td><CopyableCode code="table_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the table. (pattern: &lt;code&gt;(arn:aws&#91;-a-z0-9&#93;*:&#91;a-z0-9&#93;+:&#91;-a-z0-9&#93;*:&#91;0-9&#93;&#123;12&#125;:bucket/&#91;a-z0-9_-&#93;&#123;3,63&#125;/table/&#91;a-zA-Z0-9-_&#93;&#123;1,255&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="table_bucket_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the table bucket that contains this table.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the table. (customer, aws)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_table">

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
    <td>The name of the table. (pattern: &lt;code&gt;&#91;0-9a-z_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the table bucket was created at.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The ID of the account that created the table. (pattern: &lt;code&gt;&#91;0-9&#93;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="format_" /></td>
    <td><code>string</code></td>
    <td>The format of the table. (ICEBERG)</td>
</tr>
<tr>
    <td><CopyableCode code="managed_by_service" /></td>
    <td><code>string</code></td>
    <td>The service that manages the table.</td>
</tr>
<tr>
    <td><CopyableCode code="managed_table_information" /></td>
    <td><code>object</code></td>
    <td>If this table is managed by S3 Tables, contains additional information such as replication details.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata_location" /></td>
    <td><code>string</code></td>
    <td>The metadata location of the table.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the table was last modified on.</td>
</tr>
<tr>
    <td><CopyableCode code="modified_by" /></td>
    <td><code>string</code></td>
    <td>The ID of the account that last modified the table. (pattern: &lt;code&gt;&#91;0-9&#93;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="namespace" /></td>
    <td><code>array</code></td>
    <td>The namespace associated with the table.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the namespace containing this table.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the account that owns the table. (pattern: &lt;code&gt;&#91;0-9&#93;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="table_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the table. (pattern: &lt;code&gt;(arn:aws&#91;-a-z0-9&#93;*:&#91;a-z0-9&#93;+:&#91;-a-z0-9&#93;*:&#91;0-9&#93;&#123;12&#125;:bucket/&#91;a-z0-9_-&#93;&#123;3,63&#125;/table/&#91;a-zA-Z0-9-_&#93;&#123;1,255&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="table_bucket_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the table bucket containing this table.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the table. (customer, aws)</td>
</tr>
<tr>
    <td><CopyableCode code="version_token" /></td>
    <td><code>string</code></td>
    <td>The version token of the table.</td>
</tr>
<tr>
    <td><CopyableCode code="warehouse_location" /></td>
    <td><code>string</code></td>
    <td>The warehouse location of the table.</td>
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
    <td><a href="#list_tables"><CopyableCode code="list_tables" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-table_bucket_arn"><code>table_bucket_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-prefix"><code>prefix</code></a>, <a href="#parameter-continuationToken"><code>continuationToken</code></a>, <a href="#parameter-maxTables"><code>maxTables</code></a></td>
    <td>List tables in the given table bucket. For more information, see S3 Tables in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:ListTables permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#get_table"><CopyableCode code="get_table" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-tableBucketARN"><code>tableBucketARN</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-tableArn"><code>tableArn</code></a></td>
    <td>Gets details about a table. For more information, see S3 Tables in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:GetTable permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#create_table"><CopyableCode code="create_table" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-table_bucket_arn"><code>table_bucket_arn</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-format"><code>format</code></a></td>
    <td></td>
    <td>Creates a new table associated with the given namespace in a table bucket. For more information, see Creating an Amazon S3 table in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:CreateTable permission to use this operation. If you use this operation with the optional metadata request parameter you must have the s3tables:PutTableData permission. If you use this operation with the optional encryptionConfiguration request parameter you must have the s3tables:PutTableEncryption permission. If you use this operation with the storageClassConfiguration request parameter, you must have the s3tables:PutTableStorageClass permission. To create a table with tags, you must have the s3tables:TagResource permission in addition to s3tables:CreateTable permission. Additionally, If you choose SSE-KMS encryption you must grant the S3 Tables maintenance principal access to your KMS key. For more information, see Permissions requirements for S3 Tables SSE-KMS encryption.</td>
</tr>
<tr>
    <td><a href="#delete_table"><CopyableCode code="delete_table" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-table_bucket_arn"><code>table_bucket_arn</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-versionToken"><code>versionToken</code></a></td>
    <td>Deletes a table. For more information, see Deleting an Amazon S3 table in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:DeleteTable permission to use this operation.</td>
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
    <td>The name of the table.</td>
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
    <td>The Amazon Resource Name (ARN) of the table bucket that contains the table.</td>
</tr>
<tr id="parameter-continuationToken">
    <td><CopyableCode code="continuationToken" /></td>
    <td><code>string</code></td>
    <td>ContinuationToken indicates to Amazon S3 that the list is being continued on this bucket with a token. ContinuationToken is obfuscated and is not a real key. You can use this ContinuationToken for pagination of the list results.</td>
</tr>
<tr id="parameter-maxTables">
    <td><CopyableCode code="maxTables" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of tables to return.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the table.</td>
</tr>
<tr id="parameter-namespace">
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The name of the namespace the table is associated with.</td>
</tr>
<tr id="parameter-prefix">
    <td><CopyableCode code="prefix" /></td>
    <td><code>string</code></td>
    <td>The prefix of the tables.</td>
</tr>
<tr id="parameter-tableArn">
    <td><CopyableCode code="tableArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the table.</td>
</tr>
<tr id="parameter-tableBucketARN">
    <td><CopyableCode code="tableBucketARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the table bucket associated with the table.</td>
</tr>
<tr id="parameter-versionToken">
    <td><CopyableCode code="versionToken" /></td>
    <td><code>string</code></td>
    <td>The version token of the table.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_tables"
    values={[
        { label: 'list_tables', value: 'list_tables' },
        { label: 'get_table', value: 'get_table' }
    ]}
>
<TabItem value="list_tables">

List tables in the given table bucket. For more information, see S3 Tables in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:ListTables permission to use this operation.

```sql
SELECT
name,
created_at,
managed_by_service,
modified_at,
namespace,
namespace_id,
table_arn,
table_bucket_id,
type_
FROM aws.s3tables.tables
WHERE table_bucket_arn = '{{ table_bucket_arn }}' -- required
AND region = '{{ region }}' -- required
AND namespace = '{{ namespace }}'
AND prefix = '{{ prefix }}'
AND continuationToken = '{{ continuationToken }}'
AND maxTables = '{{ maxTables }}'
;
```
</TabItem>
<TabItem value="get_table">

Gets details about a table. For more information, see S3 Tables in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:GetTable permission to use this operation.

```sql
SELECT
name,
created_at,
created_by,
format_,
managed_by_service,
managed_table_information,
metadata_location,
modified_at,
modified_by,
namespace,
namespace_id,
owner_account_id,
table_arn,
table_bucket_id,
type_,
version_token,
warehouse_location
FROM aws.s3tables.tables
WHERE region = '{{ region }}' -- required
AND tableBucketARN = '{{ tableBucketARN }}'
AND namespace = '{{ namespace }}'
AND name = '{{ name }}'
AND tableArn = '{{ tableArn }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_table"
    values={[
        { label: 'create_table', value: 'create_table' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_table">

Creates a new table associated with the given namespace in a table bucket. For more information, see Creating an Amazon S3 table in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:CreateTable permission to use this operation. If you use this operation with the optional metadata request parameter you must have the s3tables:PutTableData permission. If you use this operation with the optional encryptionConfiguration request parameter you must have the s3tables:PutTableEncryption permission. If you use this operation with the storageClassConfiguration request parameter, you must have the s3tables:PutTableStorageClass permission. To create a table with tags, you must have the s3tables:TagResource permission in addition to s3tables:CreateTable permission. Additionally, If you choose SSE-KMS encryption you must grant the S3 Tables maintenance principal access to your KMS key. For more information, see Permissions requirements for S3 Tables SSE-KMS encryption.

```sql
INSERT INTO aws.s3tables.tables (
name,
format,
metadata,
encryptionConfiguration,
storageClassConfiguration,
tags,
table_bucket_arn,
namespace,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ format }}' /* required */,
'{{ metadata }}',
'{{ encryptionConfiguration }}',
'{{ storageClassConfiguration }}',
'{{ tags }}',
'{{ table_bucket_arn }}',
'{{ namespace }}',
'{{ region }}'
RETURNING
table_arn,
version_token
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tables
  props:
    - name: table_bucket_arn
      value: "{{ table_bucket_arn }}"
      description: Required parameter for the tables resource.
    - name: namespace
      value: "{{ namespace }}"
      description: Required parameter for the tables resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the tables resource.
    - name: name
      value: "{{ name }}"
    - name: format
      value: "{{ format }}"
      valid_values: ['ICEBERG']
    - name: metadata
      description: |
        Contains details about the table metadata.
      value:
        iceberg:
          schema:
            fields:
              - id: {{ id }}
                name: "{{ name }}"
                type_: "{{ type_ }}"
                required_: {{ required_ }}
          schemaV2:
            type_: "{{ type_ }}"
            fields:
              - id: {{ id }}
                name: "{{ name }}"
                type_: "{{ type_ }}"
                required_: {{ required_ }}
                doc: "{{ doc }}"
            schemaId: {{ schemaId }}
            identifierFieldIds:
              - {{ identifierFieldIds }}
          partitionSpec:
            fields:
              - sourceId: {{ sourceId }}
                transform: "{{ transform }}"
                name: "{{ name }}"
                fieldId: {{ fieldId }}
            specId: {{ specId }}
          writeOrder:
            orderId: {{ orderId }}
            fields:
              - sourceId: {{ sourceId }}
                transform: "{{ transform }}"
                direction: "{{ direction }}"
                nullOrder: "{{ nullOrder }}"
          properties_: "{{ properties_ }}"
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
    defaultValue="delete_table"
    values={[
        { label: 'delete_table', value: 'delete_table' }
    ]}
>
<TabItem value="delete_table">

Deletes a table. For more information, see Deleting an Amazon S3 table in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:DeleteTable permission to use this operation.

```sql
DELETE FROM aws.s3tables.tables
WHERE table_bucket_arn = '{{ table_bucket_arn }}' --required
AND namespace = '{{ namespace }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
AND versionToken = '{{ versionToken }}'
;
```
</TabItem>
</Tabs>
