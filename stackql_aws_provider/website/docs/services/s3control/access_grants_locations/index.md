--- 
title: access_grants_locations
hide_title: false
hide_table_of_contents: false
keywords:
  - access_grants_locations
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

Creates, updates, deletes, gets or lists an <code>access_grants_locations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_grants_locations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3control.access_grants_locations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_access_grants_location"
    values={[
        { label: 'get_access_grants_location', value: 'get_access_grants_location' },
        { label: 'list_access_grants_locations', value: 'list_access_grants_locations' }
    ]}
>
<TabItem value="get_access_grants_location">

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
    <td><CopyableCode code="access_grants_location_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the registered location.</td>
</tr>
<tr>
    <td><CopyableCode code="access_grants_location_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the registered location to which you are granting access. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID default to the default location s3:​// and assigns an auto-generated ID to other locations that you register.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>The date and time when you registered the location.</td>
</tr>
<tr>
    <td><CopyableCode code="iam_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role for the registered location. S3 Access Grants assumes this role to manage access to the registered location.</td>
</tr>
<tr>
    <td><CopyableCode code="location_scope" /></td>
    <td><code>string</code></td>
    <td>The S3 URI path to the registered location. The location scope can be the default S3 location s3:​//, the S3 path to a bucket, or the S3 path to a bucket and prefix. A prefix in S3 is a string of characters at the beginning of an object key name used to organize the objects that you store in your S3 buckets. For example, object key names that start with the engineering/ prefix or object key names that start with the marketing/campaigns/ prefix.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_access_grants_locations">

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
    <td><CopyableCode code="access_grants_location_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the registered location.</td>
</tr>
<tr>
    <td><CopyableCode code="access_grants_location_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the registered location to which you are granting access. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID default to the default location s3:​// and assigns an auto-generated ID to other locations that you register.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>The date and time when you registered the location.</td>
</tr>
<tr>
    <td><CopyableCode code="iam_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role for the registered location. S3 Access Grants assumes this role to manage access to the registered location.</td>
</tr>
<tr>
    <td><CopyableCode code="location_scope" /></td>
    <td><code>string</code></td>
    <td>The S3 path to the location that you are registering. The location scope can be the default S3 location s3:​//, the S3 path to a bucket s3:​//<code>&lt;bucket&gt;</code>, or the S3 path to a bucket and prefix s3:​//<code>&lt;bucket&gt;</code>/<code>&lt;prefix&gt;</code>. A prefix in S3 is a string of characters at the beginning of an object key name used to organize the objects that you store in your S3 buckets. For example, object key names that start with the engineering/ prefix or object key names that start with the marketing/campaigns/ prefix.</td>
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
    <td><a href="#get_access_grants_location"><CopyableCode code="get_access_grants_location" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of a particular location registered in your S3 Access Grants instance. Permissions You must have the s3:GetAccessGrantsLocation permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#list_access_grants_locations"><CopyableCode code="list_access_grants_locations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-locationscope"><code>locationscope</code></a></td>
    <td>Returns a list of the locations registered in your S3 Access Grants instance. Permissions You must have the s3:ListAccessGrantsLocations permission to use this operation.</td>
</tr>
<tr>
    <td><a href="#create_access_grants_location"><CopyableCode code="create_access_grants_location" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LocationScope"><code>LocationScope</code></a>, <a href="#parameter-IAMRoleArn"><code>IAMRoleArn</code></a></td>
    <td></td>
    <td>The S3 data location that you would like to register in your S3 Access Grants instance. Your S3 data must be in the same Region as your S3 Access Grants instance. The location can be one of the following: The default S3 location s3:​// A bucket - S3:​//<code>&lt;bucket-name&gt;</code> A bucket and prefix - S3:​//<code>&lt;bucket-name&gt;</code>/<code>&lt;prefix&gt;</code> When you register a location, you must include the IAM role that has permission to manage the S3 location that you are registering. Give S3 Access Grants permission to assume this role using a policy. S3 Access Grants assumes this role to manage access to the location and to vend temporary credentials to grantees or client applications. Permissions You must have the s3:CreateAccessGrantsLocation permission to use this operation. Additional Permissions You must also have the following permission for the specified IAM role: iam:PassRole</td>
</tr>
<tr>
    <td><a href="#update_access_grants_location"><CopyableCode code="update_access_grants_location" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IAMRoleArn"><code>IAMRoleArn</code></a></td>
    <td></td>
    <td>Updates the IAM role of a registered location in your S3 Access Grants instance. Permissions You must have the s3:UpdateAccessGrantsLocation permission to use this operation. Additional Permissions You must also have the following permission: iam:PassRole</td>
