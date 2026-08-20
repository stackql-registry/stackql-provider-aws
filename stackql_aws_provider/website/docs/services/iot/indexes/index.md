--- 
title: indexes
hide_title: false
hide_table_of_contents: false
keywords:
  - indexes
  - iot
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

Creates, updates, deletes, gets or lists an <code>indexes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="indexes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.indexes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_index"
    values={[
        { label: 'describe_index', value: 'describe_index' },
        { label: 'search_index', value: 'search_index' }
    ]}
>
<TabItem value="describe_index">

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
    <td><CopyableCode code="index_name" /></td>
    <td><code>string</code></td>
    <td>The index name. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="index_status" /></td>
    <td><code>string</code></td>
    <td>The index status. (ACTIVE, BUILDING, REBUILDING)</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>string</code></td>
    <td>Contains a value that specifies the type of indexing performed. Valid values are: REGISTRY – Your thing index contains only registry data. REGISTRY_AND_SHADOW - Your thing index contains registry data and shadow data. REGISTRY_AND_CONNECTIVITY_STATUS - Your thing index contains registry data and thing connectivity status data. REGISTRY_AND_SHADOW_AND_CONNECTIVITY_STATUS - Your thing index contains registry data, shadow data, and thing connectivity status data. MULTI_INDEXING_MODE - Your thing index contains multiple data sources. For more information, see GetIndexingConfiguration.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_index">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token used to get the next set of results, or null if there are no additional results.</td>
</tr>
<tr>
    <td><CopyableCode code="thing_groups" /></td>
    <td><code>array</code></td>
    <td>The thing groups that match the search query.</td>
</tr>
<tr>
    <td><CopyableCode code="things" /></td>
    <td><code>array</code></td>
    <td>The things that match the search query.</td>
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
    <td><a href="#describe_index"><CopyableCode code="describe_index" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-index_name"><code>index_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a search index. Requires permission to access the DescribeIndex action.</td>
</tr>
<tr>
    <td><a href="#search_index"><CopyableCode code="search_index" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches the specified index. If a device has never connected to IoT Core or was disconnected for more than 1 hour before fleet indexing's thingConnectivityIndexingMode was enabled, the connectivity object for this device in the response will have the connected field set to false with no additional session details. Requires permission to access the SearchIndex action.</td>
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
<tr id="parameter-index_name">
    <td><CopyableCode code="index_name" /></td>
    <td><code>string</code></td>
    <td>The index name.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_index"
    values={[
        { label: 'describe_index', value: 'describe_index' },
        { label: 'search_index', value: 'search_index' }
    ]}
>
<TabItem value="describe_index">

Describes a search index. Requires permission to access the DescribeIndex action.

```sql
SELECT
index_name,
index_status,
schema
FROM aws.iot.indexes
WHERE index_name = '{{ index_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="search_index">

Searches the specified index. If a device has never connected to IoT Core or was disconnected for more than 1 hour before fleet indexing's thingConnectivityIndexingMode was enabled, the connectivity object for this device in the response will have the connected field set to false with no additional session details. Requires permission to access the SearchIndex action.

```sql
SELECT
next_token,
thing_groups,
things
FROM aws.iot.indexes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
