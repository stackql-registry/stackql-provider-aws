--- 
title: mailbox_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - mailbox_permissions
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

Creates, updates, deletes, gets or lists a <code>mailbox_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mailbox_permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workmail.mailbox_permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_mailbox_permissions"
    values={[
        { label: 'list_mailbox_permissions', value: 'list_mailbox_permissions' }
    ]}
>
<TabItem value="list_mailbox_permissions">

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
    <td><CopyableCode code="grantee_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user, group, or resource to which the permissions are granted.</td>
</tr>
<tr>
    <td><CopyableCode code="grantee_type" /></td>
    <td><code>string</code></td>
    <td>The type of user, group, or resource referred to in GranteeId. (GROUP, USER)</td>
</tr>
<tr>
    <td><CopyableCode code="permission_values" /></td>
    <td><code>array</code></td>
    <td>The permissions granted to the grantee. SEND_AS allows the grantee to send email as the owner of the mailbox (the grantee is not mentioned on these emails). SEND_ON_BEHALF allows the grantee to send email on behalf of the owner of the mailbox (the grantee is not mentioned as the physical sender of these emails). FULL_ACCESS allows the grantee full access to the mailbox, irrespective of other folder-level permissions set on the mailbox.</td>
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
    <td><a href="#list_mailbox_permissions"><CopyableCode code="list_mailbox_permissions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the mailbox permissions associated with a user, group, or resource mailbox.</td>
</tr>
<tr>
    <td><a href="#put_mailbox_permissions"><CopyableCode code="put_mailbox_permissions" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a>, <a href="#parameter-EntityId"><code>EntityId</code></a>, <a href="#parameter-GranteeId"><code>GranteeId</code></a>, <a href="#parameter-PermissionValues"><code>PermissionValues</code></a></td>
    <td></td>
    <td>Sets permissions for a user, group, or resource. This replaces any pre-existing permissions.</td>
</tr>
<tr>
    <td><a href="#delete_mailbox_permissions"><CopyableCode code="delete_mailbox_permissions" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes permissions granted to a member (user or group).</td>
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
    defaultValue="list_mailbox_permissions"
    values={[
        { label: 'list_mailbox_permissions', value: 'list_mailbox_permissions' }
    ]}
>
<TabItem value="list_mailbox_permissions">

Lists the mailbox permissions associated with a user, group, or resource mailbox.

```sql
SELECT
grantee_id,
grantee_type,
permission_values
FROM aws.workmail.mailbox_permissions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_mailbox_permissions"
    values={[
        { label: 'put_mailbox_permissions', value: 'put_mailbox_permissions' }
    ]}
>
<TabItem value="put_mailbox_permissions">

Sets permissions for a user, group, or resource. This replaces any pre-existing permissions.

```sql
REPLACE aws.workmail.mailbox_permissions
SET 
OrganizationId = '{{ OrganizationId }}',
EntityId = '{{ EntityId }}',
GranteeId = '{{ GranteeId }}',
PermissionValues = '{{ PermissionValues }}'
WHERE 
region = '{{ region }}' --required
AND OrganizationId = '{{ OrganizationId }}' --required
AND EntityId = '{{ EntityId }}' --required
AND GranteeId = '{{ GranteeId }}' --required
AND PermissionValues = '{{ PermissionValues }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_mailbox_permissions"
    values={[
        { label: 'delete_mailbox_permissions', value: 'delete_mailbox_permissions' }
    ]}
>
<TabItem value="delete_mailbox_permissions">

Deletes permissions granted to a member (user or group).

```sql
DELETE FROM aws.workmail.mailbox_permissions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
