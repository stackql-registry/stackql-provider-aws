--- 
title: vpc_block_public_access_options
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_block_public_access_options
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

Creates, updates, deletes, gets or lists a <code>vpc_block_public_access_options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpc_block_public_access_options" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.vpc_block_public_access_options" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_vpc_block_public_access_options"
    values={[
        { label: 'describe_vpc_block_public_access_options', value: 'describe_vpc_block_public_access_options' }
    ]}
>
<TabItem value="describe_vpc_block_public_access_options">

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
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>An Amazon Web Services account ID.</td>
</tr>
<tr>
    <td><CopyableCode code="aws_region" /></td>
    <td><code>string</code></td>
    <td>An Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="exclusions_allowed" /></td>
    <td><code>string</code></td>
    <td>Determines if exclusions are allowed. If you have enabled VPC BPA at the Organization level, exclusions may be not-allowed. Otherwise, they are allowed.</td>
</tr>
<tr>
    <td><CopyableCode code="internet_gateway_block_mode" /></td>
    <td><code>string</code></td>
    <td>The current mode of VPC BPA. off: VPC BPA is not enabled and traffic is allowed to and from internet gateways and egress-only internet gateways in this Region. block-bidirectional: Block all traffic to and from internet gateways and egress-only internet gateways in this Region (except for excluded VPCs and subnets). block-ingress: Block all internet traffic to the VPCs in this Region (except for VPCs or subnets which are excluded). Only traffic to and from NAT gateways and egress-only internet gateways is allowed because these gateways only allow outbound connections to be established.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_timestamp" /></td>
    <td><code>string</code></td>
    <td>The last time the VPC BPA mode was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="managed_by" /></td>
    <td><code>string</code></td>
    <td>The entity that manages the state of VPC BPA. Possible values include: account - The state is managed by the account. declarative-policy - The state is managed by a declarative policy and can't be modified by the account.</td>
</tr>
<tr>
    <td><CopyableCode code="reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the current state.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of VPC BPA.</td>
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
    <td><a href="#describe_vpc_block_public_access_options"><CopyableCode code="describe_vpc_block_public_access_options" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describe VPC Block Public Access (BPA) options. VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that you own in a Region from reaching or being reached from the internet through internet gateways and egress-only internet gateways. To learn more about VPC BPA, see Block public access to VPCs and subnets in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#modify_vpc_block_public_access_options"><CopyableCode code="modify_vpc_block_public_access_options" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-InternetGatewayBlockMode"><code>InternetGatewayBlockMode</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Modify VPC Block Public Access (BPA) options. VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that you own in a Region from reaching or being reached from the internet through internet gateways and egress-only internet gateways. To learn more about VPC BPA, see Block public access to VPCs and subnets in the Amazon VPC User Guide.</td>
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
<tr id="parameter-InternetGatewayBlockMode">
    <td><CopyableCode code="InternetGatewayBlockMode" /></td>
    <td><code>string</code></td>
    <td>The mode of VPC BPA. off: VPC BPA is not enabled and traffic is allowed to and from internet gateways and egress-only internet gateways in this Region. block-bidirectional: Block all traffic to and from internet gateways and egress-only internet gateways in this Region (except for excluded VPCs and subnets). block-ingress: Block all internet traffic to the VPCs in this Region (except for VPCs or subnets which are excluded). Only traffic to and from NAT gateways and egress-only internet gateways is allowed because these gateways only allow outbound connections to be established.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_vpc_block_public_access_options"
    values={[
        { label: 'describe_vpc_block_public_access_options', value: 'describe_vpc_block_public_access_options' }
    ]}
>
<TabItem value="describe_vpc_block_public_access_options">

Describe VPC Block Public Access (BPA) options. VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that you own in a Region from reaching or being reached from the internet through internet gateways and egress-only internet gateways. To learn more about VPC BPA, see Block public access to VPCs and subnets in the Amazon VPC User Guide.

```sql
SELECT
aws_account_id,
aws_region,
exclusions_allowed,
internet_gateway_block_mode,
last_update_timestamp,
managed_by,
reason,
state
FROM aws.ec2.vpc_block_public_access_options
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_vpc_block_public_access_options"
    values={[
        { label: 'modify_vpc_block_public_access_options', value: 'modify_vpc_block_public_access_options' }
    ]}
>
<TabItem value="modify_vpc_block_public_access_options">

Modify VPC Block Public Access (BPA) options. VPC Block Public Access (BPA) enables you to block resources in VPCs and subnets that you own in a Region from reaching or being reached from the internet through internet gateways and egress-only internet gateways. To learn more about VPC BPA, see Block public access to VPCs and subnets in the Amazon VPC User Guide.

```sql
UPDATE aws.ec2.vpc_block_public_access_options
SET 
-- No updatable properties
WHERE 
InternetGatewayBlockMode = '{{ InternetGatewayBlockMode }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
RETURNING
aws_account_id,
aws_region,
exclusions_allowed,
internet_gateway_block_mode,
last_update_timestamp,
managed_by,
reason,
state;
```
</TabItem>
</Tabs>
