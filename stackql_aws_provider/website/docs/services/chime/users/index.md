--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
  - chime
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime.users" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_user"
    values={[
        { label: 'get_user', value: 'get_user' },
        { label: 'list_users', value: 'list_users' }
    ]}
>
<TabItem value="get_user">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Chime account ID.</td>
</tr>
<tr>
    <td><CopyableCode code="alexa_for_business_metadata" /></td>
    <td><code>object</code></td>
    <td>The Alexa for Business metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="invited_on" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time when the user is invited to the Amazon Chime account, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="license_type" /></td>
    <td><code>string</code></td>
    <td>The license type for the user. (Basic, Plus, Pro, ProTrial)</td>
</tr>
<tr>
    <td><CopyableCode code="personal_pin" /></td>
    <td><code>string</code></td>
    <td>The user's personal meeting PIN.</td>
</tr>
<tr>
    <td><CopyableCode code="primary_email" /></td>
    <td><code>string</code></td>
    <td>The primary email address of the user. (pattern: &lt;code&gt;.+@.+\..+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="primary_provisioned_number" /></td>
    <td><code>string</code></td>
    <td>The primary phone number associated with the user.</td>
</tr>
<tr>
    <td><CopyableCode code="registered_on" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time when the user is registered, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The user ID.</td>
</tr>
<tr>
    <td><CopyableCode code="user_invitation_status" /></td>
    <td><code>string</code></td>
    <td>The user invite status. (Pending, Accepted, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="user_registration_status" /></td>
    <td><code>string</code></td>
    <td>The user registration status. (Unregistered, Registered, Suspended)</td>
</tr>
<tr>
    <td><CopyableCode code="user_type" /></td>
    <td><code>string</code></td>
    <td>The user type. (PrivateUser, SharedDevice)</td>
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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Chime account ID.</td>
</tr>
<tr>
    <td><CopyableCode code="alexa_for_business_metadata" /></td>
    <td><code>object</code></td>
    <td>The Alexa for Business metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="invited_on" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time when the user is invited to the Amazon Chime account, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="license_type" /></td>
    <td><code>string</code></td>
    <td>The license type for the user. (Basic, Plus, Pro, ProTrial)</td>
</tr>
<tr>
    <td><CopyableCode code="personal_pin" /></td>
    <td><code>string</code></td>
    <td>The user's personal meeting PIN.</td>
</tr>
<tr>
    <td><CopyableCode code="primary_email" /></td>
    <td><code>string</code></td>
    <td>The primary email address of the user. (pattern: &lt;code&gt;.+@.+\..+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="primary_provisioned_number" /></td>
    <td><code>string</code></td>
    <td>The primary phone number associated with the user.</td>
</tr>
<tr>
    <td><CopyableCode code="registered_on" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time when the user is registered, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The user ID.</td>
</tr>
<tr>
    <td><CopyableCode code="user_invitation_status" /></td>
    <td><code>string</code></td>
    <td>The user invite status. (Pending, Accepted, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="user_registration_status" /></td>
    <td><code>string</code></td>
    <td>The user registration status. (Unregistered, Registered, Suspended)</td>
</tr>
<tr>
    <td><CopyableCode code="user_type" /></td>
    <td><code>string</code></td>
    <td>The user type. (PrivateUser, SharedDevice)</td>
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
    <td><a href="#get_user"><CopyableCode code="get_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details for the specified user ID, such as primary email address, license type,and personal meeting PIN. To retrieve user details with an email address instead of a user ID, use the ListUsers action, and then filter by email address.</td>
</tr>
<tr>
    <td><a href="#list_users"><CopyableCode code="list_users" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-user-email"><code>user-email</code></a>, <a href="#parameter-user-type"><code>user-type</code></a>, <a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Lists the users that belong to the specified Amazon Chime account. You can specify an email address to list only the user that the email address belongs to.</td>
</tr>
<tr>
    <td><a href="#create_user"><CopyableCode code="create_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a user under the specified Amazon Chime account.</td>
</tr>
<tr>
    <td><a href="#associate_phone_number_with_user"><CopyableCode code="associate_phone_number_with_user" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-E164PhoneNumber"><code>E164PhoneNumber</code></a></td>
    <td></td>
    <td>Associates a phone number with the specified Amazon Chime user.</td>
</tr>
<tr>
    <td><a href="#update_user"><CopyableCode code="update_user" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates user details for a specified user ID. Currently, only LicenseType updates are supported for this action.</td>
</tr>
<tr>
    <td><a href="#disassociate_phone_number_from_user"><CopyableCode code="disassociate_phone_number_from_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates the primary provisioned phone number from the specified Amazon Chime user.</td>
</tr>
<tr>
    <td><a href="#invite_users"><CopyableCode code="invite_users" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserEmailList"><code>UserEmailList</code></a></td>
    <td></td>
    <td>Sends email to a maximum of 50 users, inviting them to the specified Amazon Chime Team account. Only Team account types are currently supported for this action.</td>
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
<tr id="parameter-account_id">
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Chime account ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-user_id">
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The user ID.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call. Defaults to 100.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results.</td>
</tr>
<tr id="parameter-user-email">
    <td><CopyableCode code="user-email" /></td>
    <td><code>string</code></td>
    <td>Optional. The user email address used to filter results. Maximum 1.</td>
</tr>
<tr id="parameter-user-type">
    <td><CopyableCode code="user-type" /></td>
    <td><code>string</code></td>
    <td>The user type.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_user"
    values={[
        { label: 'get_user', value: 'get_user' },
        { label: 'list_users', value: 'list_users' }
    ]}
>
<TabItem value="get_user">

Retrieves details for the specified user ID, such as primary email address, license type,and personal meeting PIN. To retrieve user details with an email address instead of a user ID, use the ListUsers action, and then filter by email address.

```sql
SELECT
account_id,
alexa_for_business_metadata,
display_name,
invited_on,
license_type,
personal_pin,
primary_email,
primary_provisioned_number,
registered_on,
user_id,
user_invitation_status,
user_registration_status,
user_type
FROM aws.chime.users
WHERE account_id = '{{ account_id }}' -- required
AND user_id = '{{ user_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_users">

Lists the users that belong to the specified Amazon Chime account. You can specify an email address to list only the user that the email address belongs to.

```sql
SELECT
account_id,
alexa_for_business_metadata,
display_name,
invited_on,
license_type,
personal_pin,
primary_email,
primary_provisioned_number,
registered_on,
user_id,
user_invitation_status,
user_registration_status,
user_type
FROM aws.chime.users
WHERE account_id = '{{ account_id }}' -- required
AND region = '{{ region }}' -- required
AND `user-email` = '{{ user-email }}'
AND `user-type` = '{{ user-type }}'
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
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

Creates a user under the specified Amazon Chime account.

```sql
INSERT INTO aws.chime.users (
Username,
Email,
UserType,
account_id,
region
)
SELECT 
'{{ Username }}',
'{{ Email }}',
'{{ UserType }}',
'{{ account_id }}',
'{{ region }}'
RETURNING
user
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: users
  props:
    - name: account_id
      value: "{{ account_id }}"
      description: Required parameter for the users resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the users resource.
    - name: Username
      value: "{{ Username }}"
    - name: Email
      value: "{{ Email }}"
    - name: UserType
      value: "{{ UserType }}"
      valid_values: ['PrivateUser', 'SharedDevice']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_phone_number_with_user"
    values={[
        { label: 'associate_phone_number_with_user', value: 'associate_phone_number_with_user' },
        { label: 'update_user', value: 'update_user' }
    ]}
>
<TabItem value="associate_phone_number_with_user">

Associates a phone number with the specified Amazon Chime user.

```sql
UPDATE aws.chime.users
SET 
E164PhoneNumber = '{{ E164PhoneNumber }}'
WHERE 
account_id = '{{ account_id }}' --required
AND user_id = '{{ user_id }}' --required
AND region = '{{ region }}' --required
AND E164PhoneNumber = '{{ E164PhoneNumber }}' --required;
```
</TabItem>
<TabItem value="update_user">

Updates user details for a specified user ID. Currently, only LicenseType updates are supported for this action.

```sql
UPDATE aws.chime.users
SET 
LicenseType = '{{ LicenseType }}',
UserType = '{{ UserType }}',
AlexaForBusinessMetadata = '{{ AlexaForBusinessMetadata }}'
WHERE 
account_id = '{{ account_id }}' --required
AND user_id = '{{ user_id }}' --required
AND region = '{{ region }}' --required
RETURNING
user;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_phone_number_from_user"
    values={[
        { label: 'disassociate_phone_number_from_user', value: 'disassociate_phone_number_from_user' },
        { label: 'invite_users', value: 'invite_users' }
    ]}
>
<TabItem value="disassociate_phone_number_from_user">

Disassociates the primary provisioned phone number from the specified Amazon Chime user.

```sql
EXEC aws.chime.users.disassociate_phone_number_from_user 
@account_id='{{ account_id }}' --required, 
@user_id='{{ user_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="invite_users">

Sends email to a maximum of 50 users, inviting them to the specified Amazon Chime Team account. Only Team account types are currently supported for this action.

```sql
EXEC aws.chime.users.invite_users 
@account_id='{{ account_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"UserEmailList": "{{ UserEmailList }}", 
"UserType": "{{ UserType }}"
}'
;
```
</TabItem>
</Tabs>
