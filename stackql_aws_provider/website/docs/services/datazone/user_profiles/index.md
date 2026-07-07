--- 
title: user_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - user_profiles
  - datazone
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

Creates, updates, deletes, gets or lists a <code>user_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.user_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_user_profile"
    values={[
        { label: 'get_user_profile', value: 'get_user_profile' },
        { label: 'search_user_profiles', value: 'search_user_profiles' }
    ]}
>
<TabItem value="get_user_profile">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user profile. (pattern: &lt;code&gt;(&#91;0-9a-f&#93;&#123;10&#125;-|)&#91;A-Fa-f0-9&#93;&#123;8&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="details" /></td>
    <td><code>object</code></td>
    <td>The user profile details.</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>the identifier of the Amazon DataZone domain of which you want to get the user profile. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the user profile. (ASSIGNED, NOT_ASSIGNED, ACTIVATED, DEACTIVATED)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the user profile. (IAM, SSO)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_user_profiles">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the user profile. (pattern: &lt;code&gt;(&#91;0-9a-f&#93;&#123;10&#125;-|)&#91;A-Fa-f0-9&#93;&#123;8&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="details" /></td>
    <td><code>object</code></td>
    <td>The details of the user profile.</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone domain of the user profile. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the user profile. (ASSIGNED, NOT_ASSIGNED, ACTIVATED, DEACTIVATED)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the user profile. (IAM, SSO)</td>
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
    <td><a href="#get_user_profile"><CopyableCode code="get_user_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-user_identifier"><code>user_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-type"><code>type</code></a>, <a href="#parameter-sessionName"><code>sessionName</code></a></td>
    <td>Gets a user profile in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#search_user_profiles"><CopyableCode code="search_user_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches user profiles in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#create_user_profile"><CopyableCode code="create_user_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-userIdentifier"><code>userIdentifier</code></a></td>
    <td></td>
    <td>Creates a user profile in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#update_user_profile"><CopyableCode code="update_user_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-user_identifier"><code>user_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td></td>
    <td>Updates the specified user profile in Amazon DataZone.</td>
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
<tr id="parameter-domain_identifier">
    <td><CopyableCode code="domain_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon DataZone domain in which a user profile is updated.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-user_identifier">
    <td><CopyableCode code="user_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the user whose user profile is to be updated.</td>
</tr>
<tr id="parameter-sessionName">
    <td><CopyableCode code="sessionName" /></td>
    <td><code>string</code></td>
    <td>The session name for IAM role sessions.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the user profile.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_user_profile"
    values={[
        { label: 'get_user_profile', value: 'get_user_profile' },
        { label: 'search_user_profiles', value: 'search_user_profiles' }
    ]}
>
<TabItem value="get_user_profile">

Gets a user profile in Amazon DataZone.

```sql
SELECT
id,
details,
domainId,
status,
type_
FROM aws.datazone.user_profiles
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND user_identifier = '{{ user_identifier }}' -- required
AND region = '{{ region }}' -- required
AND type = '{{ type }}'
AND sessionName = '{{ sessionName }}'
;
```
</TabItem>
<TabItem value="search_user_profiles">

Searches user profiles in Amazon DataZone.

```sql
SELECT
id,
details,
domainId,
status,
type_
FROM aws.datazone.user_profiles
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_user_profile"
    values={[
        { label: 'create_user_profile', value: 'create_user_profile' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_user_profile">

Creates a user profile in Amazon DataZone.

```sql
INSERT INTO aws.datazone.user_profiles (
userIdentifier,
userType,
sessionName,
clientToken,
domain_identifier,
region
)
SELECT 
'{{ userIdentifier }}' /* required */,
'{{ userType }}',
'{{ sessionName }}',
'{{ clientToken }}',
'{{ domain_identifier }}',
'{{ region }}'
RETURNING
id,
details,
domainId,
status,
type_
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: user_profiles
  props:
    - name: domain_identifier
      value: "{{ domain_identifier }}"
      description: Required parameter for the user_profiles resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the user_profiles resource.
    - name: userIdentifier
      value: "{{ userIdentifier }}"
    - name: userType
      value: "{{ userType }}"
      valid_values: ['IAM_USER', 'IAM_ROLE', 'SSO_USER', 'IAM_ROLE_SESSION']
    - name: sessionName
      value: "{{ sessionName }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_user_profile"
    values={[
        { label: 'update_user_profile', value: 'update_user_profile' }
    ]}
>
<TabItem value="update_user_profile">

Updates the specified user profile in Amazon DataZone.

```sql
UPDATE aws.datazone.user_profiles
SET 
type = '{{ type }}',
status = '{{ status }}',
sessionName = '{{ sessionName }}'
WHERE 
domain_identifier = '{{ domain_identifier }}' --required
AND user_identifier = '{{ user_identifier }}' --required
AND region = '{{ region }}' --required
AND status = '{{ status }}' --required
RETURNING
id,
details,
domainId,
status,
type_;
```
</TabItem>
</Tabs>
