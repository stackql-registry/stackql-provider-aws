--- 
title: recipes
hide_title: false
hide_table_of_contents: false
keywords:
  - recipes
  - databrew
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.databrew.recipes" /></td></tr>
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
    <td><CopyableCode code="create_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the recipe was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The identifier (user name) of the user who created the recipe.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the recipe.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>string</code></td>
    <td>The identifier (user name) of the user who last modified the recipe.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the recipe was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the recipe.</td>
</tr>
<tr>
    <td><CopyableCode code="project_name" /></td>
    <td><code>string</code></td>
    <td>The name of the project associated with this recipe.</td>
</tr>
<tr>
    <td><CopyableCode code="published_by" /></td>
    <td><code>string</code></td>
    <td>The identifier (user name) of the user who last published the recipe.</td>
</tr>
<tr>
    <td><CopyableCode code="published_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the recipe was last published.</td>
</tr>
<tr>
    <td><CopyableCode code="recipe_version" /></td>
    <td><code>string</code></td>
    <td>The recipe version identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the recipe.</td>
</tr>
<tr>
    <td><CopyableCode code="steps" /></td>
    <td><code>array</code></td>
    <td>One or more steps to be performed by the recipe. Each step consists of an action, and the conditions under which the action should succeed.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Metadata tags associated with this project.</td>
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
    <td><CopyableCode code="create_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the recipe was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who created the recipe.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the recipe.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who last modified the recipe.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last modification date and time of the recipe.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The unique name for the recipe.</td>
</tr>
<tr>
    <td><CopyableCode code="project_name" /></td>
    <td><code>string</code></td>
    <td>The name of the project that the recipe is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="published_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the user who published the recipe.</td>
</tr>
<tr>
    <td><CopyableCode code="published_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the recipe was published.</td>
</tr>
<tr>
    <td><CopyableCode code="recipe_version" /></td>
    <td><code>string</code></td>
    <td>The identifier for the version for the recipe. Must be one of the following: Numeric version (X.Y) - X and Y stand for major and minor version numbers. The maximum length of each is 6 digits, and neither can be negative values. Both X and Y are required, and "0.0" isn't a valid version. LATEST_WORKING - the most recent valid version being developed in a DataBrew project. LATEST_PUBLISHED - the most recent published version.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the recipe.</td>
</tr>
<tr>
    <td><CopyableCode code="steps" /></td>
    <td><code>array</code></td>
    <td>A list of steps that are defined by the recipe.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Metadata tags that have been applied to the recipe.</td>
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
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-recipeVersion"><code>recipeVersion</code></a></td>
    <td>Returns the definition of a specific DataBrew recipe corresponding to a particular version.</td>
</tr>
<tr>
    <td><a href="#list_recipes"><CopyableCode code="list_recipes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-recipeVersion"><code>recipeVersion</code></a></td>
    <td>Lists all of the DataBrew recipes that are defined.</td>
</tr>
<tr>
    <td><a href="#create_recipe"><CopyableCode code="create_recipe" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new DataBrew recipe.</td>
</tr>
<tr>
    <td><a href="#update_recipe"><CopyableCode code="update_recipe" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Modifies the definition of the LATEST_WORKING version of a DataBrew recipe.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the recipe to be updated.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in this request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned by a previous call to retrieve the next set of results.</td>
</tr>
<tr id="parameter-recipeVersion">
    <td><CopyableCode code="recipeVersion" /></td>
    <td><code>string</code></td>
    <td>Return only those recipes with a version identifier of LATEST_WORKING or LATEST_PUBLISHED. If RecipeVersion is omitted, ListRecipes returns all of the LATEST_PUBLISHED recipe versions. Valid values: LATEST_WORKING | LATEST_PUBLISHED</td>
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

Returns the definition of a specific DataBrew recipe corresponding to a particular version.

```sql
SELECT
create_date,
created_by,
description,
last_modified_by,
last_modified_date,
name,
project_name,
published_by,
published_date,
recipe_version,
resource_arn,
steps,
tags
FROM aws.databrew.recipes
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
AND recipeVersion = '{{ recipeVersion }}'
;
```
</TabItem>
<TabItem value="list_recipes">

Lists all of the DataBrew recipes that are defined.

```sql
SELECT
create_date,
created_by,
description,
last_modified_by,
last_modified_date,
name,
project_name,
published_by,
published_date,
recipe_version,
resource_arn,
steps,
tags
FROM aws.databrew.recipes
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND recipeVersion = '{{ recipeVersion }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_recipe"
    values={[
        { label: 'create_recipe', value: 'create_recipe' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_recipe">

Creates a new DataBrew recipe.

```sql
INSERT INTO aws.databrew.recipes (
Description,
Name,
Steps,
Tags,
region
)
SELECT 
'{{ Description }}',
'{{ Name }}',
'{{ Steps }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: recipes
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the recipes resource.
    - name: Description
      value: "{{ Description }}"
    - name: Name
      value: "{{ Name }}"
    - name: Steps
      value:
        - Action:
            Operation: "{{ Operation }}"
            Parameters: "{{ Parameters }}"
          ConditionExpressions: "{{ ConditionExpressions }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_recipe"
    values={[
        { label: 'update_recipe', value: 'update_recipe' }
    ]}
>
<TabItem value="update_recipe">

Modifies the definition of the LATEST_WORKING version of a DataBrew recipe.

```sql
UPDATE aws.databrew.recipes
SET 
Description = '{{ Description }}',
Steps = '{{ Steps }}'
WHERE 
name = '{{ name }}' --required
AND region = '{{ region }}' --required
RETURNING
name;
```
</TabItem>
</Tabs>
