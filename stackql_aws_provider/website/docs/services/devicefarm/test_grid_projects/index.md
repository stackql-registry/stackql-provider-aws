--- 
title: test_grid_projects
hide_title: false
hide_table_of_contents: false
keywords:
  - test_grid_projects
  - devicefarm
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

Creates, updates, deletes, gets or lists a <code>test_grid_projects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="test_grid_projects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devicefarm.test_grid_projects" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_test_grid_project"
    values={[
        { label: 'get_test_grid_project', value: 'get_test_grid_project' },
        { label: 'list_test_grid_projects', value: 'list_test_grid_projects' }
    ]}
>
<TabItem value="get_test_grid_project">

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
    <td>A human-readable name for the project.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the project. (pattern: &lt;code&gt;^arn:aws:devicefarm:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the project was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A human-readable description for the project.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_config" /></td>
    <td><code>object</code></td>
    <td>The VPC security groups and subnets that are attached to a project.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_test_grid_projects">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>Used for pagination. Pass into ListTestGridProjects to get more results in a paginated request.</td>
</tr>
<tr>
    <td><CopyableCode code="test_grid_projects" /></td>
    <td><code>array</code></td>
    <td>The list of TestGridProjects, based on a ListTestGridProjectsRequest.</td>
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
    <td><a href="#get_test_grid_project"><CopyableCode code="get_test_grid_project" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a Selenium testing project.</td>
</tr>
<tr>
    <td><a href="#list_test_grid_projects"><CopyableCode code="list_test_grid_projects" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of all Selenium testing projects in your account.</td>
</tr>
<tr>
    <td><a href="#create_test_grid_project"><CopyableCode code="create_test_grid_project" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a Selenium testing project. Projects are used to track TestGridSession instances.</td>
</tr>
<tr>
    <td><a href="#update_test_grid_project"><CopyableCode code="update_test_grid_project" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-projectArn"><code>projectArn</code></a></td>
    <td></td>
    <td>Change details of a project.</td>
</tr>
<tr>
    <td><a href="#delete_test_grid_project"><CopyableCode code="delete_test_grid_project" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Selenium testing project and all content generated under it. You cannot delete a project if it has active sessions. You cannot undo this operation.</td>
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
    defaultValue="get_test_grid_project"
    values={[
        { label: 'get_test_grid_project', value: 'get_test_grid_project' },
        { label: 'list_test_grid_projects', value: 'list_test_grid_projects' }
    ]}
>
<TabItem value="get_test_grid_project">

Retrieves information about a Selenium testing project.

```sql
SELECT
name,
arn,
created,
description,
vpc_config
FROM aws.devicefarm.test_grid_projects
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_test_grid_projects">

Gets a list of all Selenium testing projects in your account.

```sql
SELECT
next_token,
test_grid_projects
FROM aws.devicefarm.test_grid_projects
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_test_grid_project"
    values={[
        { label: 'create_test_grid_project', value: 'create_test_grid_project' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_test_grid_project">

Creates a Selenium testing project. Projects are used to track TestGridSession instances.

```sql
INSERT INTO aws.devicefarm.test_grid_projects (
name,
description,
vpcConfig,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ vpcConfig }}',
'{{ region }}'
RETURNING
test_grid_project
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: test_grid_projects
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the test_grid_projects resource.
    - name: name
      value: "{{ name }}"
      description: |
        Human-readable name of the Selenium testing project.
    - name: description
      value: "{{ description }}"
      description: |
        Human-readable description of the project.
    - name: vpcConfig
      description: |
        The VPC security groups and subnets that are attached to a project.
      value:
        securityGroupIds:
          - "{{ securityGroupIds }}"
        subnetIds:
          - "{{ subnetIds }}"
        vpcId: "{{ vpcId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_test_grid_project"
    values={[
        { label: 'update_test_grid_project', value: 'update_test_grid_project' }
    ]}
>
<TabItem value="update_test_grid_project">

Change details of a project.

```sql
UPDATE aws.devicefarm.test_grid_projects
SET 
projectArn = '{{ projectArn }}',
name = '{{ name }}',
description = '{{ description }}',
vpcConfig = '{{ vpcConfig }}'
WHERE 
region = '{{ region }}' --required
AND projectArn = '{{ projectArn }}' --required
RETURNING
test_grid_project;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_test_grid_project"
    values={[
        { label: 'delete_test_grid_project', value: 'delete_test_grid_project' }
    ]}
>
<TabItem value="delete_test_grid_project">

Deletes a Selenium testing project and all content generated under it. You cannot delete a project if it has active sessions. You cannot undo this operation.

```sql
DELETE FROM aws.devicefarm.test_grid_projects
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
