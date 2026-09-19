--- 
title: client_tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - client_tokens
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

Creates, updates, deletes, gets or lists a <code>client_tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="client_tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_idp.client_tokens" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_client_token"
    values={[
        { label: 'get_client_token', value: 'get_client_token' }
    ]}
>
<TabItem value="get_client_token">

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
    <td><CopyableCode code="access_token" /></td>
    <td><code>string</code></td>
    <td>The access token for the requested app client. Present this token to a resource server to authorize a request, using the scopes granted in the token. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_=.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="expires_in" /></td>
    <td><code>integer</code></td>
    <td>The number of seconds until the access token expires.</td>
</tr>
<tr>
    <td><CopyableCode code="token_type" /></td>
    <td><code>string</code></td>
    <td>The type of the token. For example, Bearer.</td>
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
    <td><a href="#get_client_token"><CopyableCode code="get_client_token" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Issues an access token for machine-to-machine (M2M) authorization. Your app client provides its client ID and secret, and receives an access token that authorizes requests to your resource servers. GetClientToken provides the same functionality as the OAuth2 client-credentials grant; both authorize an application rather than a user. To use this operation, you must configure the app client with a client secret and enable the ALLOW_CLIENT_TOKEN_AUTH authentication flow. The ALLOW_CLIENT_TOKEN_AUTH flow is mutually exclusive with user authentication flows. It must be the only authentication flow that you configure for the app client. For more information, see Scopes, M2M, and resource servers. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.</td>
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
    defaultValue="get_client_token"
    values={[
        { label: 'get_client_token', value: 'get_client_token' }
    ]}
>
<TabItem value="get_client_token">

Issues an access token for machine-to-machine (M2M) authorization. Your app client provides its client ID and secret, and receives an access token that authorizes requests to your resource servers. GetClientToken provides the same functionality as the OAuth2 client-credentials grant; both authorize an application rather than a user. To use this operation, you must configure the app client with a client secret and enable the ALLOW_CLIENT_TOKEN_AUTH authentication flow. The ALLOW_CLIENT_TOKEN_AUTH flow is mutually exclusive with user authentication flows. It must be the only authentication flow that you configure for the app client. For more information, see Scopes, M2M, and resource servers. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.

```sql
SELECT
access_token,
expires_in,
token_type
FROM aws.cognito_idp.client_tokens
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
