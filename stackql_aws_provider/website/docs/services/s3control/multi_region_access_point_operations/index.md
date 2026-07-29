--- 
title: multi_region_access_point_operations
hide_title: false
hide_table_of_contents: false
keywords:
  - multi_region_access_point_operations
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

Creates, updates, deletes, gets or lists a <code>multi_region_access_point_operations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="multi_region_access_point_operations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.s3control.multi_region_access_point_operations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_multi_region_access_point_operation"
    values={[
        { label: 'describe_multi_region_access_point_operation', value: 'describe_multi_region_access_point_operation' }
    ]}
>
<TabItem value="describe_multi_region_access_point_operation">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string</code></td>
    <td>The time that the request was sent to the service.</td>
</tr>
<tr>
    <td><CopyableCode code="operation" /></td>
    <td><code>string</code></td>
    <td>The specific operation for the asynchronous request.</td>
</tr>
<tr>
    <td><CopyableCode code="request_parameters" /></td>
    <td><code>string</code></td>
    <td>The parameters associated with the request.</td>
</tr>
<tr>
    <td><CopyableCode code="request_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the request.</td>
</tr>
<tr>
    <td><CopyableCode code="request_token_arn" /></td>
    <td><code>string</code></td>
    <td>The request token associated with the request.</td>
</tr>
<tr>
    <td><CopyableCode code="response_details" /></td>
    <td><code>string</code></td>
    <td>The details of the response.</td>
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
    <td><a href="#describe_multi_region_access_point_operation"><CopyableCode code="describe_multi_region_access_point_operation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-x-amz-account-id"><code>x-amz-account-id</code></a>, <a href="#parameter-request_token"><code>request_token</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation is not supported by directory buckets. Retrieves the status of an asynchronous request to manage a Multi-Region Access Point. For more information about managing Multi-Region Access Points and how asynchronous requests work, see Using Multi-Region Access Points in the Amazon S3 User Guide. The following actions are related to GetMultiRegionAccessPoint: CreateMultiRegionAccessPoint DeleteMultiRegionAccessPoint GetMultiRegionAccessPoint ListMultiRegionAccessPoints</td>
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
<tr id="parameter-request_token">
    <td><CopyableCode code="request_token" /></td>
    <td><code>string</code></td>
    <td>The request token associated with the request you want to know about. This request token is returned as part of the response when you make an asynchronous request. You provide this token to query about the status of the asynchronous action.</td>
</tr>
<tr id="parameter-x-amz-account-id">
    <td><CopyableCode code="x-amz-account-id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID for the owner of the Multi-Region Access Point.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_multi_region_access_point_operation"
    values={[
        { label: 'describe_multi_region_access_point_operation', value: 'describe_multi_region_access_point_operation' }
    ]}
>
<TabItem value="describe_multi_region_access_point_operation">

This operation is not supported by directory buckets. Retrieves the status of an asynchronous request to manage a Multi-Region Access Point. For more information about managing Multi-Region Access Points and how asynchronous requests work, see Using Multi-Region Access Points in the Amazon S3 User Guide. The following actions are related to GetMultiRegionAccessPoint: CreateMultiRegionAccessPoint DeleteMultiRegionAccessPoint GetMultiRegionAccessPoint ListMultiRegionAccessPoints

```sql
SELECT
creation_time,
operation,
request_parameters,
request_status,
request_token_arn,
response_details
FROM aws.s3control.multi_region_access_point_operations
WHERE `x-amz-account-id` = '{{ x-amz-account-id }}' -- required
AND request_token = '{{ request_token }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
