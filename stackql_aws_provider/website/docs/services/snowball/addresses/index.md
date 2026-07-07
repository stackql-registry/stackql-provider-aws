--- 
title: addresses
hide_title: false
hide_table_of_contents: false
keywords:
  - addresses
  - snowball
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

Creates, updates, deletes, gets or lists an <code>addresses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="addresses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.snowball.addresses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_addresses"
    values={[
        { label: 'describe_addresses', value: 'describe_addresses' }
    ]}
>
<TabItem value="describe_addresses">

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
    <td><CopyableCode code="AddressId" /></td>
    <td><code>string</code></td>
    <td>The unique ID for an address. (pattern: &lt;code&gt;ADID&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="City" /></td>
    <td><code>string</code></td>
    <td>The city in an address that a Snow device is to be delivered to. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Company" /></td>
    <td><code>string</code></td>
    <td>The name of the company to receive a Snow device at an address. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Country" /></td>
    <td><code>string</code></td>
    <td>The country in an address that a Snow device is to be delivered to. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="IsRestricted" /></td>
    <td><code>boolean</code></td>
    <td>If the address you are creating is a primary address, then set this option to true. This field is not supported in most regions.</td>
</tr>
<tr>
    <td><CopyableCode code="Landmark" /></td>
    <td><code>string</code></td>
    <td>This field is no longer used and the value is ignored. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of a person to receive a Snow device at an address. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PhoneNumber" /></td>
    <td><code>string</code></td>
    <td>The phone number associated with an address that a Snow device is to be delivered to. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PostalCode" /></td>
    <td><code>string</code></td>
    <td>The postal code in an address that a Snow device is to be delivered to. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PrefectureOrDistrict" /></td>
    <td><code>string</code></td>
    <td>This field is no longer used and the value is ignored. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="StateOrProvince" /></td>
    <td><code>string</code></td>
    <td>The state or province in an address that a Snow device is to be delivered to. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Street1" /></td>
    <td><code>string</code></td>
    <td>The first line in a street address that a Snow device is to be delivered to. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Street2" /></td>
    <td><code>string</code></td>
    <td>The second line in a street address that a Snow device is to be delivered to. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Street3" /></td>
    <td><code>string</code></td>
    <td>The third line in a street address that a Snow device is to be delivered to. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>Differentiates between delivery address and pickup address in the customer account. Provided at job creation. (CUST_PICKUP, AWS_SHIP)</td>
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
    <td><a href="#describe_addresses"><CopyableCode code="describe_addresses" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a specified number of ADDRESS objects. Calling this API in one of the US regions will return addresses from the list of all addresses associated with this account in all US regions.</td>
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
    defaultValue="describe_addresses"
    values={[
        { label: 'describe_addresses', value: 'describe_addresses' }
    ]}
>
<TabItem value="describe_addresses">

Returns a specified number of ADDRESS objects. Calling this API in one of the US regions will return addresses from the list of all addresses associated with this account in all US regions.

```sql
SELECT
AddressId,
City,
Company,
Country,
IsRestricted,
Landmark,
Name,
PhoneNumber,
PostalCode,
PrefectureOrDistrict,
StateOrProvince,
Street1,
Street2,
Street3,
Type
FROM aws.snowball.addresses
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
