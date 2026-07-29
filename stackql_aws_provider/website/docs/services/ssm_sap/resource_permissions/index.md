--- 
title: resource_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_permissions
  - ssm_sap
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

Creates, updates, deletes, gets or lists a <code>resource_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm_sap.resource_permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_resource_permission"
    values={[
        { label: 'get_resource_permission', value: 'get_resource_permission' }
    ]}
>
<TabItem value="get_resource_permission">

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
    <td><CopyableCode code="policy" /></td>
    <td><code>string</code></td>
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
    <td><a href="#get_resource_permission"><CopyableCode code="get_resource_permission" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets permissions associated with the target database.</td>
</tr>
<tr>
    <td><a href="#put_resource_permission"><CopyableCode code="put_resource_permission" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ActionType"><code>ActionType</code></a>, <a href="#parameter-SourceResourceArn"><code>SourceResourceArn</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a></td>
    <td></td>
    <td>Adds permissions to the target database.</td>
</tr>
<tr>
    <td><a href="#delete_resource_permission"><CopyableCode code="delete_resource_permission" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes permissions associated with the target database.</td>
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
    defaultValue="get_resource_permission"
    values={[
        { label: 'get_resource_permission', value: 'get_resource_permission' }
    ]}
>
<TabItem value="get_resource_permission">

Gets permissions associated with the target database.

```sql
SELECT
policy
FROM aws.ssm_sap.resource_permissions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_resource_permission"
    values={[
        { label: 'put_resource_permission', value: 'put_resource_permission' }
    ]}
>
<TabItem value="put_resource_permission">

Adds permissions to the target database.

```sql
REPLACE aws.ssm_sap.resource_permissions
SET 
ActionType = '{{ ActionType }}',
SourceResourceArn = '{{ SourceResourceArn }}',
ResourceArn = '{{ ResourceArn }}'
WHERE 
region = '{{ region }}' --required
AND ActionType = '{{ ActionType }}' --required
AND SourceResourceArn = '{{ SourceResourceArn }}' --required
AND ResourceArn = '{{ ResourceArn }}' --required
RETURNING
policy;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_resource_permission"
    values={[
        { label: 'delete_resource_permission', value: 'delete_resource_permission' }
    ]}
>
<TabItem value="delete_resource_permission">

Removes permissions associated with the target database.

```sql
DELETE FROM aws.ssm_sap.resource_permissions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
