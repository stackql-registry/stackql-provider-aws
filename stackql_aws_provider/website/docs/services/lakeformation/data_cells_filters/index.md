--- 
title: data_cells_filters
hide_title: false
hide_table_of_contents: false
keywords:
  - data_cells_filters
  - lakeformation
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

Creates, updates, deletes, gets or lists a <code>data_cells_filters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_cells_filters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lakeformation.data_cells_filters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_cells_filter"
    values={[
        { label: 'get_data_cells_filter', value: 'get_data_cells_filter' },
        { label: 'list_data_cells_filter', value: 'list_data_cells_filter' }
    ]}
>
<TabItem value="get_data_cells_filter">

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
    <td><CopyableCode code="ColumnNames" /></td>
    <td><code>array</code></td>
    <td>A list of column names and/or nested column attributes. When specifying nested attributes, use a qualified dot (.) delimited format such as "address"."zip". Nested attributes within this list may not exceed a depth of 5.</td>
</tr>
<tr>
    <td><CopyableCode code="ColumnWildcard" /></td>
    <td><code>object</code></td>
    <td>A wildcard with exclusions. You must specify either a ColumnNames list or the ColumnWildCard.</td>
</tr>
<tr>
    <td><CopyableCode code="DatabaseName" /></td>
    <td><code>string</code></td>
    <td>A database in the Glue Data Catalog. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name given by the user to the data filter cell. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RowFilter" /></td>
    <td><code>object</code></td>
    <td>A PartiQL predicate.</td>
</tr>
<tr>
    <td><CopyableCode code="TableCatalogId" /></td>
    <td><code>string</code></td>
    <td>The ID of the catalog to which the table belongs. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TableName" /></td>
    <td><code>string</code></td>
    <td>A table in the database. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="VersionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the data cells filter version. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_cells_filter">

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
    <td><CopyableCode code="ColumnNames" /></td>
    <td><code>array</code></td>
    <td>A list of column names and/or nested column attributes. When specifying nested attributes, use a qualified dot (.) delimited format such as "address"."zip". Nested attributes within this list may not exceed a depth of 5.</td>
</tr>
<tr>
    <td><CopyableCode code="ColumnWildcard" /></td>
    <td><code>object</code></td>
    <td>A wildcard with exclusions. You must specify either a ColumnNames list or the ColumnWildCard.</td>
</tr>
<tr>
    <td><CopyableCode code="DatabaseName" /></td>
    <td><code>string</code></td>
    <td>A database in the Glue Data Catalog. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name given by the user to the data filter cell. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RowFilter" /></td>
    <td><code>object</code></td>
    <td>A PartiQL predicate.</td>
</tr>
<tr>
    <td><CopyableCode code="TableCatalogId" /></td>
    <td><code>string</code></td>
    <td>The ID of the catalog to which the table belongs. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TableName" /></td>
    <td><code>string</code></td>
    <td>A table in the database. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="VersionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the data cells filter version. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_data_cells_filter"><CopyableCode code="get_data_cells_filter" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a data cells filter.</td>
</tr>
<tr>
    <td><a href="#list_data_cells_filter"><CopyableCode code="list_data_cells_filter" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the data cell filters on a table.</td>
</tr>
<tr>
    <td><a href="#create_data_cells_filter"><CopyableCode code="create_data_cells_filter" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TableData"><code>TableData</code></a></td>
    <td></td>
    <td>Creates a data cell filter to allow one to grant access to certain columns on certain rows.</td>
</tr>
<tr>
    <td><a href="#update_data_cells_filter"><CopyableCode code="update_data_cells_filter" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TableData"><code>TableData</code></a></td>
    <td></td>
    <td>Updates a data cell filter.</td>
</tr>
<tr>
    <td><a href="#delete_data_cells_filter"><CopyableCode code="delete_data_cells_filter" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a data cell filter.</td>
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
    defaultValue="get_data_cells_filter"
    values={[
        { label: 'get_data_cells_filter', value: 'get_data_cells_filter' },
        { label: 'list_data_cells_filter', value: 'list_data_cells_filter' }
    ]}
>
<TabItem value="get_data_cells_filter">

Returns a data cells filter.

```sql
SELECT
ColumnNames,
ColumnWildcard,
DatabaseName,
Name,
RowFilter,
TableCatalogId,
TableName,
VersionId
FROM aws.lakeformation.data_cells_filters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_cells_filter">

Lists all the data cell filters on a table.

```sql
SELECT
ColumnNames,
ColumnWildcard,
DatabaseName,
Name,
RowFilter,
TableCatalogId,
TableName,
VersionId
FROM aws.lakeformation.data_cells_filters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_cells_filter"
    values={[
        { label: 'create_data_cells_filter', value: 'create_data_cells_filter' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_cells_filter">

Creates a data cell filter to allow one to grant access to certain columns on certain rows.

```sql
INSERT INTO aws.lakeformation.data_cells_filters (
TableData,
region
)
SELECT 
'{{ TableData }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_cells_filters
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_cells_filters resource.
    - name: TableData
      description: |
        A structure that describes certain columns on certain rows.
      value:
        TableCatalogId: "{{ TableCatalogId }}"
        DatabaseName: "{{ DatabaseName }}"
        TableName: "{{ TableName }}"
        Name: "{{ Name }}"
        RowFilter:
          FilterExpression: "{{ FilterExpression }}"
          AllRowsWildcard: "{{ AllRowsWildcard }}"
        ColumnNames:
          - "{{ ColumnNames }}"
        ColumnWildcard:
          ExcludedColumnNames:
            - "{{ ExcludedColumnNames }}"
        VersionId: "{{ VersionId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_data_cells_filter"
    values={[
        { label: 'update_data_cells_filter', value: 'update_data_cells_filter' }
    ]}
>
<TabItem value="update_data_cells_filter">

Updates a data cell filter.

```sql
UPDATE aws.lakeformation.data_cells_filters
SET 
TableData = '{{ TableData }}'
WHERE 
region = '{{ region }}' --required
AND TableData = '{{ TableData }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_cells_filter"
    values={[
        { label: 'delete_data_cells_filter', value: 'delete_data_cells_filter' }
    ]}
>
<TabItem value="delete_data_cells_filter">

Deletes a data cell filter.

```sql
DELETE FROM aws.lakeformation.data_cells_filters
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
