--- 
title: backend_auths
hide_title: false
hide_table_of_contents: false
keywords:
  - backend_auths
  - amplifybackend
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

Creates, updates, deletes, gets or lists a <code>backend_auths</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="backend_auths" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.amplifybackend.backend_auths" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_backend_auth"
    values={[
        { label: 'get_backend_auth', value: 'get_backend_auth' }
    ]}
>
<TabItem value="get_backend_auth">

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
    <td><CopyableCode code="AppId" /></td>
    <td><code>string</code></td>
    <td>The app ID.</td>
</tr>
<tr>
    <td><CopyableCode code="BackendEnvironmentName" /></td>
    <td><code>string</code></td>
    <td>The name of the backend environment.</td>
</tr>
<tr>
    <td><CopyableCode code="Error" /></td>
    <td><code>string</code></td>
    <td>If the request fails, this error is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceConfig" /></td>
    <td><code>object</code></td>
    <td>Defines the resource configuration when creating an auth resource in your Amplify project.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceName" /></td>
    <td><code>string</code></td>
    <td>The name of this resource.</td>
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
    <td><a href="#get_backend_auth"><CopyableCode code="get_backend_auth" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-backend_environment_name"><code>backend_environment_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a backend auth details.</td>
</tr>
<tr>
    <td><a href="#create_backend_auth"><CopyableCode code="create_backend_auth" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-BackendEnvironmentName"><code>BackendEnvironmentName</code></a>, <a href="#parameter-ResourceConfig"><code>ResourceConfig</code></a>, <a href="#parameter-ResourceName"><code>ResourceName</code></a></td>
    <td></td>
    <td>Creates a new backend authentication resource.</td>
</tr>
<tr>
    <td><a href="#update_backend_auth"><CopyableCode code="update_backend_auth" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-backend_environment_name"><code>backend_environment_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceConfig"><code>ResourceConfig</code></a>, <a href="#parameter-ResourceName"><code>ResourceName</code></a></td>
    <td></td>
    <td>Updates an existing backend authentication resource.</td>
</tr>
<tr>
    <td><a href="#delete_backend_auth"><CopyableCode code="delete_backend_auth" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-backend_environment_name"><code>backend_environment_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing backend authentication resource.</td>
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
<tr id="parameter-app_id">
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The app ID.</td>
</tr>
<tr id="parameter-backend_environment_name">
    <td><CopyableCode code="backend_environment_name" /></td>
    <td><code>string</code></td>
    <td>The name of the backend environment.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_backend_auth"
    values={[
        { label: 'get_backend_auth', value: 'get_backend_auth' }
    ]}
>
<TabItem value="get_backend_auth">

Gets a backend auth details.

```sql
SELECT
AppId,
BackendEnvironmentName,
Error,
ResourceConfig,
ResourceName
FROM aws.amplifybackend.backend_auths
WHERE app_id = '{{ app_id }}' -- required
AND backend_environment_name = '{{ backend_environment_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_backend_auth"
    values={[
        { label: 'create_backend_auth', value: 'create_backend_auth' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_backend_auth">

Creates a new backend authentication resource.

```sql
INSERT INTO aws.amplifybackend.backend_auths (
BackendEnvironmentName,
ResourceConfig,
ResourceName,
app_id,
region
)
SELECT 
'{{ BackendEnvironmentName }}' /* required */,
'{{ ResourceConfig }}' /* required */,
'{{ ResourceName }}' /* required */,
'{{ app_id }}',
'{{ region }}'
RETURNING
AppId,
BackendEnvironmentName,
Error,
JobId,
Operation,
Status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: backend_auths
  props:
    - name: app_id
      value: "{{ app_id }}"
      description: Required parameter for the backend_auths resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the backend_auths resource.
    - name: BackendEnvironmentName
      value: "{{ BackendEnvironmentName }}"
    - name: ResourceConfig
      description: |
        Defines the resource configuration when creating an auth resource in your Amplify project.
      value:
        AuthResources: "{{ AuthResources }}"
        IdentityPoolConfigs:
          IdentityPoolName: "{{ IdentityPoolName }}"
          UnauthenticatedLogin: {{ UnauthenticatedLogin }}
        Service: "{{ Service }}"
        UserPoolConfigs:
          ForgotPassword:
            DeliveryMethod: "{{ DeliveryMethod }}"
            EmailSettings:
              EmailMessage: "{{ EmailMessage }}"
              EmailSubject: "{{ EmailSubject }}"
            SmsSettings:
              SmsMessage: "{{ SmsMessage }}"
          Mfa:
            MFAMode: "{{ MFAMode }}"
            Settings:
              MfaTypes:
                - "{{ MfaTypes }}"
              SmsMessage: "{{ SmsMessage }}"
          OAuth:
            DomainPrefix: "{{ DomainPrefix }}"
            OAuthGrantType: "{{ OAuthGrantType }}"
            OAuthScopes:
              - "{{ OAuthScopes }}"
            RedirectSignInURIs:
              - "{{ RedirectSignInURIs }}"
            RedirectSignOutURIs:
              - "{{ RedirectSignOutURIs }}"
            SocialProviderSettings:
              Facebook:
                ClientId: "{{ ClientId }}"
                ClientSecret: "{{ ClientSecret }}"
              Google:
                ClientId: "{{ ClientId }}"
                ClientSecret: "{{ ClientSecret }}"
              LoginWithAmazon:
                ClientId: "{{ ClientId }}"
                ClientSecret: "{{ ClientSecret }}"
              SignInWithApple:
                ClientId: "{{ ClientId }}"
                KeyId: "{{ KeyId }}"
                PrivateKey: "{{ PrivateKey }}"
                TeamId: "{{ TeamId }}"
          PasswordPolicy:
            AdditionalConstraints:
              - "{{ AdditionalConstraints }}"
            MinimumLength: {{ MinimumLength }}
          RequiredSignUpAttributes:
            - "{{ RequiredSignUpAttributes }}"
          SignInMethod: "{{ SignInMethod }}"
          UserPoolName: "{{ UserPoolName }}"
          VerificationMessage:
            DeliveryMethod: "{{ DeliveryMethod }}"
            EmailSettings:
              EmailMessage: "{{ EmailMessage }}"
              EmailSubject: "{{ EmailSubject }}"
            SmsSettings:
              SmsMessage: "{{ SmsMessage }}"
    - name: ResourceName
      value: "{{ ResourceName }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_backend_auth"
    values={[
        { label: 'update_backend_auth', value: 'update_backend_auth' }
    ]}
>
<TabItem value="update_backend_auth">

Updates an existing backend authentication resource.

```sql
UPDATE aws.amplifybackend.backend_auths
SET 
ResourceConfig = '{{ ResourceConfig }}',
ResourceName = '{{ ResourceName }}'
WHERE 
app_id = '{{ app_id }}' --required
AND backend_environment_name = '{{ backend_environment_name }}' --required
AND region = '{{ region }}' --required
AND ResourceConfig = '{{ ResourceConfig }}' --required
AND ResourceName = '{{ ResourceName }}' --required
RETURNING
AppId,
BackendEnvironmentName,
Error,
JobId,
Operation,
Status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_backend_auth"
    values={[
        { label: 'delete_backend_auth', value: 'delete_backend_auth' }
    ]}
>
<TabItem value="delete_backend_auth">

Deletes an existing backend authentication resource.

```sql
DELETE FROM aws.amplifybackend.backend_auths
WHERE app_id = '{{ app_id }}' --required
AND backend_environment_name = '{{ backend_environment_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
