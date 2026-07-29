--- 
title: pipelines
hide_title: false
hide_table_of_contents: false
keywords:
  - pipelines
  - datapipeline
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

Creates, updates, deletes, gets or lists a <code>pipelines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pipelines" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datapipeline.pipelines" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_pipelines"
    values={[
        { label: 'describe_pipelines', value: 'describe_pipelines' },
        { label: 'list_pipelines', value: 'list_pipelines' }
    ]}
>
<TabItem value="describe_pipelines">

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
    <td><CopyableCode code="pipeline_description_list" /></td>
    <td><code>array</code></td>
    <td>An array of descriptions for the specified pipelines.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_pipelines">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the pipeline that was assigned by AWS Data Pipeline. This is a string of the form df-297EG78HU43EEXAMPLE. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the pipeline. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#describe_pipelines"><CopyableCode code="describe_pipelines" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves metadata about one or more pipelines. The information retrieved includes the name of the pipeline, the pipeline identifier, its current state, and the user account that owns the pipeline. Using account credentials, you can retrieve metadata about pipelines that you or your IAM users have created. If you are using an IAM user account, you can retrieve metadata about only those pipelines for which you have read permissions. To retrieve the full pipeline definition instead of metadata about the pipeline, call GetPipelineDefinition.</td>
</tr>
<tr>
    <td><a href="#list_pipelines"><CopyableCode code="list_pipelines" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the pipeline identifiers for all active pipelines that you have permission to access.</td>
</tr>
<tr>
    <td><a href="#create_pipeline"><CopyableCode code="create_pipeline" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-uniqueId"><code>uniqueId</code></a></td>
    <td></td>
    <td>Creates a new, empty pipeline. Use PutPipelineDefinition to populate the pipeline.</td>
</tr>
<tr>
    <td><a href="#set_status"><CopyableCode code="set_status" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pipelineId"><code>pipelineId</code></a>, <a href="#parameter-objectIds"><code>objectIds</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td></td>
    <td>Requests that the status of the specified physical or logical pipeline objects be updated in the specified pipeline. This update might not occur immediately, but is eventually consistent. The status that can be set depends on the type of object (for example, DataNode or Activity). You cannot perform this operation on FINISHED pipelines and attempting to do so returns InvalidRequestException.</td>
</tr>
<tr>
    <td><a href="#delete_pipeline"><CopyableCode code="delete_pipeline" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a pipeline, its pipeline definition, and its run history. AWS Data Pipeline attempts to cancel instances associated with the pipeline that are currently being processed by task runners. Deleting a pipeline cannot be undone. You cannot query or restore a deleted pipeline. To temporarily pause a pipeline instead of deleting it, call SetStatus with the status set to PAUSE on individual components. Components that are paused by SetStatus can be resumed.</td>
</tr>
<tr>
    <td><a href="#activate_pipeline"><CopyableCode code="activate_pipeline" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pipelineId"><code>pipelineId</code></a></td>
    <td></td>
    <td>Validates the specified pipeline and starts processing pipeline tasks. If the pipeline does not pass validation, activation fails. If you need to pause the pipeline to investigate an issue with a component, such as a data source or script, call DeactivatePipeline. To activate a finished pipeline, modify the end date for the pipeline and then activate it.</td>
</tr>
<tr>
    <td><a href="#deactivate_pipeline"><CopyableCode code="deactivate_pipeline" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pipelineId"><code>pipelineId</code></a></td>
    <td></td>
    <td>Deactivates the specified running pipeline. The pipeline is set to the DEACTIVATING state until the deactivation process completes. To resume a deactivated pipeline, use ActivatePipeline. By default, the pipeline resumes from the last completed execution. Optionally, you can specify the date and time to resume the pipeline.</td>
</tr>
<tr>
    <td><a href="#evaluate_expression"><CopyableCode code="evaluate_expression" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pipelineId"><code>pipelineId</code></a>, <a href="#parameter-objectId"><code>objectId</code></a>, <a href="#parameter-expression"><code>expression</code></a></td>
    <td></td>
    <td>Task runners call EvaluateExpression to evaluate a string in the context of the specified object. For example, a task runner can evaluate SQL queries stored in Amazon S3.</td>
</tr>
<tr>
    <td><a href="#validate_pipeline_definition"><CopyableCode code="validate_pipeline_definition" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pipelineId"><code>pipelineId</code></a>, <a href="#parameter-pipelineObjects"><code>pipelineObjects</code></a></td>
    <td></td>
    <td>Validates the specified pipeline definition to ensure that it is well formed and can be run without error.</td>
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
    defaultValue="describe_pipelines"
    values={[
        { label: 'describe_pipelines', value: 'describe_pipelines' },
        { label: 'list_pipelines', value: 'list_pipelines' }
    ]}
>
<TabItem value="describe_pipelines">

Retrieves metadata about one or more pipelines. The information retrieved includes the name of the pipeline, the pipeline identifier, its current state, and the user account that owns the pipeline. Using account credentials, you can retrieve metadata about pipelines that you or your IAM users have created. If you are using an IAM user account, you can retrieve metadata about only those pipelines for which you have read permissions. To retrieve the full pipeline definition instead of metadata about the pipeline, call GetPipelineDefinition.

