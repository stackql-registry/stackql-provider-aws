--- 
title: db_cluster_parameter_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - db_cluster_parameter_groups
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

Creates, updates, deletes, gets or lists a <code>db_cluster_parameter_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_cluster_parameter_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.db_cluster_parameter_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_db_cluster_parameter_groups"
    values={[
        { label: 'describe_db_cluster_parameter_groups', value: 'describe_db_cluster_parameter_groups' }
    ]}
>
<TabItem value="describe_db_cluster_parameter_groups">

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
    <td><CopyableCode code="db_cluster_parameter_group_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the DB cluster parameter group.</td>
</tr>
<tr>
    <td><CopyableCode code="db_cluster_parameter_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the DB cluster parameter group.</td>
</tr>
<tr>
    <td><CopyableCode code="db_parameter_group_family" /></td>
    <td><code>string</code></td>
    <td>The name of the DB parameter group family that this DB cluster parameter group is compatible with.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Provides the customer-specified description for this DB cluster parameter group.</td>
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
    <td><a href="#describe_db_cluster_parameter_groups"><CopyableCode code="describe_db_cluster_parameter_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DBClusterParameterGroupName"><code>DBClusterParameterGroupName</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns a list of DBClusterParameterGroup descriptions. If a DBClusterParameterGroupName parameter is specified, the list will contain only the description of the specified DB cluster parameter group. For more information on Amazon Aurora, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.</td>
</tr>
<tr>
    <td><a href="#create_db_cluster_parameter_group"><CopyableCode code="create_db_cluster_parameter_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-DBClusterParameterGroupName"><code>DBClusterParameterGroupName</code></a>, <a href="#parameter-DBParameterGroupFamily"><code>DBParameterGroupFamily</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates a new DB cluster parameter group. Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster. A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after creating it using ModifyDBClusterParameterGroup. Once you've created a DB cluster parameter group, you need to associate it with your DB cluster using ModifyDBCluster. When you associate a new DB cluster parameter group with a running Aurora DB cluster, reboot the DB instances in the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect. When you associate a new DB cluster parameter group with a running Multi-AZ DB cluster, reboot the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect. After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the character_set_database parameter. You can use the Parameter Groups option of the Amazon RDS console or the DescribeDBClusterParameters operation to verify that your DB cluster parameter group has been created or modified. For more information on Amazon Aurora, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.</td>
</tr>
<tr>
    <td><a href="#modify_db_cluster_parameter_group"><CopyableCode code="modify_db_cluster_parameter_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DBClusterParameterGroupName"><code>DBClusterParameterGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Parameters"><code>Parameters</code></a></td>
    <td>Modifies the parameters of a DB cluster parameter group. To modify more than one parameter, submit a list of the following: ParameterName, ParameterValue, and ApplyMethod. A maximum of 20 parameters can be modified in a single request. There are two types of parameters - dynamic parameters and static parameters. Changes to dynamic parameters are applied to the DB cluster immediately without a reboot. Changes to static parameters are applied only after the DB cluster is rebooted, which can be done using RebootDBCluster operation. You can use the Parameter Groups option of the Amazon RDS console or the DescribeDBClusterParameters operation to verify that your DB cluster parameter group has been created or modified. For more information on Amazon Aurora DB clusters, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_db_cluster_parameter_group"><CopyableCode code="delete_db_cluster_parameter_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-DBClusterParameterGroupName"><code>DBClusterParameterGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters. For more information on Amazon Aurora, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.</td>
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
<tr id="parameter-DBClusterParameterGroupName">
    <td><CopyableCode code="DBClusterParameterGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the DB cluster parameter group. Constraints: Must be the name of an existing DB cluster parameter group. You can't delete a default DB cluster parameter group. Can't be associated with any DB clusters.</td>
</tr>
<tr id="parameter-DBParameterGroupFamily">
    <td><CopyableCode code="DBParameterGroupFamily" /></td>
    <td><code>string</code></td>
    <td>The DB cluster parameter group family name. A DB cluster parameter group can be associated with one and only one DB cluster parameter group family, and can be applied only to a DB cluster running a database engine and engine version compatible with that DB cluster parameter group family. Aurora MySQL Example: aurora-mysql5.7, aurora-mysql8.0 Aurora PostgreSQL Example: aurora-postgresql14 RDS for MySQL Example: mysql8.0 RDS for PostgreSQL Example: postgres13 To list all of the available parameter group families for a DB engine, use the following command: aws rds describe-db-engine-versions --query "DBEngineVersions&#91;&#93;.DBParameterGroupFamily" --engine <code>&lt;engine&gt;</code> For example, to list all of the available parameter group families for the Aurora PostgreSQL DB engine, use the following command: aws rds describe-db-engine-versions --query "DBEngineVersions&#91;&#93;.DBParameterGroupFamily" --engine aurora-postgresql The output contains duplicates. The following are the valid DB engine values: aurora-mysql aurora-postgresql mysql postgres</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DBClusterParameterGroupName">
    <td><CopyableCode code="DBClusterParameterGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of a specific DB cluster parameter group to return details for. Constraints: If supplied, must match the name of an existing DBClusterParameterGroup.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description for the DB cluster parameter group.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>This parameter isn't currently supported.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeDBClusterParameterGroups request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-Parameters">
    <td><CopyableCode code="Parameters" /></td>
    <td><code>array</code></td>
    <td>A list of parameters in the DB cluster parameter group to modify. Valid Values (for the application method): immediate | pending-reboot You can use the immediate value with dynamic parameters only. You can use the pending-reboot value for both dynamic and static parameters. When the application method is immediate, changes to dynamic parameters are applied immediately to the DB clusters associated with the parameter group. When the application method is pending-reboot, changes to dynamic and static parameters are applied after a reboot without failover to the DB clusters associated with the parameter group.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>Tags to assign to the DB cluster parameter group.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_db_cluster_parameter_groups"
    values={[
        { label: 'describe_db_cluster_parameter_groups', value: 'describe_db_cluster_parameter_groups' }
    ]}
