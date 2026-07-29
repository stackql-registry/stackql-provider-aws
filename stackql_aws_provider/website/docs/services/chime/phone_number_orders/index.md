--- 
title: phone_number_orders
hide_title: false
hide_table_of_contents: false
keywords:
  - phone_number_orders
  - chime
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

Creates, updates, deletes, gets or lists a <code>phone_number_orders</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="phone_number_orders" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime.phone_number_orders" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_phone_number_order"
    values={[
        { label: 'get_phone_number_order', value: 'get_phone_number_order' },
        { label: 'list_phone_number_orders', value: 'list_phone_number_orders' }
    ]}
>
<TabItem value="get_phone_number_order">

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
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The phone number order creation time stamp, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="ordered_phone_numbers" /></td>
    <td><code>array</code></td>
    <td>The ordered phone number details, such as the phone number in E.164 format and the phone number status.</td>
</tr>
<tr>
    <td><CopyableCode code="phone_number_order_id" /></td>
    <td><code>string</code></td>
    <td>The phone number order ID. (pattern: &lt;code&gt;&#91;a-fA-F0-9&#93;&#123;8&#125;(?:-&#91;a-fA-F0-9&#93;&#123;4&#125;)&#123;3&#125;-&#91;a-fA-F0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="product_type" /></td>
    <td><code>string</code></td>
    <td>The phone number order product type. (BusinessCalling, VoiceConnector, SipMediaApplicationDialIn)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the phone number order. (Processing, Successful, Failed, Partial)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The updated phone number order time stamp, in ISO 8601 format.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_phone_number_orders">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="phone_number_orders" /></td>
    <td><code>array</code></td>
    <td>The phone number order details.</td>
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
    <td><a href="#get_phone_number_order"><CopyableCode code="get_phone_number_order" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-phone_number_order_id"><code>phone_number_order_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details for the specified phone number order, such as the order creation timestamp, phone numbers in E.164 format, product type, and order status.</td>
</tr>
<tr>
    <td><a href="#list_phone_number_orders"><CopyableCode code="list_phone_number_orders" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists the phone number orders for the administrator's Amazon Chime account.</td>
</tr>
<tr>
    <td><a href="#create_phone_number_order"><CopyableCode code="create_phone_number_order" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProductType"><code>ProductType</code></a>, <a href="#parameter-E164PhoneNumbers"><code>E164PhoneNumbers</code></a></td>
    <td></td>
    <td>Creates an order for phone numbers to be provisioned. For toll-free numbers, you cannot use the Amazon Chime Business Calling product type. For numbers outside the U.S., you must use the Amazon Chime SIP Media Application Dial-In product type.</td>
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
<tr id="parameter-phone_number_order_id">
    <td><CopyableCode code="phone_number_order_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the phone number order.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_phone_number_order"
    values={[
        { label: 'get_phone_number_order', value: 'get_phone_number_order' },
        { label: 'list_phone_number_orders', value: 'list_phone_number_orders' }
    ]}
>
<TabItem value="get_phone_number_order">

Retrieves details for the specified phone number order, such as the order creation timestamp, phone numbers in E.164 format, product type, and order status.

```sql
SELECT
created_timestamp,
ordered_phone_numbers,
phone_number_order_id,
product_type,
status,
updated_timestamp
FROM aws.chime.phone_number_orders
WHERE phone_number_order_id = '{{ phone_number_order_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_phone_number_orders">

Lists the phone number orders for the administrator's Amazon Chime account.

```sql
SELECT
next_token,
phone_number_orders
FROM aws.chime.phone_number_orders
WHERE region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_phone_number_order"
    values={[
        { label: 'create_phone_number_order', value: 'create_phone_number_order' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_phone_number_order">

Creates an order for phone numbers to be provisioned. For toll-free numbers, you cannot use the Amazon Chime Business Calling product type. For numbers outside the U.S., you must use the Amazon Chime SIP Media Application Dial-In product type.

```sql
INSERT INTO aws.chime.phone_number_orders (
ProductType,
E164PhoneNumbers,
region
)
SELECT 
'{{ ProductType }}' /* required */,
'{{ E164PhoneNumbers }}' /* required */,
'{{ region }}'
RETURNING
phone_number_order
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: phone_number_orders
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the phone_number_orders resource.
    - name: ProductType
      value: "{{ ProductType }}"
      valid_values: ['BusinessCalling', 'VoiceConnector', 'SipMediaApplicationDialIn']
    - name: E164PhoneNumbers
      value:
        - "{{ E164PhoneNumbers }}"
`}</CodeBlock>

</TabItem>
</Tabs>
