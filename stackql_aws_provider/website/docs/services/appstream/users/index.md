--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
  - appstream
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.appstream.users" /></td></tr>
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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the user. (pattern: &lt;code&gt;^arn:aws(?:\-cn|\-iso\-b|\-iso|\-us\-gov)?:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9:_/+=,@.\\-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AuthenticationType" /></td>
    <td><code>string</code></td>
    <td>The authentication type for the user. (API, SAML, USERPOOL, AWS_AD)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the user was created in the user pool.</td>
</tr>
<tr>
    <td><CopyableCode code="Enabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the user in the user pool is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="FirstName" /></td>
    <td><code>string</code></td>
    <td>The first name, or given name, of the user. (pattern: &lt;code&gt;^&#91;A-Za-z0-9_\-\s&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastName" /></td>
    <td><code>string</code></td>
    <td>The last name, or surname, of the user. (pattern: &lt;code&gt;^&#91;A-Za-z0-9_\-\s&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the user in the user pool. The status can be one of the following: UNCONFIRMED – The user is created but not confirmed. CONFIRMED – The user is confirmed. ARCHIVED – The user is no longer active. COMPROMISED – The user is disabled because of a potential security threat. UNKNOWN – The user status is not known.</td>
</tr>
<tr>
    <td><CopyableCode code="UserName" /></td>
    <td><code>string</code></td>
    <td>The email address of the user. Users' email addresses are case-sensitive. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;M&#125;\p&#123;S&#125;\p&#123;N&#125;\p&#123;P&#125;&#93;+&lt;/code&gt;)</td>
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
    <td></td>
    <td>Retrieves a list that describes one or more specified users in the user pool.</td>
</tr>
<tr>
    <td><a href="#create_user"><CopyableCode code="create_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-AuthenticationType"><code>AuthenticationType</code></a></td>
    <td></td>
    <td>Creates a new user in the user pool.</td>
</tr>
<tr>
    <td><a href="#delete_user"><CopyableCode code="delete_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a user from the user pool.</td>
</tr>
<tr>
    <td><a href="#disable_user"><CopyableCode code="disable_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-AuthenticationType"><code>AuthenticationType</code></a></td>
    <td></td>
    <td>Disables the specified user in the user pool. Users can't sign in to WorkSpaces Applications until they are re-enabled. This action does not delete the user.</td>
</tr>
<tr>
    <td><a href="#enable_user"><CopyableCode code="enable_user" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserName"><code>UserName</code></a>, <a href="#parameter-AuthenticationType"><code>AuthenticationType</code></a></td>
    <td></td>
    <td>Enables a user in the user pool. After being enabled, users can sign in to WorkSpaces Applications and open applications from the stacks to which they are assigned.</td>
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
    defaultValue="describe_users"
    values={[
        { label: 'describe_users', value: 'describe_users' }
    ]}
>
<TabItem value="describe_users">

Retrieves a list that describes one or more specified users in the user pool.

```sql
SELECT
Arn,
AuthenticationType,
CreatedTime,
Enabled,
FirstName,
LastName,
Status,
UserName
FROM aws.appstream.users
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

Creates a new user in the user pool.

```sql
INSERT INTO aws.appstream.users (
UserName,
MessageAction,
FirstName,
LastName,
AuthenticationType,
region
)
SELECT 
'{{ UserName }}' /* required */,
'{{ MessageAction }}',
'{{ FirstName }}',
'{{ LastName }}',
'{{ AuthenticationType }}' /* required */,
'{{ region }}'
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
    - name: UserName
      value: "{{ UserName }}"
      description: |
        The email address of the user. Users' email addresses are case-sensitive. During login, if they specify an email address that doesn't use the same capitalization as the email address specified when their user pool account was created, a "user does not exist" error message displays.
    - name: MessageAction
      value: "{{ MessageAction }}"
      description: |
        The action to take for the welcome email that is sent to a user after the user is created in the user pool. If you specify SUPPRESS, no email is sent. If you specify RESEND, do not specify the first name or last name of the user. If the value is null, the email is sent. The temporary password in the welcome email is valid for only 7 days. If users don’t set their passwords within 7 days, you must send them a new welcome email.
      valid_values: ['SUPPRESS', 'RESEND']
    - name: FirstName
      value: "{{ FirstName }}"
      description: |
        The first name, or given name, of the user.
    - name: LastName
      value: "{{ LastName }}"
      description: |
        The last name, or surname, of the user.
    - name: AuthenticationType
      value: "{{ AuthenticationType }}"
      description: |
        The authentication type for the user. You must specify USERPOOL.
      valid_values: ['API', 'SAML', 'USERPOOL', 'AWS_AD']
`}</CodeBlock>

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

Deletes a user from the user pool.

```sql
DELETE FROM aws.appstream.users
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable_user"
    values={[
        { label: 'disable_user', value: 'disable_user' },
        { label: 'enable_user', value: 'enable_user' }
    ]}
>
<TabItem value="disable_user">

Disables the specified user in the user pool. Users can't sign in to WorkSpaces Applications until they are re-enabled. This action does not delete the user.

```sql
EXEC aws.appstream.users.disable_user 
@region='{{ region }}' --required 
@@json=
'{
"UserName": "{{ UserName }}", 
"AuthenticationType": "{{ AuthenticationType }}"
}'
;
```
</TabItem>
<TabItem value="enable_user">

Enables a user in the user pool. After being enabled, users can sign in to WorkSpaces Applications and open applications from the stacks to which they are assigned.

```sql
EXEC aws.appstream.users.enable_user 
@region='{{ region }}' --required 
@@json=
'{
"UserName": "{{ UserName }}", 
"AuthenticationType": "{{ AuthenticationType }}"
}'
;
```
</TabItem>
</Tabs>
