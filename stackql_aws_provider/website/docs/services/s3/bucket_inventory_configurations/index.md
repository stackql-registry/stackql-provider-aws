--- 
title: bucket_inventory_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - bucket_inventory_configurations
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

Creates, updates, deletes, gets or lists a <code>bucket_inventory_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bucket_inventory_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3.bucket_inventory_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bucket_inventory_configuration"
    values={[
        { label: 'get_bucket_inventory_configuration', value: 'get_bucket_inventory_configuration' },
        { label: 'list_bucket_inventory_configurations', value: 'list_bucket_inventory_configurations' }
    ]}
>
<TabItem value="get_bucket_inventory_configuration">

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
    <td><CopyableCode code="Destination" /></td>
    <td><code>string</code></td>
    <td>Contains information about where to publish the inventory results.</td>
</tr>
<tr>
    <td><CopyableCode code="Filter" /></td>
    <td><code>string</code></td>
    <td>Specifies an inventory filter. The inventory only includes objects that meet the filter's criteria.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID used to identify the inventory configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="IncludedObjectVersions" /></td>
    <td><code>string</code></td>
    <td>Object versions to include in the inventory list. If set to All, the list includes all the object versions, which adds the version-related fields VersionId, IsLatest, and DeleteMarker to the list. If set to Current, the list does not contain these version-related fields.</td>
</tr>
<tr>
    <td><CopyableCode code="IsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the inventory is enabled or disabled. If set to True, an inventory list is generated. If set to False, no inventory list is generated.</td>
</tr>
<tr>
    <td><CopyableCode code="OptionalFields" /></td>
    <td><code>string</code></td>
    <td>Contains the optional fields that are included in the inventory results. The following optional fields are supported for directory buckets Size | LastModifiedDate | StorageClass | ETag | IsMultipartUploaded | EncryptionStatus | BucketKeyStatus | ChecksumAlgorithm | LifecycleExpirationDate. Throws MalformedXML error if unsupported optional field is provided.</td>
</tr>
<tr>
    <td><CopyableCode code="Schedule" /></td>
    <td><code>string</code></td>
    <td>Specifies the schedule for generating inventory results.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_bucket_inventory_configurations">

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
    <td><CopyableCode code="Destination" /></td>
    <td><code>string</code></td>
    <td>Contains information about where to publish the inventory results.</td>
</tr>
<tr>
    <td><CopyableCode code="Filter" /></td>
    <td><code>string</code></td>
    <td>Specifies an inventory filter. The inventory only includes objects that meet the filter's criteria.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID used to identify the inventory configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="IncludedObjectVersions" /></td>
    <td><code>string</code></td>
    <td>Object versions to include in the inventory list. If set to All, the list includes all the object versions, which adds the version-related fields VersionId, IsLatest, and DeleteMarker to the list. If set to Current, the list does not contain these version-related fields.</td>
</tr>
<tr>
    <td><CopyableCode code="IsEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the inventory is enabled or disabled. If set to True, an inventory list is generated. If set to False, no inventory list is generated.</td>
</tr>
<tr>
    <td><CopyableCode code="OptionalFields" /></td>
    <td><code>string</code></td>
    <td>Contains the optional fields that are included in the inventory results. The following optional fields are supported for directory buckets Size | LastModifiedDate | StorageClass | ETag | IsMultipartUploaded | EncryptionStatus | BucketKeyStatus | ChecksumAlgorithm | LifecycleExpirationDate. Throws MalformedXML error if unsupported optional field is provided.</td>
