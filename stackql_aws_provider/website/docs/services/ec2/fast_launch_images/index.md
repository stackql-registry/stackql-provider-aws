--- 
title: fast_launch_images
hide_title: false
hide_table_of_contents: false
keywords:
  - fast_launch_images
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

Creates, updates, deletes, gets or lists a <code>fast_launch_images</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fast_launch_images" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.fast_launch_images" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_fast_launch_images"
    values={[
        { label: 'describe_fast_launch_images', value: 'describe_fast_launch_images' }
    ]}
>
<TabItem value="describe_fast_launch_images">

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
    <td><CopyableCode code="ImageId" /></td>
    <td><code>string</code></td>
    <td>The image ID that identifies the Windows fast launch enabled image.</td>
</tr>
<tr>
    <td><CopyableCode code="LaunchTemplate" /></td>
    <td><code>string</code></td>
    <td>The launch template that the Windows fast launch enabled AMI uses when it launches Windows instances from pre-provisioned snapshots.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxParallelLaunches" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of instances that Amazon EC2 can launch at the same time to create pre-provisioned snapshots for Windows fast launch.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnerId" /></td>
    <td><code>string</code></td>
    <td>The owner ID for the Windows fast launch enabled AMI.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>The resource type that Amazon EC2 uses for pre-provisioning the Windows AMI. Supported values include: snapshot.</td>
</tr>
<tr>
    <td><CopyableCode code="SnapshotConfiguration" /></td>
    <td><code>string</code></td>
    <td>A group of parameters that are used for pre-provisioning the associated Windows AMI using snapshots.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of Windows fast launch for the specified Windows AMI.</td>
</tr>
<tr>
    <td><CopyableCode code="StateTransitionReason" /></td>
    <td><code>string</code></td>
    <td>The reason that Windows fast launch for the AMI changed to the current state.</td>
</tr>
<tr>
    <td><CopyableCode code="StateTransitionTime" /></td>
    <td><code>string</code></td>
    <td>The time that Windows fast launch for the AMI changed to the current state.</td>
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
    <td><a href="#describe_fast_launch_images"><CopyableCode code="describe_fast_launch_images" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ImageId"><code>ImageId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Describe details for Windows AMIs that are configured for Windows fast launch.</td>
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
    <td>Use the following filters to streamline results. resource-type - The resource type for pre-provisioning. owner-id - The owner ID for the pre-provisioning resource. state - The current state of fast launching for the Windows AMI.</td>
</tr>
<tr id="parameter-ImageId">
    <td><CopyableCode code="ImageId" /></td>
    <td><code>array</code></td>
    <td>Specify one or more Windows AMI image IDs for the request.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_fast_launch_images"
    values={[
        { label: 'describe_fast_launch_images', value: 'describe_fast_launch_images' }
    ]}
>
<TabItem value="describe_fast_launch_images">

Describe details for Windows AMIs that are configured for Windows fast launch.

```sql
SELECT
ImageId,
LaunchTemplate,
MaxParallelLaunches,
OwnerId,
ResourceType,
SnapshotConfiguration,
State,
StateTransitionReason,
StateTransitionTime
FROM aws.ec2.fast_launch_images
WHERE region = '{{ region }}' -- required
AND ImageId = '{{ ImageId }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
