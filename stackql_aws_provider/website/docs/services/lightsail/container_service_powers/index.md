--- 
title: container_service_powers
hide_title: false
hide_table_of_contents: false
keywords:
  - container_service_powers
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

Creates, updates, deletes, gets or lists a <code>container_service_powers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="container_service_powers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.container_service_powers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_container_service_powers"
    values={[
        { label: 'get_container_service_powers', value: 'get_container_service_powers' }
    ]}
>
<TabItem value="get_container_service_powers">

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
    <td><CopyableCode code="powers" /></td>
    <td><code>array</code></td>
    <td>An array of objects that describe the powers that can be specified for a container service.</td>
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
    <td><a href="#get_container_service_powers"><CopyableCode code="get_container_service_powers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the list of powers that can be specified for your Amazon Lightsail container services. The power specifies the amount of memory, the number of vCPUs, and the base price of the container service.</td>
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
    defaultValue="get_container_service_powers"
    values={[
        { label: 'get_container_service_powers', value: 'get_container_service_powers' }
    ]}
>
<TabItem value="get_container_service_powers">

Returns the list of powers that can be specified for your Amazon Lightsail container services. The power specifies the amount of memory, the number of vCPUs, and the base price of the container service.

```sql
SELECT
powers
FROM aws.lightsail.container_service_powers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
