--- 
title: imports
hide_title: false
hide_table_of_contents: false
keywords:
  - imports
  - cloudtrail
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

Creates, updates, deletes, gets or lists an <code>imports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="imports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudtrail.imports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_import"
    values={[
        { label: 'get_import', value: 'get_import' },
        { label: 'list_imports', value: 'list_imports' }
    ]}
>
<TabItem value="get_import">

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
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the import's creation.</td>
</tr>
<tr>
    <td><CopyableCode code="destinations" /></td>
    <td><code>array</code></td>
    <td>The ARN of the destination event data store.</td>
</tr>
<tr>
    <td><CopyableCode code="end_event_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Used with StartEventTime to bound a StartImport request, and limit imported trail events to only those events logged within a specified time period.</td>
</tr>
<tr>
    <td><CopyableCode code="import_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the import. (pattern: &lt;code&gt;^&#91;a-f0-9\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="import_source" /></td>
    <td><code>object</code></td>
    <td>The source S3 bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="import_statistics" /></td>
    <td><code>object</code></td>
    <td>Provides statistics for the import. CloudTrail does not update import statistics in real-time. Returned values for parameters such as EventsCompleted may be lower than the actual value, because CloudTrail updates statistics incrementally over the course of the import.</td>
</tr>
<tr>
    <td><CopyableCode code="import_status" /></td>
    <td><code>string</code></td>
    <td>The status of the import. (INITIALIZING, IN_PROGRESS, FAILED, STOPPED, COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="start_event_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Used with EndEventTime to bound a StartImport request, and limit imported trail events to only those events logged within a specified time period.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the import was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_imports">

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
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the import's creation.</td>
</tr>
<tr>
    <td><CopyableCode code="destinations" /></td>
    <td><code>array</code></td>
    <td>The ARN of the destination event data store.</td>
</tr>
<tr>
    <td><CopyableCode code="import_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the import. (pattern: &lt;code&gt;^&#91;a-f0-9\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="import_status" /></td>
    <td><code>string</code></td>
    <td>The status of the import. (INITIALIZING, IN_PROGRESS, FAILED, STOPPED, COMPLETED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the import's last update.</td>
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
    <td><a href="#get_import"><CopyableCode code="get_import" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specific import.</td>
</tr>
<tr>
    <td><a href="#list_imports"><CopyableCode code="list_imports" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information on all imports, or a select set of imports by ImportStatus or Destination.</td>
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
    defaultValue="get_import"
    values={[
        { label: 'get_import', value: 'get_import' },
        { label: 'list_imports', value: 'list_imports' }
    ]}
>
<TabItem value="get_import">

Returns information about a specific import.

```sql
SELECT
created_timestamp,
destinations,
end_event_time,
import_id,
import_source,
import_statistics,
import_status,
start_event_time,
updated_timestamp
FROM aws.cloudtrail.imports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_imports">

Returns information on all imports, or a select set of imports by ImportStatus or Destination.

```sql
SELECT
created_timestamp,
destinations,
import_id,
import_status,
updated_timestamp
FROM aws.cloudtrail.imports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
