--- 
title: access_grants_instance_resource_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - access_grants_instance_resource_policies
  - s3control
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

Creates, updates, deletes, gets or lists an <code>access_grants_instance_resource_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_grants_instance_resource_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3control.access_grants_instance_resource_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_access_grants_instance_resource_policy"
    values={[
        { label: 'get_access_grants_instance_resource_policy', value: 'get_access_grants_instance_resource_policy' }
    ]}
>
<TabItem value="get_access_grants_instance_resource_policy">

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
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string</code></td>
    <td>The date and time when you created the S3 Access Grants instance resource policy.</td>
</tr>
<tr>
    <td><CopyableCode code="Organization" /></td>
    <td><code>string</code></td>
    <td>The Organization of the resource policy of the S3 Access Grants instance.</td>
</tr>
<tr>
    <td><CopyableCode code="Policy" /></td>
    <td><code>string</code></td>
    <td>The resource policy of the S3 Access Grants instance.</td>
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
    <td><a href="#get_access_grants_instance_resource_policy"><CopyableCode code="get_access_grants_instance_resource_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the resource policy of the S3 Access Grants instance. Permissions You must have the s3:GetAccessGrantsInstanceResourcePolicy permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#put_access_grants_instance_resource_policy"><CopyableCode code="put_access_grants_instance_resource_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the resource policy of the S3 Access Grants instance. Permissions You must have the s3:PutAccessGrantsInstanceResourcePolicy permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#delete_access_grants_instance_resource_policy"><CopyableCode code="delete_access_grants_instance_resource_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the resource policy of the S3 Access Grants instance. The resource policy is used to manage cross-account access to your S3 Access Grants instance. By deleting the resource policy, you delete any cross-account permissions to your S3 Access Grants instance. Permissions You must have the s3:DeleteAccessGrantsInstanceResourcePolicy permission to use this operation.</td>
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
<tr id="parameter-x-amz-account-id">
    <td><CopyableCode code="x-amz-account-id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the S3 Access Grants instance.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_access_grants_instance_resource_policy"
    values={[
        { label: 'get_access_grants_instance_resource_policy', value: 'get_access_grants_instance_resource_policy' }
    ]}
>
<TabItem value="get_access_grants_instance_resource_policy">

Returns the resource policy of the S3 Access Grants instance. Permissions You must have the s3:GetAccessGrantsInstanceResourcePolicy permission to use this operation.

```sql
SELECT
CreatedAt,
Organization,
Policy
FROM aws.s3control.access_grants_instance_resource_policies
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_access_grants_instance_resource_policy"
    values={[
        { label: 'put_access_grants_instance_resource_policy', value: 'put_access_grants_instance_resource_policy' }
    ]}
>
<TabItem value="put_access_grants_instance_resource_policy">

Updates the resource policy of the S3 Access Grants instance. Permissions You must have the s3:PutAccessGrantsInstanceResourcePolicy permission to use this operation.

```sql
REPLACE aws.s3control.access_grants_instance_resource_policies
SET 
Policy = '{{ Policy }}',
Organization = '{{ Organization }}'
WHERE 
`x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND region = '{{ region }}' --required
RETURNING
CreatedAt,
Organization,
Policy;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_access_grants_instance_resource_policy"
    values={[
        { label: 'delete_access_grants_instance_resource_policy', value: 'delete_access_grants_instance_resource_policy' }
    ]}
>
<TabItem value="delete_access_grants_instance_resource_policy">

Deletes the resource policy of the S3 Access Grants instance. The resource policy is used to manage cross-account access to your S3 Access Grants instance. By deleting the resource policy, you delete any cross-account permissions to your S3 Access Grants instance. Permissions You must have the s3:DeleteAccessGrantsInstanceResourcePolicy permission to use this operation.

```sql
DELETE FROM aws.s3control.access_grants_instance_resource_policies
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
