--- 
title: permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - permissions
  - ram
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

Creates, updates, deletes, gets or lists a <code>permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ram.permissions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_permission"
    values={[
        { label: 'get_permission', value: 'get_permission' },
        { label: 'list_permissions', value: 'list_permissions' }
    ]}
>
<TabItem value="get_permission">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of this permission.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of this RAM managed permission.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the permission was created.</td>
</tr>
<tr>
    <td><CopyableCode code="default_version" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the version of the permission represented in this response is the default version for this permission.</td>
</tr>
<tr>
    <td><CopyableCode code="feature_set" /></td>
    <td><code>string</code></td>
    <td>Indicates what features are available for this resource share. This parameter can have one of the following values: STANDARD – A resource share that supports all functionality. These resource shares are visible to all principals you share the resource share with. You can modify these resource shares in RAM using the console or APIs. This resource share might have been created by RAM, or it might have been CREATED_FROM_POLICY and then promoted. CREATED_FROM_POLICY – The customer manually shared a resource by attaching a resource-based policy. That policy did not match any existing managed permissions, so RAM created this customer managed permission automatically on the customer's behalf based on the attached policy document. This type of resource share is visible only to the Amazon Web Services account that created it. You can't modify it in RAM unless you promote it. For more information, see PromoteResourceShareCreatedFromPolicy. PROMOTING_TO_STANDARD – This resource share was originally CREATED_FROM_POLICY, but the customer ran the PromoteResourceShareCreatedFromPolicy and that operation is still in progress. This value changes to STANDARD when complete. (CREATED_FROM_POLICY, PROMOTING_TO_STANDARD, STANDARD)</td>
</tr>
<tr>
    <td><CopyableCode code="is_resource_type_default" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the version of the permission represented in this response is the default version for all resources of this resource type.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the permission was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="permission" /></td>
    <td><code>string</code></td>
    <td>The permission's effect and actions in JSON format. The effect indicates whether the specified actions are allowed or denied. The actions list the operations to which the principal is granted or denied access.</td>
