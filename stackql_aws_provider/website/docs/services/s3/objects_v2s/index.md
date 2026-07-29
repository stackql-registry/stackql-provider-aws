--- 
title: objects_v2s
hide_title: false
hide_table_of_contents: false
keywords:
  - objects_v2s
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

Creates, updates, deletes, gets or lists an <code>objects_v2s</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="objects_v2s" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3.objects_v2s" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_objects_v2"
    values={[
        { label: 'list_objects_v2', value: 'list_objects_v2' }
    ]}
>
<TabItem value="list_objects_v2">

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
    <td><CopyableCode code="checksum_algorithm" /></td>
    <td><code>string</code></td>
    <td>The algorithm that was used to create a checksum of the object.</td>
</tr>
<tr>
    <td><CopyableCode code="checksum_type" /></td>
    <td><code>string</code></td>
    <td>The checksum type that is used to calculate the object’s checksum value. For more information, see Checking object integrity in the Amazon S3 User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="e_tag" /></td>
    <td><code>string</code></td>
    <td>The entity tag is a hash of the object. The ETag reflects changes only to the contents of an object, not its metadata. The ETag may or may not be an MD5 digest of the object data. Whether or not it is depends on how the object was created and how it is encrypted as described below: Objects created by the PUT Object, POST Object, or Copy operation, or through the Amazon Web Services Management Console, and are encrypted by SSE-S3 or plaintext, have ETags that are an MD5 digest of their object data. Objects created by the PUT Object, POST Object, or Copy operation, or through the Amazon Web Services Management Console, and are encrypted by SSE-C or SSE-KMS, have ETags that are not an MD5 digest of their object data. If an object is created by either the Multipart Upload or Part Copy operation, the ETag is not an MD5 digest, regardless of the method of encryption. If an object is larger than 16 MB, the Amazon Web Services Management Console will upload or copy that object as a Multipart Upload, and therefore the ETag will not be an MD5 digest. Directory buckets - MD5 is not supported by directory buckets.</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>The name that you assign to an object. You use the object key to retrieve the object.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified" /></td>
    <td><code>string</code></td>
    <td>Creation date of the object.</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>The owner of the object Directory buckets - The bucket owner is returned as the object owner.</td>
