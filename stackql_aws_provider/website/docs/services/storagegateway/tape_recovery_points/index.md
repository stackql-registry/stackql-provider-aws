--- 
title: tape_recovery_points
hide_title: false
hide_table_of_contents: false
keywords:
  - tape_recovery_points
  - storagegateway
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

Creates, updates, deletes, gets or lists a <code>tape_recovery_points</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tape_recovery_points" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.storagegateway.tape_recovery_points" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_tape_recovery_points"
    values={[
        { label: 'describe_tape_recovery_points', value: 'describe_tape_recovery_points' }
    ]}
>
<TabItem value="describe_tape_recovery_points">

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
    <td><CopyableCode code="TapeARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the virtual tape. (pattern: &lt;code&gt;arn:(aws(|-cn|-us-gov|-iso&#91;A-Za-z0-9_-&#93;*|-eusc)):storagegateway:&#91;a-z\-0-9&#93;+:&#91;0-9&#93;+:tape\/&#91;0-9A-Z&#93;&#123;5,16&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TapeRecoveryPointTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the point-in-time view of the virtual tape was replicated for later recovery. The default timestamp format of the tape recovery point time is in the ISO8601 extended YYYY-MM-DD'T'HH:MM:SS'Z' format.</td>
</tr>
<tr>
    <td><CopyableCode code="TapeSizeInBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size, in bytes, of the virtual tapes to recover.</td>
</tr>
<tr>
    <td><CopyableCode code="TapeStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the virtual tapes.</td>
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
    <td><a href="#describe_tape_recovery_points"><CopyableCode code="describe_tape_recovery_points" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of virtual tape recovery points that are available for the specified tape gateway. A recovery point is a point-in-time view of a virtual tape at which all the data on the virtual tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway. This operation is only supported in the tape gateway type.</td>
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
    defaultValue="describe_tape_recovery_points"
    values={[
        { label: 'describe_tape_recovery_points', value: 'describe_tape_recovery_points' }
    ]}
>
<TabItem value="describe_tape_recovery_points">

Returns a list of virtual tape recovery points that are available for the specified tape gateway. A recovery point is a point-in-time view of a virtual tape at which all the data on the virtual tape is consistent. If your gateway crashes, virtual tapes that have recovery points can be recovered to a new gateway. This operation is only supported in the tape gateway type.

```sql
SELECT
TapeARN,
TapeRecoveryPointTime,
TapeSizeInBytes,
TapeStatus
FROM aws.storagegateway.tape_recovery_points
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
