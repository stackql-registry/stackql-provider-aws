--- 
title: access_points
hide_title: false
hide_table_of_contents: false
keywords:
  - access_points
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

Creates, updates, deletes, gets or lists an <code>access_points</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_points" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3control.access_points" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_access_point"
    values={[
        { label: 'get_access_point', value: 'get_access_point' },
        { label: 'list_access_points', value: 'list_access_points' }
    ]}
>
<TabItem value="get_access_point">

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
    <td><CopyableCode code="AccessPointArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the access point.</td>
</tr>
<tr>
    <td><CopyableCode code="Alias" /></td>
    <td><code>string</code></td>
    <td>The name or alias of the access point.</td>
</tr>
<tr>
    <td><CopyableCode code="Bucket" /></td>
    <td><code>string</code></td>
    <td>The name of the bucket associated with the specified access point.</td>
</tr>
<tr>
    <td><CopyableCode code="BucketAccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID associated with the S3 bucket associated with this access point.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string</code></td>
    <td>The date and time when the specified access point was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DataSourceId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the data source of the access point.</td>
</tr>
<tr>
    <td><CopyableCode code="DataSourceType" /></td>
    <td><code>string</code></td>
    <td>The type of the data source that the access point is attached to.</td>
</tr>
<tr>
    <td><CopyableCode code="Endpoints" /></td>
    <td><code>string</code></td>
    <td>The VPC endpoint for the access point.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the specified access point.</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkOrigin" /></td>
    <td><code>string</code></td>
    <td>Indicates whether this access point allows access from the public internet. If VpcConfiguration is specified for this access point, then NetworkOrigin is VPC, and the access point doesn't allow access from the public internet. Otherwise, NetworkOrigin is Internet, and the access point allows access from the public internet, subject to the access point and bucket access policies. This will always be true for an Amazon S3 on Outposts access point</td>
</tr>
<tr>
    <td><CopyableCode code="PublicAccessBlockConfiguration" /></td>
    <td><code>string</code></td>
    <td>The PublicAccessBlock configuration that you want to apply to this Amazon S3 account. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see The Meaning of "Public" in the Amazon S3 User Guide. This data type is not supported for Amazon S3 on Outposts.</td>
</tr>
<tr>
    <td><CopyableCode code="VpcConfiguration" /></td>
    <td><code>string</code></td>
    <td>Contains the virtual private cloud (VPC) configuration for the specified access point. This element is empty if this access point is an Amazon S3 on Outposts access point that is used by other Amazon Web Services services.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_access_points">

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
    <td><CopyableCode code="AccessPointArn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the access point.</td>
</tr>
<tr>
    <td><CopyableCode code="Alias" /></td>
    <td><code>string</code></td>
    <td>The name or alias of the access point.</td>
</tr>
<tr>
    <td><CopyableCode code="Bucket" /></td>
    <td><code>string</code></td>
    <td>The name of the bucket associated with this access point.</td>
</tr>
<tr>
    <td><CopyableCode code="BucketAccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID associated with the S3 bucket associated with this access point.</td>
</tr>
<tr>
    <td><CopyableCode code="DataSourceId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the data source of the access point.</td>
</tr>
<tr>
    <td><CopyableCode code="DataSourceType" /></td>
    <td><code>string</code></td>
    <td>The type of the data source that the access point is attached to.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of this access point.</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkOrigin" /></td>
    <td><code>string</code></td>
    <td>Indicates whether this access point allows access from the public internet. If VpcConfiguration is specified for this access point, then NetworkOrigin is VPC, and the access point doesn't allow access from the public internet. Otherwise, NetworkOrigin is Internet, and the access point allows access from the public internet, subject to the access point and bucket access policies.</td>
</tr>
<tr>
    <td><CopyableCode code="VpcConfiguration" /></td>
    <td><code>string</code></td>
    <td>The virtual private cloud (VPC) configuration for this access point, if one exists. This element is empty if this access point is an Amazon S3 on Outposts access point that is used by other Amazon Web Services services.</td>
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
    <td><a href="#get_access_point"><CopyableCode code="get_access_point" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns configuration information about the specified access point. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to GetAccessPoint: CreateAccessPoint DeleteAccessPoint ListAccessPoints</td>
