--- 
title: detector_model_analysis_results
hide_title: false
hide_table_of_contents: false
keywords:
  - detector_model_analysis_results
  - iotevents
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

Creates, updates, deletes, gets or lists a <code>detector_model_analysis_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="detector_model_analysis_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotevents.detector_model_analysis_results" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_detector_model_analysis_results"
    values={[
        { label: 'get_detector_model_analysis_results', value: 'get_detector_model_analysis_results' }
    ]}
>
<TabItem value="get_detector_model_analysis_results">

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
    <td><CopyableCode code="analysis_results" /></td>
    <td><code>array</code></td>
    <td>Contains information about one or more analysis results.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token that you can use to return the next set of results, or null if there are no more results.</td>
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
    <td><a href="#get_detector_model_analysis_results"><CopyableCode code="get_detector_model_analysis_results" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-analysis_id"><code>analysis_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves one or more analysis results of the detector model. After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</td>
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
<tr id="parameter-analysis_id">
    <td><CopyableCode code="analysis_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the analysis result that you want to retrieve.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned per request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token that you can use to return the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_detector_model_analysis_results"
    values={[
        { label: 'get_detector_model_analysis_results', value: 'get_detector_model_analysis_results' }
    ]}
>
<TabItem value="get_detector_model_analysis_results">

Retrieves one or more analysis results of the detector model. After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.

```sql
SELECT
analysis_results,
next_token
FROM aws.iotevents.detector_model_analysis_results
WHERE analysis_id = '{{ analysis_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
