--- 
title: transit_gateway_multicast_domains
hide_title: false
hide_table_of_contents: false
keywords:
  - transit_gateway_multicast_domains
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

Creates, updates, deletes, gets or lists a <code>transit_gateway_multicast_domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="transit_gateway_multicast_domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.transit_gateway_multicast_domains" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_transit_gateway_multicast_domains"
    values={[
        { label: 'describe_transit_gateway_multicast_domains', value: 'describe_transit_gateway_multicast_domains' }
    ]}
>
<TabItem value="describe_transit_gateway_multicast_domains">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string</code></td>
    <td>The time the transit gateway multicast domain was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Options" /></td>
    <td><code>string</code></td>
    <td>The options for the transit gateway multicast domain.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account that owns the transit gateway multicast domain.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the transit gateway multicast domain.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags for the transit gateway multicast domain.</td>
</tr>
<tr>
    <td><CopyableCode code="TransitGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="TransitGatewayMulticastDomainArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the transit gateway multicast domain.</td>
</tr>
<tr>
    <td><CopyableCode code="TransitGatewayMulticastDomainId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway multicast domain.</td>
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
    <td><a href="#describe_transit_gateway_multicast_domains"><CopyableCode code="describe_transit_gateway_multicast_domains" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TransitGatewayMulticastDomainIds"><code>TransitGatewayMulticastDomainIds</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes one or more transit gateway multicast domains.</td>
</tr>
<tr>
    <td><a href="#create_transit_gateway_multicast_domain"><CopyableCode code="create_transit_gateway_multicast_domain" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-TransitGatewayId"><code>TransitGatewayId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Options"><code>Options</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Creates a multicast domain using the specified transit gateway. The transit gateway must be in the available state before you create a domain. Use DescribeTransitGateways to see the state of transit gateway.</td>
</tr>
<tr>
    <td><a href="#associate_transit_gateway_multicast_domain"><CopyableCode code="associate_transit_gateway_multicast_domain" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-TransitGatewayMulticastDomainId"><code>TransitGatewayMulticastDomainId</code></a>, <a href="#parameter-TransitGatewayAttachmentId"><code>TransitGatewayAttachmentId</code></a>, <a href="#parameter-SubnetIds"><code>SubnetIds</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Associates the specified subnets and transit gateway attachments with the specified transit gateway multicast domain. The transit gateway attachment must be in the available state before you can add a resource. Use DescribeTransitGatewayAttachments to see the state of the attachment.</td>
</tr>
<tr>
    <td><a href="#delete_transit_gateway_multicast_domain"><CopyableCode code="delete_transit_gateway_multicast_domain" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-TransitGatewayMulticastDomainId"><code>TransitGatewayMulticastDomainId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified transit gateway multicast domain.</td>
</tr>
<tr>
    <td><a href="#disassociate_transit_gateway_multicast_domain"><CopyableCode code="disassociate_transit_gateway_multicast_domain" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-TransitGatewayMulticastDomainId"><code>TransitGatewayMulticastDomainId</code></a>, <a href="#parameter-TransitGatewayAttachmentId"><code>TransitGatewayAttachmentId</code></a>, <a href="#parameter-SubnetIds"><code>SubnetIds</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Disassociates the specified subnets from the transit gateway multicast domain.</td>
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
<tr id="parameter-SubnetIds">
    <td><CopyableCode code="SubnetIds" /></td>
    <td><code>array</code></td>
    <td>The IDs of the subnets;</td>
</tr>
<tr id="parameter-TransitGatewayAttachmentId">
    <td><CopyableCode code="TransitGatewayAttachmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the attachment.</td>
</tr>
<tr id="parameter-TransitGatewayId">
    <td><CopyableCode code="TransitGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway.</td>
</tr>
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
    <td>One or more filters. The possible values are: state - The state of the transit gateway multicast domain. Valid values are pending | available | deleting | deleted. transit-gateway-id - The ID of the transit gateway. transit-gateway-multicast-domain-id - The ID of the transit gateway multicast domain.</td>
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
<tr id="parameter-Options">
    <td><CopyableCode code="Options" /></td>
    <td><code>object</code></td>
    <td>The options for the transit gateway multicast domain.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags for the transit gateway multicast domain.</td>
