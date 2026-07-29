--- 
title: action_types
hide_title: false
hide_table_of_contents: false
keywords:
  - action_types
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

Creates, updates, deletes, gets or lists an <code>action_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="action_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codepipeline.action_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_action_type"
    values={[
        { label: 'get_action_type', value: 'get_action_type' },
        { label: 'list_action_types', value: 'list_action_types' }
    ]}
>
<TabItem value="get_action_type">

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
    <td><code>object</code></td>
    <td>The action category, owner, provider, and version of the action type to be updated.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for the action type to be updated.</td>
</tr>
<tr>
    <td><CopyableCode code="executor" /></td>
    <td><code>object</code></td>
    <td>Information about the executor for an action type that was created with any supported integration model.</td>
</tr>
<tr>
    <td><CopyableCode code="input_artifact_details" /></td>
    <td><code>object</code></td>
    <td>Details for the artifacts, such as application files, to be worked on by the action. For example, the minimum and maximum number of input artifacts allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="output_artifact_details" /></td>
    <td><code>object</code></td>
    <td>Details for the output artifacts, such as a built application, that are the result of the action. For example, the minimum and maximum number of output artifacts allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>object</code></td>
    <td>Details identifying the accounts with permissions to use the action type.</td>
</tr>
<tr>
    <td><CopyableCode code="properties_" /></td>
    <td><code>array</code></td>
    <td>The properties of the action type to be updated.</td>
</tr>
<tr>
    <td><CopyableCode code="urls" /></td>
    <td><code>object</code></td>
    <td>The links associated with the action type to be updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_action_types">

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
    <td><code>object</code></td>
    <td>Represents information about an action type.</td>
</tr>
<tr>
    <td><CopyableCode code="action_configuration_properties" /></td>
    <td><code>array</code></td>
    <td>The configuration properties for the action type.</td>
</tr>
<tr>
    <td><CopyableCode code="input_artifact_details" /></td>
    <td><code>object</code></td>
    <td>The details of the input artifact for the action, such as its commit ID.</td>
</tr>
<tr>
    <td><CopyableCode code="output_artifact_details" /></td>
    <td><code>object</code></td>
    <td>The details of the output artifact of the action, such as its commit ID.</td>
</tr>
<tr>
    <td><CopyableCode code="settings" /></td>
    <td><code>object</code></td>
    <td>The settings for the action type.</td>
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
    <td><a href="#get_action_type"><CopyableCode code="get_action_type" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about an action type created for an external provider, where the action is to be used by customers of the external provider. The action can be created with any supported integration model.</td>
</tr>
<tr>
    <td><a href="#list_action_types"><CopyableCode code="list_action_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a summary of all CodePipeline action types associated with your account.</td>
</tr>
<tr>
    <td><a href="#create_custom_action_type"><CopyableCode code="create_custom_action_type" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-category"><code>category</code></a>, <a href="#parameter-provider"><code>provider</code></a>, <a href="#parameter-version"><code>version</code></a>, <a href="#parameter-inputArtifactDetails"><code>inputArtifactDetails</code></a>, <a href="#parameter-outputArtifactDetails"><code>outputArtifactDetails</code></a></td>
    <td></td>
    <td>Creates a new custom action that can be used in all pipelines associated with the Amazon Web Services account. Only used for custom actions.</td>
</tr>
<tr>
    <td><a href="#update_action_type"><CopyableCode code="update_action_type" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-actionType"><code>actionType</code></a></td>
    <td></td>
    <td>Updates an action type that was created with any supported integration model, where the action type is to be used by customers of the action type provider. Use a JSON file with the action definition and UpdateActionType to provide the full structure.</td>
</tr>
<tr>
    <td><a href="#delete_custom_action_type"><CopyableCode code="delete_custom_action_type" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Marks a custom action as deleted. PollForJobs for the custom action fails after the action is marked for deletion. Used for custom actions only. To re-create a custom action after it has been deleted you must use a string in the version field that has never been used before. This string can be an incremented version number, for example. To restore a deleted custom action, use a JSON file that is identical to the deleted action, including the original string in the version field.</td>
</tr>
<tr>
    <td><a href="#poll_for_jobs"><CopyableCode code="poll_for_jobs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-actionTypeId"><code>actionTypeId</code></a></td>
    <td></td>
    <td>Returns information about any jobs for CodePipeline to act on. PollForJobs is valid only for action types with "Custom" in the owner field. If the action type contains AWS or ThirdParty in the owner field, the PollForJobs action returns an error. When this API is called, CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.</td>
</tr>
<tr>
    <td><a href="#poll_for_third_party_jobs"><CopyableCode code="poll_for_third_party_jobs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-actionTypeId"><code>actionTypeId</code></a></td>
    <td></td>
    <td>Determines whether there are any third party jobs for a job worker to act on. Used for partner actions only. When this API is called, CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts.</td>
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
    defaultValue="get_action_type"
    values={[
        { label: 'get_action_type', value: 'get_action_type' },
        { label: 'list_action_types', value: 'list_action_types' }
    ]}
>
<TabItem value="get_action_type">

Returns information about an action type created for an external provider, where the action is to be used by customers of the external provider. The action can be created with any supported integration model.

