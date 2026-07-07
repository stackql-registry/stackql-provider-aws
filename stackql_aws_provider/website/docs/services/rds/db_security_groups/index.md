--- 
title: db_security_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - db_security_groups
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

Creates, updates, deletes, gets or lists a <code>db_security_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_security_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.db_security_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_db_security_groups"
    values={[
        { label: 'describe_db_security_groups', value: 'describe_db_security_groups' }
    ]}
>
<TabItem value="describe_db_security_groups">

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
    <td><CopyableCode code="DBSecurityGroupArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the DB security group.</td>
</tr>
<tr>
    <td><CopyableCode code="DBSecurityGroupDescription" /></td>
    <td><code>string</code></td>
    <td>Provides the description of the DB security group.</td>
</tr>
<tr>
    <td><CopyableCode code="DBSecurityGroupName" /></td>
    <td><code>string</code></td>
    <td>Specifies the name of the DB security group.</td>
</tr>
<tr>
    <td><CopyableCode code="EC2SecurityGroups" /></td>
    <td><code>string</code></td>
    <td>Contains a list of EC2SecurityGroup elements.</td>
</tr>
<tr>
    <td><CopyableCode code="IPRanges" /></td>
    <td><code>string</code></td>
    <td>Contains a list of IPRange elements.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>Provides the Amazon Web Services ID of the owner of a specific DB security group.</td>
</tr>
<tr>
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>Provides the VpcId of the DB security group.</td>
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
    <td><a href="#describe_db_security_groups"><CopyableCode code="describe_db_security_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DBSecurityGroupName"><code>DBSecurityGroupName</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns a list of DBSecurityGroup descriptions. If a DBSecurityGroupName is specified, the list will contain only the descriptions of the specified DB security group. EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see Migrate from EC2-Classic to a VPC in the Amazon EC2 User Guide, the blog EC2-Classic Networking is Retiring – Here’s How to Prepare, and Moving a DB instance not in a VPC into a VPC in the Amazon RDS User Guide.</td>
</tr>
<tr>
    <td><a href="#create_db_security_group"><CopyableCode code="create_db_security_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-DBSecurityGroupName"><code>DBSecurityGroupName</code></a>, <a href="#parameter-DBSecurityGroupDescription"><code>DBSecurityGroupDescription</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates a new DB security group. DB security groups control access to a DB instance. A DB security group controls access to EC2-Classic DB instances that are not in a VPC. EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see Migrate from EC2-Classic to a VPC in the Amazon EC2 User Guide, the blog EC2-Classic Networking is Retiring – Here’s How to Prepare, and Moving a DB instance not in a VPC into a VPC in the Amazon RDS User Guide.</td>
</tr>
<tr>
    <td><a href="#authorize_db_security_group_ingress"><CopyableCode code="authorize_db_security_group_ingress" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DBSecurityGroupName"><code>DBSecurityGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CIDRIP"><code>CIDRIP</code></a>, <a href="#parameter-EC2SecurityGroupName"><code>EC2SecurityGroupName</code></a>, <a href="#parameter-EC2SecurityGroupId"><code>EC2SecurityGroupId</code></a>, <a href="#parameter-EC2SecurityGroupOwnerId"><code>EC2SecurityGroupOwnerId</code></a></td>
    <td>Enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC security groups can be added to the DBSecurityGroup if the application using the database is running on EC2 or VPC instances. Second, IP ranges are available if the application accessing your database is running on the internet. Required parameters for this API are one of CIDR range, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId for non-VPC). You can't authorize ingress from an EC2 security group in one Amazon Web Services Region to an Amazon RDS DB instance in another. You can't authorize ingress from a VPC security group in one VPC to an Amazon RDS DB instance in another. For an overview of CIDR ranges, go to the Wikipedia Tutorial. EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see Migrate from EC2-Classic to a VPC in the Amazon EC2 User Guide, the blog EC2-Classic Networking is Retiring – Here’s How to Prepare, and Moving a DB instance not in a VPC into a VPC in the Amazon RDS User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_db_security_group"><CopyableCode code="delete_db_security_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-DBSecurityGroupName"><code>DBSecurityGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a DB security group. The specified DB security group must not be associated with any DB instances. EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see Migrate from EC2-Classic to a VPC in the Amazon EC2 User Guide, the blog EC2-Classic Networking is Retiring – Here’s How to Prepare, and Moving a DB instance not in a VPC into a VPC in the Amazon RDS User Guide.</td>
