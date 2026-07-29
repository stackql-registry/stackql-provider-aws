--- 
title: capacity_manager_data_exports
hide_title: false
hide_table_of_contents: false
keywords:
  - capacity_manager_data_exports
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

Creates, updates, deletes, gets or lists a <code>capacity_manager_data_exports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="capacity_manager_data_exports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.capacity_manager_data_exports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_capacity_manager_data_exports"
    values={[
        { label: 'describe_capacity_manager_data_exports', value: 'describe_capacity_manager_data_exports' }
    ]}
>
<TabItem value="describe_capacity_manager_data_exports">

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
    <td><CopyableCode code="capacity_manager_data_export_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the data export configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the data export configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_delivery_s3_location_uri" /></td>
    <td><code>string</code></td>
    <td>The S3 URI of the most recently delivered export file.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_delivery_status" /></td>
    <td><code>string</code></td>
    <td>The status of the most recent export delivery.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_delivery_status_message" /></td>
    <td><code>string</code></td>
    <td>A message describing the status of the most recent export delivery, including any error details if the delivery failed.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_delivery_time" /></td>
    <td><code>string</code></td>
    <td>The timestamp when the most recent export was delivered to S3.</td>
</tr>
<tr>
    <td><CopyableCode code="output_format" /></td>
    <td><code>string</code></td>
    <td>The file format of the exported data.</td>
</tr>
<tr>
    <td><CopyableCode code="s3_bucket_name" /></td>
    <td><code>string</code></td>
    <td>The name of the S3 bucket where export files are delivered.</td>
</tr>
<tr>
    <td><CopyableCode code="s3_bucket_prefix" /></td>
    <td><code>string</code></td>
    <td>The S3 key prefix used for organizing export files within the bucket.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>string</code></td>
    <td>The frequency at which data exports are generated.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags associated with the data export configuration.</td>
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
    <td><a href="#describe_capacity_manager_data_exports"><CopyableCode code="describe_capacity_manager_data_exports" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-CapacityManagerDataExportId"><code>CapacityManagerDataExportId</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a></td>
    <td>Describes one or more Capacity Manager data export configurations. Returns information about export settings, delivery status, and recent export activity.</td>
</tr>
<tr>
    <td><a href="#create_capacity_manager_data_export"><CopyableCode code="create_capacity_manager_data_export" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-S3BucketName"><code>S3BucketName</code></a>, <a href="#parameter-OutputFormat"><code>OutputFormat</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-S3BucketPrefix"><code>S3BucketPrefix</code></a>, <a href="#parameter-Schedule"><code>Schedule</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a></td>
    <td>Creates a new data export configuration for EC2 Capacity Manager. This allows you to automatically export capacity usage data to an S3 bucket on a scheduled basis. The exported data includes metrics for On-Demand, Spot, and Capacity Reservations usage across your organization.</td>
</tr>
<tr>
    <td><a href="#delete_capacity_manager_data_export"><CopyableCode code="delete_capacity_manager_data_export" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-CapacityManagerDataExportId"><code>CapacityManagerDataExportId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes an existing Capacity Manager data export configuration. This stops future scheduled exports but does not delete previously exported files from S3.</td>
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
<tr id="parameter-CapacityManagerDataExportId">
    <td><CopyableCode code="CapacityManagerDataExportId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the data export configuration to delete.</td>
</tr>
<tr id="parameter-OutputFormat">
    <td><CopyableCode code="OutputFormat" /></td>
    <td><code>string</code></td>
    <td>The file format for the exported data. Parquet format is recommended for large datasets and better compression.</td>
</tr>
<tr id="parameter-S3BucketName">
    <td><CopyableCode code="S3BucketName" /></td>
    <td><code>string</code></td>
    <td>The name of the S3 bucket where the capacity data export files will be delivered. The bucket must exist and you must have write permissions to it.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-CapacityManagerDataExportId">
    <td><CopyableCode code="CapacityManagerDataExportId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the data export configurations to describe. If not specified, all export configurations are returned.</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensure Idempotency.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>One or more filters to narrow the results. Supported filters include export status, creation date, and S3 bucket name.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call. If not specified, up to 1000 results are returned.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results. Use this value in a subsequent call to retrieve additional results.</td>
