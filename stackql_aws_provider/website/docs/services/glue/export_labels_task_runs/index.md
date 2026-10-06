--- 
title: export_labels_task_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - export_labels_task_runs
  - glue
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

Creates, updates, deletes, gets or lists an <code>export_labels_task_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="export_labels_task_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.export_labels_task_runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#start_export_labels_task_run"><CopyableCode code="start_export_labels_task_run" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TransformId"><code>TransformId</code></a>, <a href="#parameter-OutputS3Path"><code>OutputS3Path</code></a></td>
    <td></td>
    <td>Begins an asynchronous task to export all labeled data for a particular transform. This task is the only label-related API call that is not part of the typical active learning workflow. You typically use StartExportLabelsTaskRun when you want to work with all of your existing labels at the same time, such as when you want to remove or change labels that were previously submitted as truth. This API operation accepts the TransformId whose labels you want to export and an Amazon Simple Storage Service (Amazon S3) path to export the labels to. The operation returns a TaskRunId. You can check on the status of your task run by calling the GetMLTaskRun API.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="start_export_labels_task_run"
    values={[
        { label: 'start_export_labels_task_run', value: 'start_export_labels_task_run' }
    ]}
>
<TabItem value="start_export_labels_task_run">

Begins an asynchronous task to export all labeled data for a particular transform. This task is the only label-related API call that is not part of the typical active learning workflow. You typically use StartExportLabelsTaskRun when you want to work with all of your existing labels at the same time, such as when you want to remove or change labels that were previously submitted as truth. This API operation accepts the TransformId whose labels you want to export and an Amazon Simple Storage Service (Amazon S3) path to export the labels to. The operation returns a TaskRunId. You can check on the status of your task run by calling the GetMLTaskRun API.

```sql
EXEC aws.glue.export_labels_task_runs.start_export_labels_task_run 
@region='{{ region }}' --required 
@@json=
'{
"TransformId": "{{ TransformId }}", 
"OutputS3Path": "{{ OutputS3Path }}"
}'
;
```
</TabItem>
</Tabs>
