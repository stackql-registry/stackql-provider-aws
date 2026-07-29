--- 
title: table_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - table_versions
  - glue
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

Creates, updates, deletes, gets or lists a <code>table_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="table_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.table_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_table_version"
    values={[
        { label: 'get_table_version', value: 'get_table_version' }
    ]}
>
<TabItem value="get_table_version">

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
    <td><CopyableCode code="table" /></td>
    <td><code>object</code></td>
    <td>The table in question.</td>
</tr>
<tr>
    <td><CopyableCode code="version_id" /></td>
    <td><code>string</code></td>
    <td>The ID value that identifies this table version. A VersionId is a string representation of an integer. Each version is incremented by 1. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_table_version"><CopyableCode code="get_table_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a specified version of a table.</td>
</tr>
<tr>
    <td><a href="#delete_table_version"><CopyableCode code="delete_table_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specified version of a table.</td>
</tr>
<tr>
    <td><a href="#get_table_versions"><CopyableCode code="get_table_versions" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-TableName"><code>TableName</code></a></td>
    <td></td>
    <td>Retrieves a list of strings that identify available versions of a specified table.</td>
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
    defaultValue="get_table_version"
    values={[
        { label: 'get_table_version', value: 'get_table_version' }
    ]}
>
<TabItem value="get_table_version">

Retrieves a specified version of a table.

```sql
SELECT
table,
version_id
FROM aws.glue.table_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_table_version"
    values={[
        { label: 'delete_table_version', value: 'delete_table_version' }
    ]}
>
<TabItem value="delete_table_version">

Deletes a specified version of a table.

```sql
DELETE FROM aws.glue.table_versions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="get_table_versions"
    values={[
        { label: 'get_table_versions', value: 'get_table_versions' }
    ]}
>
<TabItem value="get_table_versions">

Retrieves a list of strings that identify available versions of a specified table.

```sql
EXEC aws.glue.table_versions.get_table_versions 
@region='{{ region }}' --required 
@@json=
'{
"CatalogId": "{{ CatalogId }}", 
"DatabaseName": "{{ DatabaseName }}", 
"TableName": "{{ TableName }}", 
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}, 
"AuditContext": "{{ AuditContext }}"
}'
;
```
</TabItem>
</Tabs>
