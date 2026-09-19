--- 
title: media_messages
hide_title: false
hide_table_of_contents: false
keywords:
  - media_messages
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

Creates, updates, deletes, gets or lists a <code>media_messages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="media_messages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_sms_voice_v2.media_messages" /></td></tr>
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
    <td><a href="#send_media_message"><CopyableCode code="send_media_message" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DestinationPhoneNumber"><code>DestinationPhoneNumber</code></a>, <a href="#parameter-OriginationIdentity"><code>OriginationIdentity</code></a></td>
    <td></td>
    <td>Creates a new multimedia message (MMS) and sends it to a recipient's phone number.</td>
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
    defaultValue="send_media_message"
    values={[
        { label: 'send_media_message', value: 'send_media_message' }
    ]}
>
<TabItem value="send_media_message">

Creates a new multimedia message (MMS) and sends it to a recipient's phone number.

```sql
EXEC aws.pinpoint_sms_voice_v2.media_messages.send_media_message 
@region='{{ region }}' --required 
@@json=
'{
"DestinationPhoneNumber": "{{ DestinationPhoneNumber }}", 
"OriginationIdentity": "{{ OriginationIdentity }}", 
"MessageBody": "{{ MessageBody }}", 
"MediaUrls": "{{ MediaUrls }}", 
"ConfigurationSetName": "{{ ConfigurationSetName }}", 
"MaxPrice": "{{ MaxPrice }}", 
"TimeToLive": {{ TimeToLive }}, 
"Context": "{{ Context }}", 
"DryRun": {{ DryRun }}, 
"ProtectConfigurationId": "{{ ProtectConfigurationId }}", 
"MessageFeedbackEnabled": {{ MessageFeedbackEnabled }}
}'
;
```
</TabItem>
</Tabs>
