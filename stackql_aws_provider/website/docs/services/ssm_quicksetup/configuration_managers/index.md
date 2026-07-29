--- 
title: configuration_managers
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_managers
  - ssm_quicksetup
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

Creates, updates, deletes, gets or lists a <code>configuration_managers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configuration_managers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm_quicksetup.configuration_managers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_configuration_manager"
    values={[
        { label: 'get_configuration_manager', value: 'get_configuration_manager' },
        { label: 'list_configuration_managers', value: 'list_configuration_managers' }
    ]}
>
<TabItem value="get_configuration_manager">

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
    <td><CopyableCode code="configuration_definitions" /></td>
    <td><code>array</code></td>
    <td>The configuration definitions association with the configuration manager.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The datetime stamp when the configuration manager was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the configuration manager.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The datetime stamp when the configuration manager was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="manager_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the configuration manager.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the configuration manager.</td>
</tr>
<tr>
    <td><CopyableCode code="status_summaries" /></td>
    <td><code>array</code></td>
    <td>A summary of the state of the configuration manager. This includes deployment statuses, association statuses, drift statuses, health checks, and more.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Key-value pairs of metadata to assign to the configuration manager.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_configuration_managers">

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
    <td><CopyableCode code="configuration_definition_summaries" /></td>
    <td><code>array</code></td>
    <td>A summary of the Quick Setup configuration definition.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="manager_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Quick Setup configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the configuration</td>
</tr>
<tr>
    <td><CopyableCode code="status_summaries" /></td>
    <td><code>array</code></td>
    <td>Summaries of the state of the configuration manager. These summaries include an aggregate of the statuses from the configuration definition associated with the configuration manager. This includes deployment statuses, association statuses, drift statuses, health checks, and more.</td>
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
    <td><a href="#get_configuration_manager"><CopyableCode code="get_configuration_manager" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-manager_arn"><code>manager_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a configuration manager.</td>
</tr>
<tr>
    <td><a href="#list_configuration_managers"><CopyableCode code="list_configuration_managers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns Quick Setup configuration managers.</td>
</tr>
<tr>
    <td><a href="#create_configuration_manager"><CopyableCode code="create_configuration_manager" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConfigurationDefinitions"><code>ConfigurationDefinitions</code></a></td>
    <td></td>
    <td>Creates a Quick Setup configuration manager resource. This object is a collection of desired state configurations for multiple configuration definitions and summaries describing the deployments of those definitions.</td>
</tr>
<tr>
    <td><a href="#update_configuration_manager"><CopyableCode code="update_configuration_manager" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-manager_arn"><code>manager_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a Quick Setup configuration manager.</td>
</tr>
<tr>
    <td><a href="#delete_configuration_manager"><CopyableCode code="delete_configuration_manager" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-manager_arn"><code>manager_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a configuration manager.</td>
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
<tr id="parameter-manager_arn">
    <td><CopyableCode code="manager_arn" /></td>
    <td><code>string</code></td>
    <td>The ID of the configuration manager.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_configuration_manager"
    values={[
        { label: 'get_configuration_manager', value: 'get_configuration_manager' },
        { label: 'list_configuration_managers', value: 'list_configuration_managers' }
    ]}
>
<TabItem value="get_configuration_manager">

Returns a configuration manager.

```sql
SELECT
configuration_definitions,
created_at,
description,
last_modified_at,
manager_arn,
name,
status_summaries,
tags
FROM aws.ssm_quicksetup.configuration_managers
WHERE manager_arn = '{{ manager_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_configuration_managers">

Returns Quick Setup configuration managers.

```sql
SELECT
configuration_definition_summaries,
description,
manager_arn,
name,
status_summaries
FROM aws.ssm_quicksetup.configuration_managers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_configuration_manager"
    values={[
        { label: 'create_configuration_manager', value: 'create_configuration_manager' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_configuration_manager">

Creates a Quick Setup configuration manager resource. This object is a collection of desired state configurations for multiple configuration definitions and summaries describing the deployments of those definitions.

```sql
INSERT INTO aws.ssm_quicksetup.configuration_managers (
ConfigurationDefinitions,
Description,
Name,
Tags,
region
)
SELECT 
'{{ ConfigurationDefinitions }}' /* required */,
'{{ Description }}',
'{{ Name }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
manager_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: configuration_managers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the configuration_managers resource.
    - name: ConfigurationDefinitions
      value:
        - LocalDeploymentAdministrationRoleArn: "{{ LocalDeploymentAdministrationRoleArn }}"
          LocalDeploymentExecutionRoleName: "{{ LocalDeploymentExecutionRoleName }}"
          Parameters: "{{ Parameters }}"
          Type: "{{ Type }}"
          TypeVersion: "{{ TypeVersion }}"
    - name: Description
      value: "{{ Description }}"
    - name: Name
      value: "{{ Name }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_configuration_manager"
    values={[
        { label: 'update_configuration_manager', value: 'update_configuration_manager' }
    ]}
>
<TabItem value="update_configuration_manager">

Updates a Quick Setup configuration manager.

```sql
UPDATE aws.ssm_quicksetup.configuration_managers
SET 
Description = '{{ Description }}',
Name = '{{ Name }}'
WHERE 
manager_arn = '{{ manager_arn }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_configuration_manager"
    values={[
        { label: 'delete_configuration_manager', value: 'delete_configuration_manager' }
    ]}
>
<TabItem value="delete_configuration_manager">

Deletes a configuration manager.

```sql
DELETE FROM aws.ssm_quicksetup.configuration_managers
WHERE manager_arn = '{{ manager_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
