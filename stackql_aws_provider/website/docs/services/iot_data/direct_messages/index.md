--- 
title: direct_messages
hide_title: false
hide_table_of_contents: false
keywords:
  - direct_messages
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

Creates, updates, deletes, gets or lists a <code>direct_messages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="direct_messages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_data.direct_messages" /></td></tr>
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
    <td><a href="#send_direct_message"><CopyableCode code="send_direct_message" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-client_id"><code>client_id</code></a>, <a href="#parameter-topic"><code>topic</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-contentType"><code>contentType</code></a>, <a href="#parameter-responseTopic"><code>responseTopic</code></a>, <a href="#parameter-confirmation"><code>confirmation</code></a>, <a href="#parameter-timeout"><code>timeout</code></a>, <a href="#parameter-x-amz-mqtt5-user-properties"><code>x-amz-mqtt5-user-properties</code></a>, <a href="#parameter-x-amz-mqtt5-payload-format-indicator"><code>x-amz-mqtt5-payload-format-indicator</code></a>, <a href="#parameter-x-amz-mqtt5-correlation-data"><code>x-amz-mqtt5-correlation-data</code></a></td>
    <td>Sends an MQTT message directly to a specific client identified by its client ID. SendDirectMessage targets a single client ID. The receiving client does not need to subscribe to the topic, but the receiver's policy must allow iot:Receive on the specified topic. Requires permission to access the SendDirectMessage action. For more information about messaging costs, see Amazon Web Services IoT Core pricing.</td>
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
<tr id="parameter-client_id">
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the MQTT client to send the message to. Client IDs must not exceed 128 characters and can't start with a dollar sign ($). MQTT client IDs must be URL encoded (percent-encoded) when they contain characters that are not valid in HTTP requests, such as spaces, forward slashes (/), and UTF-8 characters. For more information, see Amazon Web Services IoT Core message broker and protocol limits and quotas.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-topic">
    <td><CopyableCode code="topic" /></td>
    <td><code>string</code></td>
    <td>The topic of the outbound MQTT Publish message to the receiving client. For more information, see Amazon Web Services IoT Core message broker and protocol limits and quotas.</td>
</tr>
<tr id="parameter-confirmation">
    <td><CopyableCode code="confirmation" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value that specifies whether to wait for delivery confirmation from the receiving client. When set to true, the API delivers the message at QoS 1 and waits for the client to send a delivery confirmation (PUBACK) before returning a successful response. If delivery confirmation is not received within the specified timeout period, the API returns HTTP 504. When set to false, the API delivers the message at QoS 0 and returns after Amazon Web Services IoT Core attempts to deliver the message. Valid values: true | false Default value: false</td>
</tr>
<tr id="parameter-contentType">
    <td><CopyableCode code="contentType" /></td>
    <td><code>string</code></td>
    <td>The MQTT5 content type property forwarded to the receiving client (for example, application/json).</td>
</tr>
<tr id="parameter-responseTopic">
    <td><CopyableCode code="responseTopic" /></td>
    <td><code>string</code></td>
    <td>A UTF-8 encoded string that's used as the topic name for a response message. The response topic describes the topic which the receiver should publish to as part of the request-response flow. The topic must not contain wildcard characters. For more information, see Amazon Web Services IoT Core message broker and protocol limits and quotas.</td>
</tr>
<tr id="parameter-timeout">
    <td><CopyableCode code="timeout" /></td>
    <td><code>integer</code></td>
    <td>An integer that represents the maximum time, in seconds, to wait for a delivery confirmation (PUBACK) from the receiving client after the message has been delivered. This parameter is only used when confirmation is set to true. If confirmation is false, this parameter is ignored. The total API response time may be higher than this value due to internal processing. Set your HTTP client timeout to a value greater than this parameter. Valid range: 1 to 15 seconds. Default value: 5 seconds.</td>
</tr>
<tr id="parameter-x-amz-mqtt5-correlation-data">
    <td><CopyableCode code="x-amz-mqtt5-correlation-data" /></td>
    <td><code>string</code></td>
    <td>The base64-encoded binary data used by the sender of the request message to identify which request the response message is for when it's received. correlationData is an HTTP header value in the API.</td>
</tr>
<tr id="parameter-x-amz-mqtt5-payload-format-indicator">
    <td><CopyableCode code="x-amz-mqtt5-payload-format-indicator" /></td>
    <td><code>string</code></td>
    <td>An Enum string value that indicates whether the payload is formatted as UTF-8. payloadFormatIndicator is an HTTP header value in the API.</td>
</tr>
<tr id="parameter-x-amz-mqtt5-user-properties">
    <td><CopyableCode code="x-amz-mqtt5-user-properties" /></td>
    <td><code>string</code></td>
    <td>A JSON string that contains an array of JSON objects. If you don't use Amazon Web Services SDK or CLI, you must encode the JSON string to base64 format before adding it to the HTTP header. userProperties is an HTTP header value in the API. For MQTT 3.1.1 clients, user properties are silently dropped. The following example userProperties parameter is a JSON string which represents two User Properties. Note that it needs to be base64-encoded: &#91;&#123;"deviceName": "alpha"&#125;, &#123;"deviceCnt": "45"&#125;&#93;</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="send_direct_message"
    values={[
        { label: 'send_direct_message', value: 'send_direct_message' }
    ]}
>
<TabItem value="send_direct_message">

Sends an MQTT message directly to a specific client identified by its client ID. SendDirectMessage targets a single client ID. The receiving client does not need to subscribe to the topic, but the receiver's policy must allow iot:Receive on the specified topic. Requires permission to access the SendDirectMessage action. For more information about messaging costs, see Amazon Web Services IoT Core pricing.

```sql
EXEC aws.iot_data.direct_messages.send_direct_message 
@client_id='{{ client_id }}' --required, 
@topic='{{ topic }}' --required, 
@region='{{ region }}' --required, 
@contentType='{{ contentType }}', 
@responseTopic='{{ responseTopic }}', 
@confirmation={{ confirmation }}, 
@timeout='{{ timeout }}', 
@x-amz-mqtt5-user-properties='{{ x-amz-mqtt5-user-properties }}', 
@x-amz-mqtt5-payload-format-indicator='{{ x-amz-mqtt5-payload-format-indicator }}', 
@x-amz-mqtt5-correlation-data='{{ x-amz-mqtt5-correlation-data }}' 
@@json=
'{
"payload": "{{ payload }}"
}'
;
```
</TabItem>
</Tabs>
