--- 
title: recipes
hide_title: false
hide_table_of_contents: false
keywords:
  - recipes
  - personalize
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

Creates, updates, deletes, gets or lists a <code>recipes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recipes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.personalize.recipes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_recipe"
    values={[
        { label: 'describe_recipe', value: 'describe_recipe' },
        { label: 'list_recipes', value: 'list_recipes' }
    ]}
>
<TabItem value="describe_recipe">

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
    <td>The name of the recipe. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="algorithm_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the algorithm that Amazon Personalize uses to train the model. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix format) that the recipe was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the recipe.</td>
</tr>
<tr>
    <td><CopyableCode code="feature_transformation_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the FeatureTransformation object. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix format) that the recipe was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="recipe_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the recipe. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="recipe_type" /></td>
    <td><code>string</code></td>
    <td>One of the following values: PERSONALIZED_RANKING RELATED_ITEMS USER_PERSONALIZATION</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the recipe.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_recipes">

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
    <td>The name of the recipe. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix time) that the recipe was created.</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain of the recipe (if the recipe is a Domain dataset group use case). (ECOMMERCE, VIDEO_ON_DEMAND)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix time) that the recipe was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="recipe_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the recipe. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the recipe.</td>
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
    <td><a href="#describe_recipe"><CopyableCode code="describe_recipe" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a recipe. A recipe contains three items: An algorithm that trains a model. Hyperparameters that govern the training. Feature transformation information for modifying the input data before training. Amazon Personalize provides a set of predefined recipes. You specify a recipe when you create a solution with the CreateSolution API. CreateSolution trains a model by using the algorithm in the specified recipe and a training dataset. The solution, when deployed as a campaign, can provide recommendations using the GetRecommendations API.</td>
</tr>
<tr>
    <td><a href="#list_recipes"><CopyableCode code="list_recipes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of available recipes. The response provides the properties for each recipe, including the recipe's Amazon Resource Name (ARN).</td>
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
    defaultValue="describe_recipe"
    values={[
        { label: 'describe_recipe', value: 'describe_recipe' },
        { label: 'list_recipes', value: 'list_recipes' }
    ]}
>
<TabItem value="describe_recipe">

Describes a recipe. A recipe contains three items: An algorithm that trains a model. Hyperparameters that govern the training. Feature transformation information for modifying the input data before training. Amazon Personalize provides a set of predefined recipes. You specify a recipe when you create a solution with the CreateSolution API. CreateSolution trains a model by using the algorithm in the specified recipe and a training dataset. The solution, when deployed as a campaign, can provide recommendations using the GetRecommendations API.

```sql
SELECT
name,
algorithm_arn,
creation_date_time,
description,
feature_transformation_arn,
last_updated_date_time,
recipe_arn,
recipe_type,
status
FROM aws.personalize.recipes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_recipes">

Returns a list of available recipes. The response provides the properties for each recipe, including the recipe's Amazon Resource Name (ARN).

```sql
SELECT
name,
creation_date_time,
domain,
last_updated_date_time,
recipe_arn,
status
FROM aws.personalize.recipes
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
