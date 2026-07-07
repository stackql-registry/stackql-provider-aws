--- 
title: comment_reactions
hide_title: false
hide_table_of_contents: false
keywords:
  - comment_reactions
  - codecommit
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

Creates, updates, deletes, gets or lists a <code>comment_reactions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="comment_reactions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codecommit.comment_reactions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_comment_reactions"
    values={[
        { label: 'get_comment_reactions', value: 'get_comment_reactions' }
    ]}
>
<TabItem value="get_comment_reactions">

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
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>An enumeration token that can be used in a request to return the next batch of the results.</td>
</tr>
<tr>
    <td><CopyableCode code="reactionsForComment" /></td>
    <td><code>array</code></td>
    <td>An array of reactions to the specified comment.</td>
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
    <td><a href="#get_comment_reactions"><CopyableCode code="get_comment_reactions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about reactions to a specified comment ID. Reactions from users who have been deleted will not be included in the count.</td>
</tr>
<tr>
    <td><a href="#put_comment_reaction"><CopyableCode code="put_comment_reaction" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-commentId"><code>commentId</code></a>, <a href="#parameter-reactionValue"><code>reactionValue</code></a></td>
    <td></td>
    <td>Adds or updates a reaction to a specified comment for the user whose identity is used to make the request. You can only add or update a reaction for yourself. You cannot add, modify, or delete a reaction for another user.</td>
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
    defaultValue="get_comment_reactions"
    values={[
        { label: 'get_comment_reactions', value: 'get_comment_reactions' }
    ]}
>
<TabItem value="get_comment_reactions">

Returns information about reactions to a specified comment ID. Reactions from users who have been deleted will not be included in the count.

```sql
SELECT
nextToken,
reactionsForComment
FROM aws.codecommit.comment_reactions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_comment_reaction"
    values={[
        { label: 'put_comment_reaction', value: 'put_comment_reaction' }
    ]}
>
<TabItem value="put_comment_reaction">

Adds or updates a reaction to a specified comment for the user whose identity is used to make the request. You can only add or update a reaction for yourself. You cannot add, modify, or delete a reaction for another user.

```sql
REPLACE aws.codecommit.comment_reactions
SET 
commentId = '{{ commentId }}',
reactionValue = '{{ reactionValue }}'
WHERE 
region = '{{ region }}' --required
AND commentId = '{{ commentId }}' --required
AND reactionValue = '{{ reactionValue }}' --required;
```
</TabItem>
</Tabs>
