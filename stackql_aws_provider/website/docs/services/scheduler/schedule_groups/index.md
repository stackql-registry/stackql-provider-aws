--- 
title: schedule_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - schedule_groups
  - scheduler
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

Creates, updates, deletes, gets or lists a <code>schedule_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="schedule_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.scheduler.schedule_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_schedule_group"
    values={[
        { label: 'get_schedule_group', value: 'get_schedule_group' },
        { label: 'list_schedule_groups', value: 'list_schedule_groups' }
    ]}
>
<TabItem value="get_schedule_group">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the schedule group. (pattern: &lt;code&gt;^arn:aws(-&#91;a-z&#93;+)?:scheduler:&#91;a-z0-9\-&#93;+:\d&#123;12&#125;:schedule-group\/&#91;0-9a-zA-Z-_.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the schedule group was created.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModificationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the schedule group was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the schedule group. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z-_.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>Specifies the state of the schedule group. (ACTIVE, DELETING)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_schedule_groups">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the schedule group. (pattern: &lt;code&gt;^arn:aws(-&#91;a-z&#93;+)?:scheduler:&#91;a-z0-9\-&#93;+:\d&#123;12&#125;:schedule-group\/&#91;0-9a-zA-Z-_.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the schedule group was created.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModificationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the schedule group was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the schedule group. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z-_.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>Specifies the state of the schedule group. (ACTIVE, DELETING)</td>
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
    <td><a href="#get_schedule_group"><CopyableCode code="get_schedule_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the specified schedule group.</td>
</tr>
<tr>
    <td><a href="#list_schedule_groups"><CopyableCode code="list_schedule_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NamePrefix"><code>NamePrefix</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns a paginated list of your schedule groups.</td>
</tr>
<tr>
    <td><a href="#create_schedule_group"><CopyableCode code="create_schedule_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates the specified schedule group.</td>
</tr>
<tr>
    <td><a href="#delete_schedule_group"><CopyableCode code="delete_schedule_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes the specified schedule group. Deleting a schedule group results in EventBridge Scheduler deleting all schedules associated with the group. When you delete a group, it remains in a DELETING state until all of its associated schedules are deleted. Schedules associated with the group that are set to run while the schedule group is in the process of being deleted might continue to invoke their targets until the schedule group and its associated schedules are deleted. This operation is eventually consistent.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the schedule group to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>If specified, limits the number of results returned by this operation. The operation also returns a NextToken which you can use in a subsequent operation to retrieve the next set of results.</td>
</tr>
<tr id="parameter-NamePrefix">
    <td><CopyableCode code="NamePrefix" /></td>
    <td><code>string</code></td>
    <td>The name prefix that you can use to return a filtered list of your schedule groups.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned by a previous call to retrieve the next set of results.</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you do not specify a client token, EventBridge Scheduler uses a randomly generated token for the request to ensure idempotency.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_schedule_group"
    values={[
        { label: 'get_schedule_group', value: 'get_schedule_group' },
        { label: 'list_schedule_groups', value: 'list_schedule_groups' }
    ]}
>
<TabItem value="get_schedule_group">

Retrieves the specified schedule group.

```sql
SELECT
Arn,
CreationDate,
LastModificationDate,
Name,
State
FROM aws.scheduler.schedule_groups
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_schedule_groups">

Returns a paginated list of your schedule groups.

```sql
SELECT
Arn,
CreationDate,
LastModificationDate,
Name,
State
FROM aws.scheduler.schedule_groups
WHERE region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NamePrefix = '{{ NamePrefix }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_schedule_group"
    values={[
        { label: 'create_schedule_group', value: 'create_schedule_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_schedule_group">

Creates the specified schedule group.

```sql
INSERT INTO aws.scheduler.schedule_groups (
ClientToken,
Tags,
name,
region
)
SELECT 
'{{ ClientToken }}',
'{{ Tags }}',
'{{ name }}',
'{{ region }}'
RETURNING
ScheduleGroupArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: schedule_groups
  props:
    - name: name
      value: "{{ name }}"
      description: Required parameter for the schedule_groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the schedule_groups resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_schedule_group"
    values={[
        { label: 'delete_schedule_group', value: 'delete_schedule_group' }
    ]}
>
<TabItem value="delete_schedule_group">

Deletes the specified schedule group. Deleting a schedule group results in EventBridge Scheduler deleting all schedules associated with the group. When you delete a group, it remains in a DELETING state until all of its associated schedules are deleted. Schedules associated with the group that are set to run while the schedule group is in the process of being deleted might continue to invoke their targets until the schedule group and its associated schedules are deleted. This operation is eventually consistent.

```sql
DELETE FROM aws.scheduler.schedule_groups
WHERE name = '{{ name }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>
