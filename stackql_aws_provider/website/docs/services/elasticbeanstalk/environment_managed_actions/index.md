--- 
title: environment_managed_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - environment_managed_actions
  - elasticbeanstalk
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

Creates, updates, deletes, gets or lists an <code>environment_managed_actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="environment_managed_actions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticbeanstalk.environment_managed_actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_environment_managed_actions"
    values={[
        { label: 'describe_environment_managed_actions', value: 'describe_environment_managed_actions' }
    ]}
>
<TabItem value="describe_environment_managed_actions">

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
    <td><CopyableCode code="action_description" /></td>
    <td><code>string</code></td>
    <td>A description of the managed action.</td>
</tr>
<tr>
    <td><CopyableCode code="action_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the managed action.</td>
</tr>
<tr>
    <td><CopyableCode code="action_type" /></td>
    <td><code>string</code></td>
    <td>The type of managed action.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the managed action. If the action is Scheduled, you can apply it immediately with ApplyEnvironmentManagedAction.</td>
</tr>
<tr>
    <td><CopyableCode code="window_start_time" /></td>
    <td><code>string</code></td>
    <td>The start time of the maintenance window in which the managed action will execute.</td>
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
    <td><a href="#describe_environment_managed_actions"><CopyableCode code="describe_environment_managed_actions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-EnvironmentName"><code>EnvironmentName</code></a>, <a href="#parameter-EnvironmentId"><code>EnvironmentId</code></a>, <a href="#parameter-Status"><code>Status</code></a></td>
    <td>Lists an environment's upcoming and in-progress managed actions. This action only returns information about environments that the calling principle has IAM permissions to access. For example, consider a case where a user only has permission to access one of three environments. When the user calls this action, the response will only include the one environment that the user has permission to access instead of all three environments. If the user doesn’t have access to any of the environments an empty result is returned. The AWSElasticBeanstalkReadOnly managed policy allows operators to view information about resources related to Elastic Beanstalk environments. For more information, see Managing Elastic Beanstalk user policies in the Elastic Beanstalk Developer Guide. For detailed instructions to attach a policy to a user or group, see the section Controlling access with managed policies in the same topic.</td>
</tr>
<tr>
    <td><a href="#apply_environment_managed_action"><CopyableCode code="apply_environment_managed_action" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ActionId"><code>ActionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-EnvironmentName"><code>EnvironmentName</code></a>, <a href="#parameter-EnvironmentId"><code>EnvironmentId</code></a></td>
    <td>Applies a scheduled managed action immediately. A managed action can be applied only if its status is Scheduled. Get the status and action ID of a managed action with DescribeEnvironmentManagedActions.</td>
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
<tr id="parameter-ActionId">
    <td><CopyableCode code="ActionId" /></td>
    <td><code>string</code></td>
    <td>The action ID of the scheduled managed action to execute.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-EnvironmentId">
    <td><CopyableCode code="EnvironmentId" /></td>
    <td><code>string</code></td>
    <td>The environment ID of the target environment.</td>
</tr>
<tr id="parameter-EnvironmentName">
    <td><CopyableCode code="EnvironmentName" /></td>
    <td><code>string</code></td>
    <td>The name of the target environment.</td>
</tr>
<tr id="parameter-Status">
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>To show only actions with a particular status, specify a status.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_environment_managed_actions"
    values={[
        { label: 'describe_environment_managed_actions', value: 'describe_environment_managed_actions' }
    ]}
>
<TabItem value="describe_environment_managed_actions">

Lists an environment's upcoming and in-progress managed actions. This action only returns information about environments that the calling principle has IAM permissions to access. For example, consider a case where a user only has permission to access one of three environments. When the user calls this action, the response will only include the one environment that the user has permission to access instead of all three environments. If the user doesn’t have access to any of the environments an empty result is returned. The AWSElasticBeanstalkReadOnly managed policy allows operators to view information about resources related to Elastic Beanstalk environments. For more information, see Managing Elastic Beanstalk user policies in the Elastic Beanstalk Developer Guide. For detailed instructions to attach a policy to a user or group, see the section Controlling access with managed policies in the same topic.

```sql
SELECT
action_description,
action_id,
action_type,
status,
window_start_time
FROM aws.elasticbeanstalk.environment_managed_actions
WHERE region = '{{ region }}' -- required
AND EnvironmentName = '{{ EnvironmentName }}'
AND EnvironmentId = '{{ EnvironmentId }}'
AND Status = '{{ Status }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="apply_environment_managed_action"
    values={[
        { label: 'apply_environment_managed_action', value: 'apply_environment_managed_action' }
    ]}
>
<TabItem value="apply_environment_managed_action">

Applies a scheduled managed action immediately. A managed action can be applied only if its status is Scheduled. Get the status and action ID of a managed action with DescribeEnvironmentManagedActions.

```sql
EXEC aws.elasticbeanstalk.environment_managed_actions.apply_environment_managed_action 
@ActionId='{{ ActionId }}' --required, 
@region='{{ region }}' --required, 
@EnvironmentName='{{ EnvironmentName }}', 
@EnvironmentId='{{ EnvironmentId }}'
;
```
</TabItem>
</Tabs>
