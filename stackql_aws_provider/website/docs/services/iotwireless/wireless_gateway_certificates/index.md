--- 
title: wireless_gateway_certificates
hide_title: false
hide_table_of_contents: false
keywords:
  - wireless_gateway_certificates
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

Creates, updates, deletes, gets or lists a <code>wireless_gateway_certificates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="wireless_gateway_certificates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotwireless.wireless_gateway_certificates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_wireless_gateway_certificate"
    values={[
        { label: 'get_wireless_gateway_certificate', value: 'get_wireless_gateway_certificate' }
    ]}
>
<TabItem value="get_wireless_gateway_certificate">

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
    <td><CopyableCode code="iot_certificate_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the certificate associated with the wireless gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="lo_ra_wan_network_server_certificate_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the certificate that is associated with the wireless gateway and used for the LoRaWANNetworkServer endpoint.</td>
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
    <td><a href="#get_wireless_gateway_certificate"><CopyableCode code="get_wireless_gateway_certificate" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the ID of the certificate that is currently associated with a wireless gateway.</td>
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
    <td>The ID of the resource to get.</td>
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
    defaultValue="get_wireless_gateway_certificate"
    values={[
        { label: 'get_wireless_gateway_certificate', value: 'get_wireless_gateway_certificate' }
    ]}
>
<TabItem value="get_wireless_gateway_certificate">

Gets the ID of the certificate that is currently associated with a wireless gateway.

```sql
SELECT
iot_certificate_id,
lo_ra_wan_network_server_certificate_id
FROM aws.iotwireless.wireless_gateway_certificates
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
