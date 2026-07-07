--- 
title: bucket_taggings
hide_title: false
hide_table_of_contents: false
keywords:
  - bucket_taggings
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

Creates, updates, deletes, gets or lists a <code>bucket_taggings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bucket_taggings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3control.bucket_taggings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bucket_tagging"
    values={[
        { label: 'get_bucket_tagging', value: 'get_bucket_tagging' }
    ]}
>
<TabItem value="get_bucket_tagging">

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
    <td><CopyableCode code="TagSet" /></td>
    <td><code>string</code></td>
    <td>The tags set of the Outposts bucket.</td>
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
    <td><a href="#get_bucket_tagging"><CopyableCode code="get_bucket_tagging" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This action gets an Amazon S3 on Outposts bucket's tags. To get an S3 bucket tags, see GetBucketTagging in the Amazon S3 API Reference. Returns the tag set associated with the Outposts bucket. For more information, see Using Amazon S3 on Outposts in the Amazon S3 User Guide. To use this action, you must have permission to perform the GetBucketTagging action. By default, the bucket owner has this permission and can grant this permission to others. GetBucketTagging has the following special error: Error code: NoSuchTagSetError Description: There is no tag set associated with the bucket. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to GetBucketTagging: PutBucketTagging DeleteBucketTagging</td>
</tr>
<tr>
    <td><a href="#put_bucket_tagging"><CopyableCode code="put_bucket_tagging" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Tagging"><code>Tagging</code></a></td>
    <td></td>
    <td>This action puts tags on an Amazon S3 on Outposts bucket. To put tags on an S3 bucket, see PutBucketTagging in the Amazon S3 API Reference. Sets the tags for an S3 on Outposts bucket. For more information, see Using Amazon S3 on Outposts in the Amazon S3 User Guide. Use tags to organize your Amazon Web Services bill to reflect your own cost structure. To do this, sign up to get your Amazon Web Services account bill with tag key values included. Then, to see the cost of combined resources, organize your billing information according to resources with the same tag key values. For example, you can tag several resources with a specific application name, and then organize your billing information to see the total cost of that application across several services. For more information, see Cost allocation and tagging. Within a bucket, if you add a tag that has the same key as an existing tag, the new value overwrites the old value. For more information, see Using cost allocation in Amazon S3 bucket tags. To use this action, you must have permissions to perform the s3-outposts:PutBucketTagging action. The Outposts bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing access permissions to your Amazon S3 resources. PutBucketTagging has the following special errors: Error code: InvalidTagError Description: The tag provided was not a valid tag. This error can occur if the tag did not pass input validation. For information about tag restrictions, see User-Defined Tag Restrictions and Amazon Web Services-Generated Cost Allocation Tag Restrictions. Error code: MalformedXMLError Description: The XML provided does not match the schema. Error code: OperationAbortedError Description: A conflicting conditional action is currently in progress against this resource. Try again. Error code: InternalError Description: The service was unable to apply the provided tag to the bucket. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to PutBucketTagging: GetBucketTagging DeleteBucketTagging</td>
</tr>
<tr>
    <td><a href="#delete_bucket_tagging"><CopyableCode code="delete_bucket_tagging" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This action deletes an Amazon S3 on Outposts bucket's tags. To delete an S3 bucket tags, see DeleteBucketTagging in the Amazon S3 API Reference. Deletes the tags from the Outposts bucket. For more information, see Using Amazon S3 on Outposts in Amazon S3 User Guide. To use this action, you must have permission to perform the PutBucketTagging action. By default, the bucket owner has this permission and can grant this permission to others. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to DeleteBucketTagging: GetBucketTagging PutBucketTagging</td>
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
    <td>The bucket ARN that has the tag set to be removed. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:<code>&lt;Region&gt;</code>:<code>&lt;account-id&gt;</code>:outpost/<code>&lt;outpost-id&gt;</code>/bucket/<code>&lt;my-bucket-name&gt;</code>. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-x-amz-account-id">
    <td><CopyableCode code="x-amz-account-id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID of the Outposts bucket tag set to be removed.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_bucket_tagging"
    values={[
        { label: 'get_bucket_tagging', value: 'get_bucket_tagging' }
    ]}
>
<TabItem value="get_bucket_tagging">

This action gets an Amazon S3 on Outposts bucket's tags. To get an S3 bucket tags, see GetBucketTagging in the Amazon S3 API Reference. Returns the tag set associated with the Outposts bucket. For more information, see Using Amazon S3 on Outposts in the Amazon S3 User Guide. To use this action, you must have permission to perform the GetBucketTagging action. By default, the bucket owner has this permission and can grant this permission to others. GetBucketTagging has the following special error: Error code: NoSuchTagSetError Description: There is no tag set associated with the bucket. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to GetBucketTagging: PutBucketTagging DeleteBucketTagging

```sql
SELECT
TagSet
FROM aws.s3control.bucket_taggings
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_bucket_tagging"
    values={[
        { label: 'put_bucket_tagging', value: 'put_bucket_tagging' }
    ]}
>
<TabItem value="put_bucket_tagging">

This action puts tags on an Amazon S3 on Outposts bucket. To put tags on an S3 bucket, see PutBucketTagging in the Amazon S3 API Reference. Sets the tags for an S3 on Outposts bucket. For more information, see Using Amazon S3 on Outposts in the Amazon S3 User Guide. Use tags to organize your Amazon Web Services bill to reflect your own cost structure. To do this, sign up to get your Amazon Web Services account bill with tag key values included. Then, to see the cost of combined resources, organize your billing information according to resources with the same tag key values. For example, you can tag several resources with a specific application name, and then organize your billing information to see the total cost of that application across several services. For more information, see Cost allocation and tagging. Within a bucket, if you add a tag that has the same key as an existing tag, the new value overwrites the old value. For more information, see Using cost allocation in Amazon S3 bucket tags. To use this action, you must have permissions to perform the s3-outposts:PutBucketTagging action. The Outposts bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing access permissions to your Amazon S3 resources. PutBucketTagging has the following special errors: Error code: InvalidTagError Description: The tag provided was not a valid tag. This error can occur if the tag did not pass input validation. For information about tag restrictions, see User-Defined Tag Restrictions and Amazon Web Services-Generated Cost Allocation Tag Restrictions. Error code: MalformedXMLError Description: The XML provided does not match the schema. Error code: OperationAbortedError Description: A conflicting conditional action is currently in progress against this resource. Try again. Error code: InternalError Description: The service was unable to apply the provided tag to the bucket. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to PutBucketTagging: GetBucketTagging DeleteBucketTagging

```sql
REPLACE aws.s3control.bucket_taggings
SET 
Tagging = '{{ Tagging }}'
WHERE 
`x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
AND Tagging = '{{ Tagging }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_bucket_tagging"
    values={[
        { label: 'delete_bucket_tagging', value: 'delete_bucket_tagging' }
    ]}
>
<TabItem value="delete_bucket_tagging">

This action deletes an Amazon S3 on Outposts bucket's tags. To delete an S3 bucket tags, see DeleteBucketTagging in the Amazon S3 API Reference. Deletes the tags from the Outposts bucket. For more information, see Using Amazon S3 on Outposts in Amazon S3 User Guide. To use this action, you must have permission to perform the PutBucketTagging action. By default, the bucket owner has this permission and can grant this permission to others. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to DeleteBucketTagging: GetBucketTagging PutBucketTagging

```sql
DELETE FROM aws.s3control.bucket_taggings
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
