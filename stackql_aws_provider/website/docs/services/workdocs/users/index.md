--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
  - workdocs
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

Creates, updates, deletes, gets or lists a <code>users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workdocs.users" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_users"
    values={[
        { label: 'describe_users', value: 'describe_users' }
    ]}
>
<TabItem value="describe_users">

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
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the user was created.</td>
</tr>
<tr>
    <td><CopyableCode code="EmailAddress" /></td>
    <td><code>string</code></td>
    <td>The email address of the user. (pattern: &lt;code&gt;&#91;a-zA-Z0-9._%+-&#93;+@&#91;a-zA-Z0-9.-&#93;+\.&#91;a-zA-Z&#93;&#123;2,&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GivenName" /></td>
    <td><code>string</code></td>
    <td>The given name of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the user. (pattern: &lt;code&gt;&#91;&\w+-.@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Locale" /></td>
    <td><code>string</code></td>
    <td>The locale of the user. (en, fr, ko, de, es, ja, ru, zh_CN, zh_TW, pt_BR, default)</td>
</tr>
<tr>
    <td><CopyableCode code="ModifiedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the user was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="OrganizationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the organization. (pattern: &lt;code&gt;&#91;&\w+-.@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RecycleBinFolderId" /></td>
    <td><code>string</code></td>
    <td>The ID of the recycle bin folder. (pattern: &lt;code&gt;&#91;\w+-.@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RootFolderId" /></td>
    <td><code>string</code></td>
    <td>The ID of the root folder. (pattern: &lt;code&gt;&#91;\w+-.@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the user. (ACTIVE, INACTIVE, PENDING)</td>
</tr>
<tr>
    <td><CopyableCode code="Storage" /></td>
    <td><code>object</code></td>
    <td>The storage for the user.</td>
</tr>
<tr>
    <td><CopyableCode code="Surname" /></td>
    <td><code>string</code></td>
    <td>The surname of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="TimeZoneId" /></td>
    <td><code>string</code></td>
    <td>The time zone ID of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of user. (USER, ADMIN, POWERUSER, MINIMALUSER, WORKSPACESUSER)</td>
</tr>
<tr>
    <td><CopyableCode code="Username" /></td>
    <td><code>string</code></td>
    <td>The login name of the user. (pattern: &lt;code&gt;&#91;\w\-+.&#93;+(@&#91;a-zA-Z0-9.\-&#93;+\.&#91;a-zA-Z&#93;+)?&lt;/code&gt;)</td>
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
    <td><a href="#describe_users"><CopyableCode code="describe_users" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a>, <a href="#parameter-organizationId"><code>organizationId</code></a>, <a href="#parameter-userIds"><code>userIds</code></a>, <a href="#parameter-query"><code>query</code></a>, <a href="#parameter-include"><code>include</code></a>, <a href="#parameter-order"><code>order</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-marker"><code>marker</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-fields"><code>fields</code></a></td>
    <td>Describes the specified users. You can describe all users or filter the results (for example, by status or organization). By default, Amazon WorkDocs returns the first 24 active or pending users. If there are more results, the response includes a marker that you can use to request the next set of results.</td>
</tr>
<tr>
    <td><a href="#create_user"><CopyableCode code="create_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GivenName"><code>GivenName</code></a>, <a href="#parameter-Password"><code>Password</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a></td>
    <td>Creates a user in a Simple AD or Microsoft AD directory. The status of a newly created user is "ACTIVE". New users can access Amazon WorkDocs.</td>
</tr>
<tr>
    <td><a href="#update_user"><CopyableCode code="update_user" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a></td>
    <td>Updates the specified attributes of the specified user, and grants or revokes administrative privileges to the Amazon WorkDocs site.</td>
</tr>
<tr>
    <td><a href="#delete_user"><CopyableCode code="delete_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a></td>
    <td>Deletes the specified user from a Simple AD or Microsoft AD directory. Deleting a user immediately and permanently deletes all content in that user's folder structure. Site retention policies do NOT apply to this type of deletion.</td>
</tr>
<tr>
    <td><a href="#activate_user"><CopyableCode code="activate_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a></td>
    <td>Activates the specified user. Only active users can access Amazon WorkDocs.</td>
</tr>
<tr>
    <td><a href="#deactivate_user"><CopyableCode code="deactivate_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a></td>
    <td>Deactivates the specified user, which revokes the user's access to Amazon WorkDocs.</td>
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
<tr id="parameter-user_id">
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the user.</td>
</tr>
<tr id="parameter-Authentication">
    <td><CopyableCode code="Authentication" /></td>
    <td><code>string</code></td>
    <td>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</td>
</tr>
<tr id="parameter-fields">
    <td><CopyableCode code="fields" /></td>
    <td><code>string</code></td>
    <td>A comma-separated list of values. Specify "STORAGE_METADATA" to include the user storage quota and utilization information.</td>
</tr>
<tr id="parameter-include">
    <td><CopyableCode code="include" /></td>
    <td><code>string</code></td>
    <td>The state of the users. Specify "ALL" to include inactive users.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return.</td>
</tr>
<tr id="parameter-marker">
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>The marker for the next set of results. (You received this marker from a previous call.)</td>
</tr>
<tr id="parameter-order">
    <td><CopyableCode code="order" /></td>
    <td><code>string</code></td>
    <td>The order for the results.</td>
</tr>
<tr id="parameter-organizationId">
    <td><CopyableCode code="organizationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the organization.</td>
</tr>
<tr id="parameter-query">
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>A query to filter users by user name. Remember the following about the Userids and Query parameters: If you don't use either parameter, the API returns a paginated list of all users on the site. If you use both parameters, the API ignores the Query parameter. The Userid parameter only returns user names that match a corresponding user ID. The Query parameter runs a "prefix" search for users by the GivenName, SurName, or UserName fields included in a CreateUser API call. For example, querying on Ma returns Márcia Oliveira, María García, and Mateo Jackson. If you use multiple characters, the API only returns data that matches all characters. For example, querying on Ma J only returns Mateo Jackson.</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>The sorting criteria.</td>
</tr>
<tr id="parameter-userIds">
    <td><CopyableCode code="userIds" /></td>
    <td><code>string</code></td>
    <td>The IDs of the users.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_users"
    values={[
        { label: 'describe_users', value: 'describe_users' }
    ]}
>
<TabItem value="describe_users">

Describes the specified users. You can describe all users or filter the results (for example, by status or organization). By default, Amazon WorkDocs returns the first 24 active or pending users. If there are more results, the response includes a marker that you can use to request the next set of results.

```sql
SELECT
CreatedTimestamp,
EmailAddress,
GivenName,
Id,
Locale,
ModifiedTimestamp,
OrganizationId,
RecycleBinFolderId,
RootFolderId,
Status,
Storage,
Surname,
TimeZoneId,
Type,
Username
FROM aws.workdocs.users
WHERE region = '{{ region }}' -- required
AND Authentication = '{{ Authentication }}'
AND organizationId = '{{ organizationId }}'
AND userIds = '{{ userIds }}'
AND query = '{{ query }}'
AND include = '{{ include }}'
AND order = '{{ order }}'
AND sort = '{{ sort }}'
AND marker = '{{ marker }}'
AND limit = '{{ limit }}'
AND fields = '{{ fields }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_user"
    values={[
        { label: 'create_user', value: 'create_user' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_user">

Creates a user in a Simple AD or Microsoft AD directory. The status of a newly created user is "ACTIVE". New users can access Amazon WorkDocs.

```sql
INSERT INTO aws.workdocs.users (
OrganizationId,
Username,
EmailAddress,
GivenName,
Surname,
Password,
TimeZoneId,
StorageRule,
region,
Authentication
)
SELECT 
'{{ OrganizationId }}',
'{{ Username }}',
'{{ EmailAddress }}',
'{{ GivenName }}' /* required */,
'{{ Surname }}',
'{{ Password }}' /* required */,
'{{ TimeZoneId }}',
'{{ StorageRule }}',
'{{ region }}',
'{{ Authentication }}'
RETURNING
User
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: users
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the users resource.
    - name: OrganizationId
      value: "{{ OrganizationId }}"
    - name: Username
      value: "{{ Username }}"
    - name: EmailAddress
      value: "{{ EmailAddress }}"
    - name: GivenName
      value: "{{ GivenName }}"
    - name: Surname
      value: "{{ Surname }}"
    - name: Password
      value: "{{ Password }}"
    - name: TimeZoneId
      value: "{{ TimeZoneId }}"
    - name: StorageRule
      description: |
        Describes the storage for a user.
      value:
        StorageAllocatedInBytes: {{ StorageAllocatedInBytes }}
        StorageType: "{{ StorageType }}"
    - name: Authentication
      value: "{{ Authentication }}"
      description: Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
      description: Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_user"
    values={[
        { label: 'update_user', value: 'update_user' }
    ]}
>
<TabItem value="update_user">

Updates the specified attributes of the specified user, and grants or revokes administrative privileges to the Amazon WorkDocs site.

```sql
UPDATE aws.workdocs.users
SET 
GivenName = '{{ GivenName }}',
Surname = '{{ Surname }}',
Type = '{{ Type }}',
StorageRule = '{{ StorageRule }}',
TimeZoneId = '{{ TimeZoneId }}',
Locale = '{{ Locale }}',
GrantPoweruserPrivileges = '{{ GrantPoweruserPrivileges }}'
WHERE 
user_id = '{{ user_id }}' --required
AND region = '{{ region }}' --required
AND Authentication = '{{ Authentication}}'
RETURNING
User;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_user"
    values={[
        { label: 'delete_user', value: 'delete_user' }
    ]}
>
<TabItem value="delete_user">

Deletes the specified user from a Simple AD or Microsoft AD directory. Deleting a user immediately and permanently deletes all content in that user's folder structure. Site retention policies do NOT apply to this type of deletion.

```sql
DELETE FROM aws.workdocs.users
WHERE user_id = '{{ user_id }}' --required
AND region = '{{ region }}' --required
AND Authentication = '{{ Authentication }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="activate_user"
    values={[
        { label: 'activate_user', value: 'activate_user' },
        { label: 'deactivate_user', value: 'deactivate_user' }
    ]}
>
<TabItem value="activate_user">

Activates the specified user. Only active users can access Amazon WorkDocs.

```sql
EXEC aws.workdocs.users.activate_user 
@user_id='{{ user_id }}' --required, 
@region='{{ region }}' --required, 
@Authentication='{{ Authentication }}'
;
```
</TabItem>
<TabItem value="deactivate_user">

Deactivates the specified user, which revokes the user's access to Amazon WorkDocs.

```sql
EXEC aws.workdocs.users.deactivate_user 
@user_id='{{ user_id }}' --required, 
@region='{{ region }}' --required, 
@Authentication='{{ Authentication }}'
;
```
</TabItem>
</Tabs>
