--- 
title: bucket_metrics_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - bucket_metrics_configurations
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

Creates, updates, deletes, gets or lists a <code>bucket_metrics_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="bucket_metrics_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3.bucket_metrics_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_bucket_metrics_configuration"
    values={[
        { label: 'get_bucket_metrics_configuration', value: 'get_bucket_metrics_configuration' },
        { label: 'list_bucket_metrics_configurations', value: 'list_bucket_metrics_configurations' }
    ]}
>
<TabItem value="get_bucket_metrics_configuration">

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
    <td><CopyableCode code="Filter" /></td>
    <td><code>string</code></td>
    <td>Specifies a metrics configuration filter. The metrics configuration will only include objects that meet the filter's criteria. A filter must be a prefix, an object tag, an access point ARN, or a conjunction (MetricsAndOperator). Metrics configurations for directory buckets do not support tag filters.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID used to identify the metrics configuration. The ID has a 64 character limit and can only contain letters, numbers, periods, dashes, and underscores.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_bucket_metrics_configurations">

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
    <td><CopyableCode code="Filter" /></td>
    <td><code>string</code></td>
    <td>Specifies a metrics configuration filter. The metrics configuration will only include objects that meet the filter's criteria. A filter must be a prefix, an object tag, an access point ARN, or a conjunction (MetricsAndOperator). Metrics configurations for directory buckets do not support tag filters.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID used to identify the metrics configuration. The ID has a 64 character limit and can only contain letters, numbers, periods, dashes, and underscores.</td>
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
    <td><a href="#get_bucket_metrics_configuration"><CopyableCode code="get_bucket_metrics_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>Gets a metrics configuration (specified by the metrics configuration ID) from the bucket. Note that this doesn't include the daily storage metrics. Directory buckets - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https:​//s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions To use this operation, you must have permissions to perform the s3:GetMetricsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. General purpose bucket permissions - The s3:GetMetricsConfiguration permission is required in a policy. For more information about general purpose buckets permissions, see Using Bucket Policies and User Policies in the Amazon S3 User Guide. Directory bucket permissions - To grant access to this API operation, you must have the s3express:GetMetricsConfiguration permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com. For information about CloudWatch request metrics for Amazon S3, see Monitoring Metrics with Amazon CloudWatch. The following operations are related to GetBucketMetricsConfiguration: PutBucketMetricsConfiguration DeleteBucketMetricsConfiguration ListBucketMetricsConfigurations Monitoring Metrics with Amazon CloudWatch You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#list_bucket_metrics_configurations"><CopyableCode code="list_bucket_metrics_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-continuation-token"><code>continuation-token</code></a>, <a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>Lists the metrics configurations for the bucket. The metrics configurations are only for the request metrics of the bucket and do not provide information on daily storage metrics. You can have up to 1,000 configurations per bucket. Directory buckets - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https:​//s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. This action supports list pagination and does not return more than 100 configurations at a time. Always check the IsTruncated element in the response. If there are no more configurations to list, IsTruncated is set to false. If there are more configurations to list, IsTruncated is set to true, and there is a value in NextContinuationToken. You use the NextContinuationToken value to continue the pagination of the list by passing the value in continuation-token in the request to GET the next page. Permissions To use this operation, you must have permissions to perform the s3:GetMetricsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. General purpose bucket permissions - The s3:GetMetricsConfiguration permission is required in a policy. For more information about general purpose buckets permissions, see Using Bucket Policies and User Policies in the Amazon S3 User Guide. Directory bucket permissions - To grant access to this API operation, you must have the s3express:GetMetricsConfiguration permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com. For more information about metrics configurations and CloudWatch request metrics, see Monitoring Metrics with Amazon CloudWatch. The following operations are related to ListBucketMetricsConfigurations: PutBucketMetricsConfiguration GetBucketMetricsConfiguration DeleteBucketMetricsConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#put_bucket_metrics_configuration"><CopyableCode code="put_bucket_metrics_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MetricsConfiguration"><code>MetricsConfiguration</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>Sets a metrics configuration (specified by the metrics configuration ID) for the bucket. You can have up to 1,000 metrics configurations per bucket. If you're updating an existing metrics configuration, note that this is a full replacement of the existing metrics configuration. If you don't include the elements you want to keep, they are erased. Directory buckets - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https:​//s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions To use this operation, you must have permissions to perform the s3:PutMetricsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. General purpose bucket permissions - The s3:PutMetricsConfiguration permission is required in a policy. For more information about general purpose buckets permissions, see Using Bucket Policies and User Policies in the Amazon S3 User Guide. Directory bucket permissions - To grant access to this API operation, you must have the s3express:PutMetricsConfiguration permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com. For information about CloudWatch request metrics for Amazon S3, see Monitoring Metrics with Amazon CloudWatch. The following operations are related to PutBucketMetricsConfiguration: DeleteBucketMetricsConfiguration GetBucketMetricsConfiguration ListBucketMetricsConfigurations PutBucketMetricsConfiguration has the following special error: Error code: TooManyConfigurations Description: You are attempting to create a new configuration but have already reached the 1,000-configuration limit. HTTP Status Code: HTTP 400 Bad Request You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
