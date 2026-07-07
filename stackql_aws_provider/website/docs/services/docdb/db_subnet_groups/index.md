--- 
title: db_subnet_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - db_subnet_groups
  - docdb
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

Creates, updates, deletes, gets or lists a <code>db_subnet_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_subnet_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.docdb.db_subnet_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_db_subnet_groups"
    values={[
        { label: 'describe_db_subnet_groups', value: 'describe_db_subnet_groups' }
    ]}
>
<TabItem value="describe_db_subnet_groups">

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
    <td><CopyableCode code="DBSubnetGroupArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the DB subnet group.</td>
</tr>
<tr>
    <td><CopyableCode code="DBSubnetGroupDescription" /></td>
    <td><code>string</code></td>
    <td>Provides the description of the subnet group.</td>
</tr>
<tr>
    <td><CopyableCode code="DBSubnetGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the subnet group.</td>
</tr>
<tr>
    <td><CopyableCode code="SubnetGroupStatus" /></td>
    <td><code>string</code></td>
    <td>Provides the status of the subnet group.</td>
</tr>
<tr>
    <td><CopyableCode code="Subnets" /></td>
    <td><code>string</code></td>
    <td>Detailed information about one or more subnets within a subnet group.</td>
</tr>
<tr>
    <td><CopyableCode code="SupportedNetworkTypes" /></td>
    <td><code>string</code></td>
    <td>The network type of the DB subnet group. Valid Values: IPV4 | DUAL A DBSubnetGroup can support only the IPv4 protocol or the IPv4 and the IPv6 protocols (DUAL).</td>
</tr>
<tr>
    <td><CopyableCode code="VpcId" /></td>
    <td><code>string</code></td>
    <td>Provides the virtual private cloud (VPC) ID of the subnet group.</td>
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
    <td><a href="#describe_db_subnet_groups"><CopyableCode code="describe_db_subnet_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DBSubnetGroupName"><code>DBSubnetGroupName</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the list will contain only the descriptions of the specified DBSubnetGroup.</td>
</tr>
<tr>
    <td><a href="#create_db_subnet_group"><CopyableCode code="create_db_subnet_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-DBSubnetGroupName"><code>DBSubnetGroupName</code></a>, <a href="#parameter-DBSubnetGroupDescription"><code>DBSubnetGroupDescription</code></a>, <a href="#parameter-SubnetIds"><code>SubnetIds</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates a new subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.</td>
</tr>
<tr>
    <td><a href="#modify_db_subnet_group"><CopyableCode code="modify_db_subnet_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DBSubnetGroupName"><code>DBSubnetGroupName</code></a>, <a href="#parameter-SubnetIds"><code>SubnetIds</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DBSubnetGroupDescription"><code>DBSubnetGroupDescription</code></a></td>
    <td>Modifies an existing subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.</td>
</tr>
<tr>
    <td><a href="#delete_db_subnet_group"><CopyableCode code="delete_db_subnet_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-DBSubnetGroupName"><code>DBSubnetGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a subnet group. The specified database subnet group must not be associated with any DB instances.</td>
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
<tr id="parameter-DBSubnetGroupDescription">
    <td><CopyableCode code="DBSubnetGroupDescription" /></td>
    <td><code>string</code></td>
    <td>The description for the subnet group.</td>
</tr>
<tr id="parameter-DBSubnetGroupName">
    <td><CopyableCode code="DBSubnetGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the database subnet group to delete. You can't delete the default subnet group. Constraints: Must match the name of an existing DBSubnetGroup. Must not be default. Example: mySubnetgroup</td>
</tr>
<tr id="parameter-SubnetIds">
    <td><CopyableCode code="SubnetIds" /></td>
    <td><code>array</code></td>
    <td>The Amazon EC2 subnet IDs for the subnet group.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DBSubnetGroupDescription">
    <td><CopyableCode code="DBSubnetGroupDescription" /></td>
    <td><code>string</code></td>
    <td>The description for the subnet group.</td>
</tr>
<tr id="parameter-DBSubnetGroupName">
    <td><CopyableCode code="DBSubnetGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the subnet group to return details for.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>This parameter is not currently supported.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token (marker) is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags to be assigned to the subnet group.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_db_subnet_groups"
    values={[
        { label: 'describe_db_subnet_groups', value: 'describe_db_subnet_groups' }
    ]}
>
<TabItem value="describe_db_subnet_groups">

Returns a list of DBSubnetGroup descriptions. If a DBSubnetGroupName is specified, the list will contain only the descriptions of the specified DBSubnetGroup.

```sql
SELECT
DBSubnetGroupArn,
DBSubnetGroupDescription,
DBSubnetGroupName,
SubnetGroupStatus,
Subnets,
SupportedNetworkTypes,
VpcId
FROM aws.docdb.db_subnet_groups
WHERE region = '{{ region }}' -- required
AND DBSubnetGroupName = '{{ DBSubnetGroupName }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_db_subnet_group"
    values={[
        { label: 'create_db_subnet_group', value: 'create_db_subnet_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_db_subnet_group">

Creates a new subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.

```sql
INSERT INTO aws.docdb.db_subnet_groups (
DBSubnetGroupName,
DBSubnetGroupDescription,
SubnetIds,
region,
Tags
)
SELECT 
'{{ DBSubnetGroupName }}',
'{{ DBSubnetGroupDescription }}',
'{{ SubnetIds }}',
'{{ region }}',
'{{ Tags }}'
RETURNING
DBSubnetGroupArn,
DBSubnetGroupDescription,
DBSubnetGroupName,
SubnetGroupStatus,
Subnets,
SupportedNetworkTypes,
VpcId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: db_subnet_groups
  props:
    - name: DBSubnetGroupName
      value: "{{ DBSubnetGroupName }}"
      description: Required parameter for the db_subnet_groups resource.
    - name: DBSubnetGroupDescription
      value: "{{ DBSubnetGroupDescription }}"
      description: Required parameter for the db_subnet_groups resource.
    - name: SubnetIds
      value: "{{ SubnetIds }}"
      description: Required parameter for the db_subnet_groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the db_subnet_groups resource.
    - name: Tags
      value: "{{ Tags }}"
      description: The tags to be assigned to the subnet group.
      description: The tags to be assigned to the subnet group.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_db_subnet_group"
    values={[
        { label: 'modify_db_subnet_group', value: 'modify_db_subnet_group' }
    ]}
>
<TabItem value="modify_db_subnet_group">

Modifies an existing subnet group. subnet groups must contain at least one subnet in at least two Availability Zones in the Amazon Web Services Region.

```sql
UPDATE aws.docdb.db_subnet_groups
SET 
-- No updatable properties
WHERE 
DBSubnetGroupName = '{{ DBSubnetGroupName }}' --required
AND SubnetIds = '{{ SubnetIds }}' --required
AND region = '{{ region }}' --required
AND DBSubnetGroupDescription = '{{ DBSubnetGroupDescription}}'
RETURNING
DBSubnetGroupArn,
DBSubnetGroupDescription,
DBSubnetGroupName,
SubnetGroupStatus,
Subnets,
SupportedNetworkTypes,
VpcId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_db_subnet_group"
    values={[
        { label: 'delete_db_subnet_group', value: 'delete_db_subnet_group' }
    ]}
>
<TabItem value="delete_db_subnet_group">

Deletes a subnet group. The specified database subnet group must not be associated with any DB instances.

```sql
DELETE FROM aws.docdb.db_subnet_groups
WHERE DBSubnetGroupName = '{{ DBSubnetGroupName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
