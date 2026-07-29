--- 
title: layouts
hide_title: false
hide_table_of_contents: false
keywords:
  - layouts
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

Creates, updates, deletes, gets or lists a <code>layouts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="layouts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connectcases.layouts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_layout"
    values={[
        { label: 'get_layout', value: 'get_layout' },
        { label: 'list_layouts', value: 'list_layouts' }
    ]}
>
<TabItem value="get_layout">

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
    <td>The name of the layout. It must be unique. (pattern: &lt;code&gt;.*&#91;\S&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>object</code></td>
    <td>Object to store union of different versions of layout content.</td>
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
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp at which the resource was created or last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="layout_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the newly created layout.</td>
</tr>
<tr>
    <td><CopyableCode code="layout_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the layout.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A map of of key-value pairs that represent tags on a resource. Tags are used to organize, track, or control access for this resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_layouts">

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
    <td><CopyableCode code="layouts" /></td>
    <td><code>array</code></td>
    <td>The layouts for the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
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
    <td><a href="#get_layout"><CopyableCode code="get_layout" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-layout_id"><code>layout_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the details for the requested layout.</td>
</tr>
<tr>
    <td><a href="#list_layouts"><CopyableCode code="list_layouts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all layouts in the given cases domain. Each list item is a condensed summary object of the layout.</td>
</tr>
<tr>
    <td><a href="#create_layout"><CopyableCode code="create_layout" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-content"><code>content</code></a></td>
    <td></td>
    <td>Creates a layout in the Cases domain. Layouts define the following configuration in the top section and More Info tab of the Cases user interface: Fields to display to the users Field ordering Title and Status fields cannot be part of layouts since they are not configurable.</td>
</tr>
<tr>
    <td><a href="#update_layout"><CopyableCode code="update_layout" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-layout_id"><code>layout_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the attributes of an existing layout. If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body. A ValidationException is returned when you add non-existent fieldIds to a layout. Title and Status fields cannot be part of layouts because they are not configurable.</td>
</tr>
<tr>
    <td><a href="#delete_layout"><CopyableCode code="delete_layout" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-layout_id"><code>layout_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a layout from a cases template. You can delete up to 100 layouts per domain. After a layout is deleted: You can still retrieve the layout by calling GetLayout. You cannot update a deleted layout by calling UpdateLayout; it throws a ValidationException. Deleted layouts are not included in the ListLayouts response.</td>
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
<tr id="parameter-layout_id">
    <td><CopyableCode code="layout_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the layout.</td>
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
    defaultValue="get_layout"
    values={[
        { label: 'get_layout', value: 'get_layout' },
        { label: 'list_layouts', value: 'list_layouts' }
    ]}
>
<TabItem value="get_layout">

Returns the details for the requested layout.

```sql
SELECT
name,
content,
created_time,
deleted,
last_modified_time,
layout_arn,
layout_id,
tags
FROM aws.connectcases.layouts
WHERE domain_id = '{{ domain_id }}' -- required
AND layout_id = '{{ layout_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_layouts">

Lists all layouts in the given cases domain. Each list item is a condensed summary object of the layout.

```sql
SELECT
layouts,
next_token
FROM aws.connectcases.layouts
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
    defaultValue="create_layout"
    values={[
        { label: 'create_layout', value: 'create_layout' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_layout">

Creates a layout in the Cases domain. Layouts define the following configuration in the top section and More Info tab of the Cases user interface: Fields to display to the users Field ordering Title and Status fields cannot be part of layouts since they are not configurable.

```sql
INSERT INTO aws.connectcases.layouts (
name,
content,
domain_id,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ content }}' /* required */,
'{{ domain_id }}',
'{{ region }}'
RETURNING
layout_arn,
layout_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: layouts
  props:
    - name: domain_id
      value: "{{ domain_id }}"
      description: Required parameter for the layouts resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the layouts resource.
    - name: name
      value: "{{ name }}"
    - name: content
      description: |
        Object to store union of different versions of layout content.
      value:
        basic:
          topPanel:
            sections:
              - fieldGroup:
                  name: "{{ name }}"
                  fields: "{{ fields }}"
          moreInfo:
            sections:
              - fieldGroup:
                  name: "{{ name }}"
                  fields: "{{ fields }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_layout"
    values={[
        { label: 'update_layout', value: 'update_layout' }
    ]}
>
<TabItem value="update_layout">

Updates the attributes of an existing layout. If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body. A ValidationException is returned when you add non-existent fieldIds to a layout. Title and Status fields cannot be part of layouts because they are not configurable.

```sql
UPDATE aws.connectcases.layouts
SET 
name = '{{ name }}',
content = '{{ content }}'
WHERE 
domain_id = '{{ domain_id }}' --required
AND layout_id = '{{ layout_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_layout"
    values={[
        { label: 'delete_layout', value: 'delete_layout' }
    ]}
>
<TabItem value="delete_layout">

Deletes a layout from a cases template. You can delete up to 100 layouts per domain. After a layout is deleted: You can still retrieve the layout by calling GetLayout. You cannot update a deleted layout by calling UpdateLayout; it throws a ValidationException. Deleted layouts are not included in the ListLayouts response.

```sql
DELETE FROM aws.connectcases.layouts
WHERE domain_id = '{{ domain_id }}' --required
AND layout_id = '{{ layout_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
