--- 
title: multi_region_access_points
hide_title: false
hide_table_of_contents: false
keywords:
  - multi_region_access_points
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

Creates, updates, deletes, gets or lists a <code>multi_region_access_points</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="multi_region_access_points" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3control.multi_region_access_points" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_multi_region_access_point"
    values={[
        { label: 'get_multi_region_access_point', value: 'get_multi_region_access_point' },
        { label: 'list_multi_region_access_points', value: 'list_multi_region_access_points' }
    ]}
>
<TabItem value="get_multi_region_access_point">

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
    <td><CopyableCode code="Alias" /></td>
    <td><code>string</code></td>
    <td>The alias for the Multi-Region Access Point. For more information about the distinction between the name and the alias of an Multi-Region Access Point, see Rules for naming Amazon S3 Multi-Region Access Points.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string</code></td>
    <td>When the Multi-Region Access Point create request was received.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the Multi-Region Access Point.</td>
</tr>
<tr>
    <td><CopyableCode code="PublicAccessBlock" /></td>
    <td><code>string</code></td>
    <td>The PublicAccessBlock configuration that you want to apply to this Amazon S3 account. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see The Meaning of "Public" in the Amazon S3 User Guide. This data type is not supported for Amazon S3 on Outposts.</td>
</tr>
<tr>
    <td><CopyableCode code="Regions" /></td>
    <td><code>string</code></td>
    <td>A collection of the Regions and buckets associated with the Multi-Region Access Point.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the Multi-Region Access Point. CREATING and DELETING are temporary states that exist while the request is propagating and being completed. If a Multi-Region Access Point has a status of PARTIALLY_CREATED, you can retry creation or send a request to delete the Multi-Region Access Point. If a Multi-Region Access Point has a status of PARTIALLY_DELETED, you can retry a delete request to finish the deletion of the Multi-Region Access Point.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_multi_region_access_points">

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
    <td><CopyableCode code="Alias" /></td>
    <td><code>string</code></td>
    <td>The alias for the Multi-Region Access Point. For more information about the distinction between the name and the alias of an Multi-Region Access Point, see Rules for naming Amazon S3 Multi-Region Access Points.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string</code></td>
    <td>When the Multi-Region Access Point create request was received.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the Multi-Region Access Point.</td>
</tr>
<tr>
    <td><CopyableCode code="PublicAccessBlock" /></td>
    <td><code>string</code></td>
    <td>The PublicAccessBlock configuration that you want to apply to this Amazon S3 account. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see The Meaning of "Public" in the Amazon S3 User Guide. This data type is not supported for Amazon S3 on Outposts.</td>
</tr>
<tr>
    <td><CopyableCode code="Regions" /></td>
    <td><code>string</code></td>
    <td>A collection of the Regions and buckets associated with the Multi-Region Access Point.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the Multi-Region Access Point. CREATING and DELETING are temporary states that exist while the request is propagating and being completed. If a Multi-Region Access Point has a status of PARTIALLY_CREATED, you can retry creation or send a request to delete the Multi-Region Access Point. If a Multi-Region Access Point has a status of PARTIALLY_DELETED, you can retry a delete request to finish the deletion of the Multi-Region Access Point.</td>
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
    <td><a href="#get_multi_region_access_point"><CopyableCode code="get_multi_region_access_point" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation is not supported by directory buckets. Returns configuration information about the specified Multi-Region Access Point. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point restrictions and limitations in the Amazon S3 User Guide. The following actions are related to GetMultiRegionAccessPoint: CreateMultiRegionAccessPoint DeleteMultiRegionAccessPoint DescribeMultiRegionAccessPointOperation ListMultiRegionAccessPoints</td>
</tr>
<tr>
    <td><a href="#list_multi_region_access_points"><CopyableCode code="list_multi_region_access_points" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>This operation is not supported by directory buckets. Returns a list of the Multi-Region Access Points currently associated with the specified Amazon Web Services account. Each call can return up to 100 Multi-Region Access Points, the maximum number of Multi-Region Access Points that can be associated with a single account. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point restrictions and limitations in the Amazon S3 User Guide. The following actions are related to ListMultiRegionAccessPoint: CreateMultiRegionAccessPoint DeleteMultiRegionAccessPoint DescribeMultiRegionAccessPointOperation GetMultiRegionAccessPoint</td>
</tr>
<tr>
    <td><a href="#create_multi_region_access_point"><CopyableCode code="create_multi_region_access_point" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-Details"><code>Details</code></a></td>
    <td></td>
    <td>This operation is not supported by directory buckets. Creates a Multi-Region Access Point and associates it with the specified buckets. For more information about creating Multi-Region Access Points, see Creating Multi-Region Access Points in the Amazon S3 User Guide. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point restrictions and limitations in the Amazon S3 User Guide. This request is asynchronous, meaning that you might receive a response before the command has completed. When this request provides a response, it provides a token that you can use to monitor the status of the request with DescribeMultiRegionAccessPointOperation. The following actions are related to CreateMultiRegionAccessPoint: DeleteMultiRegionAccessPoint DescribeMultiRegionAccessPointOperation GetMultiRegionAccessPoint ListMultiRegionAccessPoints</td>
