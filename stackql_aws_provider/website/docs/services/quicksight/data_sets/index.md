--- 
title: data_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - data_sets
  - quicksight
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

Creates, updates, deletes, gets or lists a <code>data_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.data_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_data_set"
    values={[
        { label: 'describe_data_set', value: 'describe_data_set' },
        { label: 'search_data_sets', value: 'search_data_sets' },
        { label: 'list_data_sets', value: 'list_data_sets' }
    ]}
>
<TabItem value="describe_data_set">

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
    <td><CopyableCode code="DataSet" /></td>
    <td><code>object</code></td>
    <td>Information on the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_data_sets">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="ColumnLevelPermissionRulesApplied" /></td>
    <td><code>boolean</code></td>
    <td>A value that indicates if the dataset has column level permission configured.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that this dataset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DataSetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="ImportMode" /></td>
    <td><code>string</code></td>
    <td>A value that indicates whether you want to import the data into SPICE. (SPICE, DIRECT_QUERY)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time that this dataset was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A display name for the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="RowLevelPermissionDataSet" /></td>
    <td><code>object</code></td>
    <td>Information about a dataset that contains permissions for row-level security (RLS). The permissions dataset maps fields to users or groups. For more information, see Using Row-Level Security (RLS) to Restrict Access to a Dataset in the Quick Sight User Guide. The option to deny permissions by setting PermissionPolicy to DENY_ACCESS is not supported for new RLS datasets.</td>
</tr>
<tr>
    <td><CopyableCode code="RowLevelPermissionDataSetMap" /></td>
    <td><code>object</code></td>
    <td>The row-level security configuration for the dataset in the new data preparation experience.</td>
</tr>
<tr>
    <td><CopyableCode code="RowLevelPermissionTagConfigurationApplied" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the row level permission tags are applied.</td>
</tr>
<tr>
    <td><CopyableCode code="UseAs" /></td>
    <td><code>string</code></td>
    <td>The usage of the dataset. (RLS_RULES)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_sets">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="ColumnLevelPermissionRulesApplied" /></td>
    <td><code>boolean</code></td>
    <td>A value that indicates if the dataset has column level permission configured.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that this dataset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DataSetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="ImportMode" /></td>
    <td><code>string</code></td>
    <td>A value that indicates whether you want to import the data into SPICE. (SPICE, DIRECT_QUERY)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time that this dataset was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A display name for the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="RowLevelPermissionDataSet" /></td>
    <td><code>object</code></td>
    <td>Information about a dataset that contains permissions for row-level security (RLS). The permissions dataset maps fields to users or groups. For more information, see Using Row-Level Security (RLS) to Restrict Access to a Dataset in the Quick Sight User Guide. The option to deny permissions by setting PermissionPolicy to DENY_ACCESS is not supported for new RLS datasets.</td>
</tr>
<tr>
    <td><CopyableCode code="RowLevelPermissionDataSetMap" /></td>
    <td><code>object</code></td>
    <td>The row-level security configuration for the dataset in the new data preparation experience.</td>
</tr>
<tr>
    <td><CopyableCode code="RowLevelPermissionTagConfigurationApplied" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the row level permission tags are applied.</td>
</tr>
<tr>
    <td><CopyableCode code="UseAs" /></td>
    <td><code>string</code></td>
    <td>The usage of the dataset. (RLS_RULES)</td>
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
    <td><a href="#describe_data_set"><CopyableCode code="describe_data_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-data_set_id"><code>data_set_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a dataset. This operation doesn't support datasets that include uploaded files as a source.</td>
</tr>
<tr>
    <td><a href="#search_data_sets"><CopyableCode code="search_data_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use the SearchDataSets operation to search for datasets that belong to an account.</td>
</tr>
<tr>
    <td><a href="#list_data_sets"><CopyableCode code="list_data_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists all of the datasets belonging to the current Amazon Web Services account in an Amazon Web Services Region. The permissions resource is arn:aws:quicksight:region:aws-account-id:dataset/*.</td>
</tr>
<tr>
    <td><a href="#create_data_set"><CopyableCode code="create_data_set" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DataSetId"><code>DataSetId</code></a>, <a href="#parameter-PhysicalTableMap"><code>PhysicalTableMap</code></a>, <a href="#parameter-ImportMode"><code>ImportMode</code></a></td>
    <td></td>
    <td>Creates a dataset. This operation doesn't support datasets that include uploaded files as a source.</td>
</tr>
<tr>
    <td><a href="#update_data_set"><CopyableCode code="update_data_set" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-data_set_id"><code>data_set_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PhysicalTableMap"><code>PhysicalTableMap</code></a>, <a href="#parameter-ImportMode"><code>ImportMode</code></a></td>
    <td></td>
    <td>Updates a dataset. This operation doesn't support datasets that include uploaded files as a source. Partial updates are not supported by this operation.</td>
</tr>
<tr>
    <td><a href="#delete_data_set"><CopyableCode code="delete_data_set" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-data_set_id"><code>data_set_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a dataset.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID.</td>
