--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
  - workmail
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workmail.users" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_user"
    values={[
        { label: 'describe_user', value: 'describe_user' },
        { label: 'list_users', value: 'list_users' }
    ]}
>
<TabItem value="describe_user">

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
    <td><CopyableCode code="city" /></td>
    <td><code>string</code></td>
    <td>City where the user is located.</td>
</tr>
<tr>
    <td><CopyableCode code="company" /></td>
    <td><code>string</code></td>
    <td>Company of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="country" /></td>
    <td><code>string</code></td>
    <td>Country where the user is located.</td>
</tr>
<tr>
    <td><CopyableCode code="department" /></td>
    <td><code>string</code></td>
    <td>Department of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="disabled_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the user was disabled for WorkMail usage, in UNIX epoch time format.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>The email of the user. (pattern: &lt;code&gt;&#91;a-zA-Z0-9._%+-&#93;&#123;1,64&#125;@&#91;a-zA-Z0-9.-&#93;+\.&#91;a-zA-Z-&#93;&#123;2,&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which the user was enabled for WorkMailusage, in UNIX epoch time format.</td>
</tr>
<tr>
    <td><CopyableCode code="first_name" /></td>
    <td><code>string</code></td>
    <td>First name of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="hidden_from_global_address_list" /></td>
    <td><code>boolean</code></td>
    <td>If enabled, the user is hidden from the global address list.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_provider_identity_store_id" /></td>
    <td><code>string</code></td>
    <td>Identity Store ID from the IAM Identity Center. If this parameter is empty it will be updated automatically when the user logs in for the first time to the mailbox associated with WorkMail. (pattern: &lt;code&gt;^d-&#91;0-9a-f&#93;&#123;10&#125;$|^&#91;0-9a-f&#93;&#123;8&#125;\\b-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-\\b&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="identity_provider_user_id" /></td>
    <td><code>string</code></td>
    <td>User ID from the IAM Identity Center. If this parameter is empty it will be updated automatically when the user logs in for the first time to the mailbox associated with WorkMail. (pattern: &lt;code&gt;^(&#91;0-9a-f&#93;&#123;10&#125;-|)&#91;A-Fa-f0-9&#93;&#123;8&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="initials" /></td>
    <td><code>string</code></td>
    <td>Initials of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="job_title" /></td>
    <td><code>string</code></td>
    <td>Job title of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="last_name" /></td>
    <td><code>string</code></td>
    <td>Last name of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="mailbox_deprovisioned_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the mailbox was removed for the user.</td>
</tr>
<tr>
    <td><CopyableCode code="mailbox_provisioned_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the mailbox was created for the user.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name for the user. (pattern: &lt;code&gt;&#91;\w\-.&#93;+(@&#91;a-zA-Z0-9.\-&#93;+\.&#91;a-zA-Z0-9-&#93;&#123;2,&#125;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="office" /></td>
    <td><code>string</code></td>
    <td>Office where the user is located.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of a user: enabled (registered to WorkMail) or disabled (deregistered or never registered to WorkMail). (ENABLED, DISABLED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="street" /></td>
    <td><code>string</code></td>
    <td>Street where the user is located.</td>
</tr>
<tr>
    <td><CopyableCode code="telephone" /></td>
    <td><code>string</code></td>
    <td>User's contact number.</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the described user.</td>
</tr>
<tr>
    <td><CopyableCode code="user_role" /></td>
    <td><code>string</code></td>
    <td>In certain cases, other entities are modeled as users. If interoperability is enabled, resources are imported into WorkMail as users. Because different WorkMail organizations rely on different directory types, administrators can distinguish between an unregistered user (account is disabled and has a user role) and the directory administrators. The values are USER, RESOURCE, SYSTEM_USER, and REMOTE_USER. (USER, RESOURCE, SYSTEM_USER, REMOTE_USER)</td>
</tr>
<tr>
    <td><CopyableCode code="zip_code" /></td>
    <td><code>string</code></td>
    <td>Zip code of the user.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_users">

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
    <td><CopyableCode code="disabled_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date indicating when the user was disabled from WorkMail use.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>The email of the user. (pattern: &lt;code&gt;&#91;a-zA-Z0-9._%+-&#93;&#123;1,64&#125;@&#91;a-zA-Z0-9.-&#93;+\.&#91;a-zA-Z-&#93;&#123;2,&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date indicating when the user was enabled for WorkMail use.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_provider_identity_store_id" /></td>
    <td><code>string</code></td>
    <td>Identity store ID from the IAM Identity Center. If this parameter is empty it will be updated automatically when the user logs in for the first time to the mailbox associated with WorkMail. (pattern: &lt;code&gt;^d-&#91;0-9a-f&#93;&#123;10&#125;$|^&#91;0-9a-f&#93;&#123;8&#125;\\b-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-\\b&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="identity_provider_user_id" /></td>
    <td><code>string</code></td>
    <td>User ID from the IAM Identity Center. If this parameter is empty it will be updated automatically when the user logs in for the first time to the mailbox associated with WorkMail. (pattern: &lt;code&gt;^(&#91;0-9a-f&#93;&#123;10&#125;-|)&#91;A-Fa-f0-9&#93;&#123;8&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the user. (pattern: &lt;code&gt;&#91;\w\-.&#93;+(@&#91;a-zA-Z0-9.\-&#93;+\.&#91;a-zA-Z0-9-&#93;&#123;2,&#125;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the user, which can be ENABLED, DISABLED, or DELETED. (ENABLED, DISABLED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="user_role" /></td>
    <td><code>string</code></td>
    <td>The role of the user. (USER, RESOURCE, SYSTEM_USER, REMOTE_USER)</td>
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
    <td><a href="#describe_user"><CopyableCode code="describe_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides information regarding the user.</td>
</tr>
<tr>
    <td><a href="#list_users"><CopyableCode code="list_users" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns summaries of the organization's users.</td>
</tr>
<tr>
    <td><a href="#create_user"><CopyableCode code="create_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a>, <a href="#parameter-DisplayName"><code>DisplayName</code></a></td>
    <td></td>
    <td>Creates a user who can be used in WorkMail by calling the RegisterToWorkMail operation.</td>
</tr>
<tr>
    <td><a href="#update_user"><CopyableCode code="update_user" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a>, <a href="#parameter-UserId"><code>UserId</code></a></td>
    <td></td>
    <td>Updates data for the user. To have the latest information, it must be preceded by a DescribeUser call. The dataset in the request should be the one expected when performing another DescribeUser call.</td>
</tr>
<tr>
    <td><a href="#delete_user"><CopyableCode code="delete_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a user from WorkMail and all subsequent systems. Before you can delete a user, the user state must be DISABLED. Use the DescribeUser action to confirm the user state. Deleting a user is permanent and cannot be undone. WorkMail archives user mailboxes for 30 days before they are permanently removed.</td>
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
    defaultValue="describe_user"
    values={[
        { label: 'describe_user', value: 'describe_user' },
        { label: 'list_users', value: 'list_users' }
    ]}
>
<TabItem value="describe_user">

Provides information regarding the user.

```sql
SELECT
city,
company,
country,
department,
disabled_date,
display_name,
email,
enabled_date,
first_name,
hidden_from_global_address_list,
identity_provider_identity_store_id,
identity_provider_user_id,
initials,
job_title,
last_name,
mailbox_deprovisioned_date,
mailbox_provisioned_date,
name,
office,
state,
street,
telephone,
user_id,
user_role,
zip_code
FROM aws.workmail.users
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_users">

Returns summaries of the organization's users.

```sql
SELECT
disabled_date,
display_name,
email,
enabled_date,
id,
identity_provider_identity_store_id,
identity_provider_user_id,
name,
state,
user_role
FROM aws.workmail.users
WHERE region = '{{ region }}' -- required
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

Creates a user who can be used in WorkMail by calling the RegisterToWorkMail operation.

```sql
INSERT INTO aws.workmail.users (
OrganizationId,
Name,
DisplayName,
Password,
Role,
FirstName,
LastName,
HiddenFromGlobalAddressList,
IdentityProviderUserId,
region
)
SELECT 
'{{ OrganizationId }}' /* required */,
'{{ Name }}',
'{{ DisplayName }}' /* required */,
'{{ Password }}',
'{{ Role }}',
'{{ FirstName }}',
'{{ LastName }}',
{{ HiddenFromGlobalAddressList }},
'{{ IdentityProviderUserId }}',
'{{ region }}'
RETURNING
user_id
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
      description: |
        The identifier of the organization for which the user is created.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name for the new user. WorkMail directory user names have a maximum length of 64. All others have a maximum length of 20.
    - name: DisplayName
      value: "{{ DisplayName }}"
      description: |
        The display name for the new user.
    - name: Password
      value: "{{ Password }}"
      description: |
        The password for the new user.
    - name: Role
      value: "{{ Role }}"
      description: |
        The role of the new user. You cannot pass SYSTEM_USER or RESOURCE role in a single request. When a user role is not selected, the default role of USER is selected.
      valid_values: ['USER', 'RESOURCE', 'SYSTEM_USER', 'REMOTE_USER']
    - name: FirstName
      value: "{{ FirstName }}"
      description: |
        The first name of the new user.
    - name: LastName
      value: "{{ LastName }}"
      description: |
        The last name of the new user.
    - name: HiddenFromGlobalAddressList
      value: {{ HiddenFromGlobalAddressList }}
      description: |
        If this parameter is enabled, the user will be hidden from the address book.
    - name: IdentityProviderUserId
      value: "{{ IdentityProviderUserId }}"
      description: |
        User ID from the IAM Identity Center. If this parameter is empty it will be updated automatically when the user logs in for the first time to the mailbox associated with WorkMail.
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

Updates data for the user. To have the latest information, it must be preceded by a DescribeUser call. The dataset in the request should be the one expected when performing another DescribeUser call.

```sql
UPDATE aws.workmail.users
SET 
OrganizationId = '{{ OrganizationId }}',
UserId = '{{ UserId }}',
Role = '{{ Role }}',
DisplayName = '{{ DisplayName }}',
FirstName = '{{ FirstName }}',
LastName = '{{ LastName }}',
HiddenFromGlobalAddressList = {{ HiddenFromGlobalAddressList }},
Initials = '{{ Initials }}',
Telephone = '{{ Telephone }}',
Street = '{{ Street }}',
JobTitle = '{{ JobTitle }}',
City = '{{ City }}',
Company = '{{ Company }}',
ZipCode = '{{ ZipCode }}',
Department = '{{ Department }}',
Country = '{{ Country }}',
Office = '{{ Office }}',
IdentityProviderUserId = '{{ IdentityProviderUserId }}'
WHERE 
region = '{{ region }}' --required
AND OrganizationId = '{{ OrganizationId }}' --required
AND UserId = '{{ UserId }}' --required;
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

Deletes a user from WorkMail and all subsequent systems. Before you can delete a user, the user state must be DISABLED. Use the DescribeUser action to confirm the user state. Deleting a user is permanent and cannot be undone. WorkMail archives user mailboxes for 30 days before they are permanently removed.

```sql
DELETE FROM aws.workmail.users
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
