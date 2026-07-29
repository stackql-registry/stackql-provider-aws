--- 
title: cache_parameters
hide_title: false
hide_table_of_contents: false
keywords:
  - cache_parameters
  - elasticache
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

Creates, updates, deletes, gets or lists a <code>cache_parameters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cache_parameters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticache.cache_parameters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cache_parameters"
    values={[
        { label: 'describe_cache_parameters', value: 'describe_cache_parameters' }
    ]}
>
<TabItem value="describe_cache_parameters">

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
    <td><CopyableCode code="change_type" /></td>
    <td><code>string</code></td>
    <td>Indicates whether a change to the parameter is applied immediately or requires a reboot for the change to be applied. You can force a reboot or wait until the next maintenance window's reboot. For more information, see Rebooting a Cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="data_type" /></td>
    <td><code>string</code></td>
    <td>The valid data type for the parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="is_modifiable" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether (true) or not (false) the parameter can be modified. Some parameters have security or operational implications that prevent them from being changed.</td>
</tr>
<tr>
    <td><CopyableCode code="minimum_engine_version" /></td>
    <td><code>string</code></td>
    <td>The earliest cache engine version to which the parameter can apply.</td>
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
    <td>The source of the parameter.</td>
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
    <td><a href="#describe_cache_parameters"><CopyableCode code="describe_cache_parameters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-CacheParameterGroupName"><code>CacheParameterGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Source"><code>Source</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns the detailed parameter list for a particular cache parameter group.</td>
</tr>
<tr>
    <td><a href="#reset_cache_parameter_group"><CopyableCode code="reset_cache_parameter_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-CacheParameterGroupName"><code>CacheParameterGroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ResetAllParameters"><code>ResetAllParameters</code></a>, <a href="#parameter-ParameterNameValues"><code>ParameterNameValues</code></a></td>
    <td>Modifies the parameters of a cache parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire cache parameter group, specify the ResetAllParameters and CacheParameterGroupName parameters.</td>
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
<tr id="parameter-CacheParameterGroupName">
    <td><CopyableCode code="CacheParameterGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the cache parameter group to reset.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: minimum 20; maximum 100.</td>
</tr>
<tr id="parameter-ParameterNameValues">
    <td><CopyableCode code="ParameterNameValues" /></td>
    <td><code>array</code></td>
    <td>An array of parameter names to reset to their default values. If ResetAllParameters is true, do not use ParameterNameValues. If ResetAllParameters is false, you must specify the name of at least one parameter to reset.</td>
</tr>
<tr id="parameter-ResetAllParameters">
    <td><CopyableCode code="ResetAllParameters" /></td>
    <td><code>boolean</code></td>
    <td>If true, all parameters in the cache parameter group are reset to their default values. If false, only the parameters listed by ParameterNameValues are reset to their default values. Valid values: true | false</td>
</tr>
<tr id="parameter-Source">
    <td><CopyableCode code="Source" /></td>
    <td><code>string</code></td>
    <td>The parameter types to return. Valid values: user | system | engine-default</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_cache_parameters"
    values={[
        { label: 'describe_cache_parameters', value: 'describe_cache_parameters' }
    ]}
>
<TabItem value="describe_cache_parameters">

Returns the detailed parameter list for a particular cache parameter group.

```sql
SELECT
allowed_values,
change_type,
data_type,
description,
is_modifiable,
minimum_engine_version,
parameter_name,
parameter_value,
source
FROM aws.elasticache.cache_parameters
WHERE CacheParameterGroupName = '{{ CacheParameterGroupName }}' -- required
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
    defaultValue="reset_cache_parameter_group"
    values={[
        { label: 'reset_cache_parameter_group', value: 'reset_cache_parameter_group' }
    ]}
>
<TabItem value="reset_cache_parameter_group">

Modifies the parameters of a cache parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire cache parameter group, specify the ResetAllParameters and CacheParameterGroupName parameters.

```sql
EXEC aws.elasticache.cache_parameters.reset_cache_parameter_group 
@CacheParameterGroupName='{{ CacheParameterGroupName }}' --required, 
@region='{{ region }}' --required, 
@ResetAllParameters={{ ResetAllParameters }}, 
@ParameterNameValues='{{ ParameterNameValues }}'
;
```
</TabItem>
</Tabs>
