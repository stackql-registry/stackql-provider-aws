--- 
title: ip_address_types
hide_title: false
hide_table_of_contents: false
keywords:
  - ip_address_types
  - lightsail
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

Creates, updates, deletes, gets or lists an <code>ip_address_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ip_address_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.ip_address_types" /></td></tr>
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
    <td><a href="#set_ip_address_type"><CopyableCode code="set_ip_address_type" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceType"><code>resourceType</code></a>, <a href="#parameter-resourceName"><code>resourceName</code></a>, <a href="#parameter-ipAddressType"><code>ipAddressType</code></a></td>
    <td></td>
    <td>Sets the IP address type for an Amazon Lightsail resource. Use this action to enable dual-stack for a resource, which enables IPv4 and IPv6 for the specified resource. Alternately, you can use this action to disable dual-stack, and enable IPv4 only.</td>
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

## `UPDATE` examples

<Tabs
    defaultValue="set_ip_address_type"
    values={[
        { label: 'set_ip_address_type', value: 'set_ip_address_type' }
    ]}
>
<TabItem value="set_ip_address_type">

Sets the IP address type for an Amazon Lightsail resource. Use this action to enable dual-stack for a resource, which enables IPv4 and IPv6 for the specified resource. Alternately, you can use this action to disable dual-stack, and enable IPv4 only.

```sql
UPDATE aws.lightsail.ip_address_types
SET 
resourceType = '{{ resourceType }}',
resourceName = '{{ resourceName }}',
ipAddressType = '{{ ipAddressType }}',
acceptBundleUpdate = {{ acceptBundleUpdate }}
WHERE 
region = '{{ region }}' --required
AND resourceType = '{{ resourceType }}' --required
AND resourceName = '{{ resourceName }}' --required
AND ipAddressType = '{{ ipAddressType }}' --required
RETURNING
operations;
```
</TabItem>
</Tabs>
