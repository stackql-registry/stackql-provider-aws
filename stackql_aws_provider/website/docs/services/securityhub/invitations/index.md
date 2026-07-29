--- 
title: invitations
hide_title: false
hide_table_of_contents: false
keywords:
  - invitations
  - securityhub
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

Creates, updates, deletes, gets or lists an <code>invitations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="invitations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.invitations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_invitations"
    values={[
        { label: 'list_invitations', value: 'list_invitations' }
    ]}
>
<TabItem value="list_invitations">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The account ID of the Security Hub CSPM administrator account that the invitation was sent from.</td>
</tr>
<tr>
    <td><CopyableCode code="invitation_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the invitation sent to the member account. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="invited_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the invitation was sent.</td>
</tr>
<tr>
    <td><CopyableCode code="member_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the association between the member and administrator accounts. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#list_invitations"><CopyableCode code="list_invitations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>We recommend using Organizations instead of Security Hub CSPM invitations to manage your member accounts. For information, see Managing Security Hub CSPM administrator and member accounts with Organizations in the Security Hub CSPM User Guide. Lists all Security Hub CSPM membership invitations that were sent to the calling account. Only accounts that are managed by invitation can use this operation. Accounts that are managed using the integration with Organizations don't receive invitations.</td>
</tr>
<tr>
    <td><a href="#delete_invitations"><CopyableCode code="delete_invitations" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>We recommend using Organizations instead of Security Hub CSPM invitations to manage your member accounts. For information, see Managing Security Hub CSPM administrator and member accounts with Organizations in the Security Hub CSPM User Guide. Deletes invitations to become a Security Hub CSPM member account. A Security Hub CSPM administrator account can use this operation to delete invitations sent to one or more prospective member accounts. This operation is only used to delete invitations that are sent to prospective member accounts that aren't part of an Amazon Web Services organization. Organization accounts don't receive invitations.</td>
</tr>
<tr>
    <td><a href="#accept_administrator_invitation"><CopyableCode code="accept_administrator_invitation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AdministratorId"><code>AdministratorId</code></a>, <a href="#parameter-InvitationId"><code>InvitationId</code></a></td>
    <td></td>
    <td>We recommend using Organizations instead of Security Hub CSPM invitations to manage your member accounts. For information, see Managing Security Hub CSPM administrator and member accounts with Organizations in the Security Hub CSPM User Guide. Accepts the invitation to be a member account and be monitored by the Security Hub CSPM administrator account that the invitation was sent from. This operation is only used by member accounts that are not added through Organizations. When the member account accepts the invitation, permission is granted to the administrator account to view findings generated in the member account.</td>
</tr>
<tr>
    <td><a href="#accept_invitation"><CopyableCode code="accept_invitation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MasterId"><code>MasterId</code></a>, <a href="#parameter-InvitationId"><code>InvitationId</code></a></td>
    <td></td>
    <td>This method is deprecated. Instead, use AcceptAdministratorInvitation. The Security Hub CSPM console continues to use AcceptInvitation. It will eventually change to use AcceptAdministratorInvitation. Any IAM policies that specifically control access to this function must continue to use AcceptInvitation. You should also add AcceptAdministratorInvitation to your policies to ensure that the correct permissions are in place after the console begins to use AcceptAdministratorInvitation. Accepts the invitation to be a member account and be monitored by the Security Hub CSPM administrator account that the invitation was sent from. This operation is only used by member accounts that are not added through Organizations. When the member account accepts the invitation, permission is granted to the administrator account to view findings generated in the member account.</td>
</tr>
<tr>
    <td><a href="#decline_invitations"><CopyableCode code="decline_invitations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccountIds"><code>AccountIds</code></a></td>
    <td></td>
    <td>We recommend using Organizations instead of Security Hub CSPM invitations to manage your member accounts. For information, see Managing Security Hub CSPM administrator and member accounts with Organizations in the Security Hub CSPM User Guide. Declines invitations to become a Security Hub CSPM member account. A prospective member account uses this operation to decline an invitation to become a member. Only member accounts that aren't part of an Amazon Web Services organization should use this operation. Organization accounts don't receive invitations.</td>
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
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return in the response.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token that is required for pagination. On your first call to the ListInvitations operation, set the value of this parameter to NULL. For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_invitations"
    values={[
        { label: 'list_invitations', value: 'list_invitations' }
    ]}
