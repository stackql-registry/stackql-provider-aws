--- 
title: pools
hide_title: false
hide_table_of_contents: false
keywords:
  - pools
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

Creates, updates, deletes, gets or lists a <code>pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pools" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_sms_voice_v2.pools" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_pools"
    values={[
        { label: 'describe_pools', value: 'describe_pools' }
    ]}
>
<TabItem value="describe_pools">

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
    <td>The time when the pool was created, in UNIX epoch time format.</td>
</tr>
<tr>
    <td><CopyableCode code="deletion_protection_enabled" /></td>
    <td><code>boolean</code></td>
    <td>When set to true the pool can't be deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="message_type" /></td>
    <td><code>string</code></td>
    <td>The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive. (TRANSACTIONAL, PROMOTIONAL)</td>
</tr>
<tr>
    <td><CopyableCode code="opt_out_list_name" /></td>
    <td><code>string</code></td>
    <td>The name of the OptOutList associated with the pool. (pattern: &lt;code&gt;&#91;A-Za-z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pool_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the pool.</td>
</tr>
<tr>
    <td><CopyableCode code="pool_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the pool.</td>
</tr>
<tr>
    <td><CopyableCode code="self_managed_opt_outs_enabled" /></td>
    <td><code>boolean</code></td>
    <td>When set to false, an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, End User Messaging SMS automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests. For more information see Self-managed opt-outs</td>
</tr>
<tr>
    <td><CopyableCode code="shared_routes_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Allows you to enable shared routes on your pool. By default, this is set to False. If you set this value to True, your messages are sent using phone numbers or sender IDs (depending on the country) that are shared with other users. In some countries, such as the United States, senders aren't allowed to use shared routes and must use a dedicated phone number or short code.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the pool. (CREATING, ACTIVE, DELETING)</td>
</tr>
<tr>
    <td><CopyableCode code="two_way_channel_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the two way channel. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="two_way_channel_role" /></td>
    <td><code>string</code></td>
    <td>An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages. (pattern: &lt;code&gt;arn:\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="two_way_enabled" /></td>
    <td><code>boolean</code></td>
    <td>When set to true you can receive incoming text messages from your end recipients using the TwoWayChannelArn.</td>
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
    <td><a href="#describe_pools"><CopyableCode code="describe_pools" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the specified pools or all pools associated with your Amazon Web Services account. If you specify pool IDs, the output includes information for only the specified pools. If you specify filters, the output includes information for only those pools that meet the filter criteria. If you don't specify pool IDs or filters, the output includes information for all pools. If you specify a pool ID that isn't valid, an error is returned. A pool is a collection of phone numbers and SenderIds. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_pool"><CopyableCode code="create_pool" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OriginationIdentity"><code>OriginationIdentity</code></a>, <a href="#parameter-MessageType"><code>MessageType</code></a></td>
    <td></td>
    <td>Creates a new pool and associates the specified origination identity to the pool. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account. The new pool inherits its configuration from the specified origination identity. This includes keywords, message type, opt-out list, two-way configuration, and self-managed opt-out configuration. Deletion protection isn't inherited from the origination identity and defaults to false. If the origination identity is a phone number and is already associated with another pool, an error is returned. A sender ID can be associated with multiple pools.</td>
</tr>
<tr>
    <td><a href="#associate_origination_identity"><CopyableCode code="associate_origination_identity" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PoolId"><code>PoolId</code></a>, <a href="#parameter-OriginationIdentity"><code>OriginationIdentity</code></a></td>
    <td></td>
    <td>Associates the specified origination identity with a pool. If the origination identity is a phone number and is already associated with another pool, an error is returned. A sender ID can be associated with multiple pools. If the origination identity configuration doesn't match the pool's configuration, an error is returned.</td>
</tr>
<tr>
    <td><a href="#update_pool"><CopyableCode code="update_pool" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PoolId"><code>PoolId</code></a></td>
    <td></td>
    <td>Updates the configuration of an existing pool. You can update the opt-out list, enable or disable two-way messaging, change the TwoWayChannelArn, enable or disable self-managed opt-outs, enable or disable deletion protection, and enable or disable shared routes.</td>
</tr>
<tr>
    <td><a href="#delete_pool"><CopyableCode code="delete_pool" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing pool. Deleting a pool disassociates all origination identities from that pool. If the pool status isn't active or if deletion protection is enabled, an error is returned. A pool is a collection of phone numbers and SenderIds. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#disassociate_origination_identity"><CopyableCode code="disassociate_origination_identity" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PoolId"><code>PoolId</code></a>, <a href="#parameter-OriginationIdentity"><code>OriginationIdentity</code></a></td>
    <td></td>
    <td>Removes the specified origination identity from an existing pool. If the origination identity isn't associated with the specified pool, an error is returned.</td>
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
    defaultValue="describe_pools"
    values={[
        { label: 'describe_pools', value: 'describe_pools' }
    ]}
>
<TabItem value="describe_pools">

Retrieves the specified pools or all pools associated with your Amazon Web Services account. If you specify pool IDs, the output includes information for only the specified pools. If you specify filters, the output includes information for only those pools that meet the filter criteria. If you don't specify pool IDs or filters, the output includes information for all pools. If you specify a pool ID that isn't valid, an error is returned. A pool is a collection of phone numbers and SenderIds. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.

```sql
SELECT
created_timestamp,
deletion_protection_enabled,
message_type,
opt_out_list_name,
pool_arn,
pool_id,
self_managed_opt_outs_enabled,
shared_routes_enabled,
status,
two_way_channel_arn,
two_way_channel_role,
two_way_enabled
FROM aws.pinpoint_sms_voice_v2.pools
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_pool"
    values={[
        { label: 'create_pool', value: 'create_pool' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_pool">

Creates a new pool and associates the specified origination identity to the pool. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account. The new pool inherits its configuration from the specified origination identity. This includes keywords, message type, opt-out list, two-way configuration, and self-managed opt-out configuration. Deletion protection isn't inherited from the origination identity and defaults to false. If the origination identity is a phone number and is already associated with another pool, an error is returned. A sender ID can be associated with multiple pools.

```sql
INSERT INTO aws.pinpoint_sms_voice_v2.pools (
OriginationIdentity,
IsoCountryCode,
MessageType,
DeletionProtectionEnabled,
Tags,
ClientToken,
region
)
SELECT 
'{{ OriginationIdentity }}' /* required */,
'{{ IsoCountryCode }}',
'{{ MessageType }}' /* required */,
{{ DeletionProtectionEnabled }},
'{{ Tags }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
created_timestamp,
deletion_protection_enabled,
message_type,
opt_out_list_name,
pool_arn,
pool_id,
self_managed_opt_outs_enabled,
shared_routes_enabled,
status,
tags,
two_way_channel_arn,
two_way_channel_role,
two_way_enabled
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: pools
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the pools resource.
    - name: OriginationIdentity
      value: "{{ OriginationIdentity }}"
      description: |
        The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or SenderIdArn. You can use DescribePhoneNumbers to find the values for PhoneNumberId and PhoneNumberArn, and use DescribeSenderIds can be used to get the values for SenderId and SenderIdArn. After the pool is created you can add more origination identities to the pool by using AssociateOriginationIdentity. If you are using a shared End User Messaging SMS resource then you must use the full Amazon Resource Name(ARN).
    - name: IsoCountryCode
      value: "{{ IsoCountryCode }}"
      description: |
        The new two-character code, in ISO 3166-1 alpha-2 format, for the country or region of the new pool. This field is optional and is not required for origination identity types that are not country-specific, such as RCS agents.
    - name: MessageType
      value: "{{ MessageType }}"
      description: |
        The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive. After the pool is created the MessageType can't be changed.
      valid_values: ['TRANSACTIONAL', 'PROMOTIONAL']
    - name: DeletionProtectionEnabled
      value: {{ DeletionProtectionEnabled }}
      description: |
        By default this is set to false. When set to true the pool can't be deleted. You can change this value using the UpdatePool action.
    - name: Tags
      description: |
        An array of tags (key and value pairs) associated with the pool.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_origination_identity"
    values={[
        { label: 'associate_origination_identity', value: 'associate_origination_identity' },
        { label: 'update_pool', value: 'update_pool' }
    ]}
>
<TabItem value="associate_origination_identity">

Associates the specified origination identity with a pool. If the origination identity is a phone number and is already associated with another pool, an error is returned. A sender ID can be associated with multiple pools. If the origination identity configuration doesn't match the pool's configuration, an error is returned.

```sql
UPDATE aws.pinpoint_sms_voice_v2.pools
SET 
PoolId = '{{ PoolId }}',
OriginationIdentity = '{{ OriginationIdentity }}',
IsoCountryCode = '{{ IsoCountryCode }}',
ClientToken = '{{ ClientToken }}'
WHERE 
region = '{{ region }}' --required
AND PoolId = '{{ PoolId }}' --required
AND OriginationIdentity = '{{ OriginationIdentity }}' --required
RETURNING
iso_country_code,
origination_identity,
origination_identity_arn,
pool_arn,
pool_id;
```
</TabItem>
<TabItem value="update_pool">

Updates the configuration of an existing pool. You can update the opt-out list, enable or disable two-way messaging, change the TwoWayChannelArn, enable or disable self-managed opt-outs, enable or disable deletion protection, and enable or disable shared routes.

```sql
UPDATE aws.pinpoint_sms_voice_v2.pools
SET 
PoolId = '{{ PoolId }}',
TwoWayEnabled = {{ TwoWayEnabled }},
TwoWayChannelArn = '{{ TwoWayChannelArn }}',
TwoWayChannelRole = '{{ TwoWayChannelRole }}',
SelfManagedOptOutsEnabled = {{ SelfManagedOptOutsEnabled }},
OptOutListName = '{{ OptOutListName }}',
SharedRoutesEnabled = {{ SharedRoutesEnabled }},
DeletionProtectionEnabled = {{ DeletionProtectionEnabled }}
WHERE 
region = '{{ region }}' --required
AND PoolId = '{{ PoolId }}' --required
RETURNING
created_timestamp,
deletion_protection_enabled,
message_type,
opt_out_list_name,
pool_arn,
pool_id,
self_managed_opt_outs_enabled,
shared_routes_enabled,
status,
two_way_channel_arn,
two_way_channel_role,
two_way_enabled;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_pool"
    values={[
        { label: 'delete_pool', value: 'delete_pool' }
    ]}
>
<TabItem value="delete_pool">

Deletes an existing pool. Deleting a pool disassociates all origination identities from that pool. If the pool status isn't active or if deletion protection is enabled, an error is returned. A pool is a collection of phone numbers and SenderIds. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.

```sql
DELETE FROM aws.pinpoint_sms_voice_v2.pools
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_origination_identity"
    values={[
        { label: 'disassociate_origination_identity', value: 'disassociate_origination_identity' }
    ]}
>
<TabItem value="disassociate_origination_identity">

Removes the specified origination identity from an existing pool. If the origination identity isn't associated with the specified pool, an error is returned.

```sql
EXEC aws.pinpoint_sms_voice_v2.pools.disassociate_origination_identity 
@region='{{ region }}' --required 
@@json=
'{
"PoolId": "{{ PoolId }}", 
"OriginationIdentity": "{{ OriginationIdentity }}", 
"IsoCountryCode": "{{ IsoCountryCode }}", 
"ClientToken": "{{ ClientToken }}"
}'
;
```
</TabItem>
</Tabs>
