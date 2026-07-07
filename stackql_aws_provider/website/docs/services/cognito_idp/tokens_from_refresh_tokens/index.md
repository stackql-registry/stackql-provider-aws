--- 
title: tokens_from_refresh_tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - tokens_from_refresh_tokens
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

Creates, updates, deletes, gets or lists a <code>tokens_from_refresh_tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tokens_from_refresh_tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_idp.tokens_from_refresh_tokens" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_tokens_from_refresh_token"
    values={[
        { label: 'get_tokens_from_refresh_token', value: 'get_tokens_from_refresh_token' }
    ]}
>
<TabItem value="get_tokens_from_refresh_token">

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
    <td><CopyableCode code="AccessToken" /></td>
    <td><code>string</code></td>
    <td>Your user's access token. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_=.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ExpiresIn" /></td>
    <td><code>integer</code></td>
    <td>The expiration period of the authentication result in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="IdToken" /></td>
    <td><code>string</code></td>
    <td>Your user's ID token. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_=.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NewDeviceMetadata" /></td>
    <td><code>object</code></td>
    <td>The new device metadata from an authentication result.</td>
</tr>
<tr>
    <td><CopyableCode code="RefreshToken" /></td>
    <td><code>string</code></td>
    <td>Your user's refresh token. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_=.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TokenType" /></td>
    <td><code>string</code></td>
    <td>The intended use of the token, for example Bearer.</td>
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
    <td><a href="#get_tokens_from_refresh_token"><CopyableCode code="get_tokens_from_refresh_token" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Given a refresh token, issues new ID, access, and optionally refresh tokens for the user who owns the submitted token. This operation issues a new refresh token and invalidates the original refresh token after an optional grace period when refresh token rotation is enabled. If refresh token rotation is disabled, issues new ID and access tokens only.</td>
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
    defaultValue="get_tokens_from_refresh_token"
    values={[
        { label: 'get_tokens_from_refresh_token', value: 'get_tokens_from_refresh_token' }
    ]}
>
<TabItem value="get_tokens_from_refresh_token">

Given a refresh token, issues new ID, access, and optionally refresh tokens for the user who owns the submitted token. This operation issues a new refresh token and invalidates the original refresh token after an optional grace period when refresh token rotation is enabled. If refresh token rotation is disabled, issues new ID and access tokens only.

```sql
SELECT
AccessToken,
ExpiresIn,
IdToken,
NewDeviceMetadata,
RefreshToken,
TokenType
FROM aws.cognito_idp.tokens_from_refresh_tokens
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
