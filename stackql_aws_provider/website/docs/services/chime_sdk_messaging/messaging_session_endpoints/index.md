--- 
title: messaging_session_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - messaging_session_endpoints
  - chime_sdk_messaging
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

Creates, updates, deletes, gets or lists a <code>messaging_session_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="messaging_session_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_messaging.messaging_session_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_messaging_session_endpoint"
    values={[
        { label: 'get_messaging_session_endpoint', value: 'get_messaging_session_endpoint' }
    ]}
>
<TabItem value="get_messaging_session_endpoint">

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
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>The endpoint to which you establish a websocket connection.</td>
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
    <td><a href="#get_messaging_session_endpoint"><CopyableCode code="get_messaging_session_endpoint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-network-type"><code>network-type</code></a></td>
    <td>The details of the endpoint for the messaging session.</td>
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
<tr id="parameter-network-type">
    <td><CopyableCode code="network-type" /></td>
    <td><code>string</code></td>
    <td>The type of network for the messaging session endpoint. Either IPv4 only or dual-stack (IPv4 and IPv6).</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_messaging_session_endpoint"
    values={[
        { label: 'get_messaging_session_endpoint', value: 'get_messaging_session_endpoint' }
    ]}
>
<TabItem value="get_messaging_session_endpoint">

The details of the endpoint for the messaging session.

```sql
SELECT
url
FROM aws.chime_sdk_messaging.messaging_session_endpoints
WHERE region = '{{ region }}' -- required
AND `network-type` = '{{ network-type }}'
;
```
</TabItem>
</Tabs>
