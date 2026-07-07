--- 
title: db_shard_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - db_shard_groups
  - rds
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

Creates, updates, deletes, gets or lists a <code>db_shard_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_shard_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.db_shard_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_db_shard_groups"
    values={[
        { label: 'describe_db_shard_groups', value: 'describe_db_shard_groups' }
    ]}
>
<TabItem value="describe_db_shard_groups">

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
    <td><CopyableCode code="ComputeRedundancy" /></td>
    <td><code>integer</code></td>
    <td>Specifies whether to create standby DB shard groups for the DB shard group. Valid values are the following: 0 - Creates a DB shard group without a standby DB shard group. This is the default value. 1 - Creates a DB shard group with a standby DB shard group in a different Availability Zone (AZ). 2 - Creates a DB shard group with two standby DB shard groups in two different AZs.</td>
</tr>
<tr>
    <td><CopyableCode code="DBClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The name of the primary DB cluster for the DB shard group.</td>
</tr>
<tr>
    <td><CopyableCode code="DBShardGroupArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the DB shard group.</td>
</tr>
<tr>
    <td><CopyableCode code="DBShardGroupIdentifier" /></td>
    <td><code>string</code></td>
    <td>The name of the DB shard group.</td>
</tr>
<tr>
    <td><CopyableCode code="DBShardGroupResourceId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region-unique, immutable identifier for the DB shard group.</td>
</tr>
<tr>
    <td><CopyableCode code="Endpoint" /></td>
    <td><code>string</code></td>
    <td>The connection endpoint for the DB shard group.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxACU" /></td>
    <td><code>number</code></td>
    <td>The maximum capacity of the DB shard group in Aurora capacity units (ACUs).</td>
</tr>
<tr>
    <td><CopyableCode code="MinACU" /></td>
    <td><code>number</code></td>
    <td>The minimum capacity of the DB shard group in Aurora capacity units (ACUs).</td>
</tr>
<tr>
    <td><CopyableCode code="PubliclyAccessible" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the DB shard group is publicly accessible. When the DB shard group is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB shard group's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB shard group's VPC. Access to the DB shard group is ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned to the DB shard group doesn't permit it. When the DB shard group isn't publicly accessible, it is an internal DB shard group with a DNS name that resolves to a private IP address. For more information, see CreateDBShardGroup. This setting is only for Aurora Limitless Database.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the DB shard group.</td>
</tr>
<tr>
    <td><CopyableCode code="TagList" /></td>
    <td><code>string</code></td>
    <td>A list of tags. For more information, see Tagging Amazon RDS resources in the Amazon RDS User Guide or Tagging Amazon Aurora and Amazon RDS resources in the Amazon Aurora User Guide.</td>
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
    <td><a href="#describe_db_shard_groups"><CopyableCode code="describe_db_shard_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DBShardGroupIdentifier"><code>DBShardGroupIdentifier</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a></td>
    <td>Describes existing Aurora Limitless Database DB shard groups.</td>
</tr>
<tr>
    <td><a href="#create_db_shard_group"><CopyableCode code="create_db_shard_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-DBShardGroupIdentifier"><code>DBShardGroupIdentifier</code></a>, <a href="#parameter-DBClusterIdentifier"><code>DBClusterIdentifier</code></a>, <a href="#parameter-MaxACU"><code>MaxACU</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ComputeRedundancy"><code>ComputeRedundancy</code></a>, <a href="#parameter-MinACU"><code>MinACU</code></a>, <a href="#parameter-PubliclyAccessible"><code>PubliclyAccessible</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates a new DB shard group for Aurora Limitless Database. You must enable Aurora Limitless Database to create a DB shard group. Valid for: Aurora DB clusters only</td>
</tr>
<tr>
    <td><a href="#modify_db_shard_group"><CopyableCode code="modify_db_shard_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DBShardGroupIdentifier"><code>DBShardGroupIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxACU"><code>MaxACU</code></a>, <a href="#parameter-MinACU"><code>MinACU</code></a>, <a href="#parameter-ComputeRedundancy"><code>ComputeRedundancy</code></a></td>
    <td>Modifies the settings of an Aurora Limitless Database DB shard group. You can change one or more settings by specifying these parameters and the new values in the request.</td>
</tr>
<tr>
    <td><a href="#delete_db_shard_group"><CopyableCode code="delete_db_shard_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-DBShardGroupIdentifier"><code>DBShardGroupIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Aurora Limitless Database DB shard group.</td>
</tr>
<tr>
    <td><a href="#reboot_db_shard_group"><CopyableCode code="reboot_db_shard_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBShardGroupIdentifier"><code>DBShardGroupIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>You might need to reboot your DB shard group, usually for maintenance reasons. For example, if you make certain modifications, reboot the DB shard group for the changes to take effect. This operation applies only to Aurora Limitless Database DBb shard groups.</td>
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
<tr id="parameter-DBClusterIdentifier">
    <td><CopyableCode code="DBClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The name of the primary DB cluster for the DB shard group.</td>
