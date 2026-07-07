--- 
title: vocabularies
hide_title: false
hide_table_of_contents: false
keywords:
  - vocabularies
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

Creates, updates, deletes, gets or lists a <code>vocabularies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vocabularies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.vocabularies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_vocabulary"
    values={[
        { label: 'describe_vocabulary', value: 'describe_vocabulary' },
        { label: 'search_vocabularies', value: 'search_vocabularies' }
    ]}
>
<TabItem value="describe_vocabulary">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the custom vocabulary.</td>
</tr>
<tr>
    <td><CopyableCode code="Content" /></td>
    <td><code>string</code></td>
    <td>The content of the custom vocabulary in plain-text format with a table of values. Each row in the table represents a word or a phrase, described with Phrase, IPA, SoundsLike, and DisplayAs fields. Separate the fields with TAB characters. For more information, see Create a custom vocabulary using a table.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>The reason why the custom vocabulary was not created.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the custom vocabulary.</td>
</tr>
<tr>
    <td><CopyableCode code="LanguageCode" /></td>
    <td><code>string</code></td>
    <td>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see What is Amazon Transcribe? (ar-AE, de-CH, de-DE, en-AB, en-AU, en-GB, en-IE, en-IN, en-US, en-WL, es-ES, es-US, fr-CA, fr-FR, hi-IN, it-IT, ja-JP, ko-KR, pt-BR, pt-PT, zh-CN, en-NZ, en-ZA, ca-ES, da-DK, fi-FI, id-ID, ms-MY, nl-NL, no-NO, pl-PL, sv-SE, tl-PH)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the custom vocabulary was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A unique name of the custom vocabulary. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z._-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the custom vocabulary. (CREATION_IN_PROGRESS, ACTIVE, CREATION_FAILED, DELETE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "Tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_vocabularies">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the custom vocabulary.</td>
</tr>
<tr>
    <td><CopyableCode code="FailureReason" /></td>
    <td><code>string</code></td>
    <td>The reason why the custom vocabulary was not created.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the custom vocabulary.</td>
</tr>
<tr>
    <td><CopyableCode code="LanguageCode" /></td>
    <td><code>string</code></td>
    <td>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see What is Amazon Transcribe? (ar-AE, de-CH, de-DE, en-AB, en-AU, en-GB, en-IE, en-IN, en-US, en-WL, es-ES, es-US, fr-CA, fr-FR, hi-IN, it-IT, ja-JP, ko-KR, pt-BR, pt-PT, zh-CN, en-NZ, en-ZA, ca-ES, da-DK, fi-FI, id-ID, ms-MY, nl-NL, no-NO, pl-PL, sv-SE, tl-PH)</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the custom vocabulary was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>A unique name of the custom vocabulary. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z._-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The current state of the custom vocabulary. (CREATION_IN_PROGRESS, ACTIVE, CREATION_FAILED, DELETE_IN_PROGRESS)</td>
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
    <td><a href="#describe_vocabulary"><CopyableCode code="describe_vocabulary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-vocabulary_id"><code>vocabulary_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified vocabulary.</td>
</tr>
<tr>
    <td><a href="#search_vocabularies"><CopyableCode code="search_vocabularies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches for vocabularies within a specific Amazon Connect instance using State, NameStartsWith, and LanguageCode.</td>
</tr>
<tr>
    <td><a href="#create_vocabulary"><CopyableCode code="create_vocabulary" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-VocabularyName"><code>VocabularyName</code></a>, <a href="#parameter-LanguageCode"><code>LanguageCode</code></a>, <a href="#parameter-Content"><code>Content</code></a></td>
    <td></td>
    <td>Creates a custom vocabulary associated with your Amazon Connect instance. You can set a custom vocabulary to be your default vocabulary for a given language. Contact Lens for Amazon Connect uses the default vocabulary in post-call and real-time contact analysis sessions for that language.</td>
</tr>
<tr>
    <td><a href="#delete_vocabulary"><CopyableCode code="delete_vocabulary" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-vocabulary_id"><code>vocabulary_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the vocabulary that has the given identifier.</td>
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
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-vocabulary_id">
    <td><CopyableCode code="vocabulary_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the custom vocabulary.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_vocabulary"
    values={[
        { label: 'describe_vocabulary', value: 'describe_vocabulary' },
        { label: 'search_vocabularies', value: 'search_vocabularies' }
    ]}
>
<TabItem value="describe_vocabulary">

Describes the specified vocabulary.

```sql
SELECT
Arn,
Content,
FailureReason,
Id,
LanguageCode,
LastModifiedTime,
Name,
State,
Tags
FROM aws.connect.vocabularies
WHERE instance_id = '{{ instance_id }}' -- required
AND vocabulary_id = '{{ vocabulary_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="search_vocabularies">

Searches for vocabularies within a specific Amazon Connect instance using State, NameStartsWith, and LanguageCode.

```sql
SELECT
Arn,
FailureReason,
Id,
LanguageCode,
LastModifiedTime,
Name,
State
FROM aws.connect.vocabularies
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_vocabulary"
    values={[
        { label: 'create_vocabulary', value: 'create_vocabulary' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_vocabulary">

Creates a custom vocabulary associated with your Amazon Connect instance. You can set a custom vocabulary to be your default vocabulary for a given language. Contact Lens for Amazon Connect uses the default vocabulary in post-call and real-time contact analysis sessions for that language.

```sql
INSERT INTO aws.connect.vocabularies (
ClientToken,
VocabularyName,
LanguageCode,
Content,
Tags,
instance_id,
region
)
SELECT 
'{{ ClientToken }}',
'{{ VocabularyName }}' /* required */,
'{{ LanguageCode }}' /* required */,
'{{ Content }}' /* required */,
'{{ Tags }}',
'{{ instance_id }}',
'{{ region }}'
RETURNING
State,
VocabularyArn,
VocabularyId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vocabularies
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the vocabularies resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vocabularies resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: VocabularyName
      value: "{{ VocabularyName }}"
    - name: LanguageCode
      value: "{{ LanguageCode }}"
      valid_values: ['ar-AE', 'de-CH', 'de-DE', 'en-AB', 'en-AU', 'en-GB', 'en-IE', 'en-IN', 'en-US', 'en-WL', 'es-ES', 'es-US', 'fr-CA', 'fr-FR', 'hi-IN', 'it-IT', 'ja-JP', 'ko-KR', 'pt-BR', 'pt-PT', 'zh-CN', 'en-NZ', 'en-ZA', 'ca-ES', 'da-DK', 'fi-FI', 'id-ID', 'ms-MY', 'nl-NL', 'no-NO', 'pl-PL', 'sv-SE', 'tl-PH']
    - name: Content
      value: "{{ Content }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_vocabulary"
    values={[
        { label: 'delete_vocabulary', value: 'delete_vocabulary' }
    ]}
>
<TabItem value="delete_vocabulary">

Deletes the vocabulary that has the given identifier.

```sql
DELETE FROM aws.connect.vocabularies
WHERE instance_id = '{{ instance_id }}' --required
AND vocabulary_id = '{{ vocabulary_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
