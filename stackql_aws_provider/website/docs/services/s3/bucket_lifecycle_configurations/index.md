--- 
title: bucket_lifecycle_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - bucket_lifecycle_configurations
  - s3
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3.bucket_lifecycle_configurations" /></td></tr>
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
    <td><CopyableCode code="line_items" /></td>
    <td><code>array</code></td>
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
    <td><a href="#get_bucket_lifecycle_configuration"><CopyableCode code="get_bucket_lifecycle_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>Returns the lifecycle configuration information set on the bucket. For information about lifecycle configuration, see Object Lifecycle Management. Bucket lifecycle configuration now supports specifying a lifecycle rule using an object key name prefix, one or more object tags, object size, or any combination of these. Accordingly, this section describes the latest API, which is compatible with the new functionality. The previous version of the API supported filtering based only on an object key name prefix, which is supported for general purpose buckets for backward compatibility. For the related API description, see GetBucketLifecycle. Lifecyle configurations for directory buckets only support expiring objects and cancelling multipart uploads. Expiring of versioned objects, transitions and tag filters are not supported. Permissions General purpose bucket permissions - By default, all Amazon S3 resources are private, including buckets, objects, and related subresources (for example, lifecycle configuration and website configuration). Only the resource owner (that is, the Amazon Web Services account that created it) can access the resource. The resource owner can optionally grant access permissions to others by writing an access policy. For this operation, a user must have the s3:GetLifecycleConfiguration permission. For more information about permissions, see Managing Access Permissions to Your Amazon S3 Resources. Directory bucket permissions - You must have the s3express:GetLifecycleConfiguration permission in an IAM identity-based policy to use this operation. Cross-account access to this API operation isn't supported. The resource owner can optionally grant access permissions to others by creating a role or user for them as long as they are within the same account as the owner and resource. For more information about directory bucket policies and permissions, see Authorizing Regional endpoint APIs with IAM in the Amazon S3 User Guide. Directory buckets - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https:​//s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region.amazonaws.com. GetBucketLifecycleConfiguration has the following special error: Error code: NoSuchLifecycleConfiguration Description: The lifecycle configuration does not exist. HTTP Status Code: 404 Not Found SOAP Fault Code Prefix: Client The following operations are related to GetBucketLifecycleConfiguration: GetBucketLifecycle PutBucketLifecycle DeleteBucketLifecycle You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#put_bucket_lifecycle_configuration"><CopyableCode code="put_bucket_lifecycle_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-sdk-checksum-algorithm"><code>x-amz-sdk-checksum-algorithm</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a>, <a href="#parameter-x-amz-transition-default-minimum-object-size"><code>x-amz-transition-default-minimum-object-size</code></a></td>
    <td>Creates a new lifecycle configuration for the bucket or replaces an existing lifecycle configuration. Keep in mind that this will overwrite an existing lifecycle configuration, so if you want to retain any configuration details, they must be included in the new lifecycle configuration. For information about lifecycle configuration, see Managing your storage lifecycle. Bucket lifecycle configuration now supports specifying a lifecycle rule using an object key name prefix, one or more object tags, object size, or any combination of these. Accordingly, this section describes the latest API. The previous version of the API supported filtering based only on an object key name prefix, which is supported for backward compatibility. For the related API description, see PutBucketLifecycle. Rules You specify the lifecycle configuration in your request body. The lifecycle configuration is specified as XML consisting of one or more rules. An Amazon S3 Lifecycle configuration can have up to 1,000 rules. This limit is not adjustable. Bucket lifecycle configuration supports specifying a lifecycle rule using an object key name prefix, one or more object tags, object size, or any combination of these. Accordingly, this section describes the latest API. The previous version of the API supported filtering based only on an object key name prefix, which is supported for backward compatibility for general purpose buckets. For the related API description, see PutBucketLifecycle. Lifecyle configurations for directory buckets only support expiring objects and cancelling multipart uploads. Expiring of versioned objects,transitions and tag filters are not supported. A lifecycle rule consists of the following: A filter identifying a subset of objects to which the rule applies. The filter can be based on a key name prefix, object tags, object size, or any combination of these. A status indicating whether the rule is in effect. One or more lifecycle transition and expiration actions that you want Amazon S3 to perform on the objects identified by the filter. If the state of your bucket is versioning-enabled or versioning-suspended, you can have many versions of the same object (one current version and zero or more noncurrent versions). Amazon S3 provides predefined actions that you can specify for current and noncurrent object versions. For more information, see Object Lifecycle Management and Lifecycle Configuration Elements. Permissions General purpose bucket permissions - By default, all Amazon S3 resources are private, including buckets, objects, and related subresources (for example, lifecycle configuration and website configuration). Only the resource owner (that is, the Amazon Web Services account that created it) can access the resource. The resource owner can optionally grant access permissions to others by writing an access policy. For this operation, a user must have the s3:PutLifecycleConfiguration permission. You can also explicitly deny permissions. An explicit deny also supersedes any other permissions. If you want to block users or accounts from removing or deleting objects from your bucket, you must deny them permissions for the following actions: s3:DeleteObject s3:DeleteObjectVersion s3:PutLifecycleConfiguration For more information about permissions, see Managing Access Permissions to Your Amazon S3 Resources. Directory bucket permissions - You must have the s3express:PutLifecycleConfiguration permission in an IAM identity-based policy to use this operation. Cross-account access to this API operation isn't supported. The resource owner can optionally grant access permissions to others by creating a role or user for them as long as they are within the same account as the owner and resource. For more information about directory bucket policies and permissions, see Authorizing Regional endpoint APIs with IAM in the Amazon S3 User Guide. Directory buckets - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https:​//s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region.amazonaws.com. The following operations are related to PutBucketLifecycleConfiguration: GetBucketLifecycleConfiguration DeleteBucketLifecycle You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
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
<tr id="parameter-bucket">
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td>The name of the bucket for which to set the configuration.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-x-amz-expected-bucket-owner">
    <td><CopyableCode code="x-amz-expected-bucket-owner" /></td>
    <td><code>string</code></td>
    <td>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied). This parameter applies to general purpose buckets only. It is not supported for directory bucket lifecycle configurations.</td>
