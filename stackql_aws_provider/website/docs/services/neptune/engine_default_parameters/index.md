--- 
title: engine_default_parameters
hide_title: false
hide_table_of_contents: false
keywords:
  - engine_default_parameters
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

Creates, updates, deletes, gets or lists an <code>engine_default_parameters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="engine_default_parameters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.neptune.engine_default_parameters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_engine_default_parameters"
    values={[
        { label: 'describe_engine_default_parameters', value: 'describe_engine_default_parameters' }
    ]}
>
<TabItem value="describe_engine_default_parameters">

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
    <td><CopyableCode code="DBParameterGroupFamily" /></td>
    <td><code>string</code></td>
    <td>Specifies the name of the DB parameter group family that the engine default parameters apply to.</td>
</tr>
<tr>
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous EngineDefaults request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords .</td>
</tr>
<tr>
    <td><CopyableCode code="Parameters" /></td>
    <td><code>string</code></td>
    <td>Contains a list of engine default parameters.</td>
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
    <td><a href="#describe_engine_default_parameters"><CopyableCode code="describe_engine_default_parameters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-DBParameterGroupFamily"><code>DBParameterGroupFamily</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns the default engine and system parameter information for the specified database engine.</td>
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
    <td>The name of the DB parameter group family.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>Not currently supported.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeEngineDefaultParameters request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_engine_default_parameters"
    values={[
        { label: 'describe_engine_default_parameters', value: 'describe_engine_default_parameters' }
    ]}
>
<TabItem value="describe_engine_default_parameters">

Returns the default engine and system parameter information for the specified database engine.

```sql
SELECT
DBParameterGroupFamily,
Marker,
Parameters
FROM aws.neptune.engine_default_parameters
WHERE DBParameterGroupFamily = '{{ DBParameterGroupFamily }}' -- required
AND region = '{{ region }}' -- required
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>
