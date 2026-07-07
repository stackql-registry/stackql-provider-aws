--- 
title: tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - tokens
  - license_manager
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

Creates, updates, deletes, gets or lists a <code>tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.license_manager.tokens" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_tokens"
    values={[
        { label: 'list_tokens', value: 'list_tokens' }
    ]}
>
<TabItem value="list_tokens">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Token for the next set of results.</td>
</tr>
<tr>
    <td><CopyableCode code="Tokens" /></td>
    <td><code>array</code></td>
    <td>Received token details.</td>
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
    <td><a href="#list_tokens"><CopyableCode code="list_tokens" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists your tokens.</td>
</tr>
<tr>
    <td><a href="#create_token"><CopyableCode code="create_token" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LicenseArn"><code>LicenseArn</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>Creates a long-lived token. A refresh token is a JWT token used to get an access token. With an access token, you can call AssumeRoleWithWebIdentity to get role credentials that you can use to call License Manager to manage the specified license.</td>
</tr>
<tr>
    <td><a href="#delete_token"><CopyableCode code="delete_token" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified token. Must be called in the license home Region.</td>
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
    defaultValue="list_tokens"
    values={[
        { label: 'list_tokens', value: 'list_tokens' }
    ]}
>
<TabItem value="list_tokens">

Lists your tokens.

```sql
SELECT
NextToken,
Tokens
FROM aws.license_manager.tokens
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_token"
    values={[
        { label: 'create_token', value: 'create_token' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_token">

Creates a long-lived token. A refresh token is a JWT token used to get an access token. With an access token, you can call AssumeRoleWithWebIdentity to get role credentials that you can use to call License Manager to manage the specified license.

```sql
INSERT INTO aws.license_manager.tokens (
LicenseArn,
RoleArns,
ExpirationInDays,
TokenProperties,
ClientToken,
region
)
SELECT 
'{{ LicenseArn }}' /* required */,
'{{ RoleArns }}',
{{ ExpirationInDays }},
'{{ TokenProperties }}',
'{{ ClientToken }}' /* required */,
'{{ region }}'
RETURNING
Token,
TokenId,
TokenType
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tokens
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the tokens resource.
    - name: LicenseArn
      value: "{{ LicenseArn }}"
      description: |
        Amazon Resource Name (ARN) of the license. The ARN is mapped to the aud claim of the JWT token.
    - name: RoleArns
      value:
        - "{{ RoleArns }}"
      description: |
        Amazon Resource Name (ARN) of the IAM roles to embed in the token. License Manager does not check whether the roles are in use.
    - name: ExpirationInDays
      value: {{ ExpirationInDays }}
      description: |
        Token expiration, in days, counted from token creation. The default is 365 days.
    - name: TokenProperties
      value:
        - "{{ TokenProperties }}"
      description: |
        Data specified by the caller to be included in the JWT token. The data is mapped to the amr claim of the JWT token.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        Idempotency token, valid for 10 minutes.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_token"
    values={[
        { label: 'delete_token', value: 'delete_token' }
    ]}
>
<TabItem value="delete_token">

Deletes the specified token. Must be called in the license home Region.

```sql
DELETE FROM aws.license_manager.tokens
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
