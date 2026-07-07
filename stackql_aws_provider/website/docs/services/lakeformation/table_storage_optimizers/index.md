--- 
title: table_storage_optimizers
hide_title: false
hide_table_of_contents: false
keywords:
  - table_storage_optimizers
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

Creates, updates, deletes, gets or lists a <code>table_storage_optimizers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="table_storage_optimizers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lakeformation.table_storage_optimizers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_table_storage_optimizers"
    values={[
        { label: 'list_table_storage_optimizers', value: 'list_table_storage_optimizers' }
    ]}
>
<TabItem value="list_table_storage_optimizers">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</td>
</tr>
<tr>
    <td><CopyableCode code="StorageOptimizerList" /></td>
    <td><code>array</code></td>
    <td>A list of the storage optimizers associated with a table.</td>
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
    <td><a href="#list_table_storage_optimizers"><CopyableCode code="list_table_storage_optimizers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the configuration of all storage optimizers associated with a specified table.</td>
</tr>
<tr>
    <td><a href="#update_table_storage_optimizer"><CopyableCode code="update_table_storage_optimizer" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-TableName"><code>TableName</code></a>, <a href="#parameter-StorageOptimizerConfig"><code>StorageOptimizerConfig</code></a></td>
    <td></td>
    <td>Updates the configuration of the storage optimizers for a table.</td>
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
    defaultValue="list_table_storage_optimizers"
    values={[
        { label: 'list_table_storage_optimizers', value: 'list_table_storage_optimizers' }
    ]}
>
<TabItem value="list_table_storage_optimizers">

Returns the configuration of all storage optimizers associated with a specified table.

```sql
SELECT
NextToken,
StorageOptimizerList
FROM aws.lakeformation.table_storage_optimizers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_table_storage_optimizer"
    values={[
        { label: 'update_table_storage_optimizer', value: 'update_table_storage_optimizer' }
    ]}
>
<TabItem value="update_table_storage_optimizer">

Updates the configuration of the storage optimizers for a table.

```sql
UPDATE aws.lakeformation.table_storage_optimizers
SET 
CatalogId = '{{ CatalogId }}',
DatabaseName = '{{ DatabaseName }}',
TableName = '{{ TableName }}',
StorageOptimizerConfig = '{{ StorageOptimizerConfig }}'
WHERE 
region = '{{ region }}' --required
AND DatabaseName = '{{ DatabaseName }}' --required
AND TableName = '{{ TableName }}' --required
AND StorageOptimizerConfig = '{{ StorageOptimizerConfig }}' --required
RETURNING
Result;
```
</TabItem>
</Tabs>
