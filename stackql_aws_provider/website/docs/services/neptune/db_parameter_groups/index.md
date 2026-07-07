--- 
title: db_parameter_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - db_parameter_groups
  - neptune
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

Creates, updates, deletes, gets or lists a <code>db_parameter_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_parameter_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.neptune.db_parameter_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_db_parameter_groups"
    values={[
        { label: 'describe_db_parameter_groups', value: 'describe_db_parameter_groups' }
    ]}
>
<TabItem value="describe_db_parameter_groups">

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
    <td><CopyableCode code="DBParameterGroupArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the DB parameter group.</td>
</tr>
<tr>
    <td><CopyableCode code="DBParameterGroupFamily" /></td>
    <td><code>string</code></td>
    <td>Provides the name of the DB parameter group family that this DB parameter group is compatible with.</td>
</tr>
<tr>
    <td><CopyableCode code="DBParameterGroupName" /></td>
    <td><code>string</code></td>
    <td>Provides the name of the DB parameter group.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>Provides the customer-specified description for this DB parameter group.</td>
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
    <td><a href="#describe_db_parameter_groups"><CopyableCode code="describe_db_parameter_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DBParameterGroupName"><code>DBParameterGroupName</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns a list of DBParameterGroup descriptions. If a DBParameterGroupName is specified, the list will contain only the description of the specified DB parameter group.</td>
</tr>
<tr>
    <td><a href="#create_db_parameter_group"><CopyableCode code="create_db_parameter_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-DBParameterGroupName"><code>DBParameterGroupName</code></a>, <a href="#parameter-DBParameterGroupFamily"><code>DBParameterGroupFamily</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates a new DB parameter group. A DB parameter group is initially created with the default parameters for the database engine used by the DB instance. To provide custom values for any of the parameters, you must modify the group after creating it using ModifyDBParameterGroup. Once you've created a DB parameter group, you need to associate it with your DB instance using ModifyDBInstance. When you associate a new DB parameter group with a running DB instance, you need to reboot the DB instance without failover for the new DB parameter group and associated settings to take effect. After you create a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the character_set_database parameter. You can use the Parameter Groups option of the Amazon Neptune console or the DescribeDBParameters command to verify that your DB parameter group has been created or modified.</td>
</tr>
<tr>
    <td><a href="#modify_db_parameter_group"><CopyableCode code="modify_db_parameter_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DBParameterGroupName"><code>DBParameterGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Parameters"><code>Parameters</code></a></td>
    <td>Modifies the parameters of a DB parameter group. To modify more than one parameter, submit a list of the following: ParameterName, ParameterValue, and ApplyMethod. A maximum of 20 parameters can be modified in a single request. Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB instance associated with the parameter group before the change can take effect. After you modify a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the modify action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the character_set_database parameter. You can use the Parameter Groups option of the Amazon Neptune console or the DescribeDBParameters command to verify that your DB parameter group has been created or modified.</td>
</tr>
<tr>
    <td><a href="#delete_db_parameter_group"><CopyableCode code="delete_db_parameter_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-DBParameterGroupName"><code>DBParameterGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specified DBParameterGroup. The DBParameterGroup to be deleted can't be associated with any DB instances.</td>
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
<tr id="parameter-DBParameterGroupFamily">
    <td><CopyableCode code="DBParameterGroupFamily" /></td>
    <td><code>string</code></td>
    <td>The DB parameter group family name. A DB parameter group can be associated with one and only one DB parameter group family, and can be applied only to a DB instance running a database engine and engine version compatible with that DB parameter group family.</td>
</tr>
<tr id="parameter-DBParameterGroupName">
    <td><CopyableCode code="DBParameterGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the DB parameter group. Constraints: Must be the name of an existing DB parameter group You can't delete a default DB parameter group Cannot be associated with any DB instances</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DBParameterGroupName">
    <td><CopyableCode code="DBParameterGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of a specific DB parameter group to return details for. Constraints: If supplied, must match the name of an existing DBClusterParameterGroup.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description for the DB parameter group.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>This parameter is not currently supported.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeDBParameterGroups request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-Parameters">
    <td><CopyableCode code="Parameters" /></td>
    <td><code>array</code></td>
    <td>An array of parameter names, values, and the apply method for the parameter update. At least one parameter name, value, and apply method must be supplied; subsequent arguments are optional. A maximum of 20 parameters can be modified in a single request. Valid Values (for the application method): immediate | pending-reboot You can use the immediate value with dynamic parameters only. You can use the pending-reboot value for both dynamic and static parameters, and changes are applied when you reboot the DB instance without failover.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags to be assigned to the new DB parameter group.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_db_parameter_groups"
    values={[
        { label: 'describe_db_parameter_groups', value: 'describe_db_parameter_groups' }
    ]}
