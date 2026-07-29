--- 
title: insights_metric_datas
hide_title: false
hide_table_of_contents: false
keywords:
  - insights_metric_datas
  - cloudtrail
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

Creates, updates, deletes, gets or lists an <code>insights_metric_datas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="insights_metric_datas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudtrail.insights_metric_datas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_insights_metric_data"
    values={[
        { label: 'list_insights_metric_data', value: 'list_insights_metric_data' }
    ]}
>
<TabItem value="list_insights_metric_data">

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
    <td><CopyableCode code="error_code" /></td>
    <td><code>string</code></td>
    <td>Only returned if InsightType parameter was set to ApiErrorRateInsight. If returning metrics for the ApiErrorRateInsight Insights type, this is the error to retrieve data for. For example, AccessDenied. (pattern: &lt;code&gt;^&#91;\w\d\s_.,\-:\&#91;\&#93;&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_name" /></td>
    <td><code>string</code></td>
    <td>The name of the event, typically the Amazon Web Services API on which unusual levels of activity were recorded. (pattern: &lt;code&gt;^&#91;A-Za-z0-9_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_source" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services service to which the request was made, such as iam.amazonaws.com or s3.amazonaws.com. (pattern: &lt;code&gt;^&#91;a-z0-9_-&#93;+\.amazonaws\.com$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="insight_type" /></td>
    <td><code>string</code></td>
    <td>The type of CloudTrail Insights event, which is either ApiCallRateInsight or ApiErrorRateInsight. The ApiCallRateInsight Insights type analyzes write-only management API calls that are aggregated per minute against a baseline API call volume. The ApiErrorRateInsight Insights type analyzes management API calls that result in error codes. (ApiCallRateInsight, ApiErrorRateInsight)</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>Only returned if the full results could not be returned in a single query. You can set the NextToken parameter in the next request to this value to continue retrieval.</td>
</tr>
<tr>
    <td><CopyableCode code="timestamps" /></td>
    <td><code>array</code></td>
    <td>List of timestamps at intervals corresponding to the specified time period.</td>
</tr>
<tr>
    <td><CopyableCode code="trail_arn" /></td>
    <td><code>string</code></td>
    <td>Specifies the ARN of the trail. This is only returned when Insights is enabled on a trail logging data events.</td>
</tr>
<tr>
    <td><CopyableCode code="values" /></td>
    <td><code>array</code></td>
    <td>List of values representing the API call rate or error rate at each timestamp. The number of values is equal to the number of timestamps.</td>
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
    <td><a href="#list_insights_metric_data"><CopyableCode code="list_insights_metric_data" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns Insights metrics data for trails that have enabled Insights. The request must include the EventSource, EventName, and InsightType parameters. If the InsightType is set to ApiErrorRateInsight, the request must also include the ErrorCode parameter. The following are the available time periods for ListInsightsMetricData. Each cutoff is inclusive. Data points with a period of 60 seconds (1-minute) are available for 15 days. Data points with a period of 300 seconds (5-minute) are available for 63 days. Data points with a period of 3600 seconds (1 hour) are available for 90 days. To use ListInsightsMetricData operation, you must have the following permissions: If ListInsightsMetricData is invoked with TrailName parameter, access to the ListInsightsMetricData API operation is linked to the cloudtrail:LookupEvents action and cloudtrail:ListInsightsData. To use this operation, you must have permissions to perform the cloudtrail:LookupEvents and cloudtrail:ListInsightsData action on the specific trail. If ListInsightsMetricData is invoked without TrailName parameter, access to the ListInsightsMetricData API operation is linked to the cloudtrail:LookupEvents action only. To use this operation, you must have permissions to perform the cloudtrail:LookupEvents action.</td>
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
    defaultValue="list_insights_metric_data"
    values={[
        { label: 'list_insights_metric_data', value: 'list_insights_metric_data' }
    ]}
>
<TabItem value="list_insights_metric_data">

Returns Insights metrics data for trails that have enabled Insights. The request must include the EventSource, EventName, and InsightType parameters. If the InsightType is set to ApiErrorRateInsight, the request must also include the ErrorCode parameter. The following are the available time periods for ListInsightsMetricData. Each cutoff is inclusive. Data points with a period of 60 seconds (1-minute) are available for 15 days. Data points with a period of 300 seconds (5-minute) are available for 63 days. Data points with a period of 3600 seconds (1 hour) are available for 90 days. To use ListInsightsMetricData operation, you must have the following permissions: If ListInsightsMetricData is invoked with TrailName parameter, access to the ListInsightsMetricData API operation is linked to the cloudtrail:LookupEvents action and cloudtrail:ListInsightsData. To use this operation, you must have permissions to perform the cloudtrail:LookupEvents and cloudtrail:ListInsightsData action on the specific trail. If ListInsightsMetricData is invoked without TrailName parameter, access to the ListInsightsMetricData API operation is linked to the cloudtrail:LookupEvents action only. To use this operation, you must have permissions to perform the cloudtrail:LookupEvents action.

```sql
SELECT
error_code,
event_name,
event_source,
insight_type,
next_token,
timestamps,
trail_arn,
values
FROM aws.cloudtrail.insights_metric_datas
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
