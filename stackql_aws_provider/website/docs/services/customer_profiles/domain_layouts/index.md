--- 
title: domain_layouts
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_layouts
  - customer_profiles
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

Creates, updates, deletes, gets or lists a <code>domain_layouts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domain_layouts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.customer_profiles.domain_layouts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_domain_layout"
    values={[
        { label: 'get_domain_layout', value: 'get_domain_layout' },
        { label: 'list_domain_layouts', value: 'list_domain_layouts' }
    ]}
>
<TabItem value="get_domain_layout">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the layout was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the layout</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the layout (pattern: &lt;code&gt;^&#91;a-zA-Z_&#93;&#91;a-zA-Z_0-9-\s&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>If set to true for a layout, this layout will be used by default to view data. If set to false, then the layout will not be used by default, but it can be used to view data by explicitly selecting it in the console.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the layout was most recently updated.</td>
</tr>
<tr>
    <td><CopyableCode code="layout" /></td>
    <td><code>string</code></td>
    <td>A customizable layout that can be used to view data under a Customer Profiles domain.</td>
</tr>
<tr>
    <td><CopyableCode code="layout_definition_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the layout. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="layout_type" /></td>
    <td><code>string</code></td>
    <td>The type of layout that can be used to view data under a Customer Profiles domain. (PROFILE_EXPLORER)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version used to create layout.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_domain_layouts">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the layout was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the layout</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the layout (pattern: &lt;code&gt;^&#91;a-zA-Z_&#93;&#91;a-zA-Z_0-9-\s&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>If set to true for a layout, this layout will be used by default to view data. If set to false, then layout will not be used by default but it can be used to view data by explicit selection on UI.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the layout was most recently updated.</td>
</tr>
<tr>
    <td><CopyableCode code="layout_definition_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the layout. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="layout_type" /></td>
    <td><code>string</code></td>
    <td>The type of layout that can be used to view data under customer profiles domain. (PROFILE_EXPLORER)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource.</td>
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
    <td><a href="#get_domain_layout"><CopyableCode code="get_domain_layout" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-layout_definition_name"><code>layout_definition_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the layout to view data for a specific domain. This API can only be invoked from the Amazon Connect admin website.</td>
</tr>
<tr>
    <td><a href="#list_domain_layouts"><CopyableCode code="list_domain_layouts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists the existing layouts that can be used to view data for a specific domain. This API can only be invoked from the Amazon Connect admin website.</td>
</tr>
<tr>
    <td><a href="#create_domain_layout"><CopyableCode code="create_domain_layout" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-layout_definition_name"><code>layout_definition_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DisplayName"><code>DisplayName</code></a>, <a href="#parameter-LayoutType"><code>LayoutType</code></a></td>
    <td></td>
    <td>Creates the layout to view data for a specific domain. This API can only be invoked from the Amazon Connect admin website.</td>
</tr>
<tr>
    <td><a href="#update_domain_layout"><CopyableCode code="update_domain_layout" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-layout_definition_name"><code>layout_definition_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the layout used to view data for a specific domain. This API can only be invoked from the Amazon Connect admin website.</td>
</tr>
<tr>
    <td><a href="#delete_domain_layout"><CopyableCode code="delete_domain_layout" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-layout_definition_name"><code>layout_definition_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the layout used to view data for a specific domain. This API can only be invoked from the Amazon Connect admin website.</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the domain.</td>
</tr>
<tr id="parameter-layout_definition_name">
    <td><CopyableCode code="layout_definition_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the layout.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of objects returned per page.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>Identifies the next page of results to return.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_domain_layout"
    values={[
        { label: 'get_domain_layout', value: 'get_domain_layout' },
        { label: 'list_domain_layouts', value: 'list_domain_layouts' }
    ]}
>
<TabItem value="get_domain_layout">

Gets the layout to view data for a specific domain. This API can only be invoked from the Amazon Connect admin website.

```sql
SELECT
created_at,
description,
display_name,
is_default,
last_updated_at,
layout,
layout_definition_name,
layout_type,
tags,
version
FROM aws.customer_profiles.domain_layouts
WHERE domain_name = '{{ domain_name }}' -- required
AND layout_definition_name = '{{ layout_definition_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_domain_layouts">

Lists the existing layouts that can be used to view data for a specific domain. This API can only be invoked from the Amazon Connect admin website.

```sql
SELECT
created_at,
description,
display_name,
is_default,
last_updated_at,
layout_definition_name,
layout_type,
tags
FROM aws.customer_profiles.domain_layouts
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_domain_layout"
    values={[
        { label: 'create_domain_layout', value: 'create_domain_layout' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_domain_layout">

Creates the layout to view data for a specific domain. This API can only be invoked from the Amazon Connect admin website.

```sql
INSERT INTO aws.customer_profiles.domain_layouts (
Description,
DisplayName,
IsDefault,
LayoutType,
Layout,
Tags,
domain_name,
layout_definition_name,
region
)
SELECT 
'{{ Description }}',
'{{ DisplayName }}' /* required */,
{{ IsDefault }},
'{{ LayoutType }}' /* required */,
'{{ Layout }}',
'{{ Tags }}',
'{{ domain_name }}',
'{{ layout_definition_name }}',
'{{ region }}'
RETURNING
created_at,
description,
display_name,
is_default,
last_updated_at,
layout,
layout_definition_name,
layout_type,
tags,
version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: domain_layouts
  props:
    - name: domain_name
      value: "{{ domain_name }}"
      description: Required parameter for the domain_layouts resource.
    - name: layout_definition_name
      value: "{{ layout_definition_name }}"
      description: Required parameter for the domain_layouts resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the domain_layouts resource.
    - name: Description
      value: "{{ Description }}"
    - name: DisplayName
      value: "{{ DisplayName }}"
    - name: IsDefault
      value: {{ IsDefault }}
    - name: LayoutType
      value: "{{ LayoutType }}"
      valid_values: ['PROFILE_EXPLORER']
    - name: Layout
      value: "{{ Layout }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_domain_layout"
    values={[
        { label: 'update_domain_layout', value: 'update_domain_layout' }
    ]}
>
<TabItem value="update_domain_layout">

Updates the layout used to view data for a specific domain. This API can only be invoked from the Amazon Connect admin website.

```sql
UPDATE aws.customer_profiles.domain_layouts
SET 
Description = '{{ Description }}',
DisplayName = '{{ DisplayName }}',
IsDefault = {{ IsDefault }},
LayoutType = '{{ LayoutType }}',
Layout = '{{ Layout }}'
WHERE 
domain_name = '{{ domain_name }}' --required
AND layout_definition_name = '{{ layout_definition_name }}' --required
AND region = '{{ region }}' --required
RETURNING
created_at,
description,
display_name,
is_default,
last_updated_at,
layout,
layout_definition_name,
layout_type,
tags,
version;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_domain_layout"
    values={[
        { label: 'delete_domain_layout', value: 'delete_domain_layout' }
    ]}
>
<TabItem value="delete_domain_layout">

Deletes the layout used to view data for a specific domain. This API can only be invoked from the Amazon Connect admin website.

```sql
DELETE FROM aws.customer_profiles.domain_layouts
WHERE domain_name = '{{ domain_name }}' --required
AND layout_definition_name = '{{ layout_definition_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
