--- 
title: datasets
hide_title: false
hide_table_of_contents: false
keywords:
  - datasets
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

Creates, updates, deletes, gets or lists a <code>datasets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="datasets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rekognition.datasets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_dataset"
    values={[
        { label: 'describe_dataset', value: 'describe_dataset' }
    ]}
>
<TabItem value="describe_dataset">

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
    <td><CopyableCode code="creation_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp for the time and date that the dataset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_stats" /></td>
    <td><code>object</code></td>
    <td>The status message code for the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp for the date and time that the dataset was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the dataset. (CREATE_IN_PROGRESS, CREATE_COMPLETE, CREATE_FAILED, UPDATE_IN_PROGRESS, UPDATE_COMPLETE, UPDATE_FAILED, DELETE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>The status message for the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="status_message_code" /></td>
    <td><code>string</code></td>
    <td>The status message code for the dataset operation. If a service error occurs, try the API call again later. If a client error occurs, check the input parameters to the dataset API call that failed. (SUCCESS, SERVICE_ERROR, CLIENT_ERROR)</td>
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
    <td><a href="#describe_dataset"><CopyableCode code="describe_dataset" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation applies only to Amazon Rekognition Custom Labels. Describes an Amazon Rekognition Custom Labels dataset. You can get information such as the current status of a dataset and statistics about the images and labels in a dataset. This operation requires permissions to perform the rekognition:DescribeDataset action.</td>
</tr>
<tr>
    <td><a href="#create_dataset"><CopyableCode code="create_dataset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatasetType"><code>DatasetType</code></a>, <a href="#parameter-ProjectArn"><code>ProjectArn</code></a></td>
    <td></td>
    <td>This operation applies only to Amazon Rekognition Custom Labels. Creates a new Amazon Rekognition Custom Labels dataset. You can create a dataset by using an Amazon Sagemaker format manifest file or by copying an existing Amazon Rekognition Custom Labels dataset. To create a training dataset for a project, specify TRAIN for the value of DatasetType. To create the test dataset for a project, specify TEST for the value of DatasetType. The response from CreateDataset is the Amazon Resource Name (ARN) for the dataset. Creating a dataset takes a while to complete. Use DescribeDataset to check the current status. The dataset created successfully if the value of Status is CREATE_COMPLETE. To check if any non-terminal errors occurred, call ListDatasetEntries and check for the presence of errors lists in the JSON Lines. Dataset creation fails if a terminal error occurs (Status = CREATE_FAILED). Currently, you can't access the terminal error information. For more information, see Creating dataset in the Amazon Rekognition Custom Labels Developer Guide. This operation requires permissions to perform the rekognition:CreateDataset action. If you want to copy an existing dataset, you also require permission to perform the rekognition:ListDatasetEntries action.</td>
</tr>
<tr>
    <td><a href="#delete_dataset"><CopyableCode code="delete_dataset" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation applies only to Amazon Rekognition Custom Labels. Deletes an existing Amazon Rekognition Custom Labels dataset. Deleting a dataset might take while. Use DescribeDataset to check the current status. The dataset is still deleting if the value of Status is DELETE_IN_PROGRESS. If you try to access the dataset after it is deleted, you get a ResourceNotFoundException exception. You can't delete a dataset while it is creating (Status = CREATE_IN_PROGRESS) or if the dataset is updating (Status = UPDATE_IN_PROGRESS). This operation requires permissions to perform the rekognition:DeleteDataset action.</td>
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
    defaultValue="describe_dataset"
    values={[
        { label: 'describe_dataset', value: 'describe_dataset' }
    ]}
>
<TabItem value="describe_dataset">

This operation applies only to Amazon Rekognition Custom Labels. Describes an Amazon Rekognition Custom Labels dataset. You can get information such as the current status of a dataset and statistics about the images and labels in a dataset. This operation requires permissions to perform the rekognition:DescribeDataset action.

```sql
SELECT
creation_timestamp,
dataset_stats,
last_updated_timestamp,
status,
status_message,
status_message_code
FROM aws.rekognition.datasets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_dataset"
    values={[
        { label: 'create_dataset', value: 'create_dataset' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_dataset">

This operation applies only to Amazon Rekognition Custom Labels. Creates a new Amazon Rekognition Custom Labels dataset. You can create a dataset by using an Amazon Sagemaker format manifest file or by copying an existing Amazon Rekognition Custom Labels dataset. To create a training dataset for a project, specify TRAIN for the value of DatasetType. To create the test dataset for a project, specify TEST for the value of DatasetType. The response from CreateDataset is the Amazon Resource Name (ARN) for the dataset. Creating a dataset takes a while to complete. Use DescribeDataset to check the current status. The dataset created successfully if the value of Status is CREATE_COMPLETE. To check if any non-terminal errors occurred, call ListDatasetEntries and check for the presence of errors lists in the JSON Lines. Dataset creation fails if a terminal error occurs (Status = CREATE_FAILED). Currently, you can't access the terminal error information. For more information, see Creating dataset in the Amazon Rekognition Custom Labels Developer Guide. This operation requires permissions to perform the rekognition:CreateDataset action. If you want to copy an existing dataset, you also require permission to perform the rekognition:ListDatasetEntries action.

```sql
INSERT INTO aws.rekognition.datasets (
DatasetSource,
DatasetType,
ProjectArn,
Tags,
region
)
SELECT 
'{{ DatasetSource }}',
'{{ DatasetType }}' /* required */,
'{{ ProjectArn }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
dataset_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: datasets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the datasets resource.
    - name: DatasetSource
      description: |
        The source files for the dataset. You can specify the ARN of an existing dataset or specify the Amazon S3 bucket location of an Amazon Sagemaker format manifest file. If you don't specify datasetSource, an empty dataset is created. To add labeled images to the dataset, You can use the console or call UpdateDatasetEntries.
      value:
        GroundTruthManifest:
          S3Object:
            Bucket: "{{ Bucket }}"
            Name: "{{ Name }}"
            Version: "{{ Version }}"
        DatasetArn: "{{ DatasetArn }}"
    - name: DatasetType
      value: "{{ DatasetType }}"
      description: |
        The type of the dataset. Specify TRAIN to create a training dataset. Specify TEST to create a test dataset.
      valid_values: ['TRAIN', 'TEST']
    - name: ProjectArn
      value: "{{ ProjectArn }}"
      description: |
        The ARN of the Amazon Rekognition Custom Labels project to which you want to asssign the dataset.
    - name: Tags
      value: "{{ Tags }}"
      description: |
        A set of tags (key-value pairs) that you want to attach to the dataset.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_dataset"
    values={[
        { label: 'delete_dataset', value: 'delete_dataset' }
    ]}
>
<TabItem value="delete_dataset">

This operation applies only to Amazon Rekognition Custom Labels. Deletes an existing Amazon Rekognition Custom Labels dataset. Deleting a dataset might take while. Use DescribeDataset to check the current status. The dataset is still deleting if the value of Status is DELETE_IN_PROGRESS. If you try to access the dataset after it is deleted, you get a ResourceNotFoundException exception. You can't delete a dataset while it is creating (Status = CREATE_IN_PROGRESS) or if the dataset is updating (Status = UPDATE_IN_PROGRESS). This operation requires permissions to perform the rekognition:DeleteDataset action.

```sql
DELETE FROM aws.rekognition.datasets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
