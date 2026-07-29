--- 
title: db_cluster_parameter_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - db_cluster_parameter_groups
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

Creates, updates, deletes, gets or lists a <code>db_cluster_parameter_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_cluster_parameter_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.docdb.db_cluster_parameter_groups" /></td></tr>
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
    <td>The Amazon Resource Name (ARN) for the cluster parameter group.</td>
</tr>
<tr>
    <td><CopyableCode code="db_cluster_parameter_group_name" /></td>
    <td><code>string</code></td>
    <td>Provides the name of the cluster parameter group.</td>
</tr>
<tr>
    <td><CopyableCode code="db_parameter_group_family" /></td>
    <td><code>string</code></td>
    <td>Provides the name of the parameter group family that this cluster parameter group is compatible with.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Provides the customer-specified description for this cluster parameter group.</td>
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
    <td>Returns a list of DBClusterParameterGroup descriptions. If a DBClusterParameterGroupName parameter is specified, the list contains only the description of the specified cluster parameter group.</td>
</tr>
<tr>
    <td><a href="#create_db_cluster_parameter_group"><CopyableCode code="create_db_cluster_parameter_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-DBClusterParameterGroupName"><code>DBClusterParameterGroupName</code></a>, <a href="#parameter-DBParameterGroupFamily"><code>DBParameterGroupFamily</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates a new cluster parameter group. Parameters in a cluster parameter group apply to all of the instances in a cluster. A cluster parameter group is initially created with the default parameters for the database engine used by instances in the cluster. In Amazon DocumentDB, you cannot make modifications directly to the default.docdb3.6 cluster parameter group. If your Amazon DocumentDB cluster is using the default cluster parameter group and you want to modify a value in it, you must first create a new parameter group or copy an existing parameter group, modify it, and then apply the modified parameter group to your cluster. For the new cluster parameter group and associated settings to take effect, you must then reboot the instances in the cluster without failover. For more information, see Modifying Amazon DocumentDB Cluster Parameter Groups.</td>
</tr>
<tr>
    <td><a href="#modify_db_cluster_parameter_group"><CopyableCode code="modify_db_cluster_parameter_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DBClusterParameterGroupName"><code>DBClusterParameterGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Parameters"><code>Parameters</code></a></td>
    <td>Modifies the parameters of a cluster parameter group. To modify more than one parameter, submit a list of the following: ParameterName, ParameterValue, and ApplyMethod. A maximum of 20 parameters can be modified in a single request. Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot or maintenance window before the change can take effect. After you create a cluster parameter group, you should wait at least 5 minutes before creating your first cluster that uses that cluster parameter group as the default parameter group. This allows Amazon DocumentDB to fully complete the create action before the parameter group is used as the default for a new cluster. This step is especially important for parameters that are critical when creating the default database for a cluster, such as the character set for the default database defined by the character_set_database parameter.</td>
</tr>
<tr>
    <td><a href="#delete_db_cluster_parameter_group"><CopyableCode code="delete_db_cluster_parameter_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-DBClusterParameterGroupName"><code>DBClusterParameterGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specified cluster parameter group. The cluster parameter group to be deleted can't be associated with any clusters.</td>
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
    <td>The name of the cluster parameter group. Constraints: Must be the name of an existing cluster parameter group. You can't delete a default cluster parameter group. Cannot be associated with any clusters.</td>
</tr>
<tr id="parameter-DBParameterGroupFamily">
    <td><CopyableCode code="DBParameterGroupFamily" /></td>
    <td><code>string</code></td>
    <td>The cluster parameter group family name.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DBClusterParameterGroupName">
    <td><CopyableCode code="DBClusterParameterGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of a specific cluster parameter group to return details for. Constraints: If provided, must match the name of an existing DBClusterParameterGroup.</td>
</tr>
<tr id="parameter-Description">
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description for the cluster parameter group.</td>
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
<tr id="parameter-Parameters">
    <td><CopyableCode code="Parameters" /></td>
    <td><code>array</code></td>
    <td>A list of parameters in the cluster parameter group to modify.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags to be assigned to the cluster parameter group.</td>
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

Returns a list of DBClusterParameterGroup descriptions. If a DBClusterParameterGroupName parameter is specified, the list contains only the description of the specified cluster parameter group.

```sql
SELECT
db_cluster_parameter_group_arn,
db_cluster_parameter_group_name,
db_parameter_group_family,
description
FROM aws.docdb.db_cluster_parameter_groups
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

Creates a new cluster parameter group. Parameters in a cluster parameter group apply to all of the instances in a cluster. A cluster parameter group is initially created with the default parameters for the database engine used by instances in the cluster. In Amazon DocumentDB, you cannot make modifications directly to the default.docdb3.6 cluster parameter group. If your Amazon DocumentDB cluster is using the default cluster parameter group and you want to modify a value in it, you must first create a new parameter group or copy an existing parameter group, modify it, and then apply the modified parameter group to your cluster. For the new cluster parameter group and associated settings to take effect, you must then reboot the instances in the cluster without failover. For more information, see Modifying Amazon DocumentDB Cluster Parameter Groups.

```sql
INSERT INTO aws.docdb.db_cluster_parameter_groups (
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
      description: The description for the cluster parameter group.
      description: The description for the cluster parameter group.
    - name: Tags
      value: "{{ Tags }}"
      description: The tags to be assigned to the cluster parameter group.
      description: The tags to be assigned to the cluster parameter group.
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

Modifies the parameters of a cluster parameter group. To modify more than one parameter, submit a list of the following: ParameterName, ParameterValue, and ApplyMethod. A maximum of 20 parameters can be modified in a single request. Changes to dynamic parameters are applied immediately. Changes to static parameters require a reboot or maintenance window before the change can take effect. After you create a cluster parameter group, you should wait at least 5 minutes before creating your first cluster that uses that cluster parameter group as the default parameter group. This allows Amazon DocumentDB to fully complete the create action before the parameter group is used as the default for a new cluster. This step is especially important for parameters that are critical when creating the default database for a cluster, such as the character set for the default database defined by the character_set_database parameter.

```sql
UPDATE aws.docdb.db_cluster_parameter_groups
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

Deletes a specified cluster parameter group. The cluster parameter group to be deleted can't be associated with any clusters.

```sql
DELETE FROM aws.docdb.db_cluster_parameter_groups
WHERE DBClusterParameterGroupName = '{{ DBClusterParameterGroupName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
