--- 
title: cluster_parameters
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_parameters
  - redshift
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

Creates, updates, deletes, gets or lists a <code>cluster_parameters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cluster_parameters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.cluster_parameters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cluster_parameters"
    values={[
        { label: 'describe_cluster_parameters', value: 'describe_cluster_parameters' }
    ]}
>
<TabItem value="describe_cluster_parameters">

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
    <td>The valid range of values for the parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="apply_type" /></td>
    <td><code>string</code></td>
    <td>Specifies how to apply the WLM configuration parameter. Some properties can be applied dynamically, while other properties require that any associated clusters be rebooted for the configuration changes to be applied. For more information about parameters and parameter groups, go to Amazon Redshift Parameter Groups in the Amazon Redshift Cluster Management Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="data_type" /></td>
    <td><code>string</code></td>
    <td>The data type of the parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="is_modifiable" /></td>
    <td><code>boolean</code></td>
    <td>If true, the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed.</td>
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
    <td>The value of the parameter. If ParameterName is wlm_json_configuration, then the maximum size of ParameterValue is 8000 characters.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>The source of the parameter value, such as "engine-default" or "user".</td>
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
    <td><a href="#describe_cluster_parameters"><CopyableCode code="describe_cluster_parameters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ParameterGroupName"><code>ParameterGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Source"><code>Source</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns a detailed list of parameters contained within the specified Amazon Redshift parameter group. For each parameter the response includes information such as parameter name, description, data type, value, whether the parameter value is modifiable, and so on. You can specify source filter to retrieve parameters of only specific type. For example, to retrieve parameters that were modified by a user action such as from ModifyClusterParameterGroup, you can specify source equal to user. For more information about parameters and parameter groups, go to Amazon Redshift Parameter Groups in the Amazon Redshift Cluster Management Guide.</td>
</tr>
<tr>
    <td><a href="#reset_cluster_parameter_group"><CopyableCode code="reset_cluster_parameter_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ParameterGroupName"><code>ParameterGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ResetAllParameters"><code>ResetAllParameters</code></a>, <a href="#parameter-Parameters"><code>Parameters</code></a></td>
    <td>Sets one or more parameters of the specified parameter group to their default values and sets the source values of the parameters to "engine-default". To reset the entire parameter group specify the ResetAllParameters parameter. For parameter changes to take effect you must reboot any associated clusters.</td>
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
<tr id="parameter-ParameterGroupName">
    <td><CopyableCode code="ParameterGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the cluster parameter group to be reset.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeClusterParameters request exceed the value specified in MaxRecords, Amazon Web Services returns a value in the Marker field of the response. You can retrieve the next set of response records by providing the returned marker value in the Marker parameter and retrying the request.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. Default: 100 Constraints: minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-Parameters">
    <td><CopyableCode code="Parameters" /></td>
    <td><code>array</code></td>
    <td>An array of names of parameters to be reset. If ResetAllParameters option is not used, then at least one parameter name must be supplied. Constraints: A maximum of 20 parameters can be reset in a single request.</td>
</tr>
<tr id="parameter-ResetAllParameters">
    <td><CopyableCode code="ResetAllParameters" /></td>
    <td><code>boolean</code></td>
    <td>If true, all parameters in the specified parameter group will be reset to their default values. Default: true</td>
</tr>
<tr id="parameter-Source">
    <td><CopyableCode code="Source" /></td>
    <td><code>string</code></td>
    <td>The parameter types to return. Specify user to show parameters that are different form the default. Similarly, specify engine-default to show parameters that are the same as the default parameter group. Default: All parameter types returned. Valid Values: user | engine-default</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_cluster_parameters"
    values={[
        { label: 'describe_cluster_parameters', value: 'describe_cluster_parameters' }
    ]}
>
<TabItem value="describe_cluster_parameters">

Returns a detailed list of parameters contained within the specified Amazon Redshift parameter group. For each parameter the response includes information such as parameter name, description, data type, value, whether the parameter value is modifiable, and so on. You can specify source filter to retrieve parameters of only specific type. For example, to retrieve parameters that were modified by a user action such as from ModifyClusterParameterGroup, you can specify source equal to user. For more information about parameters and parameter groups, go to Amazon Redshift Parameter Groups in the Amazon Redshift Cluster Management Guide.

```sql
SELECT
allowed_values,
apply_type,
data_type,
description,
is_modifiable,
minimum_engine_version,
parameter_name,
parameter_value,
source
FROM aws.redshift.cluster_parameters
WHERE ParameterGroupName = '{{ ParameterGroupName }}' -- required
AND region = '{{ region }}' -- required
AND Source = '{{ Source }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="reset_cluster_parameter_group"
    values={[
        { label: 'reset_cluster_parameter_group', value: 'reset_cluster_parameter_group' }
    ]}
>
<TabItem value="reset_cluster_parameter_group">

Sets one or more parameters of the specified parameter group to their default values and sets the source values of the parameters to "engine-default". To reset the entire parameter group specify the ResetAllParameters parameter. For parameter changes to take effect you must reboot any associated clusters.

```sql
EXEC aws.redshift.cluster_parameters.reset_cluster_parameter_group 
@ParameterGroupName='{{ ParameterGroupName }}' --required, 
@region='{{ region }}' --required, 
@ResetAllParameters={{ ResetAllParameters }}, 
@Parameters='{{ Parameters }}'
;
```
</TabItem>
</Tabs>
