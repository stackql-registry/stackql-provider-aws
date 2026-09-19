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
        { label: 'get_comment', value: 'get_comment' },
        { label: 'get_comments_for_compared_commit', value: 'get_comments_for_compared_commit' },
        { label: 'get_comments_for_pull_request', value: 'get_comments_for_pull_request' }
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
    <td><CopyableCode code="author_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the person who posted the comment.</td>
</tr>
<tr>
    <td><CopyableCode code="caller_reactions" /></td>
    <td><code>array</code></td>
    <td>The emoji reactions to a comment, if any, submitted by the user whose credentials are associated with the call to the API.</td>
</tr>
<tr>
    <td><CopyableCode code="client_request_token" /></td>
    <td><code>string</code></td>
    <td>A unique, client-generated idempotency token that, when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request returns information about the initial request that used that token.</td>
</tr>
<tr>
    <td><CopyableCode code="comment_id" /></td>
    <td><code>string</code></td>
    <td>The system-generated comment ID.</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>The content of the comment.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the comment was created, in timestamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value indicating whether the comment has been deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="in_reply_to" /></td>
    <td><code>string</code></td>
    <td>The ID of the comment for which this comment is a reply, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the comment was most recently modified, in timestamp format.</td>
</tr>
<tr>
    <td><CopyableCode code="reaction_counts" /></td>
    <td><code>object</code></td>
    <td>A string to integer map that represents the number of individual users who have responded to a comment with the specified reactions.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_comments_for_compared_commit">

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
    <td><CopyableCode code="after_blob_id" /></td>
    <td><code>string</code></td>
    <td>The full blob ID of the commit used to establish the after of the comparison.</td>
</tr>
<tr>
    <td><CopyableCode code="after_commit_id" /></td>
    <td><code>string</code></td>
    <td>The full commit ID of the commit used to establish the after of the comparison.</td>
</tr>
<tr>
    <td><CopyableCode code="before_blob_id" /></td>
    <td><code>string</code></td>
    <td>The full blob ID of the commit used to establish the before of the comparison.</td>
</tr>
<tr>
    <td><CopyableCode code="before_commit_id" /></td>
    <td><code>string</code></td>
    <td>The full commit ID of the commit used to establish the before of the comparison.</td>
</tr>
<tr>
    <td><CopyableCode code="comments" /></td>
    <td><code>array</code></td>
    <td>An array of comment objects. Each comment object contains information about a comment on the comparison between commits.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>Location information about the comment on the comparison, including the file name, line number, and whether the version of the file where the comment was made is BEFORE or AFTER.</td>
</tr>
<tr>
    <td><CopyableCode code="repository_name" /></td>
    <td><code>string</code></td>
    <td>The name of the repository that contains the compared commits. (pattern: &lt;code&gt;&#91;\w\.-&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_comments_for_pull_request">

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
    <td><CopyableCode code="after_blob_id" /></td>
    <td><code>string</code></td>
    <td>The full blob ID of the file on which you want to comment on the source commit.</td>
</tr>
<tr>
    <td><CopyableCode code="after_commit_id" /></td>
    <td><code>string</code></td>
    <td>The full commit ID of the commit that was the tip of the source branch at the time the comment was made.</td>
</tr>
<tr>
    <td><CopyableCode code="before_blob_id" /></td>
    <td><code>string</code></td>
    <td>The full blob ID of the file on which you want to comment on the destination commit.</td>
</tr>
<tr>
    <td><CopyableCode code="before_commit_id" /></td>
    <td><code>string</code></td>
    <td>The full commit ID of the commit that was the tip of the destination branch when the pull request was created. This commit is superceded by the after commit in the source branch when and if you merge the source branch into the destination branch.</td>
</tr>
<tr>
    <td><CopyableCode code="comments" /></td>
    <td><code>array</code></td>
    <td>An array of comment objects. Each comment object contains information about a comment on the pull request.</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>Location information about the comment on the pull request, including the file name, line number, and whether the version of the file where the comment was made is BEFORE (destination branch) or AFTER (source branch).</td>
</tr>
<tr>
    <td><CopyableCode code="pull_request_id" /></td>
    <td><code>string</code></td>
    <td>The system-generated ID of the pull request.</td>
</tr>
<tr>
    <td><CopyableCode code="repository_name" /></td>
    <td><code>string</code></td>
    <td>The name of the repository that contains the pull request. (pattern: &lt;code&gt;&#91;\w\.-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_comments_for_compared_commit"><CopyableCode code="get_comments_for_compared_commit" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about comments made on the comparison between two commits. Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</td>
</tr>
<tr>
    <td><a href="#get_comments_for_pull_request"><CopyableCode code="get_comments_for_pull_request" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns comments made on a pull request. Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</td>
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
        { label: 'get_comment', value: 'get_comment' },
        { label: 'get_comments_for_compared_commit', value: 'get_comments_for_compared_commit' },
        { label: 'get_comments_for_pull_request', value: 'get_comments_for_pull_request' }
    ]}
>
<TabItem value="get_comment">

Returns the content of a comment made on a change, file, or commit in a repository. Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.

```sql
SELECT
author_arn,
caller_reactions,
client_request_token,
comment_id,
content,
creation_date,
deleted,
in_reply_to,
last_modified_date,
reaction_counts
FROM aws.codecommit.comments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_comments_for_compared_commit">

Returns information about comments made on the comparison between two commits. Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.

```sql
SELECT
after_blob_id,
after_commit_id,
before_blob_id,
before_commit_id,
comments,
location,
repository_name
FROM aws.codecommit.comments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_comments_for_pull_request">

Returns comments made on a pull request. Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.

```sql
SELECT
after_blob_id,
after_commit_id,
before_blob_id,
before_commit_id,
comments,
location,
pull_request_id,
repository_name
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
