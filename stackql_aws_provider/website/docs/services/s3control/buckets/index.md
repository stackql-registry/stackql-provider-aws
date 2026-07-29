--- 
title: buckets
hide_title: false
hide_table_of_contents: false
keywords:
  - buckets
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

Creates, updates, deletes, gets or lists a <code>buckets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="buckets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3control.buckets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bucket"
    values={[
        { label: 'get_bucket', value: 'get_bucket' }
    ]}
>
<TabItem value="get_bucket">

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
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td>The Outposts bucket requested.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string</code></td>
    <td>The creation date of the Outposts bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="public_access_block_enabled" /></td>
    <td><code>boolean</code></td>
    <td></td>
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
    <td><a href="#get_bucket"><CopyableCode code="get_bucket" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an Amazon S3 on Outposts bucket. For more information, see Using Amazon S3 on Outposts in the Amazon S3 User Guide. If you are using an identity other than the root user of the Amazon Web Services account that owns the Outposts bucket, the calling identity must have the s3-outposts:GetBucket permissions on the specified Outposts bucket and belong to the Outposts bucket owner's account in order to use this action. Only users from Outposts bucket owner account with the right permissions can perform actions on an Outposts bucket. If you don't have s3-outposts:GetBucket permissions or you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 403 Access Denied error. The following actions are related to GetBucket for Amazon S3 on Outposts: All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. PutObject CreateBucket DeleteBucket</td>
</tr>
<tr>
    <td><a href="#create_bucket"><CopyableCode code="create_bucket" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-acl"><code>x-amz-acl</code></a>, <a href="#parameter-x-amz-grant-full-control"><code>x-amz-grant-full-control</code></a>, <a href="#parameter-x-amz-grant-read"><code>x-amz-grant-read</code></a>, <a href="#parameter-x-amz-grant-read-acp"><code>x-amz-grant-read-acp</code></a>, <a href="#parameter-x-amz-grant-write"><code>x-amz-grant-write</code></a>, <a href="#parameter-x-amz-grant-write-acp"><code>x-amz-grant-write-acp</code></a>, <a href="#parameter-x-amz-bucket-object-lock-enabled"><code>x-amz-bucket-object-lock-enabled</code></a>, <a href="#parameter-x-amz-outpost-id"><code>x-amz-outpost-id</code></a></td>
    <td>This action creates an Amazon S3 on Outposts bucket. To create an S3 bucket, see Create Bucket in the Amazon S3 API Reference. Creates a new Outposts bucket. By creating the bucket, you become the bucket owner. To create an Outposts bucket, you must have S3 on Outposts. For more information, see Using Amazon S3 on Outposts in Amazon S3 User Guide. Not every string is an acceptable bucket name. For information on bucket naming restrictions, see Working with Amazon S3 Buckets. S3 on Outposts buckets support: Tags LifecycleConfigurations for deleting expired objects For a complete list of restrictions and Amazon S3 feature limitations on S3 on Outposts, see Amazon S3 on Outposts Restrictions and Limitations. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and x-amz-outpost-id in your API request, see the Examples section. The following actions are related to CreateBucket for Amazon S3 on Outposts: PutObject GetBucket DeleteBucket CreateAccessPoint PutAccessPointPolicy</td>
</tr>
<tr>
    <td><a href="#delete_bucket"><CopyableCode code="delete_bucket" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This action deletes an Amazon S3 on Outposts bucket. To delete an S3 bucket, see DeleteBucket in the Amazon S3 API Reference. Deletes the Amazon S3 on Outposts bucket. All objects (including all object versions and delete markers) in the bucket must be deleted before the bucket itself can be deleted. For more information, see Using Amazon S3 on Outposts in Amazon S3 User Guide. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. Related Resources CreateBucket GetBucket DeleteObject</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Specifies the bucket being deleted. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:<code>&lt;Region&gt;</code>:<code>&lt;account-id&gt;</code>:outpost/<code>&lt;outpost-id&gt;</code>/bucket/<code>&lt;my-bucket-name&gt;</code>. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-x-amz-account-id">
    <td><CopyableCode code="x-amz-account-id" /></td>
    <td><code>string</code></td>
    <td>The account ID that owns the Outposts bucket.</td>
