--- 
title: dataset_data_segment_relationships
hide_title: false
hide_table_of_contents: false
keywords:
  - dataset_data_segment_relationships
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

Creates, updates, deletes, gets or lists a <code>dataset_data_segment_relationships</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dataset_data_segment_relationships" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.dataset_data_segment_relationships" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_dataset_data_segment_relationships"
    values={[
        { label: 'list_dataset_data_segment_relationships', value: 'list_dataset_data_segment_relationships' }
    ]}
>
<TabItem value="list_dataset_data_segment_relationships">

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
    <td><CopyableCode code="end_timestamp" /></td>
    <td><code>object</code></td>
    <td>Contains a timestamp with optional nanosecond granularity.</td>
</tr>
<tr>
    <td><CopyableCode code="source_dataset_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the source session dataset that contains the data segment. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="start_timestamp" /></td>
    <td><code>object</code></td>
    <td>Contains a timestamp with optional nanosecond granularity.</td>
</tr>
<tr>
    <td><CopyableCode code="target_dataset_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the curated dataset that references the data segment. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="time_series_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the time series.</td>
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
    <td><a href="#list_dataset_data_segment_relationships"><CopyableCode code="list_dataset_data_segment_relationships" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-workspaceName"><code>workspaceName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves a paginated list of data segment relationships for a session dataset. Use this operation to find the curated datasets that reference data segments of the specified session dataset. Use the nextToken parameter to retrieve additional results.</td>
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
<tr id="parameter-dataset_id">
    <td><CopyableCode code="dataset_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the session dataset to list data segment relationships for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-workspaceName">
    <td><CopyableCode code="workspaceName" /></td>
    <td><code>string</code></td>
    <td>The name of the workspace that contains the dataset.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for each paginated request. Default: 50.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to be used for the next set of paginated results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_dataset_data_segment_relationships"
    values={[
        { label: 'list_dataset_data_segment_relationships', value: 'list_dataset_data_segment_relationships' }
    ]}
>
<TabItem value="list_dataset_data_segment_relationships">

Retrieves a paginated list of data segment relationships for a session dataset. Use this operation to find the curated datasets that reference data segments of the specified session dataset. Use the nextToken parameter to retrieve additional results.

```sql
SELECT
end_timestamp,
source_dataset_id,
start_timestamp,
target_dataset_id,
time_series_id
FROM aws.iotsitewise.dataset_data_segment_relationships
WHERE dataset_id = '{{ dataset_id }}' -- required
AND workspaceName = '{{ workspaceName }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
