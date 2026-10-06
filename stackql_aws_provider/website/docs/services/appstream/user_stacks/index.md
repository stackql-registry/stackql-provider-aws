--- 
title: user_stacks
hide_title: false
hide_table_of_contents: false
keywords:
  - user_stacks
  - appstream
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

Creates, updates, deletes, gets or lists a <code>user_stacks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_stacks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appstream.user_stacks" /></td></tr>
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
    <td><a href="#batch_associate_user_stack"><CopyableCode code="batch_associate_user_stack" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserStackAssociations"><code>UserStackAssociations</code></a></td>
    <td></td>
    <td>Associates the specified users with the specified stacks. Users in a user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain.</td>
</tr>
<tr>
    <td><a href="#batch_disassociate_user_stack"><CopyableCode code="batch_disassociate_user_stack" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserStackAssociations"><code>UserStackAssociations</code></a></td>
    <td></td>
    <td>Disassociates the specified users from the specified stacks.</td>
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
    defaultValue="batch_associate_user_stack"
    values={[
        { label: 'batch_associate_user_stack', value: 'batch_associate_user_stack' },
        { label: 'batch_disassociate_user_stack', value: 'batch_disassociate_user_stack' }
    ]}
>
<TabItem value="batch_associate_user_stack">

Associates the specified users with the specified stacks. Users in a user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain.

```sql
EXEC aws.appstream.user_stacks.batch_associate_user_stack 
@region='{{ region }}' --required 
@@json=
'{
"UserStackAssociations": "{{ UserStackAssociations }}"
}'
;
```
</TabItem>
<TabItem value="batch_disassociate_user_stack">

Disassociates the specified users from the specified stacks.

```sql
EXEC aws.appstream.user_stacks.batch_disassociate_user_stack 
@region='{{ region }}' --required 
@@json=
'{
"UserStackAssociations": "{{ UserStackAssociations }}"
}'
;
```
</TabItem>
</Tabs>
