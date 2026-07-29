--- 
title: role_credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - role_credentials
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

Creates, updates, deletes, gets or lists a <code>role_credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="role_credentials" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sso.role_credentials" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_role_credentials"
    values={[
        { label: 'get_role_credentials', value: 'get_role_credentials' }
    ]}
>
<TabItem value="get_role_credentials">

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
    <td><CopyableCode code="access_key_id" /></td>
    <td><code>string</code></td>
    <td>The identifier used for the temporary security credentials. For more information, see Using Temporary Security Credentials to Request Access to AWS Resources in the AWS IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="expiration" /></td>
    <td><code>integer (int64)</code></td>
    <td>The date on which temporary security credentials expire.</td>
</tr>
<tr>
    <td><CopyableCode code="secret_access_key" /></td>
    <td><code>string</code></td>
    <td>The key that is used to sign the request. For more information, see Using Temporary Security Credentials to Request Access to AWS Resources in the AWS IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="session_token" /></td>
    <td><code>string</code></td>
    <td>The token used for temporary credentials. For more information, see Using Temporary Security Credentials to Request Access to AWS Resources in the AWS IAM User Guide.</td>
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
    <td><a href="#get_role_credentials"><CopyableCode code="get_role_credentials" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-role_name"><code>role_name</code></a>, <a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-x-amz-sso_bearer_token"><code>x-amz-sso_bearer_token</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the STS short-term credentials for a given role name that is assigned to the user.</td>
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
<tr id="parameter-role_name">
    <td><CopyableCode code="role_name" /></td>
    <td><code>string</code></td>
    <td>The friendly name of the role that is assigned to the user.</td>
</tr>
<tr id="parameter-x-amz-sso_bearer_token">
    <td><CopyableCode code="x-amz-sso_bearer_token" /></td>
    <td><code>string</code></td>
    <td>The token issued by the CreateToken API call. For more information, see CreateToken in the IAM Identity Center OIDC API Reference Guide.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_role_credentials"
    values={[
        { label: 'get_role_credentials', value: 'get_role_credentials' }
    ]}
>
<TabItem value="get_role_credentials">

Returns the STS short-term credentials for a given role name that is assigned to the user.

```sql
SELECT
access_key_id,
expiration,
secret_access_key,
session_token
FROM aws.sso.role_credentials
WHERE role_name = '{{ role_name }}' -- required
AND account_id = '{{ account_id }}' -- required
AND `x-amz-sso_bearer_token` = '{{ x-amz-sso_bearer_token }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
