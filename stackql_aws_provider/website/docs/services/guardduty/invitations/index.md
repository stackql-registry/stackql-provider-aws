--- 
title: invitations
hide_title: false
hide_table_of_contents: false
keywords:
  - invitations
  - guardduty
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.guardduty.invitations" /></td></tr>
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
    <td><CopyableCode code="AccountId" /></td>
    <td><code>string</code></td>
    <td>The ID of the account that the invitation was sent from.</td>
</tr>
<tr>
    <td><CopyableCode code="InvitationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the invitation. This value is used to validate the inviter account to the member account.</td>
</tr>
<tr>
    <td><CopyableCode code="InvitedAt" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the invitation was sent.</td>
</tr>
<tr>
    <td><CopyableCode code="RelationshipStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the relationship between the inviter and invitee accounts.</td>
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
    <td>Lists all GuardDuty membership invitations that were sent to the current Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#delete_invitations"><CopyableCode code="delete_invitations" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes invitations sent to the current member account by Amazon Web Services accounts specified by their account IDs.</td>
</tr>
<tr>
    <td><a href="#accept_administrator_invitation"><CopyableCode code="accept_administrator_invitation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AdministratorId"><code>AdministratorId</code></a>, <a href="#parameter-InvitationId"><code>InvitationId</code></a></td>
    <td></td>
    <td>Accepts the invitation to be a member account and get monitored by a GuardDuty administrator account that sent the invitation.</td>
</tr>
<tr>
    <td><a href="#accept_invitation"><CopyableCode code="accept_invitation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MasterId"><code>MasterId</code></a>, <a href="#parameter-InvitationId"><code>InvitationId</code></a></td>
    <td></td>
    <td>Accepts the invitation to be monitored by a GuardDuty administrator account.</td>
</tr>
<tr>
    <td><a href="#decline_invitations"><CopyableCode code="decline_invitations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccountIds"><code>AccountIds</code></a></td>
    <td></td>
    <td>Declines invitations sent to the current member account by Amazon Web Services accounts specified by their account IDs.</td>
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
<tr id="parameter-detector_id">
    <td><CopyableCode code="detector_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the detector of the GuardDuty member account. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.</td>
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

Lists all GuardDuty membership invitations that were sent to the current Amazon Web Services account.

```sql
SELECT
AccountId,
InvitationId,
InvitedAt,
RelationshipStatus
FROM aws.guardduty.invitations
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
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

Deletes invitations sent to the current member account by Amazon Web Services accounts specified by their account IDs.

```sql
DELETE FROM aws.guardduty.invitations
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

Accepts the invitation to be a member account and get monitored by a GuardDuty administrator account that sent the invitation.

```sql
EXEC aws.guardduty.invitations.accept_administrator_invitation 
@detector_id='{{ detector_id }}' --required, 
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

Accepts the invitation to be monitored by a GuardDuty administrator account.

```sql
EXEC aws.guardduty.invitations.accept_invitation 
@detector_id='{{ detector_id }}' --required, 
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

Declines invitations sent to the current member account by Amazon Web Services accounts specified by their account IDs.

```sql
EXEC aws.guardduty.invitations.decline_invitations 
@region='{{ region }}' --required 
@@json=
'{
"AccountIds": "{{ AccountIds }}"
}'
;
```
</TabItem>
</Tabs>
