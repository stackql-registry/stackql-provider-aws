--- 
title: projects
hide_title: false
hide_table_of_contents: false
keywords:
  - projects
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

Creates, updates, deletes, gets or lists a <code>projects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="projects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devicefarm.projects" /></td></tr>
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
    <td>The project's name.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The project's ARN. (pattern: &lt;code&gt;^arn:aws:devicefarm:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the project was created.</td>
</tr>
<tr>
    <td><CopyableCode code="default_job_timeout_minutes" /></td>
    <td><code>integer</code></td>
    <td>The default number of minutes (at the project level) a test run executes before it times out. The default value is 150 minutes.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_variables" /></td>
    <td><code>array</code></td>
    <td>Environment variables associated with the project.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_role_arn" /></td>
    <td><code>string</code></td>
    <td>The IAM execution role associated with the project. (pattern: &lt;code&gt;^arn:aws:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_config" /></td>
    <td><code>object</code></td>
    <td>The VPC security groups and subnets that are attached to a project.</td>
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
    <td>The project's name.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The project's ARN. (pattern: &lt;code&gt;^arn:aws:devicefarm:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the project was created.</td>
</tr>
<tr>
    <td><CopyableCode code="default_job_timeout_minutes" /></td>
    <td><code>integer</code></td>
    <td>The default number of minutes (at the project level) a test run executes before it times out. The default value is 150 minutes.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_variables" /></td>
    <td><code>array</code></td>
    <td>Environment variables associated with the project.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_role_arn" /></td>
    <td><code>string</code></td>
    <td>The IAM execution role associated with the project. (pattern: &lt;code&gt;^arn:aws:iam::&#91;0-9&#93;&#123;12&#125;:role/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_config" /></td>
    <td><code>object</code></td>
    <td>The VPC security groups and subnets that are attached to a project.</td>
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
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a project.</td>
</tr>
<tr>
    <td><a href="#list_projects"><CopyableCode code="list_projects" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about projects.</td>
</tr>
<tr>
    <td><a href="#create_project"><CopyableCode code="create_project" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a project.</td>
</tr>
<tr>
    <td><a href="#update_project"><CopyableCode code="update_project" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a></td>
    <td></td>
    <td>Modifies the specified project name, given the project ARN and a new name.</td>
</tr>
<tr>
    <td><a href="#delete_project"><CopyableCode code="delete_project" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an AWS Device Farm project, given the project ARN. You cannot delete a project if it has an active run or session. You cannot undo this operation.</td>
</tr>
<tr>
    <td><a href="#schedule_run"><CopyableCode code="schedule_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-projectArn"><code>projectArn</code></a>, <a href="#parameter-test"><code>test</code></a></td>
    <td></td>
    <td>Schedules a run.</td>
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
    defaultValue="get_project"
    values={[
        { label: 'get_project', value: 'get_project' },
        { label: 'list_projects', value: 'list_projects' }
    ]}
>
<TabItem value="get_project">

Gets information about a project.

```sql
SELECT
name,
arn,
created,
default_job_timeout_minutes,
environment_variables,
execution_role_arn,
vpc_config
FROM aws.devicefarm.projects
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_projects">

Gets information about projects.

```sql
SELECT
name,
arn,
created,
default_job_timeout_minutes,
environment_variables,
execution_role_arn,
vpc_config
FROM aws.devicefarm.projects
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

Creates a project.

```sql
INSERT INTO aws.devicefarm.projects (
name,
defaultJobTimeoutMinutes,
vpcConfig,
environmentVariables,
executionRoleArn,
region
)
SELECT 
'{{ name }}' /* required */,
{{ defaultJobTimeoutMinutes }},
'{{ vpcConfig }}',
'{{ environmentVariables }}',
'{{ executionRoleArn }}',
'{{ region }}'
RETURNING
project
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
    - name: name
      value: "{{ name }}"
      description: |
        The project's name.
    - name: defaultJobTimeoutMinutes
      value: {{ defaultJobTimeoutMinutes }}
      description: |
        Sets the execution timeout value (in minutes) for a project. All test runs in this project use the specified execution timeout value unless overridden when scheduling a run.
    - name: vpcConfig
      description: |
        The VPC security groups and subnets that are attached to a project.
      value:
        securityGroupIds:
          - "{{ securityGroupIds }}"
        subnetIds:
          - "{{ subnetIds }}"
        vpcId: "{{ vpcId }}"
    - name: environmentVariables
      description: |
        A set of environment variables which are used by default for all runs in the project. These environment variables are applied to the test run during the execution of a test spec file. For more information about using test spec files, please see Custom test environments in AWS Device Farm.
      value:
        - name: "{{ name }}"
          value: "{{ value }}"
    - name: executionRoleArn
      value: "{{ executionRoleArn }}"
      description: |
        An IAM role to be assumed by the test host for all runs in the project.
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

Modifies the specified project name, given the project ARN and a new name.

```sql
UPDATE aws.devicefarm.projects
SET 
arn = '{{ arn }}',
name = '{{ name }}',
defaultJobTimeoutMinutes = {{ defaultJobTimeoutMinutes }},
vpcConfig = '{{ vpcConfig }}',
environmentVariables = '{{ environmentVariables }}',
executionRoleArn = '{{ executionRoleArn }}'
WHERE 
region = '{{ region }}' --required
AND arn = '{{ arn }}' --required
RETURNING
project;
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

Deletes an AWS Device Farm project, given the project ARN. You cannot delete a project if it has an active run or session. You cannot undo this operation.

```sql
DELETE FROM aws.devicefarm.projects
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="schedule_run"
    values={[
        { label: 'schedule_run', value: 'schedule_run' }
    ]}
>
<TabItem value="schedule_run">

Schedules a run.

```sql
EXEC aws.devicefarm.projects.schedule_run 
@region='{{ region }}' --required 
@@json=
'{
"projectArn": "{{ projectArn }}", 
"appArn": "{{ appArn }}", 
"devicePoolArn": "{{ devicePoolArn }}", 
"deviceSelectionConfiguration": "{{ deviceSelectionConfiguration }}", 
"name": "{{ name }}", 
"test": "{{ test }}", 
"configuration": "{{ configuration }}", 
"executionConfiguration": "{{ executionConfiguration }}"
}'
;
```
</TabItem>
</Tabs>
