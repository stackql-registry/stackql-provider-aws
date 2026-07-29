--- 
title: conformance_pack_status
hide_title: false
hide_table_of_contents: false
keywords:
  - conformance_pack_status
  - config
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

Creates, updates, deletes, gets or lists a <code>conformance_pack_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="conformance_pack_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.conformance_pack_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_conformance_pack_status"
    values={[
        { label: 'describe_conformance_pack_status', value: 'describe_conformance_pack_status' }
    ]}
>
<TabItem value="describe_conformance_pack_status">

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
    <td><CopyableCode code="conformance_pack_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of comformance pack.</td>
</tr>
<tr>
    <td><CopyableCode code="conformance_pack_id" /></td>
    <td><code>string</code></td>
    <td>ID of the conformance pack.</td>
</tr>
<tr>
    <td><CopyableCode code="conformance_pack_name" /></td>
    <td><code>string</code></td>
    <td>Name of the conformance pack. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;-a-zA-Z0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="conformance_pack_state" /></td>
    <td><code>string</code></td>
    <td>Indicates deployment status of conformance pack. Config sets the state of the conformance pack to: CREATE_IN_PROGRESS when a conformance pack creation is in progress for an account. CREATE_COMPLETE when a conformance pack has been successfully created in your account. CREATE_FAILED when a conformance pack creation failed in your account. DELETE_IN_PROGRESS when a conformance pack deletion is in progress. DELETE_FAILED when a conformance pack deletion failed in your account. (CREATE_IN_PROGRESS, CREATE_COMPLETE, CREATE_FAILED, DELETE_IN_PROGRESS, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="conformance_pack_status_reason" /></td>
    <td><code>string</code></td>
    <td>The reason of conformance pack creation failure.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_completed_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last time when conformation pack creation and update was successful.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_requested_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last time when conformation pack creation and update was requested.</td>
</tr>
<tr>
    <td><CopyableCode code="stack_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of CloudFormation stack.</td>
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
    <td><a href="#describe_conformance_pack_status"><CopyableCode code="describe_conformance_pack_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides one or more conformance packs deployment status. If there are no conformance packs then you will see an empty result.</td>
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
    defaultValue="describe_conformance_pack_status"
    values={[
        { label: 'describe_conformance_pack_status', value: 'describe_conformance_pack_status' }
    ]}
>
<TabItem value="describe_conformance_pack_status">

Provides one or more conformance packs deployment status. If there are no conformance packs then you will see an empty result.

```sql
SELECT
conformance_pack_arn,
conformance_pack_id,
conformance_pack_name,
conformance_pack_state,
conformance_pack_status_reason,
last_update_completed_time,
last_update_requested_time,
stack_arn
FROM aws.config.conformance_pack_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
