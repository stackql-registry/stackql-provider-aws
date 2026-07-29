--- 
title: account_usages
hide_title: false
hide_table_of_contents: false
keywords:
  - account_usages
  - devops_agent
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

Creates, updates, deletes, gets or lists an <code>account_usages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_usages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devops_agent.account_usages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_account_usage"
    values={[
        { label: 'get_account_usage', value: 'get_account_usage' }
    ]}
>
<TabItem value="get_account_usage">

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
    <td><CopyableCode code="monthly_account_evaluation_hours" /></td>
    <td><code>object</code></td>
    <td>Monthly evaluation hours usage and limit for an account</td>
</tr>
<tr>
    <td><CopyableCode code="monthly_account_investigation_hours" /></td>
    <td><code>object</code></td>
    <td>Monthly investigation hours usage and limit for an account</td>
</tr>
<tr>
    <td><CopyableCode code="monthly_account_on_demand_hours" /></td>
    <td><code>object</code></td>
    <td>Monthly on-demand hours usage and limit for an account</td>
</tr>
<tr>
    <td><CopyableCode code="monthly_account_system_learning_hours" /></td>
    <td><code>object</code></td>
    <td>Monthly system learning hours usage and limit for an account</td>
</tr>
<tr>
    <td><CopyableCode code="usage_period_end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end time of the usage tracking period</td>
</tr>
<tr>
    <td><CopyableCode code="usage_period_start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of the usage tracking period</td>
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
    <td><a href="#get_account_usage"><CopyableCode code="get_account_usage" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves monthly account usage metrics and limits for the AWS account.</td>
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
    defaultValue="get_account_usage"
    values={[
        { label: 'get_account_usage', value: 'get_account_usage' }
    ]}
>
<TabItem value="get_account_usage">

Retrieves monthly account usage metrics and limits for the AWS account.

```sql
SELECT
monthly_account_evaluation_hours,
monthly_account_investigation_hours,
monthly_account_on_demand_hours,
monthly_account_system_learning_hours,
usage_period_end_time,
usage_period_start_time
FROM aws.devops_agent.account_usages
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
