--- 
title: impersonation_roles
hide_title: false
hide_table_of_contents: false
keywords:
  - impersonation_roles
  - workmail
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

Creates, updates, deletes, gets or lists an <code>impersonation_roles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="impersonation_roles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workmail.impersonation_roles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_impersonation_role"
    values={[
        { label: 'get_impersonation_role', value: 'get_impersonation_role' },
        { label: 'list_impersonation_roles', value: 'list_impersonation_roles' }
    ]}
>
<TabItem value="get_impersonation_role">

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
    <td><CopyableCode code="date_created" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the impersonation role was created.</td>
</tr>
<tr>
    <td><CopyableCode code="date_modified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the impersonation role was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The impersonation role description. (pattern: &lt;code&gt;&#91;^\x00-\x09\x0B\x0C\x0E-\x1F\x7F\x3C\x3E\x5C&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="impersonation_role_id" /></td>
    <td><code>string</code></td>
    <td>The impersonation role ID. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The impersonation role name. (pattern: &lt;code&gt;&#91;^\x00-\x1F\x7F\x3C\x3E\x5C&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td>The list of rules for the given impersonation role.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The impersonation role type. (FULL_ACCESS, READ_ONLY)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_impersonation_roles">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to retrieve the next page of results. The value is null when there are no results to return. (pattern: &lt;code&gt;&#91;\S\s&#93;*|&#91;a-zA-Z0-9/+=&#93;&#123;1,1024&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="roles" /></td>
    <td><code>array</code></td>
    <td>The list of impersonation roles under the given WorkMail organization.</td>
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
    <td><a href="#get_impersonation_role"><CopyableCode code="get_impersonation_role" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the impersonation role details for the given WorkMail organization.</td>
</tr>
<tr>
    <td><a href="#list_impersonation_roles"><CopyableCode code="list_impersonation_roles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the impersonation roles for the given WorkMail organization.</td>
</tr>
<tr>
    <td><a href="#create_impersonation_role"><CopyableCode code="create_impersonation_role" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a></td>
    <td></td>
    <td>Creates an impersonation role for the given WorkMail organization. Idempotency ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries also complete successfully without performing any further actions.</td>
</tr>
<tr>
    <td><a href="#update_impersonation_role"><CopyableCode code="update_impersonation_role" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a>, <a href="#parameter-ImpersonationRoleId"><code>ImpersonationRoleId</code></a></td>
    <td></td>
    <td>Updates an impersonation role for the given WorkMail organization.</td>
</tr>
<tr>
    <td><a href="#delete_impersonation_role"><CopyableCode code="delete_impersonation_role" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an impersonation role for the given WorkMail organization.</td>
</tr>
<tr>
    <td><a href="#assume_impersonation_role"><CopyableCode code="assume_impersonation_role" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a>, <a href="#parameter-ImpersonationRoleId"><code>ImpersonationRoleId</code></a></td>
    <td></td>
    <td>Assumes an impersonation role for the given WorkMail organization. This method returns an authentication token you can use to make impersonated calls.</td>
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
    defaultValue="get_impersonation_role"
    values={[
        { label: 'get_impersonation_role', value: 'get_impersonation_role' },
        { label: 'list_impersonation_roles', value: 'list_impersonation_roles' }
    ]}
>
<TabItem value="get_impersonation_role">

Gets the impersonation role details for the given WorkMail organization.

```sql
SELECT
date_created,
date_modified,
description,
impersonation_role_id,
name,
rules,
type
FROM aws.workmail.impersonation_roles
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_impersonation_roles">

Lists all the impersonation roles for the given WorkMail organization.

```sql
SELECT
next_token,
roles
FROM aws.workmail.impersonation_roles
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_impersonation_role"
    values={[
        { label: 'create_impersonation_role', value: 'create_impersonation_role' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_impersonation_role">

Creates an impersonation role for the given WorkMail organization. Idempotency ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries also complete successfully without performing any further actions.

```sql
INSERT INTO aws.workmail.impersonation_roles (
ClientToken,
OrganizationId,
Name,
Type,
Description,
Rules,
region
)
SELECT 
'{{ ClientToken }}',
'{{ OrganizationId }}' /* required */,
'{{ Name }}',
'{{ Type }}',
'{{ Description }}',
'{{ Rules }}',
'{{ region }}'
RETURNING
impersonation_role_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: impersonation_roles
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the impersonation_roles resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        The idempotency token for the client request.
    - name: OrganizationId
      value: "{{ OrganizationId }}"
      description: |
        The WorkMail organization to create the new impersonation role within.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the new impersonation role.
    - name: Type
      value: "{{ Type }}"
      description: |
        The impersonation role's type. The available impersonation role types are READ_ONLY or FULL_ACCESS.
      valid_values: ['FULL_ACCESS', 'READ_ONLY']
    - name: Description
      value: "{{ Description }}"
      description: |
        The description of the new impersonation role.
    - name: Rules
      description: |
        The list of rules for the impersonation role.
      value:
        - ImpersonationRuleId: "{{ ImpersonationRuleId }}"
          Name: "{{ Name }}"
          Description: "{{ Description }}"
          Effect: "{{ Effect }}"
          TargetUsers: "{{ TargetUsers }}"
          NotTargetUsers: "{{ NotTargetUsers }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_impersonation_role"
    values={[
        { label: 'update_impersonation_role', value: 'update_impersonation_role' }
    ]}
>
<TabItem value="update_impersonation_role">

Updates an impersonation role for the given WorkMail organization.

```sql
UPDATE aws.workmail.impersonation_roles
SET 
OrganizationId = '{{ OrganizationId }}',
ImpersonationRoleId = '{{ ImpersonationRoleId }}',
Name = '{{ Name }}',
Type = '{{ Type }}',
Description = '{{ Description }}',
Rules = '{{ Rules }}'
WHERE 
region = '{{ region }}' --required
AND OrganizationId = '{{ OrganizationId }}' --required
AND ImpersonationRoleId = '{{ ImpersonationRoleId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_impersonation_role"
    values={[
        { label: 'delete_impersonation_role', value: 'delete_impersonation_role' }
    ]}
>
<TabItem value="delete_impersonation_role">

Deletes an impersonation role for the given WorkMail organization.

```sql
DELETE FROM aws.workmail.impersonation_roles
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="assume_impersonation_role"
    values={[
        { label: 'assume_impersonation_role', value: 'assume_impersonation_role' }
    ]}
>
<TabItem value="assume_impersonation_role">

Assumes an impersonation role for the given WorkMail organization. This method returns an authentication token you can use to make impersonated calls.

```sql
EXEC aws.workmail.impersonation_roles.assume_impersonation_role 
@region='{{ region }}' --required 
@@json=
'{
"OrganizationId": "{{ OrganizationId }}", 
"ImpersonationRoleId": "{{ ImpersonationRoleId }}"
}'
;
```
</TabItem>
</Tabs>
