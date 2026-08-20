--- 
title: reports
hide_title: false
hide_table_of_contents: false
keywords:
  - reports
  - resiliencehubv2
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

Creates, updates, deletes, gets or lists a <code>reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.resiliencehubv2.reports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_reports"
    values={[
        { label: 'list_reports', value: 'list_reports' }
    ]}
>
<TabItem value="list_reports">

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
    <td><CopyableCode code="assessment_id" /></td>
    <td><code>string</code></td>
    <td>Present for FAILURE_MODE reports. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-5&#93;&#91;0-9a-f&#93;&#123;3&#125;-&#91;089ab&#93;&#91;0-9a-f&#93;&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the report was created.</td>
</tr>
<tr>
    <td><CopyableCode code="report_output" /></td>
    <td><code>object</code></td>
    <td>Present when status is SUCCEEDED or FAILED.</td>
</tr>
<tr>
    <td><CopyableCode code="report_type" /></td>
    <td><code>string</code></td>
    <td>The type of the generated report. (FAILURE_MODE, TESTING)</td>
</tr>
<tr>
    <td><CopyableCode code="service_arn" /></td>
    <td><code>string</code></td>
    <td>ARN identifier. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the report generation. (PENDING, SUCCEEDED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="test_run_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of a test run.</td>
</tr>
<tr>
    <td><CopyableCode code="test_template_arn" /></td>
    <td><code>string</code></td>
    <td>An ARN owned by the service. Accepts either a standard 12-digit account ID or the literal "aws" for AWS-managed resources, such as AWS-managed test templates. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;):(&#91;0-9&#93;&#123;12&#125;|aws):&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+.-&#93;&#123;0,1023&#125;&lt;/code&gt;)</td>
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
    <td><a href="#list_reports"><CopyableCode code="list_reports" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-serviceArn"><code>serviceArn</code></a>, <a href="#parameter-reportType"><code>reportType</code></a>, <a href="#parameter-testRunId"><code>testRunId</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>List reports for a service, or all reports owned by the account if serviceArn is not provided.</td>
</tr>
<tr>
    <td><a href="#create_report"><CopyableCode code="create_report" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-serviceArn"><code>serviceArn</code></a>, <a href="#parameter-reportType"><code>reportType</code></a></td>
    <td></td>
    <td>On-demand report creation. Idempotent — duplicate requests with same clientToken return existing result.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-reportType">
    <td><CopyableCode code="reportType" /></td>
    <td><code>string</code></td>
    <td>Filter reports by type.</td>
</tr>
<tr id="parameter-serviceArn">
    <td><CopyableCode code="serviceArn" /></td>
    <td><code>string</code></td>
    <td>Optional. If not provided, lists all reports owned by the account.</td>
</tr>
<tr id="parameter-testRunId">
    <td><CopyableCode code="testRunId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_reports"
    values={[
        { label: 'list_reports', value: 'list_reports' }
    ]}
>
<TabItem value="list_reports">

List reports for a service, or all reports owned by the account if serviceArn is not provided.

```sql
SELECT
assessment_id,
created_at,
report_output,
report_type,
service_arn,
status,
test_run_id,
test_template_arn
FROM aws.resiliencehubv2.reports
WHERE region = '{{ region }}' -- required
AND serviceArn = '{{ serviceArn }}'
AND reportType = '{{ reportType }}'
AND testRunId = '{{ testRunId }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_report"
    values={[
        { label: 'create_report', value: 'create_report' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_report">

On-demand report creation. Idempotent — duplicate requests with same clientToken return existing result.

```sql
INSERT INTO aws.resiliencehubv2.reports (
serviceArn,
reportType,
clientToken,
region
)
SELECT 
'{{ serviceArn }}' /* required */,
'{{ reportType }}' /* required */,
'{{ clientToken }}',
'{{ region }}'
RETURNING
report_generation_result
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: reports
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the reports resource.
    - name: serviceArn
      value: "{{ serviceArn }}"
      description: |
        ARN identifier.
    - name: reportType
      value: "{{ reportType }}"
      valid_values: ['FAILURE_MODE', 'TESTING']
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Idempotency token.
`}</CodeBlock>

</TabItem>
</Tabs>
