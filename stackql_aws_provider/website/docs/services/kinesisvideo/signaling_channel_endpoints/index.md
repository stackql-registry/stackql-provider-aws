--- 
title: signaling_channel_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - signaling_channel_endpoints
  - kinesisvideo
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

Creates, updates, deletes, gets or lists a <code>signaling_channel_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="signaling_channel_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesisvideo.signaling_channel_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_signaling_channel_endpoint"
    values={[
        { label: 'get_signaling_channel_endpoint', value: 'get_signaling_channel_endpoint' }
    ]}
>
<TabItem value="get_signaling_channel_endpoint">

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
    <td><CopyableCode code="ResourceEndpointList" /></td>
    <td><code>array</code></td>
    <td>A list of endpoints for the specified signaling channel.</td>
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
    <td><a href="#get_signaling_channel_endpoint"><CopyableCode code="get_signaling_channel_endpoint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides an endpoint for the specified signaling channel to send and receive messages. This API uses the SingleMasterChannelEndpointConfiguration input parameter, which consists of the Protocols and Role properties. Protocols is used to determine the communication mechanism. For example, if you specify WSS as the protocol, this API produces a secure websocket endpoint. If you specify HTTPS as the protocol, this API generates an HTTPS endpoint. If you specify WEBRTC as the protocol, but the signaling channel isn't configured for ingestion, you will receive the error InvalidArgumentException. Role determines the messaging permissions. A MASTER role results in this API generating an endpoint that a client can use to communicate with any of the viewers on the channel. A VIEWER role results in this API generating an endpoint that a client can use to communicate only with a MASTER.</td>
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

## `SELECT` examples

<Tabs
    defaultValue="get_signaling_channel_endpoint"
    values={[
        { label: 'get_signaling_channel_endpoint', value: 'get_signaling_channel_endpoint' }
    ]}
>
<TabItem value="get_signaling_channel_endpoint">

Provides an endpoint for the specified signaling channel to send and receive messages. This API uses the SingleMasterChannelEndpointConfiguration input parameter, which consists of the Protocols and Role properties. Protocols is used to determine the communication mechanism. For example, if you specify WSS as the protocol, this API produces a secure websocket endpoint. If you specify HTTPS as the protocol, this API generates an HTTPS endpoint. If you specify WEBRTC as the protocol, but the signaling channel isn't configured for ingestion, you will receive the error InvalidArgumentException. Role determines the messaging permissions. A MASTER role results in this API generating an endpoint that a client can use to communicate with any of the viewers on the channel. A VIEWER role results in this API generating an endpoint that a client can use to communicate only with a MASTER.

```sql
SELECT
ResourceEndpointList
FROM aws.kinesisvideo.signaling_channel_endpoints
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
