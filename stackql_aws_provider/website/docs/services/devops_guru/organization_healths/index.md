--- 
title: organization_healths
hide_title: false
hide_table_of_contents: false
keywords:
  - organization_healths
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

Creates, updates, deletes, gets or lists an <code>organization_healths</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="organization_healths" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devops_guru.organization_healths" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_organization_health"
    values={[
        { label: 'describe_organization_health', value: 'describe_organization_health' }
    ]}
>
<TabItem value="describe_organization_health">

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
    <td><CopyableCode code="MetricsAnalyzed" /></td>
    <td><code>integer</code></td>
    <td>An integer that specifies the number of metrics that have been analyzed in your organization.</td>
</tr>
<tr>
    <td><CopyableCode code="OpenProactiveInsights" /></td>
    <td><code>integer</code></td>
    <td>An integer that specifies the number of open proactive insights in your Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="OpenReactiveInsights" /></td>
    <td><code>integer</code></td>
    <td>An integer that specifies the number of open reactive insights in your Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceHours" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of Amazon DevOps Guru resource analysis hours billed to the current Amazon Web Services account in the last hour.</td>
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
    <td><a href="#describe_organization_health"><CopyableCode code="describe_organization_health" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns active insights, predictive insights, and resource hours analyzed in last hour.</td>
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
    defaultValue="describe_organization_health"
    values={[
        { label: 'describe_organization_health', value: 'describe_organization_health' }
    ]}
>
<TabItem value="describe_organization_health">

Returns active insights, predictive insights, and resource hours analyzed in last hour.

```sql
SELECT
MetricsAnalyzed,
OpenProactiveInsights,
OpenReactiveInsights,
ResourceHours
FROM aws.devops_guru.organization_healths
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
