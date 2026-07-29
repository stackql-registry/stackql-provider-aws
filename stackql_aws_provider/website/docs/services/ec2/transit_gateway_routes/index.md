--- 
title: transit_gateway_routes
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_routes
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

Creates, updates, deletes, gets or lists a <code>transit_gateway_routes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transit_gateway_routes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.transit_gateway_routes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_transit_gateway_routes"
    values={[
        { label: 'search_transit_gateway_routes', value: 'search_transit_gateway_routes' }
    ]}
>
<TabItem value="search_transit_gateway_routes">

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
    <td><CopyableCode code="destination_cidr_block" /></td>
    <td><code>string</code></td>
    <td>The CIDR block used for destination matches.</td>
</tr>
<tr>
    <td><CopyableCode code="prefix_list_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the prefix list used for destination matches.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the route.</td>
</tr>
<tr>
    <td><CopyableCode code="transit_gateway_attachments" /></td>
    <td><code>string</code></td>
    <td>The attachments.</td>
</tr>
<tr>
    <td><CopyableCode code="transit_gateway_route_table_announcement_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway route table announcement.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The route type.</td>
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
    <td><a href="#search_transit_gateway_routes"><CopyableCode code="search_transit_gateway_routes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-TransitGatewayRouteTableId"><code>TransitGatewayRouteTableId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Searches for routes in the specified transit gateway route table.</td>
</tr>
<tr>
    <td><a href="#create_transit_gateway_route"><CopyableCode code="create_transit_gateway_route" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-DestinationCidrBlock"><code>DestinationCidrBlock</code></a>, <a href="#parameter-TransitGatewayRouteTableId"><code>TransitGatewayRouteTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TransitGatewayAttachmentId"><code>TransitGatewayAttachmentId</code></a>, <a href="#parameter-Blackhole"><code>Blackhole</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Creates a static route for the specified transit gateway route table.</td>
</tr>
<tr>
    <td><a href="#replace_transit_gateway_route"><CopyableCode code="replace_transit_gateway_route" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-DestinationCidrBlock"><code>DestinationCidrBlock</code></a>, <a href="#parameter-TransitGatewayRouteTableId"><code>TransitGatewayRouteTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TransitGatewayAttachmentId"><code>TransitGatewayAttachmentId</code></a>, <a href="#parameter-Blackhole"><code>Blackhole</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Replaces the specified route in the specified transit gateway route table.</td>
</tr>
<tr>
    <td><a href="#delete_transit_gateway_route"><CopyableCode code="delete_transit_gateway_route" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-TransitGatewayRouteTableId"><code>TransitGatewayRouteTableId</code></a>, <a href="#parameter-DestinationCidrBlock"><code>DestinationCidrBlock</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified route from the specified transit gateway route table.</td>
</tr>
<tr>
    <td><a href="#export_transit_gateway_routes"><CopyableCode code="export_transit_gateway_routes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-TransitGatewayRouteTableId"><code>TransitGatewayRouteTableId</code></a>, <a href="#parameter-S3Bucket"><code>S3Bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Exports routes from the specified transit gateway route table to the specified S3 bucket. By default, all routes are exported. Alternatively, you can filter by CIDR range. The routes are saved to the specified bucket in a JSON file. For more information, see Export route tables to Amazon S3 in the Amazon Web Services Transit Gateways Guide.</td>
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
<tr id="parameter-DestinationCidrBlock">
    <td><CopyableCode code="DestinationCidrBlock" /></td>
    <td><code>string</code></td>
    <td>The CIDR range for the route. This must match the CIDR for the route exactly.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. The possible values are: attachment.transit-gateway-attachment-id- The id of the transit gateway attachment. attachment.resource-id - The resource id of the transit gateway attachment. attachment.resource-type - The attachment resource type. Valid values are vpc | vpn | direct-connect-gateway | peering | connect. prefix-list-id - The ID of the prefix list. route-search.exact-match - The exact match of the specified filter. route-search.longest-prefix-match - The longest prefix that matches the route. route-search.subnet-of-match - The routes with a subnet that match the specified CIDR filter. route-search.supernet-of-match - The routes with a CIDR that encompass the CIDR filter. For example, if you have 10.0.1.0/29 and 10.0.1.0/31 routes in your route table and you specify supernet-of-match as 10.0.1.0/30, then the result returns 10.0.1.0/29. state - The state of the route (active | blackhole). type - The type of route (propagated | static).</td>
</tr>
<tr id="parameter-S3Bucket">
    <td><CopyableCode code="S3Bucket" /></td>
    <td><code>string</code></td>
    <td>The name of the S3 bucket.</td>
