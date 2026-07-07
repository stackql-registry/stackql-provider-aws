--- 
title: lexicons
hide_title: false
hide_table_of_contents: false
keywords:
  - lexicons
  - polly
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

Creates, updates, deletes, gets or lists a <code>lexicons</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lexicons" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.polly.lexicons" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_lexicon"
    values={[
        { label: 'get_lexicon', value: 'get_lexicon' },
        { label: 'list_lexicons', value: 'list_lexicons' }
    ]}
>
<TabItem value="get_lexicon">

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
    <td><CopyableCode code="Lexicon" /></td>
    <td><code>object</code></td>
    <td>Lexicon object that provides name and the string content of the lexicon.</td>
</tr>
<tr>
    <td><CopyableCode code="LexiconAttributes" /></td>
    <td><code>object</code></td>
    <td>Metadata of the lexicon, including phonetic alphabetic used, language code, lexicon ARN, number of lexemes defined in the lexicon, and size of lexicon in bytes.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_lexicons">

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
    <td><CopyableCode code="Attributes" /></td>
    <td><code>object</code></td>
    <td>Provides lexicon metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>Name of the lexicon. (pattern: &lt;code&gt;&#91;0-9A-Za-z&#93;&#123;1,20&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_lexicon"><CopyableCode code="get_lexicon" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-lexicon_name"><code>lexicon_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the content of the specified pronunciation lexicon stored in an Amazon Web Services Region. For more information, see Managing Lexicons.</td>
</tr>
<tr>
    <td><a href="#list_lexicons"><CopyableCode code="list_lexicons" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Returns a list of pronunciation lexicons stored in an Amazon Web Services Region. For more information, see Managing Lexicons.</td>
</tr>
<tr>
    <td><a href="#put_lexicon"><CopyableCode code="put_lexicon" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-lexicon_name"><code>lexicon_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Content"><code>Content</code></a></td>
    <td></td>
    <td>Stores a pronunciation lexicon in an Amazon Web Services Region. If a lexicon with the same name already exists in the region, it is overwritten by the new lexicon. Lexicon operations have eventual consistency, therefore, it might take some time before the lexicon is available to the SynthesizeSpeech operation. For more information, see Managing Lexicons.</td>
</tr>
<tr>
    <td><a href="#delete_lexicon"><CopyableCode code="delete_lexicon" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-lexicon_name"><code>lexicon_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified pronunciation lexicon stored in an Amazon Web Services Region. A lexicon which has been deleted is not available for speech synthesis, nor is it possible to retrieve it using either the GetLexicon or ListLexicon APIs. For more information, see Managing Lexicons.</td>
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
<tr id="parameter-lexicon_name">
    <td><CopyableCode code="lexicon_name" /></td>
    <td><code>string</code></td>
    <td>The name of the lexicon to delete. Must be an existing lexicon in the region.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>An opaque pagination token returned from previous ListLexicons operation. If present, indicates where to continue the list of lexicons.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_lexicon"
    values={[
        { label: 'get_lexicon', value: 'get_lexicon' },
        { label: 'list_lexicons', value: 'list_lexicons' }
    ]}
>
<TabItem value="get_lexicon">

Returns the content of the specified pronunciation lexicon stored in an Amazon Web Services Region. For more information, see Managing Lexicons.

```sql
SELECT
Lexicon,
LexiconAttributes
FROM aws.polly.lexicons
WHERE lexicon_name = '{{ lexicon_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_lexicons">

Returns a list of pronunciation lexicons stored in an Amazon Web Services Region. For more information, see Managing Lexicons.

```sql
SELECT
Attributes,
Name
FROM aws.polly.lexicons
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_lexicon"
    values={[
        { label: 'put_lexicon', value: 'put_lexicon' }
    ]}
>
<TabItem value="put_lexicon">

Stores a pronunciation lexicon in an Amazon Web Services Region. If a lexicon with the same name already exists in the region, it is overwritten by the new lexicon. Lexicon operations have eventual consistency, therefore, it might take some time before the lexicon is available to the SynthesizeSpeech operation. For more information, see Managing Lexicons.

```sql
REPLACE aws.polly.lexicons
SET 
Content = '{{ Content }}'
WHERE 
lexicon_name = '{{ lexicon_name }}' --required
AND region = '{{ region }}' --required
AND Content = '{{ Content }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_lexicon"
    values={[
        { label: 'delete_lexicon', value: 'delete_lexicon' }
    ]}
>
<TabItem value="delete_lexicon">

Deletes the specified pronunciation lexicon stored in an Amazon Web Services Region. A lexicon which has been deleted is not available for speech synthesis, nor is it possible to retrieve it using either the GetLexicon or ListLexicon APIs. For more information, see Managing Lexicons.

```sql
DELETE FROM aws.polly.lexicons
WHERE lexicon_name = '{{ lexicon_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
