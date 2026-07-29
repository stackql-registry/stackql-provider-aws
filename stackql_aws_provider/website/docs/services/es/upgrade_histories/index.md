--- 
title: upgrade_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - upgrade_histories
  - es
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

Creates, updates, deletes, gets or lists a <code>upgrade_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="upgrade_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.es.upgrade_histories" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_upgrade_history"
    values={[
        { label: 'get_upgrade_history', value: 'get_upgrade_history' }
    ]}
>
<TabItem value="get_upgrade_history">

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
    <td><CopyableCode code="start_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>UTC Timestamp at which the Upgrade API call was made in "yyyy-MM-ddTHH:mm:ssZ" format.</td>
</tr>
<tr>
    <td><CopyableCode code="steps_list" /></td>
    <td><code>array</code></td>
    <td>A list of UpgradeStepItem s representing information about each step performed as pard of a specific Upgrade or Upgrade Eligibility Check.</td>
</tr>
<tr>
    <td><CopyableCode code="upgrade_name" /></td>
    <td><code>string</code></td>
    <td>A string that describes the update briefly</td>
</tr>
<tr>
    <td><CopyableCode code="upgrade_status" /></td>
    <td><code>string</code></td>
    <td>The overall status of the update. The status can take one of the following values: In Progress Succeeded Succeeded with Issues Failed (IN_PROGRESS, SUCCEEDED, SUCCEEDED_WITH_ISSUES, FAILED)</td>
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
    <td><a href="#get_upgrade_history"><CopyableCode code="get_upgrade_history" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves the complete history of the last 10 upgrades that were performed on the domain.</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_upgrade_history"
    values={[
        { label: 'get_upgrade_history', value: 'get_upgrade_history' }
    ]}
>
<TabItem value="get_upgrade_history">

Retrieves the complete history of the last 10 upgrades that were performed on the domain.

```sql
SELECT
start_timestamp,
steps_list,
upgrade_name,
upgrade_status
FROM aws.es.upgrade_histories
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
