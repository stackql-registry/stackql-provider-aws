--- 
title: tags
hide_title: false
hide_table_of_contents: false
keywords:
  - tags
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

Creates, updates, deletes, gets or lists a <code>tags</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tags" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3control.tags" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_tags_for_resource"
    values={[
        { label: 'list_tags_for_resource', value: 'list_tags_for_resource' }
    ]}
>
<TabItem value="list_tags_for_resource">

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
    <td><CopyableCode code="Key" /></td>
    <td><code>string</code></td>
    <td>The key of the key-value pair of a tag added to your Amazon Web Services resource. A tag key can be up to 128 Unicode characters in length and is case-sensitive. System created tags that begin with aws: aren’t supported.</td>
</tr>
<tr>
    <td><CopyableCode code="Value" /></td>
    <td><code>string</code></td>
    <td>The value of the key-value pair of a tag added to your Amazon Web Services resource. A tag value can be up to 256 Unicode characters in length and is case-sensitive.</td>
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
    <td><a href="#list_tags_for_resource"><CopyableCode code="list_tags_for_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation allows you to list all of the tags for a specified resource. Each tag is a label consisting of a key and value. Tags can help you organize, track costs for, and control access to resources. This operation is only supported for the following Amazon S3 resources: General purpose buckets Access Points for directory buckets Access Points for general purpose buckets Directory buckets S3 Storage Lens groups S3 Access Grants instances, registered locations, and grants. Permissions For general purpose buckets, access points for general purpose buckets, Storage Lens groups, and S3 Access Grants, you must have the s3:ListTagsForResource permission to use this operation. Directory bucket permissions For directory buckets, you must have the s3express:ListTagsForResource permission to use this operation. For more information about directory buckets policies and permissions, see Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region.amazonaws.com. For information about S3 Tagging errors, see List of Amazon S3 Tagging error codes.</td>
</tr>
<tr>
    <td><a href="#untag_resource"><CopyableCode code="untag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-tagKeys"><code>tagKeys</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation removes the specified user-defined tags from an S3 resource. You can pass one or more tag keys. This operation is only supported for the following Amazon S3 resources: General purpose buckets Access Points for directory buckets Access Points for general purpose buckets Directory buckets S3 Storage Lens groups S3 Access Grants instances, registered locations, and grants. Permissions For general purpose buckets, access points for general purpose buckets, Storage Lens groups, and S3 Access Grants, you must have the s3:UntagResource permission to use this operation. Directory bucket permissions For directory buckets, you must have the s3express:UntagResource permission to use this operation. For more information about directory buckets policies and permissions, see Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region.amazonaws.com. For information about S3 Tagging errors, see List of Amazon S3 Tagging error codes.</td>
</tr>
<tr>
    <td><a href="#tag_resource"><CopyableCode code="tag_resource" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new user-defined tag or updates an existing tag. Each tag is a label consisting of a key and value that is applied to your resource. Tags can help you organize, track costs for, and control access to your resources. You can add up to 50 Amazon Web Services resource tags for each S3 resource. This operation is only supported for the following Amazon S3 resource: General purpose buckets Access Points for directory buckets Access Points for general purpose buckets Directory buckets S3 Storage Lens groups S3 Access Grants instances, registered locations, or grants. Permissions For general purpose buckets, access points for general purpose buckets, Storage Lens groups, and S3 Access Grants, you must have the s3:TagResource permission to use this operation. Directory bucket permissions For directory buckets, you must have the s3express:TagResource permission to use this operation. For more information about directory buckets policies and permissions, see Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region.amazonaws.com. For information about S3 Tagging errors, see List of Amazon S3 Tagging error codes.</td>
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
<tr id="parameter-resource_arn">
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the S3 resource that you're applying tags to. The tagged resource can be a directory bucket, S3 Storage Lens group or S3 Access Grants instance, registered location, or grant.</td>
</tr>
<tr id="parameter-tagKeys">
    <td><CopyableCode code="tagKeys" /></td>
    <td><code>array</code></td>
    <td>The array of tag key-value pairs that you're trying to remove from of the S3 resource.</td>
</tr>
<tr id="parameter-x-amz-account-id">
    <td><CopyableCode code="x-amz-account-id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that created the S3 resource that you're trying to add tags to or the requester's account ID.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_tags_for_resource"
    values={[
        { label: 'list_tags_for_resource', value: 'list_tags_for_resource' }
    ]}
>
<TabItem value="list_tags_for_resource">

This operation allows you to list all of the tags for a specified resource. Each tag is a label consisting of a key and value. Tags can help you organize, track costs for, and control access to resources. This operation is only supported for the following Amazon S3 resources: General purpose buckets Access Points for directory buckets Access Points for general purpose buckets Directory buckets S3 Storage Lens groups S3 Access Grants instances, registered locations, and grants. Permissions For general purpose buckets, access points for general purpose buckets, Storage Lens groups, and S3 Access Grants, you must have the s3:ListTagsForResource permission to use this operation. Directory bucket permissions For directory buckets, you must have the s3express:ListTagsForResource permission to use this operation. For more information about directory buckets policies and permissions, see Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region.amazonaws.com. For information about S3 Tagging errors, see List of Amazon S3 Tagging error codes.

```sql
SELECT
Key,
Value
FROM aws.s3control.tags
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND resource_arn = '{{ resource_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="untag_resource"
    values={[
        { label: 'untag_resource', value: 'untag_resource' },
        { label: 'tag_resource', value: 'tag_resource' }
    ]}
>
<TabItem value="untag_resource">

This operation removes the specified user-defined tags from an S3 resource. You can pass one or more tag keys. This operation is only supported for the following Amazon S3 resources: General purpose buckets Access Points for directory buckets Access Points for general purpose buckets Directory buckets S3 Storage Lens groups S3 Access Grants instances, registered locations, and grants. Permissions For general purpose buckets, access points for general purpose buckets, Storage Lens groups, and S3 Access Grants, you must have the s3:UntagResource permission to use this operation. Directory bucket permissions For directory buckets, you must have the s3express:UntagResource permission to use this operation. For more information about directory buckets policies and permissions, see Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region.amazonaws.com. For information about S3 Tagging errors, see List of Amazon S3 Tagging error codes.

```sql
UPDATE aws.s3control.tags
SET 
-- No updatable properties
WHERE 
`x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND resource_arn = '{{ resource_arn }}' --required
AND tagKeys = '{{ tagKeys }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="tag_resource">

Creates a new user-defined tag or updates an existing tag. Each tag is a label consisting of a key and value that is applied to your resource. Tags can help you organize, track costs for, and control access to your resources. You can add up to 50 Amazon Web Services resource tags for each S3 resource. This operation is only supported for the following Amazon S3 resource: General purpose buckets Access Points for directory buckets Access Points for general purpose buckets Directory buckets S3 Storage Lens groups S3 Access Grants instances, registered locations, or grants. Permissions For general purpose buckets, access points for general purpose buckets, Storage Lens groups, and S3 Access Grants, you must have the s3:TagResource permission to use this operation. Directory bucket permissions For directory buckets, you must have the s3express:TagResource permission to use this operation. For more information about directory buckets policies and permissions, see Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region.amazonaws.com. For information about S3 Tagging errors, see List of Amazon S3 Tagging error codes.

```sql
UPDATE aws.s3control.tags
SET 
Tags = '{{ Tags }}'
WHERE 
`x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND resource_arn = '{{ resource_arn }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
