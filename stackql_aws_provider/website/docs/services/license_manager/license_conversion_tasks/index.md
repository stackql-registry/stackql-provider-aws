--- 
title: license_conversion_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - license_conversion_tasks
  - license_manager
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

Creates, updates, deletes, gets or lists a <code>license_conversion_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="license_conversion_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.license_manager.license_conversion_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_license_conversion_task"
    values={[
        { label: 'get_license_conversion_task', value: 'get_license_conversion_task' },
        { label: 'list_license_conversion_tasks', value: 'list_license_conversion_tasks' }
    ]}
>
<TabItem value="get_license_conversion_task">

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
    <td><CopyableCode code="DestinationLicenseContext" /></td>
    <td><code>object</code></td>
    <td>Information about the license type converted to.</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time at which the license type conversion task was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="LicenseConversionTaskId" /></td>
    <td><code>string</code></td>
    <td>ID of the license type conversion task. (pattern: &lt;code&gt;^lct-&#91;a-zA-Z0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LicenseConversionTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Amount of time to complete the license type conversion.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Names (ARN) of the resources the license conversion task is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceLicenseContext" /></td>
    <td><code>object</code></td>
    <td>Information about the license type converted from.</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time at which the license type conversion task was started .</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Status of the license type conversion task. (IN_PROGRESS, SUCCEEDED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>The status message for the conversion task.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_license_conversion_tasks">

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
    <td><CopyableCode code="LicenseConversionTasks" /></td>
    <td><code>array</code></td>
    <td>Information about the license configuration tasks for your account.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Token for the next set of results.</td>
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
    <td><a href="#get_license_conversion_task"><CopyableCode code="get_license_conversion_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified license type conversion task.</td>
</tr>
<tr>
    <td><a href="#list_license_conversion_tasks"><CopyableCode code="list_license_conversion_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the license type conversion tasks for your account.</td>
</tr>
<tr>
    <td><a href="#create_license_conversion_task_for_resource"><CopyableCode code="create_license_conversion_task_for_resource" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a>, <a href="#parameter-SourceLicenseContext"><code>SourceLicenseContext</code></a>, <a href="#parameter-DestinationLicenseContext"><code>DestinationLicenseContext</code></a></td>
    <td></td>
    <td>Creates a new license conversion task.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_license_conversion_task"
    values={[
        { label: 'get_license_conversion_task', value: 'get_license_conversion_task' },
        { label: 'list_license_conversion_tasks', value: 'list_license_conversion_tasks' }
    ]}
>
<TabItem value="get_license_conversion_task">

Gets information about the specified license type conversion task.

```sql
SELECT
DestinationLicenseContext,
EndTime,
LicenseConversionTaskId,
LicenseConversionTime,
ResourceArn,
SourceLicenseContext,
StartTime,
Status,
StatusMessage
FROM aws.license_manager.license_conversion_tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_license_conversion_tasks">

Lists the license type conversion tasks for your account.

```sql
SELECT
LicenseConversionTasks,
NextToken
FROM aws.license_manager.license_conversion_tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_license_conversion_task_for_resource"
    values={[
        { label: 'create_license_conversion_task_for_resource', value: 'create_license_conversion_task_for_resource' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_license_conversion_task_for_resource">

Creates a new license conversion task.

```sql
INSERT INTO aws.license_manager.license_conversion_tasks (
ResourceArn,
SourceLicenseContext,
DestinationLicenseContext,
region
)
SELECT 
'{{ ResourceArn }}' /* required */,
'{{ SourceLicenseContext }}' /* required */,
'{{ DestinationLicenseContext }}' /* required */,
'{{ region }}'
RETURNING
LicenseConversionTaskId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: license_conversion_tasks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the license_conversion_tasks resource.
    - name: ResourceArn
      value: "{{ ResourceArn }}"
      description: |
        Amazon Resource Name (ARN) of the resource you are converting the license type for.
    - name: SourceLicenseContext
      description: |
        Information that identifies the license type you are converting from. For the structure of the source license, see Convert a license type using the CLI in the License Manager User Guide.
      value:
        UsageOperation: "{{ UsageOperation }}"
        ProductCodes:
          - ProductCodeId: "{{ ProductCodeId }}"
            ProductCodeType: "{{ ProductCodeType }}"
    - name: DestinationLicenseContext
      description: |
        Information that identifies the license type you are converting to. For the structure of the destination license, see Convert a license type using the CLI in the License Manager User Guide.
      value:
        UsageOperation: "{{ UsageOperation }}"
        ProductCodes:
          - ProductCodeId: "{{ ProductCodeId }}"
            ProductCodeType: "{{ ProductCodeType }}"
`}</CodeBlock>

</TabItem>
</Tabs>
