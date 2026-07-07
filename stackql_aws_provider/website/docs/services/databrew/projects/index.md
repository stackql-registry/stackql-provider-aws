--- 
title: projects
hide_title: false
hide_table_of_contents: false
keywords:
  - projects
  - databrew
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.databrew.projects" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_project"
    values={[
        { label: 'describe_project', value: 'describe_project' },
        { label: 'list_projects', value: 'list_projects' }
    ]}
>
<TabItem value="describe_project">

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
    <td><CopyableCode code="CreateDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the project was created.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedBy" /></td>
    <td><code>string</code></td>
    <td>The identifier (user name) of the user who created the project.</td>
</tr>
<tr>
    <td><CopyableCode code="DatasetName" /></td>
    <td><code>string</code></td>
    <td>The dataset associated with the project.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedBy" /></td>
    <td><code>string</code></td>
    <td>The identifier (user name) of the user who last modified the project.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the project was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the project.</td>
</tr>
<tr>
    <td><CopyableCode code="OpenDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the project was opened.</td>
</tr>
<tr>
    <td><CopyableCode code="OpenedBy" /></td>
    <td><code>string</code></td>
    <td>The identifier (user name) of the user that opened the project for use.</td>
</tr>
<tr>
    <td><CopyableCode code="RecipeName" /></td>
    <td><code>string</code></td>
    <td>The recipe associated with this job.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the project.</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Identity and Access Management (IAM) role to be assumed when DataBrew runs the job.</td>
