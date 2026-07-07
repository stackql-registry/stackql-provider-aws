--- 
title: cross_account_resource_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - cross_account_resource_accounts
  - globalaccelerator
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

Creates, updates, deletes, gets or lists a <code>cross_account_resource_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cross_account_resource_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.globalaccelerator.cross_account_resource_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_cross_account_resource_accounts"
    values={[
        { label: 'list_cross_account_resource_accounts', value: 'list_cross_account_resource_accounts' }
    ]}
>
<TabItem value="list_cross_account_resource_accounts">

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
    <td><CopyableCode code="resource_owner_aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The account IDs of principals (resource owners) in a cross-account attachment who can work with resources listed in the same attachment.</td>
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
    <td><a href="#list_cross_account_resource_accounts"><CopyableCode code="list_cross_account_resource_accounts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List the accounts that have cross-account resources. For more information, see Working with cross-account attachments and resources in Global Accelerator in the Global Accelerator Developer Guide.</td>
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
    defaultValue="list_cross_account_resource_accounts"
    values={[
        { label: 'list_cross_account_resource_accounts', value: 'list_cross_account_resource_accounts' }
    ]}
>
<TabItem value="list_cross_account_resource_accounts">

List the accounts that have cross-account resources. For more information, see Working with cross-account attachments and resources in Global Accelerator in the Global Accelerator Developer Guide.

```sql
SELECT
resource_owner_aws_account_id
FROM aws.globalaccelerator.cross_account_resource_accounts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
