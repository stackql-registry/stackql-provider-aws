--- 
title: bundle_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - bundle_tasks
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

Creates, updates, deletes, gets or lists a <code>bundle_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bundle_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.bundle_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_bundle_tasks"
    values={[
        { label: 'describe_bundle_tasks', value: 'describe_bundle_tasks' }
    ]}
>
<TabItem value="describe_bundle_tasks">

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
    <td><CopyableCode code="BundleId" /></td>
    <td><code>string</code></td>
    <td>The ID of the bundle task.</td>
</tr>
<tr>
    <td><CopyableCode code="BundleTaskError" /></td>
    <td><code>string</code></td>
    <td>If the task fails, a description of the error.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance associated with this bundle task.</td>
</tr>
<tr>
    <td><CopyableCode code="Progress" /></td>
    <td><code>string</code></td>
    <td>The level of task completion, as a percent (for example, 20%).</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string</code></td>
    <td>The time this task started.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the task.</td>
</tr>
<tr>
    <td><CopyableCode code="Storage" /></td>
    <td><code>string</code></td>
    <td>The Amazon S3 storage locations.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdateTime" /></td>
    <td><code>string</code></td>
    <td>The time of the most recent update for the task.</td>
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
    <td><a href="#describe_bundle_tasks"><CopyableCode code="describe_bundle_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-BundleId"><code>BundleId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a></td>
    <td>Describes the specified bundle tasks or all of your bundle tasks. Completed bundle tasks are listed for only a limited time. If your bundle task is no longer in the list, you can still register an AMI from it. Just use RegisterImage with the Amazon S3 bucket name and image manifest name you provided to the bundle task. The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.</td>
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
<tr id="parameter-BundleId">
    <td><CopyableCode code="BundleId" /></td>
    <td><code>array</code></td>
    <td>The bundle task IDs. Default: Describes all your bundle tasks.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. bundle-id - The ID of the bundle task. error-code - If the task failed, the error code returned. error-message - If the task failed, the error message returned. instance-id - The ID of the instance. progress - The level of task completion, as a percentage (for example, 20%). s3-bucket - The Amazon S3 bucket to store the AMI. s3-prefix - The beginning of the AMI name. start-time - The time the task started (for example, 2013-09-15T17:15:20.000Z). state - The state of the task (pending | waiting-for-shutdown | bundling | storing | cancelling | complete | failed). update-time - The time of the most recent update for the task.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_bundle_tasks"
    values={[
        { label: 'describe_bundle_tasks', value: 'describe_bundle_tasks' }
    ]}
>
<TabItem value="describe_bundle_tasks">

Describes the specified bundle tasks or all of your bundle tasks. Completed bundle tasks are listed for only a limited time. If your bundle task is no longer in the list, you can still register an AMI from it. Just use RegisterImage with the Amazon S3 bucket name and image manifest name you provided to the bundle task. The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.

```sql
SELECT
BundleId,
BundleTaskError,
InstanceId,
Progress,
StartTime,
State,
Storage,
UpdateTime
FROM aws.ec2.bundle_tasks
WHERE region = '{{ region }}' -- required
AND BundleId = '{{ BundleId }}'
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
;
```
</TabItem>
</Tabs>
