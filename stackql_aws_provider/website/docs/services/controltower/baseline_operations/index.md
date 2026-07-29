--- 
title: baseline_operations
hide_title: false
hide_table_of_contents: false
keywords:
  - baseline_operations
  - controltower
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

Creates, updates, deletes, gets or lists a <code>baseline_operations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="baseline_operations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.controltower.baseline_operations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_baseline_operation"
    values={[
        { label: 'get_baseline_operation', value: 'get_baseline_operation' }
    ]}
>
<TabItem value="get_baseline_operation">

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
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end time of the operation (if applicable), in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="operation_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the specified operation. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="operation_type" /></td>
    <td><code>string</code></td>
    <td>An enumerated type (enum) with possible values of ENABLE_BASELINE, DISABLE_BASELINE, UPDATE_ENABLED_BASELINE, or RESET_ENABLED_BASELINE. (ENABLE_BASELINE, DISABLE_BASELINE, UPDATE_ENABLED_BASELINE, RESET_ENABLED_BASELINE)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of the operation, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>An enumerated type (enum) with possible values of SUCCEEDED, FAILED, or IN_PROGRESS. (SUCCEEDED, FAILED, IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>A status message that gives more information about the operation's status, if applicable.</td>
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
    <td><a href="#get_baseline_operation"><CopyableCode code="get_baseline_operation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the details of an asynchronous baseline operation, as initiated by any of these APIs: EnableBaseline, DisableBaseline, UpdateEnabledBaseline, ResetEnabledBaseline. A status message is displayed in case of operation failure. For usage examples, see the Amazon Web Services Control Tower User Guide .</td>
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
    defaultValue="get_baseline_operation"
    values={[
        { label: 'get_baseline_operation', value: 'get_baseline_operation' }
    ]}
>
<TabItem value="get_baseline_operation">

Returns the details of an asynchronous baseline operation, as initiated by any of these APIs: EnableBaseline, DisableBaseline, UpdateEnabledBaseline, ResetEnabledBaseline. A status message is displayed in case of operation failure. For usage examples, see the Amazon Web Services Control Tower User Guide .

```sql
SELECT
end_time,
operation_identifier,
operation_type,
start_time,
status,
status_message
FROM aws.controltower.baseline_operations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