</tr>
<tr id="parameter-x-amz-acl">
    <td><CopyableCode code="x-amz-acl" /></td>
    <td><code>string</code></td>
    <td>The canned ACL to apply to the bucket. This is not supported by Amazon S3 on Outposts buckets.</td>
</tr>
<tr id="parameter-x-amz-bucket-object-lock-enabled">
    <td><CopyableCode code="x-amz-bucket-object-lock-enabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether you want S3 Object Lock to be enabled for the new bucket. This is not supported by Amazon S3 on Outposts buckets.</td>
</tr>
<tr id="parameter-x-amz-grant-full-control">
    <td><CopyableCode code="x-amz-grant-full-control" /></td>
    <td><code>string</code></td>
    <td>Allows grantee the read, write, read ACP, and write ACP permissions on the bucket. This is not supported by Amazon S3 on Outposts buckets.</td>
</tr>
<tr id="parameter-x-amz-grant-read">
    <td><CopyableCode code="x-amz-grant-read" /></td>
    <td><code>string</code></td>
    <td>Allows grantee to list the objects in the bucket. This is not supported by Amazon S3 on Outposts buckets.</td>
</tr>
<tr id="parameter-x-amz-grant-read-acp">
    <td><CopyableCode code="x-amz-grant-read-acp" /></td>
    <td><code>string</code></td>
    <td>Allows grantee to read the bucket ACL. This is not supported by Amazon S3 on Outposts buckets.</td>
</tr>
<tr id="parameter-x-amz-grant-write">
    <td><CopyableCode code="x-amz-grant-write" /></td>
    <td><code>string</code></td>
    <td>Allows grantee to create, overwrite, and delete any object in the bucket. This is not supported by Amazon S3 on Outposts buckets.</td>
</tr>
<tr id="parameter-x-amz-grant-write-acp">
    <td><CopyableCode code="x-amz-grant-write-acp" /></td>
    <td><code>string</code></td>
    <td>Allows grantee to write the ACL for the applicable bucket. This is not supported by Amazon S3 on Outposts buckets.</td>
</tr>
<tr id="parameter-x-amz-outpost-id">
    <td><CopyableCode code="x-amz-outpost-id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Outposts where the bucket is being created. This ID is required by Amazon S3 on Outposts buckets.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_bucket"
    values={[
        { label: 'get_bucket', value: 'get_bucket' }
    ]}
>
<TabItem value="get_bucket">

Gets an Amazon S3 on Outposts bucket. For more information, see Using Amazon S3 on Outposts in the Amazon S3 User Guide. If you are using an identity other than the root user of the Amazon Web Services account that owns the Outposts bucket, the calling identity must have the s3-outposts:GetBucket permissions on the specified Outposts bucket and belong to the Outposts bucket owner's account in order to use this action. Only users from Outposts bucket owner account with the right permissions can perform actions on an Outposts bucket. If you don't have s3-outposts:GetBucket permissions or you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a 403 Access Denied error. The following actions are related to GetBucket for Amazon S3 on Outposts: All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. PutObject CreateBucket DeleteBucket

