--- 
title: transit_gateway_route_table_propagations
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_route_table_propagations
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

Creates, updates, deletes, gets or lists a <code>transit_gateway_route_table_propagations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transit_gateway_route_table_propagations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.transit_gateway_route_table_propagations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_transit_gateway_route_table_propagations"
    values={[
        { label: 'get_transit_gateway_route_table_propagations', value: 'get_transit_gateway_route_table_propagations' }
    ]}
>
<TabItem value="get_transit_gateway_route_table_propagations">

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
    <td><CopyableCode code="ResourceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>The type of resource. Note that the tgw-peering resource type has been deprecated.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="TransitGatewayAttachmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="TransitGatewayRouteTableAnnouncementId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway route table announcement.</td>
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
    <td><a href="#get_transit_gateway_route_table_propagations"><CopyableCode code="get_transit_gateway_route_table_propagations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-TransitGatewayRouteTableId"><code>TransitGatewayRouteTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Gets information about the route table propagations for the specified transit gateway route table.</td>
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
<tr id="parameter-TransitGatewayRouteTableId">
    <td><CopyableCode code="TransitGatewayRouteTableId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway route table.</td>
</tr>
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
    <td>One or more filters. The possible values are: resource-id - The ID of the resource. resource-type - The resource type. Valid values are vpc | vpn | direct-connect-gateway | peering | connect. transit-gateway-attachment-id - The ID of the attachment.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_transit_gateway_route_table_propagations"
    values={[
        { label: 'get_transit_gateway_route_table_propagations', value: 'get_transit_gateway_route_table_propagations' }
    ]}
>
<TabItem value="get_transit_gateway_route_table_propagations">

Gets information about the route table propagations for the specified transit gateway route table.

```sql
SELECT
ResourceId,
ResourceType,
State,
TransitGatewayAttachmentId,
TransitGatewayRouteTableAnnouncementId
FROM aws.ec2.transit_gateway_route_table_propagations
WHERE TransitGatewayRouteTableId = '{{ TransitGatewayRouteTableId }}' -- required
AND region = '{{ region }}' -- required
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
