--- 
title: launch_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - launch_actions
  - drs
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

Creates, updates, deletes, gets or lists a <code>launch_actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="launch_actions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.drs.launch_actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_launch_actions"
    values={[
        { label: 'list_launch_actions', value: 'list_launch_actions' }
    ]}
>
<TabItem value="list_launch_actions">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Launch action name. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9 /_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="action_code" /></td>
    <td><code>string</code></td>
    <td>Launch action code. (pattern: &lt;code&gt;(&#91;A-Za-z0-9-/:&#93;)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="action_id" /></td>
    <td><code>string</code></td>
    <td>Launch action Id. (pattern: &lt;code&gt;&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="action_version" /></td>
    <td><code>string</code></td>
    <td>Launch action version. (pattern: &lt;code&gt;(\$DEFAULT|\$LATEST|&#91;0-9&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td>Whether the launch action is active.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Launch action category. (MONITORING, VALIDATION, CONFIGURATION, SECURITY, OTHER)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Launch action description. (pattern: &lt;code&gt;&#91;0-9a-zA-Z ():/.,'-_#*; &#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="optional" /></td>
    <td><code>boolean</code></td>
    <td>Whether the launch will not be marked as failed if this action fails.</td>
</tr>
<tr>
    <td><CopyableCode code="order" /></td>
    <td><code>integer</code></td>
    <td>Launch action order.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>Launch action type. (SSM_AUTOMATION, SSM_COMMAND)</td>
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
    <td><a href="#list_launch_actions"><CopyableCode code="list_launch_actions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists resource launch actions.</td>
</tr>
<tr>
    <td><a href="#put_launch_action"><CopyableCode code="put_launch_action" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceId"><code>resourceId</code></a>, <a href="#parameter-actionCode"><code>actionCode</code></a>, <a href="#parameter-order"><code>order</code></a>, <a href="#parameter-actionId"><code>actionId</code></a>, <a href="#parameter-optional"><code>optional</code></a>, <a href="#parameter-active"><code>active</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-actionVersion"><code>actionVersion</code></a>, <a href="#parameter-category"><code>category</code></a>, <a href="#parameter-description"><code>description</code></a></td>
    <td></td>
    <td>Puts a resource launch action.</td>
</tr>
<tr>
    <td><a href="#delete_launch_action"><CopyableCode code="delete_launch_action" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a resource launch action.</td>
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
    defaultValue="list_launch_actions"
    values={[
        { label: 'list_launch_actions', value: 'list_launch_actions' }
    ]}
>
<TabItem value="list_launch_actions">

Lists resource launch actions.

```sql
SELECT
name,
action_code,
action_id,
action_version,
active,
category,
description,
optional,
order,
parameters,
type_
FROM aws.drs.launch_actions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_launch_action"
    values={[
        { label: 'put_launch_action', value: 'put_launch_action' }
    ]}
>
<TabItem value="put_launch_action">

Puts a resource launch action.

```sql
REPLACE aws.drs.launch_actions
SET 
resourceId = '{{ resourceId }}',
actionCode = '{{ actionCode }}',
order = {{ order }},
actionId = '{{ actionId }}',
optional = {{ optional }},
active = {{ active }},
name = '{{ name }}',
actionVersion = '{{ actionVersion }}',
category = '{{ category }}',
parameters = '{{ parameters }}',
description = '{{ description }}'
WHERE 
region = '{{ region }}' --required
AND resourceId = '{{ resourceId }}' --required
AND actionCode = '{{ actionCode }}' --required
AND order = '{{ order }}' --required
AND actionId = '{{ actionId }}' --required
AND optional = {{ optional }} --required
AND active = {{ active }} --required
AND name = '{{ name }}' --required
AND actionVersion = '{{ actionVersion }}' --required
AND category = '{{ category }}' --required
AND description = '{{ description }}' --required
RETURNING
name,
action_code,
action_id,
action_version,
active,
category,
description,
optional,
order,
parameters,
resource_id,
type_;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_launch_action"
    values={[
        { label: 'delete_launch_action', value: 'delete_launch_action' }
    ]}
>
<TabItem value="delete_launch_action">

Deletes a resource launch action.

```sql
DELETE FROM aws.drs.launch_actions
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
