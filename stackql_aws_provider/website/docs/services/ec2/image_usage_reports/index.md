--- 
title: image_usage_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - image_usage_reports
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

Creates, updates, deletes, gets or lists an <code>image_usage_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="image_usage_reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.image_usage_reports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_image_usage_reports"
    values={[
        { label: 'describe_image_usage_reports', value: 'describe_image_usage_reports' }
    ]}
>
<TabItem value="describe_image_usage_reports">

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
    <td><CopyableCode code="AccountIds" /></td>
    <td><code>string</code></td>
    <td>The IDs of the Amazon Web Services accounts that were specified when the report was created.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string</code></td>
    <td>The date and time when the report was created.</td>
</tr>
<tr>
    <td><CopyableCode code="ExpirationTime" /></td>
    <td><code>string</code></td>
    <td>The date and time when Amazon EC2 will delete the report (30 days after the report was created).</td>
</tr>
<tr>
    <td><CopyableCode code="ImageId" /></td>
    <td><code>string</code></td>
    <td>The ID of the image that was specified when the report was created.</td>
</tr>
<tr>
    <td><CopyableCode code="ReportId" /></td>
    <td><code>string</code></td>
    <td>The ID of the report.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceTypes" /></td>
    <td><code>string</code></td>
    <td>The resource types that were specified when the report was created.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the report. Possible values: available - The report is available to view. pending - The report is being created and not available to view. error - The report could not be created.</td>
</tr>
<tr>
    <td><CopyableCode code="StateReason" /></td>
    <td><code>string</code></td>
    <td>Provides additional details when the report is in an error state.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the report.</td>
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
    <td><a href="#describe_image_usage_reports"><CopyableCode code="describe_image_usage_reports" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ImageId"><code>ImageId</code></a>, <a href="#parameter-ReportId"><code>ReportId</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Describes the configuration and status of image usage reports, filtered by report IDs or image IDs. For more information, see View your AMI usage in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#create_image_usage_report"><CopyableCode code="create_image_usage_report" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ImageId"><code>ImageId</code></a>, <a href="#parameter-ResourceType"><code>ResourceType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-AccountId"><code>AccountId</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a></td>
    <td>Creates a report that shows how your image is used across other Amazon Web Services accounts. The report provides visibility into which accounts are using the specified image, and how many resources (EC2 instances or launch templates) are referencing it. For more information, see View your AMI usage in the Amazon EC2 User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_image_usage_report"><CopyableCode code="delete_image_usage_report" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ReportId"><code>ReportId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified image usage report. For more information, see View your AMI usage in the Amazon EC2 User Guide.</td>
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
<tr id="parameter-ImageId">
    <td><CopyableCode code="ImageId" /></td>
    <td><code>string</code></td>
    <td>The ID of the image to report on.</td>
</tr>
<tr id="parameter-ReportId">
    <td><CopyableCode code="ReportId" /></td>
    <td><code>string</code></td>
    <td>The ID of the report to delete.</td>
</tr>
<tr id="parameter-ResourceType">
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>array</code></td>
    <td>The resource types to include in the report.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AccountId">
    <td><CopyableCode code="AccountId" /></td>
    <td><code>array</code></td>
    <td>The Amazon Web Services account IDs to include in the report. To include all accounts, omit this parameter.</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>A unique, case-sensitive identifier that you provide to ensure idempotency of the request.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. creation-time - The time when the report was created, in the ISO 8601 format in the UTC time zone (YYYY-MM-DDThh:mm:ss.sssZ), for example, 2025-11-29T11:04:43.305Z. You can use a wildcard (*), for example, 2025-11-29T*, which matches an entire day. state - The state of the report (available | pending | error). tag:<code>&lt;key&gt;</code> - The key/value combination of a tag assigned to the resource. Use the tag key in the filter name and the tag value as the filter value. For example, to find all resources that have a tag with the key Owner and the value TeamA, specify tag:Owner for the filter name and TeamA for the filter value. tag-key - The key of a tag assigned to the resource. Use this filter to find all resources assigned a tag with a specific key, regardless of the tag value.</td>
</tr>
<tr id="parameter-ImageId">
    <td><CopyableCode code="ImageId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the images for filtering the reports. If specified, only reports containing these images are returned.</td>
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
    <td>The IDs of the image usage reports.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the report on creation. The ResourceType must be set to image-usage-report; any other value will cause the report creation to fail. To tag a report after it has been created, see CreateTags.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_image_usage_reports"
    values={[
        { label: 'describe_image_usage_reports', value: 'describe_image_usage_reports' }
    ]}
>
<TabItem value="describe_image_usage_reports">

Describes the configuration and status of image usage reports, filtered by report IDs or image IDs. For more information, see View your AMI usage in the Amazon EC2 User Guide.

```sql
SELECT
AccountIds,
CreationTime,
ExpirationTime,
ImageId,
ReportId,
ResourceTypes,
State,
StateReason,
Tags
FROM aws.ec2.image_usage_reports
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


## `INSERT` examples

<Tabs
    defaultValue="create_image_usage_report"
    values={[
        { label: 'create_image_usage_report', value: 'create_image_usage_report' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_image_usage_report">

Creates a report that shows how your image is used across other Amazon Web Services accounts. The report provides visibility into which accounts are using the specified image, and how many resources (EC2 instances or launch templates) are referencing it. For more information, see View your AMI usage in the Amazon EC2 User Guide.

```sql
INSERT INTO aws.ec2.image_usage_reports (
ImageId,
ResourceType,
region,
DryRun,
AccountId,
ClientToken,
TagSpecification
)
SELECT 
'{{ ImageId }}',
'{{ ResourceType }}',
'{{ region }}',
'{{ DryRun }}',
'{{ AccountId }}',
'{{ ClientToken }}',
'{{ TagSpecification }}'
RETURNING
ReportId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: image_usage_reports
  props:
    - name: ImageId
      value: "{{ ImageId }}"
      description: Required parameter for the image_usage_reports resource.
    - name: ResourceType
      value: "{{ ResourceType }}"
      description: Required parameter for the image_usage_reports resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the image_usage_reports resource.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: AccountId
      value: "{{ AccountId }}"
      description: The Amazon Web Services account IDs to include in the report. To include all accounts, omit this parameter.
      description: The Amazon Web Services account IDs to include in the report. To include all accounts, omit this parameter.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: A unique, case-sensitive identifier that you provide to ensure idempotency of the request.
      description: A unique, case-sensitive identifier that you provide to ensure idempotency of the request.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the report on creation. The ResourceType must be set to image-usage-report; any other value will cause the report creation to fail. To tag a report after it has been created, see CreateTags.
      description: The tags to apply to the report on creation. The ResourceType must be set to image-usage-report; any other value will cause the report creation to fail. To tag a report after it has been created, see CreateTags.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_image_usage_report"
    values={[
        { label: 'delete_image_usage_report', value: 'delete_image_usage_report' }
    ]}
>
<TabItem value="delete_image_usage_report">

Deletes the specified image usage report. For more information, see View your AMI usage in the Amazon EC2 User Guide.

```sql
DELETE FROM aws.ec2.image_usage_reports
WHERE ReportId = '{{ ReportId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
