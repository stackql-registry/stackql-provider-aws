--- 
title: networks
hide_title: false
hide_table_of_contents: false
keywords:
  - networks
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

Creates, updates, deletes, gets or lists a <code>networks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="networks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wickr.networks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_network"
    values={[
        { label: 'get_network', value: 'get_network' },
        { label: 'list_networks', value: 'list_networks' }
    ]}
>
<TabItem value="get_network">

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
    <td><CopyableCode code="access_level" /></td>
    <td><code>string</code></td>
    <td>The access level of the network (STANDARD or PREMIUM), which determines available features and capabilities. (STANDARD, PREMIUM)</td>
</tr>
<tr>
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that owns the network. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_key_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Amazon Web Services KMS customer managed key used for encrypting sensitive data in the network. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="free_trial_expiration" /></td>
    <td><code>string</code></td>
    <td>The expiration date and time for the network's free trial period, if applicable. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="migration_state" /></td>
    <td><code>integer</code></td>
    <td>The SSO redirect URI migration state, managed by the SSO redirect migration wizard. Values: 0 (not started), 1 (in progress), or 2 (completed).</td>
</tr>
<tr>
    <td><CopyableCode code="network_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the network. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="network_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the network. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;8&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="network_name" /></td>
    <td><code>string</code></td>
    <td>The name of the network. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="standing" /></td>
    <td><code>integer</code></td>
    <td>The current standing or status of the network.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_networks">

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
    <td><CopyableCode code="access_level" /></td>
    <td><code>string</code></td>
    <td>The access level of the network (STANDARD or PREMIUM), which determines available features and capabilities. (STANDARD, PREMIUM)</td>
</tr>
<tr>
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that owns the network. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_key_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Amazon Web Services KMS customer managed key used for encrypting sensitive data in the network. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="free_trial_expiration" /></td>
    <td><code>string</code></td>
    <td>The expiration date and time for the network's free trial period, if applicable. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="migration_state" /></td>
    <td><code>integer</code></td>
    <td>The SSO redirect URI migration state, managed by the SSO redirect migration wizard. Values: 0 (not started), 1 (in progress), or 2 (completed).</td>
</tr>
<tr>
    <td><CopyableCode code="network_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the network. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="network_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the network. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;8&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="network_name" /></td>
    <td><code>string</code></td>
    <td>The name of the network. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="standing" /></td>
    <td><code>integer</code></td>
    <td>The current standing or status of the network.</td>
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
    <td><a href="#get_network"><CopyableCode code="get_network" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific Wickr network, including its configuration, access level, and status.</td>
</tr>
<tr>
    <td><a href="#list_networks"><CopyableCode code="list_networks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-sortFields"><code>sortFields</code></a>, <a href="#parameter-sortDirection"><code>sortDirection</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves a paginated list of all Wickr networks associated with your Amazon Web Services account. You can sort the results by network ID or name.</td>
</tr>
<tr>
    <td><a href="#register_oidc_config"><CopyableCode code="register_oidc_config" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-companyId"><code>companyId</code></a>, <a href="#parameter-issuer"><code>issuer</code></a>, <a href="#parameter-scopes"><code>scopes</code></a></td>
    <td></td>
    <td>Registers and saves an OpenID Connect (OIDC) configuration for a Wickr network, enabling Single Sign-On (SSO) authentication through an identity provider.</td>
</tr>
<tr>
    <td><a href="#register_oidc_config_test"><CopyableCode code="register_oidc_config_test" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-issuer"><code>issuer</code></a>, <a href="#parameter-scopes"><code>scopes</code></a></td>
    <td></td>
    <td>Tests an OpenID Connect (OIDC) configuration for a Wickr network by validating the connection to the identity provider and retrieving its supported capabilities.</td>
</tr>
<tr>
    <td><a href="#create_network"><CopyableCode code="create_network" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-networkName"><code>networkName</code></a>, <a href="#parameter-accessLevel"><code>accessLevel</code></a></td>
    <td></td>
    <td>Creates a new Wickr network with specified access level and configuration. This operation provisions a new communication network for your organization.</td>
</tr>
<tr>
    <td><a href="#update_data_retention"><CopyableCode code="update_data_retention" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-actionType"><code>actionType</code></a></td>
    <td></td>
    <td>Updates the data retention bot settings, allowing you to enable or disable the data retention service, or acknowledge the public key message.</td>
</tr>
<tr>
    <td><a href="#update_network"><CopyableCode code="update_network" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-networkName"><code>networkName</code></a></td>
    <td><a href="#parameter-X-Client-Token"><code>X-Client-Token</code></a></td>
    <td>Updates the properties of an existing Wickr network, such as its name or encryption key configuration.</td>
