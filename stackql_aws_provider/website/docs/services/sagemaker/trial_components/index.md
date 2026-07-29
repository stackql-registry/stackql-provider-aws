--- 
title: trial_components
hide_title: false
hide_table_of_contents: false
keywords:
  - trial_components
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>trial_components</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="trial_components" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.trial_components" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_trial_component"
    values={[
        { label: 'describe_trial_component', value: 'describe_trial_component' },
        { label: 'list_trial_components', value: 'list_trial_components' }
    ]}
>
<TabItem value="describe_trial_component">

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
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the component was created.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The name of the component as displayed. If DisplayName isn't specified, TrialComponentName is displayed. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,119&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the component ended.</td>
</tr>
<tr>
    <td><CopyableCode code="input_artifacts" /></td>
    <td><code>object</code></td>
    <td>The input artifacts of the component.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the component was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="lineage_group_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the lineage group. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:lineage-group/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="metadata_properties" /></td>
    <td><code>object</code></td>
    <td>Metadata properties of the tracking entity, trial, or trial component.</td>
</tr>
<tr>
    <td><CopyableCode code="metrics" /></td>
    <td><code>array</code></td>
    <td>The metrics for the component.</td>
</tr>
<tr>
    <td><CopyableCode code="output_artifacts" /></td>
    <td><code>object</code></td>
    <td>The output artifacts of the component.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>The hyperparameters of the component.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td>The Amazon Resource Name (ARN) of the source and, optionally, the job type.</td>
</tr>
<tr>
    <td><CopyableCode code="sources" /></td>
    <td><code>array</code></td>
    <td>A list of ARNs and, if applicable, job types for multiple sources of an experiment run.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the component started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the component. States include: InProgress Completed Failed</td>
</tr>
<tr>
    <td><CopyableCode code="trial_component_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the trial component. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:experiment-trial-component/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="trial_component_name" /></td>
    <td><code>string</code></td>
    <td>The name of the trial component. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,119&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_trial_components">

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
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the component was created.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The name of the component as displayed. If DisplayName isn't specified, TrialComponentName is displayed. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,119&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the component ended.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the component was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the component started.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the component. States include: InProgress Completed Failed</td>
</tr>
<tr>
    <td><CopyableCode code="trial_component_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the trial component. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:experiment-trial-component/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="trial_component_name" /></td>
    <td><code>string</code></td>
    <td>The name of the trial component. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,119&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="trial_component_source" /></td>
    <td><code>object</code></td>
    <td>The Amazon Resource Name (ARN) and job type of the source of a trial component.</td>
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
    <td><a href="#describe_trial_component"><CopyableCode code="describe_trial_component" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a list of a trials component's properties.</td>
</tr>
<tr>
    <td><a href="#list_trial_components"><CopyableCode code="list_trial_components" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the trial components in your account. You can sort the list by trial component name or creation time. You can filter the list to show only components that were created in a specific time range. You can also filter on one of the following: ExperimentName SourceArn TrialName</td>
</tr>
<tr>
    <td><a href="#create_trial_component"><CopyableCode code="create_trial_component" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TrialComponentName"><code>TrialComponentName</code></a></td>
    <td></td>
    <td>Creates a trial component, which is a stage of a machine learning trial. A trial is composed of one or more trial components. A trial component can be used in multiple trials. Trial components include pre-processing jobs, training jobs, and batch transform jobs. When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the Amazon Web Services SDK for Python (Boto), you must use the logging APIs provided by the SDK. You can add tags to a trial component and then use the Search API to search for the tags.</td>
</tr>
<tr>
    <td><a href="#associate_trial_component"><CopyableCode code="associate_trial_component" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TrialComponentName"><code>TrialComponentName</code></a>, <a href="#parameter-TrialName"><code>TrialName</code></a></td>
    <td></td>
    <td>Associates a trial component with a trial. A trial component can be associated with multiple trials. To disassociate a trial component from a trial, call the DisassociateTrialComponent API.</td>