</tr>
<tr id="parameter-x-amz-sdk-checksum-algorithm">
    <td><CopyableCode code="x-amz-sdk-checksum-algorithm" /></td>
    <td><code>string</code></td>
    <td>Indicates the algorithm used to create the checksum for the request when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For more information, see Checking object integrity in the Amazon S3 User Guide. If you provide an individual checksum, Amazon S3 ignores any provided ChecksumAlgorithm parameter.</td>
</tr>
<tr id="parameter-x-amz-transition-default-minimum-object-size">
    <td><CopyableCode code="x-amz-transition-default-minimum-object-size" /></td>
    <td><code>string</code></td>
    <td>Indicates which default minimum object size behavior is applied to the lifecycle configuration. This parameter applies to general purpose buckets only. It is not supported for directory bucket lifecycle configurations. all_storage_classes_128K - Objects smaller than 128 KB will not transition to any storage class by default. varies_by_storage_class - Objects smaller than 128 KB will transition to Glacier Flexible Retrieval or Glacier Deep Archive storage classes. By default, all other storage classes will prevent transitions smaller than 128 KB. To customize the minimum object size for any transition you can add a filter that specifies a custom ObjectSizeGreaterThan or ObjectSizeLessThan in the body of your transition rule. Custom filters always take precedence over the default transition behavior.</td>
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

Returns the lifecycle configuration information set on the bucket. For information about lifecycle configuration, see Object Lifecycle Management. Bucket lifecycle configuration now supports specifying a lifecycle rule using an object key name prefix, one or more object tags, object size, or any combination of these. Accordingly, this section describes the latest API, which is compatible with the new functionality. The previous version of the API supported filtering based only on an object key name prefix, which is supported for general purpose buckets for backward compatibility. For the related API description, see GetBucketLifecycle. Lifecyle configurations for directory buckets only support expiring objects and cancelling multipart uploads. Expiring of versioned objects, transitions and tag filters are not supported. Permissions General purpose bucket permissions - By default, all Amazon S3 resources are private, including buckets, objects, and related subresources (for example, lifecycle configuration and website configuration). Only the resource owner (that is, the Amazon Web Services account that created it) can access the resource. The resource owner can optionally grant access permissions to others by writing an access policy. For this operation, a user must have the s3:GetLifecycleConfiguration permission. For more information about permissions, see Managing Access Permissions to Your Amazon S3 Resources. Directory bucket permissions - You must have the s3express:GetLifecycleConfiguration permission in an IAM identity-based policy to use this operation. Cross-account access to this API operation isn't supported. The resource owner can optionally grant access permissions to others by creating a role or user for them as long as they are within the same account as the owner and resource. For more information about directory bucket policies and permissions, see Authorizing Regional endpoint APIs with IAM in the Amazon S3 User Guide. Directory buckets - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region.amazonaws.com. GetBucketLifecycleConfiguration has the following special error: Error code: NoSuchLifecycleConfiguration Description: The lifecycle configuration does not exist. HTTP Status Code: 404 Not Found SOAP Fault Code Prefix: Client The following operations are related to GetBucketLifecycleConfiguration: GetBucketLifecycle PutBucketLifecycle DeleteBucketLifecycle You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
SELECT
line_items
FROM aws.s3.bucket_lifecycle_configurations
WHERE bucket = '{{ bucket }}' -- required
AND region = '{{ region }}' -- required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
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

