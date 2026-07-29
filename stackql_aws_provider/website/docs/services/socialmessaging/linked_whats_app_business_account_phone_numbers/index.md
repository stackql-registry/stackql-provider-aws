--- 
title: linked_whats_app_business_account_phone_numbers
hide_title: false
hide_table_of_contents: false
keywords:
  - linked_whats_app_business_account_phone_numbers
  - socialmessaging
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

Creates, updates, deletes, gets or lists a <code>linked_whats_app_business_account_phone_numbers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="linked_whats_app_business_account_phone_numbers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.socialmessaging.linked_whats_app_business_account_phone_numbers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_linked_whats_app_business_account_phone_number"
    values={[
        { label: 'get_linked_whats_app_business_account_phone_number', value: 'get_linked_whats_app_business_account_phone_number' }
    ]}
>
<TabItem value="get_linked_whats_app_business_account_phone_number">

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
    <td><CopyableCode code="linked_whats_app_business_account_id" /></td>
    <td><code>string</code></td>
    <td>The WABA identifier linked to the phone number, formatted as waba-01234567890123456789012345678901. (pattern: &lt;code&gt;.*(^waba-.*$)|(^arn:.*:waba/&#91;0-9a-zA-Z&#93;+$).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="phone_number" /></td>
    <td><code>object</code></td>
    <td>The details of your WhatsApp phone number.</td>
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
    <td><a href="#get_linked_whats_app_business_account_phone_number"><CopyableCode code="get_linked_whats_app_business_account_phone_number" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve the WABA account id and phone number details of a WhatsApp business account phone number.</td>
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
    <td>The unique identifier of the phone number. Phone number identifiers are formatted as phone-number-id-01234567890123456789012345678901. Use GetLinkedWhatsAppBusinessAccount to find a phone number's id.</td>
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
    defaultValue="get_linked_whats_app_business_account_phone_number"
    values={[
        { label: 'get_linked_whats_app_business_account_phone_number', value: 'get_linked_whats_app_business_account_phone_number' }
    ]}
>
<TabItem value="get_linked_whats_app_business_account_phone_number">

Retrieve the WABA account id and phone number details of a WhatsApp business account phone number.

```sql
SELECT
linked_whats_app_business_account_id,
phone_number
FROM aws.socialmessaging.linked_whats_app_business_account_phone_numbers
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