</tr>
<tr>
    <td><CopyableCode code="Schedule" /></td>
    <td><code>string</code></td>
    <td>Specifies the schedule for generating inventory results.</td>
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
    <td><a href="#get_bucket_inventory_configuration"><CopyableCode code="get_bucket_inventory_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>Returns an S3 Inventory configuration (identified by the inventory configuration ID) from the bucket. Directory buckets - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https:​//s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions To use this operation, you must have permissions to perform the s3:GetInventoryConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. General purpose bucket permissions - The s3:GetInventoryConfiguration permission is required in a policy. For more information about general purpose buckets permissions, see Using Bucket Policies and User Policies in the Amazon S3 User Guide. Directory bucket permissions - To grant access to this API operation, you must have the s3express:GetInventoryConfiguration permission in an IAM identity-based policy instead of a bucket policy. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com. For information about the Amazon S3 inventory feature, see Amazon S3 Inventory. The following operations are related to GetBucketInventoryConfiguration: DeleteBucketInventoryConfiguration ListBucketInventoryConfigurations PutBucketInventoryConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#list_bucket_inventory_configurations"><CopyableCode code="list_bucket_inventory_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-continuation-token"><code>continuation-token</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>Returns a list of S3 Inventory configurations for the bucket. You can have up to 1,000 inventory configurations per bucket. This action supports list pagination and does not return more than 100 configurations at a time. Always check the IsTruncated element in the response. If there are no more configurations to list, IsTruncated is set to false. If there are more configurations to list, IsTruncated is set to true, and there is a value in NextContinuationToken. You use the NextContinuationToken value to continue the pagination of the list by passing the value in continuation-token in the request to GET the next page. Directory buckets - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https:​//s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions To use this operation, you must have permissions to perform the s3:GetInventoryConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. General purpose bucket permissions - The s3:GetInventoryConfiguration permission is required in a policy. For more information about general purpose buckets permissions, see Using Bucket Policies and User Policies in the Amazon S3 User Guide. Directory bucket permissions - To grant access to this API operation, you must have the s3express:GetInventoryConfiguration permission in an IAM identity-based policy instead of a bucket policy. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com. For information about the Amazon S3 inventory feature, see Amazon S3 Inventory The following operations are related to ListBucketInventoryConfigurations: GetBucketInventoryConfiguration DeleteBucketInventoryConfiguration PutBucketInventoryConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#put_bucket_inventory_configuration"><CopyableCode code="put_bucket_inventory_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InventoryConfiguration"><code>InventoryConfiguration</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>This implementation of the PUT action adds an S3 Inventory configuration (identified by the inventory ID) to the bucket. You can have up to 1,000 inventory configurations per bucket. Amazon S3 inventory generates inventories of the objects in the bucket on a daily or weekly basis, and the results are published to a flat file. The bucket that is inventoried is called the source bucket, and the bucket where the inventory flat file is stored is called the destination bucket. The destination bucket must be in the same Amazon Web Services Region as the source bucket. When you configure an inventory for a source bucket, you specify the destination bucket where you want the inventory to be stored, and whether to generate the inventory daily or weekly. You can also configure what object metadata to include and whether to inventory all object versions or only current versions. For more information, see Amazon S3 Inventory in the Amazon S3 User Guide. You must create a bucket policy on the destination bucket to grant permissions to Amazon S3 to write objects to the bucket in the defined location. For an example policy, see Granting Permissions for Amazon S3 Inventory and Storage Class Analysis. Directory buckets - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https:​//s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions To use this operation, you must have permission to perform the s3:PutInventoryConfiguration action. The bucket owner has this permission by default and can grant this permission to others. The s3:PutInventoryConfiguration permission allows a user to create an S3 Inventory report that includes all object metadata fields available and to specify the destination bucket to store the inventory. A user with read access to objects in the destination bucket can also access all object metadata fields that are available in the inventory report. General purpose bucket permissions - The s3:PutInventoryConfiguration permission is required in a policy. For more information about general purpose buckets permissions, see Using Bucket Policies and User Policies in the Amazon S3 User Guide. Directory bucket permissions - To grant access to this API operation, you must have the s3express:PutInventoryConfiguration permission in an IAM identity-based policy instead of a bucket policy. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. To restrict access to an inventory report, see Restricting access to an Amazon S3 Inventory report in the Amazon S3 User Guide. For more information about the metadata fields available in S3 Inventory, see Amazon S3 Inventory lists in the Amazon S3 User Guide. For more information about permissions, see Permissions related to bucket subresource operations and Identity and access management in Amazon S3 in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com. PutBucketInventoryConfiguration has the following special errors: HTTP 400 Bad Request Error Code: InvalidArgument Cause: Invalid Argument HTTP 400 Bad Request Error Code: TooManyConfigurations Cause: You are attempting to create a new configuration but have already reached the 1,000-configuration limit. HTTP 403 Forbidden Error Cause: You are not the owner of the specified bucket, or you do not have the s3:PutInventoryConfiguration bucket permission to set the configuration on the bucket. The following operations are related to PutBucketInventoryConfiguration: GetBucketInventoryConfiguration DeleteBucketInventoryConfiguration ListBucketInventoryConfigurations You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#delete_bucket_inventory_configuration"><CopyableCode code="delete_bucket_inventory_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>Deletes an S3 Inventory configuration (identified by the inventory ID) from the bucket. Directory buckets - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https:​//s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions To use this operation, you must have permissions to perform the s3:PutInventoryConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. General purpose bucket permissions - The s3:PutInventoryConfiguration permission is required in a policy. For more information about general purpose buckets permissions, see Using Bucket Policies and User Policies in the Amazon S3 User Guide. Directory bucket permissions - To grant access to this API operation, you must have the s3express:PutInventoryConfiguration permission in an IAM identity-based policy instead of a bucket policy. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com. For information about the Amazon S3 inventory feature, see Amazon S3 Inventory. After deleting a configuration, Amazon S3 might still deliver one additional inventory report during a brief transition period while the system processes the deletion. Operations related to DeleteBucketInventoryConfiguration include: GetBucketInventoryConfiguration PutBucketInventoryConfiguration ListBucketInventoryConfigurations You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
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
    <td>The name of the bucket containing the inventory configuration to delete. Directory buckets - When you use this operation with a directory bucket, you must use path-style requests in the format https:​//s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must also follow the format bucket-base-name--zone-id--x-s3 (for example, DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID used to identify the inventory configuration.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-continuation-token">
    <td><CopyableCode code="continuation-token" /></td>
    <td><code>string</code></td>
    <td>The marker used to continue an inventory configuration listing that has been truncated. Use the NextContinuationToken from a previously truncated list response to continue the listing. The continuation token is an opaque value that Amazon S3 understands.</td>
