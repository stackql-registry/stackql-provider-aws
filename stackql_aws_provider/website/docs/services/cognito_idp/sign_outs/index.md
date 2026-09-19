--- 
title: sign_outs
hide_title: false
hide_table_of_contents: false
keywords:
  - sign_outs
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

Creates, updates, deletes, gets or lists a <code>sign_outs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sign_outs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_idp.sign_outs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#global_sign_out"><CopyableCode code="global_sign_out" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccessToken"><code>AccessToken</code></a></td>
    <td></td>
    <td>Invalidates the identity, access, and refresh tokens that Amazon Cognito issued to a user. Call this operation when your user signs out of your app. This results in the following behavior. Amazon Cognito no longer accepts token-authorized user operations that you authorize with a signed-out user's access tokens. For more information, see Using the Amazon Cognito user pools API and user pool endpoints. Amazon Cognito returns an Access Token has been revoked error when your app attempts to authorize a user pools API request with a revoked access token that contains the scope aws.cognito.signin.user.admin. Amazon Cognito no longer accepts a signed-out user's ID token in a GetId request to an identity pool with ServerSideTokenCheck enabled for its user pool IdP configuration in CognitoIdentityProvider. Amazon Cognito no longer accepts a signed-out user's refresh tokens in refresh requests. Other requests might be valid until your user's token expires. This operation doesn't clear the managed login session cookie. To clear the session for a user who signed in with managed login or the classic hosted UI, direct their browser session to the logout endpoint. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="global_sign_out"
    values={[
        { label: 'global_sign_out', value: 'global_sign_out' }
    ]}
>
<TabItem value="global_sign_out">

Invalidates the identity, access, and refresh tokens that Amazon Cognito issued to a user. Call this operation when your user signs out of your app. This results in the following behavior. Amazon Cognito no longer accepts token-authorized user operations that you authorize with a signed-out user's access tokens. For more information, see Using the Amazon Cognito user pools API and user pool endpoints. Amazon Cognito returns an Access Token has been revoked error when your app attempts to authorize a user pools API request with a revoked access token that contains the scope aws.cognito.signin.user.admin. Amazon Cognito no longer accepts a signed-out user's ID token in a GetId request to an identity pool with ServerSideTokenCheck enabled for its user pool IdP configuration in CognitoIdentityProvider. Amazon Cognito no longer accepts a signed-out user's refresh tokens in refresh requests. Other requests might be valid until your user's token expires. This operation doesn't clear the managed login session cookie. To clear the session for a user who signed in with managed login or the classic hosted UI, direct their browser session to the logout endpoint. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.

```sql
EXEC aws.cognito_idp.sign_outs.global_sign_out 
@region='{{ region }}' --required 
@@json=
'{
"AccessToken": "{{ AccessToken }}"
}'
;
```
</TabItem>
</Tabs>
