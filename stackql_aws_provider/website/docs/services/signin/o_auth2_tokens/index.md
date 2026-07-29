--- 
title: o_auth2_tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - o_auth2_tokens
  - signin
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

Creates, updates, deletes, gets or lists an <code>o_auth2_tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="o_auth2_tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.signin.o_auth2_tokens" /></td></tr>
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
    <td><a href="#create_o_auth2_token"><CopyableCode code="create_o_auth2_token" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-tokenInput"><code>tokenInput</code></a></td>
    <td></td>
    <td>CreateOAuth2Token API Path: /v1/token Request Method: POST Content-Type: application/json or application/x-www-form-urlencoded This API implements OAuth 2.0 flows for AWS Sign-In CLI clients, supporting both: Authorization code redemption (grant_type=authorization_code) - NOT idempotent Token refresh (grant_type=refresh_token) - Idempotent within token validity window The operation behavior is determined by the grant_type parameter in the request body: Authorization Code Flow (NOT Idempotent): JSON or form-encoded body with client_id, grant_type=authorization_code, code, redirect_uri, code_verifier Returns access_token, token_type, expires_in, refresh_token, and id_token Each authorization code can only be used ONCE for security (prevents replay attacks) Token Refresh Flow (Idempotent): JSON or form-encoded body with client_id, grant_type=refresh_token, refresh_token Returns access_token, token_type, expires_in, and refresh_token (no id_token) Multiple calls with same refresh_token return consistent results within validity window Authentication and authorization: Confidential clients: sigv4 signing required with signin:ExchangeToken permissions CLI clients (public): authn/authz skipped based on client_id & grant_type Note: This operation cannot be marked as @idempotent because it handles both idempotent (token refresh) and non-idempotent (auth code redemption) flows in a single endpoint.</td>
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

## `INSERT` examples

<Tabs
    defaultValue="create_o_auth2_token"
    values={[
        { label: 'create_o_auth2_token', value: 'create_o_auth2_token' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_o_auth2_token">

CreateOAuth2Token API Path: /v1/token Request Method: POST Content-Type: application/json or application/x-www-form-urlencoded This API implements OAuth 2.0 flows for AWS Sign-In CLI clients, supporting both: Authorization code redemption (grant_type=authorization_code) - NOT idempotent Token refresh (grant_type=refresh_token) - Idempotent within token validity window The operation behavior is determined by the grant_type parameter in the request body: Authorization Code Flow (NOT Idempotent): JSON or form-encoded body with client_id, grant_type=authorization_code, code, redirect_uri, code_verifier Returns access_token, token_type, expires_in, refresh_token, and id_token Each authorization code can only be used ONCE for security (prevents replay attacks) Token Refresh Flow (Idempotent): JSON or form-encoded body with client_id, grant_type=refresh_token, refresh_token Returns access_token, token_type, expires_in, and refresh_token (no id_token) Multiple calls with same refresh_token return consistent results within validity window Authentication and authorization: Confidential clients: sigv4 signing required with signin:ExchangeToken permissions CLI clients (public): authn/authz skipped based on client_id & grant_type Note: This operation cannot be marked as @idempotent because it handles both idempotent (token refresh) and non-idempotent (auth code redemption) flows in a single endpoint.

```sql
INSERT INTO aws.signin.o_auth2_tokens (
tokenInput,
region
)
SELECT 
'{{ tokenInput }}' /* required */,
'{{ region }}'
RETURNING
token_output
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: o_auth2_tokens
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the o_auth2_tokens resource.
    - name: tokenInput
      description: |
        Request body payload for CreateOAuth2Token operation The operation type is determined by the grant_type parameter: grant_type=authorization_code: Requires code, redirect_uri, code_verifier grant_type=refresh_token: Requires refresh_token
      value:
        clientId: "{{ clientId }}"
        grantType: "{{ grantType }}"
        code: "{{ code }}"
        redirectUri: "{{ redirectUri }}"
        codeVerifier: "{{ codeVerifier }}"
        refreshToken: "{{ refreshToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>