</tr>
<tr>
    <td><CopyableCode code="permission_type" /></td>
    <td><code>string</code></td>
    <td>The type of managed permission. This can be one of the following values: AWS_MANAGED – Amazon Web Services created and manages this managed permission. You can associate it with your resource shares, but you can't modify it. CUSTOMER_MANAGED – You, or another principal in your account created this managed permission. You can associate it with your resource shares and create new versions that have different permissions. (CUSTOMER_MANAGED, AWS_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The resource type to which this permission applies.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the association between the permission and the resource share. The following are the possible values: ATTACHABLE – This permission or version can be associated with resource shares. UNATTACHABLE – This permission or version can't currently be associated with resource shares. DELETING – This permission or version is in the process of being deleted. DELETED – This permission or version is deleted. (ATTACHABLE, UNATTACHABLE, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tag key and value pairs attached to the resource share.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the permission described in this response.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_permissions">

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
    <td>If present, this value indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null. This indicates that this is the last page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>array</code></td>
    <td>An array of objects with information about the permissions.</td>
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
    <td><a href="#get_permission"><CopyableCode code="get_permission" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the contents of a managed permission in JSON format.</td>
</tr>
<tr>
    <td><a href="#list_permissions"><CopyableCode code="list_permissions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of available RAM permissions that you can use for the supported resource types. Always check the NextToken response parameter for a null value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The NextToken response parameter value is null only when there are no more results to display.</td>
</tr>
<tr>
    <td><a href="#create_permission"><CopyableCode code="create_permission" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-resourceType"><code>resourceType</code></a>, <a href="#parameter-policyTemplate"><code>policyTemplate</code></a></td>
    <td></td>
    <td>Creates a customer managed permission for a specified resource type that you can attach to resource shares. It is created in the Amazon Web Services Region in which you call the operation.</td>
</tr>
<tr>
    <td><a href="#delete_permission"><CopyableCode code="delete_permission" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-permissionArn"><code>permissionArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes the specified customer managed permission in the Amazon Web Services Region in which you call this operation. You can delete a customer managed permission only if it isn't attached to any resource share. The operation deletes all versions associated with the customer managed permission.</td>
</tr>
<tr>
    <td><a href="#promote_permission_created_from_policy"><CopyableCode code="promote_permission_created_from_policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-permissionArn"><code>permissionArn</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>When you attach a resource-based policy to a resource, RAM automatically creates a resource share of featureSet=CREATED_FROM_POLICY with a managed permission that has the same IAM permissions as the original resource-based policy. However, this type of managed permission is visible to only the resource share owner, and the associated resource share can't be modified by using RAM. This operation creates a separate, fully manageable customer managed permission that has the same IAM permissions as the original resource-based policy. You can associate this customer managed permission to any resource shares. Before you use PromoteResourceShareCreatedFromPolicy, you should first run this operation to ensure that you have an appropriate customer managed permission that can be associated with the promoted resource share. The original CREATED_FROM_POLICY policy isn't deleted, and resource shares using that original policy aren't automatically updated. You can't modify a CREATED_FROM_POLICY resource share so you can't associate the new customer managed permission by using ReplacePermsissionAssociations. However, if you use PromoteResourceShareCreatedFromPolicy, that operation automatically associates the fully manageable customer managed permission to the newly promoted STANDARD resource share. After you promote a resource share, if the original CREATED_FROM_POLICY managed permission has no other associations to A resource share, then RAM automatically deletes it.</td>
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
<tr id="parameter-permissionArn">
    <td><CopyableCode code="permissionArn" /></td>
    <td><code>string</code></td>
    <td>Specifies the Amazon Resource Name (ARN) of the customer managed permission that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>Specifies a unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an IdempotentParameterMismatch error.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_permission"
    values={[
        { label: 'get_permission', value: 'get_permission' },
        { label: 'list_permissions', value: 'list_permissions' }
    ]}
>
<TabItem value="get_permission">

Retrieves the contents of a managed permission in JSON format.

```sql
SELECT
name,
arn,
creation_time,
default_version,
feature_set,
is_resource_type_default,
last_updated_time,
permission,
permission_type,
resource_type,
status,
tags,
version
FROM aws.ram.permissions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_permissions">

Retrieves a list of available RAM permissions that you can use for the supported resource types. Always check the NextToken response parameter for a null value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The NextToken response parameter value is null only when there are no more results to display.

```sql
SELECT
next_token,
permissions
FROM aws.ram.permissions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_permission"
    values={[
        { label: 'create_permission', value: 'create_permission' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_permission">

Creates a customer managed permission for a specified resource type that you can attach to resource shares. It is created in the Amazon Web Services Region in which you call the operation.

```sql
INSERT INTO aws.ram.permissions (
name,
resourceType,
policyTemplate,
clientToken,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ resourceType }}' /* required */,
'{{ policyTemplate }}' /* required */,
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
client_token,
permission
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: permissions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the permissions resource.
    - name: name
      value: "{{ name }}"
    - name: resourceType
      value: "{{ resourceType }}"
    - name: policyTemplate
      value: "{{ policyTemplate }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_permission"
    values={[
        { label: 'delete_permission', value: 'delete_permission' }
    ]}
>
<TabItem value="delete_permission">

Deletes the specified customer managed permission in the Amazon Web Services Region in which you call this operation. You can delete a customer managed permission only if it isn't attached to any resource share. The operation deletes all versions associated with the customer managed permission.

```sql
DELETE FROM aws.ram.permissions
WHERE permissionArn = '{{ permissionArn }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="promote_permission_created_from_policy"
    values={[
        { label: 'promote_permission_created_from_policy', value: 'promote_permission_created_from_policy' }
    ]}
>
<TabItem value="promote_permission_created_from_policy">

When you attach a resource-based policy to a resource, RAM automatically creates a resource share of featureSet=CREATED_FROM_POLICY with a managed permission that has the same IAM permissions as the original resource-based policy. However, this type of managed permission is visible to only the resource share owner, and the associated resource share can't be modified by using RAM. This operation creates a separate, fully manageable customer managed permission that has the same IAM permissions as the original resource-based policy. You can associate this customer managed permission to any resource shares. Before you use PromoteResourceShareCreatedFromPolicy, you should first run this operation to ensure that you have an appropriate customer managed permission that can be associated with the promoted resource share. The original CREATED_FROM_POLICY policy isn't deleted, and resource shares using that original policy aren't automatically updated. You can't modify a CREATED_FROM_POLICY resource share so you can't associate the new customer managed permission by using ReplacePermsissionAssociations. However, if you use PromoteResourceShareCreatedFromPolicy, that operation automatically associates the fully manageable customer managed permission to the newly promoted STANDARD resource share. After you promote a resource share, if the original CREATED_FROM_POLICY managed permission has no other associations to A resource share, then RAM automatically deletes it.

```sql
EXEC aws.ram.permissions.promote_permission_created_from_policy 
@region='{{ region }}' --required 
@@json=
'{
"permissionArn": "{{ permissionArn }}", 
"name": "{{ name }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
