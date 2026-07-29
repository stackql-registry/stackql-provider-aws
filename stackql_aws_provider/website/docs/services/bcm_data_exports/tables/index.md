--- 
title: tables
hide_title: false
hide_table_of_contents: false
keywords:
  - tables
  - bcm_data_exports
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bcm_data_exports.tables" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_table"
    values={[
        { label: 'get_table', value: 'get_table' },
        { label: 'list_tables', value: 'list_tables' }
    ]}
>
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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The table description. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>array</code></td>
    <td>The schema of the table.</td>
</tr>
<tr>
    <td><CopyableCode code="table_name" /></td>
    <td><code>string</code></td>
    <td>The name of the table. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="table_properties" /></td>
    <td><code>object</code></td>
    <td>TableProperties are additional configurations you can provide to change the data and schema of a table. Each table can have different TableProperties. Tables are not required to have any TableProperties. Each table property has a default value that it assumes if not specified.</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for the table. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="table_name" /></td>
    <td><code>string</code></td>
    <td>The name of the table. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="table_properties" /></td>
    <td><code>array</code></td>
    <td>The properties for the table.</td>
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
    <td><a href="#get_table"><CopyableCode code="get_table" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the metadata for the specified table and table properties. This includes the list of columns in the table schema, their data types, and column descriptions.</td>
</tr>
<tr>
    <td><a href="#list_tables"><CopyableCode code="list_tables" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all available tables in data exports.</td>
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
    defaultValue="get_table"
    values={[
        { label: 'get_table', value: 'get_table' },
        { label: 'list_tables', value: 'list_tables' }
    ]}
>
<TabItem value="get_table">

Returns the metadata for the specified table and table properties. This includes the list of columns in the table schema, their data types, and column descriptions.

```sql
SELECT
description,
schema,
table_name,
table_properties
FROM aws.bcm_data_exports.tables
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_tables">

Lists all available tables in data exports.

```sql
SELECT
description,
table_name,
table_properties
FROM aws.bcm_data_exports.tables
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