</tr>
<tr>
    <td><a href="#update_trial_component"><CopyableCode code="update_trial_component" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TrialComponentName"><code>TrialComponentName</code></a></td>
    <td></td>
    <td>Updates one or more properties of a trial component.</td>
</tr>
<tr>
    <td><a href="#delete_trial_component"><CopyableCode code="delete_trial_component" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified trial component. A trial component must be disassociated from all trials before the trial component can be deleted. To disassociate a trial component from a trial, call the DisassociateTrialComponent API.</td>
</tr>
<tr>
    <td><a href="#disassociate_trial_component"><CopyableCode code="disassociate_trial_component" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TrialComponentName"><code>TrialComponentName</code></a>, <a href="#parameter-TrialName"><code>TrialName</code></a></td>
    <td></td>
    <td>Disassociates a trial component from a trial. This doesn't effect other trials the component is associated with. Before you can delete a component, you must disassociate the component from all trials it is associated with. To associate a trial component with a trial, call the AssociateTrialComponent API. To get a list of the trials a component is associated with, use the Search API. Specify ExperimentTrialComponent for the Resource parameter. The list appears in the response under Results.TrialComponent.Parents.</td>
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
    defaultValue="describe_trial_component"
    values={[
        { label: 'describe_trial_component', value: 'describe_trial_component' },
        { label: 'list_trial_components', value: 'list_trial_components' }
    ]}
>
<TabItem value="describe_trial_component">

Provides a list of a trials component's properties.

