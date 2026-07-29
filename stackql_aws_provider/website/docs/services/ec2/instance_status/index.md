--- 
title: instance_status
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_status
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

Creates, updates, deletes, gets or lists an <code>instance_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.instance_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_instance_status"
    values={[
        { label: 'describe_instance_status', value: 'describe_instance_status' }
    ]}
>
<TabItem value="describe_instance_status">

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
    <td><CopyableCode code="attached_ebs_status" /></td>
    <td><code>string</code></td>
    <td>Reports impaired functionality that stems from an attached Amazon EBS volume that is unreachable and unable to complete I/O operations.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Availability Zone of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="events" /></td>
    <td><code>string</code></td>
    <td>Any scheduled events associated with the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_state" /></td>
    <td><code>string</code></td>
    <td>The intended state of the instance. DescribeInstanceStatus requires that an instance be in the running state.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_status" /></td>
    <td><code>string</code></td>
    <td>Reports impaired functionality that stems from issues internal to the instance, such as impaired reachability.</td>
</tr>
<tr>
    <td><CopyableCode code="operator" /></td>
    <td><code>string</code></td>
    <td>The service provider that manages the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="outpost_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Outpost.</td>
</tr>
<tr>
    <td><CopyableCode code="system_status" /></td>
    <td><code>string</code></td>
    <td>Reports impaired functionality that stems from issues related to the systems that support an instance, such as hardware failures and network connectivity problems.</td>
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
    <td><a href="#describe_instance_status"><CopyableCode code="describe_instance_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-IncludeManagedResources"><code>IncludeManagedResources</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-IncludeAllInstances"><code>IncludeAllInstances</code></a></td>
    <td>Describes the status of the specified instances or all of your instances. By default, only running instances are described, unless you specifically indicate to return the status of all instances. Instance status includes the following components: Status checks - Amazon EC2 performs status checks on running EC2 instances to identify hardware and software issues. For more information, see Status checks for your instances and Troubleshoot instances with failed status checks in the Amazon EC2 User Guide. Scheduled events - Amazon EC2 can schedule events (such as reboot, stop, or terminate) for your instances related to hardware issues, software updates, or system maintenance. For more information, see Scheduled events for your instances in the Amazon EC2 User Guide. Instance state - You can manage your instances from the moment you launch them through their termination. For more information, see Instance lifecycle in the Amazon EC2 User Guide. The Amazon EC2 API follows an eventual consistency model. This means that the result of an API command you run that creates or modifies resources might not be immediately available to all subsequent commands you run. For guidance on how to manage eventual consistency, see Eventual consistency in the Amazon EC2 API in the Amazon EC2 Developer Guide. The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.</td>
</tr>
<tr>
    <td><a href="#report_instance_status"><CopyableCode code="report_instance_status" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-ReasonCode"><code>ReasonCode</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Status"><code>Status</code></a>, <a href="#parameter-StartTime"><code>StartTime</code></a>, <a href="#parameter-EndTime"><code>EndTime</code></a>, <a href="#parameter-Description"><code>Description</code></a></td>
    <td>Submits feedback about the status of an instance. The instance must be in the running state. If your experience with the instance differs from the instance status returned by DescribeInstanceStatus, use ReportInstanceStatus to report your experience with the instance. Amazon EC2 collects this information to improve the accuracy of status checks. Use of this action does not change the value returned by DescribeInstanceStatus.</td>
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
<tr id="parameter-InstanceId">
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>array</code></td>
    <td>The instances.</td>
