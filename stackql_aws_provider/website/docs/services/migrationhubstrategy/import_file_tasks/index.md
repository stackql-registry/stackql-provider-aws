--- 
title: import_file_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - import_file_tasks
  - migrationhubstrategy
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

Creates, updates, deletes, gets or lists an <code>import_file_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="import_file_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.migrationhubstrategy.import_file_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_import_file_task"
    values={[
        { label: 'get_import_file_task', value: 'get_import_file_task' },
        { label: 'list_import_file_task', value: 'list_import_file_task' }
    ]}
>
<TabItem value="get_import_file_task">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The import file task id returned in the response of StartImportFileTask. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="completion_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the import task completed.</td>
</tr>
<tr>
    <td><CopyableCode code="import_name" /></td>
    <td><code>string</code></td>
    <td>The name of the import task given in StartImportFileTask. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="input_s3_bucket" /></td>
    <td><code>string</code></td>
    <td>The S3 bucket where import file is located. (pattern: &lt;code&gt;&#91;0-9a-z&#93;+&#91;0-9a-z\.\-&#93;*&#91;0-9a-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="input_s3_key" /></td>
    <td><code>string</code></td>
    <td>The Amazon S3 key name of the import file. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_records_failed" /></td>
    <td><code>integer</code></td>
    <td>The number of records that failed to be imported.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_records_success" /></td>
    <td><code>integer</code></td>
    <td>The number of records successfully imported.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Start time of the import task.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of import file task. (ImportInProgress, ImportFailed, ImportPartialSuccess, ImportSuccess, DeleteInProgress, DeleteFailed, DeletePartialSuccess, DeleteSuccess)</td>
</tr>
<tr>
    <td><CopyableCode code="status_report_s3_bucket" /></td>
    <td><code>string</code></td>
    <td>The S3 bucket name for status report of import task. (pattern: &lt;code&gt;&#91;0-9a-z&#93;+&#91;0-9a-z\.\-&#93;*&#91;0-9a-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status_report_s3_key" /></td>
    <td><code>string</code></td>
    <td>The Amazon S3 key name for status report of import task. The report contains details about whether each record imported successfully or why it did not. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_import_file_task">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the import file task. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="completion_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the import task completes.</td>
</tr>
<tr>
    <td><CopyableCode code="import_name" /></td>
    <td><code>string</code></td>
    <td>The name of the import task given in StartImportFileTask. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="input_s3_bucket" /></td>
    <td><code>string</code></td>
    <td>The S3 bucket where the import file is located. (pattern: &lt;code&gt;&#91;0-9a-z&#93;+&#91;0-9a-z\.\-&#93;*&#91;0-9a-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="input_s3_key" /></td>
    <td><code>string</code></td>
    <td>The Amazon S3 key name of the import file. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_records_failed" /></td>
    <td><code>integer</code></td>
    <td>The number of records that failed to be imported.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_records_success" /></td>
    <td><code>integer</code></td>
    <td>The number of records successfully imported.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Start time of the import task.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of import file task. (ImportInProgress, ImportFailed, ImportPartialSuccess, ImportSuccess, DeleteInProgress, DeleteFailed, DeletePartialSuccess, DeleteSuccess)</td>
</tr>
<tr>
    <td><CopyableCode code="status_report_s3_bucket" /></td>
    <td><code>string</code></td>
    <td>The S3 bucket name for status report of import task. (pattern: &lt;code&gt;&#91;0-9a-z&#93;+&#91;0-9a-z\.\-&#93;*&#91;0-9a-z&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status_report_s3_key" /></td>
    <td><code>string</code></td>
    <td>The Amazon S3 key name for status report of import task. The report contains details about whether each record imported successfully or why it did not. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#get_import_file_task"><CopyableCode code="get_import_file_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details about a specific import task.</td>
</tr>
<tr>
    <td><a href="#list_import_file_task"><CopyableCode code="list_import_file_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves a list of all the imports performed.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the import file task. This ID is returned in the response of StartImportFileTask.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The total number of items to return. The maximum value is 100.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token from a previous call that you use to retrieve the next set of results. For example, if a previous call to this action returned 100 items, but you set maxResults to 10. You'll receive a set of 10 results along with a token. You then use the returned token to retrieve the next set of 10.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_import_file_task"
    values={[
        { label: 'get_import_file_task', value: 'get_import_file_task' },
        { label: 'list_import_file_task', value: 'list_import_file_task' }
    ]}
>
<TabItem value="get_import_file_task">

Retrieves the details about a specific import task.

```sql
SELECT
id,
completion_time,
import_name,
input_s3_bucket,
input_s3_key,
number_of_records_failed,
number_of_records_success,
start_time,
status,
status_report_s3_bucket,
status_report_s3_key
FROM aws.migrationhubstrategy.import_file_tasks
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_import_file_task">

Retrieves a list of all the imports performed.

```sql
SELECT
id,
completion_time,
import_name,
input_s3_bucket,
input_s3_key,
number_of_records_failed,
number_of_records_success,
start_time,
status,
status_report_s3_bucket,
status_report_s3_key
FROM aws.migrationhubstrategy.import_file_tasks
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
