--- 
title: q_app_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - q_app_permissions
  - qapps
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

Creates, updates, deletes, gets or lists a <code>q_app_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="q_app_permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qapps.q_app_permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_q_app_permissions"
    values={[
        { label: 'describe_q_app_permissions', value: 'describe_q_app_permissions' }
    ]}
>
<TabItem value="describe_q_app_permissions">

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
    <td><CopyableCode code="appId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Amazon Q App for which permissions are returned.</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>array</code></td>
    <td>The list of permissions granted for the Amazon Q App.</td>
</tr>
<tr>
    <td><CopyableCode code="resourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon Q App for which permissions are returned.</td>
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
    <td><a href="#describe_q_app_permissions"><CopyableCode code="describe_q_app_permissions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance-id"><code>instance-id</code></a>, <a href="#parameter-appId"><code>appId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes read permissions for a Amazon Q App in Amazon Q Business application environment instance.</td>
</tr>
<tr>
    <td><a href="#update_q_app_permissions"><CopyableCode code="update_q_app_permissions" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance-id"><code>instance-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-appId"><code>appId</code></a></td>
    <td></td>
    <td>Updates read permissions for a Amazon Q App in Amazon Q Business application environment instance.</td>
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
<tr id="parameter-appId">
    <td><CopyableCode code="appId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Amazon Q App for which to retrieve permissions.</td>
</tr>
<tr id="parameter-instance-id">
    <td><CopyableCode code="instance-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Amazon Q Business application environment instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_q_app_permissions"
    values={[
        { label: 'describe_q_app_permissions', value: 'describe_q_app_permissions' }
    ]}
>
<TabItem value="describe_q_app_permissions">

Describes read permissions for a Amazon Q App in Amazon Q Business application environment instance.

```sql
SELECT
appId,
permissions,
resourceArn
FROM aws.qapps.q_app_permissions
WHERE `instance-id` = '{{ instance-id }}' -- required
AND appId = '{{ appId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_q_app_permissions"
    values={[
        { label: 'update_q_app_permissions', value: 'update_q_app_permissions' }
    ]}
>
<TabItem value="update_q_app_permissions">

Updates read permissions for a Amazon Q App in Amazon Q Business application environment instance.

```sql
UPDATE aws.qapps.q_app_permissions
SET 
appId = '{{ appId }}',
grantPermissions = '{{ grantPermissions }}',
revokePermissions = '{{ revokePermissions }}'
WHERE 
`instance-id` = '{{ instance-id }}' --required
AND region = '{{ region }}' --required
AND appId = '{{ appId }}' --required
RETURNING
appId,
permissions,
resourceArn;
```
</TabItem>
</Tabs>
