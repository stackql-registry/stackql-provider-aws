--- 
title: instance_topologies
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_topologies
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

Creates, updates, deletes, gets or lists an <code>instance_topologies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_topologies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.instance_topologies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_instance_topology"
    values={[
        { label: 'describe_instance_topology', value: 'describe_instance_topology' }
    ]}
>
<TabItem value="describe_instance_topology">

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
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>The name of the Availability Zone or Local Zone that the instance is in.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_block_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Capacity Block. This parameter is only supported for UltraServer instances and identifies instances within the UltraServer domain.</td>
</tr>
<tr>
    <td><CopyableCode code="group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the placement group that the instance is in.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The instance ID.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_type" /></td>
    <td><code>string</code></td>
    <td>The instance type.</td>
</tr>
<tr>
    <td><CopyableCode code="network_nodes" /></td>
    <td><code>string</code></td>
    <td>The network nodes. The nodes are hashed based on your account. Instances from different accounts running under the same server will return a different hashed list of strings. The value is null or empty if: The instance type is not supported. The instance is in a state other than running.</td>
</tr>
<tr>
    <td><CopyableCode code="zone_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Availability Zone or Local Zone that the instance is in.</td>
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
    <td><a href="#describe_instance_topology"><CopyableCode code="describe_instance_topology" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-GroupName"><code>GroupName</code></a>, <a href="#parameter-Filter"><code>Filter</code></a></td>
    <td>Describes a tree-based hierarchy that represents the physical host placement of your EC2 instances within an Availability Zone or Local Zone. You can use this information to determine the relative proximity of your EC2 instances within the Amazon Web Services network to support your tightly coupled workloads. Instance topology is supported for specific instance types only. For more information, see Prerequisites for Amazon EC2 instance topology in the Amazon EC2 User Guide. The Amazon EC2 API follows an eventual consistency model due to the distributed nature of the system supporting it. As a result, when you call the DescribeInstanceTopology API command immediately after launching instances, the response might return a null value for capacityBlockId because the data might not have fully propagated across all subsystems. For more information, see Eventual consistency in the Amazon EC2 API in the Amazon EC2 Developer Guide. For more information, see Amazon EC2 topology in the Amazon EC2 User Guide.</td>
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
    <td>Checks whether you have the required permissions for the operation, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. availability-zone - The name of the Availability Zone (for example, us-west-2a) or Local Zone (for example, us-west-2-lax-1b) that the instance is in. instance-type - The instance type (for example, p4d.24xlarge) or instance family (for example, p4d*). You can use the * wildcard to match zero or more characters, or the ? wildcard to match zero or one character. zone-id - The ID of the Availability Zone (for example, usw2-az2) or Local Zone (for example, usw2-lax1-az1) that the instance is in.</td>
</tr>
<tr id="parameter-GroupName">
    <td><CopyableCode code="GroupName" /></td>
    <td><code>array</code></td>
    <td>The name of the placement group that each instance is in. Constraints: Maximum 100 explicitly specified placement group names.</td>
</tr>
<tr id="parameter-InstanceId">
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>array</code></td>
    <td>The instance IDs. Default: Describes all your instances. Constraints: Maximum 100 explicitly specified instance IDs.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination. You can't specify this parameter and the instance IDs parameter in the same request. Default: 20</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_instance_topology"
    values={[
        { label: 'describe_instance_topology', value: 'describe_instance_topology' }
    ]}
>
<TabItem value="describe_instance_topology">

Describes a tree-based hierarchy that represents the physical host placement of your EC2 instances within an Availability Zone or Local Zone. You can use this information to determine the relative proximity of your EC2 instances within the Amazon Web Services network to support your tightly coupled workloads. Instance topology is supported for specific instance types only. For more information, see Prerequisites for Amazon EC2 instance topology in the Amazon EC2 User Guide. The Amazon EC2 API follows an eventual consistency model due to the distributed nature of the system supporting it. As a result, when you call the DescribeInstanceTopology API command immediately after launching instances, the response might return a null value for capacityBlockId because the data might not have fully propagated across all subsystems. For more information, see Eventual consistency in the Amazon EC2 API in the Amazon EC2 Developer Guide. For more information, see Amazon EC2 topology in the Amazon EC2 User Guide.

```sql
SELECT
availability_zone,
capacity_block_id,
group_name,
instance_id,
instance_type,
network_nodes,
zone_id
FROM aws.ec2.instance_topologies
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND InstanceId = '{{ InstanceId }}'
AND GroupName = '{{ GroupName }}'
AND Filter = '{{ Filter }}'
;
```
</TabItem>
</Tabs>
