--- 
title: distribution_latest_cache_resets
hide_title: false
hide_table_of_contents: false
keywords:
  - distribution_latest_cache_resets
  - lightsail
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

Creates, updates, deletes, gets or lists a <code>distribution_latest_cache_resets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="distribution_latest_cache_resets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.distribution_latest_cache_resets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_distribution_latest_cache_reset"
    values={[
        { label: 'get_distribution_latest_cache_reset', value: 'get_distribution_latest_cache_reset' }
    ]}
>
<TabItem value="get_distribution_latest_cache_reset">

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
    <td><CopyableCode code="createTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the last cache reset (1479734909.17) in Unix time format.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the last cache reset.</td>
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
    <td><a href="#get_distribution_latest_cache_reset"><CopyableCode code="get_distribution_latest_cache_reset" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the timestamp and status of the last cache reset of a specific Amazon Lightsail content delivery network (CDN) distribution.</td>
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
    defaultValue="get_distribution_latest_cache_reset"
    values={[
        { label: 'get_distribution_latest_cache_reset', value: 'get_distribution_latest_cache_reset' }
    ]}
>
<TabItem value="get_distribution_latest_cache_reset">

Returns the timestamp and status of the last cache reset of a specific Amazon Lightsail content delivery network (CDN) distribution.

```sql
SELECT
createTime,
status
FROM aws.lightsail.distribution_latest_cache_resets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