</tr>
<tr id="parameter-TransitGatewayMulticastDomainIds">
    <td><CopyableCode code="TransitGatewayMulticastDomainIds" /></td>
    <td><code>array</code></td>
    <td>The ID of the transit gateway multicast domain.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_transit_gateway_multicast_domains"
    values={[
        { label: 'describe_transit_gateway_multicast_domains', value: 'describe_transit_gateway_multicast_domains' }
    ]}
>
<TabItem value="describe_transit_gateway_multicast_domains">

Describes one or more transit gateway multicast domains.

```sql
SELECT
CreationTime,
Options,
OwnerId,
State,
Tags,
TransitGatewayId,
TransitGatewayMulticastDomainArn,
TransitGatewayMulticastDomainId
FROM aws.ec2.transit_gateway_multicast_domains
WHERE region = '{{ region }}' -- required
AND TransitGatewayMulticastDomainIds = '{{ TransitGatewayMulticastDomainIds }}'
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
    defaultValue="create_transit_gateway_multicast_domain"
    values={[
        { label: 'create_transit_gateway_multicast_domain', value: 'create_transit_gateway_multicast_domain' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_transit_gateway_multicast_domain">

Creates a multicast domain using the specified transit gateway. The transit gateway must be in the available state before you create a domain. Use DescribeTransitGateways to see the state of transit gateway.

```sql
INSERT INTO aws.ec2.transit_gateway_multicast_domains (
TransitGatewayId,
region,
Options,
TagSpecification,
DryRun
)
SELECT 
'{{ TransitGatewayId }}',
'{{ region }}',
'{{ Options }}',
'{{ TagSpecification }}',
'{{ DryRun }}'
RETURNING
CreationTime,
Options,
OwnerId,
State,
Tags,
TransitGatewayId,
TransitGatewayMulticastDomainArn,
TransitGatewayMulticastDomainId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: transit_gateway_multicast_domains
  props:
    - name: TransitGatewayId
      value: "{{ TransitGatewayId }}"
      description: Required parameter for the transit_gateway_multicast_domains resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the transit_gateway_multicast_domains resource.
    - name: Options
      value: "{{ Options }}"
      description: The options for the transit gateway multicast domain.
      description: The options for the transit gateway multicast domain.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags for the transit gateway multicast domain.
      description: The tags for the transit gateway multicast domain.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_transit_gateway_multicast_domain"
    values={[
        { label: 'associate_transit_gateway_multicast_domain', value: 'associate_transit_gateway_multicast_domain' }
    ]}
>
<TabItem value="associate_transit_gateway_multicast_domain">

Associates the specified subnets and transit gateway attachments with the specified transit gateway multicast domain. The transit gateway attachment must be in the available state before you can add a resource. Use DescribeTransitGatewayAttachments to see the state of the attachment.

```sql
UPDATE aws.ec2.transit_gateway_multicast_domains
SET 
-- No updatable properties
WHERE 
TransitGatewayMulticastDomainId = '{{ TransitGatewayMulticastDomainId }}' --required
AND TransitGatewayAttachmentId = '{{ TransitGatewayAttachmentId }}' --required
AND SubnetIds = '{{ SubnetIds }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
RETURNING
ResourceId,
ResourceOwnerId,
ResourceType,
Subnets,
TransitGatewayAttachmentId,
TransitGatewayMulticastDomainId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_transit_gateway_multicast_domain"
    values={[
        { label: 'delete_transit_gateway_multicast_domain', value: 'delete_transit_gateway_multicast_domain' }
    ]}
>
<TabItem value="delete_transit_gateway_multicast_domain">

Deletes the specified transit gateway multicast domain.

```sql
DELETE FROM aws.ec2.transit_gateway_multicast_domains
WHERE TransitGatewayMulticastDomainId = '{{ TransitGatewayMulticastDomainId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_transit_gateway_multicast_domain"
    values={[
        { label: 'disassociate_transit_gateway_multicast_domain', value: 'disassociate_transit_gateway_multicast_domain' }
    ]}
>
<TabItem value="disassociate_transit_gateway_multicast_domain">

Disassociates the specified subnets from the transit gateway multicast domain.

```sql
EXEC aws.ec2.transit_gateway_multicast_domains.disassociate_transit_gateway_multicast_domain 
@TransitGatewayMulticastDomainId='{{ TransitGatewayMulticastDomainId }}' --required, 
@TransitGatewayAttachmentId='{{ TransitGatewayAttachmentId }}' --required, 
@SubnetIds='{{ SubnetIds }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
</Tabs>
