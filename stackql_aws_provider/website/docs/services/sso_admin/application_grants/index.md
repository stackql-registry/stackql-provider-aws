--- 
title: application_grants
hide_title: false
hide_table_of_contents: false
keywords:
  - application_grants
  - sso_admin
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

Creates, updates, deletes, gets or lists an <code>application_grants</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="application_grants" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sso_admin.application_grants" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_application_grant"
    values={[
        { label: 'get_application_grant', value: 'get_application_grant' },
        { label: 'list_application_grants', value: 'list_application_grants' }
    ]}
>
<TabItem value="get_application_grant">

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
    <td><CopyableCode code="AuthorizationCode" /></td>
    <td><code>object</code></td>
    <td>Configuration options for the authorization_code grant type.</td>
</tr>
<tr>
    <td><CopyableCode code="JwtBearer" /></td>
    <td><code>object</code></td>
    <td>Configuration options for the urn:ietf:params:oauth:grant-type:jwt-bearer grant type.</td>
</tr>
<tr>
    <td><CopyableCode code="RefreshToken" /></td>
    <td><code>object</code></td>
    <td>Configuration options for the refresh_token grant type.</td>
</tr>
<tr>
    <td><CopyableCode code="TokenExchange" /></td>
    <td><code>object</code></td>
    <td>Configuration options for the urn:ietf:params:oauth:grant-type:token-exchange grant type.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_application_grants">

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
    <td><CopyableCode code="Grant" /></td>
    <td><code>object</code></td>
    <td>The configuration structure for the selected grant.</td>
</tr>
<tr>
    <td><CopyableCode code="GrantType" /></td>
    <td><code>string</code></td>
    <td>The type of the selected grant. (authorization_code, refresh_token, urn:ietf:params:oauth:grant-type:jwt-bearer, urn:ietf:params:oauth:grant-type:token-exchange)</td>
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
    <td><a href="#get_application_grant"><CopyableCode code="get_application_grant" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details about an application grant.</td>
</tr>
<tr>
    <td><a href="#list_application_grants"><CopyableCode code="list_application_grants" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List the grants associated with an application.</td>
</tr>
<tr>
    <td><a href="#put_application_grant"><CopyableCode code="put_application_grant" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationArn"><code>ApplicationArn</code></a>, <a href="#parameter-GrantType"><code>GrantType</code></a></td>
    <td></td>
    <td>Creates a configuration for an application to use grants. Conceptually grants are authorization to request actions related to tokens. This configuration will be used when parties are requesting and receiving tokens during the trusted identity propagation process. For more information on the IAM Identity Center supported grant workflows, see SAML 2.0 and OAuth 2.0. A grant is created between your applications and Identity Center instance which enables an application to use specified mechanisms to obtain tokens. These tokens are used by your applications to gain access to Amazon Web Services resources on behalf of users. The following elements are within these exchanges: Requester - The application requesting access to Amazon Web Services resources. Subject - Typically the user that is requesting access to Amazon Web Services resources. Grant - Conceptually, a grant is authorization to access Amazon Web Services resources. These grants authorize token generation for authenticating access to the requester and for the request to make requests on behalf of the subjects. There are four types of grants: AuthorizationCode - Allows an application to request authorization through a series of user-agent redirects. JWT bearer - Authorizes an application to exchange a JSON Web Token that came from an external identity provider. To learn more, see RFC 6479. Refresh token - Enables application to request new access tokens to replace expiring or expired access tokens. Exchange token - A grant that requests tokens from the authorization server by providing a ‘subject’ token with access scope authorizing trusted identity propagation to this application. To learn more, see RFC 8693. Authorization server - IAM Identity Center requests tokens. User credentials are never shared directly within these exchanges. Instead, applications use grants to request access tokens from IAM Identity Center. For more information, see RFC 6479. Use cases Connecting to custom applications. Configuring an Amazon Web Services service to make calls to another Amazon Web Services services using JWT tokens.</td>
</tr>
<tr>
    <td><a href="#delete_application_grant"><CopyableCode code="delete_application_grant" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a grant from an application.</td>
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
    defaultValue="get_application_grant"
    values={[
        { label: 'get_application_grant', value: 'get_application_grant' },
        { label: 'list_application_grants', value: 'list_application_grants' }
    ]}
>
<TabItem value="get_application_grant">

Retrieves details about an application grant.

```sql
SELECT
AuthorizationCode,
JwtBearer,
RefreshToken,
TokenExchange
FROM aws.sso_admin.application_grants
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_application_grants">

List the grants associated with an application.

```sql
SELECT
Grant,
GrantType
FROM aws.sso_admin.application_grants
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_application_grant"
    values={[
        { label: 'put_application_grant', value: 'put_application_grant' }
    ]}
>
<TabItem value="put_application_grant">

Creates a configuration for an application to use grants. Conceptually grants are authorization to request actions related to tokens. This configuration will be used when parties are requesting and receiving tokens during the trusted identity propagation process. For more information on the IAM Identity Center supported grant workflows, see SAML 2.0 and OAuth 2.0. A grant is created between your applications and Identity Center instance which enables an application to use specified mechanisms to obtain tokens. These tokens are used by your applications to gain access to Amazon Web Services resources on behalf of users. The following elements are within these exchanges: Requester - The application requesting access to Amazon Web Services resources. Subject - Typically the user that is requesting access to Amazon Web Services resources. Grant - Conceptually, a grant is authorization to access Amazon Web Services resources. These grants authorize token generation for authenticating access to the requester and for the request to make requests on behalf of the subjects. There are four types of grants: AuthorizationCode - Allows an application to request authorization through a series of user-agent redirects. JWT bearer - Authorizes an application to exchange a JSON Web Token that came from an external identity provider. To learn more, see RFC 6479. Refresh token - Enables application to request new access tokens to replace expiring or expired access tokens. Exchange token - A grant that requests tokens from the authorization server by providing a ‘subject’ token with access scope authorizing trusted identity propagation to this application. To learn more, see RFC 8693. Authorization server - IAM Identity Center requests tokens. User credentials are never shared directly within these exchanges. Instead, applications use grants to request access tokens from IAM Identity Center. For more information, see RFC 6479. Use cases Connecting to custom applications. Configuring an Amazon Web Services service to make calls to another Amazon Web Services services using JWT tokens.

```sql
REPLACE aws.sso_admin.application_grants
SET 
ApplicationArn = '{{ ApplicationArn }}',
GrantType = '{{ GrantType }}',
Grant = '{{ Grant }}'
WHERE 
region = '{{ region }}' --required
AND ApplicationArn = '{{ ApplicationArn }}' --required
AND GrantType = '{{ GrantType }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_application_grant"
    values={[
        { label: 'delete_application_grant', value: 'delete_application_grant' }
    ]}
>
<TabItem value="delete_application_grant">

Deletes a grant from an application.

```sql
DELETE FROM aws.sso_admin.application_grants
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
