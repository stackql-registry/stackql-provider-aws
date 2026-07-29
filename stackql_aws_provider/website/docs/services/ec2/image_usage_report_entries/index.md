--- 
title: image_usage_report_entries
hide_title: false
hide_table_of_contents: false
keywords:
  - image_usage_report_entries
  - ec2
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

Creates, updates, deletes, gets or lists an <code>image_usage_report_entries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="image_usage_report_entries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.image_usage_report_entries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_image_usage_report_entries"
    values={[
        { label: 'describe_image_usage_report_entries', value: 'describe_image_usage_report_entries' }
    ]}
>
<TabItem value="describe_image_usage_report_entries">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the account that uses the image.</td>
</tr>
<tr>
    <td><CopyableCode code="image_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the image.</td>
</tr>
<tr>
    <td><CopyableCode code="report_creation_time" /></td>
    <td><code>string</code></td>
    <td>The date and time the report creation was initiated.</td>
</tr>
<tr>
    <td><CopyableCode code="report_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the report.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of resource (ec2:Instance or ec2:LaunchTemplate).</td>
</tr>
<tr>
    <td><CopyableCode code="usage_count" /></td>
    <td><code>integer</code></td>
    <td>The number of times resources of this type reference this image in the account.</td>
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
    <td><a href="#describe_image_usage_report_entries"><CopyableCode code="describe_image_usage_report_entries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ImageId"><code>ImageId</code></a>, <a href="#parameter-ReportId"><code>ReportId</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Describes the entries in image usage reports, showing how your images are used across other Amazon Web Services accounts. For more information, see View your AMI usage in the Amazon EC2 User Guide.</td>
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
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. account-id - A 12-digit Amazon Web Services account ID. creation-time - The time when the report was created, in the ISO 8601 format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), for example, 2025-11-29T11:04:43.305Z. You can use a wildcard (*), for example, 2025-11-29T*, which matches an entire day. resource-type - The resource type (ec2:Instance | ec2:LaunchTemplate).</td>
</tr>
<tr id="parameter-ImageId">
    <td><CopyableCode code="ImageId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the images for filtering the report entries. If specified, only report entries containing these images are returned.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
<tr id="parameter-ReportId">
    <td><CopyableCode code="ReportId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the usage reports.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_image_usage_report_entries"
    values={[
        { label: 'describe_image_usage_report_entries', value: 'describe_image_usage_report_entries' }
    ]}
>
<TabItem value="describe_image_usage_report_entries">

Describes the entries in image usage reports, showing how your images are used across other Amazon Web Services accounts. For more information, see View your AMI usage in the Amazon EC2 User Guide.

```sql
SELECT
account_id,
image_id,
report_creation_time,
report_id,
resource_type,
usage_count
FROM aws.ec2.image_usage_report_entries
WHERE region = '{{ region }}' -- required
AND ImageId = '{{ ImageId }}'
AND ReportId = '{{ ReportId }}'
AND NextToken = '{{ NextToken }}'
AND Filter = '{{ Filter }}'
AND DryRun = '{{ DryRun }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>
