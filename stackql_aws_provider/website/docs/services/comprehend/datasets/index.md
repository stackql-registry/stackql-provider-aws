--- 
title: datasets
hide_title: false
hide_table_of_contents: false
keywords:
  - datasets
  - comprehend
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.comprehend.datasets" /></td></tr>
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
    <td>Creation time of the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the dataset. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:flywheel/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*/dataset/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_name" /></td>
    <td><code>string</code></td>
    <td>The name of the dataset. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_s3_uri" /></td>
    <td><code>string</code></td>
    <td>The S3 URI where the dataset is stored. (pattern: &lt;code&gt;s3:​//&#91;a-z0-9&#93;&#91;\.\-a-z0-9&#93;&#123;1,61&#125;&#91;a-z0-9&#93;(/.*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_type" /></td>
    <td><code>string</code></td>
    <td>The dataset type (training data or test data). (TRAIN, TEST)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the dataset. (pattern: &lt;code&gt;^(&#91;a-zA-Z0-9_&#93;)&#91;\\a-zA-Z0-9_@#%*+=:?./!\s-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time when the data from the dataset becomes available in the data lake.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>A description of the status of the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_documents" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of documents in the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The dataset status. While the system creates the dataset, the status is CREATING. When the dataset is ready to use, the status changes to COMPLETED. (CREATING, COMPLETED, FAILED)</td>
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
    <td><CopyableCode code="dataset_properties_list" /></td>
    <td><code>array</code></td>
    <td>The dataset properties list.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>Identifies the next page of results to return.</td>
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
    <td>Returns information about the dataset that you specify. For more information about datasets, see Flywheel overview in the Amazon Comprehend Developer Guide.</td>
</tr>
<tr>
    <td><a href="#list_datasets"><CopyableCode code="list_datasets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List the datasets that you have configured in this Region. For more information about datasets, see Flywheel overview in the Amazon Comprehend Developer Guide.</td>
</tr>
<tr>
    <td><a href="#create_dataset"><CopyableCode code="create_dataset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FlywheelArn"><code>FlywheelArn</code></a>, <a href="#parameter-DatasetName"><code>DatasetName</code></a>, <a href="#parameter-InputDataConfig"><code>InputDataConfig</code></a></td>
    <td></td>
    <td>Creates a dataset to upload training or test data for a model associated with a flywheel. For more information about datasets, see Flywheel overview in the Amazon Comprehend Developer Guide.</td>
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

Returns information about the dataset that you specify. For more information about datasets, see Flywheel overview in the Amazon Comprehend Developer Guide.

```sql
SELECT
creation_time,
dataset_arn,
dataset_name,
dataset_s3_uri,
dataset_type,
description,
end_time,
message,
number_of_documents,
status
FROM aws.comprehend.datasets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_datasets">

List the datasets that you have configured in this Region. For more information about datasets, see Flywheel overview in the Amazon Comprehend Developer Guide.

```sql
SELECT
dataset_properties_list,
next_token
FROM aws.comprehend.datasets
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

Creates a dataset to upload training or test data for a model associated with a flywheel. For more information about datasets, see Flywheel overview in the Amazon Comprehend Developer Guide.

```sql
INSERT INTO aws.comprehend.datasets (
FlywheelArn,
DatasetName,
DatasetType,
Description,
InputDataConfig,
ClientRequestToken,
Tags,
region
)
SELECT 
'{{ FlywheelArn }}' /* required */,
'{{ DatasetName }}' /* required */,
'{{ DatasetType }}',
'{{ Description }}',
'{{ InputDataConfig }}' /* required */,
'{{ ClientRequestToken }}',
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
    - name: FlywheelArn
      value: "{{ FlywheelArn }}"
      description: |
        The Amazon Resource Number (ARN) of the flywheel of the flywheel to receive the data.
    - name: DatasetName
      value: "{{ DatasetName }}"
      description: |
        Name of the dataset.
    - name: DatasetType
      value: "{{ DatasetType }}"
      description: |
        The dataset type. You can specify that the data in a dataset is for training the model or for testing the model.
      valid_values: ['TRAIN', 'TEST']
    - name: Description
      value: "{{ Description }}"
      description: |
        Description of the dataset.
    - name: InputDataConfig
      description: |
        Information about the input data configuration. The type of input data varies based on the format of the input and whether the data is for a classifier model or an entity recognition model.
      value:
        AugmentedManifests:
          - AttributeNames: "{{ AttributeNames }}"
            S3Uri: "{{ S3Uri }}"
            AnnotationDataS3Uri: "{{ AnnotationDataS3Uri }}"
            SourceDocumentsS3Uri: "{{ SourceDocumentsS3Uri }}"
            DocumentType: "{{ DocumentType }}"
        DataFormat: "{{ DataFormat }}"
        DocumentClassifierInputDataConfig:
          S3Uri: "{{ S3Uri }}"
          LabelDelimiter: "{{ LabelDelimiter }}"
        EntityRecognizerInputDataConfig:
          Annotations:
            S3Uri: "{{ S3Uri }}"
          Documents:
            S3Uri: "{{ S3Uri }}"
            InputFormat: "{{ InputFormat }}"
          EntityList:
            S3Uri: "{{ S3Uri }}"
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.
    - name: Tags
      description: |
        Tags for the dataset.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>
