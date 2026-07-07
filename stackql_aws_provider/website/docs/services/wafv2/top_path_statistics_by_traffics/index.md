--- 
title: top_path_statistics_by_traffics
hide_title: false
hide_table_of_contents: false
keywords:
  - top_path_statistics_by_traffics
  - wafv2
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

Creates, updates, deletes, gets or lists a <code>top_path_statistics_by_traffics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="top_path_statistics_by_traffics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wafv2.top_path_statistics_by_traffics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_top_path_statistics_by_traffic"
    values={[
        { label: 'get_top_path_statistics_by_traffic', value: 'get_top_path_statistics_by_traffic' }
    ]}
>
<TabItem value="get_top_path_statistics_by_traffic">

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
    <td><CopyableCode code="NextMarker" /></td>
    <td><code>string</code></td>
    <td>When you request a list of objects with a Limit setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a NextMarker value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PathStatistics" /></td>
    <td><code>array</code></td>
    <td>The list of path statistics, ordered by request count. Each entry includes the path, request count, percentage of total traffic, and the top bots accessing that path.</td>
</tr>
<tr>
    <td><CopyableCode code="TopCategories" /></td>
    <td><code>array</code></td>
    <td>Category-level aggregations for visualizing bot category to path relationships. This field is only populated when no bot filters are applied to the request. Each entry includes the bot category and the paths accessed by bots in that category.</td>
</tr>
<tr>
    <td><CopyableCode code="TotalRequestCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>The total number of requests that match the query criteria within the specified time window.</td>
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
    <td><a href="#get_top_path_statistics_by_traffic"><CopyableCode code="get_top_path_statistics_by_traffic" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves aggregated statistics about the top URI paths accessed by bot traffic for a specified web ACL and time window. You can use this operation to analyze which paths on your web application receive the most bot traffic and identify the specific bots accessing those paths. The operation supports filtering by bot category, organization, or name, and allows you to drill down into specific path prefixes to view detailed URI-level statistics.</td>
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
    defaultValue="get_top_path_statistics_by_traffic"
    values={[
        { label: 'get_top_path_statistics_by_traffic', value: 'get_top_path_statistics_by_traffic' }
    ]}
>
<TabItem value="get_top_path_statistics_by_traffic">

Retrieves aggregated statistics about the top URI paths accessed by bot traffic for a specified web ACL and time window. You can use this operation to analyze which paths on your web application receive the most bot traffic and identify the specific bots accessing those paths. The operation supports filtering by bot category, organization, or name, and allows you to drill down into specific path prefixes to view detailed URI-level statistics.

```sql
SELECT
NextMarker,
PathStatistics,
TopCategories,
TotalRequestCount
FROM aws.wafv2.top_path_statistics_by_traffics
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
