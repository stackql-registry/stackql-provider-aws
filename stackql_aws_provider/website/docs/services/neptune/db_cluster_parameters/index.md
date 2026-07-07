--- 
title: db_cluster_parameters
hide_title: false
hide_table_of_contents: false
keywords:
  - db_cluster_parameters
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

Creates, updates, deletes, gets or lists a <code>db_cluster_parameters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_cluster_parameters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.neptune.db_cluster_parameters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_db_cluster_parameters"
    values={[
        { label: 'describe_db_cluster_parameters', value: 'describe_db_cluster_parameters' }
    ]}
>
<TabItem value="describe_db_cluster_parameters">

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
    <td><CopyableCode code="AllowedValues" /></td>
    <td><code>string</code></td>
    <td>Specifies the valid range of values for the parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="ApplyMethod" /></td>
    <td><code>string</code></td>
    <td>Indicates when to apply parameter updates.</td>
</tr>
<tr>
    <td><CopyableCode code="ApplyType" /></td>
    <td><code>string</code></td>
    <td>Specifies the engine specific parameters type.</td>
</tr>
<tr>
    <td><CopyableCode code="DataType" /></td>
    <td><code>string</code></td>
    <td>Specifies the valid data type for the parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>Provides a description of the parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="IsModifiable" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether (true) or not (false) the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed.</td>
</tr>
<tr>
    <td><CopyableCode code="MinimumEngineVersion" /></td>
    <td><code>string</code></td>
    <td>The earliest engine version to which the parameter can apply.</td>
</tr>
<tr>
    <td><CopyableCode code="ParameterName" /></td>
    <td><code>string</code></td>
    <td>Specifies the name of the parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="ParameterValue" /></td>
    <td><code>string</code></td>
    <td>Specifies the value of the parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="Source" /></td>
    <td><code>string</code></td>
    <td>Indicates the source of the parameter value.</td>
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
    <td><a href="#describe_db_cluster_parameters"><CopyableCode code="describe_db_cluster_parameters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-DBClusterParameterGroupName"><code>DBClusterParameterGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Source"><code>Source</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns the detailed parameter list for a particular DB cluster parameter group.</td>
</tr>
<tr>
    <td><a href="#copy_db_cluster_parameter_group"><CopyableCode code="copy_db_cluster_parameter_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-SourceDBClusterParameterGroupIdentifier"><code>SourceDBClusterParameterGroupIdentifier</code></a>, <a href="#parameter-TargetDBClusterParameterGroupIdentifier"><code>TargetDBClusterParameterGroupIdentifier</code></a>, <a href="#parameter-TargetDBClusterParameterGroupDescription"><code>TargetDBClusterParameterGroupDescription</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Copies the specified DB cluster parameter group.</td>
</tr>
<tr>
    <td><a href="#reset_db_cluster_parameter_group"><CopyableCode code="reset_db_cluster_parameter_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBClusterParameterGroupName"><code>DBClusterParameterGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ResetAllParameters"><code>ResetAllParameters</code></a>, <a href="#parameter-Parameters"><code>Parameters</code></a></td>
    <td>Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters submit a list of the following: ParameterName and ApplyMethod. To reset the entire DB cluster parameter group, specify the DBClusterParameterGroupName and ResetAllParameters parameters. When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to pending-reboot to take effect on the next DB instance restart or RebootDBInstance request. You must call RebootDBInstance for every DB instance in your DB cluster that you want the updated static parameter to apply to.</td>
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
    <td>The name of the DB cluster parameter group to reset.</td>
</tr>
<tr id="parameter-SourceDBClusterParameterGroupIdentifier">
    <td><CopyableCode code="SourceDBClusterParameterGroupIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier or Amazon Resource Name (ARN) for the source DB cluster parameter group. For information about creating an ARN, see Constructing an Amazon Resource Name (ARN). Constraints: Must specify a valid DB cluster parameter group. If the source DB cluster parameter group is in the same Amazon Region as the copy, specify a valid DB parameter group identifier, for example my-db-cluster-param-group, or a valid ARN. If the source DB parameter group is in a different Amazon Region than the copy, specify a valid DB cluster parameter group ARN, for example arn:aws:rds:us-east-1:123456789012:cluster-pg:custom-cluster-group1.</td>