</tr>
<tr>
    <td><a href="#list_access_points"><CopyableCode code="list_access_points" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-bucket"><code>bucket</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-dataSourceId"><code>dataSourceId</code></a>, <a href="#parameter-dataSourceType"><code>dataSourceType</code></a></td>
    <td>This operation is not supported by directory buckets. Returns a list of the access points. You can retrieve up to 1,000 access points per call. If the call returns more than 1,000 access points (or the number specified in maxResults, whichever is less), the response will include a continuation token that you can use to list the additional access points. Returns only access points attached to S3 buckets by default. To return all access points specify DataSourceType as ALL. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to ListAccessPoints: CreateAccessPoint DeleteAccessPoint GetAccessPoint</td>
</tr>
<tr>
    <td><a href="#create_access_point"><CopyableCode code="create_access_point" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates an access point and associates it to a specified bucket. For more information, see Managing access to shared datasets with access points or Managing access to shared datasets in directory buckets with access points in the Amazon S3 User Guide. To create an access point and attach it to a volume on an Amazon FSx file system, see CreateAndAttachS3AccessPoint in the Amazon FSx API Reference. S3 on Outposts only supports VPC-style access points. For more information, see Accessing Amazon S3 on Outposts using virtual private cloud (VPC) only access points in the Amazon S3 User Guide. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to CreateAccessPoint: GetAccessPoint DeleteAccessPoint ListAccessPoints ListAccessPointsForDirectoryBuckets</td>
</tr>
<tr>
    <td><a href="#delete_access_point"><CopyableCode code="delete_access_point" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified access point. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to DeleteAccessPoint: CreateAccessPoint GetAccessPoint ListAccessPoints</td>
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
    <td>The name of the access point you want to delete. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the access point accessed in the format arn:aws:s3-outposts:<code>&lt;Region&gt;</code>:<code>&lt;account-id&gt;</code>:outpost/<code>&lt;outpost-id&gt;</code>/accesspoint/<code>&lt;my-accesspoint-name&gt;</code>. For example, to access the access point reports-ap through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/accesspoint/reports-ap. The value must be URL encoded.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-x-amz-account-id">
    <td><CopyableCode code="x-amz-account-id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID for the account that owns the specified access point.</td>
</tr>
<tr id="parameter-bucket">
    <td><CopyableCode code="bucket" /></td>
    <td><code>string</code></td>
    <td>The name of the bucket whose associated access points you want to list. For using this parameter with Amazon S3 on Outposts with the REST API, you must specify the name and the x-amz-outpost-id as well. For using this parameter with S3 on Outposts with the Amazon Web Services SDK and CLI, you must specify the ARN of the bucket accessed in the format arn:aws:s3-outposts:<code>&lt;Region&gt;</code>:<code>&lt;account-id&gt;</code>:outpost/<code>&lt;outpost-id&gt;</code>/bucket/<code>&lt;my-bucket-name&gt;</code>. For example, to access the bucket reports through Outpost my-outpost owned by account 123456789012 in Region us-west-2, use the URL encoding of arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/bucket/reports. The value must be URL encoded.</td>
</tr>
<tr id="parameter-dataSourceId">
    <td><CopyableCode code="dataSourceId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the data source of the access point.</td>
</tr>
<tr id="parameter-dataSourceType">
    <td><CopyableCode code="dataSourceType" /></td>
    <td><code>string</code></td>
    <td>The type of the data source that the access point is attached to. Returns only access points attached to S3 buckets by default. To return all access points specify DataSourceType as ALL.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of access points that you want to include in the list. If the specified bucket has more than this number of access points, then the response will include a continuation token in the NextToken field that you can use to retrieve the next page of access points.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A continuation token. If a previous call to ListAccessPoints returned a continuation token in the NextToken field, then providing that value here causes Amazon S3 to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_access_point"
    values={[
        { label: 'get_access_point', value: 'get_access_point' },
        { label: 'list_access_points', value: 'list_access_points' }
    ]}
>
<TabItem value="get_access_point">

Returns configuration information about the specified access point. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to GetAccessPoint: CreateAccessPoint DeleteAccessPoint ListAccessPoints

