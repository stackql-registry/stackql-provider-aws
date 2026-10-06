--- 
title: bulk_disassociate_wireless_device_from_multicast_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - bulk_disassociate_wireless_device_from_multicast_groups
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

Creates, updates, deletes, gets or lists a <code>bulk_disassociate_wireless_device_from_multicast_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bulk_disassociate_wireless_device_from_multicast_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotwireless.bulk_disassociate_wireless_device_from_multicast_groups" /></td></tr>
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
    <td><a href="#start_bulk_disassociate_wireless_device_from_multicast_group"><CopyableCode code="start_bulk_disassociate_wireless_device_from_multicast_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Starts a bulk disassociatin of all qualifying wireless devices from a multicast group.</td>
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
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="start_bulk_disassociate_wireless_device_from_multicast_group"
    values={[
        { label: 'start_bulk_disassociate_wireless_device_from_multicast_group', value: 'start_bulk_disassociate_wireless_device_from_multicast_group' }
    ]}
>
<TabItem value="start_bulk_disassociate_wireless_device_from_multicast_group">

Starts a bulk disassociatin of all qualifying wireless devices from a multicast group.

```sql
EXEC aws.iotwireless.bulk_disassociate_wireless_device_from_multicast_groups.start_bulk_disassociate_wireless_device_from_multicast_group 
@id='{{ id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"QueryString": "{{ QueryString }}", 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
</Tabs>
