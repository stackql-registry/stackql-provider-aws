--- 
title: network_insights_analyses
hide_title: false
hide_table_of_contents: false
keywords:
  - network_insights_analyses
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

Creates, updates, deletes, gets or lists a <code>network_insights_analyses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_insights_analyses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.network_insights_analyses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_network_insights_analyses"
    values={[
        { label: 'describe_network_insights_analyses', value: 'describe_network_insights_analyses' }
    ]}
>
<TabItem value="describe_network_insights_analyses">

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
    <td><CopyableCode code="AdditionalAccounts" /></td>
    <td><code>string</code></td>
    <td>The member accounts that contain resources that the path can traverse.</td>
</tr>
<tr>
    <td><CopyableCode code="AlternatePathHints" /></td>
    <td><code>string</code></td>
    <td>Potential intermediate components.</td>
</tr>
<tr>
    <td><CopyableCode code="Explanations" /></td>
    <td><code>string</code></td>
    <td>The explanations. For more information, see Reachability Analyzer explanation codes.</td>
</tr>
<tr>
    <td><CopyableCode code="FilterInArns" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Names (ARN) of the resources that the path must traverse.</td>
</tr>
<tr>
    <td><CopyableCode code="FilterOutArns" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Names (ARN) of the resources that the path must ignore.</td>
</tr>
<tr>
    <td><CopyableCode code="ForwardPathComponents" /></td>
    <td><code>string</code></td>
    <td>The components in the path from source to destination.</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkInsightsAnalysisArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the network insights analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkInsightsAnalysisId" /></td>
    <td><code>string</code></td>
    <td>The ID of the network insights analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkInsightsPathId" /></td>
    <td><code>string</code></td>
    <td>The ID of the path.</td>
</tr>
<tr>
    <td><CopyableCode code="NetworkPathFound" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the destination is reachable from the source.</td>
</tr>
<tr>
    <td><CopyableCode code="ReturnPathComponents" /></td>
    <td><code>string</code></td>
    <td>The components in the path from destination to source.</td>
</tr>
<tr>
    <td><CopyableCode code="StartDate" /></td>
    <td><code>string</code></td>
    <td>The time the analysis started.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the network insights analysis.</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>The status message, if the status is failed.</td>
</tr>
<tr>
    <td><CopyableCode code="SuggestedAccounts" /></td>
    <td><code>string</code></td>
    <td>Potential intermediate accounts.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags.</td>
</tr>
<tr>
    <td><CopyableCode code="WarningMessage" /></td>
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
    <td><a href="#describe_network_insights_analyses"><CopyableCode code="describe_network_insights_analyses" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NetworkInsightsAnalysisId"><code>NetworkInsightsAnalysisId</code></a>, <a href="#parameter-NetworkInsightsPathId"><code>NetworkInsightsPathId</code></a>, <a href="#parameter-AnalysisStartTime"><code>AnalysisStartTime</code></a>, <a href="#parameter-AnalysisEndTime"><code>AnalysisEndTime</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Describes one or more of your network insights analyses.</td>
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
<tr id="parameter-AnalysisEndTime">
    <td><CopyableCode code="AnalysisEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the network insights analyses ended.</td>
</tr>
<tr id="parameter-AnalysisStartTime">
    <td><CopyableCode code="AnalysisStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the network insights analyses started.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. The following are the possible values: path-found - A Boolean value that indicates whether a feasible path is found. status - The status of the analysis (running | succeeded | failed).</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</td>
</tr>
<tr id="parameter-NetworkInsightsAnalysisId">
    <td><CopyableCode code="NetworkInsightsAnalysisId" /></td>
    <td><code>array</code></td>
    <td>The ID of the network insights analyses. You must specify either analysis IDs or a path ID.</td>
</tr>
<tr id="parameter-NetworkInsightsPathId">
    <td><CopyableCode code="NetworkInsightsPathId" /></td>
    <td><code>string</code></td>
    <td>The ID of the path. You must specify either a path ID or analysis IDs.</td>
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
    defaultValue="describe_network_insights_analyses"
    values={[
        { label: 'describe_network_insights_analyses', value: 'describe_network_insights_analyses' }
    ]}
>
<TabItem value="describe_network_insights_analyses">

Describes one or more of your network insights analyses.

```sql
SELECT
AdditionalAccounts,
AlternatePathHints,
Explanations,
FilterInArns,
FilterOutArns,
ForwardPathComponents,
NetworkInsightsAnalysisArn,
NetworkInsightsAnalysisId,
NetworkInsightsPathId,
NetworkPathFound,
ReturnPathComponents,
StartDate,
Status,
StatusMessage,
SuggestedAccounts,
Tags,
WarningMessage
FROM aws.ec2.network_insights_analyses
WHERE region = '{{ region }}' -- required
AND NetworkInsightsAnalysisId = '{{ NetworkInsightsAnalysisId }}'
AND NetworkInsightsPathId = '{{ NetworkInsightsPathId }}'
AND AnalysisStartTime = '{{ AnalysisStartTime }}'
AND AnalysisEndTime = '{{ AnalysisEndTime }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND DryRun = '{{ DryRun }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