</tr>
<tr id="parameter-data_set_id">
    <td><CopyableCode code="data_set_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the dataset that you want to delete. This ID is unique per Amazon Web Services Region for each Amazon Web Services account.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned per request.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no more results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_data_set"
    values={[
        { label: 'describe_data_set', value: 'describe_data_set' },
        { label: 'search_data_sets', value: 'search_data_sets' },
        { label: 'list_data_sets', value: 'list_data_sets' }
    ]}
>
<TabItem value="describe_data_set">

Describes a dataset. This operation doesn't support datasets that include uploaded files as a source.

```sql
SELECT
DataSet,
RequestId,
Status
FROM aws.quicksight.data_sets
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND data_set_id = '{{ data_set_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="search_data_sets">

Use the SearchDataSets operation to search for datasets that belong to an account.

```sql
SELECT
Arn,
ColumnLevelPermissionRulesApplied,
CreatedTime,
DataSetId,
ImportMode,
LastUpdatedTime,
Name,
RowLevelPermissionDataSet,
RowLevelPermissionDataSetMap,
RowLevelPermissionTagConfigurationApplied,
UseAs
FROM aws.quicksight.data_sets
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_sets">

Lists all of the datasets belonging to the current Amazon Web Services account in an Amazon Web Services Region. The permissions resource is arn:aws:quicksight:region:aws-account-id:dataset/*.

```sql
SELECT
Arn,
ColumnLevelPermissionRulesApplied,
CreatedTime,
DataSetId,
ImportMode,
LastUpdatedTime,
Name,
RowLevelPermissionDataSet,
RowLevelPermissionDataSetMap,
RowLevelPermissionTagConfigurationApplied,
UseAs
FROM aws.quicksight.data_sets
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_set"
    values={[
        { label: 'create_data_set', value: 'create_data_set' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_set">

Creates a dataset. This operation doesn't support datasets that include uploaded files as a source.

```sql
INSERT INTO aws.quicksight.data_sets (
DataSetId,
Name,
PhysicalTableMap,
LogicalTableMap,
ImportMode,
ColumnGroups,
FieldFolders,
Permissions,
RowLevelPermissionDataSet,
RowLevelPermissionTagConfiguration,
ColumnLevelPermissionRules,
Tags,
DataSetUsageConfiguration,
DatasetParameters,
FolderArns,
PerformanceConfiguration,
UseAs,
DataPrepConfiguration,
SemanticModelConfiguration,
aws_account_id,
region
)
SELECT 
'{{ DataSetId }}' /* required */,
'{{ Name }}',
'{{ PhysicalTableMap }}' /* required */,
'{{ LogicalTableMap }}',
'{{ ImportMode }}' /* required */,
'{{ ColumnGroups }}',
'{{ FieldFolders }}',
'{{ Permissions }}',
'{{ RowLevelPermissionDataSet }}',
'{{ RowLevelPermissionTagConfiguration }}',
'{{ ColumnLevelPermissionRules }}',
'{{ Tags }}',
'{{ DataSetUsageConfiguration }}',
'{{ DatasetParameters }}',
'{{ FolderArns }}',
'{{ PerformanceConfiguration }}',
'{{ UseAs }}',
'{{ DataPrepConfiguration }}',
'{{ SemanticModelConfiguration }}',
'{{ aws_account_id }}',
'{{ region }}'
RETURNING
Arn,
DataSetId,
IngestionArn,
IngestionId,
RequestId,
Status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_sets
  props:
    - name: aws_account_id
      value: "{{ aws_account_id }}"
      description: Required parameter for the data_sets resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_sets resource.
    - name: DataSetId
      value: "{{ DataSetId }}"
    - name: Name
      value: "{{ Name }}"
    - name: PhysicalTableMap
      value: "{{ PhysicalTableMap }}"
    - name: LogicalTableMap
      value: "{{ LogicalTableMap }}"
    - name: ImportMode
      value: "{{ ImportMode }}"
      valid_values: ['SPICE', 'DIRECT_QUERY']
    - name: ColumnGroups
      value:
        - GeoSpatialColumnGroup:
            Name: "{{ Name }}"
            CountryCode: "{{ CountryCode }}"
            Columns:
              - "{{ Columns }}"
    - name: FieldFolders
      value: "{{ FieldFolders }}"
    - name: Permissions
      value:
        - Principal: "{{ Principal }}"
          Actions: "{{ Actions }}"
    - name: RowLevelPermissionDataSet
      description: |
        Information about a dataset that contains permissions for row-level security (RLS). The permissions dataset maps fields to users or groups. For more information, see Using Row-Level Security (RLS) to Restrict Access to a Dataset in the Quick Sight User Guide. The option to deny permissions by setting PermissionPolicy to DENY_ACCESS is not supported for new RLS datasets.
      value:
        Namespace: "{{ Namespace }}"
        Arn: "{{ Arn }}"
        PermissionPolicy: "{{ PermissionPolicy }}"
        FormatVersion: "{{ FormatVersion }}"
        Status: "{{ Status }}"
    - name: RowLevelPermissionTagConfiguration
      description: |
        The configuration of tags on a dataset to set row-level security.
      value:
        Status: "{{ Status }}"
        TagRules:
          - TagKey: "{{ TagKey }}"
            ColumnName: "{{ ColumnName }}"
            TagMultiValueDelimiter: "{{ TagMultiValueDelimiter }}"
            MatchAllValue: "{{ MatchAllValue }}"
        TagRuleConfigurations:
          - "{{ TagRuleConfigurations }}"
    - name: ColumnLevelPermissionRules
      value:
        - Principals: "{{ Principals }}"
          ColumnNames: "{{ ColumnNames }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: DataSetUsageConfiguration
      description: |
        The usage configuration to apply to child datasets that reference this dataset as a source.
      value:
        DisableUseAsDirectQuerySource: {{ DisableUseAsDirectQuerySource }}
        DisableUseAsImportedSource: {{ DisableUseAsImportedSource }}
    - name: DatasetParameters
      value:
        - StringDatasetParameter:
            Id: "{{ Id }}"
            Name: "{{ Name }}"
            ValueType: "{{ ValueType }}"
            DefaultValues:
              StaticValues:
                - "{{ StaticValues }}"
          DecimalDatasetParameter:
            Id: "{{ Id }}"
            Name: "{{ Name }}"
            ValueType: "{{ ValueType }}"
            DefaultValues:
              StaticValues:
                - {{ StaticValues }}
          IntegerDatasetParameter:
            Id: "{{ Id }}"
            Name: "{{ Name }}"
            ValueType: "{{ ValueType }}"
            DefaultValues:
              StaticValues:
                - {{ StaticValues }}
          DateTimeDatasetParameter:
            Id: "{{ Id }}"
            Name: "{{ Name }}"
            ValueType: "{{ ValueType }}"
            TimeGranularity: "{{ TimeGranularity }}"
            DefaultValues:
              StaticValues:
                - "{{ StaticValues }}"
    - name: FolderArns
      value:
        - "{{ FolderArns }}"
    - name: PerformanceConfiguration
      description: |
        The configuration for the performance optimization of the dataset that contains a UniqueKey configuration.
      value:
        UniqueKeys:
          - ColumnNames: "{{ ColumnNames }}"
    - name: UseAs
      value: "{{ UseAs }}"
      valid_values: ['RLS_RULES']
    - name: DataPrepConfiguration
      description: |
        Configuration for data preparation operations, defining the complete pipeline from source tables through transformations to destination tables.
      value:
        SourceTableMap: "{{ SourceTableMap }}"
        TransformStepMap: "{{ TransformStepMap }}"
        DestinationTableMap: "{{ DestinationTableMap }}"
    - name: SemanticModelConfiguration
      description: |
        Configuration for the semantic model that defines how prepared data is structured for analysis and reporting.
      value:
        TableMap: "{{ TableMap }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_data_set"
    values={[
        { label: 'update_data_set', value: 'update_data_set' }
    ]}
