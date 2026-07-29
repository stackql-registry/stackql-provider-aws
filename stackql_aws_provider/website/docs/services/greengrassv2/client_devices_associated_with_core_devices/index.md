--- 
title: client_devices_associated_with_core_devices
hide_title: false
hide_table_of_contents: false
keywords:
  - client_devices_associated_with_core_devices
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

Creates, updates, deletes, gets or lists a <code>client_devices_associated_with_core_devices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="client_devices_associated_with_core_devices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.greengrassv2.client_devices_associated_with_core_devices" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_client_devices_associated_with_core_device"
    values={[
        { label: 'list_client_devices_associated_with_core_device', value: 'list_client_devices_associated_with_core_device' }
    ]}
>
<TabItem value="list_client_devices_associated_with_core_device">

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
    <td><CopyableCode code="association_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the client device was associated, expressed in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="thing_name" /></td>
    <td><code>string</code></td>
    <td>The name of the IoT thing that represents the associated client device.</td>
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
    <td><a href="#list_client_devices_associated_with_core_device"><CopyableCode code="list_client_devices_associated_with_core_device" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-core_device_thing_name"><code>core_device_thing_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves a paginated list of client devices that are associated with a core device.</td>
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
<tr id="parameter-core_device_thing_name">
    <td><CopyableCode code="core_device_thing_name" /></td>
    <td><code>string</code></td>
    <td>The name of the core device. This is also the name of the IoT thing.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned per paginated request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to be used for the next set of paginated results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_client_devices_associated_with_core_device"
    values={[
        { label: 'list_client_devices_associated_with_core_device', value: 'list_client_devices_associated_with_core_device' }
    ]}
>
<TabItem value="list_client_devices_associated_with_core_device">

Retrieves a paginated list of client devices that are associated with a core device.

```sql
SELECT
association_timestamp,
thing_name
FROM aws.greengrassv2.client_devices_associated_with_core_devices
WHERE core_device_thing_name = '{{ core_device_thing_name }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