</tr>
<tr id="parameter-DBShardGroupIdentifier">
    <td><CopyableCode code="DBShardGroupIdentifier" /></td>
    <td><code>string</code></td>
    <td>The name of the DB shard group to reboot.</td>
</tr>
<tr id="parameter-MaxACU">
    <td><CopyableCode code="MaxACU" /></td>
    <td><code>number (double)</code></td>
    <td>The maximum capacity of the DB shard group in Aurora capacity units (ACUs).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ComputeRedundancy">
    <td><CopyableCode code="ComputeRedundancy" /></td>
    <td><code>integer</code></td>
    <td>Specifies whether to create standby DB shard groups for the DB shard group. Valid values are the following: 0 - Creates a DB shard group without a standby DB shard group. This is the default value. 1 - Creates a DB shard group with a standby DB shard group in a different Availability Zone (AZ). 2 - Creates a DB shard group with two standby DB shard groups in two different AZs.</td>
</tr>
<tr id="parameter-DBShardGroupIdentifier">
    <td><CopyableCode code="DBShardGroupIdentifier" /></td>
    <td><code>string</code></td>
    <td>The user-supplied DB shard group identifier. If this parameter is specified, information for only the specific DB shard group is returned. This parameter isn't case-sensitive. Constraints: If supplied, must match an existing DB shard group identifier.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>A filter that specifies one or more DB shard groups to describe.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeDBShardGroups request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxACU">
    <td><CopyableCode code="MaxACU" /></td>
    <td><code>number (double)</code></td>
    <td>The maximum capacity of the DB shard group in Aurora capacity units (ACUs).</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100</td>
</tr>
<tr id="parameter-MinACU">
    <td><CopyableCode code="MinACU" /></td>
    <td><code>number (double)</code></td>
    <td>The minimum capacity of the DB shard group in Aurora capacity units (ACUs).</td>
</tr>
<tr id="parameter-PubliclyAccessible">
    <td><CopyableCode code="PubliclyAccessible" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the DB shard group is publicly accessible. When the DB shard group is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB shard group's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB shard group's VPC. Access to the DB shard group is ultimately controlled by the security group it uses. That public access is not permitted if the security group assigned to the DB shard group doesn't permit it. When the DB shard group isn't publicly accessible, it is an internal DB shard group with a DNS name that resolves to a private IP address. Default: The default behavior varies depending on whether DBSubnetGroupName is specified. If DBSubnetGroupName isn't specified, and PubliclyAccessible isn't specified, the following applies: If the default VPC in the target Region doesn’t have an internet gateway attached to it, the DB shard group is private. If the default VPC in the target Region has an internet gateway attached to it, the DB shard group is public. If DBSubnetGroupName is specified, and PubliclyAccessible isn't specified, the following applies: If the subnets are part of a VPC that doesn’t have an internet gateway attached to it, the DB shard group is private. If the subnets are part of a VPC that has an internet gateway attached to it, the DB shard group is public.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_db_shard_groups"
    values={[
        { label: 'describe_db_shard_groups', value: 'describe_db_shard_groups' }
    ]}
>
<TabItem value="describe_db_shard_groups">

Describes existing Aurora Limitless Database DB shard groups.

