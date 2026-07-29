--- 
title: actions
hide_title: false
hide_table_of_contents: false
keywords:
  - actions
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

Creates, updates, deletes, gets or lists an <code>actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="actions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_action"
    values={[
        { label: 'describe_action', value: 'describe_action' },
        { label: 'list_actions', value: 'list_actions' }
    ]}
>
<TabItem value="describe_action">

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
    <td><CopyableCode code="action_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the action. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:action/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="action_name" /></td>
    <td><code>string</code></td>
    <td>The name of the action. (pattern: &lt;code&gt;(arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:(experiment|experiment-trial|experiment-trial-component|artifact|action|context)\/)?(&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,119&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="action_type" /></td>
    <td><code>string</code></td>
    <td>The type of the action.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the action was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the action. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>object</code></td>
    <td>Information about the user who created or modified a SageMaker resource.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the action was last modified.</td>
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
    <td><CopyableCode code="properties" /></td>
    <td><code>object</code></td>
    <td>A list of the action's properties.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td>The source of the action.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the action. (Unknown, InProgress, Completed, Failed, Stopping, Stopped)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_actions">

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
    <td><CopyableCode code="action_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the action. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:action/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="action_name" /></td>
    <td><code>string</code></td>
    <td>The name of the action. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,119&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="action_type" /></td>
    <td><code>string</code></td>
    <td>The type of the action.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the action was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the action was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td>The source of the action.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the action. (Unknown, InProgress, Completed, Failed, Stopping, Stopped)</td>
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
    <td><a href="#describe_action"><CopyableCode code="describe_action" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an action.</td>
</tr>
<tr>
    <td><a href="#list_actions"><CopyableCode code="list_actions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the actions in your account and their properties.</td>
</tr>
<tr>
    <td><a href="#create_action"><CopyableCode code="create_action" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ActionName"><code>ActionName</code></a>, <a href="#parameter-ActionType"><code>ActionType</code></a></td>
    <td></td>
    <td>Creates an action. An action is a lineage tracking entity that represents an action or activity. For example, a model deployment or an HPO job. Generally, an action involves at least one input or output artifact. For more information, see Amazon SageMaker ML Lineage Tracking.</td>
</tr>
<tr>
    <td><a href="#update_action"><CopyableCode code="update_action" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ActionName"><code>ActionName</code></a></td>
    <td></td>
    <td>Updates an action.</td>
</tr>
<tr>
    <td><a href="#delete_action"><CopyableCode code="delete_action" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an action.</td>
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
    defaultValue="describe_action"
    values={[
        { label: 'describe_action', value: 'describe_action' },
        { label: 'list_actions', value: 'list_actions' }
    ]}
>
<TabItem value="describe_action">

Describes an action.

```sql
SELECT
action_arn,
action_name,
action_type,
created_by,
creation_time,
description,
last_modified_by,
last_modified_time,
lineage_group_arn,
metadata_properties,
properties,
source,
status
FROM aws.sagemaker.actions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_actions">

Lists the actions in your account and their properties.

```sql
SELECT
action_arn,
action_name,
action_type,
creation_time,
last_modified_time,
source,
status
FROM aws.sagemaker.actions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_action"
    values={[
        { label: 'create_action', value: 'create_action' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_action">

Creates an action. An action is a lineage tracking entity that represents an action or activity. For example, a model deployment or an HPO job. Generally, an action involves at least one input or output artifact. For more information, see Amazon SageMaker ML Lineage Tracking.

```sql
INSERT INTO aws.sagemaker.actions (
ActionName,
Source,
ActionType,
Description,
Status,
Properties,
MetadataProperties,
Tags,
region
)
SELECT 
'{{ ActionName }}' /* required */,
'{{ Source }}',
'{{ ActionType }}' /* required */,
'{{ Description }}',
'{{ Status }}',
'{{ Properties }}',
'{{ MetadataProperties }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
action_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: actions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the actions resource.
    - name: ActionName
      value: "{{ ActionName }}"
      description: |
        The name of the action. Must be unique to your account in an Amazon Web Services Region.
    - name: Source
      description: |
        The source type, ID, and URI.
      value:
        SourceUri: "{{ SourceUri }}"
        SourceType: "{{ SourceType }}"
        SourceId: "{{ SourceId }}"
    - name: ActionType
      value: "{{ ActionType }}"
      description: |
        The action type.
    - name: Description
      value: "{{ Description }}"
      description: |
        The description of the action.
    - name: Status
      value: "{{ Status }}"
      description: |
        The status of the action.
      valid_values: ['Unknown', 'InProgress', 'Completed', 'Failed', 'Stopping', 'Stopped']
    - name: Properties
      value: "{{ Properties }}"
      description: |
        A list of properties to add to the action.
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
        A list of tags to apply to the action.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_action"
    values={[
        { label: 'update_action', value: 'update_action' }
    ]}
>
<TabItem value="update_action">

Updates an action.

```sql
UPDATE aws.sagemaker.actions
SET 
ActionName = '{{ ActionName }}',
Description = '{{ Description }}',
Status = '{{ Status }}',
Properties = '{{ Properties }}',
PropertiesToRemove = '{{ PropertiesToRemove }}'
WHERE 
region = '{{ region }}' --required
AND ActionName = '{{ ActionName }}' --required
RETURNING
action_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_action"
    values={[
        { label: 'delete_action', value: 'delete_action' }
    ]}
>
<TabItem value="delete_action">

Deletes an action.

```sql
DELETE FROM aws.sagemaker.actions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
