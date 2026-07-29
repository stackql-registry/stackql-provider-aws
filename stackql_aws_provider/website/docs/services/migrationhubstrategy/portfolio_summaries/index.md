--- 
title: portfolio_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - portfolio_summaries
  - migrationhubstrategy
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

Creates, updates, deletes, gets or lists a <code>portfolio_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="portfolio_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.migrationhubstrategy.portfolio_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_portfolio_summary"
    values={[
        { label: 'get_portfolio_summary', value: 'get_portfolio_summary' }
    ]}
>
<TabItem value="get_portfolio_summary">

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
    <td><CopyableCode code="antipattern_report_s3_object" /></td>
    <td><code>object</code></td>
    <td>Contains the S3 bucket name and the Amazon S3 key name.</td>
</tr>
<tr>
    <td><CopyableCode code="antipattern_report_status" /></td>
    <td><code>string</code></td>
    <td>The status of the anti-pattern report. (FAILED, IN_PROGRESS, SUCCESS)</td>
</tr>
<tr>
    <td><CopyableCode code="antipattern_report_status_message" /></td>
    <td><code>string</code></td>
    <td>The status message of the anti-pattern report. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_analyzed_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the assessment was performed.</td>
</tr>
<tr>
    <td><CopyableCode code="list_antipattern_severity_summary" /></td>
    <td><code>array</code></td>
    <td>List of AntipatternSeveritySummary.</td>
</tr>
<tr>
    <td><CopyableCode code="list_application_component_status_summary" /></td>
    <td><code>array</code></td>
    <td>List of status summaries of the analyzed application components.</td>
</tr>
<tr>
    <td><CopyableCode code="list_application_component_strategy_summary" /></td>
    <td><code>array</code></td>
    <td>List of ApplicationComponentStrategySummary.</td>
</tr>
<tr>
    <td><CopyableCode code="list_application_component_summary" /></td>
    <td><code>array</code></td>
    <td>List of ApplicationComponentSummary.</td>
</tr>
<tr>
    <td><CopyableCode code="list_server_status_summary" /></td>
    <td><code>array</code></td>
    <td>List of status summaries of the analyzed servers.</td>
</tr>
<tr>
    <td><CopyableCode code="list_server_strategy_summary" /></td>
    <td><code>array</code></td>
    <td>List of ServerStrategySummary.</td>
</tr>
<tr>
    <td><CopyableCode code="list_server_summary" /></td>
    <td><code>array</code></td>
    <td>List of ServerSummary.</td>
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
    <td><a href="#get_portfolio_summary"><CopyableCode code="get_portfolio_summary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves overall summary including the number of servers to rehost and the overall number of anti-patterns.</td>
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
    defaultValue="get_portfolio_summary"
    values={[
        { label: 'get_portfolio_summary', value: 'get_portfolio_summary' }
    ]}
>
<TabItem value="get_portfolio_summary">

Retrieves overall summary including the number of servers to rehost and the overall number of anti-patterns.

```sql
SELECT
antipattern_report_s3_object,
antipattern_report_status,
antipattern_report_status_message,
last_analyzed_timestamp,
list_antipattern_severity_summary,
list_application_component_status_summary,
list_application_component_strategy_summary,
list_application_component_summary,
list_server_status_summary,
list_server_strategy_summary,
list_server_summary
FROM aws.migrationhubstrategy.portfolio_summaries
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
