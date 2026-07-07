--- 
title: role_alias
hide_title: false
hide_table_of_contents: false
keywords:
  - role_alias
  - iot
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

Creates, updates, deletes, gets or lists a <code>role_alias</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="role_alias" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.role_alias" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_role_alias"
    values={[
        { label: 'describe_role_alias', value: 'describe_role_alias' }
    ]}
>
<TabItem value="describe_role_alias">

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
    <td><CopyableCode code="creationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The UNIX timestamp of when the role alias was created.</td>
</tr>
<tr>
    <td><CopyableCode code="credentialDurationSeconds" /></td>
    <td><code>integer</code></td>
    <td>The number of seconds for which the credential is valid.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The UNIX timestamp of when the role alias was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The role alias owner. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="roleAlias" /></td>
    <td><code>string</code></td>
    <td>The role alias. (pattern: &lt;code&gt;&#91;\w=,@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="roleAliasArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the role alias.</td>
</tr>
<tr>
    <td><CopyableCode code="roleArn" /></td>
    <td><code>string</code></td>
    <td>The role ARN.</td>
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
    <td><a href="#describe_role_alias"><CopyableCode code="describe_role_alias" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-role_alias"><code>role_alias</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a role alias. Requires permission to access the DescribeRoleAlias action.</td>
</tr>
<tr>
    <td><a href="#create_role_alias"><CopyableCode code="create_role_alias" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-role_alias"><code>role_alias</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a></td>
    <td></td>
    <td>Creates a role alias. Requires permission to access the CreateRoleAlias action. The value of credentialDurationSeconds must be less than or equal to the maximum session duration of the IAM role that the role alias references. For more information, see Modifying a role maximum session duration (Amazon Web Services API) from the Amazon Web Services Identity and Access Management User Guide.</td>
</tr>
<tr>
    <td><a href="#update_role_alias"><CopyableCode code="update_role_alias" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-role_alias"><code>role_alias</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a role alias. Requires permission to access the UpdateRoleAlias action. The value of credentialDurationSeconds must be less than or equal to the maximum session duration of the IAM role that the role alias references. For more information, see Modifying a role maximum session duration (Amazon Web Services API) from the Amazon Web Services Identity and Access Management User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_role_alias"><CopyableCode code="delete_role_alias" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-role_alias"><code>role_alias</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a role alias Requires permission to access the DeleteRoleAlias action.</td>
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
<tr id="parameter-role_alias">
    <td><CopyableCode code="role_alias" /></td>
    <td><code>string</code></td>
    <td>The role alias to delete.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_role_alias"
    values={[
        { label: 'describe_role_alias', value: 'describe_role_alias' }
    ]}
>
<TabItem value="describe_role_alias">

Describes a role alias. Requires permission to access the DescribeRoleAlias action.

```sql
SELECT
creationDate,
credentialDurationSeconds,
lastModifiedDate,
owner,
roleAlias,
roleAliasArn,
roleArn
FROM aws.iot.role_alias
WHERE role_alias = '{{ role_alias }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_role_alias"
    values={[
        { label: 'create_role_alias', value: 'create_role_alias' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_role_alias">

Creates a role alias. Requires permission to access the CreateRoleAlias action. The value of credentialDurationSeconds must be less than or equal to the maximum session duration of the IAM role that the role alias references. For more information, see Modifying a role maximum session duration (Amazon Web Services API) from the Amazon Web Services Identity and Access Management User Guide.

```sql
INSERT INTO aws.iot.role_alias (
roleArn,
credentialDurationSeconds,
tags,
role_alias,
region
)
SELECT 
'{{ roleArn }}' /* required */,
{{ credentialDurationSeconds }},
'{{ tags }}',
'{{ role_alias }}',
'{{ region }}'
RETURNING
roleAlias,
roleAliasArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: role_alias
  props:
    - name: role_alias
      value: "{{ role_alias }}"
      description: Required parameter for the role_alias resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the role_alias resource.
    - name: roleArn
      value: "{{ roleArn }}"
    - name: credentialDurationSeconds
      value: {{ credentialDurationSeconds }}
    - name: tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_role_alias"
    values={[
        { label: 'update_role_alias', value: 'update_role_alias' }
    ]}
>
<TabItem value="update_role_alias">

Updates a role alias. Requires permission to access the UpdateRoleAlias action. The value of credentialDurationSeconds must be less than or equal to the maximum session duration of the IAM role that the role alias references. For more information, see Modifying a role maximum session duration (Amazon Web Services API) from the Amazon Web Services Identity and Access Management User Guide.

```sql
UPDATE aws.iot.role_alias
SET 
roleArn = '{{ roleArn }}',
credentialDurationSeconds = {{ credentialDurationSeconds }}
WHERE 
role_alias = '{{ role_alias }}' --required
AND region = '{{ region }}' --required
RETURNING
roleAlias,
roleAliasArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_role_alias"
    values={[
        { label: 'delete_role_alias', value: 'delete_role_alias' }
    ]}
>
<TabItem value="delete_role_alias">

Deletes a role alias Requires permission to access the DeleteRoleAlias action.

```sql
DELETE FROM aws.iot.role_alias
WHERE role_alias = '{{ role_alias }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
