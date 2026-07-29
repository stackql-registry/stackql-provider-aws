--- 
title: environment_memberships
hide_title: false
hide_table_of_contents: false
keywords:
  - environment_memberships
  - cloud9
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

Creates, updates, deletes, gets or lists an <code>environment_memberships</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="environment_memberships" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloud9.environment_memberships" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_environment_memberships"
    values={[
        { label: 'describe_environment_memberships', value: 'describe_environment_memberships' }
    ]}
>
<TabItem value="describe_environment_memberships">

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
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment for the environment member. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;8,32&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_access" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time, expressed in epoch time format, when the environment member last opened the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>string</code></td>
    <td>The type of environment member permissions associated with this environment member. Available values include: owner: Owns the environment. read-only: Has read-only access to the environment. read-write: Has read-write access to the environment. (owner, read-write, read-only)</td>
</tr>
<tr>
    <td><CopyableCode code="user_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the environment member. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):(iam|sts)::\d+:(root|(user\/&#91;\w+=/:,.@-&#93;&#123;1,64&#125;|federated-user\/&#91;\w+=/:,.@-&#93;&#123;2,32&#125;|assumed-role\/&#91;\w+=:,.@-&#93;&#123;1,64&#125;\/&#91;\w+=,.@-&#93;&#123;1,64&#125;))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string</code></td>
    <td>The user ID in Identity and Access Management (IAM) of the environment member.</td>
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
    <td><a href="#describe_environment_memberships"><CopyableCode code="describe_environment_memberships" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about environment members for an Cloud9 development environment. Cloud9 is no longer available to new customers. Existing customers of Cloud9 can continue to use the service as normal. Learn more"</td>
</tr>
<tr>
    <td><a href="#create_environment_membership"><CopyableCode code="create_environment_membership" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-environmentId"><code>environmentId</code></a>, <a href="#parameter-userArn"><code>userArn</code></a>, <a href="#parameter-permissions"><code>permissions</code></a></td>
    <td></td>
    <td>Adds an environment member to an Cloud9 development environment. Cloud9 is no longer available to new customers. Existing customers of Cloud9 can continue to use the service as normal. Learn more"</td>
</tr>
<tr>
    <td><a href="#update_environment_membership"><CopyableCode code="update_environment_membership" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-environmentId"><code>environmentId</code></a>, <a href="#parameter-userArn"><code>userArn</code></a>, <a href="#parameter-permissions"><code>permissions</code></a></td>
    <td></td>
    <td>Changes the settings of an existing environment member for an Cloud9 development environment. Cloud9 is no longer available to new customers. Existing customers of Cloud9 can continue to use the service as normal. Learn more"</td>
</tr>
<tr>
    <td><a href="#delete_environment_membership"><CopyableCode code="delete_environment_membership" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an environment member from a development environment. Cloud9 is no longer available to new customers. Existing customers of Cloud9 can continue to use the service as normal. Learn more"</td>
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
    defaultValue="describe_environment_memberships"
    values={[
        { label: 'describe_environment_memberships', value: 'describe_environment_memberships' }
    ]}
>
<TabItem value="describe_environment_memberships">

Gets information about environment members for an Cloud9 development environment. Cloud9 is no longer available to new customers. Existing customers of Cloud9 can continue to use the service as normal. Learn more"

```sql
SELECT
environment_id,
last_access,
permissions,
user_arn,
user_id
FROM aws.cloud9.environment_memberships
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_environment_membership"
    values={[
        { label: 'create_environment_membership', value: 'create_environment_membership' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_environment_membership">

Adds an environment member to an Cloud9 development environment. Cloud9 is no longer available to new customers. Existing customers of Cloud9 can continue to use the service as normal. Learn more"

```sql
INSERT INTO aws.cloud9.environment_memberships (
environmentId,
userArn,
permissions,
region
)
SELECT 
'{{ environmentId }}' /* required */,
'{{ userArn }}' /* required */,
'{{ permissions }}' /* required */,
'{{ region }}'
RETURNING
membership
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: environment_memberships
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the environment_memberships resource.
    - name: environmentId
      value: "{{ environmentId }}"
      description: |
        The ID of the environment that contains the environment member you want to add.
    - name: userArn
      value: "{{ userArn }}"
      description: |
        The Amazon Resource Name (ARN) of the environment member you want to add.
    - name: permissions
      value: "{{ permissions }}"
      description: |
        The type of environment member permissions you want to associate with this environment member. Available values include: read-only: Has read-only access to the environment. read-write: Has read-write access to the environment.
      valid_values: ['read-write', 'read-only']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_environment_membership"
    values={[
        { label: 'update_environment_membership', value: 'update_environment_membership' }
    ]}
>
<TabItem value="update_environment_membership">

Changes the settings of an existing environment member for an Cloud9 development environment. Cloud9 is no longer available to new customers. Existing customers of Cloud9 can continue to use the service as normal. Learn more"

```sql
UPDATE aws.cloud9.environment_memberships
SET 
environmentId = '{{ environmentId }}',
userArn = '{{ userArn }}',
permissions = '{{ permissions }}'
WHERE 
region = '{{ region }}' --required
AND environmentId = '{{ environmentId }}' --required
AND userArn = '{{ userArn }}' --required
AND permissions = '{{ permissions }}' --required
RETURNING
membership;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_environment_membership"
    values={[
        { label: 'delete_environment_membership', value: 'delete_environment_membership' }
    ]}
>
<TabItem value="delete_environment_membership">

Deletes an environment member from a development environment. Cloud9 is no longer available to new customers. Existing customers of Cloud9 can continue to use the service as normal. Learn more"

```sql
DELETE FROM aws.cloud9.environment_memberships
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
