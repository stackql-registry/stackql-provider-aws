--- 
title: account_roles
hide_title: false
hide_table_of_contents: false
keywords:
  - account_roles
  - sso
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

Creates, updates, deletes, gets or lists an <code>account_roles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_roles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sso.account_roles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_account_roles"
    values={[
        { label: 'list_account_roles', value: 'list_account_roles' }
    ]}
>
<TabItem value="list_account_roles">

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
    <td>The identifier of the AWS account assigned to the user.</td>
</tr>
<tr>
    <td><CopyableCode code="roleName" /></td>
    <td><code>string</code></td>
    <td>The friendly name of the role that is assigned to the user.</td>
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
    <td><a href="#list_account_roles"><CopyableCode code="list_account_roles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-sso_bearer_token"><code>x-amz-sso_bearer_token</code></a>, <a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next_token"><code>next_token</code></a>, <a href="#parameter-max_result"><code>max_result</code></a></td>
    <td>Lists all roles that are assigned to the user for a given AWS account.</td>
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
<tr id="parameter-account_id">
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the AWS account that is assigned to the user.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-x-amz-sso_bearer_token">
    <td><CopyableCode code="x-amz-sso_bearer_token" /></td>
    <td><code>string</code></td>
    <td>The token issued by the CreateToken API call. For more information, see CreateToken in the IAM Identity Center OIDC API Reference Guide.</td>
</tr>
<tr id="parameter-max_result">
    <td><CopyableCode code="max_result" /></td>
    <td><code>integer</code></td>
    <td>The number of items that clients can request per page.</td>
</tr>
<tr id="parameter-next_token">
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The page token from the previous response output when you request subsequent pages.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_account_roles"
    values={[
        { label: 'list_account_roles', value: 'list_account_roles' }
    ]}
>
<TabItem value="list_account_roles">

Lists all roles that are assigned to the user for a given AWS account.

```sql
SELECT
accountId,
roleName
FROM aws.sso.account_roles
WHERE `x-amz-sso_bearer_token` = '{{ x-amz-sso_bearer_token }}' -- required
AND account_id = '{{ account_id }}' -- required
AND region = '{{ region }}' -- required
AND next_token = '{{ next_token }}'
AND max_result = '{{ max_result }}'
;
```
</TabItem>
</Tabs>
