--- 
title: recommendations
hide_title: false
hide_table_of_contents: false
keywords:
  - recommendations
  - devops_guru
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

Creates, updates, deletes, gets or lists a <code>recommendations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recommendations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devops_guru.recommendations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_recommendations"
    values={[
        { label: 'list_recommendations', value: 'list_recommendations' }
    ]}
>
<TabItem value="list_recommendations">

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
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>The category type of the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the problem.</td>
</tr>
<tr>
    <td><CopyableCode code="link" /></td>
    <td><code>string</code></td>
    <td>A hyperlink to information to help you address the problem.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the recommendation.</td>
</tr>
<tr>
    <td><CopyableCode code="reason" /></td>
    <td><code>string</code></td>
    <td>The reason DevOps Guru flagged the anomalous behavior as a problem.</td>
</tr>
<tr>
    <td><CopyableCode code="related_anomalies" /></td>
    <td><code>array</code></td>
    <td>Anomalies that are related to the problem. Use these Anomalies to learn more about what's happening and to help address the issue.</td>
</tr>
<tr>
    <td><CopyableCode code="related_events" /></td>
    <td><code>array</code></td>
    <td>Events that are related to the problem. Use these events to learn more about what's happening and to help address the issue.</td>
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
    <td><a href="#list_recommendations"><CopyableCode code="list_recommendations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of a specified insight's recommendations. Each recommendation includes a list of related metrics and a list of related events.</td>
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
    defaultValue="list_recommendations"
    values={[
        { label: 'list_recommendations', value: 'list_recommendations' }
    ]}
>
<TabItem value="list_recommendations">

Returns a list of a specified insight's recommendations. Each recommendation includes a list of related metrics and a list of related events.

```sql
SELECT
category,
description,
link,
name,
reason,
related_anomalies,
related_events
FROM aws.devops_guru.recommendations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