</tr>
<tr id="parameter-x-amz-expected-bucket-owner">
    <td><CopyableCode code="x-amz-expected-bucket-owner" /></td>
    <td><code>string</code></td>
    <td>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied). For directory buckets, this header is not supported in this API operation. If you specify this header, the request fails with the HTTP status code 501 Not Implemented.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_bucket_inventory_configuration"
    values={[
        { label: 'get_bucket_inventory_configuration', value: 'get_bucket_inventory_configuration' },
        { label: 'list_bucket_inventory_configurations', value: 'list_bucket_inventory_configurations' }
    ]}
>
<TabItem value="get_bucket_inventory_configuration">

Returns an S3 Inventory configuration (identified by the inventory configuration ID) from the bucket. Directory buckets - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions To use this operation, you must have permissions to perform the s3:GetInventoryConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. General purpose bucket permissions - The s3:GetInventoryConfiguration permission is required in a policy. For more information about general purpose buckets permissions, see Using Bucket Policies and User Policies in the Amazon S3 User Guide. Directory bucket permissions - To grant access to this API operation, you must have the s3express:GetInventoryConfiguration permission in an IAM identity-based policy instead of a bucket policy. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com. For information about the Amazon S3 inventory feature, see Amazon S3 Inventory. The following operations are related to GetBucketInventoryConfiguration: DeleteBucketInventoryConfiguration ListBucketInventoryConfigurations PutBucketInventoryConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
SELECT
Destination,
Filter,
Id,
IncludedObjectVersions,
IsEnabled,
OptionalFields,
Schedule
FROM aws.s3.bucket_inventory_configurations
WHERE bucket = '{{ bucket }}' -- required
AND id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
;
```
</TabItem>
<TabItem value="list_bucket_inventory_configurations">

Returns a list of S3 Inventory configurations for the bucket. You can have up to 1,000 inventory configurations per bucket. This action supports list pagination and does not return more than 100 configurations at a time. Always check the IsTruncated element in the response. If there are no more configurations to list, IsTruncated is set to false. If there are more configurations to list, IsTruncated is set to true, and there is a value in NextContinuationToken. You use the NextContinuationToken value to continue the pagination of the list by passing the value in continuation-token in the request to GET the next page. Directory buckets - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions To use this operation, you must have permissions to perform the s3:GetInventoryConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. General purpose bucket permissions - The s3:GetInventoryConfiguration permission is required in a policy. For more information about general purpose buckets permissions, see Using Bucket Policies and User Policies in the Amazon S3 User Guide. Directory bucket permissions - To grant access to this API operation, you must have the s3express:GetInventoryConfiguration permission in an IAM identity-based policy instead of a bucket policy. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com. For information about the Amazon S3 inventory feature, see Amazon S3 Inventory The following operations are related to ListBucketInventoryConfigurations: GetBucketInventoryConfiguration DeleteBucketInventoryConfiguration PutBucketInventoryConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
SELECT
Destination,
Filter,
Id,
IncludedObjectVersions,
IsEnabled,
OptionalFields,
Schedule
FROM aws.s3.bucket_inventory_configurations
WHERE bucket = '{{ bucket }}' -- required
AND region = '{{ region }}' -- required
AND `continuation-token` = '{{ continuation-token }}'
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_bucket_inventory_configuration"
    values={[
        { label: 'put_bucket_inventory_configuration', value: 'put_bucket_inventory_configuration' }
    ]}
>
<TabItem value="put_bucket_inventory_configuration">

This implementation of the PUT action adds an S3 Inventory configuration (identified by the inventory ID) to the bucket. You can have up to 1,000 inventory configurations per bucket. Amazon S3 inventory generates inventories of the objects in the bucket on a daily or weekly basis, and the results are published to a flat file. The bucket that is inventoried is called the source bucket, and the bucket where the inventory flat file is stored is called the destination bucket. The destination bucket must be in the same Amazon Web Services Region as the source bucket. When you configure an inventory for a source bucket, you specify the destination bucket where you want the inventory to be stored, and whether to generate the inventory daily or weekly. You can also configure what object metadata to include and whether to inventory all object versions or only current versions. For more information, see Amazon S3 Inventory in the Amazon S3 User Guide. You must create a bucket policy on the destination bucket to grant permissions to Amazon S3 to write objects to the bucket in the defined location. For an example policy, see Granting Permissions for Amazon S3 Inventory and Storage Class Analysis. Directory buckets - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions To use this operation, you must have permission to perform the s3:PutInventoryConfiguration action. The bucket owner has this permission by default and can grant this permission to others. The s3:PutInventoryConfiguration permission allows a user to create an S3 Inventory report that includes all object metadata fields available and to specify the destination bucket to store the inventory. A user with read access to objects in the destination bucket can also access all object metadata fields that are available in the inventory report. General purpose bucket permissions - The s3:PutInventoryConfiguration permission is required in a policy. For more information about general purpose buckets permissions, see Using Bucket Policies and User Policies in the Amazon S3 User Guide. Directory bucket permissions - To grant access to this API operation, you must have the s3express:PutInventoryConfiguration permission in an IAM identity-based policy instead of a bucket policy. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. To restrict access to an inventory report, see Restricting access to an Amazon S3 Inventory report in the Amazon S3 User Guide. For more information about the metadata fields available in S3 Inventory, see Amazon S3 Inventory lists in the Amazon S3 User Guide. For more information about permissions, see Permissions related to bucket subresource operations and Identity and access management in Amazon S3 in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com. PutBucketInventoryConfiguration has the following special errors: HTTP 400 Bad Request Error Code: InvalidArgument Cause: Invalid Argument HTTP 400 Bad Request Error Code: TooManyConfigurations Cause: You are attempting to create a new configuration but have already reached the 1,000-configuration limit. HTTP 403 Forbidden Error Cause: You are not the owner of the specified bucket, or you do not have the s3:PutInventoryConfiguration bucket permission to set the configuration on the bucket. The following operations are related to PutBucketInventoryConfiguration: GetBucketInventoryConfiguration DeleteBucketInventoryConfiguration ListBucketInventoryConfigurations You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
REPLACE aws.s3.bucket_inventory_configurations
SET 
InventoryConfiguration = '{{ InventoryConfiguration }}'
WHERE 
bucket = '{{ bucket }}' --required
AND id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND InventoryConfiguration = '{{ InventoryConfiguration }}' --required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_bucket_inventory_configuration"
    values={[
        { label: 'delete_bucket_inventory_configuration', value: 'delete_bucket_inventory_configuration' }
    ]}
>
<TabItem value="delete_bucket_inventory_configuration">

Deletes an S3 Inventory configuration (identified by the inventory ID) from the bucket. Directory buckets - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions To use this operation, you must have permissions to perform the s3:PutInventoryConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. General purpose bucket permissions - The s3:PutInventoryConfiguration permission is required in a policy. For more information about general purpose buckets permissions, see Using Bucket Policies and User Policies in the Amazon S3 User Guide. Directory bucket permissions - To grant access to this API operation, you must have the s3express:PutInventoryConfiguration permission in an IAM identity-based policy instead of a bucket policy. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com. For information about the Amazon S3 inventory feature, see Amazon S3 Inventory. After deleting a configuration, Amazon S3 might still deliver one additional inventory report during a brief transition period while the system processes the deletion. Operations related to DeleteBucketInventoryConfiguration include: GetBucketInventoryConfiguration PutBucketInventoryConfiguration ListBucketInventoryConfigurations You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
DELETE FROM aws.s3.bucket_inventory_configurations
WHERE bucket = '{{ bucket }}' --required
AND id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
;
```
</TabItem>
</Tabs>
