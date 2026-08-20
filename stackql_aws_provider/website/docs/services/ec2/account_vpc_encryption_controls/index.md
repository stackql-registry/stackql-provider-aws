--- 
title: account_vpc_encryption_controls
hide_title: false
hide_table_of_contents: false
keywords:
  - account_vpc_encryption_controls
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

Creates, updates, deletes, gets or lists an <code>account_vpc_encryption_controls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_vpc_encryption_controls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.account_vpc_encryption_controls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_account_vpc_encryption_control"
    values={[
        { label: 'describe_account_vpc_encryption_control', value: 'describe_account_vpc_encryption_control' }
    ]}
>
<TabItem value="describe_account_vpc_encryption_control">

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
    <td><CopyableCode code="exclusions" /></td>
    <td><code>string</code></td>
    <td>Information about the traffic exclusions for the account-level VPC Encryption Control configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_timestamp" /></td>
    <td><code>string</code></td>
    <td>The date and time when the account-level VPC Encryption Control configuration was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="managed_by" /></td>
    <td><code>string</code></td>
    <td>The entity that manages the account-level VPC Encryption Control configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>The encryption mode for the account-level VPC Encryption Control configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The current state of the account-level VPC Encryption Control configuration.</td>
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
    <td><a href="#describe_account_vpc_encryption_control"><CopyableCode code="describe_account_vpc_encryption_control" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the account-level VPC Encryption Control configuration for your account. VPC Encryption Control enables you to enforce encryption for all data in transit within and between VPCs to meet compliance requirements. For more information, see Enforce VPC encryption in transit in the Amazon VPC User Guide.</td>
</tr>
<tr>
    <td><a href="#modify_account_vpc_encryption_control"><CopyableCode code="modify_account_vpc_encryption_control" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Mode"><code>Mode</code></a>, <a href="#parameter-InternetGateway"><code>InternetGateway</code></a>, <a href="#parameter-EgressOnlyInternetGateway"><code>EgressOnlyInternetGateway</code></a>, <a href="#parameter-NatGateway"><code>NatGateway</code></a>, <a href="#parameter-VirtualPrivateGateway"><code>VirtualPrivateGateway</code></a>, <a href="#parameter-VpcPeering"><code>VpcPeering</code></a>, <a href="#parameter-Lambda"><code>Lambda</code></a>, <a href="#parameter-VpcLattice"><code>VpcLattice</code></a>, <a href="#parameter-ElasticFileSystem"><code>ElasticFileSystem</code></a></td>
    <td>Modifies the account-level VPC Encryption Control configuration. This sets the encryption control mode and resource exclusions that apply to the VPCs in your account. VPC Encryption Control enables you to enforce encryption for all data in transit within and between VPCs to meet compliance requirements. For more information, see Enforce VPC encryption in transit in the Amazon VPC User Guide.</td>
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
<tr id="parameter-EgressOnlyInternetGateway">
    <td><CopyableCode code="EgressOnlyInternetGateway" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to exclude egress-only internet gateway resource from account-level encryption enforcement.</td>
</tr>
<tr id="parameter-ElasticFileSystem">
    <td><CopyableCode code="ElasticFileSystem" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to exclude Elastic File System service from account-level encryption enforcement.</td>
</tr>
<tr id="parameter-InternetGateway">
    <td><CopyableCode code="InternetGateway" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to exclude internet gateway resource from account-level encryption enforcement.</td>
</tr>
<tr id="parameter-Lambda">
    <td><CopyableCode code="Lambda" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to exclude Lambda service from account-level encryption enforcement.</td>
</tr>
<tr id="parameter-Mode">
    <td><CopyableCode code="Mode" /></td>
    <td><code>string</code></td>
    <td>The encryption mode for the account encryption control configuration.</td>
</tr>
<tr id="parameter-NatGateway">
    <td><CopyableCode code="NatGateway" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to exclude NAT gateway resource from account-level encryption enforcement.</td>
</tr>
<tr id="parameter-VirtualPrivateGateway">
    <td><CopyableCode code="VirtualPrivateGateway" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to exclude virtual private gateway resource from account-level encryption enforcement.</td>
</tr>
<tr id="parameter-VpcLattice">
    <td><CopyableCode code="VpcLattice" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to exclude VPC Lattice service from account-level encryption enforcement.</td>
</tr>
<tr id="parameter-VpcPeering">
    <td><CopyableCode code="VpcPeering" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to exclude VPC peering connection resource from account-level encryption enforcement.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_account_vpc_encryption_control"
    values={[
        { label: 'describe_account_vpc_encryption_control', value: 'describe_account_vpc_encryption_control' }
    ]}
>
<TabItem value="describe_account_vpc_encryption_control">

Describes the account-level VPC Encryption Control configuration for your account. VPC Encryption Control enables you to enforce encryption for all data in transit within and between VPCs to meet compliance requirements. For more information, see Enforce VPC encryption in transit in the Amazon VPC User Guide.

```sql
SELECT
exclusions,
last_update_timestamp,
managed_by,
mode,
state
FROM aws.ec2.account_vpc_encryption_controls
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_account_vpc_encryption_control"
    values={[
        { label: 'modify_account_vpc_encryption_control', value: 'modify_account_vpc_encryption_control' }
    ]}
>
<TabItem value="modify_account_vpc_encryption_control">

Modifies the account-level VPC Encryption Control configuration. This sets the encryption control mode and resource exclusions that apply to the VPCs in your account. VPC Encryption Control enables you to enforce encryption for all data in transit within and between VPCs to meet compliance requirements. For more information, see Enforce VPC encryption in transit in the Amazon VPC User Guide.

```sql
UPDATE aws.ec2.account_vpc_encryption_controls
SET 
-- No updatable properties
WHERE 
region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND Mode = '{{ Mode}}'
AND InternetGateway = '{{ InternetGateway}}'
AND EgressOnlyInternetGateway = '{{ EgressOnlyInternetGateway}}'
AND NatGateway = '{{ NatGateway}}'
AND VirtualPrivateGateway = '{{ VirtualPrivateGateway}}'
AND VpcPeering = '{{ VpcPeering}}'
AND Lambda = '{{ Lambda}}'
AND VpcLattice = '{{ VpcLattice}}'
AND ElasticFileSystem = '{{ ElasticFileSystem}}'
RETURNING
exclusions,
last_update_timestamp,
managed_by,
mode,
state;
```
</TabItem>
</Tabs>
