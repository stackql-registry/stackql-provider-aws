--- 
title: access_grants_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - access_grants_instances
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

Creates, updates, deletes, gets or lists an <code>access_grants_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_grants_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3control.access_grants_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_access_grants_instance"
    values={[
        { label: 'get_access_grants_instance', value: 'get_access_grants_instance' }
    ]}
>
<TabItem value="get_access_grants_instance">

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
    <td><CopyableCode code="AccessGrantsInstanceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the S3 Access Grants instance.</td>
</tr>
<tr>
    <td><CopyableCode code="AccessGrantsInstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the S3 Access Grants instance. The ID is default. You can have one S3 Access Grants instance per Region per account.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string</code></td>
    <td>The date and time when you created the S3 Access Grants instance.</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityCenterApplicationArn" /></td>
    <td><code>string</code></td>
    <td>If you associated your S3 Access Grants instance with an Amazon Web Services IAM Identity Center instance, this field returns the Amazon Resource Name (ARN) of the IAM Identity Center instance application; a subresource of the original Identity Center instance. S3 Access Grants creates this Identity Center application for the specific S3 Access Grants instance.</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityCenterArn" /></td>
    <td><code>string</code></td>
    <td>If you associated your S3 Access Grants instance with an Amazon Web Services IAM Identity Center instance, this field returns the Amazon Resource Name (ARN) of the IAM Identity Center instance application; a subresource of the original Identity Center instance. S3 Access Grants creates this Identity Center application for the specific S3 Access Grants instance.</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityCenterInstanceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon Web Services IAM Identity Center instance that you are associating with your S3 Access Grants instance. An IAM Identity Center instance is your corporate identity directory that you added to the IAM Identity Center. You can use the ListInstances API operation to retrieve a list of your Identity Center instances and their ARNs.</td>
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
    <td><a href="#get_access_grants_instance"><CopyableCode code="get_access_grants_instance" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the S3 Access Grants instance for a Region in your account. Permissions You must have the s3:GetAccessGrantsInstance permission to use this operation. GetAccessGrantsInstance is not supported for cross-account access. You can only call the API from the account that owns the S3 Access Grants instance.</td>
</tr>
<tr>
    <td><a href="#create_access_grants_instance"><CopyableCode code="create_access_grants_instance" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an S3 Access Grants instance, which serves as a logical grouping for access grants. You can create one S3 Access Grants instance per Region per account. Permissions You must have the s3:CreateAccessGrantsInstance permission to use this operation. Additional Permissions To associate an IAM Identity Center instance with your S3 Access Grants instance, you must also have the sso:DescribeInstance, sso:CreateApplication, sso:PutApplicationGrant, and sso:PutApplicationAuthenticationMethod permissions.</td>
</tr>
<tr>
    <td><a href="#delete_access_grants_instance"><CopyableCode code="delete_access_grants_instance" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes your S3 Access Grants instance. You must first delete the access grants and locations before S3 Access Grants can delete the instance. See DeleteAccessGrant and DeleteAccessGrantsLocation. If you have associated an IAM Identity Center instance with your S3 Access Grants instance, you must first dissassociate the Identity Center instance from the S3 Access Grants instance before you can delete the S3 Access Grants instance. See AssociateAccessGrantsIdentityCenter and DissociateAccessGrantsIdentityCenter. Permissions You must have the s3:DeleteAccessGrantsInstance permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#list_access_grants_instances"><CopyableCode code="list_access_grants_instances" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns a list of S3 Access Grants instances. An S3 Access Grants instance serves as a logical grouping for your individual access grants. You can only have one S3 Access Grants instance per Region per account. Permissions You must have the s3:ListAccessGrantsInstances permission to use this operation.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of access grants that you would like returned in the List Access Grants response. If the results include the pagination token NextToken, make another call using the NextToken to determine if there are more results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token to request the next page of results. Pass this value into a subsequent List Access Grants Instances request in order to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_access_grants_instance"
    values={[
        { label: 'get_access_grants_instance', value: 'get_access_grants_instance' }
    ]}
>
<TabItem value="get_access_grants_instance">

Retrieves the S3 Access Grants instance for a Region in your account. Permissions You must have the s3:GetAccessGrantsInstance permission to use this operation. GetAccessGrantsInstance is not supported for cross-account access. You can only call the API from the account that owns the S3 Access Grants instance.

```sql
SELECT
AccessGrantsInstanceArn,
AccessGrantsInstanceId,
CreatedAt,
IdentityCenterApplicationArn,
IdentityCenterArn,
IdentityCenterInstanceArn
FROM aws.s3control.access_grants_instances
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_access_grants_instance"
    values={[
        { label: 'create_access_grants_instance', value: 'create_access_grants_instance' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_access_grants_instance">

Creates an S3 Access Grants instance, which serves as a logical grouping for access grants. You can create one S3 Access Grants instance per Region per account. Permissions You must have the s3:CreateAccessGrantsInstance permission to use this operation. Additional Permissions To associate an IAM Identity Center instance with your S3 Access Grants instance, you must also have the sso:DescribeInstance, sso:CreateApplication, sso:PutApplicationGrant, and sso:PutApplicationAuthenticationMethod permissions.

```sql
INSERT INTO aws.s3control.access_grants_instances (
IdentityCenterArn,
Tags,
`x-amz-account-id`,
region
)
SELECT 
'{{ IdentityCenterArn }}',
'{{ Tags }}',
'{{ x-amz-account-id }}',
'{{ region }}'
RETURNING
AccessGrantsInstanceArn,
AccessGrantsInstanceId,
CreatedAt,
IdentityCenterApplicationArn,
IdentityCenterArn,
IdentityCenterInstanceArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: access_grants_instances
  props:
    - name: x-amz-account-id
      value: "{{ x-amz-account-id }}"
      description: Required parameter for the access_grants_instances resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the access_grants_instances resource.
    - name: IdentityCenterArn
      value: "{{ IdentityCenterArn }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_access_grants_instance"
    values={[
        { label: 'delete_access_grants_instance', value: 'delete_access_grants_instance' }
    ]}
>
<TabItem value="delete_access_grants_instance">

Deletes your S3 Access Grants instance. You must first delete the access grants and locations before S3 Access Grants can delete the instance. See DeleteAccessGrant and DeleteAccessGrantsLocation. If you have associated an IAM Identity Center instance with your S3 Access Grants instance, you must first dissassociate the Identity Center instance from the S3 Access Grants instance before you can delete the S3 Access Grants instance. See AssociateAccessGrantsIdentityCenter and DissociateAccessGrantsIdentityCenter. Permissions You must have the s3:DeleteAccessGrantsInstance permission to use this operation.

```sql
DELETE FROM aws.s3control.access_grants_instances
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_access_grants_instances"
    values={[
        { label: 'list_access_grants_instances', value: 'list_access_grants_instances' }
    ]}
>
<TabItem value="list_access_grants_instances">

Returns a list of S3 Access Grants instances. An S3 Access Grants instance serves as a logical grouping for your individual access grants. You can only have one S3 Access Grants instance per Region per account. Permissions You must have the s3:ListAccessGrantsInstances permission to use this operation.

```sql
EXEC aws.s3control.access_grants_instances.list_access_grants_instances 
@x-amz-account-id='{{ x-amz-account-id }}' --required, 
@region='{{ region }}' --required, 
@nextToken='{{ nextToken }}', 
@maxResults='{{ maxResults }}'
;
```
</TabItem>
</Tabs>
