--- 
title: permission_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - permission_groups
  - finspace_data
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

Creates, updates, deletes, gets or lists a <code>permission_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="permission_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.finspace_data.permission_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_permission_groups"
    values={[
        { label: 'list_permission_groups', value: 'list_permission_groups' },
        { label: 'get_permission_group', value: 'get_permission_group' }
    ]}
>
<TabItem value="list_permission_groups">

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
    <td>The name of the permission group. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="applicationPermissions" /></td>
    <td><code>array</code></td>
    <td>Indicates the permissions that are granted to a specific group for accessing the FinSpace application. When assigning application permissions, be aware that the permission ManageUsersAndGroups allows users to grant themselves or others access to any functionality in their FinSpace environment's application. It should only be granted to trusted users. CreateDataset – Group members can create new datasets. ManageClusters – Group members can manage Apache Spark clusters from FinSpace notebooks. ManageUsersAndGroups – Group members can manage users and permission groups. This is a privileged permission that allows users to grant themselves or others access to any functionality in the application. It should only be granted to trusted users. ManageAttributeSets – Group members can manage attribute sets. ViewAuditData – Group members can view audit data. AccessNotebooks – Group members will have access to FinSpace notebooks. GetTemporaryCredentials – Group members can get temporary API credentials.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>Milliseconds since UTC epoch</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A brief description for the permission group. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>Milliseconds since UTC epoch</td>
