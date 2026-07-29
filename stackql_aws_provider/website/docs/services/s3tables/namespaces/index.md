--- 
title: namespaces
hide_title: false
hide_table_of_contents: false
keywords:
  - namespaces
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

Creates, updates, deletes, gets or lists a <code>namespaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="namespaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3tables.namespaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_namespace"
    values={[
        { label: 'get_namespace', value: 'get_namespace' },
        { label: 'list_namespaces', value: 'list_namespaces' }
    ]}
>
<TabItem value="get_namespace">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the namespace was created at.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The ID of the account that created the namespace. (pattern: &lt;code&gt;&#91;0-9&#93;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="namespace" /></td>
    <td><code>array</code></td>
    <td>The name of the namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the account that owns the namespcace. (pattern: &lt;code&gt;&#91;0-9&#93;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="table_bucket_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the table bucket containing this namespace.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_namespaces">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the namespace was created at.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The ID of the account that created the namespace. (pattern: &lt;code&gt;&#91;0-9&#93;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="namespace" /></td>
    <td><code>array</code></td>
    <td>The name of the namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace_id" /></td>
    <td><code>string</code></td>
    <td>The system-assigned unique identifier for the namespace.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the account that owns the namespace. (pattern: &lt;code&gt;&#91;0-9&#93;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="table_bucket_id" /></td>
    <td><code>string</code></td>
    <td>The system-assigned unique identifier for the table bucket that contains this namespace.</td>
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
    <td><a href="#get_namespace"><CopyableCode code="get_namespace" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-table_bucket_arn"><code>table_bucket_arn</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets details about a namespace. For more information, see Table namespaces in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:GetNamespace permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#list_namespaces"><CopyableCode code="list_namespaces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-table_bucket_arn"><code>table_bucket_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-prefix"><code>prefix</code></a>, <a href="#parameter-continuationToken"><code>continuationToken</code></a>, <a href="#parameter-maxNamespaces"><code>maxNamespaces</code></a></td>
    <td>Lists the namespaces within a table bucket. For more information, see Table namespaces in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:ListNamespaces permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#create_namespace"><CopyableCode code="create_namespace" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-table_bucket_arn"><code>table_bucket_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-namespace"><code>namespace</code></a></td>
    <td></td>
    <td>Creates a namespace. A namespace is a logical grouping of tables within your table bucket, which you can use to organize tables. For more information, see Create a namespace in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:CreateNamespace permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#delete_namespace"><CopyableCode code="delete_namespace" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-table_bucket_arn"><code>table_bucket_arn</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a namespace. For more information, see Delete a namespace in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:DeleteNamespace permission to use this operation.</td>
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
<tr id="parameter-namespace">
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The name of the namespace.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-table_bucket_arn">
    <td><CopyableCode code="table_bucket_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the table bucket associated with the namespace.</td>
</tr>
<tr id="parameter-continuationToken">
    <td><CopyableCode code="continuationToken" /></td>
    <td><code>string</code></td>
    <td>ContinuationToken indicates to Amazon S3 that the list is being continued on this bucket with a token. ContinuationToken is obfuscated and is not a real key. You can use this ContinuationToken for pagination of the list results.</td>
</tr>
<tr id="parameter-maxNamespaces">
    <td><CopyableCode code="maxNamespaces" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of namespaces to return in the list.</td>
</tr>
<tr id="parameter-prefix">
    <td><CopyableCode code="prefix" /></td>
    <td><code>string</code></td>
    <td>The prefix of the namespaces.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_namespace"
    values={[
        { label: 'get_namespace', value: 'get_namespace' },
        { label: 'list_namespaces', value: 'list_namespaces' }
    ]}
>
<TabItem value="get_namespace">

Gets details about a namespace. For more information, see Table namespaces in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:GetNamespace permission to use this operation.

```sql
SELECT
created_at,
created_by,
namespace,
namespace_id,
owner_account_id,
table_bucket_id
FROM aws.s3tables.namespaces
WHERE table_bucket_arn = '{{ table_bucket_arn }}' -- required
AND namespace = '{{ namespace }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_namespaces">

Lists the namespaces within a table bucket. For more information, see Table namespaces in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:ListNamespaces permission to use this operation.

```sql
SELECT
created_at,
created_by,
namespace,
namespace_id,
owner_account_id,
table_bucket_id
FROM aws.s3tables.namespaces
WHERE table_bucket_arn = '{{ table_bucket_arn }}' -- required
AND region = '{{ region }}' -- required
AND prefix = '{{ prefix }}'
AND continuationToken = '{{ continuationToken }}'
AND maxNamespaces = '{{ maxNamespaces }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_namespace"
    values={[
        { label: 'create_namespace', value: 'create_namespace' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_namespace">

Creates a namespace. A namespace is a logical grouping of tables within your table bucket, which you can use to organize tables. For more information, see Create a namespace in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:CreateNamespace permission to use this operation.

```sql
INSERT INTO aws.s3tables.namespaces (
namespace,
table_bucket_arn,
region
)
SELECT 
'{{ namespace }}' /* required */,
'{{ table_bucket_arn }}',
'{{ region }}'
RETURNING
namespace,
table_bucket_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: namespaces
  props:
    - name: table_bucket_arn
      value: "{{ table_bucket_arn }}"
      description: Required parameter for the namespaces resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the namespaces resource.
    - name: namespace
      value:
        - "{{ namespace }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_namespace"
    values={[
        { label: 'delete_namespace', value: 'delete_namespace' }
    ]}
>
<TabItem value="delete_namespace">

Deletes a namespace. For more information, see Delete a namespace in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:DeleteNamespace permission to use this operation.

```sql
DELETE FROM aws.s3tables.namespaces
WHERE table_bucket_arn = '{{ table_bucket_arn }}' --required
AND namespace = '{{ namespace }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
