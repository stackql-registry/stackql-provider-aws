--- 
title: ops_item_events
hide_title: false
hide_table_of_contents: false
keywords:
  - ops_item_events
  - ssm
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

Creates, updates, deletes, gets or lists an <code>ops_item_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ops_item_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm.ops_item_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_ops_item_events"
    values={[
        { label: 'list_ops_item_events', value: 'list_ops_item_events' }
    ]}
>
<TabItem value="list_ops_item_events">

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
    <td><CopyableCode code="CreatedBy" /></td>
    <td><code>object</code></td>
    <td>Information about the user or resource that created the OpsItem event.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the OpsItem event was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Detail" /></td>
    <td><code>string</code></td>
    <td>Specific information about the OpsItem event.</td>
</tr>
<tr>
    <td><CopyableCode code="DetailType" /></td>
    <td><code>string</code></td>
    <td>The type of information provided as a detail.</td>
</tr>
<tr>
    <td><CopyableCode code="EventId" /></td>
    <td><code>string</code></td>
    <td>The ID of the OpsItem event.</td>
</tr>
<tr>
    <td><CopyableCode code="OpsItemId" /></td>
    <td><code>string</code></td>
    <td>The ID of the OpsItem.</td>
</tr>
<tr>
    <td><CopyableCode code="Source" /></td>
    <td><code>string</code></td>
    <td>The source of the OpsItem event.</td>
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
    <td><a href="#list_ops_item_events"><CopyableCode code="list_ops_item_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of all OpsItem events in the current Amazon Web Services Region and Amazon Web Services account. You can limit the results to events associated with specific OpsItems by specifying a filter.</td>
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
    defaultValue="list_ops_item_events"
    values={[
        { label: 'list_ops_item_events', value: 'list_ops_item_events' }
    ]}
>
<TabItem value="list_ops_item_events">

Returns a list of all OpsItem events in the current Amazon Web Services Region and Amazon Web Services account. You can limit the results to events associated with specific OpsItems by specifying a filter.

```sql
SELECT
CreatedBy,
CreatedTime,
Detail,
DetailType,
EventId,
OpsItemId,
Source
FROM aws.ssm.ops_item_events
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
