--- 
title: bots_counts
hide_title: false
hide_table_of_contents: false
keywords:
  - bots_counts
  - wickr
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

Creates, updates, deletes, gets or lists a <code>bots_counts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bots_counts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wickr.bots_counts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bots_count"
    values={[
        { label: 'get_bots_count', value: 'get_bots_count' }
    ]}
>
<TabItem value="get_bots_count">

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
    <td><CopyableCode code="active" /></td>
    <td><code>integer</code></td>
    <td>The number of bots with active status.</td>
</tr>
<tr>
    <td><CopyableCode code="pending" /></td>
    <td><code>integer</code></td>
    <td>The number of bots with pending status (invited but not yet activated).</td>
</tr>
<tr>
    <td><CopyableCode code="total" /></td>
    <td><code>integer</code></td>
    <td>The total number of bots in the network (active and pending).</td>
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
    <td><a href="#get_bots_count"><CopyableCode code="get_bots_count" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the count of bots in a Wickr network, categorized by their status (pending, active, and total).</td>
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
<tr id="parameter-network_id">
    <td><CopyableCode code="network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Wickr network for which to retrieve bot counts.</td>
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
    defaultValue="get_bots_count"
    values={[
        { label: 'get_bots_count', value: 'get_bots_count' }
    ]}
>
<TabItem value="get_bots_count">

Retrieves the count of bots in a Wickr network, categorized by their status (pending, active, and total).

```sql
SELECT
active,
pending,
total
FROM aws.wickr.bots_counts
WHERE network_id = '{{ network_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
