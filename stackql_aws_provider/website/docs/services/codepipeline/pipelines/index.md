--- 
title: pipelines
hide_title: false
hide_table_of_contents: false
keywords:
  - pipelines
  - codepipeline
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codepipeline.pipelines" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_pipeline"
    values={[
        { label: 'get_pipeline', value: 'get_pipeline' },
        { label: 'list_pipelines', value: 'list_pipelines' }
    ]}
>
<TabItem value="get_pipeline">

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
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Represents the pipeline metadata information returned as part of the output of a GetPipeline action.</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline" /></td>
    <td><code>object</code></td>
    <td>Represents the structure of actions and stages to be performed in the pipeline.</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the pipeline. (pattern: &lt;code&gt;&#91;A-Za-z0-9.@\-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the pipeline was created, in timestamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_mode" /></td>
    <td><code>string</code></td>
    <td>The method that the pipeline will use to handle multiple executions. The default mode is SUPERSEDED. (QUEUED, SUPERSEDED, PARALLEL)</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_type" /></td>
    <td><code>string</code></td>
    <td>CodePipeline provides the following pipeline types, which differ in characteristics and price, so that you can tailor your pipeline features and cost to the needs of your applications. V1 type pipelines have a JSON structure that contains standard pipeline, stage, and action-level parameters. V2 type pipelines have the same structure as a V1 type, along with additional parameters for release safety and trigger configuration. Including V2 parameters, such as triggers on Git tags, in the pipeline JSON when creating or updating a pipeline will result in the pipeline having the V2 type of pipeline and the associated costs. For information about pricing for CodePipeline, see Pricing. For information about which type of pipeline to choose, see What type of pipeline is right for me?. (V1, V2)</td>
</tr>
<tr>
    <td><CopyableCode code="updated" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of the last update to the pipeline, in timestamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>The version number of the pipeline.</td>
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
    <td><a href="#get_pipeline"><CopyableCode code="get_pipeline" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the metadata, structure, stages, and actions of a pipeline. Can be used to return the entire structure of a pipeline in JSON format, which can then be modified and used to update the pipeline structure with UpdatePipeline.</td>
</tr>
<tr>
    <td><a href="#list_pipelines"><CopyableCode code="list_pipelines" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a summary of all of the pipelines associated with your account.</td>
</tr>
<tr>
    <td><a href="#create_pipeline"><CopyableCode code="create_pipeline" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pipeline"><code>pipeline</code></a></td>
    <td></td>
    <td>Creates a pipeline. In the pipeline structure, you must include either artifactStore or artifactStores in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use artifactStores.</td>
</tr>
<tr>
    <td><a href="#update_pipeline"><CopyableCode code="update_pipeline" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pipeline"><code>pipeline</code></a></td>
    <td></td>
    <td>Updates a specified pipeline with edits or changes to its structure. Use a JSON file with the pipeline structure and UpdatePipeline to provide the full structure of the pipeline. Updating the pipeline increases the version number of the pipeline by 1.</td>
</tr>
<tr>
    <td><a href="#put_approval_result"><CopyableCode code="put_approval_result" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pipelineName"><code>pipelineName</code></a>, <a href="#parameter-stageName"><code>stageName</code></a>, <a href="#parameter-actionName"><code>actionName</code></a>, <a href="#parameter-result"><code>result</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>Provides the response to a manual approval request to CodePipeline. Valid responses include Approved and Rejected.</td>
</tr>
<tr>
    <td><a href="#put_action_revision"><CopyableCode code="put_action_revision" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pipelineName"><code>pipelineName</code></a>, <a href="#parameter-stageName"><code>stageName</code></a>, <a href="#parameter-actionName"><code>actionName</code></a>, <a href="#parameter-actionRevision"><code>actionRevision</code></a></td>
    <td></td>
    <td>Provides information to CodePipeline about new revisions to a source.</td>
</tr>
<tr>
    <td><a href="#delete_pipeline"><CopyableCode code="delete_pipeline" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified pipeline.</td>
</tr>
<tr>
    <td><a href="#disable_stage_transition"><CopyableCode code="disable_stage_transition" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pipelineName"><code>pipelineName</code></a>, <a href="#parameter-stageName"><code>stageName</code></a>, <a href="#parameter-transitionType"><code>transitionType</code></a>, <a href="#parameter-reason"><code>reason</code></a></td>
    <td></td>
    <td>Prevents artifacts in a pipeline from transitioning to the next stage in the pipeline.</td>
</tr>
<tr>
    <td><a href="#enable_stage_transition"><CopyableCode code="enable_stage_transition" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pipelineName"><code>pipelineName</code></a>, <a href="#parameter-stageName"><code>stageName</code></a>, <a href="#parameter-transitionType"><code>transitionType</code></a></td>
    <td></td>
    <td>Enables artifacts in a pipeline to transition to a stage in a pipeline.</td>
</tr>
<tr>
    <td><a href="#rollback_stage"><CopyableCode code="rollback_stage" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pipelineName"><code>pipelineName</code></a>, <a href="#parameter-stageName"><code>stageName</code></a>, <a href="#parameter-targetPipelineExecutionId"><code>targetPipelineExecutionId</code></a></td>
    <td></td>
    <td>Rolls back a stage execution.</td>
</tr>
<tr>
    <td><a href="#start_pipeline_execution"><CopyableCode code="start_pipeline_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Starts the specified pipeline. Specifically, it begins processing the latest commit to the source location specified as part of the pipeline.</td>
</tr>
<tr>
    <td><a href="#stop_pipeline_execution"><CopyableCode code="stop_pipeline_execution" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-pipelineName"><code>pipelineName</code></a>, <a href="#parameter-pipelineExecutionId"><code>pipelineExecutionId</code></a></td>
    <td></td>
    <td>Stops the specified pipeline execution. You choose to either stop the pipeline execution by completing in-progress actions without starting subsequent actions, or by abandoning in-progress actions. While completing or abandoning in-progress actions, the pipeline execution is in a Stopping state. After all in-progress actions are completed or abandoned, the pipeline execution is in a Stopped state.</td>
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
    defaultValue="get_pipeline"
    values={[
        { label: 'get_pipeline', value: 'get_pipeline' },
        { label: 'list_pipelines', value: 'list_pipelines' }
    ]}
>
<TabItem value="get_pipeline">

Returns the metadata, structure, stages, and actions of a pipeline. Can be used to return the entire structure of a pipeline in JSON format, which can then be modified and used to update the pipeline structure with UpdatePipeline.

```sql
SELECT
metadata,
pipeline
FROM aws.codepipeline.pipelines
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_pipelines">

Gets a summary of all of the pipelines associated with your account.

```sql
SELECT
name,
created,
execution_mode,
pipeline_type,
updated,
version
FROM aws.codepipeline.pipelines
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

Creates a pipeline. In the pipeline structure, you must include either artifactStore or artifactStores in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use artifactStores.

```sql
INSERT INTO aws.codepipeline.pipelines (
pipeline,
tags,
region
)
SELECT 
'{{ pipeline }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
pipeline,
tags
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
    - name: pipeline
      description: |
        Represents the structure of actions and stages to be performed in the pipeline.
      value:
        name: "{{ name }}"
        roleArn: "{{ roleArn }}"
        artifactStore:
          type_: "{{ type_ }}"
          location: "{{ location }}"
          encryptionKey:
            id: "{{ id }}"
            type_: "{{ type_ }}"
        artifactStores: "{{ artifactStores }}"
        stages:
          - name: "{{ name }}"
            blockers: "{{ blockers }}"
            actions: "{{ actions }}"
            onFailure:
              result: "{{ result }}"
              retryConfiguration:
                retryMode: "{{ retryMode }}"
              conditions:
                - result: "{{ result }}"
                  rules: "{{ rules }}"
            onSuccess:
              conditions:
                - result: "{{ result }}"
                  rules: "{{ rules }}"
            beforeEntry:
              conditions:
                - result: "{{ result }}"
                  rules: "{{ rules }}"
        version: {{ version }}
        executionMode: "{{ executionMode }}"
        pipelineType: "{{ pipelineType }}"
        variables:
          - name: "{{ name }}"
            defaultValue: "{{ defaultValue }}"
            description: "{{ description }}"
        triggers:
          - providerType: "{{ providerType }}"
            gitConfiguration:
              sourceActionName: "{{ sourceActionName }}"
              push:
                - tags:
                    includes: "{{ includes }}"
                    excludes: "{{ excludes }}"
                  branches:
                    includes: "{{ includes }}"
                    excludes: "{{ excludes }}"
                  filePaths:
                    includes: "{{ includes }}"
                    excludes: "{{ excludes }}"
              pullRequest:
                - events: "{{ events }}"
                  branches:
                    includes: "{{ includes }}"
                    excludes: "{{ excludes }}"
                  filePaths:
                    includes: "{{ includes }}"
                    excludes: "{{ excludes }}"
    - name: tags
      description: |
        The tags for the pipeline.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_pipeline"
    values={[
        { label: 'update_pipeline', value: 'update_pipeline' }
    ]}
>
<TabItem value="update_pipeline">

Updates a specified pipeline with edits or changes to its structure. Use a JSON file with the pipeline structure and UpdatePipeline to provide the full structure of the pipeline. Updating the pipeline increases the version number of the pipeline by 1.

```sql
UPDATE aws.codepipeline.pipelines
SET 
pipeline = '{{ pipeline }}'
WHERE 
region = '{{ region }}' --required
AND pipeline = '{{ pipeline }}' --required
RETURNING
pipeline;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_approval_result"
    values={[
        { label: 'put_approval_result', value: 'put_approval_result' },
        { label: 'put_action_revision', value: 'put_action_revision' }
    ]}
>
<TabItem value="put_approval_result">

Provides the response to a manual approval request to CodePipeline. Valid responses include Approved and Rejected.

```sql
REPLACE aws.codepipeline.pipelines
SET 
pipelineName = '{{ pipelineName }}',
stageName = '{{ stageName }}',
actionName = '{{ actionName }}',
result = '{{ result }}',
token = '{{ token }}'
WHERE 
region = '{{ region }}' --required
AND pipelineName = '{{ pipelineName }}' --required
AND stageName = '{{ stageName }}' --required
AND actionName = '{{ actionName }}' --required
AND result = '{{ result }}' --required
AND token = '{{ token }}' --required
RETURNING
approved_at;
```
</TabItem>
<TabItem value="put_action_revision">

Provides information to CodePipeline about new revisions to a source.

```sql
REPLACE aws.codepipeline.pipelines
SET 
pipelineName = '{{ pipelineName }}',
stageName = '{{ stageName }}',
actionName = '{{ actionName }}',
actionRevision = '{{ actionRevision }}'
WHERE 
region = '{{ region }}' --required
AND pipelineName = '{{ pipelineName }}' --required
AND stageName = '{{ stageName }}' --required
AND actionName = '{{ actionName }}' --required
AND actionRevision = '{{ actionRevision }}' --required
RETURNING
new_revision,
pipeline_execution_id;
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

Deletes the specified pipeline.

```sql
DELETE FROM aws.codepipeline.pipelines
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable_stage_transition"
    values={[
        { label: 'disable_stage_transition', value: 'disable_stage_transition' },
        { label: 'enable_stage_transition', value: 'enable_stage_transition' },
        { label: 'rollback_stage', value: 'rollback_stage' },
        { label: 'start_pipeline_execution', value: 'start_pipeline_execution' },
        { label: 'stop_pipeline_execution', value: 'stop_pipeline_execution' }
    ]}
>
<TabItem value="disable_stage_transition">

Prevents artifacts in a pipeline from transitioning to the next stage in the pipeline.

```sql
EXEC aws.codepipeline.pipelines.disable_stage_transition 
@region='{{ region }}' --required 
@@json=
'{
"pipelineName": "{{ pipelineName }}", 
"stageName": "{{ stageName }}", 
"transitionType": "{{ transitionType }}", 
"reason": "{{ reason }}"
}'
;
```
</TabItem>
<TabItem value="enable_stage_transition">

Enables artifacts in a pipeline to transition to a stage in a pipeline.

```sql
EXEC aws.codepipeline.pipelines.enable_stage_transition 
@region='{{ region }}' --required 
@@json=
'{
"pipelineName": "{{ pipelineName }}", 
"stageName": "{{ stageName }}", 
"transitionType": "{{ transitionType }}"
}'
;
```
</TabItem>
<TabItem value="rollback_stage">

Rolls back a stage execution.

```sql
EXEC aws.codepipeline.pipelines.rollback_stage 
@region='{{ region }}' --required 
@@json=
'{
"pipelineName": "{{ pipelineName }}", 
"stageName": "{{ stageName }}", 
"targetPipelineExecutionId": "{{ targetPipelineExecutionId }}"
}'
;
```
</TabItem>
<TabItem value="start_pipeline_execution">

Starts the specified pipeline. Specifically, it begins processing the latest commit to the source location specified as part of the pipeline.

```sql
EXEC aws.codepipeline.pipelines.start_pipeline_execution 
@region='{{ region }}' --required 
@@json=
'{
"name": "{{ name }}", 
"variables": "{{ variables }}", 
"clientRequestToken": "{{ clientRequestToken }}", 
"sourceRevisions": "{{ sourceRevisions }}"
}'
;
```
</TabItem>
<TabItem value="stop_pipeline_execution">

Stops the specified pipeline execution. You choose to either stop the pipeline execution by completing in-progress actions without starting subsequent actions, or by abandoning in-progress actions. While completing or abandoning in-progress actions, the pipeline execution is in a Stopping state. After all in-progress actions are completed or abandoned, the pipeline execution is in a Stopped state.

```sql
EXEC aws.codepipeline.pipelines.stop_pipeline_execution 
@region='{{ region }}' --required 
@@json=
'{
"pipelineName": "{{ pipelineName }}", 
"pipelineExecutionId": "{{ pipelineExecutionId }}", 
"abandon": {{ abandon }}, 
"reason": "{{ reason }}"
}'
;
```
</TabItem>
</Tabs>
