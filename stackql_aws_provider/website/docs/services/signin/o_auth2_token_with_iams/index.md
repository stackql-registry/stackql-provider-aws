--- 
title: o_auth2_token_with_iams
hide_title: false
hide_table_of_contents: false
keywords:
  - o_auth2_token_with_iams
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

Creates, updates, deletes, gets or lists an <code>o_auth2_token_with_iams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="o_auth2_token_with_iams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.signin.o_auth2_token_with_iams" /></td></tr>
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
    <td><a href="#create_o_auth2_token_with_iam"><CopyableCode code="create_o_auth2_token_with_iam" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-grantType"><code>grantType</code></a>, <a href="#parameter-resource"><code>resource</code></a></td>
    <td></td>
    <td>Grants permission to exchange client credentials for an OAuth 2.0 access token scoped to a resource that can be used to access AWS services from applications</td>
</tr>
<tr>
    <td><a href="#revoke_o_auth2_token_with_iam"><CopyableCode code="revoke_o_auth2_token_with_iam" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>Grants permission to revoke an OAuth 2.0 refresh token and its associated refresh tokens Revokes a refresh_token issued by AWS Sign-In, invalidating the entire token chain so that the refresh_token can no longer be used to mint new access_tokens. Idempotency: revoking an already-revoked, expired, or otherwise invalid token still returns 200 OK with an empty body. Only the refresh_token type is accepted.</td>
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
    defaultValue="create_o_auth2_token_with_iam"
    values={[
        { label: 'create_o_auth2_token_with_iam', value: 'create_o_auth2_token_with_iam' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_o_auth2_token_with_iam">

Grants permission to exchange client credentials for an OAuth 2.0 access token scoped to a resource that can be used to access AWS services from applications

```sql
INSERT INTO aws.signin.o_auth2_token_with_iams (
grantType,
resource,
region
)
SELECT 
'{{ grantType }}' /* required */,
'{{ resource }}' /* required */,
'{{ region }}'
RETURNING
access_token,
expires_in,
token_type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: o_auth2_token_with_iams
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the o_auth2_token_with_iams resource.
    - name: grantType
      value: "{{ grantType }}"
      description: |
        OAuth 2.0 grant type for client_credentials flow.
    - name: resource
      value: "{{ resource }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="revoke_o_auth2_token_with_iam"
    values={[
        { label: 'revoke_o_auth2_token_with_iam', value: 'revoke_o_auth2_token_with_iam' }
    ]}
>
<TabItem value="revoke_o_auth2_token_with_iam">

Grants permission to revoke an OAuth 2.0 refresh token and its associated refresh tokens Revokes a refresh_token issued by AWS Sign-In, invalidating the entire token chain so that the refresh_token can no longer be used to mint new access_tokens. Idempotency: revoking an already-revoked, expired, or otherwise invalid token still returns 200 OK with an empty body. Only the refresh_token type is accepted.

```sql
UPDATE aws.signin.o_auth2_token_with_iams
SET 
token = '{{ token }}'
WHERE 
region = '{{ region }}' --required
AND token = '{{ token }}' --required;
```
</TabItem>
</Tabs>
