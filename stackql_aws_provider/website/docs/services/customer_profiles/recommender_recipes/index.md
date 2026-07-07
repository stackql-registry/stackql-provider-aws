--- 
title: recommender_recipes
hide_title: false
hide_table_of_contents: false
keywords:
  - recommender_recipes
  - customer_profiles
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

Creates, updates, deletes, gets or lists a <code>recommender_recipes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recommender_recipes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.customer_profiles.recommender_recipes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_recommender_recipes"
    values={[
        { label: 'list_recommender_recipes', value: 'list_recommender_recipes' }
    ]}
>
<TabItem value="list_recommender_recipes">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the recommender recipe. (recommended-for-you, similar-items, frequently-paired-items, popular-items, trending-now, personalized-ranking)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the recommender recipe's purpose and functionality.</td>
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
    <td><a href="#list_recommender_recipes"><CopyableCode code="list_recommender_recipes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Returns a list of available recommender recipes that can be used to create recommenders.</td>
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
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of recommender recipes to return in the response. The default value is 100.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>A token received from a previous ListRecommenderRecipes call to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_recommender_recipes"
    values={[
        { label: 'list_recommender_recipes', value: 'list_recommender_recipes' }
    ]}
>
<TabItem value="list_recommender_recipes">

Returns a list of available recommender recipes that can be used to create recommenders.

```sql
SELECT
name,
description
FROM aws.customer_profiles.recommender_recipes
WHERE region = '{{ region }}' -- required
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
</Tabs>