>
<TabItem value="update_data_set">

Updates a dataset. This operation doesn't support datasets that include uploaded files as a source. Partial updates are not supported by this operation.

```sql
UPDATE aws.quicksight.data_sets
SET 
Name = '{{ Name }}',
PhysicalTableMap = '{{ PhysicalTableMap }}',
LogicalTableMap = '{{ LogicalTableMap }}',
ImportMode = '{{ ImportMode }}',
ColumnGroups = '{{ ColumnGroups }}',
FieldFolders = '{{ FieldFolders }}',
RowLevelPermissionDataSet = '{{ RowLevelPermissionDataSet }}',
RowLevelPermissionTagConfiguration = '{{ RowLevelPermissionTagConfiguration }}',
ColumnLevelPermissionRules = '{{ ColumnLevelPermissionRules }}',
DataSetUsageConfiguration = '{{ DataSetUsageConfiguration }}',
DatasetParameters = '{{ DatasetParameters }}',
PerformanceConfiguration = '{{ PerformanceConfiguration }}',
DataPrepConfiguration = '{{ DataPrepConfiguration }}',
SemanticModelConfiguration = '{{ SemanticModelConfiguration }}'
WHERE 
aws_account_id = '{{ aws_account_id }}' --required
AND data_set_id = '{{ data_set_id }}' --required
AND region = '{{ region }}' --required
AND PhysicalTableMap = '{{ PhysicalTableMap }}' --required
AND ImportMode = '{{ ImportMode }}' --required
RETURNING
Arn,
DataSetId,
IngestionArn,
IngestionId,
RequestId,
Status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_set"
    values={[
        { label: 'delete_data_set', value: 'delete_data_set' }
    ]}
>
<TabItem value="delete_data_set">

Deletes a dataset.

```sql
DELETE FROM aws.quicksight.data_sets
WHERE aws_account_id = '{{ aws_account_id }}' --required
AND data_set_id = '{{ data_set_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