Creates a new lifecycle configuration for the bucket or replaces an existing lifecycle configuration. Keep in mind that this will overwrite an existing lifecycle configuration, so if you want to retain any configuration details, they must be included in the new lifecycle configuration. For information about lifecycle configuration, see Managing your storage lifecycle. Bucket lifecycle configuration now supports specifying a lifecycle rule using an object key name prefix, one or more object tags, object size, or any combination of these. Accordingly, this section describes the latest API. The previous version of the API supported filtering based only on an object key name prefix, which is supported for backward compatibility. For the related API description, see PutBucketLifecycle. Rules You specify the lifecycle configuration in your request body. The lifecycle configuration is specified as XML consisting of one or more rules. An Amazon S3 Lifecycle configuration can have up to 1,000 rules. This limit is not adjustable. Bucket lifecycle configuration supports specifying a lifecycle rule using an object key name prefix, one or more object tags, object size, or any combination of these. Accordingly, this section describes the latest API. The previous version of the API supported filtering based only on an object key name prefix, which is supported for backward compatibility for general purpose buckets. For the related API description, see PutBucketLifecycle. Lifecyle configurations for directory buckets only support expiring objects and cancelling multipart uploads. Expiring of versioned objects,transitions and tag filters are not supported. A lifecycle rule consists of the following: A filter identifying a subset of objects to which the rule applies. The filter can be based on a key name prefix, object tags, object size, or any combination of these. A status indicating whether the rule is in effect. One or more lifecycle transition and expiration actions that you want Amazon S3 to perform on the objects identified by the filter. If the state of your bucket is versioning-enabled or versioning-suspended, you can have many versions of the same object (one current version and zero or more noncurrent versions). Amazon S3 provides predefined actions that you can specify for current and noncurrent object versions. For more information, see Object Lifecycle Management and Lifecycle Configuration Elements. Permissions General purpose bucket permissions - By default, all Amazon S3 resources are private, including buckets, objects, and related subresources (for example, lifecycle configuration and website configuration). Only the resource owner (that is, the Amazon Web Services account that created it) can access the resource. The resource owner can optionally grant access permissions to others by writing an access policy. For this operation, a user must have the s3:PutLifecycleConfiguration permission. You can also explicitly deny permissions. An explicit deny also supersedes any other permissions. If you want to block users or accounts from removing or deleting objects from your bucket, you must deny them permissions for the following actions: s3:DeleteObject s3:DeleteObjectVersion s3:PutLifecycleConfiguration For more information about permissions, see Managing Access Permissions to Your Amazon S3 Resources. Directory bucket permissions - You must have the s3express:PutLifecycleConfiguration permission in an IAM identity-based policy to use this operation. Cross-account access to this API operation isn't supported. The resource owner can optionally grant access permissions to others by creating a role or user for them as long as they are within the same account as the owner and resource. For more information about directory bucket policies and permissions, see Authorizing Regional endpoint APIs with IAM in the Amazon S3 User Guide. Directory buckets - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region.amazonaws.com. The following operations are related to PutBucketLifecycleConfiguration: GetBucketLifecycleConfiguration DeleteBucketLifecycle You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
REPLACE aws.s3.bucket_lifecycle_configurations
SET 
LifecycleConfiguration = '{{ LifecycleConfiguration }}'
WHERE 
bucket = '{{ bucket }}' --required
AND region = '{{ region }}' --required
AND `x-amz-sdk-checksum-algorithm` = '{{ x-amz-sdk-checksum-algorithm}}'
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner}}'
AND `x-amz-transition-default-minimum-object-size` = '{{ x-amz-transition-default-minimum-object-size}}'
RETURNING
line_items;
```
</TabItem>
</Tabs>
