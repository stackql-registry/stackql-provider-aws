--- 
title: finding_recommendations
hide_title: false
hide_table_of_contents: false
keywords:
  - finding_recommendations
  - accessanalyzer
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

Creates, updates, deletes, gets or lists a <code>finding_recommendations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="finding_recommendations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.accessanalyzer.finding_recommendations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_finding_recommendation"
    values={[
        { label: 'get_finding_recommendation', value: 'get_finding_recommendation' }
    ]}
>
<TabItem value="get_finding_recommendation">

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
    <td><CopyableCode code="unusedPermissionsRecommendedStep" /></td>
    <td><code>object</code></td>
    <td>A recommended step for an unused permissions finding.</td>
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
    <td><a href="#get_finding_recommendation"><CopyableCode code="get_finding_recommendation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-analyzerArn"><code>analyzerArn</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves information about a finding recommendation for the specified analyzer.</td>
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
<tr id="parameter-analyzerArn">
    <td><CopyableCode code="analyzerArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the analyzer used to generate the finding recommendation.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique ID for the finding recommendation.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token used for pagination of results returned.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_finding_recommendation"
    values={[
        { label: 'get_finding_recommendation', value: 'get_finding_recommendation' }
    ]}
>
<TabItem value="get_finding_recommendation">

Retrieves information about a finding recommendation for the specified analyzer.

```sql
SELECT
unusedPermissionsRecommendedStep
FROM aws.accessanalyzer.finding_recommendations
WHERE analyzerArn = '{{ analyzerArn }}' -- required
AND id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
