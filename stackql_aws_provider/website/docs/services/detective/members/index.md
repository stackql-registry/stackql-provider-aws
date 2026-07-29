--- 
title: members
hide_title: false
hide_table_of_contents: false
keywords:
  - members
  - detective
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.detective.members" /></td></tr>
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
    <td><CopyableCode code="member_details" /></td>
    <td><code>array</code></td>
    <td>The member account details that Detective is returning in response to the request.</td>
</tr>
<tr>
    <td><CopyableCode code="unprocessed_accounts" /></td>
    <td><code>array</code></td>
    <td>The requested member accounts for which Detective was unable to return member details. For each account, provides the reason why the request could not be processed.</td>
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
    <td><CopyableCode code="member_details" /></td>
    <td><code>array</code></td>
    <td>The list of member accounts in the behavior graph. For invited accounts, the results include member accounts that did not pass verification and member accounts that have not yet accepted the invitation to the behavior graph. The results do not include member accounts that were removed from the behavior graph. For the organization behavior graph, the results do not include organization accounts that the Detective administrator account has not enabled as member accounts.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>If there are more member accounts remaining in the results, then use this pagination token to request the next page of member accounts.</td>
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
    <td>Returns the membership details for specified member accounts for a behavior graph.</td>
</tr>
<tr>
    <td><a href="#list_members"><CopyableCode code="list_members" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the list of member accounts for a behavior graph. For invited accounts, the results do not include member accounts that were removed from the behavior graph. For the organization behavior graph, the results do not include organization accounts that the Detective administrator account has not enabled as member accounts.</td>
</tr>
<tr>
    <td><a href="#create_members"><CopyableCode code="create_members" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GraphArn"><code>GraphArn</code></a>, <a href="#parameter-Accounts"><code>Accounts</code></a></td>
    <td></td>
    <td>CreateMembers is used to send invitations to accounts. For the organization behavior graph, the Detective administrator account uses CreateMembers to enable organization accounts as member accounts. For invited accounts, CreateMembers sends a request to invite the specified Amazon Web Services accounts to be member accounts in the behavior graph. This operation can only be called by the administrator account for a behavior graph. CreateMembers verifies the accounts and then invites the verified accounts. The administrator can optionally specify to not send invitation emails to the member accounts. This would be used when the administrator manages their member accounts centrally. For organization accounts in the organization behavior graph, CreateMembers attempts to enable the accounts. The organization accounts do not receive invitations. The request provides the behavior graph ARN and the list of accounts to invite or to enable. The response separates the requested accounts into two lists: The accounts that CreateMembers was able to process. For invited accounts, includes member accounts that are being verified, that have passed verification and are to be invited, and that have failed verification. For organization accounts in the organization behavior graph, includes accounts that can be enabled and that cannot be enabled. The accounts that CreateMembers was unable to process. This list includes accounts that were already invited to be member accounts in the behavior graph.</td>
</tr>
<tr>
    <td><a href="#delete_members"><CopyableCode code="delete_members" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the specified member accounts from the behavior graph. The removed accounts no longer contribute data to the behavior graph. This operation can only be called by the administrator account for the behavior graph. For invited accounts, the removed accounts are deleted from the list of accounts in the behavior graph. To restore the account, the administrator account must send another invitation. For organization accounts in the organization behavior graph, the Detective administrator account can always enable the organization account again. Organization accounts that are not enabled as member accounts are not included in the ListMembers results for the organization behavior graph. An administrator account cannot use DeleteMembers to remove their own account from the behavior graph. To disable a behavior graph, the administrator account uses the DeleteGraph API method.</td>
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
    defaultValue="get_members"
    values={[
        { label: 'get_members', value: 'get_members' },
        { label: 'list_members', value: 'list_members' }
    ]}
>
<TabItem value="get_members">

Returns the membership details for specified member accounts for a behavior graph.

```sql
SELECT
member_details,
unprocessed_accounts
FROM aws.detective.members
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_members">

Retrieves the list of member accounts for a behavior graph. For invited accounts, the results do not include member accounts that were removed from the behavior graph. For the organization behavior graph, the results do not include organization accounts that the Detective administrator account has not enabled as member accounts.

```sql
SELECT
member_details,
next_token
FROM aws.detective.members
WHERE region = '{{ region }}' -- required
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

CreateMembers is used to send invitations to accounts. For the organization behavior graph, the Detective administrator account uses CreateMembers to enable organization accounts as member accounts. For invited accounts, CreateMembers sends a request to invite the specified Amazon Web Services accounts to be member accounts in the behavior graph. This operation can only be called by the administrator account for a behavior graph. CreateMembers verifies the accounts and then invites the verified accounts. The administrator can optionally specify to not send invitation emails to the member accounts. This would be used when the administrator manages their member accounts centrally. For organization accounts in the organization behavior graph, CreateMembers attempts to enable the accounts. The organization accounts do not receive invitations. The request provides the behavior graph ARN and the list of accounts to invite or to enable. The response separates the requested accounts into two lists: The accounts that CreateMembers was able to process. For invited accounts, includes member accounts that are being verified, that have passed verification and are to be invited, and that have failed verification. For organization accounts in the organization behavior graph, includes accounts that can be enabled and that cannot be enabled. The accounts that CreateMembers was unable to process. This list includes accounts that were already invited to be member accounts in the behavior graph.

```sql
INSERT INTO aws.detective.members (
GraphArn,
Message,
DisableEmailNotification,
Accounts,
region
)
SELECT 
'{{ GraphArn }}' /* required */,
'{{ Message }}',
{{ DisableEmailNotification }},
'{{ Accounts }}' /* required */,
'{{ region }}'
RETURNING
members,
unprocessed_accounts
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
    - name: GraphArn
      value: "{{ GraphArn }}"
    - name: Message
      value: "{{ Message }}"
    - name: DisableEmailNotification
      value: {{ DisableEmailNotification }}
    - name: Accounts
      value:
        - AccountId: "{{ AccountId }}"
          EmailAddress: "{{ EmailAddress }}"
`}</CodeBlock>

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

Removes the specified member accounts from the behavior graph. The removed accounts no longer contribute data to the behavior graph. This operation can only be called by the administrator account for the behavior graph. For invited accounts, the removed accounts are deleted from the list of accounts in the behavior graph. To restore the account, the administrator account must send another invitation. For organization accounts in the organization behavior graph, the Detective administrator account can always enable the organization account again. Organization accounts that are not enabled as member accounts are not included in the ListMembers results for the organization behavior graph. An administrator account cannot use DeleteMembers to remove their own account from the behavior graph. To disable a behavior graph, the administrator account uses the DeleteGraph API method.

```sql
DELETE FROM aws.detective.members
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
