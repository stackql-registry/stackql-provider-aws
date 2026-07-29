--- 
title: preview_rotation_shifts
hide_title: false
hide_table_of_contents: false
keywords:
  - preview_rotation_shifts
  - ssm_contacts
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

Creates, updates, deletes, gets or lists a <code>preview_rotation_shifts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="preview_rotation_shifts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm_contacts.preview_rotation_shifts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_preview_rotation_shifts"
    values={[
        { label: 'list_preview_rotation_shifts', value: 'list_preview_rotation_shifts' }
    ]}
>
<TabItem value="list_preview_rotation_shifts">

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
    <td><CopyableCode code="contact_ids" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Names (ARNs) of the contacts who are part of the shift rotation.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time a shift rotation ends.</td>
</tr>
<tr>
    <td><CopyableCode code="shift_details" /></td>
    <td><code>object</code></td>
    <td>Additional information about an on-call rotation shift.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time a shift rotation begins.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of shift rotation. (REGULAR, OVERRIDDEN)</td>
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
    <td><a href="#list_preview_rotation_shifts"><CopyableCode code="list_preview_rotation_shifts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of shifts based on rotation configuration parameters. The Incident Manager primarily uses this operation to populate the Preview calendar. It is not typically run by end users.</td>
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
    defaultValue="list_preview_rotation_shifts"
    values={[
        { label: 'list_preview_rotation_shifts', value: 'list_preview_rotation_shifts' }
    ]}
>
<TabItem value="list_preview_rotation_shifts">

Returns a list of shifts based on rotation configuration parameters. The Incident Manager primarily uses this operation to populate the Preview calendar. It is not typically run by end users.

```sql
SELECT
contact_ids,
end_time,
shift_details,
start_time,
type
FROM aws.ssm_contacts.preview_rotation_shifts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
