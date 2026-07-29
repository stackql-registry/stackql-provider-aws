--- 
title: rightsizing_recommendations
hide_title: false
hide_table_of_contents: false
keywords:
  - rightsizing_recommendations
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

Creates, updates, deletes, gets or lists a <code>rightsizing_recommendations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rightsizing_recommendations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ce.rightsizing_recommendations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_rightsizing_recommendation"
    values={[
        { label: 'get_rightsizing_recommendation', value: 'get_rightsizing_recommendation' }
    ]}
>
<TabItem value="get_rightsizing_recommendation">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The account that this recommendation is for. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="current_instance" /></td>
    <td><code>object</code></td>
    <td>Context regarding the current instance.</td>
</tr>
<tr>
    <td><CopyableCode code="finding_reason_codes" /></td>
    <td><code>array</code></td>
    <td>The list of possible reasons why the recommendation is generated, such as under- or over-utilization of specific metrics (for example, CPU, Memory, Network).</td>
</tr>
<tr>
    <td><CopyableCode code="modify_recommendation_detail" /></td>
    <td><code>object</code></td>
    <td>The details for the modification recommendations.</td>
</tr>
<tr>
    <td><CopyableCode code="rightsizing_type" /></td>
    <td><code>string</code></td>
    <td>A recommendation to either terminate or modify the resource. (TERMINATE, MODIFY)</td>
</tr>
<tr>
    <td><CopyableCode code="terminate_recommendation_detail" /></td>
    <td><code>object</code></td>
    <td>The details for termination recommendations.</td>
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
    <td><a href="#get_rightsizing_recommendation"><CopyableCode code="get_rightsizing_recommendation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates recommendations that help you save cost by identifying idle and underutilized Amazon EC2 instances. Recommendations are generated to either downsize or terminate instances, along with providing savings detail and metrics. For more information about calculation and function, see Optimizing Your Cost with Rightsizing Recommendations in the Billing and Cost Management User Guide.</td>
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
    defaultValue="get_rightsizing_recommendation"
    values={[
        { label: 'get_rightsizing_recommendation', value: 'get_rightsizing_recommendation' }
    ]}
>
<TabItem value="get_rightsizing_recommendation">

Creates recommendations that help you save cost by identifying idle and underutilized Amazon EC2 instances. Recommendations are generated to either downsize or terminate instances, along with providing savings detail and metrics. For more information about calculation and function, see Optimizing Your Cost with Rightsizing Recommendations in the Billing and Cost Management User Guide.

```sql
SELECT
account_id,
current_instance,
finding_reason_codes,
modify_recommendation_detail,
rightsizing_type,
terminate_recommendation_detail
FROM aws.ce.rightsizing_recommendations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
