--- 
title: members
hide_title: false
hide_table_of_contents: false
keywords:
  - members
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

Creates, updates, deletes, gets or lists a <code>members</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="members" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.guardduty.members" /></td></tr>
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
    <td><CopyableCode code="members" /></td>
    <td><code>array</code></td>
    <td>A list of members.</td>
</tr>
<tr>
    <td><CopyableCode code="unprocessed_accounts" /></td>
    <td><code>array</code></td>
    <td>A list of objects that contain the unprocessed account and a result string that explains why it was unprocessed.</td>
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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the member account.</td>
</tr>
<tr>
    <td><CopyableCode code="administrator_id" /></td>
    <td><code>string</code></td>
    <td>The administrator account ID.</td>
</tr>
<tr>
    <td><CopyableCode code="detector_id" /></td>
    <td><code>string</code></td>
    <td>The detector ID of the member account.</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>The email address of the member account.</td>
</tr>
<tr>
    <td><CopyableCode code="invited_at" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the invitation was sent.</td>
</tr>
<tr>
    <td><CopyableCode code="master_id" /></td>
    <td><code>string</code></td>
    <td>The administrator account ID.</td>
</tr>
<tr>
    <td><CopyableCode code="relationship_status" /></td>
    <td><code>string</code></td>
    <td>The status of the relationship between the member and the administrator.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string</code></td>
    <td>The last-updated timestamp of the member.</td>
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
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves GuardDuty member accounts (of the current GuardDuty administrator account) specified by the account IDs.</td>
</tr>
<tr>
    <td><a href="#list_members"><CopyableCode code="list_members" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-onlyAssociated"><code>onlyAssociated</code></a></td>
    <td>Lists details about all member accounts for the current GuardDuty administrator account.</td>
</tr>
<tr>
    <td><a href="#create_members"><CopyableCode code="create_members" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccountDetails"><code>AccountDetails</code></a></td>
    <td></td>
    <td>Creates member accounts of the current Amazon Web Services account by specifying a list of Amazon Web Services account IDs. This step is a prerequisite for managing the associated member accounts either by invitation or through an organization. As a delegated administrator, using CreateMembers will enable GuardDuty in the added member accounts, with the exception of the organization delegated administrator account. A delegated administrator must enable GuardDuty prior to being added as a member. When you use CreateMembers as an Organizations delegated administrator, GuardDuty applies your organization's auto-enable settings to the member accounts in this request, irrespective of the accounts being new or existing members. For more information about the existing auto-enable settings for your organization, see DescribeOrganizationConfiguration. If you disassociate a member account that was added by invitation, the member account details obtained from this API, including the associated email addresses, will be retained. This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the DeleteMembers API. When the member accounts added through Organizations are later disassociated, you (administrator) can't invite them by calling the InviteMembers API. You can create an association with these member accounts again only by calling the CreateMembers API.</td>
</tr>
<tr>
    <td><a href="#disassociate_members"><CopyableCode code="disassociate_members" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccountIds"><code>AccountIds</code></a></td>
    <td></td>
    <td>Disassociates GuardDuty member accounts (from the current administrator account) specified by the account IDs. When you disassociate an invited member from a GuardDuty delegated administrator, the member account details obtained from the CreateMembers API, including the associated email addresses, are retained. This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the DeleteMembers API. With autoEnableOrganizationMembers configuration for your organization set to ALL, you'll receive an error if you attempt to disassociate a member account before removing them from your organization. If you disassociate a member account that was added by invitation, the member account details obtained from this API, including the associated email addresses, will be retained. This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the DeleteMembers API. When the member accounts added through Organizations are later disassociated, you (administrator) can't invite them by calling the InviteMembers API. You can create an association with these member accounts again only by calling the CreateMembers API.</td>
</tr>
<tr>
    <td><a href="#delete_members"><CopyableCode code="delete_members" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes GuardDuty member accounts (to the current GuardDuty administrator account) specified by the account IDs. With autoEnableOrganizationMembers configuration for your organization set to ALL, you'll receive an error if you attempt to disable GuardDuty for a member account in your organization.</td>
