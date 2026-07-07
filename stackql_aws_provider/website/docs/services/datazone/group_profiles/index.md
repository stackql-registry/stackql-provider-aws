--- 
title: group_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - group_profiles
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

Creates, updates, deletes, gets or lists a <code>group_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="group_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.group_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_group_profile"
    values={[
        { label: 'get_group_profile', value: 'get_group_profile' },
        { label: 'search_group_profiles', value: 'search_group_profiles' }
    ]}
>
<TabItem value="get_group_profile">

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
    <td>The identifier of the group profile. (pattern: &lt;code&gt;(&#91;0-9a-f&#93;&#123;10&#125;-|)&#91;A-Fa-f0-9&#93;&#123;8&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon DataZone domain in which the group profile exists. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="groupName" /></td>
    <td><code>string</code></td>
    <td>The name of the group for which the specified group profile exists. (pattern: &lt;code&gt;&#91;a-zA-Z_0-9+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rolePrincipalArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role principal. This role is associated with the group profile.</td>
</tr>
<tr>
    <td><CopyableCode code="rolePrincipalId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the IAM role principal. This principal is associated with the group profile.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The identifier of the group profile. (ASSIGNED, NOT_ASSIGNED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_group_profiles">

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
    <td>The ID of a group profile. (pattern: &lt;code&gt;(&#91;0-9a-f&#93;&#123;10&#125;-|)&#91;A-Fa-f0-9&#93;&#123;8&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone domain of a group profile. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="groupName" /></td>
    <td><code>string</code></td>
    <td>The group name of a group profile. (pattern: &lt;code&gt;&#91;a-zA-Z_0-9+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rolePrincipalArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role principal. This role is associated with the group profile.</td>
</tr>
<tr>
    <td><CopyableCode code="rolePrincipalId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the IAM role principal. This principal is associated with the group profile.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a group profile. (ASSIGNED, NOT_ASSIGNED)</td>
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
    <td><a href="#get_group_profile"><CopyableCode code="get_group_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-group_identifier"><code>group_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a group profile in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#search_group_profiles"><CopyableCode code="search_group_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches group profiles in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#create_group_profile"><CopyableCode code="create_group_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a group profile in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#update_group_profile"><CopyableCode code="update_group_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-group_identifier"><code>group_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td></td>
    <td>Updates the specified group profile in Amazon DataZone.</td>
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
    <td>The identifier of the Amazon DataZone domain in which a group profile is updated.</td>
</tr>
<tr id="parameter-group_identifier">
    <td><CopyableCode code="group_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the group profile that is updated.</td>
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
    defaultValue="get_group_profile"
    values={[
        { label: 'get_group_profile', value: 'get_group_profile' },
        { label: 'search_group_profiles', value: 'search_group_profiles' }
    ]}
>
<TabItem value="get_group_profile">

Gets a group profile in Amazon DataZone.

```sql
SELECT
id,
domainId,
groupName,
rolePrincipalArn,
rolePrincipalId,
status
FROM aws.datazone.group_profiles
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND group_identifier = '{{ group_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="search_group_profiles">

Searches group profiles in Amazon DataZone.

```sql
SELECT
id,
domainId,
groupName,
rolePrincipalArn,
rolePrincipalId,
status
FROM aws.datazone.group_profiles
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_group_profile"
    values={[
        { label: 'create_group_profile', value: 'create_group_profile' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_group_profile">

Creates a group profile in Amazon DataZone.

```sql
INSERT INTO aws.datazone.group_profiles (
groupIdentifier,
rolePrincipalArn,
clientToken,
domain_identifier,
region
)
SELECT 
'{{ groupIdentifier }}',
'{{ rolePrincipalArn }}',
'{{ clientToken }}',
'{{ domain_identifier }}',
'{{ region }}'
RETURNING
id,
domainId,
groupName,
rolePrincipalArn,
rolePrincipalId,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: group_profiles
  props:
    - name: domain_identifier
      value: "{{ domain_identifier }}"
      description: Required parameter for the group_profiles resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the group_profiles resource.
    - name: groupIdentifier
      value: "{{ groupIdentifier }}"
    - name: rolePrincipalArn
      value: "{{ rolePrincipalArn }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_group_profile"
    values={[
        { label: 'update_group_profile', value: 'update_group_profile' }
    ]}
>
<TabItem value="update_group_profile">

Updates the specified group profile in Amazon DataZone.

```sql
UPDATE aws.datazone.group_profiles
SET 
status = '{{ status }}'
WHERE 
domain_identifier = '{{ domain_identifier }}' --required
AND group_identifier = '{{ group_identifier }}' --required
AND region = '{{ region }}' --required
AND status = '{{ status }}' --required
RETURNING
id,
domainId,
groupName,
rolePrincipalArn,
rolePrincipalId,
status;
```
</TabItem>
</Tabs>
