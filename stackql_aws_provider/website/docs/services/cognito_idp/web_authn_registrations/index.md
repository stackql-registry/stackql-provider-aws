--- 
title: web_authn_registrations
hide_title: false
hide_table_of_contents: false
keywords:
  - web_authn_registrations
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

Creates, updates, deletes, gets or lists a <code>web_authn_registrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="web_authn_registrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_idp.web_authn_registrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#complete_web_authn_registration"><CopyableCode code="complete_web_authn_registration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccessToken"><code>AccessToken</code></a>, <a href="#parameter-Credential"><code>Credential</code></a></td>
    <td></td>
    <td>Completes registration of a passkey authenticator for the currently signed-in user. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.</td>
</tr>
<tr>
    <td><a href="#start_web_authn_registration"><CopyableCode code="start_web_authn_registration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccessToken"><code>AccessToken</code></a></td>
    <td></td>
    <td>Requests credential creation options from your user pool for the currently signed-in user. Returns information about the user pool, the user profile, and authentication requirements. Users must provide this information in their request to enroll your application with their passkey provider. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="complete_web_authn_registration"
    values={[
        { label: 'complete_web_authn_registration', value: 'complete_web_authn_registration' },
        { label: 'start_web_authn_registration', value: 'start_web_authn_registration' }
    ]}
>
<TabItem value="complete_web_authn_registration">

Completes registration of a passkey authenticator for the currently signed-in user. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.

```sql
EXEC aws.cognito_idp.web_authn_registrations.complete_web_authn_registration 
@region='{{ region }}' --required 
@@json=
'{
"AccessToken": "{{ AccessToken }}", 
"Credential": "{{ Credential }}"
}'
;
```
</TabItem>
<TabItem value="start_web_authn_registration">

Requests credential creation options from your user pool for the currently signed-in user. Returns information about the user pool, the user profile, and authentication requirements. Users must provide this information in their request to enroll your application with their passkey provider. Authorize this action with a signed-in user's access token. It must include the scope aws.cognito.signin.user.admin.

```sql
EXEC aws.cognito_idp.web_authn_registrations.start_web_authn_registration 
@region='{{ region }}' --required 
@@json=
'{
"AccessToken": "{{ AccessToken }}"
}'
;
```
</TabItem>
</Tabs>
