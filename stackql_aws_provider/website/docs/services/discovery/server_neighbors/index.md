--- 
title: server_neighbors
hide_title: false
hide_table_of_contents: false
keywords:
  - server_neighbors
  - discovery
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

Creates, updates, deletes, gets or lists a <code>server_neighbors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="server_neighbors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.discovery.server_neighbors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_server_neighbors"
    values={[
        { label: 'list_server_neighbors', value: 'list_server_neighbors' }
    ]}
>
<TabItem value="list_server_neighbors">

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
    <td><CopyableCode code="knownDependencyCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>Count of distinct servers that are one hop away from the given server.</td>
</tr>
<tr>
    <td><CopyableCode code="neighbors" /></td>
    <td><code>array</code></td>
    <td>List of distinct servers that are one hop away from the given server.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Token to retrieve the next set of results. For example, if you specified 100 IDs for ListServerNeighborsRequest$neighborConfigurationIds but set ListServerNeighborsRequest$maxResults to 10, you received a set of 10 results along with this token. Use this token in the next query to retrieve the next set of 10. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#list_server_neighbors"><CopyableCode code="list_server_neighbors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of servers that are one network hop away from a specified server.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_server_neighbors"
    values={[
        { label: 'list_server_neighbors', value: 'list_server_neighbors' }
    ]}
>
<TabItem value="list_server_neighbors">

Retrieves a list of servers that are one network hop away from a specified server.

```sql
SELECT
knownDependencyCount,
neighbors,
nextToken
FROM aws.discovery.server_neighbors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
