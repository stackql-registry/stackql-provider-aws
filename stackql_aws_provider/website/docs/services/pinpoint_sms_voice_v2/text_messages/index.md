--- 
title: text_messages
hide_title: false
hide_table_of_contents: false
keywords:
  - text_messages
  - pinpoint_sms_voice_v2
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

Creates, updates, deletes, gets or lists a <code>text_messages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="text_messages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_sms_voice_v2.text_messages" /></td></tr>
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
    <td><a href="#send_text_message"><CopyableCode code="send_text_message" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DestinationPhoneNumber"><code>DestinationPhoneNumber</code></a></td>
    <td></td>
    <td>Creates a new text message and sends it to a recipient's phone number. SendTextMessage only sends an SMS message to one recipient each time it is invoked. SMS throughput limits are measured in Message Parts per Second (MPS). Your MPS limit depends on the destination country of your messages, as well as the type of phone number (origination number) that you use to send the message. For more information about MPS, see Message Parts per Second (MPS) limits in the End User Messaging SMS User Guide.</td>
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
    defaultValue="send_text_message"
    values={[
        { label: 'send_text_message', value: 'send_text_message' }
    ]}
>
<TabItem value="send_text_message">

Creates a new text message and sends it to a recipient's phone number. SendTextMessage only sends an SMS message to one recipient each time it is invoked. SMS throughput limits are measured in Message Parts per Second (MPS). Your MPS limit depends on the destination country of your messages, as well as the type of phone number (origination number) that you use to send the message. For more information about MPS, see Message Parts per Second (MPS) limits in the End User Messaging SMS User Guide.

```sql
EXEC aws.pinpoint_sms_voice_v2.text_messages.send_text_message 
@region='{{ region }}' --required 
@@json=
'{
"DestinationPhoneNumber": "{{ DestinationPhoneNumber }}", 
"OriginationIdentity": "{{ OriginationIdentity }}", 
"MessageBody": "{{ MessageBody }}", 
"MessageType": "{{ MessageType }}", 
"Keyword": "{{ Keyword }}", 
"ConfigurationSetName": "{{ ConfigurationSetName }}", 
"MaxPrice": "{{ MaxPrice }}", 
"TimeToLive": {{ TimeToLive }}, 
"Context": "{{ Context }}", 
"DestinationCountryParameters": "{{ DestinationCountryParameters }}", 
"DryRun": {{ DryRun }}, 
"ProtectConfigurationId": "{{ ProtectConfigurationId }}", 
"MessageFeedbackEnabled": {{ MessageFeedbackEnabled }}
}'
;
```
</TabItem>
</Tabs>
