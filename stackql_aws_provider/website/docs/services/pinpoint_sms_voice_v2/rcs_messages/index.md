--- 
title: rcs_messages
hide_title: false
hide_table_of_contents: false
keywords:
  - rcs_messages
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

Creates, updates, deletes, gets or lists a <code>rcs_messages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rcs_messages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_sms_voice_v2.rcs_messages" /></td></tr>
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
    <td><a href="#send_rcs_message"><CopyableCode code="send_rcs_message" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DestinationPhoneNumber"><code>DestinationPhoneNumber</code></a>, <a href="#parameter-OriginationIdentity"><code>OriginationIdentity</code></a></td>
    <td></td>
    <td>Creates a new RCS message and sends it to a recipient's phone number. RCS messages support rich content including text, files, rich cards, and carousels with interactive suggested actions.</td>
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
    defaultValue="send_rcs_message"
    values={[
        { label: 'send_rcs_message', value: 'send_rcs_message' }
    ]}
>
<TabItem value="send_rcs_message">

Creates a new RCS message and sends it to a recipient's phone number. RCS messages support rich content including text, files, rich cards, and carousels with interactive suggested actions.

```sql
EXEC aws.pinpoint_sms_voice_v2.rcs_messages.send_rcs_message 
@region='{{ region }}' --required 
@@json=
'{
"DestinationPhoneNumber": "{{ DestinationPhoneNumber }}", 
"OriginationIdentity": "{{ OriginationIdentity }}", 
"RcsMessageContent": "{{ RcsMessageContent }}", 
"TimeToLive": {{ TimeToLive }}, 
"MessageTrafficType": "{{ MessageTrafficType }}", 
"FallbackConfiguration": "{{ FallbackConfiguration }}", 
"ProtectConfigurationId": "{{ ProtectConfigurationId }}", 
"ConfigurationSetName": "{{ ConfigurationSetName }}", 
"MaxPrice": "{{ MaxPrice }}", 
"DryRun": {{ DryRun }}, 
"Context": "{{ Context }}", 
"MessageFeedbackEnabled": {{ MessageFeedbackEnabled }}
}'
;
```
</TabItem>
</Tabs>
