--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
  - quicksight
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

Creates, updates, deletes, gets or lists a <code>users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.users" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_user"
    values={[
        { label: 'describe_user', value: 'describe_user' },
        { label: 'list_users', value: 'list_users' }
    ]}
>
<TabItem value="describe_user">

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
    <td><CopyableCode code="RequestId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="User" /></td>
    <td><code>object</code></td>
    <td>The user name.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_users">

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
    <td><CopyableCode code="Active" /></td>
    <td><code>boolean</code></td>
    <td>The active status of user. When you create an Quick Sight user that's not an IAM user or an Active Directory user, that user is inactive until they sign in and provide a password.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the user.</td>
</tr>
<tr>
    <td><CopyableCode code="CustomPermissionsName" /></td>
    <td><code>string</code></td>
    <td>The custom permissions profile associated with this user. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9+=,.@_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Email" /></td>
    <td><code>string</code></td>
    <td>The user's email address.</td>
</tr>
<tr>
    <td><CopyableCode code="ExternalLoginFederationProviderType" /></td>
    <td><code>string</code></td>
    <td>The type of supported external login provider that provides identity to let the user federate into Quick Sight with an associated IAM role. The type can be one of the following. COGNITO: Amazon Cognito. The provider URL is cognito-identity.amazonaws.com. CUSTOM_OIDC: Custom OpenID Connect (OIDC) provider.</td>
</tr>
<tr>
    <td><CopyableCode code="ExternalLoginFederationProviderUrl" /></td>
    <td><code>string</code></td>
    <td>The URL of the external login provider.</td>
</tr>
<tr>
    <td><CopyableCode code="ExternalLoginId" /></td>
    <td><code>string</code></td>
    <td>The identity ID for the user in the external login provider.</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityType" /></td>
    <td><code>string</code></td>
    <td>The type of identity authentication used by the user. (IAM, QUICKSIGHT, IAM_IDENTITY_CENTER)</td>
</tr>
<tr>
    <td><CopyableCode code="PrincipalId" /></td>
    <td><code>string</code></td>
    <td>The principal ID of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="Role" /></td>
    <td><code>string</code></td>
    <td>The Quick Sight role for the user. The user role can be one of the following:. READER: A user who has read-only access to dashboards. AUTHOR: A user who can create data sources, datasets, analyses, and dashboards. ADMIN: A user who is an author, who can also manage Amazon Quick Sight settings. READER_PRO: Reader Pro adds Generative BI capabilities to the Reader role. Reader Pros have access to Amazon Q in Quick Sight, can build stories with Amazon Q, and can generate executive summaries from dashboards. AUTHOR_PRO: Author Pro adds Generative BI capabilities to the Author role. Author Pros can author dashboards with natural language with Amazon Q, build stories with Amazon Q, create Topics for Q&A, and generate executive summaries from dashboards. ADMIN_PRO: Admin Pros are Author Pros who can also manage Quick Sight administrative settings. Admin Pro users are billed at Author Pro pricing. RESTRICTED_READER: This role isn't currently available for use. RESTRICTED_AUTHOR: This role isn't currently available for use. (ADMIN, AUTHOR, READER, RESTRICTED_AUTHOR, RESTRICTED_READER, ADMIN_PRO, AUTHOR_PRO, READER_PRO)</td>
</tr>
<tr>
    <td><CopyableCode code="UserName" /></td>
    <td><code>string</code></td>
    <td>The user's user name. This value is required if you are registering a user that will be managed in Quick Sight. In the output, the value for UserName is N/A when the value for IdentityType is IAM and the corresponding IAM user is deleted. (pattern: &lt;code&gt;&#91;\u0020-\u00FF&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_user"><CopyableCode code="describe_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-user_name"><code>user_name</code></a>, <a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a user, given the user name.</td>
</tr>
<tr>
    <td><a href="#list_users"><CopyableCode code="list_users" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Returns a list of all of the Amazon Quick Sight users belonging to this account.</td>
</tr>
<tr>
    <td><a href="#register_user"><CopyableCode code="register_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IdentityType"><code>IdentityType</code></a>, <a href="#parameter-UserRole"><code>UserRole</code></a></td>
    <td></td>
    <td>Creates an Amazon Quick Sight user whose identity is associated with the Identity and Access Management (IAM) identity or role specified in the request. When you register a new user from the Quick Sight API, Quick Sight generates a registration URL. The user accesses this registration URL to create their account. Quick Sight doesn't send a registration email to users who are registered from the Quick Sight API. If you want new users to receive a registration email, then add those users in the Quick Sight console. For more information on registering a new user in the Quick Sight console, see Inviting users to access Quick Sight.</td>