</tr>
<tr>
    <td><CopyableCode code="membershipStatus" /></td>
    <td><code>string</code></td>
    <td>Indicates the status of the user within a permission group. ADDITION_IN_PROGRESS – The user is currently being added to the permission group. ADDITION_SUCCESS – The user is successfully added to the permission group. REMOVAL_IN_PROGRESS – The user is currently being removed from the permission group. (ADDITION_IN_PROGRESS, ADDITION_SUCCESS, REMOVAL_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="permissionGroupId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the permission group. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_permission_group">

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
    <td>The name of the permission group. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="applicationPermissions" /></td>
    <td><code>array</code></td>
    <td>Indicates the permissions that are granted to a specific group for accessing the FinSpace application. When assigning application permissions, be aware that the permission ManageUsersAndGroups allows users to grant themselves or others access to any functionality in their FinSpace environment's application. It should only be granted to trusted users. CreateDataset – Group members can create new datasets. ManageClusters – Group members can manage Apache Spark clusters from FinSpace notebooks. ManageUsersAndGroups – Group members can manage users and permission groups. This is a privileged permission that allows users to grant themselves or others access to any functionality in the application. It should only be granted to trusted users. ManageAttributeSets – Group members can manage attribute sets. ViewAuditData – Group members can view audit data. AccessNotebooks – Group members will have access to FinSpace notebooks. GetTemporaryCredentials – Group members can get temporary API credentials.</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>Milliseconds since UTC epoch</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A brief description for the permission group. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>Milliseconds since UTC epoch</td>
</tr>
<tr>
    <td><CopyableCode code="membershipStatus" /></td>
    <td><code>string</code></td>
    <td>Indicates the status of the user within a permission group. ADDITION_IN_PROGRESS – The user is currently being added to the permission group. ADDITION_SUCCESS – The user is successfully added to the permission group. REMOVAL_IN_PROGRESS – The user is currently being removed from the permission group. (ADDITION_IN_PROGRESS, ADDITION_SUCCESS, REMOVAL_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="permissionGroupId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the permission group. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#list_permission_groups"><CopyableCode code="list_permission_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all available permission groups in FinSpace.</td>
</tr>
<tr>
    <td><a href="#get_permission_group"><CopyableCode code="get_permission_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-permission_group_id"><code>permission_group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of a specific permission group.</td>
</tr>
<tr>
    <td><a href="#create_permission_group"><CopyableCode code="create_permission_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-applicationPermissions"><code>applicationPermissions</code></a></td>
    <td></td>
    <td>Creates a group of permissions for various actions that a user can perform in FinSpace.</td>
</tr>
<tr>
    <td><a href="#associate_user_to_permission_group"><CopyableCode code="associate_user_to_permission_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-permission_group_id"><code>permission_group_id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds a user to a permission group to grant permissions for actions a user can perform in FinSpace.</td>
</tr>
<tr>
    <td><a href="#update_permission_group"><CopyableCode code="update_permission_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-permission_group_id"><code>permission_group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Modifies the details of a permission group. You cannot modify a permissionGroupID.</td>
</tr>
<tr>
    <td><a href="#delete_permission_group"><CopyableCode code="delete_permission_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-permission_group_id"><code>permission_group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes a permission group. This action is irreversible.</td>
</tr>
<tr>
    <td><a href="#disassociate_user_from_permission_group"><CopyableCode code="disassociate_user_from_permission_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-permission_group_id"><code>permission_group_id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Removes a user from a permission group.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results per page.</td>
</tr>
<tr id="parameter-permission_group_id">
    <td><CopyableCode code="permission_group_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the permission group.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-user_id">
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the user.</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A token that ensures idempotency. This token expires in 10 minutes.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates where a results page should begin.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_permission_groups"
    values={[
        { label: 'list_permission_groups', value: 'list_permission_groups' },
        { label: 'get_permission_group', value: 'get_permission_group' }
    ]}
>
<TabItem value="list_permission_groups">

Lists all available permission groups in FinSpace.

```sql
SELECT
name,
applicationPermissions,
createTime,
description,
lastModifiedTime,
membershipStatus,
permissionGroupId
FROM aws.finspace_data.permission_groups
WHERE maxResults = '{{ maxResults }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
<TabItem value="get_permission_group">

Retrieves the details of a specific permission group.

```sql
SELECT
name,
applicationPermissions,
createTime,
description,
lastModifiedTime,
membershipStatus,
permissionGroupId
FROM aws.finspace_data.permission_groups
WHERE permission_group_id = '{{ permission_group_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_permission_group"
    values={[
        { label: 'create_permission_group', value: 'create_permission_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_permission_group">

Creates a group of permissions for various actions that a user can perform in FinSpace.

```sql
INSERT INTO aws.finspace_data.permission_groups (
name,
description,
applicationPermissions,
clientToken,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ applicationPermissions }}' /* required */,
'{{ clientToken }}',
'{{ region }}'
RETURNING
permissionGroupId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: permission_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the permission_groups resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: applicationPermissions
      value:
        - "{{ applicationPermissions }}"
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Idempotence Token for API operations
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_user_to_permission_group"
    values={[
        { label: 'associate_user_to_permission_group', value: 'associate_user_to_permission_group' },
        { label: 'update_permission_group', value: 'update_permission_group' }
    ]}
>
<TabItem value="associate_user_to_permission_group">

Adds a user to a permission group to grant permissions for actions a user can perform in FinSpace.

```sql
UPDATE aws.finspace_data.permission_groups
SET 
clientToken = '{{ clientToken }}'
WHERE 
permission_group_id = '{{ permission_group_id }}' --required
AND user_id = '{{ user_id }}' --required
AND region = '{{ region }}' --required
RETURNING
statusCode;
```
</TabItem>
<TabItem value="update_permission_group">

Modifies the details of a permission group. You cannot modify a permissionGroupID.

```sql
UPDATE aws.finspace_data.permission_groups
SET 
name = '{{ name }}',
description = '{{ description }}',
applicationPermissions = '{{ applicationPermissions }}',
clientToken = '{{ clientToken }}'
WHERE 
permission_group_id = '{{ permission_group_id }}' --required
AND region = '{{ region }}' --required
RETURNING
permissionGroupId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_permission_group"
    values={[
        { label: 'delete_permission_group', value: 'delete_permission_group' }
    ]}
>
<TabItem value="delete_permission_group">

Deletes a permission group. This action is irreversible.

```sql
DELETE FROM aws.finspace_data.permission_groups
WHERE permission_group_id = '{{ permission_group_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_user_from_permission_group"
    values={[
        { label: 'disassociate_user_from_permission_group', value: 'disassociate_user_from_permission_group' }
    ]}
>
<TabItem value="disassociate_user_from_permission_group">

Removes a user from a permission group.

```sql
EXEC aws.finspace_data.permission_groups.disassociate_user_from_permission_group 
@permission_group_id='{{ permission_group_id }}' --required, 
@user_id='{{ user_id }}' --required, 
@region='{{ region }}' --required, 
@clientToken='{{ clientToken }}'
;
```
</TabItem>
</Tabs>
