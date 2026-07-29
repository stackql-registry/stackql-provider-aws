--- 
title: authentication_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - authentication_profiles
  - redshift
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

Creates, updates, deletes, gets or lists an <code>authentication_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="authentication_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.authentication_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_authentication_profiles"
    values={[
        { label: 'describe_authentication_profiles', value: 'describe_authentication_profiles' }
    ]}
>
<TabItem value="describe_authentication_profiles">

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
    <td><CopyableCode code="authentication_profile_content" /></td>
    <td><code>string</code></td>
    <td>The content of the authentication profile in JSON format. The maximum length of the JSON string is determined by a quota for your account.</td>
</tr>
<tr>
    <td><CopyableCode code="authentication_profile_name" /></td>
    <td><code>string</code></td>
    <td>The name of the authentication profile.</td>
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
    <td><a href="#describe_authentication_profiles"><CopyableCode code="describe_authentication_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AuthenticationProfileName"><code>AuthenticationProfileName</code></a></td>
    <td>Describes an authentication profile.</td>
</tr>
<tr>
    <td><a href="#create_authentication_profile"><CopyableCode code="create_authentication_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-AuthenticationProfileName"><code>AuthenticationProfileName</code></a>, <a href="#parameter-AuthenticationProfileContent"><code>AuthenticationProfileContent</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an authentication profile with the specified parameters.</td>
</tr>
<tr>
    <td><a href="#modify_authentication_profile"><CopyableCode code="modify_authentication_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-AuthenticationProfileName"><code>AuthenticationProfileName</code></a>, <a href="#parameter-AuthenticationProfileContent"><code>AuthenticationProfileContent</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Modifies an authentication profile.</td>
</tr>
<tr>
    <td><a href="#delete_authentication_profile"><CopyableCode code="delete_authentication_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-AuthenticationProfileName"><code>AuthenticationProfileName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an authentication profile.</td>
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
<tr id="parameter-AuthenticationProfileContent">
    <td><CopyableCode code="AuthenticationProfileContent" /></td>
    <td><code>string</code></td>
    <td>The new content of the authentication profile in JSON format. The maximum length of the JSON string is determined by a quota for your account.</td>
</tr>
<tr id="parameter-AuthenticationProfileName">
    <td><CopyableCode code="AuthenticationProfileName" /></td>
    <td><code>string</code></td>
    <td>The name of the authentication profile to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AuthenticationProfileName">
    <td><CopyableCode code="AuthenticationProfileName" /></td>
    <td><code>string</code></td>
    <td>The name of the authentication profile to describe. If not specified then all authentication profiles owned by the account are listed.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_authentication_profiles"
    values={[
        { label: 'describe_authentication_profiles', value: 'describe_authentication_profiles' }
    ]}
>
<TabItem value="describe_authentication_profiles">

Describes an authentication profile.

```sql
SELECT
authentication_profile_content,
authentication_profile_name
FROM aws.redshift.authentication_profiles
WHERE region = '{{ region }}' -- required
AND AuthenticationProfileName = '{{ AuthenticationProfileName }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_authentication_profile"
    values={[
        { label: 'create_authentication_profile', value: 'create_authentication_profile' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_authentication_profile">

Creates an authentication profile with the specified parameters.

```sql
INSERT INTO aws.redshift.authentication_profiles (
AuthenticationProfileName,
AuthenticationProfileContent,
region
)
SELECT 
'{{ AuthenticationProfileName }}',
'{{ AuthenticationProfileContent }}',
'{{ region }}'
RETURNING
authentication_profile_content,
authentication_profile_name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: authentication_profiles
  props:
    - name: AuthenticationProfileName
      value: "{{ AuthenticationProfileName }}"
      description: Required parameter for the authentication_profiles resource.
    - name: AuthenticationProfileContent
      value: "{{ AuthenticationProfileContent }}"
      description: Required parameter for the authentication_profiles resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the authentication_profiles resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_authentication_profile"
    values={[
        { label: 'modify_authentication_profile', value: 'modify_authentication_profile' }
    ]}
>
<TabItem value="modify_authentication_profile">

Modifies an authentication profile.

```sql
UPDATE aws.redshift.authentication_profiles
SET 
-- No updatable properties
WHERE 
AuthenticationProfileName = '{{ AuthenticationProfileName }}' --required
AND AuthenticationProfileContent = '{{ AuthenticationProfileContent }}' --required
AND region = '{{ region }}' --required
RETURNING
authentication_profile_content,
authentication_profile_name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_authentication_profile"
    values={[
        { label: 'delete_authentication_profile', value: 'delete_authentication_profile' }
    ]}
>
<TabItem value="delete_authentication_profile">

Deletes an authentication profile.

```sql
DELETE FROM aws.redshift.authentication_profiles
WHERE AuthenticationProfileName = '{{ AuthenticationProfileName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
