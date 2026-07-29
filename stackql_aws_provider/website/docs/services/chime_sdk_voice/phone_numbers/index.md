--- 
title: phone_numbers
hide_title: false
hide_table_of_contents: false
keywords:
  - phone_numbers
  - chime_sdk_voice
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_voice.phone_numbers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_phone_number"
    values={[
        { label: 'get_phone_number', value: 'get_phone_number' },
        { label: 'list_phone_numbers', value: 'list_phone_numbers' }
    ]}
>
<TabItem value="get_phone_number">

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
    <td><CopyableCode code="associations" /></td>
    <td><code>array</code></td>
    <td>The phone number's associations.</td>
</tr>
<tr>
    <td><CopyableCode code="calling_name" /></td>
    <td><code>string</code></td>
    <td>The outbound calling name associated with the phone number. (pattern: &lt;code&gt;^$|^&#91;a-zA-Z0-9 &#93;&#123;2,15&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="calling_name_status" /></td>
    <td><code>string</code></td>
    <td>The outbound calling name status. (Unassigned, UpdateInProgress, UpdateSucceeded, UpdateFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td>The phone number's capabilities.</td>
</tr>
<tr>
    <td><CopyableCode code="country" /></td>
    <td><code>string</code></td>
    <td>The phone number's country. Format: ISO 3166-1 alpha-2. (pattern: &lt;code&gt;&#91;A-Z&#93;&#123;2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The phone number creation timestamp, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="deletion_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The deleted phone number timestamp, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="e164_phone_number" /></td>
    <td><code>string</code></td>
    <td>The phone number, in E.164 format. (pattern: &lt;code&gt;^\+?&#91;1-9&#93;\d&#123;1,14&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the phone number. (pattern: &lt;code&gt;^$|^&#91;a-zA-Z0-9\,\.\_\-&#93;+(\s+&#91;a-zA-Z0-9\,\.\_\-&#93;+)*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="order_id" /></td>
    <td><code>string</code></td>
    <td>The phone number's order ID. (pattern: &lt;code&gt;&#91;a-fA-F0-9&#93;&#123;8&#125;(?:-&#91;a-fA-F0-9&#93;&#123;4&#125;)&#123;3&#125;-&#91;a-fA-F0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="phone_number_id" /></td>
    <td><code>string</code></td>
    <td>The phone number's ID. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="product_type" /></td>
    <td><code>string</code></td>
    <td>The phone number's product type. (VoiceConnector, SipMediaApplicationDialIn)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The phone number's status. (Cancelled, PortinCancelRequested, PortinInProgress, AcquireInProgress, AcquireFailed, Unassigned, Assigned, ReleaseInProgress, DeleteInProgress, ReleaseFailed, DeleteFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The phone number's type. (Local, TollFree)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The updated phone number timestamp, in ISO 8601 format.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_phone_numbers">

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
    <td>The token used to return the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="phone_numbers" /></td>
    <td><code>array</code></td>
    <td>The phone number details.</td>
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
    <td><a href="#get_phone_number"><CopyableCode code="get_phone_number" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-phone_number_id"><code>phone_number_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details for the specified phone number ID, such as associations, capabilities, and product type.</td>
</tr>
<tr>
    <td><a href="#list_phone_numbers"><CopyableCode code="list_phone_numbers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-status"><code>status</code></a>, <a href="#parameter-product-type"><code>product-type</code></a>, <a href="#parameter-filter-name"><code>filter-name</code></a>, <a href="#parameter-filter-value"><code>filter-value</code></a>, <a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Lists the phone numbers for the specified Amazon Chime SDK account, Amazon Chime SDK user, Amazon Chime SDK Voice Connector, or Amazon Chime SDK Voice Connector group.</td>
</tr>
<tr>
    <td><a href="#update_phone_number"><CopyableCode code="update_phone_number" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-phone_number_id"><code>phone_number_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates phone number details, such as product type, calling name, or phone number name for the specified phone number ID. You can update one phone number detail at a time. For example, you can update either the product type, calling name, or phone number name in one action. For numbers outside the U.S., you must use the Amazon Chime SDK SIP Media Application Dial-In product type. Updates to outbound calling names can take 72 hours to complete. Pending updates to outbound calling names must be complete before you can request another update.</td>
</tr>
<tr>
    <td><a href="#delete_phone_number"><CopyableCode code="delete_phone_number" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-phone_number_id"><code>phone_number_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Moves the specified phone number into the Deletion queue. A phone number must be disassociated from any users or Amazon Chime SDK Voice Connectors before it can be deleted. Deleted phone numbers remain in the Deletion queue queue for 7 days before they are deleted permanently.</td>
</tr>
<tr>
    <td><a href="#batch_delete_phone_number"><CopyableCode code="batch_delete_phone_number" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PhoneNumberIds"><code>PhoneNumberIds</code></a></td>
    <td></td>
    <td>Moves phone numbers into the Deletion queue. Phone numbers must be disassociated from any users or Amazon Chime SDK Voice Connectors before they can be deleted. Phone numbers remain in the Deletion queue for 7 days before they are deleted permanently.</td>
</tr>
<tr>
    <td><a href="#restore_phone_number"><CopyableCode code="restore_phone_number" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-phone_number_id"><code>phone_number_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Restores a deleted phone number.</td>
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
<tr id="parameter-phone_number_id">
    <td><CopyableCode code="phone_number_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the phone number being restored.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-filter-name">
    <td><CopyableCode code="filter-name" /></td>
    <td><code>string</code></td>
    <td>The filter to limit the number of results.</td>
</tr>
<tr id="parameter-filter-value">
    <td><CopyableCode code="filter-value" /></td>
    <td><code>string</code></td>
    <td>The filter value.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token used to return the next page of results.</td>
</tr>
<tr id="parameter-product-type">
    <td><CopyableCode code="product-type" /></td>
    <td><code>string</code></td>
    <td>The phone number product types.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of your organization's phone numbers.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_phone_number"
    values={[
        { label: 'get_phone_number', value: 'get_phone_number' },
        { label: 'list_phone_numbers', value: 'list_phone_numbers' }
    ]}
>
<TabItem value="get_phone_number">

Retrieves details for the specified phone number ID, such as associations, capabilities, and product type.

```sql
SELECT
associations,
calling_name,
calling_name_status,
capabilities,
country,
created_timestamp,
deletion_timestamp,
e164_phone_number,
name,
order_id,
phone_number_id,
product_type,
status,
type,
updated_timestamp
FROM aws.chime_sdk_voice.phone_numbers
WHERE phone_number_id = '{{ phone_number_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_phone_numbers">

Lists the phone numbers for the specified Amazon Chime SDK account, Amazon Chime SDK user, Amazon Chime SDK Voice Connector, or Amazon Chime SDK Voice Connector group.

```sql
SELECT
next_token,
phone_numbers
FROM aws.chime_sdk_voice.phone_numbers
WHERE region = '{{ region }}' -- required
AND status = '{{ status }}'
AND `product-type` = '{{ product-type }}'
AND `filter-name` = '{{ filter-name }}'
AND `filter-value` = '{{ filter-value }}'
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_phone_number"
    values={[
        { label: 'update_phone_number', value: 'update_phone_number' }
    ]}
>
<TabItem value="update_phone_number">

Updates phone number details, such as product type, calling name, or phone number name for the specified phone number ID. You can update one phone number detail at a time. For example, you can update either the product type, calling name, or phone number name in one action. For numbers outside the U.S., you must use the Amazon Chime SDK SIP Media Application Dial-In product type. Updates to outbound calling names can take 72 hours to complete. Pending updates to outbound calling names must be complete before you can request another update.

```sql
UPDATE aws.chime_sdk_voice.phone_numbers
SET 
ProductType = '{{ ProductType }}',
CallingName = '{{ CallingName }}',
Name = '{{ Name }}'
WHERE 
phone_number_id = '{{ phone_number_id }}' --required
AND region = '{{ region }}' --required
RETURNING
phone_number;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_phone_number"
    values={[
        { label: 'delete_phone_number', value: 'delete_phone_number' }
    ]}
>
<TabItem value="delete_phone_number">

Moves the specified phone number into the Deletion queue. A phone number must be disassociated from any users or Amazon Chime SDK Voice Connectors before it can be deleted. Deleted phone numbers remain in the Deletion queue queue for 7 days before they are deleted permanently.

```sql
DELETE FROM aws.chime_sdk_voice.phone_numbers
WHERE phone_number_id = '{{ phone_number_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_delete_phone_number"
    values={[
        { label: 'batch_delete_phone_number', value: 'batch_delete_phone_number' },
        { label: 'restore_phone_number', value: 'restore_phone_number' }
    ]}
>
<TabItem value="batch_delete_phone_number">

Moves phone numbers into the Deletion queue. Phone numbers must be disassociated from any users or Amazon Chime SDK Voice Connectors before they can be deleted. Phone numbers remain in the Deletion queue for 7 days before they are deleted permanently.

```sql
EXEC aws.chime_sdk_voice.phone_numbers.batch_delete_phone_number 
@region='{{ region }}' --required 
@@json=
'{
"PhoneNumberIds": "{{ PhoneNumberIds }}"
}'
;
```
</TabItem>
<TabItem value="restore_phone_number">

Restores a deleted phone number.

```sql
EXEC aws.chime_sdk_voice.phone_numbers.restore_phone_number 
@phone_number_id='{{ phone_number_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
