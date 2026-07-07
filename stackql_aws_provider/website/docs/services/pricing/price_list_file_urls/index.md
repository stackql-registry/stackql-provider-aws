--- 
title: price_list_file_urls
hide_title: false
hide_table_of_contents: false
keywords:
  - price_list_file_urls
  - pricing
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

Creates, updates, deletes, gets or lists a <code>price_list_file_urls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="price_list_file_urls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pricing.price_list_file_urls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_price_list_file_url"
    values={[
        { label: 'get_price_list_file_url', value: 'get_price_list_file_url' }
    ]}
>
<TabItem value="get_price_list_file_url">

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
    <td><CopyableCode code="Url" /></td>
    <td><code>string</code></td>
    <td>The URL to download your Price List file from.</td>
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
    <td><a href="#get_price_list_file_url"><CopyableCode code="get_price_list_file_url" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the Amazon Web Services Service Terms (Section 1.10). This returns the URL that you can retrieve your Price List file from. This URL is based on the PriceListArn and FileFormat that you retrieve from the ListPriceLists response.</td>
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
    defaultValue="get_price_list_file_url"
    values={[
        { label: 'get_price_list_file_url', value: 'get_price_list_file_url' }
    ]}
>
<TabItem value="get_price_list_file_url">

This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the Amazon Web Services Service Terms (Section 1.10). This returns the URL that you can retrieve your Price List file from. This URL is based on the PriceListArn and FileFormat that you retrieve from the ListPriceLists response.

```sql
SELECT
Url
FROM aws.pricing.price_list_file_urls
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
