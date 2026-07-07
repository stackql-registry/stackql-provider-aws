--- 
title: connections
hide_title: false
hide_table_of_contents: false
keywords:
  - connections
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

Creates, updates, deletes, gets or lists a <code>connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_data.connections" /></td></tr>
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
    <td><a href="#delete_connection"><CopyableCode code="delete_connection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-client_id"><code>client_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-cleanSession"><code>cleanSession</code></a>, <a href="#parameter-preventWillMessage"><code>preventWillMessage</code></a></td>
    <td>Disconnects a connected MQTT client from Amazon Web Services IoT Core. When you disconnect a client, Amazon Web Services IoT Core closes the client's network connection and optionally cleans the session state.</td>
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
    <td>The unique identifier of the MQTT client to disconnect. The client ID can't start with a dollar sign ($).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-cleanSession">
    <td><CopyableCode code="cleanSession" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether to remove the client's session state when disconnecting. Set to TRUE to delete all session information, including subscriptions and queued messages. Set to FALSE to preserve the session state. By default, this is set to FALSE (preserves the session state).</td>
</tr>
<tr id="parameter-preventWillMessage">
    <td><CopyableCode code="preventWillMessage" /></td>
    <td><code>boolean</code></td>
    <td>Controls if Amazon Web Services IoT Core publishes the client's Last Will and Testament (LWT) message upon disconnection. Set to TRUE to prevent publishing the LWT message. Set to FALSE to allow publishing. By default, this is set to FALSE (allows publishing the LWT message).</td>
</tr>
</tbody>
</table>

## `DELETE` examples

<Tabs
    defaultValue="delete_connection"
    values={[
        { label: 'delete_connection', value: 'delete_connection' }
    ]}
>
<TabItem value="delete_connection">

Disconnects a connected MQTT client from Amazon Web Services IoT Core. When you disconnect a client, Amazon Web Services IoT Core closes the client's network connection and optionally cleans the session state.

```sql
DELETE FROM aws.iot_data.connections
WHERE client_id = '{{ client_id }}' --required
AND region = '{{ region }}' --required
AND cleanSession = '{{ cleanSession }}'
AND preventWillMessage = '{{ preventWillMessage }}'
;
```
</TabItem>
</Tabs>
