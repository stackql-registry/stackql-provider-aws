--- 
title: sentiments
hide_title: false
hide_table_of_contents: false
keywords:
  - sentiments
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

Creates, updates, deletes, gets or lists a <code>sentiments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sentiments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.comprehend.sentiments" /></td></tr>
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
    <td><a href="#batch_detect_sentiment"><CopyableCode code="batch_detect_sentiment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TextList"><code>TextList</code></a>, <a href="#parameter-LanguageCode"><code>LanguageCode</code></a></td>
    <td></td>
    <td>Inspects a batch of documents and returns an inference of the prevailing sentiment, POSITIVE, NEUTRAL, MIXED, or NEGATIVE, in each one.</td>
</tr>
<tr>
    <td><a href="#detect_sentiment"><CopyableCode code="detect_sentiment" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Text"><code>Text</code></a>, <a href="#parameter-LanguageCode"><code>LanguageCode</code></a></td>
    <td></td>
    <td>Inspects text and returns an inference of the prevailing sentiment (POSITIVE, NEUTRAL, MIXED, or NEGATIVE).</td>
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
    defaultValue="batch_detect_sentiment"
    values={[
        { label: 'batch_detect_sentiment', value: 'batch_detect_sentiment' },
        { label: 'detect_sentiment', value: 'detect_sentiment' }
    ]}
>
<TabItem value="batch_detect_sentiment">

Inspects a batch of documents and returns an inference of the prevailing sentiment, POSITIVE, NEUTRAL, MIXED, or NEGATIVE, in each one.

```sql
EXEC aws.comprehend.sentiments.batch_detect_sentiment 
@region='{{ region }}' --required 
@@json=
'{
"TextList": "{{ TextList }}", 
"LanguageCode": "{{ LanguageCode }}"
}'
;
```
</TabItem>
<TabItem value="detect_sentiment">

Inspects text and returns an inference of the prevailing sentiment (POSITIVE, NEUTRAL, MIXED, or NEGATIVE).

```sql
EXEC aws.comprehend.sentiments.detect_sentiment 
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
