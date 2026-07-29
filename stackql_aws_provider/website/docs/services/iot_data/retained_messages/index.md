--- 
title: retained_messages
hide_title: false
hide_table_of_contents: false
keywords:
  - retained_messages
  - iot_data
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

Creates, updates, deletes, gets or lists a <code>retained_messages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="retained_messages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_data.retained_messages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_retained_message"
    values={[
        { label: 'get_retained_message', value: 'get_retained_message' },
        { label: 'list_retained_messages', value: 'list_retained_messages' }
    ]}
>
<TabItem value="get_retained_message">

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
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>The Epoch date and time, in milliseconds, when the retained message was stored by IoT.</td>
</tr>
<tr>
    <td><CopyableCode code="payload" /></td>
    <td><code>string (byte)</code></td>
    <td>The Base64-encoded message payload of the retained message body.</td>
</tr>
<tr>
    <td><CopyableCode code="qos" /></td>
    <td><code>integer</code></td>
    <td>The quality of service (QoS) level used to publish the retained message.</td>
</tr>
<tr>
    <td><CopyableCode code="topic" /></td>
    <td><code>string</code></td>
    <td>The topic name to which the retained message was published.</td>
</tr>
<tr>
    <td><CopyableCode code="user_properties" /></td>
    <td><code>string (byte)</code></td>
    <td>A base64-encoded JSON string that includes an array of JSON objects, or null if the retained message doesn't include any user properties. The following example userProperties parameter is a JSON string that represents two user properties. Note that it will be base64-encoded: &#91;&#123;"deviceName": "alpha"&#125;, &#123;"deviceCnt": "45"&#125;&#93;</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_retained_messages">

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
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>integer (int64)</code></td>
    <td>The Epoch date and time, in milliseconds, when the retained message was stored by IoT.</td>
</tr>
<tr>
    <td><CopyableCode code="payload_size" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the retained message's payload in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="qos" /></td>
    <td><code>integer</code></td>
    <td>The quality of service (QoS) level used to publish the retained message.</td>
</tr>
<tr>
    <td><CopyableCode code="topic" /></td>
    <td><code>string</code></td>
    <td>The topic name to which the retained message was published.</td>
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
    <td><a href="#get_retained_message"><CopyableCode code="get_retained_message" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-topic"><code>topic</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the details of a single retained message for the specified topic. This action returns the message payload of the retained message, which can incur messaging costs. To list only the topic names of the retained messages, call ListRetainedMessages. Requires permission to access the GetRetainedMessage action. For more information about messaging costs, see Amazon Web Services IoT Core pricing - Messaging.</td>
</tr>
<tr>
    <td><a href="#list_retained_messages"><CopyableCode code="list_retained_messages" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists summary information about the retained messages stored for the account. This action returns only the topic names of the retained messages. It doesn't return any message payloads. Although this action doesn't return a message payload, it can still incur messaging costs. To get the message payload of a retained message, call GetRetainedMessage with the topic name of the retained message. Requires permission to access the ListRetainedMessages action. For more information about messaging costs, see Amazon Web Services IoT Core pricing - Messaging.</td>
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
<tr id="parameter-topic">
    <td><CopyableCode code="topic" /></td>
    <td><code>string</code></td>
    <td>The topic name of the retained message to retrieve.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time.</td>
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
    defaultValue="get_retained_message"
    values={[
        { label: 'get_retained_message', value: 'get_retained_message' },
        { label: 'list_retained_messages', value: 'list_retained_messages' }
    ]}
>
<TabItem value="get_retained_message">

Gets the details of a single retained message for the specified topic. This action returns the message payload of the retained message, which can incur messaging costs. To list only the topic names of the retained messages, call ListRetainedMessages. Requires permission to access the GetRetainedMessage action. For more information about messaging costs, see Amazon Web Services IoT Core pricing - Messaging.

```sql
SELECT
last_modified_time,
payload,
qos,
topic,
user_properties
FROM aws.iot_data.retained_messages
WHERE topic = '{{ topic }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_retained_messages">

Lists summary information about the retained messages stored for the account. This action returns only the topic names of the retained messages. It doesn't return any message payloads. Although this action doesn't return a message payload, it can still incur messaging costs. To get the message payload of a retained message, call GetRetainedMessage with the topic name of the retained message. Requires permission to access the ListRetainedMessages action. For more information about messaging costs, see Amazon Web Services IoT Core pricing - Messaging.

```sql
SELECT
last_modified_time,
payload_size,
qos,
topic
FROM aws.iot_data.retained_messages
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
