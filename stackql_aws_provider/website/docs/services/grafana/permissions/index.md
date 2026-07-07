--- 
title: permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - permissions
  - grafana
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

Creates, updates, deletes, gets or lists a <code>permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.grafana.permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_permissions"
    values={[
        { label: 'list_permissions', value: 'list_permissions' }
    ]}
>
<TabItem value="list_permissions">

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
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the user or group has the Admin, Editor, or Viewer role. (ADMIN, EDITOR, VIEWER)</td>
</tr>
<tr>
    <td><CopyableCode code="user" /></td>
    <td><code>object</code></td>
    <td>A structure with the ID of the user or group with this role.</td>
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
    <td><a href="#list_permissions"><CopyableCode code="list_permissions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-userType"><code>userType</code></a>, <a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-groupId"><code>groupId</code></a></td>
    <td>Lists the users and groups who have the Grafana Admin and Editor roles in this workspace. If you use this operation without specifying userId or groupId, the operation returns the roles of all users and groups. If you specify a userId or a groupId, only the roles for that user or group are returned. If you do this, you can specify only one userId or one groupId.</td>
</tr>
<tr>
    <td><a href="#update_permissions"><CopyableCode code="update_permissions" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-updateInstructionBatch"><code>updateInstructionBatch</code></a></td>
    <td></td>
    <td>Updates which users in a workspace have the Grafana Admin or Editor roles.</td>
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
<tr id="parameter-workspace_id">
    <td><CopyableCode code="workspace_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the workspace to update.</td>
</tr>
<tr id="parameter-groupId">
    <td><CopyableCode code="groupId" /></td>
    <td><code>string</code></td>
    <td>(Optional) Limits the results to only the group that matches this ID.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to include in the response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use when requesting the next set of results. You received this token from a previous ListPermissions operation.</td>
</tr>
<tr id="parameter-userId">
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>(Optional) Limits the results to only the user that matches this ID.</td>
</tr>
<tr id="parameter-userType">
    <td><CopyableCode code="userType" /></td>
    <td><code>string</code></td>
    <td>(Optional) If you specify SSO_USER, then only the permissions of IAM Identity Center users are returned. If you specify SSO_GROUP, only the permissions of IAM Identity Center groups are returned.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_permissions"
    values={[
        { label: 'list_permissions', value: 'list_permissions' }
    ]}
>
<TabItem value="list_permissions">

Lists the users and groups who have the Grafana Admin and Editor roles in this workspace. If you use this operation without specifying userId or groupId, the operation returns the roles of all users and groups. If you specify a userId or a groupId, only the roles for that user or group are returned. If you do this, you can specify only one userId or one groupId.

```sql
SELECT
role,
user
FROM aws.grafana.permissions
WHERE workspace_id = '{{ workspace_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND userType = '{{ userType }}'
AND userId = '{{ userId }}'
AND groupId = '{{ groupId }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_permissions"
    values={[
        { label: 'update_permissions', value: 'update_permissions' }
    ]}
>
<TabItem value="update_permissions">

Updates which users in a workspace have the Grafana Admin or Editor roles.

```sql
UPDATE aws.grafana.permissions
SET 
updateInstructionBatch = '{{ updateInstructionBatch }}'
WHERE 
workspace_id = '{{ workspace_id }}' --required
AND region = '{{ region }}' --required
AND updateInstructionBatch = '{{ updateInstructionBatch }}' --required
RETURNING
errors;
```
</TabItem>
</Tabs>
