--- 
title: mac_modification_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - mac_modification_tasks
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

Creates, updates, deletes, gets or lists a <code>mac_modification_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mac_modification_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.mac_modification_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_mac_modification_tasks"
    values={[
        { label: 'describe_mac_modification_tasks', value: 'describe_mac_modification_tasks' }
    ]}
>
<TabItem value="describe_mac_modification_tasks">

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
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon EC2 Mac instance.</td>
</tr>
<tr>
    <td><CopyableCode code="MacModificationTaskId" /></td>
    <td><code>string</code></td>
    <td>The ID of task.</td>
</tr>
<tr>
    <td><CopyableCode code="MacSystemIntegrityProtectionConfig" /></td>
    <td><code>string</code></td>
    <td>&#91;SIP modification tasks only&#93; Information about the SIP configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string</code></td>
    <td>The date and time the task was created, in the UTC timezone (YYYY-MM-DDThh:mm:ss.sssZ).</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags assigned to the task.</td>
</tr>
<tr>
    <td><CopyableCode code="TaskState" /></td>
    <td><code>string</code></td>
    <td>The state of the task.</td>
</tr>
<tr>
    <td><CopyableCode code="TaskType" /></td>
    <td><code>string</code></td>
    <td>The type of task.</td>
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
    <td><a href="#describe_mac_modification_tasks"><CopyableCode code="describe_mac_modification_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MacModificationTaskId"><code>MacModificationTaskId</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Describes a System Integrity Protection (SIP) modification task or volume ownership delegation task for an Amazon EC2 Mac instance. For more information, see Configure SIP for Amazon EC2 instances in the Amazon EC2 User Guide.</td>
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
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>Specifies one or more filters for the request: instance-id - The ID of the instance for which the task was created. task-state - The state of the task (successful | failed | in-progress | pending). mac-system-integrity-protection-configuration.sip-status - The overall SIP state requested in the task (enabled | disabled). start-time - The date and time the task was created. task-type - The type of task (sip-modification | volume-ownership-delegation).</td>
</tr>
<tr id="parameter-MacModificationTaskId">
    <td><CopyableCode code="MacModificationTaskId" /></td>
    <td><code>array</code></td>
    <td>The ID of task.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned nextToken value. This value can be between 5 and 500. If maxResults is given a larger value than 500, you receive an error.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_mac_modification_tasks"
    values={[
        { label: 'describe_mac_modification_tasks', value: 'describe_mac_modification_tasks' }
    ]}
>
<TabItem value="describe_mac_modification_tasks">

Describes a System Integrity Protection (SIP) modification task or volume ownership delegation task for an Amazon EC2 Mac instance. For more information, see Configure SIP for Amazon EC2 instances in the Amazon EC2 User Guide.

```sql
SELECT
InstanceId,
MacModificationTaskId,
MacSystemIntegrityProtectionConfig,
StartTime,
Tags,
TaskState,
TaskType
FROM aws.ec2.mac_modification_tasks
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND MacModificationTaskId = '{{ MacModificationTaskId }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
