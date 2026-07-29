--- 
title: accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - accounts
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

Creates, updates, deletes, gets or lists an <code>accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime.accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_account"
    values={[
        { label: 'get_account', value: 'get_account' },
        { label: 'list_accounts', value: 'list_accounts' }
    ]}
>
<TabItem value="get_account">

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
    <td>The Amazon Chime account ID.</td>
</tr>
<tr>
    <td><CopyableCode code="account_status" /></td>
    <td><code>string</code></td>
    <td>The status of the account. (Suspended, Active)</td>
</tr>
<tr>
    <td><CopyableCode code="account_type" /></td>
    <td><code>string</code></td>
    <td>The Amazon Chime account type. For more information about different account types, see Managing Your Amazon Chime Accounts in the Amazon Chime Administration Guide. (Team, EnterpriseDirectory, EnterpriseLWA, EnterpriseOIDC)</td>
</tr>
<tr>
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The AWS account ID.</td>
</tr>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Amazon Chime account creation timestamp, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="default_license" /></td>
    <td><code>string</code></td>
    <td>The default license for the Amazon Chime account. (Basic, Plus, Pro, ProTrial)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The Amazon Chime account name.</td>
</tr>
<tr>
    <td><CopyableCode code="signin_delegate_groups" /></td>
    <td><code>array</code></td>
    <td>The sign-in delegate groups associated with the account.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_licenses" /></td>
    <td><code>array</code></td>
    <td>Supported licenses for the Amazon Chime account.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_accounts">

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
    <td>The Amazon Chime account ID.</td>
</tr>
<tr>
    <td><CopyableCode code="account_status" /></td>
    <td><code>string</code></td>
    <td>The status of the account. (Suspended, Active)</td>
</tr>
<tr>
    <td><CopyableCode code="account_type" /></td>
    <td><code>string</code></td>
    <td>The Amazon Chime account type. For more information about different account types, see Managing Your Amazon Chime Accounts in the Amazon Chime Administration Guide. (Team, EnterpriseDirectory, EnterpriseLWA, EnterpriseOIDC)</td>
</tr>
<tr>
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The AWS account ID.</td>
</tr>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Amazon Chime account creation timestamp, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="default_license" /></td>
    <td><code>string</code></td>
    <td>The default license for the Amazon Chime account. (Basic, Plus, Pro, ProTrial)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The Amazon Chime account name.</td>
</tr>
<tr>
    <td><CopyableCode code="signin_delegate_groups" /></td>
    <td><code>array</code></td>
    <td>The sign-in delegate groups associated with the account.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_licenses" /></td>
    <td><code>array</code></td>
    <td>Supported licenses for the Amazon Chime account.</td>
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
    <td><a href="#get_account"><CopyableCode code="get_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details for the specified Amazon Chime account, such as account type and supported licenses.</td>
</tr>
<tr>
    <td><a href="#list_accounts"><CopyableCode code="list_accounts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-user-email"><code>user-email</code></a>, <a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists the Amazon Chime accounts under the administrator's AWS account. You can filter accounts by account name prefix. To find out which Amazon Chime account a user belongs to, you can filter by the user's email address, which returns one account result.</td>
</tr>
<tr>
    <td><a href="#create_account"><CopyableCode code="create_account" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an Amazon Chime account under the administrator's AWS account. Only Team account types are currently supported for this action. For more information about different account types, see Managing Your Amazon Chime Accounts in the Amazon Chime Administration Guide.</td>
</tr>
<tr>
    <td><a href="#associate_signin_delegate_groups_with_account"><CopyableCode code="associate_signin_delegate_groups_with_account" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SigninDelegateGroups"><code>SigninDelegateGroups</code></a></td>
    <td></td>
    <td>Associates the specified sign-in delegate groups with the specified Amazon Chime account.</td>
</tr>
<tr>
    <td><a href="#disassociate_signin_delegate_groups_from_account"><CopyableCode code="disassociate_signin_delegate_groups_from_account" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GroupNames"><code>GroupNames</code></a></td>
    <td></td>
    <td>Disassociates the specified sign-in delegate groups from the specified Amazon Chime account.</td>
</tr>
<tr>
    <td><a href="#update_account"><CopyableCode code="update_account" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates account details for the specified Amazon Chime account. Currently, only account name and default license updates are supported for this action.</td>
