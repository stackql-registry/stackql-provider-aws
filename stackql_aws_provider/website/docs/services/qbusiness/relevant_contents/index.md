--- 
title: relevant_contents
hide_title: false
hide_table_of_contents: false
keywords:
  - relevant_contents
  - qbusiness
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

Creates, updates, deletes, gets or lists a <code>relevant_contents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="relevant_contents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qbusiness.relevant_contents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_relevant_content"
    values={[
        { label: 'search_relevant_content', value: 'search_relevant_content' }
    ]}
>
<TabItem value="search_relevant_content">

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
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>The actual content of the relevant item.</td>
</tr>
<tr>
    <td><CopyableCode code="documentAttributes" /></td>
    <td><code>array</code></td>
    <td>Additional attributes of the document containing the relevant content.</td>
</tr>
<tr>
    <td><CopyableCode code="documentId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the document containing the relevant content. (pattern: &lt;code&gt;\P&#123;C&#125;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="documentTitle" /></td>
    <td><code>string</code></td>
    <td>The title of the document containing the relevant content.</td>
</tr>
<tr>
    <td><CopyableCode code="documentUri" /></td>
    <td><code>string</code></td>
    <td>The URI of the document containing the relevant content. (pattern: &lt;code&gt;(https?|ftp|file):​//(&#91;^\s&#93;*)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="scoreAttributes" /></td>
    <td><code>object</code></td>
    <td>Attributes related to the relevance score of the content.</td>
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
    <td><a href="#search_relevant_content"><CopyableCode code="search_relevant_content" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for relevant content in a Amazon Q Business application based on a query. This operation takes a search query text, the Amazon Q Business application identifier, and optional filters (such as content source and maximum results) as input. It returns a list of relevant content items, where each item includes the content text, the unique document identifier, the document title, the document URI, any relevant document attributes, and score attributes indicating the confidence level of the relevance.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Amazon Q Business application to search.</td>
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
    defaultValue="search_relevant_content"
    values={[
        { label: 'search_relevant_content', value: 'search_relevant_content' }
    ]}
>
<TabItem value="search_relevant_content">

Searches for relevant content in a Amazon Q Business application based on a query. This operation takes a search query text, the Amazon Q Business application identifier, and optional filters (such as content source and maximum results) as input. It returns a list of relevant content items, where each item includes the content text, the unique document identifier, the document title, the document URI, any relevant document attributes, and score attributes indicating the confidence level of the relevance.

```sql
SELECT
content,
documentAttributes,
documentId,
documentTitle,
documentUri,
scoreAttributes
FROM aws.qbusiness.relevant_contents
WHERE application_id = '{{ application_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
