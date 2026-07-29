--- 
title: account_assignments
hide_title: false
hide_table_of_contents: false
keywords:
  - account_assignments
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

Creates, updates, deletes, gets or lists an <code>account_assignments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_assignments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sso_admin.account_assignments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_account_assignments"
    values={[
        { label: 'list_account_assignments', value: 'list_account_assignments' }
    ]}
>
<TabItem value="list_account_assignments">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Web Services account. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="permission_set_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the permission set. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;&#123;1,5&#125;)&#123;0,3&#125;:sso:::permissionSet/(sso)?ins-&#91;a-zA-Z0-9-.&#93;&#123;16&#125;/ps-&#91;a-zA-Z0-9-./&#93;&#123;16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="principal_id" /></td>
    <td><code>string</code></td>
    <td>An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the IAM Identity Center Identity Store API Reference. (pattern: &lt;code&gt;(&#91;0-9a-f&#93;&#123;10&#125;-|)&#91;A-Fa-f0-9&#93;&#123;8&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;4&#125;-&#91;A-Fa-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="principal_type" /></td>
    <td><code>string</code></td>
    <td>The entity type for which the assignment will be created. (USER, GROUP)</td>
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
    <td><a href="#list_account_assignments"><CopyableCode code="list_account_assignments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the assignee of the specified Amazon Web Services account with the specified permission set.</td>
</tr>
<tr>
    <td><a href="#create_account_assignment"><CopyableCode code="create_account_assignment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceArn"><code>InstanceArn</code></a>, <a href="#parameter-TargetId"><code>TargetId</code></a>, <a href="#parameter-TargetType"><code>TargetType</code></a>, <a href="#parameter-PermissionSetArn"><code>PermissionSetArn</code></a>, <a href="#parameter-PrincipalType"><code>PrincipalType</code></a>, <a href="#parameter-PrincipalId"><code>PrincipalId</code></a></td>
    <td></td>
    <td>Assigns access to a principal for a specified Amazon Web Services account using a specified permission set. The term principal here refers to a user or group that is defined in IAM Identity Center. As part of a successful CreateAccountAssignment call, the specified permission set will automatically be provisioned to the account in the form of an IAM policy. That policy is attached to the IAM role created in IAM Identity Center. If the permission set is subsequently updated, the corresponding IAM policies attached to roles in your accounts will not be updated automatically. In this case, you must call ProvisionPermissionSet to make these updates. After a successful response, call DescribeAccountAssignmentCreationStatus to describe the status of an assignment creation request.</td>
</tr>
<tr>
    <td><a href="#delete_account_assignment"><CopyableCode code="delete_account_assignment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a principal's access from a specified Amazon Web Services account using a specified permission set. After a successful response, call DescribeAccountAssignmentDeletionStatus to describe the status of an assignment deletion request.</td>
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
    defaultValue="list_account_assignments"
    values={[
        { label: 'list_account_assignments', value: 'list_account_assignments' }
    ]}
>
<TabItem value="list_account_assignments">

Lists the assignee of the specified Amazon Web Services account with the specified permission set.

```sql
SELECT
account_id,
permission_set_arn,
principal_id,
principal_type
FROM aws.sso_admin.account_assignments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_account_assignment"
    values={[
        { label: 'create_account_assignment', value: 'create_account_assignment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_account_assignment">

Assigns access to a principal for a specified Amazon Web Services account using a specified permission set. The term principal here refers to a user or group that is defined in IAM Identity Center. As part of a successful CreateAccountAssignment call, the specified permission set will automatically be provisioned to the account in the form of an IAM policy. That policy is attached to the IAM role created in IAM Identity Center. If the permission set is subsequently updated, the corresponding IAM policies attached to roles in your accounts will not be updated automatically. In this case, you must call ProvisionPermissionSet to make these updates. After a successful response, call DescribeAccountAssignmentCreationStatus to describe the status of an assignment creation request.

```sql
INSERT INTO aws.sso_admin.account_assignments (
InstanceArn,
TargetId,
TargetType,
PermissionSetArn,
PrincipalType,
PrincipalId,
region
)
SELECT 
'{{ InstanceArn }}' /* required */,
'{{ TargetId }}' /* required */,
'{{ TargetType }}' /* required */,
'{{ PermissionSetArn }}' /* required */,
'{{ PrincipalType }}' /* required */,
'{{ PrincipalId }}' /* required */,
'{{ region }}'
RETURNING
account_assignment_creation_status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: account_assignments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the account_assignments resource.
    - name: InstanceArn
      value: "{{ InstanceArn }}"
      description: |
        The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
    - name: TargetId
      value: "{{ TargetId }}"
      description: |
        TargetID is an Amazon Web Services account identifier, (For example, 123456789012).
    - name: TargetType
      value: "{{ TargetType }}"
      description: |
        The entity type for which the assignment will be created.
      valid_values: ['AWS_ACCOUNT']
    - name: PermissionSetArn
      value: "{{ PermissionSetArn }}"
      description: |
        The ARN of the permission set that the admin wants to grant the principal access to.
    - name: PrincipalType
      value: "{{ PrincipalType }}"
      description: |
        The entity type for which the assignment will be created.
      valid_values: ['USER', 'GROUP']
    - name: PrincipalId
      value: "{{ PrincipalId }}"
      description: |
        An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the IAM Identity Center Identity Store API Reference.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_account_assignment"
    values={[
        { label: 'delete_account_assignment', value: 'delete_account_assignment' }
    ]}
>
<TabItem value="delete_account_assignment">

Deletes a principal's access from a specified Amazon Web Services account using a specified permission set. After a successful response, call DescribeAccountAssignmentDeletionStatus to describe the status of an assignment deletion request.

```sql
DELETE FROM aws.sso_admin.account_assignments
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
