--- 
title: classifiers
hide_title: false
hide_table_of_contents: false
keywords:
  - classifiers
  - glue
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

Creates, updates, deletes, gets or lists a <code>classifiers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="classifiers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.classifiers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_classifier"
    values={[
        { label: 'get_classifier', value: 'get_classifier' },
        { label: 'get_classifiers', value: 'get_classifiers' }
    ]}
>
<TabItem value="get_classifier">

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
    <td><CopyableCode code="csv_classifier" /></td>
    <td><code>object</code></td>
    <td>A classifier for comma-separated values (CSV).</td>
</tr>
<tr>
    <td><CopyableCode code="grok_classifier" /></td>
    <td><code>object</code></td>
    <td>A classifier that uses grok.</td>
</tr>
<tr>
    <td><CopyableCode code="json_classifier" /></td>
    <td><code>object</code></td>
    <td>A classifier for JSON content.</td>
</tr>
<tr>
    <td><CopyableCode code="xml_classifier" /></td>
    <td><code>object</code></td>
    <td>A classifier for XML content.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_classifiers">

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
    <td><CopyableCode code="csv_classifier" /></td>
    <td><code>object</code></td>
    <td>A classifier for comma-separated values (CSV).</td>
</tr>
<tr>
    <td><CopyableCode code="grok_classifier" /></td>
    <td><code>object</code></td>
    <td>A classifier that uses grok.</td>
</tr>
<tr>
    <td><CopyableCode code="json_classifier" /></td>
    <td><code>object</code></td>
    <td>A classifier for JSON content.</td>
</tr>
<tr>
    <td><CopyableCode code="xml_classifier" /></td>
    <td><code>object</code></td>
    <td>A classifier for XML content.</td>
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
    <td><a href="#get_classifier"><CopyableCode code="get_classifier" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve a classifier by name.</td>
</tr>
<tr>
    <td><a href="#get_classifiers"><CopyableCode code="get_classifiers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all classifier objects in the Data Catalog.</td>
</tr>
<tr>
    <td><a href="#create_classifier"><CopyableCode code="create_classifier" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a classifier in the user's account. This can be a GrokClassifier, an XMLClassifier, a JsonClassifier, or a CsvClassifier, depending on which field of the request is present.</td>
</tr>
<tr>
    <td><a href="#update_classifier"><CopyableCode code="update_classifier" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Modifies an existing classifier (a GrokClassifier, an XMLClassifier, a JsonClassifier, or a CsvClassifier, depending on which field is present).</td>
</tr>
<tr>
    <td><a href="#delete_classifier"><CopyableCode code="delete_classifier" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a classifier from the Data Catalog.</td>
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
    defaultValue="get_classifier"
    values={[
        { label: 'get_classifier', value: 'get_classifier' },
        { label: 'get_classifiers', value: 'get_classifiers' }
    ]}
>
<TabItem value="get_classifier">

Retrieve a classifier by name.

```sql
SELECT
csv_classifier,
grok_classifier,
json_classifier,
xml_classifier
FROM aws.glue.classifiers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_classifiers">

Lists all classifier objects in the Data Catalog.

```sql
SELECT
csv_classifier,
grok_classifier,
json_classifier,
xml_classifier
FROM aws.glue.classifiers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_classifier"
    values={[
        { label: 'create_classifier', value: 'create_classifier' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_classifier">

Creates a classifier in the user's account. This can be a GrokClassifier, an XMLClassifier, a JsonClassifier, or a CsvClassifier, depending on which field of the request is present.

```sql
INSERT INTO aws.glue.classifiers (
GrokClassifier,
XMLClassifier,
JsonClassifier,
CsvClassifier,
region
)
SELECT 
'{{ GrokClassifier }}',
'{{ XMLClassifier }}',
'{{ JsonClassifier }}',
'{{ CsvClassifier }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: classifiers
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the classifiers resource.
    - name: GrokClassifier
      description: |
        A GrokClassifier object specifying the classifier to create.
      value:
        Classification: "{{ Classification }}"
        Name: "{{ Name }}"
        GrokPattern: "{{ GrokPattern }}"
        CustomPatterns: "{{ CustomPatterns }}"
    - name: XMLClassifier
      description: |
        An XMLClassifier object specifying the classifier to create.
      value:
        Classification: "{{ Classification }}"
        Name: "{{ Name }}"
        RowTag: "{{ RowTag }}"
    - name: JsonClassifier
      description: |
        A JsonClassifier object specifying the classifier to create.
      value:
        Name: "{{ Name }}"
        JsonPath: "{{ JsonPath }}"
    - name: CsvClassifier
      description: |
        A CsvClassifier object specifying the classifier to create.
      value:
        Name: "{{ Name }}"
        Delimiter: "{{ Delimiter }}"
        QuoteSymbol: "{{ QuoteSymbol }}"
        ContainsHeader: "{{ ContainsHeader }}"
        Header:
          - "{{ Header }}"
        DisableValueTrimming: {{ DisableValueTrimming }}
        AllowSingleColumn: {{ AllowSingleColumn }}
        CustomDatatypeConfigured: {{ CustomDatatypeConfigured }}
        CustomDatatypes:
          - "{{ CustomDatatypes }}"
        Serde: "{{ Serde }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_classifier"
    values={[
        { label: 'update_classifier', value: 'update_classifier' }
    ]}
>
<TabItem value="update_classifier">

Modifies an existing classifier (a GrokClassifier, an XMLClassifier, a JsonClassifier, or a CsvClassifier, depending on which field is present).

```sql
UPDATE aws.glue.classifiers
SET 
GrokClassifier = '{{ GrokClassifier }}',
XMLClassifier = '{{ XMLClassifier }}',
JsonClassifier = '{{ JsonClassifier }}',
CsvClassifier = '{{ CsvClassifier }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_classifier"
    values={[
        { label: 'delete_classifier', value: 'delete_classifier' }
    ]}
>
<TabItem value="delete_classifier">

Removes a classifier from the Data Catalog.

```sql
DELETE FROM aws.glue.classifiers
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
