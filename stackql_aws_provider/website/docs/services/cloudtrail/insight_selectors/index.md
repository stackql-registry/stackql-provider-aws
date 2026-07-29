--- 
title: insight_selectors
hide_title: false
hide_table_of_contents: false
keywords:
  - insight_selectors
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

Creates, updates, deletes, gets or lists an <code>insight_selectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="insight_selectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudtrail.insight_selectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_insight_selectors"
    values={[
        { label: 'get_insight_selectors', value: 'get_insight_selectors' }
    ]}
>
<TabItem value="get_insight_selectors">

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
    <td><CopyableCode code="event_data_store_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the source event data store that enabled Insights events. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9._/\-:&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="insight_selectors" /></td>
    <td><code>array</code></td>
    <td>Contains the Insights types that are enabled on a trail or event data store. It also specifies the event categories on which a particular Insight type is enabled. ApiCallRateInsight and ApiErrorRateInsight are valid Insight types.The EventCategory field can specify Management or Data events or both. For event data store, you can log Insights for management events only.</td>
</tr>
<tr>
    <td><CopyableCode code="insights_destination" /></td>
    <td><code>string</code></td>
    <td>The ARN of the destination event data store that logs Insights events. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9._/\-:&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="trail_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a trail for which you want to get Insights selectors.</td>
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
    <td><a href="#get_insight_selectors"><CopyableCode code="get_insight_selectors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the settings for the Insights event selectors that you configured for your trail or event data store. GetInsightSelectors shows if CloudTrail Insights logging is enabled and which Insights types are configured with corresponding event categories. If you run GetInsightSelectors on a trail or event data store that does not have Insights events enabled, the operation throws the exception InsightNotEnabledException Specify either the EventDataStore parameter to get Insights event selectors for an event data store, or the TrailName parameter to the get Insights event selectors for a trail. You cannot specify these parameters together. For more information, see Working with CloudTrail Insights in the CloudTrail User Guide.</td>
</tr>
<tr>
    <td><a href="#put_insight_selectors"><CopyableCode code="put_insight_selectors" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InsightSelectors"><code>InsightSelectors</code></a></td>
    <td></td>
    <td>Lets you enable Insights event logging on specific event categories by specifying the Insights selectors that you want to enable on an existing trail or event data store. You also use PutInsightSelectors to turn off Insights event logging, by passing an empty list of Insights types. The valid Insights event types are ApiErrorRateInsight and ApiCallRateInsight, and valid EventCategories are Management and Data. Insights on data events are not supported on event data stores. For event data stores, you can only enable Insights on management events. To enable Insights on an event data store, you must specify the ARNs (or ID suffix of the ARNs) for the source event data store (EventDataStore) and the destination event data store (InsightsDestination). The source event data store logs management events and enables Insights. The destination event data store logs Insights events based upon the management event activity of the source event data store. The source and destination event data stores must belong to the same Amazon Web Services account. To log Insights events for a trail, you must specify the name (TrailName) of the CloudTrail trail for which you want to change or add Insights selectors. For Management events Insights: To log CloudTrail Insights on the API call rate, the trail or event data store must log write management events. To log CloudTrail Insights on the API error rate, the trail or event data store must log read or write management events. For Data events Insights: To log CloudTrail Insights on the API call rate or API error rate, the trail must log read or write data events. Data events Insights are not supported on event data store. To log CloudTrail Insights events on API call volume, the trail or event data store must log write management events. To log CloudTrail Insights events on API error rate, the trail or event data store must log read or write management events. You can call GetEventSelectors on a trail to check whether the trail logs management events. You can call GetEventDataStore on an event data store to check whether the event data store logs management events. For more information, see Working with CloudTrail Insights in the CloudTrail User Guide.</td>
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
    defaultValue="get_insight_selectors"
    values={[
        { label: 'get_insight_selectors', value: 'get_insight_selectors' }
    ]}
>
<TabItem value="get_insight_selectors">

Describes the settings for the Insights event selectors that you configured for your trail or event data store. GetInsightSelectors shows if CloudTrail Insights logging is enabled and which Insights types are configured with corresponding event categories. If you run GetInsightSelectors on a trail or event data store that does not have Insights events enabled, the operation throws the exception InsightNotEnabledException Specify either the EventDataStore parameter to get Insights event selectors for an event data store, or the TrailName parameter to the get Insights event selectors for a trail. You cannot specify these parameters together. For more information, see Working with CloudTrail Insights in the CloudTrail User Guide.

```sql
SELECT
event_data_store_arn,
insight_selectors,
insights_destination,
trail_arn
FROM aws.cloudtrail.insight_selectors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_insight_selectors"
    values={[
        { label: 'put_insight_selectors', value: 'put_insight_selectors' }
    ]}
>
<TabItem value="put_insight_selectors">

Lets you enable Insights event logging on specific event categories by specifying the Insights selectors that you want to enable on an existing trail or event data store. You also use PutInsightSelectors to turn off Insights event logging, by passing an empty list of Insights types. The valid Insights event types are ApiErrorRateInsight and ApiCallRateInsight, and valid EventCategories are Management and Data. Insights on data events are not supported on event data stores. For event data stores, you can only enable Insights on management events. To enable Insights on an event data store, you must specify the ARNs (or ID suffix of the ARNs) for the source event data store (EventDataStore) and the destination event data store (InsightsDestination). The source event data store logs management events and enables Insights. The destination event data store logs Insights events based upon the management event activity of the source event data store. The source and destination event data stores must belong to the same Amazon Web Services account. To log Insights events for a trail, you must specify the name (TrailName) of the CloudTrail trail for which you want to change or add Insights selectors. For Management events Insights: To log CloudTrail Insights on the API call rate, the trail or event data store must log write management events. To log CloudTrail Insights on the API error rate, the trail or event data store must log read or write management events. For Data events Insights: To log CloudTrail Insights on the API call rate or API error rate, the trail must log read or write data events. Data events Insights are not supported on event data store. To log CloudTrail Insights events on API call volume, the trail or event data store must log write management events. To log CloudTrail Insights events on API error rate, the trail or event data store must log read or write management events. You can call GetEventSelectors on a trail to check whether the trail logs management events. You can call GetEventDataStore on an event data store to check whether the event data store logs management events. For more information, see Working with CloudTrail Insights in the CloudTrail User Guide.

```sql
REPLACE aws.cloudtrail.insight_selectors
SET 
TrailName = '{{ TrailName }}',
InsightSelectors = '{{ InsightSelectors }}',
EventDataStore = '{{ EventDataStore }}',
InsightsDestination = '{{ InsightsDestination }}'
WHERE 
region = '{{ region }}' --required
AND InsightSelectors = '{{ InsightSelectors }}' --required
RETURNING
event_data_store_arn,
insight_selectors,
insights_destination,
trail_arn;
```
</TabItem>
</Tabs>
