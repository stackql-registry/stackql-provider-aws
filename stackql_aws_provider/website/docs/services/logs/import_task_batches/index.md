--- 
title: import_task_batches
hide_title: false
hide_table_of_contents: false
keywords:
  - import_task_batches
  - logs
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

Creates, updates, deletes, gets or lists an <code>import_task_batches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="import_task_batches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.import_task_batches" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_import_task_batches"
    values={[
        { label: 'describe_import_task_batches', value: 'describe_import_task_batches' }
    ]}
>
<TabItem value="describe_import_task_batches">

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
    <td><CopyableCode code="import_batches" /></td>
    <td><code>array</code></td>
    <td>The list of import batches that match the request filters.</td>
</tr>
<tr>
    <td><CopyableCode code="import_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the import task. (pattern: &lt;code&gt;&#91;\-a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="import_source_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the source being imported from.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. The token expires after 24 hours.</td>
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
    <td><a href="#describe_import_task_batches"><CopyableCode code="describe_import_task_batches" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets detailed information about the individual batches within an import task, including their status and any error messages. For CloudTrail Event Data Store sources, a batch refers to a subset of stored events grouped by their eventTime.</td>
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
    defaultValue="describe_import_task_batches"
    values={[
        { label: 'describe_import_task_batches', value: 'describe_import_task_batches' }
    ]}
>
<TabItem value="describe_import_task_batches">

Gets detailed information about the individual batches within an import task, including their status and any error messages. For CloudTrail Event Data Store sources, a batch refers to a subset of stored events grouped by their eventTime.

```sql
SELECT
import_batches,
import_id,
import_source_arn,
next_token
FROM aws.logs.import_task_batches
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
