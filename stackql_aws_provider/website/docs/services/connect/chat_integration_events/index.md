--- 
title: chat_integration_events
hide_title: false
hide_table_of_contents: false
keywords:
  - chat_integration_events
  - connect
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

Creates, updates, deletes, gets or lists a <code>chat_integration_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="chat_integration_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.chat_integration_events" /></td></tr>
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
    <td><a href="#send_chat_integration_event"><CopyableCode code="send_chat_integration_event" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SourceId"><code>SourceId</code></a>, <a href="#parameter-DestinationId"><code>DestinationId</code></a>, <a href="#parameter-Event"><code>Event</code></a></td>
    <td></td>
    <td>Processes chat integration events from Amazon Web Services or external integrations to Connect Customer. A chat integration event includes: SourceId, DestinationId, and Subtype: a set of identifiers, uniquely representing a chat ChatEvent: details of the chat action to perform such as sending a message, event, or disconnecting from a chat When a chat integration event is sent with chat identifiers that do not map to an active chat contact, a new chat contact is also created before handling chat action. Access to this API is currently restricted to Amazon Web Services End User Messaging for supporting SMS integration.</td>
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
    defaultValue="send_chat_integration_event"
    values={[
        { label: 'send_chat_integration_event', value: 'send_chat_integration_event' }
    ]}
>
<TabItem value="send_chat_integration_event">

Processes chat integration events from Amazon Web Services or external integrations to Connect Customer. A chat integration event includes: SourceId, DestinationId, and Subtype: a set of identifiers, uniquely representing a chat ChatEvent: details of the chat action to perform such as sending a message, event, or disconnecting from a chat When a chat integration event is sent with chat identifiers that do not map to an active chat contact, a new chat contact is also created before handling chat action. Access to this API is currently restricted to Amazon Web Services End User Messaging for supporting SMS integration.

```sql
EXEC aws.connect.chat_integration_events.send_chat_integration_event 
@region='{{ region }}' --required 
@@json=
'{
"SourceId": "{{ SourceId }}", 
"DestinationId": "{{ DestinationId }}", 
"Subtype": "{{ Subtype }}", 
"Event": "{{ Event }}", 
"NewSessionDetails": "{{ NewSessionDetails }}"
}'
;
```
</TabItem>
</Tabs>