</tr>
<tr id="parameter-S3BucketPrefix">
    <td><CopyableCode code="S3BucketPrefix" /></td>
    <td><code>string</code></td>
    <td>The S3 key prefix for the exported data files. This allows you to organize exports in a specific folder structure within your bucket. If not specified, files are placed at the bucket root.</td>
</tr>
<tr id="parameter-Schedule">
    <td><CopyableCode code="Schedule" /></td>
    <td><code>string</code></td>
    <td>The frequency at which data exports are generated.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply to the data export configuration. You can tag the export for organization and cost tracking purposes.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_capacity_manager_data_exports"
    values={[
        { label: 'describe_capacity_manager_data_exports', value: 'describe_capacity_manager_data_exports' }
    ]}
>
<TabItem value="describe_capacity_manager_data_exports">

Describes one or more Capacity Manager data export configurations. Returns information about export settings, delivery status, and recent export activity.

```sql
SELECT
capacity_manager_data_export_id,
create_time,
latest_delivery_s3_location_uri,
latest_delivery_status,
latest_delivery_status_message,
latest_delivery_time,
output_format,
s3_bucket_name,
s3_bucket_prefix,
schedule,
tags
FROM aws.ec2.capacity_manager_data_exports
WHERE region = '{{ region }}' -- required
AND CapacityManagerDataExportId = '{{ CapacityManagerDataExportId }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_capacity_manager_data_export"
    values={[
        { label: 'create_capacity_manager_data_export', value: 'create_capacity_manager_data_export' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_capacity_manager_data_export">

Creates a new data export configuration for EC2 Capacity Manager. This allows you to automatically export capacity usage data to an S3 bucket on a scheduled basis. The exported data includes metrics for On-Demand, Spot, and Capacity Reservations usage across your organization.

```sql
INSERT INTO aws.ec2.capacity_manager_data_exports (
S3BucketName,
OutputFormat,
region,
S3BucketPrefix,
Schedule,
ClientToken,
DryRun,
TagSpecification
)
SELECT 
'{{ S3BucketName }}',
'{{ OutputFormat }}',
'{{ region }}',
'{{ S3BucketPrefix }}',
'{{ Schedule }}',
'{{ ClientToken }}',
'{{ DryRun }}',
'{{ TagSpecification }}'
RETURNING
capacity_manager_data_export_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: capacity_manager_data_exports
  props:
    - name: S3BucketName
      value: "{{ S3BucketName }}"
      description: Required parameter for the capacity_manager_data_exports resource.
    - name: OutputFormat
      value: "{{ OutputFormat }}"
      description: Required parameter for the capacity_manager_data_exports resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the capacity_manager_data_exports resource.
    - name: S3BucketPrefix
      value: "{{ S3BucketPrefix }}"
      description: The S3 key prefix for the exported data files. This allows you to organize exports in a specific folder structure within your bucket. If not specified, files are placed at the bucket root.
      description: The S3 key prefix for the exported data files. This allows you to organize exports in a specific folder structure within your bucket. If not specified, files are placed at the bucket root.
    - name: Schedule
      value: "{{ Schedule }}"
      description: The frequency at which data exports are generated.
      description: The frequency at which data exports are generated.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensure Idempotency.
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see Ensure Idempotency.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: TagSpecification
      value: "{{ TagSpecification }}"
      description: The tags to apply to the data export configuration. You can tag the export for organization and cost tracking purposes.
      description: The tags to apply to the data export configuration. You can tag the export for organization and cost tracking purposes.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_capacity_manager_data_export"
    values={[
        { label: 'delete_capacity_manager_data_export', value: 'delete_capacity_manager_data_export' }
    ]}
>
<TabItem value="delete_capacity_manager_data_export">

Deletes an existing Capacity Manager data export configuration. This stops future scheduled exports but does not delete previously exported files from S3.

```sql
DELETE FROM aws.ec2.capacity_manager_data_exports
WHERE CapacityManagerDataExportId = '{{ CapacityManagerDataExportId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
