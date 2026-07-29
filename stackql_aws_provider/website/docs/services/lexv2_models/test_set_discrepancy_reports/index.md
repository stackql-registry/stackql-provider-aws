--- 
title: test_set_discrepancy_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - test_set_discrepancy_reports
  - lexv2_models
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

Creates, updates, deletes, gets or lists a <code>test_set_discrepancy_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="test_set_discrepancy_reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lexv2_models.test_set_discrepancy_reports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_test_set_discrepancy_report"
    values={[
        { label: 'describe_test_set_discrepancy_report', value: 'describe_test_set_discrepancy_report' }
    ]}
>
<TabItem value="describe_test_set_discrepancy_report">

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
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time and date of creation for the test set discrepancy report.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reasons" /></td>
    <td><code>array</code></td>
    <td>The failure report for the test set discrepancy report generation action.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_data_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time of the last update for the test set discrepancy report.</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>object</code></td>
    <td>Contains information about the resource used for the test set discrepancy report.</td>
</tr>
<tr>
    <td><CopyableCode code="test_set_discrepancy_raw_output_url" /></td>
    <td><code>string</code></td>
    <td>Pre-signed Amazon S3 URL to download the test set discrepancy report.</td>
</tr>
<tr>
    <td><CopyableCode code="test_set_discrepancy_report_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the test set discrepancy report to describe. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="test_set_discrepancy_report_status" /></td>
    <td><code>string</code></td>
    <td>The status for the test set discrepancy report. (InProgress, Completed, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="test_set_discrepancy_top_errors" /></td>
    <td><code>object</code></td>
    <td>The top 200 error results from the test set discrepancy report.</td>
</tr>
<tr>
    <td><CopyableCode code="test_set_id" /></td>
    <td><code>string</code></td>
    <td>The test set Id for the test set discrepancy report. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#describe_test_set_discrepancy_report"><CopyableCode code="describe_test_set_discrepancy_report" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-test_set_discrepancy_report_id"><code>test_set_discrepancy_report_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets metadata information about the test set discrepancy report.</td>
</tr>
<tr>
    <td><a href="#create_test_set_discrepancy_report"><CopyableCode code="create_test_set_discrepancy_report" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-test_set_id"><code>test_set_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-target"><code>target</code></a></td>
    <td></td>
    <td>Create a report that describes the differences between the bot and the test set.</td>
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
<tr id="parameter-test_set_discrepancy_report_id">
    <td><CopyableCode code="test_set_discrepancy_report_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the test set discrepancy report.</td>
</tr>
<tr id="parameter-test_set_id">
    <td><CopyableCode code="test_set_id" /></td>
    <td><code>string</code></td>
    <td>The test set Id for the test set discrepancy report.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_test_set_discrepancy_report"
    values={[
        { label: 'describe_test_set_discrepancy_report', value: 'describe_test_set_discrepancy_report' }
    ]}
>
<TabItem value="describe_test_set_discrepancy_report">

Gets metadata information about the test set discrepancy report.

```sql
SELECT
creation_date_time,
failure_reasons,
last_updated_data_time,
target,
test_set_discrepancy_raw_output_url,
test_set_discrepancy_report_id,
test_set_discrepancy_report_status,
test_set_discrepancy_top_errors,
test_set_id
FROM aws.lexv2_models.test_set_discrepancy_reports
WHERE test_set_discrepancy_report_id = '{{ test_set_discrepancy_report_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_test_set_discrepancy_report"
    values={[
        { label: 'create_test_set_discrepancy_report', value: 'create_test_set_discrepancy_report' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_test_set_discrepancy_report">

Create a report that describes the differences between the bot and the test set.

```sql
INSERT INTO aws.lexv2_models.test_set_discrepancy_reports (
target,
test_set_id,
region
)
SELECT 
'{{ target }}' /* required */,
'{{ test_set_id }}',
'{{ region }}'
RETURNING
creation_date_time,
target,
test_set_discrepancy_report_id,
test_set_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: test_set_discrepancy_reports
  props:
    - name: test_set_id
      value: "{{ test_set_id }}"
      description: Required parameter for the test_set_discrepancy_reports resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the test_set_discrepancy_reports resource.
    - name: target
      description: |
        Contains information about the resource used for the test set discrepancy report.
      value:
        botAliasTarget:
          botId: "{{ botId }}"
          botAliasId: "{{ botAliasId }}"
          localeId: "{{ localeId }}"
`}</CodeBlock>

</TabItem>
</Tabs>
