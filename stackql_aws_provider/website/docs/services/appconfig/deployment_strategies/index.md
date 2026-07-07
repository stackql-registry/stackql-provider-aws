--- 
title: deployment_strategies
hide_title: false
hide_table_of_contents: false
keywords:
  - deployment_strategies
  - appconfig
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

Creates, updates, deletes, gets or lists a <code>deployment_strategies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="deployment_strategies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appconfig.deployment_strategies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_deployment_strategy"
    values={[
        { label: 'get_deployment_strategy', value: 'get_deployment_strategy' },
        { label: 'list_deployment_strategies', value: 'list_deployment_strategies' }
    ]}
>
<TabItem value="get_deployment_strategy">

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
    <td><CopyableCode code="DeploymentDurationInMinutes" /></td>
    <td><code>integer</code></td>
    <td>Total amount of time the deployment lasted.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the deployment strategy.</td>
</tr>
<tr>
    <td><CopyableCode code="FinalBakeTimeInMinutes" /></td>
    <td><code>integer</code></td>
    <td>The amount of time that AppConfig monitored for alarms before considering the deployment to be complete and no longer eligible for automatic rollback.</td>
</tr>
<tr>
    <td><CopyableCode code="GrowthFactor" /></td>
    <td><code>number (float)</code></td>
    <td>The percentage of targets that received a deployed configuration during each interval.</td>
</tr>
<tr>
    <td><CopyableCode code="GrowthType" /></td>
    <td><code>string</code></td>
    <td>The algorithm used to define how percentage grew over time. (LINEAR, EXPONENTIAL)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The deployment strategy ID. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the deployment strategy.</td>
</tr>
<tr>
    <td><CopyableCode code="ReplicateTo" /></td>
    <td><code>string</code></td>
    <td>Save the deployment strategy to a Systems Manager (SSM) document. (NONE, SSM_DOCUMENT)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_deployment_strategies">

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
    <td><CopyableCode code="DeploymentDurationInMinutes" /></td>
    <td><code>integer</code></td>
    <td>Total amount of time the deployment lasted.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the deployment strategy.</td>
</tr>
<tr>
    <td><CopyableCode code="FinalBakeTimeInMinutes" /></td>
    <td><code>integer</code></td>
    <td>The amount of time that AppConfig monitored for alarms before considering the deployment to be complete and no longer eligible for automatic rollback.</td>
</tr>
<tr>
    <td><CopyableCode code="GrowthFactor" /></td>
    <td><code>number (float)</code></td>
    <td>The percentage of targets that received a deployed configuration during each interval.</td>
</tr>
<tr>
    <td><CopyableCode code="GrowthType" /></td>
    <td><code>string</code></td>
    <td>The algorithm used to define how percentage grew over time. (LINEAR, EXPONENTIAL)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The deployment strategy ID. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;4,7&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the deployment strategy.</td>
</tr>
<tr>
    <td><CopyableCode code="ReplicateTo" /></td>
    <td><code>string</code></td>
    <td>Save the deployment strategy to a Systems Manager (SSM) document. (NONE, SSM_DOCUMENT)</td>
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
    <td><a href="#get_deployment_strategy"><CopyableCode code="get_deployment_strategy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-deployment_strategy_id"><code>deployment_strategy_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a deployment strategy. A deployment strategy defines important criteria for rolling out your configuration to the designated targets. A deployment strategy includes the overall duration required, a percentage of targets to receive the deployment during each interval, an algorithm that defines how percentage grows, and bake time.</td>
</tr>
<tr>
    <td><a href="#list_deployment_strategies"><CopyableCode code="list_deployment_strategies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max_results"><code>max_results</code></a>, <a href="#parameter-next_token"><code>next_token</code></a></td>
    <td>Lists deployment strategies.</td>
</tr>
<tr>
    <td><a href="#create_deployment_strategy"><CopyableCode code="create_deployment_strategy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DeploymentDurationInMinutes"><code>DeploymentDurationInMinutes</code></a>, <a href="#parameter-GrowthFactor"><code>GrowthFactor</code></a></td>
    <td></td>
    <td>Creates a deployment strategy that defines important criteria for rolling out your configuration to the designated targets. A deployment strategy includes the overall duration required, a percentage of targets to receive the deployment during each interval, an algorithm that defines how percentage grows, and bake time.</td>
</tr>
<tr>
    <td><a href="#update_deployment_strategy"><CopyableCode code="update_deployment_strategy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-deployment_strategy_id"><code>deployment_strategy_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a deployment strategy.</td>
