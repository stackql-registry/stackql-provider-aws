--- 
title: import_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - import_tasks
  - discovery
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

Creates, updates, deletes, gets or lists an <code>import_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="import_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.discovery.import_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_import_tasks"
    values={[
        { label: 'describe_import_tasks', value: 'describe_import_tasks' }
    ]}
>
<TabItem value="describe_import_tasks">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A descriptive name for an import task. You can use this name to filter future requests related to this import task, such as identifying applications and servers that were included in this import task. We recommend that you use a meaningful name for each import task. (pattern: &lt;code&gt;&#91;\s\S&#93;*\S&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="application_import_failure" /></td>
    <td><code>integer</code></td>
    <td>The total number of application records in the import file that failed to be imported.</td>
</tr>
<tr>
    <td><CopyableCode code="application_import_success" /></td>
    <td><code>integer</code></td>
    <td>The total number of application records in the import file that were successfully imported.</td>
</tr>
<tr>
    <td><CopyableCode code="client_request_token" /></td>
    <td><code>string</code></td>
    <td>A unique token used to prevent the same import request from occurring more than once. If you didn't provide a token, a token was automatically generated when the import task request was sent.</td>
</tr>
<tr>
    <td><CopyableCode code="errors_and_failed_entries_zip" /></td>
    <td><code>string</code></td>
    <td>A link to a compressed archive folder (in the ZIP format) that contains an error log and a file of failed records. You can use these two files to quickly identify records that failed, why they failed, and correct those records. Afterward, you can upload the corrected file to your Amazon S3 bucket and create another import task request. This field also includes authorization information so you can confirm the authenticity of the compressed archive before you download it. If some records failed to be imported we recommend that you correct the records in the failed entries file and then imports that failed entries file. This prevents you from having to correct and update the larger original file and attempt importing it again.</td>
</tr>
<tr>
    <td><CopyableCode code="file_classification" /></td>
    <td><code>string</code></td>
    <td>The type of file detected by the import task. (MODELIZEIT_EXPORT, RVTOOLS_EXPORT, VMWARE_NSX_EXPORT, IMPORT_TEMPLATE)</td>
</tr>
<tr>
    <td><CopyableCode code="import_completion_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the import task request finished, presented in the Unix time stamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="import_deleted_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the import task request was deleted, presented in the Unix time stamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="import_request_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the import task request was made, presented in the Unix time stamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="import_task_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID for a specific import task. These IDs aren't globally unique, but they are unique within an Amazon Web Services account. (pattern: &lt;code&gt;^import-task-&#91;a-fA-F0-9&#93;&#123;32&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="import_url" /></td>
    <td><code>string</code></td>
    <td>The URL for your import file that you've uploaded to Amazon S3. (pattern: &lt;code&gt;\S+:​//\S+/&#91;\s\S&#93;*\S&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="server_import_failure" /></td>
    <td><code>integer</code></td>
    <td>The total number of server records in the import file that failed to be imported.</td>
</tr>
<tr>
    <td><CopyableCode code="server_import_success" /></td>
    <td><code>integer</code></td>
    <td>The total number of server records in the import file that were successfully imported.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the import task. An import can have the status of IMPORT_COMPLETE and still have some records fail to import from the overall request. More information can be found in the downloadable archive defined in the errorsAndFailedEntriesZip field, or in the Migration Hub management console. (IMPORT_IN_PROGRESS, IMPORT_COMPLETE, IMPORT_COMPLETE_WITH_ERRORS, IMPORT_FAILED, IMPORT_FAILED_SERVER_LIMIT_EXCEEDED, IMPORT_FAILED_RECORD_LIMIT_EXCEEDED, IMPORT_FAILED_UNSUPPORTED_FILE_TYPE, DELETE_IN_PROGRESS, DELETE_COMPLETE, DELETE_FAILED, DELETE_FAILED_LIMIT_EXCEEDED, INTERNAL_ERROR)</td>
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
    <td><a href="#describe_import_tasks"><CopyableCode code="describe_import_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an array of import tasks for your account, including status information, times, IDs, the Amazon S3 Object URL for the import file, and more.</td>
</tr>
<tr>
    <td><a href="#batch_delete_import_data"><CopyableCode code="batch_delete_import_data" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-importTaskIds"><code>importTaskIds</code></a></td>
    <td></td>
    <td>Deletes one or more import tasks, each identified by their import ID. Each import task has a number of records that can identify servers or applications. Amazon Web Services Application Discovery Service has built-in matching logic that will identify when discovered servers match existing entries that you've previously discovered, the information for the already-existing discovered server is updated. When you delete an import task that contains records that were used to match, the information in those matched records that comes from the deleted records will also be deleted.</td>
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
    defaultValue="describe_import_tasks"
    values={[
        { label: 'describe_import_tasks', value: 'describe_import_tasks' }
    ]}
>
<TabItem value="describe_import_tasks">

Returns an array of import tasks for your account, including status information, times, IDs, the Amazon S3 Object URL for the import file, and more.

```sql
SELECT
name,
application_import_failure,
application_import_success,
client_request_token,
errors_and_failed_entries_zip,
file_classification,
import_completion_time,
import_deleted_time,
import_request_time,
import_task_id,
import_url,
server_import_failure,
server_import_success,
status
FROM aws.discovery.import_tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_delete_import_data"
    values={[
        { label: 'batch_delete_import_data', value: 'batch_delete_import_data' }
    ]}
>
<TabItem value="batch_delete_import_data">

Deletes one or more import tasks, each identified by their import ID. Each import task has a number of records that can identify servers or applications. Amazon Web Services Application Discovery Service has built-in matching logic that will identify when discovered servers match existing entries that you've previously discovered, the information for the already-existing discovered server is updated. When you delete an import task that contains records that were used to match, the information in those matched records that comes from the deleted records will also be deleted.

```sql
EXEC aws.discovery.import_tasks.batch_delete_import_data 
@region='{{ region }}' --required 
@@json=
'{
"importTaskIds": "{{ importTaskIds }}", 
"deleteHistory": {{ deleteHistory }}
}'
;
```
</TabItem>
</Tabs>
