--- 
title: action_recommendations
hide_title: false
hide_table_of_contents: false
keywords:
  - action_recommendations
  - personalize_runtime
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

Creates, updates, deletes, gets or lists an <code>action_recommendations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="action_recommendations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.personalize_runtime.action_recommendations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_action_recommendations"
    values={[
        { label: 'get_action_recommendations', value: 'get_action_recommendations' }
    ]}
>
<TabItem value="get_action_recommendations">

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
    <td><CopyableCode code="actionList" /></td>
    <td><code>array</code></td>
    <td>A list of action recommendations sorted in descending order by prediction score. There can be a maximum of 100 actions in the list. For information about action scores, see How action recommendation scoring works.</td>
</tr>
<tr>
    <td><CopyableCode code="recommendationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the recommendation.</td>
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
    <td><a href="#get_action_recommendations"><CopyableCode code="get_action_recommendations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of recommended actions in sorted in descending order by prediction score. Use the GetActionRecommendations API if you have a custom campaign that deploys a solution version trained with a PERSONALIZED_ACTIONS recipe. For more information about PERSONALIZED_ACTIONS recipes, see PERSONALIZED_ACTIONS recipes. For more information about getting action recommendations, see Getting action recommendations.</td>
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
    defaultValue="get_action_recommendations"
    values={[
        { label: 'get_action_recommendations', value: 'get_action_recommendations' }
    ]}
>
<TabItem value="get_action_recommendations">

Returns a list of recommended actions in sorted in descending order by prediction score. Use the GetActionRecommendations API if you have a custom campaign that deploys a solution version trained with a PERSONALIZED_ACTIONS recipe. For more information about PERSONALIZED_ACTIONS recipes, see PERSONALIZED_ACTIONS recipes. For more information about getting action recommendations, see Getting action recommendations.

```sql
SELECT
actionList,
recommendationId
FROM aws.personalize_runtime.action_recommendations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
