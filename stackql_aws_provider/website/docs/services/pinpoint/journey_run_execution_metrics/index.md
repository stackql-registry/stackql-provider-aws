--- 
title: journey_run_execution_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - journey_run_execution_metrics
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

Creates, updates, deletes, gets or lists a <code>journey_run_execution_metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="journey_run_execution_metrics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint.journey_run_execution_metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_journey_run_execution_metrics"
    values={[
        { label: 'get_journey_run_execution_metrics', value: 'get_journey_run_execution_metrics' }
    ]}
>
<TabItem value="get_journey_run_execution_metrics">

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
    <td><CopyableCode code="ApplicationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the application that the metric applies to.</td>
</tr>
<tr>
    <td><CopyableCode code="JourneyId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the journey that the metric applies to.</td>
</tr>
<tr>
    <td><CopyableCode code="LastEvaluatedTime" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 format, when Amazon Pinpoint last evaluated the journey run and updated the data for the metric.</td>
</tr>
<tr>
    <td><CopyableCode code="Metrics" /></td>
    <td><code>object</code></td>
    <td>A JSON object that contains the results of the query. For information about the structure and contents of the results, see the Standard Amazon Pinpoint analytics metrics in the Amazon Pinpoint Developer Guide.</td>
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
    <td><a href="#get_journey_run_execution_metrics"><CopyableCode code="get_journey_run_execution_metrics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-journey-id"><code>journey-id</code></a>, <a href="#parameter-run-id"><code>run-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-page-size"><code>page-size</code></a></td>
    <td>Retrieves (queries) pre-aggregated data for a standard run execution metric that applies to a journey.</td>
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
    defaultValue="get_journey_run_execution_metrics"
    values={[
        { label: 'get_journey_run_execution_metrics', value: 'get_journey_run_execution_metrics' }
    ]}
>
<TabItem value="get_journey_run_execution_metrics">

Retrieves (queries) pre-aggregated data for a standard run execution metric that applies to a journey.

```sql
SELECT
ApplicationId,
JourneyId,
LastEvaluatedTime,
Metrics,
RunId
FROM aws.pinpoint.journey_run_execution_metrics
WHERE `application-id` = '{{ application-id }}' -- required
AND `journey-id` = '{{ journey-id }}' -- required
AND `run-id` = '{{ run-id }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `page-size` = '{{ page-size }}'
;
```
</TabItem>
</Tabs>
