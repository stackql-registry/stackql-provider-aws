--- 
title: to_events
hide_title: false
hide_table_of_contents: false
keywords:
  - to_events
  - inspector
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

Creates, updates, deletes, gets or lists a <code>to_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="to_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector.to_events" /></td></tr>
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
    <td><a href="#subscribe_to_event"><CopyableCode code="subscribe_to_event" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceArn"><code>resourceArn</code></a>, <a href="#parameter-event"><code>event</code></a>, <a href="#parameter-topicArn"><code>topicArn</code></a></td>
    <td></td>
    <td>Enables the process of sending Amazon Simple Notification Service (SNS) notifications about a specified event to a specified SNS topic.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="subscribe_to_event"
    values={[
        { label: 'subscribe_to_event', value: 'subscribe_to_event' }
    ]}
>
<TabItem value="subscribe_to_event">

Enables the process of sending Amazon Simple Notification Service (SNS) notifications about a specified event to a specified SNS topic.

```sql
EXEC aws.inspector.to_events.subscribe_to_event 
@region='{{ region }}' --required 
@@json=
'{
"resourceArn": "{{ resourceArn }}", 
"event": "{{ event }}", 
"topicArn": "{{ topicArn }}"
}'
;
```
</TabItem>
</Tabs>