</tr>
<tr>
    <td><a href="#delete_network"><CopyableCode code="delete_network" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-X-Client-Token"><code>X-Client-Token</code></a></td>
    <td>Deletes a Wickr network and all its associated resources, including users, bots, security groups, and settings. This operation is permanent and cannot be undone.</td>
</tr>
<tr>
    <td><a href="#batch_create_user"><CopyableCode code="batch_create_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-users"><code>users</code></a></td>
    <td><a href="#parameter-X-Client-Token"><code>X-Client-Token</code></a></td>
    <td>Creates multiple users in a specified Wickr network. This operation allows you to provision multiple user accounts simultaneously, optionally specifying security groups, and validation requirements for each user. codeValidation, inviteCode, and inviteCodeTtl are restricted to networks under preview only.</td>
</tr>
<tr>
    <td><a href="#batch_delete_user"><CopyableCode code="batch_delete_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-userIds"><code>userIds</code></a></td>
    <td><a href="#parameter-X-Client-Token"><code>X-Client-Token</code></a></td>
    <td>Deletes multiple users from a specified Wickr network. This operation permanently removes user accounts and their associated data from the network.</td>
</tr>
<tr>
    <td><a href="#batch_lookup_user_uname"><CopyableCode code="batch_lookup_user_uname" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-unames"><code>unames</code></a></td>
    <td><a href="#parameter-X-Client-Token"><code>X-Client-Token</code></a></td>
    <td>Looks up multiple user usernames from their unique username hashes (unames). This operation allows you to retrieve the email addresses associated with a list of username hashes.</td>
</tr>
<tr>
    <td><a href="#batch_reinvite_user"><CopyableCode code="batch_reinvite_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-userIds"><code>userIds</code></a></td>
    <td><a href="#parameter-X-Client-Token"><code>X-Client-Token</code></a></td>
    <td>Resends invitation codes to multiple users who have pending invitations in a Wickr network. This operation is useful when users haven't accepted their initial invitations or when invitations have expired.</td>
</tr>
<tr>
    <td><a href="#batch_reset_devices_for_user"><CopyableCode code="batch_reset_devices_for_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-appIds"><code>appIds</code></a></td>
    <td><a href="#parameter-X-Client-Token"><code>X-Client-Token</code></a></td>
    <td>Resets multiple devices for a specific user in a Wickr network. This operation forces the selected devices to log out and requires users to re-authenticate, which is useful for security purposes or when devices need to be revoked.</td>
</tr>
<tr>
    <td><a href="#batch_toggle_user_suspend_status"><CopyableCode code="batch_toggle_user_suspend_status" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-suspend"><code>suspend</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-userIds"><code>userIds</code></a></td>
    <td><a href="#parameter-X-Client-Token"><code>X-Client-Token</code></a></td>
    <td>Suspends or unsuspends multiple users in a Wickr network. Suspended users cannot access the network until they are unsuspended. This operation is useful for temporarily restricting access without deleting user accounts.</td>
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
    <td>The ID of the Wickr network where users will be suspended or unsuspended.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-suspend">
    <td><CopyableCode code="suspend" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether to suspend (true) or unsuspend (false) the specified users.</td>
</tr>
<tr id="parameter-user_id">
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the user whose devices will be reset.</td>
</tr>
<tr id="parameter-X-Client-Token">
    <td><CopyableCode code="X-Client-Token" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for this request to ensure idempotency.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of networks to return in a single page. Valid range is 1-100. Default is 10.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for retrieving the next page of results. This is returned from a previous request when there are more results available.</td>
</tr>
<tr id="parameter-sortDirection">
    <td><CopyableCode code="sortDirection" /></td>
    <td><code>string</code></td>
    <td>The direction to sort results. Valid values are 'ASC' (ascending) or 'DESC' (descending). Default is 'DESC'.</td>
</tr>
<tr id="parameter-sortFields">
    <td><CopyableCode code="sortFields" /></td>
    <td><code>string</code></td>
    <td>The field to sort networks by. Accepted values are 'networkId' and 'networkName'. Default is 'networkId'.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_network"
    values={[
        { label: 'get_network', value: 'get_network' },
        { label: 'list_networks', value: 'list_networks' }
    ]}
>
<TabItem value="get_network">

Retrieves detailed information about a specific Wickr network, including its configuration, access level, and status.

