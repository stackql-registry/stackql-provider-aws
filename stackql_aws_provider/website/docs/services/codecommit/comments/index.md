--- 
title: comments
hide_title: false
hide_table_of_contents: false
keywords:
  - comments
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

Creates, updates, deletes, gets or lists a <code>comments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="comments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codecommit.comments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_comment"
    values={[
        { label: 'get_comment', value: 'get_comment' }
    ]}
>
<TabItem value="get_comment">

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
    <td><CopyableCode code="authorArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the person who posted the comment.</td>
</tr>
<tr>
    <td><CopyableCode code="callerReactions" /></td>
    <td><code>array</code></td>
    <td>The emoji reactions to a comment, if any, submitted by the user whose credentials are associated with the call to the API.</td>
</tr>
<tr>
    <td><CopyableCode code="clientRequestToken" /></td>
    <td><code>string</code></td>
    <td>A unique, client-generated idempotency token that, when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request returns information about the initial request that used that token.</td>
</tr>
<tr>
    <td><CopyableCode code="commentId" /></td>
    <td><code>string</code></td>
    <td>The system-generated comment ID.</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>The content of the comment.</td>
</tr>
<tr>
    <td><CopyableCode code="creationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the comment was created, in timestamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value indicating whether the comment has been deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="inReplyTo" /></td>
    <td><code>string</code></td>
    <td>The ID of the comment for which this comment is a reply, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the comment was most recently modified, in timestamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="reactionCounts" /></td>
    <td><code>object</code></td>
    <td>A string to integer map that represents the number of individual users who have responded to a comment with the specified reactions.</td>
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
    <td><a href="#get_comment"><CopyableCode code="get_comment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the content of a comment made on a change, file, or commit in a repository. Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</td>
</tr>
<tr>
    <td><a href="#update_comment"><CopyableCode code="update_comment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-commentId"><code>commentId</code></a>, <a href="#parameter-content"><code>content</code></a></td>
    <td></td>
    <td>Replaces the contents of a comment.</td>
</tr>
<tr>
    <td><a href="#delete_comment_content"><CopyableCode code="delete_comment_content" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the content of a comment made on a change, file, or commit in a repository.</td>
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
    defaultValue="get_comment"
    values={[
        { label: 'get_comment', value: 'get_comment' }
    ]}
>
<TabItem value="get_comment">

Returns the content of a comment made on a change, file, or commit in a repository. Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.

```sql
SELECT
authorArn,
callerReactions,
clientRequestToken,
commentId,
content,
creationDate,
deleted,
inReplyTo,
lastModifiedDate,
reactionCounts
FROM aws.codecommit.comments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_comment"
    values={[
        { label: 'update_comment', value: 'update_comment' }
    ]}
>
<TabItem value="update_comment">

Replaces the contents of a comment.

```sql
UPDATE aws.codecommit.comments
SET 
commentId = '{{ commentId }}',
content = '{{ content }}'
WHERE 
region = '{{ region }}' --required
AND commentId = '{{ commentId }}' --required
AND content = '{{ content }}' --required
RETURNING
comment;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_comment_content"
    values={[
        { label: 'delete_comment_content', value: 'delete_comment_content' }
    ]}
>
<TabItem value="delete_comment_content">

Deletes the content of a comment made on a change, file, or commit in a repository.

```sql
DELETE FROM aws.codecommit.comments
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
