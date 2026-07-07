--- 
title: table_optimizers
hide_title: false
hide_table_of_contents: false
keywords:
  - table_optimizers
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

Creates, updates, deletes, gets or lists a <code>table_optimizers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="table_optimizers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.table_optimizers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_table_optimizer"
    values={[
        { label: 'get_table_optimizer', value: 'get_table_optimizer' },
        { label: 'batch_get_table_optimizer', value: 'batch_get_table_optimizer' }
    ]}
>
<TabItem value="get_table_optimizer">

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
    <td><CopyableCode code="CatalogId" /></td>
    <td><code>string</code></td>
    <td>The Catalog ID of the table. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DatabaseName" /></td>
    <td><code>string</code></td>
    <td>The name of the database in the catalog in which the table resides. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TableName" /></td>
    <td><code>string</code></td>
    <td>The name of the table. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TableOptimizer" /></td>
    <td><code>object</code></td>
    <td>The optimizer associated with the specified table.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="batch_get_table_optimizer">

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
    <td><CopyableCode code="Failures" /></td>
    <td><code>array</code></td>
    <td>A list of errors from the operation.</td>
</tr>
<tr>
    <td><CopyableCode code="TableOptimizers" /></td>
    <td><code>array</code></td>
    <td>A list of BatchTableOptimizer objects.</td>
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
    <td><a href="#get_table_optimizer"><CopyableCode code="get_table_optimizer" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the configuration of all optimizers associated with a specified table.</td>
</tr>
<tr>
    <td><a href="#batch_get_table_optimizer"><CopyableCode code="batch_get_table_optimizer" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the configuration for the specified table optimizers.</td>
</tr>
<tr>
    <td><a href="#create_table_optimizer"><CopyableCode code="create_table_optimizer" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CatalogId"><code>CatalogId</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-TableName"><code>TableName</code></a>, <a href="#parameter-Type"><code>Type</code></a>, <a href="#parameter-TableOptimizerConfiguration"><code>TableOptimizerConfiguration</code></a></td>
    <td></td>
    <td>Creates a new table optimizer for a specific function.</td>
</tr>
<tr>
    <td><a href="#update_table_optimizer"><CopyableCode code="update_table_optimizer" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CatalogId"><code>CatalogId</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-TableName"><code>TableName</code></a>, <a href="#parameter-Type"><code>Type</code></a>, <a href="#parameter-TableOptimizerConfiguration"><code>TableOptimizerConfiguration</code></a></td>
    <td></td>
    <td>Updates the configuration for an existing table optimizer.</td>
</tr>
<tr>
    <td><a href="#delete_table_optimizer"><CopyableCode code="delete_table_optimizer" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an optimizer and all associated metadata for a table. The optimization will no longer be performed on the table.</td>
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
    defaultValue="get_table_optimizer"
    values={[
        { label: 'get_table_optimizer', value: 'get_table_optimizer' },
        { label: 'batch_get_table_optimizer', value: 'batch_get_table_optimizer' }
    ]}
>
<TabItem value="get_table_optimizer">

Returns the configuration of all optimizers associated with a specified table.

```sql
SELECT
CatalogId,
DatabaseName,
TableName,
TableOptimizer
FROM aws.glue.table_optimizers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="batch_get_table_optimizer">

Returns the configuration for the specified table optimizers.

```sql
SELECT
Failures,
TableOptimizers
FROM aws.glue.table_optimizers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_table_optimizer"
    values={[
        { label: 'create_table_optimizer', value: 'create_table_optimizer' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_table_optimizer">

Creates a new table optimizer for a specific function.

```sql
INSERT INTO aws.glue.table_optimizers (
CatalogId,
DatabaseName,
TableName,
Type,
TableOptimizerConfiguration,
region
)
SELECT 
'{{ CatalogId }}' /* required */,
'{{ DatabaseName }}' /* required */,
'{{ TableName }}' /* required */,
'{{ Type }}' /* required */,
'{{ TableOptimizerConfiguration }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: table_optimizers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the table_optimizers resource.
    - name: CatalogId
      value: "{{ CatalogId }}"
      description: |
        The Catalog ID of the table.
    - name: DatabaseName
      value: "{{ DatabaseName }}"
      description: |
        The name of the database in the catalog in which the table resides.
    - name: TableName
      value: "{{ TableName }}"
      description: |
        The name of the table.
    - name: Type
      value: "{{ Type }}"
      description: |
        The type of table optimizer.
      valid_values: ['compaction', 'retention', 'orphan_file_deletion']
    - name: TableOptimizerConfiguration
      description: |
        A TableOptimizerConfiguration object representing the configuration of a table optimizer.
      value:
        roleArn: "{{ roleArn }}"
        enabled: {{ enabled }}
        vpcConfiguration:
          glueConnectionName: "{{ glueConnectionName }}"
        compactionConfiguration:
          icebergConfiguration:
            strategy: "{{ strategy }}"
            minInputFiles: {{ minInputFiles }}
            deleteFileThreshold: {{ deleteFileThreshold }}
        retentionConfiguration:
          icebergConfiguration:
            snapshotRetentionPeriodInDays: {{ snapshotRetentionPeriodInDays }}
            numberOfSnapshotsToRetain: {{ numberOfSnapshotsToRetain }}
            cleanExpiredFiles: {{ cleanExpiredFiles }}
            runRateInHours: {{ runRateInHours }}
        orphanFileDeletionConfiguration:
          icebergConfiguration:
            orphanFileRetentionPeriodInDays: {{ orphanFileRetentionPeriodInDays }}
            location: "{{ location }}"
            runRateInHours: {{ runRateInHours }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_table_optimizer"
    values={[
        { label: 'update_table_optimizer', value: 'update_table_optimizer' }
    ]}
>
<TabItem value="update_table_optimizer">

Updates the configuration for an existing table optimizer.

```sql
UPDATE aws.glue.table_optimizers
SET 
CatalogId = '{{ CatalogId }}',
DatabaseName = '{{ DatabaseName }}',
TableName = '{{ TableName }}',
Type = '{{ Type }}',
TableOptimizerConfiguration = '{{ TableOptimizerConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND CatalogId = '{{ CatalogId }}' --required
AND DatabaseName = '{{ DatabaseName }}' --required
AND TableName = '{{ TableName }}' --required
AND Type = '{{ Type }}' --required
AND TableOptimizerConfiguration = '{{ TableOptimizerConfiguration }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_table_optimizer"
    values={[
        { label: 'delete_table_optimizer', value: 'delete_table_optimizer' }
    ]}
>
<TabItem value="delete_table_optimizer">

Deletes an optimizer and all associated metadata for a table. The optimization will no longer be performed on the table.

```sql
DELETE FROM aws.glue.table_optimizers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
