--- 
title: organizations_root_credentials_managements
hide_title: false
hide_table_of_contents: false
keywords:
  - organizations_root_credentials_managements
  - iam
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

Creates, updates, deletes, gets or lists an <code>organizations_root_credentials_managements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="organizations_root_credentials_managements" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.organizations_root_credentials_managements" /></td></tr>
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
    <td><a href="#disable_organizations_root_credentials_management"><CopyableCode code="disable_organizations_root_credentials_management" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disables the management of privileged root user credentials across member accounts in your organization. When you disable this feature, the management account and the delegated administrator for IAM can no longer manage root user credentials for member accounts in your organization.</td>
</tr>
<tr>
    <td><a href="#enable_organizations_root_credentials_management"><CopyableCode code="enable_organizations_root_credentials_management" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enables the management of privileged root user credentials across member accounts in your organization. When you enable root credentials management for centralized root access, the management account and the delegated administrator for IAM can manage root user credentials for member accounts in your organization. Before you enable centralized root access, you must have an account configured with the following settings: You must manage your Amazon Web Services accounts in Organizations. Enable trusted access for Identity and Access Management in Organizations. For details, see IAM and Organizations in the Organizations User Guide.</td>
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
    defaultValue="disable_organizations_root_credentials_management"
    values={[
        { label: 'disable_organizations_root_credentials_management', value: 'disable_organizations_root_credentials_management' },
        { label: 'enable_organizations_root_credentials_management', value: 'enable_organizations_root_credentials_management' }
    ]}
>
<TabItem value="disable_organizations_root_credentials_management">

Disables the management of privileged root user credentials across member accounts in your organization. When you disable this feature, the management account and the delegated administrator for IAM can no longer manage root user credentials for member accounts in your organization.

```sql
EXEC aws.iam.organizations_root_credentials_managements.disable_organizations_root_credentials_management 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="enable_organizations_root_credentials_management">

Enables the management of privileged root user credentials across member accounts in your organization. When you enable root credentials management for centralized root access, the management account and the delegated administrator for IAM can manage root user credentials for member accounts in your organization. Before you enable centralized root access, you must have an account configured with the following settings: You must manage your Amazon Web Services accounts in Organizations. Enable trusted access for Identity and Access Management in Organizations. For details, see IAM and Organizations in the Organizations User Guide.

```sql
EXEC aws.iam.organizations_root_credentials_managements.enable_organizations_root_credentials_management 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
