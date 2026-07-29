--- 
title: templates
hide_title: false
hide_table_of_contents: false
keywords:
  - templates
  - connectcases
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

Creates, updates, deletes, gets or lists a <code>templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connectcases.templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_template"
    values={[
        { label: 'get_template', value: 'get_template' },
        { label: 'list_templates', value: 'list_templates' }
    ]}
>
<TabItem value="get_template">

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
    <td>The name of the template. (pattern: &lt;code&gt;.*&#91;\S&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp at which the resource was created.</td>
</tr>
<tr>
    <td><CopyableCode code="deleted" /></td>
    <td><code>boolean</code></td>
    <td>Denotes whether or not the resource has been deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A brief description of the template.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp at which the resource was created or last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="layout_configuration" /></td>
    <td><code>object</code></td>
    <td>Object to store configuration of layouts associated to the template.</td>
</tr>
<tr>
    <td><CopyableCode code="required_fields" /></td>
    <td><code>array</code></td>
    <td>A list of fields that must contain a value for a case to be successfully created with this template.</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td>A list of case rules (also known as case field conditions) on a template.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the template. (Active, Inactive)</td>
</tr>
<tr>
    <td><CopyableCode code="tag_propagation_configurations" /></td>
    <td><code>array</code></td>
    <td>Defines tag propagation configuration for resources created within a domain. Tags specified here will be automatically applied to resources being created for the specified resource type.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="template_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the template.</td>
</tr>
<tr>
    <td><CopyableCode code="template_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier of a template.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_templates">

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
    <td>The token for the next set of results. This is null if there are no more results to return.</td>
</tr>
<tr>
    <td><CopyableCode code="templates" /></td>
    <td><code>array</code></td>
    <td>List of template summary objects.</td>
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
    <td><a href="#get_template"><CopyableCode code="get_template" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-template_id"><code>template_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the details for the requested template. Other template APIs are: CreateTemplate DeleteTemplate ListTemplates UpdateTemplate</td>
</tr>
<tr>
    <td><a href="#list_templates"><CopyableCode code="list_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td>Lists all of the templates in a Cases domain. Each list item is a condensed summary object of the template. Other template APIs are: CreateTemplate DeleteTemplate GetTemplate UpdateTemplate</td>
</tr>
<tr>
    <td><a href="#create_template"><CopyableCode code="create_template" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a template in the Cases domain. This template is used to define the case object model (that is, to define what data can be captured on cases) in a Cases domain. A template must have a unique name within a domain, and it must reference existing field IDs and layout IDs. Additionally, multiple fields with same IDs are not allowed within the same Template. A template can be either Active or Inactive, as indicated by its status. Inactive templates cannot be used to create cases. Other template APIs are: DeleteTemplate GetTemplate ListTemplates UpdateTemplate</td>
</tr>
<tr>
    <td><a href="#update_template"><CopyableCode code="update_template" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-template_id"><code>template_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the attributes of an existing template. The template attributes that can be modified include name, description, layoutConfiguration, requiredFields, and status. At least one of these attributes must not be null. If a null value is provided for a given attribute, that attribute is ignored and its current value is preserved. Other template APIs are: CreateTemplate DeleteTemplate GetTemplate ListTemplates</td>
</tr>
<tr>
    <td><a href="#delete_template"><CopyableCode code="delete_template" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-template_id"><code>template_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a cases template. You can delete up to 100 templates per domain. After a cases template is deleted: You can still retrieve the template by calling GetTemplate. You cannot update the template. You cannot create a case by using the deleted template. Deleted templates are not included in the ListTemplates response.</td>
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
<tr id="parameter-domain_id">
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Cases domain.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-template_id">
    <td><CopyableCode code="template_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier of a template.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>array</code></td>
    <td>A list of status values to filter on.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_template"
    values={[
        { label: 'get_template', value: 'get_template' },
        { label: 'list_templates', value: 'list_templates' }
    ]}
>
<TabItem value="get_template">

Returns the details for the requested template. Other template APIs are: CreateTemplate DeleteTemplate ListTemplates UpdateTemplate

```sql
SELECT
name,
created_time,
deleted,
description,
last_modified_time,
layout_configuration,
required_fields,
rules,
status,
tag_propagation_configurations,
tags,
template_arn,
template_id
FROM aws.connectcases.templates
WHERE domain_id = '{{ domain_id }}' -- required
AND template_id = '{{ template_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_templates">

Lists all of the templates in a Cases domain. Each list item is a condensed summary object of the template. Other template APIs are: CreateTemplate DeleteTemplate GetTemplate UpdateTemplate

```sql
SELECT
next_token,
templates
FROM aws.connectcases.templates
WHERE domain_id = '{{ domain_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND status = '{{ status }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_template"
    values={[
        { label: 'create_template', value: 'create_template' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_template">

Creates a template in the Cases domain. This template is used to define the case object model (that is, to define what data can be captured on cases) in a Cases domain. A template must have a unique name within a domain, and it must reference existing field IDs and layout IDs. Additionally, multiple fields with same IDs are not allowed within the same Template. A template can be either Active or Inactive, as indicated by its status. Inactive templates cannot be used to create cases. Other template APIs are: DeleteTemplate GetTemplate ListTemplates UpdateTemplate

```sql
INSERT INTO aws.connectcases.templates (
name,
description,
layoutConfiguration,
requiredFields,
status,
rules,
tagPropagationConfigurations,
domain_id,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ layoutConfiguration }}',
'{{ requiredFields }}',
'{{ status }}',
'{{ rules }}',
'{{ tagPropagationConfigurations }}',
'{{ domain_id }}',
'{{ region }}'
RETURNING
template_arn,
template_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: templates
  props:
    - name: domain_id
      value: "{{ domain_id }}"
      description: Required parameter for the templates resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the templates resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: layoutConfiguration
      description: |
        Object to store configuration of layouts associated to the template.
      value:
        defaultLayout: "{{ defaultLayout }}"
    - name: requiredFields
      value:
        - fieldId: "{{ fieldId }}"
    - name: status
      value: "{{ status }}"
      valid_values: ['Active', 'Inactive']
    - name: rules
      value:
        - caseRuleId: "{{ caseRuleId }}"
          fieldId: "{{ fieldId }}"
    - name: tagPropagationConfigurations
      value:
        - resourceType: "{{ resourceType }}"
          tagMap: "{{ tagMap }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_template"
    values={[
        { label: 'update_template', value: 'update_template' }
    ]}
>
<TabItem value="update_template">

Updates the attributes of an existing template. The template attributes that can be modified include name, description, layoutConfiguration, requiredFields, and status. At least one of these attributes must not be null. If a null value is provided for a given attribute, that attribute is ignored and its current value is preserved. Other template APIs are: CreateTemplate DeleteTemplate GetTemplate ListTemplates

```sql
UPDATE aws.connectcases.templates
SET 
name = '{{ name }}',
description = '{{ description }}',
layoutConfiguration = '{{ layoutConfiguration }}',
requiredFields = '{{ requiredFields }}',
status = '{{ status }}',
rules = '{{ rules }}',
tagPropagationConfigurations = '{{ tagPropagationConfigurations }}'
WHERE 
domain_id = '{{ domain_id }}' --required
AND template_id = '{{ template_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_template"
    values={[
        { label: 'delete_template', value: 'delete_template' }
    ]}
>
<TabItem value="delete_template">

Deletes a cases template. You can delete up to 100 templates per domain. After a cases template is deleted: You can still retrieve the template by calling GetTemplate. You cannot update the template. You cannot create a case by using the deleted template. Deleted templates are not included in the ListTemplates response.

```sql
DELETE FROM aws.connectcases.templates
WHERE domain_id = '{{ domain_id }}' --required
AND template_id = '{{ template_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