```sql
SELECT
AccessPointArn,
Alias,
Bucket,
BucketAccountId,
CreationDate,
DataSourceId,
DataSourceType,
Endpoints,
Name,
NetworkOrigin,
PublicAccessBlockConfiguration,
VpcConfiguration
FROM aws.s3control.access_points
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_access_points">

This operation is not supported by directory buckets. Returns a list of the access points. You can retrieve up to 1,000 access points per call. If the call returns more than 1,000 access points (or the number specified in maxResults, whichever is less), the response will include a continuation token that you can use to list the additional access points. Returns only access points attached to S3 buckets by default. To return all access points specify DataSourceType as ALL. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to ListAccessPoints: CreateAccessPoint DeleteAccessPoint GetAccessPoint

```sql
SELECT
AccessPointArn,
Alias,
Bucket,
BucketAccountId,
DataSourceId,
DataSourceType,
Name,
NetworkOrigin,
VpcConfiguration
FROM aws.s3control.access_points
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND region = '{{ region }}' -- required
AND bucket = '{{ bucket }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND dataSourceId = '{{ dataSourceId }}'
AND dataSourceType = '{{ dataSourceType }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_access_point"
    values={[
        { label: 'create_access_point', value: 'create_access_point' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_access_point">

Creates an access point and associates it to a specified bucket. For more information, see Managing access to shared datasets with access points or Managing access to shared datasets in directory buckets with access points in the Amazon S3 User Guide. To create an access point and attach it to a volume on an Amazon FSx file system, see CreateAndAttachS3AccessPoint in the Amazon FSx API Reference. S3 on Outposts only supports VPC-style access points. For more information, see Accessing Amazon S3 on Outposts using virtual private cloud (VPC) only access points in the Amazon S3 User Guide. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to CreateAccessPoint: GetAccessPoint DeleteAccessPoint ListAccessPoints ListAccessPointsForDirectoryBuckets

```sql
INSERT INTO aws.s3control.access_points (
Bucket,
VpcConfiguration,
PublicAccessBlockConfiguration,
BucketAccountId,
Scope,
Tags,
`x-amz-account-id`,
name,
region
)
SELECT 
'{{ Bucket }}',
'{{ VpcConfiguration }}',
'{{ PublicAccessBlockConfiguration }}',
'{{ BucketAccountId }}',
'{{ Scope }}',
'{{ Tags }}',
'{{ x-amz-account-id }}',
'{{ name }}',
'{{ region }}'
RETURNING
AccessPointArn,
Alias
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: access_points
  props:
    - name: x-amz-account-id
      value: "{{ x-amz-account-id }}"
      description: Required parameter for the access_points resource.
    - name: name
      value: "{{ name }}"
      description: Required parameter for the access_points resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the access_points resource.
    - name: Bucket
      value: "{{ Bucket }}"
    - name: VpcConfiguration
      description: |
        The virtual private cloud (VPC) configuration for an access point.
      value:
        VpcId: "{{ VpcId }}"
    - name: PublicAccessBlockConfiguration
      description: |
        The PublicAccessBlock configuration that you want to apply to this Amazon S3 account. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see The Meaning of "Public" in the Amazon S3 User Guide. This data type is not supported for Amazon S3 on Outposts.
      value:
        BlockPublicAcls: {{ BlockPublicAcls }}
        IgnorePublicAcls: {{ IgnorePublicAcls }}
        BlockPublicPolicy: {{ BlockPublicPolicy }}
        RestrictPublicBuckets: {{ RestrictPublicBuckets }}
    - name: BucketAccountId
      value: "{{ BucketAccountId }}"
    - name: Scope
      description: |
        You can use the access point scope to restrict access to specific prefixes, API operations, or a combination of both. For more information, see Manage the scope of your access points for directory buckets.
      value:
        Prefixes:
          - "{{ Prefixes }}"
        Permissions:
          - "{{ Permissions }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_access_point"
    values={[
        { label: 'delete_access_point', value: 'delete_access_point' }
    ]}
>
<TabItem value="delete_access_point">

Deletes the specified access point. All Amazon S3 on Outposts REST API requests for this action require an additional parameter of x-amz-outpost-id to be passed with the request. In addition, you must use an S3 on Outposts endpoint hostname prefix instead of s3-control. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the x-amz-outpost-id derived by using the access point ARN, see the Examples section. The following actions are related to DeleteAccessPoint: CreateAccessPoint GetAccessPoint ListAccessPoints

```sql
DELETE FROM aws.s3control.access_points
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
