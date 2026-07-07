--- 
title: address
hide_title: false
hide_table_of_contents: false
keywords:
  - address
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

Creates, updates, deletes, gets or lists an <code>address</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="address" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.snowball.address" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_address"
    values={[
        { label: 'describe_address', value: 'describe_address' }
    ]}
>
<TabItem value="describe_address">

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
    <td><a href="#describe_address"><CopyableCode code="describe_address" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Takes an AddressId and returns specific details about that address in the form of an Address object.</td>
</tr>
<tr>
    <td><a href="#create_address"><CopyableCode code="create_address" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an address for a Snow device to be shipped to. In most regions, addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. If the address is invalid or unsupported, then an exception is thrown. If providing an address as a JSON file through the cli-input-json option, include the full file path. For example, --cli-input-json file:​//create-address.json.</td>
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
    defaultValue="describe_address"
    values={[
        { label: 'describe_address', value: 'describe_address' }
    ]}
>
<TabItem value="describe_address">

Takes an AddressId and returns specific details about that address in the form of an Address object.

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
FROM aws.snowball.address
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_address"
    values={[
        { label: 'create_address', value: 'create_address' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_address">

Creates an address for a Snow device to be shipped to. In most regions, addresses are validated at the time of creation. The address you provide must be located within the serviceable area of your region. If the address is invalid or unsupported, then an exception is thrown. If providing an address as a JSON file through the cli-input-json option, include the full file path. For example, --cli-input-json file://create-address.json.

```sql
INSERT INTO aws.snowball.address (
Address,
region
)
SELECT 
'{{ Address }}',
'{{ region }}'
RETURNING
AddressId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: address
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the address resource.
    - name: Address
      description: |
        The address that you want the Snow device shipped to.
      value:
        AddressId: "{{ AddressId }}"
        Name: "{{ Name }}"
        Company: "{{ Company }}"
        Street1: "{{ Street1 }}"
        Street2: "{{ Street2 }}"
        Street3: "{{ Street3 }}"
        City: "{{ City }}"
        StateOrProvince: "{{ StateOrProvince }}"
        PrefectureOrDistrict: "{{ PrefectureOrDistrict }}"
        Landmark: "{{ Landmark }}"
        Country: "{{ Country }}"
        PostalCode: "{{ PostalCode }}"
        PhoneNumber: "{{ PhoneNumber }}"
        IsRestricted: {{ IsRestricted }}
        Type: "{{ Type }}"
`}</CodeBlock>

</TabItem>
</Tabs>
