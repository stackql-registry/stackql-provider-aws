--- 
title: mount_target_security_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - mount_target_security_groups
  - efs
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

Creates, updates, deletes, gets or lists a <code>mount_target_security_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mount_target_security_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.efs.mount_target_security_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_mount_target_security_groups"
    values={[
        { label: 'describe_mount_target_security_groups', value: 'describe_mount_target_security_groups' }
    ]}
>
<TabItem value="describe_mount_target_security_groups">

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
    <td><CopyableCode code="security_group" /></td>
    <td><code>string</code></td>
    <td>An array of security groups.</td>
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
    <td><a href="#describe_mount_target_security_groups"><CopyableCode code="describe_mount_target_security_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-mount_target_id"><code>mount_target_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the security groups currently in effect for a mount target. This operation requires that the network interface of the mount target has been created and the lifecycle state of the mount target is not deleted. This operation requires permissions for the following actions: elasticfilesystem:DescribeMountTargetSecurityGroups action on the mount target's file system. ec2:DescribeNetworkInterfaceAttribute action on the mount target's network interface.</td>
</tr>
<tr>
    <td><a href="#modify_mount_target_security_groups"><CopyableCode code="modify_mount_target_security_groups" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-mount_target_id"><code>mount_target_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Modifies the set of security groups in effect for a mount target. When you create a mount target, Amazon EFS also creates a new network interface. For more information, see CreateMountTarget. This operation replaces the security groups in effect for the network interface associated with a mount target, with the SecurityGroups provided in the request. This operation requires that the network interface of the mount target has been created and the lifecycle state of the mount target is not deleted. The operation requires permissions for the following actions: elasticfilesystem:ModifyMountTargetSecurityGroups action on the mount target's file system. ec2:ModifyNetworkInterfaceAttribute action on the mount target's network interface.</td>
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
<tr id="parameter-mount_target_id">
    <td><CopyableCode code="mount_target_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the mount target whose security groups you want to modify.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_mount_target_security_groups"
    values={[
        { label: 'describe_mount_target_security_groups', value: 'describe_mount_target_security_groups' }
    ]}
>
<TabItem value="describe_mount_target_security_groups">

Returns the security groups currently in effect for a mount target. This operation requires that the network interface of the mount target has been created and the lifecycle state of the mount target is not deleted. This operation requires permissions for the following actions: elasticfilesystem:DescribeMountTargetSecurityGroups action on the mount target's file system. ec2:DescribeNetworkInterfaceAttribute action on the mount target's network interface.

```sql
SELECT
security_group
FROM aws.efs.mount_target_security_groups
WHERE mount_target_id = '{{ mount_target_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_mount_target_security_groups"
    values={[
        { label: 'modify_mount_target_security_groups', value: 'modify_mount_target_security_groups' }
    ]}
>
<TabItem value="modify_mount_target_security_groups">

Modifies the set of security groups in effect for a mount target. When you create a mount target, Amazon EFS also creates a new network interface. For more information, see CreateMountTarget. This operation replaces the security groups in effect for the network interface associated with a mount target, with the SecurityGroups provided in the request. This operation requires that the network interface of the mount target has been created and the lifecycle state of the mount target is not deleted. The operation requires permissions for the following actions: elasticfilesystem:ModifyMountTargetSecurityGroups action on the mount target's file system. ec2:ModifyNetworkInterfaceAttribute action on the mount target's network interface.

```sql
UPDATE aws.efs.mount_target_security_groups
SET 
SecurityGroups = '{{ SecurityGroups }}'
WHERE 
mount_target_id = '{{ mount_target_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
