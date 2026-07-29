--- 
title: comments
hide_title: false
hide_table_of_contents: false
keywords:
  - comments
  - security_ir
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.security_ir.comments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_comments"
    values={[
        { label: 'list_comments', value: 'list_comments' }
    ]}
>
<TabItem value="list_comments">

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
    <td><CopyableCode code="body" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="comment_id" /></td>
    <td><code>string</code></td>
    <td> (pattern: &lt;code&gt;\d&#123;6&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_date" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="creator" /></td>
    <td><code>string</code></td>
    <td> (pattern: &lt;code&gt;.*((^AWS Responder)|(^\d&#123;12&#125;$)|(^arn:(&#91;^:&#93;*aws&#91;^:&#93;*):(?:(?:iam)::\d&#123;12&#125;:(?:user|role|group|root)(?:(?:/&#91;^/&#93;+)+)?|(?:sts)::\d&#123;12&#125;:assumed-role/&#91;^/&#93;+/&#91;^/&#93;+)$)|(^security-ir.amazonaws.com)).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_by" /></td>
    <td><code>string</code></td>
    <td> (pattern: &lt;code&gt;.*((^AWS Responder)|(^\d&#123;12&#125;$)|(^arn:(&#91;^:&#93;*aws&#91;^:&#93;*):(?:(?:iam)::\d&#123;12&#125;:(?:user|role|group|root)(?:(?:/&#91;^/&#93;+)+)?|(?:sts)::\d&#123;12&#125;:assumed-role/&#91;^/&#93;+/&#91;^/&#93;+)$)|(^security-ir.amazonaws.com)).*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
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
    <td><a href="#list_comments"><CopyableCode code="list_comments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-case_id"><code>case_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns comments for a designated case.</td>
</tr>
<tr>
    <td><a href="#create_case_comment"><CopyableCode code="create_case_comment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-case_id"><code>case_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-body"><code>body</code></a></td>
    <td></td>
    <td>Adds a comment to an existing case.</td>
</tr>
<tr>
    <td><a href="#update_case_comment"><CopyableCode code="update_case_comment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-case_id"><code>case_id</code></a>, <a href="#parameter-comment_id"><code>comment_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-body"><code>body</code></a></td>
    <td></td>
    <td>Updates an existing case comment.</td>
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
<tr id="parameter-case_id">
    <td><CopyableCode code="case_id" /></td>
    <td><code>string</code></td>
    <td>Required element for UpdateCaseComment to identify the case ID containing the comment to be updated.</td>
</tr>
<tr id="parameter-comment_id">
    <td><CopyableCode code="comment_id" /></td>
    <td><code>string</code></td>
    <td>Required element for UpdateCaseComment to identify the case ID to be updated.</td>
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
    defaultValue="list_comments"
    values={[
        { label: 'list_comments', value: 'list_comments' }
    ]}
>
<TabItem value="list_comments">

Returns comments for a designated case.

```sql
SELECT
body,
comment_id,
created_date,
creator,
last_updated_by,
last_updated_date
FROM aws.security_ir.comments
WHERE case_id = '{{ case_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_case_comment"
    values={[
        { label: 'create_case_comment', value: 'create_case_comment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_case_comment">

Adds a comment to an existing case.

```sql
INSERT INTO aws.security_ir.comments (
clientToken,
body,
case_id,
region
)
SELECT 
'{{ clientToken }}',
'{{ body }}' /* required */,
'{{ case_id }}',
'{{ region }}'
RETURNING
comment_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: comments
  props:
    - name: case_id
      value: "{{ case_id }}"
      description: Required parameter for the comments resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the comments resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: body
      value: "{{ body }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_case_comment"
    values={[
        { label: 'update_case_comment', value: 'update_case_comment' }
    ]}
>
<TabItem value="update_case_comment">

Updates an existing case comment.

```sql
UPDATE aws.security_ir.comments
SET 
body = '{{ body }}'
WHERE 
case_id = '{{ case_id }}' --required
AND comment_id = '{{ comment_id }}' --required
AND region = '{{ region }}' --required
AND body = '{{ body }}' --required
RETURNING
body,
comment_id;
```
</TabItem>
</Tabs>
