--- 
title: sender_ids
hide_title: false
hide_table_of_contents: false
keywords:
  - sender_ids
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

Creates, updates, deletes, gets or lists a <code>sender_ids</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sender_ids" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_sms_voice_v2.sender_ids" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_sender_ids"
    values={[
        { label: 'describe_sender_ids', value: 'describe_sender_ids' }
    ]}
>
<TabItem value="describe_sender_ids">

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
    <td><CopyableCode code="deletion_protection_enabled" /></td>
    <td><code>boolean</code></td>
    <td>By default this is set to false. When set to true the sender ID can't be deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="iso_country_code" /></td>
    <td><code>string</code></td>
    <td>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. (pattern: &lt;code&gt;&#91;A-Z&#93;&#123;2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="message_types" /></td>
    <td><code>array</code></td>
    <td>The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive.</td>
</tr>
<tr>
    <td><CopyableCode code="monthly_leasing_price" /></td>
    <td><code>string</code></td>
    <td>The monthly leasing price, in US dollars.</td>
</tr>
<tr>
    <td><CopyableCode code="registered" /></td>
    <td><code>boolean</code></td>
    <td>True if the sender ID is registered.</td>
</tr>
<tr>
    <td><CopyableCode code="registration_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the registration.</td>
</tr>
<tr>
    <td><CopyableCode code="sender_id" /></td>
    <td><code>string</code></td>
    <td>The alphanumeric sender ID in a specific country that you'd like to describe. (pattern: &lt;code&gt;&#91;A-Za-z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sender_id_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) associated with the SenderId.</td>
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
    <td><a href="#describe_sender_ids"><CopyableCode code="describe_sender_ids" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified SenderIds or all SenderIds associated with your Amazon Web Services account. If you specify SenderIds, the output includes information for only the specified SenderIds. If you specify filters, the output includes information for only those SenderIds that meet the filter criteria. If you don't specify SenderIds or filters, the output includes information for all SenderIds. f you specify a sender ID that isn't valid, an error is returned.</td>
</tr>
<tr>
    <td><a href="#release_sender_id"><CopyableCode code="release_sender_id" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SenderId"><code>SenderId</code></a>, <a href="#parameter-IsoCountryCode"><code>IsoCountryCode</code></a></td>
    <td></td>
    <td>Releases an existing sender ID in your account.</td>
</tr>
<tr>
    <td><a href="#set_default_sender_id"><CopyableCode code="set_default_sender_id" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConfigurationSetName"><code>ConfigurationSetName</code></a>, <a href="#parameter-SenderId"><code>SenderId</code></a></td>
    <td></td>
    <td>Sets default sender ID on a configuration set. When sending a text message to a destination country that supports sender IDs, the default sender ID on the configuration set specified will be used if no dedicated origination phone numbers or registered sender IDs are available in your account.</td>
</tr>
<tr>
    <td><a href="#delete_default_sender_id"><CopyableCode code="delete_default_sender_id" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing default sender ID on a configuration set. A default sender ID is the identity that appears on recipients' devices when they receive SMS messages. Support for sender ID capabilities varies by country or region.</td>
</tr>
<tr>
    <td><a href="#update_sender_id"><CopyableCode code="update_sender_id" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SenderId"><code>SenderId</code></a>, <a href="#parameter-IsoCountryCode"><code>IsoCountryCode</code></a></td>
    <td></td>
    <td>Updates the configuration of an existing sender ID.</td>
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
    defaultValue="describe_sender_ids"
    values={[
        { label: 'describe_sender_ids', value: 'describe_sender_ids' }
    ]}
>
<TabItem value="describe_sender_ids">

Describes the specified SenderIds or all SenderIds associated with your Amazon Web Services account. If you specify SenderIds, the output includes information for only the specified SenderIds. If you specify filters, the output includes information for only those SenderIds that meet the filter criteria. If you don't specify SenderIds or filters, the output includes information for all SenderIds. f you specify a sender ID that isn't valid, an error is returned.

```sql
SELECT
deletion_protection_enabled,
iso_country_code,
message_types,
monthly_leasing_price,
registered,
registration_id,
sender_id,
sender_id_arn
FROM aws.pinpoint_sms_voice_v2.sender_ids
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="release_sender_id"
    values={[
        { label: 'release_sender_id', value: 'release_sender_id' },
        { label: 'set_default_sender_id', value: 'set_default_sender_id' }
    ]}
>
<TabItem value="release_sender_id">

Releases an existing sender ID in your account.

```sql
UPDATE aws.pinpoint_sms_voice_v2.sender_ids
SET 
SenderId = '{{ SenderId }}',
IsoCountryCode = '{{ IsoCountryCode }}'
WHERE 
region = '{{ region }}' --required
AND SenderId = '{{ SenderId }}' --required
AND IsoCountryCode = '{{ IsoCountryCode }}' --required
RETURNING
iso_country_code,
message_types,
monthly_leasing_price,
registered,
registration_id,
sender_id,
sender_id_arn;
```
</TabItem>
<TabItem value="set_default_sender_id">

Sets default sender ID on a configuration set. When sending a text message to a destination country that supports sender IDs, the default sender ID on the configuration set specified will be used if no dedicated origination phone numbers or registered sender IDs are available in your account.

```sql
UPDATE aws.pinpoint_sms_voice_v2.sender_ids
SET 
ConfigurationSetName = '{{ ConfigurationSetName }}',
SenderId = '{{ SenderId }}'
WHERE 
region = '{{ region }}' --required
AND ConfigurationSetName = '{{ ConfigurationSetName }}' --required
AND SenderId = '{{ SenderId }}' --required
RETURNING
configuration_set_arn,
configuration_set_name,
sender_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_default_sender_id"
    values={[
        { label: 'delete_default_sender_id', value: 'delete_default_sender_id' }
    ]}
>
<TabItem value="delete_default_sender_id">

Deletes an existing default sender ID on a configuration set. A default sender ID is the identity that appears on recipients' devices when they receive SMS messages. Support for sender ID capabilities varies by country or region.

```sql
DELETE FROM aws.pinpoint_sms_voice_v2.sender_ids
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="update_sender_id"
    values={[
        { label: 'update_sender_id', value: 'update_sender_id' }
    ]}
>
<TabItem value="update_sender_id">

Updates the configuration of an existing sender ID.

```sql
EXEC aws.pinpoint_sms_voice_v2.sender_ids.update_sender_id 
@region='{{ region }}' --required 
@@json=
'{
"SenderId": "{{ SenderId }}", 
"IsoCountryCode": "{{ IsoCountryCode }}", 
"DeletionProtectionEnabled": {{ DeletionProtectionEnabled }}
}'
;
```
</TabItem>
</Tabs>
