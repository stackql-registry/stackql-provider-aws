--- 
title: handshakes_for_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - handshakes_for_accounts
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

Creates, updates, deletes, gets or lists a <code>handshakes_for_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="handshakes_for_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.organizations.handshakes_for_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_handshakes_for_account"
    values={[
        { label: 'list_handshakes_for_account', value: 'list_handshakes_for_account' }
    ]}
>
<TabItem value="list_handshakes_for_account">

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
    <td><CopyableCode code="Action" /></td>
    <td><code>string</code></td>
    <td>The type of handshake: INVITE: Handshake sent to a standalone account requesting that it to join the sender's organization. ENABLE_ALL_FEATURES: Handshake sent to invited member accounts to enable all features for the organization. APPROVE_ALL_FEATURES: Handshake sent to the management account when all invited member accounts have approved to enable all features. TRANSFER_RESPONSIBILITY: Handshake sent to another organization's management account requesting that it designate the sender with the specified responsibilities for recipient's organization. (INVITE, ENABLE_ALL_FEATURES, APPROVE_ALL_FEATURES, ADD_ORGANIZATIONS_SERVICE_LINKED_ROLE, TRANSFER_RESPONSIBILITY)</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for the handshake. For more information about ARNs in Organizations, see ARN Formats Supported by Organizations in the Amazon Web Services Service Authorization Reference. (pattern: &lt;code&gt;^arn:aws:organizations::\d&#123;12&#125;:handshake\/o-&#91;a-z0-9&#93;&#123;10,32&#125;\/&#91;a-z_&#93;&#123;1,32&#125;\/h-&#91;0-9a-z&#93;&#123;8,32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ExpirationTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the handshake expires.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>ID for the handshake. The regex pattern for handshake ID string requires "h-" followed by from 8 to 32 lowercase letters or digits. (pattern: &lt;code&gt;^h-&#91;0-9a-z&#93;&#123;8,32&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Parties" /></td>
    <td><code>array</code></td>
    <td>An array of HandshakeParty objects. Contains details for participant in a handshake.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the handshake request was made.</td>
</tr>
<tr>
    <td><CopyableCode code="Resources" /></td>
    <td><code>array</code></td>
    <td>An array of HandshakeResource objects. When needed, contains additional details for a handshake. For example, the email address for the sender.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
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
    <td><a href="#list_handshakes_for_account"><CopyableCode code="list_handshakes_for_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the recent handshakes that you have received. You can view CANCELED, ACCEPTED, DECLINED, or EXPIRED handshakes in API responses for 30 days before they are deleted. You can call this operation from any account in a organization. When calling List* operations, always check the NextToken response parameter value, even if you receive an empty result set. These operations can occasionally return an empty set of results even when more results are available. Continue making requests until NextToken returns null. A null NextToken value indicates that you have retrieved all available results.</td>
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
    defaultValue="list_handshakes_for_account"
    values={[
        { label: 'list_handshakes_for_account', value: 'list_handshakes_for_account' }
    ]}
>
<TabItem value="list_handshakes_for_account">

Lists the recent handshakes that you have received. You can view CANCELED, ACCEPTED, DECLINED, or EXPIRED handshakes in API responses for 30 days before they are deleted. You can call this operation from any account in a organization. When calling List* operations, always check the NextToken response parameter value, even if you receive an empty result set. These operations can occasionally return an empty set of results even when more results are available. Continue making requests until NextToken returns null. A null NextToken value indicates that you have retrieved all available results.

```sql
SELECT
Action,
Arn,
ExpirationTimestamp,
Id,
Parties,
RequestedTimestamp,
Resources,
State
FROM aws.organizations.handshakes_for_accounts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
