--- 
title: texts
hide_title: false
hide_table_of_contents: false
keywords:
  - texts
  - geo_places
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

Creates, updates, deletes, gets or lists a <code>texts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="texts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.geo_places.texts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_text"
    values={[
        { label: 'search_text', value: 'search_text' }
    ]}
>
<TabItem value="search_text">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page.</td>
</tr>
<tr>
    <td><CopyableCode code="PricingBucket" /></td>
    <td><code>string</code></td>
    <td>The pricing bucket for which the query is charged at. For more information on pricing, please visit Amazon Location Service Pricing.</td>
</tr>
<tr>
    <td><CopyableCode code="ResultItems" /></td>
    <td><code>array</code></td>
    <td>List of places or results returned for a query.</td>
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
    <td><a href="#search_text"><CopyableCode code="search_text" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-key"><code>key</code></a></td>
    <td>SearchText searches for geocode and place information. You can then complete a follow-up query suggested from the Suggest API via a query id. For more information, see Search Text in the Amazon Location Service Developer Guide.</td>
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
<tr id="parameter-key">
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="search_text"
    values={[
        { label: 'search_text', value: 'search_text' }
    ]}
>
<TabItem value="search_text">

SearchText searches for geocode and place information. You can then complete a follow-up query suggested from the Suggest API via a query id. For more information, see Search Text in the Amazon Location Service Developer Guide.

```sql
SELECT
NextToken,
PricingBucket,
ResultItems
FROM aws.geo_places.texts
WHERE region = '{{ region }}' -- required
AND key = '{{ key }}'
;
```
</TabItem>
</Tabs>
