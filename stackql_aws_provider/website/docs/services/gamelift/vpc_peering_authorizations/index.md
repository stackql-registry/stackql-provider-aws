--- 
title: vpc_peering_authorizations
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_peering_authorizations
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

Creates, updates, deletes, gets or lists a <code>vpc_peering_authorizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpc_peering_authorizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.vpc_peering_authorizations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_vpc_peering_authorizations"
    values={[
        { label: 'describe_vpc_peering_authorizations', value: 'describe_vpc_peering_authorizations' }
    ]}
>
<TabItem value="describe_vpc_peering_authorizations">

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
    <td><CopyableCode code="VpcPeeringAuthorizations" /></td>
    <td><code>array</code></td>
    <td>A collection of objects that describe all valid VPC peering operations for the current Amazon Web Services account.</td>
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
    <td><a href="#describe_vpc_peering_authorizations"><CopyableCode code="describe_vpc_peering_authorizations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 Retrieves valid VPC peering authorizations that are pending for the Amazon Web Services account. This operation returns all VPC peering authorizations and requests for peering. This includes those initiated and received by this account. Related actions All APIs by task</td>
</tr>
<tr>
    <td><a href="#create_vpc_peering_authorization"><CopyableCode code="create_vpc_peering_authorization" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GameLiftAwsAccountId"><code>GameLiftAwsAccountId</code></a>, <a href="#parameter-PeerVpcId"><code>PeerVpcId</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 Requests authorization to create or delete a peer connection between the VPC for your Amazon GameLift Servers fleet and a virtual private cloud (VPC) in your Amazon Web Services account. VPC peering enables the game servers on your fleet to communicate directly with other Amazon Web Services resources. After you've received authorization, use CreateVpcPeeringConnection to establish the peering connection. For more information, see VPC Peering with Amazon GameLift Servers Fleets. You can peer with VPCs that are owned by any Amazon Web Services account you have access to, including the account that you use to manage your Amazon GameLift Servers fleets. You cannot peer with VPCs that are in different Regions. To request authorization to create a connection, call this operation from the Amazon Web Services account with the VPC that you want to peer to your Amazon GameLift Servers fleet. For example, to enable your game servers to retrieve data from a DynamoDB table, use the account that manages that DynamoDB resource. Identify the following values: (1) The ID of the VPC that you want to peer with, and (2) the ID of the Amazon Web Services account that you use to manage Amazon GameLift Servers. If successful, VPC peering is authorized for the specified VPC. To request authorization to delete a connection, call this operation from the Amazon Web Services account with the VPC that is peered with your Amazon GameLift Servers fleet. Identify the following values: (1) VPC ID that you want to delete the peering connection for, and (2) ID of the Amazon Web Services account that you use to manage Amazon GameLift Servers. The authorization remains valid for 24 hours unless it is canceled. You must create or delete the peering connection while the authorization is valid. Related actions All APIs by task</td>
</tr>
<tr>
    <td><a href="#delete_vpc_peering_authorization"><CopyableCode code="delete_vpc_peering_authorization" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2 Cancels a pending VPC peering authorization for the specified VPC. If you need to delete an existing VPC peering connection, use DeleteVpcPeeringConnection. Related actions All APIs by task</td>
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
    defaultValue="describe_vpc_peering_authorizations"
    values={[
        { label: 'describe_vpc_peering_authorizations', value: 'describe_vpc_peering_authorizations' }
    ]}
>
<TabItem value="describe_vpc_peering_authorizations">

This API works with the following fleet types: EC2 Retrieves valid VPC peering authorizations that are pending for the Amazon Web Services account. This operation returns all VPC peering authorizations and requests for peering. This includes those initiated and received by this account. Related actions All APIs by task

```sql
SELECT
VpcPeeringAuthorizations
FROM aws.gamelift.vpc_peering_authorizations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_vpc_peering_authorization"
    values={[
        { label: 'create_vpc_peering_authorization', value: 'create_vpc_peering_authorization' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_vpc_peering_authorization">

This API works with the following fleet types: EC2 Requests authorization to create or delete a peer connection between the VPC for your Amazon GameLift Servers fleet and a virtual private cloud (VPC) in your Amazon Web Services account. VPC peering enables the game servers on your fleet to communicate directly with other Amazon Web Services resources. After you've received authorization, use CreateVpcPeeringConnection to establish the peering connection. For more information, see VPC Peering with Amazon GameLift Servers Fleets. You can peer with VPCs that are owned by any Amazon Web Services account you have access to, including the account that you use to manage your Amazon GameLift Servers fleets. You cannot peer with VPCs that are in different Regions. To request authorization to create a connection, call this operation from the Amazon Web Services account with the VPC that you want to peer to your Amazon GameLift Servers fleet. For example, to enable your game servers to retrieve data from a DynamoDB table, use the account that manages that DynamoDB resource. Identify the following values: (1) The ID of the VPC that you want to peer with, and (2) the ID of the Amazon Web Services account that you use to manage Amazon GameLift Servers. If successful, VPC peering is authorized for the specified VPC. To request authorization to delete a connection, call this operation from the Amazon Web Services account with the VPC that is peered with your Amazon GameLift Servers fleet. Identify the following values: (1) VPC ID that you want to delete the peering connection for, and (2) ID of the Amazon Web Services account that you use to manage Amazon GameLift Servers. The authorization remains valid for 24 hours unless it is canceled. You must create or delete the peering connection while the authorization is valid. Related actions All APIs by task

```sql
INSERT INTO aws.gamelift.vpc_peering_authorizations (
GameLiftAwsAccountId,
PeerVpcId,
region
)
SELECT 
'{{ GameLiftAwsAccountId }}' /* required */,
'{{ PeerVpcId }}' /* required */,
'{{ region }}'
RETURNING
VpcPeeringAuthorization
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vpc_peering_authorizations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vpc_peering_authorizations resource.
    - name: GameLiftAwsAccountId
      value: "{{ GameLiftAwsAccountId }}"
      description: |
        A unique identifier for the Amazon Web Services account that you use to manage your Amazon GameLift Servers fleet. You can find your Account ID in the Amazon Web Services Management Console under account settings.
    - name: PeerVpcId
      value: "{{ PeerVpcId }}"
      description: |
        A unique identifier for a VPC with resources to be accessed by your Amazon GameLift Servers fleet. The VPC must be in the same Region as your fleet. To look up a VPC ID, use the VPC Dashboard in the Amazon Web Services Management Console. Learn more about VPC peering in VPC Peering with Amazon GameLift Servers Fleets.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_vpc_peering_authorization"
    values={[
        { label: 'delete_vpc_peering_authorization', value: 'delete_vpc_peering_authorization' }
    ]}
>
<TabItem value="delete_vpc_peering_authorization">

This API works with the following fleet types: EC2 Cancels a pending VPC peering authorization for the specified VPC. If you need to delete an existing VPC peering connection, use DeleteVpcPeeringConnection. Related actions All APIs by task

```sql
DELETE FROM aws.gamelift.vpc_peering_authorizations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
