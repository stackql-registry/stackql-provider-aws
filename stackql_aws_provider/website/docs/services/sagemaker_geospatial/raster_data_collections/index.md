--- 
title: raster_data_collections
hide_title: false
hide_table_of_contents: false
keywords:
  - raster_data_collections
  - sagemaker_geospatial
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

Creates, updates, deletes, gets or lists a <code>raster_data_collections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="raster_data_collections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker_geospatial.raster_data_collections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_raster_data_collection"
    values={[
        { label: 'get_raster_data_collection', value: 'get_raster_data_collection' },
        { label: 'search_raster_data_collection', value: 'search_raster_data_collection' },
        { label: 'list_raster_data_collections', value: 'list_raster_data_collections' }
    ]}
>
<TabItem value="get_raster_data_collection">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the raster data collection. (pattern: &lt;code&gt;^arn:aws&#91;a-z-&#93;&#123;0,12&#125;:sagemaker-geospatial:&#91;a-z0-9-&#93;&#123;1,25&#125;:&#91;0-9&#93;&#123;12&#125;:raster-data-collection/(public|premium|user)/&#91;a-z0-9&#93;&#123;12,&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the raster data collection.</td>
</tr>
<tr>
    <td><CopyableCode code="description_page_url" /></td>
    <td><code>string</code></td>
    <td>The URL of the description page.</td>
</tr>
<tr>
    <td><CopyableCode code="image_source_bands" /></td>
    <td><code>array</code></td>
    <td>The list of image source bands in the raster data collection.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the raster data collection.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_filters" /></td>
    <td><code>array</code></td>
    <td>The filters supported by the raster data collection.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Each tag consists of a key and a value.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The raster data collection type. (PUBLIC, PREMIUM, USER)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_raster_data_collection">

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
    <td><CopyableCode code="approximate_result_count" /></td>
    <td><code>integer</code></td>
    <td>Approximate number of results in the response.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>List of items matching the Raster DataCollectionQuery.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_raster_data_collections">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the raster data collection. (pattern: &lt;code&gt;^arn:aws&#91;a-z-&#93;&#123;0,12&#125;:sagemaker-geospatial:&#91;a-z0-9-&#93;&#123;1,25&#125;:&#91;0-9&#93;&#123;12&#125;:raster-data-collection/(public|premium|user)/&#91;a-z0-9&#93;&#123;12,&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the raster data collection.</td>
</tr>
<tr>
    <td><CopyableCode code="description_page_url" /></td>
    <td><code>string</code></td>
    <td>The description URL of the raster data collection.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the raster data collection.</td>
</tr>
<tr>
    <td><CopyableCode code="supported_filters" /></td>
    <td><code>array</code></td>
    <td>The list of filters supported by the raster data collection.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Each tag consists of a key and a value.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of raster data collection. (PUBLIC, PREMIUM, USER)</td>
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
    <td><a href="#get_raster_data_collection"><CopyableCode code="get_raster_data_collection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use this operation to get details of a specific raster data collection.</td>
</tr>
<tr>
    <td><a href="#search_raster_data_collection"><CopyableCode code="search_raster_data_collection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Allows you run image query on a specific raster data collection to get a list of the satellite imagery matching the selected filters.</td>
</tr>
<tr>
    <td><a href="#list_raster_data_collections"><CopyableCode code="list_raster_data_collections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Use this operation to get raster data collections.</td>
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
<tr id="parameter-arn">
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the raster data collection.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The total number of items to return.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If the previous response was truncated, you receive this token. Use it in your next request to receive the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_raster_data_collection"
    values={[
        { label: 'get_raster_data_collection', value: 'get_raster_data_collection' },
        { label: 'search_raster_data_collection', value: 'search_raster_data_collection' },
        { label: 'list_raster_data_collections', value: 'list_raster_data_collections' }
    ]}
>
<TabItem value="get_raster_data_collection">

Use this operation to get details of a specific raster data collection.

```sql
SELECT
arn,
description,
description_page_url,
image_source_bands,
name,
supported_filters,
tags,
type
FROM aws.sagemaker_geospatial.raster_data_collections
WHERE arn = '{{ arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="search_raster_data_collection">

Allows you run image query on a specific raster data collection to get a list of the satellite imagery matching the selected filters.

```sql
SELECT
approximate_result_count,
items,
next_token
FROM aws.sagemaker_geospatial.raster_data_collections
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_raster_data_collections">

Use this operation to get raster data collections.

```sql
SELECT
arn,
description,
description_page_url,
name,
supported_filters,
tags,
type
FROM aws.sagemaker_geospatial.raster_data_collections
WHERE region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
