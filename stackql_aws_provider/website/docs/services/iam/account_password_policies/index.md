--- 
title: account_password_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - account_password_policies
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

Creates, updates, deletes, gets or lists an <code>account_password_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_password_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.account_password_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_account_password_policy"
    values={[
        { label: 'get_account_password_policy', value: 'get_account_password_policy' }
    ]}
>
<TabItem value="get_account_password_policy">

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
    <td><CopyableCode code="allow_users_to_change_password" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether IAM users are allowed to change their own password. Gives IAM users permissions to iam:ChangePassword for only their user and to the iam:GetAccountPasswordPolicy action. This option does not attach a permissions policy to each user, rather the permissions are applied at the account-level for all users by IAM.</td>
</tr>
<tr>
    <td><CopyableCode code="expire_passwords" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether passwords in the account expire. Returns true if MaxPasswordAge contains a value greater than 0. Returns false if MaxPasswordAge is 0 or not present.</td>
</tr>
<tr>
    <td><CopyableCode code="hard_expiry" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether IAM users are prevented from setting a new password via the Amazon Web Services Management Console after their password has expired. The IAM user cannot access the console until an administrator resets the password. IAM users with iam:ChangePassword permission and active access keys can reset their own expired console password using the CLI or API.</td>
</tr>
<tr>
    <td><CopyableCode code="max_password_age" /></td>
    <td><code>integer</code></td>
    <td>The number of days that an IAM user password is valid.</td>
</tr>
<tr>
    <td><CopyableCode code="minimum_password_length" /></td>
    <td><code>integer</code></td>
    <td>Minimum length to require for IAM user passwords.</td>
</tr>
<tr>
    <td><CopyableCode code="password_reuse_prevention" /></td>
    <td><code>integer</code></td>
    <td>Specifies the number of previous passwords that IAM users are prevented from reusing.</td>
</tr>
<tr>
    <td><CopyableCode code="require_lowercase_characters" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether IAM user passwords must contain at least one lowercase character (a to z).</td>
</tr>
<tr>
    <td><CopyableCode code="require_numbers" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether IAM user passwords must contain at least one numeric character (0 to 9).</td>
</tr>
<tr>
    <td><CopyableCode code="require_symbols" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether IAM user passwords must contain at least one of the following symbols: ! @ # $ % ^ & * ( ) _ + - = &#91; &#93; &#123; &#125; | '</td>
</tr>
<tr>
    <td><CopyableCode code="require_uppercase_characters" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether IAM user passwords must contain at least one uppercase character (A to Z).</td>
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
    <td><a href="#get_account_password_policy"><CopyableCode code="get_account_password_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the password policy for the Amazon Web Services account. This tells you the complexity requirements and mandatory rotation periods for the IAM user passwords in your account. For more information about using a password policy, see Managing an IAM password policy.</td>
</tr>
<tr>
    <td><a href="#update_account_password_policy"><CopyableCode code="update_account_password_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MinimumPasswordLength"><code>MinimumPasswordLength</code></a>, <a href="#parameter-RequireSymbols"><code>RequireSymbols</code></a>, <a href="#parameter-RequireNumbers"><code>RequireNumbers</code></a>, <a href="#parameter-RequireUppercaseCharacters"><code>RequireUppercaseCharacters</code></a>, <a href="#parameter-RequireLowercaseCharacters"><code>RequireLowercaseCharacters</code></a>, <a href="#parameter-AllowUsersToChangePassword"><code>AllowUsersToChangePassword</code></a>, <a href="#parameter-MaxPasswordAge"><code>MaxPasswordAge</code></a>, <a href="#parameter-PasswordReusePrevention"><code>PasswordReusePrevention</code></a>, <a href="#parameter-HardExpiry"><code>HardExpiry</code></a></td>
    <td>Updates the password policy settings for the Amazon Web Services account. This operation does not support partial updates. No parameters are required, but if you do not specify a parameter, that parameter's value reverts to its default value. See the Request Parameters section for each parameter's default value. Also note that some parameters do not allow the default parameter to be explicitly set. Instead, to invoke the default value, do not include that parameter when you invoke the operation. For more information about using a password policy, see Managing an IAM password policy in the IAM User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_account_password_policy"><CopyableCode code="delete_account_password_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the password policy for the Amazon Web Services account. There are no parameters.</td>
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
<tr id="parameter-AllowUsersToChangePassword">
    <td><CopyableCode code="AllowUsersToChangePassword" /></td>
    <td><code>boolean</code></td>
    <td>Allows all IAM users in your account to use the Amazon Web Services Management Console to change their own passwords. For more information, see Permitting IAM users to change their own passwords in the IAM User Guide. If you do not specify a value for this parameter, then the operation uses the default value of false. The result is that IAM users in the account do not automatically have permissions to change their own password.</td>
