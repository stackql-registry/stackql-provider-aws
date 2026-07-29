--- 
title: access_control_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - access_control_rules
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

Creates, updates, deletes, gets or lists an <code>access_control_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_control_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workmail.access_control_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_access_control_rules"
    values={[
        { label: 'list_access_control_rules', value: 'list_access_control_rules' }
    ]}
>
<TabItem value="list_access_control_rules">

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
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td>The access control rules.</td>
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
    <td><a href="#list_access_control_rules"><CopyableCode code="list_access_control_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the access control rules for the specified organization.</td>
</tr>
<tr>
    <td><a href="#put_access_control_rule"><CopyableCode code="put_access_control_rule" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-Effect"><code>Effect</code></a>, <a href="#parameter-Description"><code>Description</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a></td>
    <td></td>
    <td>Adds a new access control rule for the specified organization. The rule allows or denies access to the organization for the specified IPv4 addresses, access protocol actions, user IDs and impersonation IDs. Adding a new rule with the same name as an existing rule replaces the older rule.</td>
</tr>
<tr>
    <td><a href="#delete_access_control_rule"><CopyableCode code="delete_access_control_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an access control rule for the specified WorkMail organization. Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.</td>
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
    defaultValue="list_access_control_rules"
    values={[
        { label: 'list_access_control_rules', value: 'list_access_control_rules' }
    ]}
>
<TabItem value="list_access_control_rules">

Lists the access control rules for the specified organization.

```sql
SELECT
rules
FROM aws.workmail.access_control_rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_access_control_rule"
    values={[
        { label: 'put_access_control_rule', value: 'put_access_control_rule' }
    ]}
>
<TabItem value="put_access_control_rule">

Adds a new access control rule for the specified organization. The rule allows or denies access to the organization for the specified IPv4 addresses, access protocol actions, user IDs and impersonation IDs. Adding a new rule with the same name as an existing rule replaces the older rule.

```sql
REPLACE aws.workmail.access_control_rules
SET 
Name = '{{ Name }}',
Effect = '{{ Effect }}',
Description = '{{ Description }}',
IpRanges = '{{ IpRanges }}',
NotIpRanges = '{{ NotIpRanges }}',
Actions = '{{ Actions }}',
NotActions = '{{ NotActions }}',
UserIds = '{{ UserIds }}',
NotUserIds = '{{ NotUserIds }}',
OrganizationId = '{{ OrganizationId }}',
ImpersonationRoleIds = '{{ ImpersonationRoleIds }}',
NotImpersonationRoleIds = '{{ NotImpersonationRoleIds }}'
WHERE 
region = '{{ region }}' --required
AND Name = '{{ Name }}' --required
AND Effect = '{{ Effect }}' --required
AND Description = '{{ Description }}' --required
AND OrganizationId = '{{ OrganizationId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_access_control_rule"
    values={[
        { label: 'delete_access_control_rule', value: 'delete_access_control_rule' }
    ]}
>
<TabItem value="delete_access_control_rule">

Deletes an access control rule for the specified WorkMail organization. Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body.

```sql
DELETE FROM aws.workmail.access_control_rules
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
