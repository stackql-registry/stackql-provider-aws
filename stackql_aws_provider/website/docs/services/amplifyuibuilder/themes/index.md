--- 
title: themes
hide_title: false
hide_table_of_contents: false
keywords:
  - themes
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

Creates, updates, deletes, gets or lists a <code>themes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="themes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.amplifyuibuilder.themes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_theme"
    values={[
        { label: 'get_theme', value: 'get_theme' },
        { label: 'list_themes', value: 'list_themes' }
    ]}
>
<TabItem value="get_theme">

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
    <td>The ID for the theme.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the theme.</td>
</tr>
<tr>
    <td><CopyableCode code="appId" /></td>
    <td><code>string</code></td>
    <td>The unique ID for the Amplify app associated with the theme.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the theme was created.</td>
</tr>
<tr>
    <td><CopyableCode code="environmentName" /></td>
    <td><code>string</code></td>
    <td>The name of the backend environment that is a part of the Amplify app.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the theme was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="overrides" /></td>
    <td><code>array</code></td>
    <td>Describes the properties that can be overriden to customize a theme.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>One or more key-value pairs to use when tagging the theme.</td>
</tr>
<tr>
    <td><CopyableCode code="values" /></td>
    <td><code>array</code></td>
    <td>A list of key-value pairs that defines the properties of the theme.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_themes">

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
    <td>The ID of the theme.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the theme.</td>
</tr>
<tr>
    <td><CopyableCode code="appId" /></td>
    <td><code>string</code></td>
    <td>The unique ID for the app associated with the theme summary.</td>
</tr>
<tr>
    <td><CopyableCode code="environmentName" /></td>
    <td><code>string</code></td>
    <td>The name of the backend environment that is part of the Amplify app.</td>
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
    <td><a href="#get_theme"><CopyableCode code="get_theme" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an existing theme for an Amplify app.</td>
</tr>
<tr>
    <td><a href="#list_themes"><CopyableCode code="list_themes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a list of themes for a specified Amplify app and backend environment.</td>
</tr>
<tr>
    <td><a href="#create_theme"><CopyableCode code="create_theme" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-themeToCreate"><code>themeToCreate</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Creates a theme to apply to the components in an Amplify app.</td>
</tr>
<tr>
    <td><a href="#update_theme"><CopyableCode code="update_theme" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-updatedTheme"><code>updatedTheme</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Updates an existing theme.</td>
</tr>
<tr>
    <td><a href="#delete_theme"><CopyableCode code="delete_theme" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a theme from an Amplify app.</td>
</tr>
<tr>
    <td><a href="#export_themes"><CopyableCode code="export_themes" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-app_id"><code>app_id</code></a>, <a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Exports theme configurations to code that is ready to integrate into an Amplify app.</td>
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
    <td>The unique ID of the Amplify app to export the themes to.</td>
</tr>
<tr id="parameter-environment_name">
    <td><CopyableCode code="environment_name" /></td>
    <td><code>string</code></td>
    <td>The name of the backend environment that is part of the Amplify app.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the theme to delete.</td>
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
    <td>The maximum number of theme results to return in the response.</td>
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
    defaultValue="get_theme"
    values={[
        { label: 'get_theme', value: 'get_theme' },
        { label: 'list_themes', value: 'list_themes' }
    ]}
>
<TabItem value="get_theme">

Returns an existing theme for an Amplify app.

```sql
SELECT
id,
name,
appId,
createdAt,
environmentName,
modifiedAt,
overrides,
tags,
values
FROM aws.amplifyuibuilder.themes
WHERE app_id = '{{ app_id }}' -- required
AND environment_name = '{{ environment_name }}' -- required
AND id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_themes">

Retrieves a list of themes for a specified Amplify app and backend environment.

```sql
SELECT
id,
name,
appId,
environmentName
FROM aws.amplifyuibuilder.themes
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
    defaultValue="create_theme"
    values={[
        { label: 'create_theme', value: 'create_theme' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_theme">

Creates a theme to apply to the components in an Amplify app.

```sql
INSERT INTO aws.amplifyuibuilder.themes (
themeToCreate,
app_id,
environment_name,
region,
clientToken
)
SELECT 
'{{ themeToCreate }}' /* required */,
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
- name: themes
  props:
    - name: app_id
      value: "{{ app_id }}"
      description: Required parameter for the themes resource.
    - name: environment_name
      value: "{{ environment_name }}"
      description: Required parameter for the themes resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the themes resource.
    - name: themeToCreate
      description: |
        Represents all of the information that is required to create a theme.
      value:
        name: "{{ name }}"
        values:
          - key: "{{ key }}"
            value:
              value: "{{ value }}"
              children:
                - key: "{{ key }}"
                  value:
                    value: "{{ value }}"
                    children: "{{ children }}"
        overrides:
          - key: "{{ key }}"
            value:
              value: "{{ value }}"
              children:
                - key: "{{ key }}"
                  value:
                    value: "{{ value }}"
                    children: "{{ children }}"
        tags: "{{ tags }}"
    - name: clientToken
      value: "{{ clientToken }}"
      description: The unique client token.
      description: The unique client token.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_theme"
    values={[
        { label: 'update_theme', value: 'update_theme' }
    ]}
>
<TabItem value="update_theme">

Updates an existing theme.

```sql
UPDATE aws.amplifyuibuilder.themes
SET 
updatedTheme = '{{ updatedTheme }}'
WHERE 
app_id = '{{ app_id }}' --required
AND environment_name = '{{ environment_name }}' --required
AND id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND updatedTheme = '{{ updatedTheme }}' --required
AND clientToken = '{{ clientToken}}'
RETURNING
entity;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_theme"
    values={[
        { label: 'delete_theme', value: 'delete_theme' }
    ]}
>
<TabItem value="delete_theme">

Deletes a theme from an Amplify app.

```sql
DELETE FROM aws.amplifyuibuilder.themes
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
    defaultValue="export_themes"
    values={[
        { label: 'export_themes', value: 'export_themes' }
    ]}
>
<TabItem value="export_themes">

Exports theme configurations to code that is ready to integrate into an Amplify app.

```sql
EXEC aws.amplifyuibuilder.themes.export_themes 
@app_id='{{ app_id }}' --required, 
@environment_name='{{ environment_name }}' --required, 
@region='{{ region }}' --required, 
@nextToken='{{ nextToken }}'
;
```
</TabItem>
</Tabs>
