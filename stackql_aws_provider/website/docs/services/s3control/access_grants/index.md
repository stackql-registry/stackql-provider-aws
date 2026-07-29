--- 
title: access_grants
hide_title: false
hide_table_of_contents: false
keywords:
  - access_grants
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

Creates, updates, deletes, gets or lists an <code>access_grants</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_grants" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3control.access_grants" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_access_grant"
    values={[
        { label: 'get_access_grant', value: 'get_access_grant' },
        { label: 'list_access_grants', value: 'list_access_grants' }
    ]}
>
<TabItem value="get_access_grant">

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
    <td><CopyableCode code="access_grant_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the access grant.</td>
</tr>
<tr>
    <td><CopyableCode code="access_grant_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the access grant. S3 Access Grants auto-generates this ID when you create the access grant.</td>
</tr>
<tr>
    <td><CopyableCode code="access_grants_location_configuration" /></td>
    <td><code>string</code></td>
    <td>The configuration options of the grant location. The grant location is the S3 path to the data to which you are granting access.</td>
</tr>
<tr>
    <td><CopyableCode code="access_grants_location_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the registered location to which you are granting access. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID default to the default location s3:​// and assigns an auto-generated ID to other locations that you register.</td>
</tr>
<tr>
    <td><CopyableCode code="application_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an Amazon Web Services IAM Identity Center application associated with your Identity Center instance. If the grant includes an application ARN, the grantee can only access the S3 data through this application.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>The date and time when you created the access grant.</td>
</tr>
<tr>
    <td><CopyableCode code="grant_scope" /></td>
    <td><code>string</code></td>
    <td>The S3 path of the data to which you are granting access. It is the result of appending the Subprefix to the location scope.</td>
</tr>
<tr>
    <td><CopyableCode code="grantee" /></td>
    <td><code>string</code></td>
    <td>The user, group, or role to which you are granting access. You can grant access to an IAM user or role. If you have added a corporate directory to Amazon Web Services IAM Identity Center and associated this Identity Center instance with the S3 Access Grants instance, the grantee can also be a corporate directory user or group.</td>
</tr>
<tr>
    <td><CopyableCode code="permission" /></td>
    <td><code>string</code></td>
    <td>The type of permission that was granted in the access grant. Can be one of the following values: READ – Grant read-only access to the S3 data. WRITE – Grant write-only access to the S3 data. READWRITE – Grant both read and write access to the S3 data.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_access_grants">

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
    <td><CopyableCode code="access_grant_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the access grant.</td>
</tr>
<tr>
    <td><CopyableCode code="access_grant_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the access grant. S3 Access Grants auto-generates this ID when you create the access grant.</td>
</tr>
<tr>
    <td><CopyableCode code="access_grants_location_configuration" /></td>
    <td><code>string</code></td>
    <td>The configuration options of the grant location. The grant location is the S3 path to the data to which you are granting access.</td>
</tr>
<tr>
    <td><CopyableCode code="access_grants_location_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the registered location to which you are granting access. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID default to the default location s3:​// and assigns an auto-generated ID to other locations that you register.</td>
</tr>
<tr>
    <td><CopyableCode code="application_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an Amazon Web Services IAM Identity Center application associated with your Identity Center instance. If the grant includes an application ARN, the grantee can only access the S3 data through this application.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>The date and time when you created the S3 Access Grants instance.</td>
</tr>
<tr>
    <td><CopyableCode code="grant_scope" /></td>
    <td><code>string</code></td>
    <td>The S3 path of the data to which you are granting access. It is the result of appending the Subprefix to the location scope.</td>
</tr>
<tr>
    <td><CopyableCode code="grantee" /></td>
    <td><code>string</code></td>
    <td>The user, group, or role to which you are granting access. You can grant access to an IAM user or role. If you have added your corporate directory to Amazon Web Services IAM Identity Center and associated your Identity Center instance with your S3 Access Grants instance, the grantee can also be a corporate directory user or group.</td>
</tr>
<tr>
    <td><CopyableCode code="permission" /></td>
    <td><code>string</code></td>
    <td>The type of access granted to your S3 data, which can be set to one of the following values: READ – Grant read-only access to the S3 data. WRITE – Grant write-only access to the S3 data. READWRITE – Grant both read and write access to the S3 data.</td>
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
    <td><a href="#get_access_grant"><CopyableCode code="get_access_grant" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the details of an access grant from your S3 Access Grants instance. Permissions You must have the s3:GetAccessGrant permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#list_access_grants"><CopyableCode code="list_access_grants" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-granteetype"><code>granteetype</code></a>, <a href="#parameter-granteeidentifier"><code>granteeidentifier</code></a>, <a href="#parameter-permission"><code>permission</code></a>, <a href="#parameter-grantscope"><code>grantscope</code></a>, <a href="#parameter-application_arn"><code>application_arn</code></a></td>
    <td>Returns the list of access grants in your S3 Access Grants instance. Permissions You must have the s3:ListAccessGrants permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#create_access_grant"><CopyableCode code="create_access_grant" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AccessGrantsLocationId"><code>AccessGrantsLocationId</code></a></td>
    <td></td>
    <td>Creates an access grant that gives a grantee access to your S3 data. The grantee can be an IAM user or role or a directory user, or group. Before you can create a grant, you must have an S3 Access Grants instance in the same Region as the S3 data. You can create an S3 Access Grants instance using the CreateAccessGrantsInstance. You must also have registered at least one S3 data location in your S3 Access Grants instance using CreateAccessGrantsLocation. Permissions You must have the s3:CreateAccessGrant permission to use this operation. Additional Permissions For any directory identity - sso:DescribeInstance and sso:DescribeApplication For directory users - identitystore:DescribeUser For directory groups - identitystore:DescribeGroup</td>
