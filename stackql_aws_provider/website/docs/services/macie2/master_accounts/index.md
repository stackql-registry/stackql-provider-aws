--- 
title: master_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - master_accounts
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

Creates, updates, deletes, gets or lists a <code>master_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="master_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.macie2.master_accounts" /></td></tr>
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
    <td><a href="#get_master_account"><CopyableCode code="get_master_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>(Deprecated) Retrieves information about the Amazon Macie administrator account for an account. This operation has been replaced by the GetAdministratorAccount operation.</td>
</tr>
<tr>
    <td><a href="#disassociate_from_master_account"><CopyableCode code="disassociate_from_master_account" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>(Deprecated) Disassociates a member account from its Amazon Macie administrator account. This operation has been replaced by the DisassociateFromAdministratorAccount operation.</td>
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
    defaultValue="get_master_account"
    values={[
        { label: 'get_master_account', value: 'get_master_account' }
    ]}
>
<TabItem value="get_master_account">

(Deprecated) Retrieves information about the Amazon Macie administrator account for an account. This operation has been replaced by the GetAdministratorAccount operation.

```sql
SELECT
account_id,
invitation_id,
invited_at,
relationship_status
FROM aws.macie2.master_accounts
WHERE region = '{{ region }}' -- required
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

(Deprecated) Disassociates a member account from its Amazon Macie administrator account. This operation has been replaced by the DisassociateFromAdministratorAccount operation.

```sql
UPDATE aws.macie2.master_accounts
SET 
-- No updatable properties
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
