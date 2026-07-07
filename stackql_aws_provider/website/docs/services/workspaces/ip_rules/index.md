--- 
title: ip_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - ip_rules
  - workspaces
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

Creates, updates, deletes, gets or lists an <code>ip_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ip_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces.ip_rules" /></td></tr>
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
    <td><a href="#authorize_ip_rules"><CopyableCode code="authorize_ip_rules" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GroupId"><code>GroupId</code></a>, <a href="#parameter-UserRules"><code>UserRules</code></a></td>
    <td></td>
    <td>Adds one or more rules to the specified IP access control group. This action gives users permission to access their WorkSpaces from the CIDR address ranges specified in the rules.</td>
</tr>
<tr>
    <td><a href="#revoke_ip_rules"><CopyableCode code="revoke_ip_rules" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GroupId"><code>GroupId</code></a>, <a href="#parameter-UserRules"><code>UserRules</code></a></td>
    <td></td>
    <td>Removes one or more rules from the specified IP access control group.</td>
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

## `UPDATE` examples

<Tabs
    defaultValue="authorize_ip_rules"
    values={[
        { label: 'authorize_ip_rules', value: 'authorize_ip_rules' }
    ]}
>
<TabItem value="authorize_ip_rules">

Adds one or more rules to the specified IP access control group. This action gives users permission to access their WorkSpaces from the CIDR address ranges specified in the rules.

```sql
UPDATE aws.workspaces.ip_rules
SET 
GroupId = '{{ GroupId }}',
UserRules = '{{ UserRules }}'
WHERE 
region = '{{ region }}' --required
AND GroupId = '{{ GroupId }}' --required
AND UserRules = '{{ UserRules }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="revoke_ip_rules"
    values={[
        { label: 'revoke_ip_rules', value: 'revoke_ip_rules' }
    ]}
>
<TabItem value="revoke_ip_rules">

Removes one or more rules from the specified IP access control group.

```sql
EXEC aws.workspaces.ip_rules.revoke_ip_rules 
@region='{{ region }}' --required 
@@json=
'{
"GroupId": "{{ GroupId }}", 
"UserRules": "{{ UserRules }}"
}'
;
```
</TabItem>
</Tabs>
