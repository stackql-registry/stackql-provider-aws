--- 
title: transit_gateway_multicast_domain_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_multicast_domain_associations
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

Creates, updates, deletes, gets or lists a <code>transit_gateway_multicast_domain_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transit_gateway_multicast_domain_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.transit_gateway_multicast_domain_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_transit_gateway_multicast_domain_associations"
    values={[
        { label: 'get_transit_gateway_multicast_domain_associations', value: 'get_transit_gateway_multicast_domain_associations' }
    ]}
>
<TabItem value="get_transit_gateway_multicast_domain_associations">

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
    <td><CopyableCode code="ResourceOwnerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the transit gateway multicast domain association resource.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>The type of resource, for example a VPC attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="Subnet" /></td>
    <td><code>string</code></td>
    <td>The subnet associated with the transit gateway multicast domain.</td>
</tr>
<tr>
    <td><CopyableCode code="TransitGatewayAttachmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway attachment.</td>
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
    <td><a href="#get_transit_gateway_multicast_domain_associations"><CopyableCode code="get_transit_gateway_multicast_domain_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-TransitGatewayMulticastDomainId"><code>TransitGatewayMulticastDomainId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Gets information about the associations for the transit gateway multicast domain.</td>
</tr>
<tr>
    <td><a href="#accept_transit_gateway_multicast_domain_associations"><CopyableCode code="accept_transit_gateway_multicast_domain_associations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TransitGatewayMulticastDomainId"><code>TransitGatewayMulticastDomainId</code></a>, <a href="#parameter-TransitGatewayAttachmentId"><code>TransitGatewayAttachmentId</code></a>, <a href="#parameter-SubnetIds"><code>SubnetIds</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Accepts a request to associate subnets with a transit gateway multicast domain.</td>
</tr>
<tr>
    <td><a href="#reject_transit_gateway_multicast_domain_associations"><CopyableCode code="reject_transit_gateway_multicast_domain_associations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TransitGatewayMulticastDomainId"><code>TransitGatewayMulticastDomainId</code></a>, <a href="#parameter-TransitGatewayAttachmentId"><code>TransitGatewayAttachmentId</code></a>, <a href="#parameter-SubnetIds"><code>SubnetIds</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Rejects a request to associate cross-account subnets with a transit gateway multicast domain.</td>
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
<tr id="parameter-TransitGatewayMulticastDomainId">
    <td><CopyableCode code="TransitGatewayMulticastDomainId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway multicast domain.</td>
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
    <td>One or more filters. The possible values are: resource-id - The ID of the resource. resource-type - The type of resource. The valid value is: vpc. state - The state of the subnet association. Valid values are associated | associating | disassociated | disassociating. subnet-id - The ID of the subnet. transit-gateway-attachment-id - The id of the transit gateway attachment.</td>
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
<tr id="parameter-SubnetIds">
    <td><CopyableCode code="SubnetIds" /></td>
    <td><code>array</code></td>
    <td>The IDs of the subnets to associate with the transit gateway multicast domain.</td>
</tr>
<tr id="parameter-TransitGatewayAttachmentId">
    <td><CopyableCode code="TransitGatewayAttachmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway attachment.</td>
</tr>
<tr id="parameter-TransitGatewayMulticastDomainId">
    <td><CopyableCode code="TransitGatewayMulticastDomainId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway multicast domain.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_transit_gateway_multicast_domain_associations"
    values={[
        { label: 'get_transit_gateway_multicast_domain_associations', value: 'get_transit_gateway_multicast_domain_associations' }
    ]}
>
<TabItem value="get_transit_gateway_multicast_domain_associations">

Gets information about the associations for the transit gateway multicast domain.

```sql
SELECT
ResourceId,
ResourceOwnerId,
ResourceType,
Subnet,
TransitGatewayAttachmentId
FROM aws.ec2.transit_gateway_multicast_domain_associations
WHERE TransitGatewayMulticastDomainId = '{{ TransitGatewayMulticastDomainId }}' -- required
AND region = '{{ region }}' -- required
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_transit_gateway_multicast_domain_associations"
    values={[
        { label: 'accept_transit_gateway_multicast_domain_associations', value: 'accept_transit_gateway_multicast_domain_associations' },
        { label: 'reject_transit_gateway_multicast_domain_associations', value: 'reject_transit_gateway_multicast_domain_associations' }
    ]}
>
<TabItem value="accept_transit_gateway_multicast_domain_associations">

Accepts a request to associate subnets with a transit gateway multicast domain.

```sql
EXEC aws.ec2.transit_gateway_multicast_domain_associations.accept_transit_gateway_multicast_domain_associations 
@region='{{ region }}' --required, 
@TransitGatewayMulticastDomainId='{{ TransitGatewayMulticastDomainId }}', 
@TransitGatewayAttachmentId='{{ TransitGatewayAttachmentId }}', 
@SubnetIds='{{ SubnetIds }}', 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="reject_transit_gateway_multicast_domain_associations">

Rejects a request to associate cross-account subnets with a transit gateway multicast domain.

```sql
EXEC aws.ec2.transit_gateway_multicast_domain_associations.reject_transit_gateway_multicast_domain_associations 
@region='{{ region }}' --required, 
@TransitGatewayMulticastDomainId='{{ TransitGatewayMulticastDomainId }}', 
@TransitGatewayAttachmentId='{{ TransitGatewayAttachmentId }}', 
@SubnetIds='{{ SubnetIds }}', 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
