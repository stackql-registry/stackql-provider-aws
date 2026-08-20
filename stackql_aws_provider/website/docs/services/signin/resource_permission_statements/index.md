--- 
title: resource_permission_statements
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_permission_statements
  - signin
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

Creates, updates, deletes, gets or lists a <code>resource_permission_statements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_permission_statements" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.signin.resource_permission_statements" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_resource_permission_statements"
    values={[
        { label: 'list_resource_permission_statements', value: 'list_resource_permission_statements' }
    ]}
>
<TabItem value="list_resource_permission_statements">

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
    <td><CopyableCode code="condition" /></td>
    <td><code>object</code></td>
    <td>Condition block for the permission statement</td>
</tr>
<tr>
    <td><CopyableCode code="sid" /></td>
    <td><code>string</code></td>
    <td>Unique identifier for a permission statement (pattern: &lt;code&gt;&#91;A-Za-z0-9+/&#93;&#123;64&#125;=?&lt;/code&gt;)</td>
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
    <td><a href="#list_resource_permission_statements"><CopyableCode code="list_resource_permission_statements" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve all permission statements in the account's SignIn resource-based policy</td>
</tr>
<tr>
    <td><a href="#put_resource_permission_statement"><CopyableCode code="put_resource_permission_statement" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Create a permission statement in the account's SignIn resource-based policy</td>
</tr>
<tr>
    <td><a href="#delete_resource_permission_statement"><CopyableCode code="delete_resource_permission_statement" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Remove a permission statement from the account's SignIn resource-based policy</td>
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
    defaultValue="list_resource_permission_statements"
    values={[
        { label: 'list_resource_permission_statements', value: 'list_resource_permission_statements' }
    ]}
>
<TabItem value="list_resource_permission_statements">

Retrieve all permission statements in the account's SignIn resource-based policy

```sql
SELECT
condition,
sid
FROM aws.signin.resource_permission_statements
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_resource_permission_statement"
    values={[
        { label: 'put_resource_permission_statement', value: 'put_resource_permission_statement' }
    ]}
>
<TabItem value="put_resource_permission_statement">

Create a permission statement in the account's SignIn resource-based policy

```sql
REPLACE aws.signin.resource_permission_statements
SET 
sourceVpc = '{{ sourceVpc }}',
signinSourceVpce = '{{ signinSourceVpce }}',
consoleSourceVpce = '{{ consoleSourceVpce }}',
vpcSourceIp = '{{ vpcSourceIp }}',
sourceIp = '{{ sourceIp }}',
requestedRegion = '{{ requestedRegion }}',
excludedPrincipal = '{{ excludedPrincipal }}',
clientToken = '{{ clientToken }}'
WHERE 
region = '{{ region }}' --required
RETURNING
statement_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_resource_permission_statement"
    values={[
        { label: 'delete_resource_permission_statement', value: 'delete_resource_permission_statement' }
    ]}
>
<TabItem value="delete_resource_permission_statement">

Remove a permission statement from the account's SignIn resource-based policy

```sql
DELETE FROM aws.signin.resource_permission_statements
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
