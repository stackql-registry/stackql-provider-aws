--- 
title: account_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - account_permissions
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

Creates, updates, deletes, gets or lists an <code>account_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector2.account_permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_account_permissions"
    values={[
        { label: 'list_account_permissions', value: 'list_account_permissions' }
    ]}
>
<TabItem value="list_account_permissions">

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
    <td><CopyableCode code="operation" /></td>
    <td><code>string</code></td>
    <td>The operations that can be performed with the given permissions. (ENABLE_SCANNING, DISABLE_SCANNING, ENABLE_REPOSITORY, DISABLE_REPOSITORY)</td>
</tr>
<tr>
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>The services that the permissions allow an account to perform the given operations for. (EC2, ECR, LAMBDA)</td>
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
    <td><a href="#list_account_permissions"><CopyableCode code="list_account_permissions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the permissions an account has to configure Amazon Inspector. If the account is a member account or standalone account with resources managed by an Organizations policy, the operation returns fewer permissions.</td>
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
    defaultValue="list_account_permissions"
    values={[
        { label: 'list_account_permissions', value: 'list_account_permissions' }
    ]}
>
<TabItem value="list_account_permissions">

Lists the permissions an account has to configure Amazon Inspector. If the account is a member account or standalone account with resources managed by an Organizations policy, the operation returns fewer permissions.

```sql
SELECT
operation,
service
FROM aws.inspector2.account_permissions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
