--- 
title: integration_table_properties
hide_title: false
hide_table_of_contents: false
keywords:
  - integration_table_properties
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

Creates, updates, deletes, gets or lists an <code>integration_table_properties</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="integration_table_properties" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.integration_table_properties" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_integration_table_properties"
    values={[
        { label: 'get_integration_table_properties', value: 'get_integration_table_properties' }
    ]}
>
<TabItem value="get_integration_table_properties">

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
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the target table for which to retrieve integration table properties. Currently, this API only supports retrieving properties for target tables, and the provided ARN should be the ARN of the target table in the Glue Data Catalog. Support for retrieving integration table properties for source connections (using the connection ARN) is not yet implemented and will be added in a future release.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceTableConfig" /></td>
    <td><code>object</code></td>
    <td>A structure for the source table configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="TableName" /></td>
    <td><code>string</code></td>
    <td>The name of the table to be replicated.</td>
</tr>
<tr>
    <td><CopyableCode code="TargetTableConfig" /></td>
    <td><code>object</code></td>
    <td>A structure for the target table configuration.</td>
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
    <td><a href="#get_integration_table_properties"><CopyableCode code="get_integration_table_properties" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API is used to retrieve optional override properties for the tables that need to be replicated. These properties can include properties for filtering and partition for source and target tables.</td>
</tr>
<tr>
    <td><a href="#create_integration_table_properties"><CopyableCode code="create_integration_table_properties" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a>, <a href="#parameter-TableName"><code>TableName</code></a></td>
    <td></td>
    <td>This API is used to provide optional override properties for the the tables that need to be replicated. These properties can include properties for filtering and partitioning for the source and target tables. To set both source and target properties the same API need to be invoked with the Glue connection ARN as ResourceArn with SourceTableConfig, and the Glue database ARN as ResourceArn with TargetTableConfig respectively.</td>
</tr>
<tr>
    <td><a href="#update_integration_table_properties"><CopyableCode code="update_integration_table_properties" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a>, <a href="#parameter-TableName"><code>TableName</code></a></td>
    <td></td>
    <td>This API is used to provide optional override properties for the tables that need to be replicated. These properties can include properties for filtering and partitioning for the source and target tables. To set both source and target properties the same API need to be invoked with the Glue connection ARN as ResourceArn with SourceTableConfig, and the Glue database ARN as ResourceArn with TargetTableConfig respectively. The override will be reflected across all the integrations using same ResourceArn and source table.</td>
</tr>
<tr>
    <td><a href="#delete_integration_table_properties"><CopyableCode code="delete_integration_table_properties" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the table properties that have been created for the tables that need to be replicated.</td>
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
    defaultValue="get_integration_table_properties"
    values={[
        { label: 'get_integration_table_properties', value: 'get_integration_table_properties' }
    ]}
>
<TabItem value="get_integration_table_properties">

This API is used to retrieve optional override properties for the tables that need to be replicated. These properties can include properties for filtering and partition for source and target tables.

```sql
SELECT
ResourceArn,
SourceTableConfig,
TableName,
TargetTableConfig
FROM aws.glue.integration_table_properties
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_integration_table_properties"
    values={[
        { label: 'create_integration_table_properties', value: 'create_integration_table_properties' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_integration_table_properties">

This API is used to provide optional override properties for the the tables that need to be replicated. These properties can include properties for filtering and partitioning for the source and target tables. To set both source and target properties the same API need to be invoked with the Glue connection ARN as ResourceArn with SourceTableConfig, and the Glue database ARN as ResourceArn with TargetTableConfig respectively.

```sql
INSERT INTO aws.glue.integration_table_properties (
ResourceArn,
TableName,
SourceTableConfig,
TargetTableConfig,
region
)
SELECT 
'{{ ResourceArn }}' /* required */,
'{{ TableName }}' /* required */,
'{{ SourceTableConfig }}',
'{{ TargetTableConfig }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: integration_table_properties
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the integration_table_properties resource.
    - name: ResourceArn
      value: "{{ ResourceArn }}"
      description: |
        The Amazon Resource Name (ARN) of the target table for which to create integration table properties. Currently, this API only supports creating integration table properties for target tables, and the provided ARN should be the ARN of the target table in the Glue Data Catalog. Support for creating integration table properties for source connections (using the connection ARN) is not yet implemented and will be added in a future release.
    - name: TableName
      value: "{{ TableName }}"
      description: |
        The name of the table to be replicated.
    - name: SourceTableConfig
      description: |
        A structure for the source table configuration. See the SourceTableConfig structure to see list of supported source properties.
      value:
        Fields:
          - "{{ Fields }}"
        FilterPredicate: "{{ FilterPredicate }}"
        PrimaryKey:
          - "{{ PrimaryKey }}"
        RecordUpdateField: "{{ RecordUpdateField }}"
    - name: TargetTableConfig
      description: |
        A structure for the target table configuration.
      value:
        UnnestSpec: "{{ UnnestSpec }}"
        PartitionSpec:
          - FieldName: "{{ FieldName }}"
            FunctionSpec: "{{ FunctionSpec }}"
            ConversionSpec: "{{ ConversionSpec }}"
        TargetTableName: "{{ TargetTableName }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_integration_table_properties"
    values={[
        { label: 'update_integration_table_properties', value: 'update_integration_table_properties' }
    ]}
>
<TabItem value="update_integration_table_properties">

This API is used to provide optional override properties for the tables that need to be replicated. These properties can include properties for filtering and partitioning for the source and target tables. To set both source and target properties the same API need to be invoked with the Glue connection ARN as ResourceArn with SourceTableConfig, and the Glue database ARN as ResourceArn with TargetTableConfig respectively. The override will be reflected across all the integrations using same ResourceArn and source table.

```sql
UPDATE aws.glue.integration_table_properties
SET 
ResourceArn = '{{ ResourceArn }}',
TableName = '{{ TableName }}',
SourceTableConfig = '{{ SourceTableConfig }}',
TargetTableConfig = '{{ TargetTableConfig }}'
WHERE 
region = '{{ region }}' --required
AND ResourceArn = '{{ ResourceArn }}' --required
AND TableName = '{{ TableName }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_integration_table_properties"
    values={[
        { label: 'delete_integration_table_properties', value: 'delete_integration_table_properties' }
    ]}
>
<TabItem value="delete_integration_table_properties">

Deletes the table properties that have been created for the tables that need to be replicated.

```sql
DELETE FROM aws.glue.integration_table_properties
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
