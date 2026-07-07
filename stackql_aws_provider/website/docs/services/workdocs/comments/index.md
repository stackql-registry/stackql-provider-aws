--- 
title: comments
hide_title: false
hide_table_of_contents: false
keywords:
  - comments
  - workdocs
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workdocs.comments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_comments"
    values={[
        { label: 'describe_comments', value: 'describe_comments' }
    ]}
>
<TabItem value="describe_comments">

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
    <td><CopyableCode code="CommentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the comment. (pattern: &lt;code&gt;&#91;\w+-.@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Contributor" /></td>
    <td><code>object</code></td>
    <td>The details of the user who made the comment.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the comment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="ParentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the parent comment. (pattern: &lt;code&gt;&#91;\w+-.@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RecipientId" /></td>
    <td><code>string</code></td>
    <td>If the comment is a reply to another user's comment, this field contains the user ID of the user being replied to. (pattern: &lt;code&gt;&#91;&\w+-.@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the comment. (DRAFT, PUBLISHED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="Text" /></td>
    <td><code>string</code></td>
    <td>The text of the comment.</td>
</tr>
<tr>
    <td><CopyableCode code="ThreadId" /></td>
    <td><code>string</code></td>
    <td>The ID of the root comment in the thread. (pattern: &lt;code&gt;&#91;\w+-.@&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Visibility" /></td>
    <td><code>string</code></td>
    <td>The visibility of the comment. Options are either PRIVATE, where the comment is visible only to the comment author and document owner and co-owners, or PUBLIC, where the comment is visible to document owners, co-owners, and contributors. (PUBLIC, PRIVATE)</td>
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
    <td><a href="#describe_comments"><CopyableCode code="describe_comments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-document_id"><code>document_id</code></a>, <a href="#parameter-version_id"><code>version_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-marker"><code>marker</code></a></td>
    <td>List all the comments for the specified document version.</td>
</tr>
<tr>
    <td><a href="#create_comment"><CopyableCode code="create_comment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-document_id"><code>document_id</code></a>, <a href="#parameter-version_id"><code>version_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a></td>
    <td>Adds a new comment to the specified document version.</td>
</tr>
<tr>
    <td><a href="#delete_comment"><CopyableCode code="delete_comment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-document_id"><code>document_id</code></a>, <a href="#parameter-version_id"><code>version_id</code></a>, <a href="#parameter-comment_id"><code>comment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a></td>
    <td>Deletes the specified comment from the document version.</td>
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
<tr id="parameter-comment_id">
    <td><CopyableCode code="comment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the comment.</td>
</tr>
<tr id="parameter-document_id">
    <td><CopyableCode code="document_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the document.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-version_id">
    <td><CopyableCode code="version_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the document version.</td>
</tr>
<tr id="parameter-Authentication">
    <td><CopyableCode code="Authentication" /></td>
    <td><code>string</code></td>
    <td>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to return.</td>
</tr>
<tr id="parameter-marker">
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>The marker for the next set of results. This marker was received from a previous call.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_comments"
    values={[
        { label: 'describe_comments', value: 'describe_comments' }
    ]}
>
<TabItem value="describe_comments">

List all the comments for the specified document version.

```sql
SELECT
CommentId,
Contributor,
CreatedTimestamp,
ParentId,
RecipientId,
Status,
Text,
ThreadId,
Visibility
FROM aws.workdocs.comments
WHERE document_id = '{{ document_id }}' -- required
AND version_id = '{{ version_id }}' -- required
AND region = '{{ region }}' -- required
AND Authentication = '{{ Authentication }}'
AND limit = '{{ limit }}'
AND marker = '{{ marker }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_comment"
    values={[
        { label: 'create_comment', value: 'create_comment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_comment">

Adds a new comment to the specified document version.

```sql
INSERT INTO aws.workdocs.comments (
ParentId,
ThreadId,
Text,
Visibility,
NotifyCollaborators,
document_id,
version_id,
region,
Authentication
)
SELECT 
'{{ ParentId }}',
'{{ ThreadId }}',
'{{ Text }}',
'{{ Visibility }}',
{{ NotifyCollaborators }},
'{{ document_id }}',
'{{ version_id }}',
'{{ region }}',
'{{ Authentication }}'
RETURNING
Comment
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: comments
  props:
    - name: document_id
      value: "{{ document_id }}"
      description: Required parameter for the comments resource.
    - name: version_id
      value: "{{ version_id }}"
      description: Required parameter for the comments resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the comments resource.
    - name: ParentId
      value: "{{ ParentId }}"
    - name: ThreadId
      value: "{{ ThreadId }}"
    - name: Text
      value: "{{ Text }}"
    - name: Visibility
      value: "{{ Visibility }}"
      valid_values: ['PUBLIC', 'PRIVATE']
    - name: NotifyCollaborators
      value: {{ NotifyCollaborators }}
    - name: Authentication
      value: "{{ Authentication }}"
      description: Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
      description: Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_comment"
    values={[
        { label: 'delete_comment', value: 'delete_comment' }
    ]}
>
<TabItem value="delete_comment">

Deletes the specified comment from the document version.

```sql
DELETE FROM aws.workdocs.comments
WHERE document_id = '{{ document_id }}' --required
AND version_id = '{{ version_id }}' --required
AND comment_id = '{{ comment_id }}' --required
AND region = '{{ region }}' --required
AND Authentication = '{{ Authentication }}'
;
```
</TabItem>
</Tabs>
