--- 
title: dataset_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - dataset_groups
  - forecast
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

Creates, updates, deletes, gets or lists a <code>dataset_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dataset_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.forecast.dataset_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_dataset_group"
    values={[
        { label: 'describe_dataset_group', value: 'describe_dataset_group' },
        { label: 'list_dataset_groups', value: 'list_dataset_groups' }
    ]}
>
<TabItem value="describe_dataset_group">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the dataset group was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DatasetArns" /></td>
    <td><code>array</code></td>
    <td>An array of Amazon Resource Names (ARNs) of the datasets contained in the dataset group.</td>
</tr>
<tr>
    <td><CopyableCode code="DatasetGroupArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the dataset group. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DatasetGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the dataset group. (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Domain" /></td>
    <td><code>string</code></td>
    <td>The domain associated with the dataset group. (RETAIL, CUSTOM, INVENTORY_PLANNING, EC2_CAPACITY, WORK_FORCE, WEB_TRAFFIC, METRICS)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModificationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the dataset group was created or last updated from a call to the UpdateDatasetGroup operation. While the dataset group is being updated, LastModificationTime is the current time of the DescribeDatasetGroup call.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the dataset group. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED UPDATE_PENDING, UPDATE_IN_PROGRESS, UPDATE_FAILED The UPDATE states apply when you call the UpdateDatasetGroup operation. The Status of the dataset group must be ACTIVE before you can use the dataset group to create a predictor.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_dataset_groups">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the dataset group was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DatasetGroupArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dataset group. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DatasetGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the dataset group. (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModificationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the dataset group was created or last updated from a call to the UpdateDatasetGroup operation. While the dataset group is being updated, LastModificationTime is the current time of the ListDatasetGroups call.</td>
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
    <td><a href="#describe_dataset_group"><CopyableCode code="describe_dataset_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a dataset group created using the CreateDatasetGroup operation. In addition to listing the parameters provided in the CreateDatasetGroup request, this operation includes the following properties: DatasetArns - The datasets belonging to the group. CreationTime LastModificationTime Status</td>
</tr>
<tr>
    <td><a href="#list_dataset_groups"><CopyableCode code="list_dataset_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of dataset groups created using the CreateDatasetGroup operation. For each dataset group, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the dataset group ARN with the DescribeDatasetGroup operation.</td>
</tr>
<tr>
    <td><a href="#create_dataset_group"><CopyableCode code="create_dataset_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatasetGroupName"><code>DatasetGroupName</code></a></td>
    <td></td>
    <td>Creates a dataset group, which holds a collection of related datasets. You can add datasets to the dataset group when you create the dataset group, or later by using the UpdateDatasetGroup operation. After creating a dataset group and adding datasets, you use the dataset group when you create a predictor. For more information, see Dataset groups. To get a list of all your datasets groups, use the ListDatasetGroups operation. The Status of a dataset group must be ACTIVE before you can use the dataset group to create a predictor. To get the status, use the DescribeDatasetGroup operation.</td>
</tr>
<tr>
    <td><a href="#update_dataset_group"><CopyableCode code="update_dataset_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatasetGroupArn"><code>DatasetGroupArn</code></a>, <a href="#parameter-DatasetArns"><code>DatasetArns</code></a></td>
    <td></td>
    <td>Replaces the datasets in a dataset group with the specified datasets. The Status of the dataset group must be ACTIVE before you can use the dataset group to create a predictor. Use the DescribeDatasetGroup operation to get the status.</td>
</tr>
<tr>
    <td><a href="#delete_dataset_group"><CopyableCode code="delete_dataset_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a dataset group created using the CreateDatasetGroup operation. You can only delete dataset groups that have a status of ACTIVE, CREATE_FAILED, or UPDATE_FAILED. To get the status, use the DescribeDatasetGroup operation. This operation deletes only the dataset group, not the datasets in the group.</td>
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
    defaultValue="describe_dataset_group"
    values={[
        { label: 'describe_dataset_group', value: 'describe_dataset_group' },
        { label: 'list_dataset_groups', value: 'list_dataset_groups' }
    ]}
>
<TabItem value="describe_dataset_group">