</tr>
<tr>
    <td><a href="#associate_access_grants_identity_center"><CopyableCode code="associate_access_grants_identity_center" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IdentityCenterArn"><code>IdentityCenterArn</code></a></td>
    <td></td>
    <td>Associate your S3 Access Grants instance with an Amazon Web Services IAM Identity Center instance. Use this action if you want to create access grants for users or groups from your corporate identity directory. First, you must add your corporate identity directory to Amazon Web Services IAM Identity Center. Then, you can associate this IAM Identity Center instance with your S3 Access Grants instance. Permissions You must have the s3:AssociateAccessGrantsIdentityCenter permission to use this operation. Additional Permissions You must also have the following permissions: sso:CreateApplication, sso:PutApplicationGrant, and sso:PutApplicationAuthenticationMethod.</td>
</tr>
<tr>
    <td><a href="#delete_access_grant"><CopyableCode code="delete_access_grant" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the access grant from the S3 Access Grants instance. You cannot undo an access grant deletion and the grantee will no longer have access to the S3 data. Permissions You must have the s3:DeleteAccessGrant permission to use this operation.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the access grant. S3 Access Grants auto-generates this ID when you create the access grant.</td>
</tr>
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
<tr id="parameter-application_arn">
    <td><CopyableCode code="application_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of an Amazon Web Services IAM Identity Center application associated with your Identity Center instance. If the grant includes an application ARN, the grantee can only access the S3 data through this application.</td>
</tr>
<tr id="parameter-granteeidentifier">
    <td><CopyableCode code="granteeidentifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifer of the Grantee. If the grantee type is IAM, the identifier is the IAM Amazon Resource Name (ARN) of the user or role. If the grantee type is a directory user or group, the identifier is 128-bit universally unique identifier (UUID) in the format a1b2c3d4-5678-90ab-cdef-EXAMPLE11111. You can obtain this UUID from your Amazon Web Services IAM Identity Center instance.</td>
</tr>
<tr id="parameter-granteetype">
    <td><CopyableCode code="granteetype" /></td>
    <td><code>string</code></td>
    <td>The type of the grantee to which access has been granted. It can be one of the following values: IAM - An IAM user or role. DIRECTORY_USER - Your corporate directory user. You can use this option if you have added your corporate identity directory to IAM Identity Center and associated the IAM Identity Center instance with your S3 Access Grants instance. DIRECTORY_GROUP - Your corporate directory group. You can use this option if you have added your corporate identity directory to IAM Identity Center and associated the IAM Identity Center instance with your S3 Access Grants instance.</td>
</tr>
<tr id="parameter-grantscope">
    <td><CopyableCode code="grantscope" /></td>
    <td><code>string</code></td>
    <td>The S3 path of the data to which you are granting access. It is the result of appending the Subprefix to the location scope.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of access grants that you would like returned in the List Access Grants response. If the results include the pagination token NextToken, make another call using the NextToken to determine if there are more results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token to request the next page of results. Pass this value into a subsequent List Access Grants request in order to retrieve the next page of results.</td>
</tr>
<tr id="parameter-permission">
    <td><CopyableCode code="permission" /></td>
    <td><code>string</code></td>
    <td>The type of permission granted to your S3 data, which can be set to one of the following values: READ – Grant read-only access to the S3 data. WRITE – Grant write-only access to the S3 data. READWRITE – Grant both read and write access to the S3 data.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_access_grant"
    values={[
        { label: 'get_access_grant', value: 'get_access_grant' },
        { label: 'list_access_grants', value: 'list_access_grants' }
    ]}
>
<TabItem value="get_access_grant">

Get the details of an access grant from your S3 Access Grants instance. Permissions You must have the s3:GetAccessGrant permission to use this operation.