</tr>
<tr>
    <td><a href="#delete_bucket_metrics_configuration"><CopyableCode code="delete_bucket_metrics_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-x-amz-expected-bucket-owner"><code>x-amz-expected-bucket-owner</code></a></td>
    <td>Deletes a metrics configuration for the Amazon CloudWatch request metrics (specified by the metrics configuration ID) from the bucket. Note that this doesn't include the daily storage metrics. Directory buckets - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https:​//s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions To use this operation, you must have permissions to perform the s3:PutMetricsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. General purpose bucket permissions - The s3:PutMetricsConfiguration permission is required in a policy. For more information about general purpose buckets permissions, see Using Bucket Policies and User Policies in the Amazon S3 User Guide. Directory bucket permissions - To grant access to this API operation, you must have the s3express:PutMetricsConfiguration permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com. For information about CloudWatch request metrics for Amazon S3, see Monitoring Metrics with Amazon CloudWatch. The following operations are related to DeleteBucketMetricsConfiguration: GetBucketMetricsConfiguration PutBucketMetricsConfiguration ListBucketMetricsConfigurations Monitoring Metrics with Amazon CloudWatch You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.</td>
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
    <td>The name of the bucket containing the metrics configuration to delete. Directory buckets - When you use this operation with a directory bucket, you must use path-style requests in the format https:​//s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. Directory bucket names must be unique in the chosen Zone (Availability Zone or Local Zone). Bucket names must also follow the format bucket-base-name--zone-id--x-s3 (for example, DOC-EXAMPLE-BUCKET--usw2-az1--x-s3). For information about bucket naming restrictions, see Directory bucket naming rules in the Amazon S3 User Guide</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID used to identify the metrics configuration. The ID has a 64 character limit and can only contain letters, numbers, periods, dashes, and underscores.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-continuation-token">
    <td><CopyableCode code="continuation-token" /></td>
    <td><code>string</code></td>
    <td>The marker that is used to continue a metrics configuration listing that has been truncated. Use the NextContinuationToken from a previously truncated list response to continue the listing. The continuation token is an opaque value that Amazon S3 understands.</td>
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
    defaultValue="get_bucket_metrics_configuration"
    values={[
        { label: 'get_bucket_metrics_configuration', value: 'get_bucket_metrics_configuration' },
        { label: 'list_bucket_metrics_configurations', value: 'list_bucket_metrics_configurations' }
    ]}
>
<TabItem value="get_bucket_metrics_configuration">

