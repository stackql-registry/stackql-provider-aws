--- 
title: cost_comparison_drivers
hide_title: false
hide_table_of_contents: false
keywords:
  - cost_comparison_drivers
  - ce
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

Creates, updates, deletes, gets or lists a <code>cost_comparison_drivers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cost_comparison_drivers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ce.cost_comparison_drivers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cost_comparison_drivers"
    values={[
        { label: 'get_cost_comparison_drivers', value: 'get_cost_comparison_drivers' }
    ]}
>
<TabItem value="get_cost_comparison_drivers">

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
    <td><CopyableCode code="CostDrivers" /></td>
    <td><code>array</code></td>
    <td>An array of cost drivers, each representing a cost difference between the baseline and comparison time periods. Each entry also includes a metric delta (for example, usage change) that contributed to the cost variance, along with the identifier and type of change.</td>
</tr>
<tr>
    <td><CopyableCode code="CostSelector" /></td>
    <td><code>object</code></td>
    <td>Use Expression to filter in various Cost Explorer APIs. Not all Expression types are supported in each API. Refer to the documentation for each specific API to see what is supported. There are two patterns: Simple dimension values. There are three types of simple dimension values: CostCategories, Tags, and Dimensions. Specify the CostCategories field to define a filter that acts on Cost Categories. Specify the Tags field to define a filter that acts on Cost Allocation Tags. Specify the Dimensions field to define a filter that acts on the DimensionValues . For each filter type, you can set the dimension name and values for the filters that you plan to use. For example, you can filter for REGION==us-east-1 OR REGION==us-west-1. For GetRightsizingRecommendation, the Region is a full name (for example, REGION==US East (N. Virginia). The corresponding Expression for this example is as follows: &#123; "Dimensions": &#123; "Key": "REGION", "Values": &#91; "us-east-1", "us-west-1" &#93; &#125; &#125; As shown in the previous example, lists of dimension values are combined with OR when applying the filter. You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported. For example, you can filter for linked account names that start with "a". The corresponding Expression for this example is as follows: &#123; "Dimensions": &#123; "Key": "LINKED_ACCOUNT_NAME", "MatchOptions": &#91; "STARTS_WITH" &#93;, "Values": &#91; "a" &#93; &#125; &#125; Compound Expression types with logical operations. You can use multiple Expression types and the logical operators AND/OR/NOT to create a list of one or more Expression objects. By doing this, you can filter by more advanced options. For example, you can filter by ((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer). The corresponding Expression for this example is as follows: &#123; "And": &#91; &#123;"Or": &#91; &#123;"Dimensions": &#123; "Key": "REGION", "Values": &#91; "us-east-1", "us-west-1" &#93; &#125;&#125;, &#123;"Tags": &#123; "Key": "TagName", "Values": &#91;"Value1"&#93; &#125; &#125; &#93;&#125;, &#123;"Not": &#123;"Dimensions": &#123; "Key": "USAGE_TYPE", "Values": &#91;"DataTransfer"&#93; &#125;&#125;&#125; &#93; &#125; Because each Expression can have only one operator, the service returns an error if more than one is specified. The following example shows an Expression object that creates an error: &#123; "And": &#91; ... &#93;, "Dimensions": &#123; "Key": "USAGE_TYPE", "Values": &#91; "DataTransfer" &#93; &#125; &#125; The following is an example of the corresponding error message: "Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories" For the GetRightsizingRecommendation action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to LINKED_ACCOUNT, REGION, or RIGHTSIZING_TYPE. For the GetReservationPurchaseRecommendation action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to LINKED_ACCOUNT.</td>
</tr>
<tr>
    <td><CopyableCode code="Metrics" /></td>
    <td><code>object</code></td>
    <td>A mapping of metric names to their comparison values.</td>
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
    <td><a href="#get_cost_comparison_drivers"><CopyableCode code="get_cost_comparison_drivers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves key factors driving cost changes between two time periods within the last 13 months, such as usage changes, discount changes, and commitment-based savings. If you have enabled multi-year data at monthly granularity, you can go back up to 38 months.</td>
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
    defaultValue="get_cost_comparison_drivers"
    values={[
        { label: 'get_cost_comparison_drivers', value: 'get_cost_comparison_drivers' }
    ]}
>
<TabItem value="get_cost_comparison_drivers">

Retrieves key factors driving cost changes between two time periods within the last 13 months, such as usage changes, discount changes, and commitment-based savings. If you have enabled multi-year data at monthly granularity, you can go back up to 38 months.

```sql
SELECT
CostDrivers,
CostSelector,
Metrics
FROM aws.ce.cost_comparison_drivers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
