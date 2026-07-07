--- 
title: recommendations
hide_title: false
hide_table_of_contents: false
keywords:
  - recommendations
  - sesv2
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

Creates, updates, deletes, gets or lists a <code>recommendations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recommendations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sesv2.recommendations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_recommendations"
    values={[
        { label: 'list_recommendations', value: 'list_recommendations' }
    ]}
>
<TabItem value="list_recommendations">

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
    <td>A string token indicating that there might be additional recommendations available to be listed. Use the token provided in the ListRecommendationsResponse to use in the subsequent call to ListRecommendations with the same parameters to retrieve the next page of recommendations.</td>
</tr>
<tr>
    <td><CopyableCode code="Recommendations" /></td>
    <td><code>array</code></td>
    <td>The recommendations applicable to your account.</td>
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
    <td><a href="#list_recommendations"><CopyableCode code="list_recommendations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the recommendations present in your Amazon SES account in the current Amazon Web Services Region. You can execute this operation no more than once per second.</td>
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
    defaultValue="list_recommendations"
    values={[
        { label: 'list_recommendations', value: 'list_recommendations' }
    ]}
>
<TabItem value="list_recommendations">

Lists the recommendations present in your Amazon SES account in the current Amazon Web Services Region. You can execute this operation no more than once per second.

```sql
SELECT
NextToken,
Recommendations
FROM aws.sesv2.recommendations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
