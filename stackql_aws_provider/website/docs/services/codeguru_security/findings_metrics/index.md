--- 
title: findings_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - findings_metrics
  - codeguru_security
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

Creates, updates, deletes, gets or lists a <code>findings_metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="findings_metrics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeguru_security.findings_metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_findings_metrics"
    values={[
        { label: 'list_findings_metrics', value: 'list_findings_metrics' }
    ]}
>
<TabItem value="list_findings_metrics">

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
    <td><CopyableCode code="closedFindings" /></td>
    <td><code>object</code></td>
    <td>The number of closed findings of each severity on the specified date.</td>
</tr>
<tr>
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date from which the findings metrics were retrieved.</td>
</tr>
<tr>
    <td><CopyableCode code="meanTimeToClose" /></td>
    <td><code>object</code></td>
    <td>The average time in days it takes to close findings of each severity as of a specified date.</td>
</tr>
<tr>
    <td><CopyableCode code="newFindings" /></td>
    <td><code>object</code></td>
    <td>The number of new findings of each severity on the specified date.</td>
</tr>
<tr>
    <td><CopyableCode code="openFindings" /></td>
    <td><code>object</code></td>
    <td>The number of open findings of each severity as of the specified date.</td>
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
    <td><a href="#list_findings_metrics"><CopyableCode code="list_findings_metrics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-startDate"><code>startDate</code></a>, <a href="#parameter-endDate"><code>endDate</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Returns metrics about all findings in an account within a specified time range.</td>
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
<tr id="parameter-endDate">
    <td><CopyableCode code="endDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end date of the interval which you want to retrieve metrics from. Round to the nearest day.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-startDate">
    <td><CopyableCode code="startDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start date of the interval which you want to retrieve metrics from. Rounds to the nearest day.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response. Use this parameter when paginating results. If additional results exist beyond the number you specify, the nextToken element is returned in the response. Use nextToken in a subsequent request to retrieve additional results. If not specified, returns 1000 results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request to continue listing results after the first page.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_findings_metrics"
    values={[
        { label: 'list_findings_metrics', value: 'list_findings_metrics' }
    ]}
>
<TabItem value="list_findings_metrics">

Returns metrics about all findings in an account within a specified time range.

```sql
SELECT
closedFindings,
date,
meanTimeToClose,
newFindings,
openFindings
FROM aws.codeguru_security.findings_metrics
WHERE startDate = '{{ startDate }}' -- required
AND endDate = '{{ endDate }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
