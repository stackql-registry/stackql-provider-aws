--- 
title: network_insights_access_scope_analyses
hide_title: false
hide_table_of_contents: false
keywords:
  - network_insights_access_scope_analyses
  - ec2
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

Creates, updates, deletes, gets or lists a <code>network_insights_access_scope_analyses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_insights_access_scope_analyses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.network_insights_access_scope_analyses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_network_insights_access_scope_analyses"
    values={[
        { label: 'describe_network_insights_access_scope_analyses', value: 'describe_network_insights_access_scope_analyses' }
    ]}
>
<TabItem value="describe_network_insights_access_scope_analyses">

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
    <td><CopyableCode code="analyzed_eni_count" /></td>
    <td><code>integer</code></td>
    <td>The number of network interfaces analyzed.</td>
</tr>
<tr>
    <td><CopyableCode code="end_date" /></td>
    <td><code>string</code></td>
    <td>The analysis end date.</td>
</tr>
<tr>
    <td><CopyableCode code="findings_found" /></td>
    <td><code>string</code></td>
    <td>Indicates whether there are findings.</td>
</tr>
<tr>
    <td><CopyableCode code="network_insights_access_scope_analysis_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Network Access Scope analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="network_insights_access_scope_analysis_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Network Access Scope analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="network_insights_access_scope_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Network Access Scope.</td>
</tr>
<tr>
    <td><CopyableCode code="start_date" /></td>
    <td><code>string</code></td>
    <td>The analysis start date.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status.</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>The status message.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>string</code></td>
    <td>The tags.</td>
</tr>
<tr>
    <td><CopyableCode code="warning_message" /></td>
    <td><code>string</code></td>
    <td>The warning message.</td>
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
    <td><a href="#describe_network_insights_access_scope_analyses"><CopyableCode code="describe_network_insights_access_scope_analyses" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NetworkInsightsAccessScopeAnalysisId"><code>NetworkInsightsAccessScopeAnalysisId</code></a>, <a href="#parameter-NetworkInsightsAccessScopeId"><code>NetworkInsightsAccessScopeId</code></a>, <a href="#parameter-AnalysisStartTimeBegin"><code>AnalysisStartTimeBegin</code></a>, <a href="#parameter-AnalysisStartTimeEnd"><code>AnalysisStartTimeEnd</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Describes the specified Network Access Scope analyses.</td>
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
<tr id="parameter-AnalysisStartTimeBegin">
    <td><CopyableCode code="AnalysisStartTimeBegin" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filters the results based on the start time. The analysis must have started on or after this time.</td>
</tr>
<tr id="parameter-AnalysisStartTimeEnd">
    <td><CopyableCode code="AnalysisStartTimeEnd" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filters the results based on the start time. The analysis must have started on or before this time.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>There are no supported filters.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-NetworkInsightsAccessScopeAnalysisId">
    <td><CopyableCode code="NetworkInsightsAccessScopeAnalysisId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the Network Access Scope analyses.</td>
</tr>
<tr id="parameter-NetworkInsightsAccessScopeId">
    <td><CopyableCode code="NetworkInsightsAccessScopeId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Network Access Scope.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_network_insights_access_scope_analyses"
    values={[
        { label: 'describe_network_insights_access_scope_analyses', value: 'describe_network_insights_access_scope_analyses' }
    ]}
>
<TabItem value="describe_network_insights_access_scope_analyses">

Describes the specified Network Access Scope analyses.

```sql
SELECT
analyzed_eni_count,
end_date,
findings_found,
network_insights_access_scope_analysis_arn,
network_insights_access_scope_analysis_id,
network_insights_access_scope_id,
start_date,
status,
status_message,
tags,
warning_message
FROM aws.ec2.network_insights_access_scope_analyses
WHERE region = '{{ region }}' -- required
AND NetworkInsightsAccessScopeAnalysisId = '{{ NetworkInsightsAccessScopeAnalysisId }}'
AND NetworkInsightsAccessScopeId = '{{ NetworkInsightsAccessScopeId }}'
AND AnalysisStartTimeBegin = '{{ AnalysisStartTimeBegin }}'
AND AnalysisStartTimeEnd = '{{ AnalysisStartTimeEnd }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND DryRun = '{{ DryRun }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
