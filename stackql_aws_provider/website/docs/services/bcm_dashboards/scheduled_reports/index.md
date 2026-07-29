--- 
title: scheduled_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - scheduled_reports
  - bcm_dashboards
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

Creates, updates, deletes, gets or lists a <code>scheduled_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="scheduled_reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bcm_dashboards.scheduled_reports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_scheduled_report"
    values={[
        { label: 'get_scheduled_report', value: 'get_scheduled_report' },
        { label: 'list_scheduled_reports', value: 'list_scheduled_reports' }
    ]}
>
<TabItem value="get_scheduled_report">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the scheduled report. (pattern: &lt;code&gt;(?!.* &#123;2&#125;)&#91;a-zA-Z&#93;&#91;a-zA-Z0-9 _-&#93;&#123;0,48&#125;&#91;a-zA-Z0-9_-&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the scheduled report. (pattern: &lt;code&gt;arn:aws&#91;-a-z0-9&#93;*:bcm-dashboards::&#91;0-9&#93;&#123;12&#125;:scheduled-report/(\*|&#91;-a-z0-9&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the scheduled report was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dashboard_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the dashboard associated with the scheduled report. (pattern: &lt;code&gt;arn:aws&#91;-a-z0-9&#93;*:bcm-dashboards::&#91;0-9&#93;&#123;12&#125;:dashboard/(\*|&#91;-a-z0-9&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the scheduled report's purpose or contents. (pattern: &lt;code&gt;(?!.* &#123;2&#125;)&#91; a-zA-Z0-9.,!?;:@#$%&\-_/\\&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="health_status" /></td>
    <td><code>object</code></td>
    <td>The health status of the scheduled report at last refresh time.</td>
</tr>
<tr>
    <td><CopyableCode code="last_execution_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the most recent execution of the scheduled report.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_config" /></td>
    <td><code>object</code></td>
    <td>The schedule configuration that defines when and how often the report is generated.</td>
</tr>
<tr>
    <td><CopyableCode code="scheduled_report_execution_role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role that the scheduled report uses to execute. Amazon Web Services Billing and Cost Management Dashboards will assume this IAM role while executing the scheduled report. (pattern: &lt;code&gt;arn:aws&#91;-a-z0-9&#93;*:iam::&#91;0-9&#93;&#123;12&#125;:role/&#91;a-zA-Z0-9+=,.@_/-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the scheduled report was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="widget_date_range_override" /></td>
    <td><code>object</code></td>
    <td>Defines a time period with explicit start and end times for data queries.</td>
</tr>
<tr>
    <td><CopyableCode code="widget_ids" /></td>
    <td><code>array</code></td>
    <td>The list of widget identifiers included in the scheduled report.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_scheduled_reports">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the scheduled report. (pattern: &lt;code&gt;(?!.* &#123;2&#125;)&#91;a-zA-Z&#93;&#91;a-zA-Z0-9 _-&#93;&#123;0,48&#125;&#91;a-zA-Z0-9_-&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the scheduled report. (pattern: &lt;code&gt;arn:aws&#91;-a-z0-9&#93;*:bcm-dashboards::&#91;0-9&#93;&#123;12&#125;:scheduled-report/(\*|&#91;-a-z0-9&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dashboard_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the dashboard associated with the scheduled report. (pattern: &lt;code&gt;arn:aws&#91;-a-z0-9&#93;*:bcm-dashboards::&#91;0-9&#93;&#123;12&#125;:dashboard/(\*|&#91;-a-z0-9&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="health_status" /></td>
    <td><code>object</code></td>
    <td>The health status of the scheduled report as of its last refresh time.</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_expression" /></td>
    <td><code>string</code></td>
    <td>The schedule expression that defines when the report runs. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_expression_time_zone" /></td>
    <td><code>string</code></td>
    <td>The time zone for the schedule expression, for example, UTC. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the schedule: ENABLED or DISABLED. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="widget_ids" /></td>
    <td><code>array</code></td>
    <td>The list of widget identifiers included in the scheduled report.</td>
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
    <td><a href="#get_scheduled_report"><CopyableCode code="get_scheduled_report" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the configuration and metadata of a specified scheduled report.</td>
</tr>
<tr>
    <td><a href="#list_scheduled_reports"><CopyableCode code="list_scheduled_reports" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of scheduled reports in your account.</td>
</tr>
<tr>
    <td><a href="#create_scheduled_report"><CopyableCode code="create_scheduled_report" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-scheduledReport"><code>scheduledReport</code></a></td>
    <td></td>
    <td>Creates a new scheduled report for a dashboard. A scheduled report automatically generates and delivers dashboard snapshots on a recurring schedule. Reports are delivered within 15 minutes of the scheduled delivery time.</td>
</tr>
<tr>
    <td><a href="#update_scheduled_report"><CopyableCode code="update_scheduled_report" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a></td>
    <td></td>
    <td>Updates an existing scheduled report's properties, including its name, description, schedule configuration, and widget settings. Only the parameters included in the request are updated; all other properties remain unchanged.</td>
</tr>
<tr>
    <td><a href="#delete_scheduled_report"><CopyableCode code="delete_scheduled_report" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specified scheduled report. This is an irreversible operation.</td>
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
    defaultValue="get_scheduled_report"
    values={[
        { label: 'get_scheduled_report', value: 'get_scheduled_report' },
        { label: 'list_scheduled_reports', value: 'list_scheduled_reports' }
    ]}
>
<TabItem value="get_scheduled_report">

Retrieves the configuration and metadata of a specified scheduled report.

```sql
SELECT
name,
arn,
created_at,
dashboard_arn,
description,
health_status,
last_execution_at,
schedule_config,
scheduled_report_execution_role_arn,
updated_at,
widget_date_range_override,
widget_ids
FROM aws.bcm_dashboards.scheduled_reports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_scheduled_reports">

Returns a list of scheduled reports in your account.

```sql
SELECT
name,
arn,
dashboard_arn,
health_status,
schedule_expression,
schedule_expression_time_zone,
state,
widget_ids
FROM aws.bcm_dashboards.scheduled_reports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_scheduled_report"
    values={[
        { label: 'create_scheduled_report', value: 'create_scheduled_report' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_scheduled_report">

Creates a new scheduled report for a dashboard. A scheduled report automatically generates and delivers dashboard snapshots on a recurring schedule. Reports are delivered within 15 minutes of the scheduled delivery time.

```sql
INSERT INTO aws.bcm_dashboards.scheduled_reports (
scheduledReport,
resourceTags,
clientToken,
region
)
SELECT 
'{{ scheduledReport }}' /* required */,
'{{ resourceTags }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: scheduled_reports
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the scheduled_reports resource.
    - name: scheduledReport
      description: |
        The configuration for the scheduled report, including the dashboard to report on, the schedule, and the execution role that the service will use to generate the dashboard snapshot.
      value:
        name: "{{ name }}"
        dashboardArn: "{{ dashboardArn }}"
        scheduledReportExecutionRoleArn: "{{ scheduledReportExecutionRoleArn }}"
        scheduleConfig:
          scheduleExpression: "{{ scheduleExpression }}"
          scheduleExpressionTimeZone: "{{ scheduleExpressionTimeZone }}"
          schedulePeriod:
            startTime: "{{ startTime }}"
            endTime: "{{ endTime }}"
          state: "{{ state }}"
        description: "{{ description }}"
        widgetIds:
          - "{{ widgetIds }}"
        widgetDateRangeOverride:
          startTime:
            type_: "{{ type_ }}"
            value: "{{ value }}"
          endTime:
            type_: "{{ type_ }}"
            value: "{{ value }}"
    - name: resourceTags
      description: |
        The tags to apply to the scheduled report resource for organization and management.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_scheduled_report"
    values={[
        { label: 'update_scheduled_report', value: 'update_scheduled_report' }
    ]}
>
<TabItem value="update_scheduled_report">

Updates an existing scheduled report's properties, including its name, description, schedule configuration, and widget settings. Only the parameters included in the request are updated; all other properties remain unchanged.

```sql
UPDATE aws.bcm_dashboards.scheduled_reports
SET 
arn = '{{ arn }}',
name = '{{ name }}',
description = '{{ description }}',
dashboardArn = '{{ dashboardArn }}',
scheduledReportExecutionRoleArn = '{{ scheduledReportExecutionRoleArn }}',
scheduleConfig = '{{ scheduleConfig }}',
widgetIds = '{{ widgetIds }}',
widgetDateRangeOverride = '{{ widgetDateRangeOverride }}',
clearWidgetIds = {{ clearWidgetIds }},
clearWidgetDateRangeOverride = {{ clearWidgetDateRangeOverride }}
WHERE 
region = '{{ region }}' --required
AND arn = '{{ arn }}' --required
RETURNING
arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_scheduled_report"
    values={[
        { label: 'delete_scheduled_report', value: 'delete_scheduled_report' }
    ]}
>
<TabItem value="delete_scheduled_report">

Deletes a specified scheduled report. This is an irreversible operation.

```sql
DELETE FROM aws.bcm_dashboards.scheduled_reports
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
