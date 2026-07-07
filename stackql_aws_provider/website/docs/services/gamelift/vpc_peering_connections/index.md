--- 
title: vpc_peering_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_peering_connections
  - gamelift
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.vpc_peering_connections" /></td></tr>
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
    <td><CopyableCode code="VpcPeeringConnections" /></td>
    <td><code>array</code></td>
    <td>A collection of VPC peering connection records that match the request.</td>
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
    <td></td>
    <td>This API works with the following fleet types: EC2 Retrieves information on VPC peering connections. Use this operation to get peering information for all fleets or for one specific fleet ID. To retrieve connection information, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift Servers fleets. Specify a fleet ID or leave the parameter empty to retrieve all connection records. If successful, the retrieved information includes both active and pending connections. Active connections identify the IpV4 CIDR block that the VPC uses to connect. Related actions All APIs by task</td>
</tr>
<tr>
    <td><a href="#create_vpc_peering_connection"><CopyableCode code="create_vpc_peering_connection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FleetId"><code>FleetId</code></a>, <a href="#parameter-PeerVpcAwsAccountId"><code>PeerVpcAwsAccountId</code></a>, <a href="#parameter-PeerVpcId"><code>PeerVpcId</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 Establishes a VPC peering connection between a virtual private cloud (VPC) in an Amazon Web Services account with the VPC for your Amazon GameLift Servers fleet. VPC peering enables the game servers on your fleet to communicate directly with other Amazon Web Services resources. You can peer with VPCs in any Amazon Web Services account that you have access to, including the account that you use to manage your Amazon GameLift Servers fleets. You cannot peer with VPCs that are in different Regions. For more information, see VPC Peering with Amazon GameLift Servers Fleets. Before calling this operation to establish the peering connection, you first need to use CreateVpcPeeringAuthorization and identify the VPC you want to peer with. Once the authorization for the specified VPC is issued, you have 24 hours to establish the connection. These two operations handle all tasks necessary to peer the two VPCs, including acceptance, updating routing tables, etc. To establish the connection, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift Servers fleets. Identify the following values: (1) The ID of the fleet you want to be enable a VPC peering connection for; (2) The Amazon Web Services account with the VPC that you want to peer with; and (3) The ID of the VPC you want to peer with. This operation is asynchronous. If successful, a connection request is created. You can use continuous polling to track the request's status using DescribeVpcPeeringConnections , or by monitoring fleet events for success or failure using DescribeFleetEvents . Related actions All APIs by task</td>
</tr>
<tr>
    <td><a href="#delete_vpc_peering_connection"><CopyableCode code="delete_vpc_peering_connection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 Removes a VPC peering connection. To delete the connection, you must have a valid authorization for the VPC peering connection that you want to delete.. Once a valid authorization exists, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift Servers fleets. Identify the connection to delete by the connection ID and fleet ID. If successful, the connection is removed. Related actions All APIs by task</td>
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

This API works with the following fleet types: EC2 Retrieves information on VPC peering connections. Use this operation to get peering information for all fleets or for one specific fleet ID. To retrieve connection information, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift Servers fleets. Specify a fleet ID or leave the parameter empty to retrieve all connection records. If successful, the retrieved information includes both active and pending connections. Active connections identify the IpV4 CIDR block that the VPC uses to connect. Related actions All APIs by task

```sql
SELECT
VpcPeeringConnections
FROM aws.gamelift.vpc_peering_connections
WHERE region = '{{ region }}' -- required
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

This API works with the following fleet types: EC2 Establishes a VPC peering connection between a virtual private cloud (VPC) in an Amazon Web Services account with the VPC for your Amazon GameLift Servers fleet. VPC peering enables the game servers on your fleet to communicate directly with other Amazon Web Services resources. You can peer with VPCs in any Amazon Web Services account that you have access to, including the account that you use to manage your Amazon GameLift Servers fleets. You cannot peer with VPCs that are in different Regions. For more information, see VPC Peering with Amazon GameLift Servers Fleets. Before calling this operation to establish the peering connection, you first need to use CreateVpcPeeringAuthorization and identify the VPC you want to peer with. Once the authorization for the specified VPC is issued, you have 24 hours to establish the connection. These two operations handle all tasks necessary to peer the two VPCs, including acceptance, updating routing tables, etc. To establish the connection, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift Servers fleets. Identify the following values: (1) The ID of the fleet you want to be enable a VPC peering connection for; (2) The Amazon Web Services account with the VPC that you want to peer with; and (3) The ID of the VPC you want to peer with. This operation is asynchronous. If successful, a connection request is created. You can use continuous polling to track the request's status using DescribeVpcPeeringConnections , or by monitoring fleet events for success or failure using DescribeFleetEvents . Related actions All APIs by task

```sql
INSERT INTO aws.gamelift.vpc_peering_connections (
FleetId,
PeerVpcAwsAccountId,
PeerVpcId,
region
)
SELECT 
'{{ FleetId }}' /* required */,
'{{ PeerVpcAwsAccountId }}' /* required */,
'{{ PeerVpcId }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vpc_peering_connections
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vpc_peering_connections resource.
    - name: FleetId
      value: "{{ FleetId }}"
      description: |
        A unique identifier for the fleet. You can use either the fleet ID or ARN value. This tells Amazon GameLift Servers which GameLift VPC to peer with.
    - name: PeerVpcAwsAccountId
      value: "{{ PeerVpcAwsAccountId }}"
      description: |
        A unique identifier for the Amazon Web Services account with the VPC that you want to peer your Amazon GameLift Servers fleet with. You can find your Account ID in the Amazon Web Services Management Console under account settings.
    - name: PeerVpcId
      value: "{{ PeerVpcId }}"
      description: |
        A unique identifier for a VPC with resources to be accessed by your Amazon GameLift Servers fleet. The VPC must be in the same Region as your fleet. To look up a VPC ID, use the VPC Dashboard in the Amazon Web Services Management Console. Learn more about VPC peering in VPC Peering with Amazon GameLift Servers Fleets.
`}</CodeBlock>

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

This API works with the following fleet types: EC2 Removes a VPC peering connection. To delete the connection, you must have a valid authorization for the VPC peering connection that you want to delete.. Once a valid authorization exists, call this operation from the Amazon Web Services account that is used to manage the Amazon GameLift Servers fleets. Identify the connection to delete by the connection ID and fleet ID. If successful, the connection is removed. Related actions All APIs by task

```sql
DELETE FROM aws.gamelift.vpc_peering_connections
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
