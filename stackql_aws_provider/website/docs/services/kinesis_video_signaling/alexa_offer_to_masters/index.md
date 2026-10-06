--- 
title: alexa_offer_to_masters
hide_title: false
hide_table_of_contents: false
keywords:
  - alexa_offer_to_masters
  - kinesis_video_signaling
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

Creates, updates, deletes, gets or lists an <code>alexa_offer_to_masters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="alexa_offer_to_masters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesis_video_signaling.alexa_offer_to_masters" /></td></tr>
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
    <td><a href="#send_alexa_offer_to_master"><CopyableCode code="send_alexa_offer_to_master" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ChannelARN"><code>ChannelARN</code></a>, <a href="#parameter-SenderClientId"><code>SenderClientId</code></a>, <a href="#parameter-MessagePayload"><code>MessagePayload</code></a></td>
    <td></td>
    <td>This API allows you to connect WebRTC-enabled devices with Alexa display devices. When invoked, it sends the Alexa Session Description Protocol (SDP) offer to the master peer. The offer is delivered as soon as the master is connected to the specified signaling channel. This API returns the SDP answer from the connected master. If the master is not connected to the signaling channel, redelivery requests are made until the message expires.</td>
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
    defaultValue="send_alexa_offer_to_master"
    values={[
        { label: 'send_alexa_offer_to_master', value: 'send_alexa_offer_to_master' }
    ]}
>
<TabItem value="send_alexa_offer_to_master">

This API allows you to connect WebRTC-enabled devices with Alexa display devices. When invoked, it sends the Alexa Session Description Protocol (SDP) offer to the master peer. The offer is delivered as soon as the master is connected to the specified signaling channel. This API returns the SDP answer from the connected master. If the master is not connected to the signaling channel, redelivery requests are made until the message expires.

```sql
EXEC aws.kinesis_video_signaling.alexa_offer_to_masters.send_alexa_offer_to_master 
@region='{{ region }}' --required 
@@json=
'{
"ChannelARN": "{{ ChannelARN }}", 
"SenderClientId": "{{ SenderClientId }}", 
"MessagePayload": "{{ MessagePayload }}"
}'
;
```
</TabItem>
</Tabs>
