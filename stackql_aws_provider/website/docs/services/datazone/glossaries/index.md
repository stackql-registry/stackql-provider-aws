--- 
title: glossaries
hide_title: false
hide_table_of_contents: false
keywords:
  - glossaries
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

Creates, updates, deletes, gets or lists a <code>glossaries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="glossaries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.glossaries" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_glossary"
    values={[
        { label: 'get_glossary', value: 'get_glossary' }
    ]}
>
<TabItem value="get_glossary">

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
    <td>The ID of the business glossary. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the business glossary.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when this business glossary was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who created this business glossary.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the business glossary.</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone domain in which this business glossary exists. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owningProjectId" /></td>
    <td><code>string</code></td>
    <td>The ID of the project that owns this business glossary. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the business glossary. (DISABLED, ENABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the business glossary was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who updated the business glossary.</td>
</tr>
<tr>
    <td><CopyableCode code="usageRestrictions" /></td>
    <td><code>array</code></td>
    <td>The usage restriction of the restricted glossary.</td>
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
    <td><a href="#get_glossary"><CopyableCode code="get_glossary" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a business glossary in Amazon DataZone. Prerequisites: The specified glossary ID must exist and be associated with the given domain. The caller must have the datazone:GetGlossary permission on the domain.</td>
</tr>
<tr>
    <td><a href="#create_glossary"><CopyableCode code="create_glossary" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-owningProjectIdentifier"><code>owningProjectIdentifier</code></a></td>
    <td></td>
    <td>Creates an Amazon DataZone business glossary. Specifies that this is a create glossary policy. A glossary serves as the central repository for business terminology and definitions within an organization. It helps establish and maintain a common language across different departments and teams, reducing miscommunication and ensuring consistent interpretation of business concepts. Glossaries can include hierarchical relationships between terms, cross-references, and links to actual data assets, making them invaluable for both business users and technical teams trying to understand and use data correctly. Prerequisites: Domain must exist and be in an active state. Owning project must exist and be accessible by the caller. The glossary name must be unique within the domain.</td>
</tr>
<tr>
    <td><a href="#update_glossary"><CopyableCode code="update_glossary" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the business glossary in Amazon DataZone. Prerequisites: The glossary must exist in the given domain. The caller must have the datazone:UpdateGlossary permission to update it. When updating the name, the new name must be unique within the domain. The glossary must not be deleted or in a terminal state.</td>
</tr>
<tr>
    <td><a href="#delete_glossary"><CopyableCode code="delete_glossary" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a business glossary in Amazon DataZone. Prerequisites: The glossary must be in DISABLED state. The glossary must not have any glossary terms associated with it. The glossary must exist in the specified domain. The caller must have the datazone:DeleteGlossary permission in the domain and glossary. Glossary should not be linked to any active metadata forms.</td>
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
    <td>The ID of the Amazon DataZone domain in which the business glossary is deleted.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the business glossary that is deleted.</td>
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
    defaultValue="get_glossary"
    values={[
        { label: 'get_glossary', value: 'get_glossary' }
    ]}
>
<TabItem value="get_glossary">

Gets a business glossary in Amazon DataZone. Prerequisites: The specified glossary ID must exist and be associated with the given domain. The caller must have the datazone:GetGlossary permission on the domain.

```sql
SELECT
id,
name,
createdAt,
createdBy,
description,
domainId,
owningProjectId,
status,
updatedAt,
updatedBy,
usageRestrictions
FROM aws.datazone.glossaries
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_glossary"
    values={[
        { label: 'create_glossary', value: 'create_glossary' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_glossary">

Creates an Amazon DataZone business glossary. Specifies that this is a create glossary policy. A glossary serves as the central repository for business terminology and definitions within an organization. It helps establish and maintain a common language across different departments and teams, reducing miscommunication and ensuring consistent interpretation of business concepts. Glossaries can include hierarchical relationships between terms, cross-references, and links to actual data assets, making them invaluable for both business users and technical teams trying to understand and use data correctly. Prerequisites: Domain must exist and be in an active state. Owning project must exist and be accessible by the caller. The glossary name must be unique within the domain.

```sql
INSERT INTO aws.datazone.glossaries (
name,
owningProjectIdentifier,
description,
status,
usageRestrictions,
clientToken,
domain_identifier,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ owningProjectIdentifier }}' /* required */,
'{{ description }}',
'{{ status }}',
'{{ usageRestrictions }}',
'{{ clientToken }}',
'{{ domain_identifier }}',
'{{ region }}'
RETURNING
id,
name,
description,
domainId,
owningProjectId,
status,
usageRestrictions
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: glossaries
  props:
    - name: domain_identifier
      value: "{{ domain_identifier }}"
      description: Required parameter for the glossaries resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the glossaries resource.
    - name: name
      value: "{{ name }}"
    - name: owningProjectIdentifier
      value: "{{ owningProjectIdentifier }}"
    - name: description
      value: "{{ description }}"
    - name: status
      value: "{{ status }}"
      valid_values: ['DISABLED', 'ENABLED']
    - name: usageRestrictions
      value:
        - "{{ usageRestrictions }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_glossary"
    values={[
        { label: 'update_glossary', value: 'update_glossary' }
    ]}
>
<TabItem value="update_glossary">

Updates the business glossary in Amazon DataZone. Prerequisites: The glossary must exist in the given domain. The caller must have the datazone:UpdateGlossary permission to update it. When updating the name, the new name must be unique within the domain. The glossary must not be deleted or in a terminal state.

```sql
UPDATE aws.datazone.glossaries
SET 
name = '{{ name }}',
description = '{{ description }}',
status = '{{ status }}',
clientToken = '{{ clientToken }}'
WHERE 
domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
description,
domainId,
owningProjectId,
status,
usageRestrictions;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_glossary"
    values={[
        { label: 'delete_glossary', value: 'delete_glossary' }
    ]}
>
<TabItem value="delete_glossary">

Deletes a business glossary in Amazon DataZone. Prerequisites: The glossary must be in DISABLED state. The glossary must not have any glossary terms associated with it. The glossary must exist in the specified domain. The caller must have the datazone:DeleteGlossary permission in the domain and glossary. Glossary should not be linked to any active metadata forms.

```sql
DELETE FROM aws.datazone.glossaries
WHERE domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