</tr>
<tr id="parameter-TargetDBClusterParameterGroupDescription">
    <td><CopyableCode code="TargetDBClusterParameterGroupDescription" /></td>
    <td><code>string</code></td>
    <td>A description for the copied DB cluster parameter group.</td>
</tr>
<tr id="parameter-TargetDBClusterParameterGroupIdentifier">
    <td><CopyableCode code="TargetDBClusterParameterGroupIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier for the copied DB cluster parameter group. Constraints: Cannot be null, empty, or blank Must contain from 1 to 255 letters, numbers, or hyphens First character must be a letter Cannot end with a hyphen or contain two consecutive hyphens Example: my-cluster-param-group1</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>This parameter is not currently supported.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeDBClusterParameters request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-Parameters">
    <td><CopyableCode code="Parameters" /></td>
    <td><code>array</code></td>
    <td>A list of parameter names in the DB cluster parameter group to reset to the default values. You can't use this parameter if the ResetAllParameters parameter is set to true.</td>
</tr>
<tr id="parameter-ResetAllParameters">
    <td><CopyableCode code="ResetAllParameters" /></td>
    <td><code>boolean</code></td>
    <td>A value that is set to true to reset all parameters in the DB cluster parameter group to their default values, and false otherwise. You can't use this parameter if there is a list of parameter names specified for the Parameters parameter.</td>
</tr>
<tr id="parameter-Source">
    <td><CopyableCode code="Source" /></td>
    <td><code>string</code></td>
    <td>A value that indicates to return only parameters for a specific source. Parameter sources can be engine, service, or customer.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags to be assigned to the copied DB cluster parameter group.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_db_cluster_parameters"
    values={[
        { label: 'describe_db_cluster_parameters', value: 'describe_db_cluster_parameters' }
    ]}
>
<TabItem value="describe_db_cluster_parameters">

Returns the detailed parameter list for a particular DB cluster parameter group.

```sql
SELECT
AllowedValues,
ApplyMethod,
ApplyType,
DataType,
Description,
IsModifiable,
MinimumEngineVersion,
ParameterName,
ParameterValue,
Source
FROM aws.neptune.db_cluster_parameters
WHERE DBClusterParameterGroupName = '{{ DBClusterParameterGroupName }}' -- required
AND region = '{{ region }}' -- required
AND Source = '{{ Source }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="copy_db_cluster_parameter_group"
    values={[
        { label: 'copy_db_cluster_parameter_group', value: 'copy_db_cluster_parameter_group' },
        { label: 'reset_db_cluster_parameter_group', value: 'reset_db_cluster_parameter_group' }
    ]}
>
<TabItem value="copy_db_cluster_parameter_group">

Copies the specified DB cluster parameter group.

```sql
EXEC aws.neptune.db_cluster_parameters.copy_db_cluster_parameter_group 
@SourceDBClusterParameterGroupIdentifier='{{ SourceDBClusterParameterGroupIdentifier }}' --required, 
@TargetDBClusterParameterGroupIdentifier='{{ TargetDBClusterParameterGroupIdentifier }}' --required, 
@TargetDBClusterParameterGroupDescription='{{ TargetDBClusterParameterGroupDescription }}' --required, 
@region='{{ region }}' --required, 
@Tags='{{ Tags }}'
;
```
</TabItem>
<TabItem value="reset_db_cluster_parameter_group">

Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters submit a list of the following: ParameterName and ApplyMethod. To reset the entire DB cluster parameter group, specify the DBClusterParameterGroupName and ResetAllParameters parameters. When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to pending-reboot to take effect on the next DB instance restart or RebootDBInstance request. You must call RebootDBInstance for every DB instance in your DB cluster that you want the updated static parameter to apply to.

```sql
EXEC aws.neptune.db_cluster_parameters.reset_db_cluster_parameter_group 
@DBClusterParameterGroupName='{{ DBClusterParameterGroupName }}' --required, 
@region='{{ region }}' --required, 
@ResetAllParameters={{ ResetAllParameters }}, 
@Parameters='{{ Parameters }}'
;
```
</TabItem>
</Tabs>
