--- 
title: instance_event_windows
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_event_windows
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

Creates, updates, deletes, gets or lists an <code>instance_event_windows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_event_windows" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.instance_event_windows" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_instance_event_windows"
    values={[
        { label: 'describe_instance_event_windows', value: 'describe_instance_event_windows' }
    ]}
>
<TabItem value="describe_instance_event_windows">

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
    <td><CopyableCode code="AssociationTarget" /></td>
    <td><code>string</code></td>
    <td>One or more targets associated with the event window.</td>
</tr>
<tr>
    <td><CopyableCode code="CronExpression" /></td>
    <td><code>string</code></td>
    <td>The cron expression defined for the event window.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceEventWindowId" /></td>
    <td><code>string</code></td>
    <td>The ID of the event window.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the event window.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the event window.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The instance tags associated with the event window.</td>
</tr>
<tr>
    <td><CopyableCode code="TimeRanges" /></td>
    <td><code>string</code></td>
    <td>One or more time ranges defined for the event window.</td>
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
    <td><a href="#describe_instance_event_windows"><CopyableCode code="describe_instance_event_windows" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-InstanceEventWindowId"><code>InstanceEventWindowId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Describes the specified event windows or all event windows. If you specify event window IDs, the output includes information for only the specified event windows. If you specify filters, the output includes information for only those event windows that meet the filter criteria. If you do not specify event windows IDs or filters, the output includes information for all event windows, which can affect performance. We recommend that you use pagination to ensure that the operation returns quickly and successfully. For more information, see Define event windows for scheduled events in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#create_instance_event_window"><CopyableCode code="create_instance_event_window" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-TimeRange"><code>TimeRange</code></a>, <a href="#parameter-CronExpression"><code>CronExpression</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a></td>
    <td>Creates an event window in which scheduled events for the associated Amazon EC2 instances can run. You can define either a set of time ranges or a cron expression when creating the event window, but not both. All event window times are in UTC. You can create up to 200 event windows per Amazon Web Services Region. When you create the event window, targets (instance IDs, Dedicated Host IDs, or tags) are not yet associated with it. To ensure that the event window can be used, you must associate one or more targets with it by using the AssociateInstanceEventWindow API. Event windows are applicable only for scheduled events that stop, reboot, or terminate instances. Event windows are not applicable for: Expedited scheduled events and network maintenance events. Unscheduled maintenance such as AutoRecovery and unplanned reboots. For more information, see Define event windows for scheduled events in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#associate_instance_event_window"><CopyableCode code="associate_instance_event_window" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-InstanceEventWindowId"><code>InstanceEventWindowId</code></a>, <a href="#parameter-AssociationTarget"><code>AssociationTarget</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Associates one or more targets with an event window. Only one type of target (instance IDs, Dedicated Host IDs, or tags) can be specified with an event window. For more information, see Define event windows for scheduled events in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#modify_instance_event_window"><CopyableCode code="modify_instance_event_window" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-InstanceEventWindowId"><code>InstanceEventWindowId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-TimeRange"><code>TimeRange</code></a>, <a href="#parameter-CronExpression"><code>CronExpression</code></a></td>
    <td>Modifies the specified event window. You can define either a set of time ranges or a cron expression when modifying the event window, but not both. To modify the targets associated with the event window, use the AssociateInstanceEventWindow and DisassociateInstanceEventWindow API. If Amazon Web Services has already scheduled an event, modifying an event window won't change the time of the scheduled event. For more information, see Define event windows for scheduled events in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_instance_event_window"><CopyableCode code="delete_instance_event_window" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-InstanceEventWindowId"><code>InstanceEventWindowId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ForceDelete"><code>ForceDelete</code></a></td>
    <td>Deletes the specified event window. For more information, see Define event windows for scheduled events in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#disassociate_instance_event_window"><CopyableCode code="disassociate_instance_event_window" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-InstanceEventWindowId"><code>InstanceEventWindowId</code></a>, <a href="#parameter-AssociationTarget"><code>AssociationTarget</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Disassociates one or more targets from an event window. For more information, see Define event windows for scheduled events in the Amazon EC2 User Guide.</td>
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
<tr id="parameter-AssociationTarget">
    <td><CopyableCode code="AssociationTarget" /></td>
    <td><code>object</code></td>
    <td>One or more targets to disassociate from the specified event window.</td>
