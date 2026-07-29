--- 
title: hosts
hide_title: false
hide_table_of_contents: false
keywords:
  - hosts
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

Creates, updates, deletes, gets or lists a <code>hosts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hosts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.hosts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_hosts"
    values={[
        { label: 'describe_hosts', value: 'describe_hosts' }
    ]}
>
<TabItem value="describe_hosts">

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
    <td><CopyableCode code="allocation_time" /></td>
    <td><code>string</code></td>
    <td>The time that the Dedicated Host was allocated.</td>
</tr>
<tr>
    <td><CopyableCode code="allows_multiple_instance_types" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the Dedicated Host supports multiple instance types of the same instance family. If the value is on, the Dedicated Host supports multiple instance types in the instance family. If the value is off, the Dedicated Host supports a single instance type only.</td>
</tr>
<tr>
    <td><CopyableCode code="asset_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Outpost hardware asset on which the Dedicated Host is allocated.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_placement" /></td>
    <td><code>string</code></td>
    <td>Whether auto-placement is on or off.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone of the Dedicated Host.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Availability Zone in which the Dedicated Host is allocated.</td>
</tr>
<tr>
    <td><CopyableCode code="available_capacity" /></td>
    <td><code>string</code></td>
    <td>Information about the instances running on the Dedicated Host.</td>
</tr>
<tr>
    <td><CopyableCode code="client_token" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring Idempotency.</td>
</tr>
<tr>
    <td><CopyableCode code="host_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Dedicated Host.</td>
</tr>
<tr>
    <td><CopyableCode code="host_maintenance" /></td>
    <td><code>string</code></td>
    <td>Indicates whether host maintenance is enabled or disabled for the Dedicated Host.</td>
</tr>
<tr>
    <td><CopyableCode code="host_properties" /></td>
    <td><code>string</code></td>
    <td>The hardware specifications of the Dedicated Host.</td>
</tr>
<tr>
    <td><CopyableCode code="host_recovery" /></td>
    <td><code>string</code></td>
    <td>Indicates whether host recovery is enabled or disabled for the Dedicated Host.</td>
</tr>
<tr>
    <td><CopyableCode code="host_reservation_id" /></td>
    <td><code>string</code></td>
    <td>The reservation ID of the Dedicated Host. This returns a null response if the Dedicated Host doesn't have an associated reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="instances" /></td>
    <td><code>string</code></td>
    <td>The IDs and instance type that are currently running on the Dedicated Host.</td>
</tr>
<tr>
    <td><CopyableCode code="member_of_service_linked_resource_group" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the Dedicated Host is in a host resource group. If memberOfServiceLinkedResourceGroup is true, the host is in a host resource group; otherwise, it is not.</td>
</tr>
<tr>
    <td><CopyableCode code="outpost_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon Web Services Outpost on which the Dedicated Host is allocated.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the Dedicated Host.</td>
</tr>
<tr>
    <td><CopyableCode code="release_time" /></td>
    <td><code>string</code></td>
    <td>The time that the Dedicated Host was released.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The Dedicated Host's state.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the Dedicated Host.</td>
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
    <td><a href="#describe_hosts"><CopyableCode code="describe_hosts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-HostId"><code>HostId</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-Filter"><code>Filter</code></a></td>
    <td>Describes the specified Dedicated Hosts or all your Dedicated Hosts. The results describe only the Dedicated Hosts in the Region you're currently using. All listed instances consume capacity on your Dedicated Host. Dedicated Hosts that have recently been released are listed with the state released.</td>
</tr>
<tr>
    <td><a href="#modify_hosts"><CopyableCode code="modify_hosts" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-HostId"><code>HostId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-HostRecovery"><code>HostRecovery</code></a>, <a href="#parameter-InstanceType"><code>InstanceType</code></a>, <a href="#parameter-InstanceFamily"><code>InstanceFamily</code></a>, <a href="#parameter-HostMaintenance"><code>HostMaintenance</code></a>, <a href="#parameter-AutoPlacement"><code>AutoPlacement</code></a></td>
    <td>Modify the auto-placement setting of a Dedicated Host. When auto-placement is enabled, any instances that you launch with a tenancy of host but without a specific host ID are placed onto any available Dedicated Host in your account that has auto-placement enabled. When auto-placement is disabled, you need to provide a host ID to have the instance launch onto a specific host. If no host ID is provided, the instance is launched onto a suitable host with auto-placement enabled. You can also use this API action to modify a Dedicated Host to support either multiple instance types in an instance family, or to support a specific instance type only.</td>