```sql
SELECT
ComputeRedundancy,
DBClusterIdentifier,
DBShardGroupArn,
DBShardGroupIdentifier,
DBShardGroupResourceId,
Endpoint,
MaxACU,
MinACU,
PubliclyAccessible,
Status,
TagList
FROM aws.rds.db_shard_groups
WHERE region = '{{ region }}' -- required
AND DBShardGroupIdentifier = '{{ DBShardGroupIdentifier }}'
AND Filters = '{{ Filters }}'
AND Marker = '{{ Marker }}'
AND MaxRecords = '{{ MaxRecords }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_db_shard_group"
    values={[
        { label: 'create_db_shard_group', value: 'create_db_shard_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_db_shard_group">

Creates a new DB shard group for Aurora Limitless Database. You must enable Aurora Limitless Database to create a DB shard group. Valid for: Aurora DB clusters only

```sql
INSERT INTO aws.rds.db_shard_groups (
DBShardGroupIdentifier,
DBClusterIdentifier,
MaxACU,
region,
ComputeRedundancy,
MinACU,
PubliclyAccessible,
Tags
)
SELECT 
'{{ DBShardGroupIdentifier }}',
'{{ DBClusterIdentifier }}',
'{{ MaxACU }}',
'{{ region }}',
'{{ ComputeRedundancy }}',
'{{ MinACU }}',
'{{ PubliclyAccessible }}',
'{{ Tags }}'
RETURNING
ComputeRedundancy,
DBClusterIdentifier,
DBShardGroupArn,
DBShardGroupIdentifier,
DBShardGroupResourceId,
Endpoint,
MaxACU,
MinACU,
PubliclyAccessible,
Status,
TagList
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: db_shard_groups
  props:
    - name: DBShardGroupIdentifier
      value: "{{ DBShardGroupIdentifier }}"
      description: Required parameter for the db_shard_groups resource.
    - name: DBClusterIdentifier
      value: "{{ DBClusterIdentifier }}"
      description: Required parameter for the db_shard_groups resource.
    - name: MaxACU
      value: "{{ MaxACU }}"
      description: Required parameter for the db_shard_groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the db_shard_groups resource.
    - name: ComputeRedundancy
      value: {{ ComputeRedundancy }}
      description: Specifies whether to create standby standby DB data access shard for the DB shard group. Valid values are the following: 0 - Creates a DB shard group without a standby DB data access shard. This is the default value. 1 - Creates a DB shard group with a standby DB data access shard in a different Availability Zone (AZ). 2 - Creates a DB shard group with two standby DB data access shard in two different AZs.
      description: Specifies whether to create standby standby DB data access shard for the DB shard group. Valid values are the following: 0 - Creates a DB shard group without a standby DB data access shard. This is the default value. 1 - Creates a DB shard group with a standby DB data access shard in a different Availability Zone (AZ). 2 - Creates a DB shard group with two standby DB data access shard in two different AZs.
    - name: MinACU
      value: "{{ MinACU }}"
      description: The minimum capacity of the DB shard group in Aurora capacity units (ACUs).
      description: The minimum capacity of the DB shard group in Aurora capacity units (ACUs).
    - name: PubliclyAccessible
      value: {{ PubliclyAccessible }}
      description: Specifies whether the DB shard group is publicly accessible. When the DB shard group is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB shard group's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB shard group's VPC. Access to the DB shard group is ultimately controlled by the security group it uses. That public access is not permitted if the security group assigned to the DB shard group doesn't permit it. When the DB shard group isn't publicly accessible, it is an internal DB shard group with a DNS name that resolves to a private IP address. Default: The default behavior varies depending on whether DBSubnetGroupName is specified. If DBSubnetGroupName isn't specified, and PubliclyAccessible isn't specified, the following applies: If the default VPC in the target Region doesn’t have an internet gateway attached to it, the DB shard group is private. If the default VPC in the target Region has an internet gateway attached to it, the DB shard group is public. If DBSubnetGroupName is specified, and PubliclyAccessible isn't specified, the following applies: If the subnets are part of a VPC that doesn’t have an internet gateway attached to it, the DB shard group is private. If the subnets are part of a VPC that has an internet gateway attached to it, the DB shard group is public.
      description: Specifies whether the DB shard group is publicly accessible. When the DB shard group is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB shard group's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB shard group's VPC. Access to the DB shard group is ultimately controlled by the security group it uses. That public access is not permitted if the security group assigned to the DB shard group doesn't permit it. When the DB shard group isn't publicly accessible, it is an internal DB shard group with a DNS name that resolves to a private IP address. Default: The default behavior varies depending on whether DBSubnetGroupName is specified. If DBSubnetGroupName isn't specified, and PubliclyAccessible isn't specified, the following applies: If the default VPC in the target Region doesn’t have an internet gateway attached to it, the DB shard group is private. If the default VPC in the target Region has an internet gateway attached to it, the DB shard group is public. If DBSubnetGroupName is specified, and PubliclyAccessible isn't specified, the following applies: If the subnets are part of a VPC that doesn’t have an internet gateway attached to it, the DB shard group is private. If the subnets are part of a VPC that has an internet gateway attached to it, the DB shard group is public.
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_db_shard_group"
    values={[
        { label: 'modify_db_shard_group', value: 'modify_db_shard_group' }
    ]}
>
<TabItem value="modify_db_shard_group">

Modifies the settings of an Aurora Limitless Database DB shard group. You can change one or more settings by specifying these parameters and the new values in the request.

```sql
UPDATE aws.rds.db_shard_groups
SET 
-- No updatable properties
WHERE 
DBShardGroupIdentifier = '{{ DBShardGroupIdentifier }}' --required
AND region = '{{ region }}' --required
AND MaxACU = '{{ MaxACU}}'
AND MinACU = '{{ MinACU}}'
AND ComputeRedundancy = '{{ ComputeRedundancy}}'
RETURNING
ComputeRedundancy,
DBClusterIdentifier,
DBShardGroupArn,
DBShardGroupIdentifier,
DBShardGroupResourceId,
Endpoint,
MaxACU,
MinACU,
PubliclyAccessible,
Status,
TagList;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_db_shard_group"
    values={[
        { label: 'delete_db_shard_group', value: 'delete_db_shard_group' }
    ]}
>
<TabItem value="delete_db_shard_group">

Deletes an Aurora Limitless Database DB shard group.

```sql
DELETE FROM aws.rds.db_shard_groups
WHERE DBShardGroupIdentifier = '{{ DBShardGroupIdentifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reboot_db_shard_group"
    values={[
        { label: 'reboot_db_shard_group', value: 'reboot_db_shard_group' }
    ]}
>
<TabItem value="reboot_db_shard_group">

You might need to reboot your DB shard group, usually for maintenance reasons. For example, if you make certain modifications, reboot the DB shard group for the changes to take effect. This operation applies only to Aurora Limitless Database DBb shard groups.

```sql
EXEC aws.rds.db_shard_groups.reboot_db_shard_group 
@DBShardGroupIdentifier='{{ DBShardGroupIdentifier }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
