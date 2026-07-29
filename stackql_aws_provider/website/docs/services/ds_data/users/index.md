--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
  - ds_data
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ds_data.users" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_users"
    values={[
        { label: 'search_users', value: 'search_users' },
        { label: 'describe_user', value: 'describe_user' },
        { label: 'list_users', value: 'list_users' }
    ]}
>
<TabItem value="search_users">

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
    <td><CopyableCode code="distinguished_name" /></td>
    <td><code>string</code></td>
    <td>The distinguished name of the object.</td>
</tr>
<tr>
    <td><CopyableCode code="email_address" /></td>
    <td><code>string</code></td>
    <td>The email address of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the user account is active.</td>
</tr>
<tr>
    <td><CopyableCode code="given_name" /></td>
    <td><code>string</code></td>
    <td>The first name of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="other_attributes" /></td>
    <td><code>object</code></td>
    <td>An expression that includes one or more attributes, data types, and values of a user.</td>
</tr>
<tr>
    <td><CopyableCode code="sam_account_name" /></td>
    <td><code>string</code></td>
    <td>The name of the user. (pattern: &lt;code&gt;^&#91;\w\-.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sid" /></td>
    <td><code>string</code></td>
    <td>The unique security identifier (SID) of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="surname" /></td>
    <td><code>string</code></td>
    <td>The last name of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="user_principal_name" /></td>
    <td><code>string</code></td>
    <td>The UPN that is an internet-style login name for a user and based on the internet standard RFC 822. The UPN is shorter than the distinguished name and easier to remember.</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="directory_id" /></td>
    <td><code>string</code></td>
    <td>The identifier (ID) of the directory that's associated with the user. (pattern: &lt;code&gt;^d-&#91;0-9a-f&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="distinguished_name" /></td>
    <td><code>string</code></td>
    <td>The distinguished name of the object.</td>
</tr>
<tr>
    <td><CopyableCode code="email_address" /></td>
    <td><code>string</code></td>
    <td>The email address of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the user account is active.</td>
</tr>
<tr>
    <td><CopyableCode code="given_name" /></td>
    <td><code>string</code></td>
    <td>The first name of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="other_attributes" /></td>
    <td><code>object</code></td>
    <td>The attribute values that are returned for the attribute names that are included in the request. Attribute names are case insensitive.</td>
</tr>
<tr>
    <td><CopyableCode code="realm" /></td>
    <td><code>string</code></td>
    <td>The domain name that's associated with the user. (pattern: &lt;code&gt;^(&#91;a-zA-Z0-9&#93;+&#91;\\.-&#93;)+(&#91;a-zA-Z0-9&#93;)+&#91;.&#93;?$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sam_account_name" /></td>
    <td><code>string</code></td>
    <td>The name of the user. (pattern: &lt;code&gt;^&#91;\w\-.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sid" /></td>
    <td><code>string</code></td>
    <td>The unique security identifier (SID) of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="surname" /></td>
    <td><code>string</code></td>
    <td>The last name of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="user_principal_name" /></td>
    <td><code>string</code></td>
    <td>The UPN that is an Internet-style login name for a user and is based on the Internet standard RFC 822. The UPN is shorter than the distinguished name and easier to remember.</td>
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
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the user account is active.</td>
</tr>
<tr>
    <td><CopyableCode code="given_name" /></td>
    <td><code>string</code></td>
    <td>The first name of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="sam_account_name" /></td>
    <td><code>string</code></td>
    <td>The name of the user. (pattern: &lt;code&gt;^&#91;\w\-.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sid" /></td>
    <td><code>string</code></td>
    <td>The unique security identifier (SID) of the user.</td>
</tr>
<tr>
    <td><CopyableCode code="surname" /></td>
    <td><code>string</code></td>
    <td>The last name of the user.</td>
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
    <td><a href="#search_users"><CopyableCode code="search_users" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches the specified directory for a user. You can find users that match the SearchString parameter with the value of their attributes included in the SearchString parameter. This operation supports pagination with the use of the NextToken request and response parameters. If more results are available, the SearchUsers.NextToken member contains a token that you pass in the next call to SearchUsers. This retrieves the next set of items. You can also specify a maximum number of return results with the MaxResults parameter.</td>
</tr>
<tr>
    <td><a href="#describe_user"><CopyableCode code="describe_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specific user.</td>
</tr>
<tr>
    <td><a href="#list_users"><CopyableCode code="list_users" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns user information for the specified directory. This operation supports pagination with the use of the NextToken request and response parameters. If more results are available, the ListUsers.NextToken member contains a token that you pass in the next call to ListUsers. This retrieves the next set of items. You can also specify a maximum number of return results with the MaxResults parameter.</td>
</tr>
<tr>
    <td><a href="#create_user"><CopyableCode code="create_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SAMAccountName"><code>SAMAccountName</code></a></td>
    <td></td>
    <td>Creates a new user.</td>
</tr>
<tr>
    <td><a href="#update_user"><CopyableCode code="update_user" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SAMAccountName"><code>SAMAccountName</code></a></td>
    <td></td>
    <td>Updates user information.</td>
</tr>
<tr>
    <td><a href="#delete_user"><CopyableCode code="delete_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a user.</td>
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
<tr id="parameter-DirectoryId">
    <td><CopyableCode code="DirectoryId" /></td>
    <td><code>string</code></td>
    <td>The identifier (ID) of the directory that's associated with the user.</td>
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
    defaultValue="search_users"
    values={[
        { label: 'search_users', value: 'search_users' },
        { label: 'describe_user', value: 'describe_user' },
        { label: 'list_users', value: 'list_users' }
    ]}
>
<TabItem value="search_users">

Searches the specified directory for a user. You can find users that match the SearchString parameter with the value of their attributes included in the SearchString parameter. This operation supports pagination with the use of the NextToken request and response parameters. If more results are available, the SearchUsers.NextToken member contains a token that you pass in the next call to SearchUsers. This retrieves the next set of items. You can also specify a maximum number of return results with the MaxResults parameter.

```sql
SELECT
distinguished_name,
email_address,
enabled,
given_name,
other_attributes,
sam_account_name,
sid,
surname,
user_principal_name
FROM aws.ds_data.users
WHERE DirectoryId = '{{ DirectoryId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="describe_user">

Returns information about a specific user.

```sql
SELECT
directory_id,
distinguished_name,
email_address,
enabled,
given_name,
other_attributes,
realm,
sam_account_name,
sid,
surname,
user_principal_name
FROM aws.ds_data.users
WHERE DirectoryId = '{{ DirectoryId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_users">

Returns user information for the specified directory. This operation supports pagination with the use of the NextToken request and response parameters. If more results are available, the ListUsers.NextToken member contains a token that you pass in the next call to ListUsers. This retrieves the next set of items. You can also specify a maximum number of return results with the MaxResults parameter.

```sql
SELECT
enabled,
given_name,
sam_account_name,
sid,
surname
FROM aws.ds_data.users
WHERE DirectoryId = '{{ DirectoryId }}' -- required
AND region = '{{ region }}' -- required
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

Creates a new user.

```sql
INSERT INTO aws.ds_data.users (
ClientToken,
EmailAddress,
GivenName,
OtherAttributes,
SAMAccountName,
Surname,
DirectoryId,
region
)
SELECT 
'{{ ClientToken }}',
'{{ EmailAddress }}',
'{{ GivenName }}',
'{{ OtherAttributes }}',
'{{ SAMAccountName }}' /* required */,
'{{ Surname }}',
'{{ DirectoryId }}',
'{{ region }}'
RETURNING
directory_id,
sam_account_name,
sid
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: users
  props:
    - name: DirectoryId
      value: "{{ DirectoryId }}"
      description: Required parameter for the users resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the users resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: EmailAddress
      value: "{{ EmailAddress }}"
    - name: GivenName
      value: "{{ GivenName }}"
    - name: OtherAttributes
      value: "{{ OtherAttributes }}"
    - name: SAMAccountName
      value: "{{ SAMAccountName }}"
    - name: Surname
      value: "{{ Surname }}"
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

Updates user information.

```sql
UPDATE aws.ds_data.users
SET 
ClientToken = '{{ ClientToken }}',
EmailAddress = '{{ EmailAddress }}',
GivenName = '{{ GivenName }}',
OtherAttributes = '{{ OtherAttributes }}',
SAMAccountName = '{{ SAMAccountName }}',
Surname = '{{ Surname }}',
UpdateType = '{{ UpdateType }}'
WHERE 
DirectoryId = '{{ DirectoryId }}' --required
AND region = '{{ region }}' --required
AND SAMAccountName = '{{ SAMAccountName }}' --required;
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

Deletes a user.

```sql
DELETE FROM aws.ds_data.users
WHERE DirectoryId = '{{ DirectoryId }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
