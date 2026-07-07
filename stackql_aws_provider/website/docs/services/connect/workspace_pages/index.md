--- 
title: workspace_pages
hide_title: false
hide_table_of_contents: false
keywords:
  - workspace_pages
  - connect
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

Creates, updates, deletes, gets or lists a <code>workspace_pages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workspace_pages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.workspace_pages" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_workspace_pages"
    values={[
        { label: 'list_workspace_pages', value: 'list_workspace_pages' }
    ]}
>
<TabItem value="list_workspace_pages">

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
    <td><CopyableCode code="InputData" /></td>
    <td><code>string</code></td>
    <td>A JSON string containing input parameters passed to the view when the page is rendered.</td>
</tr>
<tr>
    <td><CopyableCode code="Page" /></td>
    <td><code>string</code></td>
    <td>The page identifier. System pages include HOME and AGENT_EXPERIENCE. (pattern: &lt;code&gt;^(?!\\.$)(?!\\.\\.$)&#91;\\p&#123;L&#125;\\p&#123;Z&#125;\\p&#123;N&#125;\\-_.:=@'|&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the view associated with this page.</td>
</tr>
<tr>
    <td><CopyableCode code="Slug" /></td>
    <td><code>string</code></td>
    <td>The URL-friendly identifier for the page. (pattern: &lt;code&gt;^$|^&#91;\\p&#123;L&#125;\\p&#123;Z&#125;\\p&#123;N&#125;\\-_.:=@'|&#93;&#123;3,&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#list_workspace_pages"><CopyableCode code="list_workspace_pages" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the page configurations in a workspace, including the views assigned to each page.</td>
</tr>
<tr>
    <td><a href="#create_workspace_page"><CopyableCode code="create_workspace_page" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceArn"><code>ResourceArn</code></a></td>
    <td></td>
    <td>Associates a view with a page in a workspace, defining what users see when they navigate to that page.</td>
</tr>
<tr>
    <td><a href="#update_workspace_page"><CopyableCode code="update_workspace_page" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the configuration of a page in a workspace, including the associated view and input data.</td>
</tr>
<tr>
    <td><a href="#delete_workspace_page"><CopyableCode code="delete_workspace_page" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-workspace_id"><code>workspace_id</code></a>, <a href="#parameter-page"><code>page</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the association between a view and a page in a workspace. The page will display the default view after deletion.</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>string</code></td>
    <td>The page identifier.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-workspace_id">
    <td><CopyableCode code="workspace_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the workspace.</td>
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
    defaultValue="list_workspace_pages"
    values={[
        { label: 'list_workspace_pages', value: 'list_workspace_pages' }
    ]}
>
<TabItem value="list_workspace_pages">

Lists the page configurations in a workspace, including the views assigned to each page.

```sql
SELECT
InputData,
Page,
ResourceArn,
Slug
FROM aws.connect.workspace_pages
WHERE instance_id = '{{ instance_id }}' -- required
AND workspace_id = '{{ workspace_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_workspace_page"
    values={[
        { label: 'create_workspace_page', value: 'create_workspace_page' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_workspace_page">

Associates a view with a page in a workspace, defining what users see when they navigate to that page.

```sql
INSERT INTO aws.connect.workspace_pages (
ResourceArn,
Page,
Slug,
InputData,
instance_id,
workspace_id,
region
)
SELECT 
'{{ ResourceArn }}' /* required */,
'{{ Page }}',
'{{ Slug }}',
'{{ InputData }}',
'{{ instance_id }}',
'{{ workspace_id }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workspace_pages
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the workspace_pages resource.
    - name: workspace_id
      value: "{{ workspace_id }}"
      description: Required parameter for the workspace_pages resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the workspace_pages resource.
    - name: ResourceArn
      value: "{{ ResourceArn }}"
    - name: Page
      value: "{{ Page }}"
    - name: Slug
      value: "{{ Slug }}"
    - name: InputData
      value: "{{ InputData }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_workspace_page"
    values={[
        { label: 'update_workspace_page', value: 'update_workspace_page' }
    ]}
>
<TabItem value="update_workspace_page">

Updates the configuration of a page in a workspace, including the associated view and input data.

```sql
UPDATE aws.connect.workspace_pages
SET 
NewPage = '{{ NewPage }}',
ResourceArn = '{{ ResourceArn }}',
Slug = '{{ Slug }}',
InputData = '{{ InputData }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND workspace_id = '{{ workspace_id }}' --required
AND page = '{{ page }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_workspace_page"
    values={[
        { label: 'delete_workspace_page', value: 'delete_workspace_page' }
    ]}
>
<TabItem value="delete_workspace_page">

Removes the association between a view and a page in a workspace. The page will display the default view after deletion.

```sql
DELETE FROM aws.connect.workspace_pages
WHERE instance_id = '{{ instance_id }}' --required
AND workspace_id = '{{ workspace_id }}' --required
AND page = '{{ page }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
