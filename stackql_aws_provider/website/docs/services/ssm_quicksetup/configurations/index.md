--- 
title: configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - configurations
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

Creates, updates, deletes, gets or lists a <code>configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm_quicksetup.configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_configuration"
    values={[
        { label: 'get_configuration', value: 'get_configuration' },
        { label: 'list_configurations', value: 'list_configurations' }
    ]}
>
<TabItem value="get_configuration">

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
    <td><CopyableCode code="account" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account where the configuration was deployed.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_definition_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the configuration definition.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The datetime stamp when the configuration manager was created.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>A service generated identifier for the configuration.</td>
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
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>The parameters for the configuration definition type.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the configuration was deployed.</td>
</tr>
<tr>
    <td><CopyableCode code="status_summaries" /></td>
    <td><code>array</code></td>
    <td>A summary of the state of the configuration manager. This includes deployment statuses, association statuses, drift statuses, health checks, and more.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the Quick Setup configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="type_version" /></td>
    <td><code>string</code></td>
    <td>The version of the Quick Setup type used.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_configurations">

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
    <td><CopyableCode code="account" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account where the configuration was deployed.</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_definition_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the configuration definition.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The datetime stamp when the configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="first_class_parameters" /></td>
    <td><code>object</code></td>
    <td>The common parameters and values for the configuration definition.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>A service generated identifier for the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="manager_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the configuration manager.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the configuration was deployed.</td>
</tr>
<tr>
    <td><CopyableCode code="status_summaries" /></td>
    <td><code>array</code></td>
    <td>A summary of the state of the configuration manager. This includes deployment statuses, association statuses, drift statuses, health checks, and more.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the Quick Setup configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="type_version" /></td>
    <td><code>string</code></td>
    <td>The version of the Quick Setup type used.</td>
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
    <td><a href="#get_configuration"><CopyableCode code="get_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-configuration_id"><code>configuration_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details about the specified configuration.</td>
</tr>
<tr>
    <td><a href="#list_configurations"><CopyableCode code="list_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns configurations deployed by Quick Setup in the requesting Amazon Web Services account and Amazon Web Services Region.</td>
</tr>
<tr>
    <td><a href="#update_configuration_definition"><CopyableCode code="update_configuration_definition" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-manager_arn"><code>manager_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a Quick Setup configuration definition.</td>
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
<tr id="parameter-configuration_id">
    <td><CopyableCode code="configuration_id" /></td>
    <td><code>string</code></td>
    <td>A service generated identifier for the configuration.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the configuration definition you want to update.</td>
</tr>
<tr id="parameter-manager_arn">
    <td><CopyableCode code="manager_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the configuration manager associated with the definition to update.</td>
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
    defaultValue="get_configuration"
    values={[
        { label: 'get_configuration', value: 'get_configuration' },
        { label: 'list_configurations', value: 'list_configurations' }
    ]}
>
<TabItem value="get_configuration">

Returns details about the specified configuration.

```sql
SELECT
account,
configuration_definition_id,
created_at,
id,
last_modified_at,
manager_arn,
parameters,
region,
status_summaries,
type,
type_version
FROM aws.ssm_quicksetup.configurations
WHERE configuration_id = '{{ configuration_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_configurations">

Returns configurations deployed by Quick Setup in the requesting Amazon Web Services account and Amazon Web Services Region.

```sql
SELECT
account,
configuration_definition_id,
created_at,
first_class_parameters,
id,
manager_arn,
region,
status_summaries,
type,
type_version
FROM aws.ssm_quicksetup.configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_configuration_definition"
    values={[
        { label: 'update_configuration_definition', value: 'update_configuration_definition' }
    ]}
>
<TabItem value="update_configuration_definition">

Updates a Quick Setup configuration definition.

```sql
UPDATE aws.ssm_quicksetup.configurations
SET 
LocalDeploymentAdministrationRoleArn = '{{ LocalDeploymentAdministrationRoleArn }}',
LocalDeploymentExecutionRoleName = '{{ LocalDeploymentExecutionRoleName }}',
Parameters = '{{ Parameters }}',
TypeVersion = '{{ TypeVersion }}'
WHERE 
id = '{{ id }}' --required
AND manager_arn = '{{ manager_arn }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
