--- 
title: crawler_metrics
hide_title: false
hide_table_of_contents: false
keywords:
  - crawler_metrics
  - glue
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

Creates, updates, deletes, gets or lists a <code>crawler_metrics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="crawler_metrics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.crawler_metrics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_crawler_metrics"
    values={[
        { label: 'get_crawler_metrics', value: 'get_crawler_metrics' }
    ]}
>
<TabItem value="get_crawler_metrics">

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
    <td><CopyableCode code="CrawlerName" /></td>
    <td><code>string</code></td>
    <td>The name of the crawler. (pattern: &lt;code&gt;&#91;\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastRuntimeSeconds" /></td>
    <td><code>number (double)</code></td>
    <td>The duration of the crawler's most recent run, in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="MedianRuntimeSeconds" /></td>
    <td><code>number (double)</code></td>
    <td>The median duration of this crawler's runs, in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="StillEstimating" /></td>
    <td><code>boolean</code></td>
    <td>True if the crawler is still estimating how long it will take to complete this run.</td>
</tr>
<tr>
    <td><CopyableCode code="TablesCreated" /></td>
    <td><code>integer</code></td>
    <td>The number of tables created by this crawler.</td>
</tr>
<tr>
    <td><CopyableCode code="TablesDeleted" /></td>
    <td><code>integer</code></td>
    <td>The number of tables deleted by this crawler.</td>
</tr>
<tr>
    <td><CopyableCode code="TablesUpdated" /></td>
    <td><code>integer</code></td>
    <td>The number of tables updated by this crawler.</td>
</tr>
<tr>
    <td><CopyableCode code="TimeLeftSeconds" /></td>
    <td><code>number (double)</code></td>
    <td>The estimated time left to complete a running crawl.</td>
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
    <td><a href="#get_crawler_metrics"><CopyableCode code="get_crawler_metrics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves metrics about specified crawlers.</td>
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
    defaultValue="get_crawler_metrics"
    values={[
        { label: 'get_crawler_metrics', value: 'get_crawler_metrics' }
    ]}
>
<TabItem value="get_crawler_metrics">

Retrieves metrics about specified crawlers.

```sql
SELECT
CrawlerName,
LastRuntimeSeconds,
MedianRuntimeSeconds,
StillEstimating,
TablesCreated,
TablesDeleted,
TablesUpdated,
TimeLeftSeconds
FROM aws.glue.crawler_metrics
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
