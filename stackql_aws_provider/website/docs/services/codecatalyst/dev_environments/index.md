--- 
title: dev_environments
hide_title: false
hide_table_of_contents: false
keywords:
  - dev_environments
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

Creates, updates, deletes, gets or lists a <code>dev_environments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dev_environments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codecatalyst.dev_environments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_dev_environment"
    values={[
        { label: 'get_dev_environment', value: 'get_dev_environment' },
        { label: 'list_dev_environments', value: 'list_dev_environments' }
    ]}
>
<TabItem value="get_dev_environment">

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
    <td>The system-generated unique ID of the Dev Environment. (pattern: &lt;code&gt;&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>The user-specified alias for the Dev Environment.</td>
</tr>
<tr>
    <td><CopyableCode code="creatorId" /></td>
    <td><code>string</code></td>
    <td>The system-generated unique ID of the user who created the Dev Environment.</td>
</tr>
<tr>
    <td><CopyableCode code="ides" /></td>
    <td><code>array</code></td>
    <td>Information about the integrated development environment (IDE) configured for the Dev Environment.</td>
</tr>
<tr>
    <td><CopyableCode code="inactivityTimeoutMinutes" /></td>
    <td><code>integer</code></td>
    <td>The amount of time the Dev Environment will run without any activity detected before stopping, in minutes.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceType" /></td>
    <td><code>string</code></td>
    <td>The Amazon EC2 instace type to use for the Dev Environment. (dev.standard1.small, dev.standard1.medium, dev.standard1.large, dev.standard1.xlarge)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the Dev Environment was last updated, in coordinated universal time (UTC) timestamp format as specified in RFC 3339.</td>
</tr>
<tr>
    <td><CopyableCode code="persistentStorage" /></td>
    <td><code>object</code></td>
    <td>Information about the amount of storage allocated to the Dev Environment. By default, a Dev Environment is configured to have 16GB of persistent storage.</td>
</tr>
<tr>
    <td><CopyableCode code="projectName" /></td>
    <td><code>string</code></td>
    <td>The name of the project in the space. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+(?:&#91;-_\.&#93;&#91;a-zA-Z0-9&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="repositories" /></td>
    <td><code>array</code></td>
    <td>The source repository that contains the branch cloned into the Dev Environment.</td>
</tr>
<tr>
    <td><CopyableCode code="spaceName" /></td>
    <td><code>string</code></td>
    <td>The name of the space. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+(?:&#91;-_\.&#93;&#91;a-zA-Z0-9&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the Dev Environment. (PENDING, RUNNING, STARTING, STOPPING, STOPPED, FAILED, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the status.</td>
</tr>
<tr>
    <td><CopyableCode code="vpcConnectionName" /></td>
    <td><code>string</code></td>
    <td>The name of the connection used to connect to Amazon VPC used when the Dev Environment was created, if any. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+(?:&#91;-_\.&#93;&#91;a-zA-Z0-9&#93;+)*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_dev_environments">

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
    <td>The system-generated unique ID for the Dev Environment. (pattern: &lt;code&gt;&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>The user-specified alias for the Dev Environment.</td>
</tr>
<tr>
    <td><CopyableCode code="creatorId" /></td>
    <td><code>string</code></td>
    <td>The system-generated unique ID of the user who created the Dev Environment.</td>
</tr>
<tr>
    <td><CopyableCode code="ides" /></td>
    <td><code>array</code></td>
    <td>Information about the integrated development environment (IDE) configured for a Dev Environment.</td>
</tr>
<tr>
    <td><CopyableCode code="inactivityTimeoutMinutes" /></td>
    <td><code>integer</code></td>
    <td>The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. Dev Environments consume compute minutes when running.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceType" /></td>
    <td><code>string</code></td>
    <td>The Amazon EC2 instace type used for the Dev Environment. (dev.standard1.small, dev.standard1.medium, dev.standard1.large, dev.standard1.xlarge)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the Dev Environment was last updated, in coordinated universal time (UTC) timestamp format as specified in RFC 3339.</td>
</tr>
<tr>
    <td><CopyableCode code="persistentStorage" /></td>
    <td><code>object</code></td>
    <td>Information about the configuration of persistent storage for the Dev Environment.</td>
</tr>
<tr>
    <td><CopyableCode code="projectName" /></td>
    <td><code>string</code></td>
    <td>The name of the project in the space. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+(?:&#91;-_\.&#93;&#91;a-zA-Z0-9&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="repositories" /></td>
    <td><code>array</code></td>
    <td>Information about the repositories that will be cloned into the Dev Environment. If no rvalue is specified, no repository is cloned.</td>
</tr>
<tr>
    <td><CopyableCode code="spaceName" /></td>
    <td><code>string</code></td>
    <td>The name of the space. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+(?:&#91;-_\.&#93;&#91;a-zA-Z0-9&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the Dev Environment. (PENDING, RUNNING, STARTING, STOPPING, STOPPED, FAILED, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the status.</td>
</tr>
<tr>
    <td><CopyableCode code="vpcConnectionName" /></td>
    <td><code>string</code></td>
    <td>The name of the connection used to connect to Amazon VPC used when the Dev Environment was created, if any. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+(?:&#91;-_\.&#93;&#91;a-zA-Z0-9&#93;+)*&lt;/code&gt;)</td>
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
    <td><a href="#get_dev_environment"><CopyableCode code="get_dev_environment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-space_name"><code>space_name</code></a>, <a href="#parameter-project_name"><code>project_name</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a Dev Environment for a source repository in a project. Dev Environments are specific to the user who creates them.</td>
</tr>
<tr>
    <td><a href="#list_dev_environments"><CopyableCode code="list_dev_environments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-space_name"><code>space_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of Dev Environments in a project.</td>
</tr>
<tr>
    <td><a href="#create_dev_environment"><CopyableCode code="create_dev_environment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-space_name"><code>space_name</code></a>, <a href="#parameter-project_name"><code>project_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-instanceType"><code>instanceType</code></a>, <a href="#parameter-persistentStorage"><code>persistentStorage</code></a></td>
    <td></td>
    <td>Creates a Dev Environment in Amazon CodeCatalyst, a cloud-based development environment that you can use to quickly work on the code stored in the source repositories of your project. When created in the Amazon CodeCatalyst console, by default a Dev Environment is configured to have a 2 core processor, 4GB of RAM, and 16GB of persistent storage. None of these defaults apply to a Dev Environment created programmatically.</td>
</tr>
<tr>
    <td><a href="#update_dev_environment"><CopyableCode code="update_dev_environment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-space_name"><code>space_name</code></a>, <a href="#parameter-project_name"><code>project_name</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Changes one or more values for a Dev Environment. Updating certain values of the Dev Environment will cause a restart.</td>
</tr>
<tr>
    <td><a href="#delete_dev_environment"><CopyableCode code="delete_dev_environment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-space_name"><code>space_name</code></a>, <a href="#parameter-project_name"><code>project_name</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Dev Environment.</td>
</tr>
<tr>
    <td><a href="#start_dev_environment_session"><CopyableCode code="start_dev_environment_session" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-space_name"><code>space_name</code></a>, <a href="#parameter-project_name"><code>project_name</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sessionConfiguration"><code>sessionConfiguration</code></a></td>
    <td></td>
    <td>Starts a session for a specified Dev Environment.</td>
</tr>
<tr>
    <td><a href="#stop_dev_environment_session"><CopyableCode code="stop_dev_environment_session" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-space_name"><code>space_name</code></a>, <a href="#parameter-project_name"><code>project_name</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-session_id"><code>session_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops a session for a specified Dev Environment.</td>
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
    <td>The system-generated unique ID of the Dev Environment. To obtain this ID, use ListDevEnvironments.</td>
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
<tr id="parameter-session_id">
    <td><CopyableCode code="session_id" /></td>
    <td><code>string</code></td>
    <td>The system-generated unique ID of the Dev Environment session. This ID is returned by StartDevEnvironmentSession.</td>
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
    defaultValue="get_dev_environment"
    values={[
        { label: 'get_dev_environment', value: 'get_dev_environment' },
        { label: 'list_dev_environments', value: 'list_dev_environments' }
    ]}
>
<TabItem value="get_dev_environment">

Returns information about a Dev Environment for a source repository in a project. Dev Environments are specific to the user who creates them.

```sql
SELECT
id,
alias,
creatorId,
ides,
inactivityTimeoutMinutes,
instanceType,
lastUpdatedTime,
persistentStorage,
projectName,
repositories,
spaceName,
status,
statusReason,
vpcConnectionName
FROM aws.codecatalyst.dev_environments
WHERE space_name = '{{ space_name }}' -- required
AND project_name = '{{ project_name }}' -- required
AND id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_dev_environments">

Retrieves a list of Dev Environments in a project.

```sql
SELECT
id,
alias,
creatorId,
ides,
inactivityTimeoutMinutes,
instanceType,
lastUpdatedTime,
persistentStorage,
projectName,
repositories,
spaceName,
status,
statusReason,
vpcConnectionName
FROM aws.codecatalyst.dev_environments
WHERE space_name = '{{ space_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_dev_environment"
    values={[
        { label: 'create_dev_environment', value: 'create_dev_environment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_dev_environment">

Creates a Dev Environment in Amazon CodeCatalyst, a cloud-based development environment that you can use to quickly work on the code stored in the source repositories of your project. When created in the Amazon CodeCatalyst console, by default a Dev Environment is configured to have a 2 core processor, 4GB of RAM, and 16GB of persistent storage. None of these defaults apply to a Dev Environment created programmatically.

```sql
INSERT INTO aws.codecatalyst.dev_environments (
repositories,
clientToken,
alias,
ides,
instanceType,
inactivityTimeoutMinutes,
persistentStorage,
vpcConnectionName,
space_name,
project_name,
region
)
SELECT 
'{{ repositories }}',
'{{ clientToken }}',
'{{ alias }}',
'{{ ides }}',
'{{ instanceType }}' /* required */,
{{ inactivityTimeoutMinutes }},
'{{ persistentStorage }}' /* required */,
'{{ vpcConnectionName }}',
'{{ space_name }}',
'{{ project_name }}',
'{{ region }}'
RETURNING
id,
projectName,
spaceName,
vpcConnectionName
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: dev_environments
  props:
    - name: space_name
      value: "{{ space_name }}"
      description: Required parameter for the dev_environments resource.
    - name: project_name
      value: "{{ project_name }}"
      description: Required parameter for the dev_environments resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the dev_environments resource.
    - name: repositories
      value:
        - repositoryName: "{{ repositoryName }}"
          branchName: "{{ branchName }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: alias
      value: "{{ alias }}"
    - name: ides
      value:
        - runtime: "{{ runtime }}"
          name: "{{ name }}"
    - name: instanceType
      value: "{{ instanceType }}"
      valid_values: ['dev.standard1.small', 'dev.standard1.medium', 'dev.standard1.large', 'dev.standard1.xlarge']
    - name: inactivityTimeoutMinutes
      value: {{ inactivityTimeoutMinutes }}
    - name: persistentStorage
      description: |
        Information about the configuration of persistent storage for a Dev Environment.
      value:
        sizeInGiB: {{ sizeInGiB }}
    - name: vpcConnectionName
      value: "{{ vpcConnectionName }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_dev_environment"
    values={[
        { label: 'update_dev_environment', value: 'update_dev_environment' }
    ]}
>
<TabItem value="update_dev_environment">

Changes one or more values for a Dev Environment. Updating certain values of the Dev Environment will cause a restart.

```sql
UPDATE aws.codecatalyst.dev_environments
SET 
alias = '{{ alias }}',
ides = '{{ ides }}',
instanceType = '{{ instanceType }}',
inactivityTimeoutMinutes = {{ inactivityTimeoutMinutes }},
clientToken = '{{ clientToken }}'
WHERE 
space_name = '{{ space_name }}' --required
AND project_name = '{{ project_name }}' --required
AND id = '{{ id }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
alias,
clientToken,
ides,
inactivityTimeoutMinutes,
instanceType,
projectName,
spaceName;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_dev_environment"
    values={[
        { label: 'delete_dev_environment', value: 'delete_dev_environment' }
    ]}
>
<TabItem value="delete_dev_environment">

Deletes a Dev Environment.

```sql
DELETE FROM aws.codecatalyst.dev_environments
WHERE space_name = '{{ space_name }}' --required
AND project_name = '{{ project_name }}' --required
AND id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_dev_environment_session"
    values={[
        { label: 'start_dev_environment_session', value: 'start_dev_environment_session' },
        { label: 'stop_dev_environment_session', value: 'stop_dev_environment_session' }
    ]}
>
<TabItem value="start_dev_environment_session">

Starts a session for a specified Dev Environment.

```sql
EXEC aws.codecatalyst.dev_environments.start_dev_environment_session 
@space_name='{{ space_name }}' --required, 
@project_name='{{ project_name }}' --required, 
@id='{{ id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"sessionConfiguration": "{{ sessionConfiguration }}"
}'
;
```
</TabItem>
<TabItem value="stop_dev_environment_session">

Stops a session for a specified Dev Environment.

```sql
EXEC aws.codecatalyst.dev_environments.stop_dev_environment_session 
@space_name='{{ space_name }}' --required, 
@project_name='{{ project_name }}' --required, 
@id='{{ id }}' --required, 
@session_id='{{ session_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
