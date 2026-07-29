--- 
title: import_snapshot_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - import_snapshot_tasks
  - ec2
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

Creates, updates, deletes, gets or lists an <code>import_snapshot_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="import_snapshot_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.import_snapshot_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_import_snapshot_tasks"
    values={[
        { label: 'describe_import_snapshot_tasks', value: 'describe_import_snapshot_tasks' }
    ]}
>
<TabItem value="describe_import_snapshot_tasks">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the import snapshot task.</td>
</tr>
<tr>
    <td><CopyableCode code="import_task_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the import snapshot task.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_task_detail" /></td>
    <td><code>string</code></td>
    <td>Describes an import snapshot task.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags for the import snapshot task.</td>
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
    <td><a href="#describe_import_snapshot_tasks"><CopyableCode code="describe_import_snapshot_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-ImportTaskId"><code>ImportTaskId</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Describes your import snapshot tasks.</td>
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
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>The filters.</td>
</tr>
<tr id="parameter-ImportTaskId">
    <td><CopyableCode code="ImportTaskId" /></td>
    <td><code>array</code></td>
    <td>A list of import snapshot task IDs.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned NextToken value.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_import_snapshot_tasks"
    values={[
        { label: 'describe_import_snapshot_tasks', value: 'describe_import_snapshot_tasks' }
    ]}
>
<TabItem value="describe_import_snapshot_tasks">

Describes your import snapshot tasks.

```sql
SELECT
description,
import_task_id,
snapshot_task_detail,
tags
FROM aws.ec2.import_snapshot_tasks
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Filters = '{{ Filters }}'
AND ImportTaskId = '{{ ImportTaskId }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