>
<TabItem value="describe_db_parameter_groups">

Returns a list of DBParameterGroup descriptions. If a DBParameterGroupName is specified, the list will contain only the description of the specified DB parameter group.

```sql
SELECT
DBParameterGroupArn,
DBParameterGroupFamily,
DBParameterGroupName,
Description
FROM aws.neptune.db_parameter_groups
WHERE region = '{{ region }}' -- required
AND DBParameterGroupName = '{{ DBParameterGroupName }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_db_parameter_group"
    values={[
        { label: 'create_db_parameter_group', value: 'create_db_parameter_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_db_parameter_group">

Creates a new DB parameter group. A DB parameter group is initially created with the default parameters for the database engine used by the DB instance. To provide custom values for any of the parameters, you must modify the group after creating it using ModifyDBParameterGroup. Once you've created a DB parameter group, you need to associate it with your DB instance using ModifyDBInstance. When you associate a new DB parameter group with a running DB instance, you need to reboot the DB instance without failover for the new DB parameter group and associated settings to take effect. After you create a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the character_set_database parameter. You can use the Parameter Groups option of the Amazon Neptune console or the DescribeDBParameters command to verify that your DB parameter group has been created or modified.

```sql
INSERT INTO aws.neptune.db_parameter_groups (
DBParameterGroupName,
DBParameterGroupFamily,
region,
Description,
Tags
)
SELECT 
'{{ DBParameterGroupName }}',
'{{ DBParameterGroupFamily }}',
'{{ region }}',
'{{ Description }}',
'{{ Tags }}'
RETURNING
DBParameterGroupArn,
DBParameterGroupFamily,
DBParameterGroupName,
Description
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: db_parameter_groups
  props:
    - name: DBParameterGroupName
      value: "{{ DBParameterGroupName }}"
      description: Required parameter for the db_parameter_groups resource.
    - name: DBParameterGroupFamily
      value: "{{ DBParameterGroupFamily }}"
      description: Required parameter for the db_parameter_groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the db_parameter_groups resource.
    - name: Description
      value: "{{ Description }}"
      description: The description for the DB parameter group.
      description: The description for the DB parameter group.
    - name: Tags
      value: "{{ Tags }}"
      description: The tags to be assigned to the new DB parameter group.
      description: The tags to be assigned to the new DB parameter group.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_db_parameter_group"
    values={[
        { label: 'modify_db_parameter_group', value: 'modify_db_parameter_group' }
    ]}
>
<TabItem value="modify_db_parameter_group">

Modifies the parameters of a DB parameter group. To modify more than one parameter, submit a list of the following: ParameterName, ParameterValue, and ApplyMethod. A maximum of 20 parameters can be modified in a single request. Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot without failover to the DB instance associated with the parameter group before the change can take effect. After you modify a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the modify action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the character_set_database parameter. You can use the Parameter Groups option of the Amazon Neptune console or the DescribeDBParameters command to verify that your DB parameter group has been created or modified.

```sql
UPDATE aws.neptune.db_parameter_groups
SET 
-- No updatable properties
WHERE 
DBParameterGroupName = '{{ DBParameterGroupName }}' --required
AND region = '{{ region }}' --required
AND Parameters = '{{ Parameters}}'
RETURNING
DBParameterGroupName;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_db_parameter_group"
    values={[
        { label: 'delete_db_parameter_group', value: 'delete_db_parameter_group' }
    ]}
>
<TabItem value="delete_db_parameter_group">

Deletes a specified DBParameterGroup. The DBParameterGroup to be deleted can't be associated with any DB instances.

```sql
DELETE FROM aws.neptune.db_parameter_groups
WHERE DBParameterGroupName = '{{ DBParameterGroupName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