</tr>
<tr>
    <td><a href="#invite_members"><CopyableCode code="invite_members" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccountIds"><code>AccountIds</code></a></td>
    <td></td>
    <td>Invites Amazon Web Services accounts to become members of an organization administered by the Amazon Web Services account that invokes this API. If you are using Amazon Web Services Organizations to manage your GuardDuty environment, this step is not needed. For more information, see Managing accounts with organizations. To invite Amazon Web Services accounts, the first step is to ensure that GuardDuty has been enabled in the potential member accounts. You can now invoke this API to add accounts by invitation. The invited accounts can either accept or decline the invitation from their GuardDuty accounts. Each invited Amazon Web Services account can choose to accept the invitation from only one Amazon Web Services account. For more information, see Managing GuardDuty accounts by invitation. After the invite has been accepted and you choose to disassociate a member account (by using DisassociateMembers) from your account, the details of the member account obtained by invoking CreateMembers, including the associated email addresses, will be retained. This is done so that you can invoke InviteMembers without the need to invoke CreateMembers again. To remove the details associated with a member account, you must also invoke DeleteMembers. If you disassociate a member account that was added by invitation, the member account details obtained from this API, including the associated email addresses, will be retained. This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the DeleteMembers API. When the member accounts added through Organizations are later disassociated, you (administrator) can't invite them by calling the InviteMembers API. You can create an association with these member accounts again only by calling the CreateMembers API.</td>
</tr>
<tr>
    <td><a href="#start_monitoring_members"><CopyableCode code="start_monitoring_members" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccountIds"><code>AccountIds</code></a></td>
    <td></td>
    <td>Turns on GuardDuty monitoring of the specified member accounts. Use this operation to restart monitoring of accounts that you stopped monitoring with the StopMonitoringMembers operation.</td>
</tr>
<tr>
    <td><a href="#stop_monitoring_members"><CopyableCode code="stop_monitoring_members" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccountIds"><code>AccountIds</code></a></td>
    <td></td>
    <td>Stops GuardDuty monitoring for the specified member accounts. Use the StartMonitoringMembers operation to restart monitoring for those accounts. With autoEnableOrganizationMembers configuration for your organization set to ALL, you'll receive an error if you attempt to stop monitoring the member accounts in your organization.</td>
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
    <td>The unique ID of the detector associated with the GuardDuty administrator account that is monitoring member accounts. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.</td>
