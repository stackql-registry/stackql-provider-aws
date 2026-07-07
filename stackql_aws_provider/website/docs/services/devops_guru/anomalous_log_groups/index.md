--- 
title: anomalous_log_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - anomalous_log_groups
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

Creates, updates, deletes, gets or lists an <code>anomalous_log_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="anomalous_log_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devops_guru.anomalous_log_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_anomalous_log_groups"
    values={[
        { label: 'list_anomalous_log_groups', value: 'list_anomalous_log_groups' }
    ]}
>
<TabItem value="list_anomalous_log_groups">

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
    <td><CopyableCode code="AnomalousLogGroups" /></td>
    <td><code>array</code></td>
    <td>The list of Amazon CloudWatch log groups that are related to an insight.</td>
</tr>
<tr>
    <td><CopyableCode code="InsightId" /></td>
    <td><code>string</code></td>
    <td>The ID of the insight containing the log groups. (pattern: &lt;code&gt;^&#91;\w-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#list_anomalous_log_groups"><CopyableCode code="list_anomalous_log_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the list of log groups that contain log anomalies.</td>
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
    defaultValue="list_anomalous_log_groups"
    values={[
        { label: 'list_anomalous_log_groups', value: 'list_anomalous_log_groups' }
    ]}
>
<TabItem value="list_anomalous_log_groups">

Returns the list of log groups that contain log anomalies.

```sql
SELECT
AnomalousLogGroups,
InsightId,
NextToken
FROM aws.devops_guru.anomalous_log_groups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
