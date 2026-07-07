--- 
title: events
hide_title: false
hide_table_of_contents: false
keywords:
  - events
  - personalize_events
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

Creates, updates, deletes, gets or lists an <code>events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.personalize_events.events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#put_events"><CopyableCode code="put_events" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-trackingId"><code>trackingId</code></a>, <a href="#parameter-sessionId"><code>sessionId</code></a>, <a href="#parameter-eventList"><code>eventList</code></a></td>
    <td></td>
    <td>Records item interaction event data. For more information see Recording item interaction events.</td>
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

## `REPLACE` examples

<Tabs
    defaultValue="put_events"
    values={[
        { label: 'put_events', value: 'put_events' }
    ]}
>
<TabItem value="put_events">

Records item interaction event data. For more information see Recording item interaction events.

```sql
REPLACE aws.personalize_events.events
SET 
trackingId = '{{ trackingId }}',
userId = '{{ userId }}',
sessionId = '{{ sessionId }}',
eventList = '{{ eventList }}'
WHERE 
region = '{{ region }}' --required
AND trackingId = '{{ trackingId }}' --required
AND sessionId = '{{ sessionId }}' --required
AND eventList = '{{ eventList }}' --required;
```
</TabItem>
</Tabs>
