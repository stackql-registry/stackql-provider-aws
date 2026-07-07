--- 
title: findings_statistics
hide_title: false
hide_table_of_contents: false
keywords:
  - findings_statistics
  - guardduty
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

Creates, updates, deletes, gets or lists a <code>findings_statistics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="findings_statistics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.guardduty.findings_statistics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_findings_statistics"
    values={[
        { label: 'get_findings_statistics', value: 'get_findings_statistics' }
    ]}
>
<TabItem value="get_findings_statistics">

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
    <td><CopyableCode code="CountBySeverity" /></td>
    <td><code>object</code></td>
    <td>Represents a list of map of severity to count statistics for a set of findings.</td>
</tr>
<tr>
    <td><CopyableCode code="GroupedByAccount" /></td>
    <td><code>array</code></td>
    <td>Represents a list of map of accounts with a findings count associated with each account.</td>
</tr>
<tr>
    <td><CopyableCode code="GroupedByDate" /></td>
    <td><code>array</code></td>
    <td>Represents a list of map of dates with a count of total findings generated on each date per severity level.</td>
</tr>
<tr>
    <td><CopyableCode code="GroupedByFindingType" /></td>
    <td><code>array</code></td>
    <td>Represents a list of map of finding types with a count of total findings generated for each type. Based on the orderBy parameter, this request returns either the most occurring finding types or the least occurring finding types. If the orderBy parameter is ASC, this will represent the least occurring finding types in your account; otherwise, this will represent the most occurring finding types. The default value of orderBy is DESC.</td>
</tr>
<tr>
    <td><CopyableCode code="GroupedByResource" /></td>
    <td><code>array</code></td>
    <td>Represents a list of map of top resources with a count of total findings.</td>
</tr>
<tr>
    <td><CopyableCode code="GroupedBySeverity" /></td>
    <td><code>array</code></td>
    <td>Represents a list of map of total findings for each severity level.</td>
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
    <td><a href="#get_findings_statistics"><CopyableCode code="get_findings_statistics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists GuardDuty findings statistics for the specified detector ID. You must provide either findingStatisticTypes or groupBy parameter, and not both. You can use the maxResults and orderBy parameters only when using groupBy. There might be regional differences because some flags might not be available in all the Regions where GuardDuty is currently supported. For more information, see Regions and endpoints.</td>
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
<tr id="parameter-detector_id">
    <td><CopyableCode code="detector_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the detector whose findings statistics you want to retrieve. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_findings_statistics"
    values={[
        { label: 'get_findings_statistics', value: 'get_findings_statistics' }
    ]}
>
<TabItem value="get_findings_statistics">

Lists GuardDuty findings statistics for the specified detector ID. You must provide either findingStatisticTypes or groupBy parameter, and not both. You can use the maxResults and orderBy parameters only when using groupBy. There might be regional differences because some flags might not be available in all the Regions where GuardDuty is currently supported. For more information, see Regions and endpoints.

```sql
SELECT
CountBySeverity,
GroupedByAccount,
GroupedByDate,
GroupedByFindingType,
GroupedByResource,
GroupedBySeverity
FROM aws.guardduty.findings_statistics
WHERE detector_id = '{{ detector_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
