--- 
title: administrator_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - administrator_accounts
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

Creates, updates, deletes, gets or lists an <code>administrator_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="administrator_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.administrator_accounts" /></td></tr>
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
    <td><a href="#get_administrator_account"><CopyableCode code="get_administrator_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides the details for the Security Hub CSPM administrator account for the current member account. Can be used by both member accounts that are managed using Organizations and accounts that were invited manually.</td>
</tr>
<tr>
    <td><a href="#disassociate_from_administrator_account"><CopyableCode code="disassociate_from_administrator_account" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates the current Security Hub CSPM member account from the associated administrator account. This operation is only used by accounts that are not part of an organization. For organization accounts, only the administrator account can disassociate a member account.</td>
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
    defaultValue="get_administrator_account"
    values={[
        { label: 'get_administrator_account', value: 'get_administrator_account' }
    ]}
>
<TabItem value="get_administrator_account">

Provides the details for the Security Hub CSPM administrator account for the current member account. Can be used by both member accounts that are managed using Organizations and accounts that were invited manually.

```sql
SELECT
account_id,
invitation_id,
invited_at,
member_status
FROM aws.securityhub.administrator_accounts
WHERE region = '{{ region }}' -- required
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

Disassociates the current Security Hub CSPM member account from the associated administrator account. This operation is only used by accounts that are not part of an organization. For organization accounts, only the administrator account can disassociate a member account.

```sql
UPDATE aws.securityhub.administrator_accounts
SET 
-- No updatable properties
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
