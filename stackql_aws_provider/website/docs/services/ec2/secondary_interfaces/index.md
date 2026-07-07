--- 
title: secondary_interfaces
hide_title: false
hide_table_of_contents: false
keywords:
  - secondary_interfaces
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

Creates, updates, deletes, gets or lists a <code>secondary_interfaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="secondary_interfaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.secondary_interfaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_secondary_interfaces"
    values={[
        { label: 'describe_secondary_interfaces', value: 'describe_secondary_interfaces' }
    ]}
>
<TabItem value="describe_secondary_interfaces">

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
    <td><CopyableCode code="Attachment" /></td>
    <td><code>string</code></td>
    <td>The attachment information for the secondary interface.</td>
</tr>
<tr>
    <td><CopyableCode code="AvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone of the secondary interface.</td>
</tr>
<tr>
    <td><CopyableCode code="AvailabilityZoneId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Availability Zone of the secondary interface.</td>
</tr>
<tr>
    <td><CopyableCode code="MacAddress" /></td>
    <td><code>string</code></td>
    <td>The MAC address of the secondary interface.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the secondary interface.</td>
</tr>
<tr>
    <td><CopyableCode code="PrivateIpv4Addresses" /></td>
    <td><code>string</code></td>
    <td>The private IPv4 addresses associated with the secondary interface.</td>
</tr>
<tr>
    <td><CopyableCode code="SecondaryInterfaceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the secondary interface.</td>
</tr>
<tr>
    <td><CopyableCode code="SecondaryInterfaceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the secondary interface.</td>
</tr>
<tr>
    <td><CopyableCode code="SecondaryInterfaceType" /></td>
    <td><code>string</code></td>
    <td>The type of secondary interface.</td>
</tr>
<tr>
    <td><CopyableCode code="SecondaryNetworkId" /></td>
    <td><code>string</code></td>
    <td>The ID of the secondary network.</td>
</tr>
<tr>
    <td><CopyableCode code="SecondaryNetworkType" /></td>
    <td><code>string</code></td>
    <td>The type of the secondary network.</td>
</tr>
<tr>
    <td><CopyableCode code="SecondarySubnetId" /></td>
    <td><code>string</code></td>
    <td>The ID of the secondary subnet.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceDestCheck" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether source/destination checking is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the secondary interface.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags assigned to the secondary interface.</td>
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
    <td><a href="#describe_secondary_interfaces"><CopyableCode code="describe_secondary_interfaces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-SecondaryInterfaceId"><code>SecondaryInterfaceId</code></a></td>
    <td>Describes one or more of your secondary interfaces.</td>
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
    <td>The filters. attachment.attachment-id - The ID of the secondary interface attachment. attachment.instance-id - The ID of the instance to which the secondary interface is attached. attachment.instance-owner-id - The ID of the Amazon Web Services account that owns the instance to which the secondary interface is attached. attachment.status - The attachment status (attaching | attached | detaching | detached). private-ipv4-addresses.private-ip-address - The private IPv4 address associated with the secondary interface. owner-id - The ID of the Amazon Web Services account that owns the secondary interface. secondary-interface-arn - The ARN of the secondary interface. secondary-interface-id - The ID of the secondary interface. secondary-interface-type - The type of secondary interface (secondary). secondary-network-id - The ID of the secondary network. secondary-network-type - The type of the secondary network (rdma). secondary-subnet-id - The ID of the secondary subnet. status - The status of the secondary interface (available | in-use). tag:<code>&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-SecondaryInterfaceId">
    <td><CopyableCode code="SecondaryInterfaceId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the secondary interfaces.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_secondary_interfaces"
    values={[
        { label: 'describe_secondary_interfaces', value: 'describe_secondary_interfaces' }
    ]}
>
<TabItem value="describe_secondary_interfaces">

Describes one or more of your secondary interfaces.

```sql
SELECT
Attachment,
AvailabilityZone,
AvailabilityZoneId,
MacAddress,
OwnerId,
PrivateIpv4Addresses,
SecondaryInterfaceArn,
SecondaryInterfaceId,
SecondaryInterfaceType,
SecondaryNetworkId,
SecondaryNetworkType,
SecondarySubnetId,
SourceDestCheck,
Status,
Tags
FROM aws.ec2.secondary_interfaces
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND SecondaryInterfaceId = '{{ SecondaryInterfaceId }}'
;
```
</TabItem>
</Tabs>
