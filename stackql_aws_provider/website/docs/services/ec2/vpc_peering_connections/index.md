--- 
title: vpc_peering_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_peering_connections
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

Creates, updates, deletes, gets or lists a <code>vpc_peering_connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpc_peering_connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.vpc_peering_connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_vpc_peering_connections"
    values={[
        { label: 'describe_vpc_peering_connections', value: 'describe_vpc_peering_connections' }
    ]}
>
<TabItem value="describe_vpc_peering_connections">

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
    <td><CopyableCode code="accepter_vpc_info" /></td>
    <td><code>string</code></td>
    <td>Information about the accepter VPC. CIDR block information is only returned when describing an active VPC peering connection.</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_time" /></td>
    <td><code>string</code></td>
    <td>The time that an unaccepted VPC peering connection will expire.</td>
</tr>
<tr>
    <td><CopyableCode code="requester_vpc_info" /></td>
    <td><code>string</code></td>
    <td>Information about the requester VPC. CIDR block information is only returned when describing an active VPC peering connection.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the VPC peering connection.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_peering_connection_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC peering connection.</td>
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
    <td><a href="#describe_vpc_peering_connections"><CopyableCode code="describe_vpc_peering_connections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-VpcPeeringConnectionId"><code>VpcPeeringConnectionId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a></td>
    <td>Describes your VPC peering connections. The default is to describe all your VPC peering connections. Alternatively, you can specify specific VPC peering connection IDs or filter the results to include only the VPC peering connections that match specific criteria.</td>
</tr>
<tr>
    <td><a href="#create_vpc_peering_connection"><CopyableCode code="create_vpc_peering_connection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-PeerRegion"><code>PeerRegion</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-PeerVpcId"><code>PeerVpcId</code></a>, <a href="#parameter-PeerOwnerId"><code>PeerOwnerId</code></a></td>
    <td>Requests a VPC peering connection between two VPCs: a requester VPC that you own and an accepter VPC with which to create the connection. The accepter VPC can belong to another Amazon Web Services account and can be in a different Region to the requester VPC. The requester VPC and accepter VPC cannot have overlapping CIDR blocks. Limitations and rules apply to a VPC peering connection. For more information, see the VPC peering limitations in the VPC Peering Guide. The owner of the accepter VPC must accept the peering request to activate the peering connection. The VPC peering connection request expires after 7 days, after which it cannot be accepted or rejected. If you create a VPC peering connection request between VPCs with overlapping CIDR blocks, the VPC peering connection has a status of failed.</td>
</tr>
<tr>
    <td><a href="#modify_vpc_peering_connection_options"><CopyableCode code="modify_vpc_peering_connection_options" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-VpcPeeringConnectionId"><code>VpcPeeringConnectionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AccepterPeeringConnectionOptions"><code>AccepterPeeringConnectionOptions</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-RequesterPeeringConnectionOptions"><code>RequesterPeeringConnectionOptions</code></a></td>
    <td>Modifies the VPC peering connection options on one side of a VPC peering connection. If the peered VPCs are in the same Amazon Web Services account, you can enable DNS resolution for queries from the local VPC. This ensures that queries from the local VPC resolve to private IP addresses in the peer VPC. This option is not available if the peered VPCs are in different Amazon Web Services accounts or different Regions. For peered VPCs in different Amazon Web Services accounts, each Amazon Web Services account owner must initiate a separate request to modify the peering connection options. For inter-region peering connections, you must use the Region for the requester VPC to modify the requester VPC peering options and the Region for the accepter VPC to modify the accepter VPC peering options. To verify which VPCs are the accepter and the requester for a VPC peering connection, use the DescribeVpcPeeringConnections command.</td>