</tr>
<tr id="parameter-TransitGatewayRouteTableId">
    <td><CopyableCode code="TransitGatewayRouteTableId" /></td>
    <td><code>string</code></td>
    <td>The ID of the route table.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Blackhole">
    <td><CopyableCode code="Blackhole" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether traffic matching this route is to be dropped.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. The possible values are: attachment.transit-gateway-attachment-id - The id of the transit gateway attachment. attachment.resource-id - The resource id of the transit gateway attachment. route-search.exact-match - The exact match of the specified filter. route-search.longest-prefix-match - The longest prefix that matches the route. route-search.subnet-of-match - The routes with a subnet that match the specified CIDR filter. route-search.supernet-of-match - The routes with a CIDR that encompass the CIDR filter. For example, if you have 10.0.1.0/29 and 10.0.1.0/31 routes in your route table and you specify supernet-of-match as 10.0.1.0/30, then the result returns 10.0.1.0/29. state - The state of the route (active | blackhole). transit-gateway-route-destination-cidr-block - The CIDR range. type - The type of route (propagated | static).</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of routes to return. If a value is not provided, the default is 1000.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-TransitGatewayAttachmentId">
    <td><CopyableCode code="TransitGatewayAttachmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the attachment.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="search_transit_gateway_routes"
    values={[
        { label: 'search_transit_gateway_routes', value: 'search_transit_gateway_routes' }
    ]}
>
<TabItem value="search_transit_gateway_routes">

Searches for routes in the specified transit gateway route table.

```sql
SELECT
destination_cidr_block,
prefix_list_id,
state,
transit_gateway_attachments,
transit_gateway_route_table_announcement_id,
type
FROM aws.ec2.transit_gateway_routes
WHERE TransitGatewayRouteTableId = '{{ TransitGatewayRouteTableId }}' -- required
AND Filter = '{{ Filter }}' -- required
AND region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND DryRun = '{{ DryRun }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_transit_gateway_route"
    values={[
        { label: 'create_transit_gateway_route', value: 'create_transit_gateway_route' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_transit_gateway_route">

Creates a static route for the specified transit gateway route table.

```sql
INSERT INTO aws.ec2.transit_gateway_routes (
DestinationCidrBlock,
TransitGatewayRouteTableId,
region,
TransitGatewayAttachmentId,
Blackhole,
DryRun
)
SELECT 
'{{ DestinationCidrBlock }}',
'{{ TransitGatewayRouteTableId }}',
'{{ region }}',
'{{ TransitGatewayAttachmentId }}',
'{{ Blackhole }}',
'{{ DryRun }}'
RETURNING
destination_cidr_block,
prefix_list_id,
state,
transit_gateway_attachments,
transit_gateway_route_table_announcement_id,
type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: transit_gateway_routes
  props:
    - name: DestinationCidrBlock
      value: "{{ DestinationCidrBlock }}"
      description: Required parameter for the transit_gateway_routes resource.
    - name: TransitGatewayRouteTableId
      value: "{{ TransitGatewayRouteTableId }}"
      description: Required parameter for the transit_gateway_routes resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the transit_gateway_routes resource.
    - name: TransitGatewayAttachmentId
      value: "{{ TransitGatewayAttachmentId }}"
      description: The ID of the attachment.
      description: The ID of the attachment.
    - name: Blackhole
      value: {{ Blackhole }}
      description: Indicates whether to drop traffic that matches this route.
      description: Indicates whether to drop traffic that matches this route.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="replace_transit_gateway_route"
    values={[
        { label: 'replace_transit_gateway_route', value: 'replace_transit_gateway_route' }
    ]}
>
<TabItem value="replace_transit_gateway_route">

Replaces the specified route in the specified transit gateway route table.

```sql
REPLACE aws.ec2.transit_gateway_routes
SET 
-- No updatable properties
WHERE 
DestinationCidrBlock = '{{ DestinationCidrBlock }}' --required
AND TransitGatewayRouteTableId = '{{ TransitGatewayRouteTableId }}' --required
AND region = '{{ region }}' --required
AND TransitGatewayAttachmentId = '{{ TransitGatewayAttachmentId}}'
AND Blackhole = {{ Blackhole}}
AND DryRun = {{ DryRun}}
RETURNING
destination_cidr_block,
prefix_list_id,
state,
transit_gateway_attachments,
transit_gateway_route_table_announcement_id,
type;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_transit_gateway_route"
    values={[
        { label: 'delete_transit_gateway_route', value: 'delete_transit_gateway_route' }
    ]}
>
<TabItem value="delete_transit_gateway_route">

Deletes the specified route from the specified transit gateway route table.

```sql
DELETE FROM aws.ec2.transit_gateway_routes
WHERE TransitGatewayRouteTableId = '{{ TransitGatewayRouteTableId }}' --required
AND DestinationCidrBlock = '{{ DestinationCidrBlock }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="export_transit_gateway_routes"
    values={[
        { label: 'export_transit_gateway_routes', value: 'export_transit_gateway_routes' }
    ]}
>
<TabItem value="export_transit_gateway_routes">

Exports routes from the specified transit gateway route table to the specified S3 bucket. By default, all routes are exported. Alternatively, you can filter by CIDR range. The routes are saved to the specified bucket in a JSON file. For more information, see Export route tables to Amazon S3 in the Amazon Web Services Transit Gateways Guide.

```sql
EXEC aws.ec2.transit_gateway_routes.export_transit_gateway_routes 
@TransitGatewayRouteTableId='{{ TransitGatewayRouteTableId }}' --required, 
@S3Bucket='{{ S3Bucket }}' --required, 
@region='{{ region }}' --required, 
@Filter='{{ Filter }}', 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