</tr>
<tr>
    <td><a href="#update_user"><CopyableCode code="update_user" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-user_name"><code>user_name</code></a>, <a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an Amazon Quick Sight user.</td>
</tr>
<tr>
    <td><a href="#delete_user"><CopyableCode code="delete_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-user_name"><code>user_name</code></a>, <a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the Amazon Quick Sight user that is associated with the identity of the IAM user or role that's making the call. The IAM user isn't deleted as a result of this call.</td>
</tr>
<tr>
    <td><a href="#delete_user_by_principal_id"><CopyableCode code="delete_user_by_principal_id" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-principal_id"><code>principal_id</code></a>, <a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a user identified by its principal ID.</td>
</tr>
<tr>
    <td><a href="#generate_embed_url_for_registered_user"><CopyableCode code="generate_embed_url_for_registered_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserArn"><code>UserArn</code></a>, <a href="#parameter-ExperienceConfiguration"><code>ExperienceConfiguration</code></a></td>
    <td></td>
    <td>Generates an embed URL that you can use to embed an Amazon Quick experience in your website. This action can be used for any type of user registered in an Amazon Quick account. Before you use this action, make sure that you have configured the relevant Amazon Quick resource and permissions. The following rules apply to the generated URL: It contains a temporary bearer token. It is valid for 5 minutes after it is generated. Once redeemed within this period, it cannot be re-used again. The URL validity period should not be confused with the actual session lifetime that can be customized using the SessionLifetimeInMinutes parameter. The resulting user session is valid for 15 minutes (minimum) to 10 hours (maximum). The default session duration is 10 hours. You are charged only when the URL is used or there is interaction with Amazon Quick. For more information, see Embedded Analytics in the Amazon Quick User Guide. For more information about the high-level steps for embedding and for an interactive demo of the ways you can customize embedding, visit the Amazon Quick Developer Portal.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the Amazon Web Services account that contains the dashboard that you're embedding.</td>
</tr>
<tr id="parameter-namespace">
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace. Currently, you should set this to default.</td>
</tr>
<tr id="parameter-principal_id">
    <td><CopyableCode code="principal_id" /></td>
    <td><code>string</code></td>
    <td>The principal ID of the user.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-user_name">
    <td><CopyableCode code="user_name" /></td>
    <td><code>string</code></td>
    <td>The name of the user that you want to delete.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return from this request.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>A pagination token that can be used in a subsequent request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_user"
    values={[
        { label: 'describe_user', value: 'describe_user' },
        { label: 'list_users', value: 'list_users' }
    ]}
>
<TabItem value="describe_user">

Returns information about a user, given the user name.

