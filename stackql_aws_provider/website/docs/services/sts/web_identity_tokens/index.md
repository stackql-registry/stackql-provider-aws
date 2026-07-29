--- 
title: web_identity_tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - web_identity_tokens
  - sts
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

Creates, updates, deletes, gets or lists a <code>web_identity_tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="web_identity_tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sts.web_identity_tokens" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_web_identity_token"
    values={[
        { label: 'get_web_identity_token', value: 'get_web_identity_token' }
    ]}
>
<TabItem value="get_web_identity_token">

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
    <td><CopyableCode code="expiration" /></td>
    <td><code>string</code></td>
    <td>The date and time when the web identity token expires, in UTC. The expiration is determined by adding the DurationSeconds value to the time the token was issued. After this time, the token should no longer be considered valid.</td>
</tr>
<tr>
    <td><CopyableCode code="web_identity_token" /></td>
    <td><code>string</code></td>
    <td>A signed JSON Web Token (JWT) that represents the caller's Amazon Web Services identity. The token contains standard JWT claims such as subject, audience, expiration time, and additional identity attributes added by STS as custom claims. You can also add your own custom claims to the token by passing tags as request parameters to the GetWebIdentityToken API. The token is signed using the specified signing algorithm and can be verified using the verification keys available at the issuer's JWKS endpoint.</td>
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
    <td><a href="#get_web_identity_token"><CopyableCode code="get_web_identity_token" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-SigningAlgorithm"><code>SigningAlgorithm</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Audience"><code>Audience</code></a>, <a href="#parameter-DurationSeconds"><code>DurationSeconds</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Returns a signed JSON Web Token (JWT) that represents the calling Amazon Web Services identity. The returned JWT can be used to authenticate with external services that support OIDC discovery. The token is signed by Amazon Web Services STS and can be publicly verified using the verification keys published at the issuer's JWKS endpoint.</td>
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
<tr id="parameter-SigningAlgorithm">
    <td><CopyableCode code="SigningAlgorithm" /></td>
    <td><code>string</code></td>
    <td>The cryptographic algorithm to use for signing the JSON Web Token (JWT). Valid values are RS256 (RSA with SHA-256) and ES384 (ECDSA using P-384 curve with SHA-384).</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Audience">
    <td><CopyableCode code="Audience" /></td>
    <td><code>array</code></td>
    <td>The intended recipient of the web identity token. This value populates the aud claim in the JWT and should identify the service or application that will validate and use the token. The external service should verify this claim to ensure the token was intended for their use.</td>
</tr>
<tr id="parameter-DurationSeconds">
    <td><CopyableCode code="DurationSeconds" /></td>
    <td><code>integer</code></td>
    <td>The duration, in seconds, for which the JSON Web Token (JWT) will remain valid. The value can range from 60 seconds (1 minute) to 3600 seconds (1 hour). If not specified, the default duration is 300 seconds (5 minutes). The token is designed to be short-lived and should be used for proof of identity, then exchanged for credentials or short-lived tokens in the external service.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>An optional list of tags to include in the JSON Web Token (JWT). These tags are added as custom claims to the JWT and can be used by the downstream service for authorization decisions.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_web_identity_token"
    values={[
        { label: 'get_web_identity_token', value: 'get_web_identity_token' }
    ]}
>
<TabItem value="get_web_identity_token">

Returns a signed JSON Web Token (JWT) that represents the calling Amazon Web Services identity. The returned JWT can be used to authenticate with external services that support OIDC discovery. The token is signed by Amazon Web Services STS and can be publicly verified using the verification keys published at the issuer's JWKS endpoint.

```sql
SELECT
expiration,
web_identity_token
FROM aws.sts.web_identity_tokens
WHERE SigningAlgorithm = '{{ SigningAlgorithm }}' -- required
AND region = '{{ region }}' -- required
AND Audience = '{{ Audience }}'
AND DurationSeconds = '{{ DurationSeconds }}'
AND Tags = '{{ Tags }}'
;
```
</TabItem>
</Tabs>
