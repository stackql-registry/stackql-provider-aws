--- 
title: dashboards
hide_title: false
hide_table_of_contents: false
keywords:
  - dashboards
  - bcm_dashboards
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

Creates, updates, deletes, gets or lists a <code>dashboards</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dashboards" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bcm_dashboards.dashboards" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_dashboard"
    values={[
        { label: 'get_dashboard', value: 'get_dashboard' },
        { label: 'list_dashboards', value: 'list_dashboards' }
    ]}
>
<TabItem value="get_dashboard">

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
    <td>The name of the retrieved dashboard. (pattern: &lt;code&gt;(?!.* &#123;2&#125;)&#91;a-zA-Z&#93;&#91;a-zA-Z0-9 _-&#93;&#123;0,48&#125;&#91;a-zA-Z0-9_-&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the retrieved dashboard. (pattern: &lt;code&gt;arn:aws&#91;-a-z0-9&#93;*:bcm-dashboards::&#91;0-9&#93;&#123;12&#125;:dashboard/(\*|&#91;-a-z0-9&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the dashboard was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the retrieved dashboard. (pattern: &lt;code&gt;(?!.* &#123;2&#125;)&#91; a-zA-Z0-9.,!?;:@#$%&\-_/\\&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>Indicates the dashboard type. (CUSTOM)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the dashboard was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="widgets" /></td>
    <td><code>array</code></td>
    <td>An array of widget configurations that make up the dashboard.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_dashboards">

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
    <td>The name of the referenced dashboard. (pattern: &lt;code&gt;(?!.* &#123;2&#125;)&#91;a-zA-Z&#93;&#91;a-zA-Z0-9 _-&#93;&#123;0,48&#125;&#91;a-zA-Z0-9_-&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the referenced dashboard. (pattern: &lt;code&gt;arn:aws&#91;-a-z0-9&#93;*:bcm-dashboards::&#91;0-9&#93;&#123;12&#125;:dashboard/(\*|&#91;-a-z0-9&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the dashboard was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the referenced dashboard. (pattern: &lt;code&gt;(?!.* &#123;2&#125;)&#91; a-zA-Z0-9.,!?;:@#$%&\-_/\\&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The dashboard type. (CUSTOM)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the dashboard was last modified.</td>
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
    <td><a href="#get_dashboard"><CopyableCode code="get_dashboard" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the configuration and metadata of a specified dashboard, including its widgets and layout settings.</td>
</tr>
<tr>
    <td><a href="#list_dashboards"><CopyableCode code="list_dashboards" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of all dashboards in your account.</td>
</tr>
<tr>
    <td><a href="#create_dashboard"><CopyableCode code="create_dashboard" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-widgets"><code>widgets</code></a></td>
    <td></td>
    <td>Creates a new dashboard that can contain multiple widgets displaying cost and usage data. You can add custom widgets or use predefined widgets, arranging them in your preferred layout.</td>
</tr>
<tr>
    <td><a href="#update_dashboard"><CopyableCode code="update_dashboard" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Updates an existing dashboard's properties, including its name, description, and widget configurations.</td>
</tr>
<tr>
    <td><a href="#delete_dashboard"><CopyableCode code="delete_dashboard" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specified dashboard. This action cannot be undone.</td>
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

## `SELECT` examples

<Tabs
    defaultValue="get_dashboard"
    values={[
        { label: 'get_dashboard', value: 'get_dashboard' },
        { label: 'list_dashboards', value: 'list_dashboards' }
    ]}
>
<TabItem value="get_dashboard">

Retrieves the configuration and metadata of a specified dashboard, including its widgets and layout settings.

```sql
SELECT
name,
arn,
created_at,
description,
type_,
updated_at,
widgets
FROM aws.bcm_dashboards.dashboards
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_dashboards">

Returns a list of all dashboards in your account.

```sql
SELECT
name,
arn,
created_at,
description,
type_,
updated_at
FROM aws.bcm_dashboards.dashboards
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_dashboard"
    values={[
        { label: 'create_dashboard', value: 'create_dashboard' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_dashboard">

Creates a new dashboard that can contain multiple widgets displaying cost and usage data. You can add custom widgets or use predefined widgets, arranging them in your preferred layout.

```sql
INSERT INTO aws.bcm_dashboards.dashboards (
name,
description,
widgets,
resourceTags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ widgets }}' /* required */,
'{{ resourceTags }}',
'{{ region }}'
RETURNING
arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: dashboards
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the dashboards resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the dashboard. The name must be unique within your account.
    - name: description
      value: "{{ description }}"
      description: |
        A description of the dashboard's purpose or contents.
    - name: widgets
      description: |
        An array of widget configurations that define the visualizations to be displayed in the dashboard. Each dashboard can contain up to 20 widgets.
      value:
        - id: "{{ id }}"
          title_: "{{ title_ }}"
          description: "{{ description }}"
          width: {{ width }}
          height: {{ height }}
          horizontalOffset: {{ horizontalOffset }}
          configs: "{{ configs }}"
    - name: resourceTags
      description: |
        The tags to apply to the dashboard resource for organization and management.
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_dashboard"
    values={[
        { label: 'update_dashboard', value: 'update_dashboard' }
    ]}
>
<TabItem value="update_dashboard">

Updates an existing dashboard's properties, including its name, description, and widget configurations.

```sql
UPDATE aws.bcm_dashboards.dashboards
SET 
arn = '{{ arn }}',
name = '{{ name }}',
description = '{{ description }}',
widgets = '{{ widgets }}'
WHERE 
region = '{{ region }}' --required
AND arn = '{{ arn }}' --required
AND name = '{{ name }}' --required
RETURNING
arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_dashboard"
    values={[
        { label: 'delete_dashboard', value: 'delete_dashboard' }
    ]}
>
<TabItem value="delete_dashboard">

Deletes a specified dashboard. This action cannot be undone.

```sql
DELETE FROM aws.bcm_dashboards.dashboards
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
