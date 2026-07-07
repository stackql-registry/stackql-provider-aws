--- 
title: import_image_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - import_image_tasks
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

Creates, updates, deletes, gets or lists an <code>import_image_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="import_image_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.import_image_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_import_image_tasks"
    values={[
        { label: 'describe_import_image_tasks', value: 'describe_import_image_tasks' }
    ]}
>
<TabItem value="describe_import_image_tasks">

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
    <td><CopyableCode code="Architecture" /></td>
    <td><code>string</code></td>
    <td>The architecture of the virtual machine. Valid values: i386 | x86_64 | arm64</td>
</tr>
<tr>
    <td><CopyableCode code="BootMode" /></td>
    <td><code>string</code></td>
    <td>The boot mode of the virtual machine.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the import task.</td>
</tr>
<tr>
    <td><CopyableCode code="Encrypted" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the image is encrypted.</td>
</tr>
<tr>
    <td><CopyableCode code="Hypervisor" /></td>
    <td><code>string</code></td>
    <td>The target hypervisor for the import task. Valid values: xen</td>
</tr>
<tr>
    <td><CopyableCode code="ImageId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Machine Image (AMI) of the imported virtual machine.</td>
</tr>
<tr>
    <td><CopyableCode code="ImportTaskId" /></td>
    <td><code>string</code></td>
    <td>The ID of the import image task.</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The identifier for the KMS key that was used to create the encrypted image.</td>
</tr>
<tr>
    <td><CopyableCode code="LicenseSpecifications" /></td>
    <td><code>string</code></td>
    <td>The ARNs of the license configurations that are associated with the import image task.</td>
</tr>
<tr>
    <td><CopyableCode code="LicenseType" /></td>
    <td><code>string</code></td>
    <td>The license type of the virtual machine.</td>
</tr>
<tr>
    <td><CopyableCode code="Platform" /></td>
    <td><code>string</code></td>
    <td>The description string for the import image task.</td>
</tr>
<tr>
    <td><CopyableCode code="Progress" /></td>
    <td><code>string</code></td>
    <td>The percentage of progress of the import image task.</td>
</tr>
<tr>
    <td><CopyableCode code="SnapshotDetails" /></td>
    <td><code>string</code></td>
    <td>Information about the snapshots.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>A brief status for the import image task.</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>A descriptive status message for the import image task.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags for the import image task.</td>
</tr>
<tr>
    <td><CopyableCode code="UsageOperation" /></td>
    <td><code>string</code></td>
    <td>The usage operation value.</td>
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
    <td><a href="#describe_import_image_tasks"><CopyableCode code="describe_import_image_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-ImportTaskId"><code>ImportTaskId</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Displays details about an import virtual machine or import snapshot tasks that are already created.</td>
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
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>Filter tasks using the task-state filter and one of the following values: active, completed, deleting, or deleted.</td>
</tr>
<tr id="parameter-ImportTaskId">
    <td><CopyableCode code="ImportTaskId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the import image tasks.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_import_image_tasks"
    values={[
        { label: 'describe_import_image_tasks', value: 'describe_import_image_tasks' }
    ]}
>
<TabItem value="describe_import_image_tasks">

Displays details about an import virtual machine or import snapshot tasks that are already created.

```sql
SELECT
Architecture,
BootMode,
Description,
Encrypted,
Hypervisor,
ImageId,
ImportTaskId,
KmsKeyId,
LicenseSpecifications,
LicenseType,
Platform,
Progress,
SnapshotDetails,
Status,
StatusMessage,
Tags,
UsageOperation
FROM aws.ec2.import_image_tasks
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND Filters = '{{ Filters }}'
AND ImportTaskId = '{{ ImportTaskId }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