</tr>
<tr>
    <td><a href="#revoke_db_security_group_ingress"><CopyableCode code="revoke_db_security_group_ingress" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBSecurityGroupName"><code>DBSecurityGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CIDRIP"><code>CIDRIP</code></a>, <a href="#parameter-EC2SecurityGroupName"><code>EC2SecurityGroupName</code></a>, <a href="#parameter-EC2SecurityGroupId"><code>EC2SecurityGroupId</code></a>, <a href="#parameter-EC2SecurityGroupOwnerId"><code>EC2SecurityGroupOwnerId</code></a></td>
    <td>Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC security groups. Required parameters for this API are one of CIDRIP, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId). EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see Migrate from EC2-Classic to a VPC in the Amazon EC2 User Guide, the blog EC2-Classic Networking is Retiring – Here’s How to Prepare, and Moving a DB instance not in a VPC into a VPC in the Amazon RDS User Guide.</td>
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
<tr id="parameter-DBSecurityGroupDescription">
    <td><CopyableCode code="DBSecurityGroupDescription" /></td>
    <td><code>string</code></td>
    <td>The description for the DB security group.</td>
</tr>
<tr id="parameter-DBSecurityGroupName">
    <td><CopyableCode code="DBSecurityGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the DB security group to revoke ingress from.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CIDRIP">
    <td><CopyableCode code="CIDRIP" /></td>
    <td><code>string</code></td>
    <td>The IP range to revoke access from. Must be a valid CIDR range. If CIDRIP is specified, EC2SecurityGroupName, EC2SecurityGroupId and EC2SecurityGroupOwnerId can't be provided.</td>
</tr>
<tr id="parameter-DBSecurityGroupName">
    <td><CopyableCode code="DBSecurityGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the DB security group to return details for.</td>
</tr>
<tr id="parameter-EC2SecurityGroupId">
    <td><CopyableCode code="EC2SecurityGroupId" /></td>
    <td><code>string</code></td>
    <td>The id of the EC2 security group to revoke access from. For VPC DB security groups, EC2SecurityGroupId must be provided. Otherwise, EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId must be provided.</td>
</tr>
<tr id="parameter-EC2SecurityGroupName">
    <td><CopyableCode code="EC2SecurityGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the EC2 security group to revoke access from. For VPC DB security groups, EC2SecurityGroupId must be provided. Otherwise, EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId must be provided.</td>
</tr>
<tr id="parameter-EC2SecurityGroupOwnerId">
    <td><CopyableCode code="EC2SecurityGroupOwnerId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account number of the owner of the EC2 security group specified in the EC2SecurityGroupName parameter. The Amazon Web Services access key ID isn't an acceptable value. For VPC DB security groups, EC2SecurityGroupId must be provided. Otherwise, EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId must be provided.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>This parameter isn't currently supported.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeDBSecurityGroups request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>Tags to assign to the DB security group.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_db_security_groups"
    values={[
        { label: 'describe_db_security_groups', value: 'describe_db_security_groups' }
    ]}
>
<TabItem value="describe_db_security_groups">

Returns a list of DBSecurityGroup descriptions. If a DBSecurityGroupName is specified, the list will contain only the descriptions of the specified DB security group. EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see Migrate from EC2-Classic to a VPC in the Amazon EC2 User Guide, the blog EC2-Classic Networking is Retiring – Here’s How to Prepare, and Moving a DB instance not in a VPC into a VPC in the Amazon RDS User Guide.

```sql
SELECT
DBSecurityGroupArn,
DBSecurityGroupDescription,
DBSecurityGroupName,
EC2SecurityGroups,
IPRanges,
OwnerId,
VpcId
FROM aws.rds.db_security_groups
WHERE region = '{{ region }}' -- required
AND DBSecurityGroupName = '{{ DBSecurityGroupName }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_db_security_group"
    values={[
        { label: 'create_db_security_group', value: 'create_db_security_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_db_security_group">

Creates a new DB security group. DB security groups control access to a DB instance. A DB security group controls access to EC2-Classic DB instances that are not in a VPC. EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see Migrate from EC2-Classic to a VPC in the Amazon EC2 User Guide, the blog EC2-Classic Networking is Retiring – Here’s How to Prepare, and Moving a DB instance not in a VPC into a VPC in the Amazon RDS User Guide.

```sql
INSERT INTO aws.rds.db_security_groups (
DBSecurityGroupName,
DBSecurityGroupDescription,
region,
Tags
)
SELECT 
'{{ DBSecurityGroupName }}',
'{{ DBSecurityGroupDescription }}',
'{{ region }}',
'{{ Tags }}'
RETURNING
DBSecurityGroupArn,
DBSecurityGroupDescription,
DBSecurityGroupName,
EC2SecurityGroups,
IPRanges,
OwnerId,
VpcId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: db_security_groups
  props:
    - name: DBSecurityGroupName
      value: "{{ DBSecurityGroupName }}"
      description: Required parameter for the db_security_groups resource.
    - name: DBSecurityGroupDescription
      value: "{{ DBSecurityGroupDescription }}"
      description: Required parameter for the db_security_groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the db_security_groups resource.
    - name: Tags
      value: "{{ Tags }}"
      description: Tags to assign to the DB security group.
      description: Tags to assign to the DB security group.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="authorize_db_security_group_ingress"
    values={[
        { label: 'authorize_db_security_group_ingress', value: 'authorize_db_security_group_ingress' }
    ]}
