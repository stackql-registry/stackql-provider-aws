--- 
title: dataset_data_segments
hide_title: false
hide_table_of_contents: false
keywords:
  - dataset_data_segments
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

Creates, updates, deletes, gets or lists a <code>dataset_data_segments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dataset_data_segments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.dataset_data_segments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_dataset_data_segments"
    values={[
        { label: 'list_dataset_data_segments', value: 'list_dataset_data_segments' }
    ]}
>
<TabItem value="list_dataset_data_segments">

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
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>The alias of the time series. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="data_type" /></td>
    <td><code>string</code></td>
    <td>The data type of the time series. (STRING, INTEGER, DOUBLE, BOOLEAN, STRUCT, VIDEO, ANNOTATION, JSON)</td>
</tr>
<tr>
    <td><CopyableCode code="end_timestamp" /></td>
    <td><code>object</code></td>
    <td>Contains a timestamp with optional nanosecond granularity.</td>
</tr>
<tr>
    <td><CopyableCode code="enrichment" /></td>
    <td><code>object</code></td>
    <td>The enrichment information for the data segment.</td>
</tr>
<tr>
    <td><CopyableCode code="source_dataset_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the source dataset that contains the data segment. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="start_timestamp" /></td>
    <td><code>object</code></td>
    <td>Contains a timestamp with optional nanosecond granularity.</td>
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
    <td><a href="#list_dataset_data_segments"><CopyableCode code="list_dataset_data_segments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-workspaceName"><code>workspaceName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-datasetVersion"><code>datasetVersion</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves a paginated list of data segments associated with a dataset. Use the nextToken parameter to retrieve additional results.</td>
</tr>
<tr>
    <td><a href="#batch_delete_dataset_data_segments"><CopyableCode code="batch_delete_dataset_data_segments" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-workspaceName"><code>workspaceName</code></a>, <a href="#parameter-deleteDataSegmentEntries"><code>deleteDataSegmentEntries</code></a></td>
    <td></td>
    <td>Deletes a batch of data segments from a session dataset. Deleting a data segment deletes the underlying time series data for the segment's time range.</td>
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
    <td>The ID of the session dataset from which to delete data segments.</td>
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
<tr id="parameter-datasetVersion">
    <td><CopyableCode code="datasetVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the dataset to list data segments for.</td>
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
    defaultValue="list_dataset_data_segments"
    values={[
        { label: 'list_dataset_data_segments', value: 'list_dataset_data_segments' }
    ]}
>
<TabItem value="list_dataset_data_segments">

Retrieves a paginated list of data segments associated with a dataset. Use the nextToken parameter to retrieve additional results.

```sql
SELECT
alias,
data_type,
end_timestamp,
enrichment,
source_dataset_id,
start_timestamp,
time_series_id
FROM aws.iotsitewise.dataset_data_segments
WHERE dataset_id = '{{ dataset_id }}' -- required
AND workspaceName = '{{ workspaceName }}' -- required
AND region = '{{ region }}' -- required
AND datasetVersion = '{{ datasetVersion }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_delete_dataset_data_segments"
    values={[
        { label: 'batch_delete_dataset_data_segments', value: 'batch_delete_dataset_data_segments' }
    ]}
>
<TabItem value="batch_delete_dataset_data_segments">

Deletes a batch of data segments from a session dataset. Deleting a data segment deletes the underlying time series data for the segment's time range.

```sql
EXEC aws.iotsitewise.dataset_data_segments.batch_delete_dataset_data_segments 
@dataset_id='{{ dataset_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"workspaceName": "{{ workspaceName }}", 
"deleteDataSegmentEntries": "{{ deleteDataSegmentEntries }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
