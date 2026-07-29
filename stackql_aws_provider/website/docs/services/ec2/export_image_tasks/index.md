--- 
title: export_image_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - export_image_tasks
  - ec2
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

Creates, updates, deletes, gets or lists an <code>export_image_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="export_image_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.export_image_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_export_image_tasks"
    values={[
        { label: 'describe_export_image_tasks', value: 'describe_export_image_tasks' }
    ]}
>
<TabItem value="describe_export_image_tasks">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the image being exported.</td>
</tr>
<tr>
    <td><CopyableCode code="export_image_task_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the export image task.</td>
</tr>
<tr>
    <td><CopyableCode code="image_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the image.</td>
</tr>
<tr>
    <td><CopyableCode code="progress" /></td>
    <td><code>string</code></td>
    <td>The percent complete of the export image task.</td>
</tr>
<tr>
    <td><CopyableCode code="s3_export_location" /></td>
    <td><code>string</code></td>
    <td>Information about the destination Amazon S3 bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the export image task. The possible values are active, completed, deleting, and deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>The status message for the export image task.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the export image task.</td>
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
    <td><a href="#describe_export_image_tasks"><CopyableCode code="describe_export_image_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-ExportImageTaskId"><code>ExportImageTaskId</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Describes the specified export image tasks or all of your export image tasks.</td>
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
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-ExportImageTaskId">
    <td><CopyableCode code="ExportImageTaskId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the export image tasks.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>Filter tasks using the task-state filter and one of the following values: active, completed, deleting, or deleted.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_export_image_tasks"
    values={[
        { label: 'describe_export_image_tasks', value: 'describe_export_image_tasks' }
    ]}
>
<TabItem value="describe_export_image_tasks">

Describes the specified export image tasks or all of your export image tasks.

```sql
SELECT
description,
export_image_task_id,
image_id,
progress,
s3_export_location,
status,
status_message,
tags
FROM aws.ec2.export_image_tasks
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND ExportImageTaskId = '{{ ExportImageTaskId }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
