--- 
title: capture_datas
hide_title: false
hide_table_of_contents: false
keywords:
  - capture_datas
  - iotsitewise
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

Creates, updates, deletes, gets or lists a <code>capture_datas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="capture_datas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.capture_datas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_capture_data"
    values={[
        { label: 'get_capture_data', value: 'get_capture_data' }
    ]}
>
<TabItem value="get_capture_data">

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
    <td><CopyableCode code="data" /></td>
    <td><code>string (byte)</code></td>
    <td>The binary video data.</td>
</tr>
<tr>
    <td><CopyableCode code="data_type" /></td>
    <td><code>string</code></td>
    <td>The type of the returned data. (VIDEO-MP4)</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>object</code></td>
    <td>Contains a timestamp with optional nanosecond granularity.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>Pagination token for retrieving the next chunk of video data.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>object</code></td>
    <td>Contains a timestamp with optional nanosecond granularity.</td>
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
    <td><a href="#get_capture_data"><CopyableCode code="get_capture_data" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_name"><code>workspace_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves video data for a specific time range.</td>
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
<tr id="parameter-workspace_name">
    <td><CopyableCode code="workspace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workspace that contains the capture source.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_capture_data"
    values={[
        { label: 'get_capture_data', value: 'get_capture_data' }
    ]}
>
<TabItem value="get_capture_data">

Retrieves video data for a specific time range.

```sql
SELECT
data,
data_type,
end_time,
next_token,
start_time
FROM aws.iotsitewise.capture_datas
WHERE workspace_name = '{{ workspace_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
