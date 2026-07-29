--- 
title: permission_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - permission_associations
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

Creates, updates, deletes, gets or lists a <code>permission_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="permission_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ram.permission_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_permission_associations"
    values={[
        { label: 'list_permission_associations', value: 'list_permission_associations' }
    ]}
>
<TabItem value="list_permission_associations">

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
    <td>A structure with information about this customer managed permission.</td>
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
    <td><a href="#list_permission_associations"><CopyableCode code="list_permission_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists information about the managed permission and its associations to any resource shares that use this managed permission. This lets you see which resource shares use which versions of the specified managed permission. Always check the NextToken response parameter for a null value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The NextToken response parameter value is null only when there are no more results to display.</td>
</tr>
<tr>
    <td><a href="#replace_permission_associations"><CopyableCode code="replace_permission_associations" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-fromPermissionArn"><code>fromPermissionArn</code></a>, <a href="#parameter-toPermissionArn"><code>toPermissionArn</code></a></td>
    <td></td>
    <td>Updates all resource shares that use a managed permission to a different managed permission. This operation always applies the default version of the target managed permission. You can optionally specify that the update applies to only resource shares that currently use a specified version. This enables you to update to the latest version, without changing the which managed permission is used. You can use this operation to update all of your resource shares to use the current default version of the permission by specifying the same value for the fromPermissionArn and toPermissionArn parameters. You can use the optional fromPermissionVersion parameter to update only those resources that use a specified version of the managed permission to the new managed permission. To successfully perform this operation, you must have permission to update the resource-based policy on all affected resource types.</td>
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
    defaultValue="list_permission_associations"
    values={[
        { label: 'list_permission_associations', value: 'list_permission_associations' }
    ]}
>
<TabItem value="list_permission_associations">

Lists information about the managed permission and its associations to any resource shares that use this managed permission. This lets you see which resource shares use which versions of the specified managed permission. Always check the NextToken response parameter for a null value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The NextToken response parameter value is null only when there are no more results to display.

```sql
SELECT
next_token,
permissions
FROM aws.ram.permission_associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="replace_permission_associations"
    values={[
        { label: 'replace_permission_associations', value: 'replace_permission_associations' }
    ]}
>
<TabItem value="replace_permission_associations">

Updates all resource shares that use a managed permission to a different managed permission. This operation always applies the default version of the target managed permission. You can optionally specify that the update applies to only resource shares that currently use a specified version. This enables you to update to the latest version, without changing the which managed permission is used. You can use this operation to update all of your resource shares to use the current default version of the permission by specifying the same value for the fromPermissionArn and toPermissionArn parameters. You can use the optional fromPermissionVersion parameter to update only those resources that use a specified version of the managed permission to the new managed permission. To successfully perform this operation, you must have permission to update the resource-based policy on all affected resource types.

```sql
REPLACE aws.ram.permission_associations
SET 
fromPermissionArn = '{{ fromPermissionArn }}',
fromPermissionVersion = {{ fromPermissionVersion }},
toPermissionArn = '{{ toPermissionArn }}',
clientToken = '{{ clientToken }}'
WHERE 
region = '{{ region }}' --required
AND fromPermissionArn = '{{ fromPermissionArn }}' --required
AND toPermissionArn = '{{ toPermissionArn }}' --required
RETURNING
client_token,
replace_permission_associations_work;
```
</TabItem>
</Tabs>
