--- 
title: projects
hide_title: false
hide_table_of_contents: false
keywords:
  - projects
  - rekognition
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

Creates, updates, deletes, gets or lists a <code>projects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="projects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rekognition.projects" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_projects"
    values={[
        { label: 'describe_projects', value: 'describe_projects' }
    ]}
>
<TabItem value="describe_projects">

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
    <td><CopyableCode code="AutoUpdate" /></td>
    <td><code>string</code></td>
    <td>Indicates whether automatic retraining will be attempted for the versions of the project. Applies only to adapters. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp for the date and time that the project was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Datasets" /></td>
    <td><code>array</code></td>
    <td>Information about the training and test datasets in the project.</td>
</tr>
<tr>
    <td><CopyableCode code="Feature" /></td>
    <td><code>string</code></td>
    <td>Specifies the project that is being customized. (CONTENT_MODERATION, CUSTOM_LABELS)</td>
</tr>
<tr>
    <td><CopyableCode code="ProjectArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the project. (pattern: &lt;code&gt;(^arn:&#91;a-z\d-&#93;+:rekognition:&#91;a-z\d-&#93;+:\d&#123;12&#125;:project\/&#91;a-zA-Z0-9_.\-&#93;&#123;1,255&#125;\/&#91;0-9&#93;+$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the project. (CREATING, CREATED, DELETING)</td>
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
    <td><a href="#describe_projects"><CopyableCode code="describe_projects" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about your Rekognition projects. This operation requires permissions to perform the rekognition:DescribeProjects action.</td>
</tr>
<tr>
    <td><a href="#create_project"><CopyableCode code="create_project" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProjectName"><code>ProjectName</code></a></td>
    <td></td>
    <td>Creates a new Amazon Rekognition project. A project is a group of resources (datasets, model versions) that you use to create and manage a Amazon Rekognition Custom Labels Model or custom adapter. You can specify a feature to create the project with, if no feature is specified then Custom Labels is used by default. For adapters, you can also choose whether or not to have the project auto update by using the AutoUpdate argument. This operation requires permissions to perform the rekognition:CreateProject action.</td>
</tr>
<tr>
    <td><a href="#delete_project"><CopyableCode code="delete_project" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Amazon Rekognition project. To delete a project you must first delete all models or adapters associated with the project. To delete a model or adapter, see DeleteProjectVersion. DeleteProject is an asynchronous operation. To check if the project is deleted, call DescribeProjects. The project is deleted when the project no longer appears in the response. Be aware that deleting a given project will also delete any ProjectPolicies associated with that project. This operation requires permissions to perform the rekognition:DeleteProject action.</td>
</tr>
<tr>
    <td><a href="#copy_project_version"><CopyableCode code="copy_project_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SourceProjectArn"><code>SourceProjectArn</code></a>, <a href="#parameter-SourceProjectVersionArn"><code>SourceProjectVersionArn</code></a>, <a href="#parameter-DestinationProjectArn"><code>DestinationProjectArn</code></a>, <a href="#parameter-VersionName"><code>VersionName</code></a>, <a href="#parameter-OutputConfig"><code>OutputConfig</code></a></td>
    <td></td>
    <td>This operation applies only to Amazon Rekognition Custom Labels. Copies a version of an Amazon Rekognition Custom Labels model from a source project to a destination project. The source and destination projects can be in different AWS accounts but must be in the same AWS Region. You can't copy a model to another AWS service. To copy a model version to a different AWS account, you need to create a resource-based policy known as a project policy. You attach the project policy to the source project by calling PutProjectPolicy. The project policy gives permission to copy the model version from a trusting AWS account to a trusted account. For more information creating and attaching a project policy, see Attaching a project policy (SDK) in the Amazon Rekognition Custom Labels Developer Guide. If you are copying a model version to a project in the same AWS account, you don't need to create a project policy. Copying project versions is supported only for Custom Labels models. To copy a model, the destination project, source project, and source model version must already exist. Copying a model version takes a while to complete. To get the current status, call DescribeProjectVersions and check the value of Status in the ProjectVersionDescription object. The copy operation has finished when the value of Status is COPYING_COMPLETED. This operation requires permissions to perform the rekognition:CopyProjectVersion action.</td>
</tr>
<tr>
    <td><a href="#start_project_version"><CopyableCode code="start_project_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProjectVersionArn"><code>ProjectVersionArn</code></a>, <a href="#parameter-MinInferenceUnits"><code>MinInferenceUnits</code></a></td>
    <td></td>
    <td>This operation applies only to Amazon Rekognition Custom Labels. Starts the running of the version of a model. Starting a model takes a while to complete. To check the current state of the model, use DescribeProjectVersions. Once the model is running, you can detect custom labels in new images by calling DetectCustomLabels. You are charged for the amount of time that the model is running. To stop a running model, call StopProjectVersion. This operation requires permissions to perform the rekognition:StartProjectVersion action.</td>
</tr>
<tr>
    <td><a href="#stop_project_version"><CopyableCode code="stop_project_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProjectVersionArn"><code>ProjectVersionArn</code></a></td>
    <td></td>
    <td>This operation applies only to Amazon Rekognition Custom Labels. Stops a running model. The operation might take a while to complete. To check the current status, call DescribeProjectVersions. Only applies to Custom Labels projects. This operation requires permissions to perform the rekognition:StopProjectVersion action.</td>
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
    defaultValue="describe_projects"
    values={[
        { label: 'describe_projects', value: 'describe_projects' }
    ]}
>
<TabItem value="describe_projects">

Gets information about your Rekognition projects. This operation requires permissions to perform the rekognition:DescribeProjects action.

