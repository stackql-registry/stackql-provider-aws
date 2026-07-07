--- 
title: architecture_recommendations
hide_title: false
hide_table_of_contents: false
keywords:
  - architecture_recommendations
  - route53_recovery_readiness
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

Creates, updates, deletes, gets or lists an <code>architecture_recommendations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="architecture_recommendations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53_recovery_readiness.architecture_recommendations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_architecture_recommendations"
    values={[
        { label: 'get_architecture_recommendations', value: 'get_architecture_recommendations' }
    ]}
>
<TabItem value="get_architecture_recommendations">

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
    <td><CopyableCode code="LastAuditTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that a recovery group was last assessed for recommendations, in UTC ISO-8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token that identifies which batch of results you want to see.</td>
</tr>
<tr>
    <td><CopyableCode code="Recommendations" /></td>
    <td><code>array</code></td>
    <td>A list of the recommendations for the customer's application.</td>
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
    <td><a href="#get_architecture_recommendations"><CopyableCode code="get_architecture_recommendations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-recovery_group_name"><code>recovery_group_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Gets recommendations about architecture designs for improving resiliency for an application, based on a recovery group.</td>
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
<tr id="parameter-recovery_group_name">
    <td><CopyableCode code="recovery_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of a recovery group.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The number of objects that you want to return with this call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token that identifies which batch of results you want to see.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_architecture_recommendations"
    values={[
        { label: 'get_architecture_recommendations', value: 'get_architecture_recommendations' }
    ]}
>
<TabItem value="get_architecture_recommendations">

Gets recommendations about architecture designs for improving resiliency for an application, based on a recovery group.

```sql
SELECT
LastAuditTimestamp,
NextToken,
Recommendations
FROM aws.route53_recovery_readiness.architecture_recommendations
WHERE recovery_group_name = '{{ recovery_group_name }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
