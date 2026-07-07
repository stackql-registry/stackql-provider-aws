--- 
title: object_taggings
hide_title: false
hide_table_of_contents: false
keywords:
  - object_taggings
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

Creates, updates, deletes, gets or lists an <code>object_taggings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="object_taggings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3.object_taggings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_object_tagging"
    values={[
        { label: 'get_object_tagging', value: 'get_object_tagging' }
    ]}
>
<TabItem value="get_object_tagging">

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
    <td><a href="#get_object_tagging"><CopyableCode code="get_object_tagging" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-versionId"><code>versionId</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a>, <a href="#parameter-x-amz-request-payer"><code>x-amz-request-payer</code></a></td>
    <td>This operation is not supported for directory buckets. Returns the tag-set of an object. You send the GET request against the tagging subresource associated with the object. To use this operation, you must have permission to perform the s3:GetObjectTagging action. By default, the GET action returns information about current version of an object. For a versioned bucket, you can have multiple versions of an object in your bucket. To retrieve tags of any other version, use the versionId query parameter. You also need permission for the s3:GetObjectVersionTagging action. By default, the bucket owner has this permission and can grant this permission to others. For information about the Amazon S3 object tagging feature, see Object Tagging. The following actions are related to GetObjectTagging: DeleteObjectTagging GetObjectAttributes PutObjectTagging You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#put_object_tagging"><CopyableCode code="put_object_tagging" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Tagging"><code>Tagging</code></a></td>
    <td><a href="#parameter-versionId"><code>versionId</code></a>, <a href="#parameter-Content-MD5"><code>Content-MD5</code></a>, <a href="#parameter-x-amz-sdk-checksum-algorithm"><code>x-amz-sdk-checksum-algorithm</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a>, <a href="#parameter-x-amz-request-payer"><code>x-amz-request-payer</code></a></td>
    <td>This operation is not supported for directory buckets. Sets the supplied tag-set to an object that already exists in a bucket. A tag is a key-value pair. For more information, see Object Tagging. You can associate tags with an object by sending a PUT request against the tagging subresource that is associated with the object. You can retrieve tags by sending a GET request. For more information, see GetObjectTagging. For tagging-related restrictions related to characters and encodings, see Tag Restrictions. Note that Amazon S3 limits the maximum number of tags to 10 tags per object. To use this operation, you must have permission to perform the s3:PutObjectTagging action. By default, the bucket owner has this permission and can grant this permission to others. To put tags of any other version, use the versionId query parameter. You also need permission for the s3:PutObjectVersionTagging action. PutObjectTagging has the following special errors. For more Amazon S3 errors see, Error Responses. InvalidTag - The tag provided was not a valid tag. This error can occur if the tag did not pass input validation. For more information, see Object Tagging. MalformedXML - The XML provided does not match the schema. OperationAborted - A conflicting conditional action is currently in progress against this resource. Please try again. InternalError - The service was unable to apply the provided tag to the object. The following operations are related to PutObjectTagging: GetObjectTagging DeleteObjectTagging You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#delete_object_tagging"><CopyableCode code="delete_object_tagging" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-versionId"><code>versionId</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>This operation is not supported for directory buckets. Removes the entire tag set from the specified object. For more information about managing object tags, see Object Tagging. To use this operation, you must have permission to perform the s3:DeleteObjectTagging action. To delete tags of a specific object version, add the versionId query parameter in the request. You will need permission for the s3:DeleteObjectVersionTagging action. The following operations are related to DeleteObjectTagging: PutObjectTagging GetObjectTagging You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
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
    <td>The bucket name containing the objects from which to remove the tags. Access points - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide. S3 on Outposts - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see What is S3 on Outposts? in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-key">
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>The key that identifies the object in the bucket from which to remove all tags.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Content-MD5">
    <td><CopyableCode code="Content-MD5" /></td>
    <td><code>string</code></td>
    <td>The MD5 hash for the request body. For requests made using the Amazon Web Services Command Line Interface (CLI) or Amazon Web Services SDKs, this field is calculated automatically.</td>
</tr>
<tr id="parameter-versionId">
    <td><CopyableCode code="versionId" /></td>
    <td><code>string</code></td>
    <td>The versionId of the object that the tag-set will be removed from.</td>
</tr>
<tr id="parameter-x-amz-expected-bucket-owner">
    <td><CopyableCode code="x-amz-expected-bucket-owner" /></td>
    <td><code>string</code></td>
    <td>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied).</td>
</tr>
<tr id="parameter-x-amz-request-payer">
    <td><CopyableCode code="x-amz-request-payer" /></td>
    <td><code>string</code></td>
    <td>Confirms that the requester knows that she or he will be charged for the tagging object request. Bucket owners need not specify this parameter in their requests.</td>
