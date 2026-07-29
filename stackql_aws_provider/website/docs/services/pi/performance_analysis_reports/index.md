--- 
title: performance_analysis_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - performance_analysis_reports
  - pi
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

Creates, updates, deletes, gets or lists a <code>performance_analysis_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="performance_analysis_reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pi.performance_analysis_reports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_performance_analysis_report"
    values={[
        { label: 'get_performance_analysis_report', value: 'get_performance_analysis_report' },
        { label: 'list_performance_analysis_reports', value: 'list_performance_analysis_reports' }
    ]}
>
<TabItem value="get_performance_analysis_report">

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
    <td><CopyableCode code="analysis_report_id" /></td>
    <td><code>string</code></td>
    <td>The name of the analysis report. (pattern: &lt;code&gt;report-&#91;0-9a-f&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time you created the analysis report.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The analysis end time in the report.</td>
</tr>
<tr>
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the analysis report. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="insights" /></td>
    <td><code>array</code></td>
    <td>The list of identified insights in the analysis report.</td>
</tr>
<tr>
    <td><CopyableCode code="service_type" /></td>
    <td><code>string</code></td>
    <td>List the tags for the Amazon Web Services service for which Performance Insights returns metrics. Valid values are as follows: RDS DOCDB (RDS, DOCDB)</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The analysis start time in the report.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the created analysis report. (RUNNING, SUCCEEDED, FAILED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_performance_analysis_reports">

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
    <td><CopyableCode code="analysis_reports" /></td>
    <td><code>array</code></td>
    <td>List of reports including the report identifier, start and end time, creation time, and status.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the token, up to the value specified by MaxResults. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_=-&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#get_performance_analysis_report"><CopyableCode code="get_performance_analysis_report" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the report including the report ID, status, time details, and the insights with recommendations. The report status can be RUNNING, SUCCEEDED, or FAILED. The insights include the description and recommendation fields.</td>
</tr>
<tr>
    <td><a href="#list_performance_analysis_reports"><CopyableCode code="list_performance_analysis_reports" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the analysis reports created for the DB instance. The reports are sorted based on the start time of each report.</td>
</tr>
<tr>
    <td><a href="#create_performance_analysis_report"><CopyableCode code="create_performance_analysis_report" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServiceType"><code>ServiceType</code></a>, <a href="#parameter-Identifier"><code>Identifier</code></a>, <a href="#parameter-StartTime"><code>StartTime</code></a>, <a href="#parameter-EndTime"><code>EndTime</code></a></td>
    <td></td>
    <td>Creates a new performance analysis report for a specific time period for the DB instance.</td>
</tr>
<tr>
    <td><a href="#delete_performance_analysis_report"><CopyableCode code="delete_performance_analysis_report" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a performance analysis report.</td>
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
    defaultValue="get_performance_analysis_report"
    values={[
        { label: 'get_performance_analysis_report', value: 'get_performance_analysis_report' },
        { label: 'list_performance_analysis_reports', value: 'list_performance_analysis_reports' }
    ]}
>
<TabItem value="get_performance_analysis_report">

Retrieves the report including the report ID, status, time details, and the insights with recommendations. The report status can be RUNNING, SUCCEEDED, or FAILED. The insights include the description and recommendation fields.

```sql
SELECT
analysis_report_id,
create_time,
end_time,
identifier,
insights,
service_type,
start_time,
status
FROM aws.pi.performance_analysis_reports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_performance_analysis_reports">

Lists all the analysis reports created for the DB instance. The reports are sorted based on the start time of each report.

```sql
SELECT
analysis_reports,
next_token
FROM aws.pi.performance_analysis_reports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_performance_analysis_report"
    values={[
        { label: 'create_performance_analysis_report', value: 'create_performance_analysis_report' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_performance_analysis_report">

Creates a new performance analysis report for a specific time period for the DB instance.

```sql
INSERT INTO aws.pi.performance_analysis_reports (
ServiceType,
Identifier,
StartTime,
EndTime,
Tags,
region
)
SELECT 
'{{ ServiceType }}' /* required */,
'{{ Identifier }}' /* required */,
'{{ StartTime }}' /* required */,
'{{ EndTime }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
analysis_report_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: performance_analysis_reports
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the performance_analysis_reports resource.
    - name: ServiceType
      value: "{{ ServiceType }}"
      description: |
        The Amazon Web Services service for which Performance Insights will return metrics. Valid value is RDS.
      valid_values: ['RDS', 'DOCDB']
    - name: Identifier
      value: "{{ Identifier }}"
      description: |
        An immutable, Amazon Web Services Region-unique identifier for a data source. Performance Insights gathers metrics from this data source. To use an Amazon RDS instance as a data source, you specify its DbiResourceId value. For example, specify db-ADECBTYHKTSAUMUZQYPDS2GW4A.
    - name: StartTime
      value: "{{ StartTime }}"
      description: |
        The start time defined for the analysis report.
    - name: EndTime
      value: "{{ EndTime }}"
      description: |
        The end time defined for the analysis report.
    - name: Tags
      description: |
        The metadata assigned to the analysis report consisting of a key-value pair.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_performance_analysis_report"
    values={[
        { label: 'delete_performance_analysis_report', value: 'delete_performance_analysis_report' }
    ]}
>
<TabItem value="delete_performance_analysis_report">

Deletes a performance analysis report.

```sql
DELETE FROM aws.pi.performance_analysis_reports
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
