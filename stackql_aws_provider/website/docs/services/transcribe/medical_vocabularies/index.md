--- 
title: medical_vocabularies
hide_title: false
hide_table_of_contents: false
keywords:
  - medical_vocabularies
  - transcribe
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

Creates, updates, deletes, gets or lists a <code>medical_vocabularies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="medical_vocabularies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.transcribe.medical_vocabularies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_medical_vocabulary"
    values={[
        { label: 'get_medical_vocabulary', value: 'get_medical_vocabulary' },
        { label: 'list_medical_vocabularies', value: 'list_medical_vocabularies' }
    ]}
>
<TabItem value="get_medical_vocabulary">

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
    <td><CopyableCode code="download_uri" /></td>
    <td><code>string</code></td>
    <td>The Amazon S3 location where the specified custom medical vocabulary is stored; use this URI to view or download the custom vocabulary. (pattern: &lt;code&gt;(s3:​//|http(s*):​//).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>If VocabularyState is FAILED, FailureReason contains information about why the custom medical vocabulary request failed. See also: Common Errors.</td>
</tr>
<tr>
    <td><CopyableCode code="language_code" /></td>
    <td><code>string</code></td>
    <td>The language code you selected for your custom medical vocabulary. US English (en-US) is the only language supported with Amazon Transcribe Medical. (af-ZA, ar-AE, ar-SA, da-DK, de-CH, de-DE, en-AB, en-AU, en-GB, en-IE, en-IN, en-US, en-WL, es-ES, es-US, fa-IR, fr-CA, fr-FR, he-IL, hi-IN, id-ID, it-IT, ja-JP, ko-KR, ms-MY, nl-NL, pt-BR, pt-PT, ru-RU, ta-IN, te-IN, tr-TR, zh-CN, zh-TW, th-TH, en-ZA, en-NZ, vi-VN, sv-SE, ab-GE, ast-ES, az-AZ, ba-RU, be-BY, bg-BG, bn-IN, bs-BA, ca-ES, ckb-IQ, ckb-IR, cs-CZ, cy-WL, el-GR, et-EE, et-ET, eu-ES, fi-FI, gl-ES, gu-IN, ha-NG, hr-HR, hu-HU, hy-AM, is-IS, ka-GE, kab-DZ, kk-KZ, kn-IN, ky-KG, lg-IN, lt-LT, lv-LV, mhr-RU, mi-NZ, mk-MK, ml-IN, mn-MN, mr-IN, mt-MT, no-NO, or-IN, pa-IN, pl-PL, ps-AF, ro-RO, rw-RW, si-LK, sk-SK, sl-SI, so-SO, sr-RS, su-ID, sw-BI, sw-KE, sw-RW, sw-TZ, sw-UG, tl-PH, tt-RU, ug-CN, uk-UA, uz-UZ, wo-SN, zh-HK, zu-ZA)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the specified custom medical vocabulary was last modified. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents 12:32 PM UTC-7 on May 4, 2022.</td>
</tr>
<tr>
    <td><CopyableCode code="vocabulary_name" /></td>
    <td><code>string</code></td>
    <td>The name of the custom medical vocabulary you requested information about. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z._-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vocabulary_state" /></td>
    <td><code>string</code></td>
    <td>The processing state of your custom medical vocabulary. If the state is READY, you can use the custom vocabulary in a StartMedicalTranscriptionJob request. (PENDING, READY, FAILED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_medical_vocabularies">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>If NextToken is present in your response, it indicates that not all results are displayed. To view the next set of results, copy the string associated with the NextToken parameter in your results output, then run your request again including NextToken with the value of the copied string. Repeat as needed to view all your results. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Lists all custom medical vocabularies that have the status specified in your request. Custom vocabularies are ordered by creation date, with the newest vocabulary first. (PENDING, READY, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="vocabularies" /></td>
    <td><code>array</code></td>
    <td>Provides information about the custom medical vocabularies that match the criteria specified in your request.</td>
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
    <td><a href="#get_medical_vocabulary"><CopyableCode code="get_medical_vocabulary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides information about the specified custom medical vocabulary. To view the status of the specified custom medical vocabulary, check the VocabularyState field. If the status is READY, your custom vocabulary is available to use. If the status is FAILED, FailureReason provides details on why your vocabulary failed. To get a list of your custom medical vocabularies, use the operation.</td>
</tr>
<tr>
    <td><a href="#list_medical_vocabularies"><CopyableCode code="list_medical_vocabularies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a list of custom medical vocabularies that match the specified criteria. If no criteria are specified, all custom medical vocabularies are returned. To get detailed information about a specific custom medical vocabulary, use the operation.</td>
</tr>
<tr>
    <td><a href="#create_medical_vocabulary"><CopyableCode code="create_medical_vocabulary" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-VocabularyName"><code>VocabularyName</code></a>, <a href="#parameter-LanguageCode"><code>LanguageCode</code></a>, <a href="#parameter-VocabularyFileUri"><code>VocabularyFileUri</code></a></td>
    <td></td>
    <td>Creates a new custom medical vocabulary. Before creating a new custom medical vocabulary, you must first upload a text file that contains your vocabulary table into an Amazon S3 bucket. Note that this differs from , where you can include a list of terms within your request using the Phrases flag; CreateMedicalVocabulary does not support the Phrases flag and only accepts vocabularies in table format. Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to Character Sets for Custom Vocabularies to get the character set for your language. For more information, see Custom vocabularies.</td>
</tr>
<tr>
    <td><a href="#update_medical_vocabulary"><CopyableCode code="update_medical_vocabulary" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-VocabularyName"><code>VocabularyName</code></a>, <a href="#parameter-LanguageCode"><code>LanguageCode</code></a>, <a href="#parameter-VocabularyFileUri"><code>VocabularyFileUri</code></a></td>
    <td></td>
    <td>Updates an existing custom medical vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary.</td>
</tr>
<tr>
    <td><a href="#delete_medical_vocabulary"><CopyableCode code="delete_medical_vocabulary" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a custom medical vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using VocabularyName. Custom vocabulary names are case sensitive.</td>
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

## `SELECT` examples

<Tabs
    defaultValue="get_medical_vocabulary"
    values={[
        { label: 'get_medical_vocabulary', value: 'get_medical_vocabulary' },
        { label: 'list_medical_vocabularies', value: 'list_medical_vocabularies' }
    ]}
>
<TabItem value="get_medical_vocabulary">

Provides information about the specified custom medical vocabulary. To view the status of the specified custom medical vocabulary, check the VocabularyState field. If the status is READY, your custom vocabulary is available to use. If the status is FAILED, FailureReason provides details on why your vocabulary failed. To get a list of your custom medical vocabularies, use the operation.

```sql
SELECT
download_uri,
failure_reason,
language_code,
last_modified_time,
vocabulary_name,
vocabulary_state
FROM aws.transcribe.medical_vocabularies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_medical_vocabularies">

Provides a list of custom medical vocabularies that match the specified criteria. If no criteria are specified, all custom medical vocabularies are returned. To get detailed information about a specific custom medical vocabulary, use the operation.

```sql
SELECT
next_token,
status,
vocabularies
FROM aws.transcribe.medical_vocabularies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_medical_vocabulary"
    values={[
        { label: 'create_medical_vocabulary', value: 'create_medical_vocabulary' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_medical_vocabulary">

Creates a new custom medical vocabulary. Before creating a new custom medical vocabulary, you must first upload a text file that contains your vocabulary table into an Amazon S3 bucket. Note that this differs from , where you can include a list of terms within your request using the Phrases flag; CreateMedicalVocabulary does not support the Phrases flag and only accepts vocabularies in table format. Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary request fails. Refer to Character Sets for Custom Vocabularies to get the character set for your language. For more information, see Custom vocabularies.

```sql
INSERT INTO aws.transcribe.medical_vocabularies (
VocabularyName,
LanguageCode,
VocabularyFileUri,
Tags,
region
)
SELECT 
'{{ VocabularyName }}' /* required */,
'{{ LanguageCode }}' /* required */,
'{{ VocabularyFileUri }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
failure_reason,
language_code,
last_modified_time,
vocabulary_name,
vocabulary_state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: medical_vocabularies
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the medical_vocabularies resource.
    - name: VocabularyName
      value: "{{ VocabularyName }}"
      description: |
        A unique name, chosen by you, for your new custom medical vocabulary. This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account. If you try to create a new custom medical vocabulary with the same name as an existing custom medical vocabulary, you get a ConflictException error.
    - name: LanguageCode
      value: "{{ LanguageCode }}"
      description: |
        The language code that represents the language of the entries in your custom vocabulary. US English (en-US) is the only language supported with Amazon Transcribe Medical.
      valid_values: ['af-ZA', 'ar-AE', 'ar-SA', 'da-DK', 'de-CH', 'de-DE', 'en-AB', 'en-AU', 'en-GB', 'en-IE', 'en-IN', 'en-US', 'en-WL', 'es-ES', 'es-US', 'fa-IR', 'fr-CA', 'fr-FR', 'he-IL', 'hi-IN', 'id-ID', 'it-IT', 'ja-JP', 'ko-KR', 'ms-MY', 'nl-NL', 'pt-BR', 'pt-PT', 'ru-RU', 'ta-IN', 'te-IN', 'tr-TR', 'zh-CN', 'zh-TW', 'th-TH', 'en-ZA', 'en-NZ', 'vi-VN', 'sv-SE', 'ab-GE', 'ast-ES', 'az-AZ', 'ba-RU', 'be-BY', 'bg-BG', 'bn-IN', 'bs-BA', 'ca-ES', 'ckb-IQ', 'ckb-IR', 'cs-CZ', 'cy-WL', 'el-GR', 'et-EE', 'et-ET', 'eu-ES', 'fi-FI', 'gl-ES', 'gu-IN', 'ha-NG', 'hr-HR', 'hu-HU', 'hy-AM', 'is-IS', 'ka-GE', 'kab-DZ', 'kk-KZ', 'kn-IN', 'ky-KG', 'lg-IN', 'lt-LT', 'lv-LV', 'mhr-RU', 'mi-NZ', 'mk-MK', 'ml-IN', 'mn-MN', 'mr-IN', 'mt-MT', 'no-NO', 'or-IN', 'pa-IN', 'pl-PL', 'ps-AF', 'ro-RO', 'rw-RW', 'si-LK', 'sk-SK', 'sl-SI', 'so-SO', 'sr-RS', 'su-ID', 'sw-BI', 'sw-KE', 'sw-RW', 'sw-TZ', 'sw-UG', 'tl-PH', 'tt-RU', 'ug-CN', 'uk-UA', 'uz-UZ', 'wo-SN', 'zh-HK', 'zu-ZA']
    - name: VocabularyFileUri
      value: "{{ VocabularyFileUri }}"
      description: |
        The Amazon S3 location (URI) of the text file that contains your custom medical vocabulary. The URI must be in the same Amazon Web Services Region as the resource you're calling. Here's an example URI path: s3://DOC-EXAMPLE-BUCKET/my-vocab-file.txt
    - name: Tags
      description: |
        Adds one or more custom tags, each in the form of a key:value pair, to a new custom medical vocabulary at the time you create this new custom vocabulary. To learn more about using tags with Amazon Transcribe, refer to Tagging resources.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_medical_vocabulary"
    values={[
        { label: 'update_medical_vocabulary', value: 'update_medical_vocabulary' }
    ]}
>
<TabItem value="update_medical_vocabulary">

Updates an existing custom medical vocabulary with new values. This operation overwrites all existing information with your new values; you cannot append new terms onto an existing custom vocabulary.

```sql
UPDATE aws.transcribe.medical_vocabularies
SET 
VocabularyName = '{{ VocabularyName }}',
LanguageCode = '{{ LanguageCode }}',
VocabularyFileUri = '{{ VocabularyFileUri }}'
WHERE 
region = '{{ region }}' --required
AND VocabularyName = '{{ VocabularyName }}' --required
AND LanguageCode = '{{ LanguageCode }}' --required
AND VocabularyFileUri = '{{ VocabularyFileUri }}' --required
RETURNING
language_code,
last_modified_time,
vocabulary_name,
vocabulary_state;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_medical_vocabulary"
    values={[
        { label: 'delete_medical_vocabulary', value: 'delete_medical_vocabulary' }
    ]}
>
<TabItem value="delete_medical_vocabulary">

Deletes a custom medical vocabulary. To use this operation, specify the name of the custom vocabulary you want to delete using VocabularyName. Custom vocabulary names are case sensitive.

```sql
DELETE FROM aws.transcribe.medical_vocabularies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