```sql
SELECT
RequestId,
Status,
User
FROM aws.quicksight.users
WHERE user_name = '{{ user_name }}' -- required
AND aws_account_id = '{{ aws_account_id }}' -- required
AND namespace = '{{ namespace }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_users">

Returns a list of all of the Amazon Quick Sight users belonging to this account.

```sql
SELECT
Active,
Arn,
CustomPermissionsName,
Email,
ExternalLoginFederationProviderType,
ExternalLoginFederationProviderUrl,
ExternalLoginId,
IdentityType,
PrincipalId,
Role,
UserName
FROM aws.quicksight.users
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND namespace = '{{ namespace }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_user"
    values={[
        { label: 'register_user', value: 'register_user' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_user">

Creates an Amazon Quick Sight user whose identity is associated with the Identity and Access Management (IAM) identity or role specified in the request. When you register a new user from the Quick Sight API, Quick Sight generates a registration URL. The user accesses this registration URL to create their account. Quick Sight doesn't send a registration email to users who are registered from the Quick Sight API. If you want new users to receive a registration email, then add those users in the Quick Sight console. For more information on registering a new user in the Quick Sight console, see Inviting users to access Quick Sight.

```sql
INSERT INTO aws.quicksight.users (
IdentityType,
Email,
UserRole,
IamArn,
SessionName,
UserName,
CustomPermissionsName,
ExternalLoginFederationProviderType,
CustomFederationProviderUrl,
ExternalLoginId,
Tags,
aws_account_id,
namespace,
region
)
SELECT 
'{{ IdentityType }}' /* required */,
'{{ Email }}',
'{{ UserRole }}' /* required */,
'{{ IamArn }}',
'{{ SessionName }}',
'{{ UserName }}',
'{{ CustomPermissionsName }}',
'{{ ExternalLoginFederationProviderType }}',
'{{ CustomFederationProviderUrl }}',
'{{ ExternalLoginId }}',
'{{ Tags }}',
'{{ aws_account_id }}',
'{{ namespace }}',
'{{ region }}'
RETURNING
RequestId,
Status,
User,
UserInvitationUrl
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: users
  props:
    - name: aws_account_id
      value: "{{ aws_account_id }}"
      description: Required parameter for the users resource.
    - name: namespace
      value: "{{ namespace }}"
      description: Required parameter for the users resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the users resource.
    - name: IdentityType
      value: "{{ IdentityType }}"
      valid_values: ['IAM', 'QUICKSIGHT', 'IAM_IDENTITY_CENTER']
    - name: Email
      value: "{{ Email }}"
    - name: UserRole
      value: "{{ UserRole }}"
      valid_values: ['ADMIN', 'AUTHOR', 'READER', 'RESTRICTED_AUTHOR', 'RESTRICTED_READER', 'ADMIN_PRO', 'AUTHOR_PRO', 'READER_PRO']
    - name: IamArn
      value: "{{ IamArn }}"
    - name: SessionName
      value: "{{ SessionName }}"
    - name: UserName
      value: "{{ UserName }}"
    - name: CustomPermissionsName
      value: "{{ CustomPermissionsName }}"
    - name: ExternalLoginFederationProviderType
      value: "{{ ExternalLoginFederationProviderType }}"
    - name: CustomFederationProviderUrl
      value: "{{ CustomFederationProviderUrl }}"
    - name: ExternalLoginId
      value: "{{ ExternalLoginId }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_user"
    values={[
        { label: 'update_user', value: 'update_user' }
    ]}
>
<TabItem value="update_user">

Updates an Amazon Quick Sight user.

```sql
UPDATE aws.quicksight.users
SET 
Email = '{{ Email }}',
Role = '{{ Role }}',
CustomPermissionsName = '{{ CustomPermissionsName }}',
UnapplyCustomPermissions = {{ UnapplyCustomPermissions }},
ExternalLoginFederationProviderType = '{{ ExternalLoginFederationProviderType }}',
CustomFederationProviderUrl = '{{ CustomFederationProviderUrl }}',
ExternalLoginId = '{{ ExternalLoginId }}'
WHERE 
user_name = '{{ user_name }}' --required
AND aws_account_id = '{{ aws_account_id }}' --required
AND namespace = '{{ namespace }}' --required
AND region = '{{ region }}' --required
RETURNING
RequestId,
Status,
User;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_user"
    values={[
        { label: 'delete_user', value: 'delete_user' },
        { label: 'delete_user_by_principal_id', value: 'delete_user_by_principal_id' }
    ]}
>
<TabItem value="delete_user">

Deletes the Amazon Quick Sight user that is associated with the identity of the IAM user or role that's making the call. The IAM user isn't deleted as a result of this call.

```sql
DELETE FROM aws.quicksight.users
WHERE user_name = '{{ user_name }}' --required
AND aws_account_id = '{{ aws_account_id }}' --required
AND namespace = '{{ namespace }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_user_by_principal_id">

Deletes a user identified by its principal ID.

```sql
DELETE FROM aws.quicksight.users
WHERE principal_id = '{{ principal_id }}' --required
AND aws_account_id = '{{ aws_account_id }}' --required
AND namespace = '{{ namespace }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="generate_embed_url_for_registered_user"
    values={[
        { label: 'generate_embed_url_for_registered_user', value: 'generate_embed_url_for_registered_user' }
    ]}
>
<TabItem value="generate_embed_url_for_registered_user">

Generates an embed URL that you can use to embed an Amazon Quick experience in your website. This action can be used for any type of user registered in an Amazon Quick account. Before you use this action, make sure that you have configured the relevant Amazon Quick resource and permissions. The following rules apply to the generated URL: It contains a temporary bearer token. It is valid for 5 minutes after it is generated. Once redeemed within this period, it cannot be re-used again. The URL validity period should not be confused with the actual session lifetime that can be customized using the SessionLifetimeInMinutes parameter. The resulting user session is valid for 15 minutes (minimum) to 10 hours (maximum). The default session duration is 10 hours. You are charged only when the URL is used or there is interaction with Amazon Quick. For more information, see Embedded Analytics in the Amazon Quick User Guide. For more information about the high-level steps for embedding and for an interactive demo of the ways you can customize embedding, visit the Amazon Quick Developer Portal.

```sql
EXEC aws.quicksight.users.generate_embed_url_for_registered_user 
@aws_account_id='{{ aws_account_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"SessionLifetimeInMinutes": {{ SessionLifetimeInMinutes }}, 
"UserArn": "{{ UserArn }}", 
"ExperienceConfiguration": "{{ ExperienceConfiguration }}", 
"AllowedDomains": "{{ AllowedDomains }}"
}'
;
```
</TabItem>
</Tabs>
