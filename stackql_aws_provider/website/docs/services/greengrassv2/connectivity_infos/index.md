--- 
title: connectivity_infos
hide_title: false
hide_table_of_contents: false
keywords:
  - connectivity_infos
  - greengrassv2
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

Creates, updates, deletes, gets or lists a <code>connectivity_infos</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connectivity_infos" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.greengrassv2.connectivity_infos" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_connectivity_info"
    values={[
        { label: 'get_connectivity_info', value: 'get_connectivity_info' }
    ]}
>
<TabItem value="get_connectivity_info">

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
    <td><CopyableCode code="connectivity_info" /></td>
    <td><code>array</code></td>
    <td>The connectivity information for the core device.</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>A message about the connectivity information request.</td>
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
    <td><a href="#get_connectivity_info"><CopyableCode code="get_connectivity_info" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-thing_name"><code>thing_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves connectivity information for a Greengrass core device. Connectivity information includes endpoints and ports where client devices can connect to an MQTT broker on the core device. When a client device calls the IoT Greengrass discovery API, IoT Greengrass returns connectivity information for all of the core devices where the client device can connect. For more information, see Connect client devices to core devices in the IoT Greengrass Version 2 Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_connectivity_info"><CopyableCode code="update_connectivity_info" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-thing_name"><code>thing_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-connectivityInfo"><code>connectivityInfo</code></a></td>
    <td></td>
    <td>Updates connectivity information for a Greengrass core device. Connectivity information includes endpoints and ports where client devices can connect to an MQTT broker on the core device. When a client device calls the IoT Greengrass discovery API, IoT Greengrass returns connectivity information for all of the core devices where the client device can connect. For more information, see Connect client devices to core devices in the IoT Greengrass Version 2 Developer Guide.</td>
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
<tr id="parameter-thing_name">
    <td><CopyableCode code="thing_name" /></td>
    <td><code>string</code></td>
    <td>The name of the core device. This is also the name of the IoT thing.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_connectivity_info"
    values={[
        { label: 'get_connectivity_info', value: 'get_connectivity_info' }
    ]}
>
<TabItem value="get_connectivity_info">

Retrieves connectivity information for a Greengrass core device. Connectivity information includes endpoints and ports where client devices can connect to an MQTT broker on the core device. When a client device calls the IoT Greengrass discovery API, IoT Greengrass returns connectivity information for all of the core devices where the client device can connect. For more information, see Connect client devices to core devices in the IoT Greengrass Version 2 Developer Guide.

```sql
SELECT
connectivity_info,
message
FROM aws.greengrassv2.connectivity_infos
WHERE thing_name = '{{ thing_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_connectivity_info"
    values={[
        { label: 'update_connectivity_info', value: 'update_connectivity_info' }
    ]}
>
<TabItem value="update_connectivity_info">

Updates connectivity information for a Greengrass core device. Connectivity information includes endpoints and ports where client devices can connect to an MQTT broker on the core device. When a client device calls the IoT Greengrass discovery API, IoT Greengrass returns connectivity information for all of the core devices where the client device can connect. For more information, see Connect client devices to core devices in the IoT Greengrass Version 2 Developer Guide.

```sql
UPDATE aws.greengrassv2.connectivity_infos
SET 
connectivityInfo = '{{ connectivityInfo }}'
WHERE 
thing_name = '{{ thing_name }}' --required
AND region = '{{ region }}' --required
AND connectivityInfo = '{{ connectivityInfo }}' --required
RETURNING
message,
version;
```
</TabItem>
</Tabs>
