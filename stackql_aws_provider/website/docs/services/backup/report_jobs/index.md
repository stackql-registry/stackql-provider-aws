--- 
title: report_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - report_jobs
  - backup
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

Creates, updates, deletes, gets or lists a <code>report_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="report_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.report_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_report_job"
    values={[
        { label: 'describe_report_job', value: 'describe_report_job' },
        { label: 'list_report_jobs', value: 'list_report_jobs' }
    ]}
>
<TabItem value="describe_report_job">

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
    <td><CopyableCode code="CompletionTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that a report job is completed, in Unix format and Coordinated Universal Time (UTC). The value of CompletionTime is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that a report job is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationTime is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="ReportDestination" /></td>
    <td><code>object</code></td>
    <td>The S3 bucket name and S3 keys for the destination where the report job publishes the report.</td>
</tr>
<tr>
    <td><CopyableCode code="ReportJobId" /></td>
    <td><code>string</code></td>
    <td>The identifier for a report job. A unique, randomly generated, Unicode, UTF-8 encoded string that is at most 1,024 bytes long. Report job IDs cannot be edited.</td>
</tr>
<tr>
    <td><CopyableCode code="ReportPlanArn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.</td>
</tr>
<tr>
    <td><CopyableCode code="ReportTemplate" /></td>
    <td><code>string</code></td>
    <td>Identifies the report template for the report. Reports are built using a report template. The report templates are: RESOURCE_COMPLIANCE_REPORT | CONTROL_COMPLIANCE_REPORT | BACKUP_JOB_REPORT | COPY_JOB_REPORT | RESTORE_JOB_REPORT</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of a report job. The statuses are: CREATED | RUNNING | COMPLETED | FAILED COMPLETED means that the report is available for your review at your designated destination. If the status is FAILED, review the StatusMessage for the reason.</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>A message explaining the status of the report job.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_report_jobs">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="ReportJobs" /></td>
    <td><code>array</code></td>
    <td>Details about your report jobs in JSON format.</td>
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
    <td><a href="#describe_report_job"><CopyableCode code="describe_report_job" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-report_job_id"><code>report_job_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the details associated with creating a report as specified by its ReportJobId.</td>
</tr>
<tr>
    <td><a href="#list_report_jobs"><CopyableCode code="list_report_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ReportPlanName"><code>ReportPlanName</code></a>, <a href="#parameter-CreationBefore"><code>CreationBefore</code></a>, <a href="#parameter-CreationAfter"><code>CreationAfter</code></a>, <a href="#parameter-Status"><code>Status</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns details about your report jobs.</td>
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
<tr id="parameter-report_job_id">
    <td><CopyableCode code="report_job_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the report job. A unique, randomly generated, Unicode, UTF-8 encoded string that is at most 1,024 bytes long. The report job ID cannot be edited.</td>
</tr>
<tr id="parameter-CreationAfter">
    <td><CopyableCode code="CreationAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns only report jobs that were created after the date and time specified in Unix format and Coordinated Universal Time (UTC). For example, the value 1516925490 represents Friday, January 26, 2018 12:11:30 AM.</td>
</tr>
<tr id="parameter-CreationBefore">
    <td><CopyableCode code="CreationBefore" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns only report jobs that were created before the date and time specified in Unix format and Coordinated Universal Time (UTC). For example, the value 1516925490 represents Friday, January 26, 2018 12:11:30 AM.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The number of desired results from 1 to 1000. Optional. If unspecified, the query will return 1 MB of data.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</td>
</tr>
<tr id="parameter-ReportPlanName">
    <td><CopyableCode code="ReportPlanName" /></td>
    <td><code>string</code></td>
    <td>Returns only report jobs with the specified report plan name.</td>
</tr>
<tr id="parameter-Status">
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Returns only report jobs that are in the specified status. The statuses are: CREATED | RUNNING | COMPLETED | FAILED | COMPLETED_WITH_ISSUES Please note that only scanning jobs finish with state completed with issues. For backup jobs this is a console interpretation of a job that finishes in completed state and has a status message.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_report_job"
    values={[
        { label: 'describe_report_job', value: 'describe_report_job' },
        { label: 'list_report_jobs', value: 'list_report_jobs' }
    ]}
>
<TabItem value="describe_report_job">

Returns the details associated with creating a report as specified by its ReportJobId.

```sql
SELECT
CompletionTime,
CreationTime,
ReportDestination,
ReportJobId,
ReportPlanArn,
ReportTemplate,
Status,
StatusMessage
FROM aws.backup.report_jobs
WHERE report_job_id = '{{ report_job_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_report_jobs">

Returns details about your report jobs.

```sql
SELECT
NextToken,
ReportJobs
FROM aws.backup.report_jobs
WHERE region = '{{ region }}' -- required
AND ReportPlanName = '{{ ReportPlanName }}'
AND CreationBefore = '{{ CreationBefore }}'
AND CreationAfter = '{{ CreationAfter }}'
AND Status = '{{ Status }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