>
<TabItem value="list_invitations">

We recommend using Organizations instead of Security Hub CSPM invitations to manage your member accounts. For information, see Managing Security Hub CSPM administrator and member accounts with Organizations in the Security Hub CSPM User Guide. Lists all Security Hub CSPM membership invitations that were sent to the calling account. Only accounts that are managed by invitation can use this operation. Accounts that are managed using the integration with Organizations don't receive invitations.

```sql
SELECT
account_id,
invitation_id,
invited_at,
member_status
FROM aws.securityhub.invitations
WHERE region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_invitations"
    values={[
        { label: 'delete_invitations', value: 'delete_invitations' }
    ]}
>
<TabItem value="delete_invitations">

We recommend using Organizations instead of Security Hub CSPM invitations to manage your member accounts. For information, see Managing Security Hub CSPM administrator and member accounts with Organizations in the Security Hub CSPM User Guide. Deletes invitations to become a Security Hub CSPM member account. A Security Hub CSPM administrator account can use this operation to delete invitations sent to one or more prospective member accounts. This operation is only used to delete invitations that are sent to prospective member accounts that aren't part of an Amazon Web Services organization. Organization accounts don't receive invitations.

```sql
DELETE FROM aws.securityhub.invitations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_administrator_invitation"
    values={[
        { label: 'accept_administrator_invitation', value: 'accept_administrator_invitation' },
        { label: 'accept_invitation', value: 'accept_invitation' },
        { label: 'decline_invitations', value: 'decline_invitations' }
    ]}
>
<TabItem value="accept_administrator_invitation">

We recommend using Organizations instead of Security Hub CSPM invitations to manage your member accounts. For information, see Managing Security Hub CSPM administrator and member accounts with Organizations in the Security Hub CSPM User Guide. Accepts the invitation to be a member account and be monitored by the Security Hub CSPM administrator account that the invitation was sent from. This operation is only used by member accounts that are not added through Organizations. When the member account accepts the invitation, permission is granted to the administrator account to view findings generated in the member account.

```sql
EXEC aws.securityhub.invitations.accept_administrator_invitation 
@region='{{ region }}' --required 
@@json=
'{
"AdministratorId": "{{ AdministratorId }}", 
"InvitationId": "{{ InvitationId }}"
}'
;
```
</TabItem>
<TabItem value="accept_invitation">

This method is deprecated. Instead, use AcceptAdministratorInvitation. The Security Hub CSPM console continues to use AcceptInvitation. It will eventually change to use AcceptAdministratorInvitation. Any IAM policies that specifically control access to this function must continue to use AcceptInvitation. You should also add AcceptAdministratorInvitation to your policies to ensure that the correct permissions are in place after the console begins to use AcceptAdministratorInvitation. Accepts the invitation to be a member account and be monitored by the Security Hub CSPM administrator account that the invitation was sent from. This operation is only used by member accounts that are not added through Organizations. When the member account accepts the invitation, permission is granted to the administrator account to view findings generated in the member account.

```sql
EXEC aws.securityhub.invitations.accept_invitation 
@region='{{ region }}' --required 
@@json=
'{
"MasterId": "{{ MasterId }}", 
"InvitationId": "{{ InvitationId }}"
}'
;
```
</TabItem>
<TabItem value="decline_invitations">

We recommend using Organizations instead of Security Hub CSPM invitations to manage your member accounts. For information, see Managing Security Hub CSPM administrator and member accounts with Organizations in the Security Hub CSPM User Guide. Declines invitations to become a Security Hub CSPM member account. A prospective member account uses this operation to decline an invitation to become a member. Only member accounts that aren't part of an Amazon Web Services organization should use this operation. Organization accounts don't receive invitations.

```sql
EXEC aws.securityhub.invitations.decline_invitations 
@region='{{ region }}' --required 
@@json=
'{
"AccountIds": "{{ AccountIds }}"
}'
;
```
</TabItem>
</Tabs>