</tr>
<tr>
    <td><a href="#delete_account"><CopyableCode code="delete_account" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified Amazon Chime account. You must suspend all users before deleting Team account. You can use the BatchSuspendUser action to dodo. For EnterpriseLWA and EnterpriseAD accounts, you must release the claimed domains for your Amazon Chime account before deletion. As soon as you release the domain, all users under that account are suspended. Deleted accounts appear in your Disabled accounts list for 90 days. To restore deleted account from your Disabled accounts list, you must contact AWS Support. After 90 days, deleted accounts are permanently removed from your Disabled accounts list.</td>
</tr>
<tr>
    <td><a href="#batch_create_room_membership"><CopyableCode code="batch_create_room_membership" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-room_id"><code>room_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MembershipItemList"><code>MembershipItemList</code></a></td>
    <td></td>
    <td>Adds up to 50 members to a chat room in an Amazon Chime Enterprise account. Members can be users or bots. The member role designates whether the member is a chat room administrator or a general chat room member.</td>
</tr>
<tr>
    <td><a href="#batch_suspend_user"><CopyableCode code="batch_suspend_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserIdList"><code>UserIdList</code></a></td>
    <td></td>
    <td>Suspends up to 50 users from a Team or EnterpriseLWA Amazon Chime account. For more information about different account types, see Managing Your Amazon Chime Accounts in the Amazon Chime Administration Guide. Users suspended from a Team account are disassociated from the account,but they can continue to use Amazon Chime as free users. To remove the suspension from suspended Team account users, invite them to the Team account again. You can use the InviteUsers action to do so. Users suspended from an EnterpriseLWA account are immediately signed out of Amazon Chime and can no longer sign in. To remove the suspension from suspended EnterpriseLWA account users, use the BatchUnsuspendUser action. To sign out users without suspending them, use the LogoutUser action.</td>
</tr>
<tr>
    <td><a href="#batch_unsuspend_user"><CopyableCode code="batch_unsuspend_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserIdList"><code>UserIdList</code></a></td>
    <td></td>
    <td>Removes the suspension from up to 50 previously suspended users for the specified Amazon Chime EnterpriseLWA account. Only users on EnterpriseLWA accounts can be unsuspended using this action. For more information about different account types, see Managing Your Amazon Chime Accounts in the account types, in the Amazon Chime Administration Guide. Previously suspended users who are unsuspended using this action are returned to Registered status. Users who are not previously suspended are ignored.</td>
</tr>
<tr>
    <td><a href="#batch_update_user"><CopyableCode code="batch_update_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UpdateUserRequestItems"><code>UpdateUserRequestItems</code></a></td>
    <td></td>
    <td>Updates user details within the UpdateUserRequestItem object for up to 20 users for the specified Amazon Chime account. Currently, only LicenseType updates are supported for this action.</td>
</tr>
<tr>
    <td><a href="#logout_user"><CopyableCode code="logout_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Logs out the specified user from all of the devices they are currently logged into.</td>
</tr>
<tr>
    <td><a href="#redact_conversation_message"><CopyableCode code="redact_conversation_message" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-conversation_id"><code>conversation_id</code></a>, <a href="#parameter-message_id"><code>message_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Redacts the specified message from the specified Amazon Chime conversation.</td>
</tr>
<tr>
    <td><a href="#redact_room_message"><CopyableCode code="redact_room_message" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-room_id"><code>room_id</code></a>, <a href="#parameter-message_id"><code>message_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Redacts the specified message from the specified Amazon Chime channel.</td>
</tr>
<tr>
    <td><a href="#regenerate_security_token"><CopyableCode code="regenerate_security_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-bot_id"><code>bot_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Regenerates the security token for a bot.</td>
</tr>
<tr>
    <td><a href="#reset_personal_pin"><CopyableCode code="reset_personal_pin" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Resets the personal meeting PIN for the specified user on an Amazon Chime account. Returns the User object with the updated personal meeting PIN.</td>
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
<tr id="parameter-account_id">
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Chime account ID.</td>
</tr>
<tr id="parameter-bot_id">
    <td><CopyableCode code="bot_id" /></td>
    <td><code>string</code></td>
    <td>The bot ID.</td>
</tr>
<tr id="parameter-conversation_id">
    <td><CopyableCode code="conversation_id" /></td>
    <td><code>string</code></td>
    <td>The conversation ID.</td>