```sql
SELECT
access_level,
aws_account_id,
encryption_key_arn,
free_trial_expiration,
migration_state,
network_arn,
network_id,
network_name,
standing
FROM aws.wickr.networks
WHERE network_id = '{{ network_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_networks">

Retrieves a paginated list of all Wickr networks associated with your Amazon Web Services account. You can sort the results by network ID or name.

```sql
SELECT
access_level,
aws_account_id,
encryption_key_arn,
free_trial_expiration,
migration_state,
network_arn,
network_id,
network_name,
standing
FROM aws.wickr.networks
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND sortFields = '{{ sortFields }}'
AND sortDirection = '{{ sortDirection }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_oidc_config"
    values={[
        { label: 'register_oidc_config', value: 'register_oidc_config' },
        { label: 'register_oidc_config_test', value: 'register_oidc_config_test' },
        { label: 'create_network', value: 'create_network' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_oidc_config">

Registers and saves an OpenID Connect (OIDC) configuration for a Wickr network, enabling Single Sign-On (SSO) authentication through an identity provider.

```sql
INSERT INTO aws.wickr.networks (
companyId,
customUsername,
extraAuthParams,
issuer,
scopes,
secret,
ssoTokenBufferMinutes,
userId,
network_id,
region
)
SELECT 
'{{ companyId }}' /* required */,
'{{ customUsername }}',
'{{ extraAuthParams }}',
'{{ issuer }}' /* required */,
'{{ scopes }}' /* required */,
'{{ secret }}',
{{ ssoTokenBufferMinutes }},
'{{ userId }}',
'{{ network_id }}',
'{{ region }}'
RETURNING
application_id,
application_name,
ca_certificate,
client_id,
client_secret,
company_id,
custom_username,
extra_auth_params,
issuer,
redirect_url,
scopes,
secret,
sso_token_buffer_minutes,
user_id
;
```
</TabItem>
<TabItem value="register_oidc_config_test">

Tests an OpenID Connect (OIDC) configuration for a Wickr network by validating the connection to the identity provider and retrieving its supported capabilities.

```sql
INSERT INTO aws.wickr.networks (
extraAuthParams,
issuer,
scopes,
certificate,
network_id,
region
)
SELECT 
'{{ extraAuthParams }}',
'{{ issuer }}' /* required */,
'{{ scopes }}' /* required */,
'{{ certificate }}',
'{{ network_id }}',
'{{ region }}'
RETURNING
authorization_endpoint,
end_session_endpoint,
grant_types_supported,
issuer,
logout_endpoint,
microsoft_multi_refresh_token,
response_types_supported,
revocation_endpoint,
scopes_supported,
token_endpoint,
token_endpoint_auth_methods_supported,
userinfo_endpoint
;
```
</TabItem>
<TabItem value="create_network">

Creates a new Wickr network with specified access level and configuration. This operation provisions a new communication network for your organization.

```sql
INSERT INTO aws.wickr.networks (
networkName,
accessLevel,
enablePremiumFreeTrial,
encryptionKeyArn,
region
)
SELECT 
'{{ networkName }}' /* required */,
'{{ accessLevel }}' /* required */,
{{ enablePremiumFreeTrial }},
'{{ encryptionKeyArn }}',
'{{ region }}'
RETURNING
encryption_key_arn,
network_id,
network_name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: networks
  props:
    - name: network_id
      value: "{{ network_id }}"
      description: Required parameter for the networks resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the networks resource.
    - name: companyId
      value: "{{ companyId }}"
    - name: customUsername
      value: "{{ customUsername }}"
    - name: extraAuthParams
      value: "{{ extraAuthParams }}"
    - name: issuer
      value: "{{ issuer }}"
    - name: scopes
      value: "{{ scopes }}"
    - name: secret
      value: "{{ secret }}"
    - name: ssoTokenBufferMinutes
      value: {{ ssoTokenBufferMinutes }}
    - name: userId
      value: "{{ userId }}"
    - name: certificate
      value: "{{ certificate }}"
    - name: networkName
      value: "{{ networkName }}"
    - name: accessLevel
      value: "{{ accessLevel }}"
      valid_values: ['STANDARD', 'PREMIUM']
    - name: enablePremiumFreeTrial
      value: {{ enablePremiumFreeTrial }}
    - name: encryptionKeyArn
      value: "{{ encryptionKeyArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_data_retention"
    values={[
        { label: 'update_data_retention', value: 'update_data_retention' },
        { label: 'update_network', value: 'update_network' }
    ]}
>
<TabItem value="update_data_retention">

Updates the data retention bot settings, allowing you to enable or disable the data retention service, or acknowledge the public key message.

```sql
UPDATE aws.wickr.networks
SET 
actionType = '{{ actionType }}'
WHERE 
network_id = '{{ network_id }}' --required
AND region = '{{ region }}' --required
AND actionType = '{{ actionType }}' --required
RETURNING
message;
```
</TabItem>
<TabItem value="update_network">

Updates the properties of an existing Wickr network, such as its name or encryption key configuration.

```sql
UPDATE aws.wickr.networks
SET 
networkName = '{{ networkName }}',
encryptionKeyArn = '{{ encryptionKeyArn }}'
WHERE 
network_id = '{{ network_id }}' --required
AND region = '{{ region }}' --required
AND networkName = '{{ networkName }}' --required
AND `X-Client-Token` = '{{ X-Client-Token}}'
RETURNING
message;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_network"
    values={[
        { label: 'delete_network', value: 'delete_network' }
    ]}
>
<TabItem value="delete_network">

Deletes a Wickr network and all its associated resources, including users, bots, security groups, and settings. This operation is permanent and cannot be undone.

```sql
DELETE FROM aws.wickr.networks
WHERE network_id = '{{ network_id }}' --required
AND region = '{{ region }}' --required
AND `X-Client-Token` = '{{ X-Client-Token }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_create_user"
    values={[
        { label: 'batch_create_user', value: 'batch_create_user' },
        { label: 'batch_delete_user', value: 'batch_delete_user' },
        { label: 'batch_lookup_user_uname', value: 'batch_lookup_user_uname' },
        { label: 'batch_reinvite_user', value: 'batch_reinvite_user' },
        { label: 'batch_reset_devices_for_user', value: 'batch_reset_devices_for_user' },
        { label: 'batch_toggle_user_suspend_status', value: 'batch_toggle_user_suspend_status' }
    ]}
>
<TabItem value="batch_create_user">

Creates multiple users in a specified Wickr network. This operation allows you to provision multiple user accounts simultaneously, optionally specifying security groups, and validation requirements for each user. codeValidation, inviteCode, and inviteCodeTtl are restricted to networks under preview only.

```sql
EXEC aws.wickr.networks.batch_create_user 
@network_id='{{ network_id }}' --required, 
@region='{{ region }}' --required, 
@X-Client-Token='{{ X-Client-Token }}' 
@@json=
'{
"users": "{{ users }}"
}'
;
```
</TabItem>
<TabItem value="batch_delete_user">

Deletes multiple users from a specified Wickr network. This operation permanently removes user accounts and their associated data from the network.

```sql
EXEC aws.wickr.networks.batch_delete_user 
@network_id='{{ network_id }}' --required, 
@region='{{ region }}' --required, 
@X-Client-Token='{{ X-Client-Token }}' 
@@json=
'{
"userIds": "{{ userIds }}"
}'
;
```
</TabItem>
<TabItem value="batch_lookup_user_uname">

Looks up multiple user usernames from their unique username hashes (unames). This operation allows you to retrieve the email addresses associated with a list of username hashes.

```sql
EXEC aws.wickr.networks.batch_lookup_user_uname 
@network_id='{{ network_id }}' --required, 
@region='{{ region }}' --required, 
@X-Client-Token='{{ X-Client-Token }}' 
@@json=
'{
"unames": "{{ unames }}"
}'
;
```
</TabItem>
<TabItem value="batch_reinvite_user">

Resends invitation codes to multiple users who have pending invitations in a Wickr network. This operation is useful when users haven't accepted their initial invitations or when invitations have expired.

```sql
EXEC aws.wickr.networks.batch_reinvite_user 
@network_id='{{ network_id }}' --required, 
@region='{{ region }}' --required, 
@X-Client-Token='{{ X-Client-Token }}' 
@@json=
'{
"userIds": "{{ userIds }}"
}'
;
```
</TabItem>
<TabItem value="batch_reset_devices_for_user">

Resets multiple devices for a specific user in a Wickr network. This operation forces the selected devices to log out and requires users to re-authenticate, which is useful for security purposes or when devices need to be revoked.

```sql
EXEC aws.wickr.networks.batch_reset_devices_for_user 
@network_id='{{ network_id }}' --required, 
@user_id='{{ user_id }}' --required, 
@region='{{ region }}' --required, 
@X-Client-Token='{{ X-Client-Token }}' 
@@json=
'{
"appIds": "{{ appIds }}"
}'
;
```
</TabItem>
<TabItem value="batch_toggle_user_suspend_status">

Suspends or unsuspends multiple users in a Wickr network. Suspended users cannot access the network until they are unsuspended. This operation is useful for temporarily restricting access without deleting user accounts.

```sql
EXEC aws.wickr.networks.batch_toggle_user_suspend_status 
@network_id='{{ network_id }}' --required, 
@suspend='{{ suspend }}' --required, 
@region='{{ region }}' --required, 
@X-Client-Token='{{ X-Client-Token }}' 
@@json=
'{
"userIds": "{{ userIds }}"
}'
;
```
</TabItem>
</Tabs>
