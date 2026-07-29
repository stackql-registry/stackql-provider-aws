--- 
title: instance_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_groups
  - emr
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

Creates, updates, deletes, gets or lists an <code>instance_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.emr.instance_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_instance_groups"
    values={[
        { label: 'list_instance_groups', value: 'list_instance_groups' }
    ]}
>
<TabItem value="list_instance_groups">

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
    <td><CopyableCode code="auto_scaling_policy" /></td>
    <td><code>object</code></td>
    <td>An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates Amazon EC2 instances in response to the value of a CloudWatch metric. See PutAutoScalingPolicy.</td>
</tr>
<tr>
    <td><CopyableCode code="bid_price" /></td>
    <td><code>string</code></td>
    <td>The bid price for each Amazon EC2 Spot Instance type as defined by InstanceType. Expressed in USD. If neither BidPrice nor BidPriceAsPercentageOfOnDemandPrice is provided, BidPriceAsPercentageOfOnDemandPrice defaults to 100%.</td>
</tr>
<tr>
    <td><CopyableCode code="configurations" /></td>
    <td><code>array</code></td>
    <td>Amazon EMR releases 4.x or later. The list of configurations supplied for an Amazon EMR cluster instance group. You can specify a separate configuration for each instance group (master, core, and task).</td>
</tr>
<tr>
    <td><CopyableCode code="configurations_version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number of the requested configuration specification for this instance group.</td>
</tr>
<tr>
    <td><CopyableCode code="custom_ami_id" /></td>
    <td><code>string</code></td>
    <td>The custom AMI ID to use for the provisioned instance group. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ebs_block_devices" /></td>
    <td><code>array</code></td>
    <td>The EBS block devices that are mapped to this instance group.</td>
</tr>
<tr>
    <td><CopyableCode code="ebs_optimized" /></td>
    <td><code>boolean</code></td>
    <td>If the instance group is EBS-optimized. An Amazon EBS-optimized instance uses an optimized configuration stack and provides additional, dedicated capacity for Amazon EBS I/O.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the instance group.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_group_type" /></td>
    <td><code>string</code></td>
    <td>The type of the instance group. Valid values are MASTER, CORE or TASK. (MASTER, CORE, TASK)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_type" /></td>
    <td><code>string</code></td>
    <td>The Amazon EC2 instance type for all instances in the instance group. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_successfully_applied_configurations" /></td>
    <td><code>array</code></td>
    <td>A list of configurations that were successfully applied for an instance group last time.</td>
</tr>
<tr>
    <td><CopyableCode code="last_successfully_applied_configurations_version" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number of a configuration specification that was successfully applied for an instance group last time.</td>
</tr>
<tr>
    <td><CopyableCode code="market" /></td>
    <td><code>string</code></td>
    <td>The marketplace to provision instances for this group. Valid values are ON_DEMAND or SPOT. (ON_DEMAND, SPOT)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the instance group.</td>
</tr>
<tr>
    <td><CopyableCode code="requested_instance_count" /></td>
    <td><code>integer</code></td>
    <td>The target number of instances for the instance group.</td>
</tr>
<tr>
    <td><CopyableCode code="running_instance_count" /></td>
    <td><code>integer</code></td>
    <td>The number of instances currently running in this instance group.</td>
</tr>
<tr>
    <td><CopyableCode code="shrink_policy" /></td>
    <td><code>object</code></td>
    <td>Policy for customizing shrink operations.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The current status of the instance group.</td>
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
    <td><a href="#list_instance_groups"><CopyableCode code="list_instance_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides all available details about the instance groups in a cluster.</td>
</tr>
<tr>
    <td><a href="#add_instance_groups"><CopyableCode code="add_instance_groups" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceGroups"><code>InstanceGroups</code></a>, <a href="#parameter-JobFlowId"><code>JobFlowId</code></a></td>
    <td></td>
    <td>Adds one or more instance groups to a running cluster.</td>
</tr>
<tr>
    <td><a href="#remove_auto_scaling_policy"><CopyableCode code="remove_auto_scaling_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterId"><code>ClusterId</code></a>, <a href="#parameter-InstanceGroupId"><code>InstanceGroupId</code></a></td>
    <td></td>
    <td>Removes an automatic scaling policy from a specified instance group within an Amazon EMR cluster.</td>