```sql
SELECT
bucket,
creation_date,
public_access_block_enabled
FROM aws.s3control.buckets
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_bucket"
    values={[
        { label: 'create_bucket', value: 'create_bucket' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_bucket">

This action creates an Amazon S3 on Outposts bucket. To create an S3 bucket, see Create Bucket in the Amazon S3 API Reference. Creates a new Outposts bucket. By creating the bucket, you become the bucket owner. To create an Outposts bucket, you must have S3 on Outposts. For more information, see Using Amazon S3 on Outposts in Amazon S3 User Guide. Not every string is an acceptable bucket name. For information on bucket naming restrictions, see Working with Amazon S3 Buckets. S3 on Outposts buckets support: Tags LifecycleConfigurations for deleting expired objects For a complete list of restrictions and Amazon S3 feature limitations on S3 on Outposts, see Amazon S3 on Outposts Restrictions and Limitations. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and x-amz-outpost-id in your API request, see the Examples section. The following actions are related to CreateBucket for Amazon S3 on Outposts: PutObject GetBucket DeleteBucket CreateAccessPoint PutAccessPointPolicy

```sql
INSERT INTO aws.s3control.buckets (
CreateBucketConfiguration,
name,
region,
`x-amz-acl`,
`x-amz-grant-full-control`,
`x-amz-grant-read`,
`x-amz-grant-read-acp`,
`x-amz-grant-write`,
`x-amz-grant-write-acp`,
`x-amz-bucket-object-lock-enabled`,
`x-amz-outpost-id`
)
SELECT 
'{{ CreateBucketConfiguration }}',
'{{ name }}',
'{{ region }}',
'{{ x-amz-acl }}',
'{{ x-amz-grant-full-control }}',
'{{ x-amz-grant-read }}',
'{{ x-amz-grant-read-acp }}',
'{{ x-amz-grant-write }}',
'{{ x-amz-grant-write-acp }}',
'{{ x-amz-bucket-object-lock-enabled }}',
'{{ x-amz-outpost-id }}'
RETURNING
bucket_arn,
location
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: buckets
  props:
    - name: name
      value: "{{ name }}"
      description: Required parameter for the buckets resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the buckets resource.
    - name: CreateBucketConfiguration
      description: |
        The container for the bucket configuration. This is not supported by Amazon S3 on Outposts buckets.
      value:
        LocationConstraint: "{{ LocationConstraint }}"
    - name: x-amz-acl
      value: "{{ x-amz-acl }}"
      description: The canned ACL to apply to the bucket. This is not supported by Amazon S3 on Outposts buckets.
      description: The canned ACL to apply to the bucket. This is not supported by Amazon S3 on Outposts buckets.
    - name: x-amz-grant-full-control
      value: "{{ x-amz-grant-full-control }}"
      description: Allows grantee the read, write, read ACP, and write ACP permissions on the bucket. This is not supported by Amazon S3 on Outposts buckets.
      description: Allows grantee the read, write, read ACP, and write ACP permissions on the bucket. This is not supported by Amazon S3 on Outposts buckets.
    - name: x-amz-grant-read
      value: "{{ x-amz-grant-read }}"
      description: Allows grantee to list the objects in the bucket. This is not supported by Amazon S3 on Outposts buckets.
      description: Allows grantee to list the objects in the bucket. This is not supported by Amazon S3 on Outposts buckets.
    - name: x-amz-grant-read-acp
      value: "{{ x-amz-grant-read-acp }}"
      description: Allows grantee to read the bucket ACL. This is not supported by Amazon S3 on Outposts buckets.
      description: Allows grantee to read the bucket ACL. This is not supported by Amazon S3 on Outposts buckets.
    - name: x-amz-grant-write
      value: "{{ x-amz-grant-write }}"
      description: Allows grantee to create, overwrite, and delete any object in the bucket. This is not supported by Amazon S3 on Outposts buckets.
      description: Allows grantee to create, overwrite, and delete any object in the bucket. This is not supported by Amazon S3 on Outposts buckets.
    - name: x-amz-grant-write-acp
      value: "{{ x-amz-grant-write-acp }}"
      description: Allows grantee to write the ACL for the applicable bucket. This is not supported by Amazon S3 on Outposts buckets.
      description: Allows grantee to write the ACL for the applicable bucket. This is not supported by Amazon S3 on Outposts buckets.
    - name: x-amz-bucket-object-lock-enabled
      value: {{ x-amz-bucket-object-lock-enabled }}
      description: Specifies whether you want S3 Object Lock to be enabled for the new bucket. This is not supported by Amazon S3 on Outposts buckets.
      description: Specifies whether you want S3 Object Lock to be enabled for the new bucket. This is not supported by Amazon S3 on Outposts buckets.
    - name: x-amz-outpost-id
      value: "{{ x-amz-outpost-id }}"
      description: The ID of the Outposts where the bucket is being created. This ID is required by Amazon S3 on Outposts buckets.
      description: The ID of the Outposts where the bucket is being created. This ID is required by Amazon S3 on Outposts buckets.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_bucket"
    values={[
        { label: 'delete_bucket', value: 'delete_bucket' }
    ]}
>
<TabItem value="delete_bucket">

This action deletes an Amazon S3 on Outposts bucket. To delete an S3 bucket, see DeleteBucket in the Amazon S3 API Reference. Deletes the Amazon S3 on Outposts bucket. All objects (including all object versions and delete markers) in the bucket must be deleted before the bucket itself can be deleted. For more information, see Using Amazon S3 on Outposts in Amazon S3 User Guide. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. Related Resources CreateBucket GetBucket DeleteObject

```sql
DELETE FROM aws.s3control.buckets
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
