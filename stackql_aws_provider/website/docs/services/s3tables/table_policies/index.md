--- 
title: table_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - table_policies
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

Creates, updates, deletes, gets or lists a <code>table_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="table_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3tables.table_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_table_policy"
    values={[
        { label: 'get_table_policy', value: 'get_table_policy' }
    ]}
>
<TabItem value="get_table_policy">

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
    <td><CopyableCode code="resource_policy" /></td>
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
    <td><a href="#get_table_policy"><CopyableCode code="get_table_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-table_bucket_arn"><code>table_bucket_arn</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets details about a table policy. For more information, see Viewing a table policy in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:GetTablePolicy permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#put_table_policy"><CopyableCode code="put_table_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-table_bucket_arn"><code>table_bucket_arn</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourcePolicy"><code>resourcePolicy</code></a></td>
    <td></td>
    <td>Creates a new table policy or replaces an existing table policy for a table. For more information, see Adding a table policy in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:PutTablePolicy permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#delete_table_policy"><CopyableCode code="delete_table_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-table_bucket_arn"><code>table_bucket_arn</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a table policy. For more information, see Deleting a table policy in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:DeleteTablePolicy permission to use this operation.</td>
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
    <td>The table name.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_table_policy"
    values={[
        { label: 'get_table_policy', value: 'get_table_policy' }
    ]}
>
<TabItem value="get_table_policy">

Gets details about a table policy. For more information, see Viewing a table policy in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:GetTablePolicy permission to use this operation.

```sql
SELECT
resource_policy
FROM aws.s3tables.table_policies
WHERE table_bucket_arn = '{{ table_bucket_arn }}' -- required
AND namespace = '{{ namespace }}' -- required
AND name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_table_policy"
    values={[
        { label: 'put_table_policy', value: 'put_table_policy' }
    ]}
>
<TabItem value="put_table_policy">

Creates a new table policy or replaces an existing table policy for a table. For more information, see Adding a table policy in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:PutTablePolicy permission to use this operation.

```sql
REPLACE aws.s3tables.table_policies
SET 
resourcePolicy = '{{ resourcePolicy }}'
WHERE 
table_bucket_arn = '{{ table_bucket_arn }}' --required
AND namespace = '{{ namespace }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
AND resourcePolicy = '{{ resourcePolicy }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_table_policy"
    values={[
        { label: 'delete_table_policy', value: 'delete_table_policy' }
    ]}
>
<TabItem value="delete_table_policy">

Deletes a table policy. For more information, see Deleting a table policy in the Amazon Simple Storage Service User Guide. Permissions You must have the s3tables:DeleteTablePolicy permission to use this operation.

```sql
DELETE FROM aws.s3tables.table_policies
WHERE table_bucket_arn = '{{ table_bucket_arn }}' --required
AND namespace = '{{ namespace }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