>
<TabItem value="authorize_db_security_group_ingress">

Enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC security groups can be added to the DBSecurityGroup if the application using the database is running on EC2 or VPC instances. Second, IP ranges are available if the application accessing your database is running on the internet. Required parameters for this API are one of CIDR range, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId for non-VPC). You can't authorize ingress from an EC2 security group in one Amazon Web Services Region to an Amazon RDS DB instance in another. You can't authorize ingress from a VPC security group in one VPC to an Amazon RDS DB instance in another. For an overview of CIDR ranges, go to the Wikipedia Tutorial. EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see Migrate from EC2-Classic to a VPC in the Amazon EC2 User Guide, the blog EC2-Classic Networking is Retiring – Here’s How to Prepare, and Moving a DB instance not in a VPC into a VPC in the Amazon RDS User Guide.

```sql
UPDATE aws.rds.db_security_groups
SET 
-- No updatable properties
WHERE 
DBSecurityGroupName = '{{ DBSecurityGroupName }}' --required
AND region = '{{ region }}' --required
AND CIDRIP = '{{ CIDRIP}}'
AND EC2SecurityGroupName = '{{ EC2SecurityGroupName}}'
AND EC2SecurityGroupId = '{{ EC2SecurityGroupId}}'
AND EC2SecurityGroupOwnerId = '{{ EC2SecurityGroupOwnerId}}'
RETURNING
DBSecurityGroupArn,
DBSecurityGroupDescription,
DBSecurityGroupName,
EC2SecurityGroups,
IPRanges,
OwnerId,
VpcId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_db_security_group"
    values={[
        { label: 'delete_db_security_group', value: 'delete_db_security_group' }
    ]}
>
<TabItem value="delete_db_security_group">

Deletes a DB security group. The specified DB security group must not be associated with any DB instances. EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see Migrate from EC2-Classic to a VPC in the Amazon EC2 User Guide, the blog EC2-Classic Networking is Retiring – Here’s How to Prepare, and Moving a DB instance not in a VPC into a VPC in the Amazon RDS User Guide.

```sql
DELETE FROM aws.rds.db_security_groups
WHERE DBSecurityGroupName = '{{ DBSecurityGroupName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="revoke_db_security_group_ingress"
    values={[
        { label: 'revoke_db_security_group_ingress', value: 'revoke_db_security_group_ingress' }
    ]}
>
<TabItem value="revoke_db_security_group_ingress">

Revokes ingress from a DBSecurityGroup for previously authorized IP ranges or EC2 or VPC security groups. Required parameters for this API are one of CIDRIP, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId and either EC2SecurityGroupName or EC2SecurityGroupId). EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see Migrate from EC2-Classic to a VPC in the Amazon EC2 User Guide, the blog EC2-Classic Networking is Retiring – Here’s How to Prepare, and Moving a DB instance not in a VPC into a VPC in the Amazon RDS User Guide.

```sql
EXEC aws.rds.db_security_groups.revoke_db_security_group_ingress 
@DBSecurityGroupName='{{ DBSecurityGroupName }}' --required, 
@region='{{ region }}' --required, 
@CIDRIP='{{ CIDRIP }}', 
@EC2SecurityGroupName='{{ EC2SecurityGroupName }}', 
@EC2SecurityGroupId='{{ EC2SecurityGroupId }}', 
@EC2SecurityGroupOwnerId='{{ EC2SecurityGroupOwnerId }}'
;
```
</TabItem>
</Tabs>
