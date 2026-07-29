--- 
title: datasets
hide_title: false
hide_table_of_contents: false
keywords:
  - datasets
  - personalize
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.personalize.datasets" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the dataset. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation date and time (in Unix time) of the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dataset that you want metadata for. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_group_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dataset group. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_type" /></td>
    <td><code>string</code></td>
    <td>One of the following values: Interactions Items Users Actions Action_Interactions (pattern: &lt;code&gt;^&#91;A-Za-z_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time stamp that shows when the dataset was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_dataset_update" /></td>
    <td><code>object</code></td>
    <td>Describes the latest update to the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="schema_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the associated schema. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the dataset. A dataset can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED DELETE PENDING &gt; DELETE IN_PROGRESS</td>
</tr>
<tr>
    <td><CopyableCode code="tracking_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the event tracker for an Action interactions dataset. You specify the tracker's ID in the PutActionInteractions API operation. Amazon Personalize uses it to direct new data to the Action interactions dataset in your dataset group.</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the dataset. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix time) that the dataset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dataset. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_type" /></td>
    <td><code>string</code></td>
    <td>The dataset type. One of the following values: Interactions Items Users Event-Interactions (pattern: &lt;code&gt;^&#91;A-Za-z_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix time) that the dataset was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the dataset. A dataset can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED DELETE PENDING &gt; DELETE IN_PROGRESS</td>
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
    <td>Describes the given dataset. For more information on datasets, see CreateDataset.</td>
</tr>
<tr>
    <td><a href="#list_datasets"><CopyableCode code="list_datasets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the list of datasets contained in the given dataset group. The response provides the properties for each dataset, including the Amazon Resource Name (ARN). For more information on datasets, see CreateDataset.</td>
</tr>
<tr>
    <td><a href="#create_dataset"><CopyableCode code="create_dataset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-schemaArn"><code>schemaArn</code></a>, <a href="#parameter-datasetGroupArn"><code>datasetGroupArn</code></a>, <a href="#parameter-datasetType"><code>datasetType</code></a></td>
    <td></td>
    <td>Creates an empty dataset and adds it to the specified dataset group. Use CreateDatasetImportJob to import your training data to a dataset. There are 5 types of datasets: Item interactions Items Users Action interactions Actions Each dataset type has an associated schema with required field types. Only the Item interactions dataset is required in order to train a model (also referred to as creating a solution). A dataset can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED DELETE PENDING &gt; DELETE IN_PROGRESS To get the status of the dataset, call DescribeDataset. Related APIs CreateDatasetGroup ListDatasets DescribeDataset DeleteDataset</td>
</tr>
<tr>
    <td><a href="#update_dataset"><CopyableCode code="update_dataset" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-datasetArn"><code>datasetArn</code></a>, <a href="#parameter-schemaArn"><code>schemaArn</code></a></td>
    <td></td>
    <td>Update a dataset to replace its schema with a new or existing one. For more information, see Replacing a dataset's schema.</td>
</tr>
<tr>
    <td><a href="#delete_dataset"><CopyableCode code="delete_dataset" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a dataset. You can't delete a dataset if an associated DatasetImportJob or SolutionVersion is in the CREATE PENDING or IN PROGRESS state. For more information about deleting datasets, see Deleting a dataset.</td>
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

Describes the given dataset. For more information on datasets, see CreateDataset.

```sql
SELECT
name,
creation_date_time,
dataset_arn,
dataset_group_arn,
dataset_type,
last_updated_date_time,
latest_dataset_update,
schema_arn,
status,
tracking_id
FROM aws.personalize.datasets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_datasets">

Returns the list of datasets contained in the given dataset group. The response provides the properties for each dataset, including the Amazon Resource Name (ARN). For more information on datasets, see CreateDataset.

```sql
SELECT
name,
creation_date_time,
dataset_arn,
dataset_type,
last_updated_date_time,
status
FROM aws.personalize.datasets
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

Creates an empty dataset and adds it to the specified dataset group. Use CreateDatasetImportJob to import your training data to a dataset. There are 5 types of datasets: Item interactions Items Users Action interactions Actions Each dataset type has an associated schema with required field types. Only the Item interactions dataset is required in order to train a model (also referred to as creating a solution). A dataset can be in one of the following states: CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED DELETE PENDING &gt; DELETE IN_PROGRESS To get the status of the dataset, call DescribeDataset. Related APIs CreateDatasetGroup ListDatasets DescribeDataset DeleteDataset

```sql
INSERT INTO aws.personalize.datasets (
name,
schemaArn,
datasetGroupArn,
datasetType,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ schemaArn }}' /* required */,
'{{ datasetGroupArn }}' /* required */,
'{{ datasetType }}' /* required */,
'{{ tags }}',
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
    - name: name
      value: "{{ name }}"
      description: |
        The name for the dataset.
    - name: schemaArn
      value: "{{ schemaArn }}"
      description: |
        The ARN of the schema to associate with the dataset. The schema defines the dataset fields.
    - name: datasetGroupArn
      value: "{{ datasetGroupArn }}"
      description: |
        The Amazon Resource Name (ARN) of the dataset group to add the dataset to.
    - name: datasetType
      value: "{{ datasetType }}"
      description: |
        The type of dataset. One of the following (case insensitive) values: Interactions Items Users Actions Action_Interactions
    - name: tags
      description: |
        A list of tags to apply to the dataset.
      value:
        - tagKey: "{{ tagKey }}"
          tagValue: "{{ tagValue }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_dataset"
    values={[
        { label: 'update_dataset', value: 'update_dataset' }
    ]}
>
<TabItem value="update_dataset">

Update a dataset to replace its schema with a new or existing one. For more information, see Replacing a dataset's schema.

```sql
UPDATE aws.personalize.datasets
SET 
datasetArn = '{{ datasetArn }}',
schemaArn = '{{ schemaArn }}'
WHERE 
region = '{{ region }}' --required
AND datasetArn = '{{ datasetArn }}' --required
AND schemaArn = '{{ schemaArn }}' --required
RETURNING
dataset_arn;
```
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

Deletes a dataset. You can't delete a dataset if an associated DatasetImportJob or SolutionVersion is in the CREATE PENDING or IN PROGRESS state. For more information about deleting datasets, see Deleting a dataset.

```sql
DELETE FROM aws.personalize.datasets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
