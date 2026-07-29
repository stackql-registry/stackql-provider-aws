--- 
title: db_cluster_parameters
hide_title: false
hide_table_of_contents: false
keywords:
  - db_cluster_parameters
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

Creates, updates, deletes, gets or lists a <code>db_cluster_parameters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_cluster_parameters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.db_cluster_parameters" /></td></tr>
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
    <td><CopyableCode code="allowed_values" /></td>
    <td><code>string</code></td>
    <td>Specifies the valid range of values for the parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="apply_method" /></td>
    <td><code>string</code></td>
    <td>Indicates when to apply parameter updates.</td>
</tr>
<tr>
    <td><CopyableCode code="apply_type" /></td>
    <td><code>string</code></td>
    <td>Specifies the engine specific parameters type.</td>
</tr>
<tr>
    <td><CopyableCode code="data_type" /></td>
    <td><code>string</code></td>
    <td>Specifies the valid data type for the parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Provides a description of the parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="is_modifiable" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether (true) or not (false) the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed.</td>
</tr>
<tr>
    <td><CopyableCode code="minimum_engine_version" /></td>
    <td><code>string</code></td>
    <td>The earliest engine version to which the parameter can apply.</td>
</tr>
<tr>
    <td><CopyableCode code="parameter_name" /></td>
    <td><code>string</code></td>
    <td>The name of the parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="parameter_value" /></td>
    <td><code>string</code></td>
    <td>The value of the parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>The source of the parameter value.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_engine_modes" /></td>
    <td><code>string</code></td>
    <td>The valid DB engine modes.</td>
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
    <td>Returns the detailed parameter list for a particular DB cluster parameter group. For more information on Amazon Aurora, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.</td>
</tr>
<tr>
    <td><a href="#copy_db_cluster_parameter_group"><CopyableCode code="copy_db_cluster_parameter_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-SourceDBClusterParameterGroupIdentifier"><code>SourceDBClusterParameterGroupIdentifier</code></a>, <a href="#parameter-TargetDBClusterParameterGroupIdentifier"><code>TargetDBClusterParameterGroupIdentifier</code></a>, <a href="#parameter-TargetDBClusterParameterGroupDescription"><code>TargetDBClusterParameterGroupDescription</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Copies the specified DB cluster parameter group. You can't copy a default DB cluster parameter group. Instead, create a new custom DB cluster parameter group, which copies the default parameters and values for the specified DB cluster parameter group family.</td>
</tr>
<tr>
    <td><a href="#reset_db_cluster_parameter_group"><CopyableCode code="reset_db_cluster_parameter_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBClusterParameterGroupName"><code>DBClusterParameterGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ResetAllParameters"><code>ResetAllParameters</code></a>, <a href="#parameter-Parameters"><code>Parameters</code></a></td>
    <td>Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters submit a list of the following: ParameterName and ApplyMethod. To reset the entire DB cluster parameter group, specify the DBClusterParameterGroupName and ResetAllParameters parameters. When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to pending-reboot to take effect on the next DB instance restart or RebootDBInstance request. You must call RebootDBInstance for every DB instance in your DB cluster that you want the updated static parameter to apply to. For more information on Amazon Aurora DB clusters, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.</td>
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
    <td>The identifier or Amazon Resource Name (ARN) for the source DB cluster parameter group. For information about creating an ARN, see Constructing an ARN for Amazon RDS in the Amazon Aurora User Guide. Constraints: Must specify a valid DB cluster parameter group.</td>
</tr>
<tr id="parameter-TargetDBClusterParameterGroupDescription">
    <td><CopyableCode code="TargetDBClusterParameterGroupDescription" /></td>
    <td><code>string</code></td>
    <td>A description for the copied DB cluster parameter group.</td>
</tr>
<tr id="parameter-TargetDBClusterParameterGroupIdentifier">
    <td><CopyableCode code="TargetDBClusterParameterGroupIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier for the copied DB cluster parameter group. Constraints: Can't be null, empty, or blank Must contain from 1 to 255 letters, numbers, or hyphens First character must be a letter Can't end with a hyphen or contain two consecutive hyphens Example: my-cluster-param-group1</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>A filter that specifies one or more DB cluster parameters to describe. The only supported filter is parameter-name. The results list only includes information about the DB cluster parameters with these names.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeDBClusterParameters request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-Parameters">
    <td><CopyableCode code="Parameters" /></td>
    <td><code>array</code></td>
    <td>A list of parameter names in the DB cluster parameter group to reset to the default values. You can't use this parameter if the ResetAllParameters parameter is enabled.</td>
</tr>
<tr id="parameter-ResetAllParameters">
    <td><CopyableCode code="ResetAllParameters" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to reset all parameters in the DB cluster parameter group to their default values. You can't use this parameter if there is a list of parameter names specified for the Parameters parameter.</td>
</tr>
<tr id="parameter-Source">
    <td><CopyableCode code="Source" /></td>
    <td><code>string</code></td>
    <td>A specific source to return parameters for. Valid Values: engine-default system user</td>
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
    defaultValue="describe_db_cluster_parameters"
    values={[
        { label: 'describe_db_cluster_parameters', value: 'describe_db_cluster_parameters' }
    ]}
>
<TabItem value="describe_db_cluster_parameters">

Returns the detailed parameter list for a particular DB cluster parameter group. For more information on Amazon Aurora, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.

```sql
SELECT
allowed_values,
apply_method,
apply_type,
data_type,
description,
is_modifiable,
minimum_engine_version,
parameter_name,
parameter_value,
source,
supported_engine_modes
FROM aws.rds.db_cluster_parameters
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

Copies the specified DB cluster parameter group. You can't copy a default DB cluster parameter group. Instead, create a new custom DB cluster parameter group, which copies the default parameters and values for the specified DB cluster parameter group family.

```sql
EXEC aws.rds.db_cluster_parameters.copy_db_cluster_parameter_group 
@SourceDBClusterParameterGroupIdentifier='{{ SourceDBClusterParameterGroupIdentifier }}' --required, 
@TargetDBClusterParameterGroupIdentifier='{{ TargetDBClusterParameterGroupIdentifier }}' --required, 
@TargetDBClusterParameterGroupDescription='{{ TargetDBClusterParameterGroupDescription }}' --required, 
@region='{{ region }}' --required, 
@Tags='{{ Tags }}'
;
```
</TabItem>
<TabItem value="reset_db_cluster_parameter_group">

Modifies the parameters of a DB cluster parameter group to the default value. To reset specific parameters submit a list of the following: ParameterName and ApplyMethod. To reset the entire DB cluster parameter group, specify the DBClusterParameterGroupName and ResetAllParameters parameters. When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to pending-reboot to take effect on the next DB instance restart or RebootDBInstance request. You must call RebootDBInstance for every DB instance in your DB cluster that you want the updated static parameter to apply to. For more information on Amazon Aurora DB clusters, see What is Amazon Aurora? in the Amazon Aurora User Guide. For more information on Multi-AZ DB clusters, see Multi-AZ DB cluster deployments in the Amazon RDS User Guide.

```sql
EXEC aws.rds.db_cluster_parameters.reset_db_cluster_parameter_group 
@DBClusterParameterGroupName='{{ DBClusterParameterGroupName }}' --required, 
@region='{{ region }}' --required, 
@ResetAllParameters={{ ResetAllParameters }}, 
@Parameters='{{ Parameters }}'
;
```
</TabItem>
</Tabs>
