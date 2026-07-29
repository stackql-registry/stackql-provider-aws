--- 
title: recipe_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - recipe_versions
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

Creates, updates, deletes, gets or lists a <code>recipe_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="recipe_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.databrew.recipe_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_recipe_versions"
    values={[
        { label: 'list_recipe_versions', value: 'list_recipe_versions' }
    ]}
>
<TabItem value="list_recipe_versions">

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
    <td><a href="#list_recipe_versions"><CopyableCode code="list_recipe_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the versions of a particular DataBrew recipe, except for LATEST_WORKING.</td>
</tr>
<tr>
    <td><a href="#delete_recipe_version"><CopyableCode code="delete_recipe_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-recipe_version"><code>recipe_version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a single version of a DataBrew recipe.</td>
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
    <td>The name of the recipe.</td>
</tr>
<tr id="parameter-recipe_version">
    <td><CopyableCode code="recipe_version" /></td>
    <td><code>string</code></td>
    <td>The version of the recipe to be deleted. You can specify a numeric versions (X.Y) or LATEST_WORKING. LATEST_PUBLISHED is not supported.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_recipe_versions"
    values={[
        { label: 'list_recipe_versions', value: 'list_recipe_versions' }
    ]}
>
<TabItem value="list_recipe_versions">

Lists the versions of a particular DataBrew recipe, except for LATEST_WORKING.

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
FROM aws.databrew.recipe_versions
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_recipe_version"
    values={[
        { label: 'delete_recipe_version', value: 'delete_recipe_version' }
    ]}
>
<TabItem value="delete_recipe_version">

Deletes a single version of a DataBrew recipe.

```sql
DELETE FROM aws.databrew.recipe_versions
WHERE name = '{{ name }}' --required
AND recipe_version = '{{ recipe_version }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
