--- 
title: accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - accounts
  - compute_optimizer_automation
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.compute_optimizer_automation.accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_accounts"
    values={[
        { label: 'list_accounts', value: 'list_accounts' }
    ]}
>
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
    <td><CopyableCode code="accountId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the account's Automation enrollment status was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="organizationRuleMode" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the management account can create Automation rules that implement optimization actions for this account. (AnyAllowed, NoneAllowed)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The enrollment status of the account: Active, Inactive, Pending, or Failed. (Active, Inactive, Pending, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the current Automation enrollment status.</td>
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
    <td><a href="#list_accounts"><CopyableCode code="list_accounts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the accounts in your organization that are enrolled in Compute Optimizer and whether they have enabled Automation. Only the management account or a delegated administrator can perform this action.</td>
</tr>
<tr>
    <td><a href="#associate_accounts"><CopyableCode code="associate_accounts" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-accountIds"><code>accountIds</code></a></td>
    <td></td>
    <td>Associates one or more member accounts with your organization's management account, enabling centralized implementation of optimization actions across those accounts. Once associated, the management account (or a delegated administrator) can apply recommended actions to the member account. When you associate a member account, its organization rule mode is automatically set to "Any allowed," which permits the management account to create Automation rules that automatically apply actions to that account. If the member account has not previously enabled the Automation feature, the association process automatically enables it. Only the management account or a delegated administrator can perform this action.</td>
</tr>
<tr>
    <td><a href="#disassociate_accounts"><CopyableCode code="disassociate_accounts" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-accountIds"><code>accountIds</code></a></td>
    <td></td>
    <td>Disassociates member accounts from your organization's management account, removing centralized automation capabilities. Once disassociated, organization rules no longer apply to the member account, and the management account (or delegated administrator) cannot create Automation rules for that account. Only the management account or a delegated administrator can perform this action.</td>
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
    defaultValue="list_accounts"
    values={[
        { label: 'list_accounts', value: 'list_accounts' }
    ]}
>
<TabItem value="list_accounts">

Lists the accounts in your organization that are enrolled in Compute Optimizer and whether they have enabled Automation. Only the management account or a delegated administrator can perform this action.

```sql
SELECT
accountId,
lastUpdatedTimestamp,
organizationRuleMode,
status,
statusReason
FROM aws.compute_optimizer_automation.accounts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_accounts"
    values={[
        { label: 'associate_accounts', value: 'associate_accounts' }
    ]}
>
<TabItem value="associate_accounts">

Associates one or more member accounts with your organization's management account, enabling centralized implementation of optimization actions across those accounts. Once associated, the management account (or a delegated administrator) can apply recommended actions to the member account. When you associate a member account, its organization rule mode is automatically set to "Any allowed," which permits the management account to create Automation rules that automatically apply actions to that account. If the member account has not previously enabled the Automation feature, the association process automatically enables it. Only the management account or a delegated administrator can perform this action.

```sql
UPDATE aws.compute_optimizer_automation.accounts
SET 
accountIds = '{{ accountIds }}',
clientToken = '{{ clientToken }}'
WHERE 
region = '{{ region }}' --required
AND accountIds = '{{ accountIds }}' --required
RETURNING
accountIds,
errors;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_accounts"
    values={[
        { label: 'disassociate_accounts', value: 'disassociate_accounts' }
    ]}
>
<TabItem value="disassociate_accounts">

Disassociates member accounts from your organization's management account, removing centralized automation capabilities. Once disassociated, organization rules no longer apply to the member account, and the management account (or delegated administrator) cannot create Automation rules for that account. Only the management account or a delegated administrator can perform this action.

```sql
EXEC aws.compute_optimizer_automation.accounts.disassociate_accounts 
@region='{{ region }}' --required 
@@json=
'{
"accountIds": "{{ accountIds }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