```sql
SELECT
AutoUpdate,
CreationTimestamp,
Datasets,
Feature,
ProjectArn,
Status
FROM aws.rekognition.projects
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_project"
    values={[
        { label: 'create_project', value: 'create_project' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_project">

Creates a new Amazon Rekognition project. A project is a group of resources (datasets, model versions) that you use to create and manage a Amazon Rekognition Custom Labels Model or custom adapter. You can specify a feature to create the project with, if no feature is specified then Custom Labels is used by default. For adapters, you can also choose whether or not to have the project auto update by using the AutoUpdate argument. This operation requires permissions to perform the rekognition:CreateProject action.

```sql
INSERT INTO aws.rekognition.projects (
ProjectName,
Feature,
AutoUpdate,
Tags,
region
)
SELECT 
'{{ ProjectName }}' /* required */,
'{{ Feature }}',
'{{ AutoUpdate }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
ProjectArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: projects
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the projects resource.
    - name: ProjectName
      value: "{{ ProjectName }}"
      description: |
        The name of the project to create.
    - name: Feature
      value: "{{ Feature }}"
      description: |
        Specifies feature that is being customized. If no value is provided CUSTOM_LABELS is used as a default.
      valid_values: ['CONTENT_MODERATION', 'CUSTOM_LABELS']
    - name: AutoUpdate
      value: "{{ AutoUpdate }}"
      description: |
        Specifies whether automatic retraining should be attempted for the versions of the project. Automatic retraining is done as a best effort. Required argument for Content Moderation. Applicable only to adapters.
      valid_values: ['ENABLED', 'DISABLED']
    - name: Tags
      value: "{{ Tags }}"
      description: |
        A set of tags (key-value pairs) that you want to attach to the project.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_project"
    values={[
        { label: 'delete_project', value: 'delete_project' }
    ]}
>
<TabItem value="delete_project">

Deletes a Amazon Rekognition project. To delete a project you must first delete all models or adapters associated with the project. To delete a model or adapter, see DeleteProjectVersion. DeleteProject is an asynchronous operation. To check if the project is deleted, call DescribeProjects. The project is deleted when the project no longer appears in the response. Be aware that deleting a given project will also delete any ProjectPolicies associated with that project. This operation requires permissions to perform the rekognition:DeleteProject action.

```sql
DELETE FROM aws.rekognition.projects
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="copy_project_version"
    values={[
        { label: 'copy_project_version', value: 'copy_project_version' },
        { label: 'start_project_version', value: 'start_project_version' },
        { label: 'stop_project_version', value: 'stop_project_version' }
    ]}
>
<TabItem value="copy_project_version">

This operation applies only to Amazon Rekognition Custom Labels. Copies a version of an Amazon Rekognition Custom Labels model from a source project to a destination project. The source and destination projects can be in different AWS accounts but must be in the same AWS Region. You can't copy a model to another AWS service. To copy a model version to a different AWS account, you need to create a resource-based policy known as a project policy. You attach the project policy to the source project by calling PutProjectPolicy. The project policy gives permission to copy the model version from a trusting AWS account to a trusted account. For more information creating and attaching a project policy, see Attaching a project policy (SDK) in the Amazon Rekognition Custom Labels Developer Guide. If you are copying a model version to a project in the same AWS account, you don't need to create a project policy. Copying project versions is supported only for Custom Labels models. To copy a model, the destination project, source project, and source model version must already exist. Copying a model version takes a while to complete. To get the current status, call DescribeProjectVersions and check the value of Status in the ProjectVersionDescription object. The copy operation has finished when the value of Status is COPYING_COMPLETED. This operation requires permissions to perform the rekognition:CopyProjectVersion action.

```sql
EXEC aws.rekognition.projects.copy_project_version 
@region='{{ region }}' --required 
@@json=
'{
"SourceProjectArn": "{{ SourceProjectArn }}", 
"SourceProjectVersionArn": "{{ SourceProjectVersionArn }}", 
"DestinationProjectArn": "{{ DestinationProjectArn }}", 
"VersionName": "{{ VersionName }}", 
"OutputConfig": "{{ OutputConfig }}", 
"Tags": "{{ Tags }}", 
"KmsKeyId": "{{ KmsKeyId }}"
}'
;
```
</TabItem>
<TabItem value="start_project_version">

This operation applies only to Amazon Rekognition Custom Labels. Starts the running of the version of a model. Starting a model takes a while to complete. To check the current state of the model, use DescribeProjectVersions. Once the model is running, you can detect custom labels in new images by calling DetectCustomLabels. You are charged for the amount of time that the model is running. To stop a running model, call StopProjectVersion. This operation requires permissions to perform the rekognition:StartProjectVersion action.

```sql
EXEC aws.rekognition.projects.start_project_version 
@region='{{ region }}' --required 
@@json=
'{
"ProjectVersionArn": "{{ ProjectVersionArn }}", 
"MinInferenceUnits": {{ MinInferenceUnits }}, 
"MaxInferenceUnits": {{ MaxInferenceUnits }}
}'
;
```
</TabItem>
<TabItem value="stop_project_version">

This operation applies only to Amazon Rekognition Custom Labels. Stops a running model. The operation might take a while to complete. To check the current status, call DescribeProjectVersions. Only applies to Custom Labels projects. This operation requires permissions to perform the rekognition:StopProjectVersion action.

```sql
EXEC aws.rekognition.projects.stop_project_version 
@region='{{ region }}' --required 
@@json=
'{
"ProjectVersionArn": "{{ ProjectVersionArn }}"
}'
;
```
</TabItem>
</Tabs>
