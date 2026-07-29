--- 
title: datasets
hide_title: false
hide_table_of_contents: false
keywords:
  - datasets
  - lookoutequipment
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lookoutequipment.datasets" /></td></tr>
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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Specifies the time the dataset was created in Lookout for Equipment.</td>
</tr>
<tr>
    <td><CopyableCode code="data_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates the latest timestamp corresponding to data that was successfully ingested during the most recent ingestion of this particular dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="data_quality_summary" /></td>
    <td><code>object</code></td>
    <td>Gives statistics associated with the given dataset for the latest successful associated ingestion job id. These statistics primarily relate to quantifying incorrect data such as MissingCompleteSensorData, MissingSensorData, UnsupportedDateFormats, InsufficientSensorData, and DuplicateTimeStamps.</td>
</tr>
<tr>
    <td><CopyableCode code="data_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Indicates the earliest timestamp corresponding to data that was successfully ingested during the most recent ingestion of this particular dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dataset being described. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:lookoutequipment:&#91;a-zA-Z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:dataset\/&#91;0-9a-zA-Z_-&#93;&#123;1,200&#125;\/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_name" /></td>
    <td><code>string</code></td>
    <td>The name of the dataset being described. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z_-&#93;&#123;1,200&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ingested_files_summary" /></td>
    <td><code>object</code></td>
    <td>Gives statistics about how many files have been ingested, and which files have not been ingested, for a particular ingestion job.</td>
</tr>
<tr>
    <td><CopyableCode code="ingestion_input_configuration" /></td>
    <td><code>object</code></td>
    <td>Specifies the S3 location configuration for the data input for the data ingestion job.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Specifies the time the dataset was last updated, if it was.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that you are using for this the data ingestion job. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>string</code></td>
    <td>A JSON description of the data that is in each time series dataset, including names, column names, and data types.</td>
</tr>
<tr>
    <td><CopyableCode code="server_side_kms_key_id" /></td>
    <td><code>string</code></td>
    <td>Provides the identifier of the KMS key used to encrypt dataset data by Amazon Lookout for Equipment. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:kms:&#91;a-z0-9\-&#93;*:\d&#123;12&#125;:&#91;\w\-\/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_dataset_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the source dataset from which the current data being described was imported from. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:lookoutequipment:&#91;a-zA-Z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:dataset\/&#91;0-9a-zA-Z_-&#93;&#123;1,200&#125;\/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Indicates the status of the dataset. (CREATED, INGESTION_IN_PROGRESS, ACTIVE, IMPORT_IN_PROGRESS)</td>
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
    <td><CopyableCode code="dataset_summaries" /></td>
    <td><code>array</code></td>
    <td>Provides information about the specified dataset, including creation time, dataset ARN, and status.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>An opaque pagination token indicating where to continue the listing of datasets. (pattern: &lt;code&gt;\p&#123;ASCII&#125;&#123;0,8192&#125;&lt;/code&gt;)</td>
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
    <td>Provides a JSON description of the data in each time series dataset, including names, column names, and data types.</td>
</tr>
<tr>
    <td><a href="#list_datasets"><CopyableCode code="list_datasets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all datasets currently available in your account, filtering on the dataset name.</td>
</tr>
<tr>
    <td><a href="#create_dataset"><CopyableCode code="create_dataset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatasetName"><code>DatasetName</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>Creates a container for a collection of data being ingested for analysis. The dataset contains the metadata describing where the data is and what the data actually looks like. For example, it contains the location of the data source, the data schema, and other information. A dataset also contains any tags associated with the ingested data.</td>
</tr>
<tr>
    <td><a href="#delete_dataset"><CopyableCode code="delete_dataset" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a dataset and associated artifacts. The operation will check to see if any inference scheduler or data ingestion job is currently using the dataset, and if there isn't, the dataset, its metadata, and any associated data stored in S3 will be deleted. This does not affect any models that used this dataset for training and evaluation, but does prevent it from being used in the future.</td>
</tr>
<tr>
    <td><a href="#start_data_ingestion_job"><CopyableCode code="start_data_ingestion_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatasetName"><code>DatasetName</code></a>, <a href="#parameter-IngestionInputConfiguration"><code>IngestionInputConfiguration</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>Starts a data ingestion job. Amazon Lookout for Equipment returns the job status.</td>
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

Provides a JSON description of the data in each time series dataset, including names, column names, and data types.

```sql
SELECT
created_at,
data_end_time,
data_quality_summary,
data_start_time,
dataset_arn,
dataset_name,
ingested_files_summary,
ingestion_input_configuration,
last_updated_at,
role_arn,
schema,
server_side_kms_key_id,
source_dataset_arn,
status
FROM aws.lookoutequipment.datasets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_datasets">

Lists all datasets currently available in your account, filtering on the dataset name.

```sql
SELECT
dataset_summaries,
next_token
FROM aws.lookoutequipment.datasets
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

Creates a container for a collection of data being ingested for analysis. The dataset contains the metadata describing where the data is and what the data actually looks like. For example, it contains the location of the data source, the data schema, and other information. A dataset also contains any tags associated with the ingested data.

```sql
INSERT INTO aws.lookoutequipment.datasets (
DatasetName,
DatasetSchema,
ServerSideKmsKeyId,
ClientToken,
Tags,
region
)
SELECT 
'{{ DatasetName }}' /* required */,
'{{ DatasetSchema }}',
'{{ ServerSideKmsKeyId }}',
'{{ ClientToken }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
dataset_arn,
dataset_name,
status
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
        The name of the dataset being created.
    - name: DatasetSchema
      description: |
        A JSON description of the data that is in each time series dataset, including names, column names, and data types.
      value:
        InlineDataSchema: "{{ InlineDataSchema }}"
    - name: ServerSideKmsKeyId
      value: "{{ ServerSideKmsKeyId }}"
      description: |
        Provides the identifier of the KMS key used to encrypt dataset data by Amazon Lookout for Equipment.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique identifier for the request. If you do not set the client request token, Amazon Lookout for Equipment generates one.
    - name: Tags
      description: |
        Any tags associated with the ingested data described in the dataset.
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

Deletes a dataset and associated artifacts. The operation will check to see if any inference scheduler or data ingestion job is currently using the dataset, and if there isn't, the dataset, its metadata, and any associated data stored in S3 will be deleted. This does not affect any models that used this dataset for training and evaluation, but does prevent it from being used in the future.

```sql
DELETE FROM aws.lookoutequipment.datasets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_data_ingestion_job"
    values={[
        { label: 'start_data_ingestion_job', value: 'start_data_ingestion_job' }
    ]}
>
<TabItem value="start_data_ingestion_job">

Starts a data ingestion job. Amazon Lookout for Equipment returns the job status.

```sql
EXEC aws.lookoutequipment.datasets.start_data_ingestion_job 
@region='{{ region }}' --required 
@@json=
'{
"DatasetName": "{{ DatasetName }}", 
"IngestionInputConfiguration": "{{ IngestionInputConfiguration }}", 
"RoleArn": "{{ RoleArn }}", 
"ClientToken": "{{ ClientToken }}"
}'
;
```
</TabItem>
</Tabs>
