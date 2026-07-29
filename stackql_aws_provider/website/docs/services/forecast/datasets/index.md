--- 
title: datasets
hide_title: false
hide_table_of_contents: false
keywords:
  - datasets
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

Creates, updates, deletes, gets or lists a <code>datasets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="datasets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.forecast.datasets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_dataset"
    values={[
        { label: 'describe_dataset', value: 'describe_dataset' },
        { label: 'list_datasets', value: 'list_datasets' }
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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the dataset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="data_frequency" /></td>
    <td><code>string</code></td>
    <td>The frequency of data collection. Valid intervals are Y (Year), M (Month), W (Week), D (Day), H (Hour), 30min (30 minutes), 15min (15 minutes), 10min (10 minutes), 5min (5 minutes), and 1min (1 minute). For example, "M" indicates every month and "30min" indicates every 30 minutes. (pattern: &lt;code&gt;^Y|M|W|D|H|30min|15min|10min|5min|1min$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dataset. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_name" /></td>
    <td><code>string</code></td>
    <td>The name of the dataset. (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_type" /></td>
    <td><code>string</code></td>
    <td>The dataset type. (TARGET_TIME_SERIES, RELATED_TIME_SERIES, ITEM_METADATA)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain associated with the dataset. (RETAIL, CUSTOM, INVENTORY_PLANNING, EC2_CAPACITY, WORK_FORCE, WEB_TRAFFIC, METRICS)</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_config" /></td>
    <td><code>object</code></td>
    <td>An Key Management Service (KMS) key and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key. You can specify this optional object in the CreateDataset and CreatePredictor requests.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When you create a dataset, LastModificationTime is the same as CreationTime. While data is being imported to the dataset, LastModificationTime is the current time of the DescribeDataset call. After a CreateDatasetImportJob operation has finished, LastModificationTime is when the import job completed or failed.</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>object</code></td>
    <td>Defines the fields of a dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the dataset. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED UPDATE_PENDING, UPDATE_IN_PROGRESS, UPDATE_FAILED The UPDATE states apply while data is imported to the dataset from a call to the CreateDatasetImportJob operation and reflect the status of the dataset import job. For example, when the import job status is CREATE_IN_PROGRESS, the status of the dataset is UPDATE_IN_PROGRESS. The Status of the dataset must be ACTIVE before you can import training data.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_datasets">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the dataset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dataset. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):forecast:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_name" /></td>
    <td><code>string</code></td>
    <td>The name of the dataset. (pattern: &lt;code&gt;^&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_type" /></td>
    <td><code>string</code></td>
    <td>The dataset type. (TARGET_TIME_SERIES, RELATED_TIME_SERIES, ITEM_METADATA)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain associated with the dataset. (RETAIL, CUSTOM, INVENTORY_PLANNING, EC2_CAPACITY, WORK_FORCE, WEB_TRAFFIC, METRICS)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When you create a dataset, LastModificationTime is the same as CreationTime. While data is being imported to the dataset, LastModificationTime is the current time of the ListDatasets call. After a CreateDatasetImportJob operation has finished, LastModificationTime is when the import job completed or failed.</td>
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
    <td>Describes an Amazon Forecast dataset created using the CreateDataset operation. In addition to listing the parameters specified in the CreateDataset request, this operation includes the following dataset properties: CreationTime LastModificationTime Status</td>
</tr>
<tr>
    <td><a href="#list_datasets"><CopyableCode code="list_datasets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of datasets created using the CreateDataset operation. For each dataset, a summary of its properties, including its Amazon Resource Name (ARN), is returned. To retrieve the complete set of properties, use the ARN with the DescribeDataset operation.</td>
</tr>
<tr>
    <td><a href="#create_dataset"><CopyableCode code="create_dataset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatasetName"><code>DatasetName</code></a>, <a href="#parameter-DatasetType"><code>DatasetType</code></a></td>
    <td></td>
    <td>Creates an Amazon Forecast dataset. The information about the dataset that you provide helps Forecast understand how to consume the data for model training. This includes the following: DataFrequency - How frequently your historical time-series data is collected. Domain and DatasetType - Each dataset has an associated dataset domain and a type within the domain. Amazon Forecast provides a list of predefined domains and types within each domain. For each unique dataset domain and type within the domain, Amazon Forecast requires your data to include a minimum set of predefined fields. Schema - A schema specifies the fields in the dataset, including the field name and data type. After creating a dataset, you import your training data into it and add the dataset to a dataset group. You use the dataset group to create a predictor. For more information, see Importing datasets. To get a list of all your datasets, use the ListDatasets operation. For example Forecast datasets, see the Amazon Forecast Sample GitHub repository. The Status of a dataset must be ACTIVE before you can import training data. Use the DescribeDataset operation to get the status.</td>
</tr>
<tr>
    <td><a href="#delete_dataset"><CopyableCode code="delete_dataset" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Forecast dataset that was created using the CreateDataset operation. You can only delete datasets that have a status of ACTIVE or CREATE_FAILED. To get the status use the DescribeDataset operation. Forecast does not automatically update any dataset groups that contain the deleted dataset. In order to update the dataset group, use the UpdateDatasetGroup operation, omitting the deleted dataset's ARN.</td>
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
        { label: 'describe_dataset', value: 'describe_dataset' },
        { label: 'list_datasets', value: 'list_datasets' }
    ]}
>
<TabItem value="describe_dataset">

Describes an Amazon Forecast dataset created using the CreateDataset operation. In addition to listing the parameters specified in the CreateDataset request, this operation includes the following dataset properties: CreationTime LastModificationTime Status

```sql
SELECT
creation_time,
data_frequency,
dataset_arn,
dataset_name,
dataset_type,
domain,
encryption_config,
last_modification_time,
schema,
status
FROM aws.forecast.datasets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_datasets">

Returns a list of datasets created using the CreateDataset operation. For each dataset, a summary of its properties, including its Amazon Resource Name (ARN), is returned. To retrieve the complete set of properties, use the ARN with the DescribeDataset operation.

```sql
SELECT
creation_time,
dataset_arn,
dataset_name,
dataset_type,
domain,
last_modification_time
FROM aws.forecast.datasets
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

Creates an Amazon Forecast dataset. The information about the dataset that you provide helps Forecast understand how to consume the data for model training. This includes the following: DataFrequency - How frequently your historical time-series data is collected. Domain and DatasetType - Each dataset has an associated dataset domain and a type within the domain. Amazon Forecast provides a list of predefined domains and types within each domain. For each unique dataset domain and type within the domain, Amazon Forecast requires your data to include a minimum set of predefined fields. Schema - A schema specifies the fields in the dataset, including the field name and data type. After creating a dataset, you import your training data into it and add the dataset to a dataset group. You use the dataset group to create a predictor. For more information, see Importing datasets. To get a list of all your datasets, use the ListDatasets operation. For example Forecast datasets, see the Amazon Forecast Sample GitHub repository. The Status of a dataset must be ACTIVE before you can import training data. Use the DescribeDataset operation to get the status.

```sql
INSERT INTO aws.forecast.datasets (
DatasetName,
Domain,
DatasetType,
DataFrequency,
Schema,
EncryptionConfig,
Tags,
region
)
SELECT 
'{{ DatasetName }}' /* required */,
'{{ Domain }}',
'{{ DatasetType }}' /* required */,
'{{ DataFrequency }}',
'{{ Schema }}',
'{{ EncryptionConfig }}',
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
    - name: DatasetName
      value: "{{ DatasetName }}"
      description: |
        A name for the dataset.
    - name: Domain
      value: "{{ Domain }}"
      description: |
        The domain associated with the dataset. When you add a dataset to a dataset group, this value and the value specified for the Domain parameter of the CreateDatasetGroup operation must match. The Domain and DatasetType that you choose determine the fields that must be present in the training data that you import to the dataset. For example, if you choose the RETAIL domain and TARGET_TIME_SERIES as the DatasetType, Amazon Forecast requires item_id, timestamp, and demand fields to be present in your data. For more information, see Importing datasets.
      valid_values: ['RETAIL', 'CUSTOM', 'INVENTORY_PLANNING', 'EC2_CAPACITY', 'WORK_FORCE', 'WEB_TRAFFIC', 'METRICS']
    - name: DatasetType
      value: "{{ DatasetType }}"
      description: |
        The dataset type. Valid values depend on the chosen Domain.
      valid_values: ['TARGET_TIME_SERIES', 'RELATED_TIME_SERIES', 'ITEM_METADATA']
    - name: DataFrequency
      value: "{{ DataFrequency }}"
      description: |
        The frequency of data collection. This parameter is required for RELATED_TIME_SERIES datasets. Valid intervals are an integer followed by Y (Year), M (Month), W (Week), D (Day), H (Hour), and min (Minute). For example, "1D" indicates every day and "15min" indicates every 15 minutes. You cannot specify a value that would overlap with the next larger frequency. That means, for example, you cannot specify a frequency of 60 minutes, because that is equivalent to 1 hour. The valid values for each frequency are the following: Minute - 1-59 Hour - 1-23 Day - 1-6 Week - 1-4 Month - 1-11 Year - 1 Thus, if you want every other week forecasts, specify "2W". Or, if you want quarterly forecasts, you specify "3M".
    - name: Schema
      description: |
        The schema for the dataset. The schema attributes and their order must match the fields in your data. The dataset Domain and DatasetType that you choose determine the minimum required fields in your training data. For information about the required fields for a specific dataset domain and type, see Dataset Domains and Dataset Types.
      value:
        Attributes:
          - AttributeName: "{{ AttributeName }}"
            AttributeType: "{{ AttributeType }}"
    - name: EncryptionConfig
      description: |
        An Key Management Service (KMS) key and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key. You can specify this optional object in the CreateDataset and CreatePredictor requests.
      value:
        RoleArn: "{{ RoleArn }}"
        KMSKeyArn: "{{ KMSKeyArn }}"
    - name: Tags
      description: |
        The optional metadata that you apply to the dataset to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. The following basic restrictions apply to tags: Maximum number of tags per resource - 50. For each resource, each tag key must be unique, and each tag key can have only one value. Maximum key length - 128 Unicode characters in UTF-8. Maximum value length - 256 Unicode characters in UTF-8. If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case sensitive. Do not use aws:, AWS:, or any upper or lowercase combination of such as a prefix for keys as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has aws as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of aws do not count against your tags per resource limit.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
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

Deletes an Amazon Forecast dataset that was created using the CreateDataset operation. You can only delete datasets that have a status of ACTIVE or CREATE_FAILED. To get the status use the DescribeDataset operation. Forecast does not automatically update any dataset groups that contain the deleted dataset. In order to update the dataset group, use the UpdateDatasetGroup operation, omitting the deleted dataset's ARN.

```sql
DELETE FROM aws.forecast.datasets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
