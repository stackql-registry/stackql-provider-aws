--- 
title: job_taggings
hide_title: false
hide_table_of_contents: false
keywords:
  - job_taggings
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

Creates, updates, deletes, gets or lists a <code>job_taggings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="job_taggings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3control.job_taggings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_job_tagging"
    values={[
        { label: 'get_job_tagging', value: 'get_job_tagging' }
    ]}
>
<TabItem value="get_job_tagging">

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
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The set of tags associated with the S3 Batch Operations job.</td>
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
    <td><a href="#get_job_tagging"><CopyableCode code="get_job_tagging" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the tags on an S3 Batch Operations job. Permissions To use the GetJobTagging operation, you must have permission to perform the s3:GetJobTagging action. For more information, see Controlling access and labeling jobs using tags in the Amazon S3 User Guide. Related actions include: CreateJob PutJobTagging DeleteJobTagging</td>
</tr>
<tr>
    <td><a href="#put_job_tagging"><CopyableCode code="put_job_tagging" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Sets the supplied tag-set on an S3 Batch Operations job. A tag is a key-value pair. You can associate S3 Batch Operations tags with any job by sending a PUT request against the tagging subresource that is associated with the job. To modify the existing tag set, you can either replace the existing tag set entirely, or make changes within the existing tag set by retrieving the existing tag set using GetJobTagging, modify that tag set, and use this operation to replace the tag set with the one you modified. For more information, see Controlling access and labeling jobs using tags in the Amazon S3 User Guide. If you send this request with an empty tag set, Amazon S3 deletes the existing tag set on the Batch Operations job. If you use this method, you are charged for a Tier 1 Request (PUT). For more information, see Amazon S3 pricing. For deleting existing tags for your Batch Operations job, a DeleteJobTagging request is preferred because it achieves the same result without incurring charges. A few things to consider about using tags: Amazon S3 limits the maximum number of tags to 50 tags per job. You can associate up to 50 tags with a job as long as they have unique tag keys. A tag key can be up to 128 Unicode characters in length, and tag values can be up to 256 Unicode characters in length. The key and values are case sensitive. For tagging-related restrictions related to characters and encodings, see User-Defined Tag Restrictions in the Billing and Cost Management User Guide. Permissions To use the PutJobTagging operation, you must have permission to perform the s3:PutJobTagging action. Related actions include: CreateJob GetJobTagging DeleteJobTagging</td>
</tr>
<tr>
    <td><a href="#delete_job_tagging"><CopyableCode code="delete_job_tagging" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the entire tag set from the specified S3 Batch Operations job. Permissions To use the DeleteJobTagging operation, you must have permission to perform the s3:DeleteJobTagging action. For more information, see Controlling access and labeling jobs using tags in the Amazon S3 User Guide. Related actions include: CreateJob GetJobTagging PutJobTagging</td>
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
    <td>The ID for the S3 Batch Operations job whose tags you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-x-amz-account-id">
    <td><CopyableCode code="x-amz-account-id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID associated with the S3 Batch Operations job.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_job_tagging"
    values={[
        { label: 'get_job_tagging', value: 'get_job_tagging' }
    ]}
>
<TabItem value="get_job_tagging">

Returns the tags on an S3 Batch Operations job. Permissions To use the GetJobTagging operation, you must have permission to perform the s3:GetJobTagging action. For more information, see Controlling access and labeling jobs using tags in the Amazon S3 User Guide. Related actions include: CreateJob PutJobTagging DeleteJobTagging

```sql
SELECT
tags
FROM aws.s3control.job_taggings
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_job_tagging"
    values={[
        { label: 'put_job_tagging', value: 'put_job_tagging' }
    ]}
>
<TabItem value="put_job_tagging">

Sets the supplied tag-set on an S3 Batch Operations job. A tag is a key-value pair. You can associate S3 Batch Operations tags with any job by sending a PUT request against the tagging subresource that is associated with the job. To modify the existing tag set, you can either replace the existing tag set entirely, or make changes within the existing tag set by retrieving the existing tag set using GetJobTagging, modify that tag set, and use this operation to replace the tag set with the one you modified. For more information, see Controlling access and labeling jobs using tags in the Amazon S3 User Guide. If you send this request with an empty tag set, Amazon S3 deletes the existing tag set on the Batch Operations job. If you use this method, you are charged for a Tier 1 Request (PUT). For more information, see Amazon S3 pricing. For deleting existing tags for your Batch Operations job, a DeleteJobTagging request is preferred because it achieves the same result without incurring charges. A few things to consider about using tags: Amazon S3 limits the maximum number of tags to 50 tags per job. You can associate up to 50 tags with a job as long as they have unique tag keys. A tag key can be up to 128 Unicode characters in length, and tag values can be up to 256 Unicode characters in length. The key and values are case sensitive. For tagging-related restrictions related to characters and encodings, see User-Defined Tag Restrictions in the Billing and Cost Management User Guide. Permissions To use the PutJobTagging operation, you must have permission to perform the s3:PutJobTagging action. Related actions include: CreateJob GetJobTagging DeleteJobTagging

```sql
REPLACE aws.s3control.job_taggings
SET 
Tags = '{{ Tags }}'
WHERE 
`x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND id = '{{ id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_job_tagging"
    values={[
        { label: 'delete_job_tagging', value: 'delete_job_tagging' }
    ]}
>
<TabItem value="delete_job_tagging">

Removes the entire tag set from the specified S3 Batch Operations job. Permissions To use the DeleteJobTagging operation, you must have permission to perform the s3:DeleteJobTagging action. For more information, see Controlling access and labeling jobs using tags in the Amazon S3 User Guide. Related actions include: CreateJob GetJobTagging PutJobTagging

```sql
DELETE FROM aws.s3control.job_taggings
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
