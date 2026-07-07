--- 
title: landing_zone_operations
hide_title: false
hide_table_of_contents: false
keywords:
  - landing_zone_operations
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

Creates, updates, deletes, gets or lists a <code>landing_zone_operations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="landing_zone_operations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.controltower.landing_zone_operations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_landing_zone_operation"
    values={[
        { label: 'get_landing_zone_operation', value: 'get_landing_zone_operation' },
        { label: 'list_landing_zone_operations', value: 'list_landing_zone_operations' }
    ]}
>
<TabItem value="get_landing_zone_operation">

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
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The landing zone operation end time.</td>
</tr>
<tr>
    <td><CopyableCode code="operationIdentifier" /></td>
    <td><code>string</code></td>
    <td>The operationIdentifier of the landing zone operation. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="operationType" /></td>
    <td><code>string</code></td>
    <td>The landing zone operation type. Valid values: DELETE: The DeleteLandingZone operation. CREATE: The CreateLandingZone operation. UPDATE: The UpdateLandingZone operation. RESET: The ResetLandingZone operation. (DELETE, CREATE, UPDATE, RESET)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The landing zone operation start time.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Valid values: SUCCEEDED: The landing zone operation succeeded. IN_PROGRESS: The landing zone operation is in progress. FAILED: The landing zone operation failed. (SUCCEEDED, FAILED, IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>If the operation result is FAILED, this string contains a message explaining why the operation failed.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_landing_zone_operations">

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
    <td><CopyableCode code="operationIdentifier" /></td>
    <td><code>string</code></td>
    <td>The operationIdentifier of the landing zone operation. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="operationType" /></td>
    <td><code>string</code></td>
    <td>The type of the landing zone operation. (DELETE, CREATE, UPDATE, RESET)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the landing zone operation. (SUCCEEDED, FAILED, IN_PROGRESS)</td>
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
    <td><a href="#get_landing_zone_operation"><CopyableCode code="get_landing_zone_operation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the status of the specified landing zone operation. Details for an operation are available for 90 days.</td>
</tr>
<tr>
    <td><a href="#list_landing_zone_operations"><CopyableCode code="list_landing_zone_operations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all landing zone operations from the past 90 days. Results are sorted by time, with the most recent operation first.</td>
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
    defaultValue="get_landing_zone_operation"
    values={[
        { label: 'get_landing_zone_operation', value: 'get_landing_zone_operation' },
        { label: 'list_landing_zone_operations', value: 'list_landing_zone_operations' }
    ]}
>
<TabItem value="get_landing_zone_operation">

Returns the status of the specified landing zone operation. Details for an operation are available for 90 days.

```sql
SELECT
endTime,
operationIdentifier,
operationType,
startTime,
status,
statusMessage
FROM aws.controltower.landing_zone_operations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_landing_zone_operations">

Lists all landing zone operations from the past 90 days. Results are sorted by time, with the most recent operation first.

```sql
SELECT
operationIdentifier,
operationType,
status
FROM aws.controltower.landing_zone_operations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
