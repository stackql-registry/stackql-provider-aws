--- 
title: scan_job_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - scan_job_summaries
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

Creates, updates, deletes, gets or lists a <code>scan_job_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scan_job_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.scan_job_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_scan_job_summaries"
    values={[
        { label: 'list_scan_job_summaries', value: 'list_scan_job_summaries' }
    ]}
>
<TabItem value="list_scan_job_summaries">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The account ID that owns the scan jobs included in this summary. (pattern: &lt;code&gt;^&#91;0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="count" /></td>
    <td><code>integer</code></td>
    <td>The number of scan jobs that match the specified criteria.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The value of time in number format of a job end time. This value is the time in Unix format, Coordinated Universal Time (UTC), and accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="malware_scanner" /></td>
    <td><code>string</code></td>
    <td>Specifies the malware scanner used during the scan job. Currently only supports GUARDDUTY. (GUARDDUTY)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where the scan jobs were executed.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of Amazon Web Services resource for the scan jobs included in this summary. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-\_\.&#93;&#123;1,50&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="scan_result_status" /></td>
    <td><code>string</code></td>
    <td>The scan result status for the scan jobs included in this summary. Valid values: THREATS_FOUND | NO_THREATS_FOUND. (NO_THREATS_FOUND, THREATS_FOUND)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The value of time in number format of a job start time. This value is the time in Unix format, Coordinated Universal Time (UTC), and accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the scan jobs included in this summary. Valid values: CREATED | RUNNING | COMPLETED | COMPLETED_WITH_ISSUES | FAILED | CANCELED. (CREATED, COMPLETED, COMPLETED_WITH_ISSUES, RUNNING, FAILED, CANCELED, AGGREGATE_ALL, ANY)</td>
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
    <td><a href="#list_scan_job_summaries"><CopyableCode code="list_scan_job_summaries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AccountId"><code>AccountId</code></a>, <a href="#parameter-ResourceType"><code>ResourceType</code></a>, <a href="#parameter-MalwareScanner"><code>MalwareScanner</code></a>, <a href="#parameter-ScanResultStatus"><code>ScanResultStatus</code></a>, <a href="#parameter-State"><code>State</code></a>, <a href="#parameter-AggregationPeriod"><code>AggregationPeriod</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>This is a request for a summary of scan jobs created or running within the most recent 30 days.</td>
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
<tr id="parameter-AccountId">
    <td><CopyableCode code="AccountId" /></td>
    <td><code>string</code></td>
    <td>Returns the job count for the specified account. If the request is sent from a member account or an account not part of Amazon Web Services Organizations, jobs within requestor's account will be returned. Root, admin, and delegated administrator accounts can use the value ANY to return job counts from every account in the organization. AGGREGATE_ALL aggregates job counts from all accounts within the authenticated organization, then returns the sum.</td>
</tr>
<tr id="parameter-AggregationPeriod">
    <td><CopyableCode code="AggregationPeriod" /></td>
    <td><code>string</code></td>
    <td>The period for the returned results. ONE_DAYThe daily job count for the prior 1 day. SEVEN_DAYSThe daily job count for the prior 7 days. FOURTEEN_DAYSThe daily job count for the prior 14 days.</td>
</tr>
<tr id="parameter-MalwareScanner">
    <td><CopyableCode code="MalwareScanner" /></td>
    <td><code>string</code></td>
    <td>Returns only the scan jobs for the specified malware scanner. Currently the only MalwareScanner is GUARDDUTY. But the field also supports ANY, and AGGREGATE_ALL.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to be returned. The value is an integer. Range of accepted values is from 1 to 500.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The next item following a partial list of returned items. For example, if a request is made to return MaxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token.</td>
</tr>
<tr id="parameter-ResourceType">
    <td><CopyableCode code="ResourceType" /></td>
    <td><code>string</code></td>
    <td>Returns the job count for the specified resource type. Use request GetSupportedResourceTypes to obtain strings for supported resource types. The the value ANY returns count of all resource types. AGGREGATE_ALL aggregates job counts for all resource types and returns the sum.</td>
</tr>
<tr id="parameter-ScanResultStatus">
    <td><CopyableCode code="ScanResultStatus" /></td>
    <td><code>string</code></td>
    <td>Returns only the scan jobs for the specified scan results.</td>
</tr>
<tr id="parameter-State">
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>Returns only the scan jobs for the specified scanning job state.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_scan_job_summaries"
    values={[
        { label: 'list_scan_job_summaries', value: 'list_scan_job_summaries' }
    ]}
>
<TabItem value="list_scan_job_summaries">

This is a request for a summary of scan jobs created or running within the most recent 30 days.

```sql
SELECT
account_id,
count,
end_time,
malware_scanner,
region,
resource_type,
scan_result_status,
start_time,
state
FROM aws.backup.scan_job_summaries
WHERE region = '{{ region }}' -- required
AND AccountId = '{{ AccountId }}'
AND ResourceType = '{{ ResourceType }}'
AND MalwareScanner = '{{ MalwareScanner }}'
AND ScanResultStatus = '{{ ScanResultStatus }}'
AND State = '{{ State }}'
AND AggregationPeriod = '{{ AggregationPeriod }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
