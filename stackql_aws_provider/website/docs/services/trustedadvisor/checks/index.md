--- 
title: checks
hide_title: false
hide_table_of_contents: false
keywords:
  - checks
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

Creates, updates, deletes, gets or lists a <code>checks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="checks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.trustedadvisor.checks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_checks"
    values={[
        { label: 'list_checks', value: 'list_checks' }
    ]}
>
<TabItem value="list_checks">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the AWS Trusted Advisor Check</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the AWS Trusted Advisor Check</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the AWS Trusted Advisor Check (pattern: &lt;code&gt;arn:&#91;\w-&#93;+:trustedadvisor:::check\/&#91;\w-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="aws_resource_types" /></td>
    <td><code>array</code></td>
    <td>The AWS resource types that this check evaluates (for example, AWS::EC2::Instance).</td>
</tr>
<tr>
    <td><CopyableCode code="aws_services" /></td>
    <td><code>array</code></td>
    <td>The AWS Services that the Check applies to</td>
</tr>
<tr>
    <td><CopyableCode code="check_granularity" /></td>
    <td><code>string</code></td>
    <td>The granularity level at which the check operates: resource, account, or account_region.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of what the AWS Trusted Advisor Check is monitoring</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>The column headings for the metadata returned in the resource</td>
</tr>
<tr>
    <td><CopyableCode code="pillars" /></td>
    <td><code>array</code></td>
    <td>The Recommendation pillars that the AWS Trusted Advisor Check falls under</td>
</tr>
<tr>
    <td><CopyableCode code="recommendation_id" /></td>
    <td><code>string</code></td>
    <td>The recommendation identifier associated with the check.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn_queryable" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether this check is supported by the ListRecommendationsForResource API.</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>The source of the Recommendation (aws_config, compute_optimizer, cost_explorer, lse, manual, pse, rds, resilience, resilience_hub, security_hub, stir, ta_check, well_architected, cost_optimization_hub)</td>
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
    <td><a href="#list_checks"><CopyableCode code="list_checks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-pillar"><code>pillar</code></a>, <a href="#parameter-awsService"><code>awsService</code></a>, <a href="#parameter-source"><code>source</code></a>, <a href="#parameter-language"><code>language</code></a></td>
    <td>List a filterable set of Checks. This API provides global recommendations, eliminating the need to call the API in each AWS Region.</td>
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
<tr id="parameter-awsService">
    <td><CopyableCode code="awsService" /></td>
    <td><code>string</code></td>
    <td>The aws service associated with the check</td>
</tr>
<tr id="parameter-language">
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>The ISO 639-1 code for the language that you want your checks to appear in.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
<tr id="parameter-pillar">
    <td><CopyableCode code="pillar" /></td>
    <td><code>string</code></td>
    <td>The pillar of the check</td>
</tr>
<tr id="parameter-source">
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>The source of the check</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_checks"
    values={[
        { label: 'list_checks', value: 'list_checks' }
    ]}
>
<TabItem value="list_checks">

List a filterable set of Checks. This API provides global recommendations, eliminating the need to call the API in each AWS Region.

```sql
SELECT
id,
name,
arn,
aws_resource_types,
aws_services,
check_granularity,
description,
metadata,
pillars,
recommendation_id,
resource_arn_queryable,
source
FROM aws.trustedadvisor.checks
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND pillar = '{{ pillar }}'
AND awsService = '{{ awsService }}'
AND source = '{{ source }}'
AND language = '{{ language }}'
;
```
</TabItem>
</Tabs>
