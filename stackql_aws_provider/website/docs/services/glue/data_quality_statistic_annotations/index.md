--- 
title: data_quality_statistic_annotations
hide_title: false
hide_table_of_contents: false
keywords:
  - data_quality_statistic_annotations
  - glue
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

Creates, updates, deletes, gets or lists a <code>data_quality_statistic_annotations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_quality_statistic_annotations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.data_quality_statistic_annotations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_data_quality_statistic_annotations"
    values={[
        { label: 'list_data_quality_statistic_annotations', value: 'list_data_quality_statistic_annotations' }
    ]}
>
<TabItem value="list_data_quality_statistic_annotations">

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
    <td><CopyableCode code="Annotations" /></td>
    <td><code>array</code></td>
    <td>A list of StatisticAnnotation applied to the Statistic</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token to retrieve the next set of results.</td>
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
    <td><a href="#list_data_quality_statistic_annotations"><CopyableCode code="list_data_quality_statistic_annotations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve annotations for a data quality statistic.</td>
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
    defaultValue="list_data_quality_statistic_annotations"
    values={[
        { label: 'list_data_quality_statistic_annotations', value: 'list_data_quality_statistic_annotations' }
    ]}
>
<TabItem value="list_data_quality_statistic_annotations">

Retrieve annotations for a data quality statistic.

```sql
SELECT
Annotations,
NextToken
FROM aws.glue.data_quality_statistic_annotations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
