--- 
title: administrator_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - administrator_accounts
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

Creates, updates, deletes, gets or lists an <code>administrator_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="administrator_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.guardduty.administrator_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_administrator_account"
    values={[
        { label: 'get_administrator_account', value: 'get_administrator_account' }
    ]}
>
<TabItem value="get_administrator_account">

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
    <td>The ID of the account used as the administrator account.</td>
</tr>
<tr>
    <td><CopyableCode code="invitation_id" /></td>
    <td><code>string</code></td>
    <td>The value that is used to validate the administrator account to the member account.</td>
</tr>
<tr>
    <td><CopyableCode code="invited_at" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the invitation was sent.</td>
</tr>
<tr>
    <td><CopyableCode code="relationship_status" /></td>
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
    <td><a href="#get_administrator_account"><CopyableCode code="get_administrator_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides the details of the GuardDuty administrator account associated with the current GuardDuty member account. Based on the type of account that runs this API, the following list shows how the API behavior varies: When the GuardDuty administrator account runs this API, it will return success (HTTP 200) but no content. When a member account runs this API, it will return the details of the GuardDuty administrator account that is associated with this calling member account. When an individual account (not associated with an organization) runs this API, it will return success (HTTP 200) but no content.</td>
</tr>
<tr>
    <td><a href="#disassociate_from_administrator_account"><CopyableCode code="disassociate_from_administrator_account" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates the current GuardDuty member account from its administrator account. When you disassociate an invited member from a GuardDuty delegated administrator, the member account details obtained from the CreateMembers API, including the associated email addresses, are retained. This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the DeleteMembers API. With autoEnableOrganizationMembers configuration for your organization set to ALL, you'll receive an error if you attempt to disable GuardDuty in a member account.</td>
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
    defaultValue="get_administrator_account"
    values={[
        { label: 'get_administrator_account', value: 'get_administrator_account' }
    ]}
>
<TabItem value="get_administrator_account">

Provides the details of the GuardDuty administrator account associated with the current GuardDuty member account. Based on the type of account that runs this API, the following list shows how the API behavior varies: When the GuardDuty administrator account runs this API, it will return success (HTTP 200) but no content. When a member account runs this API, it will return the details of the GuardDuty administrator account that is associated with this calling member account. When an individual account (not associated with an organization) runs this API, it will return success (HTTP 200) but no content.

```sql
SELECT
account_id,
invitation_id,
invited_at,
relationship_status
FROM aws.guardduty.administrator_accounts
WHERE detector_id = '{{ detector_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="disassociate_from_administrator_account"
    values={[
        { label: 'disassociate_from_administrator_account', value: 'disassociate_from_administrator_account' }
    ]}
>
<TabItem value="disassociate_from_administrator_account">

Disassociates the current GuardDuty member account from its administrator account. When you disassociate an invited member from a GuardDuty delegated administrator, the member account details obtained from the CreateMembers API, including the associated email addresses, are retained. This is done so that the delegated administrator can invoke the InviteMembers API without the need to invoke the CreateMembers API again. To remove the details associated with a member account, the delegated administrator must invoke the DeleteMembers API. With autoEnableOrganizationMembers configuration for your organization set to ALL, you'll receive an error if you attempt to disable GuardDuty in a member account.

```sql
UPDATE aws.guardduty.administrator_accounts
SET 
-- No updatable properties
WHERE 
detector_id = '{{ detector_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
