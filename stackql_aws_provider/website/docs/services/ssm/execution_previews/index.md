--- 
title: execution_previews
hide_title: false
hide_table_of_contents: false
keywords:
  - execution_previews
  - ssm
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

Creates, updates, deletes, gets or lists an <code>execution_previews</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="execution_previews" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.execution_previews" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_execution_preview"
    values={[
        { label: 'get_execution_preview', value: 'get_execution_preview' }
    ]}
>
<TabItem value="get_execution_preview">

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
    <td><CopyableCode code="ended_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>A UTC timestamp indicating when the execution preview operation ended.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_preview" /></td>
    <td><code>object</code></td>
    <td>Information about the changes that would be made if an execution were run.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_preview_id" /></td>
    <td><code>string</code></td>
    <td>The generated ID for the existing execution preview. (pattern: &lt;code&gt;&#91;a-fA-F0-9&#93;&#123;8&#125;-&#91;a-fA-F0-9&#93;&#123;4&#125;-&#91;a-fA-F0-9&#93;&#123;4&#125;-&#91;a-fA-F0-9&#93;&#123;4&#125;-&#91;a-fA-F0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the execution preview operation. (Pending, InProgress, Success, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>Supplemental information about the current status of the execution preview.</td>
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
    <td><a href="#get_execution_preview"><CopyableCode code="get_execution_preview" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Initiates the process of retrieving an existing preview that shows the effects that running a specified Automation runbook would have on the targeted resources.</td>
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
    defaultValue="get_execution_preview"
    values={[
        { label: 'get_execution_preview', value: 'get_execution_preview' }
    ]}
>
<TabItem value="get_execution_preview">

Initiates the process of retrieving an existing preview that shows the effects that running a specified Automation runbook would have on the targeted resources.

```sql
SELECT
ended_at,
execution_preview,
execution_preview_id,
status,
status_message
FROM aws.ssm.execution_previews
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