</tr>
<tr id="parameter-x-amz-sdk-checksum-algorithm">
    <td><CopyableCode code="x-amz-sdk-checksum-algorithm" /></td>
    <td><code>string</code></td>
    <td>Indicates the algorithm used to create the checksum for the object when you use the SDK. This header will not provide any additional functionality if you don't use the SDK. When you send this header, there must be a corresponding x-amz-checksum or x-amz-trailer header sent. Otherwise, Amazon S3 fails the request with the HTTP status code 400 Bad Request. For more information, see Checking object integrity in the Amazon S3 User Guide. If you provide an individual checksum, Amazon S3 ignores any provided ChecksumAlgorithm parameter.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_object_tagging"
    values={[
        { label: 'get_object_tagging', value: 'get_object_tagging' }
    ]}
>
<TabItem value="get_object_tagging">

This operation is not supported for directory buckets. Returns the tag-set of an object. You send the GET request against the tagging subresource associated with the object. To use this operation, you must have permission to perform the s3:GetObjectTagging action. By default, the GET action returns information about current version of an object. For a versioned bucket, you can have multiple versions of an object in your bucket. To retrieve tags of any other version, use the versionId query parameter. You also need permission for the s3:GetObjectVersionTagging action. By default, the bucket owner has this permission and can grant this permission to others. For information about the Amazon S3 object tagging feature, see Object Tagging. The following actions are related to GetObjectTagging: DeleteObjectTagging GetObjectAttributes PutObjectTagging You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
SELECT
line_items
FROM aws.s3.object_taggings
WHERE bucket = '{{ bucket }}' -- required
AND key = '{{ key }}' -- required
AND region = '{{ region }}' -- required
AND versionId = '{{ versionId }}'
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
AND `x-amz-request-payer` = '{{ x-amz-request-payer }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_object_tagging"
    values={[
        { label: 'put_object_tagging', value: 'put_object_tagging' }
    ]}
>
<TabItem value="put_object_tagging">

This operation is not supported for directory buckets. Sets the supplied tag-set to an object that already exists in a bucket. A tag is a key-value pair. For more information, see Object Tagging. You can associate tags with an object by sending a PUT request against the tagging subresource that is associated with the object. You can retrieve tags by sending a GET request. For more information, see GetObjectTagging. For tagging-related restrictions related to characters and encodings, see Tag Restrictions. Note that Amazon S3 limits the maximum number of tags to 10 tags per object. To use this operation, you must have permission to perform the s3:PutObjectTagging action. By default, the bucket owner has this permission and can grant this permission to others. To put tags of any other version, use the versionId query parameter. You also need permission for the s3:PutObjectVersionTagging action. PutObjectTagging has the following special errors. For more Amazon S3 errors see, Error Responses. InvalidTag - The tag provided was not a valid tag. This error can occur if the tag did not pass input validation. For more information, see Object Tagging. MalformedXML - The XML provided does not match the schema. OperationAborted - A conflicting conditional action is currently in progress against this resource. Please try again. InternalError - The service was unable to apply the provided tag to the object. The following operations are related to PutObjectTagging: GetObjectTagging DeleteObjectTagging You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
REPLACE aws.s3.object_taggings
SET 
Tagging = '{{ Tagging }}'
WHERE 
bucket = '{{ bucket }}' --required
AND key = '{{ key }}' --required
AND region = '{{ region }}' --required
AND Tagging = '{{ Tagging }}' --required
AND versionId = '{{ versionId}}'
AND `Content-MD5` = '{{ Content-MD5}}'
AND `x-amz-sdk-checksum-algorithm` = '{{ x-amz-sdk-checksum-algorithm}}'
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner}}'
AND `x-amz-request-payer` = '{{ x-amz-request-payer}}'
RETURNING
line_items;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_object_tagging"
    values={[
        { label: 'delete_object_tagging', value: 'delete_object_tagging' }
    ]}
>
<TabItem value="delete_object_tagging">

This operation is not supported for directory buckets. Removes the entire tag set from the specified object. For more information about managing object tags, see Object Tagging. To use this operation, you must have permission to perform the s3:DeleteObjectTagging action. To delete tags of a specific object version, add the versionId query parameter in the request. You will need permission for the s3:DeleteObjectVersionTagging action. The following operations are related to DeleteObjectTagging: PutObjectTagging GetObjectTagging You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
DELETE FROM aws.s3.object_taggings
WHERE bucket = '{{ bucket }}' --required
AND key = '{{ key }}' --required
AND region = '{{ region }}' --required
AND versionId = '{{ versionId }}'
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
;
```
</TabItem>
</Tabs>
