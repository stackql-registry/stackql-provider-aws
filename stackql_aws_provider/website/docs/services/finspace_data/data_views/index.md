--- 
title: data_views
hide_title: false
hide_table_of_contents: false
keywords:
  - data_views
  - finspace_data
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

Creates, updates, deletes, gets or lists a <code>data_views</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_views" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.finspace_data.data_views" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_view"
    values={[
        { label: 'get_data_view', value: 'get_data_view' },
        { label: 'list_data_views', value: 'list_data_views' }
    ]}
>
<TabItem value="get_data_view">

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
    <td><CopyableCode code="as_of_timestamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>Milliseconds since UTC epoch</td>
</tr>
<tr>
    <td><CopyableCode code="auto_update" /></td>
    <td><code>boolean</code></td>
    <td>Common Boolean data type</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>Milliseconds since UTC epoch</td>
</tr>
<tr>
    <td><CopyableCode code="data_view_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN identifier of the Dataview.</td>
</tr>
<tr>
    <td><CopyableCode code="data_view_id" /></td>
    <td><code>string</code></td>
    <td>DataView ID</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_id" /></td>
    <td><code>string</code></td>
    <td>ID for a given Dataset</td>
</tr>
<tr>
    <td><CopyableCode code="destination_type_params" /></td>
    <td><code>object</code></td>
    <td>Structure for the Dataview destination type parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="error_info" /></td>
    <td><code>object</code></td>
    <td>Information about an error that occurred for the Dataview.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>Milliseconds since UTC epoch</td>
</tr>
<tr>
    <td><CopyableCode code="partition_columns" /></td>
    <td><code>array</code></td>
    <td>DataView Partition Column List</td>
</tr>
<tr>
    <td><CopyableCode code="sort_columns" /></td>
    <td><code>array</code></td>
    <td>DataView Sort Column List</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a Dataview creation. RUNNING – Dataview creation is running. STARTING – Dataview creation is starting. FAILED – Dataview creation has failed. CANCELLED – Dataview creation has been cancelled. TIMEOUT – Dataview creation has timed out. SUCCESS – Dataview creation has succeeded. PENDING – Dataview creation is pending. FAILED_CLEANUP_FAILED – Dataview creation failed and resource cleanup failed. (RUNNING, STARTING, FAILED, CANCELLED, TIMEOUT, SUCCESS, PENDING, FAILED_CLEANUP_FAILED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_views">

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
    <td><CopyableCode code="as_of_timestamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>Milliseconds since UTC epoch</td>
</tr>
<tr>
    <td><CopyableCode code="auto_update" /></td>
    <td><code>boolean</code></td>
    <td>Common Boolean data type</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>Milliseconds since UTC epoch</td>
</tr>
<tr>
    <td><CopyableCode code="data_view_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN identifier of the Dataview.</td>
</tr>
<tr>
    <td><CopyableCode code="data_view_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the Dataview.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_id" /></td>
    <td><code>string</code></td>
    <td>ID for a given Dataset</td>
</tr>
<tr>
    <td><CopyableCode code="destination_type_properties" /></td>
    <td><code>object</code></td>
    <td>Structure for the Dataview destination type parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="error_info" /></td>
    <td><code>object</code></td>
    <td>The structure with error messages.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>Milliseconds since UTC epoch</td>
</tr>
<tr>
    <td><CopyableCode code="partition_columns" /></td>
    <td><code>array</code></td>
    <td>DataView Partition Column List</td>
</tr>
<tr>
    <td><CopyableCode code="sort_columns" /></td>
    <td><code>array</code></td>
    <td>DataView Sort Column List</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a Dataview creation. RUNNING – Dataview creation is running. STARTING – Dataview creation is starting. FAILED – Dataview creation has failed. CANCELLED – Dataview creation has been cancelled. TIMEOUT – Dataview creation has timed out. SUCCESS – Dataview creation has succeeded. PENDING – Dataview creation is pending. FAILED_CLEANUP_FAILED – Dataview creation failed and resource cleanup failed. (RUNNING, STARTING, FAILED, CANCELLED, TIMEOUT, SUCCESS, PENDING, FAILED_CLEANUP_FAILED)</td>
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
    <td><a href="#get_data_view"><CopyableCode code="get_data_view" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-dataview_id"><code>dataview_id</code></a>, <a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a Dataview.</td>
</tr>
<tr>
    <td><a href="#list_data_views"><CopyableCode code="list_data_views" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all available Dataviews for a Dataset.</td>
</tr>
<tr>
    <td><a href="#create_data_view"><CopyableCode code="create_data_view" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-destinationTypeParams"><code>destinationTypeParams</code></a></td>
    <td></td>
    <td>Creates a Dataview for a Dataset.</td>
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
    <td>The unique Dataset identifier that is used to create a Dataview.</td>
</tr>
<tr id="parameter-dataview_id">
    <td><CopyableCode code="dataview_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the Dataview.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates where a results page should begin.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_data_view"
    values={[
        { label: 'get_data_view', value: 'get_data_view' },
        { label: 'list_data_views', value: 'list_data_views' }
    ]}
>
<TabItem value="get_data_view">

Gets information about a Dataview.

```sql
SELECT
as_of_timestamp,
auto_update,
create_time,
data_view_arn,
data_view_id,
dataset_id,
destination_type_params,
error_info,
last_modified_time,
partition_columns,
sort_columns,
status
FROM aws.finspace_data.data_views
WHERE dataview_id = '{{ dataview_id }}' -- required
AND dataset_id = '{{ dataset_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_views">

Lists all available Dataviews for a Dataset.

```sql
SELECT
as_of_timestamp,
auto_update,
create_time,
data_view_arn,
data_view_id,
dataset_id,
destination_type_properties,
error_info,
last_modified_time,
partition_columns,
sort_columns,
status
FROM aws.finspace_data.data_views
WHERE dataset_id = '{{ dataset_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_view"
    values={[
        { label: 'create_data_view', value: 'create_data_view' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_view">

Creates a Dataview for a Dataset.

```sql
INSERT INTO aws.finspace_data.data_views (
clientToken,
autoUpdate,
sortColumns,
partitionColumns,
asOfTimestamp,
destinationTypeParams,
dataset_id,
region
)
SELECT 
'{{ clientToken }}',
{{ autoUpdate }},
'{{ sortColumns }}',
'{{ partitionColumns }}',
{{ asOfTimestamp }},
'{{ destinationTypeParams }}' /* required */,
'{{ dataset_id }}',
'{{ region }}'
RETURNING
data_view_id,
dataset_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_views
  props:
    - name: dataset_id
      value: "{{ dataset_id }}"
      description: Required parameter for the data_views resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_views resource.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Idempotence Token for API operations
    - name: autoUpdate
      value: {{ autoUpdate }}
      description: |
        Common Boolean data type
    - name: sortColumns
      value:
        - "{{ sortColumns }}"
      description: |
        DataView Sort Column List
    - name: partitionColumns
      value:
        - "{{ partitionColumns }}"
      description: |
        DataView Partition Column List
    - name: asOfTimestamp
      value: {{ asOfTimestamp }}
      description: |
        Milliseconds since UTC epoch
    - name: destinationTypeParams
      description: |
        Structure for the Dataview destination type parameters.
      value:
        destinationType: "{{ destinationType }}"
        s3DestinationExportFileFormat: "{{ s3DestinationExportFileFormat }}"
        s3DestinationExportFileFormatOptions: "{{ s3DestinationExportFileFormatOptions }}"
`}</CodeBlock>

</TabItem>
</Tabs>
