--- 
title: db_log_files
hide_title: false
hide_table_of_contents: false
keywords:
  - db_log_files
  - rds
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

Creates, updates, deletes, gets or lists a <code>db_log_files</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="db_log_files" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.rds.db_log_files" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_db_log_files"
    values={[
        { label: 'describe_db_log_files', value: 'describe_db_log_files' }
    ]}
>
<TabItem value="describe_db_log_files">

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
    <td><CopyableCode code="last_written" /></td>
    <td><code>integer</code></td>
    <td>A POSIX timestamp when the last log entry was written.</td>
</tr>
<tr>
    <td><CopyableCode code="log_file_name" /></td>
    <td><code>string</code></td>
    <td>The name of the log file for the specified DB instance.</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>The size, in bytes, of the log file for the specified DB instance.</td>
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
    <td><a href="#describe_db_log_files"><CopyableCode code="describe_db_log_files" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-DBInstanceIdentifier"><code>DBInstanceIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-FilenameContains"><code>FilenameContains</code></a>, <a href="#parameter-FileLastWritten"><code>FileLastWritten</code></a>, <a href="#parameter-FileSize"><code>FileSize</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Returns a list of DB log files for the DB instance. This command doesn't apply to RDS Custom.</td>
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
<tr id="parameter-DBInstanceIdentifier">
    <td><CopyableCode code="DBInstanceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The customer-assigned name of the DB instance that contains the log files you want to list. Constraints: Must match the identifier of an existing DBInstance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-FileLastWritten">
    <td><CopyableCode code="FileLastWritten" /></td>
    <td><code>integer (int64)</code></td>
    <td>Filters the available log files for files written since the specified date, in POSIX timestamp format with milliseconds.</td>
</tr>
<tr id="parameter-FileSize">
    <td><CopyableCode code="FileSize" /></td>
    <td><code>integer (int64)</code></td>
    <td>Filters the available log files for files larger than the specified size.</td>
</tr>
<tr id="parameter-FilenameContains">
    <td><CopyableCode code="FilenameContains" /></td>
    <td><code>string</code></td>
    <td>Filters the available log files for log file names that contain the specified string.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>This parameter isn't currently supported.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>The pagination token provided in the previous request. If this parameter is specified the response includes only records beyond the marker, up to MaxRecords.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_db_log_files"
    values={[
        { label: 'describe_db_log_files', value: 'describe_db_log_files' }
    ]}
>
<TabItem value="describe_db_log_files">

Returns a list of DB log files for the DB instance. This command doesn't apply to RDS Custom.

```sql
SELECT
last_written,
log_file_name,
size
FROM aws.rds.db_log_files
WHERE DBInstanceIdentifier = '{{ DBInstanceIdentifier }}' -- required
AND region = '{{ region }}' -- required
AND FilenameContains = '{{ FilenameContains }}'
AND FileLastWritten = '{{ FileLastWritten }}'
AND FileSize = '{{ FileSize }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>
