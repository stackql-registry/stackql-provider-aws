--- 
title: voice_messages
hide_title: false
hide_table_of_contents: false
keywords:
  - voice_messages
  - pinpoint_sms_voice
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

Creates, updates, deletes, gets or lists a <code>voice_messages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="voice_messages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_sms_voice.voice_messages" /></td></tr>
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
    <td><a href="#send_voice_message"><CopyableCode code="send_voice_message" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Create a new voice message and send it to a recipient's phone number.</td>
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
    defaultValue="send_voice_message"
    values={[
        { label: 'send_voice_message', value: 'send_voice_message' }
    ]}
>
<TabItem value="send_voice_message">

Create a new voice message and send it to a recipient's phone number.

```sql
EXEC aws.pinpoint_sms_voice.voice_messages.send_voice_message 
@region='{{ region }}' --required 
@@json=
'{
"CallerId": "{{ CallerId }}", 
"ConfigurationSetName": "{{ ConfigurationSetName }}", 
"Content": "{{ Content }}", 
"DestinationPhoneNumber": "{{ DestinationPhoneNumber }}", 
"OriginationPhoneNumber": "{{ OriginationPhoneNumber }}"
}'
;
```
</TabItem>
</Tabs>
