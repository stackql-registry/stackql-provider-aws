--- 
title: glossary_terms
hide_title: false
hide_table_of_contents: false
keywords:
  - glossary_terms
  - datazone
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

Creates, updates, deletes, gets or lists a <code>glossary_terms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="glossary_terms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.glossary_terms" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_glossary_term"
    values={[
        { label: 'get_glossary_term', value: 'get_glossary_term' }
    ]}
>
<TabItem value="get_glossary_term">

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
    <td>The ID of the business glossary term. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the business glossary term.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the business glossary term was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who created the business glossary.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone domain in which this business glossary term exists. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="glossary_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the business glossary to which this term belongs. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="long_description" /></td>
    <td><code>string</code></td>
    <td>The long description of the business glossary term.</td>
</tr>
<tr>
    <td><CopyableCode code="short_description" /></td>
    <td><code>string</code></td>
    <td>The short decription of the business glossary term.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the business glossary term. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="term_relations" /></td>
    <td><code>object</code></td>
    <td>The details of the term relations.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the business glossary term was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who updated the business glossary term.</td>
</tr>
<tr>
    <td><CopyableCode code="usage_restrictions" /></td>
    <td><code>array</code></td>
    <td>The usage restriction of a term within a restricted glossary.</td>
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
    <td><a href="#get_glossary_term"><CopyableCode code="get_glossary_term" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a business glossary term in Amazon DataZone. Prerequisites: Glossary term with identifier must exist in the domain. User must have permission on the glossary term. Domain must be accessible and active.</td>
</tr>
<tr>
    <td><a href="#create_glossary_term"><CopyableCode code="create_glossary_term" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-glossaryIdentifier"><code>glossaryIdentifier</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a business glossary term. A glossary term represents an individual entry within the Amazon DataZone glossary, serving as a standardized definition for a specific business concept or data element. Each term can include rich metadata such as detailed definitions, synonyms, related terms, and usage examples. Glossary terms can be linked directly to data assets, providing business context to technical data elements. This linking capability helps users understand the business meaning of data fields and ensures consistent interpretation across different systems and teams. Terms can also have relationships with other terms, creating a semantic network that reflects the complexity of business concepts. Prerequisites: Domain must exist. Glossary must exist. The term name must be unique within the glossary. Ensure term does not conflict with existing terms in hierarchy.</td>
</tr>
<tr>
    <td><a href="#update_glossary_term"><CopyableCode code="update_glossary_term" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a business glossary term in Amazon DataZone. Prerequisites: Glossary term must exist in the specified domain. New name must not conflict with existing terms in the same glossary. User must have permissions on the term. The term must not be in DELETED status.</td>
</tr>
<tr>
    <td><a href="#delete_glossary_term"><CopyableCode code="delete_glossary_term" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a business glossary term in Amazon DataZone. Prerequisites: Glossary term must exist and be active. The term must not be linked to other assets or child terms. Caller must have delete permissions in the domain/glossary. Ensure all associations (such as to assets or parent terms) are removed before deletion.</td>
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
<tr id="parameter-domain_identifier">
    <td><CopyableCode code="domain_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone domain in which the business glossary term is deleted.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the business glossary term that is deleted.</td>
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
    defaultValue="get_glossary_term"
    values={[
        { label: 'get_glossary_term', value: 'get_glossary_term' }
    ]}
>
<TabItem value="get_glossary_term">

Gets a business glossary term in Amazon DataZone. Prerequisites: Glossary term with identifier must exist in the domain. User must have permission on the glossary term. Domain must be accessible and active.

```sql
SELECT
id,
name,
created_at,
created_by,
domain_id,
glossary_id,
long_description,
short_description,
status,
term_relations,
updated_at,
updated_by,
usage_restrictions
FROM aws.datazone.glossary_terms
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_glossary_term"
    values={[
        { label: 'create_glossary_term', value: 'create_glossary_term' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_glossary_term">

Creates a business glossary term. A glossary term represents an individual entry within the Amazon DataZone glossary, serving as a standardized definition for a specific business concept or data element. Each term can include rich metadata such as detailed definitions, synonyms, related terms, and usage examples. Glossary terms can be linked directly to data assets, providing business context to technical data elements. This linking capability helps users understand the business meaning of data fields and ensures consistent interpretation across different systems and teams. Terms can also have relationships with other terms, creating a semantic network that reflects the complexity of business concepts. Prerequisites: Domain must exist. Glossary must exist. The term name must be unique within the glossary. Ensure term does not conflict with existing terms in hierarchy.

```sql
INSERT INTO aws.datazone.glossary_terms (
glossaryIdentifier,
name,
status,
shortDescription,
longDescription,
termRelations,
clientToken,
domain_identifier,
region
)
SELECT 
'{{ glossaryIdentifier }}' /* required */,
'{{ name }}' /* required */,
'{{ status }}',
'{{ shortDescription }}',
'{{ longDescription }}',
'{{ termRelations }}',
'{{ clientToken }}',
'{{ domain_identifier }}',
'{{ region }}'
RETURNING
id,
name,
domain_id,
glossary_id,
long_description,
short_description,
status,
term_relations,
usage_restrictions
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: glossary_terms
  props:
    - name: domain_identifier
      value: "{{ domain_identifier }}"
      description: Required parameter for the glossary_terms resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the glossary_terms resource.
    - name: glossaryIdentifier
      value: "{{ glossaryIdentifier }}"
    - name: name
      value: "{{ name }}"
    - name: status
      value: "{{ status }}"
      valid_values: ['ENABLED', 'DISABLED']
    - name: shortDescription
      value: "{{ shortDescription }}"
    - name: longDescription
      value: "{{ longDescription }}"
    - name: termRelations
      description: |
        The details of the term relations.
      value:
        isA:
          - "{{ isA }}"
        classifies:
          - "{{ classifies }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_glossary_term"
    values={[
        { label: 'update_glossary_term', value: 'update_glossary_term' }
    ]}
>
<TabItem value="update_glossary_term">

Updates a business glossary term in Amazon DataZone. Prerequisites: Glossary term must exist in the specified domain. New name must not conflict with existing terms in the same glossary. User must have permissions on the term. The term must not be in DELETED status.

```sql
UPDATE aws.datazone.glossary_terms
SET 
glossaryIdentifier = '{{ glossaryIdentifier }}',
name = '{{ name }}',
shortDescription = '{{ shortDescription }}',
longDescription = '{{ longDescription }}',
termRelations = '{{ termRelations }}',
status = '{{ status }}'
WHERE 
domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
domain_id,
glossary_id,
long_description,
short_description,
status,
term_relations,
usage_restrictions;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_glossary_term"
    values={[
        { label: 'delete_glossary_term', value: 'delete_glossary_term' }
    ]}
>
<TabItem value="delete_glossary_term">

Deletes a business glossary term in Amazon DataZone. Prerequisites: Glossary term must exist and be active. The term must not be linked to other assets or child terms. Caller must have delete permissions in the domain/glossary. Ensure all associations (such as to assets or parent terms) are removed before deletion.

```sql
DELETE FROM aws.datazone.glossary_terms
WHERE domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