</tr>
<tr>
    <td><a href="#modify_instance_groups"><CopyableCode code="modify_instance_groups" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>ModifyInstanceGroups modifies the number of nodes and configuration settings of an instance group. The input parameters include the new target instance count for the group and the instance group ID. The call will either succeed or fail atomically.</td>
</tr>
<tr>
    <td><a href="#put_auto_scaling_policy"><CopyableCode code="put_auto_scaling_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClusterId"><code>ClusterId</code></a>, <a href="#parameter-InstanceGroupId"><code>InstanceGroupId</code></a>, <a href="#parameter-AutoScalingPolicy"><code>AutoScalingPolicy</code></a></td>
    <td></td>
    <td>Creates or updates an automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates Amazon EC2 instances in response to the value of a CloudWatch metric.</td>
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
    defaultValue="list_instance_groups"
    values={[
        { label: 'list_instance_groups', value: 'list_instance_groups' }
    ]}
>
<TabItem value="list_instance_groups">

Provides all available details about the instance groups in a cluster.

```sql
SELECT
auto_scaling_policy,
bid_price,
configurations,
configurations_version,
custom_ami_id,
ebs_block_devices,
ebs_optimized,
id,
instance_group_type,
instance_type,
last_successfully_applied_configurations,
last_successfully_applied_configurations_version,
market,
name,
requested_instance_count,
running_instance_count,
shrink_policy,
status
FROM aws.emr.instance_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_instance_groups"
    values={[
        { label: 'add_instance_groups', value: 'add_instance_groups' },
        { label: 'remove_auto_scaling_policy', value: 'remove_auto_scaling_policy' },
        { label: 'modify_instance_groups', value: 'modify_instance_groups' }
    ]}
>
<TabItem value="add_instance_groups">

Adds one or more instance groups to a running cluster.

```sql
UPDATE aws.emr.instance_groups
SET 
InstanceGroups = '{{ InstanceGroups }}',
JobFlowId = '{{ JobFlowId }}'
WHERE 
region = '{{ region }}' --required
AND InstanceGroups = '{{ InstanceGroups }}' --required
AND JobFlowId = '{{ JobFlowId }}' --required
RETURNING
cluster_arn,
instance_group_ids,
job_flow_id;
```
</TabItem>
<TabItem value="remove_auto_scaling_policy">

Removes an automatic scaling policy from a specified instance group within an Amazon EMR cluster.

```sql
UPDATE aws.emr.instance_groups
SET 
ClusterId = '{{ ClusterId }}',
InstanceGroupId = '{{ InstanceGroupId }}'
WHERE 
region = '{{ region }}' --required
AND ClusterId = '{{ ClusterId }}' --required
AND InstanceGroupId = '{{ InstanceGroupId }}' --required;
```
</TabItem>
<TabItem value="modify_instance_groups">

ModifyInstanceGroups modifies the number of nodes and configuration settings of an instance group. The input parameters include the new target instance count for the group and the instance group ID. The call will either succeed or fail atomically.

```sql
UPDATE aws.emr.instance_groups
SET 
ClusterId = '{{ ClusterId }}',
InstanceGroups = '{{ InstanceGroups }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_auto_scaling_policy"
    values={[
        { label: 'put_auto_scaling_policy', value: 'put_auto_scaling_policy' }
    ]}
>
<TabItem value="put_auto_scaling_policy">

Creates or updates an automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates Amazon EC2 instances in response to the value of a CloudWatch metric.

```sql
REPLACE aws.emr.instance_groups
SET 
ClusterId = '{{ ClusterId }}',
InstanceGroupId = '{{ InstanceGroupId }}',
AutoScalingPolicy = '{{ AutoScalingPolicy }}'
WHERE 
region = '{{ region }}' --required
AND ClusterId = '{{ ClusterId }}' --required
AND InstanceGroupId = '{{ InstanceGroupId }}' --required
AND AutoScalingPolicy = '{{ AutoScalingPolicy }}' --required
RETURNING
auto_scaling_policy,
cluster_arn,
cluster_id,
instance_group_id;
```
</TabItem>
</Tabs>
