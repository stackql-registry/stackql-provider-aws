--- 
title: login_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - login_profiles
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

Creates, updates, deletes, gets or lists a <code>login_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="login_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.login_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_login_profile"
    values={[
        { label: 'get_login_profile', value: 'get_login_profile' }
    ]}
>
<TabItem value="get_login_profile">

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
    <td><CopyableCode code="create_date" /></td>
    <td><code>string</code></td>
    <td>The date when the password for the user was created.</td>
</tr>
<tr>
    <td><CopyableCode code="password_reset_required" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the user is required to set a new password on next sign-in.</td>
</tr>
<tr>
    <td><CopyableCode code="user_name" /></td>
    <td><code>string</code></td>
    <td>The name of the user, which can be used for signing in to the Amazon Web Services Management Console.</td>
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
    <td><a href="#get_login_profile"><CopyableCode code="get_login_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-UserName"><code>UserName</code></a></td>
    <td>Retrieves the user name for the specified IAM user. A login profile is created when you create a password for the user to access the Amazon Web Services Management Console. If the user does not exist or does not have a password, the operation returns a 404 (NoSuchEntity) error. If you create an IAM user with access to the console, the CreateDate reflects the date you created the initial password for the user. If you create an IAM user with programmatic access, and then later add a password for the user to access the Amazon Web Services Management Console, the CreateDate reflects the initial password creation date. A user with programmatic access does not have a login profile unless you create a password for the user to access the Amazon Web Services Management Console.</td>
</tr>
<tr>
    <td><a href="#create_login_profile"><CopyableCode code="create_login_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-Password"><code>Password</code></a>, <a href="#parameter-PasswordResetRequired"><code>PasswordResetRequired</code></a></td>
    <td>Creates a password for the specified IAM user. A password allows an IAM user to access Amazon Web Services services through the Amazon Web Services Management Console. You can use the CLI, the Amazon Web Services API, or the Users page in the IAM console to create a password for any IAM user. Use ChangePassword to update your own existing password in the My Security Credentials page in the Amazon Web Services Management Console. For more information about managing passwords, see Managing passwords in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#update_login_profile"><CopyableCode code="update_login_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Password"><code>Password</code></a>, <a href="#parameter-PasswordResetRequired"><code>PasswordResetRequired</code></a></td>
    <td>Changes the password for the specified IAM user. You can use the CLI, the Amazon Web Services API, or the Users page in the IAM console to change the password for any IAM user. Use ChangePassword to change your own password in the My Security Credentials page in the Amazon Web Services Management Console. For more information about modifying passwords, see Managing passwords in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_login_profile"><CopyableCode code="delete_login_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-UserName"><code>UserName</code></a></td>
    <td>Deletes the password for the specified IAM user or root user, For more information, see Managing passwords for IAM users. You can use the CLI, the Amazon Web Services API, or the Users page in the IAM console to delete a password for any IAM user. You can use ChangePassword to update, but not delete, your own password in the My Security Credentials page in the Amazon Web Services Management Console. Deleting a user's password does not prevent a user from accessing Amazon Web Services through the command line interface or the API. To prevent all user access, you must also either make any access keys inactive or delete them. For more information about making keys inactive or deleting them, see UpdateAccessKey and DeleteAccessKey.</td>
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
<tr id="parameter-UserName">
    <td><CopyableCode code="UserName" /></td>
    <td><code>string</code></td>
    <td>The name of the user whose password you want to update. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Password">
    <td><CopyableCode code="Password" /></td>
    <td><code>string</code></td>
    <td>The new password for the specified IAM user. The regex pattern used to validate this parameter is a string of characters consisting of the following: Any printable ASCII character ranging from the space character (\u0020) through the end of the ASCII character range The printable characters in the Basic Latin and Latin-1 Supplement character set (through \u00FF) The special characters tab (\u0009), line feed (\u000A), and carriage return (\u000D) However, the format can be further restricted by the account administrator by setting a password policy on the Amazon Web Services account. For more information, see UpdateAccountPasswordPolicy.</td>
</tr>
<tr id="parameter-PasswordResetRequired">
    <td><CopyableCode code="PasswordResetRequired" /></td>
    <td><code>boolean</code></td>
    <td>Allows this new password to be used only once by requiring the specified IAM user to set a new password on next sign-in.</td>
</tr>
<tr id="parameter-UserName">
    <td><CopyableCode code="UserName" /></td>
    <td><code>string</code></td>
    <td>The name of the user whose password you want to delete. This parameter is optional. If no user name is included, it defaults to the principal making the request. When you make this request with root user credentials, you must use an AssumeRoot session to omit the user name. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_login_profile"
    values={[
        { label: 'get_login_profile', value: 'get_login_profile' }
    ]}
>
<TabItem value="get_login_profile">

