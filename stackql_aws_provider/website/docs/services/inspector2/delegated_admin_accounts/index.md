--- 
title: delegated_admin_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - delegated_admin_accounts
  - inspector2
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

Creates, updates, deletes, gets or lists a <code>delegated_admin_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="delegated_admin_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector2.delegated_admin_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_delegated_admin_account"
    values={[
        { label: 'get_delegated_admin_account', value: 'get_delegated_admin_account' }
    ]}
>
<TabItem value="get_delegated_admin_account">

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
    <td>The Amazon Web Services account ID of the Amazon Inspector delegated administrator for your organization. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="relationship_status" /></td>
    <td><code>string</code></td>
    <td>The status of the Amazon Inspector delegated administrator. (CREATED, INVITED, DISABLED, ENABLED, REMOVED, RESIGNED, DELETED, EMAIL_VERIFICATION_IN_PROGRESS, EMAIL_VERIFICATION_FAILED, REGION_DISABLED, ACCOUNT_SUSPENDED, CANNOT_CREATE_DETECTOR_IN_ORG_MASTER)</td>
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
    <td><a href="#get_delegated_admin_account"><CopyableCode code="get_delegated_admin_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the Amazon Inspector delegated administrator for your organization.</td>
</tr>
<tr>
    <td><a href="#disable_delegated_admin_account"><CopyableCode code="disable_delegated_admin_account" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-delegatedAdminAccountId"><code>delegatedAdminAccountId</code></a></td>
    <td></td>
    <td>Disables the Amazon Inspector delegated administrator for your organization.</td>
</tr>
<tr>
    <td><a href="#enable_delegated_admin_account"><CopyableCode code="enable_delegated_admin_account" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-delegatedAdminAccountId"><code>delegatedAdminAccountId</code></a></td>
    <td></td>
    <td>Enables the Amazon Inspector delegated administrator for your Organizations organization.</td>
</tr>
<tr>
    <td><a href="#list_delegated_admin_accounts"><CopyableCode code="list_delegated_admin_accounts" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists information about the Amazon Inspector delegated administrator of your organization.</td>
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
    defaultValue="get_delegated_admin_account"
    values={[
        { label: 'get_delegated_admin_account', value: 'get_delegated_admin_account' }
    ]}
>
<TabItem value="get_delegated_admin_account">

Retrieves information about the Amazon Inspector delegated administrator for your organization.

```sql
SELECT
account_id,
relationship_status
FROM aws.inspector2.delegated_admin_accounts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable_delegated_admin_account"
    values={[
        { label: 'disable_delegated_admin_account', value: 'disable_delegated_admin_account' },
        { label: 'enable_delegated_admin_account', value: 'enable_delegated_admin_account' },
        { label: 'list_delegated_admin_accounts', value: 'list_delegated_admin_accounts' }
    ]}
>
<TabItem value="disable_delegated_admin_account">

Disables the Amazon Inspector delegated administrator for your organization.

```sql
EXEC aws.inspector2.delegated_admin_accounts.disable_delegated_admin_account 
@region='{{ region }}' --required 
@@json=
'{
"delegatedAdminAccountId": "{{ delegatedAdminAccountId }}"
}'
;
```
</TabItem>
<TabItem value="enable_delegated_admin_account">

Enables the Amazon Inspector delegated administrator for your Organizations organization.

```sql
EXEC aws.inspector2.delegated_admin_accounts.enable_delegated_admin_account 
@region='{{ region }}' --required 
@@json=
'{
"delegatedAdminAccountId": "{{ delegatedAdminAccountId }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
<TabItem value="list_delegated_admin_accounts">

Lists information about the Amazon Inspector delegated administrator of your organization.

```sql
EXEC aws.inspector2.delegated_admin_accounts.list_delegated_admin_accounts 
@region='{{ region }}' --required 
@@json=
'{
"maxResults": {{ maxResults }}, 
"nextToken": "{{ nextToken }}"
}'
;
```
</TabItem>
</Tabs>