</tr>
<tr id="parameter-ReasonCode">
    <td><CopyableCode code="ReasonCode" /></td>
    <td><code>array</code></td>
    <td>The reason codes that describe the health state of your instance. instance-stuck-in-state: My instance is stuck in a state. unresponsive: My instance is unresponsive. not-accepting-credentials: My instance is not accepting my credentials. password-not-available: A password is not available for my instance. performance-network: My instance is experiencing performance problems that I believe are network related. performance-instance-store: My instance is experiencing performance problems that I believe are related to the instance stores. performance-ebs-volume: My instance is experiencing performance problems that I believe are related to an EBS volume. performance-other: My instance is experiencing performance problems. other: &#91;explain using the description parameter&#93;</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>Descriptive text about the health state of your instance.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-EndTime">
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the reported instance health state ended.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. availability-zone - The Availability Zone of the instance. availability-zone-id - The ID of the Availability Zone of the instance. event.code - The code for the scheduled event (instance-reboot | system-reboot | system-maintenance | instance-retirement | instance-stop). event.description - A description of the event. event.instance-event-id - The ID of the event whose date and time you are modifying. event.not-after - The latest end time for the scheduled event (for example, 2014-09-15T17:15:20.000Z). event.not-before - The earliest start time for the scheduled event (for example, 2014-09-15T17:15:20.000Z). event.not-before-deadline - The deadline for starting the event (for example, 2014-09-15T17:15:20.000Z). instance-state-code - The code for the instance state, as a 16-bit unsigned integer. The high byte is used for internal purposes and should be ignored. The low byte is set based on the state represented. The valid values are 0 (pending), 16 (running), 32 (shutting-down), 48 (terminated), 64 (stopping), and 80 (stopped). instance-state-name - The state of the instance (pending | running | shutting-down | terminated | stopping | stopped). instance-status.reachability - Filters on instance status where the name is reachability (passed | failed | initializing | insufficient-data). instance-status.status - The status of the instance (ok | impaired | initializing | insufficient-data | not-applicable). operator.managed - A Boolean that indicates whether this is a managed instance. operator.principal - The principal that manages the instance. Only valid for managed instances, where managed is true. system-status.reachability - Filters on system status where the name is reachability (passed | failed | initializing | insufficient-data). system-status.status - The system status of the instance (ok | impaired | initializing | insufficient-data | not-applicable). attached-ebs-status.status - The status of the attached EBS volume for the instance (ok | impaired | initializing | insufficient-data | not-applicable).</td>
</tr>
<tr id="parameter-IncludeAllInstances">
    <td><CopyableCode code="IncludeAllInstances" /></td>
    <td><code>boolean</code></td>
    <td>When true, includes the health status for all instances. When false, includes the health status for running instances only. Default: false</td>
</tr>
<tr id="parameter-IncludeManagedResources">
    <td><CopyableCode code="IncludeManagedResources" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether to include managed resources in the output. If this parameter is set to true, the output includes resources that are managed by Amazon Web Services services, even if managed resource visibility is set to hidden.</td>
</tr>
<tr id="parameter-InstanceId">
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>array</code></td>
    <td>The instance IDs. Default: Describes all your instances. Constraints: Maximum 100 explicitly specified instance IDs.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination. You cannot specify this parameter and the instance IDs parameter in the same request.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
<tr id="parameter-StartTime">
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the reported instance health state began.</td>
</tr>
<tr id="parameter-Status">
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of all instances listed.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_instance_status"
    values={[
        { label: 'describe_instance_status', value: 'describe_instance_status' }
    ]}
>
<TabItem value="describe_instance_status">

Describes the status of the specified instances or all of your instances. By default, only running instances are described, unless you specifically indicate to return the status of all instances. Instance status includes the following components: Status checks - Amazon EC2 performs status checks on running EC2 instances to identify hardware and software issues. For more information, see Status checks for your instances and Troubleshoot instances with failed status checks in the Amazon EC2 User Guide. Scheduled events - Amazon EC2 can schedule events (such as reboot, stop, or terminate) for your instances related to hardware issues, software updates, or system maintenance. For more information, see Scheduled events for your instances in the Amazon EC2 User Guide. Instance state - You can manage your instances from the moment you launch them through their termination. For more information, see Instance lifecycle in the Amazon EC2 User Guide. The Amazon EC2 API follows an eventual consistency model. This means that the result of an API command you run that creates or modifies resources might not be immediately available to all subsequent commands you run. For guidance on how to manage eventual consistency, see Eventual consistency in the Amazon EC2 API in the Amazon EC2 Developer Guide. The order of the elements in the response, including those within nested structures, might vary. Applications should not assume the elements appear in a particular order.

```sql
SELECT
attached_ebs_status,
availability_zone,
availability_zone_id,
events,
instance_id,
instance_state,
instance_status,
operator,
outpost_arn,
system_status
FROM aws.ec2.instance_status
WHERE region = '{{ region }}' -- required
AND InstanceId = '{{ InstanceId }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND IncludeManagedResources = '{{ IncludeManagedResources }}'
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND IncludeAllInstances = '{{ IncludeAllInstances }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="report_instance_status"
    values={[
        { label: 'report_instance_status', value: 'report_instance_status' }
    ]}
>
<TabItem value="report_instance_status">

Submits feedback about the status of an instance. The instance must be in the running state. If your experience with the instance differs from the instance status returned by DescribeInstanceStatus, use ReportInstanceStatus to report your experience with the instance. Amazon EC2 collects this information to improve the accuracy of status checks. Use of this action does not change the value returned by DescribeInstanceStatus.

```sql
EXEC aws.ec2.instance_status.report_instance_status 
@InstanceId='{{ InstanceId }}' --required, 
@ReasonCode='{{ ReasonCode }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}, 
@Status='{{ Status }}', 
@StartTime='{{ StartTime }}', 
@EndTime='{{ EndTime }}', 
@Description='{{ Description }}'
;
```
</TabItem>
</Tabs>