</tr>
<tr id="parameter-InstanceEventWindowId">
    <td><CopyableCode code="InstanceEventWindowId" /></td>
    <td><code>string</code></td>
    <td>The ID of the event window.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CronExpression">
    <td><CopyableCode code="CronExpression" /></td>
    <td><code>string</code></td>
    <td>The cron expression of the event window, for example, * 0-4,20-23 * * 1,5. Constraints: Only hour and day of the week values are supported. For day of the week values, you can specify either integers 0 through 6, or alternative single values SUN through SAT. The minute, month, and year must be specified by *. The hour value must be one or a multiple range, for example, 0-4 or 0-4,20-23. Each hour range must be &gt;= 2 hours, for example, 0-2 or 20-23. The event window must be &gt;= 4 hours. The combined total time ranges in the event window must be &gt;= 4 hours. For more information about cron expressions, see cron on the Wikipedia website.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. dedicated-host-id - The event windows associated with the specified Dedicated Host ID. event-window-name - The event windows associated with the specified names. instance-id - The event windows associated with the specified instance ID. instance-tag - The event windows associated with the specified tag and value. instance-tag-key - The event windows associated with the specified tag key, regardless of the value. instance-tag-value - The event windows associated with the specified tag value, regardless of the key. tag:<code>&lt;key&gt;</code> - The key/value combination of a tag assigned to the event window. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value CMX, specify tag:Owner for the filter name and CMX for the filter value. tag-key - The key of a tag assigned to the event window. Use this filter to find all event windows that have a tag with a specific key, regardless of the tag value. tag-value - The value of a tag assigned to the event window. Use this filter to find all event windows that have a tag with a specific value, regardless of the tag key.</td>
</tr>
<tr id="parameter-ForceDelete">
    <td><CopyableCode code="ForceDelete" /></td>
    <td><code>boolean</code></td>
    <td>Specify true to force delete the event window. Use the force delete parameter if the event window is currently associated with targets.</td>
</tr>
<tr id="parameter-InstanceEventWindowId">
    <td><CopyableCode code="InstanceEventWindowId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the event windows.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned NextToken value. This value can be between 20 and 500. You cannot specify this parameter and the event window IDs parameter in the same call.</td>
</tr>
<tr id="parameter-Name">
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the event window.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to request the next page of results.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the event window.</td>
</tr>
<tr id="parameter-TimeRange">
    <td><CopyableCode code="TimeRange" /></td>
    <td><code>array</code></td>
    <td>The time ranges of the event window.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_instance_event_windows"
    values={[
        { label: 'describe_instance_event_windows', value: 'describe_instance_event_windows' }
    ]}
>
<TabItem value="describe_instance_event_windows">

Describes the specified event windows or all event windows. If you specify event window IDs, the output includes information for only the specified event windows. If you specify filters, the output includes information for only those event windows that meet the filter criteria. If you do not specify event windows IDs or filters, the output includes information for all event windows, which can affect performance. We recommend that you use pagination to ensure that the operation returns quickly and successfully. For more information, see Define event windows for scheduled events in the Amazon EC2 User Guide.

