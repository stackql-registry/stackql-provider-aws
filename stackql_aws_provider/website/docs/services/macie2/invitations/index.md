--- 
title: invitations
hide_title: false
hide_table_of_contents: false
keywords:
  - invitations
  - macie2
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.macie2.invitations" /></td></tr>
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
    <td>The Amazon Web Services account ID for the account that sent the invitation.</td>
</tr>
<tr>
    <td><CopyableCode code="invitation_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the invitation.</td>
</tr>
<tr>
    <td><CopyableCode code="invited_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in UTC and extended ISO 8601 format, when the invitation was sent.</td>
</tr>
<tr>
    <td><CopyableCode code="relationship_status" /></td>
    <td><code>string</code></td>
    <td>The status of the relationship between the account that sent the invitation and the account that received the invitation. (Enabled, Paused, Invited, Created, Removed, Resigned, EmailVerificationInProgress, EmailVerificationFailed, RegionDisabled, AccountSuspended)</td>
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
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves information about Amazon Macie membership invitations that were received by an account.</td>
</tr>
<tr>
    <td><a href="#create_invitations"><CopyableCode code="create_invitations" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-accountIds"><code>accountIds</code></a></td>
    <td></td>
    <td>Sends an Amazon Macie membership invitation to one or more accounts.</td>
</tr>
<tr>
    <td><a href="#delete_invitations"><CopyableCode code="delete_invitations" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes Amazon Macie membership invitations that were received from specific accounts.</td>
</tr>
<tr>
    <td><a href="#accept_invitation"><CopyableCode code="accept_invitation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-invitationId"><code>invitationId</code></a></td>
    <td></td>
    <td>Accepts an Amazon Macie membership invitation that was received from a specific account.</td>
</tr>
<tr>
    <td><a href="#decline_invitations"><CopyableCode code="decline_invitations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-accountIds"><code>accountIds</code></a></td>
    <td></td>
    <td>Declines Amazon Macie membership invitations that were received from specific accounts.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to include in each page of a paginated response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken string that specifies which page of results to return in a paginated response.</td>
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

Retrieves information about Amazon Macie membership invitations that were received by an account.

```sql
SELECT
account_id,
invitation_id,
invited_at,
relationship_status
FROM aws.macie2.invitations
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_invitations"
    values={[
        { label: 'create_invitations', value: 'create_invitations' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_invitations">

Sends an Amazon Macie membership invitation to one or more accounts.

```sql
INSERT INTO aws.macie2.invitations (
accountIds,
disableEmailNotification,
message,
region
)
SELECT 
'{{ accountIds }}' /* required */,
{{ disableEmailNotification }},
'{{ message }}',
'{{ region }}'
RETURNING
unprocessed_accounts
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: invitations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the invitations resource.
    - name: accountIds
      value:
        - "{{ accountIds }}"
    - name: disableEmailNotification
      value: {{ disableEmailNotification }}
    - name: message
      value: "{{ message }}"
`}</CodeBlock>

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

Deletes Amazon Macie membership invitations that were received from specific accounts.

```sql
DELETE FROM aws.macie2.invitations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_invitation"
    values={[
        { label: 'accept_invitation', value: 'accept_invitation' },
        { label: 'decline_invitations', value: 'decline_invitations' }
    ]}
>
<TabItem value="accept_invitation">

Accepts an Amazon Macie membership invitation that was received from a specific account.

```sql
EXEC aws.macie2.invitations.accept_invitation 
@region='{{ region }}' --required 
@@json=
'{
"administratorAccountId": "{{ administratorAccountId }}", 
"invitationId": "{{ invitationId }}", 
"masterAccount": "{{ masterAccount }}"
}'
;
```
</TabItem>
<TabItem value="decline_invitations">

Declines Amazon Macie membership invitations that were received from specific accounts.

```sql
EXEC aws.macie2.invitations.decline_invitations 
@region='{{ region }}' --required 
@@json=
'{
"accountIds": "{{ accountIds }}"
}'
;
```
</TabItem>
</Tabs>
