--- 
title: read_set_upload_parts
hide_title: false
hide_table_of_contents: false
keywords:
  - read_set_upload_parts
  - omics
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

Creates, updates, deletes, gets or lists a <code>read_set_upload_parts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="read_set_upload_parts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.omics.read_set_upload_parts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_read_set_upload_parts"
    values={[
        { label: 'list_read_set_upload_parts', value: 'list_read_set_upload_parts' }
    ]}
>
<TabItem value="list_read_set_upload_parts">

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
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>A unique identifier used to confirm that parts are being added to the correct upload.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time stamp for when a direct upload was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time stamp for the most recent update to an uploaded part.</td>
</tr>
<tr>
    <td><CopyableCode code="part_number" /></td>
    <td><code>integer</code></td>
    <td>The number identifying the part in an upload.</td>
</tr>
<tr>
    <td><CopyableCode code="part_size" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the the part in an upload.</td>
</tr>
<tr>
    <td><CopyableCode code="part_source" /></td>
    <td><code>string</code></td>
    <td>The origin of the part being direct uploaded. (SOURCE1, SOURCE2)</td>
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
    <td><a href="#list_read_set_upload_parts"><CopyableCode code="list_read_set_upload_parts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-sequence_store_id"><code>sequence_store_id</code></a>, <a href="#parameter-upload_id"><code>upload_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all parts in a multipart read set upload for a sequence store and returns the metadata in a JSON formatted output.</td>
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
<tr id="parameter-sequence_store_id">
    <td><CopyableCode code="sequence_store_id" /></td>
    <td><code>string</code></td>
    <td>The Sequence Store ID used for the multipart uploads.</td>
</tr>
<tr id="parameter-upload_id">
    <td><CopyableCode code="upload_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the initiated multipart upload.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of read set upload parts returned in a page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Next token returned in the response of a previous ListReadSetUploadPartsRequest call. Used to get the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_read_set_upload_parts"
    values={[
        { label: 'list_read_set_upload_parts', value: 'list_read_set_upload_parts' }
    ]}
>
<TabItem value="list_read_set_upload_parts">

Lists all parts in a multipart read set upload for a sequence store and returns the metadata in a JSON formatted output.

```sql
SELECT
checksum,
creation_time,
last_updated_time,
part_number,
part_size,
part_source
FROM aws.omics.read_set_upload_parts
WHERE sequence_store_id = '{{ sequence_store_id }}' -- required
AND upload_id = '{{ upload_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
