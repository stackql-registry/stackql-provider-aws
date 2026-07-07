--- 
title: custom_data_identifiers
hide_title: false
hide_table_of_contents: false
keywords:
  - custom_data_identifiers
  - macie2
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

Creates, updates, deletes, gets or lists a <code>custom_data_identifiers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="custom_data_identifiers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.macie2.custom_data_identifiers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_custom_data_identifier"
    values={[
        { label: 'get_custom_data_identifier', value: 'get_custom_data_identifier' },
        { label: 'list_custom_data_identifiers', value: 'list_custom_data_identifiers' }
    ]}
>
<TabItem value="get_custom_data_identifier">

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
    <td>The unique identifier for the custom data identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The custom name of the custom data identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the custom data identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in UTC and extended ISO 8601 format, when the custom data identifier was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the custom data identifier was deleted. If you delete a custom data identifier, Amazon Macie doesn't delete it permanently. Instead, it soft deletes the identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The custom description of the custom data identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="ignoreWords" /></td>
    <td><code>array</code></td>
    <td>An array that lists specific character sequences (ignore words) to exclude from the results. If the text matched by the regular expression contains any string in this array, Amazon Macie ignores it. Ignore words are case sensitive.</td>
</tr>
<tr>
    <td><CopyableCode code="keywords" /></td>
    <td><code>array</code></td>
    <td>An array that lists specific character sequences (keywords), one of which must precede and be within proximity (maximumMatchDistance) of the regular expression to match. Keywords aren't case sensitive.</td>
</tr>
<tr>
    <td><CopyableCode code="maximumMatchDistance" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of characters that can exist between the end of at least one complete character sequence specified by the keywords array and the end of the text that matches the regex pattern. If a complete keyword precedes all the text that matches the pattern and the keyword is within the specified distance, Amazon Macie includes the result. Otherwise, Macie excludes the result.</td>
</tr>
<tr>
    <td><CopyableCode code="regex" /></td>
    <td><code>string</code></td>
    <td>The regular expression (regex) that defines the pattern to match.</td>
</tr>
<tr>
    <td><CopyableCode code="severityLevels" /></td>
    <td><code>array</code></td>
    <td>The severity to assign to findings that the custom data identifier produces, based on the number of occurrences of text that matches the custom data identifier's detection criteria. You can specify as many as three SeverityLevel objects in this array, one for each severity: LOW, MEDIUM, or HIGH. If you specify more than one, the occurrences thresholds must be in ascending order by severity, moving from LOW to HIGH. For example, 1 for LOW, 50 for MEDIUM, and 100 for HIGH. If an S3 object contains fewer occurrences than the lowest specified threshold, Amazon Macie doesn't create a finding. If you don't specify any values for this array, Macie creates findings for S3 objects that contain at least one occurrence of text that matches the detection criteria, and Macie automatically assigns the MEDIUM severity to those findings.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A map of key-value pairs that identifies the tags (keys and values) that are associated with the custom data identifier.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_custom_data_identifiers">

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
    <td>The unique identifier for the custom data identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The custom name of the custom data identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the custom data identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in UTC and extended ISO 8601 format, when the custom data identifier was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The custom description of the custom data identifier.</td>
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
    <td><a href="#get_custom_data_identifier"><CopyableCode code="get_custom_data_identifier" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the criteria and other settings for a custom data identifier.</td>
</tr>
<tr>
    <td><a href="#list_custom_data_identifiers"><CopyableCode code="list_custom_data_identifiers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a subset of information about the custom data identifiers for an account.</td>
</tr>
<tr>
    <td><a href="#create_custom_data_identifier"><CopyableCode code="create_custom_data_identifier" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-regex"><code>regex</code></a></td>
    <td></td>
    <td>Creates and defines the criteria and other settings for a custom data identifier.</td>
</tr>
<tr>
    <td><a href="#delete_custom_data_identifier"><CopyableCode code="delete_custom_data_identifier" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Soft deletes a custom data identifier.</td>
