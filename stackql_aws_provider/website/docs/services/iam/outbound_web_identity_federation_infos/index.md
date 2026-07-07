--- 
title: outbound_web_identity_federation_infos
hide_title: false
hide_table_of_contents: false
keywords:
  - outbound_web_identity_federation_infos
  - iam
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

Creates, updates, deletes, gets or lists an <code>outbound_web_identity_federation_infos</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="outbound_web_identity_federation_infos" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.outbound_web_identity_federation_infos" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_outbound_web_identity_federation_info"
    values={[
        { label: 'get_outbound_web_identity_federation_info', value: 'get_outbound_web_identity_federation_info' }
    ]}
>
<TabItem value="get_outbound_web_identity_federation_info">

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
    <td><CopyableCode code="IssuerIdentifier" /></td>
    <td><code>string</code></td>
    <td>A unique issuer URL for your Amazon Web Services account that hosts the OpenID Connect (OIDC) discovery endpoints at /.well-known/openid-configuration and /.well-known/jwks.json. The OpenID Connect (OIDC) discovery endpoints contain verification keys and metadata necessary for token verification.</td>
</tr>
<tr>
    <td><CopyableCode code="JwtVendingEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether outbound identity federation is currently enabled for your Amazon Web Services account. When true, IAM principals in the account can call the GetWebIdentityToken API to obtain JSON Web Tokens (JWTs) for authentication with external services.</td>
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
    <td><a href="#get_outbound_web_identity_federation_info"><CopyableCode code="get_outbound_web_identity_federation_info" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the configuration information for the outbound identity federation feature in your Amazon Web Services account. The response includes the unique issuer URL for your Amazon Web Services account and the current enabled/disabled status of the feature. Use this operation to obtain the issuer URL that you need to configure trust relationships with external services.</td>
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
    defaultValue="get_outbound_web_identity_federation_info"
    values={[
        { label: 'get_outbound_web_identity_federation_info', value: 'get_outbound_web_identity_federation_info' }
    ]}
>
<TabItem value="get_outbound_web_identity_federation_info">

Retrieves the configuration information for the outbound identity federation feature in your Amazon Web Services account. The response includes the unique issuer URL for your Amazon Web Services account and the current enabled/disabled status of the feature. Use this operation to obtain the issuer URL that you need to configure trust relationships with external services.

```sql
SELECT
IssuerIdentifier,
JwtVendingEnabled
FROM aws.iam.outbound_web_identity_federation_infos
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
