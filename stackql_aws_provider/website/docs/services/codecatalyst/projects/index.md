--- 
title: projects
hide_title: false
hide_table_of_contents: false
keywords:
  - projects
  - codecatalyst
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codecatalyst.projects" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_project"
    values={[
        { label: 'get_project', value: 'get_project' },
        { label: 'list_projects', value: 'list_projects' }
    ]}
>
<TabItem value="get_project">

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
    <td>The name of the project in the space.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the project.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The friendly name of the project displayed to users in Amazon CodeCatalyst.</td>
</tr>
<tr>
    <td><CopyableCode code="space_name" /></td>
    <td><code>string</code></td>
    <td>The name of the space. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+(?:&#91;-_\.&#93;&#91;a-zA-Z0-9&#93;+)*&lt;/code&gt;)</td>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the project in the space.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the project.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The friendly name displayed to users of the project in Amazon CodeCatalyst.</td>
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
    <td><a href="#get_project"><CopyableCode code="get_project" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-space_name"><code>space_name</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a project.</td>
</tr>
<tr>
    <td><a href="#list_projects"><CopyableCode code="list_projects" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-space_name"><code>space_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of projects.</td>
</tr>
<tr>
    <td><a href="#create_project"><CopyableCode code="create_project" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-space_name"><code>space_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-displayName"><code>displayName</code></a></td>
    <td></td>
    <td>Creates a project in a specified space.</td>
</tr>
<tr>
    <td><a href="#update_project"><CopyableCode code="update_project" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-space_name"><code>space_name</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Changes one or more values for a project.</td>
</tr>
<tr>
    <td><a href="#delete_project"><CopyableCode code="delete_project" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-space_name"><code>space_name</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a project in a space.</td>
</tr>
<tr>
    <td><a href="#start_dev_environment"><CopyableCode code="start_dev_environment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-space_name"><code>space_name</code></a>, <a href="#parameter-project_name"><code>project_name</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Starts a specified Dev Environment and puts it into an active state.</td>
</tr>
<tr>
    <td><a href="#stop_dev_environment"><CopyableCode code="stop_dev_environment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-space_name"><code>space_name</code></a>, <a href="#parameter-project_name"><code>project_name</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Pauses a specified Dev Environment and places it in a non-running state. Stopped Dev Environments do not consume compute minutes.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The system-generated unique ID of the Dev Environment.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the project in the space. To retrieve a list of project names, use ListProjects.</td>
</tr>
<tr id="parameter-project_name">
    <td><CopyableCode code="project_name" /></td>
    <td><code>string</code></td>
    <td>The name of the project in the space.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-space_name">
    <td><CopyableCode code="space_name" /></td>
    <td><code>string</code></td>
    <td>The name of the space.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_project"
    values={[
        { label: 'get_project', value: 'get_project' },
        { label: 'list_projects', value: 'list_projects' }
    ]}
>
<TabItem value="get_project">

Returns information about a project.

```sql
SELECT
name,
description,
display_name,
space_name
FROM aws.codecatalyst.projects
WHERE space_name = '{{ space_name }}' -- required
AND name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_projects">

Retrieves a list of projects.

```sql
SELECT
name,
description,
display_name
FROM aws.codecatalyst.projects
WHERE space_name = '{{ space_name }}' -- required
AND region = '{{ region }}' -- required
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

Creates a project in a specified space.

```sql
INSERT INTO aws.codecatalyst.projects (
displayName,
description,
space_name,
region
)
SELECT 
'{{ displayName }}' /* required */,
'{{ description }}',
'{{ space_name }}',
'{{ region }}'
RETURNING
name,
description,
display_name,
space_name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: projects
  props:
    - name: space_name
      value: "{{ space_name }}"
      description: Required parameter for the projects resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the projects resource.
    - name: displayName
      value: "{{ displayName }}"
    - name: description
      value: "{{ description }}"
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

Changes one or more values for a project.

```sql
UPDATE aws.codecatalyst.projects
SET 
description = '{{ description }}'
WHERE 
space_name = '{{ space_name }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
RETURNING
name,
description,
display_name,
space_name;
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

Deletes a project in a space.

```sql
DELETE FROM aws.codecatalyst.projects
WHERE space_name = '{{ space_name }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_dev_environment"
    values={[
        { label: 'start_dev_environment', value: 'start_dev_environment' },
        { label: 'stop_dev_environment', value: 'stop_dev_environment' }
    ]}
>
<TabItem value="start_dev_environment">

Starts a specified Dev Environment and puts it into an active state.

```sql
EXEC aws.codecatalyst.projects.start_dev_environment 
@space_name='{{ space_name }}' --required, 
@project_name='{{ project_name }}' --required, 
@id='{{ id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"ides": "{{ ides }}", 
"instanceType": "{{ instanceType }}", 
"inactivityTimeoutMinutes": {{ inactivityTimeoutMinutes }}
}'
;
```
</TabItem>
<TabItem value="stop_dev_environment">

Pauses a specified Dev Environment and places it in a non-running state. Stopped Dev Environments do not consume compute minutes.

```sql
EXEC aws.codecatalyst.projects.stop_dev_environment 
@space_name='{{ space_name }}' --required, 
@project_name='{{ project_name }}' --required, 
@id='{{ id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
