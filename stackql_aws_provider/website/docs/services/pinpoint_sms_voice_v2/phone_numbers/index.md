--- 
title: phone_numbers
hide_title: false
hide_table_of_contents: false
keywords:
  - phone_numbers
  - pinpoint_sms_voice_v2
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_sms_voice_v2.phone_numbers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_phone_numbers"
    values={[
        { label: 'describe_phone_numbers', value: 'describe_phone_numbers' }
    ]}
>
<TabItem value="describe_phone_numbers">

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
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the phone number was created, in UNIX epoch time format.</td>
</tr>
<tr>
    <td><CopyableCode code="DeletionProtectionEnabled" /></td>
    <td><code>boolean</code></td>
    <td>When set to true the phone number can't be deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="InternationalSendingEnabled" /></td>
    <td><code>boolean</code></td>
    <td>When set to true the international sending of phone number is Enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="IsoCountryCode" /></td>
    <td><code>string</code></td>
    <td>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. (pattern: &lt;code&gt;&#91;A-Z&#93;&#123;2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="MessageType" /></td>
    <td><code>string</code></td>
    <td>The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive. (TRANSACTIONAL, PROMOTIONAL)</td>
</tr>
<tr>
    <td><CopyableCode code="MonthlyLeasingPrice" /></td>
    <td><code>string</code></td>
    <td>The price, in US dollars, to lease the phone number.</td>
</tr>
<tr>
    <td><CopyableCode code="NumberCapabilities" /></td>
    <td><code>array</code></td>
    <td>Describes if the origination identity can be used for text messages, voice calls or both.</td>
</tr>
<tr>
    <td><CopyableCode code="NumberType" /></td>
    <td><code>string</code></td>
    <td>The type of phone number. (SHORT_CODE, LONG_CODE, TOLL_FREE, TEN_DLC, SIMULATOR)</td>
</tr>
<tr>
    <td><CopyableCode code="OptOutListName" /></td>
    <td><code>string</code></td>
    <td>The name of the OptOutList associated with the phone number. (pattern: &lt;code&gt;&#91;A-Za-z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PhoneNumber" /></td>
    <td><code>string</code></td>
    <td>The phone number in E.164 format. (pattern: &lt;code&gt;\+?&#91;1-9&#93;&#91;0-9&#93;&#123;1,18&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PhoneNumberArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) associated with the phone number.</td>
</tr>
<tr>
    <td><CopyableCode code="PhoneNumberId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the phone number.</td>
</tr>
<tr>
    <td><CopyableCode code="PoolId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the pool associated with the phone number.</td>
</tr>
<tr>
    <td><CopyableCode code="RegistrationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the registration.</td>
</tr>
<tr>
    <td><CopyableCode code="SelfManagedOptOutsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>When set to false and an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, End User Messaging SMS automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out request. For more information see Self-managed opt-outs</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the phone number. (PENDING, ACTIVE, ASSOCIATING, DISASSOCIATING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="TwoWayChannelArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the two way channel. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TwoWayChannelRole" /></td>
    <td><code>string</code></td>
    <td>An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages. (pattern: &lt;code&gt;arn:\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TwoWayEnabled" /></td>
    <td><code>boolean</code></td>
    <td>By default this is set to false. When set to true you can receive incoming text messages from your end recipients using the TwoWayChannelArn.</td>
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
    <td><a href="#describe_phone_numbers"><CopyableCode code="describe_phone_numbers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified origination phone number, or all the phone numbers in your account. If you specify phone number IDs, the output includes information for only the specified phone numbers. If you specify filters, the output includes information for only those phone numbers that meet the filter criteria. If you don't specify phone number IDs or filters, the output includes information for all phone numbers. If you specify a phone number ID that isn't valid, an error is returned.</td>
</tr>
<tr>
    <td><a href="#release_phone_number"><CopyableCode code="release_phone_number" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PhoneNumberId"><code>PhoneNumberId</code></a></td>
    <td></td>
    <td>Releases an existing origination phone number in your account. Once released, a phone number is no longer available for sending messages. If the origination phone number has deletion protection enabled or is associated with a pool, an error is returned.</td>
</tr>
<tr>
    <td><a href="#update_phone_number"><CopyableCode code="update_phone_number" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PhoneNumberId"><code>PhoneNumberId</code></a></td>
    <td></td>
    <td>Updates the configuration of an existing origination phone number. You can update the opt-out list, enable or disable two-way messaging, change the TwoWayChannelArn, enable or disable self-managed opt-outs, and enable or disable deletion protection. If the origination phone number is associated with a pool, an error is returned.</td>
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
    defaultValue="describe_phone_numbers"
    values={[
        { label: 'describe_phone_numbers', value: 'describe_phone_numbers' }
    ]}
>
<TabItem value="describe_phone_numbers">

Describes the specified origination phone number, or all the phone numbers in your account. If you specify phone number IDs, the output includes information for only the specified phone numbers. If you specify filters, the output includes information for only those phone numbers that meet the filter criteria. If you don't specify phone number IDs or filters, the output includes information for all phone numbers. If you specify a phone number ID that isn't valid, an error is returned.

```sql
SELECT
CreatedTimestamp,
DeletionProtectionEnabled,
InternationalSendingEnabled,
IsoCountryCode,
MessageType,
MonthlyLeasingPrice,
NumberCapabilities,
NumberType,
OptOutListName,
PhoneNumber,
PhoneNumberArn,
PhoneNumberId,
PoolId,
RegistrationId,
SelfManagedOptOutsEnabled,
Status,
TwoWayChannelArn,
TwoWayChannelRole,
TwoWayEnabled
FROM aws.pinpoint_sms_voice_v2.phone_numbers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="release_phone_number"
    values={[
        { label: 'release_phone_number', value: 'release_phone_number' }
    ]}
>
<TabItem value="release_phone_number">

Releases an existing origination phone number in your account. Once released, a phone number is no longer available for sending messages. If the origination phone number has deletion protection enabled or is associated with a pool, an error is returned.

```sql
UPDATE aws.pinpoint_sms_voice_v2.phone_numbers
SET 
PhoneNumberId = '{{ PhoneNumberId }}'
WHERE 
region = '{{ region }}' --required
AND PhoneNumberId = '{{ PhoneNumberId }}' --required
RETURNING
CreatedTimestamp,
IsoCountryCode,
MessageType,
MonthlyLeasingPrice,
NumberCapabilities,
NumberType,
OptOutListName,
PhoneNumber,
PhoneNumberArn,
PhoneNumberId,
RegistrationId,
SelfManagedOptOutsEnabled,
Status,
TwoWayChannelArn,
TwoWayChannelRole,
TwoWayEnabled;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="update_phone_number"
    values={[
        { label: 'update_phone_number', value: 'update_phone_number' }
    ]}
>
<TabItem value="update_phone_number">

Updates the configuration of an existing origination phone number. You can update the opt-out list, enable or disable two-way messaging, change the TwoWayChannelArn, enable or disable self-managed opt-outs, and enable or disable deletion protection. If the origination phone number is associated with a pool, an error is returned.

```sql
EXEC aws.pinpoint_sms_voice_v2.phone_numbers.update_phone_number 
@region='{{ region }}' --required 
@@json=
'{
"PhoneNumberId": "{{ PhoneNumberId }}", 
"TwoWayEnabled": {{ TwoWayEnabled }}, 
"TwoWayChannelArn": "{{ TwoWayChannelArn }}", 
"TwoWayChannelRole": "{{ TwoWayChannelRole }}", 
"SelfManagedOptOutsEnabled": {{ SelfManagedOptOutsEnabled }}, 
"OptOutListName": "{{ OptOutListName }}", 
"InternationalSendingEnabled": {{ InternationalSendingEnabled }}, 
"DeletionProtectionEnabled": {{ DeletionProtectionEnabled }}
}'
;
```
</TabItem>
</Tabs>