Retrieves the user name for the specified IAM user. A login profile is created when you create a password for the user to access the Amazon Web Services Management Console. If the user does not exist or does not have a password, the operation returns a 404 (NoSuchEntity) error. If you create an IAM user with access to the console, the CreateDate reflects the date you created the initial password for the user. If you create an IAM user with programmatic access, and then later add a password for the user to access the Amazon Web Services Management Console, the CreateDate reflects the initial password creation date. A user with programmatic access does not have a login profile unless you create a password for the user to access the Amazon Web Services Management Console.

```sql
SELECT
create_date,
password_reset_required,
user_name
FROM aws.iam.login_profiles
WHERE region = '{{ region }}' -- required
AND UserName = '{{ UserName }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_login_profile"
    values={[
        { label: 'create_login_profile', value: 'create_login_profile' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_login_profile">

Creates a password for the specified IAM user. A password allows an IAM user to access Amazon Web Services services through the Amazon Web Services Management Console. You can use the CLI, the Amazon Web Services API, or the Users page in the IAM console to create a password for any IAM user. Use ChangePassword to update your own existing password in the My Security Credentials page in the Amazon Web Services Management Console. For more information about managing passwords, see Managing passwords in the IAM User Guide.

```sql
INSERT INTO aws.iam.login_profiles (
region,
UserName,
Password,
PasswordResetRequired
)
SELECT 
'{{ region }}',
'{{ UserName }}',
'{{ Password }}',
'{{ PasswordResetRequired }}'
RETURNING
create_date,
password_reset_required,
user_name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: login_profiles
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the login_profiles resource.
    - name: UserName
      value: "{{ UserName }}"
      description: The name of the IAM user to create a password for. The user must already exist. This parameter is optional. If no user name is included, it defaults to the principal making the request. When you make this request with root user credentials, you must use an AssumeRoot session to omit the user name. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
      description: The name of the IAM user to create a password for. The user must already exist. This parameter is optional. If no user name is included, it defaults to the principal making the request. When you make this request with root user credentials, you must use an AssumeRoot session to omit the user name. This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
    - name: Password
      value: "{{ Password }}"
      description: The new password for the user. This parameter must be omitted when you make the request with an AssumeRoot session. It is required in all other cases. The regex pattern that is used to validate this parameter is a string of characters. That string can include almost any printable ASCII character from the space (\\u0020) through the end of the ASCII character range (\\u00FF). You can also include the tab (\\u0009), line feed (\\u000A), and carriage return (\\u000D) characters. Any of these characters are valid in a password. However, many tools, such as the Amazon Web Services Management Console, might restrict the ability to type certain characters because they have special meaning within that tool.
      description: The new password for the user. This parameter must be omitted when you make the request with an AssumeRoot session. It is required in all other cases. The regex pattern that is used to validate this parameter is a string of characters. That string can include almost any printable ASCII character from the space (\\u0020) through the end of the ASCII character range (\\u00FF). You can also include the tab (\\u0009), line feed (\\u000A), and carriage return (\\u000D) characters. Any of these characters are valid in a password. However, many tools, such as the Amazon Web Services Management Console, might restrict the ability to type certain characters because they have special meaning within that tool.
    - name: PasswordResetRequired
      value: {{ PasswordResetRequired }}
      description: Specifies whether the user is required to set a new password on next sign-in.
      description: Specifies whether the user is required to set a new password on next sign-in.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_login_profile"
    values={[
        { label: 'update_login_profile', value: 'update_login_profile' }
    ]}
>
<TabItem value="update_login_profile">

Changes the password for the specified IAM user. You can use the CLI, the Amazon Web Services API, or the Users page in the IAM console to change the password for any IAM user. Use ChangePassword to change your own password in the My Security Credentials page in the Amazon Web Services Management Console. For more information about modifying passwords, see Managing passwords in the IAM User Guide.

```sql
UPDATE aws.iam.login_profiles
SET 
-- No updatable properties
WHERE 
UserName = '{{ UserName }}' --required
AND region = '{{ region }}' --required
AND Password = '{{ Password}}'
AND PasswordResetRequired = {{ PasswordResetRequired}};
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_login_profile"
    values={[
        { label: 'delete_login_profile', value: 'delete_login_profile' }
    ]}
>
<TabItem value="delete_login_profile">

Deletes the password for the specified IAM user or root user, For more information, see Managing passwords for IAM users. You can use the CLI, the Amazon Web Services API, or the Users page in the IAM console to delete a password for any IAM user. You can use ChangePassword to update, but not delete, your own password in the My Security Credentials page in the Amazon Web Services Management Console. Deleting a user's password does not prevent a user from accessing Amazon Web Services through the command line interface or the API. To prevent all user access, you must also either make any access keys inactive or delete them. For more information about making keys inactive or deleting them, see UpdateAccessKey and DeleteAccessKey.

```sql
DELETE FROM aws.iam.login_profiles
WHERE region = '{{ region }}' --required
AND UserName = '{{ UserName }}'
;
```
</TabItem>
</Tabs>
