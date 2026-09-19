--- 
title: pii_entities
hide_title: false
hide_table_of_contents: false
keywords:
  - pii_entities
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

Creates, updates, deletes, gets or lists a <code>pii_entities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pii_entities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.comprehend.pii_entities" /></td></tr>
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
    <td><a href="#contains_pii_entities"><CopyableCode code="contains_pii_entities" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Text"><code>Text</code></a>, <a href="#parameter-LanguageCode"><code>LanguageCode</code></a></td>
    <td></td>
    <td>Analyzes input text for the presence of personally identifiable information (PII) and returns the labels of identified PII entity types such as name, address, bank account number, or phone number.</td>
</tr>
<tr>
    <td><a href="#detect_pii_entities"><CopyableCode code="detect_pii_entities" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Text"><code>Text</code></a>, <a href="#parameter-LanguageCode"><code>LanguageCode</code></a></td>
    <td></td>
    <td>Inspects the input text for entities that contain personally identifiable information (PII) and returns information about them.</td>
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
    defaultValue="contains_pii_entities"
    values={[
        { label: 'contains_pii_entities', value: 'contains_pii_entities' },
        { label: 'detect_pii_entities', value: 'detect_pii_entities' }
    ]}
>
<TabItem value="contains_pii_entities">

Analyzes input text for the presence of personally identifiable information (PII) and returns the labels of identified PII entity types such as name, address, bank account number, or phone number.

```sql
EXEC aws.comprehend.pii_entities.contains_pii_entities 
@region='{{ region }}' --required 
@@json=
'{
"Text": "{{ Text }}", 
"LanguageCode": "{{ LanguageCode }}"
}'
;
```
</TabItem>
<TabItem value="detect_pii_entities">

Inspects the input text for entities that contain personally identifiable information (PII) and returns information about them.

```sql
EXEC aws.comprehend.pii_entities.detect_pii_entities 
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
