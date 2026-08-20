--- 
title: default_vocabularies
hide_title: false
hide_table_of_contents: false
keywords:
  - default_vocabularies
  - connect
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

Creates, updates, deletes, gets or lists a <code>default_vocabularies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="default_vocabularies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.default_vocabularies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_default_vocabularies"
    values={[
        { label: 'list_default_vocabularies', value: 'list_default_vocabularies' }
    ]}
>
<TabItem value="list_default_vocabularies">

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
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr>
    <td><CopyableCode code="language_code" /></td>
    <td><code>string</code></td>
    <td>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see What is Amazon Transcribe? (ar-AE, de-CH, de-DE, en-AB, en-AU, en-GB, en-IE, en-IN, en-US, en-WL, es-ES, es-US, fr-CA, fr-FR, hi-IN, it-IT, ja-JP, ko-KR, pt-BR, pt-PT, zh-CN, en-NZ, en-ZA, ca-ES, da-DK, fi-FI, id-ID, ms-MY, nl-NL, no-NO, pl-PL, sv-SE, tl-PH)</td>
</tr>
<tr>
    <td><CopyableCode code="vocabulary_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the custom vocabulary.</td>
</tr>
<tr>
    <td><CopyableCode code="vocabulary_name" /></td>
    <td><code>string</code></td>
    <td>A unique name of the custom vocabulary. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z._-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#list_default_vocabularies"><CopyableCode code="list_default_vocabularies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the default vocabularies for the specified Connect Customer instance.</td>
</tr>
<tr>
    <td><a href="#associate_default_vocabulary"><CopyableCode code="associate_default_vocabulary" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-language_code"><code>language_code</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Associates an existing vocabulary as the default. Contact Lens for Connect Customer uses the vocabulary in post-call and real-time analysis sessions for the given language.</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-language_code">
    <td><CopyableCode code="language_code" /></td>
    <td><code>string</code></td>
    <td>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see What is Amazon Transcribe?</td>
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
    defaultValue="list_default_vocabularies"
    values={[
        { label: 'list_default_vocabularies', value: 'list_default_vocabularies' }
    ]}
>
<TabItem value="list_default_vocabularies">

Lists the default vocabularies for the specified Connect Customer instance.

```sql
SELECT
instance_id,
language_code,
vocabulary_id,
vocabulary_name
FROM aws.connect.default_vocabularies
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_default_vocabulary"
    values={[
        { label: 'associate_default_vocabulary', value: 'associate_default_vocabulary' }
    ]}
>
<TabItem value="associate_default_vocabulary">

Associates an existing vocabulary as the default. Contact Lens for Connect Customer uses the vocabulary in post-call and real-time analysis sessions for the given language.

```sql
UPDATE aws.connect.default_vocabularies
SET 
VocabularyId = '{{ VocabularyId }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND language_code = '{{ language_code }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