</tr>
<tr>
    <td><a href="#delete_vpc_peering_connection"><CopyableCode code="delete_vpc_peering_connection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-VpcPeeringConnectionId"><code>VpcPeeringConnectionId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes a VPC peering connection. Either the owner of the requester VPC or the owner of the accepter VPC can delete the VPC peering connection if it's in the active state. The owner of the requester VPC can delete a VPC peering connection in the pending-acceptance state. You cannot delete a VPC peering connection that's in the failed or rejected state.</td>
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
<tr id="parameter-VpcId">
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the requester VPC. You must specify this parameter in the request.</td>
</tr>
<tr id="parameter-VpcPeeringConnectionId">
    <td><CopyableCode code="VpcPeeringConnectionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC peering connection.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AccepterPeeringConnectionOptions">
    <td><CopyableCode code="AccepterPeeringConnectionOptions" /></td>
    <td><code>object</code></td>
    <td>The VPC peering connection options for the accepter VPC.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. accepter-vpc-info.cidr-block - The IPv4 CIDR block of the accepter VPC. accepter-vpc-info.owner-id - The ID of the Amazon Web Services account that owns the accepter VPC. accepter-vpc-info.vpc-id - The ID of the accepter VPC. expiration-time - The expiration date and time for the VPC peering connection. requester-vpc-info.cidr-block - The IPv4 CIDR block of the requester's VPC. requester-vpc-info.owner-id - The ID of the Amazon Web Services account that owns the requester VPC. requester-vpc-info.vpc-id - The ID of the requester VPC. status-code - The status of the VPC peering connection (pending-acceptance | failed | expired | provisioning | active | deleting | deleted | rejected). status-message - A message that provides more information about the status of the VPC peering connection, if applicable. tag - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value. vpc-peering-connection-id - The ID of the VPC peering connection.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
<tr id="parameter-PeerOwnerId">
    <td><CopyableCode code="PeerOwnerId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the owner of the accepter VPC. Default: Your Amazon Web Services account ID</td>
</tr>
<tr id="parameter-PeerRegion">
    <td><CopyableCode code="PeerRegion" /></td>
    <td><code>string</code></td>
    <td>The Region code for the accepter VPC, if the accepter VPC is located in a Region other than the Region in which you make the request. Default: The Region in which you make the request.</td>
</tr>
<tr id="parameter-PeerVpcId">
    <td><CopyableCode code="PeerVpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC with which you are creating the VPC peering connection. You must specify this parameter in the request.</td>
</tr>
<tr id="parameter-RequesterPeeringConnectionOptions">
    <td><CopyableCode code="RequesterPeeringConnectionOptions" /></td>
    <td><code>object</code></td>
    <td>The VPC peering connection options for the requester VPC.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to assign to the peering connection.</td>
</tr>
<tr id="parameter-VpcPeeringConnectionId">
    <td><CopyableCode code="VpcPeeringConnectionId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the VPC peering connections. Default: Describes all your VPC peering connections.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_vpc_peering_connections"
    values={[
        { label: 'describe_vpc_peering_connections', value: 'describe_vpc_peering_connections' }
    ]}
>
<TabItem value="describe_vpc_peering_connections">

Describes your VPC peering connections. The default is to describe all your VPC peering connections. Alternatively, you can specify specific VPC peering connection IDs or filter the results to include only the VPC peering connections that match specific criteria.