</tr>
<tr>
    <td><a href="#delete_access_grants_location"><CopyableCode code="delete_access_grants_location" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deregisters a location from your S3 Access Grants instance. You can only delete a location registration from an S3 Access Grants instance if there are no grants associated with this location. See Delete a grant for information on how to delete grants. You need to have at least one registered location in your S3 Access Grants instance in order to create access grants. Permissions You must have the s3:DeleteAccessGrantsLocation permission to use this operation.</td>
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
    <td>The ID of the registered location that you are deregistering from your S3 Access Grants instance. S3 Access Grants assigned this ID when you registered the location. S3 Access Grants assigns the ID default to the default location s3:​// and assigns an auto-generated ID to other locations that you register.</td>
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
<tr id="parameter-locationscope">
    <td><CopyableCode code="locationscope" /></td>
    <td><code>string</code></td>
    <td>The S3 path to the location that you are registering. The location scope can be the default S3 location s3:​//, the S3 path to a bucket s3:​//<code>&lt;bucket&gt;</code>, or the S3 path to a bucket and prefix s3:​//<code>&lt;bucket&gt;</code>/<code>&lt;prefix&gt;</code>. A prefix in S3 is a string of characters at the beginning of an object key name used to organize the objects that you store in your S3 buckets. For example, object key names that start with the engineering/ prefix or object key names that start with the marketing/campaigns/ prefix.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of access grants that you would like returned in the List Access Grants response. If the results include the pagination token NextToken, make another call using the NextToken to determine if there are more results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token to request the next page of results. Pass this value into a subsequent List Access Grants Locations request in order to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_access_grants_location"
    values={[
        { label: 'get_access_grants_location', value: 'get_access_grants_location' },
        { label: 'list_access_grants_locations', value: 'list_access_grants_locations' }
    ]}
>
<TabItem value="get_access_grants_location">

Retrieves the details of a particular location registered in your S3 Access Grants instance. Permissions You must have the s3:GetAccessGrantsLocation permission to use this operation.

```sql
SELECT
access_grants_location_arn,
access_grants_location_id,
created_at,
iam_role_arn,
location_scope
FROM aws.s3control.access_grants_locations
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_access_grants_locations">

Returns a list of the locations registered in your S3 Access Grants instance. Permissions You must have the s3:ListAccessGrantsLocations permission to use this operation.

```sql
SELECT
access_grants_location_arn,
access_grants_location_id,
created_at,
iam_role_arn,
location_scope
FROM aws.s3control.access_grants_locations
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND locationscope = '{{ locationscope }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_access_grants_location"
    values={[
        { label: 'create_access_grants_location', value: 'create_access_grants_location' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_access_grants_location">

The S3 data location that you would like to register in your S3 Access Grants instance. Your S3 data must be in the same Region as your S3 Access Grants instance. The location can be one of the following: The default S3 location s3:​// A bucket - S3:​//<code>&lt;bucket-name&gt;</code> A bucket and prefix - S3:​//<code>&lt;bucket-name&gt;</code>/<code>&lt;prefix&gt;</code> When you register a location, you must include the IAM role that has permission to manage the S3 location that you are registering. Give S3 Access Grants permission to assume this role using a policy. S3 Access Grants assumes this role to manage access to the location and to vend temporary credentials to grantees or client applications. Permissions You must have the s3:CreateAccessGrantsLocation permission to use this operation. Additional Permissions You must also have the following permission for the specified IAM role: iam:PassRole

```sql
INSERT INTO aws.s3control.access_grants_locations (
LocationScope,
IAMRoleArn,
Tags,
`x-amz-account-id`,
region
)
SELECT 
'{{ LocationScope }}' /* required */,
'{{ IAMRoleArn }}' /* required */,
'{{ Tags }}',
'{{ x-amz-account-id }}',
'{{ region }}'
RETURNING
access_grants_location_arn,
access_grants_location_id,
created_at,
iam_role_arn,
location_scope
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: access_grants_locations
  props:
    - name: x-amz-account-id
      value: "{{ x-amz-account-id }}"
      description: Required parameter for the access_grants_locations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the access_grants_locations resource.
    - name: LocationScope
      value: "{{ LocationScope }}"
    - name: IAMRoleArn
      value: "{{ IAMRoleArn }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_access_grants_location"
    values={[
        { label: 'update_access_grants_location', value: 'update_access_grants_location' }
    ]}
>
<TabItem value="update_access_grants_location">

Updates the IAM role of a registered location in your S3 Access Grants instance. Permissions You must have the s3:UpdateAccessGrantsLocation permission to use this operation. Additional Permissions You must also have the following permission: iam:PassRole

```sql
UPDATE aws.s3control.access_grants_locations
SET 
IAMRoleArn = '{{ IAMRoleArn }}'
WHERE 
`x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND IAMRoleArn = '{{ IAMRoleArn }}' --required
RETURNING
access_grants_location_arn,
access_grants_location_id,
created_at,
iam_role_arn,
location_scope;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_access_grants_location"
    values={[
        { label: 'delete_access_grants_location', value: 'delete_access_grants_location' }
    ]}
>
<TabItem value="delete_access_grants_location">

Deregisters a location from your S3 Access Grants instance. You can only delete a location registration from an S3 Access Grants instance if there are no grants associated with this location. See Delete a grant for information on how to delete grants. You need to have at least one registered location in your S3 Access Grants instance in order to create access grants. Permissions You must have the s3:DeleteAccessGrantsLocation permission to use this operation.

```sql
DELETE FROM aws.s3control.access_grants_locations
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
