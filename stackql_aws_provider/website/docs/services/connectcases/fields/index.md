--- 
title: fields
hide_title: false
hide_table_of_contents: false
keywords:
  - fields
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

Creates, updates, deletes, gets or lists a <code>fields</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fields" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connectcases.fields" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_field"
    values={[
        { label: 'batch_get_field', value: 'batch_get_field' },
        { label: 'list_fields', value: 'list_fields' }
    ]}
>
<TabItem value="batch_get_field">

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
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>A list of field errors.</td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>array</code></td>
    <td>A list of detailed field information.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_fields">

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
    <td><CopyableCode code="fields" /></td>
    <td><code>array</code></td>
    <td>List of detailed field information.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. This is null if there are no more results to return.</td>
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
    <td><a href="#batch_get_field"><CopyableCode code="batch_get_field" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the description for the list of fields in the request parameters.</td>
</tr>
<tr>
    <td><a href="#list_fields"><CopyableCode code="list_fields" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all fields in a Cases domain.</td>
</tr>
<tr>
    <td><a href="#create_field"><CopyableCode code="create_field" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Creates a field in the Cases domain. This field is used to define the case object model (that is, defines what data can be captured on cases) in a Cases domain.</td>
</tr>
<tr>
    <td><a href="#update_field"><CopyableCode code="update_field" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-field_id"><code>field_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the properties of an existing field.</td>
</tr>
<tr>
    <td><a href="#delete_field"><CopyableCode code="delete_field" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-field_id"><code>field_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a field from a cases template. After a field is deleted: You can still retrieve the field by calling BatchGetField. You cannot update a deleted field by calling UpdateField; it throws a ValidationException. Deleted fields are not included in the ListFields response. Calling CreateCase with a deleted field throws a ValidationException denoting which field identifiers in the request have been deleted. Calling GetCase with a deleted field identifier returns the deleted field's value if one exists. Calling UpdateCase with a deleted field ID throws a ValidationException if the case does not already contain a value for the deleted field. Otherwise it succeeds, allowing you to update or remove (using emptyValue: &#123;&#125;) the field's value from the case. GetTemplate does not return field IDs for deleted fields. GetLayout does not return field IDs for deleted fields. Calling SearchCases with the deleted field ID as a filter returns any cases that have a value for the deleted field that matches the filter criteria. Calling SearchCases with a searchTerm value that matches a deleted field's value on a case returns the case in the response. Calling BatchPutFieldOptions with a deleted field ID throw a ValidationException. Calling GetCaseEventConfiguration does not return field IDs for deleted fields.</td>
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
<tr id="parameter-field_id">
    <td><CopyableCode code="field_id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of the field.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="batch_get_field"
    values={[
        { label: 'batch_get_field', value: 'batch_get_field' },
        { label: 'list_fields', value: 'list_fields' }
    ]}
>
<TabItem value="batch_get_field">

Returns the description for the list of fields in the request parameters.

```sql
SELECT
errors,
fields
FROM aws.connectcases.fields
WHERE domain_id = '{{ domain_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_fields">

Lists all fields in a Cases domain.

```sql
SELECT
fields,
nextToken
FROM aws.connectcases.fields
WHERE domain_id = '{{ domain_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_field"
    values={[
        { label: 'create_field', value: 'create_field' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_field">

Creates a field in the Cases domain. This field is used to define the case object model (that is, defines what data can be captured on cases) in a Cases domain.

```sql
INSERT INTO aws.connectcases.fields (
name,
type,
description,
attributes,
domain_id,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ type }}' /* required */,
'{{ description }}',
'{{ attributes }}',
'{{ domain_id }}',
'{{ region }}'
RETURNING
fieldArn,
fieldId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: fields
  props:
    - name: domain_id
      value: "{{ domain_id }}"
      description: Required parameter for the fields resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the fields resource.
    - name: name
      value: "{{ name }}"
    - name: type
      value: "{{ type }}"
      valid_values: ['Text', 'Number', 'Boolean', 'DateTime', 'SingleSelect', 'Url', 'User']
    - name: description
      value: "{{ description }}"
    - name: attributes
      description: |
        Union of field attributes.
      value:
        text:
          isMultiline: {{ isMultiline }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_field"
    values={[
        { label: 'update_field', value: 'update_field' }
    ]}
>
<TabItem value="update_field">

Updates the properties of an existing field.

```sql
UPDATE aws.connectcases.fields
SET 
name = '{{ name }}',
description = '{{ description }}',
attributes = '{{ attributes }}'
WHERE 
domain_id = '{{ domain_id }}' --required
AND field_id = '{{ field_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_field"
    values={[
        { label: 'delete_field', value: 'delete_field' }
    ]}
>
<TabItem value="delete_field">

Deletes a field from a cases template. After a field is deleted: You can still retrieve the field by calling BatchGetField. You cannot update a deleted field by calling UpdateField; it throws a ValidationException. Deleted fields are not included in the ListFields response. Calling CreateCase with a deleted field throws a ValidationException denoting which field identifiers in the request have been deleted. Calling GetCase with a deleted field identifier returns the deleted field's value if one exists. Calling UpdateCase with a deleted field ID throws a ValidationException if the case does not already contain a value for the deleted field. Otherwise it succeeds, allowing you to update or remove (using emptyValue: &#123;&#125;) the field's value from the case. GetTemplate does not return field IDs for deleted fields. GetLayout does not return field IDs for deleted fields. Calling SearchCases with the deleted field ID as a filter returns any cases that have a value for the deleted field that matches the filter criteria. Calling SearchCases with a searchTerm value that matches a deleted field's value on a case returns the case in the response. Calling BatchPutFieldOptions with a deleted field ID throw a ValidationException. Calling GetCaseEventConfiguration does not return field IDs for deleted fields.

```sql
DELETE FROM aws.connectcases.fields
WHERE domain_id = '{{ domain_id }}' --required
AND field_id = '{{ field_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