```sql
SELECT
pipeline_description_list
FROM aws.datapipeline.pipelines
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_pipelines">

Lists the pipeline identifiers for all active pipelines that you have permission to access.

```sql
SELECT
id,
name
FROM aws.datapipeline.pipelines
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_pipeline"
    values={[
        { label: 'create_pipeline', value: 'create_pipeline' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_pipeline">

Creates a new, empty pipeline. Use PutPipelineDefinition to populate the pipeline.

```sql
INSERT INTO aws.datapipeline.pipelines (
name,
uniqueId,
description,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ uniqueId }}' /* required */,
'{{ description }}',
'{{ tags }}',
'{{ region }}'
RETURNING
pipeline_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: pipelines
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the pipelines resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name for the pipeline. You can use the same name for multiple pipelines associated with your AWS account, because AWS Data Pipeline assigns each pipeline a unique pipeline identifier.
    - name: uniqueId
      value: "{{ uniqueId }}"
      description: |
        A unique identifier. This identifier is not the same as the pipeline identifier assigned by AWS Data Pipeline. You are responsible for defining the format and ensuring the uniqueness of this identifier. You use this parameter to ensure idempotency during repeated calls to CreatePipeline. For example, if the first call to CreatePipeline does not succeed, you can pass in the same unique identifier and pipeline name combination on a subsequent call to CreatePipeline. CreatePipeline ensures that if a pipeline already exists with the same name and unique identifier, a new pipeline is not created. Instead, you'll receive the pipeline identifier from the previous attempt. The uniqueness of the name and unique identifier combination is scoped to the AWS account or IAM user credentials.
    - name: description
      value: "{{ description }}"
      description: |
        The description for the pipeline.
    - name: tags
      description: |
        A list of tags to associate with the pipeline at creation. Tags let you control access to pipelines. For more information, see Controlling User Access to Pipelines in the AWS Data Pipeline Developer Guide.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_status"
    values={[
        { label: 'set_status', value: 'set_status' }
    ]}
>
<TabItem value="set_status">

Requests that the status of the specified physical or logical pipeline objects be updated in the specified pipeline. This update might not occur immediately, but is eventually consistent. The status that can be set depends on the type of object (for example, DataNode or Activity). You cannot perform this operation on FINISHED pipelines and attempting to do so returns InvalidRequestException.

```sql
UPDATE aws.datapipeline.pipelines
SET 
pipelineId = '{{ pipelineId }}',
objectIds = '{{ objectIds }}',
status = '{{ status }}'
WHERE 
region = '{{ region }}' --required
AND pipelineId = '{{ pipelineId }}' --required
AND objectIds = '{{ objectIds }}' --required
AND status = '{{ status }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_pipeline"
    values={[
        { label: 'delete_pipeline', value: 'delete_pipeline' }
    ]}
>
<TabItem value="delete_pipeline">

Deletes a pipeline, its pipeline definition, and its run history. AWS Data Pipeline attempts to cancel instances associated with the pipeline that are currently being processed by task runners. Deleting a pipeline cannot be undone. You cannot query or restore a deleted pipeline. To temporarily pause a pipeline instead of deleting it, call SetStatus with the status set to PAUSE on individual components. Components that are paused by SetStatus can be resumed.

```sql
DELETE FROM aws.datapipeline.pipelines
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="activate_pipeline"
    values={[
        { label: 'activate_pipeline', value: 'activate_pipeline' },
        { label: 'deactivate_pipeline', value: 'deactivate_pipeline' },
        { label: 'evaluate_expression', value: 'evaluate_expression' },
        { label: 'validate_pipeline_definition', value: 'validate_pipeline_definition' }
    ]}
>
<TabItem value="activate_pipeline">

Validates the specified pipeline and starts processing pipeline tasks. If the pipeline does not pass validation, activation fails. If you need to pause the pipeline to investigate an issue with a component, such as a data source or script, call DeactivatePipeline. To activate a finished pipeline, modify the end date for the pipeline and then activate it.

```sql
EXEC aws.datapipeline.pipelines.activate_pipeline 
@region='{{ region }}' --required 
@@json=
'{
"pipelineId": "{{ pipelineId }}", 
"parameterValues": "{{ parameterValues }}", 
"startTimestamp": "{{ startTimestamp }}"
}'
;
```
</TabItem>
<TabItem value="deactivate_pipeline">

Deactivates the specified running pipeline. The pipeline is set to the DEACTIVATING state until the deactivation process completes. To resume a deactivated pipeline, use ActivatePipeline. By default, the pipeline resumes from the last completed execution. Optionally, you can specify the date and time to resume the pipeline.

```sql
EXEC aws.datapipeline.pipelines.deactivate_pipeline 
@region='{{ region }}' --required 
@@json=
'{
"pipelineId": "{{ pipelineId }}", 
"cancelActive": {{ cancelActive }}
}'
;
```
</TabItem>
<TabItem value="evaluate_expression">

Task runners call EvaluateExpression to evaluate a string in the context of the specified object. For example, a task runner can evaluate SQL queries stored in Amazon S3.

```sql
EXEC aws.datapipeline.pipelines.evaluate_expression 
@region='{{ region }}' --required 
@@json=
'{
"pipelineId": "{{ pipelineId }}", 
"objectId": "{{ objectId }}", 
"expression": "{{ expression }}"
}'
;
```
</TabItem>
<TabItem value="validate_pipeline_definition">

Validates the specified pipeline definition to ensure that it is well formed and can be run without error.

```sql
EXEC aws.datapipeline.pipelines.validate_pipeline_definition 
@region='{{ region }}' --required 
@@json=
'{
"pipelineId": "{{ pipelineId }}", 
"pipelineObjects": "{{ pipelineObjects }}", 
"parameterObjects": "{{ parameterObjects }}", 
"parameterValues": "{{ parameterValues }}"
}'
;
```
</TabItem>
</Tabs>
