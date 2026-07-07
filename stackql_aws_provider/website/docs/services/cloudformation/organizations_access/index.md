--- 
title: organizations_access
hide_title: false
hide_table_of_contents: false
keywords:
  - organizations_access
  - cloudformation
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

Creates, updates, deletes, gets or lists an <code>organizations_access</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="organizations_access" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudformation.organizations_access" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_organizations_access"
    values={[
        { label: 'describe_organizations_access', value: 'describe_organizations_access' }
    ]}
>
<TabItem value="describe_organizations_access">

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
    <td><CopyableCode code="line_items" /></td>
    <td><code>array</code></td>
    <td></td>
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
    <td><a href="#describe_organizations_access"><CopyableCode code="describe_organizations_access" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CallAs"><code>CallAs</code></a></td>
    <td>Retrieves information about the account's OrganizationAccess status. This API can be called either by the management account or the delegated administrator by using the CallAs parameter. This API can also be called without the CallAs parameter by the management account.</td>
</tr>
<tr>
    <td><a href="#activate_organizations_access"><CopyableCode code="activate_organizations_access" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Activate trusted access with Organizations. With trusted access between StackSets and Organizations activated, the management account has permissions to create and manage StackSets for your organization.</td>
</tr>
<tr>
    <td><a href="#deactivate_organizations_access"><CopyableCode code="deactivate_organizations_access" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deactivates trusted access with Organizations. If trusted access is deactivated, the management account does not have permissions to create and manage service-managed StackSets for your organization.</td>
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
<tr id="parameter-CallAs">
    <td><CopyableCode code="CallAs" /></td>
    <td><code>string</code></td>
    <td>&#91;Service-managed permissions&#93; Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. By default, SELF is specified. If you are signed in to the management account, specify SELF. If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN. Your Amazon Web Services account must be registered as a delegated administrator in the management account. For more information, see Register a delegated administrator in the CloudFormation User Guide.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_organizations_access"
    values={[
        { label: 'describe_organizations_access', value: 'describe_organizations_access' }
    ]}
>
<TabItem value="describe_organizations_access">

Retrieves information about the account's OrganizationAccess status. This API can be called either by the management account or the delegated administrator by using the CallAs parameter. This API can also be called without the CallAs parameter by the management account.

```sql
SELECT
line_items
FROM aws.cloudformation.organizations_access
WHERE region = '{{ region }}' -- required
AND CallAs = '{{ CallAs }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="activate_organizations_access"
    values={[
        { label: 'activate_organizations_access', value: 'activate_organizations_access' },
        { label: 'deactivate_organizations_access', value: 'deactivate_organizations_access' }
    ]}
>
<TabItem value="activate_organizations_access">

Activate trusted access with Organizations. With trusted access between StackSets and Organizations activated, the management account has permissions to create and manage StackSets for your organization.

```sql
EXEC aws.cloudformation.organizations_access.activate_organizations_access 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="deactivate_organizations_access">

Deactivates trusted access with Organizations. If trusted access is deactivated, the management account does not have permissions to create and manage service-managed StackSets for your organization.

```sql
EXEC aws.cloudformation.organizations_access.deactivate_organizations_access 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
