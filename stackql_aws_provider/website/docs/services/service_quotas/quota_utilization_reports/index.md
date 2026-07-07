--- 
title: quota_utilization_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - quota_utilization_reports
  - service_quotas
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

Creates, updates, deletes, gets or lists a <code>quota_utilization_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="quota_utilization_reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.service_quotas.quota_utilization_reports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_quota_utilization_report"
    values={[
        { label: 'get_quota_utilization_report', value: 'get_quota_utilization_report' }
    ]}
>
<TabItem value="get_quota_utilization_report">

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
    <td><CopyableCode code="ErrorCode" /></td>
    <td><code>string</code></td>
    <td>An error code indicating the reason for failure when the report status is FAILED. This field is only present when the status is FAILED. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ErrorMessage" /></td>
    <td><code>string</code></td>
    <td>A detailed error message describing the failure when the report status is FAILED. This field is only present when the status is FAILED. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GeneratedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the report was generated, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates more results are available. Include this token in the next request to retrieve the next page of results. If this field is not present, you have retrieved all available results. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9/+&#93;*=&#123;0,2&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Quotas" /></td>
    <td><code>array</code></td>
    <td>A list of quota utilization records, sorted by utilization percentage in descending order. Each record includes the quota code, service code, service name, quota name, namespace, utilization percentage, default value, applied value, and whether the quota is adjustable. Up to 1,000 records are returned per page.</td>
</tr>
<tr>
    <td><CopyableCode code="ReportId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the quota utilization report. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#91;a-zA-Z0-9-&#93;&#123;1,128&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the report generation. Possible values are: PENDING - The report generation is in progress. Retry this operation after a few seconds. IN_PROGRESS - The report is being processed. Continue polling until the status changes to COMPLETED. COMPLETED - The report is ready and quota utilization data is available in the response. FAILED - The report generation failed. Check the ErrorCode and ErrorMessage fields for details. (PENDING, IN_PROGRESS, COMPLETED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="TotalCount" /></td>
    <td><code>integer</code></td>
    <td>The total number of quotas included in the report across all pages.</td>
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
    <td><a href="#get_quota_utilization_report"><CopyableCode code="get_quota_utilization_report" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the quota utilization report for your Amazon Web Services account. This operation returns paginated results showing your quota usage across all Amazon Web Services services, sorted by utilization percentage in descending order (highest utilization first). You must first initiate a report using the StartQuotaUtilizationReport operation. The report generation process is asynchronous and may take several seconds to complete. Poll this operation periodically to check the status and retrieve results when the report is ready. Each report contains up to 1,000 quota records per page. Use the NextToken parameter to retrieve additional pages of results. Reports are automatically deleted after 15 minutes.</td>
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
    defaultValue="get_quota_utilization_report"
    values={[
        { label: 'get_quota_utilization_report', value: 'get_quota_utilization_report' }
    ]}
>
<TabItem value="get_quota_utilization_report">

Retrieves the quota utilization report for your Amazon Web Services account. This operation returns paginated results showing your quota usage across all Amazon Web Services services, sorted by utilization percentage in descending order (highest utilization first). You must first initiate a report using the StartQuotaUtilizationReport operation. The report generation process is asynchronous and may take several seconds to complete. Poll this operation periodically to check the status and retrieve results when the report is ready. Each report contains up to 1,000 quota records per page. Use the NextToken parameter to retrieve additional pages of results. Reports are automatically deleted after 15 minutes.

```sql
SELECT
ErrorCode,
ErrorMessage,
GeneratedAt,
NextToken,
Quotas,
ReportId,
Status,
TotalCount
FROM aws.service_quotas.quota_utilization_reports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
