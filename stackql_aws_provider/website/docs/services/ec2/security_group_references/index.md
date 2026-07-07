--- 
title: security_group_references
hide_title: false
hide_table_of_contents: false
keywords:
  - security_group_references
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

Creates, updates, deletes, gets or lists a <code>security_group_references</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="security_group_references" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.security_group_references" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_security_group_references"
    values={[
        { label: 'describe_security_group_references', value: 'describe_security_group_references' }
    ]}
>
<TabItem value="describe_security_group_references">

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
    <td><CopyableCode code="GroupId" /></td>
    <td><code>string</code></td>
    <td>The ID of your security group.</td>
</tr>
<tr>
    <td><CopyableCode code="ReferencingVpcId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC with the referencing security group.</td>
</tr>
<tr>
    <td><CopyableCode code="TransitGatewayId" /></td>
    <td><code>string</code></td>
    <td>The ID of the transit gateway (if applicable).</td>
</tr>
<tr>
    <td><CopyableCode code="VpcPeeringConnectionId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC peering connection (if applicable). For more information about security group referencing for peering connections, see Update your security groups to reference peer security groups in the VPC Peering Guide.</td>
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
    <td><a href="#describe_security_group_references"><CopyableCode code="describe_security_group_references" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-GroupId"><code>GroupId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describes the VPCs on the other side of a VPC peering or Transit Gateway connection that are referencing the security groups you've specified in this request.</td>
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
<tr id="parameter-GroupId">
    <td><CopyableCode code="GroupId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the security groups in your account.</td>
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
    defaultValue="describe_security_group_references"
    values={[
        { label: 'describe_security_group_references', value: 'describe_security_group_references' }
    ]}
>
<TabItem value="describe_security_group_references">

Describes the VPCs on the other side of a VPC peering or Transit Gateway connection that are referencing the security groups you've specified in this request.

```sql
SELECT
GroupId,
ReferencingVpcId,
TransitGatewayId,
VpcPeeringConnectionId
FROM aws.ec2.security_group_references
WHERE GroupId = '{{ GroupId }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