>
<TabItem value="describe_db_cluster_parameter_groups">

Returns a list of DBClusterParameterGroup descriptions. If a DBClusterParameterGroupName parameter is specified, the list will contain only the description of the specified DB cluster parameter group. For more information on Amazon Aurora, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.

```sql
SELECT
db_cluster_parameter_group_arn,
db_cluster_parameter_group_name,
db_parameter_group_family,
description
FROM aws.rds.db_cluster_parameter_groups
WHERE region = '{{ region }}' -- required
AND DBClusterParameterGroupName = '{{ DBClusterParameterGroupName }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_db_cluster_parameter_group"
    values={[
        { label: 'create_db_cluster_parameter_group', value: 'create_db_cluster_parameter_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_db_cluster_parameter_group">

Creates a new DB cluster parameter group. Parameters in a DB cluster parameter group apply to all of the instances in a DB cluster. A DB cluster parameter group is initially created with the default parameters for the database engine used by instances in the DB cluster. To provide custom values for any of the parameters, you must modify the group after creating it using ModifyDBClusterParameterGroup. Once you've created a DB cluster parameter group, you need to associate it with your DB cluster using ModifyDBCluster. When you associate a new DB cluster parameter group with a running Aurora DB cluster, reboot the DB instances in the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect. When you associate a new DB cluster parameter group with a running Multi-AZ DB cluster, reboot the DB cluster without failover for the new DB cluster parameter group and associated settings to take effect. After you create a DB cluster parameter group, you should wait at least 5 minutes before creating your first DB cluster that uses that DB cluster parameter group as the default parameter group. This allows Amazon RDS to fully complete the create action before the DB cluster parameter group is used as the default for a new DB cluster. This is especially important for parameters that are critical when creating the default database for a DB cluster, such as the character set for the default database defined by the character_set_database parameter. You can use the Parameter Groups option of the Amazon RDS console or the DescribeDBClusterParameters operation to verify that your DB cluster parameter group has been created or modified. For more information on Amazon Aurora, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.

```sql
INSERT INTO aws.rds.db_cluster_parameter_groups (
DBClusterParameterGroupName,
DBParameterGroupFamily,
region,
Description,
Tags
)
SELECT 
'{{ DBClusterParameterGroupName }}',
'{{ DBParameterGroupFamily }}',
'{{ region }}',
'{{ Description }}',
'{{ Tags }}'
RETURNING
db_cluster_parameter_group_arn,
db_cluster_parameter_group_name,
db_parameter_group_family,
description
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: db_cluster_parameter_groups
  props:
    - name: DBClusterParameterGroupName
      value: "{{ DBClusterParameterGroupName }}"
      description: Required parameter for the db_cluster_parameter_groups resource.
    - name: DBParameterGroupFamily
      value: "{{ DBParameterGroupFamily }}"
      description: Required parameter for the db_cluster_parameter_groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the db_cluster_parameter_groups resource.
    - name: Description
      value: "{{ Description }}"
      description: The description for the DB cluster parameter group.
      description: The description for the DB cluster parameter group.
    - name: Tags
      value: "{{ Tags }}"
      description: Tags to assign to the DB cluster parameter group.
      description: Tags to assign to the DB cluster parameter group.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_db_cluster_parameter_group"
    values={[
        { label: 'modify_db_cluster_parameter_group', value: 'modify_db_cluster_parameter_group' }
    ]}
>
<TabItem value="modify_db_cluster_parameter_group">

Modifies the parameters of a DB cluster parameter group. To modify more than one parameter, submit a list of the following: ParameterName, ParameterValue, and ApplyMethod. A maximum of 20 parameters can be modified in a single request. There are two types of parameters - dynamic parameters and static parameters. Changes to dynamic parameters are applied to the DB cluster immediately without a reboot. Changes to static parameters are applied only after the DB cluster is rebooted, which can be done using RebootDBCluster operation. You can use the Parameter Groups option of the Amazon RDS console or the DescribeDBClusterParameters operation to verify that your DB cluster parameter group has been created or modified. For more information on Amazon Aurora DB clusters, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.

```sql
UPDATE aws.rds.db_cluster_parameter_groups
SET 
-- No updatable properties
WHERE 
DBClusterParameterGroupName = '{{ DBClusterParameterGroupName }}' --required
AND region = '{{ region }}' --required
AND Parameters = '{{ Parameters}}'
RETURNING
db_cluster_parameter_group_name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_db_cluster_parameter_group"
    values={[
        { label: 'delete_db_cluster_parameter_group', value: 'delete_db_cluster_parameter_group' }
    ]}
>
<TabItem value="delete_db_cluster_parameter_group">

Deletes a specified DB cluster parameter group. The DB cluster parameter group to be deleted can't be associated with any DB clusters. For more information on Amazon Aurora, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.

```sql
DELETE FROM aws.rds.db_cluster_parameter_groups
WHERE DBClusterParameterGroupName = '{{ DBClusterParameterGroupName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
