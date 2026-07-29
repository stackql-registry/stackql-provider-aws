--- 
title: admin_accounts_for_organizations
hide_title: false
hide_table_of_contents: false
keywords:
  - admin_accounts_for_organizations
  - fms
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

Creates, updates, deletes, gets or lists an <code>admin_accounts_for_organizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="admin_accounts_for_organizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.fms.admin_accounts_for_organizations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_admin_accounts_for_organization"
    values={[
        { label: 'list_admin_accounts_for_organization', value: 'list_admin_accounts_for_organization' }
    ]}
>
<TabItem value="list_admin_accounts_for_organization">

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
    <td><CopyableCode code="admin_account" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the Firewall Manager administrator's account. (pattern: &lt;code&gt;^&#91;0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="default_admin" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value that indicates if the administrator is the default administrator. If true, then this is the default administrator account. The default administrator can manage third-party firewalls and has full administrative scope. There is only one default administrator account per organization. For information about Firewall Manager default administrator accounts, see Managing Firewall Manager administrators in the Firewall Manager Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the request to onboard a member account as an Firewall Manager administrator. ONBOARDING - The account is onboarding to Firewall Manager as an administrator. ONBOARDING_COMPLETE - Firewall Manager The account is onboarded to Firewall Manager as an administrator, and can perform actions on the resources defined in their AdminScope. OFFBOARDING - The account is being removed as an Firewall Manager administrator. OFFBOARDING_COMPLETE - The account has been removed as an Firewall Manager administrator. (ONBOARDING, ONBOARDING_COMPLETE, OFFBOARDING, OFFBOARDING_COMPLETE)</td>
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
    <td><a href="#list_admin_accounts_for_organization"><CopyableCode code="list_admin_accounts_for_organization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a AdminAccounts object that lists the Firewall Manager administrators within the organization that are onboarded to Firewall Manager by AssociateAdminAccount. This operation can be called only from the organization's management account.</td>
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
    defaultValue="list_admin_accounts_for_organization"
    values={[
        { label: 'list_admin_accounts_for_organization', value: 'list_admin_accounts_for_organization' }
    ]}
>
<TabItem value="list_admin_accounts_for_organization">

Returns a AdminAccounts object that lists the Firewall Manager administrators within the organization that are onboarded to Firewall Manager by AssociateAdminAccount. This operation can be called only from the organization's management account.

```sql
SELECT
admin_account,
default_admin,
status
FROM aws.fms.admin_accounts_for_organizations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
