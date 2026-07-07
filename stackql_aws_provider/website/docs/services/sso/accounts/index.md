--- 
title: accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - accounts
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

Creates, updates, deletes, gets or lists an <code>accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sso.accounts" /></td></tr>
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
    <td>The identifier of the AWS account that is assigned to the user.</td>
</tr>
<tr>
    <td><CopyableCode code="accountName" /></td>
    <td><code>string</code></td>
    <td>The display name of the AWS account that is assigned to the user.</td>
</tr>
<tr>
    <td><CopyableCode code="emailAddress" /></td>
    <td><code>string</code></td>
    <td>The email address of the AWS account that is assigned to the user.</td>
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
    <td><a href="#parameter-x-amz-sso_bearer_token"><code>x-amz-sso_bearer_token</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next_token"><code>next_token</code></a>, <a href="#parameter-max_result"><code>max_result</code></a></td>
    <td>Lists all AWS accounts assigned to the user. These AWS accounts are assigned by the administrator of the account. For more information, see Assign User Access in the IAM Identity Center User Guide. This operation returns a paginated response.</td>
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
<tr id="parameter-x-amz-sso_bearer_token">
    <td><CopyableCode code="x-amz-sso_bearer_token" /></td>
    <td><code>string</code></td>
    <td>The token issued by the CreateToken API call. For more information, see CreateToken in the IAM Identity Center OIDC API Reference Guide.</td>
</tr>
<tr id="parameter-max_result">
    <td><CopyableCode code="max_result" /></td>
    <td><code>integer</code></td>
    <td>This is the number of items clients can request per page.</td>
</tr>
<tr id="parameter-next_token">
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>(Optional) When requesting subsequent pages, this is the page token from the previous response output.</td>
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

Lists all AWS accounts assigned to the user. These AWS accounts are assigned by the administrator of the account. For more information, see Assign User Access in the IAM Identity Center User Guide. This operation returns a paginated response.

```sql
SELECT
accountId,
accountName,
emailAddress
FROM aws.sso.accounts
WHERE `x-amz-sso_bearer_token` = '{{ x-amz-sso_bearer_token }}' -- required
AND region = '{{ region }}' -- required
AND next_token = '{{ next_token }}'
AND max_result = '{{ max_result }}'
;
```
</TabItem>
</Tabs>
