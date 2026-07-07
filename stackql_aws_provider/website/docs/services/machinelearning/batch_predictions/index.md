--- 
title: batch_predictions
hide_title: false
hide_table_of_contents: false
keywords:
  - batch_predictions
  - machinelearning
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

Creates, updates, deletes, gets or lists a <code>batch_predictions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="batch_predictions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.machinelearning.batch_predictions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_batch_prediction"
    values={[
        { label: 'get_batch_prediction', value: 'get_batch_prediction' },
        { label: 'describe_batch_predictions', value: 'describe_batch_predictions' }
    ]}
>
<TabItem value="get_batch_prediction">

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
    <td><CopyableCode code="BatchPredictionDataSourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the DataSource that was used to create the BatchPrediction. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="BatchPredictionId" /></td>
    <td><code>string</code></td>
    <td>An ID assigned to the BatchPrediction at creation. This value should be identical to the value of the BatchPredictionID in the request. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ComputeTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>Long integer type that is a 64-bit signed number.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp represented in epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedByIamUser" /></td>
    <td><code>string</code></td>
    <td>The AWS user account that invoked the BatchPrediction. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account. (pattern: &lt;code&gt;arn:aws:iam::&#91;0-9&#93;+:((user/.+)|(root))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FinishedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp represented in epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="InputDataLocationS3" /></td>
    <td><code>string</code></td>
    <td>The location of the data file or directory in Amazon Simple Storage Service (Amazon S3). (pattern: &lt;code&gt;s3:​//(&#91;^/&#93;+)(/.*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="InvalidRecordCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>Long integer type that is a 64-bit signed number.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp represented in epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="LogUri" /></td>
    <td><code>string</code></td>
    <td>A link to the file that contains logs of the CreateBatchPrediction operation.</td>
</tr>
<tr>
    <td><CopyableCode code="MLModelId" /></td>
    <td><code>string</code></td>
    <td>The ID of the MLModel that generated predictions for the BatchPrediction request. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Message" /></td>
    <td><code>string</code></td>
    <td>A description of the most recent details about processing the batch prediction request.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A user-supplied name or description of the BatchPrediction. (pattern: &lt;code&gt;.*\S.*|^$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OutputUri" /></td>
    <td><code>string</code></td>
    <td>The location of an Amazon S3 bucket or directory to receive the operation results. (pattern: &lt;code&gt;s3:​//(&#91;^/&#93;+)(/.*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StartedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp represented in epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the BatchPrediction, which can be one of the following values: PENDING - Amazon Machine Learning (Amazon ML) submitted a request to generate batch predictions. INPROGRESS - The batch predictions are in progress. FAILED - The request to perform a batch prediction did not run to completion. It is not usable. COMPLETED - The batch prediction process completed successfully. DELETED - The BatchPrediction is marked as deleted. It is not usable. (PENDING, INPROGRESS, FAILED, COMPLETED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="TotalRecordCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>Long integer type that is a 64-bit signed number.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_batch_predictions">

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
    <td><CopyableCode code="BatchPredictionDataSourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the DataSource that points to the group of observations to predict. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="BatchPredictionId" /></td>
    <td><code>string</code></td>
    <td>The ID assigned to the BatchPrediction at creation. This value should be identical to the value of the BatchPredictionID in the request. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ComputeTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>Long integer type that is a 64-bit signed number.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the BatchPrediction was created. The time is expressed in epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedByIamUser" /></td>
    <td><code>string</code></td>
    <td>The AWS user account that invoked the BatchPrediction. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account. (pattern: &lt;code&gt;arn:aws:iam::&#91;0-9&#93;+:((user/.+)|(root))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FinishedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp represented in epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="InputDataLocationS3" /></td>
    <td><code>string</code></td>
    <td>The location of the data file or directory in Amazon Simple Storage Service (Amazon S3). (pattern: &lt;code&gt;s3:​//(&#91;^/&#93;+)(/.*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="InvalidRecordCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>Long integer type that is a 64-bit signed number.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time of the most recent edit to the BatchPrediction. The time is expressed in epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="MLModelId" /></td>
    <td><code>string</code></td>
    <td>The ID of the MLModel that generated predictions for the BatchPrediction request. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Message" /></td>
    <td><code>string</code></td>
    <td>A description of the most recent details about processing the batch prediction request.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A user-supplied name or description of the BatchPrediction. (pattern: &lt;code&gt;.*\S.*|^$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="OutputUri" /></td>
    <td><code>string</code></td>
    <td>The location of an Amazon S3 bucket or directory to receive the operation results. The following substrings are not allowed in the s3 key portion of the outputURI field: ':', '//', '/./', '/../'. (pattern: &lt;code&gt;s3:​//(&#91;^/&#93;+)(/.*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StartedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp represented in epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the BatchPrediction. This element can have one of the following values: PENDING - Amazon Machine Learning (Amazon ML) submitted a request to generate predictions for a batch of observations. INPROGRESS - The process is underway. FAILED - The request to perform a batch prediction did not run to completion. It is not usable. COMPLETED - The batch prediction process completed successfully. DELETED - The BatchPrediction is marked as deleted. It is not usable. (PENDING, INPROGRESS, FAILED, COMPLETED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="TotalRecordCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>Long integer type that is a 64-bit signed number.</td>
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
    <td><a href="#get_batch_prediction"><CopyableCode code="get_batch_prediction" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a BatchPrediction that includes detailed metadata, status, and data file information for a Batch Prediction request.</td>
</tr>
<tr>
    <td><a href="#describe_batch_predictions"><CopyableCode code="describe_batch_predictions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of BatchPrediction operations that match the search criteria in the request.</td>
</tr>
<tr>
    <td><a href="#create_batch_prediction"><CopyableCode code="create_batch_prediction" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BatchPredictionId"><code>BatchPredictionId</code></a>, <a href="#parameter-MLModelId"><code>MLModelId</code></a>, <a href="#parameter-BatchPredictionDataSourceId"><code>BatchPredictionDataSourceId</code></a>, <a href="#parameter-OutputUri"><code>OutputUri</code></a></td>
    <td></td>
    <td>Generates predictions for a group of observations. The observations to process exist in one or more data files referenced by a DataSource. This operation creates a new BatchPrediction, and uses an MLModel and the data files referenced by the DataSource as information sources. CreateBatchPrediction is an asynchronous operation. In response to CreateBatchPrediction, Amazon Machine Learning (Amazon ML) immediately returns and sets the BatchPrediction status to PENDING. After the BatchPrediction completes, Amazon ML sets the status to COMPLETED. You can poll for status updates by using the GetBatchPrediction operation and checking the Status parameter of the result. After the COMPLETED status appears, the results are available in the location specified by the OutputUri parameter.</td>
</tr>
<tr>
    <td><a href="#update_batch_prediction"><CopyableCode code="update_batch_prediction" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BatchPredictionId"><code>BatchPredictionId</code></a>, <a href="#parameter-BatchPredictionName"><code>BatchPredictionName</code></a></td>
    <td></td>
    <td>Updates the BatchPredictionName of a BatchPrediction. You can use the GetBatchPrediction operation to view the contents of the updated data element.</td>
</tr>
<tr>
    <td><a href="#delete_batch_prediction"><CopyableCode code="delete_batch_prediction" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Assigns the DELETED status to a BatchPrediction, rendering it unusable. After using the DeleteBatchPrediction operation, you can use the GetBatchPrediction operation to verify that the status of the BatchPrediction changed to DELETED. Caution: The result of the DeleteBatchPrediction operation is irreversible.</td>
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
    defaultValue="get_batch_prediction"
    values={[
        { label: 'get_batch_prediction', value: 'get_batch_prediction' },
        { label: 'describe_batch_predictions', value: 'describe_batch_predictions' }
    ]}
>
<TabItem value="get_batch_prediction">

Returns a BatchPrediction that includes detailed metadata, status, and data file information for a Batch Prediction request.

```sql
SELECT
BatchPredictionDataSourceId,
BatchPredictionId,
ComputeTime,
CreatedAt,
CreatedByIamUser,
FinishedAt,
InputDataLocationS3,
InvalidRecordCount,
LastUpdatedAt,
LogUri,
MLModelId,
Message,
Name,
OutputUri,
StartedAt,
Status,
TotalRecordCount
FROM aws.machinelearning.batch_predictions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="describe_batch_predictions">

Returns a list of BatchPrediction operations that match the search criteria in the request.

```sql
SELECT
BatchPredictionDataSourceId,
BatchPredictionId,
ComputeTime,
CreatedAt,
CreatedByIamUser,
FinishedAt,
InputDataLocationS3,
InvalidRecordCount,
LastUpdatedAt,
MLModelId,
Message,
Name,
OutputUri,
StartedAt,
Status,
TotalRecordCount
FROM aws.machinelearning.batch_predictions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_batch_prediction"
    values={[
        { label: 'create_batch_prediction', value: 'create_batch_prediction' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_batch_prediction">

Generates predictions for a group of observations. The observations to process exist in one or more data files referenced by a DataSource. This operation creates a new BatchPrediction, and uses an MLModel and the data files referenced by the DataSource as information sources. CreateBatchPrediction is an asynchronous operation. In response to CreateBatchPrediction, Amazon Machine Learning (Amazon ML) immediately returns and sets the BatchPrediction status to PENDING. After the BatchPrediction completes, Amazon ML sets the status to COMPLETED. You can poll for status updates by using the GetBatchPrediction operation and checking the Status parameter of the result. After the COMPLETED status appears, the results are available in the location specified by the OutputUri parameter.

```sql
INSERT INTO aws.machinelearning.batch_predictions (
BatchPredictionId,
BatchPredictionName,
MLModelId,
BatchPredictionDataSourceId,
OutputUri,
region
)
SELECT 
'{{ BatchPredictionId }}' /* required */,
'{{ BatchPredictionName }}',
'{{ MLModelId }}' /* required */,
'{{ BatchPredictionDataSourceId }}' /* required */,
'{{ OutputUri }}' /* required */,
'{{ region }}'
RETURNING
BatchPredictionId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: batch_predictions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the batch_predictions resource.
    - name: BatchPredictionId
      value: "{{ BatchPredictionId }}"
      description: |
        A user-supplied ID that uniquely identifies the BatchPrediction.
    - name: BatchPredictionName
      value: "{{ BatchPredictionName }}"
      description: |
        A user-supplied name or description of the BatchPrediction. BatchPredictionName can only use the UTF-8 character set.
    - name: MLModelId
      value: "{{ MLModelId }}"
      description: |
        The ID of the MLModel that will generate predictions for the group of observations.
    - name: BatchPredictionDataSourceId
      value: "{{ BatchPredictionDataSourceId }}"
      description: |
        The ID of the DataSource that points to the group of observations to predict.
    - name: OutputUri
      value: "{{ OutputUri }}"
      description: |
        The location of an Amazon Simple Storage Service (Amazon S3) bucket or directory to store the batch prediction results. The following substrings are not allowed in the s3 key portion of the outputURI field: ':', '//', '/./', '/../'. Amazon ML needs permissions to store and retrieve the logs on your behalf. For information about how to set permissions, see the Amazon Machine Learning Developer Guide.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_batch_prediction"
    values={[
        { label: 'update_batch_prediction', value: 'update_batch_prediction' }
    ]}
>
<TabItem value="update_batch_prediction">

Updates the BatchPredictionName of a BatchPrediction. You can use the GetBatchPrediction operation to view the contents of the updated data element.

```sql
UPDATE aws.machinelearning.batch_predictions
SET 
BatchPredictionId = '{{ BatchPredictionId }}',
BatchPredictionName = '{{ BatchPredictionName }}'
WHERE 
region = '{{ region }}' --required
AND BatchPredictionId = '{{ BatchPredictionId }}' --required
AND BatchPredictionName = '{{ BatchPredictionName }}' --required
RETURNING
BatchPredictionId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_batch_prediction"
    values={[
        { label: 'delete_batch_prediction', value: 'delete_batch_prediction' }
    ]}
>
<TabItem value="delete_batch_prediction">

Assigns the DELETED status to a BatchPrediction, rendering it unusable. After using the DeleteBatchPrediction operation, you can use the GetBatchPrediction operation to verify that the status of the BatchPrediction changed to DELETED. Caution: The result of the DeleteBatchPrediction operation is irreversible.

```sql
DELETE FROM aws.machinelearning.batch_predictions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
