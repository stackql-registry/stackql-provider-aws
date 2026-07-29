--- 
title: image_recipe_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - image_recipe_policies
  - imagebuilder
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

Creates, updates, deletes, gets or lists an <code>image_recipe_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="image_recipe_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.imagebuilder.image_recipe_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_image_recipe_policy"
    values={[
        { label: 'get_image_recipe_policy', value: 'get_image_recipe_policy' }
    ]}
>
<TabItem value="get_image_recipe_policy">

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
    <td><CopyableCode code="policy" /></td>
    <td><code>string</code></td>
    <td>The image recipe policy object.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The request ID that uniquely identifies this request.</td>
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
    <td><a href="#get_image_recipe_policy"><CopyableCode code="get_image_recipe_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-imageRecipeArn"><code>imageRecipeArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an image recipe policy.</td>
</tr>
<tr>
    <td><a href="#put_image_recipe_policy"><CopyableCode code="put_image_recipe_policy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-imageRecipeArn"><code>imageRecipeArn</code></a>, <a href="#parameter-policy"><code>policy</code></a></td>
    <td></td>
    <td>Applies a policy to an image recipe. We recommend that you call the RAM API CreateResourceShare to share resources. If you call the Image Builder API PutImageRecipePolicy, you must also call the RAM API PromoteResourceShareCreatedFromPolicy in order for the resource to be visible to all principals with whom the resource is shared.</td>
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
<tr id="parameter-imageRecipeArn">
    <td><CopyableCode code="imageRecipeArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the image recipe whose policy you want to retrieve.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_image_recipe_policy"
    values={[
        { label: 'get_image_recipe_policy', value: 'get_image_recipe_policy' }
    ]}
>
<TabItem value="get_image_recipe_policy">

Gets an image recipe policy.

```sql
SELECT
policy,
request_id
FROM aws.imagebuilder.image_recipe_policies
WHERE imageRecipeArn = '{{ imageRecipeArn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_image_recipe_policy"
    values={[
        { label: 'put_image_recipe_policy', value: 'put_image_recipe_policy' }
    ]}
>
<TabItem value="put_image_recipe_policy">

Applies a policy to an image recipe. We recommend that you call the RAM API CreateResourceShare to share resources. If you call the Image Builder API PutImageRecipePolicy, you must also call the RAM API PromoteResourceShareCreatedFromPolicy in order for the resource to be visible to all principals with whom the resource is shared.

```sql
REPLACE aws.imagebuilder.image_recipe_policies
SET 
imageRecipeArn = '{{ imageRecipeArn }}',
policy = '{{ policy }}'
WHERE 
region = '{{ region }}' --required
AND imageRecipeArn = '{{ imageRecipeArn }}' --required
AND policy = '{{ policy }}' --required
RETURNING
image_recipe_arn,
request_id;
```
</TabItem>
</Tabs>
