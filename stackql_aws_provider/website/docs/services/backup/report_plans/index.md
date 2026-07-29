--- 
title: report_plans
hide_title: false
hide_table_of_contents: false
keywords:
  - report_plans
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

Creates, updates, deletes, gets or lists a <code>report_plans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="report_plans" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.report_plans" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_report_plan"
    values={[
        { label: 'describe_report_plan', value: 'describe_report_plan' },
        { label: 'list_report_plans', value: 'list_report_plans' }
    ]}
>
<TabItem value="describe_report_plan">

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
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that a report plan is created, in Unix format and Coordinated Universal Time (UTC). The value of CreationTime is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_status" /></td>
    <td><code>string</code></td>
    <td>The deployment status of a report plan. The statuses are: CREATE_IN_PROGRESS | UPDATE_IN_PROGRESS | DELETE_IN_PROGRESS | COMPLETED</td>
</tr>
<tr>
    <td><CopyableCode code="last_attempted_execution_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that a report job associated with this report plan last attempted to run, in Unix format and Coordinated Universal Time (UTC). The value of LastAttemptedExecutionTime is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="last_successful_execution_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that a report job associated with this report plan last successfully ran, in Unix format and Coordinated Universal Time (UTC). The value of LastSuccessfulExecutionTime is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.</td>
</tr>
<tr>
    <td><CopyableCode code="report_delivery_channel" /></td>
    <td><code>object</code></td>
    <td>Contains information from your report plan about where to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.</td>
</tr>
<tr>
    <td><CopyableCode code="report_plan_arn" /></td>
    <td><code>string</code></td>
    <td>An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.</td>
</tr>
<tr>
    <td><CopyableCode code="report_plan_description" /></td>
    <td><code>string</code></td>
    <td>An optional description of the report plan with a maximum 1,024 characters. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="report_plan_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the report plan. This name is between 1 and 256 characters starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_). (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;_a-zA-Z0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="report_setting" /></td>
    <td><code>object</code></td>
    <td>Contains detailed information about a report setting.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_report_plans">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="report_plans" /></td>
    <td><code>array</code></td>
    <td>The report plans with detailed information for each plan. This information includes the Amazon Resource Name (ARN), report plan name, description, settings, delivery channel, deployment status, creation time, and last times the report plan attempted to and successfully ran.</td>
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
    <td><a href="#describe_report_plan"><CopyableCode code="describe_report_plan" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-report_plan_name"><code>report_plan_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of all report plans for an Amazon Web Services account and Amazon Web Services Region.</td>
</tr>
<tr>
    <td><a href="#list_report_plans"><CopyableCode code="list_report_plans" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns a list of your report plans. For detailed information about a single report plan, use DescribeReportPlan.</td>
</tr>
<tr>
    <td><a href="#create_report_plan"><CopyableCode code="create_report_plan" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ReportPlanName"><code>ReportPlanName</code></a>, <a href="#parameter-ReportDeliveryChannel"><code>ReportDeliveryChannel</code></a>, <a href="#parameter-ReportSetting"><code>ReportSetting</code></a></td>
    <td></td>
    <td>Creates a report plan. A report plan is a document that contains information about the contents of the report and where Backup will deliver it. If you call CreateReportPlan with a plan that already exists, you receive an AlreadyExistsException exception.</td>
</tr>
<tr>
    <td><a href="#update_report_plan"><CopyableCode code="update_report_plan" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-report_plan_name"><code>report_plan_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the specified report plan.</td>
</tr>
<tr>
    <td><a href="#delete_report_plan"><CopyableCode code="delete_report_plan" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-report_plan_name"><code>report_plan_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the report plan specified by a report plan name.</td>
</tr>
<tr>
    <td><a href="#start_report_job"><CopyableCode code="start_report_job" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-report_plan_name"><code>report_plan_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Starts an on-demand report job for the specified report plan.</td>
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
<tr id="parameter-report_plan_name">
    <td><CopyableCode code="report_plan_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of a report plan.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_report_plan"
    values={[
        { label: 'describe_report_plan', value: 'describe_report_plan' },
        { label: 'list_report_plans', value: 'list_report_plans' }
    ]}
