--- 
title: cache_engine_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - cache_engine_versions
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

Creates, updates, deletes, gets or lists a <code>cache_engine_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cache_engine_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticache.cache_engine_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cache_engine_versions"
    values={[
        { label: 'describe_cache_engine_versions', value: 'describe_cache_engine_versions' }
    ]}
>
<TabItem value="describe_cache_engine_versions">

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
    <td><CopyableCode code="CacheEngineDescription" /></td>
    <td><code>string</code></td>
    <td>The description of the cache engine.</td>
</tr>
<tr>
    <td><CopyableCode code="CacheEngineVersionDescription" /></td>
    <td><code>string</code></td>
    <td>The description of the cache engine version.</td>
</tr>
<tr>
    <td><CopyableCode code="CacheParameterGroupFamily" /></td>
    <td><code>string</code></td>
    <td>The name of the cache parameter group family associated with this cache engine. Valid values are: memcached1.4 | memcached1.5 | memcached1.6 | redis2.6 | redis2.8 | redis3.2 | redis4.0 | redis5.0 | redis6.x | redis7</td>
</tr>
<tr>
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>The name of the cache engine.</td>
</tr>
<tr>
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>The version number of the cache engine.</td>
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
    <td><a href="#describe_cache_engine_versions"><CopyableCode code="describe_cache_engine_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Engine"><code>Engine</code></a>, <a href="#parameter-EngineVersion"><code>EngineVersion</code></a>, <a href="#parameter-CacheParameterGroupFamily"><code>CacheParameterGroupFamily</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-DefaultOnly"><code>DefaultOnly</code></a></td>
    <td>Returns a list of the available cache engines and their versions.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CacheParameterGroupFamily">
    <td><CopyableCode code="CacheParameterGroupFamily" /></td>
    <td><code>string</code></td>
    <td>The name of a specific cache parameter group family to return details for. Valid values are: memcached1.4 | memcached1.5 | memcached1.6 | redis2.6 | redis2.8 | redis3.2 | redis4.0 | redis5.0 | redis6.x | redis6.2 | redis7 | valkey7 Constraints: Must be 1 to 255 alphanumeric characters First character must be a letter Cannot end with a hyphen or contain two consecutive hyphens</td>
</tr>
<tr id="parameter-DefaultOnly">
    <td><CopyableCode code="DefaultOnly" /></td>
    <td><code>boolean</code></td>
    <td>If true, specifies that only the default version of the specified engine or engine and major version combination is to be returned.</td>
</tr>
<tr id="parameter-Engine">
    <td><CopyableCode code="Engine" /></td>
    <td><code>string</code></td>
    <td>The cache engine to return. Valid values: memcached | redis</td>
</tr>
<tr id="parameter-EngineVersion">
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>The cache engine version to return. Example: 1.4.14</td>
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
    defaultValue="describe_cache_engine_versions"
    values={[
        { label: 'describe_cache_engine_versions', value: 'describe_cache_engine_versions' }
    ]}
>
<TabItem value="describe_cache_engine_versions">

Returns a list of the available cache engines and their versions.

```sql
SELECT
CacheEngineDescription,
CacheEngineVersionDescription,
CacheParameterGroupFamily,
Engine,
EngineVersion
FROM aws.elasticache.cache_engine_versions
WHERE region = '{{ region }}' -- required
AND Engine = '{{ Engine }}'
AND EngineVersion = '{{ EngineVersion }}'
AND CacheParameterGroupFamily = '{{ CacheParameterGroupFamily }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
AND DefaultOnly = '{{ DefaultOnly }}'
;
```
</TabItem>
</Tabs>
