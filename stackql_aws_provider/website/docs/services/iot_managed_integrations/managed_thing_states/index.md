--- 
title: managed_thing_states
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_thing_states
  - iot_managed_integrations
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

Creates, updates, deletes, gets or lists a <code>managed_thing_states</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="managed_thing_states" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_managed_integrations.managed_thing_states" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_managed_thing_state"
    values={[
        { label: 'get_managed_thing_state', value: 'get_managed_thing_state' }
    ]}
>
<TabItem value="get_managed_thing_state">

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
    <td><CopyableCode code="Endpoints" /></td>
    <td><code>array</code></td>
    <td>The device endpoint.</td>
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
    <td><a href="#get_managed_thing_state"><CopyableCode code="get_managed_thing_state" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-managed_thing_id"><code>managed_thing_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the managed thing state for the given device Id.</td>
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
<tr id="parameter-managed_thing_id">
    <td><CopyableCode code="managed_thing_id" /></td>
    <td><code>string</code></td>
    <td>The id of the device.</td>
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
    defaultValue="get_managed_thing_state"
    values={[
        { label: 'get_managed_thing_state', value: 'get_managed_thing_state' }
    ]}
>
<TabItem value="get_managed_thing_state">

Returns the managed thing state for the given device Id.

```sql
SELECT
Endpoints
FROM aws.iot_managed_integrations.managed_thing_states
WHERE managed_thing_id = '{{ managed_thing_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
