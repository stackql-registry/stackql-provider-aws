--- 
title: service_level_objective_budget_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - service_level_objective_budget_reports
  - application_signals
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

Creates, updates, deletes, gets or lists a <code>service_level_objective_budget_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_level_objective_budget_reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.application_signals.service_level_objective_budget_reports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_service_level_objective_budget_report"
    values={[
        { label: 'batch_get_service_level_objective_budget_report', value: 'batch_get_service_level_objective_budget_report' }
    ]}
>
<TabItem value="batch_get_service_level_objective_budget_report">

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
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>An array of structures, where each structure includes an error indicating that one of the requests in the array was not valid.</td>
</tr>
<tr>
    <td><CopyableCode code="reports" /></td>
    <td><code>array</code></td>
    <td>An array of structures, where each structure is one budget report.</td>
</tr>
<tr>
    <td><CopyableCode code="timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the report is for. It is expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC.</td>
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
    <td><a href="#batch_get_service_level_objective_budget_report"><CopyableCode code="batch_get_service_level_objective_budget_report" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use this operation to retrieve one or more service level objective (SLO) budget reports. An error budget is the amount of time or requests in an unhealthy state that your service can accumulate during an interval before your overall SLO budget health is breached and the SLO is considered to be unmet. For example, an SLO with a threshold of 99.95% and a monthly interval translates to an error budget of 21.9 minutes of downtime in a 30-day month. Budget reports include a health indicator, the attainment value, and remaining budget. For more information about SLO error budgets, see SLO concepts.</td>
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
    defaultValue="batch_get_service_level_objective_budget_report"
    values={[
        { label: 'batch_get_service_level_objective_budget_report', value: 'batch_get_service_level_objective_budget_report' }
    ]}
>
<TabItem value="batch_get_service_level_objective_budget_report">

Use this operation to retrieve one or more service level objective (SLO) budget reports. An error budget is the amount of time or requests in an unhealthy state that your service can accumulate during an interval before your overall SLO budget health is breached and the SLO is considered to be unmet. For example, an SLO with a threshold of 99.95% and a monthly interval translates to an error budget of 21.9 minutes of downtime in a 30-day month. Budget reports include a health indicator, the attainment value, and remaining budget. For more information about SLO error budgets, see SLO concepts.

```sql
SELECT
errors,
reports,
timestamp
FROM aws.application_signals.service_level_objective_budget_reports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
