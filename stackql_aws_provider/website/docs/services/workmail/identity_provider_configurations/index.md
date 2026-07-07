--- 
title: identity_provider_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_provider_configurations
  - workmail
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

Creates, updates, deletes, gets or lists an <code>identity_provider_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="identity_provider_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workmail.identity_provider_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_identity_provider_configuration"
    values={[
        { label: 'describe_identity_provider_configuration', value: 'describe_identity_provider_configuration' }
    ]}
>
<TabItem value="describe_identity_provider_configuration">

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
    <td><CopyableCode code="AuthenticationMode" /></td>
    <td><code>string</code></td>
    <td>The authentication mode used in WorkMail. (IDENTITY_PROVIDER_ONLY, IDENTITY_PROVIDER_AND_DIRECTORY)</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityCenterConfiguration" /></td>
    <td><code>object</code></td>
    <td>The details of the IAM Identity Center configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="PersonalAccessTokenConfiguration" /></td>
    <td><code>object</code></td>
    <td>The details of the Personal Access Token configuration.</td>
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
    <td><a href="#describe_identity_provider_configuration"><CopyableCode code="describe_identity_provider_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns detailed information on the current IdC setup for the WorkMail organization.</td>
</tr>
<tr>
    <td><a href="#put_identity_provider_configuration"><CopyableCode code="put_identity_provider_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a>, <a href="#parameter-AuthenticationMode"><code>AuthenticationMode</code></a>, <a href="#parameter-IdentityCenterConfiguration"><code>IdentityCenterConfiguration</code></a>, <a href="#parameter-PersonalAccessTokenConfiguration"><code>PersonalAccessTokenConfiguration</code></a></td>
    <td></td>
    <td>Enables integration between IAM Identity Center (IdC) and WorkMail to proxy authentication requests for mailbox users. You can connect your IdC directory or your external directory to WorkMail through IdC and manage access to WorkMail mailboxes in a single place. For enhanced protection, you could enable Multifactor Authentication (MFA) and Personal Access Tokens.</td>
</tr>
<tr>
    <td><a href="#delete_identity_provider_configuration"><CopyableCode code="delete_identity_provider_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disables the integration between IdC and WorkMail. Authentication will continue with the directory as it was before the IdC integration. You might have to reset your directory passwords and reconfigure your desktop and mobile email clients.</td>
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
    defaultValue="describe_identity_provider_configuration"
    values={[
        { label: 'describe_identity_provider_configuration', value: 'describe_identity_provider_configuration' }
    ]}
>
<TabItem value="describe_identity_provider_configuration">

Returns detailed information on the current IdC setup for the WorkMail organization.

```sql
SELECT
AuthenticationMode,
IdentityCenterConfiguration,
PersonalAccessTokenConfiguration
FROM aws.workmail.identity_provider_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_identity_provider_configuration"
    values={[
        { label: 'put_identity_provider_configuration', value: 'put_identity_provider_configuration' }
    ]}
>
<TabItem value="put_identity_provider_configuration">

Enables integration between IAM Identity Center (IdC) and WorkMail to proxy authentication requests for mailbox users. You can connect your IdC directory or your external directory to WorkMail through IdC and manage access to WorkMail mailboxes in a single place. For enhanced protection, you could enable Multifactor Authentication (MFA) and Personal Access Tokens.

```sql
REPLACE aws.workmail.identity_provider_configurations
SET 
OrganizationId = '{{ OrganizationId }}',
AuthenticationMode = '{{ AuthenticationMode }}',
IdentityCenterConfiguration = '{{ IdentityCenterConfiguration }}',
PersonalAccessTokenConfiguration = '{{ PersonalAccessTokenConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND OrganizationId = '{{ OrganizationId }}' --required
AND AuthenticationMode = '{{ AuthenticationMode }}' --required
AND IdentityCenterConfiguration = '{{ IdentityCenterConfiguration }}' --required
AND PersonalAccessTokenConfiguration = '{{ PersonalAccessTokenConfiguration }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_identity_provider_configuration"
    values={[
        { label: 'delete_identity_provider_configuration', value: 'delete_identity_provider_configuration' }
    ]}
>
<TabItem value="delete_identity_provider_configuration">

Disables the integration between IdC and WorkMail. Authentication will continue with the directory as it was before the IdC integration. You might have to reset your directory passwords and reconfigure your desktop and mobile email clients.

```sql
DELETE FROM aws.workmail.identity_provider_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
