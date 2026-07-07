--- 
title: service_link_virtual_interfaces
hide_title: false
hide_table_of_contents: false
keywords:
  - service_link_virtual_interfaces
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

Creates, updates, deletes, gets or lists a <code>service_link_virtual_interfaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_link_virtual_interfaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.service_link_virtual_interfaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_service_link_virtual_interfaces"
    values={[
        { label: 'describe_service_link_virtual_interfaces', value: 'describe_service_link_virtual_interfaces' }
    ]}
>
<TabItem value="describe_service_link_virtual_interfaces">

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
    <td><CopyableCode code="ConfigurationState" /></td>
    <td><code>string</code></td>
    <td>The current state of the service link virtual interface.</td>
</tr>
<tr>
    <td><CopyableCode code="LocalAddress" /></td>
    <td><code>string</code></td>
    <td>The IPv4 address assigned to the local gateway virtual interface on the Outpost side.</td>
</tr>
<tr>
    <td><CopyableCode code="OutpostArn" /></td>
    <td><code>string</code></td>
    <td>The Outpost Amazon Resource Number (ARN) for the service link virtual interface.</td>
</tr>
<tr>
    <td><CopyableCode code="OutpostId" /></td>
    <td><code>string</code></td>
    <td>The Outpost ID for the service link virtual interface.</td>
</tr>
<tr>
    <td><CopyableCode code="OutpostLagId" /></td>
    <td><code>string</code></td>
    <td>The link aggregation group (LAG) ID for the service link virtual interface.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the service link virtual interface..</td>
</tr>
<tr>
    <td><CopyableCode code="PeerAddress" /></td>
    <td><code>string</code></td>
    <td>The IPv4 peer address for the service link virtual interface.</td>
</tr>
<tr>
    <td><CopyableCode code="PeerBgpAsn" /></td>
    <td><code>integer</code></td>
    <td>The ASN for the Border Gateway Protocol (BGP) associated with the service link virtual interface.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceLinkVirtualInterfaceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Number (ARN) for the service link virtual interface.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceLinkVirtualInterfaceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the service link virtual interface.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags associated with the service link virtual interface.</td>
</tr>
<tr>
    <td><CopyableCode code="Vlan" /></td>
    <td><code>integer</code></td>
    <td>The virtual local area network for the service link virtual interface.</td>
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
    <td><a href="#describe_service_link_virtual_interfaces"><CopyableCode code="describe_service_link_virtual_interfaces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ServiceLinkVirtualInterfaceId"><code>ServiceLinkVirtualInterfaceId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the Outpost service link virtual interfaces.</td>
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
    <td>The filters to use for narrowing down the request. The following filters are supported: outpost-lag-id - The ID of the Outpost LAG. outpost-arn - The Outpost ARN. owner-id - The ID of the Amazon Web Services account that owns the service link virtual interface. state - The state of the Outpost LAG. vlan - The ID of the address pool. service-link-virtual-interface-id - The ID of the service link virtual interface. local-gateway-virtual-interface-id - The ID of the local gateway virtual interface.</td>
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
<tr id="parameter-ServiceLinkVirtualInterfaceId">
    <td><CopyableCode code="ServiceLinkVirtualInterfaceId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the service link virtual interfaces.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_service_link_virtual_interfaces"
    values={[
        { label: 'describe_service_link_virtual_interfaces', value: 'describe_service_link_virtual_interfaces' }
    ]}
>
<TabItem value="describe_service_link_virtual_interfaces">

Describes the Outpost service link virtual interfaces.

```sql
SELECT
ConfigurationState,
LocalAddress,
OutpostArn,
OutpostId,
OutpostLagId,
OwnerId,
PeerAddress,
PeerBgpAsn,
ServiceLinkVirtualInterfaceArn,
ServiceLinkVirtualInterfaceId,
Tags,
Vlan
FROM aws.ec2.service_link_virtual_interfaces
WHERE region = '{{ region }}' -- required
AND ServiceLinkVirtualInterfaceId = '{{ ServiceLinkVirtualInterfaceId }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
