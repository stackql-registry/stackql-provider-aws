--- 
title: bundles
hide_title: false
hide_table_of_contents: false
keywords:
  - bundles
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

Creates, updates, deletes, gets or lists a <code>bundles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bundles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.bundles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bundles"
    values={[
        { label: 'get_bundles', value: 'get_bundles' }
    ]}
>
<TabItem value="get_bundles">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A friendly name for the bundle (Micro).</td>
</tr>
<tr>
    <td><CopyableCode code="bundleId" /></td>
    <td><code>string</code></td>
    <td>The bundle ID (micro_x_x). (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cpuCount" /></td>
    <td><code>integer</code></td>
    <td>The number of vCPUs included in the bundle (2).</td>
</tr>
<tr>
    <td><CopyableCode code="diskSizeInGb" /></td>
    <td><code>integer</code></td>
    <td>The size of the SSD (30).</td>
</tr>
<tr>
    <td><CopyableCode code="instanceType" /></td>
    <td><code>string</code></td>
    <td>The instance type (micro).</td>
</tr>
<tr>
    <td><CopyableCode code="isActive" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value indicating whether the bundle is active.</td>
</tr>
<tr>
    <td><CopyableCode code="power" /></td>
    <td><code>integer</code></td>
    <td>A numeric value that represents the power of the bundle (500). You can use the bundle's power value in conjunction with a blueprint's minimum power value to determine whether the blueprint will run on the bundle. For example, you need a bundle with a power value of 500 or more to create an instance that uses a blueprint with a minimum power value of 500.</td>
</tr>
<tr>
    <td><CopyableCode code="price" /></td>
    <td><code>number (float)</code></td>
    <td>The price in US dollars (5.0) of the bundle.</td>
</tr>
<tr>
    <td><CopyableCode code="publicIpv4AddressCount" /></td>
    <td><code>integer</code></td>
    <td>An integer that indicates the public ipv4 address count included in the bundle, the value is either 0 or 1.</td>
</tr>
<tr>
    <td><CopyableCode code="ramSizeInGb" /></td>
    <td><code>number (float)</code></td>
    <td>The amount of RAM in GB (2.0).</td>
</tr>
<tr>
    <td><CopyableCode code="supportedAppCategories" /></td>
    <td><code>array</code></td>
    <td>Virtual computer blueprints that are supported by a Lightsail for Research bundle. This parameter only applies to Lightsail for Research resources.</td>
</tr>
<tr>
    <td><CopyableCode code="supportedPlatforms" /></td>
    <td><code>array</code></td>
    <td>The operating system platform (Linux/Unix-based or Windows Server-based) that the bundle supports. You can only launch a WINDOWS bundle on a blueprint that supports the WINDOWS platform. LINUX_UNIX blueprints require a LINUX_UNIX bundle.</td>
</tr>
<tr>
    <td><CopyableCode code="transferPerMonthInGb" /></td>
    <td><code>integer</code></td>
    <td>The data transfer rate per month in GB (2000).</td>
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
    <td><a href="#get_bundles"><CopyableCode code="get_bundles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the bundles that you can apply to an Amazon Lightsail instance when you create it. A bundle describes the specifications of an instance, such as the monthly cost, amount of memory, the number of vCPUs, amount of storage space, and monthly network data transfer quota. Bundles are referred to as instance plans in the Lightsail console.</td>
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
    defaultValue="get_bundles"
    values={[
        { label: 'get_bundles', value: 'get_bundles' }
    ]}
>
<TabItem value="get_bundles">

Returns the bundles that you can apply to an Amazon Lightsail instance when you create it. A bundle describes the specifications of an instance, such as the monthly cost, amount of memory, the number of vCPUs, amount of storage space, and monthly network data transfer quota. Bundles are referred to as instance plans in the Lightsail console.

```sql
SELECT
name,
bundleId,
cpuCount,
diskSizeInGb,
instanceType,
isActive,
power,
price,
publicIpv4AddressCount,
ramSizeInGb,
supportedAppCategories,
supportedPlatforms,
transferPerMonthInGb
FROM aws.lightsail.bundles
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
