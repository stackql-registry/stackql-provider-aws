--- 
title: comments_for_compared_commits
hide_title: false
hide_table_of_contents: false
keywords:
  - comments_for_compared_commits
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

Creates, updates, deletes, gets or lists a <code>comments_for_compared_commits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="comments_for_compared_commits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codecommit.comments_for_compared_commits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_comments_for_compared_commit"
    values={[
        { label: 'get_comments_for_compared_commit', value: 'get_comments_for_compared_commit' }
    ]}
>
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
    <td><a href="#get_comments_for_compared_commit"><CopyableCode code="get_comments_for_compared_commit" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about comments made on the comparison between two commits. Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of reactions from active identities, use GetCommentReactions.</td>
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
    defaultValue="get_comments_for_compared_commit"
    values={[
        { label: 'get_comments_for_compared_commit', value: 'get_comments_for_compared_commit' }
    ]}
>
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
FROM aws.codecommit.comments_for_compared_commits
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
