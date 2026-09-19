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
<tr>
    <td><a href="#cancel_declarative_policies_report"><CopyableCode code="cancel_declarative_policies_report" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ReportId"><code>ReportId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Cancels the generation of an account status report. You can only cancel a report while it has the running status. Reports with other statuses (complete, cancelled, or error) can't be canceled. For more information, see Generating the account status report for declarative policies in the Amazon Web Services Organizations User Guide.</td>
</tr>
<tr>
    <td><a href="#start_declarative_policies_report"><CopyableCode code="start_declarative_policies_report" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-S3Bucket"><code>S3Bucket</code></a>, <a href="#parameter-TargetId"><code>TargetId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-S3Prefix"><code>S3Prefix</code></a>, <a href="#parameter-TagSpecification"><code>TagSpecification</code></a></td>
    <td>Generates an account status report. The report is generated asynchronously, and can take several hours to complete. The report provides the current status of all attributes supported by declarative policies for the accounts within the specified scope. The scope is determined by the specified TargetId, which can represent an individual account, or all the accounts that fall under the specified organizational unit (OU) or root (the entire Amazon Web Services Organization). The report is saved to your specified S3 bucket, using the following path structure (with the capitalized placeholders representing your specific values): s3:​//AMZN-S3-DEMO-BUCKET/YOUR-OPTIONAL-S3-PREFIX/ec2_TARGETID_REPORTID_YYYYMMDDTHHMMZ.csv Prerequisites for generating a report The StartDeclarativePoliciesReport API can only be called by the management account or delegated administrators for the organization. An S3 bucket must be available before generating the report (you can create a new one or use an existing one), it must be in the same Region where the report generation request is made, and it must have an appropriate bucket policy. For a sample S3 policy, see Sample Amazon S3 policy under Examples. Trusted access must be enabled for the service for which the declarative policy will enforce a baseline configuration. If you use the Amazon Web Services Organizations console, this is done automatically when you enable declarative policies. The API uses the following service principal to identify the EC2 service: ec2.amazonaws.com. For more information on how to enable trusted access with the Amazon Web Services CLI and Amazon Web Services SDKs, see Using Organizations with other Amazon Web Services services in the Amazon Web Services Organizations User Guide. Only one report per organization can be generated at a time. Attempting to generate a report while another is in progress will result in an error. For more information, including the required IAM permissions to run this API, see Generating the account status report for declarative policies in the Amazon Web Services Organizations User Guide.</td>
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
<tr id="parameter-S3Bucket">
    <td><CopyableCode code="S3Bucket" /></td>
    <td><code>string</code></td>
    <td>The name of the S3 bucket where the report will be saved. The bucket must be in the same Region where the report generation request is made.</td>
</tr>
<tr id="parameter-TargetId">
    <td><CopyableCode code="TargetId" /></td>
    <td><code>string</code></td>
    <td>The root ID, organizational unit ID, or account ID. Format: For root: r-ab12 For OU: ou-ab12-cdef1234 For account: 123456789012</td>
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
<tr id="parameter-S3Prefix">
    <td><CopyableCode code="S3Prefix" /></td>
    <td><code>string</code></td>
    <td>The prefix for your S3 object.</td>
</tr>
<tr id="parameter-TagSpecification">
    <td><CopyableCode code="TagSpecification" /></td>
    <td><code>array</code></td>
    <td>The tags to apply.</td>
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


## Lifecycle Methods

<Tabs
    defaultValue="cancel_declarative_policies_report"
    values={[
        { label: 'cancel_declarative_policies_report', value: 'cancel_declarative_policies_report' },
        { label: 'start_declarative_policies_report', value: 'start_declarative_policies_report' }
    ]}
>
<TabItem value="cancel_declarative_policies_report">

Cancels the generation of an account status report. You can only cancel a report while it has the running status. Reports with other statuses (complete, cancelled, or error) can't be canceled. For more information, see Generating the account status report for declarative policies in the Amazon Web Services Organizations User Guide.

```sql
EXEC aws.ec2.declarative_policies_reports.cancel_declarative_policies_report 
@ReportId='{{ ReportId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}
;
```
</TabItem>
<TabItem value="start_declarative_policies_report">

Generates an account status report. The report is generated asynchronously, and can take several hours to complete. The report provides the current status of all attributes supported by declarative policies for the accounts within the specified scope. The scope is determined by the specified TargetId, which can represent an individual account, or all the accounts that fall under the specified organizational unit (OU) or root (the entire Amazon Web Services Organization). The report is saved to your specified S3 bucket, using the following path structure (with the capitalized placeholders representing your specific values): s3://AMZN-S3-DEMO-BUCKET/YOUR-OPTIONAL-S3-PREFIX/ec2_TARGETID_REPORTID_YYYYMMDDTHHMMZ.csv Prerequisites for generating a report The StartDeclarativePoliciesReport API can only be called by the management account or delegated administrators for the organization. An S3 bucket must be available before generating the report (you can create a new one or use an existing one), it must be in the same Region where the report generation request is made, and it must have an appropriate bucket policy. For a sample S3 policy, see Sample Amazon S3 policy under Examples. Trusted access must be enabled for the service for which the declarative policy will enforce a baseline configuration. If you use the Amazon Web Services Organizations console, this is done automatically when you enable declarative policies. The API uses the following service principal to identify the EC2 service: ec2.amazonaws.com. For more information on how to enable trusted access with the Amazon Web Services CLI and Amazon Web Services SDKs, see Using Organizations with other Amazon Web Services services in the Amazon Web Services Organizations User Guide. Only one report per organization can be generated at a time. Attempting to generate a report while another is in progress will result in an error. For more information, including the required IAM permissions to run this API, see Generating the account status report for declarative policies in the Amazon Web Services Organizations User Guide.

```sql
EXEC aws.ec2.declarative_policies_reports.start_declarative_policies_report 
@S3Bucket='{{ S3Bucket }}' --required, 
@TargetId='{{ TargetId }}' --required, 
@region='{{ region }}' --required, 
@DryRun={{ DryRun }}, 
@S3Prefix='{{ S3Prefix }}', 
@TagSpecification='{{ TagSpecification }}'
;
```
</TabItem>
</Tabs>