>
<TabItem value="describe_report_plan">

Returns a list of all report plans for an Amazon Web Services account and Amazon Web Services Region.

```sql
SELECT
creation_time,
deployment_status,
last_attempted_execution_time,
last_successful_execution_time,
report_delivery_channel,
report_plan_arn,
report_plan_description,
report_plan_name,
report_setting
FROM aws.backup.report_plans
WHERE report_plan_name = '{{ report_plan_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_report_plans">

Returns a list of your report plans. For detailed information about a single report plan, use DescribeReportPlan.

```sql
SELECT
next_token,
report_plans
FROM aws.backup.report_plans
WHERE region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_report_plan"
    values={[
        { label: 'create_report_plan', value: 'create_report_plan' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_report_plan">

Creates a report plan. A report plan is a document that contains information about the contents of the report and where Backup will deliver it. If you call CreateReportPlan with a plan that already exists, you receive an AlreadyExistsException exception.

```sql
INSERT INTO aws.backup.report_plans (
ReportPlanName,
ReportPlanDescription,
ReportDeliveryChannel,
ReportSetting,
ReportPlanTags,
IdempotencyToken,
region
)
SELECT 
'{{ ReportPlanName }}' /* required */,
'{{ ReportPlanDescription }}',
'{{ ReportDeliveryChannel }}' /* required */,
'{{ ReportSetting }}' /* required */,
'{{ ReportPlanTags }}',
'{{ IdempotencyToken }}',
'{{ region }}'
RETURNING
creation_time,
report_plan_arn,
report_plan_name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: report_plans
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the report_plans resource.
    - name: ReportPlanName
      value: "{{ ReportPlanName }}"
    - name: ReportPlanDescription
      value: "{{ ReportPlanDescription }}"
    - name: ReportDeliveryChannel
      description: |
        Contains information from your report plan about where to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.
      value:
        S3BucketName: "{{ S3BucketName }}"
        S3KeyPrefix: "{{ S3KeyPrefix }}"
        Formats:
          - "{{ Formats }}"
    - name: ReportSetting
      description: |
        Contains detailed information about a report setting.
      value:
        ReportTemplate: "{{ ReportTemplate }}"
        FrameworkArns:
          - "{{ FrameworkArns }}"
        NumberOfFrameworks: {{ NumberOfFrameworks }}
        Accounts:
          - "{{ Accounts }}"
        OrganizationUnits:
          - "{{ OrganizationUnits }}"
        Regions:
          - "{{ Regions }}"
    - name: ReportPlanTags
      value: "{{ ReportPlanTags }}"
    - name: IdempotencyToken
      value: "{{ IdempotencyToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_report_plan"
    values={[
        { label: 'update_report_plan', value: 'update_report_plan' }
    ]}
>
<TabItem value="update_report_plan">

Updates the specified report plan.

```sql
UPDATE aws.backup.report_plans
SET 
ReportPlanDescription = '{{ ReportPlanDescription }}',
ReportDeliveryChannel = '{{ ReportDeliveryChannel }}',
ReportSetting = '{{ ReportSetting }}',
IdempotencyToken = '{{ IdempotencyToken }}'
WHERE 
report_plan_name = '{{ report_plan_name }}' --required
AND region = '{{ region }}' --required
RETURNING
creation_time,
report_plan_arn,
report_plan_name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_report_plan"
    values={[
        { label: 'delete_report_plan', value: 'delete_report_plan' }
    ]}
>
<TabItem value="delete_report_plan">

Deletes the report plan specified by a report plan name.

```sql
DELETE FROM aws.backup.report_plans
WHERE report_plan_name = '{{ report_plan_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_report_job"
    values={[
        { label: 'start_report_job', value: 'start_report_job' }
    ]}
>
<TabItem value="start_report_job">

Starts an on-demand report job for the specified report plan.

```sql
EXEC aws.backup.report_plans.start_report_job 
@report_plan_name='{{ report_plan_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"IdempotencyToken": "{{ IdempotencyToken }}"
}'
;
```
</TabItem>
</Tabs>
