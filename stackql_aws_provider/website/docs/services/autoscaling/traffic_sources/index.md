--- 
title: traffic_sources
hide_title: false
hide_table_of_contents: false
keywords:
  - traffic_sources
  - autoscaling
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

Creates, updates, deletes, gets or lists a <code>traffic_sources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="traffic_sources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.autoscaling.traffic_sources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_traffic_sources"
    values={[
        { label: 'describe_traffic_sources', value: 'describe_traffic_sources' }
    ]}
>
<TabItem value="describe_traffic_sources">

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
    <td><CopyableCode code="Identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the traffic source.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>Describes the current state of a traffic source. The state values are as follows: Adding - The Auto Scaling instances are being registered with the load balancer or target group. Added - All Auto Scaling instances are registered with the load balancer or target group. InService - For an Elastic Load Balancing load balancer or target group, at least one Auto Scaling instance passed an ELB health check. For VPC Lattice, at least one Auto Scaling instance passed an VPC_LATTICE health check. Removing - The Auto Scaling instances are being deregistered from the load balancer or target group. If connection draining (deregistration delay) is enabled, Elastic Load Balancing or VPC Lattice waits for in-flight requests to complete before deregistering the instances. Removed - All Auto Scaling instances are deregistered from the load balancer or target group.</td>
</tr>
<tr>
    <td><CopyableCode code="TrafficSource" /></td>
    <td><code>string</code></td>
    <td>This is replaced by Identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>Provides additional context for the value of Identifier. The following lists the valid values: elb if Identifier is the name of a Classic Load Balancer. elbv2 if Identifier is the ARN of an Application Load Balancer, Gateway Load Balancer, or Network Load Balancer target group. vpc-lattice if Identifier is the ARN of a VPC Lattice target group. Required if the identifier is the name of a Classic Load Balancer.</td>
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
    <td><a href="#describe_traffic_sources"><CopyableCode code="describe_traffic_sources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TrafficSourceType"><code>TrafficSourceType</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a></td>
    <td>Gets information about the traffic sources for the specified Auto Scaling group. You can optionally provide a traffic source type. If you provide a traffic source type, then the results only include that traffic source type. If you do not provide a traffic source type, then the results include all the traffic sources for the specified Auto Scaling group.</td>
</tr>
<tr>
    <td><a href="#attach_traffic_sources"><CopyableCode code="attach_traffic_sources" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-TrafficSources"><code>TrafficSources</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SkipZonalShiftValidation"><code>SkipZonalShiftValidation</code></a></td>
    <td>Attaches one or more traffic sources to the specified Auto Scaling group. You can use any of the following as traffic sources for an Auto Scaling group: Application Load Balancer Classic Load Balancer Gateway Load Balancer Network Load Balancer VPC Lattice This operation is additive and does not detach existing traffic sources from the Auto Scaling group. After the operation completes, use the DescribeTrafficSources API to return details about the state of the attachments between traffic sources and your Auto Scaling group. To detach a traffic source from the Auto Scaling group, call the DetachTrafficSources API.</td>
</tr>
<tr>
    <td><a href="#detach_traffic_sources"><CopyableCode code="detach_traffic_sources" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-AutoScalingGroupName"><code>AutoScalingGroupName</code></a>, <a href="#parameter-TrafficSources"><code>TrafficSources</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Detaches one or more traffic sources from the specified Auto Scaling group. When you detach a traffic source, it enters the Removing state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the traffic source using the DescribeTrafficSources API call. The instances continue to run.</td>
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
<tr id="parameter-AutoScalingGroupName">
    <td><CopyableCode code="AutoScalingGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the Auto Scaling group.</td>
</tr>
<tr id="parameter-TrafficSources">
    <td><CopyableCode code="TrafficSources" /></td>
    <td><code>array</code></td>
    <td>The unique identifiers of one or more traffic sources. You can specify up to 10 traffic sources.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return with this call. The maximum value is 50.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. (You received this token from a previous call.)</td>
</tr>
<tr id="parameter-SkipZonalShiftValidation">
    <td><CopyableCode code="SkipZonalShiftValidation" /></td>
    <td><code>boolean</code></td>
    <td>If you enable zonal shift with cross-zone disabled load balancers, capacity could become imbalanced across Availability Zones. To skip the validation, specify true. For more information, see Auto Scaling group zonal shift in the Amazon EC2 Auto Scaling User Guide.</td>
</tr>
<tr id="parameter-TrafficSourceType">
    <td><CopyableCode code="TrafficSourceType" /></td>
    <td><code>string</code></td>
    <td>The traffic source type that you want to describe. The following lists the valid values: elb if the traffic source is a Classic Load Balancer. elbv2 if the traffic source is a Application Load Balancer, Gateway Load Balancer, or Network Load Balancer. vpc-lattice if the traffic source is VPC Lattice.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_traffic_sources"
    values={[
        { label: 'describe_traffic_sources', value: 'describe_traffic_sources' }
    ]}
>
<TabItem value="describe_traffic_sources">

Gets information about the traffic sources for the specified Auto Scaling group. You can optionally provide a traffic source type. If you provide a traffic source type, then the results only include that traffic source type. If you do not provide a traffic source type, then the results include all the traffic sources for the specified Auto Scaling group.

```sql
SELECT
Identifier,
State,
TrafficSource,
Type
FROM aws.autoscaling.traffic_sources
WHERE AutoScalingGroupName = '{{ AutoScalingGroupName }}' -- required
AND region = '{{ region }}' -- required
AND TrafficSourceType = '{{ TrafficSourceType }}'
AND NextToken = '{{ NextToken }}'
AND MaxRecords = '{{ MaxRecords }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="attach_traffic_sources"
    values={[
        { label: 'attach_traffic_sources', value: 'attach_traffic_sources' }
    ]}
>
<TabItem value="attach_traffic_sources">

Attaches one or more traffic sources to the specified Auto Scaling group. You can use any of the following as traffic sources for an Auto Scaling group: Application Load Balancer Classic Load Balancer Gateway Load Balancer Network Load Balancer VPC Lattice This operation is additive and does not detach existing traffic sources from the Auto Scaling group. After the operation completes, use the DescribeTrafficSources API to return details about the state of the attachments between traffic sources and your Auto Scaling group. To detach a traffic source from the Auto Scaling group, call the DetachTrafficSources API.

```sql
UPDATE aws.autoscaling.traffic_sources
SET 
-- No updatable properties
WHERE 
AutoScalingGroupName = '{{ AutoScalingGroupName }}' --required
AND TrafficSources = '{{ TrafficSources }}' --required
AND region = '{{ region }}' --required
AND SkipZonalShiftValidation = {{ SkipZonalShiftValidation}};
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="detach_traffic_sources"
    values={[
        { label: 'detach_traffic_sources', value: 'detach_traffic_sources' }
    ]}
>
<TabItem value="detach_traffic_sources">

Detaches one or more traffic sources from the specified Auto Scaling group. When you detach a traffic source, it enters the Removing state while deregistering the instances in the group. When all instances are deregistered, then you can no longer describe the traffic source using the DescribeTrafficSources API call. The instances continue to run.

```sql
EXEC aws.autoscaling.traffic_sources.detach_traffic_sources 
@AutoScalingGroupName='{{ AutoScalingGroupName }}' --required, 
@TrafficSources='{{ TrafficSources }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
