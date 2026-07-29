--- 
title: domain_statistics_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_statistics_reports
  - pinpoint_email
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

Creates, updates, deletes, gets or lists a <code>domain_statistics_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domain_statistics_reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_email.domain_statistics_reports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_domain_statistics_report"
    values={[
        { label: 'get_domain_statistics_report', value: 'get_domain_statistics_report' }
    ]}
>
<TabItem value="get_domain_statistics_report">

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
    <td><CopyableCode code="daily_volumes" /></td>
    <td><code>array</code></td>
    <td>An object that contains deliverability metrics for the domain that you specified. This object contains data for each day, starting on the StartDate and ending on the EndDate.</td>
</tr>
<tr>
    <td><CopyableCode code="overall_volume" /></td>
    <td><code>object</code></td>
    <td>An object that contains deliverability metrics for the domain that you specified. The data in this object is a summary of all of the data that was collected from the StartDate to the EndDate.</td>
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
    <td><a href="#get_domain_statistics_report"><CopyableCode code="get_domain_statistics_report" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-StartDate"><code>StartDate</code></a>, <a href="#parameter-EndDate"><code>EndDate</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve inbox placement and engagement rates for the domains that you use to send email.</td>
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
<tr id="parameter-EndDate">
    <td><CopyableCode code="EndDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last day (in Unix time) that you want to obtain domain deliverability metrics for. The EndDate that you specify has to be less than or equal to 30 days after the StartDate.</td>
</tr>
<tr id="parameter-StartDate">
    <td><CopyableCode code="StartDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The first day (in Unix time) that you want to obtain domain deliverability metrics for.</td>
</tr>
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain that you want to obtain deliverability metrics for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_domain_statistics_report"
    values={[
        { label: 'get_domain_statistics_report', value: 'get_domain_statistics_report' }
    ]}
>
<TabItem value="get_domain_statistics_report">

Retrieve inbox placement and engagement rates for the domains that you use to send email.

```sql
SELECT
daily_volumes,
overall_volume
FROM aws.pinpoint_email.domain_statistics_reports
WHERE domain = '{{ domain }}' -- required
AND StartDate = '{{ StartDate }}' -- required
AND EndDate = '{{ EndDate }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
