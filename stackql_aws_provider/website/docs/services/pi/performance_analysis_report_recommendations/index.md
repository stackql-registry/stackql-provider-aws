--- 
title: performance_analysis_report_recommendations
hide_title: false
hide_table_of_contents: false
keywords:
  - performance_analysis_report_recommendations
  - pi
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

Creates, updates, deletes, gets or lists a <code>performance_analysis_report_recommendations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="performance_analysis_report_recommendations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pi.performance_analysis_report_recommendations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_performance_analysis_report_recommendations"
    values={[
        { label: 'list_performance_analysis_report_recommendations', value: 'list_performance_analysis_report_recommendations' }
    ]}
>
<TabItem value="list_performance_analysis_report_recommendations">

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
    <td><CopyableCode code="recommendation_description" /></td>
    <td><code>string</code></td>
    <td>The recommendation details to help resolve the performance issue. For example, Investigate the following SQLs that contributed to 100% of the total DBLoad during that time period: sql-id (pattern: &lt;code&gt;(.|\n)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_details" /></td>
    <td><code>string</code></td>
    <td>Detailed information about the recommendation, including steps to resolve the performance issue. (pattern: &lt;code&gt;(.|\n)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the recommendation. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#list_performance_analysis_report_recommendations"><CopyableCode code="list_performance_analysis_report_recommendations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves recommendations for a performance analysis report.</td>
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
    defaultValue="list_performance_analysis_report_recommendations"
    values={[
        { label: 'list_performance_analysis_report_recommendations', value: 'list_performance_analysis_report_recommendations' }
    ]}
>
<TabItem value="list_performance_analysis_report_recommendations">

Retrieves recommendations for a performance analysis report.

```sql
SELECT
recommendation_description,
recommendation_details,
recommendation_id
FROM aws.pi.performance_analysis_report_recommendations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
