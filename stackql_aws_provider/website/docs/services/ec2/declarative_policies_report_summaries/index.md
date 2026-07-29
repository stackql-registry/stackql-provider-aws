--- 
title: declarative_policies_report_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - declarative_policies_report_summaries
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

Creates, updates, deletes, gets or lists a <code>declarative_policies_report_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="declarative_policies_report_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.declarative_policies_report_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_declarative_policies_report_summary"
    values={[
        { label: 'get_declarative_policies_report_summary', value: 'get_declarative_policies_report_summary' }
    ]}
>
<TabItem value="get_declarative_policies_report_summary">

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
    <td><CopyableCode code="attribute_summaries" /></td>
    <td><code>string</code></td>
    <td>The attributes described in the report.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string</code></td>
    <td>The time when the report generation ended.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_accounts" /></td>
    <td><code>integer</code></td>
    <td>The total number of accounts associated with the specified targetId.</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_failed_accounts" /></td>
    <td><code>integer</code></td>
    <td>The number of accounts where attributes could not be retrieved in any Region.</td>
</tr>
<tr>
    <td><CopyableCode code="report_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the report.</td>
</tr>
<tr>
    <td><CopyableCode code="s3_bucket" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon S3 bucket where the report is located.</td>
</tr>
<tr>
    <td><CopyableCode code="s3_prefix" /></td>
    <td><code>string</code></td>
    <td>The prefix for your S3 object.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string</code></td>
    <td>The time when the report generation started.</td>
</tr>
<tr>
    <td><CopyableCode code="target_id" /></td>
    <td><code>string</code></td>
    <td>The root ID, organizational unit ID, or account ID. Format: For root: r-ab12 For OU: ou-ab12-cdef1234 For account: 123456789012</td>
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
    <td><a href="#get_declarative_policies_report_summary"><CopyableCode code="get_declarative_policies_report_summary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ReportId"><code>ReportId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Retrieves a summary of the account status report. To view the full report, download it from the Amazon S3 bucket where it was saved. Reports are accessible only when they have the complete status. Reports with other statuses (running, cancelled, or error) are not available in the S3 bucket. For more information about downloading objects from an S3 bucket, see Downloading objects in the Amazon Simple Storage Service User Guide. For more information, see Generating the account status report for declarative policies in the Amazon Web Services Organizations User Guide.</td>
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
<tr id="parameter-ReportId">
    <td><CopyableCode code="ReportId" /></td>
    <td><code>string</code></td>
    <td>The ID of the report.</td>
</tr>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_declarative_policies_report_summary"
    values={[
        { label: 'get_declarative_policies_report_summary', value: 'get_declarative_policies_report_summary' }
    ]}
>
<TabItem value="get_declarative_policies_report_summary">

Retrieves a summary of the account status report. To view the full report, download it from the Amazon S3 bucket where it was saved. Reports are accessible only when they have the complete status. Reports with other statuses (running, cancelled, or error) are not available in the S3 bucket. For more information about downloading objects from an S3 bucket, see Downloading objects in the Amazon Simple Storage Service User Guide. For more information, see Generating the account status report for declarative policies in the Amazon Web Services Organizations User Guide.

```sql
SELECT
attribute_summaries,
end_time,
number_of_accounts,
number_of_failed_accounts,
report_id,
s3_bucket,
s3_prefix,
start_time,
target_id
FROM aws.ec2.declarative_policies_report_summaries
WHERE ReportId = '{{ ReportId }}' -- required
AND region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
