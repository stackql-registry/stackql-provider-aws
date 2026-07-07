--- 
title: journey_run_execution_activity_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - journey_run_execution_activity_metrics
  - pinpoint
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

Creates, updates, deletes, gets or lists a <code>journey_run_execution_activity_metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="journey_run_execution_activity_metrics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint.journey_run_execution_activity_metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_journey_run_execution_activity_metrics"
    values={[
        { label: 'get_journey_run_execution_activity_metrics', value: 'get_journey_run_execution_activity_metrics' }
    ]}
>
<TabItem value="get_journey_run_execution_activity_metrics">

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
    <td><CopyableCode code="ActivityType" /></td>
    <td><code>string</code></td>
    <td>The type of activity that the metric applies to. Possible values are: CONDITIONAL_SPLIT – For a yes/no split activity, which is an activity that sends participants down one of two paths in a journey. HOLDOUT – For a holdout activity, which is an activity that stops a journey for a specified percentage of participants. MESSAGE – For an email activity, which is an activity that sends an email message to participants. MULTI_CONDITIONAL_SPLIT – For a multivariate split activity, which is an activity that sends participants down one of as many as five paths in a journey. RANDOM_SPLIT – For a random split activity, which is an activity that sends specified percentages of participants down one of as many as five paths in a journey. WAIT – For a wait activity, which is an activity that waits for a certain amount of time or until a specific date and time before moving participants to the next activity in a journey.</td>
</tr>
<tr>
    <td><CopyableCode code="ApplicationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the application that the metric applies to.</td>
</tr>
<tr>
    <td><CopyableCode code="JourneyActivityId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the activity that the metric applies to.</td>
</tr>
<tr>
    <td><CopyableCode code="JourneyId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the journey that the metric applies to.</td>
</tr>
<tr>
    <td><CopyableCode code="LastEvaluatedTime" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 format, when Amazon Pinpoint last evaluated the execution status of the activity for this journey run and updated the data for the metric.</td>
</tr>
<tr>
    <td><CopyableCode code="Metrics" /></td>
    <td><code>object</code></td>
    <td>A JSON object that contains the results of the query. For information about the structure and contents of the results, see see Standard Amazon Pinpoint analytics metrics in the Amazon Pinpoint Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="RunId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the journey run that the metric applies to.</td>
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
    <td><a href="#get_journey_run_execution_activity_metrics"><CopyableCode code="get_journey_run_execution_activity_metrics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-journey-activity-id"><code>journey-activity-id</code></a>, <a href="#parameter-journey-id"><code>journey-id</code></a>, <a href="#parameter-run-id"><code>run-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-page-size"><code>page-size</code></a></td>
    <td>Retrieves (queries) pre-aggregated data for a standard run execution metric that applies to a journey activity.</td>
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
<tr id="parameter-application-id">
    <td><CopyableCode code="application-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.</td>
</tr>
<tr id="parameter-journey-activity-id">
    <td><CopyableCode code="journey-activity-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the journey activity.</td>
</tr>
<tr id="parameter-journey-id">
    <td><CopyableCode code="journey-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the journey.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-run-id">
    <td><CopyableCode code="run-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the journey run.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.</td>
</tr>
<tr id="parameter-page-size">
    <td><CopyableCode code="page-size" /></td>
    <td><code>string</code></td>
    <td>The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_journey_run_execution_activity_metrics"
    values={[
        { label: 'get_journey_run_execution_activity_metrics', value: 'get_journey_run_execution_activity_metrics' }
    ]}
>
<TabItem value="get_journey_run_execution_activity_metrics">

Retrieves (queries) pre-aggregated data for a standard run execution metric that applies to a journey activity.

```sql
SELECT
ActivityType,
ApplicationId,
JourneyActivityId,
JourneyId,
LastEvaluatedTime,
Metrics,
RunId
FROM aws.pinpoint.journey_run_execution_activity_metrics
WHERE `application-id` = '{{ application-id }}' -- required
AND `journey-activity-id` = '{{ journey-activity-id }}' -- required
AND `journey-id` = '{{ journey-id }}' -- required
AND `run-id` = '{{ run-id }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `page-size` = '{{ page-size }}'
;
```
</TabItem>
</Tabs>
