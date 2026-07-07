--- 
title: queued_messages
hide_title: false
hide_table_of_contents: false
keywords:
  - queued_messages
  - iotwireless
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

Creates, updates, deletes, gets or lists a <code>queued_messages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="queued_messages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotwireless.queued_messages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_queued_messages"
    values={[
        { label: 'list_queued_messages', value: 'list_queued_messages' }
    ]}
>
<TabItem value="list_queued_messages">

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
    <td><CopyableCode code="DownlinkQueueMessagesList" /></td>
    <td><code>array</code></td>
    <td>The messages in the downlink queue.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results.</td>
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
    <td><a href="#list_queued_messages"><CopyableCode code="list_queued_messages" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-WirelessDeviceType"><code>WirelessDeviceType</code></a></td>
    <td>List queued messages in the downlink queue.</td>
</tr>
<tr>
    <td><a href="#delete_queued_messages"><CopyableCode code="delete_queued_messages" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-messageId"><code>messageId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-WirelessDeviceType"><code>WirelessDeviceType</code></a></td>
    <td>Remove queued messages from the downlink queue.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of a given wireless device for which downlink messages will be deleted.</td>
</tr>
<tr id="parameter-messageId">
    <td><CopyableCode code="messageId" /></td>
    <td><code>string</code></td>
    <td>If message ID is "*", it cleares the entire downlink queue for a given device, specified by the wireless device ID. Otherwise, the downlink message with the specified message ID will be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-WirelessDeviceType">
    <td><CopyableCode code="WirelessDeviceType" /></td>
    <td><code>string</code></td>
    <td>The wireless device type, which can be either Sidewalk or LoRaWAN.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in this operation.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_queued_messages"
    values={[
        { label: 'list_queued_messages', value: 'list_queued_messages' }
    ]}
>
<TabItem value="list_queued_messages">

List queued messages in the downlink queue.

```sql
SELECT
DownlinkQueueMessagesList,
NextToken
FROM aws.iotwireless.queued_messages
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND WirelessDeviceType = '{{ WirelessDeviceType }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_queued_messages"
    values={[
        { label: 'delete_queued_messages', value: 'delete_queued_messages' }
    ]}
>
<TabItem value="delete_queued_messages">

Remove queued messages from the downlink queue.

```sql
DELETE FROM aws.iotwireless.queued_messages
WHERE id = '{{ id }}' --required
AND messageId = '{{ messageId }}' --required
AND region = '{{ region }}' --required
AND WirelessDeviceType = '{{ WirelessDeviceType }}'
;
```
</TabItem>
</Tabs>
