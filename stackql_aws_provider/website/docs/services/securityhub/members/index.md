--- 
title: members
hide_title: false
hide_table_of_contents: false
keywords:
  - members
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

Creates, updates, deletes, gets or lists a <code>members</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="members" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.members" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_members"
    values={[
        { label: 'get_members', value: 'get_members' },
        { label: 'list_members', value: 'list_members' }
    ]}
>
<TabItem value="get_members">

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
    <td><CopyableCode code="Members" /></td>
    <td><code>array</code></td>
    <td>The list of details about the Security Hub CSPM member accounts.</td>
</tr>
<tr>
    <td><CopyableCode code="UnprocessedAccounts" /></td>
    <td><code>array</code></td>
    <td>The list of Amazon Web Services accounts that could not be processed. For each account, the list includes the account ID and the email address.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_members">

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
    <td><CopyableCode code="AccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the member account.</td>
</tr>
<tr>
    <td><CopyableCode code="AdministratorId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the Security Hub CSPM administrator account associated with this member account. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Email" /></td>
    <td><code>string</code></td>
    <td>The email address of the member account. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="InvitedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>A timestamp for the date and time when the invitation was sent to the member account.</td>
</tr>
<tr>
    <td><CopyableCode code="MasterId" /></td>
    <td><code>string</code></td>
    <td>This is replaced by AdministratorID. The Amazon Web Services account ID of the Security Hub CSPM administrator account associated with this member account. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="MemberStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the relationship between the member account and its administrator account. The status can have one of the following values: Created - Indicates that the administrator account added the member account, but has not yet invited the member account. Invited - Indicates that the administrator account invited the member account. The member account has not yet responded to the invitation. Enabled - Indicates that the member account is currently active. For manually invited member accounts, indicates that the member account accepted the invitation. Removed - Indicates that the administrator account disassociated the member account. Resigned - Indicates that the member account disassociated themselves from the administrator account. Deleted - Indicates that the administrator account deleted the member account. AccountSuspended - Indicates that an organization account was suspended from Amazon Web Services at the same time that the administrator account tried to enable the organization account as a member account. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp for the date and time when the member account was updated.</td>
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
    <td><a href="#get_members"><CopyableCode code="get_members" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the details for the Security Hub CSPM member accounts for the specified account IDs. An administrator account can be either the delegated Security Hub CSPM administrator account for an organization or an administrator account that enabled Security Hub CSPM manually. The results include both member accounts that are managed using Organizations and accounts that were invited manually.</td>
</tr>
<tr>
    <td><a href="#list_members"><CopyableCode code="list_members" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-OnlyAssociated"><code>OnlyAssociated</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Lists details about all member accounts for the current Security Hub CSPM administrator account. The results include both member accounts that belong to an organization and member accounts that were invited manually.</td>
</tr>
<tr>
    <td><a href="#create_members"><CopyableCode code="create_members" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccountDetails"><code>AccountDetails</code></a></td>
    <td></td>
    <td>Creates a member association in Security Hub CSPM between the specified accounts and the account used to make the request, which is the administrator account. If you are integrated with Organizations, then the administrator account is designated by the organization management account. CreateMembers is always used to add accounts that are not organization members. For accounts that are managed using Organizations, CreateMembers is only used in the following cases: Security Hub CSPM is not configured to automatically add new organization accounts. The account was disassociated or deleted in Security Hub CSPM. This action can only be used by an account that has Security Hub CSPM enabled. To enable Security Hub CSPM, you can use the EnableSecurityHub operation. For accounts that are not organization members, you create the account association and then send an invitation to the member account. To send the invitation, you use the InviteMembers operation. If the account owner accepts the invitation, the account becomes a member account in Security Hub CSPM. Accounts that are managed using Organizations don't receive an invitation. They automatically become a member account in Security Hub CSPM. If the organization account does not have Security Hub CSPM enabled, then Security Hub CSPM and the default standards are automatically enabled. Note that Security Hub CSPM cannot be enabled automatically for the organization management account. The organization management account must enable Security Hub CSPM before the administrator account enables it as a member account. For organization accounts that already have Security Hub CSPM enabled, Security Hub CSPM does not make any other changes to those accounts. It does not change their enabled standards or controls. A permissions policy is added that permits the administrator account to view the findings generated in the member account. To remove the association between the administrator and member accounts, use the DisassociateFromMasterAccount or DisassociateMembers operation.</td>
</tr>
<tr>
    <td><a href="#disassociate_members"><CopyableCode code="disassociate_members" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccountIds"><code>AccountIds</code></a></td>
    <td></td>
    <td>Disassociates the specified member accounts from the associated administrator account. Can be used to disassociate both accounts that are managed using Organizations and accounts that were invited manually.</td>
</tr>
<tr>
    <td><a href="#delete_members"><CopyableCode code="delete_members" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified member accounts from Security Hub CSPM. You can invoke this API only to delete accounts that became members through invitation. You can't invoke this API to delete accounts that belong to an Organizations organization.</td>
</tr>
<tr>
    <td><a href="#invite_members"><CopyableCode code="invite_members" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccountIds"><code>AccountIds</code></a></td>
    <td></td>
    <td>We recommend using Organizations instead of Security Hub CSPM invitations to manage your member accounts. For information, see Managing Security Hub CSPM administrator and member accounts with Organizations in the Security Hub CSPM User Guide. Invites other Amazon Web Services accounts to become member accounts for the Security Hub CSPM administrator account that the invitation is sent from. This operation is only used to invite accounts that don't belong to an Amazon Web Services organization. Organization accounts don't receive invitations. Before you can use this action to invite a member, you must first use the CreateMembers action to create the member account in Security Hub CSPM. When the account owner enables Security Hub CSPM and accepts the invitation to become a member account, the administrator account can view the findings generated in the member account.</td>
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
    <td>The token that is required for pagination. On your first call to the ListMembers operation, set the value of this parameter to NULL. For subsequent calls to the operation, to continue listing data, set the value of this parameter to the value returned from the previous response.</td>
