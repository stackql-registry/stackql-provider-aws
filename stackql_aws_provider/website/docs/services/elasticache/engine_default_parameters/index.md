--- 
title: engine_default_parameters
hide_title: false
hide_table_of_contents: false
keywords:
  - engine_default_parameters
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

Creates, updates, deletes, gets or lists an <code>engine_default_parameters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="engine_default_parameters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticache.engine_default_parameters" /></td></tr>
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
    <td><CopyableCode code="cache_node_type_specific_parameters" /></td>
    <td><code>string</code></td>
    <td>A list of parameters specific to a particular cache node type. Each element in the list contains detailed information about one parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="cache_parameter_group_family" /></td>
    <td><code>string</code></td>
    <td>Specifies the name of the cache parameter group family to which the engine default parameters apply. Valid values are: memcached1.4 | memcached1.5 | memcached1.6 | redis2.6 | redis2.8 | redis3.2 | redis4.0 | redis5.0 | redis6.0 | redis6.x | redis7</td>
</tr>
<tr>
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>Provides an identifier to allow retrieval of paginated results.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
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
    <td><a href="#parameter-CacheParameterGroupFamily"><code>CacheParameterGroupFamily</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns the default engine and system parameter information for the specified cache engine.</td>
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
<tr id="parameter-CacheParameterGroupFamily">
    <td><CopyableCode code="CacheParameterGroupFamily" /></td>
    <td><code>string</code></td>
    <td>The name of the cache parameter group family. Valid values are: memcached1.4 | memcached1.5 | memcached1.6 | redis2.6 | redis2.8 | redis3.2 | redis4.0 | redis5.0 | redis6.x | redis6.2 | redis7</td>
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

Returns the default engine and system parameter information for the specified cache engine.

```sql
SELECT
cache_node_type_specific_parameters,
cache_parameter_group_family,
marker,
parameters
FROM aws.elasticache.engine_default_parameters
WHERE CacheParameterGroupFamily = '{{ CacheParameterGroupFamily }}' -- required
AND region = '{{ region }}' -- required
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>
