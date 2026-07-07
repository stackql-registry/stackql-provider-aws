--- 
title: phone_numbers
hide_title: false
hide_table_of_contents: false
keywords:
  - phone_numbers
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

Creates, updates, deletes, gets or lists a <code>phone_numbers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="phone_numbers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime.phone_numbers" /></td></tr>
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
    <td><CopyableCode code="Associations" /></td>
    <td><code>array</code></td>
    <td>The phone number associations.</td>
</tr>
<tr>
    <td><CopyableCode code="CallingName" /></td>
    <td><code>string</code></td>
    <td>The outbound calling name associated with the phone number. (pattern: &lt;code&gt;^$|^&#91;a-zA-Z0-9 &#93;&#123;2,15&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CallingNameStatus" /></td>
    <td><code>string</code></td>
    <td>The outbound calling name status. (Unassigned, UpdateInProgress, UpdateSucceeded, UpdateFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="Capabilities" /></td>
    <td><code>object</code></td>
    <td>The phone number capabilities.</td>
</tr>
<tr>
    <td><CopyableCode code="Country" /></td>
    <td><code>string</code></td>
    <td>The phone number country. Format: ISO 3166-1 alpha-2. (pattern: &lt;code&gt;&#91;A-Z&#93;&#123;2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The phone number creation timestamp, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="DeletionTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The deleted phone number timestamp, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="E164PhoneNumber" /></td>
    <td><code>string</code></td>
    <td>The phone number, in E.164 format. (pattern: &lt;code&gt;^\+?&#91;1-9&#93;\d&#123;1,14&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PhoneNumberId" /></td>
    <td><code>string</code></td>
    <td>The phone number ID.</td>
</tr>
<tr>
    <td><CopyableCode code="ProductType" /></td>
    <td><code>string</code></td>
    <td>The phone number product type. (BusinessCalling, VoiceConnector, SipMediaApplicationDialIn)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The phone number status. (AcquireInProgress, AcquireFailed, Unassigned, Assigned, ReleaseInProgress, DeleteInProgress, ReleaseFailed, DeleteFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The phone number type. (Local, TollFree)</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedTimestamp" /></td>
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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="PhoneNumbers" /></td>
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
    <td>Lists the phone numbers for the specified Amazon Chime account, Amazon Chime user, Amazon Chime Voice Connector, or Amazon Chime Voice Connector group.</td>
</tr>
<tr>
    <td><a href="#update_phone_number"><CopyableCode code="update_phone_number" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-phone_number_id"><code>phone_number_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates phone number details, such as product type or calling name, for the specified phone number ID. You can update one phone number detail at a time. For example, you can update either the product type or the calling name in one action. For toll-free numbers, you cannot use the Amazon Chime Business Calling product type. For numbers outside the U.S., you must use the Amazon Chime SIP Media Application Dial-In product type. Updates to outbound calling names can take 72 hours to complete. Pending updates to outbound calling names must be complete before you can request another update.</td>
</tr>
<tr>
    <td><a href="#delete_phone_number"><CopyableCode code="delete_phone_number" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-phone_number_id"><code>phone_number_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Moves the specified phone number into the Deletion queue. A phone number must be disassociated from any users or Amazon Chime Voice Connectors before it can be deleted. Deleted phone numbers remain in the Deletion queue for 7 days before they are deleted permanently.</td>
</tr>
<tr>
    <td><a href="#batch_delete_phone_number"><CopyableCode code="batch_delete_phone_number" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PhoneNumberIds"><code>PhoneNumberIds</code></a></td>
    <td></td>
    <td>Moves phone numbers into the Deletion queue. Phone numbers must be disassociated from any users or Amazon Chime Voice Connectors before they can be deleted. Phone numbers remain in the Deletion queue for 7 days before they are deleted permanently.</td>
</tr>
<tr>
    <td><a href="#restore_phone_number"><CopyableCode code="restore_phone_number" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-phone_number_id"><code>phone_number_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Moves a phone number from the Deletion queue back into the phone number Inventory.</td>
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
    <td>The phone number.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-filter-name">
    <td><CopyableCode code="filter-name" /></td>
    <td><code>string</code></td>
    <td>The filter to use to limit the number of results.</td>
</tr>
<tr id="parameter-filter-value">
    <td><CopyableCode code="filter-value" /></td>
    <td><code>string</code></td>
    <td>The value to use for the filter.</td>
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
<tr id="parameter-product-type">
    <td><CopyableCode code="product-type" /></td>
    <td><code>string</code></td>
    <td>The phone number product type.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The phone number status.</td>
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
Associations,
CallingName,
CallingNameStatus,
Capabilities,
Country,
CreatedTimestamp,
DeletionTimestamp,
E164PhoneNumber,
PhoneNumberId,
ProductType,
Status,
Type,
UpdatedTimestamp
FROM aws.chime.phone_numbers
WHERE phone_number_id = '{{ phone_number_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_phone_numbers">

Lists the phone numbers for the specified Amazon Chime account, Amazon Chime user, Amazon Chime Voice Connector, or Amazon Chime Voice Connector group.

```sql
SELECT
NextToken,
PhoneNumbers
FROM aws.chime.phone_numbers
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

Updates phone number details, such as product type or calling name, for the specified phone number ID. You can update one phone number detail at a time. For example, you can update either the product type or the calling name in one action. For toll-free numbers, you cannot use the Amazon Chime Business Calling product type. For numbers outside the U.S., you must use the Amazon Chime SIP Media Application Dial-In product type. Updates to outbound calling names can take 72 hours to complete. Pending updates to outbound calling names must be complete before you can request another update.

```sql
UPDATE aws.chime.phone_numbers
SET 
ProductType = '{{ ProductType }}',
CallingName = '{{ CallingName }}'
WHERE 
phone_number_id = '{{ phone_number_id }}' --required
AND region = '{{ region }}' --required
RETURNING
PhoneNumber;
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

Moves the specified phone number into the Deletion queue. A phone number must be disassociated from any users or Amazon Chime Voice Connectors before it can be deleted. Deleted phone numbers remain in the Deletion queue for 7 days before they are deleted permanently.

```sql
DELETE FROM aws.chime.phone_numbers
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

Moves phone numbers into the Deletion queue. Phone numbers must be disassociated from any users or Amazon Chime Voice Connectors before they can be deleted. Phone numbers remain in the Deletion queue for 7 days before they are deleted permanently.

```sql
EXEC aws.chime.phone_numbers.batch_delete_phone_number 
@region='{{ region }}' --required 
@@json=
'{
"PhoneNumberIds": "{{ PhoneNumberIds }}"
}'
;
```
</TabItem>
<TabItem value="restore_phone_number">

Moves a phone number from the Deletion queue back into the phone number Inventory.

```sql
EXEC aws.chime.phone_numbers.restore_phone_number 
@phone_number_id='{{ phone_number_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
