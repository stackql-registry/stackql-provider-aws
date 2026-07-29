--- 
title: resource_grouping_recommendation_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_grouping_recommendation_tasks
  - resiliencehub
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

Creates, updates, deletes, gets or lists a <code>resource_grouping_recommendation_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_grouping_recommendation_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehub.resource_grouping_recommendation_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_resource_grouping_recommendation_task"
    values={[
        { label: 'describe_resource_grouping_recommendation_task', value: 'describe_resource_grouping_recommendation_task' }
    ]}
>
<TabItem value="describe_resource_grouping_recommendation_task">

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
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>Error that occurred while generating a grouping recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="grouping_id" /></td>
    <td><code>string</code></td>
    <td>Identifier of the grouping recommendation task.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the action. (Pending, InProgress, Failed, Success)</td>
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
    <td><a href="#describe_resource_grouping_recommendation_task"><CopyableCode code="describe_resource_grouping_recommendation_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the resource grouping recommendation tasks run by Resilience Hub for your application.</td>
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
    defaultValue="describe_resource_grouping_recommendation_task"
    values={[
        { label: 'describe_resource_grouping_recommendation_task', value: 'describe_resource_grouping_recommendation_task' }
    ]}
>
<TabItem value="describe_resource_grouping_recommendation_task">

Describes the resource grouping recommendation tasks run by Resilience Hub for your application.

```sql
SELECT
error_message,
grouping_id,
status
FROM aws.resiliencehub.resource_grouping_recommendation_tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
