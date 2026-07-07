--- 
title: master_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - master_accounts
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

Creates, updates, deletes, gets or lists a <code>master_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="master_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.guardduty.master_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_master_account"
    values={[
        { label: 'get_master_account', value: 'get_master_account' }
    ]}
>
<TabItem value="get_master_account">

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
    <td>The ID of the account used as the administrator account.</td>
</tr>
<tr>
    <td><CopyableCode code="InvitationId" /></td>
    <td><code>string</code></td>
    <td>The value used to validate the administrator account to the member account.</td>
</tr>
<tr>
    <td><CopyableCode code="InvitedAt" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the invitation was sent.</td>
</tr>
<tr>
    <td><CopyableCode code="RelationshipStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the relationship between the administrator and member accounts.</td>
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
    <td><a href="#get_master_account"><CopyableCode code="get_master_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides the details for the GuardDuty administrator account associated with the current GuardDuty member account.</td>
</tr>
<tr>
    <td><a href="#disassociate_from_master_account"><CopyableCode code="disassociate_from_master_account" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates the current GuardDuty member account from its administrator account. When you disassociate an invited member from a GuardDuty delegated administrator, the member account details obtained from the CreateMembers API, including the associated email addresses, are retained. This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the DeleteMembers API.</td>
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
    <td>The unique ID of the detector of the GuardDuty member account.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_master_account"
    values={[
        { label: 'get_master_account', value: 'get_master_account' }
    ]}
>
<TabItem value="get_master_account">

Provides the details for the GuardDuty administrator account associated with the current GuardDuty member account.

```sql
SELECT
AccountId,
InvitationId,
InvitedAt,
RelationshipStatus
FROM aws.guardduty.master_accounts
WHERE detector_id = '{{ detector_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="disassociate_from_master_account"
    values={[
        { label: 'disassociate_from_master_account', value: 'disassociate_from_master_account' }
    ]}
>
<TabItem value="disassociate_from_master_account">

Disassociates the current GuardDuty member account from its administrator account. When you disassociate an invited member from a GuardDuty delegated administrator, the member account details obtained from the CreateMembers API, including the associated email addresses, are retained. This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the DeleteMembers API.

```sql
UPDATE aws.guardduty.master_accounts
SET 
-- No updatable properties
WHERE 
detector_id = '{{ detector_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
