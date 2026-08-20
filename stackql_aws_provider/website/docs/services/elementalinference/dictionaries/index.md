--- 
title: dictionaries
hide_title: false
hide_table_of_contents: false
keywords:
  - dictionaries
  - elementalinference
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

Creates, updates, deletes, gets or lists a <code>dictionaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dictionaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elementalinference.dictionaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_dictionary"
    values={[
        { label: 'get_dictionary', value: 'get_dictionary' },
        { label: 'list_dictionaries', value: 'list_dictionaries' }
    ]}
>
<TabItem value="get_dictionary">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the dictionary. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the dictionary. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(&#91;a-zA-Z0-9-_&#93;&#123;0,126&#125;&#91;a-zA-Z0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the dictionary.</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>The language of the dictionary. (eng, fra, ita, deu, spa, por)</td>
</tr>
<tr>
    <td><CopyableCode code="references" /></td>
    <td><code>array</code></td>
    <td>A list of feed IDs that reference this dictionary.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the dictionary. (CREATING, AVAILABLE, REFERENCED, DELETING, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags associated with the dictionary.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_dictionaries">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the dictionary. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the dictionary. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(&#91;a-zA-Z0-9-_&#93;&#123;0,126&#125;&#91;a-zA-Z0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the dictionary.</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>The language of the dictionary. (eng, fra, ita, deu, spa, por)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the dictionary. (CREATING, AVAILABLE, REFERENCED, DELETING, DELETED)</td>
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
    <td><a href="#get_dictionary"><CopyableCode code="get_dictionary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the specified dictionary.</td>
</tr>
<tr>
    <td><a href="#list_dictionaries"><CopyableCode code="list_dictionaries" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the dictionaries in your account.</td>
</tr>
<tr>
    <td><a href="#create_dictionary"><CopyableCode code="create_dictionary" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-language"><code>language</code></a></td>
    <td></td>
    <td>Creates a custom dictionary for improving transcription accuracy. A dictionary contains custom words and phrases that the ASR engine might not recognize, such as brand names, technical terms, or proper nouns. You can reference a dictionary when configuring a smart subtitles output.</td>
</tr>
<tr>
    <td><a href="#update_dictionary"><CopyableCode code="update_dictionary" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the specified dictionary.</td>
</tr>
<tr>
    <td><a href="#delete_dictionary"><CopyableCode code="delete_dictionary" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified dictionary. You cannot delete a dictionary that is referenced by a feed. You must first remove the dictionary reference from the feed's subtitling configuration.</td>
</tr>
<tr>
    <td><a href="#export_dictionary_entries"><CopyableCode code="export_dictionary_entries" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Exports the entries from the specified dictionary.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the dictionary whose entries you want to export.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per API request. Valid range: 1 to 100.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token that identifies the next batch of results to return.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_dictionary"
    values={[
        { label: 'get_dictionary', value: 'get_dictionary' },
        { label: 'list_dictionaries', value: 'list_dictionaries' }
    ]}
>
<TabItem value="get_dictionary">

Retrieves information about the specified dictionary.

```sql
SELECT
id,
name,
arn,
language,
references,
status,
tags
FROM aws.elementalinference.dictionaries
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_dictionaries">

Lists the dictionaries in your account.

```sql
SELECT
id,
name,
arn,
language,
status
FROM aws.elementalinference.dictionaries
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_dictionary"
    values={[
        { label: 'create_dictionary', value: 'create_dictionary' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_dictionary">

Creates a custom dictionary for improving transcription accuracy. A dictionary contains custom words and phrases that the ASR engine might not recognize, such as brand names, technical terms, or proper nouns. You can reference a dictionary when configuring a smart subtitles output.

```sql
INSERT INTO aws.elementalinference.dictionaries (
name,
language,
entries,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ language }}' /* required */,
'{{ entries }}',
'{{ tags }}',
'{{ region }}'
RETURNING
id,
name,
arn,
language,
references,
status,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: dictionaries
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the dictionaries resource.
    - name: name
      value: "{{ name }}"
    - name: language
      value: "{{ language }}"
      valid_values: ['eng', 'fra', 'ita', 'deu', 'spa', 'por']
    - name: entries
      value: "{{ entries }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_dictionary"
    values={[
        { label: 'update_dictionary', value: 'update_dictionary' }
    ]}
>
<TabItem value="update_dictionary">

Updates the specified dictionary.

```sql
UPDATE aws.elementalinference.dictionaries
SET 
name = '{{ name }}',
language = '{{ language }}',
entries = '{{ entries }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
arn,
language,
references,
status,
tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_dictionary"
    values={[
        { label: 'delete_dictionary', value: 'delete_dictionary' }
    ]}
>
<TabItem value="delete_dictionary">

Deletes the specified dictionary. You cannot delete a dictionary that is referenced by a feed. You must first remove the dictionary reference from the feed's subtitling configuration.

```sql
DELETE FROM aws.elementalinference.dictionaries
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="export_dictionary_entries"
    values={[
        { label: 'export_dictionary_entries', value: 'export_dictionary_entries' }
    ]}
>
<TabItem value="export_dictionary_entries">

Exports the entries from the specified dictionary.

```sql
EXEC aws.elementalinference.dictionaries.export_dictionary_entries 
@id='{{ id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