</tr>
<tr>
    <td><a href="#delete_multi_region_access_point"><CopyableCode code="delete_multi_region_access_point" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation is not supported by directory buckets. Deletes a Multi-Region Access Point. This action does not delete the buckets associated with the Multi-Region Access Point, only the Multi-Region Access Point itself. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point restrictions and limitations in the Amazon S3 User Guide. This request is asynchronous, meaning that you might receive a response before the command has completed. When this request provides a response, it provides a token that you can use to monitor the status of the request with DescribeMultiRegionAccessPointOperation. The following actions are related to DeleteMultiRegionAccessPoint: CreateMultiRegionAccessPoint DescribeMultiRegionAccessPointOperation GetMultiRegionAccessPoint ListMultiRegionAccessPoints</td>
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
    <td>The name of the Multi-Region Access Point whose configuration information you want to receive. The name of the Multi-Region Access Point is different from the alias. For more information about the distinction between the name and the alias of an Multi-Region Access Point, see Rules for naming Amazon S3 Multi-Region Access Points in the Amazon S3 User Guide.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-x-amz-account-id">
    <td><CopyableCode code="x-amz-account-id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID for the owner of the Multi-Region Access Point.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Not currently used. Do not use this parameter.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Not currently used. Do not use this parameter.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_multi_region_access_point"
    values={[
        { label: 'get_multi_region_access_point', value: 'get_multi_region_access_point' },
        { label: 'list_multi_region_access_points', value: 'list_multi_region_access_points' }
    ]}
>
<TabItem value="get_multi_region_access_point">

This operation is not supported by directory buckets. Returns configuration information about the specified Multi-Region Access Point. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point restrictions and limitations in the Amazon S3 User Guide. The following actions are related to GetMultiRegionAccessPoint: CreateMultiRegionAccessPoint DeleteMultiRegionAccessPoint DescribeMultiRegionAccessPointOperation ListMultiRegionAccessPoints

```sql
SELECT
Alias,
CreatedAt,
Name,
PublicAccessBlock,
Regions,
Status
FROM aws.s3control.multi_region_access_points
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_multi_region_access_points">

This operation is not supported by directory buckets. Returns a list of the Multi-Region Access Points currently associated with the specified Amazon Web Services account. Each call can return up to 100 Multi-Region Access Points, the maximum number of Multi-Region Access Points that can be associated with a single account. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point restrictions and limitations in the Amazon S3 User Guide. The following actions are related to ListMultiRegionAccessPoint: CreateMultiRegionAccessPoint DeleteMultiRegionAccessPoint DescribeMultiRegionAccessPointOperation GetMultiRegionAccessPoint

```sql
SELECT
Alias,
CreatedAt,
Name,
PublicAccessBlock,
Regions,
Status
FROM aws.s3control.multi_region_access_points
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_multi_region_access_point"
    values={[
        { label: 'create_multi_region_access_point', value: 'create_multi_region_access_point' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_multi_region_access_point">

This operation is not supported by directory buckets. Creates a Multi-Region Access Point and associates it with the specified buckets. For more information about creating Multi-Region Access Points, see Creating Multi-Region Access Points in the Amazon S3 User Guide. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point restrictions and limitations in the Amazon S3 User Guide. This request is asynchronous, meaning that you might receive a response before the command has completed. When this request provides a response, it provides a token that you can use to monitor the status of the request with DescribeMultiRegionAccessPointOperation. The following actions are related to CreateMultiRegionAccessPoint: DeleteMultiRegionAccessPoint DescribeMultiRegionAccessPointOperation GetMultiRegionAccessPoint ListMultiRegionAccessPoints

```sql
INSERT INTO aws.s3control.multi_region_access_points (
ClientToken,
Details,
`x-amz-account-id`,
region
)
SELECT 
'{{ ClientToken }}' /* required */,
'{{ Details }}' /* required */,
'{{ x-amz-account-id }}',
'{{ region }}'
RETURNING
RequestTokenARN
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: multi_region_access_points
  props:
    - name: x-amz-account-id
      value: "{{ x-amz-account-id }}"
      description: Required parameter for the multi_region_access_points resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the multi_region_access_points resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Details
      description: |
        A container for the information associated with a CreateMultiRegionAccessPoint request.
      value:
        Name: "{{ Name }}"
        PublicAccessBlock:
          BlockPublicAcls: {{ BlockPublicAcls }}
          IgnorePublicAcls: {{ IgnorePublicAcls }}
          BlockPublicPolicy: {{ BlockPublicPolicy }}
          RestrictPublicBuckets: {{ RestrictPublicBuckets }}
        Regions:
          - Bucket: "{{ Bucket }}"
            BucketAccountId: "{{ BucketAccountId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_multi_region_access_point"
    values={[
        { label: 'delete_multi_region_access_point', value: 'delete_multi_region_access_point' }
    ]}
>
<TabItem value="delete_multi_region_access_point">

This operation is not supported by directory buckets. Deletes a Multi-Region Access Point. This action does not delete the buckets associated with the Multi-Region Access Point, only the Multi-Region Access Point itself. This action will always be routed to the US West (Oregon) Region. For more information about the restrictions around working with Multi-Region Access Points, see Multi-Region Access Point restrictions and limitations in the Amazon S3 User Guide. This request is asynchronous, meaning that you might receive a response before the command has completed. When this request provides a response, it provides a token that you can use to monitor the status of the request with DescribeMultiRegionAccessPointOperation. The following actions are related to DeleteMultiRegionAccessPoint: CreateMultiRegionAccessPoint DescribeMultiRegionAccessPointOperation GetMultiRegionAccessPoint ListMultiRegionAccessPoints

```sql
DELETE FROM aws.s3control.multi_region_access_points
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
