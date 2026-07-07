--- 
title: sampling_targets
hide_title: false
hide_table_of_contents: false
keywords:
  - sampling_targets
  - xray
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

Creates, updates, deletes, gets or lists a <code>sampling_targets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sampling_targets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.xray.sampling_targets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_sampling_targets"
    values={[
        { label: 'get_sampling_targets', value: 'get_sampling_targets' }
    ]}
>
<TabItem value="get_sampling_targets">

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
    <td><CopyableCode code="LastRuleModification" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time a user changed the sampling rule configuration. If the sampling rule configuration changed since the service last retrieved it, the service should call GetSamplingRules to get the latest version.</td>
</tr>
<tr>
    <td><CopyableCode code="SamplingTargetDocuments" /></td>
    <td><code>array</code></td>
    <td>Updated rules that the service should use to sample requests.</td>
</tr>
<tr>
    <td><CopyableCode code="UnprocessedBoostStatistics" /></td>
    <td><code>array</code></td>
    <td>Information about SamplingBoostStatisticsDocument that X-Ray could not process.</td>
</tr>
<tr>
    <td><CopyableCode code="UnprocessedStatistics" /></td>
    <td><code>array</code></td>
    <td>Information about SamplingStatisticsDocument that X-Ray could not process.</td>
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
    <td><a href="#get_sampling_targets"><CopyableCode code="get_sampling_targets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Requests a sampling quota for rules that the service is using to sample requests.</td>
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
    defaultValue="get_sampling_targets"
    values={[
        { label: 'get_sampling_targets', value: 'get_sampling_targets' }
    ]}
>
<TabItem value="get_sampling_targets">

Requests a sampling quota for rules that the service is using to sample requests.

```sql
SELECT
LastRuleModification,
SamplingTargetDocuments,
UnprocessedBoostStatistics,
UnprocessedStatistics
FROM aws.xray.sampling_targets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
