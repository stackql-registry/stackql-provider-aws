--- 
title: replication_subnet_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - replication_subnet_groups
  - dms
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

Creates, updates, deletes, gets or lists a <code>replication_subnet_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="replication_subnet_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dms.replication_subnet_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_replication_subnet_groups"
    values={[
        { label: 'describe_replication_subnet_groups', value: 'describe_replication_subnet_groups' }
    ]}
>
<TabItem value="describe_replication_subnet_groups">

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
    <td><CopyableCode code="is_read_only" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the replication subnet group is read-only. When set to true, this subnet group is managed by DMS as part of a zero-ETL integration and cannot be modified or deleted directly. You can only modify or delete read-only subnet groups through their associated zero-ETL integration.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_subnet_group_description" /></td>
    <td><code>string</code></td>
    <td>A description for the replication subnet group.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_subnet_group_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the replication instance subnet group.</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_group_status" /></td>
    <td><code>string</code></td>
    <td>The status of the subnet group.</td>
</tr>
<tr>
    <td><CopyableCode code="subnets" /></td>
    <td><code>array</code></td>
    <td>The subnets that are in the subnet group.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_network_types" /></td>
    <td><code>array</code></td>
    <td>The IP addressing protocol supported by the subnet group. This is used by a replication instance with values such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing. IPv6 only is not yet supported.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC.</td>
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
    <td><a href="#describe_replication_subnet_groups"><CopyableCode code="describe_replication_subnet_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the replication subnet groups.</td>
</tr>
<tr>
    <td><a href="#create_replication_subnet_group"><CopyableCode code="create_replication_subnet_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReplicationSubnetGroupIdentifier"><code>ReplicationSubnetGroupIdentifier</code></a>, <a href="#parameter-ReplicationSubnetGroupDescription"><code>ReplicationSubnetGroupDescription</code></a>, <a href="#parameter-SubnetIds"><code>SubnetIds</code></a></td>
    <td></td>
    <td>Creates a replication subnet group given a list of the subnet IDs in a VPC. The VPC needs to have at least one subnet in at least two availability zones in the Amazon Web Services Region, otherwise the service will throw a ReplicationSubnetGroupDoesNotCoverEnoughAZs exception. If a replication subnet group exists in your Amazon Web Services account, the CreateReplicationSubnetGroup action returns the following error message: The Replication Subnet Group already exists. In this case, delete the existing replication subnet group. To do so, use the DeleteReplicationSubnetGroup action. Optionally, choose Subnet groups in the DMS console, then choose your subnet group. Next, choose Delete from Actions.</td>
</tr>
<tr>
    <td><a href="#modify_replication_subnet_group"><CopyableCode code="modify_replication_subnet_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReplicationSubnetGroupIdentifier"><code>ReplicationSubnetGroupIdentifier</code></a>, <a href="#parameter-SubnetIds"><code>SubnetIds</code></a></td>
    <td></td>
    <td>Modifies the settings for the specified replication subnet group.</td>
</tr>
<tr>
    <td><a href="#delete_replication_subnet_group"><CopyableCode code="delete_replication_subnet_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a subnet group.</td>
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
    defaultValue="describe_replication_subnet_groups"
    values={[
        { label: 'describe_replication_subnet_groups', value: 'describe_replication_subnet_groups' }
    ]}
>
<TabItem value="describe_replication_subnet_groups">

Returns information about the replication subnet groups.

```sql
SELECT
is_read_only,
replication_subnet_group_description,
replication_subnet_group_identifier,
subnet_group_status,
subnets,
supported_network_types,
vpc_id
FROM aws.dms.replication_subnet_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_replication_subnet_group"
    values={[
        { label: 'create_replication_subnet_group', value: 'create_replication_subnet_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_replication_subnet_group">

Creates a replication subnet group given a list of the subnet IDs in a VPC. The VPC needs to have at least one subnet in at least two availability zones in the Amazon Web Services Region, otherwise the service will throw a ReplicationSubnetGroupDoesNotCoverEnoughAZs exception. If a replication subnet group exists in your Amazon Web Services account, the CreateReplicationSubnetGroup action returns the following error message: The Replication Subnet Group already exists. In this case, delete the existing replication subnet group. To do so, use the DeleteReplicationSubnetGroup action. Optionally, choose Subnet groups in the DMS console, then choose your subnet group. Next, choose Delete from Actions.

```sql
INSERT INTO aws.dms.replication_subnet_groups (
ReplicationSubnetGroupIdentifier,
ReplicationSubnetGroupDescription,
SubnetIds,
Tags,
region
)
SELECT 
'{{ ReplicationSubnetGroupIdentifier }}' /* required */,
'{{ ReplicationSubnetGroupDescription }}' /* required */,
'{{ SubnetIds }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
replication_subnet_group
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: replication_subnet_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the replication_subnet_groups resource.
    - name: ReplicationSubnetGroupIdentifier
      value: "{{ ReplicationSubnetGroupIdentifier }}"
      description: |
        The name for the replication subnet group. This value is stored as a lowercase string. Constraints: Must contain no more than 255 alphanumeric characters, periods, underscores, or hyphens. Must not be "default". Example: mySubnetgroup
    - name: ReplicationSubnetGroupDescription
      value: "{{ ReplicationSubnetGroupDescription }}"
      description: |
        The description for the subnet group. Constraints: This parameter Must not contain non-printable control characters.
    - name: SubnetIds
      value:
        - "{{ SubnetIds }}"
      description: |
        Two or more subnet IDs to be assigned to the subnet group.
    - name: Tags
      description: |
        One or more tags to be assigned to the subnet group.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
          ResourceArn: "{{ ResourceArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_replication_subnet_group"
    values={[
        { label: 'modify_replication_subnet_group', value: 'modify_replication_subnet_group' }
    ]}
>
<TabItem value="modify_replication_subnet_group">

Modifies the settings for the specified replication subnet group.

```sql
UPDATE aws.dms.replication_subnet_groups
SET 
ReplicationSubnetGroupIdentifier = '{{ ReplicationSubnetGroupIdentifier }}',
ReplicationSubnetGroupDescription = '{{ ReplicationSubnetGroupDescription }}',
SubnetIds = '{{ SubnetIds }}'
WHERE 
region = '{{ region }}' --required
AND ReplicationSubnetGroupIdentifier = '{{ ReplicationSubnetGroupIdentifier }}' --required
AND SubnetIds = '{{ SubnetIds }}' --required
RETURNING
replication_subnet_group;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_replication_subnet_group"
    values={[
        { label: 'delete_replication_subnet_group', value: 'delete_replication_subnet_group' }
    ]}
>
<TabItem value="delete_replication_subnet_group">

Deletes a subnet group.

```sql
DELETE FROM aws.dms.replication_subnet_groups
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
