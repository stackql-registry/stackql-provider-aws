--- 
title: export_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - export_tasks
  - neptune_graph
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

Creates, updates, deletes, gets or lists an <code>export_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="export_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.neptune_graph.export_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_export_task"
    values={[
        { label: 'get_export_task', value: 'get_export_task' },
        { label: 'list_export_tasks', value: 'list_export_tasks' }
    ]}
>
<TabItem value="get_export_task">

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
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>The Amazon S3 URI of the export task where data will be exported.</td>
</tr>
<tr>
    <td><CopyableCode code="exportFilter" /></td>
    <td><code>object</code></td>
    <td>The export filter of the export task.</td>
</tr>
<tr>
    <td><CopyableCode code="exportTaskDetails" /></td>
    <td><code>object</code></td>
    <td>The details of the export task.</td>
</tr>
<tr>
    <td><CopyableCode code="format_" /></td>
    <td><code>string</code></td>
    <td>The format of the export task. (PARQUET, CSV)</td>
</tr>
<tr>
    <td><CopyableCode code="graphId" /></td>
    <td><code>string</code></td>
    <td>The source graph identifier of the export task. (pattern: &lt;code&gt;g-&#91;a-z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyIdentifier" /></td>
    <td><code>string</code></td>
    <td>The KMS key identifier of the export task. (pattern: &lt;code&gt;arn:aws(|-cn|-us-gov):kms:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="parquetType" /></td>
    <td><code>string</code></td>
    <td>The parquet type of the export task. (COLUMNAR)</td>
</tr>
<tr>
    <td><CopyableCode code="roleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role that will allow data to be exported to the destination. (pattern: &lt;code&gt;arn:aws&#91;^:&#93;*:iam::\d&#123;12&#125;:(role|role/service-role)(/&#91;\w+=,.@-&#93;+)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the export task. (INITIALIZING, EXPORTING, SUCCEEDED, FAILED, CANCELLING, CANCELLED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>The reason that the export task has this status value.</td>
</tr>
<tr>
    <td><CopyableCode code="taskId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the export task. (pattern: &lt;code&gt;t-&#91;a-z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_export_tasks">

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
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>The Amazon S3 URI of the export task where data will be exported to.</td>
</tr>
<tr>
    <td><CopyableCode code="format_" /></td>
    <td><code>string</code></td>
    <td>The format of the export task. (PARQUET, CSV)</td>
</tr>
<tr>
    <td><CopyableCode code="graphId" /></td>
    <td><code>string</code></td>
    <td>The source graph identifier of the export task. (pattern: &lt;code&gt;g-&#91;a-z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyIdentifier" /></td>
    <td><code>string</code></td>
    <td>The KMS key identifier of the export task. (pattern: &lt;code&gt;arn:aws(|-cn|-us-gov):kms:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="parquetType" /></td>
    <td><code>string</code></td>
    <td>The parquet type of the export task. (COLUMNAR)</td>
</tr>
<tr>
    <td><CopyableCode code="roleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role that will allow the data to be exported to the destination. (pattern: &lt;code&gt;arn:aws&#91;^:&#93;*:iam::\d&#123;12&#125;:(role|role/service-role)(/&#91;\w+=,.@-&#93;+)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the export task. (INITIALIZING, EXPORTING, SUCCEEDED, FAILED, CANCELLING, CANCELLED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>The reason that the export task has this status value.</td>
</tr>
<tr>
    <td><CopyableCode code="taskId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the export task. (pattern: &lt;code&gt;t-&#91;a-z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_export_task"><CopyableCode code="get_export_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-task_identifier"><code>task_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a specified export task.</td>
</tr>
<tr>
    <td><a href="#list_export_tasks"><CopyableCode code="list_export_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-graphIdentifier"><code>graphIdentifier</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a list of export tasks.</td>
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
<tr id="parameter-task_identifier">
    <td><CopyableCode code="task_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the export task.</td>
</tr>
<tr id="parameter-graphIdentifier">
    <td><CopyableCode code="graphIdentifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Neptune Analytics graph.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of export tasks to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Pagination token used to paginate input.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_export_task"
    values={[
        { label: 'get_export_task', value: 'get_export_task' },
        { label: 'list_export_tasks', value: 'list_export_tasks' }
    ]}
>
<TabItem value="get_export_task">

Retrieves a specified export task.

```sql
SELECT
destination,
exportFilter,
exportTaskDetails,
format_,
graphId,
kmsKeyIdentifier,
parquetType,
roleArn,
status,
statusReason,
taskId
FROM aws.neptune_graph.export_tasks
WHERE task_identifier = '{{ task_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_export_tasks">

Retrieves a list of export tasks.

```sql
SELECT
destination,
format_,
graphId,
kmsKeyIdentifier,
parquetType,
roleArn,
status,
statusReason,
taskId
FROM aws.neptune_graph.export_tasks
WHERE region = '{{ region }}' -- required
AND graphIdentifier = '{{ graphIdentifier }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