</tr>
<tr id="parameter-HardExpiry">
    <td><CopyableCode code="HardExpiry" /></td>
    <td><code>boolean</code></td>
    <td>Prevents IAM users who are accessing the account via the Amazon Web Services Management Console from setting a new console password after their password has expired. The IAM user cannot access the console until an administrator resets the password. If you do not specify a value for this parameter, then the operation uses the default value of false. The result is that IAM users can change their passwords after they expire and continue to sign in as the user. In the Amazon Web Services Management Console, the custom password policy option Allow users to change their own password gives IAM users permissions to iam:ChangePassword for only their user and to the iam:GetAccountPasswordPolicy action. This option does not attach a permissions policy to each user, rather the permissions are applied at the account-level for all users by IAM. IAM users with iam:ChangePassword permission and active access keys can reset their own expired console password using the CLI or API.</td>
</tr>
<tr id="parameter-MaxPasswordAge">
    <td><CopyableCode code="MaxPasswordAge" /></td>
    <td><code>integer</code></td>
    <td>The number of days that an IAM user password is valid. If you do not specify a value for this parameter, then the operation uses the default value of 0. The result is that IAM user passwords never expire.</td>
</tr>
<tr id="parameter-MinimumPasswordLength">
    <td><CopyableCode code="MinimumPasswordLength" /></td>
    <td><code>integer</code></td>
    <td>The minimum number of characters allowed in an IAM user password. If you do not specify a value for this parameter, then the operation uses the default value of 6.</td>
</tr>
<tr id="parameter-PasswordReusePrevention">
    <td><CopyableCode code="PasswordReusePrevention" /></td>
    <td><code>integer</code></td>
    <td>Specifies the number of previous passwords that IAM users are prevented from reusing. If you do not specify a value for this parameter, then the operation uses the default value of 0. The result is that IAM users are not prevented from reusing previous passwords.</td>
</tr>
<tr id="parameter-RequireLowercaseCharacters">
    <td><CopyableCode code="RequireLowercaseCharacters" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether IAM user passwords must contain at least one lowercase character from the ISO basic Latin alphabet (a to z). If you do not specify a value for this parameter, then the operation uses the default value of false. The result is that passwords do not require at least one lowercase character.</td>
</tr>
<tr id="parameter-RequireNumbers">
    <td><CopyableCode code="RequireNumbers" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether IAM user passwords must contain at least one numeric character (0 to 9). If you do not specify a value for this parameter, then the operation uses the default value of false. The result is that passwords do not require at least one numeric character.</td>
</tr>
<tr id="parameter-RequireSymbols">
    <td><CopyableCode code="RequireSymbols" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether IAM user passwords must contain at least one of the following non-alphanumeric characters: ! @ # $ % ^ & * ( ) _ + - = &#91; &#93; &#123; &#125; | ' If you do not specify a value for this parameter, then the operation uses the default value of false. The result is that passwords do not require at least one symbol character.</td>
</tr>
<tr id="parameter-RequireUppercaseCharacters">
    <td><CopyableCode code="RequireUppercaseCharacters" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether IAM user passwords must contain at least one uppercase character from the ISO basic Latin alphabet (A to Z). If you do not specify a value for this parameter, then the operation uses the default value of false. The result is that passwords do not require at least one uppercase character.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_account_password_policy"
    values={[
        { label: 'get_account_password_policy', value: 'get_account_password_policy' }
    ]}
>
<TabItem value="get_account_password_policy">

Retrieves the password policy for the Amazon Web Services account. This tells you the complexity requirements and mandatory rotation periods for the IAM user passwords in your account. For more information about using a password policy, see Managing an IAM password policy.

```sql
SELECT
allow_users_to_change_password,
expire_passwords,
hard_expiry,
max_password_age,
minimum_password_length,
password_reuse_prevention,
require_lowercase_characters,
require_numbers,
require_symbols,
require_uppercase_characters
FROM aws.iam.account_password_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_account_password_policy"
    values={[
        { label: 'update_account_password_policy', value: 'update_account_password_policy' }
    ]}
>
<TabItem value="update_account_password_policy">

Updates the password policy settings for the Amazon Web Services account. This operation does not support partial updates. No parameters are required, but if you do not specify a parameter, that parameter's value reverts to its default value. See the Request Parameters section for each parameter's default value. Also note that some parameters do not allow the default parameter to be explicitly set. Instead, to invoke the default value, do not include that parameter when you invoke the operation. For more information about using a password policy, see Managing an IAM password policy in the IAM User Guide.

```sql
UPDATE aws.iam.account_password_policies
SET 
-- No updatable properties
WHERE 
region = '{{ region }}' --required
AND MinimumPasswordLength = '{{ MinimumPasswordLength}}'
AND RequireSymbols = {{ RequireSymbols}}
AND RequireNumbers = {{ RequireNumbers}}
AND RequireUppercaseCharacters = {{ RequireUppercaseCharacters}}
AND RequireLowercaseCharacters = {{ RequireLowercaseCharacters}}
AND AllowUsersToChangePassword = {{ AllowUsersToChangePassword}}
AND MaxPasswordAge = '{{ MaxPasswordAge}}'
AND PasswordReusePrevention = '{{ PasswordReusePrevention}}'
AND HardExpiry = {{ HardExpiry}};
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_account_password_policy"
    values={[
        { label: 'delete_account_password_policy', value: 'delete_account_password_policy' }
    ]}
>
<TabItem value="delete_account_password_policy">

Deletes the password policy for the Amazon Web Services account. There are no parameters.

```sql
DELETE FROM aws.iam.account_password_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
