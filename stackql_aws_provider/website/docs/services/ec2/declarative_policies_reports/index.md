--- 
title: declarative_policies_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - declarative_policies_reports
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

Creates, updates, deletes, gets or lists a <code>declarative_policies_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="declarative_policies_reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.declarative_policies_reports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_declarative_policies_reports"
    values={[
        { label: 'describe_declarative_policies_reports', value: 'describe_declarative_policies_reports' }
    ]}
>
<TabItem value="describe_declarative_policies_reports">

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
    <td><CopyableCode code="end_time" /></td>
    <td><code>string</code></td>
    <td>The time when the report generation ended.</td>
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
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the report.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>Any tags assigned to the report.</td>
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
    <td><a href="#describe_declarative_policies_reports"><CopyableCode code="describe_declarative_policies_reports" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-ReportId"><code>ReportId</code></a></td>
    <td>Describes the metadata of an account status report, including the status of the report. To view the full report, download it from the Amazon S3 bucket where it was saved. Reports are accessible only when they have the complete status. Reports with other statuses (running, cancelled, or error) are not available in the S3 bucket. For more information about downloading objects from an S3 bucket, see Downloading objects in the Amazon Simple Storage Service User Guide. For more information, see Generating the account status report for declarative policies in the Amazon Web Services Organizations User Guide.</td>
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
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return for this request. To get the next page of items, make another request with the token returned in the output. For more information, see Pagination.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from a previous paginated request. Pagination continues from the end of the items returned by the previous request.</td>
</tr>
<tr id="parameter-ReportId">
    <td><CopyableCode code="ReportId" /></td>
    <td><code>array</code></td>
    <td>One or more report IDs.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_declarative_policies_reports"
    values={[
        { label: 'describe_declarative_policies_reports', value: 'describe_declarative_policies_reports' }
    ]}
>
<TabItem value="describe_declarative_policies_reports">

Describes the metadata of an account status report, including the status of the report. To view the full report, download it from the Amazon S3 bucket where it was saved. Reports are accessible only when they have the complete status. Reports with other statuses (running, cancelled, or error) are not available in the S3 bucket. For more information about downloading objects from an S3 bucket, see Downloading objects in the Amazon Simple Storage Service User Guide. For more information, see Generating the account status report for declarative policies in the Amazon Web Services Organizations User Guide.

```sql
SELECT
end_time,
report_id,
s3_bucket,
s3_prefix,
start_time,
status,
tags,
target_id
FROM aws.ec2.declarative_policies_reports
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
AND ReportId = '{{ ReportId }}'
;
```
</TabItem>
</Tabs>
