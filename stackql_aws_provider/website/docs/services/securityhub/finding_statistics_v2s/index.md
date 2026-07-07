--- 
title: finding_statistics_v2s
hide_title: false
hide_table_of_contents: false
keywords:
  - finding_statistics_v2s
  - securityhub
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

Creates, updates, deletes, gets or lists a <code>finding_statistics_v2s</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="finding_statistics_v2s" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.finding_statistics_v2s" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_finding_statistics_v2"
    values={[
        { label: 'get_finding_statistics_v2', value: 'get_finding_statistics_v2' }
    ]}
>
<TabItem value="get_finding_statistics_v2">

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
    <td><CopyableCode code="GroupByResults" /></td>
    <td><code>array</code></td>
    <td>Aggregated statistics about security findings based on specified grouping criteria.</td>
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
    <td><a href="#get_finding_statistics_v2"><CopyableCode code="get_finding_statistics_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns aggregated statistical data about findings. You can use the Scopes parameter to define the data boundary for the query. Currently, Scopes supports AwsOrganizations, which lets you aggregate findings from your entire organization or from specific organizational units. Only the delegated administrator account can use Scopes. GetFindingStatisticsV2 uses securityhub:GetAdhocInsightResults in the Action element of an IAM policy statement. You must have permission to perform the securityhub:GetAdhocInsightResults action.</td>
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
    defaultValue="get_finding_statistics_v2"
    values={[
        { label: 'get_finding_statistics_v2', value: 'get_finding_statistics_v2' }
    ]}
>
<TabItem value="get_finding_statistics_v2">

Returns aggregated statistical data about findings. You can use the Scopes parameter to define the data boundary for the query. Currently, Scopes supports AwsOrganizations, which lets you aggregate findings from your entire organization or from specific organizational units. Only the delegated administrator account can use Scopes. GetFindingStatisticsV2 uses securityhub:GetAdhocInsightResults in the Action element of an IAM policy statement. You must have permission to perform the securityhub:GetAdhocInsightResults action.

```sql
SELECT
GroupByResults
FROM aws.securityhub.finding_statistics_v2s
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
