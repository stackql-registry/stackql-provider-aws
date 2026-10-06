--- 
title: comment_replies
hide_title: false
hide_table_of_contents: false
keywords:
  - comment_replies
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

Creates, updates, deletes, gets or lists a <code>comment_replies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="comment_replies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codecommit.comment_replies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#post_comment_reply"><CopyableCode code="post_comment_reply" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-inReplyTo"><code>inReplyTo</code></a>, <a href="#parameter-content"><code>content</code></a></td>
    <td></td>
    <td>Posts a comment in reply to an existing comment on a comparison between commits or a pull request.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="post_comment_reply"
    values={[
        { label: 'post_comment_reply', value: 'post_comment_reply' }
    ]}
>
<TabItem value="post_comment_reply">

Posts a comment in reply to an existing comment on a comparison between commits or a pull request.

```sql
EXEC aws.codecommit.comment_replies.post_comment_reply 
@region='{{ region }}' --required 
@@json=
'{
"inReplyTo": "{{ inReplyTo }}", 
"clientRequestToken": "{{ clientRequestToken }}", 
"content": "{{ content }}"
}'
;
```
</TabItem>
</Tabs>