```sql
SELECT
access_grant_arn,
access_grant_id,
access_grants_location_configuration,
access_grants_location_id,
application_arn,
created_at,
grant_scope,
grantee,
permission
FROM aws.s3control.access_grants
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_access_grants">

Returns the list of access grants in your S3 Access Grants instance. Permissions You must have the s3:ListAccessGrants permission to use this operation.

```sql
SELECT
access_grant_arn,
access_grant_id,
access_grants_location_configuration,
access_grants_location_id,
application_arn,
created_at,
grant_scope,
grantee,
permission
FROM aws.s3control.access_grants
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND granteetype = '{{ granteetype }}'
AND granteeidentifier = '{{ granteeidentifier }}'
AND permission = '{{ permission }}'
AND grantscope = '{{ grantscope }}'
AND application_arn = '{{ application_arn }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_access_grant"
    values={[
        { label: 'create_access_grant', value: 'create_access_grant' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_access_grant">

Creates an access grant that gives a grantee access to your S3 data. The grantee can be an IAM user or role or a directory user, or group. Before you can create a grant, you must have an S3 Access Grants instance in the same Region as the S3 data. You can create an S3 Access Grants instance using the CreateAccessGrantsInstance. You must also have registered at least one S3 data location in your S3 Access Grants instance using CreateAccessGrantsLocation. Permissions You must have the s3:CreateAccessGrant permission to use this operation. Additional Permissions For any directory identity - sso:DescribeInstance and sso:DescribeApplication For directory users - identitystore:DescribeUser For directory groups - identitystore:DescribeGroup

```sql
INSERT INTO aws.s3control.access_grants (
AccessGrantsLocationId,
AccessGrantsLocationConfiguration,
Grantee,
Permission,
ApplicationArn,
S3PrefixType,
Tags,
`x-amz-account-id`,
region
)
SELECT 
'{{ AccessGrantsLocationId }}' /* required */,
'{{ AccessGrantsLocationConfiguration }}',
'{{ Grantee }}',
'{{ Permission }}',
'{{ ApplicationArn }}',
'{{ S3PrefixType }}',
'{{ Tags }}',
'{{ x-amz-account-id }}',
'{{ region }}'
RETURNING
access_grant_arn,
access_grant_id,
access_grants_location_configuration,
access_grants_location_id,
application_arn,
created_at,
grant_scope,
grantee,
permission
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: access_grants
  props:
    - name: x-amz-account-id
      value: "{{ x-amz-account-id }}"
      description: Required parameter for the access_grants resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the access_grants resource.
    - name: AccessGrantsLocationId
      value: "{{ AccessGrantsLocationId }}"
    - name: AccessGrantsLocationConfiguration
      description: |
        The configuration options of the S3 Access Grants location. It contains the S3SubPrefix field. The grant scope, the data to which you are granting access, is the result of appending the Subprefix field to the scope of the registered location.
      value:
        S3SubPrefix: "{{ S3SubPrefix }}"
    - name: Grantee
      description: |
        The user, group, or role to which you are granting access. You can grant access to an IAM user or role. If you have added your corporate directory to Amazon Web Services IAM Identity Center and associated your Identity Center instance with your S3 Access Grants instance, the grantee can also be a corporate directory user or group.
      value:
        GranteeType: "{{ GranteeType }}"
        GranteeIdentifier: "{{ GranteeIdentifier }}"
    - name: Permission
      value: "{{ Permission }}"
      valid_values: ['READ', 'WRITE', 'READWRITE']
    - name: ApplicationArn
      value: "{{ ApplicationArn }}"
    - name: S3PrefixType
      value: "{{ S3PrefixType }}"
      valid_values: ['Object']
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_access_grants_identity_center"
    values={[
        { label: 'associate_access_grants_identity_center', value: 'associate_access_grants_identity_center' }
    ]}
>
<TabItem value="associate_access_grants_identity_center">

Associate your S3 Access Grants instance with an Amazon Web Services IAM Identity Center instance. Use this action if you want to create access grants for users or groups from your corporate identity directory. First, you must add your corporate identity directory to Amazon Web Services IAM Identity Center. Then, you can associate this IAM Identity Center instance with your S3 Access Grants instance. Permissions You must have the s3:AssociateAccessGrantsIdentityCenter permission to use this operation. Additional Permissions You must also have the following permissions: sso:CreateApplication, sso:PutApplicationGrant, and sso:PutApplicationAuthenticationMethod.

```sql
UPDATE aws.s3control.access_grants
SET 
IdentityCenterArn = '{{ IdentityCenterArn }}'
WHERE 
`x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND region = '{{ region }}' --required
AND IdentityCenterArn = '{{ IdentityCenterArn }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_access_grant"
    values={[
        { label: 'delete_access_grant', value: 'delete_access_grant' }
    ]}
>
<TabItem value="delete_access_grant">

Deletes the access grant from the S3 Access Grants instance. You cannot undo an access grant deletion and the grantee will no longer have access to the S3 data. Permissions You must have the s3:DeleteAccessGrant permission to use this operation.

```sql
DELETE FROM aws.s3control.access_grants
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