</tr>
<tr>
    <td><a href="#batch_get_custom_data_identifiers"><CopyableCode code="batch_get_custom_data_identifiers" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about one or more custom data identifiers.</td>
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
    <td>The unique identifier for the Amazon Macie resource that the request applies to.</td>
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
    defaultValue="get_custom_data_identifier"
    values={[
        { label: 'get_custom_data_identifier', value: 'get_custom_data_identifier' },
        { label: 'list_custom_data_identifiers', value: 'list_custom_data_identifiers' }
    ]}
>
<TabItem value="get_custom_data_identifier">

Retrieves the criteria and other settings for a custom data identifier.

```sql
SELECT
id,
name,
arn,
createdAt,
deleted,
description,
ignoreWords,
keywords,
maximumMatchDistance,
regex,
severityLevels,
tags
FROM aws.macie2.custom_data_identifiers
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_custom_data_identifiers">

Retrieves a subset of information about the custom data identifiers for an account.

```sql
SELECT
id,
name,
arn,
createdAt,
description
FROM aws.macie2.custom_data_identifiers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_custom_data_identifier"
    values={[
        { label: 'create_custom_data_identifier', value: 'create_custom_data_identifier' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_custom_data_identifier">

Creates and defines the criteria and other settings for a custom data identifier.

```sql
INSERT INTO aws.macie2.custom_data_identifiers (
clientToken,
description,
ignoreWords,
keywords,
maximumMatchDistance,
name,
regex,
severityLevels,
tags,
region
)
SELECT 
'{{ clientToken }}',
'{{ description }}',
'{{ ignoreWords }}',
'{{ keywords }}',
{{ maximumMatchDistance }},
'{{ name }}' /* required */,
'{{ regex }}' /* required */,
'{{ severityLevels }}',
'{{ tags }}',
'{{ region }}'
RETURNING
customDataIdentifierId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: custom_data_identifiers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the custom_data_identifiers resource.
    - name: clientToken
      value: "{{ clientToken }}"
    - name: description
      value: "{{ description }}"
    - name: ignoreWords
      value:
        - "{{ ignoreWords }}"
    - name: keywords
      value:
        - "{{ keywords }}"
    - name: maximumMatchDistance
      value: {{ maximumMatchDistance }}
    - name: name
      value: "{{ name }}"
    - name: regex
      value: "{{ regex }}"
    - name: severityLevels
      description: |
        The severity to assign to findings that the custom data identifier produces, based on the number of occurrences of text that matches the custom data identifier's detection criteria. You can specify as many as three SeverityLevel objects in this array, one for each severity: LOW, MEDIUM, or HIGH. If you specify more than one, the occurrences thresholds must be in ascending order by severity, moving from LOW to HIGH. For example, 1 for LOW, 50 for MEDIUM, and 100 for HIGH. If an S3 object contains fewer occurrences than the lowest specified threshold, Amazon Macie doesn't create a finding. If you don't specify any values for this array, Macie creates findings for S3 objects that contain at least one occurrence of text that matches the detection criteria, and Macie automatically assigns the MEDIUM severity to those findings.
      value:
        - occurrencesThreshold: {{ occurrencesThreshold }}
          severity: "{{ severity }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        A string-to-string map of key-value pairs that specifies the tags (keys and values) for an Amazon Macie resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_custom_data_identifier"
    values={[
        { label: 'delete_custom_data_identifier', value: 'delete_custom_data_identifier' }
    ]}
>
<TabItem value="delete_custom_data_identifier">

Soft deletes a custom data identifier.

```sql
DELETE FROM aws.macie2.custom_data_identifiers
WHERE id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_get_custom_data_identifiers"
    values={[
        { label: 'batch_get_custom_data_identifiers', value: 'batch_get_custom_data_identifiers' }
    ]}
>
<TabItem value="batch_get_custom_data_identifiers">

Retrieves information about one or more custom data identifiers.

```sql
EXEC aws.macie2.custom_data_identifiers.batch_get_custom_data_identifiers 
@region='{{ region }}' --required 
@@json=
'{
"ids": "{{ ids }}"
}'
;
```
</TabItem>
</Tabs>
