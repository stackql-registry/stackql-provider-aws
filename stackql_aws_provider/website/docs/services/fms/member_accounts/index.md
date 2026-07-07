--- 
title: member_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - member_accounts
  - fms
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

Creates, updates, deletes, gets or lists a <code>member_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="member_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.fms.member_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_member_accounts"
    values={[
        { label: 'list_member_accounts', value: 'list_member_accounts' }
    ]}
>
<TabItem value="list_member_accounts">

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
    <td><CopyableCode code="member_account" /></td>
    <td><code>string</code></td>
    <td>An array of account IDs.</td>
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
    <td><a href="#list_member_accounts"><CopyableCode code="list_member_accounts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a MemberAccounts object that lists the member accounts in the administrator's Amazon Web Services organization. Either an Firewall Manager administrator or the organization's management account can make this request.</td>
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
    defaultValue="list_member_accounts"
    values={[
        { label: 'list_member_accounts', value: 'list_member_accounts' }
    ]}
>
<TabItem value="list_member_accounts">

Returns a MemberAccounts object that lists the member accounts in the administrator's Amazon Web Services organization. Either an Firewall Manager administrator or the organization's management account can make this request.

```sql
SELECT
member_account
FROM aws.fms.member_accounts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
