--- 
title: stale_security_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - stale_security_groups
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

Creates, updates, deletes, gets or lists a <code>stale_security_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="stale_security_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.stale_security_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_stale_security_groups"
    values={[
        { label: 'describe_stale_security_groups', value: 'describe_stale_security_groups' }
    ]}
>
<TabItem value="describe_stale_security_groups">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the security group.</td>
</tr>
<tr>
    <td><CopyableCode code="group_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the security group.</td>
</tr>
<tr>
    <td><CopyableCode code="group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the security group.</td>
</tr>
<tr>
    <td><CopyableCode code="stale_ip_permissions" /></td>
    <td><code>string</code></td>
    <td>Information about the stale inbound rules in the security group.</td>
</tr>
<tr>
    <td><CopyableCode code="stale_ip_permissions_egress" /></td>
    <td><code>string</code></td>
    <td>Information about the stale outbound rules in the security group.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC for the security group.</td>
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
    <td><a href="#describe_stale_security_groups"><CopyableCode code="describe_stale_security_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-VpcId"><code>VpcId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Describes the stale security group rules for security groups referenced across a VPC peering connection, transit gateway connection, or with a security group VPC association. Rules are stale when they reference a deleted security group. Rules can also be stale if they reference a security group in a peer VPC for which the VPC peering connection has been deleted, across a transit gateway where the transit gateway has been deleted (or the transit gateway security group referencing feature has been disabled), or if a security group VPC association has been disassociated.</td>
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
    <td>The ID of the VPC.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_stale_security_groups"
    values={[
        { label: 'describe_stale_security_groups', value: 'describe_stale_security_groups' }
    ]}
>
<TabItem value="describe_stale_security_groups">

Describes the stale security group rules for security groups referenced across a VPC peering connection, transit gateway connection, or with a security group VPC association. Rules are stale when they reference a deleted security group. Rules can also be stale if they reference a security group in a peer VPC for which the VPC peering connection has been deleted, across a transit gateway where the transit gateway has been deleted (or the transit gateway security group referencing feature has been disabled), or if a security group VPC association has been disassociated.

```sql
SELECT
description,
group_id,
group_name,
stale_ip_permissions,
stale_ip_permissions_egress,
vpc_id
FROM aws.ec2.stale_security_groups
WHERE VpcId = '{{ VpcId }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