</tr>
<tr>
    <td><a href="#delete_deployment_strategy"><CopyableCode code="delete_deployment_strategy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-deployment_strategy_id"><code>deployment_strategy_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a deployment strategy.</td>
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
<tr id="parameter-deployment_strategy_id">
    <td><CopyableCode code="deployment_strategy_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the deployment strategy you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max_results">
    <td><CopyableCode code="max_results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.</td>
</tr>
<tr id="parameter-next_token">
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token to start the list. Use this token to get the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_deployment_strategy"
    values={[
        { label: 'get_deployment_strategy', value: 'get_deployment_strategy' },
        { label: 'list_deployment_strategies', value: 'list_deployment_strategies' }
    ]}
>
<TabItem value="get_deployment_strategy">

Retrieves information about a deployment strategy. A deployment strategy defines important criteria for rolling out your configuration to the designated targets. A deployment strategy includes the overall duration required, a percentage of targets to receive the deployment during each interval, an algorithm that defines how percentage grows, and bake time.

```sql
SELECT
DeploymentDurationInMinutes,
Description,
FinalBakeTimeInMinutes,
GrowthFactor,
GrowthType,
Id,
Name,
ReplicateTo
FROM aws.appconfig.deployment_strategies
WHERE deployment_strategy_id = '{{ deployment_strategy_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_deployment_strategies">

Lists deployment strategies.

```sql
SELECT
DeploymentDurationInMinutes,
Description,
FinalBakeTimeInMinutes,
GrowthFactor,
GrowthType,
Id,
Name,
ReplicateTo
FROM aws.appconfig.deployment_strategies
WHERE region = '{{ region }}' -- required
AND max_results = '{{ max_results }}'
AND next_token = '{{ next_token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_deployment_strategy"
    values={[
        { label: 'create_deployment_strategy', value: 'create_deployment_strategy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_deployment_strategy">

Creates a deployment strategy that defines important criteria for rolling out your configuration to the designated targets. A deployment strategy includes the overall duration required, a percentage of targets to receive the deployment during each interval, an algorithm that defines how percentage grows, and bake time.

```sql
INSERT INTO aws.appconfig.deployment_strategies (
Name,
Description,
DeploymentDurationInMinutes,
FinalBakeTimeInMinutes,
GrowthFactor,
GrowthType,
ReplicateTo,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
{{ DeploymentDurationInMinutes }} /* required */,
{{ FinalBakeTimeInMinutes }},
{{ GrowthFactor }} /* required */,
'{{ GrowthType }}',
'{{ ReplicateTo }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
DeploymentDurationInMinutes,
Description,
FinalBakeTimeInMinutes,
GrowthFactor,
GrowthType,
Id,
Name,
ReplicateTo
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: deployment_strategies
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the deployment_strategies resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: DeploymentDurationInMinutes
      value: {{ DeploymentDurationInMinutes }}
    - name: FinalBakeTimeInMinutes
      value: {{ FinalBakeTimeInMinutes }}
    - name: GrowthFactor
      value: {{ GrowthFactor }}
    - name: GrowthType
      value: "{{ GrowthType }}"
      valid_values: ['LINEAR', 'EXPONENTIAL']
    - name: ReplicateTo
      value: "{{ ReplicateTo }}"
      valid_values: ['NONE', 'SSM_DOCUMENT']
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_deployment_strategy"
    values={[
        { label: 'update_deployment_strategy', value: 'update_deployment_strategy' }
    ]}
>
<TabItem value="update_deployment_strategy">

Updates a deployment strategy.

```sql
UPDATE aws.appconfig.deployment_strategies
SET 
Description = '{{ Description }}',
DeploymentDurationInMinutes = {{ DeploymentDurationInMinutes }},
FinalBakeTimeInMinutes = {{ FinalBakeTimeInMinutes }},
GrowthFactor = {{ GrowthFactor }},
GrowthType = '{{ GrowthType }}'
WHERE 
deployment_strategy_id = '{{ deployment_strategy_id }}' --required
AND region = '{{ region }}' --required
RETURNING
DeploymentDurationInMinutes,
Description,
FinalBakeTimeInMinutes,
GrowthFactor,
GrowthType,
Id,
Name,
ReplicateTo;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_deployment_strategy"
    values={[
        { label: 'delete_deployment_strategy', value: 'delete_deployment_strategy' }
    ]}
>
<TabItem value="delete_deployment_strategy">

Deletes a deployment strategy.

```sql
DELETE FROM aws.appconfig.deployment_strategies
WHERE deployment_strategy_id = '{{ deployment_strategy_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
