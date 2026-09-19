--- 
title: key_phrases
hide_title: false
hide_table_of_contents: false
keywords:
  - key_phrases
  - comprehend
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

Creates, updates, deletes, gets or lists a <code>key_phrases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="key_phrases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.comprehend.key_phrases" /></td></tr>
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
    <td><a href="#batch_detect_key_phrases"><CopyableCode code="batch_detect_key_phrases" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TextList"><code>TextList</code></a>, <a href="#parameter-LanguageCode"><code>LanguageCode</code></a></td>
    <td></td>
    <td>Detects the key noun phrases found in a batch of documents.</td>
</tr>
<tr>
    <td><a href="#detect_key_phrases"><CopyableCode code="detect_key_phrases" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Text"><code>Text</code></a>, <a href="#parameter-LanguageCode"><code>LanguageCode</code></a></td>
    <td></td>
    <td>Detects the key noun phrases found in the text.</td>
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
    defaultValue="batch_detect_key_phrases"
    values={[
        { label: 'batch_detect_key_phrases', value: 'batch_detect_key_phrases' },
        { label: 'detect_key_phrases', value: 'detect_key_phrases' }
    ]}
>
<TabItem value="batch_detect_key_phrases">

Detects the key noun phrases found in a batch of documents.

```sql
EXEC aws.comprehend.key_phrases.batch_detect_key_phrases 
@region='{{ region }}' --required 
@@json=
'{
"TextList": "{{ TextList }}", 
"LanguageCode": "{{ LanguageCode }}"
}'
;
```
</TabItem>
<TabItem value="detect_key_phrases">

Detects the key noun phrases found in the text.

```sql
EXEC aws.comprehend.key_phrases.detect_key_phrases 
@region='{{ region }}' --required 
@@json=
'{
"Text": "{{ Text }}", 
"LanguageCode": "{{ LanguageCode }}"
}'
;
```
</TabItem>
</Tabs>
