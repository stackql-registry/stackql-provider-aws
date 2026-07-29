--- 
title: metrics_exports
hide_title: false
hide_table_of_contents: false
keywords:
  - metrics_exports
  - resiliencehub
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

Creates, updates, deletes, gets or lists a <code>metrics_exports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="metrics_exports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehub.metrics_exports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_metrics_export"
    values={[
        { label: 'describe_metrics_export', value: 'describe_metrics_export' }
    ]}
>
<TabItem value="describe_metrics_export">

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
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>Explains the error that occurred while exporting the metrics.</td>
</tr>
<tr>
    <td><CopyableCode code="export_location" /></td>
    <td><code>object</code></td>
    <td>Specifies the name of the Amazon S3 bucket where the exported metrics is stored.</td>
</tr>
<tr>
    <td><CopyableCode code="metrics_export_id" /></td>
    <td><code>string</code></td>
    <td>Identifier for the metrics export task.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Indicates the status of the metrics export task. (Pending, InProgress, Failed, Success)</td>
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
    <td><a href="#describe_metrics_export"><CopyableCode code="describe_metrics_export" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the metrics of the application configuration being exported.</td>
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
    defaultValue="describe_metrics_export"
    values={[
        { label: 'describe_metrics_export', value: 'describe_metrics_export' }
    ]}
>
<TabItem value="describe_metrics_export">

Describes the metrics of the application configuration being exported.

```sql
SELECT
error_message,
export_location,
metrics_export_id,
status
FROM aws.resiliencehub.metrics_exports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
