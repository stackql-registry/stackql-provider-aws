--- 
title: publishes
hide_title: false
hide_table_of_contents: false
keywords:
  - publishes
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

Creates, updates, deletes, gets or lists a <code>publishes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="publishes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_data.publishes" /></td></tr>
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
    <td><a href="#publish"><CopyableCode code="publish" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-topic"><code>topic</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-qos"><code>qos</code></a>, <a href="#parameter-retain"><code>retain</code></a>, <a href="#parameter-x-amz-mqtt5-user-properties"><code>x-amz-mqtt5-user-properties</code></a>, <a href="#parameter-x-amz-mqtt5-payload-format-indicator"><code>x-amz-mqtt5-payload-format-indicator</code></a>, <a href="#parameter-contentType"><code>contentType</code></a>, <a href="#parameter-responseTopic"><code>responseTopic</code></a>, <a href="#parameter-x-amz-mqtt5-correlation-data"><code>x-amz-mqtt5-correlation-data</code></a>, <a href="#parameter-messageExpiry"><code>messageExpiry</code></a></td>
    <td>Publishes an MQTT message. Requires permission to access the Publish action. For more information about MQTT messages, see MQTT Protocol in the IoT Developer Guide. For more information about messaging costs, see Amazon Web Services IoT Core pricing - Messaging.</td>
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
    <td>The name of the MQTT topic.</td>
</tr>
<tr id="parameter-contentType">
    <td><CopyableCode code="contentType" /></td>
    <td><code>string</code></td>
    <td>A UTF-8 encoded string that describes the content of the publishing message.</td>
</tr>
<tr id="parameter-messageExpiry">
    <td><CopyableCode code="messageExpiry" /></td>
    <td><code>integer (int64)</code></td>
    <td>A user-defined integer value that represents the message expiry interval in seconds. If absent, the message doesn't expire. For more information about the limits of messageExpiry, see Amazon Web Services IoT Core message broker and protocol limits and quotas from the Amazon Web Services Reference Guide.</td>
</tr>
<tr id="parameter-qos">
    <td><CopyableCode code="qos" /></td>
    <td><code>integer</code></td>
    <td>The Quality of Service (QoS) level. The default QoS level is 0.</td>
</tr>
<tr id="parameter-responseTopic">
    <td><CopyableCode code="responseTopic" /></td>
    <td><code>string</code></td>
    <td>A UTF-8 encoded string that's used as the topic name for a response message. The response topic is used to describe the topic which the receiver should publish to as part of the request-response flow. The topic must not contain wildcard characters.</td>
</tr>
<tr id="parameter-retain">
    <td><CopyableCode code="retain" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value that determines whether to set the RETAIN flag when the message is published. Setting the RETAIN flag causes the message to be retained and sent to new subscribers to the topic. Valid values: true | false Default value: false</td>
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
    <td>A JSON string that contains an array of JSON objects. If you don’t use Amazon Web Services SDK or CLI, you must encode the JSON string to base64 format before adding it to the HTTP header. userProperties is an HTTP header value in the API. The following example userProperties parameter is a JSON string which represents two User Properties. Note that it needs to be base64-encoded: &#91;&#123;"deviceName": "alpha"&#125;, &#123;"deviceCnt": "45"&#125;&#93;</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="publish"
    values={[
        { label: 'publish', value: 'publish' }
    ]}
>
<TabItem value="publish">

Publishes an MQTT message. Requires permission to access the Publish action. For more information about MQTT messages, see MQTT Protocol in the IoT Developer Guide. For more information about messaging costs, see Amazon Web Services IoT Core pricing - Messaging.

```sql
EXEC aws.iot_data.publishes.publish 
@topic='{{ topic }}' --required, 
@region='{{ region }}' --required, 
@qos='{{ qos }}', 
@retain={{ retain }}, 
@x-amz-mqtt5-user-properties='{{ x-amz-mqtt5-user-properties }}', 
@x-amz-mqtt5-payload-format-indicator='{{ x-amz-mqtt5-payload-format-indicator }}', 
@contentType='{{ contentType }}', 
@responseTopic='{{ responseTopic }}', 
@x-amz-mqtt5-correlation-data='{{ x-amz-mqtt5-correlation-data }}', 
@messageExpiry='{{ messageExpiry }}' 
@@json=
'{
"payload": "{{ payload }}"
}'
;
```
</TabItem>
</Tabs>
