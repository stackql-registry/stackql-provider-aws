--- 
title: export_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - export_jobs
  - sesv2
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

Creates, updates, deletes, gets or lists an <code>export_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="export_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sesv2.export_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_export_job"
    values={[
        { label: 'get_export_job', value: 'get_export_job' },
        { label: 'list_export_jobs', value: 'list_export_jobs' }
    ]}
>
<TabItem value="get_export_job">

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
    <td><CopyableCode code="completed_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the export job was completed.</td>
</tr>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the export job was created.</td>
</tr>
<tr>
    <td><CopyableCode code="export_data_source" /></td>
    <td><code>object</code></td>
    <td>An object that contains details about the data source of the export job. It can only contain one of MetricsDataSource or MessageInsightsDataSource object.</td>
</tr>
<tr>
    <td><CopyableCode code="export_destination" /></td>
    <td><code>object</code></td>
    <td>An object that contains details about the destination of the export job.</td>
</tr>
<tr>
    <td><CopyableCode code="export_source_type" /></td>
    <td><code>string</code></td>
    <td>The type of source of the export job. (METRICS_DATA, MESSAGE_INSIGHTS)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_info" /></td>
    <td><code>object</code></td>
    <td>The failure details about an export job.</td>
</tr>
<tr>
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>A string that represents a job ID.</td>
</tr>
<tr>
    <td><CopyableCode code="job_status" /></td>
    <td><code>string</code></td>
    <td>The status of the export job. (CREATED, PROCESSING, COMPLETED, FAILED, CANCELLED)</td>
</tr>
<tr>
    <td><CopyableCode code="statistics" /></td>
    <td><code>object</code></td>
    <td>The statistics about the export job.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_export_jobs">

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
    <td><CopyableCode code="export_jobs" /></td>
    <td><code>array</code></td>
    <td>A list of the export job summaries.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A string token indicating that there might be additional export jobs available to be listed. Use this token to a subsequent call to ListExportJobs with the same parameters to retrieve the next page of export jobs.</td>
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
    <td><a href="#get_export_job"><CopyableCode code="get_export_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides information about an export job.</td>
</tr>
<tr>
    <td><a href="#list_export_jobs"><CopyableCode code="list_export_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all of the export jobs.</td>
</tr>
<tr>
    <td><a href="#create_export_job"><CopyableCode code="create_export_job" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ExportDataSource"><code>ExportDataSource</code></a>, <a href="#parameter-ExportDestination"><code>ExportDestination</code></a></td>
    <td></td>
    <td>Creates an export job for a data source and destination. You can execute this operation no more than once per second.</td>
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
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>The export job ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_export_job"
    values={[
        { label: 'get_export_job', value: 'get_export_job' },
        { label: 'list_export_jobs', value: 'list_export_jobs' }
    ]}
>
<TabItem value="get_export_job">

Provides information about an export job.

```sql
SELECT
completed_timestamp,
created_timestamp,
export_data_source,
export_destination,
export_source_type,
failure_info,
job_id,
job_status,
statistics
FROM aws.sesv2.export_jobs
WHERE job_id = '{{ job_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_export_jobs">

Lists all of the export jobs.

```sql
SELECT
export_jobs,
next_token
FROM aws.sesv2.export_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_export_job"
    values={[
        { label: 'create_export_job', value: 'create_export_job' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_export_job">

Creates an export job for a data source and destination. You can execute this operation no more than once per second.

```sql
INSERT INTO aws.sesv2.export_jobs (
ExportDataSource,
ExportDestination,
region
)
SELECT 
'{{ ExportDataSource }}' /* required */,
'{{ ExportDestination }}' /* required */,
'{{ region }}'
RETURNING
job_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: export_jobs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the export_jobs resource.
    - name: ExportDataSource
      description: |
        An object that contains details about the data source of the export job. It can only contain one of MetricsDataSource or MessageInsightsDataSource object.
      value:
        MetricsDataSource:
          Dimensions: "{{ Dimensions }}"
          Namespace: "{{ Namespace }}"
          Metrics:
            - Name: "{{ Name }}"
              Aggregation: "{{ Aggregation }}"
          StartDate: "{{ StartDate }}"
          EndDate: "{{ EndDate }}"
        MessageInsightsDataSource:
          StartDate: "{{ StartDate }}"
          EndDate: "{{ EndDate }}"
          Include:
            FromEmailAddress:
              - "{{ FromEmailAddress }}"
            Destination:
              - "{{ Destination }}"
            Subject:
              - "{{ Subject }}"
            Isp:
              - "{{ Isp }}"
            LastDeliveryEvent:
              - "{{ LastDeliveryEvent }}"
            LastEngagementEvent:
              - "{{ LastEngagementEvent }}"
          Exclude:
            FromEmailAddress:
              - "{{ FromEmailAddress }}"
            Destination:
              - "{{ Destination }}"
            Subject:
              - "{{ Subject }}"
            Isp:
              - "{{ Isp }}"
            LastDeliveryEvent:
              - "{{ LastDeliveryEvent }}"
            LastEngagementEvent:
              - "{{ LastEngagementEvent }}"
          MaxResults: {{ MaxResults }}
    - name: ExportDestination
      description: |
        An object that contains details about the destination of the export job.
      value:
        DataFormat: "{{ DataFormat }}"
        S3Url: "{{ S3Url }}"
`}</CodeBlock>

</TabItem>
</Tabs>
