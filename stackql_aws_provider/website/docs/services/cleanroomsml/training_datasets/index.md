--- 
title: training_datasets
hide_title: false
hide_table_of_contents: false
keywords:
  - training_datasets
  - cleanroomsml
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

Creates, updates, deletes, gets or lists a <code>training_datasets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="training_datasets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cleanroomsml.training_datasets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_training_dataset"
    values={[
        { label: 'get_training_dataset', value: 'get_training_dataset' },
        { label: 'list_training_datasets', value: 'list_training_datasets' }
    ]}
>
<TabItem value="get_training_dataset">

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
    <td>The name of the training dataset. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the training dataset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the training dataset. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="roleArn" /></td>
    <td><code>string</code></td>
    <td>The IAM role used to read the training data. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the training dataset. (ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags that are assigned to this training dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="trainingData" /></td>
    <td><code>array</code></td>
    <td>Metadata about the requested training data.</td>
</tr>
<tr>
    <td><CopyableCode code="trainingDatasetArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the training dataset. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:training-dataset/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the training dataset was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_training_datasets">

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
    <td>The name of the training dataset. (pattern: &lt;code&gt;(?!\s*$)&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the training dataset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the training dataset. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the training dataset. (ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="trainingDatasetArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the training dataset. (pattern: &lt;code&gt;arn:aws&#91;-a-z&#93;*:cleanrooms-ml:&#91;-a-z0-9&#93;+:&#91;0-9&#93;&#123;12&#125;:training-dataset/&#91;-a-zA-Z0-9_/.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time at which the training dataset was updated.</td>
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
    <td><a href="#get_training_dataset"><CopyableCode code="get_training_dataset" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-training_dataset_arn"><code>training_dataset_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a training dataset.</td>
</tr>
<tr>
    <td><a href="#list_training_datasets"><CopyableCode code="list_training_datasets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of training datasets.</td>
</tr>
<tr>
    <td><a href="#create_training_dataset"><CopyableCode code="create_training_dataset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a>, <a href="#parameter-trainingData"><code>trainingData</code></a></td>
    <td></td>
    <td>Defines the information necessary to create a training dataset. In Clean Rooms ML, the TrainingDataset is metadata that points to a Glue table, which is read only during AudienceModel creation.</td>
</tr>
<tr>
    <td><a href="#delete_training_dataset"><CopyableCode code="delete_training_dataset" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-training_dataset_arn"><code>training_dataset_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Specifies a training dataset that you want to delete. You can't delete a training dataset if there are any audience models that depend on the training dataset. In Clean Rooms ML, the TrainingDataset is metadata that points to a Glue table, which is read only during AudienceModel creation. This action deletes the metadata.</td>
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
<tr id="parameter-training_dataset_arn">
    <td><CopyableCode code="training_dataset_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the training dataset that you want to delete.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum size of the results that is returned per call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token value retrieved from a previous call to access the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_training_dataset"
    values={[
        { label: 'get_training_dataset', value: 'get_training_dataset' },
        { label: 'list_training_datasets', value: 'list_training_datasets' }
    ]}
>
<TabItem value="get_training_dataset">

Returns information about a training dataset.

```sql
SELECT
name,
createTime,
description,
roleArn,
status,
tags,
trainingData,
trainingDatasetArn,
updateTime
FROM aws.cleanroomsml.training_datasets
WHERE training_dataset_arn = '{{ training_dataset_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_training_datasets">

Returns a list of training datasets.

```sql
SELECT
name,
createTime,
description,
status,
trainingDatasetArn,
updateTime
FROM aws.cleanroomsml.training_datasets
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_training_dataset"
    values={[
        { label: 'create_training_dataset', value: 'create_training_dataset' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_training_dataset">

Defines the information necessary to create a training dataset. In Clean Rooms ML, the TrainingDataset is metadata that points to a Glue table, which is read only during AudienceModel creation.

```sql
INSERT INTO aws.cleanroomsml.training_datasets (
name,
roleArn,
trainingData,
tags,
description,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ roleArn }}' /* required */,
'{{ trainingData }}' /* required */,
'{{ tags }}',
'{{ description }}',
'{{ region }}'
RETURNING
trainingDatasetArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: training_datasets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the training_datasets resource.
    - name: name
      value: "{{ name }}"
    - name: roleArn
      value: "{{ roleArn }}"
    - name: trainingData
      value:
        - type_: "{{ type_ }}"
          inputConfig:
            schema:
              - columnName: "{{ columnName }}"
                columnTypes: "{{ columnTypes }}"
            dataSource:
              glueDataSource:
                tableName: "{{ tableName }}"
                databaseName: "{{ databaseName }}"
                catalogId: "{{ catalogId }}"
    - name: tags
      value: "{{ tags }}"
    - name: description
      value: "{{ description }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_training_dataset"
    values={[
        { label: 'delete_training_dataset', value: 'delete_training_dataset' }
    ]}
>
<TabItem value="delete_training_dataset">

Specifies a training dataset that you want to delete. You can't delete a training dataset if there are any audience models that depend on the training dataset. In Clean Rooms ML, the TrainingDataset is metadata that points to a Glue table, which is read only during AudienceModel creation. This action deletes the metadata.

```sql
DELETE FROM aws.cleanroomsml.training_datasets
WHERE training_dataset_arn = '{{ training_dataset_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
