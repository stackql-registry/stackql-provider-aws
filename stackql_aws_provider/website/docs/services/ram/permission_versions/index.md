--- 
title: permission_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - permission_versions
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

Creates, updates, deletes, gets or lists a <code>permission_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="permission_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ram.permission_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_permission_versions"
    values={[
        { label: 'list_permission_versions', value: 'list_permission_versions' }
    ]}
>
<TabItem value="list_permission_versions">

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
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If present, this value indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null. This indicates that this is the last page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>array</code></td>
    <td>An array of objects that contain details for each of the available versions.</td>
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
    <td><a href="#list_permission_versions"><CopyableCode code="list_permission_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the available versions of the specified RAM permission. Always check the NextToken response parameter for a null value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The NextToken response parameter value is null only when there are no more results to display.</td>
</tr>
<tr>
    <td><a href="#create_permission_version"><CopyableCode code="create_permission_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-permissionArn"><code>permissionArn</code></a>, <a href="#parameter-policyTemplate"><code>policyTemplate</code></a></td>
    <td></td>
    <td>Creates a new version of the specified customer managed permission. The new version is automatically set as the default version of the customer managed permission. New resource shares automatically use the default permission. Existing resource shares continue to use their original permission versions, but you can use ReplacePermissionAssociations to update them. If the specified customer managed permission already has the maximum of 5 versions, then you must delete one of the existing versions before you can create a new one.</td>
</tr>
<tr>
    <td><a href="#set_default_permission_version"><CopyableCode code="set_default_permission_version" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-permissionArn"><code>permissionArn</code></a>, <a href="#parameter-permissionVersion"><code>permissionVersion</code></a></td>
    <td></td>
    <td>Designates the specified version number as the default version for the specified customer managed permission. New resource shares automatically use this new default permission. Existing resource shares continue to use their original permission version, but you can use ReplacePermissionAssociations to update them.</td>
</tr>
<tr>
    <td><a href="#delete_permission_version"><CopyableCode code="delete_permission_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-permissionArn"><code>permissionArn</code></a>, <a href="#parameter-permissionVersion"><code>permissionVersion</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes one version of a customer managed permission. The version you specify must not be attached to any resource share and must not be the default version for the permission. If a customer managed permission has the maximum of 5 versions, then you must delete at least one version before you can create another.</td>
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
    <td>Specifies the Amazon Resource Name (ARN) of the permission with the version you want to delete.</td>
</tr>
<tr id="parameter-permissionVersion">
    <td><CopyableCode code="permissionVersion" /></td>
    <td><code>integer</code></td>
    <td>Specifies the version number to delete. You can't delete the default version for a customer managed permission. You can't delete a version if it's the only version of the permission. You must either first create another version, or delete the permission completely. You can't delete a version if it is attached to any resource shares. If the version is the default, you must first use SetDefaultPermissionVersion to set a different version as the default for the customer managed permission, and then use AssociateResourceSharePermission to update your resource shares to use the new default version.</td>
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
    defaultValue="list_permission_versions"
    values={[
        { label: 'list_permission_versions', value: 'list_permission_versions' }
    ]}
>
<TabItem value="list_permission_versions">

Lists the available versions of the specified RAM permission. Always check the NextToken response parameter for a null value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The NextToken response parameter value is null only when there are no more results to display.

```sql
SELECT
nextToken,
permissions
FROM aws.ram.permission_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_permission_version"
    values={[
        { label: 'create_permission_version', value: 'create_permission_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_permission_version">

Creates a new version of the specified customer managed permission. The new version is automatically set as the default version of the customer managed permission. New resource shares automatically use the default permission. Existing resource shares continue to use their original permission versions, but you can use ReplacePermissionAssociations to update them. If the specified customer managed permission already has the maximum of 5 versions, then you must delete one of the existing versions before you can create a new one.

```sql
INSERT INTO aws.ram.permission_versions (
permissionArn,
policyTemplate,
clientToken,
region
)
SELECT 
'{{ permissionArn }}' /* required */,
'{{ policyTemplate }}' /* required */,
'{{ clientToken }}',
'{{ region }}'
RETURNING
clientToken,
permission
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: permission_versions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the permission_versions resource.
    - name: permissionArn
      value: "{{ permissionArn }}"
    - name: policyTemplate
      value: "{{ policyTemplate }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_default_permission_version"
    values={[
        { label: 'set_default_permission_version', value: 'set_default_permission_version' }
    ]}
>
<TabItem value="set_default_permission_version">

Designates the specified version number as the default version for the specified customer managed permission. New resource shares automatically use this new default permission. Existing resource shares continue to use their original permission version, but you can use ReplacePermissionAssociations to update them.

```sql
UPDATE aws.ram.permission_versions
SET 
permissionArn = '{{ permissionArn }}',
permissionVersion = {{ permissionVersion }},
clientToken = '{{ clientToken }}'
WHERE 
region = '{{ region }}' --required
AND permissionArn = '{{ permissionArn }}' --required
AND permissionVersion = '{{ permissionVersion }}' --required
RETURNING
clientToken,
returnValue;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_permission_version"
    values={[
        { label: 'delete_permission_version', value: 'delete_permission_version' }
    ]}
>
<TabItem value="delete_permission_version">

Deletes one version of a customer managed permission. The version you specify must not be attached to any resource share and must not be the default version for the permission. If a customer managed permission has the maximum of 5 versions, then you must delete at least one version before you can create another.

```sql
DELETE FROM aws.ram.permission_versions
WHERE permissionArn = '{{ permissionArn }}' --required
AND permissionVersion = '{{ permissionVersion }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>
