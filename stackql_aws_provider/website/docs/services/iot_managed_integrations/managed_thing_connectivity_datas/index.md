--- 
title: managed_thing_connectivity_datas
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_thing_connectivity_datas
  - iot_managed_integrations
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

Creates, updates, deletes, gets or lists a <code>managed_thing_connectivity_datas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="managed_thing_connectivity_datas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_managed_integrations.managed_thing_connectivity_datas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_managed_thing_connectivity_data"
    values={[
        { label: 'get_managed_thing_connectivity_data', value: 'get_managed_thing_connectivity_data' }
    ]}
>
<TabItem value="get_managed_thing_connectivity_data">

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
    <td><CopyableCode code="connected" /></td>
    <td><code>boolean</code></td>
    <td>The connectivity status for a managed thing.</td>
</tr>
<tr>
    <td><CopyableCode code="disconnect_reason" /></td>
    <td><code>string</code></td>
    <td>The reason for the connectivity disconnect with the managed thing. (AUTH_ERROR, CLIENT_INITIATED_DISCONNECT, CLIENT_ERROR, CONNECTION_LOST, DUPLICATE_CLIENTID, FORBIDDEN_ACCESS, MQTT_KEEP_ALIVE_TIMEOUT, SERVER_ERROR, SERVER_INITIATED_DISCONNECT, THROTTLED, WEBSOCKET_TTL_EXPIRATION, CUSTOMAUTH_TTL_EXPIRATION, UNKNOWN, NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="managed_thing_id" /></td>
    <td><code>string</code></td>
    <td>The id of a managed thing. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp value of when the connectivity status for a managed thing was last taken.</td>
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
    <td><a href="#get_managed_thing_connectivity_data"><CopyableCode code="get_managed_thing_connectivity_data" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the connectivity status of a managed thing.</td>
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
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of a managed thing.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_managed_thing_connectivity_data"
    values={[
        { label: 'get_managed_thing_connectivity_data', value: 'get_managed_thing_connectivity_data' }
    ]}
>
<TabItem value="get_managed_thing_connectivity_data">

Get the connectivity status of a managed thing.

```sql
SELECT
connected,
disconnect_reason,
managed_thing_id,
timestamp
FROM aws.iot_managed_integrations.managed_thing_connectivity_datas
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
