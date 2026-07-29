--- 
title: transit_gateway_prefix_list_references
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_prefix_list_references
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

Creates, updates, deletes, gets or lists a <code>transit_gateway_prefix_list_references</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transit_gateway_prefix_list_references" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.transit_gateway_prefix_list_references" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_transit_gateway_prefix_list_references"
    values={[
        { label: 'get_transit_gateway_prefix_list_references', value: 'get_transit_gateway_prefix_list_references' }
    ]}
>
<TabItem value="get_transit_gateway_prefix_list_references">

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
    <td><CopyableCode code="blackhole" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether traffic that matches this route is dropped.</td>
</tr>
<tr>
    <td><CopyableCode code="prefix_list_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the prefix list.</td>
</tr>
<tr>
    <td><CopyableCode code="prefix_list_owner_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the prefix list owner.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the prefix list reference.</td>
</tr>
<tr>
    <td><CopyableCode code="transit_gateway_attachment" /></td>
    <td><code>string</code></td>
    <td>Information about the transit gateway attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="transit_gateway_route_table_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway route table.</td>
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
    <td><a href="#get_transit_gateway_prefix_list_references"><CopyableCode code="get_transit_gateway_prefix_list_references" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-TransitGatewayRouteTableId"><code>TransitGatewayRouteTableId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Gets information about the prefix list references in a specified transit gateway route table.</td>
</tr>
<tr>
    <td><a href="#create_transit_gateway_prefix_list_reference"><CopyableCode code="create_transit_gateway_prefix_list_reference" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-TransitGatewayRouteTableId"><code>TransitGatewayRouteTableId</code></a>, <a href="#parameter-PrefixListId"><code>PrefixListId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TransitGatewayAttachmentId"><code>TransitGatewayAttachmentId</code></a>, <a href="#parameter-Blackhole"><code>Blackhole</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Creates a reference (route) to a prefix list in a specified transit gateway route table.</td>
</tr>
<tr>
    <td><a href="#modify_transit_gateway_prefix_list_reference"><CopyableCode code="modify_transit_gateway_prefix_list_reference" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-TransitGatewayRouteTableId"><code>TransitGatewayRouteTableId</code></a>, <a href="#parameter-PrefixListId"><code>PrefixListId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TransitGatewayAttachmentId"><code>TransitGatewayAttachmentId</code></a>, <a href="#parameter-Blackhole"><code>Blackhole</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Modifies a reference (route) to a prefix list in a specified transit gateway route table.</td>
</tr>
<tr>
    <td><a href="#delete_transit_gateway_prefix_list_reference"><CopyableCode code="delete_transit_gateway_prefix_list_reference" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-TransitGatewayRouteTableId"><code>TransitGatewayRouteTableId</code></a>, <a href="#parameter-PrefixListId"><code>PrefixListId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes a reference (route) to a prefix list in a specified transit gateway route table.</td>
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
<tr id="parameter-PrefixListId">
    <td><CopyableCode code="PrefixListId" /></td>
    <td><code>string</code></td>
    <td>The ID of the prefix list.</td>
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
    <td>Indicates whether to drop traffic that matches this route.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters. The possible values are: attachment.resource-id - The ID of the resource for the attachment. attachment.resource-type - The type of resource for the attachment. Valid values are vpc | vpn | direct-connect-gateway | peering. attachment.transit-gateway-attachment-id - The ID of the attachment. is-blackhole - Whether traffic matching the route is blocked (true | false). prefix-list-id - The ID of the prefix list. prefix-list-owner-id - The ID of the owner of the prefix list. state - The state of the prefix list reference (pending | available | modifying | deleting).</td>
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
<tr id="parameter-TransitGatewayAttachmentId">
    <td><CopyableCode code="TransitGatewayAttachmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the attachment to which traffic is routed.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_transit_gateway_prefix_list_references"
    values={[
        { label: 'get_transit_gateway_prefix_list_references', value: 'get_transit_gateway_prefix_list_references' }
    ]}
>
<TabItem value="get_transit_gateway_prefix_list_references">

Gets information about the prefix list references in a specified transit gateway route table.

```sql
SELECT
blackhole,
prefix_list_id,
prefix_list_owner_id,
state,
transit_gateway_attachment,
transit_gateway_route_table_id
FROM aws.ec2.transit_gateway_prefix_list_references
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


## `INSERT` examples

<Tabs
    defaultValue="create_transit_gateway_prefix_list_reference"
    values={[
        { label: 'create_transit_gateway_prefix_list_reference', value: 'create_transit_gateway_prefix_list_reference' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_transit_gateway_prefix_list_reference">

Creates a reference (route) to a prefix list in a specified transit gateway route table.

```sql
INSERT INTO aws.ec2.transit_gateway_prefix_list_references (
TransitGatewayRouteTableId,
PrefixListId,
region,
TransitGatewayAttachmentId,
Blackhole,
DryRun
)
SELECT 
'{{ TransitGatewayRouteTableId }}',
'{{ PrefixListId }}',
'{{ region }}',
'{{ TransitGatewayAttachmentId }}',
'{{ Blackhole }}',
'{{ DryRun }}'
RETURNING
blackhole,
prefix_list_id,
prefix_list_owner_id,
state,
transit_gateway_attachment,
transit_gateway_route_table_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: transit_gateway_prefix_list_references
  props:
    - name: TransitGatewayRouteTableId
      value: "{{ TransitGatewayRouteTableId }}"
      description: Required parameter for the transit_gateway_prefix_list_references resource.
    - name: PrefixListId
      value: "{{ PrefixListId }}"
      description: Required parameter for the transit_gateway_prefix_list_references resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the transit_gateway_prefix_list_references resource.
    - name: TransitGatewayAttachmentId
      value: "{{ TransitGatewayAttachmentId }}"
      description: The ID of the attachment to which traffic is routed.
      description: The ID of the attachment to which traffic is routed.
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


## `UPDATE` examples

<Tabs
    defaultValue="modify_transit_gateway_prefix_list_reference"
    values={[
        { label: 'modify_transit_gateway_prefix_list_reference', value: 'modify_transit_gateway_prefix_list_reference' }
    ]}
>
<TabItem value="modify_transit_gateway_prefix_list_reference">

Modifies a reference (route) to a prefix list in a specified transit gateway route table.

```sql
UPDATE aws.ec2.transit_gateway_prefix_list_references
SET 
-- No updatable properties
WHERE 
TransitGatewayRouteTableId = '{{ TransitGatewayRouteTableId }}' --required
AND PrefixListId = '{{ PrefixListId }}' --required
AND region = '{{ region }}' --required
AND TransitGatewayAttachmentId = '{{ TransitGatewayAttachmentId}}'
AND Blackhole = {{ Blackhole}}
AND DryRun = {{ DryRun}}
RETURNING
blackhole,
prefix_list_id,
prefix_list_owner_id,
state,
transit_gateway_attachment,
transit_gateway_route_table_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_transit_gateway_prefix_list_reference"
    values={[
        { label: 'delete_transit_gateway_prefix_list_reference', value: 'delete_transit_gateway_prefix_list_reference' }
    ]}
>
<TabItem value="delete_transit_gateway_prefix_list_reference">

Deletes a reference (route) to a prefix list in a specified transit gateway route table.

```sql
DELETE FROM aws.ec2.transit_gateway_prefix_list_references
WHERE TransitGatewayRouteTableId = '{{ TransitGatewayRouteTableId }}' --required
AND PrefixListId = '{{ PrefixListId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
