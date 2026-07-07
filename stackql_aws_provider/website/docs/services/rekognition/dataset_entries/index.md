--- 
title: dataset_entries
hide_title: false
hide_table_of_contents: false
keywords:
  - dataset_entries
  - rekognition
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

Creates, updates, deletes, gets or lists a <code>dataset_entries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dataset_entries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rekognition.dataset_entries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_dataset_entries"
    values={[
        { label: 'list_dataset_entries', value: 'list_dataset_entries' }
    ]}
>
<TabItem value="list_dataset_entries">

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
    <td><CopyableCode code="dataset_entry" /></td>
    <td><code>string</code></td>
    <td>A list of entries (images) in the dataset.</td>
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
    <td><a href="#list_dataset_entries"><CopyableCode code="list_dataset_entries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation applies only to Amazon Rekognition Custom Labels. Lists the entries (images) within a dataset. An entry is a JSON Line that contains the information for a single image, including the image location, assigned labels, and object location bounding boxes. For more information, see Creating a manifest file. JSON Lines in the response include information about non-terminal errors found in the dataset. Non terminal errors are reported in errors lists within each JSON Line. The same information is reported in the training and testing validation result manifests that Amazon Rekognition Custom Labels creates during model training. You can filter the response in variety of ways, such as choosing which labels to return and returning JSON Lines created after a specific date. This operation requires permissions to perform the rekognition:ListDatasetEntries action.</td>
</tr>
<tr>
    <td><a href="#update_dataset_entries"><CopyableCode code="update_dataset_entries" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatasetArn"><code>DatasetArn</code></a>, <a href="#parameter-Changes"><code>Changes</code></a></td>
    <td></td>
    <td>This operation applies only to Amazon Rekognition Custom Labels. Adds or updates one or more entries (images) in a dataset. An entry is a JSON Line which contains the information for a single image, including the image location, assigned labels, and object location bounding boxes. For more information, see Image-Level labels in manifest files and Object localization in manifest files in the Amazon Rekognition Custom Labels Developer Guide. If the source-ref field in the JSON line references an existing image, the existing image in the dataset is updated. If source-ref field doesn't reference an existing image, the image is added as a new image to the dataset. You specify the changes that you want to make in the Changes input parameter. There isn't a limit to the number JSON Lines that you can change, but the size of Changes must be less than 5MB. UpdateDatasetEntries returns immediatly, but the dataset update might take a while to complete. Use DescribeDataset to check the current status. The dataset updated successfully if the value of Status is UPDATE_COMPLETE. To check if any non-terminal errors occured, call ListDatasetEntries and check for the presence of errors lists in the JSON Lines. Dataset update fails if a terminal error occurs (Status = UPDATE_FAILED). Currently, you can't access the terminal error information from the Amazon Rekognition Custom Labels SDK. This operation requires permissions to perform the rekognition:UpdateDatasetEntries action.</td>
</tr>
<tr>
    <td><a href="#distribute_dataset_entries"><CopyableCode code="distribute_dataset_entries" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Datasets"><code>Datasets</code></a></td>
    <td></td>
    <td>This operation applies only to Amazon Rekognition Custom Labels. Distributes the entries (images) in a training dataset across the training dataset and the test dataset for a project. DistributeDatasetEntries moves 20% of the training dataset images to the test dataset. An entry is a JSON Line that describes an image. You supply the Amazon Resource Names (ARN) of a project's training dataset and test dataset. The training dataset must contain the images that you want to split. The test dataset must be empty. The datasets must belong to the same project. To create training and test datasets for a project, call CreateDataset. Distributing a dataset takes a while to complete. To check the status call DescribeDataset. The operation is complete when the Status field for the training dataset and the test dataset is UPDATE_COMPLETE. If the dataset split fails, the value of Status is UPDATE_FAILED. This operation requires permissions to perform the rekognition:DistributeDatasetEntries action.</td>
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
    defaultValue="list_dataset_entries"
    values={[
        { label: 'list_dataset_entries', value: 'list_dataset_entries' }
    ]}
>
<TabItem value="list_dataset_entries">

This operation applies only to Amazon Rekognition Custom Labels. Lists the entries (images) within a dataset. An entry is a JSON Line that contains the information for a single image, including the image location, assigned labels, and object location bounding boxes. For more information, see Creating a manifest file. JSON Lines in the response include information about non-terminal errors found in the dataset. Non terminal errors are reported in errors lists within each JSON Line. The same information is reported in the training and testing validation result manifests that Amazon Rekognition Custom Labels creates during model training. You can filter the response in variety of ways, such as choosing which labels to return and returning JSON Lines created after a specific date. This operation requires permissions to perform the rekognition:ListDatasetEntries action.

```sql
SELECT
dataset_entry
FROM aws.rekognition.dataset_entries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_dataset_entries"
    values={[
        { label: 'update_dataset_entries', value: 'update_dataset_entries' }
    ]}
>
<TabItem value="update_dataset_entries">

This operation applies only to Amazon Rekognition Custom Labels. Adds or updates one or more entries (images) in a dataset. An entry is a JSON Line which contains the information for a single image, including the image location, assigned labels, and object location bounding boxes. For more information, see Image-Level labels in manifest files and Object localization in manifest files in the Amazon Rekognition Custom Labels Developer Guide. If the source-ref field in the JSON line references an existing image, the existing image in the dataset is updated. If source-ref field doesn't reference an existing image, the image is added as a new image to the dataset. You specify the changes that you want to make in the Changes input parameter. There isn't a limit to the number JSON Lines that you can change, but the size of Changes must be less than 5MB. UpdateDatasetEntries returns immediatly, but the dataset update might take a while to complete. Use DescribeDataset to check the current status. The dataset updated successfully if the value of Status is UPDATE_COMPLETE. To check if any non-terminal errors occured, call ListDatasetEntries and check for the presence of errors lists in the JSON Lines. Dataset update fails if a terminal error occurs (Status = UPDATE_FAILED). Currently, you can't access the terminal error information from the Amazon Rekognition Custom Labels SDK. This operation requires permissions to perform the rekognition:UpdateDatasetEntries action.

```sql
UPDATE aws.rekognition.dataset_entries
SET 
DatasetArn = '{{ DatasetArn }}',
Changes = '{{ Changes }}'
WHERE 
region = '{{ region }}' --required
AND DatasetArn = '{{ DatasetArn }}' --required
AND Changes = '{{ Changes }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="distribute_dataset_entries"
    values={[
        { label: 'distribute_dataset_entries', value: 'distribute_dataset_entries' }
    ]}
>
<TabItem value="distribute_dataset_entries">

This operation applies only to Amazon Rekognition Custom Labels. Distributes the entries (images) in a training dataset across the training dataset and the test dataset for a project. DistributeDatasetEntries moves 20% of the training dataset images to the test dataset. An entry is a JSON Line that describes an image. You supply the Amazon Resource Names (ARN) of a project's training dataset and test dataset. The training dataset must contain the images that you want to split. The test dataset must be empty. The datasets must belong to the same project. To create training and test datasets for a project, call CreateDataset. Distributing a dataset takes a while to complete. To check the status call DescribeDataset. The operation is complete when the Status field for the training dataset and the test dataset is UPDATE_COMPLETE. If the dataset split fails, the value of Status is UPDATE_FAILED. This operation requires permissions to perform the rekognition:DistributeDatasetEntries action.

```sql
EXEC aws.rekognition.dataset_entries.distribute_dataset_entries 
@region='{{ region }}' --required 
@@json=
'{
"Datasets": "{{ Datasets }}"
}'
;
```
</TabItem>
</Tabs>
