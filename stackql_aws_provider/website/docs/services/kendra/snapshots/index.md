--- 
title: snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - snapshots
  - kendra
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

Creates, updates, deletes, gets or lists a <code>snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="snapshots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kendra.snapshots" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_snapshots"
    values={[
        { label: 'get_snapshots', value: 'get_snapshots' }
    ]}
>
<TabItem value="get_snapshots">

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
    <td>If the response is truncated, Amazon Kendra returns this token, which you can use in a later request to retrieve the next set of search metrics data.</td>
</tr>
<tr>
    <td><CopyableCode code="snap_shot_time_filter" /></td>
    <td><code>object</code></td>
    <td>The Unix timestamp for the beginning and end of the time window for the search metrics data.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshots_data" /></td>
    <td><code>array</code></td>
    <td>The search metrics data. The data returned depends on the metric type you requested.</td>
</tr>
<tr>
    <td><CopyableCode code="snapshots_data_header" /></td>
    <td><code>array</code></td>
    <td>The column headers for the search metrics data.</td>
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
    <td><a href="#get_snapshots"><CopyableCode code="get_snapshots" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves search metrics data. The data provides a snapshot of how your users interact with your search application and how effective the application is.</td>
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
    defaultValue="get_snapshots"
    values={[
        { label: 'get_snapshots', value: 'get_snapshots' }
    ]}
>
<TabItem value="get_snapshots">

Retrieves search metrics data. The data provides a snapshot of how your users interact with your search application and how effective the application is.

```sql
SELECT
next_token,
snap_shot_time_filter,
snapshots_data,
snapshots_data_header
FROM aws.kendra.snapshots
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