</tr>
<tr>
    <td><CopyableCode code="Sample" /></td>
    <td><code>object</code></td>
    <td>Represents the sample size and sampling type for DataBrew to use for interactive data analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="SessionStatus" /></td>
    <td><code>string</code></td>
    <td>Describes the current state of the session: PROVISIONING - allocating resources for the session. INITIALIZING - getting the session ready for first use. ASSIGNED - the session is ready for use. (ASSIGNED, FAILED, INITIALIZING, PROVISIONING, READY, RECYCLING, ROTATING, TERMINATED, TERMINATING, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>Metadata tags associated with this project.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_projects">

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
    <td><CopyableCode code="AccountId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the project.</td>
</tr>
<tr>
    <td><CopyableCode code="CreateDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the project was created.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who crated the project.</td>
</tr>
<tr>
    <td><CopyableCode code="DatasetName" /></td>
    <td><code>string</code></td>
    <td>The dataset that the project is to act upon.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who last modified the project.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last modification date and time for the project.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The unique name of a project.</td>
</tr>
<tr>
    <td><CopyableCode code="OpenDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the project was opened.</td>
</tr>
<tr>
    <td><CopyableCode code="OpenedBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user that opened the project for use.</td>
</tr>
<tr>
    <td><CopyableCode code="RecipeName" /></td>
    <td><code>string</code></td>
    <td>The name of a recipe that will be developed during a project session.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the project.</td>
</tr>
<tr>
    <td><CopyableCode code="RoleArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the role that will be assumed for this project.</td>
</tr>
<tr>
    <td><CopyableCode code="Sample" /></td>
    <td><code>object</code></td>
    <td>Represents the sample size and sampling type for DataBrew to use for interactive data analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>Metadata tags that have been applied to the project.</td>
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
    <td><a href="#describe_project"><CopyableCode code="describe_project" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the definition of a specific DataBrew project.</td>
</tr>
<tr>
    <td><a href="#list_projects"><CopyableCode code="list_projects" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all of the DataBrew projects that are defined.</td>
</tr>
<tr>
    <td><a href="#create_project"><CopyableCode code="create_project" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DatasetName"><code>DatasetName</code></a>, <a href="#parameter-RecipeName"><code>RecipeName</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Creates a new DataBrew project.</td>
</tr>
<tr>
    <td><a href="#update_project"><CopyableCode code="update_project" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Modifies the definition of an existing DataBrew project.</td>
</tr>
<tr>
    <td><a href="#delete_project"><CopyableCode code="delete_project" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing DataBrew project.</td>
</tr>
<tr>
    <td><a href="#send_project_session_action"><CopyableCode code="send_project_session_action" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Performs a recipe step within an interactive DataBrew session that's currently open.</td>
</tr>
<tr>
    <td><a href="#start_project_session"><CopyableCode code="start_project_session" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an interactive session, enabling you to manipulate data in a DataBrew project.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the project to act upon.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in this request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned by a previous call to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_project"
    values={[
        { label: 'describe_project', value: 'describe_project' },
        { label: 'list_projects', value: 'list_projects' }
    ]}
>
<TabItem value="describe_project">

Returns the definition of a specific DataBrew project.

```sql
SELECT
CreateDate,
CreatedBy,
DatasetName,
LastModifiedBy,
LastModifiedDate,
Name,
OpenDate,
OpenedBy,
RecipeName,
ResourceArn,
RoleArn,
Sample,
SessionStatus,
Tags
FROM aws.databrew.projects
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_projects">

Lists all of the DataBrew projects that are defined.

```sql
SELECT
AccountId,
CreateDate,
CreatedBy,
DatasetName,
LastModifiedBy,
LastModifiedDate,
Name,
OpenDate,
OpenedBy,
RecipeName,
ResourceArn,
RoleArn,
Sample,
Tags
FROM aws.databrew.projects
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
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

Creates a new DataBrew project.

```sql
INSERT INTO aws.databrew.projects (
DatasetName,
Name,
RecipeName,
Sample,
RoleArn,
Tags,
region
)
SELECT 
'{{ DatasetName }}' /* required */,
'{{ Name }}',
'{{ RecipeName }}' /* required */,
'{{ Sample }}',
'{{ RoleArn }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
Name
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
    - name: DatasetName
      value: "{{ DatasetName }}"
    - name: Name
      value: "{{ Name }}"
    - name: RecipeName
      value: "{{ RecipeName }}"
    - name: Sample
      description: |
        Represents the sample size and sampling type for DataBrew to use for interactive data analysis.
      value:
        Size: {{ Size }}
        Type: "{{ Type }}"
    - name: RoleArn
      value: "{{ RoleArn }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_project"
    values={[
        { label: 'update_project', value: 'update_project' }
    ]}
>
<TabItem value="update_project">

Modifies the definition of an existing DataBrew project.

```sql
UPDATE aws.databrew.projects
SET 
Sample = '{{ Sample }}',
RoleArn = '{{ RoleArn }}'
WHERE 
name = '{{ name }}' --required
AND region = '{{ region }}' --required
AND RoleArn = '{{ RoleArn }}' --required
RETURNING
LastModifiedDate,
Name;
```
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

Deletes an existing DataBrew project.

```sql
DELETE FROM aws.databrew.projects
WHERE name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="send_project_session_action"
    values={[
        { label: 'send_project_session_action', value: 'send_project_session_action' },
        { label: 'start_project_session', value: 'start_project_session' }
    ]}
>
<TabItem value="send_project_session_action">

Performs a recipe step within an interactive DataBrew session that's currently open.

```sql
EXEC aws.databrew.projects.send_project_session_action 
@name='{{ name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Preview": {{ Preview }}, 
"RecipeStep": "{{ RecipeStep }}", 
"StepIndex": {{ StepIndex }}, 
"ClientSessionId": "{{ ClientSessionId }}", 
"ViewFrame": "{{ ViewFrame }}"
}'
;
```
</TabItem>
<TabItem value="start_project_session">

Creates an interactive session, enabling you to manipulate data in a DataBrew project.

```sql
EXEC aws.databrew.projects.start_project_session 
@name='{{ name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"AssumeControl": {{ AssumeControl }}
}'
;
```
</TabItem>
</Tabs>
