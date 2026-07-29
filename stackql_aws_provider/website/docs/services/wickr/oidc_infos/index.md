--- 
title: oidc_infos
hide_title: false
hide_table_of_contents: false
keywords:
  - oidc_infos
  - wickr
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

Creates, updates, deletes, gets or lists an <code>oidc_infos</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="oidc_infos" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wickr.oidc_infos" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_oidc_info"
    values={[
        { label: 'get_oidc_info', value: 'get_oidc_info' }
    ]}
>
<TabItem value="get_oidc_info">

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
    <td><CopyableCode code="openid_connect_info" /></td>
    <td><code>object</code></td>
    <td>The OpenID Connect configuration information for the network, including issuer, client ID, scopes, and other SSO settings.</td>
</tr>
<tr>
    <td><CopyableCode code="token_info" /></td>
    <td><code>object</code></td>
    <td>OAuth token information including access token, refresh token, and expiration details (only present if token parameters were provided in the request).</td>
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
    <td><a href="#get_oidc_info"><CopyableCode code="get_oidc_info" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientId"><code>clientId</code></a>, <a href="#parameter-code"><code>code</code></a>, <a href="#parameter-grantType"><code>grantType</code></a>, <a href="#parameter-redirectUri"><code>redirectUri</code></a>, <a href="#parameter-url"><code>url</code></a>, <a href="#parameter-clientSecret"><code>clientSecret</code></a>, <a href="#parameter-codeVerifier"><code>codeVerifier</code></a>, <a href="#parameter-certificate"><code>certificate</code></a></td>
    <td>Retrieves the OpenID Connect (OIDC) configuration for a Wickr network, including SSO settings and optional token information if access token parameters are provided.</td>
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
<tr id="parameter-network_id">
    <td><CopyableCode code="network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Wickr network whose OIDC configuration will be retrieved.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-certificate">
    <td><CopyableCode code="certificate" /></td>
    <td><code>string</code></td>
    <td>The CA certificate for secure communication with the OIDC provider (optional).</td>
</tr>
<tr id="parameter-clientId">
    <td><CopyableCode code="clientId" /></td>
    <td><code>string</code></td>
    <td>The OAuth client ID for retrieving access tokens (optional).</td>
</tr>
<tr id="parameter-clientSecret">
    <td><CopyableCode code="clientSecret" /></td>
    <td><code>string</code></td>
    <td>The OAuth client secret for retrieving access tokens (optional).</td>
</tr>
<tr id="parameter-code">
    <td><CopyableCode code="code" /></td>
    <td><code>string</code></td>
    <td>The authorization code for retrieving access tokens (optional).</td>
</tr>
<tr id="parameter-codeVerifier">
    <td><CopyableCode code="codeVerifier" /></td>
    <td><code>string</code></td>
    <td>The PKCE code verifier for enhanced security in the OAuth flow (optional).</td>
</tr>
<tr id="parameter-grantType">
    <td><CopyableCode code="grantType" /></td>
    <td><code>string</code></td>
    <td>The OAuth grant type for retrieving access tokens (optional).</td>
</tr>
<tr id="parameter-redirectUri">
    <td><CopyableCode code="redirectUri" /></td>
    <td><code>string</code></td>
    <td>The redirect URI for the OAuth flow (optional).</td>
</tr>
<tr id="parameter-url">
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>The URL for the OIDC provider (optional).</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_oidc_info"
    values={[
        { label: 'get_oidc_info', value: 'get_oidc_info' }
    ]}
>
<TabItem value="get_oidc_info">

Retrieves the OpenID Connect (OIDC) configuration for a Wickr network, including SSO settings and optional token information if access token parameters are provided.

```sql
SELECT
openid_connect_info,
token_info
FROM aws.wickr.oidc_infos
WHERE network_id = '{{ network_id }}' -- required
AND region = '{{ region }}' -- required
AND clientId = '{{ clientId }}'
AND code = '{{ code }}'
AND grantType = '{{ grantType }}'
AND redirectUri = '{{ redirectUri }}'
AND url = '{{ url }}'
AND clientSecret = '{{ clientSecret }}'
AND codeVerifier = '{{ codeVerifier }}'
AND certificate = '{{ certificate }}'
;
```
</TabItem>
</Tabs>
