--- 
title: handshakes
hide_title: false
hide_table_of_contents: false
keywords:
  - handshakes
  - organizations
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

Creates, updates, deletes, gets or lists a <code>handshakes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="handshakes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.organizations.handshakes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_handshake"
    values={[
        { label: 'describe_handshake', value: 'describe_handshake' }
    ]}
>
<TabItem value="describe_handshake">

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
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The type of handshake: INVITE: Handshake sent to a standalone account requesting that it to join the sender's organization. ENABLE_ALL_FEATURES: Handshake sent to invited member accounts to enable all features for the organization. APPROVE_ALL_FEATURES: Handshake sent to the management account when all invited member accounts have approved to enable all features. TRANSFER_RESPONSIBILITY: Handshake sent to another organization's management account requesting that it designate the sender with the specified responsibilities for recipient's organization. (INVITE, ENABLE_ALL_FEATURES, APPROVE_ALL_FEATURES, ADD_ORGANIZATIONS_SERVICE_LINKED_ROLE, TRANSFER_RESPONSIBILITY)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for the handshake. For more information about ARNs in Organizations, see ARN Formats Supported by Organizations in the Amazon Web Services Service Authorization Reference. (pattern: &lt;code&gt;^arn:aws:organizations::\d&#123;12&#125;:handshake\/o-&#91;a-z0-9&#93;&#123;10,32&#125;\/&#91;a-z_&#93;&#123;1,32&#125;\/h-&#91;0-9a-z&#93;&#123;8,32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the handshake expires.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>ID for the handshake. The regex pattern for handshake ID string requires "h-" followed by from 8 to 32 lowercase letters or digits. (pattern: &lt;code&gt;^h-&#91;0-9a-z&#93;&#123;8,32&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="parties" /></td>
    <td><code>array</code></td>
    <td>An array of HandshakeParty objects. Contains details for participant in a handshake.</td>
</tr>
<tr>
    <td><CopyableCode code="requested_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the handshake request was made.</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>An array of HandshakeResource objects. When needed, contains additional details for a handshake. For example, the email address for the sender.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state for the handshake. REQUESTED: Handshake awaiting a response from the recipient. OPEN: Handshake sent to multiple recipients and all recipients have responded. The sender can now complete the handshake action. CANCELED: Handshake canceled by the sender. ACCEPTED: Handshake accepted by the recipient. DECLINED: Handshake declined by the recipient. EXPIRED: Handshake has expired. (REQUESTED, OPEN, CANCELED, ACCEPTED, DECLINED, EXPIRED)</td>
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
    <td><a href="#describe_handshake"><CopyableCode code="describe_handshake" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details for a handshake. A handshake is the secure exchange of information between two Amazon Web Services accounts: a sender and a recipient. You can view ACCEPTED, DECLINED, or CANCELED handshakes in API Responses for 30 days before they are deleted. You can call this operation from any account in a organization.</td>
</tr>
<tr>
    <td><a href="#accept_handshake"><CopyableCode code="accept_handshake" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HandshakeId"><code>HandshakeId</code></a></td>
    <td></td>
    <td>Accepts a handshake by sending an ACCEPTED response to the sender. You can view accepted handshakes in API responses for 30 days before they are deleted. Only the management account can accept the following handshakes: Enable all features final confirmation (APPROVE_ALL_FEATURES) Billing transfer (TRANSFER_RESPONSIBILITY) For more information, see Enabling all features and Responding to a billing transfer invitation in the Organizations User Guide. Only a member account can accept the following handshakes: Invitation to join (INVITE) Approve all features request (ENABLE_ALL_FEATURES) For more information, see Responding to invitations and Enabling all features in the Organizations User Guide.</td>
</tr>
<tr>
    <td><a href="#cancel_handshake"><CopyableCode code="cancel_handshake" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HandshakeId"><code>HandshakeId</code></a></td>
    <td></td>
    <td>Cancels a Handshake. Only the account that sent a handshake can call this operation. The recipient of the handshake can't cancel it, but can use DeclineHandshake to decline. After a handshake is canceled, the recipient can no longer respond to the handshake. You can view canceled handshakes in API responses for 30 days before they are deleted.</td>
</tr>
<tr>
    <td><a href="#decline_handshake"><CopyableCode code="decline_handshake" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HandshakeId"><code>HandshakeId</code></a></td>
    <td></td>
    <td>Declines a Handshake. Only the account that receives a handshake can call this operation. The sender of the handshake can use CancelHandshake to cancel if the handshake hasn't yet been responded to. You can view canceled handshakes in API responses for 30 days before they are deleted.</td>
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
    defaultValue="describe_handshake"
    values={[
        { label: 'describe_handshake', value: 'describe_handshake' }
    ]}
>
<TabItem value="describe_handshake">

Returns details for a handshake. A handshake is the secure exchange of information between two Amazon Web Services accounts: a sender and a recipient. You can view ACCEPTED, DECLINED, or CANCELED handshakes in API Responses for 30 days before they are deleted. You can call this operation from any account in a organization.

```sql
SELECT
action,
arn,
expiration_timestamp,
id,
parties,
requested_timestamp,
resources,
state
FROM aws.organizations.handshakes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_handshake"
    values={[
        { label: 'accept_handshake', value: 'accept_handshake' },
        { label: 'cancel_handshake', value: 'cancel_handshake' },
        { label: 'decline_handshake', value: 'decline_handshake' }
    ]}
>
<TabItem value="accept_handshake">

Accepts a handshake by sending an ACCEPTED response to the sender. You can view accepted handshakes in API responses for 30 days before they are deleted. Only the management account can accept the following handshakes: Enable all features final confirmation (APPROVE_ALL_FEATURES) Billing transfer (TRANSFER_RESPONSIBILITY) For more information, see Enabling all features and Responding to a billing transfer invitation in the Organizations User Guide. Only a member account can accept the following handshakes: Invitation to join (INVITE) Approve all features request (ENABLE_ALL_FEATURES) For more information, see Responding to invitations and Enabling all features in the Organizations User Guide.

```sql
EXEC aws.organizations.handshakes.accept_handshake 
@region='{{ region }}' --required 
@@json=
'{
"HandshakeId": "{{ HandshakeId }}"
}'
;
```
</TabItem>
<TabItem value="cancel_handshake">

Cancels a Handshake. Only the account that sent a handshake can call this operation. The recipient of the handshake can't cancel it, but can use DeclineHandshake to decline. After a handshake is canceled, the recipient can no longer respond to the handshake. You can view canceled handshakes in API responses for 30 days before they are deleted.

```sql
EXEC aws.organizations.handshakes.cancel_handshake 
@region='{{ region }}' --required 
@@json=
'{
"HandshakeId": "{{ HandshakeId }}"
}'
;
```
</TabItem>
<TabItem value="decline_handshake">

Declines a Handshake. Only the account that receives a handshake can call this operation. The sender of the handshake can use CancelHandshake to cancel if the handshake hasn't yet been responded to. You can view canceled handshakes in API responses for 30 days before they are deleted.

```sql
EXEC aws.organizations.handshakes.decline_handshake 
@region='{{ region }}' --required 
@@json=
'{
"HandshakeId": "{{ HandshakeId }}"
}'
;
```
</TabItem>
</Tabs>
