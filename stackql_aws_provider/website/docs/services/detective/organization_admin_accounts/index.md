--- 
title: organization_admin_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - organization_admin_accounts
  - detective
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

Creates, updates, deletes, gets or lists an <code>organization_admin_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="organization_admin_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.detective.organization_admin_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_organization_admin_accounts"
    values={[
        { label: 'list_organization_admin_accounts', value: 'list_organization_admin_accounts' }
    ]}
>
<TabItem value="list_organization_admin_accounts">

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
    <td><CopyableCode code="administrators" /></td>
    <td><code>array</code></td>
    <td>The list of Detective administrator accounts.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>If there are more accounts remaining in the results, then this is the pagination token to use to request the next page of accounts.</td>
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
    <td><a href="#list_organization_admin_accounts"><CopyableCode code="list_organization_admin_accounts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the Detective administrator account for an organization. Can only be called by the organization management account.</td>
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
    defaultValue="list_organization_admin_accounts"
    values={[
        { label: 'list_organization_admin_accounts', value: 'list_organization_admin_accounts' }
    ]}
>
<TabItem value="list_organization_admin_accounts">

Returns information about the Detective administrator account for an organization. Can only be called by the organization management account.

```sql
SELECT
administrators,
next_token
FROM aws.detective.organization_admin_accounts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