```sql
SELECT
accepter_vpc_info,
expiration_time,
requester_vpc_info,
status,
tags,
vpc_peering_connection_id
FROM aws.ec2.vpc_peering_connections
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND DryRun = '{{ DryRun }}'
AND VpcPeeringConnectionId = '{{ VpcPeeringConnectionId }}'
AND Filter = '{{ Filter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_vpc_peering_connection"
    values={[
        { label: 'create_vpc_peering_connection', value: 'create_vpc_peering_connection' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_vpc_peering_connection">

Requests a VPC peering connection between two VPCs: a requester VPC that you own and an accepter VPC with which to create the connection. The accepter VPC can belong to another Amazon Web Services account and can be in a different Region to the requester VPC. The requester VPC and accepter VPC cannot have overlapping CIDR blocks. Limitations and rules apply to a VPC peering connection. For more information, see the VPC peering limitations in the VPC Peering Guide. The owner of the accepter VPC must accept the peering request to activate the peering connection. The VPC peering connection request expires after 7 days, after which it cannot be accepted or rejected. If you create a VPC peering connection request between VPCs with overlapping CIDR blocks, the VPC peering connection has a status of failed.

```sql
INSERT INTO aws.ec2.vpc_peering_connections (
VpcId,
region,
PeerRegion,
TagSpecification,
DryRun,
PeerVpcId,
PeerOwnerId
)
SELECT 
'{{ VpcId }}',
'{{ region }}',
'{{ PeerRegion }}',
'{{ TagSpecification }}',
'{{ DryRun }}',
'{{ PeerVpcId }}',
'{{ PeerOwnerId }}'
RETURNING
accepter_vpc_info,
expiration_time,
requester_vpc_info,
status,
tags,
vpc_peering_connection_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vpc_peering_connections
  props:
    - name: VpcId
      value: "{{ VpcId }}"
      description: Required parameter for the vpc_peering_connections resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vpc_peering_connections resource.
    - name: PeerRegion
      value: "{{ PeerRegion }}"
      description: The Region code for the accepter VPC, if the accepter VPC is located in a Region other than the Region in which you make the request. Default: The Region in which you make the request.
      description: The Region code for the accepter VPC, if the accepter VPC is located in a Region other than the Region in which you make the request. Default: The Region in which you make the request.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to assign to the peering connection.
      description: The tags to assign to the peering connection.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: PeerVpcId
      value: "{{ PeerVpcId }}"
      description: The ID of the VPC with which you are creating the VPC peering connection. You must specify this parameter in the request.
      description: The ID of the VPC with which you are creating the VPC peering connection. You must specify this parameter in the request.
    - name: PeerOwnerId
      value: "{{ PeerOwnerId }}"
      description: The Amazon Web Services account ID of the owner of the accepter VPC. Default: Your Amazon Web Services account ID
      description: The Amazon Web Services account ID of the owner of the accepter VPC. Default: Your Amazon Web Services account ID
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_vpc_peering_connection_options"
    values={[
        { label: 'modify_vpc_peering_connection_options', value: 'modify_vpc_peering_connection_options' }
    ]}
>
<TabItem value="modify_vpc_peering_connection_options">

Modifies the VPC peering connection options on one side of a VPC peering connection. If the peered VPCs are in the same Amazon Web Services account, you can enable DNS resolution for queries from the local VPC. This ensures that queries from the local VPC resolve to private IP addresses in the peer VPC. This option is not available if the peered VPCs are in different Amazon Web Services accounts or different Regions. For peered VPCs in different Amazon Web Services accounts, each Amazon Web Services account owner must initiate a separate request to modify the peering connection options. For inter-region peering connections, you must use the Region for the requester VPC to modify the requester VPC peering options and the Region for the accepter VPC to modify the accepter VPC peering options. To verify which VPCs are the accepter and the requester for a VPC peering connection, use the DescribeVpcPeeringConnections command.

```sql
UPDATE aws.ec2.vpc_peering_connections
SET 
-- No updatable properties
WHERE 
VpcPeeringConnectionId = '{{ VpcPeeringConnectionId }}' --required
AND region = '{{ region }}' --required
AND AccepterPeeringConnectionOptions = '{{ AccepterPeeringConnectionOptions}}'
AND DryRun = {{ DryRun}}
AND RequesterPeeringConnectionOptions = '{{ RequesterPeeringConnectionOptions}}'
RETURNING
accepter_peering_connection_options,
requester_peering_connection_options;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_vpc_peering_connection"
    values={[
        { label: 'delete_vpc_peering_connection', value: 'delete_vpc_peering_connection' }
    ]}
>
<TabItem value="delete_vpc_peering_connection">

Deletes a VPC peering connection. Either the owner of the requester VPC or the owner of the accepter VPC can delete the VPC peering connection if it's in the active state. The owner of the requester VPC can delete a VPC peering connection in the pending-acceptance state. You cannot delete a VPC peering connection that's in the failed or rejected state.

```sql
DELETE FROM aws.ec2.vpc_peering_connections
WHERE VpcPeeringConnectionId = '{{ VpcPeeringConnectionId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