</tr>
<tr id="parameter-onlyAssociated">
    <td><CopyableCode code="onlyAssociated" /></td>
    <td><code>string</code></td>
    <td>Specifies whether to only return associated members or to return all members (including members who haven't been invited yet or have been disassociated). Member accounts must have been previously associated with the GuardDuty administrator account using Create Members .</td>
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

Retrieves GuardDuty member accounts (of the current GuardDuty administrator account) specified by the account IDs.

```sql
SELECT
members,
unprocessed_accounts
FROM aws.guardduty.members
WHERE detector_id = '{{ detector_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_members">

Lists details about all member accounts for the current GuardDuty administrator account.

```sql
SELECT
account_id,
administrator_id,
detector_id,
email,
invited_at,
master_id,
relationship_status,
updated_at
FROM aws.guardduty.members
WHERE detector_id = '{{ detector_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND onlyAssociated = '{{ onlyAssociated }}'
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

Creates member accounts of the current Amazon Web Services account by specifying a list of Amazon Web Services account IDs. This step is a prerequisite for managing the associated member accounts either by invitation or through an organization. As a delegated administrator, using CreateMembers will enable GuardDuty in the added member accounts, with the exception of the organization delegated administrator account. A delegated administrator must enable GuardDuty prior to being added as a member. When you use CreateMembers as an Organizations delegated administrator, GuardDuty applies your organization's auto-enable settings to the member accounts in this request, irrespective of the accounts being new or existing members. For more information about the existing auto-enable settings for your organization, see DescribeOrganizationConfiguration. If you disassociate a member account that was added by invitation, the member account details obtained from this API, including the associated email addresses, will be retained. This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the DeleteMembers API. When the member accounts added through Organizations are later disassociated, you (administrator) can't invite them by calling the InviteMembers API. You can create an association with these member accounts again only by calling the CreateMembers API.

```sql
INSERT INTO aws.guardduty.members (
AccountDetails,
detector_id,
region
)
SELECT 
'{{ AccountDetails }}' /* required */,
'{{ detector_id }}',
'{{ region }}'
RETURNING
unprocessed_accounts
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: members
  props:
    - name: detector_id
      value: "{{ detector_id }}"
      description: Required parameter for the members resource.
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

Disassociates GuardDuty member accounts (from the current administrator account) specified by the account IDs. When you disassociate an invited member from a GuardDuty delegated administrator, the member account details obtained from the CreateMembers API, including the associated email addresses, are retained. This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the DeleteMembers API. With autoEnableOrganizationMembers configuration for your organization set to ALL, you'll receive an error if you attempt to disassociate a member account before removing them from your organization. If you disassociate a member account that was added by invitation, the member account details obtained from this API, including the associated email addresses, will be retained. This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the DeleteMembers API. When the member accounts added through Organizations are later disassociated, you (administrator) can't invite them by calling the InviteMembers API. You can create an association with these member accounts again only by calling the CreateMembers API.

```sql
UPDATE aws.guardduty.members
SET 
AccountIds = '{{ AccountIds }}'
WHERE 
detector_id = '{{ detector_id }}' --required
AND region = '{{ region }}' --required
AND AccountIds = '{{ AccountIds }}' --required
RETURNING
unprocessed_accounts;
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

Deletes GuardDuty member accounts (to the current GuardDuty administrator account) specified by the account IDs. With autoEnableOrganizationMembers configuration for your organization set to ALL, you'll receive an error if you attempt to disable GuardDuty for a member account in your organization.

```sql
DELETE FROM aws.guardduty.members
WHERE detector_id = '{{ detector_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="invite_members"
    values={[
        { label: 'invite_members', value: 'invite_members' },
        { label: 'start_monitoring_members', value: 'start_monitoring_members' },
        { label: 'stop_monitoring_members', value: 'stop_monitoring_members' }
    ]}
>
<TabItem value="invite_members">

Invites Amazon Web Services accounts to become members of an organization administered by the Amazon Web Services account that invokes this API. If you are using Amazon Web Services Organizations to manage your GuardDuty environment, this step is not needed. For more information, see Managing accounts with organizations. To invite Amazon Web Services accounts, the first step is to ensure that GuardDuty has been enabled in the potential member accounts. You can now invoke this API to add accounts by invitation. The invited accounts can either accept or decline the invitation from their GuardDuty accounts. Each invited Amazon Web Services account can choose to accept the invitation from only one Amazon Web Services account. For more information, see Managing GuardDuty accounts by invitation. After the invite has been accepted and you choose to disassociate a member account (by using DisassociateMembers) from your account, the details of the member account obtained by invoking CreateMembers, including the associated email addresses, will be retained. This is done so that you can invoke InviteMembers without the need to invoke CreateMembers again. To remove the details associated with a member account, you must also invoke DeleteMembers. If you disassociate a member account that was added by invitation, the member account details obtained from this API, including the associated email addresses, will be retained. This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the DeleteMembers API. When the member accounts added through Organizations are later disassociated, you (administrator) can't invite them by calling the InviteMembers API. You can create an association with these member accounts again only by calling the CreateMembers API.

```sql
EXEC aws.guardduty.members.invite_members 
@detector_id='{{ detector_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"AccountIds": "{{ AccountIds }}", 
"DisableEmailNotification": {{ DisableEmailNotification }}, 
"Message": "{{ Message }}"
}'
;
```
</TabItem>
<TabItem value="start_monitoring_members">

Turns on GuardDuty monitoring of the specified member accounts. Use this operation to restart monitoring of accounts that you stopped monitoring with the StopMonitoringMembers operation.

```sql
EXEC aws.guardduty.members.start_monitoring_members 
@detector_id='{{ detector_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"AccountIds": "{{ AccountIds }}"
}'
;
```
</TabItem>
<TabItem value="stop_monitoring_members">

Stops GuardDuty monitoring for the specified member accounts. Use the StartMonitoringMembers operation to restart monitoring for those accounts. With autoEnableOrganizationMembers configuration for your organization set to ALL, you'll receive an error if you attempt to stop monitoring the member accounts in your organization.

```sql
EXEC aws.guardduty.members.stop_monitoring_members 
@detector_id='{{ detector_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"AccountIds": "{{ AccountIds }}"
}'
;
```
</TabItem>
</Tabs>
