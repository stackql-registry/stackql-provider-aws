--- 
title: token_with_iams
hide_title: false
hide_table_of_contents: false
keywords:
  - token_with_iams
  - sso_oidc
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

Creates, updates, deletes, gets or lists a <code>token_with_iams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="token_with_iams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sso_oidc.token_with_iams" /></td></tr>
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
    <td><a href="#create_token_with_iam"><CopyableCode code="create_token_with_iam" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clientId"><code>clientId</code></a>, <a href="#parameter-grantType"><code>grantType</code></a></td>
    <td></td>
    <td>Creates and returns access and refresh tokens for authorized client applications that are authenticated using any IAM entity, such as a service role or user. These tokens might contain defined scopes that specify permissions such as read:profile or write:data. Through downscoping, you can use the scopes parameter to request tokens with reduced permissions compared to the original client application's permissions or, if applicable, the refresh token's scopes. The access token can be used to fetch short-lived credentials for the assigned Amazon Web Services accounts or to access application APIs using bearer authentication. This API is used with Signature Version 4. For more information, see Amazon Web Services Signature Version 4 for API Requests.</td>
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
    defaultValue="create_token_with_iam"
    values={[
        { label: 'create_token_with_iam', value: 'create_token_with_iam' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_token_with_iam">

Creates and returns access and refresh tokens for authorized client applications that are authenticated using any IAM entity, such as a service role or user. These tokens might contain defined scopes that specify permissions such as read:profile or write:data. Through downscoping, you can use the scopes parameter to request tokens with reduced permissions compared to the original client application's permissions or, if applicable, the refresh token's scopes. The access token can be used to fetch short-lived credentials for the assigned Amazon Web Services accounts or to access application APIs using bearer authentication. This API is used with Signature Version 4. For more information, see Amazon Web Services Signature Version 4 for API Requests.

```sql
INSERT INTO aws.sso_oidc.token_with_iams (
clientId,
grantType,
code,
refreshToken,
assertion,
scope,
redirectUri,
subjectToken,
subjectTokenType,
requestedTokenType,
codeVerifier,
region
)
SELECT 
'{{ clientId }}' /* required */,
'{{ grantType }}' /* required */,
'{{ code }}',
'{{ refreshToken }}',
'{{ assertion }}',
'{{ scope }}',
'{{ redirectUri }}',
'{{ subjectToken }}',
'{{ subjectTokenType }}',
'{{ requestedTokenType }}',
'{{ codeVerifier }}',
'{{ region }}'
RETURNING
access_token,
aws_additional_details,
expires_in,
id_token,
issued_token_type,
refresh_token,
scope,
token_type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: token_with_iams
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the token_with_iams resource.
    - name: clientId
      value: "{{ clientId }}"
    - name: grantType
      value: "{{ grantType }}"
    - name: code
      value: "{{ code }}"
    - name: refreshToken
      value: "{{ refreshToken }}"
    - name: assertion
      value: "{{ assertion }}"
    - name: scope
      value:
        - "{{ scope }}"
    - name: redirectUri
      value: "{{ redirectUri }}"
    - name: subjectToken
      value: "{{ subjectToken }}"
    - name: subjectTokenType
      value: "{{ subjectTokenType }}"
    - name: requestedTokenType
      value: "{{ requestedTokenType }}"
    - name: codeVerifier
      value: "{{ codeVerifier }}"
`}</CodeBlock>

</TabItem>
</Tabs>
