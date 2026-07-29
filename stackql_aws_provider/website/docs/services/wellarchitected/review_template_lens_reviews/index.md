--- 
title: review_template_lens_reviews
hide_title: false
hide_table_of_contents: false
keywords:
  - review_template_lens_reviews
  - wellarchitected
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

Creates, updates, deletes, gets or lists a <code>review_template_lens_reviews</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="review_template_lens_reviews" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wellarchitected.review_template_lens_reviews" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_review_template_lens_review"
    values={[
        { label: 'get_review_template_lens_review', value: 'get_review_template_lens_review' }
    ]}
>
<TabItem value="get_review_template_lens_review">

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
    <td><CopyableCode code="lens_review" /></td>
    <td><code>object</code></td>
    <td>A lens review of a question.</td>
</tr>
<tr>
    <td><CopyableCode code="template_arn" /></td>
    <td><code>string</code></td>
    <td>The review template ARN. (pattern: &lt;code&gt;arn:aws(-us-gov|-iso(-&#91;a-z&#93;)?|-cn)?:wellarchitected:&#91;a-z&#93;&#123;2&#125;(-gov|-iso(&#91;a-z&#93;)?)?-&#91;a-z&#93;+-\d:\d&#123;12&#125;:(review-template)/&#91;a-f0-9&#93;&#123;32&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_review_template_lens_review"><CopyableCode code="get_review_template_lens_review" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-template_arn"><code>template_arn</code></a>, <a href="#parameter-lens_alias"><code>lens_alias</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get a lens review associated with a review template.</td>
</tr>
<tr>
    <td><a href="#update_review_template_lens_review"><CopyableCode code="update_review_template_lens_review" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-template_arn"><code>template_arn</code></a>, <a href="#parameter-lens_alias"><code>lens_alias</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update a lens review associated with a review template.</td>
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
<tr id="parameter-lens_alias">
    <td><CopyableCode code="lens_alias" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-template_arn">
    <td><CopyableCode code="template_arn" /></td>
    <td><code>string</code></td>
    <td>The review template ARN.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_review_template_lens_review"
    values={[
        { label: 'get_review_template_lens_review', value: 'get_review_template_lens_review' }
    ]}
>
<TabItem value="get_review_template_lens_review">

Get a lens review associated with a review template.

```sql
SELECT
lens_review,
template_arn
FROM aws.wellarchitected.review_template_lens_reviews
WHERE template_arn = '{{ template_arn }}' -- required
AND lens_alias = '{{ lens_alias }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_review_template_lens_review"
    values={[
        { label: 'update_review_template_lens_review', value: 'update_review_template_lens_review' }
    ]}
>
<TabItem value="update_review_template_lens_review">

Update a lens review associated with a review template.

```sql
UPDATE aws.wellarchitected.review_template_lens_reviews
SET 
LensNotes = '{{ LensNotes }}',
PillarNotes = '{{ PillarNotes }}'
WHERE 
template_arn = '{{ template_arn }}' --required
AND lens_alias = '{{ lens_alias }}' --required
AND region = '{{ region }}' --required
RETURNING
lens_review,
template_arn;
```
</TabItem>
</Tabs>
