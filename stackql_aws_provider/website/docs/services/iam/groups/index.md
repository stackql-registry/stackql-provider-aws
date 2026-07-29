--- 
title: groups
hide_title: false
hide_table_of_contents: false
keywords:
  - groups
  - iam
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

Creates, updates, deletes, gets or lists a <code>groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_group"
    values={[
        { label: 'get_group', value: 'get_group' },
        { label: 'list_groups', value: 'list_groups' }
    ]}
>
<TabItem value="get_group">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that identifies the user. For more information about ARNs and how to use ARNs in policies, see IAM Identifiers in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="create_date" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 date-time format, when the user was created.</td>
</tr>
<tr>
    <td><CopyableCode code="password_last_used" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 date-time format, when the user's password was last used to sign in to an Amazon Web Services website. For a list of Amazon Web Services websites that capture a user's last sign-in time, see the Credential reports topic in the IAM User Guide. If a password is used more than once in a five-minute span, only the first use is returned in this field. If the field is null (no value), then it indicates that they never signed in with a password. This can be because: The user never had a password. A password exists but has not been used since IAM started tracking this information on October 20, 2014. A null value does not mean that the user never had a password. Also, if the user does not currently have a password but had one in the past, then this field contains the date and time the most recent password was used. This value is returned only in the GetUser and ListUsers operations.</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>The path to the user. For more information about paths, see IAM identifiers in the IAM User Guide. The ARN of the policy used to set the permissions boundary for the user.</td>
</tr>
<tr>
    <td><CopyableCode code="permissions_boundary" /></td>
    <td><code>string</code></td>
    <td>For more information about permissions boundaries, see Permissions boundaries for IAM identities in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>A list of tags that are associated with the user. For more information about tagging, see Tagging IAM resources in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The stable and unique string identifying the user. For more information about IDs, see IAM identifiers in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="user_name" /></td>
    <td><code>string</code></td>
    <td>The friendly name identifying the user.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_groups">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) specifying the group. For more information about ARNs and how to use them in policies, see IAM identifiers in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="create_date" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 date-time format, when the group was created.</td>
</tr>
<tr>
    <td><CopyableCode code="group_id" /></td>
    <td><code>string</code></td>
    <td>The stable and unique string identifying the group. For more information about IDs, see IAM identifiers in the IAM User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="group_name" /></td>
    <td><code>string</code></td>
    <td>The friendly name that identifies the group.</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>The path to the group. For more information about paths, see IAM identifiers in the IAM User Guide.</td>
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
    <td><a href="#get_group"><CopyableCode code="get_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-GroupName"><code>GroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Returns a list of IAM users that are in the specified IAM group. You can paginate the results using the MaxItems and Marker parameters.</td>
</tr>
<tr>
    <td><a href="#list_groups"><CopyableCode code="list_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-PathPrefix"><code>PathPrefix</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Lists the IAM groups that have the specified path prefix. You can paginate the results using the MaxItems and Marker parameters.</td>
</tr>
<tr>
    <td><a href="#create_group"><CopyableCode code="create_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-GroupName"><code>GroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Path"><code>Path</code></a></td>
    <td>Creates a new group. For information about the number of groups you can create, see IAM and STS quotas in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#add_user_to_group"><CopyableCode code="add_user_to_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-GroupName"><code>GroupName</code></a>, <a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds the specified user to the specified group.</td>
</tr>
<tr>
    <td><a href="#update_group"><CopyableCode code="update_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-GroupName"><code>GroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NewPath"><code>NewPath</code></a>, <a href="#parameter-NewGroupName"><code>NewGroupName</code></a></td>
    <td>Updates the name and/or the path of the specified IAM group. You should understand the implications of changing a group's path or name. For more information, see Renaming users and groups in the IAM User Guide. The person making the request (the principal), must have permission to change the role group with the old name and the new name. For example, to change the group named Managers to MGRs, the principal must have a policy that allows them to update both groups. If the principal has permission to update the Managers group, but not the MGRs group, then the update fails. For more information about permissions, see Access management.</td>
</tr>
<tr>
    <td><a href="#delete_group"><CopyableCode code="delete_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-GroupName"><code>GroupName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified IAM group. The group must not contain any users or have any attached policies.</td>
</tr>
<tr>
    <td><a href="#remove_user_from_group"><CopyableCode code="remove_user_from_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-GroupName"><code>GroupName</code></a>, <a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the specified user from the specified group.</td>
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
<tr id="parameter-GroupName">
    <td><CopyableCode code="GroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the group to update. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</td>
</tr>
<tr id="parameter-UserName">
    <td><CopyableCode code="UserName" /></td>
    <td><code>string</code></td>
    <td>The name of the user to remove. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Use this parameter only when paginating results and only after you receive a response indicating that the results are truncated. Set it to the value of the Marker element in the response that you received to indicate where the next call should start.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>Use this only when paginating results to indicate the maximum number of items you want in the response. If additional items exist beyond the maximum you specify, the IsTruncated response element is true. If you do not include this parameter, the number of items defaults to 100. Note that IAM might return fewer results, even when there are more results available. In that case, the IsTruncated response element returns true, and Marker contains a value to include in the subsequent call that tells the service where to continue from.</td>
