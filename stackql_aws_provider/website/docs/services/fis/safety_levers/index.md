--- 
title: safety_levers
hide_title: false
hide_table_of_contents: false
keywords:
  - safety_levers
  - fis
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

Creates, updates, deletes, gets or lists a <code>safety_levers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="safety_levers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.fis.safety_levers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_safety_lever"
    values={[
        { label: 'get_safety_lever', value: 'get_safety_lever' }
    ]}
>
<TabItem value="get_safety_lever">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the safety lever. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the safety lever. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>object</code></td>
    <td>The state of the safety lever.</td>
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
    <td><a href="#get_safety_lever"><CopyableCode code="get_safety_lever" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified safety lever.</td>
</tr>
<tr>
    <td><a href="#update_safety_lever_state"><CopyableCode code="update_safety_lever_state" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-state"><code>state</code></a></td>
    <td></td>
    <td>Updates the specified safety lever state.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the safety lever.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_safety_lever"
    values={[
        { label: 'get_safety_lever', value: 'get_safety_lever' }
    ]}
>
<TabItem value="get_safety_lever">

Gets information about the specified safety lever.

```sql
SELECT
id,
arn,
state
FROM aws.fis.safety_levers
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_safety_lever_state"
    values={[
        { label: 'update_safety_lever_state', value: 'update_safety_lever_state' }
    ]}
>
<TabItem value="update_safety_lever_state">

Updates the specified safety lever state.

```sql
UPDATE aws.fis.safety_levers
SET 
state = '{{ state }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND state = '{{ state }}' --required
RETURNING
safetyLever;
```
</TabItem>
</Tabs>