```sql
SELECT
id,
description,
executor,
input_artifact_details,
output_artifact_details,
permissions,
properties_,
urls
FROM aws.codepipeline.action_types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_action_types">

Gets a summary of all CodePipeline action types associated with your account.

```sql
SELECT
id,
action_configuration_properties,
input_artifact_details,
output_artifact_details,
settings
FROM aws.codepipeline.action_types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_custom_action_type"
    values={[
        { label: 'create_custom_action_type', value: 'create_custom_action_type' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_custom_action_type">

Creates a new custom action that can be used in all pipelines associated with the Amazon Web Services account. Only used for custom actions.

```sql
INSERT INTO aws.codepipeline.action_types (
category,
provider,
version,
settings,
configurationProperties,
inputArtifactDetails,
outputArtifactDetails,
tags,
region
)
SELECT 
'{{ category }}' /* required */,
'{{ provider }}' /* required */,
'{{ version }}' /* required */,
'{{ settings }}',
'{{ configurationProperties }}',
'{{ inputArtifactDetails }}' /* required */,
'{{ outputArtifactDetails }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
action_type,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: action_types
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the action_types resource.
    - name: category
      value: "{{ category }}"
      description: |
        The category of the custom action, such as a build action or a test action.
      valid_values: ['Source', 'Build', 'Deploy', 'Test', 'Invoke', 'Approval', 'Compute']
    - name: provider
      value: "{{ provider }}"
      description: |
        The provider of the service used in the custom action, such as CodeDeploy.
    - name: version
      value: "{{ version }}"
      description: |
        The version identifier of the custom action.
    - name: settings
      description: |
        URLs that provide users information about this custom action.
      value:
        thirdPartyConfigurationUrl: "{{ thirdPartyConfigurationUrl }}"
        entityUrlTemplate: "{{ entityUrlTemplate }}"
        executionUrlTemplate: "{{ executionUrlTemplate }}"
        revisionUrlTemplate: "{{ revisionUrlTemplate }}"
    - name: configurationProperties
      description: |
        The configuration properties for the custom action. You can refer to a name in the configuration properties of the custom action within the URL templates by following the format of {Config:name}, as long as the configuration property is both required and not secret. For more information, see Create a Custom Action for a Pipeline.
      value:
        - name: "{{ name }}"
          required_: {{ required_ }}
          key: {{ key }}
          secret: {{ secret }}
          queryable: {{ queryable }}
          description: "{{ description }}"
          type_: "{{ type_ }}"
    - name: inputArtifactDetails
      description: |
        The details of the input artifact for the action, such as its commit ID.
      value:
        minimumCount: {{ minimumCount }}
        maximumCount: {{ maximumCount }}
    - name: outputArtifactDetails
      description: |
        The details of the output artifact of the action, such as its commit ID.
      value:
        minimumCount: {{ minimumCount }}
        maximumCount: {{ maximumCount }}
    - name: tags
      description: |
        The tags for the custom action.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_action_type"
    values={[
        { label: 'update_action_type', value: 'update_action_type' }
    ]}
>
<TabItem value="update_action_type">

Updates an action type that was created with any supported integration model, where the action type is to be used by customers of the action type provider. Use a JSON file with the action definition and UpdateActionType to provide the full structure.

```sql
UPDATE aws.codepipeline.action_types
SET 
actionType = '{{ actionType }}'
WHERE 
region = '{{ region }}' --required
AND actionType = '{{ actionType }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_custom_action_type"
    values={[
        { label: 'delete_custom_action_type', value: 'delete_custom_action_type' }
    ]}
>
<TabItem value="delete_custom_action_type">

Marks a custom action as deleted. PollForJobs for the custom action fails after the action is marked for deletion. Used for custom actions only. To re-create a custom action after it has been deleted you must use a string in the version field that has never been used before. This string can be an incremented version number, for example. To restore a deleted custom action, use a JSON file that is identical to the deleted action, including the original string in the version field.

```sql
DELETE FROM aws.codepipeline.action_types
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="poll_for_jobs"
    values={[
        { label: 'poll_for_jobs', value: 'poll_for_jobs' },
        { label: 'poll_for_third_party_jobs', value: 'poll_for_third_party_jobs' }
    ]}
>
<TabItem value="poll_for_jobs">

Returns information about any jobs for CodePipeline to act on. PollForJobs is valid only for action types with "Custom" in the owner field. If the action type contains AWS or ThirdParty in the owner field, the PollForJobs action returns an error. When this API is called, CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts. This API also returns any secret values defined for the action.

```sql
EXEC aws.codepipeline.action_types.poll_for_jobs 
@region='{{ region }}' --required 
@@json=
'{
"actionTypeId": "{{ actionTypeId }}", 
"maxBatchSize": {{ maxBatchSize }}, 
"queryParam": "{{ queryParam }}"
}'
;
```
</TabItem>
<TabItem value="poll_for_third_party_jobs">

Determines whether there are any third party jobs for a job worker to act on. Used for partner actions only. When this API is called, CodePipeline returns temporary credentials for the S3 bucket used to store artifacts for the pipeline, if the action requires access to that S3 bucket for input or output artifacts.

```sql
EXEC aws.codepipeline.action_types.poll_for_third_party_jobs 
@region='{{ region }}' --required 
@@json=
'{
"actionTypeId": "{{ actionTypeId }}", 
"maxBatchSize": {{ maxBatchSize }}
}'
;
```
</TabItem>
</Tabs>
