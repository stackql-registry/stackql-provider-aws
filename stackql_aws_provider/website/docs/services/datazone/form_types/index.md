--- 
title: form_types
hide_title: false
hide_table_of_contents: false
keywords:
  - form_types
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

Creates, updates, deletes, gets or lists a <code>form_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="form_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.form_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_form_type"
    values={[
        { label: 'get_form_type', value: 'get_form_type' }
    ]}
>
<TabItem value="get_form_type">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the metadata form type. (pattern: &lt;code&gt;(amazon.datazone.)?(?!&#91;0-9_&#93;)\w+$|^_\w*&#91;a-zA-Z0-9&#93;\w*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when this metadata form type was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who created this metadata form type.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the metadata form type.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone domain in which this metadata form type exists. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="imports" /></td>
    <td><code>array</code></td>
    <td>The imports of the metadata form type.</td>
</tr>
<tr>
    <td><CopyableCode code="model" /></td>
    <td><code>object</code></td>
    <td>The model of the API.</td>
</tr>
<tr>
    <td><CopyableCode code="origin_domain_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone domain in which the metadata form type was originally created. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="origin_project_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the project in which this metadata form type was originally created. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owning_project_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the project that owns this metadata form type. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="revision" /></td>
    <td><code>string</code></td>
    <td>The revision of the metadata form type.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the metadata form type. (ENABLED, DISABLED)</td>
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
    <td><a href="#get_form_type"><CopyableCode code="get_form_type" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-form_type_identifier"><code>form_type_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-revision"><code>revision</code></a></td>
    <td>Gets a metadata form type in Amazon DataZone. Form types define the structure and validation rules for collecting metadata about assets in Amazon DataZone. They act as templates that ensure consistent metadata capture across similar types of assets, while allowing for customization to meet specific organizational needs. Form types can include required fields, validation rules, and dependencies, helping maintain high-quality metadata that makes data assets more discoverable and usable. The form type with the specified identifier must exist in the given domain. The domain must be valid and active. User must have permission on the form type. The form type should not be deleted or in an invalid state. One use case for this API is to determine whether a form field is indexed for search. A searchable field will be annotated with @amazon.datazone#searchable. By default, searchable fields are indexed for semantic search, where related query terms will match the attribute value even if they are not stemmed or keyword matches. If a field is indexed technical identifier search, it will be annotated with @amazon.datazone#searchable(modes:&#91;"TECHNICAL"&#93;). If a field is indexed for lexical search (supports stemmed and prefix matches but not semantic matches), it will be annotated with @amazon.datazone#searchable(modes:&#91;"LEXICAL"&#93;). A field storing glossary term IDs (which is filterable) will be annotated with @amazon.datazone#glossaryterm("$&#123;glossaryId&#125;").</td>
</tr>
<tr>
    <td><a href="#create_form_type"><CopyableCode code="create_form_type" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-model"><code>model</code></a>, <a href="#parameter-owningProjectIdentifier"><code>owningProjectIdentifier</code></a></td>
    <td></td>
    <td>Creates a metadata form type. Prerequisites: The domain must exist and be in an ENABLED state. The owning project must exist and be accessible. The name must be unique within the domain. For custom form types, to indicate that a field should be searchable, annotate it with @amazon.datazone#searchable. By default, searchable fields are indexed for semantic search, where related query terms will match the attribute value even if they are not stemmed or keyword matches. To indicate that a field should be indexed for lexical search (which disables semantic search but supports stemmed and partial matches), annotate it with @amazon.datazone#searchable(modes:&#91;"LEXICAL"&#93;). To indicate that a field should be indexed for technical identifier search (for more information on technical identifier search, see: https:​//aws.amazon.com/blogs/big-data/streamline-data-discovery-with-precise-technical-identifier-search-in-amazon-sagemaker-unified-studio/), annotate it with @amazon.datazone#searchable(modes:&#91;"TECHNICAL"&#93;). To denote that a field will store glossary term ids (which are filterable via the Search/SearchListings APIs), annotate it with @amazon.datazone#glossaryterm("$&#123;GLOSSARY_ID&#125;"), where $&#123;GLOSSARY_ID&#125; is the id of the glossary that the glossary terms stored in the field belong to.</td>
</tr>
<tr>
    <td><a href="#delete_form_type"><CopyableCode code="delete_form_type" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-form_type_identifier"><code>form_type_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes and metadata form type in Amazon DataZone. Prerequisites: The form type must exist in the domain. The form type must not be in use by any asset types or assets. The domain must be valid and accessible. User must have delete permissions on the form type. Any dependencies (such as linked asset types) must be removed first.</td>
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
    <td>The ID of the Amazon DataZone domain in which the metadata form type is deleted.</td>
</tr>
<tr id="parameter-form_type_identifier">
    <td><CopyableCode code="form_type_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the metadata form type that is deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-revision">
    <td><CopyableCode code="revision" /></td>
    <td><code>string</code></td>
    <td>The revision of this metadata form type.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_form_type"
    values={[
        { label: 'get_form_type', value: 'get_form_type' }
    ]}
>
<TabItem value="get_form_type">

Gets a metadata form type in Amazon DataZone. Form types define the structure and validation rules for collecting metadata about assets in Amazon DataZone. They act as templates that ensure consistent metadata capture across similar types of assets, while allowing for customization to meet specific organizational needs. Form types can include required fields, validation rules, and dependencies, helping maintain high-quality metadata that makes data assets more discoverable and usable. The form type with the specified identifier must exist in the given domain. The domain must be valid and active. User must have permission on the form type. The form type should not be deleted or in an invalid state. One use case for this API is to determine whether a form field is indexed for search. A searchable field will be annotated with @amazon.datazone#searchable. By default, searchable fields are indexed for semantic search, where related query terms will match the attribute value even if they are not stemmed or keyword matches. If a field is indexed technical identifier search, it will be annotated with @amazon.datazone#searchable(modes:["TECHNICAL"]). If a field is indexed for lexical search (supports stemmed and prefix matches but not semantic matches), it will be annotated with @amazon.datazone#searchable(modes:["LEXICAL"]). A field storing glossary term IDs (which is filterable) will be annotated with @amazon.datazone#glossaryterm("$&#123;glossaryId&#125;").

```sql
SELECT
name,
created_at,
created_by,
description,
domain_id,
imports,
model,
origin_domain_id,
origin_project_id,
owning_project_id,
revision,
status
FROM aws.datazone.form_types
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND form_type_identifier = '{{ form_type_identifier }}' -- required
AND region = '{{ region }}' -- required
AND revision = '{{ revision }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_form_type"
    values={[
        { label: 'create_form_type', value: 'create_form_type' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_form_type">

Creates a metadata form type. Prerequisites: The domain must exist and be in an ENABLED state. The owning project must exist and be accessible. The name must be unique within the domain. For custom form types, to indicate that a field should be searchable, annotate it with @amazon.datazone#searchable. By default, searchable fields are indexed for semantic search, where related query terms will match the attribute value even if they are not stemmed or keyword matches. To indicate that a field should be indexed for lexical search (which disables semantic search but supports stemmed and partial matches), annotate it with @amazon.datazone#searchable(modes:["LEXICAL"]). To indicate that a field should be indexed for technical identifier search (for more information on technical identifier search, see: https://aws.amazon.com/blogs/big-data/streamline-data-discovery-with-precise-technical-identifier-search-in-amazon-sagemaker-unified-studio/), annotate it with @amazon.datazone#searchable(modes:["TECHNICAL"]). To denote that a field will store glossary term ids (which are filterable via the Search/SearchListings APIs), annotate it with @amazon.datazone#glossaryterm("$&#123;GLOSSARY_ID&#125;"), where $&#123;GLOSSARY_ID&#125; is the id of the glossary that the glossary terms stored in the field belong to.

```sql
INSERT INTO aws.datazone.form_types (
name,
model,
owningProjectIdentifier,
status,
description,
domain_identifier,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ model }}' /* required */,
'{{ owningProjectIdentifier }}' /* required */,
'{{ status }}',
'{{ description }}',
'{{ domain_identifier }}',
'{{ region }}'
RETURNING
name,
description,
domain_id,
origin_domain_id,
origin_project_id,
owning_project_id,
revision
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: form_types
  props:
    - name: domain_identifier
      value: "{{ domain_identifier }}"
      description: Required parameter for the form_types resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the form_types resource.
    - name: name
      value: "{{ name }}"
    - name: model
      description: |
        The model of the API.
      value:
        smithy: "{{ smithy }}"
    - name: owningProjectIdentifier
      value: "{{ owningProjectIdentifier }}"
    - name: status
      value: "{{ status }}"
      valid_values: ['ENABLED', 'DISABLED']
    - name: description
      value: "{{ description }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_form_type"
    values={[
        { label: 'delete_form_type', value: 'delete_form_type' }
    ]}
>
<TabItem value="delete_form_type">

Deletes and metadata form type in Amazon DataZone. Prerequisites: The form type must exist in the domain. The form type must not be in use by any asset types or assets. The domain must be valid and accessible. User must have delete permissions on the form type. Any dependencies (such as linked asset types) must be removed first.

```sql
DELETE FROM aws.datazone.form_types
WHERE domain_identifier = '{{ domain_identifier }}' --required
AND form_type_identifier = '{{ form_type_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
