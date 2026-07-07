--- 
title: environment_managed_action_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - environment_managed_action_histories
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

Creates, updates, deletes, gets or lists an <code>environment_managed_action_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="environment_managed_action_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticbeanstalk.environment_managed_action_histories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_environment_managed_action_history"
    values={[
        { label: 'describe_environment_managed_action_history', value: 'describe_environment_managed_action_history' }
    ]}
>
<TabItem value="describe_environment_managed_action_history">

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
    <td><CopyableCode code="ActionDescription" /></td>
    <td><code>string</code></td>
    <td>A description of the managed action.</td>
</tr>
<tr>
    <td><CopyableCode code="ActionId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the managed action.</td>
</tr>
<tr>
    <td><CopyableCode code="ActionType" /></td>
    <td><code>string</code></td>
    <td>The type of the managed action.</td>
</tr>
<tr>
    <td><CopyableCode code="ExecutedTime" /></td>
    <td><code>string</code></td>
    <td>The date and time that the action started executing.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureDescription" /></td>
    <td><code>string</code></td>
    <td>If the action failed, a description of the failure.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureType" /></td>
    <td><code>string</code></td>
    <td>If the action failed, the type of failure.</td>
</tr>
<tr>
    <td><CopyableCode code="FinishedTime" /></td>
    <td><code>string</code></td>
    <td>The date and time that the action finished executing.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the action.</td>
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
    <td><a href="#describe_environment_managed_action_history"><CopyableCode code="describe_environment_managed_action_history" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-EnvironmentId"><code>EnvironmentId</code></a>, <a href="#parameter-EnvironmentName"><code>EnvironmentName</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Lists an environment's completed and failed managed actions.</td>
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
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for a single request.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token returned by a previous request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_environment_managed_action_history"
    values={[
        { label: 'describe_environment_managed_action_history', value: 'describe_environment_managed_action_history' }
    ]}
>
<TabItem value="describe_environment_managed_action_history">

Lists an environment's completed and failed managed actions.

```sql
SELECT
ActionDescription,
ActionId,
ActionType,
ExecutedTime,
FailureDescription,
FailureType,
FinishedTime,
Status
FROM aws.elasticbeanstalk.environment_managed_action_histories
WHERE region = '{{ region }}' -- required
AND EnvironmentId = '{{ EnvironmentId }}'
AND EnvironmentName = '{{ EnvironmentName }}'
AND NextToken = '{{ NextToken }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>
