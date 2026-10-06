--- 
title: phone_numbers
hide_title: false
hide_table_of_contents: false
keywords:
  - phone_numbers
  - sns
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

Creates, updates, deletes, gets or lists a <code>phone_numbers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="phone_numbers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sns.phone_numbers" /></td></tr>
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
    <td><a href="#check_if_phone_number_is_opted_out"><CopyableCode code="check_if_phone_number_is_opted_out" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-phoneNumber"><code>phoneNumber</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Accepts a phone number and indicates whether the phone holder has opted out of receiving SMS messages from your Amazon Web Services account. You cannot send SMS messages to a number that is opted out. To resume sending messages, you can opt in the number by using the OptInPhoneNumber action.</td>
</tr>
<tr>
    <td><a href="#opt_in_phone_number"><CopyableCode code="opt_in_phone_number" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-phoneNumber"><code>phoneNumber</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use this request to opt in a phone number that is opted out, which enables you to resume sending SMS messages to the number. You can opt in a phone number only once every 30 days.</td>
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
<tr id="parameter-phoneNumber">
    <td><CopyableCode code="phoneNumber" /></td>
    <td><code>string</code></td>
    <td>The phone number to opt in. Use E.164 format.</td>
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
    defaultValue="check_if_phone_number_is_opted_out"
    values={[
        { label: 'check_if_phone_number_is_opted_out', value: 'check_if_phone_number_is_opted_out' },
        { label: 'opt_in_phone_number', value: 'opt_in_phone_number' }
    ]}
>
<TabItem value="check_if_phone_number_is_opted_out">

Accepts a phone number and indicates whether the phone holder has opted out of receiving SMS messages from your Amazon Web Services account. You cannot send SMS messages to a number that is opted out. To resume sending messages, you can opt in the number by using the OptInPhoneNumber action.

```sql
EXEC aws.sns.phone_numbers.check_if_phone_number_is_opted_out 
@phoneNumber='{{ phoneNumber }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="opt_in_phone_number">

Use this request to opt in a phone number that is opted out, which enables you to resume sending SMS messages to the number. You can opt in a phone number only once every 30 days.

```sql
EXEC aws.sns.phone_numbers.opt_in_phone_number 
@phoneNumber='{{ phoneNumber }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