Gets a metrics configuration (specified by the metrics configuration ID) from the bucket. Note that this doesn't include the daily storage metrics. Directory buckets - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions To use this operation, you must have permissions to perform the s3:GetMetricsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. General purpose bucket permissions - The s3:GetMetricsConfiguration permission is required in a policy. For more information about general purpose buckets permissions, see Using Bucket Policies and User Policies in the Amazon S3 User Guide. Directory bucket permissions - To grant access to this API operation, you must have the s3express:GetMetricsConfiguration permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com. For information about CloudWatch request metrics for Amazon S3, see Monitoring Metrics with Amazon CloudWatch. The following operations are related to GetBucketMetricsConfiguration: PutBucketMetricsConfiguration DeleteBucketMetricsConfiguration ListBucketMetricsConfigurations Monitoring Metrics with Amazon CloudWatch You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
SELECT
Filter,
Id
FROM aws.s3.bucket_metrics_configurations
WHERE bucket = '{{ bucket }}' -- required
AND id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
;
```
</TabItem>
<TabItem value="list_bucket_metrics_configurations">

Lists the metrics configurations for the bucket. The metrics configurations are only for the request metrics of the bucket and do not provide information on daily storage metrics. You can have up to 1,000 configurations per bucket. Directory buckets - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. This action supports list pagination and does not return more than 100 configurations at a time. Always check the IsTruncated element in the response. If there are no more configurations to list, IsTruncated is set to false. If there are more configurations to list, IsTruncated is set to true, and there is a value in NextContinuationToken. You use the NextContinuationToken value to continue the pagination of the list by passing the value in continuation-token in the request to GET the next page. Permissions To use this operation, you must have permissions to perform the s3:GetMetricsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. General purpose bucket permissions - The s3:GetMetricsConfiguration permission is required in a policy. For more information about general purpose buckets permissions, see Using Bucket Policies and User Policies in the Amazon S3 User Guide. Directory bucket permissions - To grant access to this API operation, you must have the s3express:GetMetricsConfiguration permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com. For more information about metrics configurations and CloudWatch request metrics, see Monitoring Metrics with Amazon CloudWatch. The following operations are related to ListBucketMetricsConfigurations: PutBucketMetricsConfiguration GetBucketMetricsConfiguration DeleteBucketMetricsConfiguration You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
SELECT
Filter,
Id
FROM aws.s3.bucket_metrics_configurations
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
    defaultValue="put_bucket_metrics_configuration"
    values={[
        { label: 'put_bucket_metrics_configuration', value: 'put_bucket_metrics_configuration' }
    ]}
>
<TabItem value="put_bucket_metrics_configuration">

Sets a metrics configuration (specified by the metrics configuration ID) for the bucket. You can have up to 1,000 metrics configurations per bucket. If you're updating an existing metrics configuration, note that this is a full replacement of the existing metrics configuration. If you don't include the elements you want to keep, they are erased. Directory buckets - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions To use this operation, you must have permissions to perform the s3:PutMetricsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. General purpose bucket permissions - The s3:PutMetricsConfiguration permission is required in a policy. For more information about general purpose buckets permissions, see Using Bucket Policies and User Policies in the Amazon S3 User Guide. Directory bucket permissions - To grant access to this API operation, you must have the s3express:PutMetricsConfiguration permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com. For information about CloudWatch request metrics for Amazon S3, see Monitoring Metrics with Amazon CloudWatch. The following operations are related to PutBucketMetricsConfiguration: DeleteBucketMetricsConfiguration GetBucketMetricsConfiguration ListBucketMetricsConfigurations PutBucketMetricsConfiguration has the following special error: Error code: TooManyConfigurations Description: You are attempting to create a new configuration but have already reached the 1,000-configuration limit. HTTP Status Code: HTTP 400 Bad Request You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
REPLACE aws.s3.bucket_metrics_configurations
SET 
MetricsConfiguration = '{{ MetricsConfiguration }}'
WHERE 
bucket = '{{ bucket }}' --required
AND id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND MetricsConfiguration = '{{ MetricsConfiguration }}' --required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner}}';
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_bucket_metrics_configuration"
    values={[
        { label: 'delete_bucket_metrics_configuration', value: 'delete_bucket_metrics_configuration' }
    ]}
>
<TabItem value="delete_bucket_metrics_configuration">

Deletes a metrics configuration for the Amazon CloudWatch request metrics (specified by the metrics configuration ID) from the bucket. Note that this doesn't include the daily storage metrics. Directory buckets - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format https://s3express-control.region-code.amazonaws.com/bucket-name . Virtual-hosted-style requests aren't supported. For more information about endpoints in Availability Zones, see Regional and Zonal endpoints for directory buckets in Availability Zones in the Amazon S3 User Guide. For more information about endpoints in Local Zones, see Concepts for directory buckets in Local Zones in the Amazon S3 User Guide. Permissions To use this operation, you must have permissions to perform the s3:PutMetricsConfiguration action. The bucket owner has this permission by default. The bucket owner can grant this permission to others. For more information about permissions, see Permissions Related to Bucket Subresource Operations and Managing Access Permissions to Your Amazon S3 Resources. General purpose bucket permissions - The s3:PutMetricsConfiguration permission is required in a policy. For more information about general purpose buckets permissions, see Using Bucket Policies and User Policies in the Amazon S3 User Guide. Directory bucket permissions - To grant access to this API operation, you must have the s3express:PutMetricsConfiguration permission in an IAM identity-based policy instead of a bucket policy. Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone in the Amazon S3 User Guide. HTTP Host header syntax Directory buckets - The HTTP Host header syntax is s3express-control.region-code.amazonaws.com. For information about CloudWatch request metrics for Amazon S3, see Monitoring Metrics with Amazon CloudWatch. The following operations are related to DeleteBucketMetricsConfiguration: GetBucketMetricsConfiguration PutBucketMetricsConfiguration ListBucketMetricsConfigurations Monitoring Metrics with Amazon CloudWatch You must URL encode any signed header values that contain spaces. For example, if your header value is my file.txt, containing two spaces after my, you must URL encode this value to my%20%20file.txt.

```sql
DELETE FROM aws.s3.bucket_metrics_configurations
WHERE bucket = '{{ bucket }}' --required
AND id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND `x-amz-expected-bucket-owner` = '{{ x-amz-expected-bucket-owner }}'
;
```
</TabItem>
</Tabs>
