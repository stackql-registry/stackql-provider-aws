--- 
title: audit_findings
hide_title: false
hide_table_of_contents: false
keywords:
  - audit_findings
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

Creates, updates, deletes, gets or lists an <code>audit_findings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="audit_findings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.application_signals.audit_findings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_audit_findings"
    values={[
        { label: 'list_audit_findings', value: 'list_audit_findings' }
    ]}
>
<TabItem value="list_audit_findings">

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
    <td><CopyableCode code="audit_findings" /></td>
    <td><code>array</code></td>
    <td>An array of structures, where each structure contains information about one audit finding, including the auditor results, severity, and associated metric and dependency graphs.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end of the time period that the returned audit findings apply to. When used in a raw HTTP Query API, it is formatted as epoch time in seconds. For example, 1698778057</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>Include this value in your next use of this API to get the next set of audit findings.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start of the time period that the returned audit findings apply to. When used in a raw HTTP Query API, it is formatted as epoch time in seconds. For example, 1698778057</td>
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
    <td><a href="#list_audit_findings"><CopyableCode code="list_audit_findings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-StartTime"><code>StartTime</code></a>, <a href="#parameter-EndTime"><code>EndTime</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of audit findings that provide automated analysis of service behavior and root cause analysis. These findings help identify the most significant observations about your services, including performance issues, anomalies, and potential problems. The findings are generated using heuristic algorithms based on established troubleshooting patterns.</td>
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
<tr id="parameter-EndTime">
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end of the time period to retrieve audit findings for. When used in a raw HTTP Query API, it is formatted as epoch time in seconds. For example, 1698778057</td>
</tr>
<tr id="parameter-StartTime">
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start of the time period to retrieve audit findings for. When used in a raw HTTP Query API, it is formatted as epoch time in seconds. For example, 1698778057</td>
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
    defaultValue="list_audit_findings"
    values={[
        { label: 'list_audit_findings', value: 'list_audit_findings' }
    ]}
>
<TabItem value="list_audit_findings">

Returns a list of audit findings that provide automated analysis of service behavior and root cause analysis. These findings help identify the most significant observations about your services, including performance issues, anomalies, and potential problems. The findings are generated using heuristic algorithms based on established troubleshooting patterns.

```sql
SELECT
audit_findings,
end_time,
next_token,
start_time
FROM aws.application_signals.audit_findings
WHERE StartTime = '{{ StartTime }}' -- required
AND EndTime = '{{ EndTime }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