</tr>
<tr>
    <td><CopyableCode code="restore_status" /></td>
    <td><code>string</code></td>
    <td>Specifies the restoration status of an object. Objects in certain storage classes must be restored before they can be retrieved. For more information about these storage classes and how to work with archived objects, see Working with archived objects in the Amazon S3 User Guide. This functionality is not supported for directory buckets. Directory buckets only support EXPRESS_ONEZONE (the S3 Express One Zone storage class) in Availability Zones and ONEZONE_IA (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones.</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Size in bytes of the object</td>
</tr>
<tr>
    <td><CopyableCode code="storage_class" /></td>
    <td><code>string</code></td>
    <td>The class of storage used to store the object. Directory buckets - Directory buckets only support EXPRESS_ONEZONE (the S3 Express One Zone storage class) in Availability Zones and ONEZONE_IA (the S3 One Zone-Infrequent Access storage class) in Dedicated Local Zones.</td>
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
    <td><a href="#list_objects_v2"><CopyableCode code="list_objects_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-delimiter"><code>delimiter</code></a>, <a href="#parameter-encoding-type"><code>encoding-type</code></a>, <a href="#parameter-max-keys"><code>max-keys</code></a>, <a href="#parameter-prefix"><code>prefix</code></a>, <a href="#parameter-continuation-token"><code>continuation-token</code></a>, <a href="#parameter-fetch-owner"><code>fetch-owner</code></a>, <a href="#parameter-start-after"><code>start-after</code></a>, <a href="#parameter-x-amz-request-payer"><code>x-amz-request-payer</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a>, <a href="#parameter-x-amz-optional-object-attributes"><code>x-amz-optional-object-attributes</code></a></td>
    <td>Returns some or all (up to 1,000) of the objects in a bucket with each request. You can use the request parameters as selection criteria to return a subset of the objects in a bucket. A 200 OK response can contain valid or invalid XML. Make sure to design your application to parse the contents of the response and handle it appropriately. For more information about listing objects, see Listing object keys programmatically in the Amazon S3 User Guide. To get a list of your buckets, see ListBuckets. General purpose bucket - For general purpose buckets, ListObjectsV2 doesn't return prefixes that are related only to in-progress multipart uploads. Directory buckets - For directory buckets, ListObjectsV2 response includes the prefixes that are related only to in-progress multipart uploads. Directory buckets - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https:​//amzn-s3-demo-bucket.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions General purpose bucket permissions - To use this operation, you must have READ access to the bucket. You must have permission to perform the s3:ListBucket action. The bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources in the Amazon S3 User Guide. Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the CreateSession API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see CreateSession . Sorting order of returned objects General purpose bucket - For general purpose buckets, ListObjectsV2 returns objects in lexicographical order based on their key names. Directory bucket - For directory buckets, ListObjectsV2 does not return objects in lexicographical order. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is Bucket-name.s3express-zone-id.region-code.amazonaws.com. This section describes the latest revision of this action. We recommend that you use this revised API operation for application development. For backward compatibility, Amazon S3 continues to support the prior version of this API operation, ListObjects. The following operations are related to ListObjectsV2: GetObject PutObject CreateBucket You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
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
    <td>Directory buckets - When you use this operation with a directory bucket, you must use virtual-hosted-style requests in the format Bucket-name.s3express-zone-id.region-code.amazonaws.com. Path-style requests are not supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must follow the format bucket-base-name--zone-id--x-s3 (for example, amzn-s3-demo-bucket--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide. Access points - When you use this action with an access point for general purpose buckets, you must provide the alias of the access point in place of the bucket name or specify the access point ARN. When you use this action with an access point for directory buckets, you must provide the access point name in place of the bucket name. When using the access point ARN, you must direct requests to the access point hostname. The access point hostname takes the form AccessPointName-AccountId.s3-accesspoint.Region.amazonaws.com. When using this action with an access point through the Amazon Web Services SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see Using access points in the Amazon S3 User Guide. Object Lambda access points are not supported by directory buckets. S3 on Outposts - When you use this action with S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form AccessPointName-AccountId.outpostID.s3-outposts.Region.amazonaws.com. When you use this action with S3 on Outposts, the destination bucket must be the Outposts access point ARN or the access point alias. For more information about S3 on Outposts, see What is S3 on Outposts? in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-continuation-token">
    <td><CopyableCode code="continuation-token" /></td>
    <td><code>string</code></td>
    <td>ContinuationToken indicates to Amazon S3 that the list is being continued on this bucket with a token. ContinuationToken is obfuscated and is not a real key. You can use this ContinuationToken for pagination of the list results.</td>
</tr>
<tr id="parameter-delimiter">
    <td><CopyableCode code="delimiter" /></td>
    <td><code>string</code></td>
    <td>A delimiter is a character that you use to group keys. CommonPrefixes is filtered out from results if it is not lexicographically greater than the StartAfter value. Directory buckets - For directory buckets, / is the only supported delimiter. Directory buckets - When you query ListObjectsV2 with a delimiter during in-progress multipart uploads, the CommonPrefixes response parameter contains the prefixes that are associated with the in-progress multipart uploads. For more information about multipart uploads, see Multipart Upload Overview in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-encoding-type">
    <td><CopyableCode code="encoding-type" /></td>
    <td><code>string</code></td>
    <td>Encoding type used by Amazon S3 to encode the object keys in the response. Responses are encoded only in UTF-8. An object key can contain any Unicode character. However, the XML 1.0 parser can't parse certain characters, such as characters with an ASCII value from 0 to 10. For characters that aren't supported in XML 1.0, you can add this parameter to request that Amazon S3 encode the keys in the response. For more information about characters to avoid in object key names, see Object key naming guidelines. When using the URL encoding type, non-ASCII characters that are used in an object's key name will be percent-encoded according to UTF-8 code values. For example, the object test_file(3).png will appear as test_file%283%29.png.</td>
</tr>
<tr id="parameter-fetch-owner">
    <td><CopyableCode code="fetch-owner" /></td>
    <td><code>boolean</code></td>
    <td>The owner field is not present in ListObjectsV2 by default. If you want to return the owner field with each key in the result, then set the FetchOwner field to true. Directory buckets - For directory buckets, the bucket owner is returned as the object owner for all objects.</td>
</tr>
<tr id="parameter-max-keys">
    <td><CopyableCode code="max-keys" /></td>
    <td><code>integer</code></td>
    <td>Sets the maximum number of keys returned in the response. By default, the action returns up to 1,000 key names. The response might contain fewer keys but will never contain more.</td>
</tr>
<tr id="parameter-prefix">
    <td><CopyableCode code="prefix" /></td>
    <td><code>string</code></td>
    <td>Limits the response to keys that begin with the specified prefix. Directory buckets - For directory buckets, only prefixes that end in a delimiter (/) are supported.</td>
</tr>
<tr id="parameter-start-after">
    <td><CopyableCode code="start-after" /></td>
    <td><code>string</code></td>
    <td>StartAfter is where you want Amazon S3 to start listing from. Amazon S3 starts listing after this specified key. StartAfter can be any key in the bucket. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-expected-bucket-owner">
    <td><CopyableCode code="x-amz-expected-bucket-owner" /></td>
    <td><code>string</code></td>
    <td>The account ID of the expected bucket owner. If the account ID that you provide does not match the actual owner of the bucket, the request fails with the HTTP status code 403 Forbidden (access denied).</td>
</tr>
<tr id="parameter-x-amz-optional-object-attributes">
    <td><CopyableCode code="x-amz-optional-object-attributes" /></td>
    <td><code>array</code></td>
    <td>Specifies the optional fields that you want returned in the response. Fields that you do not specify are not returned. This functionality is not supported for directory buckets.</td>
</tr>
<tr id="parameter-x-amz-request-payer">
    <td><CopyableCode code="x-amz-request-payer" /></td>
    <td><code>string</code></td>
    <td>Confirms that the requester knows that she or he will be charged for the list objects request in V2 style. Bucket owners need not specify this parameter in their requests. This functionality is not supported for directory buckets.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_objects_v2"
    values={[
        { label: 'list_objects_v2', value: 'list_objects_v2' }
    ]}
>
<TabItem value="list_objects_v2">

Returns some or all (up to 1,000) of the objects in a bucket with each request. You can use the request parameters as selection criteria to return a subset of the objects in a bucket. A 200 OK response can contain valid or invalid XML. Make sure to design your application to parse the contents of the response and handle it appropriately. For more information about listing objects, see Listing object keys programmatically in the Amazon S3 User Guide. To get a list of your buckets, see ListBuckets. General purpose bucket - For general purpose buckets, ListObjectsV2 doesn't return prefixes that are related only to in-progress multipart uploads. Directory buckets - For directory buckets, ListObjectsV2 response includes the prefixes that are related only to in-progress multipart uploads. Directory buckets - For directory buckets, you must make requests for this API operation to the Zonal endpoint. These endpoints support virtual-hosted-style requests in the format https://amzn-s3-demo-bucket.s3express-zone-id.region-code.amazonaws.com/key-name . Path-style requests are not supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions General purpose bucket permissions - To use this operation, you must have READ access to the bucket. You must have permission to perform the s3:ListBucket action. The bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources in the Amazon S3 User Guide. Directory bucket permissions - To grant access to this API operation on a directory bucket, we recommend that you use the CreateSession API operation for session-based authorization. Specifically, you grant the s3express:CreateSession permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the CreateSession API call on the bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another CreateSession API call to generate a new session token for use. Amazon Web Services CLI or SDKs create session and refresh the session token automatically to avoid service interruptions when a session expires. For more information about authorization, see CreateSession . Sorting order of returned objects General purpose bucket - For general purpose buckets, ListObjectsV2 returns objects in lexicographical order based on their key names. Directory bucket - For directory buckets, ListObjectsV2 does not return objects in lexicographical order. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is Bucket-name.s3express-zone-id.region-code.amazonaws.com. This section describes the latest revision of this action. We recommend that you use this revised API operation for application development. For backward compatibility, Amazon S3 continues to support the prior version of this API operation, ListObjects. The following operations are related to ListObjectsV2: GetObject PutObject CreateBucket You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
SELECT
checksum_algorithm,
checksum_type,
e_tag,
key,
last_modified,
owner,
restore_status,
size,
storage_class
FROM aws.s3.objects_v2s
WHERE bucket = '{{ bucket }}' -- required
AND region = '{{ region }}' -- required
AND delimiter = '{{ delimiter }}'
AND `encoding-type` = '{{ encoding-type }}'
AND `max-keys` = '{{ max-keys }}'
AND prefix = '{{ prefix }}'
AND `continuation-token` = '{{ continuation-token }}'
AND `fetch-owner` = '{{ fetch-owner }}'
AND `start-after` = '{{ start-after }}'
AND `x-amz-request-payer` = '{{ x-amz-request-payer }}'
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
AND `x-amz-optional-object-attributes` = '{{ x-amz-optional-object-attributes }}'
;
```
</TabItem>
</Tabs>
