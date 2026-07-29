--- 
title: recovery_group_readiness_summaries
hide_title: false
hide_table_of_contents: false
keywords:
  - recovery_group_readiness_summaries
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

Creates, updates, deletes, gets or lists a <code>recovery_group_readiness_summaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recovery_group_readiness_summaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53_recovery_readiness.recovery_group_readiness_summaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_recovery_group_readiness_summary"
    values={[
        { label: 'get_recovery_group_readiness_summary', value: 'get_recovery_group_readiness_summary' }
    ]}
>
<TabItem value="get_recovery_group_readiness_summary">

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
    <td><CopyableCode code="readiness" /></td>
    <td><code>string</code></td>
    <td>The readiness status of this readiness check. (READY, NOT_READY, UNKNOWN, NOT_AUTHORIZED)</td>
</tr>
<tr>
    <td><CopyableCode code="readiness_check_name" /></td>
    <td><code>string</code></td>
    <td>The name of a readiness check.</td>
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
    <td><a href="#get_recovery_group_readiness_summary"><CopyableCode code="get_recovery_group_readiness_summary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-recovery_group_name"><code>recovery_group_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Displays a summary of information about a recovery group's readiness status. Includes the readiness checks for resources in the recovery group and the readiness status of each one.</td>
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
    defaultValue="get_recovery_group_readiness_summary"
    values={[
        { label: 'get_recovery_group_readiness_summary', value: 'get_recovery_group_readiness_summary' }
    ]}
>
<TabItem value="get_recovery_group_readiness_summary">

Displays a summary of information about a recovery group's readiness status. Includes the readiness checks for resources in the recovery group and the readiness status of each one.

```sql
SELECT
readiness,
readiness_check_name
FROM aws.route53_recovery_readiness.recovery_group_readiness_summaries
WHERE recovery_group_name = '{{ recovery_group_name }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
