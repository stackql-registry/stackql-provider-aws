--- 
title: resource_scans
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_scans
  - cloudformation
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

Creates, updates, deletes, gets or lists a <code>resource_scans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_scans" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudformation.resource_scans" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_resource_scan"
    values={[
        { label: 'describe_resource_scan', value: 'describe_resource_scan' },
        { label: 'list_resource_scans', value: 'list_resource_scans' }
    ]}
>
<TabItem value="describe_resource_scan">

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
    <td><CopyableCode code="Types" /></td>
    <td><code>string</code></td>
    <td>An array of strings where each string represents an Amazon Web Services resource type you want to scan. Each string defines the resource type using the format AWS::ServiceName::ResourceType, for example, AWS::DynamoDB::Table. For the full list of supported resource types, see the Resource type support table in the CloudFormation User Guide. To scan all resource types within a service, you can use a wildcard, represented by an asterisk (*). You can place an asterisk at only the end of the string, for example, AWS::S3::*.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_resource_scans">

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
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string</code></td>
    <td>The time that the resource scan was finished.</td>
</tr>
<tr>
    <td><CopyableCode code="PercentageCompleted" /></td>
    <td><code>number</code></td>
    <td>The percentage of the resource scan that has been completed.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceScanId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource scan.</td>
</tr>
<tr>
    <td><CopyableCode code="ScanType" /></td>
    <td><code>string</code></td>
    <td>The scan type that has been completed.</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string</code></td>
    <td>The time that the resource scan was started.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Status of the resource scan. IN_PROGRESS The resource scan is still in progress. COMPLETE The resource scan is complete. EXPIRED The resource scan has expired. FAILED The resource scan has failed.</td>
</tr>
<tr>
    <td><CopyableCode code="StatusReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the resource scan status, providing more information if a failure happened.</td>
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
    <td><a href="#describe_resource_scan"><CopyableCode code="describe_resource_scan" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ResourceScanId"><code>ResourceScanId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes details of a resource scan.</td>
</tr>
<tr>
    <td><a href="#list_resource_scans"><CopyableCode code="list_resource_scans" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-ScanTypeFilter"><code>ScanTypeFilter</code></a></td>
    <td>List the resource scans from newest to oldest. By default it will return up to 10 resource scans.</td>
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
<tr id="parameter-ResourceScanId">
    <td><CopyableCode code="ResourceScanId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the resource scan.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>If the number of available results exceeds this maximum, the response includes a NextToken value that you can use for the NextToken parameter to get the next set of results. The default value is 10. The maximum value is 100.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of items to return. (You received this token from a previous call.)</td>
</tr>
<tr id="parameter-ScanTypeFilter">
    <td><CopyableCode code="ScanTypeFilter" /></td>
    <td><code>string</code></td>
    <td>The scan type that you want to get summary information about. The default is FULL.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_resource_scan"
    values={[
        { label: 'describe_resource_scan', value: 'describe_resource_scan' },
        { label: 'list_resource_scans', value: 'list_resource_scans' }
    ]}
>
<TabItem value="describe_resource_scan">

Describes details of a resource scan.

```sql
SELECT
Types
FROM aws.cloudformation.resource_scans
WHERE ResourceScanId = '{{ ResourceScanId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_resource_scans">

List the resource scans from newest to oldest. By default it will return up to 10 resource scans.

```sql
SELECT
EndTime,
PercentageCompleted,
ResourceScanId,
ScanType,
StartTime,
Status,
StatusReason
FROM aws.cloudformation.resource_scans
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND ScanTypeFilter = '{{ ScanTypeFilter }}'
;
```
</TabItem>
</Tabs>
