--- 
title: recommendations_for_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - recommendations_for_resources
  - trustedadvisor
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

Creates, updates, deletes, gets or lists a <code>recommendations_for_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recommendations_for_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.trustedadvisor.recommendations_for_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_recommendations_for_resource"
    values={[
        { label: 'list_recommendations_for_resource', value: 'list_recommendations_for_resource' }
    ]}
>
<TabItem value="list_recommendations_for_resource">

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
    <td><CopyableCode code="aws_resource_arn" /></td>
    <td><code>string</code></td>
    <td>The AWS Resource ARN (pattern: &lt;code&gt;arn:aws(-\w+)*:&#91;\w\d-&#93;+:(&#91;\w\d-&#93;*)?:&#91;\w\d_-&#93;*(&#91;:/&#93;.+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="check_arn" /></td>
    <td><code>string</code></td>
    <td>The Check ARN (pattern: &lt;code&gt;arn:&#91;\w-&#93;+:trustedadvisor:::check\/&#91;\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="exclusion_status" /></td>
    <td><code>string</code></td>
    <td>The exclusion status of the recommendation (excluded, included)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the recommendation was last updated</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Metadata associated with the recommendation</td>
</tr>
<tr>
    <td><CopyableCode code="pillars" /></td>
    <td><code>array</code></td>
    <td>The Pillars that the Recommendation is optimizing</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_arn" /></td>
    <td><code>string</code></td>
    <td>The Recommendation ARN (pattern: &lt;code&gt;arn:&#91;\w-&#93;+:trustedadvisor::\d&#123;12&#125;:recommendation\/&#91;\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the recommendation (ok, warning, error)</td>
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
    <td><a href="#list_recommendations_for_resource"><CopyableCode code="list_recommendations_for_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_resource_arn"><code>aws_resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pillar"><code>pillar</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-checkArn"><code>checkArn</code></a>, <a href="#parameter-language"><code>language</code></a></td>
    <td>List all Trusted Advisor recommendations for a given AWS resource ARN.</td>
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
<tr id="parameter-aws_resource_arn">
    <td><CopyableCode code="aws_resource_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the AWS resource to query recommendations for</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-checkArn">
    <td><CopyableCode code="checkArn" /></td>
    <td><code>string</code></td>
    <td>The AWS Trusted Advisor Check ARN that relates to the Recommendation</td>
</tr>
<tr id="parameter-language">
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>The ISO 639-1 code for the language that you want your recommendations to appear in.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
<tr id="parameter-pillar">
    <td><CopyableCode code="pillar" /></td>
    <td><code>string</code></td>
    <td>The pillar that the recommendation belongs to</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the Recommendation Resource</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_recommendations_for_resource"
    values={[
        { label: 'list_recommendations_for_resource', value: 'list_recommendations_for_resource' }
    ]}
>
<TabItem value="list_recommendations_for_resource">

List all Trusted Advisor recommendations for a given AWS resource ARN.

```sql
SELECT
aws_resource_arn,
check_arn,
exclusion_status,
last_updated_at,
metadata,
pillars,
recommendation_arn,
status
FROM aws.trustedadvisor.recommendations_for_resources
WHERE aws_resource_arn = '{{ aws_resource_arn }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND pillar = '{{ pillar }}'
AND status = '{{ status }}'
AND checkArn = '{{ checkArn }}'
AND language = '{{ language }}'
;
```
</TabItem>
</Tabs>
