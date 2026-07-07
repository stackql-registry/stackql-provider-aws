--- 
title: evaluations
hide_title: false
hide_table_of_contents: false
keywords:
  - evaluations
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

Creates, updates, deletes, gets or lists an <code>evaluations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="evaluations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.machinelearning.evaluations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_evaluation"
    values={[
        { label: 'get_evaluation', value: 'get_evaluation' },
        { label: 'describe_evaluations', value: 'describe_evaluations' }
    ]}
>
<TabItem value="get_evaluation">

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
    <td>The AWS user account that invoked the evaluation. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account. (pattern: &lt;code&gt;arn:aws:iam::&#91;0-9&#93;+:((user/.+)|(root))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EvaluationDataSourceId" /></td>
    <td><code>string</code></td>
    <td>The DataSource used for this evaluation. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EvaluationId" /></td>
    <td><code>string</code></td>
    <td>The evaluation ID which is same as the EvaluationId in the request. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
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
    <td><CopyableCode code="LastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp represented in epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="LogUri" /></td>
    <td><code>string</code></td>
    <td>A link to the file that contains logs of the CreateEvaluation operation.</td>
</tr>
<tr>
    <td><CopyableCode code="MLModelId" /></td>
    <td><code>string</code></td>
    <td>The ID of the MLModel that was the focus of the evaluation. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Message" /></td>
    <td><code>string</code></td>
    <td>A description of the most recent details about evaluating the MLModel.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A user-supplied name or description of the Evaluation. (pattern: &lt;code&gt;.*\S.*|^$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PerformanceMetrics" /></td>
    <td><code>object</code></td>
    <td>Measurements of how well the MLModel performed using observations referenced by the DataSource. One of the following metric is returned based on the type of the MLModel: BinaryAUC: A binary MLModel uses the Area Under the Curve (AUC) technique to measure performance. RegressionRMSE: A regression MLModel uses the Root Mean Square Error (RMSE) technique to measure performance. RMSE measures the difference between predicted and actual values for a single variable. MulticlassAvgFScore: A multiclass MLModel uses the F1 score technique to measure performance. For more information about performance metrics, please see the Amazon Machine Learning Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="StartedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp represented in epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the evaluation. This element can have one of the following values: PENDING - Amazon Machine Language (Amazon ML) submitted a request to evaluate an MLModel. INPROGRESS - The evaluation is underway. FAILED - The request to evaluate an MLModel did not run to completion. It is not usable. COMPLETED - The evaluation process completed successfully. DELETED - The Evaluation is marked as deleted. It is not usable. (PENDING, INPROGRESS, FAILED, COMPLETED, DELETED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_evaluations">

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
    <td>The AWS user account that invoked the evaluation. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account. (pattern: &lt;code&gt;arn:aws:iam::&#91;0-9&#93;+:((user/.+)|(root))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EvaluationDataSourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the DataSource that is used to evaluate the MLModel. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EvaluationId" /></td>
    <td><code>string</code></td>
    <td>The ID that is assigned to the Evaluation at creation. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FinishedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp represented in epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="InputDataLocationS3" /></td>
    <td><code>string</code></td>
    <td>The location and name of the data in Amazon Simple Storage Server (Amazon S3) that is used in the evaluation. (pattern: &lt;code&gt;s3:​//(&#91;^/&#93;+)(/.*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp represented in epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="MLModelId" /></td>
    <td><code>string</code></td>
    <td>The ID of the MLModel that is the focus of the evaluation. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Message" /></td>
    <td><code>string</code></td>
    <td>A description of the most recent details about evaluating the MLModel.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A user-supplied name or description of the Evaluation. (pattern: &lt;code&gt;.*\S.*|^$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PerformanceMetrics" /></td>
    <td><code>object</code></td>
    <td>Measurements of how well the MLModel performed, using observations referenced by the DataSource. One of the following metrics is returned, based on the type of the MLModel: BinaryAUC: A binary MLModel uses the Area Under the Curve (AUC) technique to measure performance. RegressionRMSE: A regression MLModel uses the Root Mean Square Error (RMSE) technique to measure performance. RMSE measures the difference between predicted and actual values for a single variable. MulticlassAvgFScore: A multiclass MLModel uses the F1 score technique to measure performance. For more information about performance metrics, please see the Amazon Machine Learning Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="StartedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp represented in epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the evaluation. This element can have one of the following values: PENDING - Amazon Machine Learning (Amazon ML) submitted a request to evaluate an MLModel. INPROGRESS - The evaluation is underway. FAILED - The request to evaluate an MLModel did not run to completion. It is not usable. COMPLETED - The evaluation process completed successfully. DELETED - The Evaluation is marked as deleted. It is not usable. (PENDING, INPROGRESS, FAILED, COMPLETED, DELETED)</td>
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
    <td><a href="#get_evaluation"><CopyableCode code="get_evaluation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an Evaluation that includes metadata as well as the current status of the Evaluation.</td>
</tr>
<tr>
    <td><a href="#describe_evaluations"><CopyableCode code="describe_evaluations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of DescribeEvaluations that match the search criteria in the request.</td>
</tr>
<tr>
    <td><a href="#create_evaluation"><CopyableCode code="create_evaluation" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EvaluationId"><code>EvaluationId</code></a>, <a href="#parameter-MLModelId"><code>MLModelId</code></a>, <a href="#parameter-EvaluationDataSourceId"><code>EvaluationDataSourceId</code></a></td>
    <td></td>
    <td>Creates a new Evaluation of an MLModel. An MLModel is evaluated on a set of observations associated to a DataSource. Like a DataSource for an MLModel, the DataSource for an Evaluation contains values for the Target Variable. The Evaluation compares the predicted result for each observation to the actual outcome and provides a summary so that you know how effective the MLModel functions on the test data. Evaluation generates a relevant performance metric, such as BinaryAUC, RegressionRMSE or MulticlassAvgFScore based on the corresponding MLModelType: BINARY, REGRESSION or MULTICLASS. CreateEvaluation is an asynchronous operation. In response to CreateEvaluation, Amazon Machine Learning (Amazon ML) immediately returns and sets the evaluation status to PENDING. After the Evaluation is created and ready for use, Amazon ML sets the status to COMPLETED. You can use the GetEvaluation operation to check progress of the evaluation during the creation operation.</td>
</tr>
<tr>
    <td><a href="#update_evaluation"><CopyableCode code="update_evaluation" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EvaluationId"><code>EvaluationId</code></a>, <a href="#parameter-EvaluationName"><code>EvaluationName</code></a></td>
    <td></td>
    <td>Updates the EvaluationName of an Evaluation. You can use the GetEvaluation operation to view the contents of the updated data element.</td>
</tr>
<tr>
    <td><a href="#delete_evaluation"><CopyableCode code="delete_evaluation" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Assigns the DELETED status to an Evaluation, rendering it unusable. After invoking the DeleteEvaluation operation, you can use the GetEvaluation operation to verify that the status of the Evaluation changed to DELETED. Caution: The results of the DeleteEvaluation operation are irreversible.</td>
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
    defaultValue="get_evaluation"
    values={[
        { label: 'get_evaluation', value: 'get_evaluation' },
        { label: 'describe_evaluations', value: 'describe_evaluations' }
    ]}
>
<TabItem value="get_evaluation">

Returns an Evaluation that includes metadata as well as the current status of the Evaluation.

```sql
SELECT
ComputeTime,
CreatedAt,
CreatedByIamUser,
EvaluationDataSourceId,
EvaluationId,
FinishedAt,
InputDataLocationS3,
LastUpdatedAt,
LogUri,
MLModelId,
Message,
Name,
PerformanceMetrics,
StartedAt,
Status
FROM aws.machinelearning.evaluations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="describe_evaluations">

Returns a list of DescribeEvaluations that match the search criteria in the request.

```sql
SELECT
ComputeTime,
CreatedAt,
CreatedByIamUser,
EvaluationDataSourceId,
EvaluationId,
FinishedAt,
InputDataLocationS3,
LastUpdatedAt,
MLModelId,
Message,
Name,
PerformanceMetrics,
StartedAt,
Status
FROM aws.machinelearning.evaluations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_evaluation"
    values={[
        { label: 'create_evaluation', value: 'create_evaluation' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_evaluation">

Creates a new Evaluation of an MLModel. An MLModel is evaluated on a set of observations associated to a DataSource. Like a DataSource for an MLModel, the DataSource for an Evaluation contains values for the Target Variable. The Evaluation compares the predicted result for each observation to the actual outcome and provides a summary so that you know how effective the MLModel functions on the test data. Evaluation generates a relevant performance metric, such as BinaryAUC, RegressionRMSE or MulticlassAvgFScore based on the corresponding MLModelType: BINARY, REGRESSION or MULTICLASS. CreateEvaluation is an asynchronous operation. In response to CreateEvaluation, Amazon Machine Learning (Amazon ML) immediately returns and sets the evaluation status to PENDING. After the Evaluation is created and ready for use, Amazon ML sets the status to COMPLETED. You can use the GetEvaluation operation to check progress of the evaluation during the creation operation.

```sql
INSERT INTO aws.machinelearning.evaluations (
EvaluationId,
EvaluationName,
MLModelId,
EvaluationDataSourceId,
region
)
SELECT 
'{{ EvaluationId }}' /* required */,
'{{ EvaluationName }}',
'{{ MLModelId }}' /* required */,
'{{ EvaluationDataSourceId }}' /* required */,
'{{ region }}'
RETURNING
EvaluationId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: evaluations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the evaluations resource.
    - name: EvaluationId
      value: "{{ EvaluationId }}"
      description: |
        A user-supplied ID that uniquely identifies the Evaluation.
    - name: EvaluationName
      value: "{{ EvaluationName }}"
      description: |
        A user-supplied name or description of the Evaluation.
    - name: MLModelId
      value: "{{ MLModelId }}"
      description: |
        The ID of the MLModel to evaluate. The schema used in creating the MLModel must match the schema of the DataSource used in the Evaluation.
    - name: EvaluationDataSourceId
      value: "{{ EvaluationDataSourceId }}"
      description: |
        The ID of the DataSource for the evaluation. The schema of the DataSource must match the schema used to create the MLModel.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_evaluation"
    values={[
        { label: 'update_evaluation', value: 'update_evaluation' }
    ]}
>
<TabItem value="update_evaluation">

Updates the EvaluationName of an Evaluation. You can use the GetEvaluation operation to view the contents of the updated data element.

```sql
UPDATE aws.machinelearning.evaluations
SET 
EvaluationId = '{{ EvaluationId }}',
EvaluationName = '{{ EvaluationName }}'
WHERE 
region = '{{ region }}' --required
AND EvaluationId = '{{ EvaluationId }}' --required
AND EvaluationName = '{{ EvaluationName }}' --required
RETURNING
EvaluationId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_evaluation"
    values={[
        { label: 'delete_evaluation', value: 'delete_evaluation' }
    ]}
>
<TabItem value="delete_evaluation">

Assigns the DELETED status to an Evaluation, rendering it unusable. After invoking the DeleteEvaluation operation, you can use the GetEvaluation operation to verify that the status of the Evaluation changed to DELETED. Caution: The results of the DeleteEvaluation operation are irreversible.

```sql
DELETE FROM aws.machinelearning.evaluations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