</tr>
<tr id="parameter-OnlyAssociated">
    <td><CopyableCode code="OnlyAssociated" /></td>
    <td><code>boolean</code></td>
    <td>Specifies which member accounts to include in the response based on their relationship status with the administrator account. The default value is TRUE. If OnlyAssociated is set to TRUE, the response includes member accounts whose relationship status with the administrator account is set to ENABLED. If OnlyAssociated is set to FALSE, the response includes all existing member accounts.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_members"
    values={[
        { label: 'get_members', value: 'get_members' },
        { label: 'list_members', value: 'list_members' }
    ]}
>
<TabItem value="get_members">

Returns the details for the Security Hub CSPM member accounts for the specified account IDs. An administrator account can be either the delegated Security Hub CSPM administrator account for an organization or an administrator account that enabled Security Hub CSPM manually. The results include both member accounts that are managed using Organizations and accounts that were invited manually.

```sql
SELECT
Members,
UnprocessedAccounts
FROM aws.securityhub.members
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_members">

Lists details about all member accounts for the current Security Hub CSPM administrator account. The results include both member accounts that belong to an organization and member accounts that were invited manually.

```sql
SELECT
AccountId,
AdministratorId,
Email,
InvitedAt,
MasterId,
MemberStatus,
UpdatedAt
FROM aws.securityhub.members
WHERE region = '{{ region }}' -- required
AND OnlyAssociated = '{{ OnlyAssociated }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_members"
    values={[
        { label: 'create_members', value: 'create_members' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_members">

Creates a member association in Security Hub CSPM between the specified accounts and the account used to make the request, which is the administrator account. If you are integrated with Organizations, then the administrator account is designated by the organization management account. CreateMembers is always used to add accounts that are not organization members. For accounts that are managed using Organizations, CreateMembers is only used in the following cases: Security Hub CSPM is not configured to automatically add new organization accounts. The account was disassociated or deleted in Security Hub CSPM. This action can only be used by an account that has Security Hub CSPM enabled. To enable Security Hub CSPM, you can use the EnableSecurityHub operation. For accounts that are not organization members, you create the account association and then send an invitation to the member account. To send the invitation, you use the InviteMembers operation. If the account owner accepts the invitation, the account becomes a member account in Security Hub CSPM. Accounts that are managed using Organizations don't receive an invitation. They automatically become a member account in Security Hub CSPM. If the organization account does not have Security Hub CSPM enabled, then Security Hub CSPM and the default standards are automatically enabled. Note that Security Hub CSPM cannot be enabled automatically for the organization management account. The organization management account must enable Security Hub CSPM before the administrator account enables it as a member account. For organization accounts that already have Security Hub CSPM enabled, Security Hub CSPM does not make any other changes to those accounts. It does not change their enabled standards or controls. A permissions policy is added that permits the administrator account to view the findings generated in the member account. To remove the association between the administrator and member accounts, use the DisassociateFromMasterAccount or DisassociateMembers operation.

```sql
INSERT INTO aws.securityhub.members (
AccountDetails,
region
)
SELECT 
'{{ AccountDetails }}' /* required */,
'{{ region }}'
RETURNING
UnprocessedAccounts
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: members
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the members resource.
    - name: AccountDetails
      value:
        - AccountId: "{{ AccountId }}"
          Email: "{{ Email }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="disassociate_members"
    values={[
        { label: 'disassociate_members', value: 'disassociate_members' }
    ]}
>
<TabItem value="disassociate_members">

Disassociates the specified member accounts from the associated administrator account. Can be used to disassociate both accounts that are managed using Organizations and accounts that were invited manually.

```sql
UPDATE aws.securityhub.members
SET 
AccountIds = '{{ AccountIds }}'
WHERE 
region = '{{ region }}' --required
AND AccountIds = '{{ AccountIds }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_members"
    values={[
        { label: 'delete_members', value: 'delete_members' }
    ]}
>
<TabItem value="delete_members">

Deletes the specified member accounts from Security Hub CSPM. You can invoke this API only to delete accounts that became members through invitation. You can't invoke this API to delete accounts that belong to an Organizations organization.

```sql
DELETE FROM aws.securityhub.members
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="invite_members"
    values={[
        { label: 'invite_members', value: 'invite_members' }
    ]}
>
<TabItem value="invite_members">

We recommend using Organizations instead of Security Hub CSPM invitations to manage your member accounts. For information, see Managing Security Hub CSPM administrator and member accounts with Organizations in the Security Hub CSPM User Guide. Invites other Amazon Web Services accounts to become member accounts for the Security Hub CSPM administrator account that the invitation is sent from. This operation is only used to invite accounts that don't belong to an Amazon Web Services organization. Organization accounts don't receive invitations. Before you can use this action to invite a member, you must first use the CreateMembers action to create the member account in Security Hub CSPM. When the account owner enables Security Hub CSPM and accepts the invitation to become a member account, the administrator account can view the findings generated in the member account.

```sql
EXEC aws.securityhub.members.invite_members 
@region='{{ region }}' --required 
@@json=
'{
"AccountIds": "{{ AccountIds }}"
}'
;
```
</TabItem>
</Tabs>
