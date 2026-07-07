--- 
title: findings_statistics
hide_title: false
hide_table_of_contents: false
keywords:
  - findings_statistics
  - accessanalyzer
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.accessanalyzer.findings_statistics" /></td></tr>
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
    <td><CopyableCode code="findingsStatistics" /></td>
    <td><code>array</code></td>
    <td>A group of external access or unused access findings statistics.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the retrieval of the findings statistics was last updated. If the findings statistics have not been previously retrieved for the specified analyzer, this field will not be populated.</td>
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
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of aggregated finding statistics for an external access or unused access analyzer.</td>
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
    defaultValue="get_findings_statistics"
    values={[
        { label: 'get_findings_statistics', value: 'get_findings_statistics' }
    ]}
>
<TabItem value="get_findings_statistics">

Retrieves a list of aggregated finding statistics for an external access or unused access analyzer.

```sql
SELECT
findingsStatistics,
lastUpdatedAt
FROM aws.accessanalyzer.findings_statistics
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
