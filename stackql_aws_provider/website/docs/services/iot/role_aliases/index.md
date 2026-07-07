--- 
title: role_aliases
hide_title: false
hide_table_of_contents: false
keywords:
  - role_aliases
  - iot
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

Creates, updates, deletes, gets or lists a <code>role_aliases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="role_aliases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.role_aliases" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_role_aliases"
    values={[
        { label: 'list_role_aliases', value: 'list_role_aliases' }
    ]}
>
<TabItem value="list_role_aliases">

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
    <td><CopyableCode code="role_alias" /></td>
    <td><code>string</code></td>
    <td>The role aliases.</td>
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
    <td><a href="#list_role_aliases"><CopyableCode code="list_role_aliases" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-pageSize"><code>pageSize</code></a>, <a href="#parameter-marker"><code>marker</code></a>, <a href="#parameter-isAscendingOrder"><code>isAscendingOrder</code></a></td>
    <td>Lists the role aliases registered in your account. Requires permission to access the ListRoleAliases action.</td>
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
<tr id="parameter-isAscendingOrder">
    <td><CopyableCode code="isAscendingOrder" /></td>
    <td><code>boolean</code></td>
    <td>Return the list of role aliases in ascending alphabetical order.</td>
</tr>
<tr id="parameter-marker">
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>A marker used to get the next set of results.</td>
</tr>
<tr id="parameter-pageSize">
    <td><CopyableCode code="pageSize" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_role_aliases"
    values={[
        { label: 'list_role_aliases', value: 'list_role_aliases' }
    ]}
>
<TabItem value="list_role_aliases">

Lists the role aliases registered in your account. Requires permission to access the ListRoleAliases action.

```sql
SELECT
role_alias
FROM aws.iot.role_aliases
WHERE region = '{{ region }}' -- required
AND pageSize = '{{ pageSize }}'
AND marker = '{{ marker }}'
AND isAscendingOrder = '{{ isAscendingOrder }}'
;
```
</TabItem>
</Tabs>
