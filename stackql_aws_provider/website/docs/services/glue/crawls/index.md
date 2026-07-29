--- 
title: crawls
hide_title: false
hide_table_of_contents: false
keywords:
  - crawls
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

Creates, updates, deletes, gets or lists a <code>crawls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="crawls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.crawls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_crawls"
    values={[
        { label: 'list_crawls', value: 'list_crawls' }
    ]}
>
<TabItem value="list_crawls">

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
    <td><CopyableCode code="crawls" /></td>
    <td><code>array</code></td>
    <td>A list of CrawlerHistory objects representing the crawl runs that meet your criteria.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</td>
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
    <td><a href="#list_crawls"><CopyableCode code="list_crawls" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns all the crawls of a specified crawler. Returns only the crawls that have occurred since the launch date of the crawler history feature, and only retains up to 12 months of crawls. Older crawls will not be returned. You may use this API to: Retrive all the crawls of a specified crawler. Retrieve all the crawls of a specified crawler within a limited count. Retrieve all the crawls of a specified crawler in a specific time range. Retrieve all the crawls of a specified crawler with a particular state, crawl ID, or DPU hour value.</td>
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
    defaultValue="list_crawls"
    values={[
        { label: 'list_crawls', value: 'list_crawls' }
    ]}
>
<TabItem value="list_crawls">

Returns all the crawls of a specified crawler. Returns only the crawls that have occurred since the launch date of the crawler history feature, and only retains up to 12 months of crawls. Older crawls will not be returned. You may use this API to: Retrive all the crawls of a specified crawler. Retrieve all the crawls of a specified crawler within a limited count. Retrieve all the crawls of a specified crawler in a specific time range. Retrieve all the crawls of a specified crawler with a particular state, crawl ID, or DPU hour value.

```sql
SELECT
crawls,
next_token
FROM aws.glue.crawls
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
