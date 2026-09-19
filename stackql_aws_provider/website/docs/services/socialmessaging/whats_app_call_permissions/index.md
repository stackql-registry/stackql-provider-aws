--- 
title: whats_app_call_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - whats_app_call_permissions
  - socialmessaging
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

Creates, updates, deletes, gets or lists a <code>whats_app_call_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="whats_app_call_permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.socialmessaging.whats_app_call_permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_whats_app_call_permission"
    values={[
        { label: 'get_whats_app_call_permission', value: 'get_whats_app_call_permission' }
    ]}
>
<TabItem value="get_whats_app_call_permission">

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
    <td><CopyableCode code="actions" /></td>
    <td><code>array</code></td>
    <td>The calling actions the business can take with the end user, and any limits that apply to each action.</td>
</tr>
<tr>
    <td><CopyableCode code="permission" /></td>
    <td><code>object</code></td>
    <td>The current calling permission state for the end user.</td>
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
    <td><a href="#get_whats_app_call_permission"><CopyableCode code="get_whats_app_call_permission" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the current calling permission for a WhatsApp end user, along with the calling actions the business is allowed to take with that user. Provide the destination phone number or the business-scoped user ID to identify the end user.</td>
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
    defaultValue="get_whats_app_call_permission"
    values={[
        { label: 'get_whats_app_call_permission', value: 'get_whats_app_call_permission' }
    ]}
>
<TabItem value="get_whats_app_call_permission">

Retrieves the current calling permission for a WhatsApp end user, along with the calling actions the business is allowed to take with that user. Provide the destination phone number or the business-scoped user ID to identify the end user.

```sql
SELECT
actions,
permission
FROM aws.socialmessaging.whats_app_call_permissions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