```sql
SELECT
created_by,
creation_time,
display_name,
end_time,
input_artifacts,
last_modified_by,
last_modified_time,
lineage_group_arn,
metadata_properties,
metrics,
output_artifacts,
parameters,
source,
sources,
start_time,
status,
trial_component_arn,
trial_component_name
FROM aws.sagemaker.trial_components
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_trial_components">

Lists the trial components in your account. You can sort the list by trial component name or creation time. You can filter the list to show only components that were created in a specific time range. You can also filter on one of the following: ExperimentName SourceArn TrialName

```sql
SELECT
created_by,
creation_time,
display_name,
end_time,
last_modified_by,
last_modified_time,
start_time,
status,
trial_component_arn,
trial_component_name,
trial_component_source
FROM aws.sagemaker.trial_components
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_trial_component"
    values={[
        { label: 'create_trial_component', value: 'create_trial_component' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_trial_component">

Creates a trial component, which is a stage of a machine learning trial. A trial is composed of one or more trial components. A trial component can be used in multiple trials. Trial components include pre-processing jobs, training jobs, and batch transform jobs. When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the Amazon Web Services SDK for Python (Boto), you must use the logging APIs provided by the SDK. You can add tags to a trial component and then use the Search API to search for the tags.

```sql
INSERT INTO aws.sagemaker.trial_components (
TrialComponentName,
DisplayName,
Status,
StartTime,
EndTime,
Parameters,
InputArtifacts,
OutputArtifacts,
MetadataProperties,
Tags,
region
)
SELECT 
'{{ TrialComponentName }}' /* required */,
'{{ DisplayName }}',
'{{ Status }}',
'{{ StartTime }}',
'{{ EndTime }}',
'{{ Parameters }}',
'{{ InputArtifacts }}',
'{{ OutputArtifacts }}',
'{{ MetadataProperties }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
trial_component_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: trial_components
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the trial_components resource.
    - name: TrialComponentName
      value: "{{ TrialComponentName }}"
      description: |
        The name of the component. The name must be unique in your Amazon Web Services account and is not case-sensitive.
    - name: DisplayName
      value: "{{ DisplayName }}"
      description: |
        The name of the component as displayed. The name doesn't need to be unique. If DisplayName isn't specified, TrialComponentName is displayed.
    - name: Status
      description: |
        The status of the component. States include: InProgress Completed Failed
      value:
        PrimaryStatus: "{{ PrimaryStatus }}"
        Message: "{{ Message }}"
    - name: StartTime
      value: "{{ StartTime }}"
      description: |
        When the component started.
    - name: EndTime
      value: "{{ EndTime }}"
      description: |
        When the component ended.
    - name: Parameters
      value: "{{ Parameters }}"
      description: |
        The hyperparameters for the component.
    - name: InputArtifacts
      value: "{{ InputArtifacts }}"
      description: |
        The input artifacts for the component. Examples of input artifacts are datasets, algorithms, hyperparameters, source code, and instance types.
    - name: OutputArtifacts
      value: "{{ OutputArtifacts }}"
      description: |
        The output artifacts for the component. Examples of output artifacts are metrics, snapshots, logs, and images.
    - name: MetadataProperties
      description: |
        Metadata properties of the tracking entity, trial, or trial component.
      value:
        CommitId: "{{ CommitId }}"
        Repository: "{{ Repository }}"
        GeneratedBy: "{{ GeneratedBy }}"
        ProjectId: "{{ ProjectId }}"
    - name: Tags
      description: |
        A list of tags to associate with the component. You can use Search API to search on the tags.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_trial_component"
    values={[
        { label: 'associate_trial_component', value: 'associate_trial_component' },
        { label: 'update_trial_component', value: 'update_trial_component' }
    ]}
>
<TabItem value="associate_trial_component">

Associates a trial component with a trial. A trial component can be associated with multiple trials. To disassociate a trial component from a trial, call the DisassociateTrialComponent API.

```sql
UPDATE aws.sagemaker.trial_components
SET 
TrialComponentName = '{{ TrialComponentName }}',
TrialName = '{{ TrialName }}'
WHERE 
region = '{{ region }}' --required
AND TrialComponentName = '{{ TrialComponentName }}' --required
AND TrialName = '{{ TrialName }}' --required
RETURNING
trial_arn,
trial_component_arn;
```
</TabItem>
<TabItem value="update_trial_component">

Updates one or more properties of a trial component.

```sql
UPDATE aws.sagemaker.trial_components
SET 
TrialComponentName = '{{ TrialComponentName }}',
DisplayName = '{{ DisplayName }}',
Status = '{{ Status }}',
StartTime = '{{ StartTime }}',
EndTime = '{{ EndTime }}',
Parameters = '{{ Parameters }}',
ParametersToRemove = '{{ ParametersToRemove }}',
InputArtifacts = '{{ InputArtifacts }}',
InputArtifactsToRemove = '{{ InputArtifactsToRemove }}',
OutputArtifacts = '{{ OutputArtifacts }}',
OutputArtifactsToRemove = '{{ OutputArtifactsToRemove }}'
WHERE 
region = '{{ region }}' --required
AND TrialComponentName = '{{ TrialComponentName }}' --required
RETURNING
trial_component_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_trial_component"
    values={[
        { label: 'delete_trial_component', value: 'delete_trial_component' }
    ]}
>
<TabItem value="delete_trial_component">

Deletes the specified trial component. A trial component must be disassociated from all trials before the trial component can be deleted. To disassociate a trial component from a trial, call the DisassociateTrialComponent API.

```sql
DELETE FROM aws.sagemaker.trial_components
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_trial_component"
    values={[
        { label: 'disassociate_trial_component', value: 'disassociate_trial_component' }
    ]}
>
<TabItem value="disassociate_trial_component">

Disassociates a trial component from a trial. This doesn't effect other trials the component is associated with. Before you can delete a component, you must disassociate the component from all trials it is associated with. To associate a trial component with a trial, call the AssociateTrialComponent API. To get a list of the trials a component is associated with, use the Search API. Specify ExperimentTrialComponent for the Resource parameter. The list appears in the response under Results.TrialComponent.Parents.

```sql
EXEC aws.sagemaker.trial_components.disassociate_trial_component 
@region='{{ region }}' --required 
@@json=
'{
"TrialComponentName": "{{ TrialComponentName }}", 
"TrialName": "{{ TrialName }}"
}'
;
```
</TabItem>
</Tabs>