</tr>
<tr>
    <td><a href="#allocate_hosts"><CopyableCode code="allocate_hosts" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-InstanceFamily"><code>InstanceFamily</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-HostRecovery"><code>HostRecovery</code></a>, <a href="#parameter-OutpostArn"><code>OutpostArn</code></a>, <a href="#parameter-HostMaintenance"><code>HostMaintenance</code></a>, <a href="#parameter-AssetId"><code>AssetId</code></a>, <a href="#parameter-AvailabilityZoneId"><code>AvailabilityZoneId</code></a>, <a href="#parameter-AutoPlacement"><code>AutoPlacement</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-InstanceType"><code>InstanceType</code></a>, <a href="#parameter-Quantity"><code>Quantity</code></a>, <a href="#parameter-AvailabilityZone"><code>AvailabilityZone</code></a></td>
    <td>Allocates a Dedicated Host to your account. At a minimum, specify the supported instance type or instance family, the Availability Zone in which to allocate the host, and the number of hosts to allocate.</td>
</tr>
<tr>
    <td><a href="#release_hosts"><CopyableCode code="release_hosts" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-HostId"><code>HostId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>When you no longer want to use an On-Demand Dedicated Host it can be released. On-Demand billing is stopped and the host goes into released state. The host ID of Dedicated Hosts that have been released can no longer be specified in another request, for example, to modify the host. You must stop or terminate all instances on a host before it can be released. When Dedicated Hosts are released, it may take some time for them to stop counting toward your limit and you may receive capacity errors when trying to allocate new Dedicated Hosts. Wait a few minutes and then try again. Released hosts still appear in a DescribeHosts response.</td>
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
<tr id="parameter-HostId">
    <td><CopyableCode code="HostId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the Dedicated Hosts to release.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AssetId">
    <td><CopyableCode code="AssetId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the Outpost hardware assets on which to allocate the Dedicated Hosts. Targeting specific hardware assets on an Outpost can help to minimize latency between your workloads. This parameter is supported only if you specify OutpostArn. If you are allocating the Dedicated Hosts in a Region, omit this parameter. If you specify this parameter, you can omit Quantity. In this case, Amazon EC2 allocates a Dedicated Host on each specified hardware asset. If you specify both AssetIds and Quantity, then the value for Quantity must be equal to the number of asset IDs specified.</td>
</tr>
<tr id="parameter-AutoPlacement">
    <td><CopyableCode code="AutoPlacement" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the host accepts any untargeted instance launches that match its instance type configuration, or if it only accepts Host tenancy instance launches that specify its unique host ID. For more information, see Understanding auto-placement and affinity in the Amazon EC2 User Guide. Default: off</td>
</tr>
<tr id="parameter-AvailabilityZone">
    <td><CopyableCode code="AvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone in which to allocate the Dedicated Host.</td>
</tr>
<tr id="parameter-AvailabilityZoneId">
    <td><CopyableCode code="AvailabilityZoneId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Availability Zone.</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensuring Idempotency.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. auto-placement - Whether auto-placement is enabled or disabled (on | off). availability-zone - The Availability Zone of the host. client-token - The idempotency token that you provided when you allocated the host. host-reservation-id - The ID of the reservation assigned to this host. instance-type - The instance type size that the Dedicated Host is configured to support. state - The allocation state of the Dedicated Host (available | under-assessment | permanent-failure | released | released-permanent-failure). tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</td>
</tr>
<tr id="parameter-HostId">
    <td><CopyableCode code="HostId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the Dedicated Hosts. The IDs are used for targeted instance launches.</td>
</tr>
<tr id="parameter-HostMaintenance">
    <td><CopyableCode code="HostMaintenance" /></td>
    <td><code>string</code></td>
    <td>Indicates whether to enable or disable host maintenance for the Dedicated Host. For more information, see Host maintenance in the Amazon EC2 User Guide.</td>
</tr>
<tr id="parameter-HostRecovery">
    <td><CopyableCode code="HostRecovery" /></td>
    <td><code>string</code></td>
    <td>Indicates whether to enable or disable host recovery for the Dedicated Host. Host recovery is disabled by default. For more information, see Host recovery in the Amazon EC2 User Guide. Default: off</td>
</tr>
<tr id="parameter-InstanceFamily">
    <td><CopyableCode code="InstanceFamily" /></td>
    <td><code>string</code></td>
    <td>Specifies the instance family to be supported by the Dedicated Hosts. If you specify an instance family, the Dedicated Hosts support multiple instance types within that instance family. If you want the Dedicated Hosts to support a specific instance type only, omit this parameter and specify InstanceType instead. You cannot specify InstanceFamily and InstanceType in the same request.</td>
</tr>
<tr id="parameter-InstanceType">
    <td><CopyableCode code="InstanceType" /></td>
    <td><code>string</code></td>
    <td>Specifies the instance type to be supported by the Dedicated Hosts. If you specify an instance type, the Dedicated Hosts support instances of the specified instance type only. If you want the Dedicated Hosts to support multiple instance types in a specific instance family, omit this parameter and specify InstanceFamily instead. You cannot specify InstanceType and InstanceFamily in the same request.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for the request in a single page. The remaining results can be seen by sending another request with the returned nextToken value. This value can be between 5 and 500. If maxResults is given a larger value than 500, you receive an error. You cannot specify this parameter and the host IDs parameter in the same request.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results.</td>
