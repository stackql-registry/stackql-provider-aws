--- 
title: bucket_lifecycle_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - bucket_lifecycle_configurations
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

Creates, updates, deletes, gets or lists a <code>bucket_lifecycle_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bucket_lifecycle_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3control.bucket_lifecycle_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bucket_lifecycle_configuration"
    values={[
        { label: 'get_bucket_lifecycle_configuration', value: 'get_bucket_lifecycle_configuration' }
    ]}
>
<TabItem value="get_bucket_lifecycle_configuration">

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
    <td><CopyableCode code="Rules" /></td>
    <td><code>string</code></td>
    <td>Container for the lifecycle rule of the Outposts bucket.</td>
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
    <td><a href="#get_bucket_lifecycle_configuration"><CopyableCode code="get_bucket_lifecycle_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This action gets an Amazon S3 on Outposts bucket's lifecycle configuration. To get an S3 bucket's lifecycle configuration, see GetBucketLifecycleConfiguration in the Amazon S3 API Reference. Returns the lifecycle configuration information set on the Outposts bucket. For more information, see Using Amazon S3 on Outposts and for information about lifecycle configuration, see Object Lifecycle Management in Amazon S3 User Guide. To use this action, you must have permission to perform the s3-outposts:GetLifecycleConfiguration action. The Outposts bucket owner has this permission, by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. GetBucketLifecycleConfiguration has the following special error: Error code: NoSuchLifecycleConfiguration Description: The lifecycle configuration does not exist. HTTP Status Code: 404 Not Found SOAP Fault Code Prefix: Client The following actions are related to GetBucketLifecycleConfiguration: PutBucketLifecycleConfiguration DeleteBucketLifecycleConfiguration</td>
</tr>
<tr>
    <td><a href="#put_bucket_lifecycle_configuration"><CopyableCode code="put_bucket_lifecycle_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This action puts a lifecycle configuration to an Amazon S3 on Outposts bucket. To put a lifecycle configuration to an S3 bucket, see PutBucketLifecycleConfiguration in the Amazon S3 API Reference. Creates a new lifecycle configuration for the S3 on Outposts bucket or replaces an existing lifecycle configuration. Outposts buckets only support lifecycle configurations that delete/expire objects after a certain period of time and abort incomplete multipart uploads. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to PutBucketLifecycleConfiguration: GetBucketLifecycleConfiguration DeleteBucketLifecycleConfiguration</td>
</tr>
<tr>
    <td><a href="#delete_bucket_lifecycle_configuration"><CopyableCode code="delete_bucket_lifecycle_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This action deletes an Amazon S3 on Outposts bucket's lifecycle configuration. To delete an S3 bucket's lifecycle configuration, see DeleteBucketLifecycle in the Amazon S3 API Reference. Deletes the lifecycle configuration from the specified Outposts bucket. Amazon S3 on Outposts removes all the lifecycle configuration rules in the lifecycle subresource associated with the bucket. Your objects never expire, and Amazon S3 on Outposts no longer automatically deletes any objects on the basis of rules contained in the deleted lifecycle configuration. For more information, see Using Amazon S3 on Outposts in Amazon S3 User Guide. To use this operation, you must have permission to perform the s3-outposts:PutLifecycleConfiguration action. By default, the bucket owner has this permission and the Outposts bucket owner can grant this permission to others. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. For more information about object expiration, see Elements to Describe Lifecycle Actions. Related actions include: PutBucketLifecycleConfiguration GetBucketLifecycleConfiguration</td>
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
    <td>Specifies the bucket. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:<code>&lt;Region&gt;</code>:<code>&lt;account-id&gt;</code>:outpost/<code>&lt;outpost-id&gt;</code>/bucket/<code>&lt;my-bucket-name&gt;</code>. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-x-amz-account-id">
    <td><CopyableCode code="x-amz-account-id" /></td>
    <td><code>string</code></td>
    <td>The account ID of the lifecycle configuration to delete.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_bucket_lifecycle_configuration"
    values={[
        { label: 'get_bucket_lifecycle_configuration', value: 'get_bucket_lifecycle_configuration' }
    ]}
>
<TabItem value="get_bucket_lifecycle_configuration">

This action gets an Amazon S3 on Outposts bucket's lifecycle configuration. To get an S3 bucket's lifecycle configuration, see GetBucketLifecycleConfiguration in the Amazon S3 API Reference. Returns the lifecycle configuration information set on the Outposts bucket. For more information, see Using Amazon S3 on Outposts and for information about lifecycle configuration, see Object Lifecycle Management in Amazon S3 User Guide. To use this action, you must have permission to perform the s3-outposts:GetLifecycleConfiguration action. The Outposts bucket owner has this permission, by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. GetBucketLifecycleConfiguration has the following special error: Error code: NoSuchLifecycleConfiguration Description: The lifecycle configuration does not exist. HTTP Status Code: 404 Not Found SOAP Fault Code Prefix: Client The following actions are related to GetBucketLifecycleConfiguration: PutBucketLifecycleConfiguration DeleteBucketLifecycleConfiguration

```sql
SELECT
Rules
FROM aws.s3control.bucket_lifecycle_configurations
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_bucket_lifecycle_configuration"
    values={[
        { label: 'put_bucket_lifecycle_configuration', value: 'put_bucket_lifecycle_configuration' }
    ]}
>
<TabItem value="put_bucket_lifecycle_configuration">

This action puts a lifecycle configuration to an Amazon S3 on Outposts bucket. To put a lifecycle configuration to an S3 bucket, see PutBucketLifecycleConfiguration in the Amazon S3 API Reference. Creates a new lifecycle configuration for the S3 on Outposts bucket or replaces an existing lifecycle configuration. Outposts buckets only support lifecycle configurations that delete/expire objects after a certain period of time and abort incomplete multipart uploads. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to PutBucketLifecycleConfiguration: GetBucketLifecycleConfiguration DeleteBucketLifecycleConfiguration

```sql
REPLACE aws.s3control.bucket_lifecycle_configurations
SET 
LifecycleConfiguration = '{{ LifecycleConfiguration }}'
WHERE 
`x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_bucket_lifecycle_configuration"
    values={[
        { label: 'delete_bucket_lifecycle_configuration', value: 'delete_bucket_lifecycle_configuration' }
    ]}
>
<TabItem value="delete_bucket_lifecycle_configuration">

This action deletes an Amazon S3 on Outposts bucket's lifecycle configuration. To delete an S3 bucket's lifecycle configuration, see DeleteBucketLifecycle in the Amazon S3 API Reference. Deletes the lifecycle configuration from the specified Outposts bucket. Amazon S3 on Outposts removes all the lifecycle configuration rules in the lifecycle subresource associated with the bucket. Your objects never expire, and Amazon S3 on Outposts no longer automatically deletes any objects on the basis of rules contained in the deleted lifecycle configuration. For more information, see Using Amazon S3 on Outposts in Amazon S3 User Guide. To use this operation, you must have permission to perform the s3-outposts:PutLifecycleConfiguration action. By default, the bucket owner has this permission and the Outposts bucket owner can grant this permission to others. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. For more information about object expiration, see Elements to Describe Lifecycle Actions. Related actions include: PutBucketLifecycleConfiguration GetBucketLifecycleConfiguration

```sql
DELETE FROM aws.s3control.bucket_lifecycle_configurations
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
