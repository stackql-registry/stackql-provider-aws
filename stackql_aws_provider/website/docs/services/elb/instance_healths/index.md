--- 
title: instance_healths
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_healths
  - elb
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

Creates, updates, deletes, gets or lists an <code>instance_healths</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_healths" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elb.instance_healths" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_instance_health"
    values={[
        { label: 'describe_instance_health', value: 'describe_instance_health' }
    ]}
>
<TabItem value="describe_instance_health">

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
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the instance state. This string can contain one or more of the following messages. N/A A transient error occurred. Please try again later. Instance has failed at least the UnhealthyThreshold number of health checks consecutively. Instance has not passed the configured HealthyThreshold number of health checks consecutively. Instance registration is still in progress. Instance is in the EC2 Availability Zone for which LoadBalancer is not configured to route traffic to. Instance is not currently registered with the LoadBalancer. Instance deregistration currently in progress. Disable Availability Zone is currently in progress. Instance is in pending state. Instance is in stopped state. Instance is in terminated state.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="ReasonCode" /></td>
    <td><code>string</code></td>
    <td>Information about the cause of OutOfService instances. Specifically, whether the cause is Elastic Load Balancing or the instance. Valid values: ELB | Instance | N/A</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the instance. Valid values: InService | OutOfService | Unknown</td>
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
    <td><a href="#describe_instance_health"><CopyableCode code="describe_instance_health" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-LoadBalancerName"><code>LoadBalancerName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Instances"><code>Instances</code></a></td>
    <td>Describes the state of the specified instances with respect to the specified load balancer. If no instances are specified, the call describes the state of all instances that are currently registered with the load balancer. If instances are specified, their state is returned even if they are no longer registered with the load balancer. The state of terminated instances is not returned.</td>
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
<tr id="parameter-LoadBalancerName">
    <td><CopyableCode code="LoadBalancerName" /></td>
    <td><code>string</code></td>
    <td>The name of the load balancer.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Instances">
    <td><CopyableCode code="Instances" /></td>
    <td><code>array</code></td>
    <td>The IDs of the instances.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_instance_health"
    values={[
        { label: 'describe_instance_health', value: 'describe_instance_health' }
    ]}
>
<TabItem value="describe_instance_health">

Describes the state of the specified instances with respect to the specified load balancer. If no instances are specified, the call describes the state of all instances that are currently registered with the load balancer. If instances are specified, their state is returned even if they are no longer registered with the load balancer. The state of terminated instances is not returned.

```sql
SELECT
Description,
InstanceId,
ReasonCode,
State
FROM aws.elb.instance_healths
WHERE LoadBalancerName = '{{ LoadBalancerName }}' -- required
AND region = '{{ region }}' -- required
AND Instances = '{{ Instances }}'
;
```
</TabItem>
</Tabs>
