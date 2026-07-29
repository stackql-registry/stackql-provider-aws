--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
  - identitystore
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.identitystore.users" /></td></tr>
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
    <td><CopyableCode code="addresses" /></td>
    <td><code>array</code></td>
    <td>The physical address of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="birthdate" /></td>
    <td><code>string</code></td>
    <td>The user's birthdate in YYYY-MM-DD format. This field returns the stored birthdate information for the user. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;\t\n\r  　&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the user was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or system that created the user.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the user. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;\t\n\r  　&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="emails" /></td>
    <td><code>array</code></td>
    <td>The email address of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="extensions" /></td>
    <td><code>object</code></td>
    <td>A map of explicitly requested attribute extensions associated with the user. Not populated if the user has no requested extensions.</td>
</tr>
<tr>
    <td><CopyableCode code="external_ids" /></td>
    <td><code>array</code></td>
    <td>A list of ExternalId objects that contains the identifiers issued to this resource by an external identity provider.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_store_id" /></td>
    <td><code>string</code></td>
    <td>The globally unique identifier for the identity store. (pattern: &lt;code&gt;d-&#91;0-9a-f&#93;&#123;10&#125;$|^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="locale" /></td>
    <td><code>string</code></td>
    <td>A string containing the geographical region or location of the user. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;\t\n\r  　&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>object</code></td>
    <td>The name of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="nick_name" /></td>
    <td><code>string</code></td>
    <td>An alternative descriptive name for the user. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;\t\n\r  　&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="phone_numbers" /></td>
    <td><code>array</code></td>
    <td>A list of PhoneNumber objects associated with a user.</td>
</tr>
<tr>
    <td><CopyableCode code="photos" /></td>
    <td><code>array</code></td>
    <td>A list of photos associated with the user. Returns up to 3 photos with their associated metadata including type, display name, and primary designation.</td>
</tr>
<tr>
    <td><CopyableCode code="preferred_language" /></td>
    <td><code>string</code></td>
    <td>The preferred language of the user. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;\t\n\r  　&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="profile_url" /></td>
    <td><code>string</code></td>
    <td>A URL link for the user's profile. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;\t\n\r  　&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="roles" /></td>
    <td><code>array</code></td>
    <td>The roles of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="timezone" /></td>
    <td><code>string</code></td>
    <td>The time zone for a user. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;\t\n\r  　&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>A string containing the title of the user. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;\t\n\r  　&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the user was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or system that last updated the user.</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for a user in the identity store. (pattern: &lt;code&gt;(&#91;0-9a-f&#93;&#123;10&#125;-|)&#91;A-Fa-f0-9&#93;&#123;8&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="user_name" /></td>
    <td><code>string</code></td>
    <td>A unique string used to identify the user. The length limit is 128 characters. This value can consist of letters, accented characters, symbols, numbers, and punctuation. This value is specified at the time the user is created and stored as an attribute of the user object in the identity store. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="user_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the user account. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="user_type" /></td>
    <td><code>string</code></td>
    <td>A string indicating the type of user. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;\t\n\r  　&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="website" /></td>
    <td><code>string</code></td>
    <td>The user's personal website or blog URL. Returns the stored website information for the user. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;\t\n\r  　&#93;+&lt;/code&gt;)</td>
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
    <td><CopyableCode code="addresses" /></td>
    <td><code>array</code></td>
    <td>A list of Address objects containing addresses associated with the user.</td>
</tr>
<tr>
    <td><CopyableCode code="birthdate" /></td>
    <td><code>string</code></td>
    <td>The user's birthdate in YYYY-MM-DD format. This field stores personal birthdate information for the user. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;\t\n\r  　&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the user was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or system that created the user.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>A string containing the name of the user that is formatted for display when the user is referenced. For example, "John Doe." Prefix search supports a maximum of 1,000 characters for the string. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;\t\n\r  　&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="emails" /></td>
    <td><code>array</code></td>
    <td>A list of Email objects containing email addresses associated with the user.</td>
</tr>
<tr>
    <td><CopyableCode code="extensions" /></td>
    <td><code>object</code></td>
    <td>A map of explicitly requested attribute extensions associated with the user. Not populated if the user has no requested extensions.</td>
</tr>
<tr>
    <td><CopyableCode code="external_ids" /></td>
    <td><code>array</code></td>
    <td>A list of ExternalId objects that contains the identifiers issued to this resource by an external identity provider.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_store_id" /></td>
    <td><code>string</code></td>
    <td>The globally unique identifier for the identity store. (pattern: &lt;code&gt;d-&#91;0-9a-f&#93;&#123;10&#125;$|^&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="locale" /></td>
    <td><code>string</code></td>
    <td>A string containing the geographical region or location of the user. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;\t\n\r  　&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>object</code></td>
    <td>An object containing the name of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="nick_name" /></td>
    <td><code>string</code></td>
    <td>A string containing an alternate name for the user. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;\t\n\r  　&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="phone_numbers" /></td>
    <td><code>array</code></td>
    <td>A list of PhoneNumber objects containing phone numbers associated with the user.</td>
</tr>
<tr>
    <td><CopyableCode code="photos" /></td>
    <td><code>array</code></td>
    <td>A list of photos associated with the user. Users can have up to 3 photos with metadata including type, display name, and primary designation.</td>
</tr>
<tr>
    <td><CopyableCode code="preferred_language" /></td>
    <td><code>string</code></td>
    <td>A string containing the preferred language of the user. For example, "American English" or "en-us." (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;\t\n\r  　&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="profile_url" /></td>
    <td><code>string</code></td>
    <td>A string containing a URL that might be associated with the user. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;\t\n\r  　&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="roles" /></td>
    <td><code>array</code></td>
    <td>A list of Role objects containing roles associated with the user.</td>
</tr>
<tr>
    <td><CopyableCode code="timezone" /></td>
    <td><code>string</code></td>
    <td>A string containing the time zone of the user. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;\t\n\r  　&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>A string containing the title of the user. Possible values are left unspecified. The value can vary based on your specific use case. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;\t\n\r  　&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the user was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user or system that last updated the user.</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for a user in the identity store. (pattern: &lt;code&gt;(&#91;0-9a-f&#93;&#123;10&#125;-|)&#91;A-Fa-f0-9&#93;&#123;8&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="user_name" /></td>
    <td><code>string</code></td>
    <td>A unique string used to identify the user. The length limit is 128 characters. This value can consist of letters, accented characters, symbols, numbers, and punctuation. This value is specified at the time the user is created and stored as an attribute of the user object in the identity store. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="user_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the user account. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="user_type" /></td>
    <td><code>string</code></td>
    <td>A string indicating the type of user. Possible values are left unspecified. The value can vary based on your specific use case. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;\t\n\r  　&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="website" /></td>
    <td><code>string</code></td>
    <td>The user's personal website or blog URL. This field stores website information for personal or professional use. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;\t\n\r  　&#93;+&lt;/code&gt;)</td>
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
    <td>Retrieves the user metadata and attributes from the UserId in an identity store. If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the IAM Identity Center User Guide.</td>
</tr>
<tr>
    <td><a href="#list_users"><CopyableCode code="list_users" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all users in the identity store. Returns a paginated list of complete User objects. Filtering for a User by the UserName attribute is deprecated. Instead, use the GetUserId API action. If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the IAM Identity Center User Guide.</td>
</tr>
<tr>
    <td><a href="#create_user"><CopyableCode code="create_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IdentityStoreId"><code>IdentityStoreId</code></a></td>
    <td></td>
    <td>Creates a user within the specified identity store.</td>
</tr>
<tr>
    <td><a href="#update_user"><CopyableCode code="update_user" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IdentityStoreId"><code>IdentityStoreId</code></a>, <a href="#parameter-UserId"><code>UserId</code></a>, <a href="#parameter-Operations"><code>Operations</code></a></td>
    <td></td>
    <td>Updates the specified user metadata and attributes in the specified identity store.</td>
</tr>
<tr>
    <td><a href="#delete_user"><CopyableCode code="delete_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a user within an identity store given UserId.</td>
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

Retrieves the user metadata and attributes from the UserId in an identity store. If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the IAM Identity Center User Guide.

```sql
SELECT
addresses,
birthdate,
created_at,
created_by,
display_name,
emails,
extensions,
external_ids,
identity_store_id,
locale,
name,
nick_name,
phone_numbers,
photos,
preferred_language,
profile_url,
roles,
timezone,
title,
updated_at,
updated_by,
user_id,
user_name,
user_status,
user_type,
website
FROM aws.identitystore.users
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_users">

Lists all users in the identity store. Returns a paginated list of complete User objects. Filtering for a User by the UserName attribute is deprecated. Instead, use the GetUserId API action. If you have access to a member account, you can use this API operation from the member account. For more information, see Limiting access to the identity store from member accounts in the IAM Identity Center User Guide.

```sql
SELECT
addresses,
birthdate,
created_at,
created_by,
display_name,
emails,
extensions,
external_ids,
identity_store_id,
locale,
name,
nick_name,
phone_numbers,
photos,
preferred_language,
profile_url,
roles,
timezone,
title,
updated_at,
updated_by,
user_id,
user_name,
user_status,
user_type,
website
FROM aws.identitystore.users
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

Creates a user within the specified identity store.

```sql
INSERT INTO aws.identitystore.users (
IdentityStoreId,
UserName,
Name,
DisplayName,
NickName,
ProfileUrl,
Emails,
Addresses,
PhoneNumbers,
UserType,
Title,
PreferredLanguage,
Locale,
Timezone,
Photos,
Website,
Birthdate,
Roles,
Extensions,
region
)
SELECT 
'{{ IdentityStoreId }}' /* required */,
'{{ UserName }}',
'{{ Name }}',
'{{ DisplayName }}',
'{{ NickName }}',
'{{ ProfileUrl }}',
'{{ Emails }}',
'{{ Addresses }}',
'{{ PhoneNumbers }}',
'{{ UserType }}',
'{{ Title }}',
'{{ PreferredLanguage }}',
'{{ Locale }}',
'{{ Timezone }}',
'{{ Photos }}',
'{{ Website }}',
'{{ Birthdate }}',
'{{ Roles }}',
'{{ Extensions }}',
'{{ region }}'
RETURNING
identity_store_id,
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
    - name: IdentityStoreId
      value: "{{ IdentityStoreId }}"
      description: |
        The globally unique identifier for the identity store.
    - name: UserName
      value: "{{ UserName }}"
      description: |
        A unique string used to identify the user. The length limit is 128 characters. This value can consist of letters, accented characters, symbols, numbers, and punctuation. This value is specified at the time the user is created and stored as an attribute of the user object in the identity store. Administrator and AWSAdministrators are reserved names and can't be used for users or groups.
    - name: Name
      description: |
        An object containing the name of the user. When used in IAM Identity Center, this parameter is required.
      value:
        Formatted: "{{ Formatted }}"
        FamilyName: "{{ FamilyName }}"
        GivenName: "{{ GivenName }}"
        MiddleName: "{{ MiddleName }}"
        HonorificPrefix: "{{ HonorificPrefix }}"
        HonorificSuffix: "{{ HonorificSuffix }}"
    - name: DisplayName
      value: "{{ DisplayName }}"
      description: |
        A string containing the name of the user. This value is typically formatted for display when the user is referenced. For example, "John Doe." When used in IAM Identity Center, this parameter is required.
    - name: NickName
      value: "{{ NickName }}"
      description: |
        A string containing an alternate name for the user.
    - name: ProfileUrl
      value: "{{ ProfileUrl }}"
      description: |
        A string containing a URL that might be associated with the user.
    - name: Emails
      description: |
        A list of Email objects containing email addresses associated with the user.
      value:
        - Value: "{{ Value }}"
          Type: "{{ Type }}"
          Primary: {{ Primary }}
    - name: Addresses
      description: |
        A list of Address objects containing addresses associated with the user.
      value:
        - StreetAddress: "{{ StreetAddress }}"
          Locality: "{{ Locality }}"
          Region: "{{ Region }}"
          PostalCode: "{{ PostalCode }}"
          Country: "{{ Country }}"
          Formatted: "{{ Formatted }}"
          Type: "{{ Type }}"
          Primary: {{ Primary }}
    - name: PhoneNumbers
      description: |
        A list of PhoneNumber objects containing phone numbers associated with the user.
      value:
        - Value: "{{ Value }}"
          Type: "{{ Type }}"
          Primary: {{ Primary }}
    - name: UserType
      value: "{{ UserType }}"
      description: |
        A string indicating the type of user. Possible values are left unspecified. The value can vary based on your specific use case.
    - name: Title
      value: "{{ Title }}"
      description: |
        A string containing the title of the user. Possible values are left unspecified. The value can vary based on your specific use case.
    - name: PreferredLanguage
      value: "{{ PreferredLanguage }}"
      description: |
        A string containing the preferred language of the user. For example, "American English" or "en-us."
    - name: Locale
      value: "{{ Locale }}"
      description: |
        A string containing the geographical region or location of the user.
    - name: Timezone
      value: "{{ Timezone }}"
      description: |
        A string containing the time zone of the user.
    - name: Photos
      description: |
        A list of photos associated with the user. You can add up to 3 photos per user. Each photo can include a value, type, display name, and primary designation.
      value:
        - Value: "{{ Value }}"
          Type: "{{ Type }}"
          Display: "{{ Display }}"
          Primary: {{ Primary }}
    - name: Website
      value: "{{ Website }}"
      description: |
        The user's personal website or blog URL. This field allows users to provide a link to their personal or professional website.
    - name: Birthdate
      value: "{{ Birthdate }}"
      description: |
        The user's birthdate in YYYY-MM-DD format. This field supports standard date format for storing personal information.
    - name: Roles
      description: |
        A list of Role objects containing roles associated with the user.
      value:
        - Value: "{{ Value }}"
          Type: "{{ Type }}"
          Primary: {{ Primary }}
    - name: Extensions
      value: "{{ Extensions }}"
      description: |
        A map with additional attribute extensions for the user. Each map key corresponds to an extension name, while map values represent extension data in Document type (not supported by Java V1, Go V1 and older versions of the CLI). aws:identitystore:enterprise is the only supported extension name.
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

Updates the specified user metadata and attributes in the specified identity store.

```sql
UPDATE aws.identitystore.users
SET 
IdentityStoreId = '{{ IdentityStoreId }}',
UserId = '{{ UserId }}',
Operations = '{{ Operations }}'
WHERE 
region = '{{ region }}' --required
AND IdentityStoreId = '{{ IdentityStoreId }}' --required
AND UserId = '{{ UserId }}' --required
AND Operations = '{{ Operations }}' --required;
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

Deletes a user within an identity store given UserId.

```sql
DELETE FROM aws.identitystore.users
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
