--- 
title: user_auth_factors
hide_title: false
hide_table_of_contents: false
keywords:
  - user_auth_factors
  - cognito_idp
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

Creates, updates, deletes, gets or lists a <code>user_auth_factors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_auth_factors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_idp.user_auth_factors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_user_auth_factors"
    values={[
        { label: 'get_user_auth_factors', value: 'get_user_auth_factors' }
    ]}
>
<TabItem value="get_user_auth_factors">

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
    <td><CopyableCode code="configured_user_auth_factors" /></td>
    <td><code>array</code></td>
    <td>The authentication types that are available to the user with USER_AUTH sign-in, for example &#91;"PASSWORD", "WEB_AUTHN"&#93;.</td>
</tr>
<tr>
    <td><CopyableCode code="preferred_mfa_setting" /></td>
    <td><code>string</code></td>
    <td>The challenge method that Amazon Cognito returns to the user in response to sign-in requests. Users can prefer SMS message, email message, or TOTP MFA.</td>
</tr>
<tr>
    <td><CopyableCode code="user_mfa_setting_list" /></td>
    <td><code>array</code></td>
    <td>The MFA options that are activated for the user. The possible values in this list are SMS_MFA, EMAIL_OTP, and SOFTWARE_TOKEN_MFA.</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The name of the user who is eligible for the authentication factors in the response. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_user_auth_factors"><CopyableCode code="get_user_auth_factors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the authentication options for the currently signed-in user. Returns the following: The user's multi-factor authentication (MFA) preferences. The user's options for choice-based authentication with the USER_AUTH flow. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.</td>
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
    defaultValue="get_user_auth_factors"
    values={[
        { label: 'get_user_auth_factors', value: 'get_user_auth_factors' }
    ]}
>
<TabItem value="get_user_auth_factors">

Lists the authentication options for the currently signed-in user. Returns the following: The user's multi-factor authentication (MFA) preferences. The user's options for choice-based authentication with the USER_AUTH flow. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.

```sql
SELECT
configured_user_auth_factors,
preferred_mfa_setting,
user_mfa_setting_list,
username
FROM aws.cognito_idp.user_auth_factors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
