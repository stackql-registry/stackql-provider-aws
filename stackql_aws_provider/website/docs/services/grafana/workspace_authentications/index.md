--- 
title: workspace_authentications
hide_title: false
hide_table_of_contents: false
keywords:
  - workspace_authentications
  - grafana
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

Creates, updates, deletes, gets or lists a <code>workspace_authentications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workspace_authentications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.grafana.workspace_authentications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_workspace_authentication"
    values={[
        { label: 'describe_workspace_authentication', value: 'describe_workspace_authentication' }
    ]}
>
<TabItem value="describe_workspace_authentication">

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
    <td><CopyableCode code="awsSso" /></td>
    <td><code>object</code></td>
    <td>A structure containing information about how this workspace works with IAM Identity Center.</td>
</tr>
<tr>
    <td><CopyableCode code="providers" /></td>
    <td><code>array</code></td>
    <td>Specifies whether this workspace uses IAM Identity Center, SAML, or both methods to authenticate users to use the Grafana console in the Amazon Managed Grafana workspace.</td>
</tr>
<tr>
    <td><CopyableCode code="saml" /></td>
    <td><code>object</code></td>
    <td>A structure containing information about how this workspace works with SAML, including what attributes within the assertion are to be mapped to user information in the workspace.</td>
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
    <td><a href="#describe_workspace_authentication"><CopyableCode code="describe_workspace_authentication" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Displays information about the authentication methods used in one Amazon Managed Grafana workspace.</td>
</tr>
<tr>
    <td><a href="#update_workspace_authentication"><CopyableCode code="update_workspace_authentication" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-authenticationProviders"><code>authenticationProviders</code></a></td>
    <td></td>
    <td>Use this operation to define the identity provider (IdP) that this workspace authenticates users from, using SAML. You can also map SAML assertion attributes to workspace user information and define which groups in the assertion attribute are to have the Admin and Editor roles in the workspace. Changes to the authentication method for a workspace may take a few minutes to take effect.</td>
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
<tr id="parameter-workspace_id">
    <td><CopyableCode code="workspace_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the workspace to update the authentication for.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_workspace_authentication"
    values={[
        { label: 'describe_workspace_authentication', value: 'describe_workspace_authentication' }
    ]}
>
<TabItem value="describe_workspace_authentication">

Displays information about the authentication methods used in one Amazon Managed Grafana workspace.

```sql
SELECT
awsSso,
providers,
saml
FROM aws.grafana.workspace_authentications
WHERE workspace_id = '{{ workspace_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_workspace_authentication"
    values={[
        { label: 'update_workspace_authentication', value: 'update_workspace_authentication' }
    ]}
>
<TabItem value="update_workspace_authentication">

Use this operation to define the identity provider (IdP) that this workspace authenticates users from, using SAML. You can also map SAML assertion attributes to workspace user information and define which groups in the assertion attribute are to have the Admin and Editor roles in the workspace. Changes to the authentication method for a workspace may take a few minutes to take effect.

```sql
UPDATE aws.grafana.workspace_authentications
SET 
authenticationProviders = '{{ authenticationProviders }}',
samlConfiguration = '{{ samlConfiguration }}'
WHERE 
workspace_id = '{{ workspace_id }}' --required
AND region = '{{ region }}' --required
AND authenticationProviders = '{{ authenticationProviders }}' --required
RETURNING
authentication;
```
</TabItem>
</Tabs>