Describes a dataset group created using the CreateDatasetGroup operation. In addition to listing the parameters provided in the CreateDatasetGroup request, this operation includes the following properties: DatasetArns - The datasets belonging to the group. CreationTime LastModificationTime Status

```sql
SELECT
CreationTime,
DatasetArns,
DatasetGroupArn,
DatasetGroupName,
Domain,
LastModificationTime,
Status
FROM aws.forecast.dataset_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_dataset_groups">

Returns a list of dataset groups created using the CreateDatasetGroup operation. For each dataset group, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the dataset group ARN with the DescribeDatasetGroup operation.

```sql
SELECT
CreationTime,
DatasetGroupArn,
DatasetGroupName,
LastModificationTime
FROM aws.forecast.dataset_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_dataset_group"
    values={[
        { label: 'create_dataset_group', value: 'create_dataset_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_dataset_group">

Creates a dataset group, which holds a collection of related datasets. You can add datasets to the dataset group when you create the dataset group, or later by using the UpdateDatasetGroup operation. After creating a dataset group and adding datasets, you use the dataset group when you create a predictor. For more information, see Dataset groups. To get a list of all your datasets groups, use the ListDatasetGroups operation. The Status of a dataset group must be ACTIVE before you can use the dataset group to create a predictor. To get the status, use the DescribeDatasetGroup operation.

```sql
INSERT INTO aws.forecast.dataset_groups (
DatasetGroupName,
Domain,
DatasetArns,
Tags,
region
)
SELECT 
'{{ DatasetGroupName }}' /* required */,
'{{ Domain }}',
'{{ DatasetArns }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
DatasetGroupArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: dataset_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the dataset_groups resource.
    - name: DatasetGroupName
      value: "{{ DatasetGroupName }}"
      description: |
        A name for the dataset group.
    - name: Domain
      value: "{{ Domain }}"
      description: |
        The domain associated with the dataset group. When you add a dataset to a dataset group, this value and the value specified for the Domain parameter of the CreateDataset operation must match. The Domain and DatasetType that you choose determine the fields that must be present in training data that you import to a dataset. For example, if you choose the RETAIL domain and TARGET_TIME_SERIES as the DatasetType, Amazon Forecast requires that item_id, timestamp, and demand fields are present in your data. For more information, see Dataset groups.
      valid_values: ['RETAIL', 'CUSTOM', 'INVENTORY_PLANNING', 'EC2_CAPACITY', 'WORK_FORCE', 'WEB_TRAFFIC', 'METRICS']
    - name: DatasetArns
      value:
        - "{{ DatasetArns }}"
      description: |
        An array of Amazon Resource Names (ARNs) of the datasets that you want to include in the dataset group.
    - name: Tags
      description: |
        The optional metadata that you apply to the dataset group to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. The following basic restrictions apply to tags: Maximum number of tags per resource - 50. For each resource, each tag key must be unique, and each tag key can have only one value. Maximum key length - 128 Unicode characters in UTF-8. Maximum value length - 256 Unicode characters in UTF-8. If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case sensitive. Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_dataset_group"
    values={[
        { label: 'update_dataset_group', value: 'update_dataset_group' }
    ]}
>
<TabItem value="update_dataset_group">

Replaces the datasets in a dataset group with the specified datasets. The Status of the dataset group must be ACTIVE before you can use the dataset group to create a predictor. Use the DescribeDatasetGroup operation to get the status.

```sql
UPDATE aws.forecast.dataset_groups
SET 
DatasetGroupArn = '{{ DatasetGroupArn }}',
DatasetArns = '{{ DatasetArns }}'
WHERE 
region = '{{ region }}' --required
AND DatasetGroupArn = '{{ DatasetGroupArn }}' --required
AND DatasetArns = '{{ DatasetArns }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_dataset_group"
    values={[
        { label: 'delete_dataset_group', value: 'delete_dataset_group' }
    ]}
>
<TabItem value="delete_dataset_group">

Deletes a dataset group created using the CreateDatasetGroup operation. You can only delete dataset groups that have a status of ACTIVE, CREATE_FAILED, or UPDATE_FAILED. To get the status, use the DescribeDatasetGroup operation. This operation deletes only the dataset group, not the datasets in the group.

```sql
DELETE FROM aws.forecast.dataset_groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
