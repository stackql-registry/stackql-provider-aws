--- 
title: account_informations
hide_title: false
hide_table_of_contents: false
keywords:
  - account_informations
  - account
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

Creates, updates, deletes, gets or lists an <code>account_informations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_informations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.account.account_informations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_account_information"
    values={[
        { label: 'get_account_information', value: 'get_account_information' }
    ]}
>
<TabItem value="get_account_information">

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
    <td><CopyableCode code="AccountCreatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the account was created.</td>
</tr>
<tr>
    <td><CopyableCode code="AccountId" /></td>
    <td><code>string</code></td>
    <td>Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access or modify with this operation. To use this parameter, the caller must be an identity in the organization's management account or a delegated administrator account. The specified account ID must be a member account in the same organization. The organization must have all features enabled, and the organization must have trusted access enabled for the Account Management service, and optionally a delegated admin account assigned. This operation can only be called from the management account or the delegated administrator account of an organization for a member account. The management account can't specify its own AccountId. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AccountName" /></td>
    <td><code>string</code></td>
    <td>The name of the account. (pattern: &lt;code&gt;&#91; -;=?-~&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AccountState" /></td>
    <td><code>string</code></td>
    <td>The state of the account. Each account state represents a specific phase in the account lifecycle. Use this information to manage account access, automate workflows, or trigger actions based on account state changes. Valid values: PENDING_ACTIVATION | ACTIVE | SUSPENDED | CLOSED (PENDING_ACTIVATION, ACTIVE, SUSPENDED, CLOSED)</td>
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
    <td><a href="#get_account_information"><CopyableCode code="get_account_information" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the specified account including its account name, account ID, account creation date and time, and account state. To use this API, an IAM user or role must have the account:GetAccountInformation IAM permission.</td>
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
    defaultValue="get_account_information"
    values={[
        { label: 'get_account_information', value: 'get_account_information' }
    ]}
>
<TabItem value="get_account_information">

Retrieves information about the specified account including its account name, account ID, account creation date and time, and account state. To use this API, an IAM user or role must have the account:GetAccountInformation IAM permission.

```sql
SELECT
AccountCreatedDate,
AccountId,
AccountName,
AccountState
FROM aws.account.account_informations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
