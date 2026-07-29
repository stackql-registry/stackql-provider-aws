--- 
title: export_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - export_configurations
  - discovery
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

Creates, updates, deletes, gets or lists an <code>export_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="export_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.discovery.export_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_export_configurations"
    values={[
        { label: 'describe_export_configurations', value: 'describe_export_configurations' }
    ]}
>
<TabItem value="describe_export_configurations">

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
    <td><CopyableCode code="configurations_download_url" /></td>
    <td><code>string</code></td>
    <td>A URL for an Amazon S3 bucket where you can review the exported data. The URL is displayed only if the export succeeded.</td>
</tr>
<tr>
    <td><CopyableCode code="export_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier used to query an export. (pattern: &lt;code&gt;\S*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="export_request_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the data export was initiated.</td>
</tr>
<tr>
    <td><CopyableCode code="export_status" /></td>
    <td><code>string</code></td>
    <td>The status of the data export job. (FAILED, SUCCEEDED, IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="is_truncated" /></td>
    <td><code>boolean</code></td>
    <td>If true, the export of agent information exceeded the size limit for a single export and the exported data is incomplete for the requested time range. To address this, select a smaller time range for the export by using startDate and endDate.</td>
</tr>
<tr>
    <td><CopyableCode code="requested_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The endTime used in the StartExportTask request. If no endTime was requested, this result does not appear in ExportInfo.</td>
</tr>
<tr>
    <td><CopyableCode code="requested_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The value of startTime parameter in the StartExportTask request. If no startTime was requested, this result does not appear in ExportInfo.</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>A status message provided for API callers.</td>
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
    <td><a href="#describe_export_configurations"><CopyableCode code="describe_export_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>DescribeExportConfigurations is deprecated. Use DescribeExportTasks, instead.</td>
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
    defaultValue="describe_export_configurations"
    values={[
        { label: 'describe_export_configurations', value: 'describe_export_configurations' }
    ]}
>
<TabItem value="describe_export_configurations">

DescribeExportConfigurations is deprecated. Use DescribeExportTasks, instead.

```sql
SELECT
configurations_download_url,
export_id,
export_request_time,
export_status,
is_truncated,
requested_end_time,
requested_start_time,
status_message
FROM aws.discovery.export_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
