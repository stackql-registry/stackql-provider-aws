--- 
title: export_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - export_tasks
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

Creates, updates, deletes, gets or lists an <code>export_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="export_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.discovery.export_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_export_tasks"
    values={[
        { label: 'describe_export_tasks', value: 'describe_export_tasks' }
    ]}
>
<TabItem value="describe_export_tasks">

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
    <td><a href="#describe_export_tasks"><CopyableCode code="describe_export_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve status of one or more export tasks. You can retrieve the status of up to 100 export tasks.</td>
</tr>
<tr>
    <td><a href="#start_export_task"><CopyableCode code="start_export_task" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Begins the export of a discovered data report to an Amazon S3 bucket managed by Amazon Web Services. Exports might provide an estimate of fees and savings based on certain information that you provide. Fee estimates do not include any taxes that might apply. Your actual fees and savings depend on a variety of factors, including your actual usage of Amazon Web Services services, which might vary from the estimates provided in this report. If you do not specify preferences or agentIds in the filter, a summary of all servers, applications, tags, and performance is generated. This data is an aggregation of all server data collected through on-premises tooling, file import, application grouping and applying tags. If you specify agentIds in a filter, the task exports up to 72 hours of detailed data collected by the identified Application Discovery Agent, including network, process, and performance details. A time range for exported agent data may be set by using startTime and endTime. Export of detailed agent data is limited to five concurrently running exports. Export of detailed agent data is limited to two exports per day. If you enable ec2RecommendationsPreferences in preferences , an Amazon EC2 instance matching the characteristics of each server in Application Discovery Service is generated. Changing the attributes of the ec2RecommendationsPreferences changes the criteria of the recommendation.</td>
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
    defaultValue="describe_export_tasks"
    values={[
        { label: 'describe_export_tasks', value: 'describe_export_tasks' }
    ]}
>
<TabItem value="describe_export_tasks">

Retrieve status of one or more export tasks. You can retrieve the status of up to 100 export tasks.

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
FROM aws.discovery.export_tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_export_task"
    values={[
        { label: 'start_export_task', value: 'start_export_task' }
    ]}
>
<TabItem value="start_export_task">

Begins the export of a discovered data report to an Amazon S3 bucket managed by Amazon Web Services. Exports might provide an estimate of fees and savings based on certain information that you provide. Fee estimates do not include any taxes that might apply. Your actual fees and savings depend on a variety of factors, including your actual usage of Amazon Web Services services, which might vary from the estimates provided in this report. If you do not specify preferences or agentIds in the filter, a summary of all servers, applications, tags, and performance is generated. This data is an aggregation of all server data collected through on-premises tooling, file import, application grouping and applying tags. If you specify agentIds in a filter, the task exports up to 72 hours of detailed data collected by the identified Application Discovery Agent, including network, process, and performance details. A time range for exported agent data may be set by using startTime and endTime. Export of detailed agent data is limited to five concurrently running exports. Export of detailed agent data is limited to two exports per day. If you enable ec2RecommendationsPreferences in preferences , an Amazon EC2 instance matching the characteristics of each server in Application Discovery Service is generated. Changing the attributes of the ec2RecommendationsPreferences changes the criteria of the recommendation.

```sql
EXEC aws.discovery.export_tasks.start_export_task 
@region='{{ region }}' --required 
@@json=
'{
"exportDataFormat": "{{ exportDataFormat }}", 
"filters": "{{ filters }}", 
"startTime": "{{ startTime }}", 
"endTime": "{{ endTime }}", 
"preferences": "{{ preferences }}"
}'
;
```
</TabItem>
</Tabs>