</tr>
<tr id="parameter-OutpostArn">
    <td><CopyableCode code="OutpostArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon Web Services Outpost on which to allocate the Dedicated Host. If you specify OutpostArn, you can optionally specify AssetIds. If you are allocating the Dedicated Host in a Region, omit this parameter.</td>
</tr>
<tr id="parameter-Quantity">
    <td><CopyableCode code="Quantity" /></td>
    <td><code>integer</code></td>
    <td>The number of Dedicated Hosts to allocate to your account with these parameters. If you are allocating the Dedicated Hosts on an Outpost, and you specify AssetIds, you can omit this parameter. In this case, Amazon EC2 allocates a Dedicated Host on each specified hardware asset. If you specify both AssetIds and Quantity, then the value that you specify for Quantity must be equal to the number of asset IDs specified.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the Dedicated Host during creation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_hosts"
    values={[
        { label: 'describe_hosts', value: 'describe_hosts' }
    ]}
>
<TabItem value="describe_hosts">

Describes the specified Dedicated Hosts or all your Dedicated Hosts. The results describe only the Dedicated Hosts in the Region you're currently using. All listed instances consume capacity on your Dedicated Host. Dedicated Hosts that have recently been released are listed with the state released.

```sql
SELECT
allocation_time,
allows_multiple_instance_types,
asset_id,
auto_placement,
availability_zone,
availability_zone_id,
available_capacity,
client_token,
host_id,
host_maintenance,
host_properties,
host_recovery,
host_reservation_id,
instances,
member_of_service_linked_resource_group,
outpost_arn,
owner_id,
release_time,
state,
tags
FROM aws.ec2.hosts
WHERE region = '{{ region }}' -- required
AND HostId = '{{ HostId }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND Filter = '{{ Filter }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_hosts"
    values={[
        { label: 'modify_hosts', value: 'modify_hosts' },
        { label: 'allocate_hosts', value: 'allocate_hosts' }
    ]}
>
<TabItem value="modify_hosts">

Modify the auto-placement setting of a Dedicated Host. When auto-placement is enabled, any instances that you launch with a tenancy of host but without a specific host ID are placed onto any available Dedicated Host in your account that has auto-placement enabled. When auto-placement is disabled, you need to provide a host ID to have the instance launch onto a specific host. If no host ID is provided, the instance is launched onto a suitable host with auto-placement enabled. You can also use this API action to modify a Dedicated Host to support either multiple instance types in an instance family, or to support a specific instance type only.

```sql
UPDATE aws.ec2.hosts
SET 
-- No updatable properties
WHERE 
HostId = '{{ HostId }}' --required
AND region = '{{ region }}' --required
AND HostRecovery = '{{ HostRecovery}}'
AND InstanceType = '{{ InstanceType}}'
AND InstanceFamily = '{{ InstanceFamily}}'
AND HostMaintenance = '{{ HostMaintenance}}'
AND AutoPlacement = '{{ AutoPlacement}}'
RETURNING
successful,
unsuccessful;
```
</TabItem>
<TabItem value="allocate_hosts">

Allocates a Dedicated Host to your account. At a minimum, specify the supported instance type or instance family, the Availability Zone in which to allocate the host, and the number of hosts to allocate.

```sql
UPDATE aws.ec2.hosts
SET 
-- No updatable properties
WHERE 
region = '{{ region }}' --required
AND InstanceFamily = '{{ InstanceFamily}}'
AND TagSpecification = '{{ TagSpecification}}'
AND HostRecovery = '{{ HostRecovery}}'
AND OutpostArn = '{{ OutpostArn}}'
AND HostMaintenance = '{{ HostMaintenance}}'
AND AssetId = '{{ AssetId}}'
AND AvailabilityZoneId = '{{ AvailabilityZoneId}}'
AND AutoPlacement = '{{ AutoPlacement}}'
AND ClientToken = '{{ ClientToken}}'
AND InstanceType = '{{ InstanceType}}'
AND Quantity = '{{ Quantity}}'
AND AvailabilityZone = '{{ AvailabilityZone}}'
RETURNING
host_ids;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="release_hosts"
    values={[
        { label: 'release_hosts', value: 'release_hosts' }
    ]}
>
<TabItem value="release_hosts">

When you no longer want to use an On-Demand Dedicated Host it can be released. On-Demand billing is stopped and the host goes into released state. The host ID of Dedicated Hosts that have been released can no longer be specified in another request, for example, to modify the host. You must stop or terminate all instances on a host before it can be released. When Dedicated Hosts are released, it may take some time for them to stop counting toward your limit and you may receive capacity errors when trying to allocate new Dedicated Hosts. Wait a few minutes and then try again. Released hosts still appear in a DescribeHosts response.

```sql
EXEC aws.ec2.hosts.release_hosts 
@HostId='{{ HostId }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
