--- 
title: permission_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - permission_sets
  - sso_admin
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

Creates, updates, deletes, gets or lists a <code>permission_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="permission_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sso_admin.permission_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_permission_set"
    values={[
        { label: 'describe_permission_set', value: 'describe_permission_set' },
        { label: 'list_permission_sets', value: 'list_permission_sets' }
    ]}
>
<TabItem value="describe_permission_set">

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
    <td><CopyableCode code="CreatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the permission set was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the PermissionSet. (pattern: &lt;code&gt;&#91;\u0009\u000A\u000D\u0020-\u007E\u00A1-\u00FF&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the permission set. (pattern: &lt;code&gt;&#91;\w+=,.@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PermissionSetArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the permission set. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;&#123;1,5&#125;)&#123;0,3&#125;:sso:::permissionSet/(sso)?ins-&#91;a-zA-Z0-9-.&#93;&#123;16&#125;/ps-&#91;a-zA-Z0-9-./&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RelayState" /></td>
    <td><code>string</code></td>
    <td>Used to redirect users within the application during the federation authentication process. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&$@#\\\/%?=~\-_'"|!:,.;*+\&#91;\&#93;\ \(\)\&#123;\&#125;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SessionDuration" /></td>
    <td><code>string</code></td>
    <td>The length of time that the application user sessions are valid for in the ISO-8601 standard. (pattern: &lt;code&gt;(-?)P(?=\d|T\d)(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)(&#91;DW&#93;))?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?)?&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_permission_sets">

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
    <td><CopyableCode code="permission_set" /></td>
    <td><code>string</code></td>
    <td>Defines the level of access on an Amazon Web Services account.</td>
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
    <td><a href="#describe_permission_set"><CopyableCode code="describe_permission_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the details of the permission set.</td>
</tr>
<tr>
    <td><a href="#list_permission_sets"><CopyableCode code="list_permission_sets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the PermissionSets in an IAM Identity Center instance.</td>
</tr>
<tr>
    <td><a href="#create_permission_set"><CopyableCode code="create_permission_set" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-InstanceArn"><code>InstanceArn</code></a></td>
    <td></td>
    <td>Creates a permission set within a specified IAM Identity Center instance. To grant users and groups access to Amazon Web Services account resources, use CreateAccountAssignment .</td>
</tr>
<tr>
    <td><a href="#attach_customer_managed_policy_reference_to_permission_set"><CopyableCode code="attach_customer_managed_policy_reference_to_permission_set" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceArn"><code>InstanceArn</code></a>, <a href="#parameter-PermissionSetArn"><code>PermissionSetArn</code></a>, <a href="#parameter-CustomerManagedPolicyReference"><code>CustomerManagedPolicyReference</code></a></td>
    <td></td>
    <td>Attaches the specified customer managed policy to the specified PermissionSet.</td>
</tr>
<tr>
    <td><a href="#attach_managed_policy_to_permission_set"><CopyableCode code="attach_managed_policy_to_permission_set" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceArn"><code>InstanceArn</code></a>, <a href="#parameter-PermissionSetArn"><code>PermissionSetArn</code></a>, <a href="#parameter-ManagedPolicyArn"><code>ManagedPolicyArn</code></a></td>
    <td></td>
    <td>Attaches an Amazon Web Services managed policy ARN to a permission set. If the permission set is already referenced by one or more account assignments, you will need to call ProvisionPermissionSet after this operation. Calling ProvisionPermissionSet applies the corresponding IAM policy updates to all assigned accounts.</td>
</tr>
<tr>
    <td><a href="#provision_permission_set"><CopyableCode code="provision_permission_set" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceArn"><code>InstanceArn</code></a>, <a href="#parameter-PermissionSetArn"><code>PermissionSetArn</code></a>, <a href="#parameter-TargetType"><code>TargetType</code></a></td>
    <td></td>
    <td>The process by which a specified permission set is provisioned to the specified target.</td>
</tr>
<tr>
    <td><a href="#update_permission_set"><CopyableCode code="update_permission_set" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceArn"><code>InstanceArn</code></a>, <a href="#parameter-PermissionSetArn"><code>PermissionSetArn</code></a></td>
    <td></td>
    <td>Updates an existing permission set.</td>
</tr>
<tr>
    <td><a href="#put_inline_policy_to_permission_set"><CopyableCode code="put_inline_policy_to_permission_set" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceArn"><code>InstanceArn</code></a>, <a href="#parameter-PermissionSetArn"><code>PermissionSetArn</code></a>, <a href="#parameter-InlinePolicy"><code>InlinePolicy</code></a></td>
    <td></td>
    <td>Attaches an inline policy to a permission set. If the permission set is already referenced by one or more account assignments, you will need to call ProvisionPermissionSet after this action to apply the corresponding IAM policy updates to all assigned accounts.</td>
</tr>
<tr>
    <td><a href="#put_permissions_boundary_to_permission_set"><CopyableCode code="put_permissions_boundary_to_permission_set" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceArn"><code>InstanceArn</code></a>, <a href="#parameter-PermissionSetArn"><code>PermissionSetArn</code></a>, <a href="#parameter-PermissionsBoundary"><code>PermissionsBoundary</code></a></td>
    <td></td>
    <td>Attaches an Amazon Web Services managed or customer managed policy to the specified PermissionSet as a permissions boundary.</td>
</tr>
<tr>
    <td><a href="#delete_permission_set"><CopyableCode code="delete_permission_set" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified permission set.</td>
</tr>
<tr>
    <td><a href="#delete_inline_policy_from_permission_set"><CopyableCode code="delete_inline_policy_from_permission_set" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceArn"><code>InstanceArn</code></a>, <a href="#parameter-PermissionSetArn"><code>PermissionSetArn</code></a></td>
    <td></td>
    <td>Deletes the inline policy from a specified permission set.</td>
</tr>
<tr>
    <td><a href="#delete_permissions_boundary_from_permission_set"><CopyableCode code="delete_permissions_boundary_from_permission_set" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceArn"><code>InstanceArn</code></a>, <a href="#parameter-PermissionSetArn"><code>PermissionSetArn</code></a></td>
    <td></td>
    <td>Deletes the permissions boundary from a specified PermissionSet.</td>
</tr>
<tr>
    <td><a href="#detach_customer_managed_policy_reference_from_permission_set"><CopyableCode code="detach_customer_managed_policy_reference_from_permission_set" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceArn"><code>InstanceArn</code></a>, <a href="#parameter-PermissionSetArn"><code>PermissionSetArn</code></a>, <a href="#parameter-CustomerManagedPolicyReference"><code>CustomerManagedPolicyReference</code></a></td>
    <td></td>
    <td>Detaches the specified customer managed policy from the specified PermissionSet.</td>
</tr>
<tr>
    <td><a href="#detach_managed_policy_from_permission_set"><CopyableCode code="detach_managed_policy_from_permission_set" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceArn"><code>InstanceArn</code></a>, <a href="#parameter-PermissionSetArn"><code>PermissionSetArn</code></a>, <a href="#parameter-ManagedPolicyArn"><code>ManagedPolicyArn</code></a></td>
    <td></td>
    <td>Detaches the attached Amazon Web Services managed policy ARN from the specified permission set.</td>
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
    defaultValue="describe_permission_set"
    values={[
        { label: 'describe_permission_set', value: 'describe_permission_set' },
        { label: 'list_permission_sets', value: 'list_permission_sets' }
    ]}
>
<TabItem value="describe_permission_set">

Gets the details of the permission set.

```sql
SELECT
CreatedDate,
Description,
Name,
PermissionSetArn,
RelayState,
SessionDuration
FROM aws.sso_admin.permission_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_permission_sets">

Lists the PermissionSets in an IAM Identity Center instance.

```sql
SELECT
permission_set
FROM aws.sso_admin.permission_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_permission_set"
    values={[
        { label: 'create_permission_set', value: 'create_permission_set' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_permission_set">

Creates a permission set within a specified IAM Identity Center instance. To grant users and groups access to Amazon Web Services account resources, use CreateAccountAssignment .

```sql
INSERT INTO aws.sso_admin.permission_sets (
Name,
Description,
InstanceArn,
SessionDuration,
RelayState,
Tags,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ Description }}',
'{{ InstanceArn }}' /* required */,
'{{ SessionDuration }}',
'{{ RelayState }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
PermissionSet
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: permission_sets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the permission_sets resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the PermissionSet.
    - name: Description
      value: "{{ Description }}"
      description: |
        The description of the PermissionSet.
    - name: InstanceArn
      value: "{{ InstanceArn }}"
      description: |
        The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
    - name: SessionDuration
      value: "{{ SessionDuration }}"
      description: |
        The length of time that the application user sessions are valid in the ISO-8601 standard.
    - name: RelayState
      value: "{{ RelayState }}"
      description: |
        Used to redirect users within the application during the federation authentication process.
    - name: Tags
      description: |
        The tags to attach to the new PermissionSet.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="attach_customer_managed_policy_reference_to_permission_set"
    values={[
        { label: 'attach_customer_managed_policy_reference_to_permission_set', value: 'attach_customer_managed_policy_reference_to_permission_set' },
        { label: 'attach_managed_policy_to_permission_set', value: 'attach_managed_policy_to_permission_set' },
        { label: 'provision_permission_set', value: 'provision_permission_set' },
        { label: 'update_permission_set', value: 'update_permission_set' }
    ]}
>
<TabItem value="attach_customer_managed_policy_reference_to_permission_set">

Attaches the specified customer managed policy to the specified PermissionSet.

```sql
UPDATE aws.sso_admin.permission_sets
SET 
InstanceArn = '{{ InstanceArn }}',
PermissionSetArn = '{{ PermissionSetArn }}',
CustomerManagedPolicyReference = '{{ CustomerManagedPolicyReference }}'
WHERE 
region = '{{ region }}' --required
AND InstanceArn = '{{ InstanceArn }}' --required
AND PermissionSetArn = '{{ PermissionSetArn }}' --required
AND CustomerManagedPolicyReference = '{{ CustomerManagedPolicyReference }}' --required;
```
</TabItem>
<TabItem value="attach_managed_policy_to_permission_set">

Attaches an Amazon Web Services managed policy ARN to a permission set. If the permission set is already referenced by one or more account assignments, you will need to call ProvisionPermissionSet after this operation. Calling ProvisionPermissionSet applies the corresponding IAM policy updates to all assigned accounts.

```sql
UPDATE aws.sso_admin.permission_sets
SET 
InstanceArn = '{{ InstanceArn }}',
PermissionSetArn = '{{ PermissionSetArn }}',
ManagedPolicyArn = '{{ ManagedPolicyArn }}'
WHERE 
region = '{{ region }}' --required
AND InstanceArn = '{{ InstanceArn }}' --required
AND PermissionSetArn = '{{ PermissionSetArn }}' --required
AND ManagedPolicyArn = '{{ ManagedPolicyArn }}' --required;
```
</TabItem>
<TabItem value="provision_permission_set">

The process by which a specified permission set is provisioned to the specified target.

```sql
UPDATE aws.sso_admin.permission_sets
SET 
InstanceArn = '{{ InstanceArn }}',
PermissionSetArn = '{{ PermissionSetArn }}',
TargetId = '{{ TargetId }}',
TargetType = '{{ TargetType }}'
WHERE 
region = '{{ region }}' --required
AND InstanceArn = '{{ InstanceArn }}' --required
AND PermissionSetArn = '{{ PermissionSetArn }}' --required
AND TargetType = '{{ TargetType }}' --required
RETURNING
PermissionSetProvisioningStatus;
```
</TabItem>
<TabItem value="update_permission_set">

Updates an existing permission set.

```sql
UPDATE aws.sso_admin.permission_sets
SET 
InstanceArn = '{{ InstanceArn }}',
PermissionSetArn = '{{ PermissionSetArn }}',
Description = '{{ Description }}',
SessionDuration = '{{ SessionDuration }}',
RelayState = '{{ RelayState }}'
WHERE 
region = '{{ region }}' --required
AND InstanceArn = '{{ InstanceArn }}' --required
AND PermissionSetArn = '{{ PermissionSetArn }}' --required;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_inline_policy_to_permission_set"
    values={[
        { label: 'put_inline_policy_to_permission_set', value: 'put_inline_policy_to_permission_set' },
        { label: 'put_permissions_boundary_to_permission_set', value: 'put_permissions_boundary_to_permission_set' }
    ]}
>
<TabItem value="put_inline_policy_to_permission_set">

Attaches an inline policy to a permission set. If the permission set is already referenced by one or more account assignments, you will need to call ProvisionPermissionSet after this action to apply the corresponding IAM policy updates to all assigned accounts.

```sql
REPLACE aws.sso_admin.permission_sets
SET 
InstanceArn = '{{ InstanceArn }}',
PermissionSetArn = '{{ PermissionSetArn }}',
InlinePolicy = '{{ InlinePolicy }}'
WHERE 
region = '{{ region }}' --required
AND InstanceArn = '{{ InstanceArn }}' --required
AND PermissionSetArn = '{{ PermissionSetArn }}' --required
AND InlinePolicy = '{{ InlinePolicy }}' --required;
```
</TabItem>
<TabItem value="put_permissions_boundary_to_permission_set">

Attaches an Amazon Web Services managed or customer managed policy to the specified PermissionSet as a permissions boundary.

```sql
REPLACE aws.sso_admin.permission_sets
SET 
InstanceArn = '{{ InstanceArn }}',
PermissionSetArn = '{{ PermissionSetArn }}',
PermissionsBoundary = '{{ PermissionsBoundary }}'
WHERE 
region = '{{ region }}' --required
AND InstanceArn = '{{ InstanceArn }}' --required
AND PermissionSetArn = '{{ PermissionSetArn }}' --required
AND PermissionsBoundary = '{{ PermissionsBoundary }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_permission_set"
    values={[
        { label: 'delete_permission_set', value: 'delete_permission_set' }
    ]}
>
<TabItem value="delete_permission_set">

Deletes the specified permission set.

```sql
DELETE FROM aws.sso_admin.permission_sets
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="delete_inline_policy_from_permission_set"
    values={[
        { label: 'delete_inline_policy_from_permission_set', value: 'delete_inline_policy_from_permission_set' },
        { label: 'delete_permissions_boundary_from_permission_set', value: 'delete_permissions_boundary_from_permission_set' },
        { label: 'detach_customer_managed_policy_reference_from_permission_set', value: 'detach_customer_managed_policy_reference_from_permission_set' },
        { label: 'detach_managed_policy_from_permission_set', value: 'detach_managed_policy_from_permission_set' }
    ]}
>
<TabItem value="delete_inline_policy_from_permission_set">

Deletes the inline policy from a specified permission set.

```sql
EXEC aws.sso_admin.permission_sets.delete_inline_policy_from_permission_set 
@region='{{ region }}' --required 
@@json=
'{
"InstanceArn": "{{ InstanceArn }}", 
"PermissionSetArn": "{{ PermissionSetArn }}"
}'
;
```
</TabItem>
<TabItem value="delete_permissions_boundary_from_permission_set">

Deletes the permissions boundary from a specified PermissionSet.

```sql
EXEC aws.sso_admin.permission_sets.delete_permissions_boundary_from_permission_set 
@region='{{ region }}' --required 
@@json=
'{
"InstanceArn": "{{ InstanceArn }}", 
"PermissionSetArn": "{{ PermissionSetArn }}"
}'
;
```
</TabItem>
<TabItem value="detach_customer_managed_policy_reference_from_permission_set">

Detaches the specified customer managed policy from the specified PermissionSet.

```sql
EXEC aws.sso_admin.permission_sets.detach_customer_managed_policy_reference_from_permission_set 
@region='{{ region }}' --required 
@@json=
'{
"InstanceArn": "{{ InstanceArn }}", 
"PermissionSetArn": "{{ PermissionSetArn }}", 
"CustomerManagedPolicyReference": "{{ CustomerManagedPolicyReference }}"
}'
;
```
</TabItem>
<TabItem value="detach_managed_policy_from_permission_set">

Detaches the attached Amazon Web Services managed policy ARN from the specified permission set.

```sql
EXEC aws.sso_admin.permission_sets.detach_managed_policy_from_permission_set 
@region='{{ region }}' --required 
@@json=
'{
"InstanceArn": "{{ InstanceArn }}", 
"PermissionSetArn": "{{ PermissionSetArn }}", 
"ManagedPolicyArn": "{{ ManagedPolicyArn }}"
}'
;
```
</TabItem>
</Tabs>
