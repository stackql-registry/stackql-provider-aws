--- 
title: forms
hide_title: false
hide_table_of_contents: false
keywords:
  - forms
  - amplifyuibuilder
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

Creates, updates, deletes, gets or lists a <code>forms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="forms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.amplifyuibuilder.forms" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_form"
    values={[
        { label: 'get_form', value: 'get_form' },
        { label: 'list_forms', value: 'list_forms' }
    ]}
>
<TabItem value="get_form">

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
    <td>The unique ID of the form.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the form.</td>
</tr>
<tr>
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the Amplify app associated with the form.</td>
</tr>
<tr>
    <td><CopyableCode code="cta" /></td>
    <td><code>object</code></td>
    <td>Stores the call to action configuration for the form.</td>
</tr>
<tr>
    <td><CopyableCode code="data_type" /></td>
    <td><code>object</code></td>
    <td>The type of data source to use to create the form.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_name" /></td>
    <td><code>string</code></td>
    <td>The name of the backend environment that is a part of the Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>object</code></td>
    <td>Stores the information about the form's fields.</td>
</tr>
<tr>
    <td><CopyableCode code="form_action_type" /></td>
    <td><code>string</code></td>
    <td>The operation to perform on the specified form. (create, update)</td>
</tr>
<tr>
    <td><CopyableCode code="label_decorator" /></td>
    <td><code>string</code></td>
    <td>Specifies an icon or decoration to display on the form. (required, optional, none)</td>
</tr>
<tr>
    <td><CopyableCode code="schema_version" /></td>
    <td><code>string</code></td>
    <td>The schema version of the form when it was imported.</td>
</tr>
<tr>
    <td><CopyableCode code="sectional_elements" /></td>
    <td><code>object</code></td>
    <td>Stores the visual helper elements for the form that are not associated with any data.</td>
</tr>
<tr>
    <td><CopyableCode code="style" /></td>
    <td><code>object</code></td>
    <td>Stores the configuration for the form's style.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>One or more key-value pairs to use when tagging the form.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_forms">

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
    <td>The ID of the form.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the form.</td>
</tr>
<tr>
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID for the app associated with the form summary.</td>
</tr>
<tr>
    <td><CopyableCode code="data_type" /></td>
    <td><code>object</code></td>
    <td>The form's data source type.</td>
</tr>
<tr>
    <td><CopyableCode code="environment_name" /></td>
    <td><code>string</code></td>
    <td>The name of the backend environment that is part of the Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="form_action_type" /></td>
    <td><code>string</code></td>
    <td>The type of operation to perform on the form. (create, update)</td>
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
    <td><a href="#get_form"><CopyableCode code="get_form" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an existing form for an Amplify app.</td>
</tr>
<tr>
    <td><a href="#list_forms"><CopyableCode code="list_forms" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a list of forms for a specified Amplify app and backend environment.</td>
</tr>
<tr>
    <td><a href="#create_form"><CopyableCode code="create_form" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-formToCreate"><code>formToCreate</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Creates a new form for an Amplify app.</td>
</tr>
<tr>
    <td><a href="#update_form"><CopyableCode code="update_form" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-updatedForm"><code>updatedForm</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Updates an existing form.</td>
</tr>
<tr>
    <td><a href="#delete_form"><CopyableCode code="delete_form" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a form from an Amplify app.</td>
</tr>
<tr>
    <td><a href="#export_forms"><CopyableCode code="export_forms" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Exports form configurations to code that is ready to integrate into an Amplify app.</td>
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
<tr id="parameter-app_id">
    <td><CopyableCode code="app_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the Amplify app to export forms to.</td>
</tr>
<tr id="parameter-environment_name">
    <td><CopyableCode code="environment_name" /></td>
    <td><code>string</code></td>
    <td>The name of the backend environment that is a part of the Amplify app.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the form to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>The unique client token.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of forms to retrieve.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to request the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_form"
    values={[
        { label: 'get_form', value: 'get_form' },
        { label: 'list_forms', value: 'list_forms' }
    ]}
>
<TabItem value="get_form">

Returns an existing form for an Amplify app.

