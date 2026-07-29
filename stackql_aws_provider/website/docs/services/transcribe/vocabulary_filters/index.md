--- 
title: vocabulary_filters
hide_title: false
hide_table_of_contents: false
keywords:
  - vocabulary_filters
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

Creates, updates, deletes, gets or lists a <code>vocabulary_filters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vocabulary_filters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.transcribe.vocabulary_filters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_vocabulary_filter"
    values={[
        { label: 'get_vocabulary_filter', value: 'get_vocabulary_filter' },
        { label: 'list_vocabulary_filters', value: 'list_vocabulary_filters' }
    ]}
>
<TabItem value="get_vocabulary_filter">

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
    <td>The Amazon S3 location where the custom vocabulary filter is stored; use this URI to view or download the custom vocabulary filter. (pattern: &lt;code&gt;(s3:​//|http(s*):​//).+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="language_code" /></td>
    <td><code>string</code></td>
    <td>The language code you selected for your custom vocabulary filter. (af-ZA, ar-AE, ar-SA, da-DK, de-CH, de-DE, en-AB, en-AU, en-GB, en-IE, en-IN, en-US, en-WL, es-ES, es-US, fa-IR, fr-CA, fr-FR, he-IL, hi-IN, id-ID, it-IT, ja-JP, ko-KR, ms-MY, nl-NL, pt-BR, pt-PT, ru-RU, ta-IN, te-IN, tr-TR, zh-CN, zh-TW, th-TH, en-ZA, en-NZ, vi-VN, sv-SE, ab-GE, ast-ES, az-AZ, ba-RU, be-BY, bg-BG, bn-IN, bs-BA, ca-ES, ckb-IQ, ckb-IR, cs-CZ, cy-WL, el-GR, et-EE, et-ET, eu-ES, fi-FI, gl-ES, gu-IN, ha-NG, hr-HR, hu-HU, hy-AM, is-IS, ka-GE, kab-DZ, kk-KZ, kn-IN, ky-KG, lg-IN, lt-LT, lv-LV, mhr-RU, mi-NZ, mk-MK, ml-IN, mn-MN, mr-IN, mt-MT, no-NO, or-IN, pa-IN, pl-PL, ps-AF, ro-RO, rw-RW, si-LK, sk-SK, sl-SI, so-SO, sr-RS, su-ID, sw-BI, sw-KE, sw-RW, sw-TZ, sw-UG, tl-PH, tt-RU, ug-CN, uk-UA, uz-UZ, wo-SN, zh-HK, zu-ZA)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the specified custom vocabulary filter was last modified. Timestamps are in the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents 12:32 PM UTC-7 on May 4, 2022.</td>
</tr>
<tr>
    <td><CopyableCode code="vocabulary_filter_name" /></td>
    <td><code>string</code></td>
    <td>The name of the custom vocabulary filter you requested information about. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z._-&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_vocabulary_filters">

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
    <td><CopyableCode code="vocabulary_filters" /></td>
    <td><code>array</code></td>
    <td>Provides information about the custom vocabulary filters that match the criteria specified in your request.</td>
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
    <td><a href="#get_vocabulary_filter"><CopyableCode code="get_vocabulary_filter" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides information about the specified custom vocabulary filter. To get a list of your custom vocabulary filters, use the operation.</td>
</tr>
<tr>
    <td><a href="#list_vocabulary_filters"><CopyableCode code="list_vocabulary_filters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a list of custom vocabulary filters that match the specified criteria. If no criteria are specified, all custom vocabularies are returned. To get detailed information about a specific custom vocabulary filter, use the operation.</td>
</tr>
<tr>
    <td><a href="#create_vocabulary_filter"><CopyableCode code="create_vocabulary_filter" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-VocabularyFilterName"><code>VocabularyFilterName</code></a>, <a href="#parameter-LanguageCode"><code>LanguageCode</code></a></td>
    <td></td>
    <td>Creates a new custom vocabulary filter. You can use custom vocabulary filters to mask, delete, or flag specific words from your transcript. Custom vocabulary filters are commonly used to mask profanity in transcripts. Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary filter request fails. Refer to Character Sets for Custom Vocabularies to get the character set for your language. For more information, see Vocabulary filtering.</td>
</tr>
<tr>
    <td><a href="#update_vocabulary_filter"><CopyableCode code="update_vocabulary_filter" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-VocabularyFilterName"><code>VocabularyFilterName</code></a></td>
    <td></td>
    <td>Updates an existing custom vocabulary filter with a new list of words. The new list you provide overwrites all previous entries; you cannot append new terms onto an existing custom vocabulary filter.</td>
</tr>
<tr>
    <td><a href="#delete_vocabulary_filter"><CopyableCode code="delete_vocabulary_filter" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a custom vocabulary filter. To use this operation, specify the name of the custom vocabulary filter you want to delete using VocabularyFilterName. Custom vocabulary filter names are case sensitive.</td>
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
    defaultValue="get_vocabulary_filter"
    values={[
        { label: 'get_vocabulary_filter', value: 'get_vocabulary_filter' },
        { label: 'list_vocabulary_filters', value: 'list_vocabulary_filters' }
    ]}
>
<TabItem value="get_vocabulary_filter">

Provides information about the specified custom vocabulary filter. To get a list of your custom vocabulary filters, use the operation.

```sql
SELECT
download_uri,
language_code,
last_modified_time,
vocabulary_filter_name
FROM aws.transcribe.vocabulary_filters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_vocabulary_filters">

Provides a list of custom vocabulary filters that match the specified criteria. If no criteria are specified, all custom vocabularies are returned. To get detailed information about a specific custom vocabulary filter, use the operation.

```sql
SELECT
next_token,
vocabulary_filters
FROM aws.transcribe.vocabulary_filters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_vocabulary_filter"
    values={[
        { label: 'create_vocabulary_filter', value: 'create_vocabulary_filter' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_vocabulary_filter">

Creates a new custom vocabulary filter. You can use custom vocabulary filters to mask, delete, or flag specific words from your transcript. Custom vocabulary filters are commonly used to mask profanity in transcripts. Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary filter request fails. Refer to Character Sets for Custom Vocabularies to get the character set for your language. For more information, see Vocabulary filtering.

```sql
INSERT INTO aws.transcribe.vocabulary_filters (
VocabularyFilterName,
LanguageCode,
Words,
VocabularyFilterFileUri,
Tags,
DataAccessRoleArn,
region
)
SELECT 
'{{ VocabularyFilterName }}' /* required */,
'{{ LanguageCode }}' /* required */,
'{{ Words }}',
'{{ VocabularyFilterFileUri }}',
'{{ Tags }}',
'{{ DataAccessRoleArn }}',
'{{ region }}'
RETURNING
language_code,
last_modified_time,
vocabulary_filter_name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vocabulary_filters
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vocabulary_filters resource.
    - name: VocabularyFilterName
      value: "{{ VocabularyFilterName }}"
      description: |
        A unique name, chosen by you, for your new custom vocabulary filter. This name is case sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account. If you try to create a new custom vocabulary filter with the same name as an existing custom vocabulary filter, you get a ConflictException error.
    - name: LanguageCode
      value: "{{ LanguageCode }}"
      description: |
        The language code that represents the language of the entries in your vocabulary filter. Each custom vocabulary filter must contain terms in only one language. A custom vocabulary filter can only be used to transcribe files in the same language as the filter. For example, if you create a custom vocabulary filter using US English (en-US), you can only apply this filter to files that contain English audio. For a list of supported languages and their associated language codes, refer to the Supported languages table.
      valid_values: ['af-ZA', 'ar-AE', 'ar-SA', 'da-DK', 'de-CH', 'de-DE', 'en-AB', 'en-AU', 'en-GB', 'en-IE', 'en-IN', 'en-US', 'en-WL', 'es-ES', 'es-US', 'fa-IR', 'fr-CA', 'fr-FR', 'he-IL', 'hi-IN', 'id-ID', 'it-IT', 'ja-JP', 'ko-KR', 'ms-MY', 'nl-NL', 'pt-BR', 'pt-PT', 'ru-RU', 'ta-IN', 'te-IN', 'tr-TR', 'zh-CN', 'zh-TW', 'th-TH', 'en-ZA', 'en-NZ', 'vi-VN', 'sv-SE', 'ab-GE', 'ast-ES', 'az-AZ', 'ba-RU', 'be-BY', 'bg-BG', 'bn-IN', 'bs-BA', 'ca-ES', 'ckb-IQ', 'ckb-IR', 'cs-CZ', 'cy-WL', 'el-GR', 'et-EE', 'et-ET', 'eu-ES', 'fi-FI', 'gl-ES', 'gu-IN', 'ha-NG', 'hr-HR', 'hu-HU', 'hy-AM', 'is-IS', 'ka-GE', 'kab-DZ', 'kk-KZ', 'kn-IN', 'ky-KG', 'lg-IN', 'lt-LT', 'lv-LV', 'mhr-RU', 'mi-NZ', 'mk-MK', 'ml-IN', 'mn-MN', 'mr-IN', 'mt-MT', 'no-NO', 'or-IN', 'pa-IN', 'pl-PL', 'ps-AF', 'ro-RO', 'rw-RW', 'si-LK', 'sk-SK', 'sl-SI', 'so-SO', 'sr-RS', 'su-ID', 'sw-BI', 'sw-KE', 'sw-RW', 'sw-TZ', 'sw-UG', 'tl-PH', 'tt-RU', 'ug-CN', 'uk-UA', 'uz-UZ', 'wo-SN', 'zh-HK', 'zu-ZA']
    - name: Words
      value:
        - "{{ Words }}"
      description: |
        Use this parameter if you want to create your custom vocabulary filter by including all desired terms, as comma-separated values, within your request. The other option for creating your vocabulary filter is to save your entries in a text file and upload them to an Amazon S3 bucket, then specify the location of your file using the VocabularyFilterFileUri parameter. Note that if you include Words in your request, you cannot use VocabularyFilterFileUri; you must choose one or the other. Each language has a character set that contains all allowed characters for that specific language. If you use unsupported characters, your custom vocabulary filter request fails. Refer to Character Sets for Custom Vocabularies to get the character set for your language.
    - name: VocabularyFilterFileUri
      value: "{{ VocabularyFilterFileUri }}"
      description: |
        The Amazon S3 location of the text file that contains your custom vocabulary filter terms. The URI must be located in the same Amazon Web Services Region as the resource you're calling. Here's an example URI path: s3://DOC-EXAMPLE-BUCKET/my-vocab-filter-file.txt Note that if you include VocabularyFilterFileUri in your request, you cannot use Words; you must choose one or the other.
    - name: Tags
      description: |
        Adds one or more custom tags, each in the form of a key:value pair, to a new custom vocabulary filter at the time you create this new vocabulary filter. To learn more about using tags with Amazon Transcribe, refer to Tagging resources.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: DataAccessRoleArn
      value: "{{ DataAccessRoleArn }}"
      description: |
        The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files (in this case, your custom vocabulary filter). If the role that you specify doesn’t have the appropriate permissions to access the specified Amazon S3 location, your request fails. IAM role ARNs have the format arn:partition:iam::account:role/role-name-with-path. For example: arn:aws:iam::111122223333:role/Admin. For more information, see IAM ARNs.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_vocabulary_filter"
    values={[
        { label: 'update_vocabulary_filter', value: 'update_vocabulary_filter' }
    ]}
>
<TabItem value="update_vocabulary_filter">

Updates an existing custom vocabulary filter with a new list of words. The new list you provide overwrites all previous entries; you cannot append new terms onto an existing custom vocabulary filter.

```sql
UPDATE aws.transcribe.vocabulary_filters
SET 
VocabularyFilterName = '{{ VocabularyFilterName }}',
Words = '{{ Words }}',
VocabularyFilterFileUri = '{{ VocabularyFilterFileUri }}',
DataAccessRoleArn = '{{ DataAccessRoleArn }}'
WHERE 
region = '{{ region }}' --required
AND VocabularyFilterName = '{{ VocabularyFilterName }}' --required
RETURNING
language_code,
last_modified_time,
vocabulary_filter_name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_vocabulary_filter"
    values={[
        { label: 'delete_vocabulary_filter', value: 'delete_vocabulary_filter' }
    ]}
>
<TabItem value="delete_vocabulary_filter">

Deletes a custom vocabulary filter. To use this operation, specify the name of the custom vocabulary filter you want to delete using VocabularyFilterName. Custom vocabulary filter names are case sensitive.

```sql
DELETE FROM aws.transcribe.vocabulary_filters
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
