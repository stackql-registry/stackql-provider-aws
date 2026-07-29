--- 
title: journey_date_range_kpis
hide_title: false
hide_table_of_contents: false
keywords:
  - journey_date_range_kpis
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

Creates, updates, deletes, gets or lists a <code>journey_date_range_kpis</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="journey_date_range_kpis" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint.journey_date_range_kpis" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_journey_date_range_kpi"
    values={[
        { label: 'get_journey_date_range_kpi', value: 'get_journey_date_range_kpi' }
    ]}
>
<TabItem value="get_journey_date_range_kpi">

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
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the application that the metric applies to.</td>
</tr>
<tr>
    <td><CopyableCode code="end_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last date and time of the date range that was used to filter the query results, in extended ISO 8601 format. The date range is inclusive.</td>
</tr>
<tr>
    <td><CopyableCode code="journey_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the journey that the metric applies to.</td>
</tr>
<tr>
    <td><CopyableCode code="kpi_name" /></td>
    <td><code>string</code></td>
    <td>The name of the metric, also referred to as a key performance indicator (KPI), that the data was retrieved for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. For a list of possible values, see the Amazon Pinpoint Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="kpi_result" /></td>
    <td><code>object</code></td>
    <td>An array of objects that contains the results of the query. Each object contains the value for the metric and metadata about that value.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null for the Journey Engagement Metrics resource because the resource returns all results in a single page.</td>
</tr>
<tr>
    <td><CopyableCode code="start_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The first date and time of the date range that was used to filter the query results, in extended ISO 8601 format. The date range is inclusive.</td>
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
    <td><a href="#get_journey_date_range_kpi"><CopyableCode code="get_journey_date_range_kpi" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-journey-id"><code>journey-id</code></a>, <a href="#parameter-kpi-name"><code>kpi-name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-end-time"><code>end-time</code></a>, <a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-page-size"><code>page-size</code></a>, <a href="#parameter-start-time"><code>start-time</code></a></td>
    <td>Retrieves (queries) pre-aggregated data for a standard engagement metric that applies to a journey.</td>
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
<tr id="parameter-kpi-name">
    <td><CopyableCode code="kpi-name" /></td>
    <td><code>string</code></td>
    <td>The name of the metric, also referred to as a key performance indicator (KPI), to retrieve data for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. Examples are email-open-rate and successful-delivery-rate. For a list of valid values, see the Amazon Pinpoint Developer Guide.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-end-time">
    <td><CopyableCode code="end-time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-26T20:00:00Z for 8:00 PM UTC July 26, 2019.</td>
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
<tr id="parameter-start-time">
    <td><CopyableCode code="start-time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The first date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-19T20:00:00Z for 8:00 PM UTC July 19, 2019. This value should also be fewer than 90 days from the current day.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_journey_date_range_kpi"
    values={[
        { label: 'get_journey_date_range_kpi', value: 'get_journey_date_range_kpi' }
    ]}
>
<TabItem value="get_journey_date_range_kpi">

Retrieves (queries) pre-aggregated data for a standard engagement metric that applies to a journey.

```sql
SELECT
application_id,
end_time,
journey_id,
kpi_name,
kpi_result,
next_token,
start_time
FROM aws.pinpoint.journey_date_range_kpis
WHERE `application-id` = '{{ application-id }}' -- required
AND `journey-id` = '{{ journey-id }}' -- required
AND `kpi-name` = '{{ kpi-name }}' -- required
AND region = '{{ region }}' -- required
AND `end-time` = '{{ end-time }}'
AND `next-token` = '{{ next-token }}'
AND `page-size` = '{{ page-size }}'
AND `start-time` = '{{ start-time }}'
;
```
</TabItem>
</Tabs>
