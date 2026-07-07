--- 
title: identity_pool_roles
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_pool_roles
  - cognito_identity
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

Creates, updates, deletes, gets or lists an <code>identity_pool_roles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="identity_pool_roles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_identity.identity_pool_roles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_identity_pool_roles"
    values={[
        { label: 'get_identity_pool_roles', value: 'get_identity_pool_roles' }
    ]}
>
<TabItem value="get_identity_pool_roles">

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
    <td><CopyableCode code="IdentityPoolId" /></td>
    <td><code>string</code></td>
    <td>An identity pool ID in the format REGION:GUID. (pattern: &lt;code&gt;&#91;\w-&#93;+:&#91;0-9a-f-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RoleMappings" /></td>
    <td><code>object</code></td>
    <td>How users for a specific identity provider are to mapped to roles. This is a String-to-RoleMapping object map. The string identifies the identity provider, for example, graph.facebook.com or cognito-idp.us-east-1.amazonaws.com/us-east-1_abcdefghi:app_client_id.</td>
</tr>
<tr>
    <td><CopyableCode code="Roles" /></td>
    <td><code>object</code></td>
    <td>The map of roles associated with this pool. Currently only authenticated and unauthenticated roles are supported.</td>
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
    <td><a href="#get_identity_pool_roles"><CopyableCode code="get_identity_pool_roles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the roles for an identity pool. You must use Amazon Web Services developer credentials to call this operation.</td>
</tr>
<tr>
    <td><a href="#set_identity_pool_roles"><CopyableCode code="set_identity_pool_roles" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IdentityPoolId"><code>IdentityPoolId</code></a></td>
    <td></td>
    <td>Sets the roles for an identity pool. These roles are used when making calls to GetCredentialsForIdentity action. You must use Amazon Web Services developer credentials to call this operation.</td>
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
    defaultValue="get_identity_pool_roles"
    values={[
        { label: 'get_identity_pool_roles', value: 'get_identity_pool_roles' }
    ]}
>
<TabItem value="get_identity_pool_roles">

Gets the roles for an identity pool. You must use Amazon Web Services developer credentials to call this operation.

```sql
SELECT
IdentityPoolId,
RoleMappings,
Roles
FROM aws.cognito_identity.identity_pool_roles
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_identity_pool_roles"
    values={[
        { label: 'set_identity_pool_roles', value: 'set_identity_pool_roles' }
    ]}
>
<TabItem value="set_identity_pool_roles">

Sets the roles for an identity pool. These roles are used when making calls to GetCredentialsForIdentity action. You must use Amazon Web Services developer credentials to call this operation.

```sql
UPDATE aws.cognito_identity.identity_pool_roles
SET 
IdentityPoolId = '{{ IdentityPoolId }}',
Roles = '{{ Roles }}',
RoleMappings = '{{ RoleMappings }}'
WHERE 
region = '{{ region }}' --required
AND IdentityPoolId = '{{ IdentityPoolId }}' --required;
```
</TabItem>
</Tabs>