```sql
SELECT
id,
name,
app_id,
cta,
data_type,
environment_name,
fields,
form_action_type,
label_decorator,
schema_version,
sectional_elements,
style,
tags
FROM aws.amplifyuibuilder.forms
WHERE app_id = '{{ app_id }}' -- required
AND environment_name = '{{ environment_name }}' -- required
AND id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_forms">

Retrieves a list of forms for a specified Amplify app and backend environment.

```sql
SELECT
id,
name,
app_id,
data_type,
environment_name,
form_action_type
FROM aws.amplifyuibuilder.forms
WHERE app_id = '{{ app_id }}' -- required
AND environment_name = '{{ environment_name }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_form"
    values={[
        { label: 'create_form', value: 'create_form' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_form">

Creates a new form for an Amplify app.

```sql
INSERT INTO aws.amplifyuibuilder.forms (
formToCreate,
app_id,
environment_name,
region,
clientToken
)
SELECT 
'{{ formToCreate }}' /* required */,
'{{ app_id }}',
'{{ environment_name }}',
'{{ region }}',
'{{ clientToken }}'
RETURNING
entity
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: forms
  props:
    - name: app_id
      value: "{{ app_id }}"
      description: Required parameter for the forms resource.
    - name: environment_name
      value: "{{ environment_name }}"
      description: Required parameter for the forms resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the forms resource.
    - name: formToCreate
      description: |
        Represents all of the information that is required to create a form.
      value:
        name: "{{ name }}"
        dataType:
          dataSourceType: "{{ dataSourceType }}"
          dataTypeName: "{{ dataTypeName }}"
        formActionType: "{{ formActionType }}"
        fields: "{{ fields }}"
        style:
          horizontalGap:
            tokenReference: "{{ tokenReference }}"
            value: "{{ value }}"
          verticalGap:
            tokenReference: "{{ tokenReference }}"
            value: "{{ value }}"
          outerPadding:
            tokenReference: "{{ tokenReference }}"
            value: "{{ value }}"
        sectionalElements: "{{ sectionalElements }}"
        schemaVersion: "{{ schemaVersion }}"
        cta:
          position: "{{ position }}"
          clear:
            excluded: {{ excluded }}
            children: "{{ children }}"
            position:
              fixed: "{{ fixed }}"
              rightOf: "{{ rightOf }}"
              below: "{{ below }}"
          cancel:
            excluded: {{ excluded }}
            children: "{{ children }}"
            position:
              fixed: "{{ fixed }}"
              rightOf: "{{ rightOf }}"
              below: "{{ below }}"
          submit:
            excluded: {{ excluded }}
            children: "{{ children }}"
            position:
              fixed: "{{ fixed }}"
              rightOf: "{{ rightOf }}"
              below: "{{ below }}"
        tags: "{{ tags }}"
        labelDecorator: "{{ labelDecorator }}"
    - name: clientToken
      value: "{{ clientToken }}"
      description: The unique client token.
      description: The unique client token.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_form"
    values={[
        { label: 'update_form', value: 'update_form' }
    ]}
>
<TabItem value="update_form">

Updates an existing form.

```sql
UPDATE aws.amplifyuibuilder.forms
SET 
updatedForm = '{{ updatedForm }}'
WHERE 
app_id = '{{ app_id }}' --required
AND environment_name = '{{ environment_name }}' --required
AND id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND updatedForm = '{{ updatedForm }}' --required
AND clientToken = '{{ clientToken}}'
RETURNING
entity;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_form"
    values={[
        { label: 'delete_form', value: 'delete_form' }
    ]}
>
<TabItem value="delete_form">

Deletes a form from an Amplify app.

```sql
DELETE FROM aws.amplifyuibuilder.forms
WHERE app_id = '{{ app_id }}' --required
AND environment_name = '{{ environment_name }}' --required
AND id = '{{ id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="export_forms"
    values={[
        { label: 'export_forms', value: 'export_forms' }
    ]}
>
<TabItem value="export_forms">

Exports form configurations to code that is ready to integrate into an Amplify app.

```sql
EXEC aws.amplifyuibuilder.forms.export_forms 
@app_id='{{ app_id }}' --required, 
@environment_name='{{ environment_name }}' --required, 
@region='{{ region }}' --required, 
@nextToken='{{ nextToken }}'
;
```
</TabItem>
</Tabs>
