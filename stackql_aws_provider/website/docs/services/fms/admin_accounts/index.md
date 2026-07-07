--- 
title: admin_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - admin_accounts
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

Creates, updates, deletes, gets or lists an <code>admin_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="admin_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.fms.admin_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_admin_account"
    values={[
        { label: 'get_admin_account', value: 'get_admin_account' }
    ]}
>
<TabItem value="get_admin_account">

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
    <td><CopyableCode code="AdminAccount" /></td>
    <td><code>string</code></td>
    <td>The account that is set as the Firewall Manager default administrator. (pattern: &lt;code&gt;^&#91;0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RoleStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the account that you set as the Firewall Manager default administrator. (READY, CREATING, PENDING_DELETION, DELETING, DELETED)</td>
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
    <td><a href="#get_admin_account"><CopyableCode code="get_admin_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the Organizations account that is associated with Firewall Manager as the Firewall Manager default administrator.</td>
</tr>
<tr>
    <td><a href="#associate_admin_account"><CopyableCode code="associate_admin_account" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AdminAccount"><code>AdminAccount</code></a></td>
    <td></td>
    <td>Sets a Firewall Manager default administrator account. The Firewall Manager default administrator account can manage third-party firewalls and has full administrative scope that allows administration of all policy types, accounts, organizational units, and Regions. This account must be a member account of the organization in Organizations whose resources you want to protect. For information about working with Firewall Manager administrator accounts, see Managing Firewall Manager administrators in the Firewall Manager Developer Guide.</td>
</tr>
<tr>
    <td><a href="#disassociate_admin_account"><CopyableCode code="disassociate_admin_account" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates an Firewall Manager administrator account. To set a different account as an Firewall Manager administrator, submit a PutAdminAccount request. To set an account as a default administrator account, you must submit an AssociateAdminAccount request. Disassociation of the default administrator account follows the first in, last out principle. If you are the default administrator, all Firewall Manager administrators within the organization must first disassociate their accounts before you can disassociate your account.</td>
</tr>
<tr>
    <td><a href="#put_admin_account"><CopyableCode code="put_admin_account" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AdminAccount"><code>AdminAccount</code></a></td>
    <td></td>
    <td>Creates or updates an Firewall Manager administrator account. The account must be a member of the organization that was onboarded to Firewall Manager by AssociateAdminAccount. Only the organization's management account can create an Firewall Manager administrator account. When you create an Firewall Manager administrator account, the service checks to see if the account is already a delegated administrator within Organizations. If the account isn't a delegated administrator, Firewall Manager calls Organizations to delegate the account within Organizations. For more information about administrator accounts within Organizations, see Managing the Amazon Web Services Accounts in Your Organization.</td>
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
    defaultValue="get_admin_account"
    values={[
        { label: 'get_admin_account', value: 'get_admin_account' }
    ]}
>
<TabItem value="get_admin_account">

Returns the Organizations account that is associated with Firewall Manager as the Firewall Manager default administrator.

```sql
SELECT
AdminAccount,
RoleStatus
FROM aws.fms.admin_accounts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_admin_account"
    values={[
        { label: 'associate_admin_account', value: 'associate_admin_account' },
        { label: 'disassociate_admin_account', value: 'disassociate_admin_account' }
    ]}
>
<TabItem value="associate_admin_account">

Sets a Firewall Manager default administrator account. The Firewall Manager default administrator account can manage third-party firewalls and has full administrative scope that allows administration of all policy types, accounts, organizational units, and Regions. This account must be a member account of the organization in Organizations whose resources you want to protect. For information about working with Firewall Manager administrator accounts, see Managing Firewall Manager administrators in the Firewall Manager Developer Guide.

```sql
UPDATE aws.fms.admin_accounts
SET 
AdminAccount = '{{ AdminAccount }}'
WHERE 
region = '{{ region }}' --required
AND AdminAccount = '{{ AdminAccount }}' --required;
```
</TabItem>
<TabItem value="disassociate_admin_account">

Disassociates an Firewall Manager administrator account. To set a different account as an Firewall Manager administrator, submit a PutAdminAccount request. To set an account as a default administrator account, you must submit an AssociateAdminAccount request. Disassociation of the default administrator account follows the first in, last out principle. If you are the default administrator, all Firewall Manager administrators within the organization must first disassociate their accounts before you can disassociate your account.

```sql
UPDATE aws.fms.admin_accounts
SET 
-- No updatable properties
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_admin_account"
    values={[
        { label: 'put_admin_account', value: 'put_admin_account' }
    ]}
>
<TabItem value="put_admin_account">

Creates or updates an Firewall Manager administrator account. The account must be a member of the organization that was onboarded to Firewall Manager by AssociateAdminAccount. Only the organization's management account can create an Firewall Manager administrator account. When you create an Firewall Manager administrator account, the service checks to see if the account is already a delegated administrator within Organizations. If the account isn't a delegated administrator, Firewall Manager calls Organizations to delegate the account within Organizations. For more information about administrator accounts within Organizations, see Managing the Amazon Web Services Accounts in Your Organization.

```sql
REPLACE aws.fms.admin_accounts
SET 
AdminAccount = '{{ AdminAccount }}',
AdminScope = '{{ AdminScope }}'
WHERE 
region = '{{ region }}' --required
AND AdminAccount = '{{ AdminAccount }}' --required;
```
</TabItem>
</Tabs>
