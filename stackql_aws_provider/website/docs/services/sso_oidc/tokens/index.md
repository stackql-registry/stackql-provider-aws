--- 
title: tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - tokens
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

Creates, updates, deletes, gets or lists a <code>tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sso_oidc.tokens" /></td></tr>
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
    <td><a href="#create_token"><CopyableCode code="create_token" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-clientId"><code>clientId</code></a>, <a href="#parameter-clientSecret"><code>clientSecret</code></a>, <a href="#parameter-grantType"><code>grantType</code></a></td>
    <td></td>
    <td>Creates and returns access and refresh tokens for clients that are authenticated using client secrets. The access token can be used to fetch short-lived credentials for the assigned AWS accounts or to access application APIs using bearer authentication.</td>
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
    defaultValue="create_token"
    values={[
        { label: 'create_token', value: 'create_token' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_token">

Creates and returns access and refresh tokens for clients that are authenticated using client secrets. The access token can be used to fetch short-lived credentials for the assigned AWS accounts or to access application APIs using bearer authentication.

```sql
INSERT INTO aws.sso_oidc.tokens (
clientId,
clientSecret,
grantType,
deviceCode,
code,
refreshToken,
scope,
redirectUri,
codeVerifier,
region
)
SELECT 
'{{ clientId }}' /* required */,
'{{ clientSecret }}' /* required */,
'{{ grantType }}' /* required */,
'{{ deviceCode }}',
'{{ code }}',
'{{ refreshToken }}',
'{{ scope }}',
'{{ redirectUri }}',
'{{ codeVerifier }}',
'{{ region }}'
RETURNING
access_token,
expires_in,
id_token,
refresh_token,
token_type
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
    - name: clientId
      value: "{{ clientId }}"
    - name: clientSecret
      value: "{{ clientSecret }}"
    - name: grantType
      value: "{{ grantType }}"
    - name: deviceCode
      value: "{{ deviceCode }}"
    - name: code
      value: "{{ code }}"
    - name: refreshToken
      value: "{{ refreshToken }}"
    - name: scope
      value:
        - "{{ scope }}"
    - name: redirectUri
      value: "{{ redirectUri }}"
    - name: codeVerifier
      value: "{{ codeVerifier }}"
`}</CodeBlock>

</TabItem>
</Tabs>
