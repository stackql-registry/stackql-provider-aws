--- 
title: targeted_sentiments
hide_title: false
hide_table_of_contents: false
keywords:
  - targeted_sentiments
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

Creates, updates, deletes, gets or lists a <code>targeted_sentiments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="targeted_sentiments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.comprehend.targeted_sentiments" /></td></tr>
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
    <td><a href="#batch_detect_targeted_sentiment"><CopyableCode code="batch_detect_targeted_sentiment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TextList"><code>TextList</code></a>, <a href="#parameter-LanguageCode"><code>LanguageCode</code></a></td>
    <td></td>
    <td>Inspects a batch of documents and returns a sentiment analysis for each entity identified in the documents. For more information about targeted sentiment, see Targeted sentiment in the Amazon Comprehend Developer Guide.</td>
</tr>
<tr>
    <td><a href="#detect_targeted_sentiment"><CopyableCode code="detect_targeted_sentiment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Text"><code>Text</code></a>, <a href="#parameter-LanguageCode"><code>LanguageCode</code></a></td>
    <td></td>
    <td>Inspects the input text and returns a sentiment analysis for each entity identified in the text. For more information about targeted sentiment, see Targeted sentiment in the Amazon Comprehend Developer Guide.</td>
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
    defaultValue="batch_detect_targeted_sentiment"
    values={[
        { label: 'batch_detect_targeted_sentiment', value: 'batch_detect_targeted_sentiment' },
        { label: 'detect_targeted_sentiment', value: 'detect_targeted_sentiment' }
    ]}
>
<TabItem value="batch_detect_targeted_sentiment">

Inspects a batch of documents and returns a sentiment analysis for each entity identified in the documents. For more information about targeted sentiment, see Targeted sentiment in the Amazon Comprehend Developer Guide.

```sql
EXEC aws.comprehend.targeted_sentiments.batch_detect_targeted_sentiment 
@region='{{ region }}' --required 
@@json=
'{
"TextList": "{{ TextList }}", 
"LanguageCode": "{{ LanguageCode }}"
}'
;
```
</TabItem>
<TabItem value="detect_targeted_sentiment">

Inspects the input text and returns a sentiment analysis for each entity identified in the text. For more information about targeted sentiment, see Targeted sentiment in the Amazon Comprehend Developer Guide.

```sql
EXEC aws.comprehend.targeted_sentiments.detect_targeted_sentiment 
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
