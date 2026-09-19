--- 
title: whats_app_conversion_events
hide_title: false
hide_table_of_contents: false
keywords:
  - whats_app_conversion_events
  - socialmessaging
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

Creates, updates, deletes, gets or lists a <code>whats_app_conversion_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="whats_app_conversion_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.socialmessaging.whats_app_conversion_events" /></td></tr>
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
    <td><a href="#send_whats_app_conversion_event"><CopyableCode code="send_whats_app_conversion_event" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-datasetId"><code>datasetId</code></a>, <a href="#parameter-eventData"><code>eventData</code></a></td>
    <td></td>
    <td>Sends a conversion event to Meta's Conversions API for the specified WhatsApp Business Account dataset.</td>
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
    defaultValue="send_whats_app_conversion_event"
    values={[
        { label: 'send_whats_app_conversion_event', value: 'send_whats_app_conversion_event' }
    ]}
>
<TabItem value="send_whats_app_conversion_event">

Sends a conversion event to Meta's Conversions API for the specified WhatsApp Business Account dataset.

```sql
EXEC aws.socialmessaging.whats_app_conversion_events.send_whats_app_conversion_event 
@region='{{ region }}' --required 
@@json=
'{
"id": "{{ id }}", 
"datasetId": "{{ datasetId }}", 
"eventData": "{{ eventData }}"
}'
;
```
</TabItem>
</Tabs>