</tr>
<tr id="parameter-message_id">
    <td><CopyableCode code="message_id" /></td>
    <td><code>string</code></td>
    <td>The message ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-room_id">
    <td><CopyableCode code="room_id" /></td>
    <td><code>string</code></td>
    <td>The room ID.</td>
</tr>
<tr id="parameter-user_id">
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The user ID.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call. Defaults to 100.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Amazon Chime account name prefix with which to filter results.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results.</td>
</tr>
<tr id="parameter-user-email">
    <td><CopyableCode code="user-email" /></td>
    <td><code>string</code></td>
    <td>User email address with which to filter results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_account"
    values={[
        { label: 'get_account', value: 'get_account' },
        { label: 'list_accounts', value: 'list_accounts' }
    ]}
>
<TabItem value="get_account">

Retrieves details for the specified Amazon Chime account, such as account type and supported licenses.

```sql
SELECT
account_id,
account_status,
account_type,
aws_account_id,
created_timestamp,
default_license,
name,
signin_delegate_groups,
supported_licenses
FROM aws.chime.accounts
WHERE account_id = '{{ account_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_accounts">

Lists the Amazon Chime accounts under the administrator's AWS account. You can filter accounts by account name prefix. To find out which Amazon Chime account a user belongs to, you can filter by the user's email address, which returns one account result.

```sql
SELECT
account_id,
account_status,
account_type,
aws_account_id,
created_timestamp,
default_license,
name,
signin_delegate_groups,
supported_licenses
FROM aws.chime.accounts
WHERE region = '{{ region }}' -- required
AND name = '{{ name }}'
AND `user-email` = '{{ user-email }}'
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_account"
    values={[
        { label: 'create_account', value: 'create_account' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_account">

Creates an Amazon Chime account under the administrator's AWS account. Only Team account types are currently supported for this action. For more information about different account types, see Managing Your Amazon Chime Accounts in the Amazon Chime Administration Guide.

```sql
INSERT INTO aws.chime.accounts (
Name,
region
)
SELECT 
'{{ Name }}',
'{{ region }}'
RETURNING
account
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: accounts
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the accounts resource.
    - name: Name
      value: "{{ Name }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_signin_delegate_groups_with_account"
    values={[
        { label: 'associate_signin_delegate_groups_with_account', value: 'associate_signin_delegate_groups_with_account' },
        { label: 'disassociate_signin_delegate_groups_from_account', value: 'disassociate_signin_delegate_groups_from_account' },
        { label: 'update_account', value: 'update_account' }
    ]}
>
<TabItem value="associate_signin_delegate_groups_with_account">

Associates the specified sign-in delegate groups with the specified Amazon Chime account.

```sql
UPDATE aws.chime.accounts
SET 
SigninDelegateGroups = '{{ SigninDelegateGroups }}'
WHERE 
account_id = '{{ account_id }}' --required
AND region = '{{ region }}' --required
AND SigninDelegateGroups = '{{ SigninDelegateGroups }}' --required;
```
</TabItem>
<TabItem value="disassociate_signin_delegate_groups_from_account">

Disassociates the specified sign-in delegate groups from the specified Amazon Chime account.

```sql
UPDATE aws.chime.accounts
SET 
GroupNames = '{{ GroupNames }}'
WHERE 
account_id = '{{ account_id }}' --required
AND region = '{{ region }}' --required
AND GroupNames = '{{ GroupNames }}' --required;
```
</TabItem>
<TabItem value="update_account">

Updates account details for the specified Amazon Chime account. Currently, only account name and default license updates are supported for this action.

```sql
UPDATE aws.chime.accounts
SET 
Name = '{{ Name }}',
DefaultLicense = '{{ DefaultLicense }}'
WHERE 
account_id = '{{ account_id }}' --required
AND region = '{{ region }}' --required
RETURNING
account;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_account"
    values={[
        { label: 'delete_account', value: 'delete_account' }
    ]}
>
<TabItem value="delete_account">

Deletes the specified Amazon Chime account. You must suspend all users before deleting Team account. You can use the BatchSuspendUser action to dodo. For EnterpriseLWA and EnterpriseAD accounts, you must release the claimed domains for your Amazon Chime account before deletion. As soon as you release the domain, all users under that account are suspended. Deleted accounts appear in your Disabled accounts list for 90 days. To restore deleted account from your Disabled accounts list, you must contact AWS Support. After 90 days, deleted accounts are permanently removed from your Disabled accounts list.

```sql
DELETE FROM aws.chime.accounts
WHERE account_id = '{{ account_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_create_room_membership"
    values={[
        { label: 'batch_create_room_membership', value: 'batch_create_room_membership' },
        { label: 'batch_suspend_user', value: 'batch_suspend_user' },
        { label: 'batch_unsuspend_user', value: 'batch_unsuspend_user' },
        { label: 'batch_update_user', value: 'batch_update_user' },
        { label: 'logout_user', value: 'logout_user' },
        { label: 'redact_conversation_message', value: 'redact_conversation_message' },
        { label: 'redact_room_message', value: 'redact_room_message' },
        { label: 'regenerate_security_token', value: 'regenerate_security_token' },
        { label: 'reset_personal_pin', value: 'reset_personal_pin' }
    ]}
>
<TabItem value="batch_create_room_membership">

Adds up to 50 members to a chat room in an Amazon Chime Enterprise account. Members can be users or bots. The member role designates whether the member is a chat room administrator or a general chat room member.

```sql
EXEC aws.chime.accounts.batch_create_room_membership 
@account_id='{{ account_id }}' --required, 
@room_id='{{ room_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"MembershipItemList": "{{ MembershipItemList }}"
}'
;
```
</TabItem>
<TabItem value="batch_suspend_user">

Suspends up to 50 users from a Team or EnterpriseLWA Amazon Chime account. For more information about different account types, see Managing Your Amazon Chime Accounts in the Amazon Chime Administration Guide. Users suspended from a Team account are disassociated from the account,but they can continue to use Amazon Chime as free users. To remove the suspension from suspended Team account users, invite them to the Team account again. You can use the InviteUsers action to do so. Users suspended from an EnterpriseLWA account are immediately signed out of Amazon Chime and can no longer sign in. To remove the suspension from suspended EnterpriseLWA account users, use the BatchUnsuspendUser action. To sign out users without suspending them, use the LogoutUser action.

```sql
EXEC aws.chime.accounts.batch_suspend_user 
@account_id='{{ account_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"UserIdList": "{{ UserIdList }}"
}'
;
```
</TabItem>
<TabItem value="batch_unsuspend_user">

Removes the suspension from up to 50 previously suspended users for the specified Amazon Chime EnterpriseLWA account. Only users on EnterpriseLWA accounts can be unsuspended using this action. For more information about different account types, see Managing Your Amazon Chime Accounts in the account types, in the Amazon Chime Administration Guide. Previously suspended users who are unsuspended using this action are returned to Registered status. Users who are not previously suspended are ignored.

```sql
EXEC aws.chime.accounts.batch_unsuspend_user 
@account_id='{{ account_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"UserIdList": "{{ UserIdList }}"
}'
;
```
</TabItem>
<TabItem value="batch_update_user">

Updates user details within the UpdateUserRequestItem object for up to 20 users for the specified Amazon Chime account. Currently, only LicenseType updates are supported for this action.

```sql
EXEC aws.chime.accounts.batch_update_user 
@account_id='{{ account_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"UpdateUserRequestItems": "{{ UpdateUserRequestItems }}"
}'
;
```
</TabItem>
<TabItem value="logout_user">

Logs out the specified user from all of the devices they are currently logged into.

```sql
EXEC aws.chime.accounts.logout_user 
@account_id='{{ account_id }}' --required, 
@user_id='{{ user_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="redact_conversation_message">

Redacts the specified message from the specified Amazon Chime conversation.

```sql
EXEC aws.chime.accounts.redact_conversation_message 
@account_id='{{ account_id }}' --required, 
@conversation_id='{{ conversation_id }}' --required, 
@message_id='{{ message_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="redact_room_message">

Redacts the specified message from the specified Amazon Chime channel.

```sql
EXEC aws.chime.accounts.redact_room_message 
@account_id='{{ account_id }}' --required, 
@room_id='{{ room_id }}' --required, 
@message_id='{{ message_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="regenerate_security_token">

Regenerates the security token for a bot.

```sql
EXEC aws.chime.accounts.regenerate_security_token 
@account_id='{{ account_id }}' --required, 
@bot_id='{{ bot_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="reset_personal_pin">

Resets the personal meeting PIN for the specified user on an Amazon Chime account. Returns the User object with the updated personal meeting PIN.

```sql
EXEC aws.chime.accounts.reset_personal_pin 
@account_id='{{ account_id }}' --required, 
@user_id='{{ user_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
