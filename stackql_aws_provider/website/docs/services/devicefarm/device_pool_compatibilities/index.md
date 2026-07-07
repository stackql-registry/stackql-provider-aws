--- 
title: device_pool_compatibilities
hide_title: false
hide_table_of_contents: false
keywords:
  - device_pool_compatibilities
  - devicefarm
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

Creates, updates, deletes, gets or lists a <code>device_pool_compatibilities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="device_pool_compatibilities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devicefarm.device_pool_compatibilities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_device_pool_compatibility"
    values={[
        { label: 'get_device_pool_compatibility', value: 'get_device_pool_compatibility' }
    ]}
>
<TabItem value="get_device_pool_compatibility">

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
    <td><CopyableCode code="compatibleDevices" /></td>
    <td><code>array</code></td>
    <td>Information about compatible devices.</td>
</tr>
<tr>
    <td><CopyableCode code="incompatibleDevices" /></td>
    <td><code>array</code></td>
    <td>Information about incompatible devices.</td>
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
    <td><a href="#get_device_pool_compatibility"><CopyableCode code="get_device_pool_compatibility" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about compatibility with a device pool.</td>
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
    defaultValue="get_device_pool_compatibility"
    values={[
        { label: 'get_device_pool_compatibility', value: 'get_device_pool_compatibility' }
    ]}
>
<TabItem value="get_device_pool_compatibility">

Gets information about compatibility with a device pool.

```sql
SELECT
compatibleDevices,
incompatibleDevices
FROM aws.devicefarm.device_pool_compatibilities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
