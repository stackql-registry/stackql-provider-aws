--- 
title: billing_group_cost_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - billing_group_cost_reports
  - billingconductor
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

Creates, updates, deletes, gets or lists a <code>billing_group_cost_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="billing_group_cost_reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.billingconductor.billing_group_cost_reports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_billing_group_cost_report"
    values={[
        { label: 'get_billing_group_cost_report', value: 'get_billing_group_cost_report' }
    ]}
>
<TabItem value="get_billing_group_cost_report">

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
    <td><CopyableCode code="billing_group_cost_report_results" /></td>
    <td><code>array</code></td>
    <td>The list of margin summary reports.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The pagination token used on subsequent calls to get reports.</td>
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
    <td><a href="#get_billing_group_cost_report"><CopyableCode code="get_billing_group_cost_report" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the margin summary report, which includes the Amazon Web Services cost and charged amount (pro forma cost) by Amazon Web Services service for a specific billing group.</td>
</tr>
<tr>
    <td><a href="#list_billing_group_cost_reports"><CopyableCode code="list_billing_group_cost_reports" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>A paginated call to retrieve a summary report of actual Amazon Web Services charges and the calculated Amazon Web Services charges based on the associated pricing plan of a billing group.</td>
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
    defaultValue="get_billing_group_cost_report"
    values={[
        { label: 'get_billing_group_cost_report', value: 'get_billing_group_cost_report' }
    ]}
>
<TabItem value="get_billing_group_cost_report">

Retrieves the margin summary report, which includes the Amazon Web Services cost and charged amount (pro forma cost) by Amazon Web Services service for a specific billing group.

```sql
SELECT
billing_group_cost_report_results,
next_token
FROM aws.billingconductor.billing_group_cost_reports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_billing_group_cost_reports"
    values={[
        { label: 'list_billing_group_cost_reports', value: 'list_billing_group_cost_reports' }
    ]}
>
<TabItem value="list_billing_group_cost_reports">

A paginated call to retrieve a summary report of actual Amazon Web Services charges and the calculated Amazon Web Services charges based on the associated pricing plan of a billing group.

```sql
EXEC aws.billingconductor.billing_group_cost_reports.list_billing_group_cost_reports 
@region='{{ region }}' --required 
@@json=
'{
"BillingPeriod": "{{ BillingPeriod }}", 
"MaxResults": {{ MaxResults }}, 
"NextToken": "{{ NextToken }}", 
"Filters": "{{ Filters }}"
}'
;
```
</TabItem>
</Tabs>
