--- 
title: guest_user_history_counts
hide_title: false
hide_table_of_contents: false
keywords:
  - guest_user_history_counts
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

Creates, updates, deletes, gets or lists a <code>guest_user_history_counts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="guest_user_history_counts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wickr.guest_user_history_counts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_guest_user_history_count"
    values={[
        { label: 'get_guest_user_history_count', value: 'get_guest_user_history_count' }
    ]}
>
<TabItem value="get_guest_user_history_count">

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
    <td><CopyableCode code="history" /></td>
    <td><code>array</code></td>
    <td>A list of historical guest user counts, organized by month and billing period.</td>
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
    <td><a href="#get_guest_user_history_count"><CopyableCode code="get_guest_user_history_count" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves historical guest user count data for a Wickr network, showing the number of guest users per billing period over the past 90 days.</td>
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
    <td>The ID of the Wickr network for which to retrieve guest user history.</td>
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
    defaultValue="get_guest_user_history_count"
    values={[
        { label: 'get_guest_user_history_count', value: 'get_guest_user_history_count' }
    ]}
>
<TabItem value="get_guest_user_history_count">

Retrieves historical guest user count data for a Wickr network, showing the number of guest users per billing period over the past 90 days.

```sql
SELECT
history
FROM aws.wickr.guest_user_history_counts
WHERE network_id = '{{ network_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
