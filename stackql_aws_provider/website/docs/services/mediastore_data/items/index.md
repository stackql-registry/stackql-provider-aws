--- 
title: items
hide_title: false
hide_table_of_contents: false
keywords:
  - items
  - mediastore_data
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

Creates, updates, deletes, gets or lists an <code>items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="items" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediastore_data.items" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_items"
    values={[
        { label: 'list_items', value: 'list_items' }
    ]}
>
<TabItem value="list_items">

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
    <td><CopyableCode code="ContentLength" /></td>
    <td><code>integer (int64)</code></td>
    <td>The length of the item in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="ContentType" /></td>
    <td><code>string</code></td>
    <td>The content type of the item. (pattern: &lt;code&gt;^&#91;\w\-\/\.\+&#93;&#123;1,255&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ETag" /></td>
    <td><code>string</code></td>
    <td>The ETag that represents a unique instance of the item. (pattern: &lt;code&gt;&#91;0-9A-Fa-f&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModified" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the item was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the item. (pattern: &lt;code&gt;&#91;A-Za-z0-9_\.\-\~&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The item type (folder or object). (OBJECT, FOLDER)</td>
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
    <td><a href="#list_items"><CopyableCode code="list_items" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Path"><code>Path</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Provides a list of metadata entries about folders and objects in the specified folder.</td>
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
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per API request. For example, you submit a ListItems request with MaxResults set at 500. Although 2,000 items match your request, the service returns no more than the first 500 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 1,000 results per page.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token that identifies which batch of results that you want to see. For example, you submit a ListItems request with MaxResults set at 500. The service returns the first batch of results (up to 500) and a NextToken value. To see the next batch of results, you can submit the ListItems request a second time and specify the NextToken value. Tokens expire after 15 minutes.</td>
</tr>
<tr id="parameter-Path">
    <td><CopyableCode code="Path" /></td>
    <td><code>string</code></td>
    <td>The path in the container from which to retrieve items. Format: &lt;folder name&gt;/&lt;folder name&gt;/&lt;file name&gt;</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_items"
    values={[
        { label: 'list_items', value: 'list_items' }
    ]}
>
<TabItem value="list_items">

Provides a list of metadata entries about folders and objects in the specified folder.

```sql
SELECT
ContentLength,
ContentType,
ETag,
LastModified,
Name,
Type
FROM aws.mediastore_data.items
WHERE region = '{{ region }}' -- required
AND Path = '{{ Path }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
