--- 
title: web_authn_credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - web_authn_credentials
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

Creates, updates, deletes, gets or lists a <code>web_authn_credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="web_authn_credentials" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_idp.web_authn_credentials" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_web_authn_credentials"
    values={[
        { label: 'list_web_authn_credentials', value: 'list_web_authn_credentials' }
    ]}
>
<TabItem value="list_web_authn_credentials">

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
    <td><CopyableCode code="Credentials" /></td>
    <td><code>array</code></td>
    <td>A list of registered passkeys for a user.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The identifier that Amazon Cognito returned with the previous request to this operation. When you include a pagination token in your request, Amazon Cognito returns the next set of items in the list. By use of this token, you can paginate through the full list of items. (pattern: &lt;code&gt;&#91;\S&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#list_web_authn_credentials"><CopyableCode code="list_web_authn_credentials" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Generates a list of the currently signed-in user's registered passkey, or WebAuthn, credentials. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.</td>
</tr>
<tr>
    <td><a href="#delete_web_authn_credential"><CopyableCode code="delete_web_authn_credential" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a registered passkey, or WebAuthn, authenticator for the currently signed-in user. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.</td>
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
    defaultValue="list_web_authn_credentials"
    values={[
        { label: 'list_web_authn_credentials', value: 'list_web_authn_credentials' }
    ]}
>
<TabItem value="list_web_authn_credentials">

Generates a list of the currently signed-in user's registered passkey, or WebAuthn, credentials. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.

```sql
SELECT
Credentials,
NextToken
FROM aws.cognito_idp.web_authn_credentials
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_web_authn_credential"
    values={[
        { label: 'delete_web_authn_credential', value: 'delete_web_authn_credential' }
    ]}
>
<TabItem value="delete_web_authn_credential">

Deletes a registered passkey, or WebAuthn, authenticator for the currently signed-in user. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin. Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see Using the Amazon Cognito user pools API and user pool endpoints.

```sql
DELETE FROM aws.cognito_idp.web_authn_credentials
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
