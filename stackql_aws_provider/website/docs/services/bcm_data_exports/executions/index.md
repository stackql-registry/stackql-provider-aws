--- 
title: executions
hide_title: false
hide_table_of_contents: false
keywords:
  - executions
  - bcm_data_exports
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

Creates, updates, deletes, gets or lists an <code>executions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="executions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bcm_data_exports.executions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_execution"
    values={[
        { label: 'get_execution', value: 'get_execution' },
        { label: 'list_executions', value: 'list_executions' }
    ]}
>
<TabItem value="get_execution">

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
    <td><CopyableCode code="execution_id" /></td>
    <td><code>string</code></td>
    <td>The ID for this specific execution. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="execution_status" /></td>
    <td><code>object</code></td>
    <td>The status of this specific execution.</td>
</tr>
<tr>
    <td><CopyableCode code="export" /></td>
    <td><code>object</code></td>
    <td>The export data for this specific execution. This export data is a snapshot from when the execution was generated. The data could be different from the current export data if the export was updated since the execution was generated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_executions">

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
    <td><CopyableCode code="execution_id" /></td>
    <td><code>string</code></td>
    <td>The ID for this specific execution. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="execution_status" /></td>
    <td><code>object</code></td>
    <td>The status of this specific execution.</td>
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
    <td><a href="#get_execution"><CopyableCode code="get_execution" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Exports data based on the source data update.</td>
</tr>
<tr>
    <td><a href="#list_executions"><CopyableCode code="list_executions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the historical executions for the export.</td>
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
    defaultValue="get_execution"
    values={[
        { label: 'get_execution', value: 'get_execution' },
        { label: 'list_executions', value: 'list_executions' }
    ]}
>
<TabItem value="get_execution">

Exports data based on the source data update.

```sql
SELECT
execution_id,
execution_status,
export
FROM aws.bcm_data_exports.executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_executions">

Lists the historical executions for the export.

```sql
SELECT
execution_id,
execution_status
FROM aws.bcm_data_exports.executions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
