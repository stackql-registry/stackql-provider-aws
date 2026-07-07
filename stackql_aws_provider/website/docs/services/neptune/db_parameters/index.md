--- 
title: db_parameters
hide_title: false
hide_table_of_contents: false
keywords:
  - db_parameters
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

Creates, updates, deletes, gets or lists a <code>db_parameters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_parameters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.neptune.db_parameters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_db_parameters"
    values={[
        { label: 'describe_db_parameters', value: 'describe_db_parameters' }
    ]}
>
<TabItem value="describe_db_parameters">

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
    <td><a href="#describe_db_parameters"><CopyableCode code="describe_db_parameters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-DBParameterGroupName"><code>DBParameterGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Source"><code>Source</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns the detailed parameter list for a particular DB parameter group.</td>
</tr>
<tr>
    <td><a href="#copy_db_parameter_group"><CopyableCode code="copy_db_parameter_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-SourceDBParameterGroupIdentifier"><code>SourceDBParameterGroupIdentifier</code></a>, <a href="#parameter-TargetDBParameterGroupIdentifier"><code>TargetDBParameterGroupIdentifier</code></a>, <a href="#parameter-TargetDBParameterGroupDescription"><code>TargetDBParameterGroupDescription</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Copies the specified DB parameter group.</td>
</tr>
<tr>
    <td><a href="#reset_db_parameter_group"><CopyableCode code="reset_db_parameter_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DBParameterGroupName"><code>DBParameterGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ResetAllParameters"><code>ResetAllParameters</code></a>, <a href="#parameter-Parameters"><code>Parameters</code></a></td>
    <td>Modifies the parameters of a DB parameter group to the engine/system default value. To reset specific parameters, provide a list of the following: ParameterName and ApplyMethod. To reset the entire DB parameter group, specify the DBParameterGroup name and ResetAllParameters parameters. When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to pending-reboot to take effect on the next DB instance restart or RebootDBInstance request.</td>
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
<tr id="parameter-DBParameterGroupName">
    <td><CopyableCode code="DBParameterGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the DB parameter group. Constraints: Must match the name of an existing DBParameterGroup.</td>
</tr>
<tr id="parameter-SourceDBParameterGroupIdentifier">
    <td><CopyableCode code="SourceDBParameterGroupIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier or ARN for the source DB parameter group. For information about creating an ARN, see Constructing an Amazon Resource Name (ARN). Constraints: Must specify a valid DB parameter group. Must specify a valid DB parameter group identifier, for example my-db-param-group, or a valid ARN.</td>
</tr>
<tr id="parameter-TargetDBParameterGroupDescription">
    <td><CopyableCode code="TargetDBParameterGroupDescription" /></td>
    <td><code>string</code></td>
    <td>A description for the copied DB parameter group.</td>
</tr>
<tr id="parameter-TargetDBParameterGroupIdentifier">
    <td><CopyableCode code="TargetDBParameterGroupIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier for the copied DB parameter group. Constraints: Cannot be null, empty, or blank. Must contain from 1 to 255 letters, numbers, or hyphens. First character must be a letter. Cannot end with a hyphen or contain two consecutive hyphens. Example: my-db-parameter-group</td>
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
    <td>An optional pagination token provided by a previous DescribeDBParameters request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-Parameters">
    <td><CopyableCode code="Parameters" /></td>
    <td><code>array</code></td>
    <td>To reset the entire DB parameter group, specify the DBParameterGroup name and ResetAllParameters parameters. To reset specific parameters, provide a list of the following: ParameterName and ApplyMethod. A maximum of 20 parameters can be modified in a single request. Valid Values (for Apply method): pending-reboot</td>
</tr>
<tr id="parameter-ResetAllParameters">
    <td><CopyableCode code="ResetAllParameters" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether (true) or not (false) to reset all parameters in the DB parameter group to default values. Default: true</td>
</tr>
<tr id="parameter-Source">
    <td><CopyableCode code="Source" /></td>
    <td><code>string</code></td>
    <td>The parameter types to return. Default: All parameter types returned Valid Values: user | system | engine-default</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags to be assigned to the copied DB parameter group.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_db_parameters"
    values={[
        { label: 'describe_db_parameters', value: 'describe_db_parameters' }
    ]}
>
<TabItem value="describe_db_parameters">

Returns the detailed parameter list for a particular DB parameter group.

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
FROM aws.neptune.db_parameters
WHERE DBParameterGroupName = '{{ DBParameterGroupName }}' -- required
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
    defaultValue="copy_db_parameter_group"
    values={[
        { label: 'copy_db_parameter_group', value: 'copy_db_parameter_group' },
        { label: 'reset_db_parameter_group', value: 'reset_db_parameter_group' }
    ]}
>
<TabItem value="copy_db_parameter_group">

Copies the specified DB parameter group.

```sql
EXEC aws.neptune.db_parameters.copy_db_parameter_group 
@SourceDBParameterGroupIdentifier='{{ SourceDBParameterGroupIdentifier }}' --required, 
@TargetDBParameterGroupIdentifier='{{ TargetDBParameterGroupIdentifier }}' --required, 
@TargetDBParameterGroupDescription='{{ TargetDBParameterGroupDescription }}' --required, 
@region='{{ region }}' --required, 
@Tags='{{ Tags }}'
;
```
</TabItem>
<TabItem value="reset_db_parameter_group">

Modifies the parameters of a DB parameter group to the engine/system default value. To reset specific parameters, provide a list of the following: ParameterName and ApplyMethod. To reset the entire DB parameter group, specify the DBParameterGroup name and ResetAllParameters parameters. When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to pending-reboot to take effect on the next DB instance restart or RebootDBInstance request.

```sql
EXEC aws.neptune.db_parameters.reset_db_parameter_group 
@DBParameterGroupName='{{ DBParameterGroupName }}' --required, 
@region='{{ region }}' --required, 
@ResetAllParameters={{ ResetAllParameters }}, 
@Parameters='{{ Parameters }}'
;
```
</TabItem>
</Tabs>