```sql
SELECT
AssociationTarget,
CronExpression,
InstanceEventWindowId,
Name,
State,
Tags,
TimeRanges
FROM aws.ec2.instance_event_windows
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND InstanceEventWindowId = '{{ InstanceEventWindowId }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_instance_event_window"
    values={[
        { label: 'create_instance_event_window', value: 'create_instance_event_window' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_instance_event_window">

Creates an event window in which scheduled events for the associated Amazon EC2 instances can run. You can define either a set of time ranges or a cron expression when creating the event window, but not both. All event window times are in UTC. You can create up to 200 event windows per Amazon Web Services Region. When you create the event window, targets (instance IDs, Dedicated Host IDs, or tags) are not yet associated with it. To ensure that the event window can be used, you must associate one or more targets with it by using the AssociateInstanceEventWindow API. Event windows are applicable only for scheduled events that stop, reboot, or terminate instances. Event windows are not applicable for: Expedited scheduled events and network maintenance events. Unscheduled maintenance such as AutoRecovery and unplanned reboots. For more information, see Define event windows for scheduled events in the Amazon EC2 User Guide.

```sql
INSERT INTO aws.ec2.instance_event_windows (
region,
DryRun,
Name,
TimeRange,
CronExpression,
TagSpecification
)
SELECT 
'{{ region }}',
'{{ DryRun }}',
'{{ Name }}',
'{{ TimeRange }}',
'{{ CronExpression }}',
'{{ TagSpecification }}'
RETURNING
AssociationTarget,
CronExpression,
InstanceEventWindowId,
Name,
State,
Tags,
TimeRanges
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: instance_event_windows
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the instance_event_windows resource.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: Name
      value: "{{ Name }}"
      description: The name of the event window.
      description: The name of the event window.
    - name: TimeRange
      value: "{{ TimeRange }}"
      description: The time range for the event window. If you specify a time range, you can't specify a cron expression.
      description: The time range for the event window. If you specify a time range, you can't specify a cron expression.
    - name: CronExpression
      value: "{{ CronExpression }}"
      description: The cron expression for the event window, for example, * 0-4,20-23 * * 1,5. If you specify a cron expression, you can't specify a time range. Constraints: Only hour and day of the week values are supported. For day of the week values, you can specify either integers 0 through 6, or alternative single values SUN through SAT. The minute, month, and year must be specified by *. The hour value must be one or a multiple range, for example, 0-4 or 0-4,20-23. Each hour range must be >= 2 hours, for example, 0-2 or 20-23. The event window must be >= 4 hours. The combined total time ranges in the event window must be >= 4 hours. For more information about cron expressions, see cron on the Wikipedia website.
      description: The cron expression for the event window, for example, * 0-4,20-23 * * 1,5. If you specify a cron expression, you can't specify a time range. Constraints: Only hour and day of the week values are supported. For day of the week values, you can specify either integers 0 through 6, or alternative single values SUN through SAT. The minute, month, and year must be specified by *. The hour value must be one or a multiple range, for example, 0-4 or 0-4,20-23. Each hour range must be >= 2 hours, for example, 0-2 or 20-23. The event window must be >= 4 hours. The combined total time ranges in the event window must be >= 4 hours. For more information about cron expressions, see cron on the Wikipedia website.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the event window.
      description: The tags to apply to the event window.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_instance_event_window"
    values={[
        { label: 'associate_instance_event_window', value: 'associate_instance_event_window' },
        { label: 'modify_instance_event_window', value: 'modify_instance_event_window' }
    ]}
>
<TabItem value="associate_instance_event_window">

Associates one or more targets with an event window. Only one type of target (instance IDs, Dedicated Host IDs, or tags) can be specified with an event window. For more information, see Define event windows for scheduled events in the Amazon EC2 User Guide.

```sql
UPDATE aws.ec2.instance_event_windows
SET 
-- No updatable properties
WHERE 
InstanceEventWindowId = '{{ InstanceEventWindowId }}' --required
AND AssociationTarget = '{{ AssociationTarget }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
RETURNING
AssociationTarget,
CronExpression,
InstanceEventWindowId,
Name,
State,
Tags,
TimeRanges;
```
</TabItem>
<TabItem value="modify_instance_event_window">

Modifies the specified event window. You can define either a set of time ranges or a cron expression when modifying the event window, but not both. To modify the targets associated with the event window, use the AssociateInstanceEventWindow and DisassociateInstanceEventWindow API. If Amazon Web Services has already scheduled an event, modifying an event window won't change the time of the scheduled event. For more information, see Define event windows for scheduled events in the Amazon EC2 User Guide.

```sql
UPDATE aws.ec2.instance_event_windows
SET 
-- No updatable properties
WHERE 
InstanceEventWindowId = '{{ InstanceEventWindowId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND Name = '{{ Name}}'
AND TimeRange = '{{ TimeRange}}'
AND CronExpression = '{{ CronExpression}}'
RETURNING
AssociationTarget,
CronExpression,
InstanceEventWindowId,
Name,
State,
Tags,
TimeRanges;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_instance_event_window"
    values={[
        { label: 'delete_instance_event_window', value: 'delete_instance_event_window' }
    ]}
>
<TabItem value="delete_instance_event_window">

Deletes the specified event window. For more information, see Define event windows for scheduled events in the Amazon EC2 User Guide.

```sql
DELETE FROM aws.ec2.instance_event_windows
WHERE InstanceEventWindowId = '{{ InstanceEventWindowId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
AND ForceDelete = '{{ ForceDelete }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_instance_event_window"
    values={[
        { label: 'disassociate_instance_event_window', value: 'disassociate_instance_event_window' }
    ]}
>
<TabItem value="disassociate_instance_event_window">

Disassociates one or more targets from an event window. For more information, see Define event windows for scheduled events in the Amazon EC2 User Guide.

```sql
EXEC aws.ec2.instance_event_windows.disassociate_instance_event_window 
@InstanceEventWindowId='{{ InstanceEventWindowId }}' --required, 
@AssociationTarget='{{ AssociationTarget }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