</tr>
<tr id="parameter-NewGroupName">
    <td><CopyableCode code="NewGroupName" /></td>
    <td><code>string</code></td>
    <td>New name for the IAM group. Only include this if changing the group's name. IAM user, group, role, and policy names must be unique within the account. Names are not distinguished by case. For example, you cannot create resources named both "MyResource" and "myresource".</td>
</tr>
<tr id="parameter-NewPath">
    <td><CopyableCode code="NewPath" /></td>
    <td><code>string</code></td>
    <td>New path for the IAM group. Only include this if changing the group's path. This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.</td>
</tr>
<tr id="parameter-Path">
    <td><CopyableCode code="Path" /></td>
    <td><code>string</code></td>
    <td>The path to the group. For more information about paths, see IAM identifiers in the IAM User Guide. This parameter is optional. If it is not included, it defaults to a slash (/). This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.</td>
</tr>
<tr id="parameter-PathPrefix">
    <td><CopyableCode code="PathPrefix" /></td>
    <td><code>string</code></td>
    <td>The path prefix for filtering the results. For example, the prefix /division_abc/subdivision_xyz/ gets all groups whose path starts with /division_abc/subdivision_xyz/. This parameter is optional. If it is not included, it defaults to a slash (/), listing all groups. This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (\u0021) through the DEL character (\u007F), including most punctuation characters, digits, and upper and lowercased letters.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_group"
    values={[
        { label: 'get_group', value: 'get_group' },
        { label: 'list_groups', value: 'list_groups' }
    ]}
>
<TabItem value="get_group">

Returns a list of IAM users that are in the specified IAM group. You can paginate the results using the MaxItems and Marker parameters.

```sql
SELECT
arn,
create_date,
password_last_used,
path,
permissions_boundary,
tags,
user_id,
user_name
FROM aws.iam.groups
WHERE GroupName = '{{ GroupName }}' -- required
AND region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
<TabItem value="list_groups">

Lists the IAM groups that have the specified path prefix. You can paginate the results using the MaxItems and Marker parameters.

```sql
SELECT
arn,
create_date,
group_id,
group_name,
path
FROM aws.iam.groups
WHERE region = '{{ region }}' -- required
AND PathPrefix = '{{ PathPrefix }}'
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_group"
    values={[
        { label: 'create_group', value: 'create_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_group">

Creates a new group. For information about the number of groups you can create, see IAM and STS quotas in the IAM User Guide.

```sql
INSERT INTO aws.iam.groups (
GroupName,
region,
Path
)
SELECT 
'{{ GroupName }}',
'{{ region }}',
'{{ Path }}'
RETURNING
arn,
create_date,
group_id,
group_name,
path
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: groups
  props:
    - name: GroupName
      value: "{{ GroupName }}"
      description: Required parameter for the groups resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the groups resource.
    - name: Path
      value: "{{ Path }}"
      description: The path to the group. For more information about paths, see IAM identifiers in the IAM User Guide. This parameter is optional. If it is not included, it defaults to a slash (/). This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (\\u0021) through the DEL character (\\u007F), including most punctuation characters, digits, and upper and lowercased letters.
      description: The path to the group. For more information about paths, see IAM identifiers in the IAM User Guide. This parameter is optional. If it is not included, it defaults to a slash (/). This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (\\u0021) through the DEL character (\\u007F), including most punctuation characters, digits, and upper and lowercased letters.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_user_to_group"
    values={[
        { label: 'add_user_to_group', value: 'add_user_to_group' },
        { label: 'update_group', value: 'update_group' }
    ]}
>
<TabItem value="add_user_to_group">

Adds the specified user to the specified group.

```sql
UPDATE aws.iam.groups
SET 
-- No updatable properties
WHERE 
GroupName = '{{ GroupName }}' --required
AND UserName = '{{ UserName }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="update_group">

Updates the name and/or the path of the specified IAM group. You should understand the implications of changing a group's path or name. For more information, see Renaming users and groups in the IAM User Guide. The person making the request (the principal), must have permission to change the role group with the old name and the new name. For example, to change the group named Managers to MGRs, the principal must have a policy that allows them to update both groups. If the principal has permission to update the Managers group, but not the MGRs group, then the update fails. For more information about permissions, see Access management.

```sql
UPDATE aws.iam.groups
SET 
-- No updatable properties
WHERE 
GroupName = '{{ GroupName }}' --required
AND region = '{{ region }}' --required
AND NewPath = '{{ NewPath}}'
AND NewGroupName = '{{ NewGroupName}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_group"
    values={[
        { label: 'delete_group', value: 'delete_group' }
    ]}
>
<TabItem value="delete_group">

Deletes the specified IAM group. The group must not contain any users or have any attached policies.

```sql
DELETE FROM aws.iam.groups
WHERE GroupName = '{{ GroupName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="remove_user_from_group"
    values={[
        { label: 'remove_user_from_group', value: 'remove_user_from_group' }
    ]}
>
<TabItem value="remove_user_from_group">

Removes the specified user from the specified group.

```sql
EXEC aws.iam.groups.remove_user_from_group 
@GroupName='{{ GroupName }}' --required, 
@UserName='{{ UserName }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
