--- 
title: control_operations
hide_title: false
hide_table_of_contents: false
keywords:
  - control_operations
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

Creates, updates, deletes, gets or lists a <code>control_operations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="control_operations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.controltower.control_operations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_control_operation"
    values={[
        { label: 'get_control_operation', value: 'get_control_operation' },
        { label: 'list_control_operations', value: 'list_control_operations' }
    ]}
>
<TabItem value="get_control_operation">

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
    <td><CopyableCode code="controlIdentifier" /></td>
    <td><code>string</code></td>
    <td>The controlIdentifier of the control for the operation. (pattern: &lt;code&gt;arn:aws&#91;0-9a-zA-Z_\-:\/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="enabledControlIdentifier" /></td>
    <td><code>string</code></td>
    <td>The controlIdentifier of the enabled control. (pattern: &lt;code&gt;arn:aws&#91;0-9a-zA-Z_\-:\/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the operation finished.</td>
</tr>
<tr>
    <td><CopyableCode code="operationIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the specified operation. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="operationType" /></td>
    <td><code>string</code></td>
    <td>One of ENABLE_CONTROL or DISABLE_CONTROL. (ENABLE_CONTROL, DISABLE_CONTROL, UPDATE_ENABLED_CONTROL, RESET_ENABLED_CONTROL)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the operation began.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>One of IN_PROGRESS, SUCEEDED, or FAILED. (SUCCEEDED, FAILED, IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>If the operation result is FAILED, this string contains a message explaining why the operation failed.</td>
</tr>
<tr>
    <td><CopyableCode code="targetIdentifier" /></td>
    <td><code>string</code></td>
    <td>The target upon which the control operation is working. (pattern: &lt;code&gt;arn:aws&#91;0-9a-zA-Z_\-:\/&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_control_operations">

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
    <td><CopyableCode code="controlIdentifier" /></td>
    <td><code>string</code></td>
    <td>The controlIdentifier of a control. (pattern: &lt;code&gt;arn:aws&#91;0-9a-zA-Z_\-:\/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="enabledControlIdentifier" /></td>
    <td><code>string</code></td>
    <td>The controlIdentifier of an enabled control. (pattern: &lt;code&gt;arn:aws&#91;0-9a-zA-Z_\-:\/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the control operation was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="operationIdentifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of a control operation. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="operationType" /></td>
    <td><code>string</code></td>
    <td>The type of operation. (ENABLE_CONTROL, DISABLE_CONTROL, UPDATE_ENABLED_CONTROL, RESET_ENABLED_CONTROL)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which a control operation began.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the specified control operation. (SUCCEEDED, FAILED, IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>A speficic message displayed as part of the control status.</td>
</tr>
<tr>
    <td><CopyableCode code="targetIdentifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the target of a control operation. (pattern: &lt;code&gt;arn:aws&#91;0-9a-zA-Z_\-:\/&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_control_operation"><CopyableCode code="get_control_operation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the status of a particular EnableControl or DisableControl operation. Displays a message in case of error. Details for an operation are available for 90 days. For usage examples, see the Controls Reference Guide .</td>
</tr>
<tr>
    <td><a href="#list_control_operations"><CopyableCode code="list_control_operations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a list of operations in progress or queued. For usage examples, see ListControlOperation examples.</td>
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
    defaultValue="get_control_operation"
    values={[
        { label: 'get_control_operation', value: 'get_control_operation' },
        { label: 'list_control_operations', value: 'list_control_operations' }
    ]}
>
<TabItem value="get_control_operation">

Returns the status of a particular EnableControl or DisableControl operation. Displays a message in case of error. Details for an operation are available for 90 days. For usage examples, see the Controls Reference Guide .

```sql
SELECT
controlIdentifier,
enabledControlIdentifier,
endTime,
operationIdentifier,
operationType,
startTime,
status,
statusMessage,
targetIdentifier
FROM aws.controltower.control_operations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_control_operations">

Provides a list of operations in progress or queued. For usage examples, see ListControlOperation examples.

```sql
SELECT
controlIdentifier,
enabledControlIdentifier,
endTime,
operationIdentifier,
operationType,
startTime,
status,
statusMessage,
targetIdentifier
FROM aws.controltower.control_operations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
